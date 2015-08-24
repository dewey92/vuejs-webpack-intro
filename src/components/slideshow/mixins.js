module.exports = {
	components : {
		'page-1' : function(resolve) {
			require(['./overview.vue'], resolve)
		},
		'page-2' : function(resolve) {
			require(['./comparing.vue'], resolve)
		},
		'page-3' : function(resolve) {
			require(['./instance.vue'], resolve)
		},
		'page-4' : function(resolve) {
			require(['./js_html.vue'], resolve)
		},
		'page-5' : function(resolve) {
			require(['./filters.vue'], resolve)
		},
		'page-6' : function(resolve) {
			require(['./what-components.vue'], resolve)
		},
		'page-7' : function(resolve) {
			require(['./why-components.vue'], resolve)
		},
		'page-8' : function(resolve) {
			require(['./advanced-what-components.vue'], resolve)
		},
		'page-9' : function(resolve) {
			require(['./component.vue'], resolve)
		},
		'page-10' : function(resolve) {
			require(['./advanced-component.vue'], resolve)
		},
		'page-11' : function(resolve) {
			require(['./components.vue'], resolve)
		},
		'page-12' : function(resolve) {
			require(['./webpack-intro.vue'], resolve)
		},
		'page-13' : function(resolve) {
			require(['./vue-webpack-intro.vue'], resolve)
		},
		'page-14' : function(resolve) {
			require(['./vue-webpack-2.vue'], resolve)
		},
		'page-15' : function(resolve) {
			require(['./vue-component.vue'], resolve)
		},
		'page-16' : function(resolve) {
			require(['./other-plugins.vue'], resolve)
		},
	}
};