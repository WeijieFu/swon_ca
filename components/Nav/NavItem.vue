<template>
    <div class="nav_item">
        <div class="nav_item_icon"></div>
        <div class="nav_item_title">{{itemTitle}}</div>
        
    </div>
</template>
<script>
export default {

    props:{
        itemTitle : String,
    }
}
</script>
<style scoped>
    .nav_item{
        font-family: 'Open Sans', sans-serif;
        color: #fff;
        margin-top: 1rem;
        font-size: 1.5rem;
        display: flex;
        /* margin-left: 7vw; */
        cursor: pointer;
    }
    .nav_item_title:hover{
        color:blue;
    }
    .nav_item_icon{
        width: 3rem;
        background-color: #fff;
         -webkit-mask: url('~assets/icon/folder-24px.svg') no-repeat center;
        mask: url('~assets/icon/folder-24px.svg') no-repeat center;
    }
    .nav_item:hover .nav_item_icon{
        background-color: blue;
    }

</style>