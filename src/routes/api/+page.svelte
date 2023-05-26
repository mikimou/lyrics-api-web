<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';

	async function redirect() {
		window.location.assign("/");
	}
</script>

<svelte:head>
	<title>Mikiho Lyrics A.I.</title>
	<meta name="description" content="Návrh na zlepšenie" />
</svelte:head>



<div style="align-items: center;">
	<center>
		<iframe src="https://api.michalhicz.eu/webhook/lyrics" height="800" width="1000"></iframe>
		<!--<object data="https://api.michalhicz.eu/webhook/lyrics/" width="1000" height="800" type="text/html">Alternative Content</object>-->
	</center>
</div>

<style>
    iframe {
        border: none;
		align-items: center;
    }
</style>