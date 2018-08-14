!<!-- header -->
<template>
    <div class="header"
         :style="headerStyle">
        <slot></slot>
    </div>

</template>

<script>
export default {
    name: "l-header",

    components: {},

    computed: {
        headerStyle() {
            return {
                height: this.height
            };
        }
    },

    props: {
        height: {
            type: String
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
.header {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>