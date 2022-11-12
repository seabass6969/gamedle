<script>
    import {createEventDispatcher} from 'svelte'
    export let ans = "";
    export let win;
    let correct_pressed_array = []
    let incorrect_pressed_array = []
    let testkey = new RegExp(/[a-z,A-Z]/)
    const dispatch = createEventDispatcher();
    function onClickKey(keypressed){
        if(ans.toLowerCase().indexOf(keypressed.toLowerCase()) !== -1){
            if(correct_pressed_array.indexOf(keypressed) === -1){
                correct_pressed_array.push(keypressed)
                let query_selection = document.querySelector(`[data-key="${keypressed}"]`)
                query_selection.style.backgroundColor = "green";
            }
        }else{
            incorrect_pressed_array.push(keypressed)
            let query_selection = document.querySelector(`[data-key="${keypressed}"]`)
            query_selection.style.backgroundColor = "red";
        }
        dispatch('keypress',{"key":keypressed})
    }
    function keypress_realkeyboard(event){
        if(testkey.test(event.key) === true)onClickKey(event.key.toUpperCase())
    }
    $: {
        if(win === true){
            correct_pressed_array = []
            incorrect_pressed_array = []
        }
    }

</script>
<style>
    .keyboardbutton{
        width: calc(100vw / 25);
        height: calc(100vh / 25);
        background-color: grey;
        border: grey;
        border-radius: 5px;
        margin: 3px 3px 3px 3px;
    }
    .row{
        display: flex;
        flex-direction: row;
    }
    .col{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 600px){
        .keyboardbutton{
            width: calc(100vw / 12.5);
            height: calc(100vh / 20);
        }
    }
    .keyboardbutton:active{
        background-color: gainsboro;
    }
</style>
<div class="col">
    <div class="row">
        <button class="keyboardbutton" on:click={() => onClickKey("Q")} data-key="Q">Q</button>
        <button class="keyboardbutton" on:click={() => onClickKey("W")} data-key="W">W</button>
        <button class="keyboardbutton" on:click={() => onClickKey("E")} data-key="E">E</button>
        <button class="keyboardbutton" on:click={() => onClickKey("R")} data-key="R">R</button>
        <button class="keyboardbutton" on:click={() => onClickKey("T")} data-key="T">T</button>
        <button class="keyboardbutton" on:click={() => onClickKey("Y")} data-key="Y">Y</button>
        <button class="keyboardbutton" on:click={() => onClickKey("U")} data-key="U">U</button>
        <button class="keyboardbutton" on:click={() => onClickKey("I")} data-key="I">I</button>
        <button class="keyboardbutton" on:click={() => onClickKey("O")} data-key="O">O</button>
        <button class="keyboardbutton" on:click={() => onClickKey("P")} data-key="P">P</button>
    </div>
    <div class="row">
        <button class="keyboardbutton" on:click={() => onClickKey("A")} data-key="A">A</button>
        <button class="keyboardbutton" on:click={() => onClickKey("S")} data-key="S">S</button>
        <button class="keyboardbutton" on:click={() => onClickKey("D")} data-key="D">D</button>
        <button class="keyboardbutton" on:click={() => onClickKey("F")} data-key="F">F</button>
        <button class="keyboardbutton" on:click={() => onClickKey("G")} data-key="G">G</button>
        <button class="keyboardbutton" on:click={() => onClickKey("H")} data-key="H">H</button>
        <button class="keyboardbutton" on:click={() => onClickKey("J")} data-key="J">J</button>
        <button class="keyboardbutton" on:click={() => onClickKey("K")} data-key="K">K</button>
        <button class="keyboardbutton" on:click={() => onClickKey("L")} data-key="L">L</button>
    </div>
    <div class="row">
        <button class="keyboardbutton" on:click={() => onClickKey("Z")} data-key="Z">Z</button>
        <button class="keyboardbutton" on:click={() => onClickKey("X")} data-key="X">X</button>
        <button class="keyboardbutton" on:click={() => onClickKey("C")} data-key="C">C</button>
        <button class="keyboardbutton" on:click={() => onClickKey("V")} data-key="V">V</button>
        <button class="keyboardbutton" on:click={() => onClickKey("B")} data-key="B">B</button>
        <button class="keyboardbutton" on:click={() => onClickKey("N")} data-key="N">N</button>
        <button class="keyboardbutton" on:click={() => onClickKey("M")} data-key="M">M</button>
    </div>
</div>
<svelte:window on:keypress={keypress_realkeyboard} />