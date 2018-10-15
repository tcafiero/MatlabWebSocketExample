function CodeMetrics() {
	 this.metricsArray = {};
	 this.metricsArray.var = new Array();
	 this.metricsArray.fcn = new Array();
	 this.metricsArray.var["rtU"] = {file: "/Volumes/VSSD/workspace/Noself/WebSocketsExample/MatlabWebSocket-master/matlab/untitled_ert_rtw/untitled.c",
	size: 4};
	 this.metricsArray.var["rtY"] = {file: "/Volumes/VSSD/workspace/Noself/WebSocketsExample/MatlabWebSocket-master/matlab/untitled_ert_rtw/untitled.c",
	size: 4};
	 this.metricsArray.fcn["untitled_initialize"] = {file: "/Volumes/VSSD/workspace/Noself/WebSocketsExample/MatlabWebSocket-master/matlab/untitled_ert_rtw/untitled.c",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["untitled_step"] = {file: "/Volumes/VSSD/workspace/Noself/WebSocketsExample/MatlabWebSocket-master/matlab/untitled_ert_rtw/untitled.c",
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
