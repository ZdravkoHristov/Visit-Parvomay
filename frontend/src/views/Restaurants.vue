<template>
    <InfoBox class="bot">Вижте най-популярните заведения сред<br> посетителите на сайта</InfoBox>
    <section class="box-holder">
        <div class="with-text">
            <restaurantsReview class="small right">
                <template v-slot:icons>
                    <i class="fas fa-long-arrow-alt-up icon-size green"></i>
                    <i class="fas fa-star icon-size green"></i>
                    <h3>50</h3>
                    <i class="fas fa-utensils icon-size red"></i>
                </template>
            </restaurantsReview>
        </div>
        <div class="with-text">
            <bigReview class="big">
                <template v-slot:icons>
                    <i class="fas fa-long-arrow-alt-up icon-size green"></i>
                    <i class="fas fa-star icon-size green"></i>
                    <h3>50</h3>
                    <i class="fas fa-utensils icon-size red"></i>
                </template>
            </bigReview>
        </div>
        <div class="with-text">
            <restaurantsReview class="small left">
                <template v-slot:icons>
                    <i class="fas fa-long-arrow-alt-up icon-size green"></i>
                    <i class="fas fa-star icon-size green"></i>
                    <h3>50</h3>
                    <i class="fas fa-utensils icon-size red"></i>
                </template>
            </restaurantsReview>
        </div>
    </section>
    <section class="all-restaurants">
        <div class="title">
            <h1> Всички ресторанти и заведения:</h1>
        </div>
        <InfoBox class="bot">Моля, кликнете върху някоя кутийка</InfoBox>
        <div class="all-restaurants-holder"></div>
        <div class="Row-restaurants">
            <restaurantsReview class="">
                <template v-slot:icons>
                    <i class="fas fa-star icon-size green"></i>
                    <h3>50</h3>
                    <i class="fas fa-utensils icon-size red"></i>
                </template>
            </restaurantsReview>
            <restaurantsReview class="">
                <template v-slot:icons>
                    <i class="fas fa-star icon-size green"></i>
                    <h3>50</h3>
                    <i class="fas fa-utensils icon-size red"></i>
                </template>
            </restaurantsReview>
            <restaurantsReview class="">
                <template v-slot:icons>
                    <i class="fas fa-star icon-size green"></i>
                    <h3>50</h3>
                    <i class="fas fa-utensils icon-size red"></i>
                </template>
            </restaurantsReview>
            <restaurantsReview class="">
                <template v-slot:icons>
                    <i class="fas fa-star icon-size green"></i>
                    <h3>50</h3>
                    <i class="fas fa-utensils icon-size red"></i>
                </template>
            </restaurantsReview>
        </div>
        <div class="Row-restaurants">
            <restaurantsReview class="">
                <template v-slot:icons>
                    <i class="fas fa-star icon-size green"></i>
                    <h3>50</h3>
                    <i class="fas fa-utensils icon-size red"></i>
                </template>
            </restaurantsReview>
            <restaurantsReview class="">
                <template v-slot:icons>
                    <i class="fas fa-star icon-size green"></i>
                    <h3>50</h3>
                    <i class="fas fa-utensils icon-size red"></i>
                </template>
            </restaurantsReview>
            <restaurantsReview class="">
                <template v-slot:icons>
                    <i class="fas fa-star icon-size green"></i>
                    <h3>50</h3>
                    <i class="fas fa-utensils icon-size red"></i>
                </template>
            </restaurantsReview>
            <restaurantsReview class="">
                <template v-slot:icons>
                    <i class="fas fa-star icon-size green"></i>
                    <h3>50</h3>
                    <i class="fas fa-utensils icon-size red"></i>
                </template>
            </restaurantsReview>
        </div>
        <div class="Row-restaurants">
            <restaurantsReview class="">
                <template v-slot:icons>
                    <i class="fas fa-star icon-size green"></i>
                    <h3>50</h3>
                    <i class="fas fa-utensils icon-size red"></i>
                </template>
            </restaurantsReview>
            <restaurantsReview class="">
                <template v-slot:icons>
                    <i class="fas fa-star icon-size green"></i>
                    <h3>50</h3>
                    <i class="fas fa-utensils icon-size red"></i>
                </template>
            </restaurantsReview>
            <restaurantsReview class="">
                <template v-slot:icons>
                    <i class="fas fa-star icon-size green"></i>
                    <h3>50</h3>
                    <i class="fas fa-utensils icon-size red"></i>
                </template>
            </restaurantsReview>
            <restaurantsReview class="">
                <template v-slot:icons>
                    <i class="fas fa-star icon-size green"></i>
                    <h3>50</h3>
                    <i class="fas fa-utensils icon-size red"></i>
                </template>
            </restaurantsReview>
        </div>
    </section>
    <div class="Comment">
        <div class="comment-name">
            <p>username</p>
        </div>
        <div class="comment-box">
            <div>
                <div class="profile">
                </div>
                <div class="user-name">
                    <p>Коментар към:</p>
                    <h2>Ресторант Стремон</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet congue ante, a pretium ligula. Donec sit amet libero vel sapien tempus eleifend ac mattis risus. Nam ut laoreet tellus. Donec eget ornare arcu. Praesent scelerisque, tortor ut dignissim egestas, turpis augue cursus leo, eget ultrices dolor est id augue. Nam at placerat mauris. Aenean velit purus, posuere in congue nec, tempus accumsan urna. Aenean efficitur sit amet quam pretium vulputate. Duis porta rutrum viverra. Donec pretium vestibulum arcu vel vulputate. Suspendisse potenti.</p>
            </div>
        </div>
    </div>
