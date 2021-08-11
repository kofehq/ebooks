pubcoder.projectID = pubcoder.projectID || "9BAFAFFC54C447E991DC838D64F52FA6";
pubcoder.project.id = pubcoder.project.id || "9BAFAFFC54C447E991DC838D64F52FA6";
pubcoder.project.title = pubcoder.project.title || "210721_a arte muda da fuga";
pubcoder.page.id = pubcoder.page.id || 305;
pubcoder.page.title = pubcoder.page.title || "59";
pubcoder.page.number = pubcoder.page.number || 59;
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
var obj2290_onTap_activeActionGroupIndex = -1;
var obj2290_onTap_runningActionsCount = 0;
var obj2290_onTap_loopCount = 0;
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
		
obj2290_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2290_onTap_activeActionGroupIndex = -1;
		$("#obj2290").trigger("obj2290_onTap_ended");
		
		return;
	}
	window.obj2290_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2292();
function goToPage_2292() {
	window.obj2290_onTap_runningActionsCount = obj2290_onTap_runningActionsCount + 1;
	$("#anchor177")[0].click();
	window.obj2290_onTap_runningActionsCount = window.obj2290_onTap_runningActionsCount - 1;
if (window.obj2290_onTap_runningActionsCount == 0) {
	obj2290_onTap_actionGroup1();
}
}




















};
obj2290_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2290_onTap_activeActionGroupIndex = -1;
		$("#obj2290").trigger("obj2290_onTap_ended");
		
		return;
	}
	window.obj2290_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



































/*
 *
 *   obj2290: Event Touch Down
 *
 */
$("#obj2290").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2290_onTap_activeActionGroupIndex != -1) return;
var obj2290_onTap_runningActionsCount = 0;
var obj2290_onTap_loopCount = 0;
obj2290_onTap_actionGroup0();
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
	
$("#obj306").trigger('SCEventShow');
$("#obj307").trigger('SCEventShow');
$("#obj308").trigger('SCEventShow');
$("#obj309").trigger('SCEventShow');
$("#obj2290").trigger('SCEventShow');
	
});