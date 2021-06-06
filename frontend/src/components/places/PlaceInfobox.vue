<template>
    <div class="green-infobox">
        <div class="img-green-infobox" :style="img"></div>
        <div class="text-green-infobox">
            <div class="icons">
                <i class="far fa-times-circle iconka" @click="close"></i>
                <div class="dqsno">
                    <i
                        class="far fa-arrow-alt-circle-left iconka"
                        @click="goBack"
                    ></i>
                    <i
                        class="far fa-arrow-alt-circle-right iconka"
                        @click="goNext"
                    ></i>
                </div>
            </div>
            <h2>{{ info.name }}</h2>
            <p>
                {{ info.info }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["info"],
    emits: ["goBack", "goNext", "close"],

    methods: {
        goBack() {
            this.$emit("goBack");
        },

        goNext() {
            this.$emit("goNext");
        },
        close() {
            this.$emit("close");
        }
    },

    computed: {
        img() {
            return {
                "background-image": `url("${this.info?.imgSrc}")`
            };
        }
    }
};
</script>

<style lang="scss" scoped>
h2 {
    letter-spacing: 5px;
    margin: 5px 0px 10px 5px;
}
.green-infobox {
    background: #009966;
    min-height: 300px;
}
.img-green-infobox {
    background-size: cover;
    background-position: center;
}
.text-green-infobox {
    padding: 0.5rem 1rem 1rem;
    width: 100%;
    color: white;
}

.iconka {
    margin: 10px 5px;
    font-size: 1.8rem;
    cursor: pointer;
    transition: ease-in-out 0.5s;
    &:hover {
        transform: scale(1.2, 1.2);
    }
}
.dqsno {
    margin-right: 10px;
}
p {
    margin-left: 5px;
}

.icons {
    display: flex;
    justify-content: space-between;
    i {
        transition: ease-in-out 0.5s;
        &:hover {
            color: #ccebe0;
        }
    }
}

/* ----------------------------------------------------------------------------
 -------------------------------- RESPONSIVE ----------------------------------
 ------------------------------------------------------------------------------ */

@media(max-width: 850px) {
    .text-green-infobox p {font-size: 0.8rem;}
    .text-green-infobox h2 {font-size: 1.4rem;}
}

@media(max-width: 750px) {
    .img-green-infobox {display:none;}
    .text-green-infobox {grid-column: 1/3;}
}
</style>
