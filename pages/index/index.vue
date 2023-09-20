<template>
	<view class="content">
		<scroll-view v-if="false" class="params" scroll-y="" show-scrollbar='false'>
			<view class="status">
				<h3>滑翔机状态</h3>
				<view class="item">
					<text class="item_title">调节舵面1：</text>
					<hinput class="hinput" style="width: 30%;" tip="位移量" :v="params.begin_action"></hinput>
					<hinput class="hinput" style="width: 30%;" tip="到位时间" :v="params.pause_action">></hinput>
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
						<select :disabled="taskdisable" name="chart_type" id="chart_type" @change='ChangeChart'>
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


				</view>
				<view id="chart" class="threechart" style="width: 90%;height:90% ;"></view>
				<!-- <view id="chart" class="threechart" style="width: 90%;height:90% ;"></view> -->
				<!-- <div id="Fangkong" style="width: 600px;height:400px;"></div> -->
			</view>

			<view class="animation">
				<h3>虚拟成像</h3>
				<!-- <text class="item_title">硬件连接状态：{{plc_link_status}}</text> -->
				<view class="model" v-if="true">
					<view class="select">
						<view class="item" style="display: flex;justify-content:space-between">
							<!-- <text class="item_title">典型飞行任务：</text>
							<select name="" id="changeTask" :value="task_type" @change="changeTask"
								:options="task_options">
								<option v-for="(item,index) in task_options" :value="item.id">{{item.name}}</option>
							</select> -->
						</view>
					</view>
					<!-- <view class="button">
						<img src="" alt="">
						<button style="display:block;width:80%;height: 80%;">停止</button>
					</view> -->
				</view>
				<view class="" height="100px" width="100%" style="display: flex;justify-content:space-between">
					<!-- <text class="item_title">仿真内容：{{fzanimation_current_name}}</text> -->
					<text class="item_title">仿真状态：{{fangzhen_status_name}}</text>

				</view>
				<video id="fangzhen" muted :src="video_src" controls="false" show-play-btn="false"
					show-center-play-btn="false" @ended="video_end" @timeupdate="PlayVideo"></video>

				

				<!-- <view class="Aciton" v-if="true" style="display: flex;">

					<button @click="fangzhen_start(0)">开始仿真</button>
					<button id="fangzhen_zanting" @click="fangzhen_pause">暂停仿真</button>
					<button @click="fangzhen_stop">停止仿真</button>
					
				</view> -->
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

	import ws from '@/common/ws.js'

	import {
		global
	} from "@/common/config.js"
	import {
		resolve
	} from 'path';
	// import {
	// 	config
	// } from 'process';
	export default {
		data() {
			return {
				task_type: "FanLin",
				task_options: [{
						name: "反临飞行任务",
						id: "FanLin"
					},
					{
						name: "防空飞行任务",
						id: "FangKong"
					},

				],
				
				
				// 待获取的nodeids
				nodeIds:[],
				fzanimation:[],
				fzanimation_current_name:"",
				chart_duration:[],
				
				// 弹道是否动态
				fz_DanDao_status:false,
				
				plc_link_status:"未链接",
				title: '演示展示',
				FanLinTarget: [],
				FanLinMissile: [],
				FangKongMissile: [],
				FangKongTarget: [],
				FanLinTargetAll: [],
				FanLinMissileAll: [],
				FangKongMissileAll: [],
				FangKongTargetAll: [],
				myChart: '',	// 图表echart
				params: {

				},
				
				fz_action: "",

				video_src: '/static/video/init.mp4',
				videoContext: "",
				
				fz_current_time: -1,
				fangzhen_status: "",
				// fangzhen_status_name:"",
				fangzhen_status_plc: "",
				
				
				//动画详情
				animation_current:0,
				animation_duration:0,
				
				//动画计时器
				timer: null,
				time: 0,
				chart_interval:"",//图表计时器
				chartType:"",		//图表类型
				taskdisable:false,
			}
		},
		watch: {
			fz_action(newName, oldName) {
				const self = this

				for (let element in newName) {
					// console.log("element:",element,oldName[element])
					if (newName[element] == "true" && newName[element] != oldName[element] && oldName[element] !=
						undefined) {
						// console.log("newName:", element,"，",newName[element], ";oldName:", oldName[element])
						
						// console.log("nodes:", self.nodeIds,self.fzanimation)
						var index = self.nodeIds.indexOf(element)
						// console.log("fzanimation:", index,",",self.fzanimation[index])
						var animaion_name = self.fzanimation[index][0]
						var chart_duration = config.params[index].chart_duration
						var isChartDynamic= config.params[index].isChartDynamic
						var isChartDisplay = config.params[index].isChartDispaly
						var isChartEnd = config.params[index].isChartEnd
						
						var target_wait= config.params[index].target_wait
						self.fzanimation_current_name = animaion_name
						
						self.taskdisable = isChartDisplay
						// console.log("isChartDynamic", isChartDynamic)
						//执行动画
						self.fangzhen_start(0, animaion_name, 1, true)
						
						// console.log("是否执行弹道：",isChartDisplay)
						
						//执行曲线
						self.ChangeChart(isChartEnd,chart_duration,isChartDisplay,isChartDynamic,target_wait)
						
					}
				}

			}
		},
		computed: {
			fangzhen_status_name() {
				if (this.fangzhen_status == "start") {
					// this.taskdisable = true
					return "仿真开始"
				} else if (this.fangzhen_status == "pause") {
					// this.taskdisable = false
					return "仿真开始"
				} else if (this.fangzhen_status == "stop") {
					// this.taskdisable = false
					return "仿真结束"
				}
				return ""
			},
			action_name() {
				if (this.video_src.indexOf("front") >= 0) {
					return "前躲动作"
				} else if (this.video_src.indexOf("back") >= 0) {
					return "后躲动作"
				} else if (this.video_src.indexOf("in") >= 0) {
					return "装料"
				}
				return "无"
			}

		},
		components: {
			hinput,
		},

		async onReady() {
			
			const self = this;
			
			//获取硬件参数
			self.GetConfig()
			
			//获取图表dom元素，初始化echart
			var chartDom = document.getElementById("chart");
			self.myChart = echarts.init(chartDom);
				
			//初始化曲线数据
			self.FanLinTargetALL = await self.Init("FanLinTarget")
			// self.FanLinTargetALL = await self.Init("test")
			self.FanLinMissileALL = await self.Init("FanLinMissile")
			self.FangKongTargetALL = await self.Init("FangKongTarget")
			self.FangKongMissileALL = await self.Init("FangKongMissile")
			
			
			// //建立ws连接，获取node值
			// self.WSGetNodeValues("/api/update/")
			// 连接opc
			// self.CreateOPCUA(global.baseOPCUA)

			// 展示曲线，默认为process类型
			self.ChangeChart("process")
			
			
			// 创建仿真视频
			self.videoContext = uni.createVideoContext("fangzhen", self)
			
			
			setInterval(() => {
				self.UpdataParams()
			}, 1000)


		},
		onShow() {
			// const self = this;

		},

		methods: {
			//动画加载完成时触发
			PlayVideo(event){
				this.animation_current = event.detail.currentTime
				this.animation_duration = event.detail.duration
				// console.log("动画详情：",event.detail)
			},
			video_play() {
				const self = this

				self.fangzhen_start()
			},
			video_end() {
				const self = this
				self.videoContext.pause()
				// self.video_src = "/static/video/init.mp4"
				
				self.fangzhen_status = 'stop'
				
				 // self.fangzhen_stop()
			},
			video_pause() {
				const self = this

				self.fangzhen_pause()
			},
			changeTask() {
				const self = this

				self.task_type = document.getElementById("changeTask").value
				self.ChangeChart()
				// console.log(self.task_type)
				
			},
			IsTrue(newName, oldName) {
				const self = this
				// console.log("newName:", newName, ";oldName:", oldName)
				if (newName == "true" && newName != oldName) {
					return ture
				}
			},
			//生成二维折线图
			chart(dom, data_series_all, isDynamic = false, ani_vate = 80,isChartDisplay = false,target_wait=0) {
				const self = this
				var chartDom = document.getElementById(dom)

				self.ClearChart()
				console.log("更新二维数据")
				// self.myChart.showloa()
				var option;

				option = {
					xAxis: {
						type: 'value',
					},

					legend: {
						data: [data_series_all[0].name, data_series_all[1].name],
					},
					yAxis: {
						type: 'value'
					},
					animationDuration: 2000,
					series: [
						{
							name: data_series_all[0].name,
							type: "line",
							data: [],
							lineStyle: {
								width: 1
							}
						},
						{
							name: data_series_all[1].name,
							type: "line",
							data: [],
							lineStyle: {
								width: 4
							}
						},
					],


				};
				
				
				
				
				//根据missle.dat行数确定数据读取的行数
	
				var maxlen = data_series_all[1].data.length
				// data_series_all.forEach((d, i) => {
				// 	if (maxlen < d.data.length) {
				// 		maxlen = d.data.length
				// 	}
				
				// })
				ani_vate =  Math.trunc(1000 * ani_vate / maxlen) 
				console.log("播放速度：",maxlen,ani_vate)
				self.myChart.resize({
					width: chartDom.offsetWidth * 1,
					height: chartDom.offsetHeight * 1,
				});
				window.addEventListener('resize', function() {
					self.myChart.resize();
				});
				if (option && typeof option === "object" &&isChartDisplay ) {
					if (isDynamic) {
						var index = 0;
						self.chart_interval = setInterval(() => {
							if (true){
								// 处理数组数据
								var arrayt01 = data_series_all[0].data[index]
								var arrayt02 = data_series_all[1].data[index]
								// console.log("arrayt01:",arrayt01)
								// 	console.log("data_series_all",index,":",arrayt01,arrayt02)
								
								// console.log("target_wait",ani_vate,target_wait,maxlen,index)
								//更新曲线数据
								//等到一定后，加装目标
								if (index >=target_wait*ani_vate){
									option.series[0].data.push(arrayt01)
								}
								
								option.series[1].data.push(arrayt02)
								
								option && self.myChart.setOption(option, true);
								index = index + 1;
								if (index >= maxlen || self.fangzhen_status=="stop") {
									clearInterval(self.chart_interval)
								}
							}
							
						}, ani_vate);
					} else {
						option.series[0].data = data_series_all[0].data
						option.series[1].data = data_series_all[1].data
						self.myChart.setOption(option);
					}
				}else{
					self.myChart.setOption(option);
				}
			},

			//生成三维折线图
			threeChart(dom, data_series_all, isDynamic = false, ani_vate = 10,isChartDisplay = false,target_wait=0) {

				const self = this
				console.log("更新三维数据")

				var chartDom = document.getElementById(dom);
				// var myChart = echarts.init(chartDom)
				self.ClearChart()
				var option;
				//选项
				option = {
					tooltip: {},

					legend: {
						data: [data_series_all[0].name, data_series_all[1].name],
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
							orthographicSize: 200,
						},

					},
					series: [
						{
							name: data_series_all[0].name,
							type: "line3D",
							data: [],
							lineStyle: {
								width: 1
							}
						},
						{
							name: data_series_all[1].name,
							type: "line3D",
							data: [],
							lineStyle: {
								width: 4
							}
						},

					],
					// animationDuration:50000,

				};
				// console.log("sdsd")
				self.myChart.resize({
					width: chartDom.offsetWidth * 1,
					height: chartDom.offsetHeight * 1,
				});

				//确定数据中最大数量
				var maxlen = data_series_all[1].data.length
				
				// data_series_all.forEach((d, i) => {
					
				// 	if (maxlen < d.data.length) {
				// 		maxlen = d.data.length
				// 	}
				// 	// console.log("最大：",d.data.length,maxlen)
				// })
				
				ani_vate =  Math.trunc(1000 * ani_vate / maxlen) 
				console.log("播放速度：",ani_vate,maxlen)
				// option && self.myChart.setOption(option);
				window.addEventListener('resize', function() {
					self.myChart.resize();
				});

				if (option && typeof option === "object" && isChartDisplay) {
					if (isDynamic) {
						var index = 0;
						self.chart_interval = setInterval(() => {
							if (true){
								// 处理数组数据
								var arrayt01 = data_series_all[0].data[index]
								var arrayt02 = data_series_all[1].data[index]
								// console.log("arrayt01:",arrayt01)
									// console.log("data_series_all",index,":",arrayt01,arrayt02)
								//更新曲线数据
								// 等到若干时间时，开始加装目标曲线
								
								if (index >=target_wait * ani_vate){
									option.series[0].data.push(arrayt01)
								}
							
								
								option.series[1].data.push(arrayt02)
								
								option && self.myChart.setOption(option, true);
								index = index + 1;
								if (index >= maxlen ) {
									clearInterval(self.chart_interval)
								}
							}
							
						}, ani_vate);
					} else {
						option.series[0].data = data_series_all[0].data
						option.series[1].data = data_series_all[1].data
						self.myChart.setOption(option);
					}
				}{
					self.myChart.setOption(option);
				}

			},
			
			//初始化chart
			ClearChart(){
				const self = this
				self.myChart.clear()
				clearInterval(self.chart_interval)
			},

			//格式化数组，更改数组格式
			StringToNum(arr) {
				var res = []
				arr.forEach((v, i) => {
					res[i] = v
				})
				return res
			},
			//更改图表类型
			//self.ChangeChart(isChartEnd,isChartDynamic,false,chart_duration,isChartDisplay)
			
			ChangeChart(isChartEnd = false,chart_v= 80,isChartDispaly=false,isDynamic=false,target_wait) {
				const self = this
				var chart_type = document.getElementById("chart_type")
				self.fly_chart_type = chart_type.value
				var chart_type, chart_dom, linetype
				var data_series
				chart_dom = 'chart'
				var nums
				// console.log(e)
				if (self.fly_chart_type == 'process') {
					chart_type = "threeChart"
					nums = [7, 8, 9]
				} else if (self.fly_chart_type == 'zxddxh') {
					chart_type = "chart"
					nums = [7, 8]

				} else if (self.fly_chart_type == 'cxddxy') {
					chart_type = "chart"
					nums = [7, 9]

				} else if (self.fly_chart_type == 'vt') {
					chart_type = "chart"
					nums = [0, 4]

				} else if (self.fly_chart_type == 'qj_gama_t') {
					chart_type = "chart"
					nums = [0, 5]

				} else if (self.fly_chart_type == 'pj_psi_t') {
					chart_type = "chart"
					nums = [0, 6]

				}

				
				console.log("self.task_type:", self.task_type)
				if (self.task_type == "FanLin") {
					self.UpdateChart("FanLinTarget", self.FanLinTargetALL, nums)
					self.UpdateChart("FanLinMissile", self.FanLinMissileALL, nums)
					data_series = [{
						name: "反临目标",
						data: self.FanLinTarget,

					}, {
						name: "反临飞行",
						data: self.FanLinMissile,
					}]
				} else if (self.task_type == "FangKong") {
					self.UpdateChart("FangKongTarget", self.FangKongTargetALL, nums)
					self.UpdateChart("FangKongMissile", self.FangKongMissileALL, nums)
					data_series = [{
							name: "防空目标",
							data: self.FangKongTarget,
						},
						{
							name: "防空飞行",
							data: self.FangKongMissile,
						},
					]
				}
				
				
				//仿真到拆件时，曲线暂停
				if (!isChartEnd || isChartDispaly){
					isDynamic =true 
					// //仿真开始或暂停时，动态更新
					// if (self.fangzhen_status == "start" || self.fangzhen_status == "pause"){
					// 		isDynamic =true 
					// }
				}
			
				console.log("曲线参数：",isChartDispaly,isDynamic)
				
				if (chart_type == "threeChart") {
					self.threeChart(chart_dom, data_series,isDynamic,chart_v,isChartDispaly,target_wait);
				} else if (chart_type == "chart") {			
					self.chart(chart_dom, data_series,isDynamic,chart_v,isChartDispaly,target_wait);
				}
				console.log(chart_type + ":更新曲线完成")
			},
			


			//根据数据更新曲线
			UpdateChart(data_type, data, nums) {
				const self = this
				console.log("开始更新图表数据")
				var chartdata = self.SplitArray(data, nums)

				switch (data_type) {
					case 'FanLinTarget':
						self.FanLinTarget = chartdata;
						// console.log("FanLinTarget")
						break;
					case 'FanLinMissile':
						self.FanLinMissile = chartdata;
						// console.log("FanLinMissile")
						break;
					case 'FangKongTarget':
						self.FangKongTarget = chartdata;
						// console.log("FangKongTarget")
						break;
					case 'FangKongMissile':
						self.FangKongMissile = chartdata;
						// console.log("FangKongMissile")
						break;
				}
				console.log(data_type + ":更新数据完成")

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
							// console.log("选择文件成功", res.tempFiles[0])
							resolve(res.tempFiles[0])
						},
						fail() {
							reject()
						}
					})
				})
			},

			// 从文件更新数据
			async UpdateDataFromFile(filepath, nums, dom) {
				const self = this;
				// console.log("selfx.FanLinTarget old", typeof(self.FanLinTarget))
				var filedata
				if (filepath != '') {
					filedata = await self.ReadDataFromDatPath(filepath)
				} else {
					var datfile = await self.Selectfile(['.dat'])
					filedata = await self.ReadDataFromDat(datfile)

				}
				// console.log("从文件得到的数组：",filedata)
				return filedata
			},
			//加装指定路径的文件,返回数组
			ReadDataFromDatPath(path) {
				const self = this
				console.log("文件:", path)
				var dataArray
				return new Promise(function(resolve, reject) {
					uni.request({
						url: path,
						method: "GET",
						success(res) {
							// console.log(path, ":", res)
							dataArray = self.ReadStringTo2Array(res.data)
							// console.log( "dataArray:", dataArray)
							resolve(dataArray)
						}
					})
				})

			},

			//从dat文件中读取内容，返回数组
			ReadDataFromDat(file, nums) {
				const self = this
				// console.log("开始读取dat文件", typeof(file))
				var reader = new FileReader();
				reader.readAsBinaryString(file)
				// console.log("读取内容", reader)
				return new Promise(function(resolve2, reject2) {
					reader.onloadend = function(e) {
						var res = []
						// console.log("e:", e)
						var data = e.target.result.toString();
						res = self.ReadStringTo2Array(data)
						console.log("读取dat文件完成")
						resolve2(res)
					};
				})
			},


			//拆解字符串内容,存储为二维数组
			// nums为空时，表示全部读取
			ReadStringTo2Array(data, nums) {
				console.log("文件内容转换为二维数组")
				var res = []
				var data_row = data.split("\n");

				data_row.forEach(function(item, key, arr) {
					if (key > 1) {
						var column = item.split(/[\r\t\s]/).filter(
							item =>
							item != '')
						res.push(column)

					}
				})
				// console.log("转换完成:",res)
				return res
			},

			//截取数组
			SplitArray(arraydata, nums) {

				var res = []

				if (arraydata == undefined) {
					return
				}
				arraydata.forEach(function(item, key, arr) {
					var rows = []
					item.forEach((item, key, arr) => {

						if (nums != undefined) {
							if (nums.includes(key)) {
								rows.push(item)
							}
						}
					})
					res.push(rows)
				})
				return res
			},


			//开始仿真
			//1s更新一次
			fangzhen_start(start_time = 0, animation = "init.mp4", ani_v = 1, isConst = true) {
				const self = this
				self.fangzhen_status = 'start'
				// console.log("start_time", start_time)
				self.fz_current_time = start_time
				// console.log("播放动画为",animation)
				
				//动画不一样时，重新指定
				if (animation != self.video_src) {
					self.video_src = "/static/video/" + animation
				}
				//指定速率
				if (self.videoContext != undefined){
					self.videoContext.playbackRate(ani_v)
				}
				// if(isChartDynamic){
				// 	self.ChangeChart(isChartend,chart_v,isChartDispaly)
				// }
				
				self.timer = setInterval(() => {
					// console.log("self.fz_current_time:", self.fz_current_time)
					if (self.fangzhen_status == 'start') {
						if (isConst && self.videoContext != undefined) {
							self.videoContext.play()
							// console.log("开始播放")
						} else if (self.fz_current_time < 0) {
							self.video_src = "/static/video/" + animation
						} else if (self.fz_current_time < 10) {
							self.video_src = "/static/video/front.mp4"

						} else if (self.fz_current_time < 30) {
							self.video_src = "/static/video/back.mp4"


						} else {
							clearInterval(self.timer)
							self.fangzhen_status = 'stop'
						}
						self.videoContext.play()
						self.fz_current_time = self.fz_current_time + 1
					}

				}, 1000)
			},


			//暂停仿真
			fangzhen_pause() {
				const self = this
				const button_zanting = document.getElementById("fangzhen_zanting")

				if (self.fangzhen_status == 'start') {

					self.videoContext.pause()
					self.fangzhen_status = 'pause'

				} else if (self.fangzhen_status == 'pause') {
					// self.fz_current_time = self.fz_current_time -1
					self.videoContext.play()
					self.videoContext.seek(self.fz_current_time)
					self.fangzhen_status = 'start'
					// self.ChangeChart()
				}
				// console.log("仿真状态:", self.fangzhen_status)
			},
			//结束仿真
			fangzhen_stop() {
				const self = this
				self.videoContext.pause()
				// self.video_src = "/static/video/init.mp4"
				
				self.fangzhen_status = 'stop'

				self.fz_current_time = 0

				clearInterval(self.timer)
				self.timer = null
				self.ChangeChart()
				console.log("仿真状态:", self.fangzhen_status)
			},

			 CreateOPCUA(url) {
				const self = this
				
				return new Promise(function(resolve, reject) {
					uni.request({
						url: global.baseurl + "/iot/opcua/client/new/",
						method: "GET",

						data: {
							"url": url
						},
						success(res) {
							if (res.data.code != 0) {
								var value = res.data.data
								self.plc_link_status = "已连接"
								resolve(value)
								
							}else{
								//2后重新请求
								setTimeout(()=>{
									self.CreateOPCUA(global.baseOPCUA)
								},2000)
								
							}
						},
						fail() {
							self.CreateOPCUA(global.baseOPCUA)
						}
					})
				})
			},
			
			GetConfig(){
				const self = this 
				// console.log("config.params:",config.params)
				const params = config.params
				
				if (params.length>0){
					params.forEach((v,i)=>{
						self.nodeIds[i] = v.nodeid
						self.fzanimation[i] = v.animation
						self.chart_duration = v.chart_duration
					})
				}
				// console.log("self.nodeIds:",self.nodeIds)
			},
			
			//更新参数
			async UpdataParams() {
				const self = this
				
				// 获取plc参数
				self.fz_action = await self.GetDataByTagname(self.nodeIds)
				// self.params["fz_back_pause"] = self.GetDataByTagname(config.params[3])

			},

			//根据tagname获取数据
			GetDataByTagname(tagname) {
				var value = {}
				var req_data = {
					"url": global.baseOPCUA,
					"clientId": "default",
					"nodeIds": tagname
				}

				// console.log("req_data:",req_data)
				return new Promise(function(resolve, reject) {
					uni.request({
						url: global.baseurl + "/iot/opcua/getvalues/",
						method: "POST",
						header: {
							"Content-Type": "application/json"
							// "Content-Type":"application/x-www-form-urlencoded"
						},
						data: JSON.stringify(req_data),
						success(res) {

							tagname.forEach((v) => {
								// console.log("res:",res.data.err)
								if (res.data.code != 0) {
									value[v] = res.data.data[v]
								} 

							})
							// console.log("value:", value)
							resolve(value)
						}
					})
				})
			},

			//从接口获取曲线数据，初始化数据
			Init(data_type) {
				// console.log(global.baseurl)
				var data
				return new Promise((resolve, reject) => {
					uni.request({
						url: global.baseurl + "/api/getchartdata/",
						methods: "GET",
						// header:{
						// 	"Access-Control-Allow-Origin":"*",
						// 	'content-type':"application/json",
						// 	"Access-Control-Allow-Credentials": "true",
						// 	"Access-Control-Allow-Headers": "Content-Type, Content-Length",

						// 	"Content-Type": "text/html; charset=utf-8",
						// },
						data: {
							"file_name": data_type
						},
						success(res) {
							// console.log(data_type + ":接口成功获取数据", res.data)
							resolve(res.data["filedata"])
						}
					})
				})
			},

			//接口获取曲线数据
			RequestChartData(nums) {
				return new Promise((resolve, reject) => {
					uni.request({
						url: global.baseurl + "/changedata/",
						methods: "GET",
						header: {
							'content-type': "application/json"
						},
						data: {
							"nums": nums,
						},
						success(res) {
							resolve(res.data)
						}
					})
				})
			},


			//建立ws链接，获取硬件参数
			WSGetNodeValues(url ,datatype) {
				const self = this
				console.log("建立ws链接")
				var ws = uni.connectSocket({
					url: global.basews + url +"?datatype="+datatype ,
				
					header: {
						'content-type': 'application/json'
					},
					success() {
						console.log("ws建立成功")
					}
				})
				uni.onSocketMessage( (res)=> {
				  console.log('收到服务器内容：' + res.data);
				  self.StartFangZhen(res.data)
				});
				return ws
			},
			
			//根据变化的数值，执行仿真
			StartFangZhen(nodeValue){
				const self = this
				
				//获取文件中的node id，执行对应的动画和曲线时长
				var nodeid = Object.keys(nodeValue)
				var index = self.nodeIds.indexOf(nodeid)
				self.fzanimation_current_name = self.fzanimation[index]
				console.log("待执行：",nodeValue,nodeid,index)
				if (nodeValue[nodeid] == true){
					self.fangzhen_start(0,self.fzanimation_current_name,self.chart_duration[index])
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
		width: 200rpx;
		height: 70rpx;
		font-size: 12rpx;
		display: inline-block;
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
		width: 95%;
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
		/* justify-content: center; */
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

		/* width: 40%; */
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
		width: 100%;
	}

	.model .button {
		width: 20%;
		height: 100%;

	}
</style>