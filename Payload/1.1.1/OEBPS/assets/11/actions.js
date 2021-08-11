pubcoder.projectID = pubcoder.projectID || "9BAFAFFC54C447E991DC838D64F52FA6";
pubcoder.project.id = pubcoder.project.id || "9BAFAFFC54C447E991DC838D64F52FA6";
pubcoder.project.title = pubcoder.project.title || "210721_a arte muda da fuga";
pubcoder.page.id = pubcoder.page.id || 72;
pubcoder.page.title = pubcoder.page.title || "11";
pubcoder.page.number = pubcoder.page.number || 11;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj1797_onTap_activeActionGroupIndex = -1;
var obj1797_onTap_runningActionsCount = 0;
var obj1797_onTap_loopCount = 0;
var obj1800_onTap_activeActionGroupIndex = -1;
var obj1800_onTap_runningActionsCount = 0;
var obj1800_onTap_loopCount = 0;
var obj1803_onTap_activeActionGroupIndex = -1;
var obj1803_onTap_runningActionsCount = 0;
var obj1803_onTap_loopCount = 0;
var obj1806_onTap_activeActionGroupIndex = -1;
var obj1806_onTap_runningActionsCount = 0;
var obj1806_onTap_loopCount = 0;
var obj1818_onTap_activeActionGroupIndex = -1;
var obj1818_onTap_runningActionsCount = 0;
var obj1818_onTap_loopCount = 0;
var obj1815_onTap_activeActionGroupIndex = -1;
var obj1815_onTap_runningActionsCount = 0;
var obj1815_onTap_loopCount = 0;
var obj1812_onTap_activeActionGroupIndex = -1;
var obj1812_onTap_runningActionsCount = 0;
var obj1812_onTap_loopCount = 0;
var obj1809_onTap_activeActionGroupIndex = -1;
var obj1809_onTap_runningActionsCount = 0;
var obj1809_onTap_loopCount = 0;
var obj1839_onTap_activeActionGroupIndex = -1;
var obj1839_onTap_runningActionsCount = 0;
var obj1839_onTap_loopCount = 0;
var obj1836_onTap_activeActionGroupIndex = -1;
var obj1836_onTap_runningActionsCount = 0;
var obj1836_onTap_loopCount = 0;
var obj1833_onTap_activeActionGroupIndex = -1;
var obj1833_onTap_runningActionsCount = 0;
var obj1833_onTap_loopCount = 0;
var obj1890_onTap_activeActionGroupIndex = -1;
var obj1890_onTap_runningActionsCount = 0;
var obj1890_onTap_loopCount = 0;
var obj1887_onTap_activeActionGroupIndex = -1;
var obj1887_onTap_runningActionsCount = 0;
var obj1887_onTap_loopCount = 0;
var obj1884_onTap_activeActionGroupIndex = -1;
var obj1884_onTap_runningActionsCount = 0;
var obj1884_onTap_loopCount = 0;
var obj1881_onTap_activeActionGroupIndex = -1;
var obj1881_onTap_runningActionsCount = 0;
var obj1881_onTap_loopCount = 0;
var obj1869_onTap_activeActionGroupIndex = -1;
var obj1869_onTap_runningActionsCount = 0;
var obj1869_onTap_loopCount = 0;
var obj1866_onTap_activeActionGroupIndex = -1;
var obj1866_onTap_runningActionsCount = 0;
var obj1866_onTap_loopCount = 0;
var obj1863_onTap_activeActionGroupIndex = -1;
var obj1863_onTap_runningActionsCount = 0;
var obj1863_onTap_loopCount = 0;
var obj2088_onTap_activeActionGroupIndex = -1;
var obj2088_onTap_runningActionsCount = 0;
var obj2088_onTap_loopCount = 0;
var obj2085_onTap_activeActionGroupIndex = -1;
var obj2085_onTap_runningActionsCount = 0;
var obj2085_onTap_loopCount = 0;
var obj2082_onTap_activeActionGroupIndex = -1;
var obj2082_onTap_runningActionsCount = 0;
var obj2082_onTap_loopCount = 0;
var obj2079_onTap_activeActionGroupIndex = -1;
var obj2079_onTap_runningActionsCount = 0;
var obj2079_onTap_loopCount = 0;
var obj2076_onTap_activeActionGroupIndex = -1;
var obj2076_onTap_runningActionsCount = 0;
var obj2076_onTap_loopCount = 0;
var obj2073_onTap_activeActionGroupIndex = -1;
var obj2073_onTap_runningActionsCount = 0;
var obj2073_onTap_loopCount = 0;
var obj2070_onTap_activeActionGroupIndex = -1;
var obj2070_onTap_runningActionsCount = 0;
var obj2070_onTap_loopCount = 0;
var obj2067_onTap_activeActionGroupIndex = -1;
var obj2067_onTap_runningActionsCount = 0;
var obj2067_onTap_loopCount = 0;
var obj2064_onTap_activeActionGroupIndex = -1;
var obj2064_onTap_runningActionsCount = 0;
var obj2064_onTap_loopCount = 0;
var obj2061_onTap_activeActionGroupIndex = -1;
var obj2061_onTap_runningActionsCount = 0;
var obj2061_onTap_loopCount = 0;
var obj2058_onTap_activeActionGroupIndex = -1;
var obj2058_onTap_runningActionsCount = 0;
var obj2058_onTap_loopCount = 0;
var obj2097_onTap_activeActionGroupIndex = -1;
var obj2097_onTap_runningActionsCount = 0;
var obj2097_onTap_loopCount = 0;
var obj2094_onTap_activeActionGroupIndex = -1;
var obj2094_onTap_runningActionsCount = 0;
var obj2094_onTap_loopCount = 0;
var obj2091_onTap_activeActionGroupIndex = -1;
var obj2091_onTap_runningActionsCount = 0;
var obj2091_onTap_loopCount = 0;
var obj2115_onTap_activeActionGroupIndex = -1;
var obj2115_onTap_runningActionsCount = 0;
var obj2115_onTap_loopCount = 0;
var obj2112_onTap_activeActionGroupIndex = -1;
var obj2112_onTap_runningActionsCount = 0;
var obj2112_onTap_loopCount = 0;
var obj2109_onTap_activeActionGroupIndex = -1;
var obj2109_onTap_runningActionsCount = 0;
var obj2109_onTap_loopCount = 0;
var obj2106_onTap_activeActionGroupIndex = -1;
var obj2106_onTap_runningActionsCount = 0;
var obj2106_onTap_loopCount = 0;
var obj2103_onTap_activeActionGroupIndex = -1;
var obj2103_onTap_runningActionsCount = 0;
var obj2103_onTap_loopCount = 0;
var obj2100_onTap_activeActionGroupIndex = -1;
var obj2100_onTap_runningActionsCount = 0;
var obj2100_onTap_loopCount = 0;
var obj2121_onTap_activeActionGroupIndex = -1;
var obj2121_onTap_runningActionsCount = 0;
var obj2121_onTap_loopCount = 0;
var obj2151_onTap_activeActionGroupIndex = -1;
var obj2151_onTap_runningActionsCount = 0;
var obj2151_onTap_loopCount = 0;
var obj2145_onTap_activeActionGroupIndex = -1;
var obj2145_onTap_runningActionsCount = 0;
var obj2145_onTap_loopCount = 0;
var obj2142_onTap_activeActionGroupIndex = -1;
var obj2142_onTap_runningActionsCount = 0;
var obj2142_onTap_loopCount = 0;
var obj2139_onTap_activeActionGroupIndex = -1;
var obj2139_onTap_runningActionsCount = 0;
var obj2139_onTap_loopCount = 0;
var obj2136_onTap_activeActionGroupIndex = -1;
var obj2136_onTap_runningActionsCount = 0;
var obj2136_onTap_loopCount = 0;
var obj2133_onTap_activeActionGroupIndex = -1;
var obj2133_onTap_runningActionsCount = 0;
var obj2133_onTap_loopCount = 0;
var obj2130_onTap_activeActionGroupIndex = -1;
var obj2130_onTap_runningActionsCount = 0;
var obj2130_onTap_loopCount = 0;
var obj2127_onTap_activeActionGroupIndex = -1;
var obj2127_onTap_runningActionsCount = 0;
var obj2127_onTap_loopCount = 0;
var obj2124_onTap_activeActionGroupIndex = -1;
var obj2124_onTap_runningActionsCount = 0;
var obj2124_onTap_loopCount = 0;
var obj2157_onTap_activeActionGroupIndex = -1;
var obj2157_onTap_runningActionsCount = 0;
var obj2157_onTap_loopCount = 0;
var obj2154_onTap_activeActionGroupIndex = -1;
var obj2154_onTap_runningActionsCount = 0;
var obj2154_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
 $(window).on(PubCoder.Events.PageLoad, function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj1797_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1797_onTap_activeActionGroupIndex = -1;
		$("#obj1797").trigger("obj1797_onTap_ended");
		
		return;
	}
	window.obj1797_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1799();
