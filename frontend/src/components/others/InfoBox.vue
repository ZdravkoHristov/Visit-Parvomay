<template>
    <div class="info-box">
        <div class="info-icon" v-if="showIcon">
            <p>i</p>
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
    font-size: 1.4rem;
    position: relative;
    font-family: Roboto, Arial, sans-serif;

    p {
        width: 80%;
        margin: auto;
    }

    .info-icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height: 2.2rem;
        width: 2.2rem;
        padding: 0.75rem;
        border-radius: 50%;
        border: #e5fff1 solid 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            margin: 0;
            font-size: 1rem;
            font-weight: 600;
        }
    }
}
</style>
