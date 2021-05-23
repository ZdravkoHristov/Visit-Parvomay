<template>
    <div class="wrapper">
        <z-calendar-header
            :month="currentPeriods.month"
            :currentYear="currentPeriods.year"
            :date="currentDate"
            @changeDate="changeDate"
        ></z-calendar-header>
        <z-calendar-body
            :month="currentPeriods.month"
            :currentYear="currentPeriods.year"
            :currentDate="currentDate"
            :todayDate="todayDate"
        ></z-calendar-body>
    </div>
</template>

<script>
import Header from "./Header.vue";
import Body from "./Body.vue";

export default {
    data() {
        const currentDate = new Date();
        const todayDate = new Date();
        return {
            currentDate,
            todayDate,
            monthsInfo: [
                {
                    name: "Януари",
                    number: "01"
                },
                {
                    name: "Февруари",
                    number: "02"
                },
                {
                    name: "Март",
                    number: "03"
                },
                {
                    name: "Април",
                    number: "04"
                },
                {
                    name: "Май",

                    number: "05"
                },
                {
                    name: "Юни",
                    number: "06"
                },
                {
                    name: "Юли",
                    number: "07"
                },
                {
                    name: "Август",
                    number: "08"
                },
                {
                    name: "Септември",
                    number: "09"
                },
                {
                    name: "Октомври",
                    number: "10"
                },
                {
                    name: "Ноември",
                    number: "11"
                },
                {
                    name: "Декември",
                    number: "12"
                }
            ]
        };
    },

    computed: {
        currentPeriods: function() {
            const month = this.currentDate.getMonth();
            const year = this.currentDate.getFullYear();
            return { month: this.monthsInfo[month], year };
        }
    },

    methods: {
        changeDate(newDate) {
            this.currentDate = newDate;
        }
    },
    components: {
        zCalendarHeader: Header,
        zCalendarBody: Body
    }
};
</script>

<style scoped></style>
