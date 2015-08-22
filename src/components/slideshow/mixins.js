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
			require(['./component.vue'], resolve)
		},
		'page-7' : function(resolve) {
			require(['./advanced-component.vue'], resolve)
		},
		'page-8' : function(resolve) {
			require(['./components.vue'], resolve)
		},
	}
};