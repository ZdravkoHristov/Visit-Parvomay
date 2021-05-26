<template>
    <div class="box">
        <div class="overlay"></div>
        <div class="star">
            4
        </div>
        <p class="f-w-800">Ресторант "Хипноза"</p>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
.star {
    width: 50px;
    height: 50px;
    background-color: var(--clr-other-green);
    clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transform: translate(-50%, -50%) rotate(-16deg);
}
.overlay {
    @include overlay(
        1,
        linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(#1c1e1b, 0.5))
    );
}
.box {
    background-size: cover;
    border: 1px solid #626262;
    position: relative;
    box-shadow: 0 0 59px rgba(#1c1e1b, 0.38);
    p {
        color: white;
        font-size: 23px;
        letter-spacing: 2px;
        position: absolute;
        bottom: 10px;
        left: 10px;
    }
}
</style>
