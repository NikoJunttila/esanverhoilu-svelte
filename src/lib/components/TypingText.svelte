<script>
    import { fade } from "svelte/transition";
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
            transition:fade={{ duration: 600 }}
            class="font-normal text-[14px] text-secondary-white {textStyles}"
        >
            {title}
        </p>
    {/if}
</div>
