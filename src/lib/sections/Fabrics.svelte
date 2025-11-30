<script>
  import { fly } from "svelte/transition";
  import { inView } from "$lib/utils/animations.js";
  import styles from "$lib/utils/styles.js";
  import SectionTitle from "$lib/components/SectionTitle.svelte";
  import SectionSubtitle from "$lib/components/SectionSubtitle.svelte";
  import { fabricSuppliers } from "$lib/constants/index.js";

  let showContent = $state(false);
  let showImage = $state(false);
</script>

<section class="{styles.paddings} relative z-10" id="fabrics">
  <div
    class="{styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-12 items-center"
  >
    <!-- Text Content -->
    <div
      class="flex-1 flex flex-col"
      use:inView={{
        onEnter: () => (showContent = true),
        threshold: 0.2,
        once: true,
      }}
    >
      {#if showContent}
        <div transition:fly={{ x: -50, duration: 800 }}>
          <SectionSubtitle title="| Kankaat" />
          <SectionTitle title="Kankaat & Materiaalit" />

          <div class="mt-8 flex flex-col gap-4">
            <p
              class="text-secondary-white text-[18px] leading-[30px] max-w-2xl"
            >
              Jotta verhoiltavasta tuotteesta tulisi täydellisen onnistunut, on
              Esan verhoilulle tärkeää tehdä asiakkaan kanssa yhteistyötä jo
              suunnitteluvaiheessa.
            </p>

            <p
              class="text-secondary-white text-[18px] leading-[30px] max-w-2xl"
            >
              Kankaan valintaa helpottavat verhoomosta löytyvät
              kangasmallipalat. Kankaan ja muiden materiaalien hankinnan
              suorittaa yleensä Esan verhoilu, tai vaihtoehtoisesti asiakas
              itse.
            </p>
          </div>

          <div class="mt-10">
            <h3
              class="text-white text-[20px] font-bold mb-6 flex items-center gap-2"
            >
              <span class="w-8 h-[1px] bg-accent-gold"></span>
              Suosittelemme tutustumaan
            </h3>
            <div class="flex flex-wrap gap-3">
              {#each fabricSuppliers as supplier, i}
                <a
                  href={supplier.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-secondary-white hover:bg-accent-gold hover:text-white hover:border-accent-gold transition-all duration-300 flex items-center gap-2 group text-sm md:text-base"
                  in:fly={{
                    y: 20,
                    duration: 500,
                    delay: i * 50,
                  }}
                >
                  <span>{supplier.name}</span>
                  <svg
                    class="w-3.5 h-3.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              {/each}
            </div>
          </div>
        </div>
      {/if}
    </div>

    <!-- Image -->
    <div
      class="flex-1 w-full flex justify-center lg:justify-end mt-8 lg:mt-0"
      use:inView={{
        onEnter: () => (showImage = true),
        threshold: 0.2,
        once: true,
      }}
    >
      {#if showImage}
        <div
          transition:fly={{ x: 50, duration: 800, delay: 200 }}
          class="relative w-full max-w-[500px] aspect-square"
        >
          <!-- Decorative background elements -->
          <div
            class="absolute inset-0 bg-gradient-to-tr from-accent-gold/20 to-transparent rounded-[40px] rotate-6 transform scale-105 blur-lg"
          ></div>

          <img
            src="/kankaat.png"
            alt="Kankaat ja materiaalit"
            class="relative w-full h-full object-cover rounded-[40px] shadow-2xl border border-white/10"
          />

          <!-- Floating badge -->
          <div
            class="absolute -bottom-6 -left-6 bg-primary-dark/95 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl max-w-[240px] hidden md:block"
          >
            <div class="flex items-start gap-4">
              <div class="p-3 bg-accent-gold/10 rounded-full">
                <svg
                  class="w-6 h-6"
                  fill="white"
                  stroke="white"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    fill="white"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <div>
                <p class="!text-white font-bold text-lg">Laaja valikoima</p>
                <p class="!text-white text-sm mt-1">
                  Satoja eri kuoseja ja materiaaleja parhailta valmistajilta
                </p>
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>
