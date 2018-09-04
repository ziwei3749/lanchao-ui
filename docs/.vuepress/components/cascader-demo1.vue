<!-- cascader -->
<template>
    <div class="cascader-demo">
        <div class="text">
            <span>selected : {{selected && selected[0] && selected[0].name || 'null'}}</span>
            <span>{{selected && selected[1] && selected[1].name || 'null'}}</span>
            <span>{{selected && selected[2] && selected[2].name || 'null'}}</span>
        </div>
        <div>
            <l-cascader :source.sync="source"
                        :selected.sync="selected"
                        @update:selected="fn"
                        popover-height="200px">
            </l-cascader>
        </div>
    </div>
</template>

<script>
import Cascader from "../../../src/cascader/cascader";
import Icon from "../../../src/icon";

export default {
    name: "cascader-demo1",

    components: {
        "l-cascader": Cascader,
        "l-icon": Icon
    },

    computed: {},

    data() {
        return {
            selected: [],
            source: [
                {
                    name: "浙江",
                    children: [
                        {
                            name: "杭州",
                            children: [
                                { name: "上城" },
                                { name: "下城" },
                                { name: "江干" }
                            ]
                        },
                        {
                            name: "嘉兴",
                            children: [
                                { name: "南湖" },
                                { name: "秀洲" },
                                { name: "嘉善" }
                            ]
                        }
                    ]
                },
                {
                    name: "福建",
                    children: [
                        {
                            name: "福州",
                            children: [
                                { name: "鼓楼" },
                                { name: "台江" },
                                { name: "仓山" }
                            ]
                        }
                    ]
                },
                {
                    name: "安徽",
                    children: [
                        {
                            name: "合肥",
                            children: [
                                { name: "瑶海" },
                                { name: "庐阳" },
                                { name: "仓山" }
                            ]
                        }
                    ]
                }
            ]
        };
    },

    mounted() {},

    methods: {
        fn(e) {
            console.log(e);
        }
    }
};
</script>
<style lang='scss' scoped>
  .cascader-demo {
        margin: 25px 0;
        .text {
            font-weight: 700;
            margin: 10px 0;
            height: 20px;
        }
    }
</style>