pubcoder.projectID = pubcoder.projectID || "9BAFAFFC54C447E991DC838D64F52FA6";
pubcoder.project.id = pubcoder.project.id || "9BAFAFFC54C447E991DC838D64F52FA6";
pubcoder.project.title = pubcoder.project.title || "210721_a arte muda da fuga";
pubcoder.page.id = pubcoder.page.id || 51;
pubcoder.page.title = pubcoder.page.title || "10";
pubcoder.page.number = pubcoder.page.number || 10;
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
var obj842_onTap_activeActionGroupIndex = -1;
var obj842_onTap_runningActionsCount = 0;
var obj842_onTap_loopCount = 0;
var obj1594_onTap_activeActionGroupIndex = -1;
var obj1594_onTap_runningActionsCount = 0;
var obj1594_onTap_loopCount = 0;
var obj1600_onTap_activeActionGroupIndex = -1;
var obj1600_onTap_runningActionsCount = 0;
var obj1600_onTap_loopCount = 0;
var obj1597_onTap_activeActionGroupIndex = -1;
var obj1597_onTap_runningActionsCount = 0;
var obj1597_onTap_loopCount = 0;
var obj1612_onTap_activeActionGroupIndex = -1;
var obj1612_onTap_runningActionsCount = 0;
var obj1612_onTap_loopCount = 0;
var obj1609_onTap_activeActionGroupIndex = -1;
var obj1609_onTap_runningActionsCount = 0;
var obj1609_onTap_loopCount = 0;
var obj1603_onTap_activeActionGroupIndex = -1;
var obj1603_onTap_runningActionsCount = 0;
var obj1603_onTap_loopCount = 0;
var obj1606_onTap_activeActionGroupIndex = -1;
var obj1606_onTap_runningActionsCount = 0;
var obj1606_onTap_loopCount = 0;
var obj1618_onTap_activeActionGroupIndex = -1;
var obj1618_onTap_runningActionsCount = 0;
var obj1618_onTap_loopCount = 0;
var obj1615_onTap_activeActionGroupIndex = -1;
var obj1615_onTap_runningActionsCount = 0;
var obj1615_onTap_loopCount = 0;
var obj1621_onTap_activeActionGroupIndex = -1;
var obj1621_onTap_runningActionsCount = 0;
var obj1621_onTap_loopCount = 0;
var obj1642_onTap_activeActionGroupIndex = -1;
var obj1642_onTap_runningActionsCount = 0;
var obj1642_onTap_loopCount = 0;
var obj1639_onTap_activeActionGroupIndex = -1;
var obj1639_onTap_runningActionsCount = 0;
var obj1639_onTap_loopCount = 0;
var obj1636_onTap_activeActionGroupIndex = -1;
var obj1636_onTap_runningActionsCount = 0;
var obj1636_onTap_loopCount = 0;
var obj1633_onTap_activeActionGroupIndex = -1;
var obj1633_onTap_runningActionsCount = 0;
var obj1633_onTap_loopCount = 0;
var obj1630_onTap_activeActionGroupIndex = -1;
var obj1630_onTap_runningActionsCount = 0;
var obj1630_onTap_loopCount = 0;
var obj1627_onTap_activeActionGroupIndex = -1;
var obj1627_onTap_runningActionsCount = 0;
var obj1627_onTap_loopCount = 0;
var obj1624_onTap_activeActionGroupIndex = -1;
var obj1624_onTap_runningActionsCount = 0;
var obj1624_onTap_loopCount = 0;
var obj1653_onTap_activeActionGroupIndex = -1;
var obj1653_onTap_runningActionsCount = 0;
var obj1653_onTap_loopCount = 0;
var obj1650_onTap_activeActionGroupIndex = -1;
var obj1650_onTap_runningActionsCount = 0;
var obj1650_onTap_loopCount = 0;
var obj1647_onTap_activeActionGroupIndex = -1;
var obj1647_onTap_runningActionsCount = 0;
var obj1647_onTap_loopCount = 0;
var obj1656_onTap_activeActionGroupIndex = -1;
var obj1656_onTap_runningActionsCount = 0;
var obj1656_onTap_loopCount = 0;
var obj1689_onTap_activeActionGroupIndex = -1;
var obj1689_onTap_runningActionsCount = 0;
var obj1689_onTap_loopCount = 0;
var obj1686_onTap_activeActionGroupIndex = -1;
var obj1686_onTap_runningActionsCount = 0;
var obj1686_onTap_loopCount = 0;
var obj1683_onTap_activeActionGroupIndex = -1;
var obj1683_onTap_runningActionsCount = 0;
var obj1683_onTap_loopCount = 0;
var obj1680_onTap_activeActionGroupIndex = -1;
var obj1680_onTap_runningActionsCount = 0;
var obj1680_onTap_loopCount = 0;
var obj1677_onTap_activeActionGroupIndex = -1;
var obj1677_onTap_runningActionsCount = 0;
var obj1677_onTap_loopCount = 0;
var obj1674_onTap_activeActionGroupIndex = -1;
var obj1674_onTap_runningActionsCount = 0;
var obj1674_onTap_loopCount = 0;
var obj1671_onTap_activeActionGroupIndex = -1;
var obj1671_onTap_runningActionsCount = 0;
var obj1671_onTap_loopCount = 0;
var obj1668_onTap_activeActionGroupIndex = -1;
var obj1668_onTap_runningActionsCount = 0;
var obj1668_onTap_loopCount = 0;
var obj1718_onTap_activeActionGroupIndex = -1;
var obj1718_onTap_runningActionsCount = 0;
var obj1718_onTap_loopCount = 0;
var obj1715_onTap_activeActionGroupIndex = -1;
var obj1715_onTap_runningActionsCount = 0;
var obj1715_onTap_loopCount = 0;
var obj1712_onTap_activeActionGroupIndex = -1;
var obj1712_onTap_runningActionsCount = 0;
var obj1712_onTap_loopCount = 0;
var obj1709_onTap_activeActionGroupIndex = -1;
var obj1709_onTap_runningActionsCount = 0;
var obj1709_onTap_loopCount = 0;
var obj1706_onTap_activeActionGroupIndex = -1;
var obj1706_onTap_runningActionsCount = 0;
var obj1706_onTap_loopCount = 0;
var obj1703_onTap_activeActionGroupIndex = -1;
var obj1703_onTap_runningActionsCount = 0;
var obj1703_onTap_loopCount = 0;
var obj1700_onTap_activeActionGroupIndex = -1;
var obj1700_onTap_runningActionsCount = 0;
var obj1700_onTap_loopCount = 0;
var obj1697_onTap_activeActionGroupIndex = -1;
var obj1697_onTap_runningActionsCount = 0;
var obj1697_onTap_loopCount = 0;
var obj1694_onTap_activeActionGroupIndex = -1;
var obj1694_onTap_runningActionsCount = 0;
var obj1694_onTap_loopCount = 0;
var obj1729_onTap_activeActionGroupIndex = -1;
var obj1729_onTap_runningActionsCount = 0;
var obj1729_onTap_loopCount = 0;
var obj1756_onTap_activeActionGroupIndex = -1;
var obj1756_onTap_runningActionsCount = 0;
var obj1756_onTap_loopCount = 0;
var obj1753_onTap_activeActionGroupIndex = -1;
var obj1753_onTap_runningActionsCount = 0;
var obj1753_onTap_loopCount = 0;
var obj1750_onTap_activeActionGroupIndex = -1;
var obj1750_onTap_runningActionsCount = 0;
var obj1750_onTap_loopCount = 0;
var obj1747_onTap_activeActionGroupIndex = -1;
var obj1747_onTap_runningActionsCount = 0;
var obj1747_onTap_loopCount = 0;
var obj1744_onTap_activeActionGroupIndex = -1;
var obj1744_onTap_runningActionsCount = 0;
var obj1744_onTap_loopCount = 0;
var obj1741_onTap_activeActionGroupIndex = -1;
var obj1741_onTap_runningActionsCount = 0;
var obj1741_onTap_loopCount = 0;
var obj1738_onTap_activeActionGroupIndex = -1;
var obj1738_onTap_runningActionsCount = 0;
var obj1738_onTap_loopCount = 0;
var obj1735_onTap_activeActionGroupIndex = -1;
var obj1735_onTap_runningActionsCount = 0;
var obj1735_onTap_loopCount = 0;
var obj1732_onTap_activeActionGroupIndex = -1;
var obj1732_onTap_runningActionsCount = 0;
var obj1732_onTap_loopCount = 0;
var obj1788_onTap_activeActionGroupIndex = -1;
var obj1788_onTap_runningActionsCount = 0;
var obj1788_onTap_loopCount = 0;
var obj1785_onTap_activeActionGroupIndex = -1;
var obj1785_onTap_runningActionsCount = 0;
var obj1785_onTap_loopCount = 0;
var obj1782_onTap_activeActionGroupIndex = -1;
var obj1782_onTap_runningActionsCount = 0;
var obj1782_onTap_loopCount = 0;
var obj1779_onTap_activeActionGroupIndex = -1;
var obj1779_onTap_runningActionsCount = 0;
var obj1779_onTap_loopCount = 0;
var obj1776_onTap_activeActionGroupIndex = -1;
var obj1776_onTap_runningActionsCount = 0;
var obj1776_onTap_loopCount = 0;
var obj1773_onTap_activeActionGroupIndex = -1;
var obj1773_onTap_runningActionsCount = 0;
var obj1773_onTap_loopCount = 0;
var obj1770_onTap_activeActionGroupIndex = -1;
var obj1770_onTap_runningActionsCount = 0;
var obj1770_onTap_loopCount = 0;
var obj1767_onTap_activeActionGroupIndex = -1;
var obj1767_onTap_runningActionsCount = 0;
var obj1767_onTap_loopCount = 0;
var obj1764_onTap_activeActionGroupIndex = -1;
var obj1764_onTap_runningActionsCount = 0;
var obj1764_onTap_loopCount = 0;
var obj1794_onTap_activeActionGroupIndex = -1;
var obj1794_onTap_runningActionsCount = 0;
var obj1794_onTap_loopCount = 0;
var obj1791_onTap_activeActionGroupIndex = -1;
var obj1791_onTap_runningActionsCount = 0;
var obj1791_onTap_loopCount = 0;
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
		
