!<!-- footer -->
<template>
    <div class="footer" :style="footerStyle">
        <slot></slot>
    </div>

</template>

<script>
export default {
    name: 'l-footer',

    components: {},

    computed: {
        footerStyle() {
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
.footer {
        display: flex;
    justify-content: center;
    align-items: center;
}
</style>