<script>
	import Headers from './../Headers.svelte'
	import Content from './../Content.svelte'
	export let params = {}
</script>
<Headers />
<Content params={params}/>