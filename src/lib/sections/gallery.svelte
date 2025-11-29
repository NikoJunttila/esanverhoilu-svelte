<script>
    import { fade, scale } from "svelte/transition";
    import styles from "$lib/utils/styles.js";
    import SectionTitle from "$lib/components/SectionTitle.svelte";
    import SectionSubtitle from "$lib/components/SectionSubtitle.svelte";

    const galleryImages = [
        { img: "/gallery1.jpg" },
        { img: "/gallery2.jpg" },
        { img: "/gallery3.jpg" },
        { img: "/gallery4.jpg" },
        { img: "/gallery5.jpg" },
        { img: "/gallery6.jpg" },
        { img: "/gallery8.jpg" },
        { img: "/gallery9.jpg" },
        { img: "/gallery10.jpg" },
    ];

    let selectedImage = $state(null);
    let currentIndex = $state(0);

    function openLightbox(index) {
        currentIndex = index;
        selectedImage = galleryImages[index].img;
    }

    function closeLightbox() {
        selectedImage = null;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        selectedImage = galleryImages[currentIndex].img;
    }

    function prevImage() {
        currentIndex =
            (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        selectedImage = galleryImages[currentIndex].img;
    }
</script>

<section class={styles.paddings} id="gallery">
    <div class="{styles.innerWidth} mx-auto flex flex-col">
        <SectionSubtitle title="| Galleria" textStyles="text-center" />
        <SectionTitle
            title="Kuvia aikaisemmista töistä"
            textStyles="text-center"
        />

        <!-- Gallery Grid -->
        <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each galleryImages as image, index}
                <button
                    in:fade={{ duration: 600, delay: index * 100 }}
                    onclick={() => openLightbox(index)}
                    class="group relative overflow-hidden rounded-lg aspect-square cursor-pointer bg-secondary-dark"
                >
                    <img
                        src={image.img}
                        alt="Gallery image {index + 1}"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        style="background: none;"
                    />
                    <div
                        class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex items-center justify-center"
                    >
                        <svg
                            class="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                        </svg>
                    </div>
                </button>
            {/each}
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

        <!-- Previous Button -->
        <button
            onclick={(e) => {
                e.stopPropagation();
                prevImage();
            }}
            class="absolute left-4 text-white hover:text-accent-gold transition-colors"
            aria-label="Previous image"
        >
            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
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
                alt="Gallery image"
                class="w-full h-full object-contain"
                style="background: none;"
            />
        </div>

        <!-- Next Button -->
        <button
            onclick={(e) => {
                e.stopPropagation();
                nextImage();
            }}
            class="absolute right-4 text-white hover:text-accent-gold transition-colors"
            aria-label="Next image"
        >
            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>

        <!-- Image Counter -->
        <div
            class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full"
        >
            {currentIndex + 1} / {galleryImages.length}
        </div>
    </div>
{/if}
