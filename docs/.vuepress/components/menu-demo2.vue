<!-- menu-demo1 -->
<template>
    <div>
        <p style="font-weight:700">selected: {{selected}}</p>
        <l-menu :selected.sync="selected"
                mode="vertical">
            <l-menu-item name="github">Github</l-menu-item>
            <l-sub-menu name="about">
                <template slot="title">关于</template>
                <l-menu-item name="about1">关于1</l-menu-item>
                <l-menu-item name="about2">关于2</l-menu-item>
                <l-sub-menu name="lian_xi_fang_shi">
                    <template slot="title">联系方式</template>
                    <l-menu-item name="qq">QQ</l-menu-item>
                    <l-menu-item name="wx">微信</l-menu-item>
                    <l-sub-menu name="mobile">
                        <template slot="title">手机</template>
                        <l-menu-item name="移动">移动</l-menu-item>
                        <l-menu-item name="联通">联通</l-menu-item>
                    </l-sub-menu>
                </l-sub-menu>
            </l-sub-menu>
            <l-menu-item name="hire">招聘</l-menu-item>
            <l-sub-menu name="other">
                <template slot="title">其他</template>
                <l-menu-item name="other1">其他1</l-menu-item>
                <l-menu-item name="other2">其他2</l-menu-item>
                <l-menu-item name="other3">其他3</l-menu-item>
            </l-sub-menu>
        </l-menu>
    </div>
</template>

<script>
import Menu from "../../../src/menu/menu";
import MenuItem from "../../../src/menu/menu-item";
import SubMenu from "../../../src/menu/sub-menu";
export default {
    components: {
        "l-menu": Menu,
        "l-menu-item": MenuItem,
        "l-sub-menu": SubMenu
    },

    computed: {},

    data() {
        return {
            selected: "hire"
        };
    },

    created() {},

    mounted() {},

    methods: {}
};
</script>
<style lang='scss'>
</style>