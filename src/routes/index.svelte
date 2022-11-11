<script>
    import {link} from 'svelte-spa-router'
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Bubbles&display=swap');
.middle_start{
    height: 100vh;
    justify-content: center;
    align-items: center;
    font-size: xx-large;
    margin-left: 2vw;
    margin-right: 2vw;
}
.title{
    font-family: 'Henny Penny', cursive;
    padding-left:10px;
    align-items: center;
    align-self: center;
    -webkit-user-select: none;  
    -moz-user-select: none;    
    -ms-user-select: none;      
    user-select: none;
}
.start_button {
    display: flex;
    font-family: 'Rubik Bubbles', cursive;
    align-items: baseline;
}
</style>
<div class="middle_start">
    <h1 class="title">Gamedle</h1>
    <a use:link class="start_button" href="/main_game/easy"><span class="material-symbols-outlined arrowright">chevron_right</span>easy game</a>
    <br>
    <a use:link class="start_button" href="/main_game/medium"><span class="material-symbols-outlined arrowright">chevron_right</span>medium game</a>
    <br>
    <a use:link class="start_button" href="/main_game/hard"><span class="material-symbols-outlined arrowright">chevron_right</span>hard game</a>
    <br>
    <a use:link class="start_button" href="/main_game/ultrahard"><span class="material-symbols-outlined arrowright">chevron_right</span>ultra hard game</a>
</div>