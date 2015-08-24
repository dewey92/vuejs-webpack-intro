<template>
	<div class="component">
		<h1>Single File Component</h1>
		<div class="row">
			<div class="col-sm-6">
				<div class="panel panel-default example">
					<div class="panel-body">
						Plain
						<img v-attr="src: './img/vue-component.png'" class="img-responsive" alt="">
					</div>
				</div>
			</div>
			<div class="col-sm-6">
				<div class="panel panel-default example">
					<div class="panel-body">
						With pre-processors
						<img v-attr="src: './img/vue-component-with-pre-processors.png'" class="img-responsive" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>