obj842_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj842_onTap_activeActionGroupIndex = -1;
		$("#obj842").trigger("obj842_onTap_ended");
		
		return;
	}
	window.obj842_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_844();
function goToPage_844() {
	window.obj842_onTap_runningActionsCount = obj842_onTap_runningActionsCount + 1;
	$("#anchor24")[0].click();
	window.obj842_onTap_runningActionsCount = window.obj842_onTap_runningActionsCount - 1;
if (window.obj842_onTap_runningActionsCount == 0) {
	obj842_onTap_actionGroup1();
}
}




















};
obj842_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj842_onTap_activeActionGroupIndex = -1;
		$("#obj842").trigger("obj842_onTap_ended");
		
		return;
	}
	window.obj842_onTap_activeActionGroupIndex = 1;
	





















};
obj1594_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1594_onTap_activeActionGroupIndex = -1;
		$("#obj1594").trigger("obj1594_onTap_ended");
		
		return;
	}
	window.obj1594_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1596();
function goToPage_1596() {
	window.obj1594_onTap_runningActionsCount = obj1594_onTap_runningActionsCount + 1;
	$("#anchor25")[0].click();
	window.obj1594_onTap_runningActionsCount = window.obj1594_onTap_runningActionsCount - 1;
if (window.obj1594_onTap_runningActionsCount == 0) {
	obj1594_onTap_actionGroup1();
}
}




















};
obj1594_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1594_onTap_activeActionGroupIndex = -1;
		$("#obj1594").trigger("obj1594_onTap_ended");
		
		return;
	}
	window.obj1594_onTap_activeActionGroupIndex = 1;
	





















};
obj1600_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1600_onTap_activeActionGroupIndex = -1;
		$("#obj1600").trigger("obj1600_onTap_ended");
		
		return;
	}
	window.obj1600_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1602();
function goToPage_1602() {
	window.obj1600_onTap_runningActionsCount = obj1600_onTap_runningActionsCount + 1;
	$("#anchor26")[0].click();
	window.obj1600_onTap_runningActionsCount = window.obj1600_onTap_runningActionsCount - 1;
if (window.obj1600_onTap_runningActionsCount == 0) {
	obj1600_onTap_actionGroup1();
}
}




















};
obj1600_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1600_onTap_activeActionGroupIndex = -1;
		$("#obj1600").trigger("obj1600_onTap_ended");
		
		return;
	}
	window.obj1600_onTap_activeActionGroupIndex = 1;
	





















};
obj1597_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1597_onTap_activeActionGroupIndex = -1;
		$("#obj1597").trigger("obj1597_onTap_ended");
		
		return;
	}
	window.obj1597_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1599();
function goToPage_1599() {
	window.obj1597_onTap_runningActionsCount = obj1597_onTap_runningActionsCount + 1;
	$("#anchor27")[0].click();
	window.obj1597_onTap_runningActionsCount = window.obj1597_onTap_runningActionsCount - 1;
if (window.obj1597_onTap_runningActionsCount == 0) {
	obj1597_onTap_actionGroup1();
}
}




















};
obj1597_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1597_onTap_activeActionGroupIndex = -1;
		$("#obj1597").trigger("obj1597_onTap_ended");
		
		return;
	}
	window.obj1597_onTap_activeActionGroupIndex = 1;
	





















};
obj1612_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1612_onTap_activeActionGroupIndex = -1;
		$("#obj1612").trigger("obj1612_onTap_ended");
		
		return;
	}
	window.obj1612_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1614();
function goToPage_1614() {
	window.obj1612_onTap_runningActionsCount = obj1612_onTap_runningActionsCount + 1;
	$("#anchor28")[0].click();
	window.obj1612_onTap_runningActionsCount = window.obj1612_onTap_runningActionsCount - 1;
if (window.obj1612_onTap_runningActionsCount == 0) {
	obj1612_onTap_actionGroup1();
}
}




















};
obj1612_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1612_onTap_activeActionGroupIndex = -1;
		$("#obj1612").trigger("obj1612_onTap_ended");
		
		return;
	}
	window.obj1612_onTap_activeActionGroupIndex = 1;
	





















};
obj1609_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1609_onTap_activeActionGroupIndex = -1;
		$("#obj1609").trigger("obj1609_onTap_ended");
		
		return;
	}
	window.obj1609_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1611();
function goToPage_1611() {
	window.obj1609_onTap_runningActionsCount = obj1609_onTap_runningActionsCount + 1;
	$("#anchor29")[0].click();
	window.obj1609_onTap_runningActionsCount = window.obj1609_onTap_runningActionsCount - 1;
if (window.obj1609_onTap_runningActionsCount == 0) {
	obj1609_onTap_actionGroup1();
}
}




















};
obj1609_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1609_onTap_activeActionGroupIndex = -1;
		$("#obj1609").trigger("obj1609_onTap_ended");
		
		return;
	}
	window.obj1609_onTap_activeActionGroupIndex = 1;
	





















};
obj1603_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1603_onTap_activeActionGroupIndex = -1;
		$("#obj1603").trigger("obj1603_onTap_ended");
		
		return;
	}
	window.obj1603_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1605();
function goToPage_1605() {
	window.obj1603_onTap_runningActionsCount = obj1603_onTap_runningActionsCount + 1;
	$("#anchor30")[0].click();
	window.obj1603_onTap_runningActionsCount = window.obj1603_onTap_runningActionsCount - 1;
if (window.obj1603_onTap_runningActionsCount == 0) {
	obj1603_onTap_actionGroup1();
}
}




















};
obj1603_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1603_onTap_activeActionGroupIndex = -1;
		$("#obj1603").trigger("obj1603_onTap_ended");
		
		return;
	}
	window.obj1603_onTap_activeActionGroupIndex = 1;
	





















};
obj1606_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1606_onTap_activeActionGroupIndex = -1;
		$("#obj1606").trigger("obj1606_onTap_ended");
		
		return;
	}
	window.obj1606_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1608();
function goToPage_1608() {
	window.obj1606_onTap_runningActionsCount = obj1606_onTap_runningActionsCount + 1;
	$("#anchor31")[0].click();
	window.obj1606_onTap_runningActionsCount = window.obj1606_onTap_runningActionsCount - 1;
if (window.obj1606_onTap_runningActionsCount == 0) {
	obj1606_onTap_actionGroup1();
}
}




















};
obj1606_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1606_onTap_activeActionGroupIndex = -1;
		$("#obj1606").trigger("obj1606_onTap_ended");
		
		return;
	}
	window.obj1606_onTap_activeActionGroupIndex = 1;
	





















};
obj1618_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1618_onTap_activeActionGroupIndex = -1;
		$("#obj1618").trigger("obj1618_onTap_ended");
		
		return;
	}
	window.obj1618_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1620();
function goToPage_1620() {
	window.obj1618_onTap_runningActionsCount = obj1618_onTap_runningActionsCount + 1;
	$("#anchor32")[0].click();
	window.obj1618_onTap_runningActionsCount = window.obj1618_onTap_runningActionsCount - 1;
if (window.obj1618_onTap_runningActionsCount == 0) {
	obj1618_onTap_actionGroup1();
}
}




















};
obj1618_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1618_onTap_activeActionGroupIndex = -1;
		$("#obj1618").trigger("obj1618_onTap_ended");
		
		return;
	}
	window.obj1618_onTap_activeActionGroupIndex = 1;
	





















};
obj1615_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1615_onTap_activeActionGroupIndex = -1;
		$("#obj1615").trigger("obj1615_onTap_ended");
		
		return;
	}
	window.obj1615_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1617();
function goToPage_1617() {
	window.obj1615_onTap_runningActionsCount = obj1615_onTap_runningActionsCount + 1;
	$("#anchor33")[0].click();
	window.obj1615_onTap_runningActionsCount = window.obj1615_onTap_runningActionsCount - 1;
if (window.obj1615_onTap_runningActionsCount == 0) {
	obj1615_onTap_actionGroup1();
}
}




















};
obj1615_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1615_onTap_activeActionGroupIndex = -1;
		$("#obj1615").trigger("obj1615_onTap_ended");
		
		return;
	}
	window.obj1615_onTap_activeActionGroupIndex = 1;
	





















};
obj1621_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1621_onTap_activeActionGroupIndex = -1;
		$("#obj1621").trigger("obj1621_onTap_ended");
		
		return;
	}
	window.obj1621_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1623();
function goToPage_1623() {
	window.obj1621_onTap_runningActionsCount = obj1621_onTap_runningActionsCount + 1;
	$("#anchor34")[0].click();
	window.obj1621_onTap_runningActionsCount = window.obj1621_onTap_runningActionsCount - 1;
if (window.obj1621_onTap_runningActionsCount == 0) {
	obj1621_onTap_actionGroup1();
}
}




















};
obj1621_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1621_onTap_activeActionGroupIndex = -1;
		$("#obj1621").trigger("obj1621_onTap_ended");
		
		return;
	}
	window.obj1621_onTap_activeActionGroupIndex = 1;
	





















};
obj1642_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1642_onTap_activeActionGroupIndex = -1;
		$("#obj1642").trigger("obj1642_onTap_ended");
		
		return;
	}
	window.obj1642_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1644();
function goToPage_1644() {
	window.obj1642_onTap_runningActionsCount = obj1642_onTap_runningActionsCount + 1;
	$("#anchor35")[0].click();
	window.obj1642_onTap_runningActionsCount = window.obj1642_onTap_runningActionsCount - 1;
if (window.obj1642_onTap_runningActionsCount == 0) {
	obj1642_onTap_actionGroup1();
}
}




















};
obj1642_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1642_onTap_activeActionGroupIndex = -1;
		$("#obj1642").trigger("obj1642_onTap_ended");
		
		return;
	}
	window.obj1642_onTap_activeActionGroupIndex = 1;
	





















};
obj1639_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1639_onTap_activeActionGroupIndex = -1;
		$("#obj1639").trigger("obj1639_onTap_ended");
		
		return;
	}
	window.obj1639_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1641();
