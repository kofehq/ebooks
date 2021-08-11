pubcoder.projectID = pubcoder.projectID || "9BAFAFFC54C447E991DC838D64F52FA6";
pubcoder.project.id = pubcoder.project.id || "9BAFAFFC54C447E991DC838D64F52FA6";
pubcoder.project.title = pubcoder.project.title || "210721_a arte muda da fuga";
pubcoder.page.id = pubcoder.page.id || 542;
pubcoder.page.title = pubcoder.page.title || "110";
pubcoder.page.number = pubcoder.page.number || 110;
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
var obj2539_onTap_activeActionGroupIndex = -1;
var obj2539_onTap_runningActionsCount = 0;
var obj2539_onTap_loopCount = 0;
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
		
obj2539_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2539_onTap_activeActionGroupIndex = -1;
		$("#obj2539").trigger("obj2539_onTap_ended");
		
		return;
	}
	window.obj2539_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2541();
function goToPage_2541() {
	window.obj2539_onTap_runningActionsCount = obj2539_onTap_runningActionsCount + 1;
	$("#anchor218")[0].click();
	window.obj2539_onTap_runningActionsCount = window.obj2539_onTap_runningActionsCount - 1;
if (window.obj2539_onTap_runningActionsCount == 0) {
	obj2539_onTap_actionGroup1();
}
}




















};
obj2539_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2539_onTap_activeActionGroupIndex = -1;
		$("#obj2539").trigger("obj2539_onTap_ended");
		
		return;
	}
	window.obj2539_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



















/*
 *
 *   obj2539: Event Touch Down
 *
 */
$("#obj2539").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2539_onTap_activeActionGroupIndex != -1) return;
var obj2539_onTap_runningActionsCount = 0;
var obj2539_onTap_loopCount = 0;
obj2539_onTap_actionGroup0();
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
	
$("#obj543").trigger('SCEventShow');
$("#obj544").trigger('SCEventShow');
$("#obj2539").trigger('SCEventShow');
	
});