function goToPage_1799() {
	window.obj1797_onTap_runningActionsCount = obj1797_onTap_runningActionsCount + 1;
	$("#anchor84")[0].click();
	window.obj1797_onTap_runningActionsCount = window.obj1797_onTap_runningActionsCount - 1;
if (window.obj1797_onTap_runningActionsCount == 0) {
	obj1797_onTap_actionGroup1();
}
}




















};
obj1797_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1797_onTap_activeActionGroupIndex = -1;
		$("#obj1797").trigger("obj1797_onTap_ended");
		
		return;
	}
	window.obj1797_onTap_activeActionGroupIndex = 1;
	





















};
obj1800_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1800_onTap_activeActionGroupIndex = -1;
		$("#obj1800").trigger("obj1800_onTap_ended");
		
		return;
	}
	window.obj1800_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1802();
function goToPage_1802() {
	window.obj1800_onTap_runningActionsCount = obj1800_onTap_runningActionsCount + 1;
	$("#anchor85")[0].click();
	window.obj1800_onTap_runningActionsCount = window.obj1800_onTap_runningActionsCount - 1;
if (window.obj1800_onTap_runningActionsCount == 0) {
	obj1800_onTap_actionGroup1();
}
}




















};
obj1800_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1800_onTap_activeActionGroupIndex = -1;
		$("#obj1800").trigger("obj1800_onTap_ended");
		
		return;
	}
	window.obj1800_onTap_activeActionGroupIndex = 1;
	





















};
obj1803_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1803_onTap_activeActionGroupIndex = -1;
		$("#obj1803").trigger("obj1803_onTap_ended");
		
		return;
	}
	window.obj1803_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1805();
function goToPage_1805() {
	window.obj1803_onTap_runningActionsCount = obj1803_onTap_runningActionsCount + 1;
	$("#anchor86")[0].click();
	window.obj1803_onTap_runningActionsCount = window.obj1803_onTap_runningActionsCount - 1;
if (window.obj1803_onTap_runningActionsCount == 0) {
	obj1803_onTap_actionGroup1();
}
}




















};
obj1803_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1803_onTap_activeActionGroupIndex = -1;
		$("#obj1803").trigger("obj1803_onTap_ended");
		
		return;
	}
	window.obj1803_onTap_activeActionGroupIndex = 1;
	





















};
obj1806_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1806_onTap_activeActionGroupIndex = -1;
		$("#obj1806").trigger("obj1806_onTap_ended");
		
		return;
	}
	window.obj1806_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1808();
function goToPage_1808() {
	window.obj1806_onTap_runningActionsCount = obj1806_onTap_runningActionsCount + 1;
	$("#anchor87")[0].click();
	window.obj1806_onTap_runningActionsCount = window.obj1806_onTap_runningActionsCount - 1;
if (window.obj1806_onTap_runningActionsCount == 0) {
	obj1806_onTap_actionGroup1();
}
}




















};
obj1806_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1806_onTap_activeActionGroupIndex = -1;
		$("#obj1806").trigger("obj1806_onTap_ended");
		
		return;
	}
	window.obj1806_onTap_activeActionGroupIndex = 1;
	





















};
obj1818_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1818_onTap_activeActionGroupIndex = -1;
		$("#obj1818").trigger("obj1818_onTap_ended");
		
		return;
	}
	window.obj1818_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1820();
function goToPage_1820() {
	window.obj1818_onTap_runningActionsCount = obj1818_onTap_runningActionsCount + 1;
	$("#anchor88")[0].click();
	window.obj1818_onTap_runningActionsCount = window.obj1818_onTap_runningActionsCount - 1;
if (window.obj1818_onTap_runningActionsCount == 0) {
	obj1818_onTap_actionGroup1();
}
}




















};
obj1818_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1818_onTap_activeActionGroupIndex = -1;
		$("#obj1818").trigger("obj1818_onTap_ended");
		
		return;
	}
	window.obj1818_onTap_activeActionGroupIndex = 1;
	





















};
obj1815_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1815_onTap_activeActionGroupIndex = -1;
		$("#obj1815").trigger("obj1815_onTap_ended");
		
		return;
	}
	window.obj1815_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1817();
function goToPage_1817() {
	window.obj1815_onTap_runningActionsCount = obj1815_onTap_runningActionsCount + 1;
	$("#anchor89")[0].click();
	window.obj1815_onTap_runningActionsCount = window.obj1815_onTap_runningActionsCount - 1;
if (window.obj1815_onTap_runningActionsCount == 0) {
	obj1815_onTap_actionGroup1();
}
}




















};
obj1815_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1815_onTap_activeActionGroupIndex = -1;
		$("#obj1815").trigger("obj1815_onTap_ended");
		
		return;
	}
	window.obj1815_onTap_activeActionGroupIndex = 1;
	





















};
obj1812_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1812_onTap_activeActionGroupIndex = -1;
		$("#obj1812").trigger("obj1812_onTap_ended");
		
		return;
	}
	window.obj1812_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1814();
function goToPage_1814() {
	window.obj1812_onTap_runningActionsCount = obj1812_onTap_runningActionsCount + 1;
	$("#anchor90")[0].click();
	window.obj1812_onTap_runningActionsCount = window.obj1812_onTap_runningActionsCount - 1;
if (window.obj1812_onTap_runningActionsCount == 0) {
	obj1812_onTap_actionGroup1();
}
}




















};
obj1812_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1812_onTap_activeActionGroupIndex = -1;
		$("#obj1812").trigger("obj1812_onTap_ended");
		
		return;
	}
	window.obj1812_onTap_activeActionGroupIndex = 1;
	





















};
obj1809_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1809_onTap_activeActionGroupIndex = -1;
		$("#obj1809").trigger("obj1809_onTap_ended");
		
		return;
	}
	window.obj1809_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1811();
function goToPage_1811() {
	window.obj1809_onTap_runningActionsCount = obj1809_onTap_runningActionsCount + 1;
	$("#anchor91")[0].click();
	window.obj1809_onTap_runningActionsCount = window.obj1809_onTap_runningActionsCount - 1;
if (window.obj1809_onTap_runningActionsCount == 0) {
	obj1809_onTap_actionGroup1();
}
}




















};
obj1809_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1809_onTap_activeActionGroupIndex = -1;
		$("#obj1809").trigger("obj1809_onTap_ended");
		
		return;
	}
	window.obj1809_onTap_activeActionGroupIndex = 1;
	





















};
obj1839_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1839_onTap_activeActionGroupIndex = -1;
		$("#obj1839").trigger("obj1839_onTap_ended");
		
		return;
	}
	window.obj1839_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1841();
function goToPage_1841() {
	window.obj1839_onTap_runningActionsCount = obj1839_onTap_runningActionsCount + 1;
	$("#anchor92")[0].click();
	window.obj1839_onTap_runningActionsCount = window.obj1839_onTap_runningActionsCount - 1;
if (window.obj1839_onTap_runningActionsCount == 0) {
	obj1839_onTap_actionGroup1();
}
}




















};
obj1839_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1839_onTap_activeActionGroupIndex = -1;
		$("#obj1839").trigger("obj1839_onTap_ended");
		
		return;
	}
	window.obj1839_onTap_activeActionGroupIndex = 1;
	





















};
obj1836_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1836_onTap_activeActionGroupIndex = -1;
		$("#obj1836").trigger("obj1836_onTap_ended");
		
		return;
	}
	window.obj1836_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1838();
function goToPage_1838() {
	window.obj1836_onTap_runningActionsCount = obj1836_onTap_runningActionsCount + 1;
	$("#anchor93")[0].click();
	window.obj1836_onTap_runningActionsCount = window.obj1836_onTap_runningActionsCount - 1;
if (window.obj1836_onTap_runningActionsCount == 0) {
	obj1836_onTap_actionGroup1();
}
}




















};
obj1836_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1836_onTap_activeActionGroupIndex = -1;
		$("#obj1836").trigger("obj1836_onTap_ended");
		
		return;
	}
	window.obj1836_onTap_activeActionGroupIndex = 1;
	





















};
obj1833_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1833_onTap_activeActionGroupIndex = -1;
		$("#obj1833").trigger("obj1833_onTap_ended");
		
		return;
	}
	window.obj1833_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1835();
