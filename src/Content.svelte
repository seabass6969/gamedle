<style>
    .center_content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 5%;
    }
    .ans{
        flex-grow: 1;
        width: calc(100vw / 20);
        height: calc(100vh / 15);
        text-align: center;
    }
    .textans{
        display: flex;
    }
    .space{
        border: grey solid 5px;
    }
    @media (max-width: 600px){
        .ans{
            width: calc(100vw / 10);
            height: calc(100vh / 10);
        }
    }
</style>

<script>
    import {onMount} from 'svelte';
    import Loading from './Loading.svelte'
    import Keyboard from './Keyboard.svelte'
    function OnKeyPress_Keyboard(event){
        if (ans.toLowerCase().indexOf(event.detail.key.toLowerCase()) === -1){
            time_usergo_wrong += 1
        }else{
            time_usergo_right += 1
        }
    }
    let finishfetch = false
    let time_usergo_wrong = 0
    let time_usergo_right = 0
    let userspace
    let ans 
    let cover_imageurl
    let regex = new RegExp(/[^a-z,A-Z]/)
    onMount(async ()=>{
        let random_num = Math.floor(Math.random()*100)
        let content = await fetch("https://igdb-gatewayexpress.yeungcephas.repl.co/gamelist/6/90/"+random_num)
        let output = await content.json()
        finishfetch = true
        userspace = output[random_num - 1]
        console.log(userspace)
        ans = userspace["name"]
    // debug tag unuse soon
    console.log(ans)
    })
</script>
<div class="center_content">
{#if finishfetch !== false}
    {#each ans.split(" ") as x,i}
        <div class="textans">
        {#each x.split("") as y,u}
            {#if regex.test(y) === true}
            <!-- check if(the text is not a to z or not) and then it will do this operation -->
            <input class="ans space" type="text" maxlength="1" disabled value={y} id="{i}:{u}">
            {:else}
            <input class="ans" type="text" maxlength="1" disabled id="{i}:{u}">
            {/if}
        {/each}
        </div>
        <br>
    {/each}
{:else}
    <Loading />
{/if}
<h1>input the text to start guessing:</h1>
<Keyboard on:keypress={OnKeyPress_Keyboard} ans={ans}/>
</div>