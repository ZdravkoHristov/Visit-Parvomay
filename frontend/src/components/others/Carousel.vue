<template>
    <div class="wrapper" ref="wrapper">
        <div class="content" ref="content" :style="contentStyles">
            <slot name="items"></slot>
        </div>

        <div class="controls">
            <button @click="prev" :disabled="currentSlide === 0" class='btn'>
                <i class="far fa-arrow-alt-circle-left "></i>
            </button>
            <button @click="next" :disabled="!hasNext" class='btn'>
                <i class="far fa-arrow-alt-circle-right  "></i>
            </button>
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

    methods: {
        prev() {
            this.currentSlide--;
        },
        next() {
            this.currentSlide++;
        },
        updateHasNext() {
            const itemsCount = this.items.length;
            const itemWidth = this.items[0].offsetWidth;
            const marginRight = Number(
                window.getComputedStyle(this.items[0]).marginRight.slice(0, -2)
            );
            console.log("marginRight: ", this.$refs.content.style.gap);
            const totalWidth = itemsCount * (itemWidth + marginRight);
            const passedWidth =
                Math.abs((this.percentsAway / 100) * this.contentWidth) +
                this.contentWidth;

            this.hasNext = passedWidth <= totalWidth;
        }
    },

    updated() {
        this.updateHasNext();
    },
    mounted() {
        this.contentEl = this.$refs.content;
        this.items = this.contentEl.children;
        this.contentWidth = this.contentEl.offsetWidth;
    },
    computed: {
        percentsAway() {
            return -this.percentStep * this.currentSlide;
        },
        contentStyles() {
            const count = (this.items || []).length;
            return {
                gridTemplateColumns: `repeat(${count}, 240px)`
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
    grid-gap: 2%;
    color: #fff;
    margin: auto;
    padding: 1rem;
    margin-left: 0;
    transition: 0.4s ease-in;
}

button {
    background: inherit;
    color: inherit;
    border: inherit;
    font-size: inherit;

    &[disabled] {
        color: gray;
    }
}
</style>
