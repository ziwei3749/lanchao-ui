<!-- layout-demos -->
<template>
    <div>
        <l-layout style="margin: 40px 0">
            <l-header class="header">header</l-header>
            <l-content class="content">content</l-content>
        </l-layout>

        <l-layout style="margin-bottom: 40px">
            <l-header class="header">header</l-header>
            <l-content class="content">content</l-content>
            <l-content class="footer">footer</l-content>
        </l-layout>

        <l-layout style="margin-bottom: 40px">
            <l-sider class="sider">sider</l-sider>
            <l-content class="content">content</l-content>
        </l-layout>

        <l-layout style="margin-bottom: 40px">
            <l-header class="header">header</l-header>
            <l-layout>
                <l-sider class="sider">sider</l-sider>
                <l-content class="content">content</l-content>
            </l-layout>
        </l-layout>

        <l-layout style="margin-bottom: 40px">
            <l-header class="header">header</l-header>
            <l-layout>
                <l-sider class="sider">sider</l-sider>
                <l-layout>
                    <l-content class="content">content</l-content>
                    <l-footer class="footer">footer</l-footer>
                </l-layout>
            </l-layout>
        </l-layout>

        <l-layout style="margin-bottom: 40px">
            <l-sider class="sider">sider</l-sider>
            <l-layout>
                <l-header class="header">header</l-header>
                <l-content class="content">content</l-content>
                <l-footer class="footer">footer</l-footer>
            </l-layout>
        </l-layout>
    </div>
</template>

<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Sider from "../../../src/sider";
import Content from "../../../src/content";
import Footer from "../../../src/footer";

export default {
    components: {
        "l-layout": Layout,
        "l-header": Header,
        "l-sider": Sider,
        "l-content": Content,
        "l-footer": Footer
    },

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
.header {
    background: #b3c0d1;
    height: 70px;
}

.footer {
    background: #b3c0d1;
    height: 50px;
}

.content {
    background: #e9eef3;
}

.sider {
    width: 200px;
    background: #d3dce6;
}
</style>