</template>
<script>
import RestaurantsReview from "@/components/restaurants/RestaurantsReview";
import BigReview from "@/components/restaurants/BigReview";
import InfoBox from "@/components/others/InfoBox";
export default {
    components: { RestaurantsReview, InfoBox, BigReview }
};

</script>
<style lang="scss" scoped>
.box-holder {
    height: 60vh;
    margin-top: 5%;
    display: flex;
    width: 90%;
    margin: 0 auto;
}

.all-restaurants {
    margin-top: 10%;
    background: var(--clr-dark-2);
    margin-bottom: -2%;

    .title {
        color: white;
        font-size: 22px;
        text-align: center;
        padding: 2% 0% 2% 0%;
        letter-spacing: 8px;
    }
}

.Row-restaurants {
    display: flex;
    width: 65%;
    margin: 0 auto;
    height: 50vh;
    margin-bottom: 2%;
    color: white;
    padding-bottom: 5%;
}



.with-text {
    width: 35%;
    align-items: flex-end;
    display: flex;
}

.right {
    margin-right: 0%;
}

.left {
    margin-left: 0%;
}

.big {
    width: 70%;
}

.small {
    width: 56%;
    height: 76%;
}

.bot {
    margin-bottom: 5%;
}

.Comment {
    background-image: linear-gradient(to bottom, rgb(0 153 102 / 67%), rgb(0 153 102 / 50%)), url("~@/assets/parvomay/whitefood.jpg");
    height: 90vh;
    background-size: cover;
}

.icon-size {
    font-size: 22px;
}

.green {
    color: var(--clr-other-green);
}

.icon-holder {
    display: flex;
    margin: 4% 0% 0% 3%;

    h3 {
        font-size: 16px;
        color: #d30031;
    }

    .red {
        color: #d30031;
    }
}

.comment-name {}

.comment-box {
    width: 65%;
    background: white;
    margin: 0 auto;
    margin-top: 16%;
    padding: 50px;
}

.profile {
    transform: translate(-83%, -79%);
    background-image: url("~@/assets/parvomay/User-Icon.png");
    background-size: cover;
    width: 150px;
    height: 150px;
    position: absolute;
}

.user-name {
    display: flex;
}

</style>
