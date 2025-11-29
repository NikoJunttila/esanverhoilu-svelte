<script>
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  import styles from "$lib/utils/styles.js";

  let mounted = $state(false);

  onMount(() => {
    mounted = true;
  });
</script>

<section class="{styles.yPaddings} sm:pl-16 pl-6">
  <div class="{styles.innerWidth} mx-auto flex flex-col">
    {#if mounted}
      <div class="flex justify-center items-center flex-col relative z-10">
        <div in:fly={{ y: -30, duration: 800, delay: 200 }}>
          <h1 class={styles.heroHeading}>Esan verhoilu</h1>
        </div>
        <div in:fly={{ y: -20, duration: 800, delay: 400 }}>
          <div class="flex flex-row justify-center items-center">
            <h1 class="{styles.heroHeadingSmall} mb-8 text-center">
              verhoilija & puuseppä
            </h1>
          </div>
        </div>
      </div>
      <div
        class="relative w-full md:-mt-[20px] -mt-[12px] flex justify-end"
        in:fly={{ x: 100, duration: 1000, delay: 600 }}
      >
        <img
          src="/hero.jpeg"
          alt="cover"
          class="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative opacity-80 border-l border-t border-white/10"
        />
      </div>
    {/if}
  </div>
</section>