function goToPage_1835() {
	window.obj1833_onTap_runningActionsCount = obj1833_onTap_runningActionsCount + 1;
	$("#anchor94")[0].click();
	window.obj1833_onTap_runningActionsCount = window.obj1833_onTap_runningActionsCount - 1;
if (window.obj1833_onTap_runningActionsCount == 0) {
	obj1833_onTap_actionGroup1();
}
}




















};
obj1833_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1833_onTap_activeActionGroupIndex = -1;
		$("#obj1833").trigger("obj1833_onTap_ended");
		
		return;
	}
	window.obj1833_onTap_activeActionGroupIndex = 1;
	





















};
obj1890_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1890_onTap_activeActionGroupIndex = -1;
		$("#obj1890").trigger("obj1890_onTap_ended");
		
		return;
	}
	window.obj1890_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1892();
function goToPage_1892() {
	window.obj1890_onTap_runningActionsCount = obj1890_onTap_runningActionsCount + 1;
	$("#anchor95")[0].click();
	window.obj1890_onTap_runningActionsCount = window.obj1890_onTap_runningActionsCount - 1;
if (window.obj1890_onTap_runningActionsCount == 0) {
	obj1890_onTap_actionGroup1();
}
}




















};
obj1890_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1890_onTap_activeActionGroupIndex = -1;
		$("#obj1890").trigger("obj1890_onTap_ended");
		
		return;
	}
	window.obj1890_onTap_activeActionGroupIndex = 1;
	





















};
obj1887_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1887_onTap_activeActionGroupIndex = -1;
		$("#obj1887").trigger("obj1887_onTap_ended");
		
		return;
	}
	window.obj1887_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1889();
function goToPage_1889() {
	window.obj1887_onTap_runningActionsCount = obj1887_onTap_runningActionsCount + 1;
	$("#anchor96")[0].click();
	window.obj1887_onTap_runningActionsCount = window.obj1887_onTap_runningActionsCount - 1;
if (window.obj1887_onTap_runningActionsCount == 0) {
	obj1887_onTap_actionGroup1();
}
}




















};
obj1887_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1887_onTap_activeActionGroupIndex = -1;
		$("#obj1887").trigger("obj1887_onTap_ended");
		
		return;
	}
	window.obj1887_onTap_activeActionGroupIndex = 1;
	





















};
obj1884_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1884_onTap_activeActionGroupIndex = -1;
		$("#obj1884").trigger("obj1884_onTap_ended");
		
		return;
	}
	window.obj1884_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1886();
function goToPage_1886() {
	window.obj1884_onTap_runningActionsCount = obj1884_onTap_runningActionsCount + 1;
	$("#anchor97")[0].click();
	window.obj1884_onTap_runningActionsCount = window.obj1884_onTap_runningActionsCount - 1;
if (window.obj1884_onTap_runningActionsCount == 0) {
	obj1884_onTap_actionGroup1();
}
}




















};
obj1884_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1884_onTap_activeActionGroupIndex = -1;
		$("#obj1884").trigger("obj1884_onTap_ended");
		
		return;
	}
	window.obj1884_onTap_activeActionGroupIndex = 1;
	





















};
obj1881_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1881_onTap_activeActionGroupIndex = -1;
		$("#obj1881").trigger("obj1881_onTap_ended");
		
		return;
	}
	window.obj1881_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1883();
function goToPage_1883() {
	window.obj1881_onTap_runningActionsCount = obj1881_onTap_runningActionsCount + 1;
	$("#anchor98")[0].click();
	window.obj1881_onTap_runningActionsCount = window.obj1881_onTap_runningActionsCount - 1;
if (window.obj1881_onTap_runningActionsCount == 0) {
	obj1881_onTap_actionGroup1();
}
}




















};
obj1881_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1881_onTap_activeActionGroupIndex = -1;
		$("#obj1881").trigger("obj1881_onTap_ended");
		
		return;
	}
	window.obj1881_onTap_activeActionGroupIndex = 1;
	





















};
obj1869_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1869_onTap_activeActionGroupIndex = -1;
		$("#obj1869").trigger("obj1869_onTap_ended");
		
		return;
	}
	window.obj1869_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1871();
function goToPage_1871() {
	window.obj1869_onTap_runningActionsCount = obj1869_onTap_runningActionsCount + 1;
	$("#anchor99")[0].click();
	window.obj1869_onTap_runningActionsCount = window.obj1869_onTap_runningActionsCount - 1;
if (window.obj1869_onTap_runningActionsCount == 0) {
	obj1869_onTap_actionGroup1();
}
}




















};
obj1869_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1869_onTap_activeActionGroupIndex = -1;
		$("#obj1869").trigger("obj1869_onTap_ended");
		
		return;
	}
	window.obj1869_onTap_activeActionGroupIndex = 1;
	





















};
obj1866_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1866_onTap_activeActionGroupIndex = -1;
		$("#obj1866").trigger("obj1866_onTap_ended");
		
		return;
	}
	window.obj1866_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1868();
function goToPage_1868() {
	window.obj1866_onTap_runningActionsCount = obj1866_onTap_runningActionsCount + 1;
	$("#anchor100")[0].click();
	window.obj1866_onTap_runningActionsCount = window.obj1866_onTap_runningActionsCount - 1;
if (window.obj1866_onTap_runningActionsCount == 0) {
	obj1866_onTap_actionGroup1();
}
}




















};
obj1866_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1866_onTap_activeActionGroupIndex = -1;
		$("#obj1866").trigger("obj1866_onTap_ended");
		
		return;
	}
	window.obj1866_onTap_activeActionGroupIndex = 1;
	





















};
obj1863_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1863_onTap_activeActionGroupIndex = -1;
		$("#obj1863").trigger("obj1863_onTap_ended");
		
		return;
	}
	window.obj1863_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1865();
function goToPage_1865() {
	window.obj1863_onTap_runningActionsCount = obj1863_onTap_runningActionsCount + 1;
	$("#anchor101")[0].click();
	window.obj1863_onTap_runningActionsCount = window.obj1863_onTap_runningActionsCount - 1;
if (window.obj1863_onTap_runningActionsCount == 0) {
	obj1863_onTap_actionGroup1();
}
}




















};
obj1863_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1863_onTap_activeActionGroupIndex = -1;
		$("#obj1863").trigger("obj1863_onTap_ended");
		
		return;
	}
	window.obj1863_onTap_activeActionGroupIndex = 1;
	





















};
obj2088_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2088_onTap_activeActionGroupIndex = -1;
		$("#obj2088").trigger("obj2088_onTap_ended");
		
		return;
	}
	window.obj2088_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2090();
function goToPage_2090() {
	window.obj2088_onTap_runningActionsCount = obj2088_onTap_runningActionsCount + 1;
	$("#anchor102")[0].click();
	window.obj2088_onTap_runningActionsCount = window.obj2088_onTap_runningActionsCount - 1;
if (window.obj2088_onTap_runningActionsCount == 0) {
	obj2088_onTap_actionGroup1();
}
}




















};
obj2088_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2088_onTap_activeActionGroupIndex = -1;
		$("#obj2088").trigger("obj2088_onTap_ended");
		
		return;
	}
	window.obj2088_onTap_activeActionGroupIndex = 1;
	





















};
obj2085_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2085_onTap_activeActionGroupIndex = -1;
		$("#obj2085").trigger("obj2085_onTap_ended");
		
		return;
	}
	window.obj2085_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2087();
function goToPage_2087() {
	window.obj2085_onTap_runningActionsCount = obj2085_onTap_runningActionsCount + 1;
	$("#anchor103")[0].click();
	window.obj2085_onTap_runningActionsCount = window.obj2085_onTap_runningActionsCount - 1;
if (window.obj2085_onTap_runningActionsCount == 0) {
	obj2085_onTap_actionGroup1();
}
}




















};
obj2085_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2085_onTap_activeActionGroupIndex = -1;
		$("#obj2085").trigger("obj2085_onTap_ended");
		
		return;
	}
	window.obj2085_onTap_activeActionGroupIndex = 1;
	





















};
obj2082_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2082_onTap_activeActionGroupIndex = -1;
		$("#obj2082").trigger("obj2082_onTap_ended");
		
		return;
	}
	window.obj2082_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2084();
