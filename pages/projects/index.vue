<template>
    <div class="projects">
        <div>Project List</div>
        <div class="">{{ip}}</div>
    </div>
</template>
<script>
export default {
    async asyncData({ $axios }) {
        const ip = await $axios.$get('https://swon-strapi.herokuapp.com/articles/3')
        return { ip }
    }
}
</script>
<style scoped>

</style>