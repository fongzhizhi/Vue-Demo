/** 
 * 列表渲染
 * 有时候我们需要过滤的显示遍历数据中的值，这个时候使用计算属性来帮助我们
 * 在计算属性不适用的情况下 (例如，在嵌套 v-for 循环中) 你可以使用一个方法
*/
const app = new Vue({
    el: '#app',
    data: {
        userInfo: [
            {name: 'Lisi', age: 19, skill: 'Vue python'},
            {name: 'zhangsan', age: 22, skill: 'js java c# python'},
            {name: 'miky', age: 33, skill: 'php java'},
        ],
        planInfo: {
            title: 'go shopping',
            address: 'hot Park',
            time: '2020-7-19'
        },
        nums: [1, 2, 3, 6, 5 ,8, 13, 66],
        dataNums: [[1, 2 ,8, 13, 66], [4, 6,7,99]]
    },
    computed: {
        evenNums: function(){
            return this.nums.filter((num) => {
                return num % 2 == 0
            })
        }
    },
    methods: {
        even: function(nums) {
            return nums.filter((num) => {
                return num % 2 == 0
            })
        }
    }
})