function CodeMetrics() {
	 this.metricsArray = {};
	 this.metricsArray.var = new Array();
	 this.metricsArray.fcn = new Array();
	 this.metricsArray.var["rtDW"] = {file: "/Volumes/VSSD/workspace/Noself/WebSocketsExample/MatlabWebSocket-master/matlab/untitled1_ert_rtw/untitled1.c",
	size: 2};
	 this.metricsArray.var["rtM_"] = {file: "/Volumes/VSSD/workspace/Noself/WebSocketsExample/MatlabWebSocket-master/matlab/untitled1_ert_rtw/untitled1.c",
	size: 193};
	 this.metricsArray.fcn["sin"] = {file: "/Applications/MATLAB_R2016b.app/sys/lcc/include/math.h",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["untitled1_initialize"] = {file: "/Volumes/VSSD/workspace/Noself/WebSocketsExample/MatlabWebSocket-master/matlab/untitled1_ert_rtw/untitled1.c",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["untitled1_step"] = {file: "/Volumes/VSSD/workspace/Noself/WebSocketsExample/MatlabWebSocket-master/matlab/untitled1_ert_rtw/untitled1.c",
	stack: 8,
	stackTotal: 8};
	 this.metricsArray.fcn["untitled1_terminate"] = {file: "/Volumes/VSSD/workspace/Noself/WebSocketsExample/MatlabWebSocket-master/matlab/untitled1_ert_rtw/untitled1.c",
	stack: 0,
	stackTotal: 0};
	 this.getMetrics = function(token) { 
		 var data;
		 data = this.metricsArray.var[token];
		 if (!data) {
			 data = this.metricsArray.fcn[token];
			 if (data) data.type = "fcn";
		 } else { 
			 data.type = "var";
		 }
	 return data;}
}
	 CodeMetrics.instance = new CodeMetrics();