function goToPage_1641() {
	window.obj1639_onTap_runningActionsCount = obj1639_onTap_runningActionsCount + 1;
	$("#anchor36")[0].click();
	window.obj1639_onTap_runningActionsCount = window.obj1639_onTap_runningActionsCount - 1;
if (window.obj1639_onTap_runningActionsCount == 0) {
	obj1639_onTap_actionGroup1();
}
}




















};
obj1639_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1639_onTap_activeActionGroupIndex = -1;
		$("#obj1639").trigger("obj1639_onTap_ended");
		
		return;
	}
	window.obj1639_onTap_activeActionGroupIndex = 1;
	





















};
obj1636_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1636_onTap_activeActionGroupIndex = -1;
		$("#obj1636").trigger("obj1636_onTap_ended");
		
		return;
	}
	window.obj1636_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1638();
function goToPage_1638() {
	window.obj1636_onTap_runningActionsCount = obj1636_onTap_runningActionsCount + 1;
	$("#anchor37")[0].click();
	window.obj1636_onTap_runningActionsCount = window.obj1636_onTap_runningActionsCount - 1;
if (window.obj1636_onTap_runningActionsCount == 0) {
	obj1636_onTap_actionGroup1();
}
}




















};
obj1636_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1636_onTap_activeActionGroupIndex = -1;
		$("#obj1636").trigger("obj1636_onTap_ended");
		
		return;
	}
	window.obj1636_onTap_activeActionGroupIndex = 1;
	





















};
obj1633_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1633_onTap_activeActionGroupIndex = -1;
		$("#obj1633").trigger("obj1633_onTap_ended");
		
		return;
	}
	window.obj1633_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1635();
function goToPage_1635() {
	window.obj1633_onTap_runningActionsCount = obj1633_onTap_runningActionsCount + 1;
	$("#anchor38")[0].click();
	window.obj1633_onTap_runningActionsCount = window.obj1633_onTap_runningActionsCount - 1;
if (window.obj1633_onTap_runningActionsCount == 0) {
	obj1633_onTap_actionGroup1();
}
}




















};
obj1633_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1633_onTap_activeActionGroupIndex = -1;
		$("#obj1633").trigger("obj1633_onTap_ended");
		
		return;
	}
	window.obj1633_onTap_activeActionGroupIndex = 1;
	





















};
obj1630_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1630_onTap_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_onTap_ended");
		
		return;
	}
	window.obj1630_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1632();
function goToPage_1632() {
	window.obj1630_onTap_runningActionsCount = obj1630_onTap_runningActionsCount + 1;
	$("#anchor39")[0].click();
	window.obj1630_onTap_runningActionsCount = window.obj1630_onTap_runningActionsCount - 1;
if (window.obj1630_onTap_runningActionsCount == 0) {
	obj1630_onTap_actionGroup1();
}
}




















};
obj1630_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1630_onTap_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_onTap_ended");
		
		return;
	}
	window.obj1630_onTap_activeActionGroupIndex = 1;
	





















};
obj1627_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1627_onTap_activeActionGroupIndex = -1;
		$("#obj1627").trigger("obj1627_onTap_ended");
		
		return;
	}
	window.obj1627_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1629();
function goToPage_1629() {
	window.obj1627_onTap_runningActionsCount = obj1627_onTap_runningActionsCount + 1;
	$("#anchor40")[0].click();
	window.obj1627_onTap_runningActionsCount = window.obj1627_onTap_runningActionsCount - 1;
if (window.obj1627_onTap_runningActionsCount == 0) {
	obj1627_onTap_actionGroup1();
}
}




















};
obj1627_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1627_onTap_activeActionGroupIndex = -1;
		$("#obj1627").trigger("obj1627_onTap_ended");
		
		return;
	}
	window.obj1627_onTap_activeActionGroupIndex = 1;
	





















};
obj1624_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1624_onTap_activeActionGroupIndex = -1;
		$("#obj1624").trigger("obj1624_onTap_ended");
		
		return;
	}
	window.obj1624_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1626();
function goToPage_1626() {
	window.obj1624_onTap_runningActionsCount = obj1624_onTap_runningActionsCount + 1;
	$("#anchor41")[0].click();
	window.obj1624_onTap_runningActionsCount = window.obj1624_onTap_runningActionsCount - 1;
if (window.obj1624_onTap_runningActionsCount == 0) {
	obj1624_onTap_actionGroup1();
}
}




















};
obj1624_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1624_onTap_activeActionGroupIndex = -1;
		$("#obj1624").trigger("obj1624_onTap_ended");
		
		return;
	}
	window.obj1624_onTap_activeActionGroupIndex = 1;
	





















};
obj1653_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1653_onTap_activeActionGroupIndex = -1;
		$("#obj1653").trigger("obj1653_onTap_ended");
		
		return;
	}
	window.obj1653_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1655();
function goToPage_1655() {
	window.obj1653_onTap_runningActionsCount = obj1653_onTap_runningActionsCount + 1;
	$("#anchor42")[0].click();
	window.obj1653_onTap_runningActionsCount = window.obj1653_onTap_runningActionsCount - 1;
if (window.obj1653_onTap_runningActionsCount == 0) {
	obj1653_onTap_actionGroup1();
}
}




















};
obj1653_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1653_onTap_activeActionGroupIndex = -1;
		$("#obj1653").trigger("obj1653_onTap_ended");
		
		return;
	}
	window.obj1653_onTap_activeActionGroupIndex = 1;
	





















};
obj1650_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1650_onTap_activeActionGroupIndex = -1;
		$("#obj1650").trigger("obj1650_onTap_ended");
		
		return;
	}
	window.obj1650_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1652();
function goToPage_1652() {
	window.obj1650_onTap_runningActionsCount = obj1650_onTap_runningActionsCount + 1;
	$("#anchor43")[0].click();
	window.obj1650_onTap_runningActionsCount = window.obj1650_onTap_runningActionsCount - 1;
if (window.obj1650_onTap_runningActionsCount == 0) {
	obj1650_onTap_actionGroup1();
}
}




















};
obj1650_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1650_onTap_activeActionGroupIndex = -1;
		$("#obj1650").trigger("obj1650_onTap_ended");
		
		return;
	}
	window.obj1650_onTap_activeActionGroupIndex = 1;
	





















};
obj1647_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1647_onTap_activeActionGroupIndex = -1;
		$("#obj1647").trigger("obj1647_onTap_ended");
		
		return;
	}
	window.obj1647_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1649();
function goToPage_1649() {
	window.obj1647_onTap_runningActionsCount = obj1647_onTap_runningActionsCount + 1;
	$("#anchor44")[0].click();
	window.obj1647_onTap_runningActionsCount = window.obj1647_onTap_runningActionsCount - 1;
if (window.obj1647_onTap_runningActionsCount == 0) {
	obj1647_onTap_actionGroup1();
}
}




















};
obj1647_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1647_onTap_activeActionGroupIndex = -1;
		$("#obj1647").trigger("obj1647_onTap_ended");
		
		return;
	}
	window.obj1647_onTap_activeActionGroupIndex = 1;
	





















};
obj1656_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1656_onTap_activeActionGroupIndex = -1;
		$("#obj1656").trigger("obj1656_onTap_ended");
		
		return;
	}
	window.obj1656_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1658();
function goToPage_1658() {
	window.obj1656_onTap_runningActionsCount = obj1656_onTap_runningActionsCount + 1;
	$("#anchor45")[0].click();
	window.obj1656_onTap_runningActionsCount = window.obj1656_onTap_runningActionsCount - 1;
if (window.obj1656_onTap_runningActionsCount == 0) {
	obj1656_onTap_actionGroup1();
}
}




















};
obj1656_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1656_onTap_activeActionGroupIndex = -1;
		$("#obj1656").trigger("obj1656_onTap_ended");
		
		return;
	}
	window.obj1656_onTap_activeActionGroupIndex = 1;
	





















};
obj1689_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1689_onTap_activeActionGroupIndex = -1;
		$("#obj1689").trigger("obj1689_onTap_ended");
		
		return;
	}
	window.obj1689_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1691();
function goToPage_1691() {
	window.obj1689_onTap_runningActionsCount = obj1689_onTap_runningActionsCount + 1;
	$("#anchor46")[0].click();
	window.obj1689_onTap_runningActionsCount = window.obj1689_onTap_runningActionsCount - 1;
if (window.obj1689_onTap_runningActionsCount == 0) {
	obj1689_onTap_actionGroup1();
}
}




















};
obj1689_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1689_onTap_activeActionGroupIndex = -1;
		$("#obj1689").trigger("obj1689_onTap_ended");
		
		return;
	}
	window.obj1689_onTap_activeActionGroupIndex = 1;
	





















};
obj1686_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1686_onTap_activeActionGroupIndex = -1;
		$("#obj1686").trigger("obj1686_onTap_ended");
		
		return;
	}
	window.obj1686_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1688();
function goToPage_1688() {
	window.obj1686_onTap_runningActionsCount = obj1686_onTap_runningActionsCount + 1;
	$("#anchor47")[0].click();
	window.obj1686_onTap_runningActionsCount = window.obj1686_onTap_runningActionsCount - 1;
if (window.obj1686_onTap_runningActionsCount == 0) {
	obj1686_onTap_actionGroup1();
}
}




















};
obj1686_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1686_onTap_activeActionGroupIndex = -1;
		$("#obj1686").trigger("obj1686_onTap_ended");
		
		return;
	}
	window.obj1686_onTap_activeActionGroupIndex = 1;
	





















};
obj1683_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1683_onTap_activeActionGroupIndex = -1;
		$("#obj1683").trigger("obj1683_onTap_ended");
		
		return;
	}
	window.obj1683_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1685();
function goToPage_1685() {
	window.obj1683_onTap_runningActionsCount = obj1683_onTap_runningActionsCount + 1;
	$("#anchor48")[0].click();
	window.obj1683_onTap_runningActionsCount = window.obj1683_onTap_runningActionsCount - 1;
if (window.obj1683_onTap_runningActionsCount == 0) {
	obj1683_onTap_actionGroup1();
}
}




















};
obj1683_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1683_onTap_activeActionGroupIndex = -1;
		$("#obj1683").trigger("obj1683_onTap_ended");
		
		return;
	}
	window.obj1683_onTap_activeActionGroupIndex = 1;
	





















};
obj1680_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1680_onTap_activeActionGroupIndex = -1;
		$("#obj1680").trigger("obj1680_onTap_ended");
		
		return;
	}
	window.obj1680_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1682();
