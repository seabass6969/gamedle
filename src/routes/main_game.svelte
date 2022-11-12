<script>
	import {setHighScore} from './../lib/storage.js'
    import {onMount} from 'svelte';
	import Headers from '../components/Headers.svelte'
    import Loading from '../components/Loading.svelte'
    import Keyboard from '../components/Keyboard.svelte'
    import ImageGrabing from '../components/ImageGrabing.svelte'
    export let params = {};
    function OnKeyPress_Keyboard(event){
        ans.split(" ").map((x,outerIndex)=>{
            x.split("").map((y,innerIndex)=>{
                if(event.detail.key.toLowerCase() === y.toLowerCase()){
                    let done = document.getElementById(`${outerIndex}:${innerIndex}`)
                    done.style.backgroundColor = "green"
                    done.value = y
                    
                }
            })
        })
        // backend change
        if (ans.toLowerCase().indexOf(event.detail.key.toLowerCase()) === -1){
            time_usergo_wrong += 1
        }else{
            if(keypressed_store.indexOf(event.detail.key.toLowerCase()) === -1){
                keypressed_store.push(event.detail.key.toLowerCase())
                ans.split("").map((x)=>{if(event.detail.key.toLowerCase()===x.toLowerCase()) time_usergo_right += 1})
                trigger_event_win()
            }
        }
    }
    function trigger_event_win(){
        if(finishfetch && time_usergo_right >= time_usergo_right_ans){
            console.log("you win")
			setHighScore(time_usergo_right)
            win = true 
        }
    }
    function trigger_event_restart(){
        finishfetch = false
        time_usergo_wrong = 0
        time_usergo_right = 0
        userspace = ""
        ans = ""
        cover_imageurl = ""
        keypressed_store = []
        time_usergo_right_ans = 0
        win = false
		ultrahard = false
        trigger_event_start()
    }
    async function trigger_event_start() {
        let random_num = Math.floor(Math.random()*100)
        let difficult = 90;
        let content = await fetch("https://igdb-gatewayexpress.yeungcephas.repl.co/gamelist/6/"+difficult+"/"+random_num)
        let output = await content.json()
        userspace = output[random_num - 1]
        ans = userspace["name"]

        ans.split("").map((x)=>{if(regex.test(x)!==true) time_usergo_right_ans += 1})
        if(userspace["cover"] === undefined) location.reload()
        // count how many it take to win
    // debug tag unuse soon
    // console.log(ans)
        finishfetch = true
    }
    let regex = new RegExp(/[^a-z,A-Z]/)

    //game value
    let finishfetch = false
    let time_usergo_wrong = 0
    let time_usergo_right = 0
    let userspace
    let ans 
    let cover_imageurl
    let keypressed_store = []
    let time_usergo_right_ans = 0
    let win = false
    let difficult = 90
	let ultrahard = false

    if (params.diff === "easy" || params.diff === undefined) {
        difficult = 90
    }else if (params.diff === "medium") {
        difficult = 80
    }else if (params.diff === "hard") {
        difficult = 70
    }else if (params.diff === "ultrahard") {
        difficult = 70
        ultrahard = true 
    }

    onMount(async ()=>{
        await trigger_event_start(params)
    })
</script>
<style>
    .input_guess {
        margin-top: 2px;
        margin-bottom: 2px;
    }
	.dialogtext{
		font-size: large;
		color: black;
	}
	.wrong{
		color: red;
	}
	.center_content{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 1%;
	}
	.ans{
		flex-grow: 1;
		margin: 3px 3px 3px 3px;
		width: calc(100vw / 22);
		height: calc(100vh / 22);
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
			width: calc(100vw / 20);
			height: calc(100vh / 20);
		}
	}
</style>
<Headers />
<span class="wrong">Error time: {time_usergo_wrong}</span>
<div class="center_content">
{#if finishfetch !== false}
    {#if ultrahard === false}
		<ImageGrabing cover={userspace["cover"]} time_usergo_wrong={time_usergo_wrong} finishfetch={finishfetch} win={win}/>
	{:else}
		<h1>Ultra mode</h1>
	{/if}
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
{#if finishfetch !== false}
<h1 class="input_guess">input the text to start guessing:</h1>
<Keyboard on:keypress={OnKeyPress_Keyboard} ans={ans} win={win}/>
{/if}
</div>
{#if win === true}
<dialog id="dialogwin" open>
    <span class="wrong">Times you got it wrong: {time_usergo_wrong}</span><br>
    <span class="dialogtext">You win!</span><br>
    <span class="dialogtext">coming from: <a href="{userspace["url"]}">link</a> </span><br>
    <button on:click={trigger_event_restart}>Restart</button>
</dialog>
{/if}