<!-- slides-demos -->
<template>
    <div>
        <l-slides :selected.sync="selected">
            <l-slides-item name="first">
                <div class="box">1</div>
            </l-slides-item>
            <l-slides-item name="second">
                <div class="box">2</div>
            </l-slides-item>
            <l-slides-item name="third">
                <div class="box">3</div>
            </l-slides-item>
        </l-slides>
    </div>
</template>

<script>
import Slides from "../../../src/slides";
import SlidesItem from "../../../src/slides-item";

export default {
    components: {
        "l-slides": Slides,
        "l-slides-item": SlidesItem
    },

    computed: {},

    data() {
        return {
            selected: "second"
        };
    },

    created() {},

    mounted() {},

    methods: {}
};
</script>
<style lang='scss' scoped>
.box {
    height: 300px;
    width: 100%;
    background: #99a9bf;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
}
</style>