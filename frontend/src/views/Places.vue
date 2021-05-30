<template>
    <info-box>
        Използвайте стрелките, за да разгледате всички паркове и <br />площадки
        на територията на община Първомай
    </info-box>
    <section class="remarkable-places">
        <div class="info ta-c">
            <h2>Разходка сред природата</h2>
            <p>
                Няма нищо по-приятно от разходка на свеж въздух сред природата.
                Екипът ни Ви препоръчва да посетите тези зелени площи.
            </p>
        </div>

        <div class="carousel-wrapper">
            <carousel>
                <template v-slot:items>
                    <place-box
                        v-for="place in carouselItems"
                        :key="place.id"
                        :place="place"
                    >
                    </place-box
                ></template>
            </carousel>
        </div>
    </section>
    <info-box>
        Моля, кликнете върху някоя кутийка
    </info-box>
    <section>
        <h2>
            Забележителностите на<br />
            общината:
        </h2>

        <div class="items" :style="rowStyles" :ref="items">
            <transition name="info">
                <place-infobox
                    class="info-box"
                    :info="activeInfo"
                    :style="infoBoxStyles"
                    v-if="infoBoxIndex > -1"
                    @goBack="goBack"
                    @goNext="goNext"
                    @close="close"
                ></place-infobox>
            </transition>
            <div
                class="col"
                @click="showInfo(j)"
                v-for="j in items"
                :key="j.id"
                :style="{ 'background-image': `url('${j.imgSrc}')` }"
                :class="isActive(j.id)"
            >
                <div class="overlay">
                    <h1 class="hover-text">
                        {{ j.name }}
                    </h1>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import InfoBox from "@/components/others/InfoBox";
