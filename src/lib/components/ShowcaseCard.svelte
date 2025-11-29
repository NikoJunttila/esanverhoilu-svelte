<script>
    import { fade } from "svelte/transition";
    import { staggerDelay } from "$lib/utils/animations.js";
    import styles from "$lib/utils/styles.js";

    let { id, imgUrl, title, index, handleImageClick } = $props();
</script>

<div class="h-full w-full">
    <button
        transition:fade={{
            duration: 750,
            delay: staggerDelay(index, 0, 200),
        }}
        class="relative w-full h-full overflow-hidden rounded-[24px] cursor-pointer group border border-white/10"
        onclick={handleImageClick}
        aria-label="View {title}"
    >
        <img
            src={imgUrl}
            alt={title}
            class="absolute w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            style="background: none;"
        />

        <!-- Overlay -->
        <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"
        ></div>

        <!-- Content -->
        <div class="absolute inset-0 flex flex-col justify-end p-8">
            <div
                class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
                <h3 class="font-serif font-bold text-2xl text-white mb-2">
                    {title}
                </h3>
                <div
                    class="flex items-center gap-2 text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
                >
                    <span class="text-sm uppercase tracking-wider font-medium"
                        >Katso kuva</span
                    >
                    <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </div>
            </div>
        </div>

        <!-- Zoom Icon (Center) -->
        <div
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
            <div
                class="bg-black/50 p-4 rounded-full backdrop-blur-sm border border-white/20 transform scale-75 group-hover:scale-100 transition-transform duration-300"
            >
                <svg
                    class="w-8 h-8 text-white"
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
        </div>
    </button>
</div>
