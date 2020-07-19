/** 
 * 组件：组件是可复用的Vue实例。
 * 使用一个组件相当于复用了并创建了一个新的实例。
 * 值得注意的是，组件的data必须是一个函数，否则再进行复制引用时，组件之间就可能共用同一个data的现象。
 * 【组件的注册】
 * 【通过props向子组件传递数据】
 * 当我们创建完一个组件时，可能需要传递一些自定义参数作为使用，这个使用就可以通过prop对象进行属性声明。
 * 【单个根元素】
 * 每个组件必须只有一个根元素
 * 【监听子组件的事件】
 * 有时候我们需要监听子组件来操作父组件的数据，子组件是无法访问到父组件的数据的，所以我们需要使用 $emit 进行调用
 * 注意：驼峰写法很容易造成执行失败(在处理组件和prop的自动大小写处理)
 * 【在组价上使用v-model指令】
 * 需要我们在组件上绑定 :value 和 v-on:input 的处理
 * 【插槽】
 * 有时候，我们希望直接通过html传递一些内容到组件，插槽是Vue定义好的很方便的组件。
 * 在想要替换的html处使用<slot>标签即可达到目的。
 * 【动态组件】
 * 使用Vue提供的组件component标签，绑定:is属性来动态控制标签的显示。
*/
Vue.component('count-btn', {
    data: function() {
        return {
            count: 0,
        }
    },
    template: '<button @click="++count">you clicked me {{ count }} times</button>'
});

Vue.component('post-info', {
    props: ['post'],
    template: `
        <div>
            <h3>{{ post.title }}</h3>
            <p>{{ post.content }}</p>
            <button @click="$emit('post-larger')">larger</button>
            <button @click="$emit('post-smaller', 0.2)">smaller</button>
            <hr>
        </div>
    `
})

Vue.component('error-info', {
    template: `
        <div class="error-box">
            <strong>Error!</strong>
            <slot></slot>
        </div>
    `
})

Vue.component('button1', {
    template: `<button @click="$emit('click_sub')"><slot></slot></button>`
})
Vue.component('span1', {
    template: `<span @click="$emit('click_sub')"><slot></slot></span>`
})

const app = new Vue({
    el: '#app',
    data: {
        fontSize: 1,
        posts: [
            { id: 1, title: 'My journey with Vue', content:'say something...'},
            { id: 2, title: 'Blogging with Vue', content:'say something...'},
            { id: 3, title: 'Why Vue is so fun', content:'say something...'}
          ],
          currentTabComponent: 'button1'
    }
})