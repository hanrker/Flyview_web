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
					<!-- <text style="margin-left: 20upx; font-size:12px;">仿真时间：{{time_test}}</text> -->
					<!-- <view class="">
						<select :disabled="taskdisable" name="chart_type" id="chart_type" @change='UpdateChart'>
							<option value="process">飞行器与目标对飞过程</option>
							<option value="zxddxh">飞行器纵向（X-H）平面飞行弹道</option>
							<option value="cxddxy">飞行器侧向（X-Y）平面飞行弹道</option>
							<option value="cxddxy">飞行器速度（V-T）曲线</option>
							<option value="qj_gama_t">飞行器弹道倾角（Gama-T）曲线</option>
							<option value="dj_gama_t">飞行器弹道倾角（Gama-T）曲线</option>
							<option value="pj_psi_t">飞行器弹道偏角（Psi-T）曲线</option>
						</select>
					</view> -->
					

					<br>


				</view>
				<view class="chart_content">
					<view v-for="item in dandaocharts"  class="cell_list_border">
						<text style="background: green;width: 5px;height: 5px;display: inline-block;margin-right: 10px;margin-left: 5px;">  </text>
						<text style="font-size: 12px;">{{item.name}}</text>
						<view :id="item.id"  >
							
						</view>
					</view>
					
				</view>
				
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
				<video id="fangzhen" muted :src="video_src" :controls="false" :loop="false" :show-play-btn="false"
					:show-center-play-btn="false" @ended="video_end" @timeupdate="PlayVideo"></video>
					
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
				time_test:0,
				task_type: "",
				task_options: [{
						name: "反临飞行任务",
						id: "FanLin"
					},
					{
						name: "防空飞行任务",
						id: "FangKong"
					},

				],
				
				dandaocharts:[
					{
						id:"chart_process",
						dom:"",
						name:"飞行器与目标对飞过程",
						linetype:"line3D",
						objchart:null,
						nums:[7,8,9],
						data:{
							fanlin_missile:[],
							fanlin_target:[],
							fangkong_missile:[],
							fangkong_target:[],
						},
						axisname:[
							"纵向距离km",
							"侧向距离km",
							"地\n面\n高\n度\nkm",
						]
					},
					{
						id:"chart_zxddxh",
						name:"飞行器纵向（X-H）平面飞行弹道",
						dom:"",
						linetype:"line",
						nums:[7,8],
						objchart:null,
						legend:{
							data:["飞行","目标"],
							padding:2,
						},
						
						data:{
							fanlin_missile:[],
							fanlin_target:[],
							fangkong_missile:[],
							fangkong_target:[],
						},
						axisname:[
							"纵向距离km",
							"地面高度km",
						],
					},
					{
						id:"chart_cxddxy",
						name:"飞行器侧向（X-Y）平面飞行弹道",
						dom:"",
						linetype:"line",
						nums:[7,9],
						objchart:null,
						data:{
							fanlin_missile:[],
							fanlin_target:[],
							fangkong_missile:[],
							fangkong_target:[],
						},
						axisname:[
							"侧向距离km",
							"地面高度km",
						],
					},
					{
						id:"chart_vt",
						name:"飞行器速度（V-T）曲线",
						dom:"",
						linetype:"line",
						nums:[0,4],
						objchart:null,
						data:{
							fanlin_missile:[],
							fanlin_target:[],
							fangkong_missile:[],
							fangkong_target:[],
						},
						axisname:[
							"时间s",
							"飞行速度km/s",
							
						],
					},
					{
						id:"chart_qj_gama_t",
						name:"飞行器弹道倾角（Gama-T）曲线",
						dom:"",
						linetype:"line",
						nums:[0,5],
						objchart:null,
						data:{
							fanlin_missile:[],
							fanlin_target:[],
							fangkong_missile:[],
							fangkong_target:[],
						},
					 axisname:[
						 "时间s",
							"弹道倾角 / 度",
							
						],

					},
					{
						id:"chart_pj_psi_t",
						name:"飞行器弹道偏角（Psi-T）曲线",
						dom:"",
						linetype:"line",
						nums:[0,6],
						objchart:null,
						data:{
							fanlin_missile:[],
							fanlin_target:[],
							fangkong_missile:[],
							fangkong_target:[],
						},
						axisname:[
							"时间s",
							"弹道偏角 / 度",
							
						],
					},
				],
				
				// 待获取的nodeids
				nodeIds:[],
				fzanimation:[],
				fzanimation_current_name:"",
				chart_duration:[],
				
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
				nodevalue:"",

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
			nodevalue(newName, oldName){
				const self = this
				self.StartFangZhen(newName,oldName)
			},
			fz_action(newName, oldName) {
				const self = this
				
				for (let element in newName) {
					// 根据变化的值决定是否仿真
					self.StartFangZhen(newName[element],oldName[element])
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

		 onReady() {
			
			const self = this;
			//初始化图表
			self.chart_DanDao_init()
			// var now = new Date()
			// self.time_test = now.getSeconds()
			// setInterval(()=>{
			// 	self.time_test = self.time_test +1
			// },1000)
			
			//获取配置文件参数参数
			self.GetConfig()
			
			
			self.GetDanDaoAllData()
		
					
			//建立ws连接，获取node值变化值
			self.WSGetNodeValues("/api/update/","fzaction")
		
			
			// 创建仿真视频
			self.videoContext = uni.createVideoContext("fangzhen", self)
			
	
			// setInterval(() => {
			// 	self.UpdataParams()
			// }, 1000)


		},
		onShow() {
			// const self = this;

		},

		methods: {

			//获取所有弹道数据 
		    async	GetDanDaoAllData(){
				const self = this;
				console.log("开始初始化数据")
				uni.showLoading({
					title:"加载数据"
				})
				//初始化曲线数据
				self.FanLinTargetALL = await self.RequestDatData("FanLinTarget")
				self.FanLinMissileALL = await self.RequestDatData("FanLinMissile")
				self.FangKongTargetALL = await self.RequestDatData("FangKongTarget")
				self.FangKongMissileALL = await self.RequestDatData("FangKongMissile")
				uni.hideLoading()
				
				
				console.log("FangKongMissileALL",self.FangKongMissileALL[0]	)
				
				// // 展示曲线，默认为process类型	
				// self.UpdateChart(false,60,false,false,0)
				console.log("更新各曲线数据")	
				// 根据弹道数据，获取各曲线数据
				uni.showLoading({
					title:"初始化曲线数据"
				})
				// console.log("self.FangKongTargetALL",self.FangKongTargetALL)
				self.UpdateChartData_all(self.FanLinMissileALL,self.FanLinTargetALL,self.FangKongMissileALL,self.FangKongTargetALL)
				
				// self.task_type = "fangkong"
				// self.Update_chart(true,true,60)
				
				uni.hideLoading()
				console.log("数据初始化完成")	
			},
			
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
				// self.UpdateChart()
				
				
			},
			ValueChange(newName, oldName) {
				const self = this
				// console.log("newName:", newName, ";oldName:", oldName)
				if (newName == "true" && newName != oldName) {
					return ture
				}
				return false
			},
			
			//曲线图框架初始化
			chart_DanDao_init(isEnd = true){
				const self = this
				self.ClearChart()
				self.dandaocharts.forEach((myChart,i,array)=>{
					if (isEnd){
						// value.objchart= echarts.init(document.getElementById(value.id))
						myChart.dom = document.getElementById(myChart.id)
						myChart.objchart = echarts.init(myChart.dom)
						// console.log("myChart.objchart",myChart.objchart)
						
						
								
						myChart.objchart.resize({
							width: myChart.dom.offsetWidth * 1,
							height: myChart.dom.offsetHeight * 1,
						});
						window.addEventListener('resize', function() {
							myChart.objchart.resize();
						});
					}
					// console.log(myChart.id)
					
					var option
					option = self.update_chart_option([0],[0],myChart.linetype,myChart.axisname)
					
					// console.log("mychar.onj",myChart,option,myChart.linetype)
					option &myChart.objchart.setOption(option)
				})

			},
			
			// 根据dat文件总数据，初始化各曲线总数据
			UpdateChartData_all(FanLinMissileAll,FanLinTargetALL,FangKongMissileAll,FangKongTargetAll){
				console.log("开始更新曲线总数据")
				const self = this
				// self.FanLinMissileAll = FanLinMissileAll
				// console.log("self.FanLinMissileAll",self.FanLinMissileAll,self.FanLinTargetALL)
				
				// console.log("FanLinTargetALL",FanLinTargetALL)
				self.dandaocharts.forEach((v,i)=>{
					// console.log("待截取",v.id,i)
					v.data.fanlin_missile = self.SplitArray(FanLinMissileAll, v.nums)
					v.data.fanlin_target=self.SplitArray(FanLinTargetALL, v.nums)
					v.data.fangkong_missile=self.SplitArray(FangKongMissileAll, v.nums)
					// console.log("v.data.fangkong_missile",v.data.fangkong_missile)
					v.data.fangkong_target=self.SplitArray(FangKongTargetAll, v.nums)
					
				})
				console.log("曲线总数据更新完成")
			},
			//动态更新显示曲线的数据
			Update_chart(isChartDisplay = false,isDynamic = false, char_duration = 10,target_wait=0){
				//更新曲线
				const self = this
				console.log("开始更新曲线，显示:",isChartDisplay,"动态：",isDynamic,"持续时间：",char_duration,"目标等待：",target_wait)
				// console.log("self.FanLinMissileAll",self.FanLinMissileAll)
				
				//不显示 ，直接返回
				if (!isChartDisplay){
					if(self.chart_interval!=undefined){
						clearInterval(self.chart_interval)
					}
					
					self.chart_DanDao_init(false)
					console.log("不显示曲线")
					return
				}
				
				//若展示，则刷新图表
				self.ClearChart()
				var options=[]
				self.dandaocharts.forEach((element,key)=>{
					options[key] = self.update_chart_option([],[],element.linetype,element.axisname)
				})
				// console.log(self.dandaocharts[0].data.fangkong_missile)
				//非动态时返回
				if(!isDynamic){
					self.dandaocharts.forEach((element,key)=>{
						if(self.task_type== "fanlin"){
							options[key].series[0].data = element.data.fanlin_missile
							options[key].series[1].data = element.data.fanlin_target
							
						}else if(self.task_type== "fangkong"){
							// console.log("element.data.fangkong_target",element.data.fangkong_target)
							options[key].series[0].data = element.data.fangkong_missile
							options[key].series[1].data = element.data.fangkong_target
							
							}
						// 根据数据更新曲线
						if (options[key] && typeof options[key] === "object"  ) {
							options[key] && element.objchart.setOption(options[key]);
						}
							
					})
					console.log("options",options)
					return
				}
				self.time_test = 0
				
				var maxlen
				if(self.task_type== "fanlin"){
					maxlen = self.dandaocharts[0].data.fanlin_missile.length
				}else if(self.task_type== "fangkong"){
					// console.log("ss",self.dandaocharts[0].data.fangkong_missile)
					maxlen = self.dandaocharts[0].data.fangkong_missile.length
				}
				
				//根据曲线持续时间，计算曲线更新速度，每100ms速度
				var chart_v =  Math.trunc(maxlen/(1*char_duration)) 
				console.log("播放速度：",maxlen,chart_v,"持续：",char_duration,"目标等待：",target_wait)
				//曲线动态展示
				var index = 0;
				self.time_test =0
					clearInterval(self.chart_interval)
				// 每100ms 处理数据
				self.chart_interval = setInterval(() => {
				
					// 计算本次取值范围
					var start_num = index
					var end_num = start_num + chart_v -1
					
					
					//开始计时，动态更新
					self.dandaocharts.forEach((v,key,array)=>{
						
						// 每1s读取若干行数据
						var i
						for(i=start_num;i<=end_num && i < maxlen;i++){
							if (self.task_type == "fanlin"){
								options[key].series[0].data.push(v.data.fanlin_missile[i])
								// console.log("目标",i-target_wait*10,i)
								if (i >= target_wait*10){
									// console.log("data_series_all[0].data[i-target_wait*10]",data_series_all[0].data[i-target_wait*10])
									options[key].series[1].data.push(v.data.fanlin_target[i-target_wait*10])
								}
							}else if (self.task_type == "fangkong"){
								options[key].series[0].data.push(v.data.fangkong_missile[i])
								// console.log("目标",i-target_wait*10,i)
								if (i >= target_wait*10){
									// console.log("data_series_all[0].data[i-target_wait*10]",data_series_all[0].data[i-target_wait*10])
									options[key].series[1].data.push(v.data.fangkong_target[i-target_wait*10])
								}
							}
							
							
						}
						
						// 根据数据更新曲线
						if (options[key] && typeof options[key] === "object"  ) {
							// v.objchart.clear()
							options[key] && v.objchart.setOption(options[key],true);
						}
					})
					// console.log("index:",index)
				// 判断是否更新完毕
				index = end_num +1;
				if (end_num >=maxlen) {
					// self.ClearChart()
					clearInterval(self.chart_interval)
				}else{
					self.time_test = self.time_test +1
				}
				
			}, 1000);
				
				console.log("动态更新完毕")
			},
			
			//	更新echaropion
			update_chart_option(data_missile,data_target,linetype,axisname=['x','y','z']){
				// console.log("data_missle",data_target)
				
				var option
				if (linetype == "line"){
					option = {
						
						tooltip:{
							trigger:"axis",
							axisPointer:{
								animation :false
							}
						},
						legend: {
							// data: legend,
							data:["飞行","目标"]
						},
						xAxis: {
							type: 'value',
							name:axisname[0],
							nameLocation:'middle',
							nameTextStyle:{
								fontSize:12,
								margin:1222,
							},
							nameGap:32,
							// minInterval:2000000,
							// axislabel:{
							// 	normal:{
							// 		show:false,
							// 		rotate: 45,
							// 		formatter: (value)=>{
							// 			return "s"
							// 		},
							// 	}
								
							// },
						},
						yAxis: {
							type: 'value',
							name:axisname[1],
							nameLocation:'end',
							nameTextStyle:{
								fontSize:12
							},
							
							// axislabel:{
							// 	rotate: 45,
							// 	formatter: function (value){
							// 		return "s"
							// 	}
							// },
						},
						grid:{
							show:"true",
							left:60,
							right :15
						},
						// animationDuration: 20000,
						animation:false,
						series: [
							{
								name: "飞行",
								type: linetype,
								data: data_missile,
								 symbolSize:1,
								// data:
								// [
								//         [1183189.158000,56215.498976],
								//         [1183712.154000,56198.272532],
								//         [1184228.772000,56181.005207], 
								//         [1184751.768000, 56163.697012],
								//          [185274.764000, 	56146.347958],
								//          [1185797.76000, 56128.958057]
								//         ],
								
							},
							{
								name: "目标",
								type: linetype,
								data: data_target,
								 symbolSize:1,
								
							},
						],
					
					
					};
					
				}
				if (linetype == "line3D"){
					option = {
						legend: {
							// data: legend,
							data:["飞行","目标"],
						
						},
						xAxis3D: {
							type: 'value',
							name:axisname[0],
							nameLocation:"end",
							nameTextStyle:{
								fontSize:12
							},
							nameGap:55,
							nameRotate:45,
						},
						yAxis3D: {
							type: 'value',
							name:axisname[1],
							nameLocation:'end',
							nameTextStyle:{
								fontSize:12
							},
							nameGap:55,
							// minInterval:50000
						},
						zAxis3D: {
							type: 'value',
							name:axisname[2],
							nameLocation:'end',
							nameTextStyle:{
								fontSize:12
							},
							nameGap:45,
							// minInterval:50000
						},
						grid3D: {
							viewControl: {
								projection: 'orthographic',
								orthographicSize: 200,
								distance:1500,
									  alpha:20,
									  minAlpha :10,
									  maxAlpha:30,
									  beta:320
				
							},
							// left:20,
							// right:30,
						
						},
						// animationDuration: 2000,
						series: [
							{
								name: "飞行",
								type: linetype,
								data: data_missile,
								lineStyle: {
									width: 4
								}
							},
							{
								name: "目标",
								type: linetype,
								data:  data_target,
								lineStyle: {
									width: 4
								}
							},
						],
					
					
					};
					
				}
				return option
			},
			//初始化chart
			ClearChart(){
				const self = this
				self.dandaocharts.forEach((v,i,ar)=>{
					// console.log("v.objchart",v.objchart)
					if (v.objchart != null){
						v.objchart.clear()
					}
				})
				// clearInterval(self.chart_interval)
			},

			
			// 更新曲线数据
			UpdateChart(isChartEnd = false,chart_v= 80,isChartDispaly=false,isDynamic=false,target_wait) {
				console.log("开始更新曲线数据")
				const self = this
				// var chart_type = document.getElementById("chart_type")
				// self.fly_chart_type = chart_type.value
				
				var data_series
				
				var nums = [0,1,2,3,4,5,6,7,8,9]
				// linetype = "line"
				
				
				
				// console.log("self.task_type:", self.task_type)
				if (self.task_type == "fanlin") {
					// console.log("fanlinsss")
					self.UpdateTaskData("FanLinTarget", self.FanLinTargetALL, nums)
					self.UpdateTaskData("FanLinMissile", self.FanLinMissileALL, nums)
					data_series = [{
						name: "反临目标",
						data: self.FanLinTargetALL,

					}, {
						name: "反临飞行",
						data: self.FanLinMissileALL,
					}]
				}else if(self.task_type == "fangkong") {
					console.log("fangllongsss")
					// self.UpdateTaskData("FangKongTarget", self.FangKongTargetALL, nums)
					// self.UpdateTaskData("FangKongMissile", self.FangKongMissileALL, nums)
					data_series = [{
							name: "防空目标",
							data: self.FangKongTargetAll,
						},
						{
							name: "防空飞行",
							data: self.FangKongMissileAll,
						},
					]
				}
				
				
				// //仿真到拆件时，曲线暂停
				// if (!isChartEnd && isChartDispaly){
				// 	isDynamic =true 
				// }
			
				// console.log("待绘制曲线类型：",linetype,"是否动态：",isDynamic,isChartDispaly,isChartEnd,data_series)
				self.dandaocharts.forEach((v,i,ar)=>{
					var chart_dom = document.getElementById(v.id)
					var linetype = v.linetype
					// self.UpdateChartData(data_series,isDynamic,chart_v,isChartDispaly,target_wait)
					
				})
				
				console.log("更新曲线完成")
			},
			
			


			//根据数据更新曲线
			UpdateTaskData( data_type,data, nums) {
				
				const self = this
				console.log("开始截取任务数据")
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
				console.log(data_type + ":任务数据更新完成")

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
				// console.log("截取前:",nums,arraydata[0])
				if (arraydata == undefined) {
					return
				}
				arraydata.forEach(function(item, key, arr) {
					var rows = []
					let x= 0
		
					for (x=0 ;x <nums.length;x++){
						rows[x] = item[nums[x]]
						// console.log("rows:",res[x])
					}
		
		// 			item.forEach((item, key, arr) => {
						
		// 				if (nums != undefined) {
		// 					if (nums.includes(key)) {
		// 						rows.push(item)
		// 					}
		// 				}
		// 			})
					res.push(rows)
				})
				// console.log("截取后:",res[0])
				return res
			},


			//开始仿真
			//1s更新一次
			fangzhen_start(start_time = 0, animation = "init.mp4", ani_v = 1, isConst = true,isChartEnd = false) {
				const self = this
				self.fangzhen_status = 'start'
				// console.log("start_time", start_time)
				self.fz_current_time = start_time
				console.log("播放动画为",animation)
				
				// //当末尾曲线停止时，动画继续
				// if (isChartEnd){
				// 	return
				// }
				//动画不一样时，重新指定
				if (animation != self.video_src ) {
					self.video_src = "/static/video/" + animation
				}
				//指定速率
				if (self.videoContext != undefined){
					self.videoContext.playbackRate(ani_v)
				}
				
				
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
				// self.UpdateChart()
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
			RequestDatData(data_type) {
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
				var timetamp = new Date().getTime()
				var ws = uni.connectSocket({
					url: global.basews + url +"?datatype="+datatype+timetamp ,
				
					header: {
						'content-type': 'application/json'
					},
					success() {
						console.log("ws建立成功")
					}
				})
				uni.onSocketMessage( (res)=> {
				var data = JSON.parse(res.data)
				  console.log('收到服务器内容：' , data.data,typeof(data.data));
				  
				  self.nodevalue = data.data
				  // self.StartFangZhen(data.data)
				});
				return ws
			},
			
			//根据变化的数值，执行仿真
			StartFangZhen(nodeValue,oldvalue){
				const self = this
				
				// console.log("nodeValue:",nodeValue)
				//获取文件中的node id，执行对应的动画和曲线时长
				var nodeid = Object.keys(nodeValue)[0]
				if (nodeValue[nodeid] == "true" && oldvalue!=nodeValue && oldvalue!=undefined ){
					var index = self.nodeIds.indexOf(nodeid)
					// console.log("fzanimation:", index,",",nodeid,nodeid.indexOf("fangkong"))
					var animaion_name = self.fzanimation[index][0]
					var chart_duration = config.params[index].chart_duration
					var isChartDynamic= config.params[index].isChartDynamic
					var isChartDisplay = config.params[index].isChartDispaly
					var isChartEnd = config.params[index].isChartEnd
					
					var target_wait= config.params[index].target_wait
					self.fzanimation_current_name = animaion_name
					
					self.taskdisable = isChartDisplay
					
					//判断任务类型
					
					if (nodeid.indexOf("fanlin")>0){
						self.task_type = "fanlin"
					}else if(nodeid.indexOf("fangkong")>0){
						self.task_type = "fangkong"
					}
					
					// console.log("isChartDynamic", isChartDynamic)
					// console.log("animaion_name", animaion_name)
					// console.log("chart_duration", chart_duration)
					// console.log("nodeValue[nodeid]:",nodeValue[nodeid])
					//执行动画
					
					self.fangzhen_start(0, animaion_name, 1, true)
					self.Update_chart(isChartDisplay,isChartDynamic,chart_duration,target_wait)
					// self.UpdateChart(isChartEnd,chart_duration,isChartDisplay,isChartDynamic,target_wait)
						
				}
				
			}
		},
		onUnload: {
			clearChart (){
				this.ClearChart()
			}
			
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
		width: 100%;
		height: 100%
	}

	.chart {
		/* 		position: absolute;
		left: 5rpx;
		top:10rpx; */
		width: 50%;
		height: 100%;
		background-color: white;
		margin: 10px;
	}

	.animation {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 50%;
		margin: 6rpx;
		/* justify-content: center; */
	}

	#fangzhen {
		width: 100%;
		height: 67%;
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
	.chart_content{
		display: flex;
		justify-content: center;
		
		flex-wrap: wrap;
		height: 100%;
	}
	.cell_list_border{
		outline:0.5px solid #efefef;
		
	}
	.chart_content view{
		width: 50%;
		height: 30%;
		
	}
	.chart_content view view{
		width: 100%;
		height: 100%;
	}
</style>