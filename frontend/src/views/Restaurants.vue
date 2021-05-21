<template>

<InfoBox>Вижте най-популярните заведения сред<br> посетителите на сайта</InfoBox>
<section class="box-holder">
	<div class="with-text">
		<restaurantsReview class="hipnoza left"></restaurantsReview>
		<p>adds</p>
	</div>

	<div class="with-text">
		<restaurantsReview class="golqma hipnoza"></restaurantsReview>
		<p>adds</p>
	</div>
	<div class="with-text">
		<restaurantsReview class="hipnoza"></restaurantsReview>
		<p>adds</p>
	</div>
</section>



</template>
<script>
import RestaurantsReview from "@/components/restaurants/RestaurantsReview";
import InfoBox from "@/components/others/InfoBox";
export default {
   components: { RestaurantsReview, InfoBox }
};
</script>
<style lang="scss" scoped>


.box-holder{
height: 60vh;
margin-top: 5%;
display: flex;
margin-bottom: 10%;
align-items: flex-end;
		.hipnoza {
			
				width: 60%;
				margin-left: 8%;
				height: 80%;
				margin: 0 auto;
		}

		.golqma{
			width:75%;
			height: 100%;
		}

		.left{

		}

		.top{
			margin-top: 10%;
		}
}

.with-text{
height: 100%;
width: 100%;
}
</style>