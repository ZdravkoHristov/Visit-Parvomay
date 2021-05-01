<template>
    

<section>
			<h2>Забележителностите на<br> общината:</h2>



		<div class="items">
			<div class="row">
				<div class="col">
				</div>
				<div class="col">
				</div>
				<div class="col">
				</div>
			</div>

			<place-infobox class="row info-box"></place-infobox>

			<div class="row">
				<div class="col">
					<div class="overlay"><h1 class="hover-text">Читалище "Св. Св. Кирил и Методий"</h1></div>
				</div>
				<div class="col">
				</div>
				<div class="col">
				</div>
			</div>

			<div class="row">
				<div class="col">
				</div>
				<div class="col">
				</div>
				<div class="col">
				</div>
			</div>
		</div>	



</section>

</template>



<script>
import PlaceInfobox from "@/components/places/PlaceInfobox";
export default {
    components: { PlaceInfobox }
};
</script>
<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
h2{
    text-align: center;
    margin-top: 3%;
    color: var(--clr-other-green);
    font-size: xxx-large;
    letter-spacing: 4px;
    margin-bottom: 3%;
}

.row{
	width:96%;
		display: grid;
	grid-template-columns: repeat(3,1fr);
	margin: 0 auto;
	grid-gap: 5px;
	margin-top: 8px;
}



.col{
	background-image: url("https://mapio.net/images-p/49527160.jpg");
	background-size: cover;
	background-position: center;
	height: 40vh;
	width: 100%;
	position: relative;
	&:hover{
		.overlay{
			opacity: 1;
		}
		}
}

.items{

}

.info-box{
	grid-template-columns: 1fr 2fr;
}

.overlay{
	@include dark-overlay(0.3,var(--clr-other-green));
	color: white;
	font-size: 27px;
	font-weight: 900;
	letter-spacing: 5px;
	text-align: center;
	opacity: 0;
	transition: 0.5s ease-out;
}
.hover-text{
	position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
</style>