/** 
 * 事件监听 使用 v-on 或简写 @ 指令来进行事件监听处理
 * [事件修饰符]
 * 我们常常在事件处理中使用event.preventDefalut()等函数，为了方便使用，我们可以使用Vue提供的事件修饰符来达到
 * 同样的事件处理效果。比如.stop,.prevent等
 * 事件修饰符可串联，顺序不一样也可能达到不一样的效果。
 * [按键修饰符]
 * 类似事件修饰符，使用Vue提供的按键修饰符可以让我们更方便地在处理键盘事件时增强使用。
*/

const app = new Vue({
    el : '#app',
    data: {
        count: 0,
        message: ''
    },
    methods: {
        showMessage: function(msg) {
            alert(msg);
        }
    }
})