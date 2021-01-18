<template>
    <div class="background">
        <img class="background_img" src="@/assets/img/01_background_1.png" alt="background image">
    </div>
</template>
<script>
export default {
    
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