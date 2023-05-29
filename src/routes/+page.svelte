<script>
	import Counter from './Counter.svelte';
	import logo from '$lib/images/airisp.png';
	import { redirect } from '@sveltejs/kit';

	async function redirectt() {
		window.location.assign("/api");
	}
</script>

<svelte:head>
	<title>Mikiho Lyrics A.I.</title>
	<meta name="description" content="Sieťové vzdelanie" />
</svelte:head>

<section>
	
	<div class="welcome">
		<!-- <picture>
			<img src={logo} alt="" />
		</picture> -->
		<h1 class="drac-text drac-text-pink-purple">Mikiho Lyrics <br> A.I.</h1>
	</div>

	<div style="height: 2em"></div>
	
	<button on:click={redirectt} class="drac-btn drac-bg-pink-purple drac-m-sm drac-btn-lg">Generovať</button>

	<div style="height: 6em"></div>	
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
		font-size: 4rem;
	}

	@media only screen and (max-width: 450px) {
		h1 {
			font-size: 3.5rem;
		}
	}

	.welcome {
		display: block;
		position: relative;
		padding: 0 0 0 0;
		align-items: center;
	}

	.welcome img {
		height: 8em;
		margin: auto;
		display: block;
		pointer-events: none;
	
	}
</style>
