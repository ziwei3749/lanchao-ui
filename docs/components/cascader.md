---
title: Cascader - 级联
sidebarDepth: 2
---

# Cascader 级联组件 <Badge text="beta" type="warn"/>

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

## 基础用法

<cascader-demo1 />

```vue
<l-cascader :source.sync="source"
            :selected.sync="selected"
            @update:selected="fn"
            popover-height="200px">
</l-cascader>

<script>
export default {
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

    methods: {
        fn(e) {
            console.log(e);
        }
    }
};
</script>
```

## 动态加载

当选中某一级时，动态加载该级下的选项

<cascader-demo2 />

```vue
<l-cascader :source.sync="source"
            :selected.sync="selected"
            @update:selected="fn"
            popover-height="200px"
            :load-data="loadData">
</l-cascader>

<script>
    methods(){
        loadData(item, updateSource) {
            let id = item.id;
            ajax(id).then(result => {
                updateSource(result);
            });
        },
    }
</script>
```

## Attributes

|      参数      |      说明      |   类型   | 可选值 | 默认值 |
| :------------: | :------------: | :------: | :----: | :----: |
|     source     |     数据源     |  Array   |   —    |   —    |
|    selected    |  选中项绑定值  |  Array   |   —    |   —    |
| popover-height | 设置弹出层高度 |  String  |   —    | 200px  |
|   load-data    |    异步函数    | Function |   —    |   —    |

<style>

table th:nth-child(2) {
    width: 100px;
}

table th:nth-child(4) {
    width: 290px;
}
</style>
