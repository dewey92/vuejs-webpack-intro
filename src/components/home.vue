<style lang="stylus" scoped>
	.home
		padding 40px
	h1
		font-size 110px
		font-weight 700
	p
		font-size 22px

	#meta
		margin-top 20px
</style>

<template>
	<div class="home text-center">
		<img v-attr="src: logo" height="200" width="200" alt="Vue logo">
		<h1>VueJS</h1>
		<p style="margin-bottom: 0">Vue.js is a library for building modern web interfaces.</p>
		<p>It provides data-reactive components with a simple and flexible API.</p>

		<div id="meta">
			<time datetime="{{ now }}" v-text="now"></time> <br/>
			<span v-text="author"></span>
		</div>
	</div>
</template>

<script>
	module.exports = {
		data : function() {
			return {
				/*logo : require('file!../../img/vue_logo.png'),*/
				logo : '/img/vue_logo.png',
				author : 'Jihad Dzikri Waspada',
				timer : null,
				now : null
			}
		},
		created : function() {
			vm = this;

			vm.timer = setInterval(function() {
				var tmp = new Date();
				vm.$set('now', tmp.toDateString() + ' ' + tmp.toLocaleTimeString());
			}, 1000);
		},
		detached : function() {
			clearInterval( this.timer );
		}
	};
</script>