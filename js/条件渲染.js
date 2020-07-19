/** 
 * 条件渲染语法：使用v-if可以根据条件判断来动态渲染dom节点
 * v-if v-else-if v-else
 * 
 * 用 key 管理可复用的元素
 * 尽管Vue尽可能高效地渲染元素，不会重头渲染，尽可能复用已有的元素，但这样可能不是用户需要的
 * 给元素添加独立的key关键字能保证改元素的唯一性
 * 
 * 使用v-show也能控制元素的显示隐藏，但v-show只是控制css来控制显隐，dom会一直存在。
*/
const app = new Vue({
    el: '#app',
    data: {
        awesome: true,
        well: true,
    }
})