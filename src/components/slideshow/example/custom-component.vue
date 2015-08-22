<template>
	<div class="text-center">
		<p>Hi, this is a paragraph inside a custom component</p>
		<p>And this the message: "{{ msg }}"</p>
	</div>
</template>

<script>
	module.exports = {
		props : ['msg']
	};
</script>