<style>
@keyframes spinning {
    0% {
        transform:translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
        transform:translate3d(-50%, -50%, 0) rotate(360deg);
    }
}
.spin {
    position: absolute;
    top: 50%;
    left:50%;
    display: block;
    animation: .39s linear infinite spinning;
    font-size: 200px;
    margin: auto auto auto auto;
    transform: translate3d(-50%, -50%, 0);
}
</style>
<script>
    import {fade} from 'svelte/transition'
</script>
<span class="material-symbols-outlined spin" transition:fade>Cached</span>