<template>
    <div class="nav_about">
        <NavTitle navTitle="About Us"/>
        <NavList>
            <NavItem itemTitle="Design Context"/>
            <NavItem itemTitle="Design Services"/>
            <NavItem itemTitle="Design View"/>
            <NavItem itemTitle="Design Sound"/>
            <NavItem itemTitle="Design Team"/>
            <NavItem itemTitle="CV"/>
        </NavList>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.nav_about{
    transition: all 0.2s ease-in-out;
    width: 100%;
    /* border: #fff 0.5px solid; */
    height: calc(100vh - 10rem);
    display: flex;
    flex-direction: column;
    outline: 1px solid #fff;
    outline-offset: -0.5px;
   

}
.nav_about:hover{
    width: 200%;
}
</style>