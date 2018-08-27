<!-- tabs-demo -->
<template>
    <div style="margin: 40px 0">
        <l-tabs selected="finance"
                @tab-click="handleSelected">
            <l-tabs-head>
                <l-tabs-item name="woman">美女</l-tabs-item>
                <l-tabs-item name="finance">财经</l-tabs-item>
                <l-tabs-item name="sports">体育</l-tabs-item>
            </l-tabs-head>
            <l-tabs-body>
                <l-tabs-pane name="woman">美女相关资讯</l-tabs-pane>
                <l-tabs-pane name="finance">财经相关资讯</l-tabs-pane>
                <l-tabs-pane name="sports">体育相关资讯</l-tabs-pane>
            </l-tabs-body>
        </l-tabs>
    </div>
</template>

<script>
import Tabs from "../../../src/tabs";
import TabsHead from "../../../src/tabs-head";
import TabsBody from "../../../src/tabs-body";
import TabsItem from "../../../src/tabs-item";
import TabsPane from "../../../src/tabs-pane";
import Button from "../../../src/button";
import Icon from "../../../src/icon";

export default {
    components: {
        "l-tabs": Tabs,
        "l-tabs-head": TabsHead,
        "l-tabs-body": TabsBody,
        "l-tabs-item": TabsItem,
        "l-tabs-pane": TabsPane,
        "l-button": Button,
        "l-icon": Icon,
    },

    computed: {},

    data() {
        return {};
    },

    created() {},

    mounted() {},

    methods: {
        handleSelected(e) {
            console.log(e)
        },
    }
};
</script>
<style lang='scss' scoped>
</style>