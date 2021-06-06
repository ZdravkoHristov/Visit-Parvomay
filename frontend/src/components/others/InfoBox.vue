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
        width: 60%;
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

/* ----------------------------------------------------------------------------
 -------------------------------- RESPONSIVE ----------------------------------
 ------------------------------------------------------------------------------ */

@media(max-width: 1150px) {
    .info-box{
        font-size: 1.15rem;
        padding: 25px 30px;
        .info-icon {
            width: 2rem;
            height: 2rem;
            padding: 0.7rem;
            p {font-size: 0.8rem;}
        }
        p {width: 80%;}
    }
}

@media(max-width: 750px) {
    .info-box p {width: 100%;}
    .info-box .info-icon {display:none;}
}
</style>
