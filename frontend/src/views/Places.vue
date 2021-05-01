<template>
    <info-box>
        Използвайте стрелките, за да разгледате всички паркове и <br />площадки
        на територията на община Първомай
    </info-box>
    <section class="remarkable-places">
        <div class="info ta-c">
            <h2>Разходка сред природата</h2>
            <p>
                Няма нищо по-приятно от разходка на свеж въздух сред природата.
                Екипът ни Ви препоръчва да посетите тези зелени площи.
            </p>
        </div>

        <div class="carousel-wrapper">
            <carousel>
                <template v-slot:items>
                    <place-box
                        v-for="place in carouselItems"
                        :key="place.id"
                        :place="place"
                    >
                    </place-box
                ></template>
            </carousel>
        </div>
    </section>
    <info-box>
        Моля, кликнете върху някоя кутийка
    </info-box>
</template>
<script>
import InfoBox from "@/components/others/InfoBox";
import PlaceBox from "@/components/places/PlaceBox";
import Carousel from "@/components/others/Carousel";

export default {
    data() {
        return {
            carouselItems: [
                {
                    id: 0,
                    imgSrc:
                        "https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png",
                    title: "Lorem Ipsum",
                    info: "Lorem ispum is simply dummy"
                },
                {
                    id: 1,
                    imgSrc:
                        "https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png",
                    title: "Lorem Ipsum",
                    info: "Lorem ispum is simply dummy"
                },
                {
                    id: 2,
                    imgSrc:
                        "https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png",
                    title: "Lorem Ipsum",
                    info: "Lorem ispum is simply dummy"
                },
                {
                    id: 3,
                    imgSrc:
                        "https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png",
                    title: "Lorem Ipsum",
                    info: "Lorem ispum is simply dummy"
                }
            ]
        };
    },
    components: {
        InfoBox,
        PlaceBox,
        Carousel
    }
};
</script>

<style lang="scss" scoped>
.remarkable-places {
    background-color: var(--clr-dark-1);
    color: #fff;
    display: flex;
    padding: 1.5rem;
    padding-right: 0;

    .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .carousel-wrapper {
        flex: 1.5;
        padding-left: 20px;
        max-width: 700px;
    }

    h2 {
        color: var(--clr-other-green);
        margin-bottom: 22px;
    }
}
</style>
