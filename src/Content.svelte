<style>
    .center_content{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30%;
    }
    .ans{
        width: calc(100vw / 10);
        height: calc(100vw / 10);
    }
</style>
<script>
    import {onMount} from 'svelte';
    import Loading from './Loading.svelte'
    let finishfetch = false
    onMount(async ()=>{
        let random_num = Math.floor(Math.random()*100)
        let content = await fetch("https://igdb-gatewayexpress.yeungcephas.repl.co/gamelist/6/90/"+random_num)
        let output = await content.json()
        finishfetch = true
        console.log(output)
    })
</script>
{#if finishfetch === false}
    <Loading />
{/if}
<div class="center_content">
    <input class="ans" type="text" maxlength="1">
</div>


