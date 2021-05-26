<template>
    <div class="info-box">
        <div class="info-icon" v-if="showIcon">
            <i class="fas fa-info-circle"></i>
        </div>
        <p class="ta-c">
            <slot></slot>
        </p>
    </div>
</template>

<script>
export default {
    props: {
        showIcon: {
            default: true
        }
    }
};
</script>

<style lang="scss" scoped>
.info-box {
    background-color: #058a5e;
    color: #e5fff1;
    padding: 30px;
    font-size: 21px;
    position: relative;
    font-family: "Book Antiqua", Arial;

    p {
        width: 80%;
        margin: auto;
    }

    .info-icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>
