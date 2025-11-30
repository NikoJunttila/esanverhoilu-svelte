<script>
  import { fade, scale } from "svelte/transition";
  import styles from "$lib/utils/styles.js";
  import { exploreWorlds } from "$lib/constants/index.js";
  import ShowcaseCard from "$lib/components/ShowcaseCard.svelte";
  import SectionTitle from "$lib/components/SectionTitle.svelte";
  import SectionSubtitle from "$lib/components/SectionSubtitle.svelte";

  let selectedImage = $state(null);
  let scrollContainer = $state(null);
  let canScrollLeft = $state(false);
  let canScrollRight = $state(true);

  function openLightbox(imgUrl) {
    selectedImage = imgUrl;
  }

  function closeLightbox() {
    selectedImage = null;
  }

  function checkScroll() {
    if (scrollContainer) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      canScrollLeft = scrollLeft > 0;
      // Use a small buffer (1px) to account for potential rounding errors
      canScrollRight = Math.ceil(scrollLeft + clientWidth) < scrollWidth;
    }
  }

  $effect(() => {
    const element = scrollContainer;
    if (element) {
      checkScroll();
      element.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);

      return () => {
        element.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  });

  function scroll(direction) {
    if (scrollContainer) {
      const scrollAmount = 400;
      scrollContainer.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  }
</script>

<section class="{styles.paddings} relative z-10" id="showcase">
  <div class="{styles.innerWidth} mx-auto flex flex-col">
    <SectionSubtitle title="| Esittely" textStyles="text-center" />
    <SectionTitle title="Esittely töitä" textStyles="text-center" />

    <div class="relative mt-[50px]">
      <!-- Scroll Buttons -->
      {#if canScrollLeft}
        <button
          onclick={() => scroll("left")}
          transition:fade={{ duration: 200 }}
          class="mr-2 absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-primary-dark/80 text-white hover:bg-accent-gold hover:text-white transition-all duration-300 -ml-4 lg:-ml-12 hidden md:block border border-white/10"
          aria-label="Scroll left"
        >
          <svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      {/if}

      {#if canScrollRight}
        <button
          onclick={() => scroll("right")}
          transition:fade={{ duration: 200 }}
          class="ml-2 absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-primary-dark/80 text-white hover:bg-accent-gold hover:text-white transition-all duration-300 -mr-4 lg:-mr-12 hidden md:block border border-white/10"
          aria-label="Scroll right"
        >
          <svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      {/if}

      <!-- Scroll Container -->
      <div
        bind:this={scrollContainer}
        class="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
        style="scrollbar-width: none; -ms-overflow-style: none;"
      >
        {#each exploreWorlds as world, index}
          <div class="min-w-[300px] md:min-w-[400px] h-[500px] snap-center">
            <ShowcaseCard
              {...world}
              {index}
              handleImageClick={() => openLightbox(world.imgUrl)}
            />
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Lightbox Modal -->
{#if selectedImage}
  <div
    transition:fade={{ duration: 300 }}
    class="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
    onclick={closeLightbox}
    role="dialog"
    aria-modal="true"
  >
    <!-- Close Button -->
    <button
      onclick={closeLightbox}
      class="absolute top-4 right-4 text-white hover:text-accent-gold transition-colors z-10"
      aria-label="Close"
    >
      <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <!-- Image -->
    <div
      onclick={(e) => e.stopPropagation()}
      class="max-w-6xl max-h-[90vh] w-full"
    >
      <img
        in:scale={{ duration: 300, start: 0.8 }}
        src={selectedImage}
        alt="Showcase image"
        class="w-full h-full object-contain"
        style="background: none;"
      />
    </div>
  </div>
{/if}
