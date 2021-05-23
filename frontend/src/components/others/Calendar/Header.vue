<template>
    <header>
        <h3>{{ month.name }} {{ currentYear }}</h3>
        <div class="icons">
            <i class="fas fa-chevron-left" @click="changeMonth('prev')"></i>
            <i class="fas fa-chevron-right" @click="changeMonth('next')"></i>
        </div>
    </header>
</template>

<script>
export default {
    props: ["month", "currentYear", "date"],
    emits: ["changeDate"],
    methods: {
        changeMonth(newMonth) {
            const monthStep = newMonth === "prev" ? -2 : 0;
            const newDate = new Date(
                this.currentYear,
                +this.month.number + monthStep,
                this.date.getDate()
            );
            this.$emit("changeDate", newDate);
        }
    }
};
</script>

<style lang="scss" scoped>
header {
    margin-bottom: 10px;
    text-align: center;
    font-size: 27px;
    display: flex;
    justify-content: space-between;
    font-family: "Peddana", serif;
    color: var(--clr-other-green);
    i {
        cursor: pointer;
        font-size: 15px;
    }
}
</style>
