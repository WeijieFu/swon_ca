<template>
    <div class="navpage" :class="{navpage_show : showNavPage}">
        <NavAbout />
        <NavAbout />
        <NavAbout />
        
    </div>
</template>
<script>
export default {
    props:{
        showNavPage: Boolean,
    }
}
</script>
<style scoped>
.navpage{
    width: calc(100vw - 4rem);
    height: calc(100vh - 10rem);
    position:absolute;
    top: -100%;
    left:2rem;
    /* background-color:var(--color-main-black); */

    color: var(--color-main-yellow);

    transition: all 1.5s cubic-bezier(.05,.7,0,1);
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
   
    backdrop-filter: blur(10px);

    border-radius: 2rem;
    border: 1px solid #fff;
    
    box-shadow: 0px 0px 25px 5px rgba(0, 0, 0, 0.2);;
}

.navpage_show{
    top: 7rem;
}
.text{
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
}


@media only screen and (max-width: 600px) {
  .navpage{
    top: -200%;
  }
  .navpage_show{
    top: 7rem;
  }
}
</style>