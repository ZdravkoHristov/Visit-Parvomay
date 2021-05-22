<template>
    <section>
        <h2>
            Забележителностите на<br />
            общината:
        </h2>

        <div class="items p-x-1" :style="rowStyles">
            <place-infobox
                class="info-box"
                :info="activeInfo"
                :style="infoBoxStyles"
                v-if="infoBoxIndex > -1"
                @goBack="goBack"
                @goNext="goNext"
                @close="close"
            ></place-infobox>
            <div
                class="col"
                @click="showInfo(j)"
                v-for="j in items"
                :key="j.id"
                :style="{ 'background-image': `url('${j.imgSrc}')` }"
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
import PlaceInfobox from "../components/places/PlaceInfobox.vue";
export default {
    data() {
        return {
            itemsPerRow: 3,
            infoBoxIndex: -1,
            activeIndex: -1,
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
            const rowIndex = Math.trunc(item.id / this.itemsPerRow) + 1;
            this.activeIndex = item.id;
            this.infoBoxIndex = rowIndex;
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
        thumbnail(a) {
            console.log(a);
            return {};
            // return {'background-image': `url(${this.items})`}
        }
    },

    components: { PlaceInfobox }
};
</script>
<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
h2 {
    text-align: center;
    margin-top: 3%;
    color: var(--clr-other-green);
    font-size: xxx-large;
    letter-spacing: 4px;
    margin-bottom: 3%;
}

.items {
    display: grid;
    grid-gap: 10px;
    margin-bottom: 10px;
}

.col {
    background-size: cover;
    background-position: center;
    cursor: pointer;

    position: relative;
    &:hover {
        .overlay {
            opacity: 1;
        }
    }
}

.info-box {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-start: 1;
    grid-column-end: 4;
    margin-bottom: 10px;
}

.overlay {
    @include overlay(0.3, #009966);
    color: white;
    font-size: 2vw;
    font-weight: 900;
    letter-spacing: 5px;
    text-align: center;
    opacity: 0;
    transition: 0.5s ease-out;
}
.hover-text {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
</style>
