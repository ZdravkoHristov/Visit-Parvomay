<template>
<div class="info-box">
	<p class="ta-c">
		Добре дошли в нашия уебсайт! Тук ще откриете интересни<br> забележителности, цветни кътчета, гостоприемни заведения<br> и интересна информация за общи
	</p>
</div>


<div class="info-box-2">
	<p class="ta-c">
		Не стойте гладни, а опитайте специалитетите на нашите<br> ресторанти! Също така, не пропускайте чаша топко кафе в<br> уютните ни заведения!
	</p>
</div>

<div class="restaurant-boxes">



	<div class="restaurant-boxes">


		<div class="button-wrapper">
		<button class="button-restaurant">
			Към ресторанта &gt; &gt;
		</button>
		</div>
	</div>
</div>
</template>

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
}

.button-wrapper{
	margin-right: 10%;
	justify-content: flex-end;
    display: flex;
}
</style>