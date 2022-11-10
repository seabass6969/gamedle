<script>
	import main_game from './routes/main_game.svelte'
	import Router from 'svelte-spa-router'
	import index from './routes/index.svelte';
	import error from './routes/error.svelte'

	const routes = {
		'/': index,
		'/main_game/:diff': main_game,
		'*': error
	}
</script>

<main>
<Router routes={routes} />
</main>

<style>
</style>