<script>
  import { fade, fly } from "svelte/transition";
  import styles from "$lib/utils/styles.js";
  import SectionTitle from "$lib/components/SectionTitle.svelte";
  import SectionSubtitle from "$lib/components/SectionSubtitle.svelte";
</script>

<section class="{styles.paddings} relative z-10" id="contact">
  <div class="{styles.innerWidth} mx-auto flex flex-col gap-12">
    <!-- Header -->
    <div class="flex flex-col items-center text-center">
      <SectionSubtitle title="| Ota yhteyttä" textStyles="text-center" />
      <SectionTitle title="Yhteystiedot" textStyles="text-center" />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- Contact Info Cards -->
      <div class="flex flex-col gap-6">
        <!-- Business Name Card -->
        <div
          in:fade={{ duration: 600, delay: 100 }}
          class="p-6 bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 rounded-xl border border-accent-gold/20 shadow-sm"
        >
          <h3 class="font-serif text-3xl text-accent-gold mb-2">
            Esan Verhoilu
          </h3>
          <p class="text-light-text dark:text-white text-xl">Esa Junttila</p>
          <p
            class="text-light-text-secondary dark:text-secondary-white/60 text-sm mt-2"
          >
            Y-tunnus: 2758041-2
          </p>
        </div>

        <!-- Contact Details -->
        <div
          in:fade={{ duration: 600, delay: 200 }}
          class="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <!-- Phone -->
          <a
            href="tel:+358408344202"
            class="group p-6 bg-light-secondary dark:bg-secondary-dark/80 rounded-xl border border-gray-200 dark:border-white/10 hover:border-accent-gold/50 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
          >
            <div
              class="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center mb-4 group-hover:bg-accent-gold/30 transition-colors"
            >
              <svg
                class="w-6 h-6 text-accent-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <p
              class="text-sm text-light-text-secondary dark:text-secondary-white/60 mb-1"
            >
              Puhelinnumero
            </p>
            <p
              class="text-light-text dark:text-white text-xl font-medium group-hover:text-accent-gold transition-colors"
            >
              040-8344202
            </p>
          </a>

          <!-- Email -->
          <a
            href="mailto:esa.tapani@anvianet.fi"
            class="group p-6 bg-light-secondary dark:bg-secondary-dark/80 rounded-xl border border-gray-200 dark:border-white/10 hover:border-accent-gold/50 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
          >
            <div
              class="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center mb-4 group-hover:bg-accent-gold/30 transition-colors"
            >
              <svg
                class="w-6 h-6 text-accent-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p
              class="text-sm text-light-text-secondary dark:text-secondary-white/60 mb-1"
            >
              Sähköposti
            </p>
            <p
              class="text-light-text dark:text-white text-lg font-medium group-hover:text-accent-gold transition-colors break-all"
            >
              esa.tapani@anvianet.fi
            </p>
          </a>
        </div>

        <!-- Address & Social -->
        <div
          in:fade={{ duration: 600, delay: 300 }}
          class="p-6 bg-light-secondary dark:bg-secondary-dark/80 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm"
        >
          <div class="flex rounded items-start gap-4 mb-6 items-center">
            <div
              class="ml-2 w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-6 h-6 text-accent-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p
                class="text-sm text-light-text-secondary dark:text-secondary-white/60 mb-1"
              >
                Osoite
              </p>
              <p class="text-light-text dark:text-white text-xl font-medium">
                Vatajantie 22
              </p>
              <p class="text-light-text dark:text-white text-xl font-medium">
                62100 Lapua
              </p>
            </div>
          </div>

          <div
            class="py-3 rounded border-t border-gray-200 dark:border-white/10 flex flex-col items-center gap-4"
          >
            <a
              href="https://www.facebook.com/verhoomoesa/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 text-accent-gold hover:text-light-text dark:hover:text-white transition-colors duration-300 text-lg font-medium"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
              <span>Seuraa Facebookissa</span>
              <span>→</span>
            </a>

            <div
              class="p-4 bg-accent-gold/10 rounded-lg border-l-4 border-accent-gold"
            >
              <p class="text-light-text dark:text-white font-medium">
                ⏰ Avoinna sopimuksen mukaan
              </p>
              <p
                class="text-light-text-secondary dark:text-secondary-white/80 text-sm mt-1"
              >
                Otathan etukäteen yhteyttä!
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Map -->
      <div
        in:fade={{ duration: 600, delay: 400 }}
        class="h-full min-h-[600px] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl"
      >
        <iframe
          title="Esan Verhoilu sijainti kartalla"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180.44240597036634!2d23.059231474528385!3d62.960390745651196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4687b30f10cc7547%3A0x347065c44cad2e4d!2sVatajantie%2022%2C%2062100%20Lapua!5e0!3m2!1sen!2sfi!4v1764347453152!5m2!1sen!2sfi"
          width="100%"
          height="100%"
          class="grayscale contrast-100 dark:invert-[.92] dark:contrast-[.83] min-h-[600px] border-0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</section>

<style>
  h3 {
    border-radius: 10px;
    padding: 5px;
  }
  p {
    border-radius: 10px;
    padding: 5px;
  }
</style>
