<!-- popover-demo2 -->
<template>
    <div style="margin: 40px 0">
        <l-popover trigger="hover"
                   position='top'>
            <template slot="content">
                asdsadasdasdasdadsadadaddsdasda
            </template>
            <l-button>button</l-button>
        </l-popover>

        <l-popover trigger="hover"
                   position='bottom'>
            <template slot="content">
                asdsadasdasdasdadsadadaddsdasda
            </template>
            <l-button>button</l-button>
        </l-popover>

        <l-popover trigger="hover"
                   position='left'>
            <template slot="content">
                asdsadasdasdasdadsadadaddsdasda asdsadasdasdasdadsadadaddsdasda asdsadasdasdasdadsadadaddsdasda asdsadasdasdasdadsadadaddsdasda asdsadasdasdasdadsadadaddsdasda
            </template>
            <l-button>button</l-button>
        </l-popover>

        <l-popover trigger="hover"
                   position='right'>
            <template slot="content">
                asdsadasdasdasdadsadadaddsdasda
            </template>
            <l-button>button</l-button>
        </l-popover>
    </div>
</template>

<script>
import Popover from "../../../src/popover";
import Button from "../../../src/button/button";

export default {
    components: {
        "l-popover": Popover,
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