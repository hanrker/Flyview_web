<template>
	<view class="content">
		<scroll-view v-if="true" class="params" scroll-y="" show-scrollbar='false'>
			<view class="status">
				<h3>滑翔机状态</h3>
				<view class="item">
					<text class="item_title">调节舵面1：</text>
					<hinput class="hinput" style="width: 30%;" tip="位移量"></hinput>
					<hinput class="hinput" style="width: 30%;" tip="到位时间"></hinput>
				</view>
				<view class="item">
					<text class="item_title">调节舵面2：</text>
					<hinput class="hinput" style="width: 30%;" tip="位移量"></hinput>
					<hinput class="hinput" style="width: 30%;" tip="到位时间"></hinput>
					</span>
				</view>
				<view class="item">
					<text class="item_title">调节舵面3：</text>
					<hinput class="hinput" style="width: 30%;" tip="位移量"></hinput>
					<hinput class="hinput" style="width: 30%;" tip="到位时间"></hinput>
				</view>
				<view class="item">
					<text class="item_title">调节舵面4：</text>
					<hinput class="hinput" style="width: 30%;" tip="位移量"></hinput>
					<hinput class="hinput" style="width: 30%;" tip="到位时间"></hinput>
				</view>
				<view class="item">
					<text class="item_title">变形翼面1：</text>
					<hinput class="hinput" style="width: 30%;" tip="位移量"></hinput>
					<hinput class="hinput" style="width: 30%;" tip="到位时间"></hinput>
				</view>
				<view class="item">
					<text class="item_title">变形翼面2：</text>
					<hinput class="hinput" style="width: 30%;" tip="位移量"></hinput>
					<hinput class="hinput" style="width: 30%;" tip="到位时间"></hinput>
				</view>
			</view>
			<view class="status2">
				<h3>拦截器状态</h3>
				<view class="item">
					<text class="item_title">引导头：</text>
					<hinput class="hinput" style="width: 30%;" tip="安装状态"></hinput>
					<hinput class="hinput" style="width: 30%;" tip="作战构型"></hinput>
				</view>
				<view class="item">
					<text class="item_title">尾部舵机： </text>
					<hinput class="hinput" style="width: 30%;" tip="安装状态"></hinput>
					<hinput class="hinput" style="width: 30%;" tip="位移量"></hinput>
				</view>
				<view class="item">
					<text class="item_title">分离状态：</text>
					<hinput class="hinput" style="width: 60%;" tip="是否分离"></hinput>

				</view>
			</view>
			<view class="flyPara">
				<h3>飞行参数</h3>
				<view class="item">
					<text class="item_title">任务模式：</text>
					<select name="" id="">
						<option value="1">1</option>
					</select>

				</view>
				<view class="item">
					<text class="item_title">飞行坐标：</text>
					<select name="" id="">
						<option value="1">1</option>
					</select>
				</view>
				<view class="item">
					<text class="item_title">飞行姿态：</text>
					<select name="" id="">
						<option value="1">1</option>
					</select>
				</view>
				<view class="item">
					<text class="item_title">飞行速度：</text>
					<select name="" id="">
						<option value="1">1</option>
					</select>
				</view>
				<view class="item">
					<text class="item_title">制导交班：</text>
					<select name="" id="">
						<option value="1">1</option>
					</select>
				</view>
				<view class="item">
					<text class="item_title">脱靶量：</text>
					<select name="" id="">
						<option value="1">1</option>
					</select>
				</view>
			</view>
		</scroll-view>
		<view class="views">
			<view class="chart">
				<view class="fuc">
					<h3 style="display: inline">飞行弹道显示</h3>
					<view class="">
						<select name="chart_type" id="chart_type" @change='ChangeChart'>
							<option value="process">飞行器与目标对飞过程</option>
							<option value="zxddxh">飞行器纵向（X-H）平面飞行弹道</option>
							<option value="cxddxy">飞行器侧向（X-Y）平面飞行弹道</option>
							<option value="vt">飞行器速度（V-T）曲线</option>
							<option value="qj_gama_t">飞行器弹道倾角（Gama-T）曲线</option>
							<option value="dj_gama_t">飞行器弹道倾角（Gama-T）曲线</option>
							<option value="pj_psi_t">飞行器弹道偏角（Psi-T）曲线</option>
						</select>
					</view>
					
					<br>
					<!-- 	<button @click="Update('FanLinTarget')">FanLinTarget</button>
					<button @click="Update('FanLinMissile')">FanLinMissile</button>
					<button @click="Update('FangKongTarget')">FangKongTarget</button>
					<button @click="Update('FangKongMissile')">FangKongMissile</button> -->

				</view>
				<view  id="chart" class="threechart" style="width: 90%;height:90% ;"></view>
				<!-- <view id="chart" class="threechart" style="width: 90%;height:90% ;"></view> -->
				<!-- <div id="Fangkong" style="width: 600px;height:400px;"></div> -->
			</view>

			<view class="animation">
				<h3>虚拟成像</h3>
				<view class="" height="100px" width="100%">
					{{action_name}}
				</view>
				<video id="fangzhen" :src="video_src" show-center-play-btn="false" controls="false"></video>

				<!-- 				<video v-if="animation_index==2" src="@/static/video/testv.mp4" show-center-play-btn="false"
					controls="false"></video>
				<video v-if="animation_index==3" src="@/static/video/testv.mp4" show-center-play-btn="false"
					controls="false"></video>
				<video v-if="animation_index==4" src="@/static/video/testv.mp4" show-center-play-btn="false"
					controls="false"></video> -->
				<view class="model">
					<view class="select">
						<view class="item">
							<text class="item_title">单模块性能测试:</text>
							<select name="" id="">
								<option value="">1</option>
							</select>
						</view>
						<view class="item">
							<text class="item_title">典型飞行任务：</text>
							<select name="" id="">
								<option value="">1</option>
							</select>
						</view>

					</view>
					<view class="button">
						<img src="" alt="">
						<button style="display:block;width:80%;height: 80%;">停止</button>
					</view>



				</view>
				<view class="Aciton">

					<button @click="fangzhen_start">开始仿真</button>
					<button>暂停仿真</button>
					<button>退出仿真</button>
					<button>数据回溯</button>
				</view>
			</view>

		</view>




	</view>
