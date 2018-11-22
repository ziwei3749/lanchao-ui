<!-- pager-demos -->
<template>
    <div>
       <l-pager style="margin-top:20px" :total-page="10" :current-page.sync="currentPage" @currentChange="onCurrentChange">
      </l-pager>
    </div>
</template>

<script>
import Pager from "../../../src/pager/pager.vue";


export default {
    components: {
        "l-pager": Pager,
    },

    computed: {},

    data() {
        return {
            currentPage: 5,
        };
    },

    created() {},

    mounted() {},

    methods: {
        onCurrentChange(e){
            console.log('当前页码',e)
        }
    }
};
</script>
<style lang='scss' scoped>
  
</style>