function goToPage_1682() {
	window.obj1680_onTap_runningActionsCount = obj1680_onTap_runningActionsCount + 1;
	$("#anchor49")[0].click();
	window.obj1680_onTap_runningActionsCount = window.obj1680_onTap_runningActionsCount - 1;
if (window.obj1680_onTap_runningActionsCount == 0) {
	obj1680_onTap_actionGroup1();
}
}




















};
obj1680_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1680_onTap_activeActionGroupIndex = -1;
		$("#obj1680").trigger("obj1680_onTap_ended");
		
		return;
	}
	window.obj1680_onTap_activeActionGroupIndex = 1;
	





















};
obj1677_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1677_onTap_activeActionGroupIndex = -1;
		$("#obj1677").trigger("obj1677_onTap_ended");
		
		return;
	}
	window.obj1677_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1679();
function goToPage_1679() {
	window.obj1677_onTap_runningActionsCount = obj1677_onTap_runningActionsCount + 1;
	$("#anchor50")[0].click();
	window.obj1677_onTap_runningActionsCount = window.obj1677_onTap_runningActionsCount - 1;
if (window.obj1677_onTap_runningActionsCount == 0) {
	obj1677_onTap_actionGroup1();
}
}




















};
obj1677_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1677_onTap_activeActionGroupIndex = -1;
		$("#obj1677").trigger("obj1677_onTap_ended");
		
		return;
	}
	window.obj1677_onTap_activeActionGroupIndex = 1;
	





















};
obj1674_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1674_onTap_activeActionGroupIndex = -1;
		$("#obj1674").trigger("obj1674_onTap_ended");
		
		return;
	}
	window.obj1674_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1676();
function goToPage_1676() {
	window.obj1674_onTap_runningActionsCount = obj1674_onTap_runningActionsCount + 1;
	$("#anchor51")[0].click();
	window.obj1674_onTap_runningActionsCount = window.obj1674_onTap_runningActionsCount - 1;
if (window.obj1674_onTap_runningActionsCount == 0) {
	obj1674_onTap_actionGroup1();
}
}




















};
obj1674_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1674_onTap_activeActionGroupIndex = -1;
		$("#obj1674").trigger("obj1674_onTap_ended");
		
		return;
	}
	window.obj1674_onTap_activeActionGroupIndex = 1;
	





















};
obj1671_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1671_onTap_activeActionGroupIndex = -1;
		$("#obj1671").trigger("obj1671_onTap_ended");
		
		return;
	}
	window.obj1671_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1673();
function goToPage_1673() {
	window.obj1671_onTap_runningActionsCount = obj1671_onTap_runningActionsCount + 1;
	$("#anchor52")[0].click();
	window.obj1671_onTap_runningActionsCount = window.obj1671_onTap_runningActionsCount - 1;
if (window.obj1671_onTap_runningActionsCount == 0) {
	obj1671_onTap_actionGroup1();
}
}




















};
obj1671_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1671_onTap_activeActionGroupIndex = -1;
		$("#obj1671").trigger("obj1671_onTap_ended");
		
		return;
	}
	window.obj1671_onTap_activeActionGroupIndex = 1;
	





















};
obj1668_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1668_onTap_activeActionGroupIndex = -1;
		$("#obj1668").trigger("obj1668_onTap_ended");
		
		return;
	}
	window.obj1668_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1670();
function goToPage_1670() {
	window.obj1668_onTap_runningActionsCount = obj1668_onTap_runningActionsCount + 1;
	$("#anchor53")[0].click();
	window.obj1668_onTap_runningActionsCount = window.obj1668_onTap_runningActionsCount - 1;
if (window.obj1668_onTap_runningActionsCount == 0) {
	obj1668_onTap_actionGroup1();
}
}




















};
obj1668_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1668_onTap_activeActionGroupIndex = -1;
		$("#obj1668").trigger("obj1668_onTap_ended");
		
		return;
	}
	window.obj1668_onTap_activeActionGroupIndex = 1;
	





















};
obj1718_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1718_onTap_activeActionGroupIndex = -1;
		$("#obj1718").trigger("obj1718_onTap_ended");
		
		return;
	}
	window.obj1718_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1720();
function goToPage_1720() {
	window.obj1718_onTap_runningActionsCount = obj1718_onTap_runningActionsCount + 1;
	$("#anchor54")[0].click();
	window.obj1718_onTap_runningActionsCount = window.obj1718_onTap_runningActionsCount - 1;
if (window.obj1718_onTap_runningActionsCount == 0) {
	obj1718_onTap_actionGroup1();
}
}




















};
obj1718_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1718_onTap_activeActionGroupIndex = -1;
		$("#obj1718").trigger("obj1718_onTap_ended");
		
		return;
	}
	window.obj1718_onTap_activeActionGroupIndex = 1;
	





















};
obj1715_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1715_onTap_activeActionGroupIndex = -1;
		$("#obj1715").trigger("obj1715_onTap_ended");
		
		return;
	}
	window.obj1715_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1717();
function goToPage_1717() {
	window.obj1715_onTap_runningActionsCount = obj1715_onTap_runningActionsCount + 1;
	$("#anchor55")[0].click();
	window.obj1715_onTap_runningActionsCount = window.obj1715_onTap_runningActionsCount - 1;
if (window.obj1715_onTap_runningActionsCount == 0) {
	obj1715_onTap_actionGroup1();
}
}




















};
obj1715_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1715_onTap_activeActionGroupIndex = -1;
		$("#obj1715").trigger("obj1715_onTap_ended");
		
		return;
	}
	window.obj1715_onTap_activeActionGroupIndex = 1;
	





















};
obj1712_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1712_onTap_activeActionGroupIndex = -1;
		$("#obj1712").trigger("obj1712_onTap_ended");
		
		return;
	}
	window.obj1712_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1714();
function goToPage_1714() {
	window.obj1712_onTap_runningActionsCount = obj1712_onTap_runningActionsCount + 1;
	$("#anchor56")[0].click();
	window.obj1712_onTap_runningActionsCount = window.obj1712_onTap_runningActionsCount - 1;
if (window.obj1712_onTap_runningActionsCount == 0) {
	obj1712_onTap_actionGroup1();
}
}




















};
obj1712_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1712_onTap_activeActionGroupIndex = -1;
		$("#obj1712").trigger("obj1712_onTap_ended");
		
		return;
	}
	window.obj1712_onTap_activeActionGroupIndex = 1;
	





















};
obj1709_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1709_onTap_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_onTap_ended");
		
		return;
	}
	window.obj1709_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1711();
function goToPage_1711() {
	window.obj1709_onTap_runningActionsCount = obj1709_onTap_runningActionsCount + 1;
	$("#anchor57")[0].click();
	window.obj1709_onTap_runningActionsCount = window.obj1709_onTap_runningActionsCount - 1;
if (window.obj1709_onTap_runningActionsCount == 0) {
	obj1709_onTap_actionGroup1();
}
}




















};
obj1709_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1709_onTap_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_onTap_ended");
		
		return;
	}
	window.obj1709_onTap_activeActionGroupIndex = 1;
	





















};
obj1706_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1706_onTap_activeActionGroupIndex = -1;
		$("#obj1706").trigger("obj1706_onTap_ended");
		
		return;
	}
	window.obj1706_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1708();
function goToPage_1708() {
	window.obj1706_onTap_runningActionsCount = obj1706_onTap_runningActionsCount + 1;
	$("#anchor58")[0].click();
	window.obj1706_onTap_runningActionsCount = window.obj1706_onTap_runningActionsCount - 1;
if (window.obj1706_onTap_runningActionsCount == 0) {
	obj1706_onTap_actionGroup1();
}
}




















};
obj1706_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1706_onTap_activeActionGroupIndex = -1;
		$("#obj1706").trigger("obj1706_onTap_ended");
		
		return;
	}
	window.obj1706_onTap_activeActionGroupIndex = 1;
	





















};
obj1703_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1703_onTap_activeActionGroupIndex = -1;
		$("#obj1703").trigger("obj1703_onTap_ended");
		
		return;
	}
	window.obj1703_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1705();
function goToPage_1705() {
	window.obj1703_onTap_runningActionsCount = obj1703_onTap_runningActionsCount + 1;
	$("#anchor59")[0].click();
	window.obj1703_onTap_runningActionsCount = window.obj1703_onTap_runningActionsCount - 1;
if (window.obj1703_onTap_runningActionsCount == 0) {
	obj1703_onTap_actionGroup1();
}
}




















};
obj1703_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1703_onTap_activeActionGroupIndex = -1;
		$("#obj1703").trigger("obj1703_onTap_ended");
		
		return;
	}
	window.obj1703_onTap_activeActionGroupIndex = 1;
	





















};
obj1700_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1700_onTap_activeActionGroupIndex = -1;
		$("#obj1700").trigger("obj1700_onTap_ended");
		
		return;
	}
	window.obj1700_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1702();
function goToPage_1702() {
	window.obj1700_onTap_runningActionsCount = obj1700_onTap_runningActionsCount + 1;
	$("#anchor60")[0].click();
	window.obj1700_onTap_runningActionsCount = window.obj1700_onTap_runningActionsCount - 1;
if (window.obj1700_onTap_runningActionsCount == 0) {
	obj1700_onTap_actionGroup1();
}
}




















};
obj1700_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1700_onTap_activeActionGroupIndex = -1;
		$("#obj1700").trigger("obj1700_onTap_ended");
		
		return;
	}
	window.obj1700_onTap_activeActionGroupIndex = 1;
	





















};
obj1697_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1697_onTap_activeActionGroupIndex = -1;
		$("#obj1697").trigger("obj1697_onTap_ended");
		
		return;
	}
	window.obj1697_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1699();
