<template>
    <div class="header">
        <div class="title">SWON LLC</div>
        <div class="sub_title">Architecture Planning and Strategy</div>
        <div class="email">igsung.so@swon.ca</div>

        <div class="social">
            <a href="https://www.facebook.com/iggy.so" target="_blank" class="social_link">
                 <img src="@/assets/img/facebook.svg" alt="facebook" class="social_logo">
            </a>
             <a href="https://www.instagram.com/iffysoso/" target="_blank" class="social_link">
                 <img src="@/assets/img/instagram.svg" alt="instagram" class="social_logo">
            </a>
             <a href="https://www.linkedin.com/in/igsung-so-5b250227/"  target="_blank" class="social_link">
                 <img src="@/assets/img/linkedin.svg" alt="linkedin" class="social_logo">
            </a>
           
            
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .header{
        color: var(--color-main-black);
    }
    .title{
        font-family: 'Fredoka One', cursive;
        font-size: 4rem;
    }
    .sub_title{
        font-family: "Open Sans", sans-serif;
        font-size: 1.5rem;
    }
    .email{
        margin-top: 2rem;
        font-family: "Open Sans", sans-serif;
        font-size: 1rem;
    }
    

    .social_logo{
        margin: 5rem 1rem 0 1rem;
        width: 2rem;
        height:2rem;
    }

    @media only screen and (max-width: 600px) {
        .sub_title{
            font-size: 1.2rem;
        }
}
</style>