</template>

<script>
	import {
		rejects
	} from 'assert';
	import hinput from '@/component/hinput/hinput.vue'
	import * as echarts from 'echarts';
	import 'echarts-gl';
	export default {
		data() {
			return {
				title: '演示展示',
				FanLinTarget: [],
				FanLinMissile: [],
				FangKongMissile: [],
				FangKongTarget: [],
				myChart :'',
				test_real_data: [
					[1, 2, 3],
					[10, 20, 30]
				],
				test_target_data: [
					[1, 2, 3],
					[10, 20, 30],
					[100, 200, 3],
					[100, 200, 3],
					[1, 200, 80]
				],

				video_src: '/static/video/testv.mp4',
				action_name:'暂无动作',
				//动画计时器
				timer: null,
				time: 0
			}
		},
		components: {
			hinput,
		},
		onReady() {
			// this.chart();
			// this.threeChart()
			const self = this;
			var chartDom = document.getElementById("chart");
			self.myChart = echarts.init(chartDom);
			self.Update("threeChart", 'FanLinTarget', "/static/dat/FanLinTarget.dat", [7, 8, 9], "chart")
			self.Update("threeChart", 'FanLinMissile', "/static/dat/FanLinMissile.dat", [7, 8, 9], "chart")
			self.Update("threeChart", 'FangKongTarget', "/static/dat/FangKongTarget.dat", [7, 8, 9], "chart")
			self.Update("threeChart", 'FangKongMissile', "/static/dat/FangKongMissile.dat", [7, 8, 9], "chart")
		},

		methods: {
			//生成二维折线图
			chart(dom) {
				const self =this
				var chartDom = document.getElementById(dom);
				// var chartDom = uni.createSelectorQuery().select("#main")
				console.log("chartDom",chartDom.innerHTML)
				self.myChart.clear()
				var option;

				option = {
					xAxis: {
						type: 'value',
	
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: this.FanLinTarget,
						type: 'line',
						smooth: true
					},
					{
						data: this.FanLinMissile,
						type: 'line',
						smooth: true
					},
					{
						data: this.FangKongTarget,
						type: 'line',
						smooth: true
					},
					{
						data: this.FangKongMissile,
						type: 'line',
						smooth: true
					}
					
					],
					 
				};
				self.myChart.resize({
				  width: chartDom.offsetWidth*1,
				  height: chartDom.offsetHeight*1,
				});
				window.addEventListener('resize', function() {
				    self.myChart.resize();
				  });
				option && self.myChart.setOption(option);
				
			},

			//生成三维折线图
			threeChart(dom) {
				const self =this
				var chartDom = document.getElementById(dom);
				// console.log(" chartDom.with*0.8", chartDom.offsetWidth)
				self.myChart = echarts.init(chartDom);
				var option;
				//选项
				option = {
					tooltip: {},
					backgroundColor: '#fff',
					visualMap: {
						show: false,
						dimension: 2,
						min: 0,
						max: 30,
						inRange: {
							color: [
								'#313695',

							]
						}
					},
					xAxis3D: {
						type: 'value'
					},
					yAxis3D: {
						type: 'value'
					},
					zAxis3D: {
						type: 'value'
					},
					grid3D: {
						viewControl: {
							projection: 'orthographic',
							orthographicSize:200,
						},
						// width: "100%",
						// height: "100%",
						// left:"5%",
						// top:"5%",
					},
					series: [{
							type: 'line3D',
							data: this.FanLinTarget,
							lineStyle: {
								width: 2
							}
						}, {
							type: 'line3D',
							data: this.FanLinMissile,
							color: 'red',
							lineStyle: {
								width: 1
							}
						},
						{
							type: 'line3D',
							data: this.FangKongTarget,
							color: 'red',
							lineStyle: {
								width: 1
							}
						},
						{
							type: 'line3D',
							data: this.FangKongMissile,
							color: 'red',
							lineStyle: {
								width: 1
							}
						},
					]
				};
				// console.log("sdsd")
				self.myChart.resize({
				  width: chartDom.offsetWidth*1,
				  height: chartDom.offsetHeight*1,
				});
				window.addEventListener('resize', function() {
				    self.myChart.resize();
				  });
				 
				option && self.myChart.setOption(option);
			},
			// 更新图表数据
			async Update(chart_type, data_type, filepath, nums, dom) {
				const self = this;
				console.log("更新数据", data_type, filepath)
				// console.log("selfx.FanLinTarget old", typeof(self.FanLinTarget))
				var chartdata
				if (filepath != '') {
					chartdata = await self.ReadDataFromDatPath(filepath, nums)
				} else {
					var datfile = await self.Selectfile(['.dat'])
					chartdata = await self.ReadDataFromDat(datfile, nums)
				}
				// console.log("chartdata:",chartdata)
				switch (data_type) {
					case 'FanLinTarget':
						self.FanLinTarget = chartdata;
						console.log("FanLinTarget")
						break;
					case 'FanLinMissile':
						self.FanLinMissile = chartdata;
						console.log("FanLinMissile")
						break;
					case 'FangKongTarget':
						self.FangKongTarget = chartdata;
						console.log("FangKongTarget")
						break;
					case 'FangKongMissile':
						self.FangKongMissile = chartdata;
						console.log("FangKongMissile")
						break;
				}
				if (chart_type == "threeChart") {
					self.threeChart(dom);

				} else if (chart_type == "chart") {
					self.chart(dom);
				}
				// console.log("self.FanLinTarget", chart)

			},

			//选择dat文件-
			//异步
			SelectFile(type) {
				const self = this;
				return new Promise(function(resolve, reject) {
					var reader = new FileReader();
					var dataArray = []
					console.log("选择文件")
					uni.chooseFile({
						count: 1,
						// extension: ['.dat'],
						extension: type,
						success(res) {
							console.log("选择文件成功", res.tempFiles[0])
							resolve(res.tempFiles[0])
						},
						fail() {
							reject()
						}
					})
				})
			},

			//加装指定路径的文件,返回数组
			ReadDataFromDatPath(path, nums) {
				const self = this
				console.log("文件:", path)
				var dataArray
				return new Promise(function(resolve, reject) {
					uni.request({
						url: path,
						method: "GET",
						success(res) {
							// console.log(path, ":", res)
							dataArray = self.ReadStringTo2Array(res.data, nums)
							// console.log( "dataArray:", dataArray)
							resolve(dataArray)
						}
					})
				})

			},

			//从dat文件中读取内容返回字符数组
			ReadDataFromDat(file, nums) {
				const self = this
				console.log("开始读取dat文件", typeof(file))
				var reader = new FileReader();
				reader.readAsBinaryString(file)
				console.log("读取内容", reader)
				return new Promise(function(resolve2, reject2) {
					reader.onloadend = function(e) {
						var res = []
						console.log("e:", e)
						var data = e.target.result.toString();

						res = self.ReadStringTo2Array(data, [0, 1, 2])
						console.log("读取dat文件完成")
						resolve2(res)
					};
				})
			},
			//拆解字符串内容,存储为二维数组
			ReadStringTo2Array(data, nums) {
				console.log("转换数组")
				var res = []
				var data_row = data.split("\n");

				data_row.forEach(function(item, key, arr) {
					if (key > 1) {
						var column = item.split(/[\r\t\s]/).filter(
							item =>
							item != '')
						var rows = []
						column.forEach((item, key, arr) => {
							if (nums != undefined) {
								if (nums.includes(key)) {
									rows.push(item)
								}
							}

						})
						res.push(rows)

					}
				})
				console.log("转换完成")
				return res
			},

			//开始仿真
			fangzhen_start() {
				const self = this
				var x = 0
				self.timer = setInterval(() => {
					x = x + 1


					if (x < 10) {
						self.video_src = "/static/video/testv.mp4"
						action_name = "变外形节点"
						uni.createVideoContext("fangzhen").play()
					} else if (x < 20) {
						self.video_src = "/static/video/v2.mp4"
						action_name = "弹器分离节点"
						uni.createVideoContext("fangzhen").play()
					} else if (x < 30) {
						self.video_src = "/static/video/v3.mp4"
						uni.createVideoContext("fangzhen").play()
					} else {
						clearInterval(self.timer)
					}
				}, 1000)


			},
			
			
			//更改图表类型
			ChangeChart(e){
				const self = this
				var chart_type = document.getElementById("chart_type")
				// document.getElementById("chart").innerHTML = ''
				e = chart_type.value
					console.log(e)
				if (e =='process'){
					self.Update("threeChart", 'FanLinTarget', "/static/dat/FanLinTarget.dat", [7, 8, 9], "chart")
					self.Update("threeChart", 'FanLinMissile', "/static/dat/FanLinMissile.dat", [7, 8, 9], "chart")
					self.Update("threeChart", 'FangKongTarget', "/static/dat/FangKongTarget.dat", [7, 8, 9], "chart")
					self.Update("threeChart", 'FangKongMissile', "/static/dat/FangKongMissile.dat", [7, 8, 9], "chart")
				} else if(e =='zxddxh'){
					self.Update("chart", 'FanLinTarget', "/static/dat/FanLinTarget.dat", [7,  8], "chart")
					self.Update("chart", 'FanLinMissile', "/static/dat/FanLinMissile.dat", [7,  8], "chart")
					self.Update("chart", 'FangKongTarget', "/static/dat/FangKongTarget.dat", [7,  8], "chart")
					self.Update("chart", 'FangKongMissile', "/static/dat/FangKongMissile.dat", [7,  8], "chart")
				}
				else if(e =='cxddxy'){
					self.Update("chart", 'FanLinTarget', "/static/dat/FanLinTarget.dat", [7,  9], "chart")
						self.Update("chart", 'FanLinMissile', "/static/dat/FanLinMissile.dat", [7,  9], "chart")
						self.Update("chart", 'FangKongTarget', "/static/dat/FangKongTarget.dat", [7,  9], "chart")
						self.Update("chart", 'FangKongMissile', "/static/dat/FangKongMissile.dat", [7,  9], "chart")
					
				}
				else if(e =='vt'){
					self.Update("chart", 'FanLinTarget', "/static/dat/FanLinTarget.dat", [0,  4], "chart")
						self.Update("chart", 'FanLinMissile', "/static/dat/FanLinMissile.dat", [0,  4], "chart")
						self.Update("chart", 'FangKongTarget', "/static/dat/FangKongTarget.dat", [0,  4], "chart")
						self.Update("chart", 'FangKongMissile', "/static/dat/FangKongMissile.dat",[0,  4], "chart")
					
				}
				else if(e =='qj_gama_t'){
					self.Update("chart", 'FanLinTarget', "/static/dat/FanLinTarget.dat", [0,  5], "chart")
						self.Update("chart", 'FanLinMissile', "/static/dat/FanLinMissile.dat", [0,  5], "chart")
						self.Update("chart", 'FangKongTarget', "/static/dat/FangKongTarget.dat", [0,  5], "chart")
						self.Update("chart", 'FangKongMissile', "/static/dat/FangKongMissile.dat",[0,  5], "chart")
					
				}

				else if(e =='pj_psi_t'){
					self.Update("chart", 'FanLinTarget', "/static/dat/FanLinTarget.dat", [0,  6], "chart")
						self.Update("chart", 'FanLinMissile', "/static/dat/FanLinMissile.dat", [0,  6], "chart")
						self.Update("chart", 'FangKongTarget', "/static/dat/FangKongTarget.dat", [0,  6], "chart")
						self.Update("chart", 'FangKongMissile', "/static/dat/FangKongMissile.dat",[0,  6], "chart")
					
				}
			}
		},
		onUnload: {
			// //清楚计时器
			// clearInterval(this.timer)
			// this.timer = null
		},
	}
