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
        <ul class="flex menu">
            <li>
                <a href="">Начало</a>
            </li>
            <li>
                <a href="">Места</a>
            </li>
            <li>
                <a href="">Ресторанти</a>
            </li>
            <li>
                <a href="">Туризъм</a>
            </li>
            <li>
                <a href="">Празненства</a>
            </li>
            <li>
                <a href="">Карта</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
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
        font-size: 20px;
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

    li {
        list-style: none;
        flex: 1;
        text-align: center;

        &:hover {
            background: var(--clr-other-green);
            transition: 0.5s;
            cursor: pointer;
        }
    }

    li + li {
        border-left: 1px solid #848484;
    }

    a {
        text-decoration: none;
        color: #f3f3f4;
        font-size: 23px;
        padding: 22px;
        display: inline-block;
    }
}
</style>
