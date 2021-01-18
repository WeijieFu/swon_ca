<template>
    <div class="nav_list">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .nav_list{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        /* outline: 1px solid #fff;
        outline-offset: -0.5px; */
        height: calc(100vh - 15rem);
        align-self: center;
    }
</style>