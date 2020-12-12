<template>
  <div class="container" :class="{container_dark : isDarkMode}">
    
      <Navbar 
        :showNavPage="showNavPage" 
        :isDarkMode="isDarkMode" 
        @toggleDarkMode="isDarkMode = $event" 
        @toggleNavPage="showNavPage = $event"
        />

      <Hills v-if="isDarkMode && !showNavPage"/>
      <NavPage :showNavPage="showNavPage"/>
      <Header v-show="!isDarkMode && !showNavPage"/>
      <Audio/>
      
     
   
  </div>
</template>

<script>
import Navbar from '@/components/Nav/Navbar.vue';
import NavPage from '@/components/Nav/NavPage.vue';
import Header from '@/components/Home/Header.vue';
import Hills from '@/components/Home/Hills.vue';
import Audio from '@/components/Home/Audio.vue';

export default {
  data(){
    return{
      isDarkMode : true,
      showNavPage: false,
    }
  },
 

  components:{
    Navbar,
    NavPage,
    Header,
    Hills,
    Audio,
  }
}
</script>

<style>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  transition: all ease-out 0.5s ;
  background-color: var(--color-main-yellow);
}

.container_dark{
  background-color: var(--color-main-black);
}




</style>
