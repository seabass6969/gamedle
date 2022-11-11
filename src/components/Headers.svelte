<script>
    import {link} from 'svelte-spa-router'
    let openinfobox_bo = false
    function openinfobox(){
        openinfobox_bo = true
    }
    function close_infobox(){
        openinfobox_bo = false
    }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap');
.normalimage {
    width:3vw;
    height:3vw;
    margin-right: 1vw;
}
.infobox{
    background-color: rgb(72, 19, 19);
    z-index: 999;
}
.header {
    display:flex;
    flex-direction: row;
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #3a3a3c;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
}
.button {
    border-style: none;
    width: 30px;
    height: 30px;
    align-self: center;
}
.title{
    font-family: 'Henny Penny', cursive;
    font-size: medium;
    padding-left:10px;
    align-items: center;
    align-self: center;
    -webkit-user-select: none;  
    -moz-user-select: none;    
    -ms-user-select: none;      
    user-select: none;
}
.end{
    margin-left: auto;
    padding-right: 4px;
}
</style>
<div class="header">
<div class="title"><a href="/">gamedle</a></div>
<div class="end">
   <button class="button" on:click={openinfobox}><span class="material-symbols-outlined">info</span></button> 
</div>
</div>

{#if openinfobox_bo === true}
<dialog class="infobox" open>
    <button class="button" on:click={close_infobox}>
    <span class="material-symbols-outlined">close</span>
    </button>
    <h1>How to play:</h1>
    <span>Look at the picture and guess the game name title</span><br>
    <span>The Photo will progressive be more unblur if you guess the character wrong!</span><br>
    <p class="subtext">contact me:</p>
    <p class="subsubtext"><img src="/Discord-Logo-Color.svg" alt="discord logo" class="normalimage">Discord: Netscapes#9407</p>
    <p class="subsubtext">I accept suggestion! Feel free to file issue in github. Also you can do pull request<br/><br/><a href="https://github.com/seabass6969/gamedle"><img src="/github.png" alt="Github logo" class="normalimage">github repo</a>   <p>
    <p class="subsubtext">Main website: <a href="https://cephas.monster">cephas.monster</a></p>
</dialog>
{/if}