<!-- collapse-item -->
<template>
    <div class="l-collapse-item">
        <div class="l-item-title"
             ref="LItemTitle"
             @click="triggerItemContent">
            <div>{{title}}</div>
            <div>></div>
        </div>

        <div class="l-item-content"
             v-if="showItemContent">
            <slot></slot>
        </div>

    </div>
</template>

<script>
export default {
    inject: ["eventBus"],

    components: {},

    computed: {},

    props: {
        title: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            showItemContent: false,
            single: false
        };
    },

    created() {
        /**
         * 监听父组件的通知，接受props的值,来判断当前的显示隐藏
         */
        this.initActiveItem();
    },

    mounted() {},

    methods: {
        initActiveItem() {
            this.eventBus.$on("initActive", props => {
                this.single = props.single;
                console.log(props)
                if (props.single) {
                    this.showItemContent = props.active === this.name;
                    this.closeOtherItem()
                } else {
                    this.showItemContent = props.active.includes(this.name);
                }
            });
        },

        closeOtherItem() {
            
            this.eventBus.$on("clickItem", vm => {
                if (vm.name !== this.name) {
                    this.showItemContent = false;
                }
            });
        },

        triggerItemContent() {
            this.showItemContent = !this.showItemContent;
            this.eventBus.$emit("clickItem", this);
        }
    }
};
</script>
<style lang='scss' scoped>
$grey: #ddd;
$border-radius: 4px;

// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }

.l-collapse-item {
    border-radius: $border-radius;
    .l-item-title {
        display: flex;
        justify-content: space-between;
        border-top: 5px solid $grey;
        min-height: 32px;
        padding: 0 8px;
        display: flex;
        align-items: center;
    }
    .l-item-content {
        padding: 8px;
    }
}
</style>