function goToPage_1699() {
	window.obj1697_onTap_runningActionsCount = obj1697_onTap_runningActionsCount + 1;
	$("#anchor61")[0].click();
	window.obj1697_onTap_runningActionsCount = window.obj1697_onTap_runningActionsCount - 1;
if (window.obj1697_onTap_runningActionsCount == 0) {
	obj1697_onTap_actionGroup1();
}
}




















};
obj1697_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1697_onTap_activeActionGroupIndex = -1;
		$("#obj1697").trigger("obj1697_onTap_ended");
		
		return;
	}
	window.obj1697_onTap_activeActionGroupIndex = 1;
	





















};
obj1694_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1694_onTap_activeActionGroupIndex = -1;
		$("#obj1694").trigger("obj1694_onTap_ended");
		
		return;
	}
	window.obj1694_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1696();
function goToPage_1696() {
	window.obj1694_onTap_runningActionsCount = obj1694_onTap_runningActionsCount + 1;
	$("#anchor62")[0].click();
	window.obj1694_onTap_runningActionsCount = window.obj1694_onTap_runningActionsCount - 1;
if (window.obj1694_onTap_runningActionsCount == 0) {
	obj1694_onTap_actionGroup1();
}
}




















};
obj1694_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1694_onTap_activeActionGroupIndex = -1;
		$("#obj1694").trigger("obj1694_onTap_ended");
		
		return;
	}
	window.obj1694_onTap_activeActionGroupIndex = 1;
	





















};
obj1729_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1729_onTap_activeActionGroupIndex = -1;
		$("#obj1729").trigger("obj1729_onTap_ended");
		
		return;
	}
	window.obj1729_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1731();
function goToPage_1731() {
	window.obj1729_onTap_runningActionsCount = obj1729_onTap_runningActionsCount + 1;
	$("#anchor63")[0].click();
	window.obj1729_onTap_runningActionsCount = window.obj1729_onTap_runningActionsCount - 1;
if (window.obj1729_onTap_runningActionsCount == 0) {
	obj1729_onTap_actionGroup1();
}
}




















};
obj1729_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1729_onTap_activeActionGroupIndex = -1;
		$("#obj1729").trigger("obj1729_onTap_ended");
		
		return;
	}
	window.obj1729_onTap_activeActionGroupIndex = 1;
	





















};
obj1756_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1756_onTap_activeActionGroupIndex = -1;
		$("#obj1756").trigger("obj1756_onTap_ended");
		
		return;
	}
	window.obj1756_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1758();
function goToPage_1758() {
	window.obj1756_onTap_runningActionsCount = obj1756_onTap_runningActionsCount + 1;
	$("#anchor64")[0].click();
	window.obj1756_onTap_runningActionsCount = window.obj1756_onTap_runningActionsCount - 1;
if (window.obj1756_onTap_runningActionsCount == 0) {
	obj1756_onTap_actionGroup1();
}
}




















};
obj1756_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1756_onTap_activeActionGroupIndex = -1;
		$("#obj1756").trigger("obj1756_onTap_ended");
		
		return;
	}
	window.obj1756_onTap_activeActionGroupIndex = 1;
	





















};
obj1753_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1753_onTap_activeActionGroupIndex = -1;
		$("#obj1753").trigger("obj1753_onTap_ended");
		
		return;
	}
	window.obj1753_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1755();
function goToPage_1755() {
	window.obj1753_onTap_runningActionsCount = obj1753_onTap_runningActionsCount + 1;
	$("#anchor65")[0].click();
	window.obj1753_onTap_runningActionsCount = window.obj1753_onTap_runningActionsCount - 1;
if (window.obj1753_onTap_runningActionsCount == 0) {
	obj1753_onTap_actionGroup1();
}
}




















};
obj1753_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1753_onTap_activeActionGroupIndex = -1;
		$("#obj1753").trigger("obj1753_onTap_ended");
		
		return;
	}
	window.obj1753_onTap_activeActionGroupIndex = 1;
	





















};
obj1750_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1750_onTap_activeActionGroupIndex = -1;
		$("#obj1750").trigger("obj1750_onTap_ended");
		
		return;
	}
	window.obj1750_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1752();
function goToPage_1752() {
	window.obj1750_onTap_runningActionsCount = obj1750_onTap_runningActionsCount + 1;
	$("#anchor66")[0].click();
	window.obj1750_onTap_runningActionsCount = window.obj1750_onTap_runningActionsCount - 1;
if (window.obj1750_onTap_runningActionsCount == 0) {
	obj1750_onTap_actionGroup1();
}
}




















};
obj1750_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1750_onTap_activeActionGroupIndex = -1;
		$("#obj1750").trigger("obj1750_onTap_ended");
		
		return;
	}
	window.obj1750_onTap_activeActionGroupIndex = 1;
	





















};
obj1747_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1747_onTap_activeActionGroupIndex = -1;
		$("#obj1747").trigger("obj1747_onTap_ended");
		
		return;
	}
	window.obj1747_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1749();
function goToPage_1749() {
	window.obj1747_onTap_runningActionsCount = obj1747_onTap_runningActionsCount + 1;
	$("#anchor67")[0].click();
	window.obj1747_onTap_runningActionsCount = window.obj1747_onTap_runningActionsCount - 1;
if (window.obj1747_onTap_runningActionsCount == 0) {
	obj1747_onTap_actionGroup1();
}
}




















};
obj1747_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1747_onTap_activeActionGroupIndex = -1;
		$("#obj1747").trigger("obj1747_onTap_ended");
		
		return;
	}
	window.obj1747_onTap_activeActionGroupIndex = 1;
	





















};
obj1744_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1744_onTap_activeActionGroupIndex = -1;
		$("#obj1744").trigger("obj1744_onTap_ended");
		
		return;
	}
	window.obj1744_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1746();
function goToPage_1746() {
	window.obj1744_onTap_runningActionsCount = obj1744_onTap_runningActionsCount + 1;
	$("#anchor68")[0].click();
	window.obj1744_onTap_runningActionsCount = window.obj1744_onTap_runningActionsCount - 1;
if (window.obj1744_onTap_runningActionsCount == 0) {
	obj1744_onTap_actionGroup1();
}
}




















};
obj1744_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1744_onTap_activeActionGroupIndex = -1;
		$("#obj1744").trigger("obj1744_onTap_ended");
		
		return;
	}
	window.obj1744_onTap_activeActionGroupIndex = 1;
	





















};
obj1741_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1741_onTap_activeActionGroupIndex = -1;
		$("#obj1741").trigger("obj1741_onTap_ended");
		
		return;
	}
	window.obj1741_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1743();
function goToPage_1743() {
	window.obj1741_onTap_runningActionsCount = obj1741_onTap_runningActionsCount + 1;
	$("#anchor69")[0].click();
	window.obj1741_onTap_runningActionsCount = window.obj1741_onTap_runningActionsCount - 1;
if (window.obj1741_onTap_runningActionsCount == 0) {
	obj1741_onTap_actionGroup1();
}
}




















};
obj1741_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1741_onTap_activeActionGroupIndex = -1;
		$("#obj1741").trigger("obj1741_onTap_ended");
		
		return;
	}
	window.obj1741_onTap_activeActionGroupIndex = 1;
	





















};
obj1738_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1738_onTap_activeActionGroupIndex = -1;
		$("#obj1738").trigger("obj1738_onTap_ended");
		
		return;
	}
	window.obj1738_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1740();
function goToPage_1740() {
	window.obj1738_onTap_runningActionsCount = obj1738_onTap_runningActionsCount + 1;
	$("#anchor70")[0].click();
	window.obj1738_onTap_runningActionsCount = window.obj1738_onTap_runningActionsCount - 1;
if (window.obj1738_onTap_runningActionsCount == 0) {
	obj1738_onTap_actionGroup1();
}
}




















};
obj1738_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1738_onTap_activeActionGroupIndex = -1;
		$("#obj1738").trigger("obj1738_onTap_ended");
		
		return;
	}
	window.obj1738_onTap_activeActionGroupIndex = 1;
	





















};
obj1735_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1735_onTap_activeActionGroupIndex = -1;
		$("#obj1735").trigger("obj1735_onTap_ended");
		
		return;
	}
	window.obj1735_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1737();
function goToPage_1737() {
	window.obj1735_onTap_runningActionsCount = obj1735_onTap_runningActionsCount + 1;
	$("#anchor71")[0].click();
	window.obj1735_onTap_runningActionsCount = window.obj1735_onTap_runningActionsCount - 1;
if (window.obj1735_onTap_runningActionsCount == 0) {
	obj1735_onTap_actionGroup1();
}
}




















};
obj1735_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1735_onTap_activeActionGroupIndex = -1;
		$("#obj1735").trigger("obj1735_onTap_ended");
		
		return;
	}
	window.obj1735_onTap_activeActionGroupIndex = 1;
	





















};
obj1732_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1732_onTap_activeActionGroupIndex = -1;
		$("#obj1732").trigger("obj1732_onTap_ended");
		
		return;
	}
	window.obj1732_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1734();
function goToPage_1734() {
	window.obj1732_onTap_runningActionsCount = obj1732_onTap_runningActionsCount + 1;
	$("#anchor72")[0].click();
	window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup1();
}
}




















};
obj1732_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1732_onTap_activeActionGroupIndex = -1;
		$("#obj1732").trigger("obj1732_onTap_ended");
		
		return;
	}
	window.obj1732_onTap_activeActionGroupIndex = 1;
	





















};
obj1788_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1788_onTap_activeActionGroupIndex = -1;
		$("#obj1788").trigger("obj1788_onTap_ended");
		
		return;
	}
	window.obj1788_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1790();
function goToPage_1790() {
	window.obj1788_onTap_runningActionsCount = obj1788_onTap_runningActionsCount + 1;
	$("#anchor73")[0].click();
	window.obj1788_onTap_runningActionsCount = window.obj1788_onTap_runningActionsCount - 1;
if (window.obj1788_onTap_runningActionsCount == 0) {
	obj1788_onTap_actionGroup1();
}
}




















};
obj1788_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1788_onTap_activeActionGroupIndex = -1;
		$("#obj1788").trigger("obj1788_onTap_ended");
		
		return;
	}
	window.obj1788_onTap_activeActionGroupIndex = 1;
	





















};
obj1785_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1785_onTap_activeActionGroupIndex = -1;
		$("#obj1785").trigger("obj1785_onTap_ended");
		
		return;
	}
	window.obj1785_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1787();
