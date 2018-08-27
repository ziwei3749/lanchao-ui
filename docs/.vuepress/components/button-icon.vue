<!-- button-demos -->
<template>
    <div>
        <l-button icon="settings">icon左侧按钮</l-button>
        <l-button iconPosition="right"
                  icon="thumbs-up">icon右侧按钮</l-button>
    </div>
</template>

<script>
import Button from "../../../src/button";

export default {
    components: {
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
<style lang='scss'>
    .demo {
        border-radius: 4px;
        padding: 1.2em 1.6em;
        border-left: 1px solid rgba(100, 100, 100, 0.1)
    }
</style>