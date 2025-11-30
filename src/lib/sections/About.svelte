<script>
  import { fly, fade, scale } from "svelte/transition";
  import { inView } from "$lib/utils/animations.js";
  import SectionSubtitle from "$lib/components/SectionSubtitle.svelte";
  import styles from "$lib/utils/styles.js";

  let showText = $state(false);
  let showArrow = $state(false);
  let selectedImage = $state(null);

  function openLightbox(imgUrl) {
    selectedImage = imgUrl;
  }

  function closeLightbox() {
    selectedImage = null;
  }
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
          <span class="font-serif font-bold text-white"> Esan verhoilu </span>
          tarjoaa ammattitaitoisia verhoilupalveluja
          <span class="font-serif font-bold text-white"> Lapualla. </span>
          Laadukkaan kädenjäljen perustana on verhoilijan ja puusepän ammattitaito
          ja
          <span class="font-serif font-bold text-white">
            kymmenien vuosien työkokemus aloilta.
          </span>
          Esan verhoilu tarjoaa
          <span class="font-serif font-bold text-white">
            tyylikkään verhoilun
          </span>
          sekä kotien että julkisten tilojen huonekaluille. Myös
          <span class="font-serif font-bold text-white">
            ajoneuvojen penkit ja veneiden sisustat
          </span>
          saavat uuden ilmeen Esan verhoilussa. Verhoilut suunnitellaan ja toteutetaan
          aina asiakkaan tarpeiden ja toiveiden mukaan.
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
          <button
            onclick={() => openLightbox("/new_place.jpeg")}
            class="group relative overflow-hidden rounded-xl border border-white/10 cursor-pointer"
          >
            <img
              src="/new_place.jpeg"
              alt="Esan verhoilu työpaja"
              class="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              style="background: none;"
            />
            <div
              class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex items-center justify-center"
            >
              <svg
                class="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </button>
          <button
            onclick={() => openLightbox("/new_place2.jpeg")}
            class="group relative overflow-hidden rounded-xl border border-white/10 cursor-pointer"
          >
            <img
              src="/new_place2.jpeg"
              alt="Esan verhoilu tilat"
              class="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              style="background: none;"
            />
            <div
              class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex items-center justify-center"
            >
              <svg
                class="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </button>
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
        <a href="#showcase">
          <img
            transition:fly={{ y: 100, duration: 1000, delay: 300 }}
            src="/arrow-down.svg"
            alt="arrow down"
            class="w-[18px] h-[28px] object-contain mt-[28px]"
            style="background: none;"
          />
        </a>
      {/if}
    </div>
  </div>
</section>

<!-- Lightbox Modal -->
{#if selectedImage}
  <div
    transition:fade={{ duration: 300 }}
    class="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
    onclick={closeLightbox}
    role="dialog"
    aria-modal="true"
  >
    <!-- Close Button -->
    <button
      onclick={closeLightbox}
      class="absolute top-4 right-4 text-white hover:text-accent-gold transition-colors z-10"
      aria-label="Close"
    >
      <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <!-- Image -->
    <div
      onclick={(e) => e.stopPropagation()}
      class="max-w-6xl max-h-[90vh] w-full"
    >
      <img
        in:scale={{ duration: 300, start: 0.8 }}
        src={selectedImage}
        alt="About image"
        class="w-full h-full object-contain"
        style="background: none;"
      />
    </div>
  </div>
{/if}
