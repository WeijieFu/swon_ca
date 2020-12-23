<template>
    <div class="projects">
        <div>Project List</div>
        <div class="">{{ip['Text']}}</div>
        <div class="text">
             <VueShowdown
            :markdown="ip['Text']"/>
        </div>
       

    </div>
</template>
<script>
import { VueShowdown } from 'vue-showdown';

export default {
    async asyncData({ $axios }) {
        const ip = await $axios.$get('projects/1')
        return { ip }
    },
    components:{
        VueShowdown,
    }
}
</script>
<style scoped>
    .text{
        width: 10vw;
    }
    .text img{
        width: 10vw;
    }

</style>