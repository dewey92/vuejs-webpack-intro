<style lang="stylus" scoped>
	ul > li
		font-weight 300
		font-size 2em
		.text-success
			font-weight 700
</style>

<template>
	<div class="filters">
		<h1>Filters</h1>
		<div class="row">
			<div class="col-sm-3">
				<div class="panel panel-default example">
					<div class="panel-body">
						<input type="text" class="form-control input-lg" v-model="myText" placeholder="Type to filter">
					</div>
				</div>
			</div>
			<div class="col-sm-9">
				<ul>
					<li>Capitalize: <span class="text-success">{{ myText | capitalize }}</span></li>
					<li>Uppercase: <span class="text-success">{{ myText | uppercase }}</span></li>
					<li>Lowercase: <span class="text-success">{{ myText | lowercase }}</span></li>
					<li>Currency: <span class="text-success">{{ myText | currency }}</span></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

	module.exports = {
		data : function() {
			return {
				myText : ''
			}
		}
	};
</script>