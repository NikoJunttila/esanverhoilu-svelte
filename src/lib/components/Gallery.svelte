<script>
    import { fade } from "svelte/transition";
    import { inView, staggerDelay } from "$lib/utils/animations.js";

    let { galleryImages } = $props();

    let slideNumber = $state(0);
    let openModal = $state(false);
    let visibleItems = $state([]);

    function handleOpenModal(index) {
        slideNumber = index;
        openModal = true;
    }

    function handleCloseModal() {
        openModal = false;
    }

    function prevSlide() {
        slideNumber =
            slideNumber === 0 ? galleryImages.length - 1 : slideNumber - 1;
    }

    function nextSlide() {
        slideNumber =
            slideNumber + 1 === galleryImages.length ? 0 : slideNumber + 1;
    }

    function handleInView(index) {
        if (!visibleItems.includes(index)) {
            visibleItems = [...visibleItems, index];
        }
    }
</script>

<div>
    {#if openModal}
        <div class="sliderWrap">
            <button
                class="btnClose"
                onclick={handleCloseModal}
                aria-label="Close"
            >
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>
            <button class="btnPrev" onclick={prevSlide} aria-label="Previous">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>
            <button class="btnNext" onclick={nextSlide} aria-label="Next">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>
            <div class="fullScreenImage">
                <img src={galleryImages[slideNumber].img} alt="full" />
            </div>
        </div>
    {/if}
    <div class="galleryWrap">
        {#each galleryImages as slide, index}
            <div
                use:inView={{
                    onEnter: () => handleInView(index),
                    threshold: 0.25,
                    once: false,
                }}
            >
                {#if visibleItems.includes(index)}
                    <div
                        transition:fade={{
                            duration: 750,
                            delay: staggerDelay(index, 0, 400),
                        }}
                        class="single"
                        onclick={() => handleOpenModal(index)}
                        onkeydown={(e) =>
                            e.key === "Enter" || e.key === " "
                                ? handleOpenModal(index)
                                : null}
                        role="button"
                        tabindex="0"
                    >
                        <img src={slide.img} alt="gallerypics" />
                    </div>
                {/if}
            </div>
        {/each}
    </div>
</div>
