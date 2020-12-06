<template>
    <div class="navpage" :class="{navpage_show : showNavPage}">
        <div class="text">Under Construction</div>
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
    width: 100vw;
    height: 100vh;
    position:absolute;
    top: -100%;
    left:0;
    background-color:var(--color-main-black);

    color: var(--color-main-yellow);

    transition: all 1.5s cubic-bezier(.05,.7,0,1);
    display: flex;
    align-items: center;
    justify-content: center;
}

.navpage_show{
    top: 0;
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
    top: 0;
}
}
</style>