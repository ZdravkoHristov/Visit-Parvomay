<template>
    <div class="wrapper" ref="wrapper">
        <div class="content" ref="content" :style="contentStyles">
            <slot name="items"></slot>
        </div>

        <div class="controls">
            <button @click="prev" :disabled="currentSlide === 0" class="btn">
                <i class="far fa-arrow-alt-circle-left "></i>
            </button>
            <button @click="next" :disabled="!hasNext" class="btn">
                <i class="far fa-arrow-alt-circle-right  "></i>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            hasNext: true,
            currentSlide: 0,
            itemWidth: 240,
            contentEl: null,
            items: null,
            contentWidth: null,
            lastMovedBy: 0
        };
    },

    methods: {
        prev() {
            this.currentSlide--;
        },
        next() {
            this.currentSlide++;
        },

        initVars() {
            this.contentEl = this.$refs.content;
            this.items = this.contentEl.children;
            this.contentWidth = this.contentEl.offsetWidth;

            this.rightSpace = Number(
                window
                    .getComputedStyle(this.contentEl)
                    .gridColumnGap.slice(0, -2)
            );

            this.fitCount = Math.floor(
                (this.contentWidth - 4 * this.rightSpace) / this.itemWidth
            );
        }
    },

    mounted() {
        this.initVars();
    },
    computed: {
        percentsAway() {
            return -this.percentStep * this.currentSlide;
        },
        contentStyles() {
            const count = (this.items || []).length;
            return {
                gridTemplateColumns: `repeat(${count}, ${this.itemWidth}px)`
            };
        },
        itemsCount() {
            return this.items?.length || 0;
        }
    },
    watch: {
        currentSlide(newValue, prevValue) {
            const direction = newValue > prevValue ? -1 : 1;
            const margin = +this.contentEl.style.marginLeft.slice(0, -2) || 0;
            let moveBy = this.itemWidth + this.rightSpace;
            const itemsLeft = this.items.length - newValue;

            if (itemsLeft === this.fitCount && direction === -1) {
                const totalContentWidth =
                    (this.itemWidth + this.rightSpace) * this.items.length -
                    this.rightSpace * 2 -
                    this.contentWidth -
                    margin;

                const lastEl = this.contentEl.children[
                    this.contentEl.children.length - 1
                ];
                const lastElRight = lastEl.getBoundingClientRect().right;

                console.log(totalContentWidth, lastElRight);
                moveBy = totalContentWidth - lastElRight;
                this.lastMovedBy = moveBy;
                this.hasNext = false;
            } else {
                this.hasNext = true;
            }

            if (
                direction === 1 &&
                this.items.length - newValue === this.fitCount + 1
            ) {
                moveBy = this.lastMovedBy;
            }

            this.contentEl.style.marginLeft =
                margin + moveBy * direction + "px";
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
    grid-gap: 23px;
    color: #fff;
    margin: auto;
    padding: 1rem 0;
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

/* ----------------------------------------------------------------------------
 -------------------------------- RESPONSIVE ----------------------------------
 ------------------------------------------------------------------------------ */

@media(max-width: 1150px) {
    .content{grid-gap: 15px;}
}
</style>
