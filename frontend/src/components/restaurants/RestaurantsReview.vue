<template>
    <div class="box">
        <div class="img">
        <div class="star">
            4
        </div>
        <div class="dark-overlay"></div>
        </div>


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
    position: relative;
    z-index: 1;
}

.img{
    position:relative;
    background-image: url("../../assets/parvomay/hiphop.jpeg");
    height: 100%;
    background-size: cover;

}
.dark-overlay {
    @include overlay;
}
.box {
    background-size: cover;
    border: 1px solid white;
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
