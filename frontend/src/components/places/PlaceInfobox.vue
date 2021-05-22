<template>
    <div class="green-infobox">
        <div class="img-green-infobox" :style="img"></div>
        <div class="text-green-infobox">
            <div class="icons">
                <i class="far fa-times-circle iconka"></i>
                <div class="dqsno">
                    <i class="far fa-arrow-alt-circle-left iconka"></i>
                    <i class="far fa-arrow-alt-circle-right iconka "></i>
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
    computed: {
        img() {
            return {
                "background-image": `url("${this.info.imgSrc}")`
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
    margin-right: 10px;
}
.text-green-infobox {
    padding-bottom: 10px;
    width: 100%;
    color: white;
}

.iconka {
    margin: 10px 5px;
    font-size: 26px;
    cursor: pointer;
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
}
</style>
