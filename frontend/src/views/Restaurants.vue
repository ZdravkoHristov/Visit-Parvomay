<template>

<InfoBox>Вижте най-популярните заведения сред<br> посетителите на сайта</InfoBox>
<section class="box-holder">
<restaurant-box></restaurant-box>
</section>



</template>
<script>
import RestaurantBox from "@/components/home/RestaurantBox";
import InfoBox from "@/components/others/InfoBox";
export default {
   components: { RestaurantBox, InfoBox }
};
</script>
<style lang="scss" scoped>





</style>