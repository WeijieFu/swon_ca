<template>
    <div class="hills">
        <div class="console">This is THREE JS</div>
        <div class="container">This is container</div>
    </div>
    
</template>
<script>
import * as THREE from 'three';
import sceneInit from '@/components/Home/Scene.init.js';

export default {
    
}
</script>
<style scoped>
    .hills{
        position: fixed;
        height: 100vh;
        width: 100vw;
        color: red;
        z-index: 0;
    }
    .console{
        position: fixed;
    }
    .container{

        height: 100vh;
        width: 100vw;

    }
</style>