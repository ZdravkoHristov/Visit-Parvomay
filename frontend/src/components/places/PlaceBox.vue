<template>
    <div class="box">
        <div class="image" :style="imgStyle"></div>
        <div class="text">
            <p class="title">{{ place.title }}</p>
            <p class="info">{{ place.info }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["place"],
    computed: {
        imgStyle() {
            return {
                backgroundImage: `url("${this.place.imgSrc}")`
            };
        }
    }
};
</script>

<style lang="scss" scoped>
.image {
    background-size: cover;
    background-position: center;
    height: 200px;
}

.text {
    background-color: var(--clr-light-gray2);
    color: #000;
    padding: 0.25rem 1.2rem;
}

.title {
    color: var(--clr-other-green);
    font-size: 18px;
    margin-bottom: 5px;
}
</style>
