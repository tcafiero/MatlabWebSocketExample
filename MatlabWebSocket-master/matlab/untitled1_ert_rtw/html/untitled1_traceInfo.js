function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Chart */
	this.urlHashMap["untitled1:1"] = "untitled1.c:24,60,104&untitled1.h:50,51";
	/* <Root>/Scope */
	this.urlHashMap["untitled1:3"] = "msg=rtwMsg_SimulationReducedBlock&block=untitled1:3";
	/* <Root>/Sine Wave */
	this.urlHashMap["untitled1:2"] = "untitled1.c:57";
	/* <S1>:2 */
	this.urlHashMap["untitled1:1:2"] = "untitled1.c:71,77,96";
	/* <S1>:3 */
	this.urlHashMap["untitled1:1:3"] = "untitled1.c:85,89";
	/* <S1>:4 */
	this.urlHashMap["untitled1:1:4"] = "untitled1.c:68";
	/* <S1>:5 */
	this.urlHashMap["untitled1:1:5"] = "untitled1.c:81";
	/* <S1>:6 */
	this.urlHashMap["untitled1:1:6"] = "untitled1.c:93";
	/* <S1>:2:1 */
	this.urlHashMap["untitled1:1:2:1"] = "untitled1.c:73,98";
	/* <S1>:5:1 */
	this.urlHashMap["untitled1:1:5:1"] = "untitled1.c:78,79";
	/* <S1>:3:1 */
	this.urlHashMap["untitled1:1:3:1"] = "untitled1.c:86";
	/* <S1>:6:1 */
	this.urlHashMap["untitled1:1:6:1"] = "untitled1.c:90,91";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "untitled1"};
	this.sidHashMap["untitled1"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "untitled1:1"};
	this.sidHashMap["untitled1:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/Chart"] = {sid: "untitled1:1"};
	this.sidHashMap["untitled1:1"] = {rtwname: "<Root>/Chart"};
	this.rtwnameHashMap["<Root>/Scope"] = {sid: "untitled1:3"};
	this.sidHashMap["untitled1:3"] = {rtwname: "<Root>/Scope"};
	this.rtwnameHashMap["<Root>/Sine Wave"] = {sid: "untitled1:2"};
	this.sidHashMap["untitled1:2"] = {rtwname: "<Root>/Sine Wave"};
	this.rtwnameHashMap["<S1>:2"] = {sid: "untitled1:1:2"};
	this.sidHashMap["untitled1:1:2"] = {rtwname: "<S1>:2"};
	this.rtwnameHashMap["<S1>:3"] = {sid: "untitled1:1:3"};
	this.sidHashMap["untitled1:1:3"] = {rtwname: "<S1>:3"};
	this.rtwnameHashMap["<S1>:4"] = {sid: "untitled1:1:4"};
	this.sidHashMap["untitled1:1:4"] = {rtwname: "<S1>:4"};
	this.rtwnameHashMap["<S1>:5"] = {sid: "untitled1:1:5"};
	this.sidHashMap["untitled1:1:5"] = {rtwname: "<S1>:5"};
	this.rtwnameHashMap["<S1>:6"] = {sid: "untitled1:1:6"};
	this.sidHashMap["untitled1:1:6"] = {rtwname: "<S1>:6"};
	this.rtwnameHashMap["<S1>:2:1"] = {sid: "untitled1:1:2:1"};
	this.sidHashMap["untitled1:1:2:1"] = {rtwname: "<S1>:2:1"};
	this.rtwnameHashMap["<S1>:5:1"] = {sid: "untitled1:1:5:1"};
	this.sidHashMap["untitled1:1:5:1"] = {rtwname: "<S1>:5:1"};
	this.rtwnameHashMap["<S1>:3:1"] = {sid: "untitled1:1:3:1"};
	this.sidHashMap["untitled1:1:3:1"] = {rtwname: "<S1>:3:1"};
	this.rtwnameHashMap["<S1>:6:1"] = {sid: "untitled1:1:6:1"};
	this.sidHashMap["untitled1:1:6:1"] = {rtwname: "<S1>:6:1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
