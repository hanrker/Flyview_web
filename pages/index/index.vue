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
				<view id="chart" class="threechart" style="width: 90%;height:90% ;"></view>
				<!-- <view id="chart" class="threechart" style="width: 90%;height:90% ;"></view> -->
				<!-- <div id="Fangkong" style="width: 600px;height:400px;"></div> -->
			</view>

			<view class="animation">
				<h3>虚拟成像</h3>
				<view class="" height="100px" width="100%">
					<text>{{action_name}}</text>
					<text>{{fangzhen_status}}</text>
					
				</view>
				<video id="fangzhen" muted :src="video_src" show-center-play-btn="false" controls="false"></video>

				<!-- 				<video v-if="animation_index==2" src="@/static/video/testv.mp4" show-center-play-btn="false"
					controls="false"></video>
				<video v-if="animation_index==3" src="@/static/video/testv.mp4" show-center-play-btn="false"
					controls="false"></video>
				<video v-if="animation_index==4" src="@/static/video/testv.mp4" show-center-play-btn="false"
					controls="false"></video> -->
				<view class="model" v-if="false">
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
				<view class="Aciton" v-if="true" style="display: flex;">

					<button @click="fangzhen_start">开始仿真</button>
					<button id="fangzhen_zanting" @click="fangzhen_pause">暂停仿真</button>
					<button @click="fangzhen_end">退出仿真</button>
					<!-- <button @click="fangzhen_start">数据回溯</button> -->
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
	
	import ws from '@/common/ws.js'

	import {
		global
	} from "@/common/config.js"
	import {
		resolve
	} from 'path';
	export default {
		data() {
			return {
				title: '演示展示',
				FanLinTarget: [],
				FanLinMissile: [],
				FangKongMissile: [],
				FangKongTarget: [],
				FanLinTargetAll: [],
				FanLinMissileAll: [],
				FangKongMissileAll: [],
				FangKongTargetAll: [],
				myChart: '',
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
				params: {
					begin_action: '222',
					pause_action: '',
					stop_action: '',
				},
				video_src: '/static/video/01.mp4',
				action_name: '暂无动作',
				fangzhen_current:-1,
				fangzhen_status:"",
				fangzhen_status_plc:"",
				//动画计时器
				timer: null,
				time: 0
			}
		},
		computed:{
			fangzhen_status(){
				if (fangzhen_status == "start"){
					return fangzhen_status = "仿真开始"
				}else if (fangzhen_status == "pause"){
					return fangzhen_status = "仿真开始"
				}else if (fangzhen_status == "stop"){
					return fangzhen_status = "仿真结束"
				}
			}
		},
		components: {
			hinput,
		},
		watch:{
			begin_action(newName,oldName){
				console.log(newName)
				if (newName == "false"){
					this.fangzhen_start()
				}
			}
		},
		async onReady() {
			// this.chart();
			// this.threeChart()
			const self = this;
			var chartDom = document.getElementById("chart");
			self.myChart = echarts.init(chartDom);
			
			//初始化曲线
			self.FanLinTargetALL = await self.Init("FanLinTarget")
			// self.FanLinTargetALL = await self.Init("test")
			self.FanLinMissileALL = await self.Init("FanLinMissile")
			self.FangKongTargetALL = await self.Init("FangKongTarget")
			self.FangKongMissileALL = await self.Init("FangKongMissile")
			
			self.ChangeChart("process")
			
			self.CreateWs()

			//更新参数
				console.log(global.fz_action_tag)
			setInterval(() => {
				self.UpdataParams()
			 
				// self.fangzhen_status_plc = self.GetDataByTagname("oml.flyview.fz_action")
				// console.log("fangzhen_status",self.params.begin_action)
				// console.log("show:", self.params)
				if (self.params.begin_action=="true"){
					self.fangzhen_start()
				}
			}, 5000)


		},
		onShow() {
			// const self = this;
			
		},

		methods: {
			//生成二维折线图
			chart(dom) {
				const self = this
				var chartDom = document.getElementById(dom);

				self.myChart.clear()
				console.log("更新二维数据")
				
				var option;

				option = {
					xAxis: {
						type: 'value',
					},
				
					legend:{
						data:["FanLinTarget","FanLinMissile","FangKongTarget","FangKongMissile"]
					},
					yAxis: {
						type: 'value'
					},
					series: [
						{
							name:"FanLinTarget",
							data: self.FanLinTarget,
							// data:[[1,2],[2,4],[5,6]],
							type: 'line',
							smooth: true,
							
						},
						{
							name:"FanLinMissile",
							data: self.FanLinMissile,
							type: 'line',
							smooth: true,
						},
						{
							name:"FangKongTarget",
							data: self.FangKongTarget,
							type: 'line',
							smooth: true,
						
						},
						{
							name:"FangKongMissile",
							data: self.FangKongMissile,
							type: 'line',
							smooth: true,
						}

					],

				};
				self.myChart.resize({
					width: chartDom.offsetWidth * 1,
					height: chartDom.offsetHeight * 1,
				});
				window.addEventListener('resize', function() {
					self.myChart.resize();
				});

				option && self.myChart.setOption(option);
				self.myChart.hideLoading()
			},

			//生成三维折线图
			threeChart(dom) {
				
				const self = this
				console.log("更新三维数据")
				var chartDom = document.getElementById(dom);
				
				self.myChart.clear()

				
				var option;
				//选项
				option = {
					tooltip: {},
					
					legend:{
						data:["FanLinTarget","FanLinMissile","FangKongTarget","FangKongMissile"],
						
					},
					backgroundColor: '#fff',
					// color:["#ff0004","#3bff00","#ff57ff","#ff218c"],
					// visualMap: {
					// 	show: false,
					// 	dimension: 2,
					// 	min: 0,
					// 	max: 30,
					// 	inRange: {
					// 		color: [
					// 			'#313695',

					// 		]
					// 	}
					// },
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
							name:"FanLinTarget",
							type: 'line3D',
							data: self.FanLinTarget,
							lineStyle: {
								width: 1
							}
						}, {
							name:"FanLinMissile",
							type: 'line3D',
							data: self.FanLinMissile,
					
							lineStyle: {
								width: 1
							}
						},
						{
							name:"FangKongTarget",
							type: 'line3D',
							data: self.FangKongTarget,
			
							lineStyle: {
								width: 1
							}
						},
						{
							name:"FangKongMissile",
							type: 'line3D',
							data: self.FangKongMissile,
			
							lineStyle: {
								width: 1
							}
						},
					]
				};
				// console.log("sdsd")
				self.myChart.resize({
					width: chartDom.offsetWidth * 1,
					height: chartDom.offsetHeight * 1,
				});
				window.addEventListener('resize', function() {
					self.myChart.resize();
				});

				option && self.myChart.setOption(option);

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


			UpdateChartView(chart_type, dom) {
				const self = this
				if (chart_type == "threeChart") {
					self.threeChart(dom);

				} else if (chart_type == "chart") {
					self.chart(dom);
				}
				console.log(chart_type + ":更新曲线完成")
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
				// console.log("SplitArray:",arraydata)
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
			
			//获取仿真状态
			GetFangZhengStatus(){
				const self =this
				var ws = self.CreateWs()
				ws.onMessage((res)=>{
					console.log(res.data)
				})
			},
			
	
			
			//开始仿真
			//1s更新一次
			fangzhen_start() {
				const self = this
				
				self.fangzhen_current = 0
				console.log("self.timer",self.timer)
				// if (self.fangzhen_status=='end' || self.fangzhen_status=='start'  ){
				// 	self.fangzhen_end()
				// 	self.fangzhen_current = -1
				// 	console.log("重置时间:",self.fangzhen_current)
				// }
				// self.fangzhen_status ='start'
				self.timer = setInterval(() => {
						console.log("时间:",self.fangzhen_current)
					if (self.fangzhen_status !='start'){
						
						if  (self.fangzhen_current <0) {
							self.video_src = "/static/video/01.mp4"
								
						} else if(self.fangzhen_current < 20) {
							self.video_src = "/static/video/01.mp4"
							self.action_name = "变外形节点"	

						} else if (self.fangzhen_current < 30) {
							self.video_src = "/static/video/02.mp4"
							self.action_name = "弹器分离节点"

						} else if (self.fangzhen_current < 40) {
							self.video_src = "/static/video/03.mp4"
							self.action_name = ""

						} else if (self.fangzhen_current < 60) {
							self.video_src = "/static/video/04.mp4"
							self.action_name = ""

						
						} else {
							clearInterval(self.timer)
							self.fangzhen_status ='stop'
						}
						
						
							uni.createVideoContext("fangzhen").play()
							
						self.fangzhen_status ='start'
					}
				self.fangzhen_current = self.fangzhen_current + 1
				}, 1000)


			},


			//暂停仿真
			fangzhen_pause() {
				const self = this
				const button_zanting = document.getElementById("fangzhen_zanting")
			
				if (self.fangzhen_status =='start'){
					 
					uni.createVideoContext("fangzhen").pause()
					self.fangzhen_status ='pause'
					// clearInterval(self.timer)
				}else if (self.fangzhen_status =='pause'){
					uni.createVideoContext("fangzhen").play()
					self.fangzhen_status ='start'
				}
					console.log("仿真状态:",self.fangzhen_status)
			},
			//结束仿真
			fangzhen_end() {
				const self = this
				uni.createVideoContext("fangzhen").stop()

				self.fangzhen_status ='stop'
				self.video_src = "/static/video/a.mp4"
				self.fangzhen_current = -1
				
				clearInterval(self.timer)
				self.timer = null
			},

			//更改图表类型
			ChangeChart(e) {
				const self = this
				var chart_type = document.getElementById("chart_type")
				e = chart_type.value
				console.log(e)
				if (e == 'process') {
					self.UpdateChart("FanLinTarget", self.FanLinTargetALL, [7, 8, 9])
					self.UpdateChart("FanLinMissile", self.FanLinMissileALL, [7, 8, 9])
					self.UpdateChart("FangKongTarget", self.FangKongTargetALL, [7, 8, 9])
					self.UpdateChart("FangKongMissile", self.FangKongMissileALL, [7, 8, 9])
					self.UpdateChartView("threeChart", "chart")
				} else if (e == 'zxddxh') {
					self.UpdateChart("FanLinTarget", self.FanLinTargetALL, [7, 8])
					self.UpdateChart("FanLinMissile", self.FanLinMissileALL, [7, 8])
					self.UpdateChart("FangKongTarget", self.FangKongTargetALL, [7, 8])
					self.UpdateChart("FangKongMissile", self.FangKongMissileALL, [7, 8])
					self.UpdateChartView("chart", "chart")
				} else if (e == 'cxddxy') {
					self.UpdateChart("FanLinTarget", self.FanLinTargetALL, [7, 9])
					self.UpdateChart("FanLinMissile", self.FanLinMissileALL, [7, 9])
					self.UpdateChart("FangKongTarget", self.FangKongTargetALL, [7, 9])
					self.UpdateChart("FangKongMissile", self.FangKongMissileALL, [7, 9])
					self.UpdateChartView("chart", "chart")
				} else if (e == 'vt') {
					self.UpdateChart("FanLinTarget", self.FanLinTargetALL, [0, 4])
					self.UpdateChart("FanLinMissile", self.FanLinMissileALL, [0, 4])
					self.UpdateChart("FangKongTarget", self.FangKongTargetALL, [0, 4])
					self.UpdateChart("FangKongMissile", self.FangKongMissileALL, [0, 4])
					self.UpdateChartView("chart", "chart")
				} else if (e == 'qj_gama_t') {
					self.UpdateChart("FanLinTarget", self.FanLinTargetALL, [0, 5])
					self.UpdateChart("FanLinMissile", self.FanLinMissileALL, [0, 5])
					self.UpdateChart("FangKongTarget", self.FangKongTargetALL, [0, 5])
					self.UpdateChart("FangKongMissile", self.FangKongMissileALL, [0, 5])
					self.UpdateChartView("chart", "chart")
				} else if (e == 'pj_psi_t') {
					self.UpdateChart("FanLinTarget", self.FanLinTargetALL, [0, 6])
					self.UpdateChart("FanLinMissile", self.FanLinMissileALL, [0, 6])
					self.UpdateChart("FangKongTarget", self.FangKongTargetALL, [0, 6])
					self.UpdateChart("FangKongMissile", self.FangKongMissileALL, [0, 6])
					self.UpdateChartView("chart", "chart")
				}


			},
			//更新参数
			async UpdataParams() {
				const self = this
				// self.params.begin_action = await self.GetDataByTagname("oml.flyview.fz_action")
				// self.params.pause_action = await self.GetDataByTagname("simulator.flyview.action2")
				// console.log("self.params", self.params)
				self.params.begin_action = await self.GetDataByTagname(global.fz_action_tag)
				
			},

			//根据tagname获取数据
			GetDataByTagname(tagname) {
				var data
				return new Promise(function(resolve, reject) {
					uni.request({
						url: global.baseurl + "/iot/opcua/get/",
						method: "GET",
						data: {
							"url": global.baseOPCUA,
							"nodeId": tagname
						},
						success(res) {
							data = res.data[tagname]
							console.log(tagname, ":", data)
							resolve(data)
						}
					})
				})
			},

			//从接口获取曲线数据，初始化数据
			Init(data_type) {
				console.log(global.baseurl)
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
							console.log(data_type+":接口成功获取数据", res.data)
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
			
			
			//建立ws链接
			CreateWs(){
				const self = this
				console.log("建立ws链接")
				var ws = uni.connectSocket({
					url:global.basews+"/api/iot/getdata",
					header:{
						'content-type':'application/json'
					},
					success() {
						console.log("ws建立成功")
					}
				})
				return ws
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