<template>
    <div class="wrapper" ref="wrapper">
        <div class="content" ref="content" :style="contentStyles">
            <slot name="items"></slot>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentSlide: 0,
            percentStep: 60,
            contentEl: null,
            items: null,
            contentWidth: null,
            hasNext: false
        };
    },
    updated() {
        const itemsCount = this.items.length;
        const itemWidth = this.items[0].offsetWidth;
        const marginRight = Number(
            window.getComputedStyle(this.items[0]).marginRight.slice(0, -2)
        );
        const totalWidth = itemsCount * (itemWidth + marginRight);
        const passedWidth =
            Math.abs((this.percentsAway / 100) * this.contentWidth) +
            this.contentWidth;

        this.hasNext = passedWidth <= totalWidth;
    },
    mounted() {
        this.contentEl = this.$refs.content;
        this.items = this.contentEl.children;
        console.log("items: ", this.items);
        this.contentWidth = this.contentEl.offsetWidth;
    },
    computed: {
        percentsAway() {
            return -this.percentStep * this.currentSlide;
        },
        contentStyles() {
            return {
                gridTemplateColumns: `repeat(4, 200px)`
            };
        }
    },
    watch: {
        currentSlide() {
            this.$refs.content.style.marginLeft = this.percentsAway + "%";
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper {
    position: relative;
    overflow: hidden;
}
.content {
    display: grid;
    color: #fff;
    gap: 20px;
    margin: auto;
    padding: 1rem;
    margin-left: 0;
    transition: 0.4s ease-in;

    & > * {
        cursor: pointer;
        display: none;
    }
}
</style>
