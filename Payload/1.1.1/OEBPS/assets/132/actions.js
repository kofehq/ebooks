pubcoder.projectID = pubcoder.projectID || "9BAFAFFC54C447E991DC838D64F52FA6";
pubcoder.project.id = pubcoder.project.id || "9BAFAFFC54C447E991DC838D64F52FA6";
pubcoder.project.title = pubcoder.project.title || "210721_a arte muda da fuga";
pubcoder.page.id = pubcoder.page.id || 641;
pubcoder.page.title = pubcoder.page.title || "132";
pubcoder.page.number = pubcoder.page.number || 132;
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
var obj2566_onTap_activeActionGroupIndex = -1;
var obj2566_onTap_runningActionsCount = 0;
var obj2566_onTap_loopCount = 0;
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
		
obj2566_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2566_onTap_activeActionGroupIndex = -1;
		$("#obj2566").trigger("obj2566_onTap_ended");
		
		return;
	}
	window.obj2566_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2568();
function goToPage_2568() {
	window.obj2566_onTap_runningActionsCount = obj2566_onTap_runningActionsCount + 1;
	$("#anchor237")[0].click();
	window.obj2566_onTap_runningActionsCount = window.obj2566_onTap_runningActionsCount - 1;
if (window.obj2566_onTap_runningActionsCount == 0) {
	obj2566_onTap_actionGroup1();
}
}




















};
obj2566_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2566_onTap_activeActionGroupIndex = -1;
		$("#obj2566").trigger("obj2566_onTap_ended");
		
		return;
	}
	window.obj2566_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



















/*
 *
 *   obj2566: Event Touch Down
 *
 */
$("#obj2566").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2566_onTap_activeActionGroupIndex != -1) return;
var obj2566_onTap_runningActionsCount = 0;
var obj2566_onTap_loopCount = 0;
obj2566_onTap_actionGroup0();
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
	
$("#obj642").trigger('SCEventShow');
$("#obj643").trigger('SCEventShow');
$("#obj2566").trigger('SCEventShow');
	
});