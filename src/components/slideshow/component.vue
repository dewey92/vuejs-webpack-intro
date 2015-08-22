<style lang="stylus" scoped>
</style>

<template>
	<div class="component">
		<h1>Component</h1>
		<div class="row">
			<div class="col-sm-8">
				<div class="panel panel-default">
					<div class="panel-body">
						 <img v-attr="src: './img/HTML_component.png'" class="img-responsive" alt="">
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel-body">
						 <img v-attr="src: './img/JS_component.png'" class="img-responsive" alt="">
					</div>
				</div>
			</div>
			<div class="col-sm-4">
				<div class="panel panel-default example">
					<div class="panel-body">
				
						<custom-component msg="Yup! This is a message"></custom-component>
				
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	var myComponent = require('./example/custom-component.vue');

	module.exports = {
		components : {
			customComponent : myComponent
		}
	};

</script>