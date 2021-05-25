<template>
    <main class="p-y-4">
        <calendar class="calendar" @changeDate="changeDate"></calendar>
        <section class="info">
            <article class="today">
                <h2>Днес:</h2>
                <p>{{ todayString }}{{ getCelebrationString(new Date()) }}</p>
            </article>
            <article class="month">
                <h2>
                    Празници през месец {{ months[selectedDate.getMonth()] }}
                </h2>

                <p v-for="i in monthCelebrations" :key="i.date">
                    {{ getDateString(i.date) }}, {{ i.name }}
                </p>
            </article>
        </section>
    </main>
</template>

<script>
import Calendar from "@/components/others/Calendar/Calendar.vue";

export default {
    data() {
        return {
            months: [
                "Януари",
                "Февруари",
                "Март",
                "Април",
                "Май",
                "Юни",
                "Юли",
                "Август",
                "Септември",
                "Октомври",
                "Ноември",
                "Декември"
            ],
            days: [
                "Неделя",
                "Понеделник",
                "Вторник",
                "Сряда",
                "Петък",
                "Събота"
            ],
            celebrations: [
                {
                    date: new Date(2021, 4, 25),
                    name: "Празник на нещо си"
                },

                {
                    date: new Date(2021, 4, 24),
                    name: "lorem"
                }
            ],
            selectedDate: new Date()
        };
    },

    methods: {
        getDateString(date) {
            const dayName = this.days[date.getDay()];
            const monthName = this.months[date.getMonth()];
            return `${dayName}, ${date.getDate()} ${monthName.toLowerCase()} ${date.getFullYear()}г.`;
        },
        getCelebration(date) {
            return this.celebrations.find(target =>
                this.isTheSameDate(date, target.date)
            );
        },
        getCelebrationString(date) {
            const celebration = this.getCelebration(date);

            return celebration ? ", " + celebration.name : "";
        },
        changeDate(newDate) {
            this.selectedDate = newDate;
        },
        isTheSameDate(date1, date2) {
            return (
                date1.getDate() === date2.getDate() &&
                date1.getMonth() === date2.getMonth() &&
                date1.getFullYear() === date2.getFullYear()
            );
        }
    },

    computed: {
        todayString() {
            const date = new Date();
            return this.getDateString(date);
        },
        monthCelebrations() {
            return this.celebrations.filter(
                celebration => !this.isTheSameDate(new Date(), celebration.date)
            );
        }
    },

    provide() {
        return {
            celebrations: this.celebrations
        };
    },
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
