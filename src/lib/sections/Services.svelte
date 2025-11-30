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
          class="group p-8 bg-secondary-dark/70 rounded-2xl border border-white/10 hover:border-accent-gold/50 transition-all duration-300 hover:scale-105"
        >
          <h3
            class="p-2 rounded font-serif text-2xl !text-accent-gold mb-4 group-hover:text-white transition-colors"
          >
            {service.title}
          </h3>
          <p class="p-2 rounded !text-white leading-relaxed">
            {service.description}
          </p>
        </div>
      {/each}
    </div>

    <!-- Image Section -->
    <div
      in:fade={{ duration: 800, delay: 500 }}
      class="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] md:aspect-[21/9]"
    >
      <!-- Full-size image -->
      <img
        src="/esa.jpg"
        alt="Esan verhoilu - ammattitaitoinen verhoilija työssään"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <!-- Darker gradient overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
      ></div>

      <!-- Text content -->
      <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
        <div class="max-w-4xl mx-auto text-center">
          <p
            class="font-serif text-xl md:text-2xl lg:text-3xl !text-white mb-3 italic leading-relaxed"
          >
            "Kymmenien vuosien kokemus takaa laadukkaan lopputuloksen"
          </p>
          <p class="!text-accent-gold text-base md:text-lg font-medium">
            - Esa Junttila
          </p>
        </div>
      </div>
    </div>
    <!-- END Image Section -->
  </div>
</section>
