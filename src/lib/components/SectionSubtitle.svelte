<script>
  import { typewriter } from "$lib/utils/animations.js";
  import { inView } from "$lib/utils/animations.js";

  let { title, textStyles = "" } = $props();
  let show = $state(false);
</script>

<div
  use:inView={{
    onEnter: () => (show = true),
    threshold: 0.25,
    once: false,
  }}
>
  {#if show}
    <p
      transition:typewriter={{ speed: 2 }}
      class="font-normal text-[22px] text-accent-gold uppercase tracking-widest {textStyles} typing-cursor"
    >
      {title}
    </p>
  {/if}
</div>

<style>
  .typing-cursor::after {
    content: "|";
    animation: blink 1s step-end infinite;
    margin-left: 2px;
    opacity: 1;
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
</style>
