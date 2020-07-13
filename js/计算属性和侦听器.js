/**
 * # 计算属性
 * 模板的表达式应该简单明了，复杂的模板表达式应该用计算属性computed来替代，便于阅读和维护。
 *  ## 计算属性 vs 方法：计算属性是基于它们的响应式依赖进行缓存的
 *  ## 计算属性 vs 侦听属性：vue提供了一种监测和Vue实例属性变动的通用方法，侦听属性。
 *      需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
 *      而有的情况下属性侦听可能造成滥用，计算属性是个好的替代选择。
 *  ## 计算属性的setter：默认绑定的函数为getter，你也可以自定义计算属性的setter。
 */
new Vue({
    el: '#app',
    data: {
        message: 'Hello my kitty!',
        firstName: 'Tom',
        lastName: 'Micky',
        fullName: 'Tom Micky',
        question_placeholder: '请以?结尾表示你的问题已表述完成',
        question: '',
        answer: '',
        answer_image: '',
    },
    computed: {
        reverseMessage: function(){
            return this.message.split('').reverse().join('');
        }
    },
    created: function(){
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
    },
    watch: {
        firstName: function(val){
            this.fullName = val + ' ' + this.lastName;
        },
        lastName: function(val){
            this.fullName = this.firstName + ' ' + val;
        },
        question: function(newQuestion, oldQuestion){
            // 用户输入时数据变化的频率极高，会不断调用侦听函数，这里使用防抖函数做性能优化：
            this.answer = 'Waiting for you to stop typing...'
            this.answer_image = ''
            this.debouncedGetAnswer();
        }
    },
    methods: {
        getAnswer: function(){
            if(!_.endsWith(this.question, '?')) {
                this.answer = this.question_placeholder;
                return;
            }
            this.answer = 'thinking....';
            this.answer_image = '';
            var vm = this;
            axios.get('https://yesno.wtf/api')
            .then(function (response) {
                vm.answer = _.capitalize(response.data.answer)
                vm.answer_image = _.capitalize(response.data.image)
            })
            .catch(function (error) {
                vm.answer = 'Error! Could not reach the API. ' + error
                vm.answer_image = '';
            })
        }
    }
});