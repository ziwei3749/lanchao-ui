!<!-- col -->
<template>
    <div class="l-col"
         :style="colStyle"
         :class="colClass">
        <slot></slot>
    </div>
</template>

<script>
let validator = value => {
    let keys = Object.keys(value);
    let valid = true;
    keys.forEach(key => {
        if (!(["span", "offset"].indexOf(key) >= 0)) {
            valid = false;
        }
    });
    return valid;
};
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
        },
        ipad: { type: Object, validator },
        narrowPc: { type: Object, validator },
        pc: { type: Object, validator },
        widePc: { type: Object, validator }
    },

    data() {
        return {
            gutter: 0
        };
    },

    computed: {
        colClass() {
            let { span, offset, ipad, narrowPc, pc, widePc } = this;

            return [
                ...this.createClasses({ span, offset }),
                ...this.createClasses(ipad, "ipad-"),
                ...this.createClasses(narrowPc, "narrow-pc-"),
                ...this.createClasses(pc, "pc-"),
                ...this.createClasses(widePc, "wide-pc-")
            ];
        },

        // data里的数据只在created时读取一次，之后gutter变化没法读取到，所以用计算属性
        colStyle() {
            let { gutter } = this;
            return {
                paddingLeft: gutter / 2 + "px",
                paddingRight: gutter / 2 + "px"
            };
        }
    },

    methods: {
        createClasses(obj, str = "") {
            if (!obj) return [];
            let array = [];
            if (obj.span) {
                array.push(`col-${str}${obj.span}`);
            }
            if (obj.offset) {
                array.push(`offset-${str}${obj.offset}`);
            }
            return array;
        }
    }
};
</script>
<style scoped lang="scss">
.l-col {
    $class-prefix: col-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
            width: ($n / 24) * 100%;
        }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
            margin-left: ($n / 24) * 100%;
        }
    }

    @media (min-width: 577px) and (max-width: 768px) {
        $class-prefix: col-ipad-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-ipad-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }

    @media (min-width: 769px) {
        // 770
        $class-prefix: col-narrow-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-narrow-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
    @media (min-width: 993px) {
        $class-prefix: col-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
    @media (min-width: 1201px) {
        $class-prefix: col-wide-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-wide-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
}
</style>