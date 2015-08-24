<style lang="stylus" scoped>
</style>

<template>
	<div class="what-component">
		<h1>Why "Web Components"?</h1>
		<br>
		<p>Imagine your app has many Alerts in many pages. But you don't need to rewrite the alert each time you need it</p>
		<div class="row">
			<div class="col-sm-9">
				<div class="panel panel-default">
					<div class="panel-body">
						<img v-attr="src: './img/alert.png'" class="img-responsive" alt="">
					</div>
				</div>
				<h2>As simple as that</h2>
			</div>
			<div class="col-sm-3">
				<div class="panel panel-default example">
					<div class="panel-body">
						In PHP
						<img v-attr="src: './img/alert_php.png'" class="img-responsive" alt="">
					</div>
				</div>
				<div class="panel panel-default example">
					<div class="panel-body">
						In Client
						<img v-attr="src: './img/alert_comp.png'" class="img-responsive" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>