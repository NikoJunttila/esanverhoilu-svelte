<script>
  import { fly } from "svelte/transition";
  import { inView } from "$lib/utils/animations.js";
  import styles from "$lib/utils/styles.js";
  import TitleText from "$lib/components/TitleText.svelte";
  import TypingText from "$lib/components/TypingText.svelte";

  let showContact = $state(false);
  let showMap = $state(false);
</script>

<section class="{styles.paddings} relative z-10" id="yhteystiedot">
  <div class="{styles.innerWidth} mx-auto flex flex-col">
    <TypingText title="| Yhteystiedot" textStyles="text-center" />
    <TitleText title="Yhteystiedot" textStyles="text-center" />
    <div
      use:inView={{
        onEnter: () => (showContact = true),
        threshold: 0.25,
        once: false,
      }}
    >
      {#if showContact}
        <div
          transition:fly={{ y: 100, duration: 1000, delay: 500 }}
          class="gap-4 mt-[25px] justify-between gap-[24px] mt-[8px] font-normal sm:text-[28px] text-[20px] text-center text-secondary-white"
        >
          <p class="font-bold">Esan Verhoilu</p>
          Esa Junttila<br />
          Puhelinnumero: 040-8344202<br />
          Osoite: Vatajantie 22, 62100 Lapua<br />
          Sähköposti: esa.tapani@anvianet.fi<br />
          <a class="text-blue-600" href="https://www.facebook.com/verhoomoesa/"
            >Facebook</a
          ><br />
          <p class="font-bold mt-3">
            Esan verhoilu avoinna sopimuksen mukaan, otathan etukäteen yhteyttä!
          </p>
          Y-tunnus: 2758041-2
        </div>
      {/if}
    </div>
    <div
      use:inView={{
        onEnter: () => (showMap = true),
        threshold: 0.25,
        once: false,
      }}
    >
      {#if showMap}
        <div
          transition:fly={{ y: 100, duration: 1000, delay: 1000 }}
          class="mt-8"
        >
          <iframe
            title="osoite"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180.44240597036634!2d23.059231474528385!3d62.960390745651196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4687b30f10cc7547%3A0x347065c44cad2e4d!2sVatajantie%2022%2C%2062100%20Lapua!5e0!3m2!1sen!2sfi!4v1764347453152!5m2!1sen!2sfi"
            width="100%"
            height="400px"
            loading="lazy"
          ></iframe>
        </div>
      {/if}
    </div>
  </div>
</section>
