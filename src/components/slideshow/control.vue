<style lang="stylus" scoped>
	.control-slide
		color white
	
	.panel.example
		color #666
		
	.slide-content
		font-size 1.5em
		h1
			color #5dc596
			font-size 4em

	.slide-enter, .slide-leave
		transition all .25s ease
		opacity 0
		transform scale(1.1)

</style>

<template>
	<div class="control-slide">
		<div class="row">
			<div class="col-sm-2 col-sm-offset-8">
				<div class="input-group">
					<input type="number" name="slide" class="form-control" v-model="page" min="1" max="{{ totalSlides }}" placeholder="number">
					<span class="input-group-addon">of <span v-text="totalSlides"></span></span>
				</div>
			</div>
		</div>
		<div class="row slide-content">
			<div class="col-sm-10 col-sm-offset-1">
				<component is="{{ currentSlide }}" v-transition="slide" transition-mode="out-in"></component>
			</div>
		</div>
	</div>
</template>

<script>
	var mixins    = require('./mixins.js');

	module.exports = {
		data : function() {
			return {
				page : 1
			}
		},
		computed : {
			currentSlide : function() {
				return 'page-' + this.page;
			},
			totalSlides : function() {
				return Object.keys( mixins.components ).length;
			}
		},
		mixins : [ mixins ],
		methods: {
			navigate : function( event ) {
				var e = event || window.event;

				var tag = e.target.tagName.toLowerCase();

				if (tag !== 'input' && tag !== 'textarea') {
					if (e.keyCode == '37') { // left arrow
						if (this.page === 1) {
							return;
						} else {
							this.page--;
						}
					}
					else if (e.keyCode == '39') { // right arrow
						if (this.page === this.totalSlides) {
							return;
						};
						this.page++;
					}
				}
			}
		},
		attached : function() {
			document.addEventListener('keydown', this.navigate);
		},
		detached : function() {
			document.removeEventListener('keydown', this.navigate);
		}
	};

</script>