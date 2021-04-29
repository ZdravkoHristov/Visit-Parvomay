<template>
    <header class="main-header">
        <div class="grey-box"></div>
        <div class="header-img">
            <h2>ЛОГО</h2>
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
.router-link-active {
    background: #117d59;
}

.main-header {
    height: 400px;
    min-height: 50vh;
    width: 100%;
    display: flex;

    .grey-box {
        width: 20%;
        background: var(--clr-dark-3);
    }

    h1 {
        color: #f3f3f3;
        font-size: var(--txt-lg);
        left: -4rem;
        position: relative;
    }

    .header-img {
        background-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.3)
            ),
            url("~@/assets/parvomay/parvomay.jpg");
        height: 100%;
        width: 80%;
        background-position: center;
        display: flex;
        flex-direction: column;
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
        font-size: min(1.8vw, 20px);
        color: var(--clr-light-gray2);
        padding-right: 100px;
        text-align: center;
        flex: 1;
    }
}

.main-nav {
    background: #242421;
    position: sticky;
    top: 0;
    box-shadow: 0 -6px 10px -2px #1a1a1a;
    z-index: 999999;

    a {
        flex: 1;
        text-align: center;
        text-decoration: none;
        color: #f3f3f4;
        font-size: 23px;
        padding: 22px;
        display: inline-block;

        &:hover {
            background: var(--clr-other-green);
            transition: 0.5s;
            cursor: pointer;
        }
    }

    a + a {
        border-left: 1px solid #848484;
    }
}
</style>
