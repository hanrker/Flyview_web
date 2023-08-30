<template>
	<view class="hinput">
		<view >
			<input type="text" name="name" id="id" :placeholder="tip" :value="v">
		</view>
	</view>
</template>

<script>
	export default {
		name:"hinput",
		props:{
			tip:String,
			v:'',
		},
		data() {
			return {
				
			};
		},
		
	}
</script>

<style>

	.hinput{
		display: inline-block;

	}
	input{
		font-size: 16rpx;
		margin-right: 4rpx;
		width: 100%;
		height: 100%;
	}
</style>