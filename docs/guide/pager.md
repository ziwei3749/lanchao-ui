# 分页的设计过程

## 面向接口编程

- 思考需求：想想自己平时如何使用分页器，用户一般有哪些需求
- 设计接口：根据需求分析出分页需要有哪些参数，样式需要有哪些特点
- 参考经典UI框架的设计方式

结合上述3点，分析出一个分页器的接口和样式

- 接口
    + 1.接受「total-page」: 总共多少页
    + 2.接受「current-page」: 当前是第几页
    + 3.接受 change 事件
    + 4.接受 「hide-if-one-page」只有1页时，是否自动隐藏分页器
    + 5.接受 next/prev 按钮
- 样式的显示逻辑
    + 1.观察得出一般的分页，必须显示的的页码。第1页、最后1页、当前页、当前页-1、当前页-2、当前页+1、当前页+2，一共7页
    + 2.如果总页数少于7页，就全都显示，多于7页的部分用...表示
    + 3.分页器的样式不能做成圆圈，因为页码位数可能无限增加的原因，可以考虑用方形、矩形或者不带边框。



## 设计组件API

我觉得其实这一步，就是想象你的用户会如何调用组件

这里我觉得page-size可以考虑不要，因为一页展示多少数据，开发人员算就行了，我分页不需要知道那么多。

```vue
<l-pager :total-page="20" :current-page.sync="currentPage" @currentChange="onCurrentChange">
</l-pager>
```

## 实现分页组件的注意点

- 1.需要先思考清楚分页页码的显示逻辑，并做好渲染判断。

比如我这里的渲染规则就是，必须显示的的页码。第1页、最后1页、当前页、当前页-1、当前页-2、当前页+1、当前页+2，一共7页，

其他页码用...显示,需要做好边界条件判断

- 2.利用.sync单项数据流，让逻辑变得更加清晰。

当用户点击「页码」或者「上一页」，组件内部做的事情十分清晰，就是通知父组件，我变了，父组件则根据当前页码重新渲染页面。

```js
   onClickPage(page) {
      if (page < 1 || page > this.totalPage) {
        return;
      }
      this.$emit("update:currentPage", page);
      this.$emit("currentChange", page);
      // 重新渲染page组件,渲染哪些页码应该是根据当前页码来决定的
      this.reRender(page);
    },
```


当然我们还可以使用计算属性来计算pages，而不是在mounted和onClickPage时调用reRender()

- 这样初次页面渲染时，pages会将render watcher作为依赖收集，同时读取计算属性pages，还会触发内部totalPage等属性的getter，于是这些属性把computed watcher作为依赖收集
- 将来当totalPage或者currentPage发生变化时，compted watcher的update就会被触发，如果新旧值发生变化，就computed watcher会调用notify()，通知render watcher调用自己的update方法更新视图

这样可以很好的利用计算属性惰性求值

## TDD

分页组件的单元测试，还是常规思路

- 构造一个分页组件，传递propData，测试样式和数据是否正常
- 模仿点击事件，测试是否可以触发change事件，并且得到当前页码