function goToPage_2084() {
	window.obj2082_onTap_runningActionsCount = obj2082_onTap_runningActionsCount + 1;
	$("#anchor104")[0].click();
	window.obj2082_onTap_runningActionsCount = window.obj2082_onTap_runningActionsCount - 1;
if (window.obj2082_onTap_runningActionsCount == 0) {
	obj2082_onTap_actionGroup1();
}
}




















};
obj2082_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2082_onTap_activeActionGroupIndex = -1;
		$("#obj2082").trigger("obj2082_onTap_ended");
		
		return;
	}
	window.obj2082_onTap_activeActionGroupIndex = 1;
	





















};
obj2079_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2079_onTap_activeActionGroupIndex = -1;
		$("#obj2079").trigger("obj2079_onTap_ended");
		
		return;
	}
	window.obj2079_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2081();
function goToPage_2081() {
	window.obj2079_onTap_runningActionsCount = obj2079_onTap_runningActionsCount + 1;
	$("#anchor105")[0].click();
	window.obj2079_onTap_runningActionsCount = window.obj2079_onTap_runningActionsCount - 1;
if (window.obj2079_onTap_runningActionsCount == 0) {
	obj2079_onTap_actionGroup1();
}
}




















};
obj2079_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2079_onTap_activeActionGroupIndex = -1;
		$("#obj2079").trigger("obj2079_onTap_ended");
		
		return;
	}
	window.obj2079_onTap_activeActionGroupIndex = 1;
	





















};
obj2076_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2076_onTap_activeActionGroupIndex = -1;
		$("#obj2076").trigger("obj2076_onTap_ended");
		
		return;
	}
	window.obj2076_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2078();
function goToPage_2078() {
	window.obj2076_onTap_runningActionsCount = obj2076_onTap_runningActionsCount + 1;
	$("#anchor106")[0].click();
	window.obj2076_onTap_runningActionsCount = window.obj2076_onTap_runningActionsCount - 1;
if (window.obj2076_onTap_runningActionsCount == 0) {
	obj2076_onTap_actionGroup1();
}
}




















};
obj2076_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2076_onTap_activeActionGroupIndex = -1;
		$("#obj2076").trigger("obj2076_onTap_ended");
		
		return;
	}
	window.obj2076_onTap_activeActionGroupIndex = 1;
	





















};
obj2073_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2073_onTap_activeActionGroupIndex = -1;
		$("#obj2073").trigger("obj2073_onTap_ended");
		
		return;
	}
	window.obj2073_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2075();
function goToPage_2075() {
	window.obj2073_onTap_runningActionsCount = obj2073_onTap_runningActionsCount + 1;
	$("#anchor107")[0].click();
	window.obj2073_onTap_runningActionsCount = window.obj2073_onTap_runningActionsCount - 1;
if (window.obj2073_onTap_runningActionsCount == 0) {
	obj2073_onTap_actionGroup1();
}
}




















};
obj2073_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2073_onTap_activeActionGroupIndex = -1;
		$("#obj2073").trigger("obj2073_onTap_ended");
		
		return;
	}
	window.obj2073_onTap_activeActionGroupIndex = 1;
	





















};
obj2070_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2070_onTap_activeActionGroupIndex = -1;
		$("#obj2070").trigger("obj2070_onTap_ended");
		
		return;
	}
	window.obj2070_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2072();
function goToPage_2072() {
	window.obj2070_onTap_runningActionsCount = obj2070_onTap_runningActionsCount + 1;
	$("#anchor108")[0].click();
	window.obj2070_onTap_runningActionsCount = window.obj2070_onTap_runningActionsCount - 1;
if (window.obj2070_onTap_runningActionsCount == 0) {
	obj2070_onTap_actionGroup1();
}
}




















};
obj2070_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2070_onTap_activeActionGroupIndex = -1;
		$("#obj2070").trigger("obj2070_onTap_ended");
		
		return;
	}
	window.obj2070_onTap_activeActionGroupIndex = 1;
	





















};
obj2067_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2067_onTap_activeActionGroupIndex = -1;
		$("#obj2067").trigger("obj2067_onTap_ended");
		
		return;
	}
	window.obj2067_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2069();
function goToPage_2069() {
	window.obj2067_onTap_runningActionsCount = obj2067_onTap_runningActionsCount + 1;
	$("#anchor109")[0].click();
	window.obj2067_onTap_runningActionsCount = window.obj2067_onTap_runningActionsCount - 1;
if (window.obj2067_onTap_runningActionsCount == 0) {
	obj2067_onTap_actionGroup1();
}
}




















};
obj2067_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2067_onTap_activeActionGroupIndex = -1;
		$("#obj2067").trigger("obj2067_onTap_ended");
		
		return;
	}
	window.obj2067_onTap_activeActionGroupIndex = 1;
	





















};
obj2064_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2064_onTap_activeActionGroupIndex = -1;
		$("#obj2064").trigger("obj2064_onTap_ended");
		
		return;
	}
	window.obj2064_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2066();
function goToPage_2066() {
	window.obj2064_onTap_runningActionsCount = obj2064_onTap_runningActionsCount + 1;
	$("#anchor110")[0].click();
	window.obj2064_onTap_runningActionsCount = window.obj2064_onTap_runningActionsCount - 1;
if (window.obj2064_onTap_runningActionsCount == 0) {
	obj2064_onTap_actionGroup1();
}
}




















};
obj2064_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2064_onTap_activeActionGroupIndex = -1;
		$("#obj2064").trigger("obj2064_onTap_ended");
		
		return;
	}
	window.obj2064_onTap_activeActionGroupIndex = 1;
	





















};
obj2061_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2061_onTap_activeActionGroupIndex = -1;
		$("#obj2061").trigger("obj2061_onTap_ended");
		
		return;
	}
	window.obj2061_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2063();
function goToPage_2063() {
	window.obj2061_onTap_runningActionsCount = obj2061_onTap_runningActionsCount + 1;
	$("#anchor111")[0].click();
	window.obj2061_onTap_runningActionsCount = window.obj2061_onTap_runningActionsCount - 1;
if (window.obj2061_onTap_runningActionsCount == 0) {
	obj2061_onTap_actionGroup1();
}
}




















};
obj2061_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2061_onTap_activeActionGroupIndex = -1;
		$("#obj2061").trigger("obj2061_onTap_ended");
		
		return;
	}
	window.obj2061_onTap_activeActionGroupIndex = 1;
	





















};
obj2058_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2058_onTap_activeActionGroupIndex = -1;
		$("#obj2058").trigger("obj2058_onTap_ended");
		
		return;
	}
	window.obj2058_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2060();
function goToPage_2060() {
	window.obj2058_onTap_runningActionsCount = obj2058_onTap_runningActionsCount + 1;
	$("#anchor112")[0].click();
	window.obj2058_onTap_runningActionsCount = window.obj2058_onTap_runningActionsCount - 1;
if (window.obj2058_onTap_runningActionsCount == 0) {
	obj2058_onTap_actionGroup1();
}
}




















};
obj2058_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2058_onTap_activeActionGroupIndex = -1;
		$("#obj2058").trigger("obj2058_onTap_ended");
		
		return;
	}
	window.obj2058_onTap_activeActionGroupIndex = 1;
	





















};
obj2097_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2097_onTap_activeActionGroupIndex = -1;
		$("#obj2097").trigger("obj2097_onTap_ended");
		
		return;
	}
	window.obj2097_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2099();
function goToPage_2099() {
	window.obj2097_onTap_runningActionsCount = obj2097_onTap_runningActionsCount + 1;
	$("#anchor113")[0].click();
	window.obj2097_onTap_runningActionsCount = window.obj2097_onTap_runningActionsCount - 1;
if (window.obj2097_onTap_runningActionsCount == 0) {
	obj2097_onTap_actionGroup1();
}
}




















};
obj2097_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2097_onTap_activeActionGroupIndex = -1;
		$("#obj2097").trigger("obj2097_onTap_ended");
		
		return;
	}
	window.obj2097_onTap_activeActionGroupIndex = 1;
	





















};
obj2094_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2094_onTap_activeActionGroupIndex = -1;
		$("#obj2094").trigger("obj2094_onTap_ended");
		
		return;
	}
	window.obj2094_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2096();
function goToPage_2096() {
	window.obj2094_onTap_runningActionsCount = obj2094_onTap_runningActionsCount + 1;
	$("#anchor114")[0].click();
	window.obj2094_onTap_runningActionsCount = window.obj2094_onTap_runningActionsCount - 1;
if (window.obj2094_onTap_runningActionsCount == 0) {
	obj2094_onTap_actionGroup1();
}
}




















};
obj2094_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2094_onTap_activeActionGroupIndex = -1;
		$("#obj2094").trigger("obj2094_onTap_ended");
		
		return;
	}
	window.obj2094_onTap_activeActionGroupIndex = 1;
	





















};
obj2091_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2091_onTap_activeActionGroupIndex = -1;
		$("#obj2091").trigger("obj2091_onTap_ended");
		
		return;
	}
	window.obj2091_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2093();
