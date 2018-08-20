<!-- button-demos -->
<template>
    <div>
        <l-button>默认按钮</l-button>
        <l-button icon="settings">icon默认按钮</l-button>
        <l-button iconPosition="right"
                  icon="thumbs-up">icon右侧按钮</l-button>
        <l-button :loading="true">加载按钮</l-button>
        <l-button disabled>disabled按钮</l-button>
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
</style>