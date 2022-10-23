<script>
    import json from './ImageSize.json'
    export let image_id;
    export let height;
    export let width;
    let result_name = json.images.find(o => {if(o.width == width&&o.height == height) return o.images_name})
    let finaloutput_src = "https://images.igdb.com/igdb/image/upload/t_"+result_name+"/"+image_id+".jpg"
</script>
<img src={finaloutput_src} alt="Imagehints">