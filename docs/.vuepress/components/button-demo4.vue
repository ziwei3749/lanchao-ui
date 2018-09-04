<!-- button-demos -->
<template>
    <div>
        <l-button-group>
            <l-button icon="left">上一页</l-button>
            <l-button>更多</l-button>
            <l-button icon="right"
                      icon-position="right">下一页</l-button>
        </l-button-group>
    </div>
</template>

<script>
import ButtonGroup from "../../../src/button/button-group";
import Button from "../../../src/button/button";

export default {
    components: {
        "l-button-group": ButtonGroup,
        "l-button": Button,
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
</style>