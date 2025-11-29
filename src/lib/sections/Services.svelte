<script>
    import { fade, fly } from "svelte/transition";
    import styles from "$lib/utils/styles.js";
    import SectionTitle from "$lib/components/SectionTitle.svelte";
    import SectionSubtitle from "$lib/components/SectionSubtitle.svelte";

    const services = [
        {
            icon: "🪑",
            title: "Huonekaluverhoilut",
            description:
                "Verhoilut tyylihuonekaluista moderneihin kalusteisiin. Tuomme uuden elämän vanhoihin huonekaluihin ja toteutamme myös täysin uusia verhoiluja.",
        },
        {
            icon: "🏍️",
            title: "Ajoneuvojen verhoilut",
            description:
                "Moottoripyörän, mopon ja moottorikelkan penkkien verhoilut. Myös veneiden sisustukset ja muut erikoiskohteet.",
        },
        {
            icon: "🔨",
            title: "Puusepäntyöt",
            description:
                "Pienimuotoiset puusepäntyöt verhoilun yhteydessä. Korjaukset ja kunnostukset osana verhoilutyötä.",
        },
    ];
</script>

<section class="{styles.paddings} relative z-10" id="services">
    <div class="{styles.innerWidth} mx-auto flex flex-col">
        <!-- Header -->
        <div class="text-center mb-16">
            <SectionSubtitle title="| Palvelut" textStyles="text-center" />
            <SectionTitle title="Mitä tarjoamme" textStyles="text-center" />
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {#each services as service, index}
                <div
                    in:fade={{ duration: 600, delay: index * 150 }}
                    class="group p-8 bg-secondary-dark/50 rounded-2xl border border-white/10 hover:border-accent-gold/50 transition-all duration-300 hover:scale-105"
                >
                    <div
                        class="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300"
                    >
                        {service.icon}
                    </div>
                    <h3
                        class="font-serif text-2xl text-accent-gold mb-4 group-hover:text-white transition-colors"
                    >
                        {service.title}
                    </h3>
                    <p class="text-secondary-white leading-relaxed">
                        {service.description}
                    </p>
                </div>
            {/each}
        </div>

        <!-- Image Section -->
        <div
            in:fade={{ duration: 800, delay: 500 }}
            class="relative rounded-2xl overflow-hidden border border-white/10"
        >
            <div
                class="absolute bg-gradient-to-t from-primary-dark via-transparent to-transparent z-10"
            ></div>
            <img
                src="/esa.jpg"
                alt="Esan verhoilu - ammattitaitoinen verhoilija työssään"
                class="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div class="absolute bottom-0 left-0 right-0 p-8 z-20 text-center">
                <p
                    class="font-serif text-2xl md:text-3xl text-white mb-2 italic"
                >
                    "Kymmenien vuosien kokemus takaa laadukkaan lopputuloksen"
                </p>
                <p class="text-accent-gold text-lg">- Esa Junttila</p>
            </div>
        </div>
    </div>
</section>
