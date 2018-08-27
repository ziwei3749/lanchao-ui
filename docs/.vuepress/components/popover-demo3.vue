<!-- popover-demo1 -->
<template>
    <div style="margin: 40px 0">
        <l-popover position='right'>
            <template slot="content">
                <div>这是一段内容这是一段内容确定删除吗？</div>
                <l-button>取消</l-button>
                <l-button>确定</l-button>
            </template>
            <l-button>delete</l-button>
        </l-popover>
    </div>
</template>

<script>
import Popover from "../../../src/popover";
import Button from "../../../src/button";

export default {
    components: {
        "l-popover": Popover,
        "l-button": Button
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