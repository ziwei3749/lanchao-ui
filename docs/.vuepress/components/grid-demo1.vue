<!-- button-demos -->
<template>
    <div>
        <l-row>
            <l-col span="24"><div class="bg-purple-dark"></div></l-col>
        </l-row>
        <l-row>
            <l-col span="12"><div class="bg-purple"></div></l-col>
            <l-col span="12"><div class="bg-purple-light"></div></l-col>
        </l-row>
        <l-row>
            <l-col span="8"><div class="bg-purple"></div></l-col>
            <l-col span="8"><div class="bg-purple-light"></div></l-col>
            <l-col span="8"><div class="bg-purple"></div></l-col>
        </l-row>
        <l-row>
            <l-col span="6"><div class="bg-purple"></div></l-col>
            <l-col span="6"><div class="bg-purple-light"></div></l-col>
            <l-col span="6"><div class="bg-purple"></div></l-col>
            <l-col span="6"><div class="bg-purple-light"></div></l-col>
        </l-row>
        <l-row>
            <l-col span="4"><div class="bg-purple"></div></l-col>
            <l-col span="4"><div class="bg-purple-light"></div></l-col>
            <l-col span="4"><div class="bg-purple"></div></l-col>
            <l-col span="4"><div class="bg-purple-light"></div></l-col>
            <l-col span="4"><div class="bg-purple"></div></l-col>
            <l-col span="4"><div class="bg-purple-light"></div></l-col>
        </l-row>
    </div>
</template>

<script>
import Row from "../../../src/grid/row";
import Col from "../../../src/grid/col";

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