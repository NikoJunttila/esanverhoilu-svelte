<script>
    import { fade } from "svelte/transition";
    import { inView, staggerDelay } from "$lib/utils/animations.js";
    import styles from "$lib/utils/styles.js";

    let { id, imgUrl, index, active, handleClick } = $props();
    let show = $state(false);
</script>

<div
    use:inView={{
        onEnter: () => (show = true),
        threshold: 0.25,
        once: false,
    }}
>
    {#if show}
        <div
            transition:fade={{
                duration: 750,
                delay: staggerDelay(index, 0, 500),
            }}
            class="relative {active === id
                ? 'lg:flex-[3.5] flex-[10]'
                : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer"
            onclick={() => handleClick(id)}
            onkeydown={(e) =>
                e.key === "Enter" || e.key === " " ? handleClick(id) : null}
            role="button"
            tabindex="0"
        >
            <img
                src={imgUrl}
                alt="planet-04"
                class="absolute w-full h-full object-cover rounded-[24px]"
            />
        </div>
    {/if}
</div>
