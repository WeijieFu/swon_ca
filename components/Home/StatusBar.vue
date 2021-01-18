<template>
    <div class="statusBar">
        <div class="status_left">
            <span class="status_projects_number">{{projectsTotal}}</span> Projects | <span class="status_projects_number">{{projectsBuilt}}</span> built |  <span class="status_projects_number">{{projectsOnGoing}}</span> on-going
        </div>
        <div class="status_right">
            {{time}} | {{location}} | {{weather}}
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            projectsTotal : 32,
            projectsBuilt : 3,
            projectsOnGoing: 2,
            time: '',
            location:'Toronto',
            weather:'Snow'
        }
    },

    methods:{
        timeUpdate(){
            setInterval( ()=>{
                this.time = new Date().toLocaleString();
            },1000);
        }
    },

    mounted(){
        this.time = new Date().toLocaleString();
        this.timeUpdate();
    }
}
</script>
<style scoped>
    .statusBar{
        position: fixed;
        z-index: 999;
        width : 100vw;
        height : 2rem;
        bottom: 0;
        background-color: var(--color-main-yellow);

        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Open Sans', sans-serif;
        font-size: 0.8rem;
    }
    .status_left{   
        margin-left: 2rem;
    }
    .status_right{
        margin-right: 2rem;
    }
    .status_projects_number{
        font-weight: 600;
    }

</style>