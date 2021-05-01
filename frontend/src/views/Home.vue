<template>
    <section class="info-box">
        <p class="ta-c">
            Добре дошли в нашия уебсайт! Тук ще откриете интересни<br />
            забележителности, цветни кътчета, гостоприемни заведения<br />
            и интересна информация за общи
        </p>
    </section>

    <section class="what-can-you-find ">
        <div class="info">
            <h2>
                Какво мога да намеря в община Първомай?
            </h2>

            <p>
                Подбрали сме Ви едни от<br />
                най-интересните<br />
                забележителности, които<br />
                може да намерите на<br />
                територията на община<br />
                Първомай
            </p>

            <router-link class="btn-primary" to="places"
                >Към места &gt; &gt;</router-link
            >
        </div>

        <div class="images">
            <div class="col">
                <div class="img-holder">
                    <div class="dark-overlay"></div>
                    <img
                        src="https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png"
                        alt="читалище Първомай"
                    />
                    <span class="title">Читалище</span>
                </div>
            </div>
            <div class="col">
                <div class="img-holder">
                    <div class="dark-overlay"></div>
                    <img
                        src="https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png"
                        alt="читалище Първомай"
                    /><span class="title">Читалище</span>
                </div>
                <div class="img-holder">
                    <div class="dark-overlay"></div>
                    <img
                        src="https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png"
                        alt="читалище Първомай"
                    /><span class="title">Читалище</span>
                </div>
            </div>
            <div class="col">
                <div class="img-holder">
                    <div class="dark-overlay"></div>
                    <img
                        src="https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png"
                        alt="читалище Първомай"
                    /><span class="title">Читалище</span>
                </div>
                <div class="img-holder">
                    <div class="dark-overlay"></div>
                    <img
                        src="https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png"
                        alt="читалище Първомай"
                    /><span class="title">Читалище</span>
                </div>
            </div>
            <div class="col">
                <div class="img-holder">
                    <div class="dark-overlay"></div>
                    <img
                        src="https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png"
                        alt="читалище Първомай"
                    /><span class="title">Читалище</span>
                </div>
            </div>
        </div>
    </section>

    <section class="info-box-2">
        <p class="ta-c">
            Не стойте гладни, а опитайте специалитетите на нашите<br />
            ресторанти! Също така, не пропускайте чаша топко кафе в<br />
            уютните ни заведения!
        </p>
    </section>

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
export default {
    components: { RestaurantBox }
};
</script>
<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;

.dark-overlay {
    @include dark-overlay(0.2);
}

.btn-primary {
    border: 1px solid white;
}
.info-box {
    background-color: var(--clr-other-green);
    color: white;
    padding: 30px;
    font-size: 21px;
}

.info-box-2 {
    background-color: var(--clr-other-green);
    color: white;
    padding: 30px;
    font-size: 21px;
}

.restaurant-boxes {
    background-color: var(--clr-dark-1);
}
.button-restaurant {
    padding: 8px;
    border-radius: 12px;
    color: white;
    border: 1px solid white;
    margin-bottom: 5%;
    margin-top: 10%;
    text-decoration: none;
}

.button-wrapper {
    margin-right: 10%;
    justify-content: flex-end;
    display: flex;
}

.boxes-holder {
    display: flex;
    & > * {
        width: 14%;
        height: 35vh;
        margin: 0% 4% 0% 4%;
        position: relative;
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
    display: flex;
    padding: 1.2rem 0 1.2rem 3.5rem;
    margin: auto;
    max-width: 1300px;

    .info {
        min-width: 300px;
    }

    h2 {
        color: var(--clr-other-green);
        letter-spacing: 2px;
        margin-top: 5rem;
    }

    p {
        margin: 30px 0 20px 0;
        line-height: 1.6;
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
        }

        .title {
            color: #fff;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 5px;
            font-size: 20px;
        }
    }
}
</style>