import PlaceBox from "@/components/places/PlaceBox";
import Carousel from "@/components/others/Carousel";
import PlaceInfobox from "../components/places/PlaceInfobox.vue";
export default {
    data() {
        return {
            itemsPerRow: 3,
            infoBoxIndex: -1,
            activeIndex: -1,
            carouselItems: [
                {
                    id: 0,
                    imgSrc:
                        "https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png",
                    title: "Lorem Ipsum",
                    info: "Lorem ispum is simply dummy"
                },
                {
                    id: 1,
                    imgSrc:
                        "https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png",
                    title: "Lorem Ipsum",
                    info: "Lorem ispum is simply dummy"
                },
                {
                    id: 2,
                    imgSrc:
                        "https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png",
                    title: "Lorem Ipsum",
                    info: "Lorem ispum is simply dummy"
                },
                {
                    id: 3,
                    imgSrc:
                        "https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png",
                    title: "Lorem Ipsum",
                    info: "Lorem ispum is simply dummy"
                },
                {
                    id: 4,
                    imgSrc:
                        "https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png",
                    title: "Lorem Ipsum",
                    info: "Lorem ispum is simply dummy"
                },
                {
                    id: 5,
                    imgSrc:
                        "https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png",
                    title: "Lorem Ipsum",
                    info: "Lorem ispum is simply dummy"
                },
                {
                    id: 6,
                    imgSrc:
                        "https://chitalishteparvomay1894.com/wp-content/uploads/2019/01/cropped-zaglavna.png",
                    title: "Lorem Ipsum",
                    info: "Lorem ispum is simply dummy"
                }
            ],

            items: [
                {
                    id: 0,
                    imgSrc: "https://mapio.net/images-p/49527160.jpg",
                    name: 'Читалище "Св. Св. Кирил и Методий"',
                    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque auctor lorem at tellus ornare condimentum. Quisque
                    lobortis velit nisi, quis hendrerit arcu auctor ut. Nulla
                    facilisi. Donec et rutrum lacus. Aliquam lectus massa, ultricies
                    eu orci ac, condimentum scelerisque dolor. Aenean eleifend
                    facilisis velit. Etiam sodales orci quis gravida consectetur.
                    Etiam pellentesque nibh aliquam, egestas metus et, maximus orci.
                    Donec vel blandit elit. Ut in odio vel ligula dictum lobortis.
                    Duis tincidunt est ex. Morbi nec erat ut lorem varius accumsan.
                    Mauris suscipit fermentum est sed viverra. Sed sollicitudin,
                    purus at imperdiet laoreet, quam elit fringilla mi, nec blandit
                    enim velit in enim. Pellentesque id odio vitae mauris varius
                    iaculis vel non dolor. Aenean pretium varius risus a convallis.`
                },
                {
                    id: 1,
                    imgSrc: "https://mapio.net/images-p/49527160.jpg",
                    name: 'Ресторант "Хипноза"',
                    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque auctor lorem at tellus ornare condimentum. Quisque
                    lobortis velit nisi, quis hendrerit arcu auctor ut. Nulla
                    facilisi. Donec et rutrum lacus. Aliquam lectus massa, ultricies
                    eu orci ac, condimentum scelerisque dolor. Aenean eleifend
                    facilisis velit. Etiam sodales orci quis gravida consectetur.
                    Etiam pellentesque nibh aliquam, egestas metus et, maximus orci.
                    Donec vel blandit elit. Ut in odio vel ligula dictum lobortis.
                    Duis tincidunt est ex. Morbi nec erat ut lorem varius accumsan.
                    Mauris suscipit fermentum est sed viverra. Sed sollicitudin,
                    purus at imperdiet laoreet, quam elit fringilla mi, nec blandit
                    enim velit in enim. Pellentesque id odio vitae mauris varius
                    iaculis vel non dolor. Aenean pretium varius risus a convallis.`
                },
                {
                    id: 2,
                    imgSrc: "https://mapio.net/images-p/49527160.jpg",
                    name: 'Читалище "Св. Св. Кирил и Методий"',
                    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque auctor lorem at tellus ornare condimentum. Quisque
                    lobortis velit nisi, quis hendrerit arcu auctor ut. Nulla
                    facilisi. Donec et rutrum lacus. Aliquam lectus massa, ultricies
                    eu orci ac, condimentum scelerisque dolor. Aenean eleifend
                    facilisis velit. Etiam sodales orci quis gravida consectetur.
                    Etiam pellentesque nibh aliquam, egestas metus et, maximus orci.
                    Donec vel blandit elit. Ut in odio vel ligula dictum lobortis.
                    Duis tincidunt est ex. Morbi nec erat ut lorem varius accumsan.
                    Mauris suscipit fermentum est sed viverra. Sed sollicitudin,
                    purus at imperdiet laoreet, quam elit fringilla mi, nec blandit
                    enim velit in enim. Pellentesque id odio vitae mauris varius
                    iaculis vel non dolor. Aenean pretium varius risus a convallis.`
                },
                {
                    id: 3,
                    imgSrc: "https://mapio.net/images-p/49527160.jpg",
                    name: 'Читалище "Св. Св. Кирил и Методий"',
                    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque auctor lorem at tellus ornare condimentum. Quisque
                    lobortis velit nisi, quis hendrerit arcu auctor ut. Nulla
                    facilisi. Donec et rutrum lacus. Aliquam lectus massa, ultricies
                    eu orci ac, condimentum scelerisque dolor. Aenean eleifend
                    facilisis velit. Etiam sodales orci quis gravida consectetur.
                    Etiam pellentesque nibh aliquam, egestas metus et, maximus orci.
                    Donec vel blandit elit. Ut in odio vel ligula dictum lobortis.
                    Duis tincidunt est ex. Morbi nec erat ut lorem varius accumsan.
                    Mauris suscipit fermentum est sed viverra. Sed sollicitudin,
                    purus at imperdiet laoreet, quam elit fringilla mi, nec blandit
                    enim velit in enim. Pellentesque id odio vitae mauris varius
                    iaculis vel non dolor. Aenean pretium varius risus a convallis.`
                },
                {
                    id: 4,
                    imgSrc: "https://mapio.net/images-p/49527160.jpg",
                    name: 'Читалище "Св. Св. Кирил и Методий"',
                    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque auctor lorem at tellus ornare condimentum. Quisque
                    lobortis velit nisi, quis hendrerit arcu auctor ut. Nulla
                    facilisi. Donec et rutrum lacus. Aliquam lectus massa, ultricies
                    eu orci ac, condimentum scelerisque dolor. Aenean eleifend
                    facilisis velit. Etiam sodales orci quis gravida consectetur.
                    Etiam pellentesque nibh aliquam, egestas metus et, maximus orci.
                    Donec vel blandit elit. Ut in odio vel ligula dictum lobortis.
                    Duis tincidunt est ex. Morbi nec erat ut lorem varius accumsan.
                    Mauris suscipit fermentum est sed viverra. Sed sollicitudin,
                    purus at imperdiet laoreet, quam elit fringilla mi, nec blandit
                    enim velit in enim. Pellentesque id odio vitae mauris varius
                    iaculis vel non dolor. Aenean pretium varius risus a convallis.`
                },
                {
                    id: 5,
                    imgSrc: "https://mapio.net/images-p/49527160.jpg",
                    name: 'Читалище "Св. Св. Кирил и Методий"',
                    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque auctor lorem at tellus ornare condimentum. Quisque
                    lobortis velit nisi, quis hendrerit arcu auctor ut. Nulla
                    facilisi. Donec et rutrum lacus. Aliquam lectus massa, ultricies
                    eu orci ac, condimentum scelerisque dolor. Aenean eleifend
                    facilisis velit. Etiam sodales orci quis gravida consectetur.
                    Etiam pellentesque nibh aliquam, egestas metus et, maximus orci.
                    Donec vel blandit elit. Ut in odio vel ligula dictum lobortis.
                    Duis tincidunt est ex. Morbi nec erat ut lorem varius accumsan.
                    Mauris suscipit fermentum est sed viverra. Sed sollicitudin,
                    purus at imperdiet laoreet, quam elit fringilla mi, nec blandit
                    enim velit in enim. Pellentesque id odio vitae mauris varius
                    iaculis vel non dolor. Aenean pretium varius risus a convallis.`
                },
                {
                    id: 6,
                    imgSrc: "https://mapio.net/images-p/49527160.jpg",
                    name: 'Читалище "Св. Св. Кирил и Методий"',
                    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque auctor lorem at tellus ornare condimentum. Quisque
                    lobortis velit nisi, quis hendrerit arcu auctor ut. Nulla
                    facilisi. Donec et rutrum lacus. Aliquam lectus massa, ultricies
                    eu orci ac, condimentum scelerisque dolor. Aenean eleifend
                    facilisis velit. Etiam sodales orci quis gravida consectetur.
                    Etiam pellentesque nibh aliquam, egestas metus et, maximus orci.
                    Donec vel blandit elit. Ut in odio vel ligula dictum lobortis.
                    Duis tincidunt est ex. Morbi nec erat ut lorem varius accumsan.
                    Mauris suscipit fermentum est sed viverra. Sed sollicitudin,
                    purus at imperdiet laoreet, quam elit fringilla mi, nec blandit
                    enim velit in enim. Pellentesque id odio vitae mauris varius
                    iaculis vel non dolor. Aenean pretium varius risus a convallis.`
                },
                {
                    id: 7,
                    imgSrc: "https://mapio.net/images-p/49527160.jpg",
                    name: 'Читалище "Св. Св. Кирил и Методий"',
                    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque auctor lorem at tellus ornare condimentum. Quisque
                    lobortis velit nisi, quis hendrerit arcu auctor ut. Nulla
                    facilisi. Donec et rutrum lacus. Aliquam lectus massa, ultricies
                    eu orci ac, condimentum scelerisque dolor. Aenean eleifend
                    facilisis velit. Etiam sodales orci quis gravida consectetur.
                    Etiam pellentesque nibh aliquam, egestas metus et, maximus orci.
                    Donec vel blandit elit. Ut in odio vel ligula dictum lobortis.
                    Duis tincidunt est ex. Morbi nec erat ut lorem varius accumsan.
                    Mauris suscipit fermentum est sed viverra. Sed sollicitudin,
                    purus at imperdiet laoreet, quam elit fringilla mi, nec blandit
                    enim velit in enim. Pellentesque id odio vitae mauris varius
                    iaculis vel non dolor. Aenean pretium varius risus a convallis.`
                },
                {
                    id: 8,
                    imgSrc: "https://mapio.net/images-p/49527160.jpg",
                    name: 'Читалище "Св. Св. Кирил и Методий"',
                    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque auctor lorem at tellus ornare condimentum. Quisque
                    lobortis velit nisi, quis hendrerit arcu auctor ut. Nulla
                    facilisi. Donec et rutrum lacus. Aliquam lectus massa, ultricies
                    eu orci ac, condimentum scelerisque dolor. Aenean eleifend
                    facilisis velit. Etiam sodales orci quis gravida consectetur.
                    Etiam pellentesque nibh aliquam, egestas metus et, maximus orci.
                    Donec vel blandit elit. Ut in odio vel ligula dictum lobortis.
                    Duis tincidunt est ex. Morbi nec erat ut lorem varius accumsan.
                    Mauris suscipit fermentum est sed viverra. Sed sollicitudin,
                    purus at imperdiet laoreet, quam elit fringilla mi, nec blandit
                    enim velit in enim. Pellentesque id odio vitae mauris varius
                    iaculis vel non dolor. Aenean pretium varius risus a convallis.`
                }
            ]
        };
    },
    methods: {
        showInfo(item) {
            if (this.activeIndex === item.id) return;
            const rowIndex = Math.trunc(item.id / this.itemsPerRow) + 1;
            this.activeIndex = item.id;
            this.infoBoxIndex = -1;
            setTimeout(() => (this.infoBoxIndex = rowIndex));
        },
        goBack() {
            this.activeIndex =
                (this.items.length + this.activeIndex - 1) % this.items.length;
        },
        goNext() {
            this.activeIndex = (this.activeIndex + 1) % this.items.length;
        },
        close() {
            this.infoBoxIndex = -1;
            this.activeIndex = -1;
        }
    },

    computed: {
        rowsCount() {
            return Math.ceil(this.items.length / this.itemsPerRow);
        },
        rowStyles() {
            const styles = {
                "grid-template-columns": `repeat(${this.itemsPerRow}, 1fr)`
            };

            if (this.infoBoxIndex === -1) {
                styles[
                    "grid-template-rows"
                ] = `repeat(${this.rowsCount}, min(23vw, 300px))`;
            } else if (this.infoBoxIndex === this.rowsCount) {
                styles[
                    "grid-template-rows"
                ] = `repeat(${this.rowsCount}, min(23vw, 300px)) auto`;
            } else {
                styles["grid-template-rows"] = `repeat(${
                    this.infoBoxIndex
                }, min(23vw, 300px)) auto repeat(${this.rowsCount -
                    this.infoBoxIndex}, min(23vw, 300px))`;
            }

            return styles;
        },
        infoBoxStyles() {
            if (this.infoBoxIndex < 0) {
                return {};
            }
            return {
                "grid-row-start": this.infoBoxIndex + 1
            };
        },
        activeInfo() {
            return this.items[this.activeIndex];
        },
        isActive() {
            const activeIndex = this.activeIndex;
            return id => ({ active: id === activeIndex });
        }
    },

    components: {
        InfoBox,
        PlaceBox,
        Carousel,
        PlaceInfobox
    }
};
</script>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
.remarkable-places {
    background-color: var(--clr-dark-1);
    color: #fff;
    display: flex;
    padding: 1.5rem 3rem;

    .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 30%;
    }

    .carousel-wrapper {
        flex: 1.5;
        padding-left: 20px;
        max-width: 70%;

        ::v-deep(.controls) {
            color: var(--clr-other-green);
            text-align: right;
            font-size: 1.8rem;

            & > * {
                margin-right: 5px;
                cursor: pointer;
                padding: 0.1rem;
            }

            padding-right: 20px;
        }
    }
}

h2 {
    text-align: center;
    margin-top: 3%;
    color: var(--clr-other-green);
    font-size: 2.6rem;
    letter-spacing: 4px;
    margin-bottom: 3%;
}

p {
    font-size: 1.3rem;
    color: #dadada;
    letter-spacing: 1px;
}

.items {
    display: grid;
    grid-gap: 1rem;
    margin-bottom: 10px;
    padding: 0 3rem;
}

.col {
    background-size: cover;
    background-position: center;
    cursor: pointer;
    user-select: none;
    position: relative;
    &:hover,
    &.active {
        .overlay {
            opacity: 1;
        }
    }
}

.items .info-box {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-start: 1;
    grid-column-end: 4;
}

.overlay {
    @include overlay(0.7, #009966);
    color: white;
    font-size: 2vw;
    font-weight: 900;
    letter-spacing: 5px;
    text-align: center;
    opacity: 0;
    transition: 0.5s ease-out;
    padding: 0 1rem;
}
.hover-text {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2.8vw;
}

.info-enter-from {
    transform: translateY(-100%);
    opacity: 0;
}

.info-enter-active {
    transition: opacity 2s, transform 0.5s;
}

.info-enter-to {
    transform: translateY(0);
    opacity: 1;
}

.info-leave-active {
    transition: 0.5s;
}

.info-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}
</style>