function goToPage_2093() {
	window.obj2091_onTap_runningActionsCount = obj2091_onTap_runningActionsCount + 1;
	$("#anchor115")[0].click();
	window.obj2091_onTap_runningActionsCount = window.obj2091_onTap_runningActionsCount - 1;
if (window.obj2091_onTap_runningActionsCount == 0) {
	obj2091_onTap_actionGroup1();
}
}




















};
obj2091_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2091_onTap_activeActionGroupIndex = -1;
		$("#obj2091").trigger("obj2091_onTap_ended");
		
		return;
	}
	window.obj2091_onTap_activeActionGroupIndex = 1;
	





















};
obj2115_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2115_onTap_activeActionGroupIndex = -1;
		$("#obj2115").trigger("obj2115_onTap_ended");
		
		return;
	}
	window.obj2115_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2117();
function goToPage_2117() {
	window.obj2115_onTap_runningActionsCount = obj2115_onTap_runningActionsCount + 1;
	$("#anchor116")[0].click();
	window.obj2115_onTap_runningActionsCount = window.obj2115_onTap_runningActionsCount - 1;
if (window.obj2115_onTap_runningActionsCount == 0) {
	obj2115_onTap_actionGroup1();
}
}




















};
obj2115_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2115_onTap_activeActionGroupIndex = -1;
		$("#obj2115").trigger("obj2115_onTap_ended");
		
		return;
	}
	window.obj2115_onTap_activeActionGroupIndex = 1;
	





















};
obj2112_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2112_onTap_activeActionGroupIndex = -1;
		$("#obj2112").trigger("obj2112_onTap_ended");
		
		return;
	}
	window.obj2112_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2114();
function goToPage_2114() {
	window.obj2112_onTap_runningActionsCount = obj2112_onTap_runningActionsCount + 1;
	$("#anchor117")[0].click();
	window.obj2112_onTap_runningActionsCount = window.obj2112_onTap_runningActionsCount - 1;
if (window.obj2112_onTap_runningActionsCount == 0) {
	obj2112_onTap_actionGroup1();
}
}




















};
obj2112_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2112_onTap_activeActionGroupIndex = -1;
		$("#obj2112").trigger("obj2112_onTap_ended");
		
		return;
	}
	window.obj2112_onTap_activeActionGroupIndex = 1;
	





















};
obj2109_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2109_onTap_activeActionGroupIndex = -1;
		$("#obj2109").trigger("obj2109_onTap_ended");
		
		return;
	}
	window.obj2109_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2111();
function goToPage_2111() {
	window.obj2109_onTap_runningActionsCount = obj2109_onTap_runningActionsCount + 1;
	$("#anchor118")[0].click();
	window.obj2109_onTap_runningActionsCount = window.obj2109_onTap_runningActionsCount - 1;
if (window.obj2109_onTap_runningActionsCount == 0) {
	obj2109_onTap_actionGroup1();
}
}




















};
obj2109_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2109_onTap_activeActionGroupIndex = -1;
		$("#obj2109").trigger("obj2109_onTap_ended");
		
		return;
	}
	window.obj2109_onTap_activeActionGroupIndex = 1;
	





















};
obj2106_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2106_onTap_activeActionGroupIndex = -1;
		$("#obj2106").trigger("obj2106_onTap_ended");
		
		return;
	}
	window.obj2106_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2108();
function goToPage_2108() {
	window.obj2106_onTap_runningActionsCount = obj2106_onTap_runningActionsCount + 1;
	$("#anchor119")[0].click();
	window.obj2106_onTap_runningActionsCount = window.obj2106_onTap_runningActionsCount - 1;
if (window.obj2106_onTap_runningActionsCount == 0) {
	obj2106_onTap_actionGroup1();
}
}




















};
obj2106_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2106_onTap_activeActionGroupIndex = -1;
		$("#obj2106").trigger("obj2106_onTap_ended");
		
		return;
	}
	window.obj2106_onTap_activeActionGroupIndex = 1;
	





















};
obj2103_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2103_onTap_activeActionGroupIndex = -1;
		$("#obj2103").trigger("obj2103_onTap_ended");
		
		return;
	}
	window.obj2103_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2105();
function goToPage_2105() {
	window.obj2103_onTap_runningActionsCount = obj2103_onTap_runningActionsCount + 1;
	$("#anchor120")[0].click();
	window.obj2103_onTap_runningActionsCount = window.obj2103_onTap_runningActionsCount - 1;
if (window.obj2103_onTap_runningActionsCount == 0) {
	obj2103_onTap_actionGroup1();
}
}




















};
obj2103_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2103_onTap_activeActionGroupIndex = -1;
		$("#obj2103").trigger("obj2103_onTap_ended");
		
		return;
	}
	window.obj2103_onTap_activeActionGroupIndex = 1;
	





















};
obj2100_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2100_onTap_activeActionGroupIndex = -1;
		$("#obj2100").trigger("obj2100_onTap_ended");
		
		return;
	}
	window.obj2100_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2102();
function goToPage_2102() {
	window.obj2100_onTap_runningActionsCount = obj2100_onTap_runningActionsCount + 1;
	$("#anchor121")[0].click();
	window.obj2100_onTap_runningActionsCount = window.obj2100_onTap_runningActionsCount - 1;
if (window.obj2100_onTap_runningActionsCount == 0) {
	obj2100_onTap_actionGroup1();
}
}




















};
obj2100_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2100_onTap_activeActionGroupIndex = -1;
		$("#obj2100").trigger("obj2100_onTap_ended");
		
		return;
	}
	window.obj2100_onTap_activeActionGroupIndex = 1;
	





















};
obj2121_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2121_onTap_activeActionGroupIndex = -1;
		$("#obj2121").trigger("obj2121_onTap_ended");
		
		return;
	}
	window.obj2121_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2123();
function goToPage_2123() {
	window.obj2121_onTap_runningActionsCount = obj2121_onTap_runningActionsCount + 1;
	$("#anchor122")[0].click();
	window.obj2121_onTap_runningActionsCount = window.obj2121_onTap_runningActionsCount - 1;
if (window.obj2121_onTap_runningActionsCount == 0) {
	obj2121_onTap_actionGroup1();
}
}




















};
obj2121_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2121_onTap_activeActionGroupIndex = -1;
		$("#obj2121").trigger("obj2121_onTap_ended");
		
		return;
	}
	window.obj2121_onTap_activeActionGroupIndex = 1;
	





















};
obj2151_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2151_onTap_activeActionGroupIndex = -1;
		$("#obj2151").trigger("obj2151_onTap_ended");
		
		return;
	}
	window.obj2151_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2153();
function goToPage_2153() {
	window.obj2151_onTap_runningActionsCount = obj2151_onTap_runningActionsCount + 1;
	$("#anchor123")[0].click();
	window.obj2151_onTap_runningActionsCount = window.obj2151_onTap_runningActionsCount - 1;
if (window.obj2151_onTap_runningActionsCount == 0) {
	obj2151_onTap_actionGroup1();
}
}




















};
obj2151_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2151_onTap_activeActionGroupIndex = -1;
		$("#obj2151").trigger("obj2151_onTap_ended");
		
		return;
	}
	window.obj2151_onTap_activeActionGroupIndex = 1;
	





















};
obj2145_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2145_onTap_activeActionGroupIndex = -1;
		$("#obj2145").trigger("obj2145_onTap_ended");
		
		return;
	}
	window.obj2145_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2147();
function goToPage_2147() {
	window.obj2145_onTap_runningActionsCount = obj2145_onTap_runningActionsCount + 1;
	$("#anchor124")[0].click();
	window.obj2145_onTap_runningActionsCount = window.obj2145_onTap_runningActionsCount - 1;
if (window.obj2145_onTap_runningActionsCount == 0) {
	obj2145_onTap_actionGroup1();
}
}




















};
obj2145_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2145_onTap_activeActionGroupIndex = -1;
		$("#obj2145").trigger("obj2145_onTap_ended");
		
		return;
	}
	window.obj2145_onTap_activeActionGroupIndex = 1;
	





















};
obj2142_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2142_onTap_activeActionGroupIndex = -1;
		$("#obj2142").trigger("obj2142_onTap_ended");
		
		return;
	}
	window.obj2142_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2144();
