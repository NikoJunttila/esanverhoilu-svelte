<script>
    import { fly } from "svelte/transition";
    import { inView } from "$lib/utils/animations.js";
    import styles from "$lib/utils/styles.js";
    import { startingFeatures } from "$lib/constants/index.js";
    import StartSteps from "$lib/components/StartSteps.svelte";
    import TitleText from "$lib/components/TitleText.svelte";
    import TypingText from "$lib/components/TypingText.svelte";

    let showImage = $state(false);
    let showContent = $state(false);
</script>

<section class="{styles.paddings} relative z-10">
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
                        class="w-[90%] h-[90%] object-contain rounded-[60px]"
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
                    <TypingText title="| palvelut pähkinänkuoressa" />
                    <TitleText title="Palvelut" />

                    <div
                        class="mt-[31px] flex flex-col max-w-[370px] gap-[24px]"
                    >
                        {#each startingFeatures as feature, index}
                            <StartSteps number={index + 1} text={feature} />
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    </div>
</section>
