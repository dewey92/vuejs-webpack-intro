<template>
	<div class="component">
		<h1>VueJS + Webpack</h1>
		<div class="row">
			<div class="col-sm-6">
				<div class="panel panel-default example">
					<div class="panel-body">
						./src/main.js
						<img v-attr="src: './img/entry_main.png'" class="img-responsive" alt="">
					</div>
				</div>
			</div>
			<div class="col-sm-6">
				<div class="panel panel-default example">
					<div class="panel-body">
						./component/my-component.vue
						<img v-attr="src: './img/vue-component.png'" class="img-responsive" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>