function goToPage_2144() {
	window.obj2142_onTap_runningActionsCount = obj2142_onTap_runningActionsCount + 1;
	$("#anchor125")[0].click();
	window.obj2142_onTap_runningActionsCount = window.obj2142_onTap_runningActionsCount - 1;
if (window.obj2142_onTap_runningActionsCount == 0) {
	obj2142_onTap_actionGroup1();
}
}




















};
obj2142_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2142_onTap_activeActionGroupIndex = -1;
		$("#obj2142").trigger("obj2142_onTap_ended");
		
		return;
	}
	window.obj2142_onTap_activeActionGroupIndex = 1;
	





















};
obj2139_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2139_onTap_activeActionGroupIndex = -1;
		$("#obj2139").trigger("obj2139_onTap_ended");
		
		return;
	}
	window.obj2139_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2141();
function goToPage_2141() {
	window.obj2139_onTap_runningActionsCount = obj2139_onTap_runningActionsCount + 1;
	$("#anchor126")[0].click();
	window.obj2139_onTap_runningActionsCount = window.obj2139_onTap_runningActionsCount - 1;
if (window.obj2139_onTap_runningActionsCount == 0) {
	obj2139_onTap_actionGroup1();
}
}




















};
obj2139_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2139_onTap_activeActionGroupIndex = -1;
		$("#obj2139").trigger("obj2139_onTap_ended");
		
		return;
	}
	window.obj2139_onTap_activeActionGroupIndex = 1;
	





















};
obj2136_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2136_onTap_activeActionGroupIndex = -1;
		$("#obj2136").trigger("obj2136_onTap_ended");
		
		return;
	}
	window.obj2136_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2138();
function goToPage_2138() {
	window.obj2136_onTap_runningActionsCount = obj2136_onTap_runningActionsCount + 1;
	$("#anchor127")[0].click();
	window.obj2136_onTap_runningActionsCount = window.obj2136_onTap_runningActionsCount - 1;
if (window.obj2136_onTap_runningActionsCount == 0) {
	obj2136_onTap_actionGroup1();
}
}




















};
obj2136_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2136_onTap_activeActionGroupIndex = -1;
		$("#obj2136").trigger("obj2136_onTap_ended");
		
		return;
	}
	window.obj2136_onTap_activeActionGroupIndex = 1;
	





















};
obj2133_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2133_onTap_activeActionGroupIndex = -1;
		$("#obj2133").trigger("obj2133_onTap_ended");
		
		return;
	}
	window.obj2133_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2135();
function goToPage_2135() {
	window.obj2133_onTap_runningActionsCount = obj2133_onTap_runningActionsCount + 1;
	$("#anchor128")[0].click();
	window.obj2133_onTap_runningActionsCount = window.obj2133_onTap_runningActionsCount - 1;
if (window.obj2133_onTap_runningActionsCount == 0) {
	obj2133_onTap_actionGroup1();
}
}




















};
obj2133_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2133_onTap_activeActionGroupIndex = -1;
		$("#obj2133").trigger("obj2133_onTap_ended");
		
		return;
	}
	window.obj2133_onTap_activeActionGroupIndex = 1;
	





















};
obj2130_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2130_onTap_activeActionGroupIndex = -1;
		$("#obj2130").trigger("obj2130_onTap_ended");
		
		return;
	}
	window.obj2130_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2132();
function goToPage_2132() {
	window.obj2130_onTap_runningActionsCount = obj2130_onTap_runningActionsCount + 1;
	$("#anchor129")[0].click();
	window.obj2130_onTap_runningActionsCount = window.obj2130_onTap_runningActionsCount - 1;
if (window.obj2130_onTap_runningActionsCount == 0) {
	obj2130_onTap_actionGroup1();
}
}




















};
obj2130_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2130_onTap_activeActionGroupIndex = -1;
		$("#obj2130").trigger("obj2130_onTap_ended");
		
		return;
	}
	window.obj2130_onTap_activeActionGroupIndex = 1;
	





















};
obj2127_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2127_onTap_activeActionGroupIndex = -1;
		$("#obj2127").trigger("obj2127_onTap_ended");
		
		return;
	}
	window.obj2127_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2129();
function goToPage_2129() {
	window.obj2127_onTap_runningActionsCount = obj2127_onTap_runningActionsCount + 1;
	$("#anchor130")[0].click();
	window.obj2127_onTap_runningActionsCount = window.obj2127_onTap_runningActionsCount - 1;
if (window.obj2127_onTap_runningActionsCount == 0) {
	obj2127_onTap_actionGroup1();
}
}




















};
obj2127_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2127_onTap_activeActionGroupIndex = -1;
		$("#obj2127").trigger("obj2127_onTap_ended");
		
		return;
	}
	window.obj2127_onTap_activeActionGroupIndex = 1;
	





















};
obj2124_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2124_onTap_activeActionGroupIndex = -1;
		$("#obj2124").trigger("obj2124_onTap_ended");
		
		return;
	}
	window.obj2124_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2126();
function goToPage_2126() {
	window.obj2124_onTap_runningActionsCount = obj2124_onTap_runningActionsCount + 1;
	$("#anchor131")[0].click();
	window.obj2124_onTap_runningActionsCount = window.obj2124_onTap_runningActionsCount - 1;
if (window.obj2124_onTap_runningActionsCount == 0) {
	obj2124_onTap_actionGroup1();
}
}




















};
obj2124_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2124_onTap_activeActionGroupIndex = -1;
		$("#obj2124").trigger("obj2124_onTap_ended");
		
		return;
	}
	window.obj2124_onTap_activeActionGroupIndex = 1;
	





















};
obj2157_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2157_onTap_activeActionGroupIndex = -1;
		$("#obj2157").trigger("obj2157_onTap_ended");
		
		return;
	}
	window.obj2157_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2159();
function goToPage_2159() {
	window.obj2157_onTap_runningActionsCount = obj2157_onTap_runningActionsCount + 1;
	$("#anchor132")[0].click();
	window.obj2157_onTap_runningActionsCount = window.obj2157_onTap_runningActionsCount - 1;
if (window.obj2157_onTap_runningActionsCount == 0) {
	obj2157_onTap_actionGroup1();
}
}




















};
obj2157_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2157_onTap_activeActionGroupIndex = -1;
		$("#obj2157").trigger("obj2157_onTap_ended");
		
		return;
	}
	window.obj2157_onTap_activeActionGroupIndex = 1;
	





















};
obj2154_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2154_onTap_activeActionGroupIndex = -1;
		$("#obj2154").trigger("obj2154_onTap_ended");
		
		return;
	}
	window.obj2154_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2156();
function goToPage_2156() {
	window.obj2154_onTap_runningActionsCount = obj2154_onTap_runningActionsCount + 1;
	$("#anchor133")[0].click();
	window.obj2154_onTap_runningActionsCount = window.obj2154_onTap_runningActionsCount - 1;
if (window.obj2154_onTap_runningActionsCount == 0) {
	obj2154_onTap_actionGroup1();
}
}




















};
obj2154_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2154_onTap_activeActionGroupIndex = -1;
		$("#obj2154").trigger("obj2154_onTap_ended");
		
		return;
	}
	window.obj2154_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



























































































































/*
 *
 *   obj1797: Event Touch Down
 *
 */
$("#obj1797").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1797_onTap_activeActionGroupIndex != -1) return;
var obj1797_onTap_runningActionsCount = 0;
var obj1797_onTap_loopCount = 0;
obj1797_onTap_actionGroup0();
});








/*
 *
 *   obj1800: Event Touch Down
 *
 */
$("#obj1800").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1800_onTap_activeActionGroupIndex != -1) return;
var obj1800_onTap_runningActionsCount = 0;
var obj1800_onTap_loopCount = 0;
obj1800_onTap_actionGroup0();
});








/*
 *
 *   obj1803: Event Touch Down
 *
 */
$("#obj1803").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1803_onTap_activeActionGroupIndex != -1) return;
var obj1803_onTap_runningActionsCount = 0;
var obj1803_onTap_loopCount = 0;
obj1803_onTap_actionGroup0();
});








/*
 *
 *   obj1806: Event Touch Down
 *
 */
$("#obj1806").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1806_onTap_activeActionGroupIndex != -1) return;
var obj1806_onTap_runningActionsCount = 0;
var obj1806_onTap_loopCount = 0;
obj1806_onTap_actionGroup0();
});








/*
 *
 *   obj1818: Event Touch Down
 *
 */
$("#obj1818").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1818_onTap_activeActionGroupIndex != -1) return;
var obj1818_onTap_runningActionsCount = 0;
var obj1818_onTap_loopCount = 0;
obj1818_onTap_actionGroup0();
});








/*
 *
 *   obj1815: Event Touch Down
 *
 */
