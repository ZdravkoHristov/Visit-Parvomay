<template>
    <pm-header></pm-header>
    <p>asd</p>
    <router-view class="main-content"></router-view>
</template>

<script>
import Header from "./components/header/Header";
export default {
    components: {
        pmHeader: Header
    }
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
p {
    font-size: var(--txt-nm);
}
</style>
