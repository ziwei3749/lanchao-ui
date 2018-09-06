const path = require('path')
module.exports = {
    base: "/lanchao-ui/",
    title: "lanchao-ui",
    description: "一个好用的UI框架",
    themeConfig: {
        nav: [
            { text: "主页", link: "/" },
            { text: "实现", link: "/guide/cascader" },
            { text: "交流", link: "https://github.com/ziwei3749/lanchao-ui/issues" }
        ],
        sidebar: [
            {
                title: "入门",
                collapsable: false,
                children: ["/install/", "/get-started/"]
            },
            {
                title: "组件",
                collapsable: false,
                children: [
                    "/components/button",
                    "/components/grid",
                    "/components/input",
                    "/components/layout",
                    "/components/popover",
                    "/components/tabs",
                    "/components/toast",
                    "/components/cascader",
                    "/components/slides",
                ]
            },
            {
                title: "实现",
                collapsable: false,
                children: [
                    "/guide/cascader",
                    "/guide/slides",
                ]
            }
        ]
    }
};
