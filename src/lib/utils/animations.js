// Animation utilities for Svelte 5
// Replaces svelte-motion with native Svelte transitions and custom actions

/**
 * Viewport intersection observer action
 * Triggers animations when element enters viewport
 * @param {HTMLElement} node
 * @param {{ onEnter?: (entry: IntersectionObserverEntry) => void, onExit?: (entry: IntersectionObserverEntry) => void, threshold?: number, once?: boolean }} options
 */
export function inView(node, options = {}) {
    const { onEnter, onExit, threshold = 0.25, once = false } = options;
    let hasEntered = false;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (!hasEntered || !once) {
                        hasEntered = true;
                        onEnter?.(entry);
                    }
                } else if (!once) {
                    onExit?.(entry);
                }
            });
        },
        { threshold }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}

/**
 * Custom fly transition with spring-like easing
 * @param {HTMLElement} node
 * @param {{ delay?: number, duration?: number, x?: number, y?: number, opacity?: number }} options
 */
export function springFly(node, { delay = 0, duration = 800, x = 0, y = 0, opacity = 0 }) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    const od = +style.opacity;

    return {
        delay,
        duration,
        css: (t) => {
            const eased = spring(t);
            return `
                transform: ${transform} translate(${(1 - eased) * x}px, ${(1 - eased) * y}px);
                opacity: ${od * eased + opacity * (1 - eased)};
            `;
        }
    };
}

/**
 * Spring easing function
 * @param {number} t
 */
function spring(t) {
    return 1 - Math.pow(1 - t, 3) * Math.cos(t * Math.PI * 2);
}

/**
 * Stagger delay calculator for sequential animations
 * @param {number} index
 * @param {number} baseDelay
 * @param {number} staggerAmount
 */
export function staggerDelay(index, baseDelay = 0, staggerAmount = 100) {
    return baseDelay + index * staggerAmount;
}

/**
 * Animation presets matching original motion.js behavior
 */
export const animations = {
    // Navbar slide down from top
    navSlideDown: {
        y: -50,
        duration: 1000,
        delay: 1000
    },

    // Text fade up
    textFadeUp: (delay = 0) => ({
        y: 50,
        duration: 1000,
        delay
    }),

    // Slide in from direction
    slideIn: (direction = 'right', delay = 0) => {
        const config = {
            duration: 1000,
            delay
        };

        if (direction === 'left') return { ...config, x: -100 };
        if (direction === 'right') return { ...config, x: 100 };
        if (direction === 'up') return { ...config, y: 100 };
        if (direction === 'down') return { ...config, y: -100 };

        return config;
    },

    // Fade in from direction
    fadeIn: (direction = 'up', delay = 0, duration = 750) => {
        const config = {
            duration,
            delay,
            opacity: 0
        };

        if (direction === 'left') return { ...config, x: 100 };
        if (direction === 'right') return { ...config, x: -100 };
        if (direction === 'up') return { ...config, y: 100 };
        if (direction === 'down') return { ...config, y: -100 };

        return config;
    },

    // Footer slide up
    footerSlideUp: {
        y: 50,
        duration: 1000,
        delay: 500
    }
};

/**
 * Typewriter transition
 * @param {HTMLElement} node
 * @param {{ speed?: number }} options
 */
export function typewriter(node, { speed = 1 }) {
    const valid = (
        node.childNodes.length === 1 &&
        node.childNodes[0].nodeType === Node.TEXT_NODE
    );

    if (!valid) {
        throw new Error(`This transition only works on elements with a single text node child`);
    }

    const text = node.textContent;
    const duration = text.length / (speed * 0.01);

    return {
        duration,
        tick: (t) => {
            const i = Math.trunc(text.length * t);
            node.textContent = text.slice(0, i);
        }
    };
}
