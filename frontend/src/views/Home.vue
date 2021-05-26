<template>
    <info-box :showIcon="false">
        Добре дошли в нашия уебсайт! Тук ще откриете интересни забележителности,
        цветни кътчета, гостоприемни заведения и интересна информация за общи
    </info-box>

    <section class="what-can-you-find ">
        <div class="wcyf-container">
            <div class="info">
                <h2>
                    Какво мога да намеря в община Първомай?
                </h2>

                <p>
                    Подбрали сме Ви едни от най-интересните забележителности,
                    които може да намерите на територията на община Първомай
                </p>

                <router-link class="btn-primary" to="places"
                    >Към места &gt; &gt;</router-link
                >
            </div>

            <div class="images">
                <div class="col">
                    <div class="img-holder">
                        <div class="overlay"></div>
                        <img
                            src="https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png"
                            alt="читалище Първомай"
                        />
                        <span class="title">Читалище</span>
                    </div>
                </div>
                <div class="col">
                    <div class="img-holder">
                        <div class="overlay"></div>
                        <img
                            src="https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png"
                            alt="читалище Първомай"
                        /><span class="title">Читалище</span>
                    </div>
                    <div class="img-holder">
                        <div class="overlay"></div>
                        <img
                            src="https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png"
                            alt="читалище Първомай"
                        /><span class="title">Читалище</span>
                    </div>
                </div>
                <div class="col">
                    <div class="img-holder">
                        <div class="overlay"></div>
                        <img
                            src="https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png"
                            alt="читалище Първомай"
                        /><span class="title">Читалище</span>
                    </div>
                    <div class="img-holder">
                        <div class="overlay"></div>
                        <img
                            src="https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png"
                            alt="читалище Първомай"
                        /><span class="title">Читалище</span>
                    </div>
                </div>
                <div class="col">
                    <div class="img-holder">
                        <div class="overlay"></div>
                        <img
                            src="https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png"
                            alt="читалище Първомай"
                        /><span class="title">Читалище</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <info-box :showIcon="false" class="info-shadow">
        Не стойте гладни, а опитайте специалитетите на нашите ресторанти! Също
        така не пропускайте чаша топло кафе в уютните ни заведения!
    </info-box>

    <section class="restaurant-boxes ">
        <div class="boxes-holder">
            <restaurant-box class="left hipnoza"></restaurant-box>
            <restaurant-box class="hipnoza"></restaurant-box>
            <restaurant-box class="hipnoza"></restaurant-box>
            <restaurant-box class="hipnoza"></restaurant-box>
        </div>

        <div class="button-wrapper">
            <router-link class="button-restaurant btn-primary" to="restaurants">
                Към ресторанта &gt; &gt;
            </router-link>
        </div>
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
@use '../styles/partials/mixins' as *;

.restaurant-boxes {
    background-color: var(--clr-dark-1);
}
.button-restaurant {
    padding: 8px;
    border: 1px solid #dadada;
    border-radius: 5px;
    margin-bottom: 5%;
    margin-top: 10%;
    text-decoration: none;
}

.button-wrapper {
    padding-right: 12%;
    justify-content: flex-end;
    display: flex;
}

.boxes-holder {
    display: flex;
    justify-content: center;
    & > * {
        flex-basis: 200px;
        min-height: 300px;
        margin-right: 7%;

        top: 10vh;
    }
    .left {
        margin-left: 10%;
    }

    .hipnoza {
        background-image: url("../assets/parvomay/hiphop.jpeg");
    }
}
.wrapper-section {
    background-color: var(--clr-light-gray1);
}

.what-can-you-find {
    background: var(--clr-light-gray1);
}

.wcyf-container {
    display: flex;
    padding: 1.2rem 0 1.2rem 3.5rem;
    margin: auto;
    max-width: 1300px;

    .info {
        min-width: 300px;
    }

    h2 {
        color: #058a5e;
        letter-spacing: 2px;
        margin-top: 5rem;
    }

    p {
        font-size: 0.75em;
        margin: 30px 0 20px 0;
        line-height: 1.6;
        color: #2b2d28;
    }

    .images {
        display: flex;
        margin-left: -50px;

        .col {
            flex-basis: 200px;
            margin-right: 30px;

            &:nth-child(1) {
                margin-top: 15rem;
            }
            &:nth-child(2),
            &:nth-child(4) {
                margin-top: 6.5rem;
            }
        }

        .img-holder {
            height: min(242px, 20vw);
            margin-bottom: 40px;
            position: relative;
            user-select: none;
        }

        .title {
            color: #fff;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 5px;
            font-size: 20px;
        }

        .overlay {
            @include overlay(
                1,
                linear-gradient(to bottom, rgba(0, 0, 0, 0), 75%, #015136)
            );
        }
    }
}

.info-shadow {
    box-shadow: 0 5px rgba(#1c1e1b, 0.21);
}
</style>
