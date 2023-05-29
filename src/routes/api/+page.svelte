<script>
	
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
			<br><br><center><input type='text' name="prompt" style = "width: 30em;" placeholder="Téma" class="drac-input drac-input-purple drac-text-white drac-input-border-sm drac-m-xs dd"/></center>
			<br><center><button class="drac-btn drac-bg-pink-purple drac-m-sm drac-btn-lg">Generuj</button><br><br><br></center>
		</form>
		
		<center><div class="dv">
			{#if form !== null}
				<h1 class="drac-text drac-text-center drac-text-lg drac-text-pink-purple" >{item}</h1>
			{:else}
			<h1 class="drac-text drac-text-center drac-text-lg drac-text-pink-purple" >Hitni generuj a cakaj!</h1>
			{/if}
	  </div></center>
	</center>
</div>

<style>

	.dv {
		margin: 6em;
		word-wrap: break-word;
		width: 40em;
	}
	h1 {
		font-size: 2em!important;
	}
	.ed {
		width: 40em!important;
	}
	@media only screen and (max-width: 800px) {
		.dv {
			width: 30em;
		}
		h1 {
			font-size: 2em!important;
		}
		.ed {
			width: 0px!important;
		}
	}
	@media only screen and (max-width: 500px) {
		.dv {
			width: 20em;
			margin: 0em!important;
		}
		h1 {
			font-size: 1.5em!important;
		}
		.ed {
			width: 0px!important;
		}
		.dd {
			width: 18em!important;
		}
	}
</style>