$("#obj1815").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1815_onTap_activeActionGroupIndex != -1) return;
var obj1815_onTap_runningActionsCount = 0;
var obj1815_onTap_loopCount = 0;
obj1815_onTap_actionGroup0();
});








/*
 *
 *   obj1812: Event Touch Down
 *
 */
$("#obj1812").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1812_onTap_activeActionGroupIndex != -1) return;
var obj1812_onTap_runningActionsCount = 0;
var obj1812_onTap_loopCount = 0;
obj1812_onTap_actionGroup0();
});








/*
 *
 *   obj1809: Event Touch Down
 *
 */
$("#obj1809").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1809_onTap_activeActionGroupIndex != -1) return;
var obj1809_onTap_runningActionsCount = 0;
var obj1809_onTap_loopCount = 0;
obj1809_onTap_actionGroup0();
});








/*
 *
 *   obj1839: Event Touch Down
 *
 */
$("#obj1839").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1839_onTap_activeActionGroupIndex != -1) return;
var obj1839_onTap_runningActionsCount = 0;
var obj1839_onTap_loopCount = 0;
obj1839_onTap_actionGroup0();
});








/*
 *
 *   obj1836: Event Touch Down
 *
 */
$("#obj1836").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1836_onTap_activeActionGroupIndex != -1) return;
var obj1836_onTap_runningActionsCount = 0;
var obj1836_onTap_loopCount = 0;
obj1836_onTap_actionGroup0();
});








/*
 *
 *   obj1833: Event Touch Down
 *
 */
$("#obj1833").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1833_onTap_activeActionGroupIndex != -1) return;
var obj1833_onTap_runningActionsCount = 0;
var obj1833_onTap_loopCount = 0;
obj1833_onTap_actionGroup0();
});








/*
 *
 *   obj1890: Event Touch Down
 *
 */
$("#obj1890").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1890_onTap_activeActionGroupIndex != -1) return;
var obj1890_onTap_runningActionsCount = 0;
var obj1890_onTap_loopCount = 0;
obj1890_onTap_actionGroup0();
});








/*
 *
 *   obj1887: Event Touch Down
 *
 */
$("#obj1887").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1887_onTap_activeActionGroupIndex != -1) return;
var obj1887_onTap_runningActionsCount = 0;
var obj1887_onTap_loopCount = 0;
obj1887_onTap_actionGroup0();
});








/*
 *
 *   obj1884: Event Touch Down
 *
 */
$("#obj1884").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1884_onTap_activeActionGroupIndex != -1) return;
var obj1884_onTap_runningActionsCount = 0;
var obj1884_onTap_loopCount = 0;
obj1884_onTap_actionGroup0();
});








/*
 *
 *   obj1881: Event Touch Down
 *
 */
$("#obj1881").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1881_onTap_activeActionGroupIndex != -1) return;
var obj1881_onTap_runningActionsCount = 0;
var obj1881_onTap_loopCount = 0;
obj1881_onTap_actionGroup0();
});








/*
 *
 *   obj1869: Event Touch Down
 *
 */
$("#obj1869").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1869_onTap_activeActionGroupIndex != -1) return;
var obj1869_onTap_runningActionsCount = 0;
var obj1869_onTap_loopCount = 0;
obj1869_onTap_actionGroup0();
});








/*
 *
 *   obj1866: Event Touch Down
 *
 */
$("#obj1866").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1866_onTap_activeActionGroupIndex != -1) return;
var obj1866_onTap_runningActionsCount = 0;
var obj1866_onTap_loopCount = 0;
obj1866_onTap_actionGroup0();
});








/*
 *
 *   obj1863: Event Touch Down
 *
 */
$("#obj1863").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1863_onTap_activeActionGroupIndex != -1) return;
var obj1863_onTap_runningActionsCount = 0;
var obj1863_onTap_loopCount = 0;
obj1863_onTap_actionGroup0();
});








/*
 *
 *   obj2088: Event Touch Down
 *
 */
$("#obj2088").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2088_onTap_activeActionGroupIndex != -1) return;
var obj2088_onTap_runningActionsCount = 0;
var obj2088_onTap_loopCount = 0;
obj2088_onTap_actionGroup0();
});








/*
 *
 *   obj2085: Event Touch Down
 *
 */
$("#obj2085").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2085_onTap_activeActionGroupIndex != -1) return;
var obj2085_onTap_runningActionsCount = 0;
var obj2085_onTap_loopCount = 0;
obj2085_onTap_actionGroup0();
});








/*
 *
 *   obj2082: Event Touch Down
 *
 */
$("#obj2082").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2082_onTap_activeActionGroupIndex != -1) return;
var obj2082_onTap_runningActionsCount = 0;
var obj2082_onTap_loopCount = 0;
obj2082_onTap_actionGroup0();
});








/*
 *
 *   obj2079: Event Touch Down
 *
 */
$("#obj2079").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2079_onTap_activeActionGroupIndex != -1) return;
var obj2079_onTap_runningActionsCount = 0;
var obj2079_onTap_loopCount = 0;
obj2079_onTap_actionGroup0();
});








/*
 *
 *   obj2076: Event Touch Down
 *
 */
$("#obj2076").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2076_onTap_activeActionGroupIndex != -1) return;
var obj2076_onTap_runningActionsCount = 0;
var obj2076_onTap_loopCount = 0;
obj2076_onTap_actionGroup0();
});








/*
 *
 *   obj2073: Event Touch Down
 *
 */
$("#obj2073").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2073_onTap_activeActionGroupIndex != -1) return;
var obj2073_onTap_runningActionsCount = 0;
var obj2073_onTap_loopCount = 0;
obj2073_onTap_actionGroup0();
});








/*
 *
 *   obj2070: Event Touch Down
 *
 */
$("#obj2070").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2070_onTap_activeActionGroupIndex != -1) return;
var obj2070_onTap_runningActionsCount = 0;
var obj2070_onTap_loopCount = 0;
obj2070_onTap_actionGroup0();
});








/*
 *
 *   obj2067: Event Touch Down
 *
 */
$("#obj2067").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2067_onTap_activeActionGroupIndex != -1) return;
var obj2067_onTap_runningActionsCount = 0;
var obj2067_onTap_loopCount = 0;
obj2067_onTap_actionGroup0();
});








/*
 *
 *   obj2064: Event Touch Down
 *
 */
$("#obj2064").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2064_onTap_activeActionGroupIndex != -1) return;
var obj2064_onTap_runningActionsCount = 0;
var obj2064_onTap_loopCount = 0;
obj2064_onTap_actionGroup0();
});








/*
 *
 *   obj2061: Event Touch Down
 *
 */
$("#obj2061").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2061_onTap_activeActionGroupIndex != -1) return;
var obj2061_onTap_runningActionsCount = 0;
var obj2061_onTap_loopCount = 0;
obj2061_onTap_actionGroup0();
});








/*
 *
 *   obj2058: Event Touch Down
 *
 */
$("#obj2058").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2058_onTap_activeActionGroupIndex != -1) return;
var obj2058_onTap_runningActionsCount = 0;
var obj2058_onTap_loopCount = 0;
obj2058_onTap_actionGroup0();
});








/*
 *
 *   obj2097: Event Touch Down
 *
 */
$("#obj2097").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2097_onTap_activeActionGroupIndex != -1) return;
var obj2097_onTap_runningActionsCount = 0;
var obj2097_onTap_loopCount = 0;
obj2097_onTap_actionGroup0();
});








/*
 *
 *   obj2094: Event Touch Down
 *
 */
$("#obj2094").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2094_onTap_activeActionGroupIndex != -1) return;
var obj2094_onTap_runningActionsCount = 0;
var obj2094_onTap_loopCount = 0;
obj2094_onTap_actionGroup0();
});








/*
 *
 *   obj2091: Event Touch Down
 *
 */
$("#obj2091").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2091_onTap_activeActionGroupIndex != -1) return;
var obj2091_onTap_runningActionsCount = 0;
var obj2091_onTap_loopCount = 0;
obj2091_onTap_actionGroup0();
});








/*
 *
 *   obj2115: Event Touch Down
 *
 */
$("#obj2115").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2115_onTap_activeActionGroupIndex != -1) return;
var obj2115_onTap_runningActionsCount = 0;
var obj2115_onTap_loopCount = 0;
obj2115_onTap_actionGroup0();
});








/*
 *
 *   obj2112: Event Touch Down
 *
 */
$("#obj2112").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2112_onTap_activeActionGroupIndex != -1) return;
var obj2112_onTap_runningActionsCount = 0;
var obj2112_onTap_loopCount = 0;
obj2112_onTap_actionGroup0();
});








