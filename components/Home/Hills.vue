<template>
    <div class="hills">
      
    </div>
    
</template>
<script>
import * as THREE from 'three';
import sceneInit from '@/components/Home/Scene.init.js';

export default {
    data(){
       return{
          root : null,
          model : '@/assets/model/hills.gltf'
       }
    },
    mounted(){
       
        this.root = document.querySelector('.hills');
        sceneInit(this.root, this.model, ()=>{});

    }
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