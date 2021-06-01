<template>
    <div class="box">
        <div class="img">
        <div class="star">
            4
        </div>
        <div class="dark-overlay"></div>
        </div>
        <div class="rating">
            <p>Ресторант<br> "Хипоноза"</p>
            <div class="icon-holder">
            <i class="fas fa-long-arrow-alt-up icon-size green"></i>
            <i class="fas fa-star icon-size green"></i>
            <h3>50</h3>
            <i class="fas fa-utensils icon-size red"></i>
        </div>
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
    height: 100%;
    margin: 0 auto;
    p {

    }
}

.rating{
display: flex;
    
    p{
        font-size: 21px;
    margin: 2% 0% 0% 5%;
    }
}
.icon-size{
    font-size: 22px;
}

.green{
    color: var(--clr-other-green);  
}

.icon-holder{
        display: flex;
    margin: 4% 0% 0% 20%;

                h3{
                    font-size: 16px;
                    color: #d30031;
                }

                .red{
                    color: #d30031;
                }
}
</style>
