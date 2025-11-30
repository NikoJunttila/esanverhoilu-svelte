<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { animations } from "$lib/utils/animations.js";
  import styles from "$lib/utils/styles.js";
  import { theme, toggleTheme } from "$lib/stores/theme.js";

  let show = $state(false);
  let isMenuOpen = $state(false);

  const navLinks = [
    { id: "#about", title: "Tietoa" },
    { id: "#showcase", title: "Esittely" },
    { id: "#services", title: "Palvelut" },
    { id: "#fabrics", title: "Kankaat" },
    { id: "#pricing", title: "Hinta" },
    { id: "#gallery", title: "Galleria" },
    { id: "#contact", title: "Yhteystiedot" },
  ];

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  onMount(() => {
    show = true;
  });
</script>

<div>
  {#if show}
    <nav
      in:fly={{ y: -50, duration: 1000, delay: 500 }}
      class="{styles.xPaddings} py-3 fixed top-0 w-full z-50 glassmorphism border-b border-white/10"
    >
      <div
        class="{styles.innerWidth} mx-auto flex justify-between items-center gap-8 p-2 rounded-lg"
      >
        <a href="#" class="flex items-center gap-4 z-50 relative">
          <img
            src="/icon.png"
            alt="logo"
            class="w-[40px] h-[40px] object-contain opacity-90"
          />
          <h2
            class="font-serif font-bold text-[24px] leading-[30px] text-primary-black dark:text-white tracking-wider"
          >
            ESANVERHOILU
          </h2>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex gap-8 items-center">
          {#each navLinks as link}
            <a
              href={link.id}
              class="text-light-text-secondary dark:text-secondary-white hover:text-accent-gold transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
            >
              {link.title}
            </a>
          {/each}

          <!-- Theme Toggle Button -->
          <button
            onclick={toggleTheme}
            class="p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-accent-gold/20 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {#if $theme === "dark"}
              <svg
                class="w-5 h-5 text-accent-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            {:else}
              <svg
                class="w-5 h-5 text-accent-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            {/if}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          onclick={toggleMenu}
          class="lg:hidden z-50 relative w-[24px] h-[24px] flex flex-col justify-center items-center gap-1.5 text-primary-black dark:text-white"
          aria-label="Menu"
        >
          <span
            class={`w-full h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            class={`w-full h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            class={`w-full h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>

        <!-- Mobile Menu Overlay -->
        {#if isMenuOpen}
          <div
            class="fixed inset-0 bg-primary-dark z-40 flex flex-col justify-center items-center gap-8 lg:hidden h-screen w-screen"
            transition:fly={{ y: -20, duration: 300 }}
          >
            {#each navLinks as link}
              <a
                href={link.id}
                onclick={() => (isMenuOpen = false)}
                class="text-white text-2xl font-serif font-bold hover:text-accent-gold transition-colors duration-300"
              >
                {link.title}
              </a>
            {/each}

            <!-- Mobile Theme Toggle -->
            <button
              onclick={toggleTheme}
              class="mt-8 p-3 rounded-full bg-white/10 hover:bg-accent-gold/20 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {#if $theme === "dark"}
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
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              {:else}
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
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              {/if}
            </button>
          </div>
        {/if}
      </div>
    </nav>
  {/if}
</div>
