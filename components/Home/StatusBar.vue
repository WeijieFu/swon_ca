<template>
    <div class="statusBar">
        <div class="status_left">
            <span class="status_projects_number">{{projectsTotal}}</span> Projects | <span class="status_projects_number">{{projectsBuilt}}</span> built |  <span class="status_projects_number">{{projectsOnGoing}}</span> on-going
        </div>
        <div class="status_right">
            {{time}} | {{location}} | {{weather}} | {{temperature}} °C
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
            weather:'Snow',
            temperature: '10'
        }
    },

    

    methods:{
        timeUpdate(){
            setInterval( ()=>{
                this.time = new Date().toLocaleString();
            },1000);
        },
        async getWeather(){
            const key = '681f6e9d9fcd2038148c4ce41300074e';
            const weather = await this.$axios.$get(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${key}`);
            this.weather = weather.weather[0].main;
            this.temperature = (weather.main.temp - 273).toFixed(1);
            console.log(this.weather);
        }
    },

    mounted(){
        this.time = new Date().toLocaleString();
        this.timeUpdate();
        this.getWeather();

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