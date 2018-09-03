# slides的二种动画思路


## 思路1： DOM操作

通过操作一个包含每一个item的很长的dom的左右平移，控制视口大小来实现轮播

通过在第一项前复制最后一张图，在最后一项后复制第一张图，来实现无缝轮播

这样的好处是比较容易理解，也是常用的做法。缺点是在vue中操作dom，没法充分利用vue的便利

## 思路2： 单项数据流

vue组件单项数据流有一个特点就是，api往往会设计成.sync的形式。

设置用户当前选中的图，是selected。

- 当selected的值变化时，就会发生动画
- 当用户点击前进、后退时，我们通过emit触发selected的变化
- 当用户点击1/2/3/4时，我们通过emit触发selected的变化
- 当用户自动轮播时，我们通过emit触发selected的变化


而第一步是如何实现的呢？ 当selected的值变化时，就会发生动画

就是利用vue里的```<transition></transition>```

selected的变化会控制当前item的显示和隐藏，此时会触发动画

例如:

这里的动画有2个小技巧

- ```.slide-leave-active```时我们设置它为```absolute```,也就是离开的那个item不占位置
- 利用reverse类名，来实现反向轮播动画

```css
.slide-leave-active {
  transition: all 1s;
  position: absolute; // 离开的那个是绝对定位
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.slide-enter-active {
  transition: all 1s;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter.reverse {
  transform: translateX(-100%);
}
.slide-leave-to.reverse {
  transform: translateX(100%);
}
```

## 写单元测试时遇到的一些小问题

> 1.slot如何传递子组件，子组件的props和slot又该如何传递

由于这个组件是要用到slides和slides-item。

- slot如果是一个组件，该如何传递进去？
- 就算可以传递组件，那么组件里props和slot又如何传递呢？

结合文档和一些github上的示例，找到了答案

https://vue-test-utils.vuejs.org/zh/api/options.html#slots

你需要先注册子组件，只有用模板字符串的语法，正常往子组件里传递prop和slot就成。
```js
import Vue from "vue";
Vue.component("l-slides-item", SlidesItem);

slots: {
        default: `
        <l-slides-item name="1">
            <div class="box1">1</div>
        </l-slides-item>
        <l-slides-item name="2">
            <div class="box2">2</div>
        </l-slides-item>
        <l-slides-item name="3">
            <div class="box3">3</div>
        </l-slides-item>
        `
    },
```


> 2.如何模拟.sync？

因为 :selected.sync="selected",等于是监听了update:selected="selected = $event"

但是在写单元测试时，没法写这种.sync语法呀

经过几番尝试，发现是可以利用listeners设置实例的```$listeners```对象

在事件中，结合setProps可以设置vm的props更新。从而实现对.sync语法的模拟

也就是

listeners + setProps ===> 模拟.sync





