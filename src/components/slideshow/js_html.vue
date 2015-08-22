<style lang="stylus" scoped>
</style>

<template>
	<div class="example">
		<h1>JS and HTML</h1>
		<div class="row">
			<div class="col-sm-5">
				<div class="panel panel-default">
					<div class="panel-body">
						 <img v-attr="src: './img/JS_example.png'" class="img-responsive" alt="">
					</div>
				</div>
			</div>
			<div class="col-sm-7">
				<div class="row">
					<div class="col-xs-12">
						<div class="panel panel-default">
							<div class="panel-body">
								 <img v-attr="src: './img/HTML_example.png'" class="img-responsive" alt="">
							</div>
						</div>
					</div>
					<div class="col-xs-12">
						<div class="panel panel-default example">
							<div class="panel-body">

								<div id="element">
									<div class="input-group">
										<input type="text" v-el="inputan" v-model="newList" class="form-control" placeholder="{{ plcholder }}">
										<span class="input-group-btn">
											<button v-on="click: addList" class="btn btn-info">Add to list</button>
										</span>
									</div>
									<ul>
										<li v-repeat="list">{{ $index }} - {{ $value }}</li>
									</ul>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	module.exports = {
		data : function() {
			return {
				list : ['siji','loro','telu'],
				newList : '',
				plcholder : 'Put content here..'
			}
		},
		methods : {
			addList : function() {
				this.list.push( this.newList );
				this.newList = '';
				this.$$.inputan.focus();
			}
		}
	};
</script>