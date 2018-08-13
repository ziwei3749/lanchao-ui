<!-- input -->
<template>
    <div class="wrapper"
         :class="{'error' : error}">
        <span class="prepend_text" v-if="$slots.prepend">
            <slot name="prepend">
            </slot>
        </span>

        <input class="l-input__inner"
               :type="type"
               :placeholder="placeholder"
               :value="value"
               :disabled="disabled"
               :class="{'disable':disabled}"
               :readonly="readonly"
               @change="$emit('change',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('blur',$event.target.value)"
               @input="$emit('input',$event.target.value)">
        <template v-if="error">
            <l-icon name="error"
                    class="icon-error"></l-icon>
            <span class="errorMessage">{{error}}</span>
        </template>

    </div>
</template>

<script>
import Icon from "./icon";
export default {
    name: "l-input",
    props: {
        type: {
            type: String,
            default: "text"
        },
        placeholder: {
            type: String,
            default: "请输入内容"
        },
        value: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        error: {
            type: String
        }
    },
    data() {
        return {};
    },

    components: {
        "l-icon": Icon
    },

    computed: {},

    mounted() {
        console.log(this.$slots)
    },

    methods: {
        handleInput(e) {
            this.$emit("input", e.target.value);
        },

        handleFocus(e) {
            this.$emit("focus", e.target.value);
        },

        handleChange(e) {
            this.$emit("change", e.target.value);
        },

        handleBlur(e) {
            this.$emit("blur", e.target.value);
        }
    }
};
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;

.wrapper {
    display: inline-flex;
    align-items: center;
    font-size: $font-size;
    > :not(:last-child) {
        margin-right: 0.5em;
    }
    // 这个是复合input的做法，但是样式还没写好
    > .prepend_text {
        color: red;
        width: 100px;
        height: $height;
        border: 1px solid #ccc;
    }

    &.error {
        > input {
            border-color: $red;
        }
        .icon-error {
            fill: $red;
        }
        .errorMessage {
            color: $red;
        }
    }

    > input {
        height: $height;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        padding: 0 8px;
        font-size: inherit;
        &:hover {
            border-color: $border-color-hover;
        }
        &:focus {
            outline: none;
            border: 1px solid #000;
        }
        &[disabled],
        &[readonly] {
            cursor: not-allowed;
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
        }
    }
}
</style>