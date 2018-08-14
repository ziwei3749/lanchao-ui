!<!-- sider -->
<template>
    <div class="sider"
         :style="siderStyle">
        <slot></slot>
        <l-button class="btn">close</l-button>
    </div>

</template>

<script>
export default {
    name: "l-sider",

    components: {},

    computed: {
        siderStyle() {
            return {
                width: this.width
            };
        }
    },

    props: {
        width: {
            type: [String, Number]
        }
    },

    data() {
        return {};
    },

    created() {},

    mounted() {},

    methods: {}
};
</script>
<style lang='scss' scoped>
.sider {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>