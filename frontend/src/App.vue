<template>
    <pm-header></pm-header>
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
</style>
