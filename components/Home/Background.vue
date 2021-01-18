<template>
    <div class="background">
        <img class="background_img" :src="root+'01_background_1.png'" alt="background image">
    </div>
</template>
<script>
export default {
    data(){
        return {
            root: 'https://cdn.jsdelivr.net/gh/WeijieFu/swon_ca/assets/img/'
        }
    }
}
</script>
<style scoped>
    .background {
        z-index: -100;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;

        overflow: hidden;
       
    }
    .background_img{
        width: 100vw;
        height: 100vh;
        object-fit: cover;

    }
</style>