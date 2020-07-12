// Vue模板机制
/** 
 * # 插值
 *  ## 文本：“Mustache”语法 (双大括号)
 *  ## 原始html：使用Mustance语法，只会将文本数据解析为字符串，如果你想解析为原始的html代码，使用v-html指令（注意xxs攻击）
 *  ## 属性：使用v-bind来进行属性插值绑定
 *  ## 使用js语法表达
 * # 指令
 *  使用带有v-的前缀的特殊属性就是一条指令，数据变化会更新指令连带的效果。指令的值期望是一条单js表达式（v-for除外）
 *  动态参数：从2.6.0开始
 * # 修饰符
 *  修饰符是使用.号指明的特殊后缀用于指出一个指令应该以特殊方式绑定。例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()
 * # 缩写
 * v-bind:attrName可以缩写为:attrName
 * v-on:event可以缩写为@:event
*/
new Vue({
    el: '#app',
    data: {
        text: '插值文本使用Mustache语法进行模板声明，数据和DOM变化双向绑定，使用v-once指令只会初始化，但不绑定数据变化。',
        html: '<span style="color: red;">原始html的插入</span>',
        placeholder: '这是绑定的placeholder提示',
        title: 'title show!',
        sumResult: 0,
    }
});