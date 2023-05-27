<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';

	async function redirect() {
		window.location.assign("/");
	}

	export let data;
	$: item = data.lyrics;
</script>

<svelte:head>
	<title>Mikiho Lyrics A.I.</title>
	<meta name="description" content="Návrh na zlepšenie" />
</svelte:head>

<div style="align-items: center;">
	<center>
		<!--<p class='drac-text'>Nechaj načítať 30s..</p>
		<iframe src="https://api.michalhicz.eu/webhook/lyrics"></iframe>-->
		<br><br><button on:click={regen} class="drac-btn drac-bg-pink-purple drac-m-sm drac-btn-lg">Reset</button>
		<center><div style="margin: 6em; word-wrap: break-word; width: 40em;" class="dv">
			<h1 style="font-size: 2em;" class="drac-text drac-text-center drac-text-lg drac-text-pink-purple" >{item}</h1>
	  </div></center>
	</center>
</div>

<style>
	@media only screen and (max-width: 900px) {
		.dv {
			width: 30em;
		}
	}
	@media only screen and (max-width: 600px) {
		.dv {
			width: 20em;
		}
		h1 {
			font-size: 1em;
		}
	}
</style>