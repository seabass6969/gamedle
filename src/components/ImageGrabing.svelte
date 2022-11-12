<style>
    .imagetag{
        height:calc(100vh /3);
        filter: blur(calc(10px))
    }
	@media (max-width: 600px){
        .imagetag{
            height: calc(100vh /5);
        }
    }
</style>
<script>
    import {images} from './ImageSize.json'
    export let cover;
    export let win;
    export let time_usergo_wrong;
    let image_id = cover.image_id
    let height = cover.height
    let width = cover.width
    let src = cover.url;
    let result_name = ""
    let finaloutput_src = "./favicon.png"
    let actual_blurness = 4
    if(width === undefined || height === undefined || image_id === undefined){
        result_name = "720p"
        
        finaloutput_src = src.replace("thumb", result_name)
    }else{
        result_name = images.find(o => {if(o.width == width&&o.height == height) return o.images_name})
        finaloutput_src = "https://images.igdb.com/igdb/image/upload/t_"+result_name+"/"+image_id+".jpg"
    }
    $: {
        if(time_usergo_wrong > 0){
            if(!(actual_blurness <= 1)){
                actual_blurness -= 0.2
            }
            console.log(`updating bluring on blurness ${actual_blurness}`)
        }
        if(win === true){
            actual_blurness = 0
            console.log(`updating bluring on blurness ${actual_blurness}`)
        }
    }
</script>

<img src={finaloutput_src} alt="Imagehints" class="imagetag" id="imageguess" style:filter="blur({actual_blurness}px)">