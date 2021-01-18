<template>
    <div class="nav_title">
        <div class="nav_text">{{navTitle}}</div></div>
</template>
<script>
export default {
    props:{
        navTitle : String
    }
}
</script>
<style scoped>
    .nav_title {
        color: #fff;
        z-index: 9;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: 2rem;
        height: 5rem;
        /* border: 0.5px solid #fff; */
        display: flex;
        align-items: center;
        justify-content: center;

    }
</style>