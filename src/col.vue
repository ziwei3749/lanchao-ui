!<!-- col -->
<template>
    <div class="col"
         :style="{'paddingLeft':`${gutter/2}px`,'paddingRight':`${gutter/2}px`}"
         :class="[span &&`col-${span}`, offset && `offset-${offset}`]">
         <div :style="'border: 1px solid green; height: 100%'">
             <slot></slot>
         </div>
    </div>
</template>

<script>
export default {
    props: {
        span: {
            type: [Number, String],
            validator(value) {
                // 用正则校验span必须是1-24的整数
                return /^\d{1,2}$/.test(value) && value <= 24 && value >= 1;
            }
        },
        offset: {
            type: [Number, String],
            validator(value) {
                // 用正则校验span必须是1-24的整数
                return /^\d{1,2}$/.test(value) && value <= 24 && value >= 1;
            }
        }
    },

    data() {
        return {
            gutter: 0
        };
    },

    components: {},

    computed: {},

    created() {},

    mounted() {
        console.log(this);
    },

    methods: {}
};
</script>
<style scoped lang="scss">
$class-col-prefix: "col-";
$class-offset-prefix: "offset-";

.col {
    height: 100px;
    width: 50%;
    @for $n from 1 through 24 {
        &.#{$class-col-prefix}#{$n} {
            width: ($n/24) * 100%;
        }
        &.#{$class-offset-prefix}#{$n} {
            margin-left: ($n/24) * 100%;
        }
    }
}
</style>