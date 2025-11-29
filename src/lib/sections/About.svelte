<script>
    import { fly } from "svelte/transition";
    import { inView, staggerDelay } from "$lib/utils/animations.js";
    import SectionSubtitle from "$lib/components/SectionSubtitle.svelte";
    import styles from "$lib/utils/styles.js";

    let showText = $state(false);
    let showArrow = $state(false);
</script>

<section class="{styles.paddings} relative z-10" id="about">
    <div class="{styles.innerWidth} mx-auto {styles.flexCenter} flex-col">
        <SectionSubtitle title="| Tietoa" textStyles="text-center" />
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
                    class="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white leading-relaxed"
                >
                    <span class="font-serif font-bold text-white">
                        Esan verhoilu
                    </span>
                    tarjoaa ammattitaitoisia verhoilupalveluja
                    <span class="font-serif font-bold text-white">
                        Lapualla
                    </span>, Karhunkylässä. Laadukkaan kädenjäljen perustana on
                    verhoilijan ja puusepän ammattitaito ja
                    <span class="font-serif font-bold text-white">
                        kymmenien vuosien työkokemus aloilta.
                    </span>
                    Esan verhoilu tarjoaa<span
                        class="font-serif font-bold text-white"
                    >
                        tyylikkään verhoilun
                    </span>
                    sekä kotien että julkisten tilojen huonekaluille. Myös
                    <span class="font-serif font-bold text-white">
                        ajoneuvojen penkit ja veneiden sisustat
                    </span>
                    saavat uuden ilmeen Esan verhoilussa. Verhoilut suunnitellaan
                    ja toteutetaan aina asiakkaan tarpeiden ja toiveiden mukaan.
                </p>
            {/if}
        </div>

        <!-- Workshop Images -->
        <div
            use:inView={{
                onEnter: () => (showArrow = true),
                threshold: 0.25,
                once: false,
            }}
        >
            {#if showArrow}
                <div
                    transition:fly={{ y: 100, duration: 1000, delay: 200 }}
                    class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
                >
                    <div
                        class="relative overflow-hidden rounded-xl border border-white/10"
                    >
                        <img
                            src="/new_place.jpeg"
                            alt="Esan verhoilu työpaja"
                            class="w-full h-[300px] object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
                        />
                    </div>
                    <div
                        class="relative overflow-hidden rounded-xl border border-white/10"
                    >
                        <img
                            src="/new_place2.jpeg"
                            alt="Esan verhoilu tilat"
                            class="w-full h-[300px] object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
                        />
                    </div>
                </div>
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
