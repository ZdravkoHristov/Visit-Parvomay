<template>
    <div class="info-box">
        <div class="info-icon">
            <i class="fas fa-info-circle"></i>
        </div>
        <p class="ta-c">
            <slot></slot>
        </p>
    </div>
</template>

<style lang="scss" scoped>
.info-box {
    background-color: var(--clr-other-green);
    color: white;
    padding: 30px;
    font-size: 21px;
    position: relative;
    .info-icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>
