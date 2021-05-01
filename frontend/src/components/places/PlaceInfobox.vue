<template>
	<div class="green-infobox">
		<div class="img-green-infobox">


		</div>
		<div class="text-green-infobox">
			<div class="icons">
				<i class="far fa-times-circle iconka"></i>
				<div class="dqsno">
					<i class="far fa-arrow-alt-circle-left iconka"></i>
					<i class="far fa-arrow-alt-circle-right iconka "></i>
				</div>
			</div>		
			<h2>Читалище "Св. Св. Кирил и Методий"</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor lorem at tellus ornare condimentum. Quisque lobortis velit nisi, quis hendrerit arcu auctor ut. Nulla facilisi. Donec et rutrum lacus. Aliquam lectus massa, ultricies eu orci ac, condimentum scelerisque dolor. Aenean eleifend facilisis velit. Etiam sodales orci quis gravida consectetur. Etiam pellentesque nibh aliquam, egestas metus et, maximus orci. Donec vel blandit elit. Ut in odio vel ligula dictum lobortis. Duis tincidunt est ex. Morbi nec erat ut lorem varius accumsan. Mauris suscipit fermentum est sed viverra. Sed sollicitudin, purus at imperdiet laoreet, quam elit fringilla mi, nec blandit enim velit in enim. Pellentesque id odio vitae mauris varius iaculis vel non dolor. Aenean pretium varius risus a convallis.</p>
		</div>

	</div>
</template>

<style lang="scss" scoped>
h2{
	letter-spacing: 5px;
	margin: 5px 0px 10px 5px;
}
.green-infobox{
	width: 96%;
	margin: 0 auto;
	margin-top: 7px;
	height: 40vh;
		display: flex;
		background: #009966;
}
.img-green-infobox{
	background-image: url("https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png");
	background-size: cover;
	background-position: center;
}
.text-green-infobox{
	width: 100%;
	color: white;
}

.iconka{
	margin: 10px 5px;
    font-size: 26px;
}
.dqsno{
margin-right: 10px;
}
p{
	margin-left: 5px;
}

.icons{
	display: flex;
    justify-content: space-between;
}

</style>