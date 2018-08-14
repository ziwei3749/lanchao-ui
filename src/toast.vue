!<!-- toast -->
<template>
    <div class="l-toast">
        <slot></slot>
    </div>
</template>

<script>
/**
 *  状态
 *  - 弹出toast
 *  - 自动关闭 -> 设置n秒后自动关闭
 *  - 点击后关闭 -> 回调
 *  - 快速点击的话，只显示最后一个，保证只有一个toast (可选 允许多个toast) (如果出现多个，就在通过一个地方多次出现)
 *  - 是否要给一个接口，允许设置宽高呢？ 不需要，让用户自己写css
 */
export default {
    components: {},

    computed: {},

    data() {
        return {};
    },

    created() {},

    mounted() {},

    methods: {}
};
</script>
<style lang='scss' scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);

.l-toast {
    display: flex;
    align-items: center;
    font-size: $font-size;
    line-height: 1.8;
    height: $toast-height;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    padding: 0 16px;
}
</style>