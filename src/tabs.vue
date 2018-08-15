<!-- tabs -->
<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
export default {
    components: {},

    computed: {},

    props: {
        selected: {
            type: String,
            required: true
        },
        direction: {
            type: String,
            default: 'horizontal',
            validator(value){
                return ['horizontal','vertical'].indexOf(value) >= 0
            }
        }
    },

    data() {
        return {};
    },

    created() {
        // this.$emit('update:selected')
    },

    mounted() {
   
    },

    methods: {}
};
</script>
<style lang='scss'>
.tabs {
}
</style>