</script>

<style>
	button {
		margin: 5rpx;
		width: 100rpx;
		height: 40rpx;
		font-size: 12rpx;
		display: inline;
		/* height: 50rpx; */
	}

	.content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}




	.params {
		width: 20%;
		height: 100%;
	}

	.status {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.status view {
		width: 100%;
	}

	.status2 {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.status2 view {
		width: 100%;
	}

	.status2 view input {
		width: 30%;
	}

	.flyPara {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.flyPara view {
		width: 100%;
	}



	.flyPara view input {
		width: 60%;
	}

	view select {
		width: 60%;
	}

	.views {
		display: flex;
		flex-direction: row;
		width: 80%;
		height: 100%
	}

	.chart {
		/* 		position: absolute;
		left: 5rpx;
		top:10rpx; */
		width: 80%;
		height: 80%;
		background-color: white;
		margin: 10px;
	}

	.threechart {
		width: 120%;
		height: 100%;
		/* margin: 10px; */
	}

	.animation {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 80%;
		justify-content: center;
	}

	#fangzhen {
		width: 100%;
		height: 80%;
	}

	.animation video {
		width: 100%;
		height: 80%;
		align-self: center;
		object-fit: fill;
		background-color: transparent;

	}

	input {
		border: solid, 1px, red;
		font-size: 14rpx;
		height: 40rpx;
	}

	.item_title {
		font-size: 12rpx;

		margin: 10rpx;

		width: 40%;
	}

	.item {
		display: flex;
		justify-content: flex-start;
		align-items: center;

	}

	.hinput {
		/* display: inline-block; */
		width: 70%;
		height: 100%;
	}

	.model {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	,

	.model .select {
		width: 80%;
	}

	.model .button {
		width: 20%;
		height: 100%;

	}
</style>