function goToPage_1787() {
	window.obj1785_onTap_runningActionsCount = obj1785_onTap_runningActionsCount + 1;
	$("#anchor74")[0].click();
	window.obj1785_onTap_runningActionsCount = window.obj1785_onTap_runningActionsCount - 1;
if (window.obj1785_onTap_runningActionsCount == 0) {
	obj1785_onTap_actionGroup1();
}
}




















};
obj1785_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1785_onTap_activeActionGroupIndex = -1;
		$("#obj1785").trigger("obj1785_onTap_ended");
		
		return;
	}
	window.obj1785_onTap_activeActionGroupIndex = 1;
	





















};
obj1782_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1782_onTap_activeActionGroupIndex = -1;
		$("#obj1782").trigger("obj1782_onTap_ended");
		
		return;
	}
	window.obj1782_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1784();
function goToPage_1784() {
	window.obj1782_onTap_runningActionsCount = obj1782_onTap_runningActionsCount + 1;
	$("#anchor75")[0].click();
	window.obj1782_onTap_runningActionsCount = window.obj1782_onTap_runningActionsCount - 1;
if (window.obj1782_onTap_runningActionsCount == 0) {
	obj1782_onTap_actionGroup1();
}
}




















};
obj1782_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1782_onTap_activeActionGroupIndex = -1;
		$("#obj1782").trigger("obj1782_onTap_ended");
		
		return;
	}
	window.obj1782_onTap_activeActionGroupIndex = 1;
	





















};
obj1779_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1779_onTap_activeActionGroupIndex = -1;
		$("#obj1779").trigger("obj1779_onTap_ended");
		
		return;
	}
	window.obj1779_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1781();
function goToPage_1781() {
	window.obj1779_onTap_runningActionsCount = obj1779_onTap_runningActionsCount + 1;
	$("#anchor76")[0].click();
	window.obj1779_onTap_runningActionsCount = window.obj1779_onTap_runningActionsCount - 1;
if (window.obj1779_onTap_runningActionsCount == 0) {
	obj1779_onTap_actionGroup1();
}
}




















};
obj1779_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1779_onTap_activeActionGroupIndex = -1;
		$("#obj1779").trigger("obj1779_onTap_ended");
		
		return;
	}
	window.obj1779_onTap_activeActionGroupIndex = 1;
	





















};
obj1776_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1776_onTap_activeActionGroupIndex = -1;
		$("#obj1776").trigger("obj1776_onTap_ended");
		
		return;
	}
	window.obj1776_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1778();
function goToPage_1778() {
	window.obj1776_onTap_runningActionsCount = obj1776_onTap_runningActionsCount + 1;
	$("#anchor77")[0].click();
	window.obj1776_onTap_runningActionsCount = window.obj1776_onTap_runningActionsCount - 1;
if (window.obj1776_onTap_runningActionsCount == 0) {
	obj1776_onTap_actionGroup1();
}
}




















};
obj1776_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1776_onTap_activeActionGroupIndex = -1;
		$("#obj1776").trigger("obj1776_onTap_ended");
		
		return;
	}
	window.obj1776_onTap_activeActionGroupIndex = 1;
	





















};
obj1773_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1773_onTap_activeActionGroupIndex = -1;
		$("#obj1773").trigger("obj1773_onTap_ended");
		
		return;
	}
	window.obj1773_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1775();
function goToPage_1775() {
	window.obj1773_onTap_runningActionsCount = obj1773_onTap_runningActionsCount + 1;
	$("#anchor78")[0].click();
	window.obj1773_onTap_runningActionsCount = window.obj1773_onTap_runningActionsCount - 1;
if (window.obj1773_onTap_runningActionsCount == 0) {
	obj1773_onTap_actionGroup1();
}
}




















};
obj1773_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1773_onTap_activeActionGroupIndex = -1;
		$("#obj1773").trigger("obj1773_onTap_ended");
		
		return;
	}
	window.obj1773_onTap_activeActionGroupIndex = 1;
	





















};
obj1770_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1770_onTap_activeActionGroupIndex = -1;
		$("#obj1770").trigger("obj1770_onTap_ended");
		
		return;
	}
	window.obj1770_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1772();
function goToPage_1772() {
	window.obj1770_onTap_runningActionsCount = obj1770_onTap_runningActionsCount + 1;
	$("#anchor79")[0].click();
	window.obj1770_onTap_runningActionsCount = window.obj1770_onTap_runningActionsCount - 1;
if (window.obj1770_onTap_runningActionsCount == 0) {
	obj1770_onTap_actionGroup1();
}
}




















};
obj1770_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1770_onTap_activeActionGroupIndex = -1;
		$("#obj1770").trigger("obj1770_onTap_ended");
		
		return;
	}
	window.obj1770_onTap_activeActionGroupIndex = 1;
	





















};
obj1767_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1767_onTap_activeActionGroupIndex = -1;
		$("#obj1767").trigger("obj1767_onTap_ended");
		
		return;
	}
	window.obj1767_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1769();
function goToPage_1769() {
	window.obj1767_onTap_runningActionsCount = obj1767_onTap_runningActionsCount + 1;
	$("#anchor80")[0].click();
	window.obj1767_onTap_runningActionsCount = window.obj1767_onTap_runningActionsCount - 1;
if (window.obj1767_onTap_runningActionsCount == 0) {
	obj1767_onTap_actionGroup1();
}
}




















};
obj1767_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1767_onTap_activeActionGroupIndex = -1;
		$("#obj1767").trigger("obj1767_onTap_ended");
		
		return;
	}
	window.obj1767_onTap_activeActionGroupIndex = 1;
	





















};
obj1764_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1764_onTap_activeActionGroupIndex = -1;
		$("#obj1764").trigger("obj1764_onTap_ended");
		
		return;
	}
	window.obj1764_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1766();
function goToPage_1766() {
	window.obj1764_onTap_runningActionsCount = obj1764_onTap_runningActionsCount + 1;
	$("#anchor81")[0].click();
	window.obj1764_onTap_runningActionsCount = window.obj1764_onTap_runningActionsCount - 1;
if (window.obj1764_onTap_runningActionsCount == 0) {
	obj1764_onTap_actionGroup1();
}
}




















};
obj1764_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1764_onTap_activeActionGroupIndex = -1;
		$("#obj1764").trigger("obj1764_onTap_ended");
		
		return;
	}
	window.obj1764_onTap_activeActionGroupIndex = 1;
	





















};
obj1794_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1794_onTap_activeActionGroupIndex = -1;
		$("#obj1794").trigger("obj1794_onTap_ended");
		
		return;
	}
	window.obj1794_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1796();
function goToPage_1796() {
	window.obj1794_onTap_runningActionsCount = obj1794_onTap_runningActionsCount + 1;
	$("#anchor82")[0].click();
	window.obj1794_onTap_runningActionsCount = window.obj1794_onTap_runningActionsCount - 1;
if (window.obj1794_onTap_runningActionsCount == 0) {
	obj1794_onTap_actionGroup1();
}
}




















};
obj1794_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1794_onTap_activeActionGroupIndex = -1;
		$("#obj1794").trigger("obj1794_onTap_ended");
		
		return;
	}
	window.obj1794_onTap_activeActionGroupIndex = 1;
	





















};
obj1791_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1791_onTap_activeActionGroupIndex = -1;
		$("#obj1791").trigger("obj1791_onTap_ended");
		
		return;
	}
	window.obj1791_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1793();
function goToPage_1793() {
	window.obj1791_onTap_runningActionsCount = obj1791_onTap_runningActionsCount + 1;
	$("#anchor83")[0].click();
	window.obj1791_onTap_runningActionsCount = window.obj1791_onTap_runningActionsCount - 1;
if (window.obj1791_onTap_runningActionsCount == 0) {
	obj1791_onTap_actionGroup1();
}
}




















};
obj1791_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1791_onTap_activeActionGroupIndex = -1;
		$("#obj1791").trigger("obj1791_onTap_ended");
		
		return;
	}
	window.obj1791_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































































































































































/*
 *
 *   obj842: Event Touch Down
 *
 */
$("#obj842").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj842_onTap_activeActionGroupIndex != -1) return;
var obj842_onTap_runningActionsCount = 0;
var obj842_onTap_loopCount = 0;
obj842_onTap_actionGroup0();
});








/*
 *
 *   obj1594: Event Touch Down
 *
 */
$("#obj1594").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1594_onTap_activeActionGroupIndex != -1) return;
var obj1594_onTap_runningActionsCount = 0;
var obj1594_onTap_loopCount = 0;
obj1594_onTap_actionGroup0();
});








/*
 *
 *   obj1600: Event Touch Down
 *
 */
$("#obj1600").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1600_onTap_activeActionGroupIndex != -1) return;
var obj1600_onTap_runningActionsCount = 0;
var obj1600_onTap_loopCount = 0;
obj1600_onTap_actionGroup0();
});








/*
 *
 *   obj1597: Event Touch Down
 *
 */
$("#obj1597").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1597_onTap_activeActionGroupIndex != -1) return;
var obj1597_onTap_runningActionsCount = 0;
var obj1597_onTap_loopCount = 0;
obj1597_onTap_actionGroup0();
});








/*
 *
 *   obj1612: Event Touch Down
 *
 */
$("#obj1612").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1612_onTap_activeActionGroupIndex != -1) return;
var obj1612_onTap_runningActionsCount = 0;
var obj1612_onTap_loopCount = 0;
obj1612_onTap_actionGroup0();
});








/*
 *
 *   obj1609: Event Touch Down
 *
 */
$("#obj1609").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1609_onTap_activeActionGroupIndex != -1) return;
var obj1609_onTap_runningActionsCount = 0;
var obj1609_onTap_loopCount = 0;
obj1609_onTap_actionGroup0();
});








/*
 *
 *   obj1603: Event Touch Down
 *
 */
