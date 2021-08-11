pubcoder.projectID = pubcoder.projectID || "9BAFAFFC54C447E991DC838D64F52FA6";
pubcoder.project.id = pubcoder.project.id || "9BAFAFFC54C447E991DC838D64F52FA6";
pubcoder.project.title = pubcoder.project.title || "210721_a arte muda da fuga";
pubcoder.page.id = pubcoder.page.id || 525;
pubcoder.page.title = pubcoder.page.title || "107";
pubcoder.page.number = pubcoder.page.number || 107;
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
var obj2353_onTap_activeActionGroupIndex = -1;
var obj2353_onTap_runningActionsCount = 0;
var obj2353_onTap_loopCount = 0;
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
		
obj2353_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2353_onTap_activeActionGroupIndex = -1;
		$("#obj2353").trigger("obj2353_onTap_ended");
		
		return;
	}
	window.obj2353_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2355();
function goToPage_2355() {
	window.obj2353_onTap_runningActionsCount = obj2353_onTap_runningActionsCount + 1;
	$("#anchor215")[0].click();
	window.obj2353_onTap_runningActionsCount = window.obj2353_onTap_runningActionsCount - 1;
if (window.obj2353_onTap_runningActionsCount == 0) {
	obj2353_onTap_actionGroup1();
}
}




















};
obj2353_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2353_onTap_activeActionGroupIndex = -1;
		$("#obj2353").trigger("obj2353_onTap_ended");
		
		return;
	}
	window.obj2353_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



































/*
 *
 *   obj2353: Event Touch Down
 *
 */
$("#obj2353").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2353_onTap_activeActionGroupIndex != -1) return;
var obj2353_onTap_runningActionsCount = 0;
var obj2353_onTap_loopCount = 0;
obj2353_onTap_actionGroup0();
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
	
$("#obj526").trigger('SCEventShow');
$("#obj527").trigger('SCEventShow');
$("#obj528").trigger('SCEventShow');
$("#obj529").trigger('SCEventShow');
$("#obj2353").trigger('SCEventShow');
	
});