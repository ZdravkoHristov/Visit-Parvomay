<template>
    <section class="info-box">
        <p class="ta-c">
            Добре дошли в нашия уебсайт! Тук ще откриете интересни<br />
            забележителности, цветни кътчета, гостоприемни заведения<br />
            и интересна информация за общи
        </p>
    </section>
    <section class="wrapper-section">
        <article class="what-can-you-find container">
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
                        <img
                            src="https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png"
                            alt="читалище Първомай"
                        />
                        <span class="title">Читалище</span>
                    </div>
                </div>
                <div class="col">
                    <div class="img-holder">
                        <img
                            src="https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png"
                            alt="читалище Първомай"
                        /><span class="title">Читалище</span>
                    </div>
                    <div class="img-holder">
                        <img
                            src="https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png"
                            alt="читалище Първомай"
                        /><span class="title">Читалище</span>
                    </div>
                </div>
                <div class="col">
                    <div class="img-holder">
                        <img
                            src="https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png"
                            alt="читалище Първомай"
                        /><span class="title">Читалище</span>
                    </div>
                    <div class="img-holder">
                        <img
                            src="https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png"
                            alt="читалище Първомай"
                        /><span class="title">Читалище</span>
                    </div>
                </div>
                <div class="col">
                    <div class="img-holder">
                        <img
                            src="https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png"
                            alt="читалище Първомай"
                        /><span class="title">Читалище</span>
                    </div>
                </div>
            </div>
        </article>
    </section>

    <section class="info-box-2">
        <p class="ta-c">
            Не стойте гладни, а опитайте специалитетите на нашите<br />
            ресторанти! Също така, не пропускайте чаша топко кафе в<br />
            уютните ни заведения!
        </p>
    </section>

    <section class="restaurant-boxes">
        <div class="button-wrapper">
            <button class="button-restaurant">
                Към ресторанта &gt; &gt;
            </button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
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
    background-color: var(--clr-other-green);
    padding: 8px;
    border-radius: 12px;
    color: white;
    border: 1px solid white;
    margin-bottom: 5%;
}

.button-wrapper {
    margin-right: 10%;
    justify-content: flex-end;
    display: flex;
}

.wrapper-section {
    background-color: var(--clr-light-gray1);
}

.what-can-you-find {
    display: flex;
    padding: 1.2rem 0 1.2rem 1.5rem;

    .info {
        min-width: 300px;
    }

    h2 {
        color: var(--clr-other-green);
        letter-spacing: 2px;
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
