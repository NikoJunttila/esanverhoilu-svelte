<script>
    import { fly } from "svelte/transition";
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
        <h2
            transition:fly={{ y: 20, duration: 600 }}
            class="mt-[8px] font-serif font-bold md:text-[64px] text-[40px] text-light-text dark:text-white {textStyles}"
        >
            {title}
        </h2>
    {/if}
</div>
