pubcoder.projectID = pubcoder.projectID || "9BAFAFFC54C447E991DC838D64F52FA6";
pubcoder.project.id = pubcoder.project.id || "9BAFAFFC54C447E991DC838D64F52FA6";
pubcoder.project.title = pubcoder.project.title || "210721_a arte muda da fuga";
pubcoder.page.id = pubcoder.page.id || 125;
pubcoder.page.title = pubcoder.page.title || "21";
pubcoder.page.number = pubcoder.page.number || 21;
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
var obj2236_onTap_activeActionGroupIndex = -1;
var obj2236_onTap_runningActionsCount = 0;
var obj2236_onTap_loopCount = 0;
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
		
obj2236_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2236_onTap_activeActionGroupIndex = -1;
		$("#obj2236").trigger("obj2236_onTap_ended");
		
		return;
	}
	window.obj2236_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2238();
function goToPage_2238() {
	window.obj2236_onTap_runningActionsCount = obj2236_onTap_runningActionsCount + 1;
	$("#anchor142")[0].click();
	window.obj2236_onTap_runningActionsCount = window.obj2236_onTap_runningActionsCount - 1;
if (window.obj2236_onTap_runningActionsCount == 0) {
	obj2236_onTap_actionGroup1();
}
}




















};
obj2236_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2236_onTap_activeActionGroupIndex = -1;
		$("#obj2236").trigger("obj2236_onTap_ended");
		
		return;
	}
	window.obj2236_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



























/*
 *
 *   obj2236: Event Touch Down
 *
 */
$("#obj2236").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2236_onTap_activeActionGroupIndex != -1) return;
var obj2236_onTap_runningActionsCount = 0;
var obj2236_onTap_loopCount = 0;
obj2236_onTap_actionGroup0();
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
	
$("#obj126").trigger('SCEventShow');
$("#obj127").trigger('SCEventShow');
$("#obj128").trigger('SCEventShow');
$("#obj2236").trigger('SCEventShow');
	
});