<template>
    <header class="main-header">
        <div class="grey-box"></div>
        <div class="header-img">
            <div class="overlay"></div>
            <div class="flex-cy header-text">
                <h1>Община <br />Първомай</h1>
                <p class="flex-ex">
                    Lorem Ipsum is<br />
                    simply dummy<br />
                    text of the<br />
                    printing and<br />
                    typesetting industry.<br />
                    Lorem Ipsum
                </p>
            </div>
        </div>
    </header>

    <nav class="main-nav">
        <div class="flex menu">
            <router-link to="home">Начало</router-link>

            <router-link to="places">Места</router-link>

            <router-link to="restaurants">Ресторанти</router-link>

            <router-link to="tourism">Туризъм</router-link>

            <router-link to="celebrations">Празненства</router-link>

            <router-link to="map">Карта</router-link>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use '~@/styles/partials/mixins' as *;
.router-link-active {
    background: var(--clr-other-green);
}

.main-header {
    height: 400px;
    min-height: 80vh;
    width: 100%;
    display: flex;

    .grey-box {
        width: 20%;
        background: var(--clr-dark-3);
    }

    h1 {
        color: var(--clr-light-gray2);
        font-size: var(--txt-lg);
        line-height: var(--txt-lg);
        left: -4rem;
        position: relative;
        letter-spacing: 4px;
    }

    .header-img {
        background-image: url("~@/assets/parvomay/parvomay.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: relative;
        height: 100%;
        width: 80%;
        display: flex;
        flex-direction: column;

        .overlay {
            @include overlay(
                1,
                linear-gradient(
                    to bottom,
                    rgba(#1c1e1b, 0.4),
                    rgba(#238a65, 0.5)
                )
            );
            z-index: 1;
        }

        * {
            z-index: 2;
        }
    }

    .header-text {
        flex: 1;
    }
    h2 {
        text-align: right;
        color: var(--clr-light-gray2);
        margin: 10px 20px 0px 0px;
    }

    p {
        letter-spacing: 2.5px;
        font-size: calc(var(--txt-lg) / 3);
        color: var(--clr-light-gray2);
        padding-right: 100px;
        text-align: center;
        flex: 1;
    }
}

.main-nav {
    background: #2e302d;
    position: sticky;
    top: 0;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.75);
    z-index: 999999;

    a {
        font-family: "Book Antiqua", Ariel;
        flex: 1;
        text-align: center;
        text-decoration: none;
        color: var(--clr-light-gray2);
        font-size: 2vw;
        padding: 2% 1.5%;
        display: inline-block;
        transition: ease-in-out 1s;

        &:hover {
            background: var(--clr-other-green);
            transition: 0.5s;
            cursor: pointer;
        }
    }

    a + a {
        border-left: 1px #61655a solid;
    }
}
</style>
