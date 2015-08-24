<template>
	<div class="advanced-component">
		<h1>Advanced Component</h1>
		<div class="row">
			<div class="col-sm-7">
				<div class="panel panel-default">
					<div class="panel-body">
						 <img v-attr="src: './img/HTML_adv_component.png'" class="img-responsive" alt="">
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel-body">
						 <img v-attr="src: './img/COMP_adv_component.png'" class="img-responsive" alt="">
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel-body">
						 <form>
							<div class="form-group">
								<label class="sr-only" for="type">Type</label>
								<input
									type="text"
									class="form-control"
									id="type"
									v-model="alertType"
									placeholder="Type of alert (success, info, warning, danger)">
							</div>
							<div class="form-group">
								<label class="sr-only" for="bold">Bold</label>
								<input
									type="text"
									class="form-control"
									id="bold"
									v-model="alertBold"
									placeholder="Bolded text">
							</div>
							<div class="form-group">
								<label class="sr-only" for="message">Message</label>
								<input
									type="text"
									class="form-control"
									id="message"
									v-model="alertMsg"
									placeholder="Message body">
							</div>
						</form>
				
						<alert type="{{ alertType }}" bold="{{ alertBold }}" msg="{{ alertMsg }}"></alert>
					</div>
				</div>
			</div>
			<div class="col-sm-5">
				<div class="panel panel-default example">
					<div class="panel-body">
						<img v-attr="src: './img/JS_adv_component.png'" class="img-responsive" alt="">				
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	module.exports = {
		components : {
			alert : require('./example/alert.vue')
		}
	};

</script>