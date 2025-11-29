<script>
    import { fly } from "svelte/transition";
    import { inView } from "$lib/utils/animations.js";
    import styles from "$lib/utils/styles.js";
    import { startingFeatures } from "$lib/constants/index.js";
    import ServiceStep from "$lib/components/ServiceStep.svelte";
    import SectionTitle from "$lib/components/SectionTitle.svelte";
    import SectionSubtitle from "$lib/components/SectionSubtitle.svelte";

    let showImage = $state(false);
    let showContent = $state(false);
</script>

<section class="{styles.paddings} relative z-10" id="services">
    <div class="{styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8">
        <div
            use:inView={{
                onEnter: () => (showImage = true),
                threshold: 0.25,
                once: false,
            }}
        >
            {#if showImage}
                <div
                    transition:fly={{ x: -100, duration: 1000, delay: 200 }}
                    class="flex-1 {styles.flexCenter}"
                >
                    <img
                        src="/esa.jpg"
                        alt="esa"
                        class="w-[90%] h-[90%] object-cover rounded-2xl border border-white/10 opacity-90"
                    />
                </div>
            {/if}
        </div>
        <div
            use:inView={{
                onEnter: () => (showContent = true),
                threshold: 0.25,
                once: false,
            }}
        >
            {#if showContent}
                <div
                    transition:fly={{ x: -100, duration: 1000, delay: 200 }}
                    class="flex-[0.75] flex justify-center flex-col"
                >
                    <SectionSubtitle title="| palvelut pähkinänkuoressa" />
                    <SectionTitle title="Palvelut" />

                    <div
                        class="mt-[31px] flex flex-col max-w-[370px] gap-[24px]"
                    >
                        {#each startingFeatures as feature, index}
                            <ServiceStep number={index + 1} text={feature} />
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    </div>
</section>