$("#obj1603").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1603_onTap_activeActionGroupIndex != -1) return;
var obj1603_onTap_runningActionsCount = 0;
var obj1603_onTap_loopCount = 0;
obj1603_onTap_actionGroup0();
});








/*
 *
 *   obj1606: Event Touch Down
 *
 */
$("#obj1606").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1606_onTap_activeActionGroupIndex != -1) return;
var obj1606_onTap_runningActionsCount = 0;
var obj1606_onTap_loopCount = 0;
obj1606_onTap_actionGroup0();
});








/*
 *
 *   obj1618: Event Touch Down
 *
 */
$("#obj1618").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1618_onTap_activeActionGroupIndex != -1) return;
var obj1618_onTap_runningActionsCount = 0;
var obj1618_onTap_loopCount = 0;
obj1618_onTap_actionGroup0();
});








/*
 *
 *   obj1615: Event Touch Down
 *
 */
$("#obj1615").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1615_onTap_activeActionGroupIndex != -1) return;
var obj1615_onTap_runningActionsCount = 0;
var obj1615_onTap_loopCount = 0;
obj1615_onTap_actionGroup0();
});








/*
 *
 *   obj1621: Event Touch Down
 *
 */
$("#obj1621").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1621_onTap_activeActionGroupIndex != -1) return;
var obj1621_onTap_runningActionsCount = 0;
var obj1621_onTap_loopCount = 0;
obj1621_onTap_actionGroup0();
});








/*
 *
 *   obj1642: Event Touch Down
 *
 */
$("#obj1642").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1642_onTap_activeActionGroupIndex != -1) return;
var obj1642_onTap_runningActionsCount = 0;
var obj1642_onTap_loopCount = 0;
obj1642_onTap_actionGroup0();
});








/*
 *
 *   obj1639: Event Touch Down
 *
 */
$("#obj1639").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1639_onTap_activeActionGroupIndex != -1) return;
var obj1639_onTap_runningActionsCount = 0;
var obj1639_onTap_loopCount = 0;
obj1639_onTap_actionGroup0();
});








/*
 *
 *   obj1636: Event Touch Down
 *
 */
$("#obj1636").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1636_onTap_activeActionGroupIndex != -1) return;
var obj1636_onTap_runningActionsCount = 0;
var obj1636_onTap_loopCount = 0;
obj1636_onTap_actionGroup0();
});








/*
 *
 *   obj1633: Event Touch Down
 *
 */
$("#obj1633").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1633_onTap_activeActionGroupIndex != -1) return;
var obj1633_onTap_runningActionsCount = 0;
var obj1633_onTap_loopCount = 0;
obj1633_onTap_actionGroup0();
});








/*
 *
 *   obj1630: Event Touch Down
 *
 */
$("#obj1630").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1630_onTap_activeActionGroupIndex != -1) return;
var obj1630_onTap_runningActionsCount = 0;
var obj1630_onTap_loopCount = 0;
obj1630_onTap_actionGroup0();
});








/*
 *
 *   obj1627: Event Touch Down
 *
 */
$("#obj1627").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1627_onTap_activeActionGroupIndex != -1) return;
var obj1627_onTap_runningActionsCount = 0;
var obj1627_onTap_loopCount = 0;
obj1627_onTap_actionGroup0();
});








/*
 *
 *   obj1624: Event Touch Down
 *
 */
$("#obj1624").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1624_onTap_activeActionGroupIndex != -1) return;
var obj1624_onTap_runningActionsCount = 0;
var obj1624_onTap_loopCount = 0;
obj1624_onTap_actionGroup0();
});








/*
 *
 *   obj1653: Event Touch Down
 *
 */
$("#obj1653").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1653_onTap_activeActionGroupIndex != -1) return;
var obj1653_onTap_runningActionsCount = 0;
var obj1653_onTap_loopCount = 0;
obj1653_onTap_actionGroup0();
});








/*
 *
 *   obj1650: Event Touch Down
 *
 */
$("#obj1650").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1650_onTap_activeActionGroupIndex != -1) return;
var obj1650_onTap_runningActionsCount = 0;
var obj1650_onTap_loopCount = 0;
obj1650_onTap_actionGroup0();
});








/*
 *
 *   obj1647: Event Touch Down
 *
 */
$("#obj1647").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1647_onTap_activeActionGroupIndex != -1) return;
var obj1647_onTap_runningActionsCount = 0;
var obj1647_onTap_loopCount = 0;
obj1647_onTap_actionGroup0();
});








/*
 *
 *   obj1656: Event Touch Down
 *
 */
$("#obj1656").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1656_onTap_activeActionGroupIndex != -1) return;
var obj1656_onTap_runningActionsCount = 0;
var obj1656_onTap_loopCount = 0;
obj1656_onTap_actionGroup0();
});








/*
 *
 *   obj1689: Event Touch Down
 *
 */
$("#obj1689").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1689_onTap_activeActionGroupIndex != -1) return;
var obj1689_onTap_runningActionsCount = 0;
var obj1689_onTap_loopCount = 0;
obj1689_onTap_actionGroup0();
});








/*
 *
 *   obj1686: Event Touch Down
 *
 */
$("#obj1686").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1686_onTap_activeActionGroupIndex != -1) return;
var obj1686_onTap_runningActionsCount = 0;
var obj1686_onTap_loopCount = 0;
obj1686_onTap_actionGroup0();
});








/*
 *
 *   obj1683: Event Touch Down
 *
 */
$("#obj1683").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1683_onTap_activeActionGroupIndex != -1) return;
var obj1683_onTap_runningActionsCount = 0;
var obj1683_onTap_loopCount = 0;
obj1683_onTap_actionGroup0();
});








/*
 *
 *   obj1680: Event Touch Down
 *
 */
$("#obj1680").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1680_onTap_activeActionGroupIndex != -1) return;
var obj1680_onTap_runningActionsCount = 0;
var obj1680_onTap_loopCount = 0;
obj1680_onTap_actionGroup0();
});








/*
 *
 *   obj1677: Event Touch Down
 *
 */
$("#obj1677").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1677_onTap_activeActionGroupIndex != -1) return;
var obj1677_onTap_runningActionsCount = 0;
var obj1677_onTap_loopCount = 0;
obj1677_onTap_actionGroup0();
});








/*
 *
 *   obj1674: Event Touch Down
 *
 */
$("#obj1674").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1674_onTap_activeActionGroupIndex != -1) return;
var obj1674_onTap_runningActionsCount = 0;
var obj1674_onTap_loopCount = 0;
obj1674_onTap_actionGroup0();
});








/*
 *
 *   obj1671: Event Touch Down
 *
 */
$("#obj1671").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1671_onTap_activeActionGroupIndex != -1) return;
var obj1671_onTap_runningActionsCount = 0;
var obj1671_onTap_loopCount = 0;
obj1671_onTap_actionGroup0();
});








/*
 *
 *   obj1668: Event Touch Down
 *
 */
$("#obj1668").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1668_onTap_activeActionGroupIndex != -1) return;
var obj1668_onTap_runningActionsCount = 0;
var obj1668_onTap_loopCount = 0;
obj1668_onTap_actionGroup0();
});








/*
 *
 *   obj1718: Event Touch Down
 *
 */
$("#obj1718").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1718_onTap_activeActionGroupIndex != -1) return;
var obj1718_onTap_runningActionsCount = 0;
var obj1718_onTap_loopCount = 0;
obj1718_onTap_actionGroup0();
});








/*
 *
 *   obj1715: Event Touch Down
 *
 */
$("#obj1715").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1715_onTap_activeActionGroupIndex != -1) return;
var obj1715_onTap_runningActionsCount = 0;
var obj1715_onTap_loopCount = 0;
obj1715_onTap_actionGroup0();
});








/*
 *
 *   obj1712: Event Touch Down
 *
 */
$("#obj1712").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1712_onTap_activeActionGroupIndex != -1) return;
var obj1712_onTap_runningActionsCount = 0;
var obj1712_onTap_loopCount = 0;
obj1712_onTap_actionGroup0();
});








/*
 *
 *   obj1709: Event Touch Down
 *
 */
$("#obj1709").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1709_onTap_activeActionGroupIndex != -1) return;
var obj1709_onTap_runningActionsCount = 0;
var obj1709_onTap_loopCount = 0;
obj1709_onTap_actionGroup0();
});








/*
 *
 *   obj1706: Event Touch Down
 *
 */
$("#obj1706").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1706_onTap_activeActionGroupIndex != -1) return;
var obj1706_onTap_runningActionsCount = 0;
var obj1706_onTap_loopCount = 0;
obj1706_onTap_actionGroup0();
});








/*
 *
 *   obj1703: Event Touch Down
 *
 */
$("#obj1703").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1703_onTap_activeActionGroupIndex != -1) return;
var obj1703_onTap_runningActionsCount = 0;
var obj1703_onTap_loopCount = 0;
obj1703_onTap_actionGroup0();
});








/*
 *
 *   obj1700: Event Touch Down
 *
 */
$("#obj1700").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1700_onTap_activeActionGroupIndex != -1) return;
var obj1700_onTap_runningActionsCount = 0;
var obj1700_onTap_loopCount = 0;
obj1700_onTap_actionGroup0();
});








/*
 *
 *   obj1697: Event Touch Down
 *
 */
$("#obj1697").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1697_onTap_activeActionGroupIndex != -1) return;
var obj1697_onTap_runningActionsCount = 0;
var obj1697_onTap_loopCount = 0;
obj1697_onTap_actionGroup0();
});








/*
 *
 *   obj1694: Event Touch Down
 *
 */
$("#obj1694").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1694_onTap_activeActionGroupIndex != -1) return;
var obj1694_onTap_runningActionsCount = 0;
var obj1694_onTap_loopCount = 0;
obj1694_onTap_actionGroup0();
});








/*
 *
 *   obj1729: Event Touch Down
 *
 */
$("#obj1729").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1729_onTap_activeActionGroupIndex != -1) return;
var obj1729_onTap_runningActionsCount = 0;
var obj1729_onTap_loopCount = 0;
obj1729_onTap_actionGroup0();
});








/*
 *
 *   obj1756: Event Touch Down
 *
 */
