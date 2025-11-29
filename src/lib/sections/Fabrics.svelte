<script>
    import { fly } from "svelte/transition";
    import { inView } from "$lib/utils/animations.js";
    import styles from "$lib/utils/styles.js";
    import SectionTitle from "$lib/components/SectionTitle.svelte";
    import SectionSubtitle from "$lib/components/SectionSubtitle.svelte";

    let showContent = $state(false);
    let showImage = $state(false);
</script>

<section class="{styles.paddings} relative z-10" id="fabrics">
    <div class="{styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8">
        <div
            use:inView={{
                onEnter: () => (showContent = true),
                threshold: 0.25,
                once: false,
            }}
        >
            {#if showContent}
                <div
                    transition:fly={{ x: 100, duration: 1000, delay: 200 }}
                    class="flex-[0.95] flex justify-center flex-col"
                >
                    <SectionSubtitle title="| Kankaat" />
                    <SectionTitle title="Kankaat" />
                    <div
                        class="mt-[25px] flex flex-wrap justify-between gap-[24px] mt-[8px] font-normal sm:text-[28px] text-[20px] text-center text-secondary-white"
                    >
                        Jotta verhoiltavasta tuotteesta tulisi täydellisen
                        onnistunut, on Esan verhoilulle tärkeää tehdä asiakkaan
                        kanssa yhteistyötä jo sunnitteluvaiheessa. Esimerkiksi
                        kankaan valintaa helpottaa Esan verhoomosta löytyvät
                        kangasmallipalat ja lisäksi alta löytyvät linkit eri
                        kangasvalmistajien sivuille. Kankaan ym. verhoiluun
                        tarvittavan materiaalin hankinnan suorittaa yleensä Esan
                        verhoilu tai vaihtoehtoisesti asiakas itse, jos asiakas
                        näin haluaa.
                    </div>
                    <div class="text-blue-600 text-center text-[20px]">
                        <a href="http://www.Annala.fi">Annala.fi</a><br />
                        <a href="http://www.Kangastukku.com">Kangastukku.com</a
                        ><br />
                        <a href="http://www.Lauritzon.fi">Lauritzon.fi</a><br />
                        <a href="http://www.Kankaita.com">Kankaita.com</a><br />
                        <a href="http://www.Orientoccident.fi"
                            >Orientoccident.fi</a
                        ><br />
                        <a href="http://www.sisustusMuovikum.fi"
                            >sisustusMuovikum.fi</a
                        ><br />
                        <a href="http://www.Patjajapeite.com"
                            >Patjajapeite.com</a
                        >
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
                    transition:fly={{ x: -100, duration: 1000, delay: 200 }}
                    class="flex-1 {styles.flexCenter}"
                >
                    <img
                        src="/kankaat.png"
                        alt="get-started"
                        class="w-[90%] h-[90%] object-contain brightness-50"
                    />
                </div>
            {/if}
        </div>
    </div>
</section>
