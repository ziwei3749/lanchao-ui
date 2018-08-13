!<!-- col -->
<template>
    <div class="col"
         :class="`col-${span}`">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        span: {
            type: [Number,String],
            validator(value){
                // 用正则校验span必须是1-24的整数
                return /^\d{1,2}$/.test(value) &&  value<=24 && value>=1
            }
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
<style scoped lang="scss">
$class-prefix: "col-";

.col {
    height: 100px;
    background: grey;
    width: 50%;
    border: 1px solid red;

    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
            width: ($n/24) * 100%;
        }
    }
}
</style>