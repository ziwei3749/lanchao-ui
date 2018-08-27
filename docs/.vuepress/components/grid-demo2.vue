<!-- button-demos -->
<template>
    <div>
        <l-row :gutter="10">
            <l-col span="6"><div class="bg-purple"></div></l-col>
            <l-col span="6"><div class="bg-purple-light"></div></l-col>
            <l-col span="6"><div class="bg-purple"></div></l-col>
            <l-col span="6"><div class="bg-purple-light"></div></l-col>
        </l-row>
    </div>
</template>

<script>
import Row from "../../../src/row";
import Col from "../../../src/col";

export default {
    components: {
        "l-row": Row,
        "l-col": Col
    },

    computed: {},

    data() {
        return {};
    },

    created() {},

    mounted() {},

    methods: {}
};
</script>
<style lang='scss' scoped>
* {
    box-sizing: border-box;
}
.l-row {
    margin-bottom: 20px;
}
.bg-purple-dark {
    background: #99a9bf;
    border-radius: 4px;
    min-height: 36px;
}
.bg-purple {
    background: #d3dce6;
    border-radius: 4px;
    min-height: 36px;
}
.bg-purple-light {
    background: #e5e9f2;
    border-radius: 4px;
    min-height: 36px;
}
</style>