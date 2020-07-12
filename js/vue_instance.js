function showFunStatus(funName, message) {
	console.log('【this.'+ funName +'】 was called:', message);
}

// Vue 实例
let vm = new Vue({
	el: '#app',
	data: {
		message: 'tell me what is your favorite.',
		destroyMsg: 'destroy this vm'
	},
	methods: {
		destroyVm: function(){
			this.$destroy();
		}
	},
	beforeCreate: function(){
		// 实例创建之前
		showFunStatus('beforeCreate', 'init:Event & lifeCycle');
	},
	created: function(){
		// 实例被创建之后
		showFunStatus('created', 'init:injections & reactivity');
	},
	beforeMount: function(){
		// 挂载之前
		showFunStatus('beforeMount', 'compile template into render function *');
	},
	mounted: function(){
		// 挂载之后
		showFunStatus('mounted', 'Create vm.$el and replace "el" with it');
	},
	beforeUpdate: function(){
		// 重新渲染之前
		showFunStatus('beforeUpdate', 'when data changes');
	},
	updated: function(){
		// 渲染之后
		showFunStatus('updated', 'Virtual Dom re-render and patch');
	},
	beforeDestroy: function(){
		// 实例销毁之前
		showFunStatus('beforeDestroy', 'when vm.$destroy() is called');
	},
	destroyed: function(){
		// 实例销毁之后
		showFunStatus('destroyed', 'teardown watchers, child components and event listeners');
	}
});