<script>
    import { fly, scale } from "svelte/transition";
    import { inView } from "$lib/utils/animations.js";
    import styles from "$lib/utils/styles.js";
    import SectionTitle from "$lib/components/SectionTitle.svelte";
    import SectionSubtitle from "$lib/components/SectionSubtitle.svelte";

    let showText = $state(false);
    let showImage = $state(false);
</script>

<section class="{styles.paddings} relative z-10" id="pricing">
    <div class="{styles.innerWidth} mx-auto flex flex-col">
        <SectionSubtitle title="| Hinta" textStyles="text-center" />
        <SectionTitle title="HINTA-ARVIO" textStyles="text-center" />
        <div
            use:inView={{
                onEnter: () => (showText = true),
                threshold: 0.25,
                once: false,
            }}
        >
            {#if showText}
                <div
                    transition:fly={{ y: 100, duration: 1000, delay: 300 }}
                    class="relative mt-[68px] flex"
                >
                    <div
                        class="mt-[25px] flex flex-wrap justify-between mb-0 gap-[24px] mt-[8px] font-normal sm:text-[30px] text-[20px] text-center text-secondary-white"
                    >
                        Jokaisen verhoiltavan tuotteen hinta on arvioitava
                        erikseen. Työn lopullinen hinta koostu tarvittavista
                        materiaaleista (esim kangas, pehmusteet jne),
                        verhoiltavan tuotteen kunnosta ja työtunneista.
                        Parhaimman hinta-arvion saatte lähettämällä
                        verhoiltavasta tuotteesta valokuvan puhelimitse,
                        sähköpostitse tai facebookin kautta Esan verhoiluun.
                        <br /><br />
                        Lapuan ja sen lähikuntien alueella tulen tarvittaessa paikan
                        päälle tekemään työn suunnitelmaa ja hinta-arviota.
                    </div>
                </div>
            {/if}
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
                    transition:scale={{ duration: 1000 }}
                    class="flex-1 {styles.flexCenter}"
                >
                    <img
                        alt="singer"
                        src="Singer.png"
                        class="w-[25%] h-[25%] object-contain brightness-70"
                    />
                </div>
            {/if}
        </div>
    </div>
</section>
