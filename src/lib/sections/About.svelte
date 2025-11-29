<script>
    import { fly } from "svelte/transition";
    import { inView, staggerDelay } from "$lib/utils/animations.js";
    import TypingText from "$lib/components/TypingText.svelte";
    import styles from "$lib/utils/styles.js";

    let showText = $state(false);
    let showArrow = $state(false);
</script>

<section class="{styles.paddings} relative z-10">
    <div class="gradient-02 z-0"></div>
    <div class="{styles.innerWidth} mx-auto {styles.flexCenter} flex-col">
        <TypingText title="| Tietoa" textStyles="text-center" />
        <div
            use:inView={{
                onEnter: () => (showText = true),
                threshold: 0.25,
                once: false,
            }}
        >
            {#if showText}
                <p
                    transition:fly={{ y: 100, duration: 1000, delay: 200 }}
                    class="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
                >
                    <span class="font-extrabold text-white">
                        Esan verhoilu
                    </span>
                    tarjoaa ammattitaitoisia verhoilupalveluja
                    <span class="font-extrabold text-white"> Lapualla </span>,
                    Karhunkylässä. Laadukkaan kädenjäljen perustana on
                    verhoilijan ja puusepän ammattitaito ja
                    <span class="font-extrabold text-white">
                        kymmenien vuosien työkokemus aloilta.
                    </span>
                    Esan verhoilu tarjoaa<span class="font-extrabold text-white"
                        >tyylikkään verhoilun
                    </span>
                    sekä kotien että julkisten tilojen huonekaluille. Myös
                    <span class="font-extrabold text-white"
                        >ajoneuvojen penkit ja veneiden sisustat
                    </span>
                    saavat uuden ilmeen Esan verhoilussa. Verhoilut suunnitellaan
                    ja toteutetaan aina asiakkaan tarpeiden ja toiveiden mukaan.
                </p>
            {/if}
        </div>
        <div
            use:inView={{
                onEnter: () => (showArrow = true),
                threshold: 0.25,
                once: false,
            }}
        >
            {#if showArrow}
                <img
                    transition:fly={{ y: 100, duration: 1000, delay: 300 }}
                    src="/arrow-down.svg"
                    alt="arrow down"
                    class="w-[18px] h-[28px] object-contain mt-[28px]"
                />
            {/if}
        </div>
    </div>
</section>
