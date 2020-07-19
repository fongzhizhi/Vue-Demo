/** 
 * 表单的类型有多种，我们可以监听表单的变化来维护表单的数据，这是可行的
 * 但Vue为我们提供了更为简单的语法糖：`v-model`指令。
 * 修饰符：.lazy 懒加载，如果你希望在用户输入结束之后即change之后再出发数据变更，就使用这个指令
 * .number自动转为数字，转换失败则恢复默认值
 * .trim自动过滤字符串的首位空白字符
*/
const app = new Vue({
    el: '#app',
    data: {
        message: 'This is a message.',
        checked: false,
        sex: 'man',
        select: 'B',
        selects: [],
    }
})