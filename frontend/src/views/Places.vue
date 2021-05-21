<template>
    <section>
        <h2>
            Забележителностите на<br />
            общината:
        </h2>

        <div class="items p-x-1">
            <div class="row">
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
            </div>
            <place-infobox class=" info-box"></place-infobox>
            <div class="row">
                <div class="col">
                    <div class="overlay">
                        <h1 class="hover-text">
                            Читалище "Св. Св. Кирил и Методий"
                        </h1>
                    </div>
                </div>
                <div class="col"></div>
                <div class="col"></div>
            </div>

            <div class="row">
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
            </div>
        </div>
    </section>
</template>

<script>
import PlaceInfobox from "@/components/places/PlaceInfobox";
export default {
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

.row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: min(23vw, 300px);
    grid-gap: 10px;
    margin-bottom: 10px;
}

.col {
    background-image: url("https://mapio.net/images-p/49527160.jpg");
    background-size: cover;
    background-position: center;

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
    font-size: 27px;
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
