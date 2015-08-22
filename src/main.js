var Vue       = require('vue')
var VueRouter = require('vue-router')

Vue.use(VueRouter)

require('./main.styl')

var App = new Vue({
	data : {
		view : '/'
	}
})

var router = new VueRouter({
	history : true,
	saveScrollPosition: true
})
router.map({
	'/' : {
		component : function(resolve) {
			require(['./components/home.vue'], resolve)
		}
	},
	'slideshow' : {
		component : function(resolve) {
			require(['./components/slideshow/control.vue'], resolve);
		}
	},
	'*' : {
		component : require('./components/not-found.vue')
	}
})

router.start(App, '#app')