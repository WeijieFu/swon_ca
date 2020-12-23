<template>
    <div class="admin">
        <a href="https://swon-strapi.herokuapp.com/admin" target="_blank"><div class="button">Sign in as administrator</div></a>
    </div>
</template>
<style scoped>
.admin{
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
}
.button{
    background-color: #000;
    cursor: pointer;
    width: 20rem;
    padding: 1rem;
    /* border: 1px #000 solid; */
    text-align: center;
    border-radius: 1rem;

}
a{
    font-size: 1rem;
    font-family: 'Open Sans' , sans-serif;
    color: #fff;
    text-decoration: none;
    
}
</style>