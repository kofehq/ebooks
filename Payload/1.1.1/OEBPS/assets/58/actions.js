pubcoder.projectID = pubcoder.projectID || "9BAFAFFC54C447E991DC838D64F52FA6";
pubcoder.project.id = pubcoder.project.id || "9BAFAFFC54C447E991DC838D64F52FA6";
pubcoder.project.title = pubcoder.project.title || "210721_a arte muda da fuga";
pubcoder.page.id = pubcoder.page.id || 302;
pubcoder.page.title = pubcoder.page.title || "58";
pubcoder.page.number = pubcoder.page.number || 58;
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
var obj2482_onTap_activeActionGroupIndex = -1;
var obj2482_onTap_runningActionsCount = 0;
var obj2482_onTap_loopCount = 0;
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
		
obj2482_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2482_onTap_activeActionGroupIndex = -1;
		$("#obj2482").trigger("obj2482_onTap_ended");
		
		return;
	}
	window.obj2482_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2484();
function goToPage_2484() {
	window.obj2482_onTap_runningActionsCount = obj2482_onTap_runningActionsCount + 1;
	$("#anchor176")[0].click();
	window.obj2482_onTap_runningActionsCount = window.obj2482_onTap_runningActionsCount - 1;
if (window.obj2482_onTap_runningActionsCount == 0) {
	obj2482_onTap_actionGroup1();
}
}




















};
obj2482_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2482_onTap_activeActionGroupIndex = -1;
		$("#obj2482").trigger("obj2482_onTap_ended");
		
		return;
	}
	window.obj2482_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



















/*
 *
 *   obj2482: Event Touch Down
 *
 */
$("#obj2482").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2482_onTap_activeActionGroupIndex != -1) return;
var obj2482_onTap_runningActionsCount = 0;
var obj2482_onTap_loopCount = 0;
obj2482_onTap_actionGroup0();
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
	
$("#obj303").trigger('SCEventShow');
$("#obj304").trigger('SCEventShow');
$("#obj2482").trigger('SCEventShow');
	
});