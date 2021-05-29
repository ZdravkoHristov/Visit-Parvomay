<template>
    <section class="flex m-y-3 tourism-container tourism-info">
        <div class="img-container"><img src="https://lh5.googleusercontent.com/-Ns7D-GLVfSY/UPkVEa1qbiI/AAAAAAAASrM/pVefFDCUV0Q/s512/4678443.jpg" alt="obshtina"></div>
        <div class="ta-c p-x-2 text">
            <h2>Община Първомай</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur perspiciatis autem, cupiditate explicabo placeat quas repudiandae, ut, consequatur dolorum dolor provident maiores debitis temporibus velit? Aut excepturi in error adipisci sed, ratione, obcaecati accusantium cumque eveniet minima repudiandae odit dolorem, optio sit sunt accusamus officiis pariatur vel magnam doloribus eos.
            </p>
        </div>
    </section>
    <section class="dropdowns">
        <dropdown>
            </dropdown>    
    </section>
</template>
<script>
import Dropdown from "@/components/tourism/Dropdown.vue";
export default {
    components:{
        Dropdown
    } 
};
</script>

<style lang="scss" scoped>
.tourism-container{
    margin-left: auto;
    margin-right: auto;
    max-width:1300px;
    &>* {flex:1;}
    h2 {
    font-size:2.8rem;
    color:var(--clr-other-green);
    margin-bottom:20px;
    }
    p {
        letter-spacing: 1px;
        font-size: 1.2rem;
    }
    .text{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .img-container {
        transform: scale(0.8);
        position: relative;
        &::before {
          content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--clr-other-green);
    z-index: 4;
    top: -40px;
    left: -40px;
    }
    img {
    z-index: 5;
    position: relative;
    }
    }
    }
    * {
        letter-spacing: 2px;
    }
    .dropdowns {
    margin-left: auto;
    margin-right: auto;
    max-width:1300px;
    }
</style>
