<!-- input -->
<template>
    <div class="l-input">
        <span class="l-input-group--prepend">
            <slot name="prepend"></slot>
        </span>

        <input class="l-input__inner"
               :type="type"
               :placeholder="placeholder"
               :value="currentValue"
               :disabled="disabled"
               :class="{'disable':disabled}"
               :readonly="readonly"
               @change="handleChange"
               @focus="handleFocus"
               @blur="handleBlur"
               @input="handleInput">
        <slot class="l-input-group--append"
              name="append"></slot>
    </div>
</template>

<script>
export default {
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
        }
    },
    data() {
        return {
            currentValue: this.value
        };
    },

    components: {},

    computed: {},

    mounted() {},

    methods: {
        handleInput(e) {
            this.currentValue = e.target.value;
            this.$emit("input", e.target.value);
        },

        handleFocus(e){
            this.$emit('focus',e)
        },

        handleChange(e){
            this.$emit('change',e)
        },

        handleBlur(e){
            this.$emit('blur',e)
        }
    }
};
</script>
<style lang="scss">
.l-input {
    font-size: 0;
    border-radius: 4px;
    display: inline-block;
    .l-input-group--prepend {
        font-size: 14px;
        display: inline-block;
        background-color: #f5f7fa;
        color: #909399;
        border: 1px solid var(--border-color);
        border-radius: 4px;
        padding: 0 20px;
        height: 32px;
        line-height: 32px;
        vertical-align: top;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .l-input__inner {
        width: 128px;
        height: 32px;
        font-size: 14px;
        padding: 0 1em;
        background: #ffffff;
        border: 1px solid var(--border-color);
        &:focus {
            outline: none;
            border: 1px solid #000;
        }
        &::-webkit-input-placeholder {
            /* WebKit browsers */
            color: #d6d6d6;
            font-weight: 300;
        }
        &:-moz-placeholder {
            /* Mozilla Firefox 4 to 18 */
            color: #999;
        }
        &::-moz-placeholder {
            /* Mozilla Firefox 19+ */
            color: #999;
        }
        &:-ms-input-placeholder {
            /* Internet Explorer 10+ */
            color: #999;
        }
        &.disable {
            cursor: not-allowed;
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
        }
    }
}
</style>