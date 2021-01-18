<template>
    <div class="audio">
        <audio class="sound" autoplay="true">
            <source src="@/assets/audio/sound.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>

        <span class="play_button"  :class="{ play_button_off : !isAudioPlay}"   @click="onClick">Sound</span>
    </div>
</template>
<script>
export default {
   

    props:{
        isAudioPlay : Boolean
    },
    methods:{
        onClick(){
           let audio = document.querySelector('.sound');

            if (!this.isAudioPlay){
                 audio.play();
                 this.isAudioPlay = !this.isAudioPlay
            }else{
                audio.pause();
                 this.isAudioPlay = !this.isAudioPlay
            }
          
        }
    },
   
}
</script>
<style scoped>
    
    .audio{
        color:red;
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 999;
    }
    .play_button{
        cursor: pointer;
        color: var(--color-main-yellow);
        font-family: 'Open Sans', sans-serif;
        transition: all 0.5s ease-out;
    }
      .play_button_off{
         text-decoration: line-through;
         color: grey;
    }
</style>