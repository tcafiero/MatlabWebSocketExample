function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["untitled:151"] = "untitled.c:34&untitled.h:33";
	/* <Root>/Out1 */
	this.urlHashMap["untitled:150"] = "untitled.c:33&untitled.h:38";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "untitled"};
	this.sidHashMap["untitled"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "untitled:151"};
	this.sidHashMap["untitled:151"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "untitled:150"};
	this.sidHashMap["untitled:150"] = {rtwname: "<Root>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
