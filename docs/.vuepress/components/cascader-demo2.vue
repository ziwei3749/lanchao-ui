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
                        popover-height="200px"
                        :load-data="loadData">
            </l-cascader>
        </div>

    </div>
</template>

<script>
import Cascader from "../../../src/cascader";
import Icon from "../../../src/icon";
import db from "../../../src/db.js";

function ajax(parent_id) {
    console.log("ajax");
    return new Promise(resolve => {
        setTimeout(() => {
            let result = db.filter(v => v.parent_id === parent_id);
            result.forEach(node => {
                node.isLeaf = true / false;
                if (db.filter(item => item.parent_id === node.id).length > 0) {
                    node.isLeaf = false;
                } else {
                    node.isLeaf = true;
                }
            });
            resolve(result);
        }, 2000);
    });
}

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
            source: []
        };
    },

    created() {
        ajax(0).then(data => {
            this.source = data;
        });
    },

    mounted() {},

    methods: {
        loadData(item, updateSource) {
            let id = item.id;
            ajax(id).then(result => {
                updateSource(result);
            });
        },
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