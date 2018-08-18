<!-- collapse -->
<template>
    <div class="l-collapse">
        <slot></slot>
    </div>
</template>

<script>
export default {
    components: {},

    computed: {},

    props: {
        selected: {
            type: String | Array
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
$grey: #ddd;
$border-radius: 4px;
.l-collapse {
    border-radius: $border-radius;
    border-left: 5px solid $grey;
    border-right: 5px solid $grey;
    border-bottom: 5px solid $grey;
}
</style>