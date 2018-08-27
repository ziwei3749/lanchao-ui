<!-- input -->
<template>
    <div>
        <div style="margin-bottom: 20px">
            <l-input v-model="username" placeholder="输入用户名"></l-input>
        </div>

        <div style="margin-bottom: 20px">
            <l-input value="王五" disabled placeholder="输入用户名"></l-input>
        </div>

        <div style="margin-bottom: 20px">
            <l-input value="老吕" placeholder="输入用户名" error='姓名不能少于2个字'>
            </l-input>
        </div>
    </div>

</template>

<script>
import Input from "../../../src/input";
export default {
    components: {
        "l-input": Input
    },

    computed: {},

    data() {
        return {
            username: "xxx"
        };
    },

    created() {},

    mounted() {},

    methods: {}
};
</script>
<style lang='scss'>
</style>