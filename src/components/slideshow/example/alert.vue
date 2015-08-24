<template>

	<div class="alert alert-{{ type }}" v-show="isShown">
		<button type="button" class="close" v-on="click: closeAlert">&times;</button>
		<strong>{{ bold }}</strong> {{ msg }}
	</div>

</template>

<script>
	module.exports = {
		props : ['type', 'bold', 'msg'],
		data : function() {
			return {
				type : 'info',
				isShown : true
			}
		},
		methods : {
			closeAlert : function() {
				this.isShown = false;
			}
		}
	};
</script>