$("#obj1756").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1756_onTap_activeActionGroupIndex != -1) return;
var obj1756_onTap_runningActionsCount = 0;
var obj1756_onTap_loopCount = 0;
obj1756_onTap_actionGroup0();
});








/*
 *
 *   obj1753: Event Touch Down
 *
 */
$("#obj1753").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1753_onTap_activeActionGroupIndex != -1) return;
var obj1753_onTap_runningActionsCount = 0;
var obj1753_onTap_loopCount = 0;
obj1753_onTap_actionGroup0();
});








/*
 *
 *   obj1750: Event Touch Down
 *
 */
$("#obj1750").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1750_onTap_activeActionGroupIndex != -1) return;
var obj1750_onTap_runningActionsCount = 0;
var obj1750_onTap_loopCount = 0;
obj1750_onTap_actionGroup0();
});








/*
 *
 *   obj1747: Event Touch Down
 *
 */
$("#obj1747").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1747_onTap_activeActionGroupIndex != -1) return;
var obj1747_onTap_runningActionsCount = 0;
var obj1747_onTap_loopCount = 0;
obj1747_onTap_actionGroup0();
});








/*
 *
 *   obj1744: Event Touch Down
 *
 */
$("#obj1744").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1744_onTap_activeActionGroupIndex != -1) return;
var obj1744_onTap_runningActionsCount = 0;
var obj1744_onTap_loopCount = 0;
obj1744_onTap_actionGroup0();
});








/*
 *
 *   obj1741: Event Touch Down
 *
 */
$("#obj1741").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1741_onTap_activeActionGroupIndex != -1) return;
var obj1741_onTap_runningActionsCount = 0;
var obj1741_onTap_loopCount = 0;
obj1741_onTap_actionGroup0();
});








/*
 *
 *   obj1738: Event Touch Down
 *
 */
$("#obj1738").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1738_onTap_activeActionGroupIndex != -1) return;
var obj1738_onTap_runningActionsCount = 0;
var obj1738_onTap_loopCount = 0;
obj1738_onTap_actionGroup0();
});








/*
 *
 *   obj1735: Event Touch Down
 *
 */
$("#obj1735").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1735_onTap_activeActionGroupIndex != -1) return;
var obj1735_onTap_runningActionsCount = 0;
var obj1735_onTap_loopCount = 0;
obj1735_onTap_actionGroup0();
});








/*
 *
 *   obj1732: Event Touch Down
 *
 */
$("#obj1732").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1732_onTap_activeActionGroupIndex != -1) return;
var obj1732_onTap_runningActionsCount = 0;
var obj1732_onTap_loopCount = 0;
obj1732_onTap_actionGroup0();
});








/*
 *
 *   obj1788: Event Touch Down
 *
 */
$("#obj1788").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1788_onTap_activeActionGroupIndex != -1) return;
var obj1788_onTap_runningActionsCount = 0;
var obj1788_onTap_loopCount = 0;
obj1788_onTap_actionGroup0();
});








/*
 *
 *   obj1785: Event Touch Down
 *
 */
$("#obj1785").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1785_onTap_activeActionGroupIndex != -1) return;
var obj1785_onTap_runningActionsCount = 0;
var obj1785_onTap_loopCount = 0;
obj1785_onTap_actionGroup0();
});








/*
 *
 *   obj1782: Event Touch Down
 *
 */
$("#obj1782").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1782_onTap_activeActionGroupIndex != -1) return;
var obj1782_onTap_runningActionsCount = 0;
var obj1782_onTap_loopCount = 0;
obj1782_onTap_actionGroup0();
});








/*
 *
 *   obj1779: Event Touch Down
 *
 */
$("#obj1779").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1779_onTap_activeActionGroupIndex != -1) return;
var obj1779_onTap_runningActionsCount = 0;
var obj1779_onTap_loopCount = 0;
obj1779_onTap_actionGroup0();
});








/*
 *
 *   obj1776: Event Touch Down
 *
 */
$("#obj1776").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1776_onTap_activeActionGroupIndex != -1) return;
var obj1776_onTap_runningActionsCount = 0;
var obj1776_onTap_loopCount = 0;
obj1776_onTap_actionGroup0();
});








/*
 *
 *   obj1773: Event Touch Down
 *
 */
$("#obj1773").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1773_onTap_activeActionGroupIndex != -1) return;
var obj1773_onTap_runningActionsCount = 0;
var obj1773_onTap_loopCount = 0;
obj1773_onTap_actionGroup0();
});








/*
 *
 *   obj1770: Event Touch Down
 *
 */
$("#obj1770").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1770_onTap_activeActionGroupIndex != -1) return;
var obj1770_onTap_runningActionsCount = 0;
var obj1770_onTap_loopCount = 0;
obj1770_onTap_actionGroup0();
});








/*
 *
 *   obj1767: Event Touch Down
 *
 */
$("#obj1767").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1767_onTap_activeActionGroupIndex != -1) return;
var obj1767_onTap_runningActionsCount = 0;
var obj1767_onTap_loopCount = 0;
obj1767_onTap_actionGroup0();
});








/*
 *
 *   obj1764: Event Touch Down
 *
 */
$("#obj1764").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1764_onTap_activeActionGroupIndex != -1) return;
var obj1764_onTap_runningActionsCount = 0;
var obj1764_onTap_loopCount = 0;
obj1764_onTap_actionGroup0();
});








/*
 *
 *   obj1794: Event Touch Down
 *
 */
$("#obj1794").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1794_onTap_activeActionGroupIndex != -1) return;
var obj1794_onTap_runningActionsCount = 0;
var obj1794_onTap_loopCount = 0;
obj1794_onTap_actionGroup0();
});








/*
 *
 *   obj1791: Event Touch Down
 *
 */
$("#obj1791").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1791_onTap_activeActionGroupIndex != -1) return;
var obj1791_onTap_runningActionsCount = 0;
var obj1791_onTap_loopCount = 0;
obj1791_onTap_actionGroup0();
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
	
$("#obj52").trigger('SCEventShow');
$("#obj53").trigger('SCEventShow');
$("#obj54").trigger('SCEventShow');
$("#obj55").trigger('SCEventShow');
$("#obj56").trigger('SCEventShow');
$("#obj57").trigger('SCEventShow');
$("#obj58").trigger('SCEventShow');
$("#obj59").trigger('SCEventShow');
$("#obj60").trigger('SCEventShow');
$("#obj61").trigger('SCEventShow');
$("#obj62").trigger('SCEventShow');
$("#obj63").trigger('SCEventShow');
$("#obj64").trigger('SCEventShow');
$("#obj65").trigger('SCEventShow');
$("#obj66").trigger('SCEventShow');
$("#obj67").trigger('SCEventShow');
$("#obj68").trigger('SCEventShow');
$("#obj69").trigger('SCEventShow');
$("#obj70").trigger('SCEventShow');
$("#obj71").trigger('SCEventShow');
$("#obj1573").trigger('SCEventShow');
$("#obj842").trigger('SCEventShow');
$("#obj1594").trigger('SCEventShow');
$("#obj1600").trigger('SCEventShow');
$("#obj1597").trigger('SCEventShow');
$("#obj1612").trigger('SCEventShow');
$("#obj1609").trigger('SCEventShow');
$("#obj1603").trigger('SCEventShow');
$("#obj1606").trigger('SCEventShow');
$("#obj1618").trigger('SCEventShow');
$("#obj1615").trigger('SCEventShow');
$("#obj1621").trigger('SCEventShow');
$("#obj1642").trigger('SCEventShow');
$("#obj1639").trigger('SCEventShow');
$("#obj1636").trigger('SCEventShow');
$("#obj1633").trigger('SCEventShow');
$("#obj1630").trigger('SCEventShow');
$("#obj1627").trigger('SCEventShow');
$("#obj1624").trigger('SCEventShow');
$("#obj1653").trigger('SCEventShow');
$("#obj1650").trigger('SCEventShow');
$("#obj1647").trigger('SCEventShow');
$("#obj1656").trigger('SCEventShow');
$("#obj1689").trigger('SCEventShow');
$("#obj1686").trigger('SCEventShow');
$("#obj1683").trigger('SCEventShow');
$("#obj1680").trigger('SCEventShow');
$("#obj1677").trigger('SCEventShow');
$("#obj1674").trigger('SCEventShow');
$("#obj1671").trigger('SCEventShow');
$("#obj1668").trigger('SCEventShow');
$("#obj1718").trigger('SCEventShow');
$("#obj1715").trigger('SCEventShow');
$("#obj1712").trigger('SCEventShow');
$("#obj1709").trigger('SCEventShow');
$("#obj1706").trigger('SCEventShow');
$("#obj1703").trigger('SCEventShow');
$("#obj1700").trigger('SCEventShow');
$("#obj1697").trigger('SCEventShow');
$("#obj1694").trigger('SCEventShow');
$("#obj1729").trigger('SCEventShow');
$("#obj1756").trigger('SCEventShow');
$("#obj1753").trigger('SCEventShow');
$("#obj1750").trigger('SCEventShow');
$("#obj1747").trigger('SCEventShow');
$("#obj1744").trigger('SCEventShow');
$("#obj1741").trigger('SCEventShow');
$("#obj1738").trigger('SCEventShow');
$("#obj1735").trigger('SCEventShow');
$("#obj1732").trigger('SCEventShow');
$("#obj1788").trigger('SCEventShow');
$("#obj1785").trigger('SCEventShow');
$("#obj1782").trigger('SCEventShow');
$("#obj1779").trigger('SCEventShow');
$("#obj1776").trigger('SCEventShow');
$("#obj1773").trigger('SCEventShow');
$("#obj1770").trigger('SCEventShow');
$("#obj1767").trigger('SCEventShow');
$("#obj1764").trigger('SCEventShow');
$("#obj1794").trigger('SCEventShow');
$("#obj1791").trigger('SCEventShow');
$("#obj2184").trigger('SCEventShow');
$("#obj2186").trigger('SCEventShow');
$("#obj2188").trigger('SCEventShow');
$("#obj2193").trigger('SCEventShow');
$("#obj2195").trigger('SCEventShow');
$("#obj2197").trigger('SCEventShow');
	
});