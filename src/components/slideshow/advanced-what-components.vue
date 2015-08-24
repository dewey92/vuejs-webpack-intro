<style lang="stylus" scoped>
	.bordered
		box-shadow inset 0px 0px 0px 1px #ccc;
		font-size 14px
		padding 20px
		color #666
		text-align center
		margin-bottom 10px
	&.main-content, &.sidebar-menu
		padding 90px 0
</style>

<template>
	<div class="advanced-why-components">
		<h1>Larger Structure</h1>
		<div class="panel panel-default">
			<div class="panel-body">
			   <div class="row">
			   	<div class="col-sm-3">
			   		<div class="sidebar-menu bordered">
			   			&lt;sidebar-menu /&gt;
			   		</div>
			   	</div>
			   	<div class="col-sm-9">
			   		<div class="custom-breadcrumb bordered">&lt;breadcrumb /&gt;</div>
			   		<div class="custom-alert bordered">&lt;Alert/&gt;</div>
			   		<div class="row">
			   			<div class="col-sm-8">
			   				<div class="main-content bordered">&lt;main /&gt;</div>
			   			</div>
			   			<div class="col-sm-4">
			   				<div class="widget bordered">&lt;people-to-follow /&gt;</div>
			   				<div class="widget bordered">&lt;popular-posts /&gt;</div>
			   				<div class="widget bordered">&lt;trending-topics /&gt;</div>
			   			</div>
			   		</div>
			   	</div>
			   </div>
			</div>
		</div>
	</div>
</template>