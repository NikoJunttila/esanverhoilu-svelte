<script>
	import "../app.css";

	let { children } = $props();
</script>

<svelte:head>
	<title>Esan Verhoilu - Laadukasta verhoilua Lapualla</title>
	<meta
		name="description"
		content="Esan Verhoilu tarjoaa ammattitaitoista huonekalu- ja ajoneuvoverhoilua Lapualla. Entisöimme ja verhoilemme huonekalut, moottoripyörän penkit ja paljon muuta."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://esanverhoilu.fi/" />
	<meta
		property="og:title"
		content="Esan Verhoilu - Laadukasta verhoilua Lapualla"
	/>
	<meta
		property="og:description"
		content="Esan Verhoilu tarjoaa ammattitaitoista huonekalu- ja ajoneuvoverhoilua Lapualla. Entisöimme ja verhoilemme huonekalut, moottoripyörän penkit ja paljon muuta."
	/>
	<meta property="og:image" content="https://esanverhoilu.fi/hero.jpeg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://esanverhoilu.fi/" />
	<meta
		property="twitter:title"
		content="Esan Verhoilu - Laadukasta verhoilua Lapualla"
	/>
	<meta
		property="twitter:description"
		content="Esan Verhoilu tarjoaa ammattitaitoista huonekalu- ja ajoneuvoverhoilua Lapualla. Entisöimme ja verhoilemme huonekalut, moottoripyörän penkit ja paljon muuta."
	/>
	<meta
		property="twitter:image"
		content="https://esanverhoilu.fi/hero.jpeg"
	/>
</svelte:head>

{@render children()}
