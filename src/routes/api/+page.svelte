<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
	import { invalidateAll } from '$app/navigation';
  import { dataset_dev } from 'svelte/internal';

	async function redirect() {
		window.location.assign("/");
	}

	export let form;
	$: item = form;

</script>

<svelte:head>
	<title>Mikiho Lyrics A.I.</title>
	<meta name="description" content="Návrh na zlepšenie" />
</svelte:head>

<div style="align-items: center;">
	<center>
		<!--<p class='drac-text'>Nechaj načítať 30s..</p>
		<iframe src="https://api.michalhicz.eu/webhook/lyrics"></iframe>-->
		<form method="post" >
			<br><br><center><input type='text' name="prompt" style = "width: 30em;" placeholder="Téma" class="drac-input drac-input-purple drac-text-white drac-m-xs"/></center>
			<br><center><button class="drac-btn drac-bg-pink-purple drac-m-sm drac-btn-lg">Generuj</button><br><br><br></center>
		</form>
		<div style="width: 40em;" class="drac-box drac-mb-sm">
			<hr class="drac-divider drac-border-grey" />
		</div>
		<center><div style="margin: 6em; word-wrap: break-word; width: 40em;" class="dv">
			{#if form !== null}
				<h1 style="font-size: 2em;" class="drac-text drac-text-center drac-text-lg drac-text-pink-purple" >{item}</h1>
			{:else}
			<h1 style="font-size: 2em;" class="drac-text drac-text-center drac-text-lg drac-text-pink-purple" >Hitni generuj a cakaj!</h1>
			{/if}
	  </div></center>
	</center>
</div>

<style>
	@media only screen and (max-width: 900px) {
		.dv {
			width: 30em;
		}
		h1 {
			font-size: 1em;
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