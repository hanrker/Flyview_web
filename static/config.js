const config ={
	BASEPATH:"http://127.0.0.1:8090",
	BASEWSPATH:'ws://127.0.0.1:8090',
	// BASEOPCUA :'opc.tcp://192.168.0.3:49320',
	// BASEOPCUA:'opc.tcp://192.168.150.231:49320', // test
	params :[
		{
			nodeid : "oml.flyview.fz_fanlin1_start",
			animation:[
				"fanlin1.mp4",
			],
			chart_duration:80,
			isChartDynamic: false,
			isChartDispaly:false,
			isChartEnd:false,
			target_wait: 80,
		},
		{
			nodeid : "oml.flyview.fz_fanlin2_start",
			animation:[
				"fanlin2.mp4",
				
			],
			chart_duration:80,
			isChartDynamic: true,
			isChartDispaly:true,
			isChartEnd:false,
			target_wait: 0,
		},
		{
			nodeid : "oml.flyview.fz_fanlin3_end",
			animation:[
				"fanlin2.mp4",
				
			],
			chart_duration:80,
			isChartDynamic: true,
			isChartDispaly:false,
			isChartEnd:true,
			target_wait: 80,
		},
		{
			nodeid : "oml.flyview.fz_fangkong1_start",
			animation:[
				"fangkong1.mp4",
			],
			chart_duration:80,
			isChartDynamic: false,
			isChartDispaly:false,
			isChartEnd:false,
			target_wait: 80,
		},
		{
			nodeid : "oml.flyview.fz_fangkong2_start",
			animation:[
				"fangkong2.mp4",
			],
			chart_duration:60,
			isChartDynamic: true,
			isChartDispaly:true,
			isChartEnd:false,
			target_wait: 0,
		},
		{
			nodeid : "oml.flyview.fz_fangkong3_end",
			animation:[
				"fangkong2.mp4",
			],
			chart_duration:80,
			isChartDynamic: false,
			isChartDispaly:false,
			isChartEnd:true,
			target_wait: 80,
		},
		{
			nodeid : "sim.flyview.test1",
			animation:[
				"a.mp4",
			],
			chart_duration:80,
			isChartDispaly:false,
			isChartDynamic: false,
			isChartEnd:false,
			target_wait: 80,
		},
		
		{
			nodeid : "sim.flyview.test2",
			animation:[
				"fanlin2.mp4",
				
			],
			chart_duration:60,
			isChartDynamic: true,
			isChartDispaly:true,
			isChartEnd:false,
			target_wait: 97,
		},
		{
			nodeid : "sim.flyview.test3",
			animation:[
				"front-backup.mp4",
				
			],
			chart_duration:80,
			isChartDynamic: false,
			isChartDispaly:false,
			isChartEnd:true,
			target_wait: 80,
		},

	],
}

