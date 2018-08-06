<!-- Icon -->
<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },

    data() {
        return {};
    },

    components: {},

    computed: {},

    mounted() {},

    methods: {}
};
</script>
<style lang="scss">
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
}
</style>