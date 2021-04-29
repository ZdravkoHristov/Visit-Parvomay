<template>
<section class="info-box">
	<p class="ta-c">
		Добре дошли в нашия уебсайт! Тук ще откриете интересни<br> забележителности, цветни кътчета, гостоприемни заведения<br> и интересна информация за общи
	</p>
</section>


<section class="info-box-2">
	<p class="ta-c">
		Не стойте гладни, а опитайте специалитетите на нашите<br> ресторанти! Също така, не пропускайте чаша топко кафе в<br> уютните ни заведения!
	</p>
</section>

<section class="restaurant-boxes">
<div class="boxes-holder">
<restaurant-box></restaurant-box>

</div>

		<div class="button-wrapper">
		<button class="button-restaurant">
			Към ресторанта &gt; &gt;
		</button>
		</div>
</section>

</template>
<script>
	import RestaurantBox from "@/components/home/RestaurantBox";
	export default {
		components: {RestaurantBox}
	};
</script>
<style lang="scss" scoped>
.info-box{
	background-color: var(--clr-other-green);
	color: white;
	padding: 30px;
    font-size: 21px;
}
	
	.info-box-2{
	background-color: var(--clr-other-green);
	color: white;
	padding: 30px;
    font-size: 21px;

}

.restaurant-boxes{
	background-color: var(--clr-dark-1);

}
.button-restaurant{
	background-color: var(--clr-other-green);
	padding: 8px;
    border-radius: 12px;
    color: white;
    border: 1px solid white;
    margin-bottom: 5%;
    margin-top: 10%;
}

.button-wrapper{
	margin-right: 10%;
	justify-content: flex-end;
    display: flex;
}

.boxes-holder{
	display: flex;
}
</style>