/*
 *
 *   obj2109: Event Touch Down
 *
 */
$("#obj2109").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2109_onTap_activeActionGroupIndex != -1) return;
var obj2109_onTap_runningActionsCount = 0;
var obj2109_onTap_loopCount = 0;
obj2109_onTap_actionGroup0();
});








/*
 *
 *   obj2106: Event Touch Down
 *
 */
$("#obj2106").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2106_onTap_activeActionGroupIndex != -1) return;
var obj2106_onTap_runningActionsCount = 0;
var obj2106_onTap_loopCount = 0;
obj2106_onTap_actionGroup0();
});








/*
 *
 *   obj2103: Event Touch Down
 *
 */
$("#obj2103").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2103_onTap_activeActionGroupIndex != -1) return;
var obj2103_onTap_runningActionsCount = 0;
var obj2103_onTap_loopCount = 0;
obj2103_onTap_actionGroup0();
});








/*
 *
 *   obj2100: Event Touch Down
 *
 */
$("#obj2100").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2100_onTap_activeActionGroupIndex != -1) return;
var obj2100_onTap_runningActionsCount = 0;
var obj2100_onTap_loopCount = 0;
obj2100_onTap_actionGroup0();
});








/*
 *
 *   obj2121: Event Touch Down
 *
 */
$("#obj2121").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2121_onTap_activeActionGroupIndex != -1) return;
var obj2121_onTap_runningActionsCount = 0;
var obj2121_onTap_loopCount = 0;
obj2121_onTap_actionGroup0();
});








/*
 *
 *   obj2151: Event Touch Down
 *
 */
$("#obj2151").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2151_onTap_activeActionGroupIndex != -1) return;
var obj2151_onTap_runningActionsCount = 0;
var obj2151_onTap_loopCount = 0;
obj2151_onTap_actionGroup0();
});








/*
 *
 *   obj2145: Event Touch Down
 *
 */
$("#obj2145").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2145_onTap_activeActionGroupIndex != -1) return;
var obj2145_onTap_runningActionsCount = 0;
var obj2145_onTap_loopCount = 0;
obj2145_onTap_actionGroup0();
});








/*
 *
 *   obj2142: Event Touch Down
 *
 */
$("#obj2142").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2142_onTap_activeActionGroupIndex != -1) return;
var obj2142_onTap_runningActionsCount = 0;
var obj2142_onTap_loopCount = 0;
obj2142_onTap_actionGroup0();
});








/*
 *
 *   obj2139: Event Touch Down
 *
 */
$("#obj2139").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2139_onTap_activeActionGroupIndex != -1) return;
var obj2139_onTap_runningActionsCount = 0;
var obj2139_onTap_loopCount = 0;
obj2139_onTap_actionGroup0();
});








/*
 *
 *   obj2136: Event Touch Down
 *
 */
$("#obj2136").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2136_onTap_activeActionGroupIndex != -1) return;
var obj2136_onTap_runningActionsCount = 0;
var obj2136_onTap_loopCount = 0;
obj2136_onTap_actionGroup0();
});








/*
 *
 *   obj2133: Event Touch Down
 *
 */
$("#obj2133").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2133_onTap_activeActionGroupIndex != -1) return;
var obj2133_onTap_runningActionsCount = 0;
var obj2133_onTap_loopCount = 0;
obj2133_onTap_actionGroup0();
});








/*
 *
 *   obj2130: Event Touch Down
 *
 */
$("#obj2130").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2130_onTap_activeActionGroupIndex != -1) return;
var obj2130_onTap_runningActionsCount = 0;
var obj2130_onTap_loopCount = 0;
obj2130_onTap_actionGroup0();
});








/*
 *
 *   obj2127: Event Touch Down
 *
 */
$("#obj2127").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2127_onTap_activeActionGroupIndex != -1) return;
var obj2127_onTap_runningActionsCount = 0;
var obj2127_onTap_loopCount = 0;
obj2127_onTap_actionGroup0();
});








/*
 *
 *   obj2124: Event Touch Down
 *
 */
$("#obj2124").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2124_onTap_activeActionGroupIndex != -1) return;
var obj2124_onTap_runningActionsCount = 0;
var obj2124_onTap_loopCount = 0;
obj2124_onTap_actionGroup0();
});








/*
 *
 *   obj2157: Event Touch Down
 *
 */
$("#obj2157").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2157_onTap_activeActionGroupIndex != -1) return;
var obj2157_onTap_runningActionsCount = 0;
var obj2157_onTap_loopCount = 0;
obj2157_onTap_actionGroup0();
});








/*
 *
 *   obj2154: Event Touch Down
 *
 */
$("#obj2154").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2154_onTap_activeActionGroupIndex != -1) return;
var obj2154_onTap_runningActionsCount = 0;
var obj2154_onTap_loopCount = 0;
obj2154_onTap_actionGroup0();
});





























































		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		XPUB.ready();
	 }
});
$(window).on(PubCoder.Events.PagePlay, function() {
	$(window).trigger(PubCoder.Events.PageReady);
	
$("#obj73").trigger('SCEventShow');
$("#obj74").trigger('SCEventShow');
$("#obj75").trigger('SCEventShow');
$("#obj77").trigger('SCEventShow');
$("#obj78").trigger('SCEventShow');
$("#obj79").trigger('SCEventShow');
$("#obj80").trigger('SCEventShow');
$("#obj81").trigger('SCEventShow');
$("#obj82").trigger('SCEventShow');
$("#obj83").trigger('SCEventShow');
$("#obj84").trigger('SCEventShow');
$("#obj85").trigger('SCEventShow');
$("#obj86").trigger('SCEventShow');
$("#obj87").trigger('SCEventShow');
$("#obj88").trigger('SCEventShow');
$("#obj1797").trigger('SCEventShow');
$("#obj1800").trigger('SCEventShow');
$("#obj1803").trigger('SCEventShow');
$("#obj1806").trigger('SCEventShow');
$("#obj1818").trigger('SCEventShow');
$("#obj1815").trigger('SCEventShow');
$("#obj1812").trigger('SCEventShow');
$("#obj1809").trigger('SCEventShow');
$("#obj1839").trigger('SCEventShow');
$("#obj1836").trigger('SCEventShow');
$("#obj1833").trigger('SCEventShow');
$("#obj1890").trigger('SCEventShow');
$("#obj1887").trigger('SCEventShow');
$("#obj1884").trigger('SCEventShow');
$("#obj1881").trigger('SCEventShow');
$("#obj1869").trigger('SCEventShow');
$("#obj1866").trigger('SCEventShow');
$("#obj1863").trigger('SCEventShow');
$("#obj2088").trigger('SCEventShow');
$("#obj2085").trigger('SCEventShow');
$("#obj2082").trigger('SCEventShow');
$("#obj2079").trigger('SCEventShow');
$("#obj2076").trigger('SCEventShow');
$("#obj2073").trigger('SCEventShow');
$("#obj2070").trigger('SCEventShow');
$("#obj2067").trigger('SCEventShow');
$("#obj2064").trigger('SCEventShow');
$("#obj2061").trigger('SCEventShow');
$("#obj2058").trigger('SCEventShow');
$("#obj2097").trigger('SCEventShow');
$("#obj2094").trigger('SCEventShow');
$("#obj2091").trigger('SCEventShow');
$("#obj2115").trigger('SCEventShow');
$("#obj2112").trigger('SCEventShow');
$("#obj2109").trigger('SCEventShow');
$("#obj2106").trigger('SCEventShow');
$("#obj2103").trigger('SCEventShow');
$("#obj2100").trigger('SCEventShow');
$("#obj2121").trigger('SCEventShow');
$("#obj2151").trigger('SCEventShow');
$("#obj2145").trigger('SCEventShow');
$("#obj2142").trigger('SCEventShow');
$("#obj2139").trigger('SCEventShow');
$("#obj2136").trigger('SCEventShow');
$("#obj2133").trigger('SCEventShow');
$("#obj2130").trigger('SCEventShow');
$("#obj2127").trigger('SCEventShow');
$("#obj2124").trigger('SCEventShow');
$("#obj2157").trigger('SCEventShow');
$("#obj2154").trigger('SCEventShow');
$("#obj2161").trigger('SCEventShow');
$("#obj2163").trigger('SCEventShow');
$("#obj2165").trigger('SCEventShow');
$("#obj2172").trigger('SCEventShow');
$("#obj2175").trigger('SCEventShow');
$("#obj2179").trigger('SCEventShow');
$("#obj2177").trigger('SCEventShow');
	
});