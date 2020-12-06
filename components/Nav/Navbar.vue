<template>
    <div class="navbar">
        <div class="nav_logo" :class="{nav_logo_dark : isDarkMode}">SWON</div>
        <div class="nav_process" v-show="isDarkMode" ref="nav_process">{{process}}</div>
        <!-- <div class="console">{{`processwidth:${processWidth } scrollPosition:${scrollPosition}` }}</div> -->
        <div class="nav_circle" :class="{nav_circle_dark : isDarkMode}"  @click="toggleNavPage" ></div>
        <div class="nav_start">
            <svg  class="nav_start_line">
                <line x1="1rem" y1="0" x2="1rem" y2="200" />
            </svg>
            <span class="nav_start_text">START</span>
        </div>
        

        <div class="scroll">
            <svg height="150" width="150" class="scroll_circle">
                <circle cx="75" cy="75" r="50" fill="none" />
            </svg>  
            <span class="scroll_text">SCROLL</span>
        </div>
    
    </div>
</template>
<script>
export default {
    props:{
        isDarkMode : Boolean,
        showNavPage: Boolean,
   
    },
    data(){
        return{
            process:"",
            
            scrollPosition: 0,
            processWidth: 0,
            fullLength: 9000,
        }
    },
    methods:{
        toggleDarkMode(){
            this.process ="";
            this.isDarkMode = !this.isDarkMode;
            this.$emit('toggleDarkMode', this.isDarkMode );
            window.removeEventListener('wheel', this.handleScroll);
        },

        handleScroll(e){

            if(this.scrollPosition >= 0){
                 this.scrollPosition += e.deltaY;
                 this.process = "|   ".repeat(Math.floor(this.scrollPosition/75000 * this.processWidth));

                 if(this.scrollPosition > this.fullLength){
                     this.toggleDarkMode();
                 }
            }else{
                this.scrollPosition = 0;
            }
           
        },

        toggleNavPage(){
            this.toggleDarkMode();
            this.showNavPage = !this.showNavPage;
            this.$emit('toggleNavPage', this.showNavPage );
        },


        getProcessWidth(){
            this.processWidth = this.$refs.nav_process.clientWidth;
        }


    },
    beforeMount(){
        this.innerWidth = window.innerWidth;
        window.addEventListener('wheel', this.handleScroll);
        // window.addEventListener('touchmove', this.handleScroll);
    },
    mounted(){
         this.getProcessWidth();
    }
}
</script>
<style scoped>
.console{
    position: fixed;
    bottom: 0;
    color: red;
}
.navbar{
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100vw;
    height: 5rem;
}

.nav_process{


    color: var(--color-main-yellow);
    width: 90%; /* responsive property */
    padding: 0 1rem;
    text-align: left;


    white-space: nowrap;
    overflow: hidden;
}


.nav_logo{
    font-family: 'Fredoka One', cursive;
    font-size: 2rem;
    font-weight: 400;
    cursor: pointer;
    color: var(--color-main-black);
}
.nav_logo_dark{
    color: var(--color-main-yellow);
}
.nav_circle{
    flex-basis: auto;
    position: relative;
    width: 2rem;
    height: 2rem;
    transition: all ease-out 0.2s;
    background-color: var(--color-main-black);
    border-radius: 100%;
}
.nav_circle_dark{
    background-color: var(--color-main-yellow);
}
.nav_circle:hover {
    transform: scale(1.3,1.3);
    cursor:pointer;

}


.nav_start{

    position:absolute;
    right: 2rem;
    top: 4.5rem;
    display: flex;
    flex-direction: column;
    width: 2rem;
}

.nav_start_line{
    stroke: var(--color-main-black);
    stroke-width: 1px;

    stroke-dasharray: 200;
    stroke-dashoffset: 400;

    animation: start 2s ease-in 0s reverse infinite;
}

@keyframes start {
    0%{
       
        stroke-dashoffset: 400;
    }
   
   
    100%{
       
        stroke-dashoffset: 0;
    }

    
}
.nav_start_text{
    font-family: 'Open Sans', sans-serif;

    color: var(--color-main-black);
    writing-mode: vertical-rl;
    text-orientation: mixed;
    padding-top: 1rem;
    transform: translateX(-12%);
}




.scroll {
    
    position: fixed;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);


    
    text-align: center;
    align-content: center; 
   

    display: flex;
    align-items: center;
    justify-content: center;
}


.scroll_circle{
    position: absolute;
    stroke: var(--color-main-yellow);
    stroke-width: 1px;
    stroke-dasharray: 314;
    stroke-dashoffset: 314;
    

    animation: scroll 1.5s ease-out  0s 1 forwards;
}
.scroll_text{
    font-family: 'Open Sans', sans-serif;
    color: var(--color-main-yellow);
    animation: scroll 1.5s ease-out 0s 1 forwards;
}


@keyframes scroll {
    0%{
        opacity: 1;
        stroke-dashoffset: 314;
    }
    75%{
        opacity: 1;
       
    }
   
    100%{
        opacity: 0;
        stroke-dashoffset: 0;
    }

    
}
</style>