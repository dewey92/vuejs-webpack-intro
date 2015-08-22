<style lang="stylus" scoped>
</style>

<template>
	<div class="components">
		<h1>Components</h1>
		<div class="row">
			<div class="col-sm-5">
				<div class="panel panel-default">
					<div class="panel-body">
						 <img v-attr="src: './img/JS_components.png'" class="img-responsive" alt="">
					</div>
				</div>
			</div>
			<div class="col-sm-7">
				<div class="row">
					<div class="col-xs-12">
						<div class="panel panel-default">
							<div class="panel-body">
								 <img v-attr="src: './img/HTML_components.png'" class="img-responsive" alt="">
							</div>
						</div>
					</div>
					<div class="col-xs-12">
						<div class="panel panel-default example">
							<div class="panel-body">

								<div id="test-component">
									<ul class="nav nav-pills">
										<li v-repeat="menu in menus" v-class="active : currentComponent === menu">
											<a href="#" v-on="click: changeComponent(menu)">{{ menu }}</a>
										</li>
									</ul>
									<component is="{{ currentComponent }}"></component>
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
				menus : ['Home', 'Profile', 'Message'],
				currentComponent : 'Home'
			}
		},
		components : {
			'Home' : {
				template: '<p>Ini Home, the gate of the app</p>'
			},
			'Profile' : {
				template: '<p>Ini Profile, the info bout the user</p>'
			},
			'Message' : {
				template: '<p>Ini Message, private area!</p>'
			}
		},
		methods : {
			changeComponent : function( menu ) {
				this.currentComponent = menu;
			}
		}
	};

</script>