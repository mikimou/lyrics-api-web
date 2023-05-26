<script>
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';

	// main page odpocet casu
	var countDownDate = new Date("May 29, 2024 15:37:25").getTime();
	
  	// Get today's date and time
  	let now = new Date();

  	// Find the distance between now and the count down date
  	$: distance = countDownDate - now.getTime();

	onMount(() => {
		const interval = setInterval(() => {
		now = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	// Time calculations for days, hours, minutes and seconds
	$: days = Math.floor(distance / (1000 * 60 * 60 * 24));
	$: hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	$: minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	$: seconds = Math.floor((distance % (1000 * 60)) / 1000);

</script>

<div class="counter">
	
	<div class="counter-viewport">
		<div class="counter-digits">
			<strong class="hidden"></strong>
			{#if distance > 0}
				<strong class="drac-text drac-text-pink-purple">{days} D {hours} H <br>{minutes} M {seconds} S</strong>	
			{:else}
				<strong>Stránka sa spúšťa onedlho!</strong>	
			{/if}
		</div>
	</div>

	
</div>

<style>
	.counter {
		display: flex;
		
		margin: 0rem 0;
	}

	.counter button {
		width: 2em;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background-color: transparent;
		touch-action: manipulation;
		font-size: 2rem;
	}

	.counter button:hover {
		background-color: var(--color-bg-1);
	}

	svg {
		width: 25%;
		height: 25%;
	}

	path {
		vector-effect: non-scaling-stroke;
		stroke-width: 2px;
		stroke: #444;
	}

	.counter-viewport {
		width: 26em;
		height: 12em;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.counter-viewport strong {
		position: absolute;
		display: flex;
		width: 100%;
		height: 3em;
		font-weight: 400;
		color: var(--color-theme-1);
		font-size: 3rem;
		align-items: center;
		justify-content: center;
	}

	.counter-digits {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.hidden {
		top: -100%;
		user-select: none;
	}
</style>
