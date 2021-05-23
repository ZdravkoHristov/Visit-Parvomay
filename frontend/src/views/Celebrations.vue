<template>
    <main class="p-y-4">
        <calendar class="calendar"></calendar>
        <div class="info"></div>
    </main>
</template>

<script>
import Calendar from "@/components/others/Calendar/Calendar.vue";

export default {
    components: {
        Calendar
    }
};
</script>

<style lang="scss" scoped>
main {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
}
</style>
