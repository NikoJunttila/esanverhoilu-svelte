<script>
    import { fly } from "svelte/transition";
    import { inView, animations } from "$lib/utils/animations.js";
    import styles from "$lib/utils/styles.js";

    let showTitle1 = $state(false);
    let showTitle2 = $state(false);
    let showImage = $state(false);
</script>

<section class="{styles.yPaddings} sm:pl-16 pl-6">
    <div class="{styles.innerWidth} mx-auto flex flex-col">
        <div class="flex justify-center items-center flex-col relative z-10">
            <div
                use:inView={{
                    onEnter: () => (showTitle1 = true),
                    threshold: 0.25,
                    once: false,
                }}
            >
                {#if showTitle1}
                    <h1
                        transition:fly={animations.textFadeUp(1100)}
                        class={styles.heroHeading}
                    >
                        Esan verhoilu
                    </h1>
                {/if}
            </div>
            <div
                use:inView={{
                    onEnter: () => (showTitle2 = true),
                    threshold: 0.25,
                    once: false,
                }}
            >
                {#if showTitle2}
                    <div
                        transition:fly={animations.textFadeUp(1200)}
                        class="flex flex-row justify-center items-center"
                    >
                        <h1 class="{styles.heroHeadingSmall} mb-8">
                            verhoilija, puuseppä
                        </h1>
                    </div>
                {/if}
            </div>
        </div>

        <div
            use:inView={{
                onEnter: () => (showImage = true),
                threshold: 0.25,
                once: false,
            }}
        >
            {#if showImage}
                <div
                    transition:fly={animations.slideIn("right", 200)}
                    class="relative w-full md:-mt-[20px] -mt-[12px]"
                >
                    <div
                        class="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px] brightness-50"
                    ></div>
                    <img
                        src="/hero.jpeg"
                        alt="cover"
                        class="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative brightness-50"
                    />
                </div>
            {/if}
        </div>
    </div>
</section>
