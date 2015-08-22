<style lang="stylus">
	.comparing table
		background white
		color #666
		letter-spacing 0.5px
</style>

<template>
	<div class="comparing">
		<h1>VueJS vs AngularJS</h1>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>#</th>
					<th>VueJS</th>
					<th>AngularJS</th>
				</tr>
			</thead>
			<tbody>
				<tr class="success">
					<td>1</td>
					<td>Mustache Bindings</td>
					<td>Mustache Bindings</td>
				</tr>
				<tr>
					<td>2</td>
					<td>v-text</td>
					<td>ng-bind</td>
				</tr>
				<tr>
					<td>3</td>
					<td>v-if</td>
					<td>ng-if</td>
				</tr>
				<tr>
					<td>4</td>
					<td>v-show</td>
					<td>ng-show</td>
				</tr>
				<tr>
					<td>5</td>
					<td>v-repeat</td>
					<td>ng-repeat</td>
				</tr>
				<tr>
					<td>6</td>
					<td>v-model</td>
					<td>ng-model</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>