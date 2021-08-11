pubcoder.projectID = pubcoder.projectID || "9BAFAFFC54C447E991DC838D64F52FA6";
pubcoder.project.id = pubcoder.project.id || "9BAFAFFC54C447E991DC838D64F52FA6";
pubcoder.project.title = pubcoder.project.title || "210721_a arte muda da fuga";
pubcoder.page.id = pubcoder.page.id || 664;
pubcoder.page.title = pubcoder.page.title || "138";
pubcoder.page.number = pubcoder.page.number || 138;
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
var obj2572_onTap_activeActionGroupIndex = -1;
var obj2572_onTap_runningActionsCount = 0;
var obj2572_onTap_loopCount = 0;
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
		
obj2572_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2572_onTap_activeActionGroupIndex = -1;
		$("#obj2572").trigger("obj2572_onTap_ended");
		
		return;
	}
	window.obj2572_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2574();
function goToPage_2574() {
	window.obj2572_onTap_runningActionsCount = obj2572_onTap_runningActionsCount + 1;
	$("#anchor241")[0].click();
	window.obj2572_onTap_runningActionsCount = window.obj2572_onTap_runningActionsCount - 1;
if (window.obj2572_onTap_runningActionsCount == 0) {
	obj2572_onTap_actionGroup1();
}
}




















};
obj2572_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2572_onTap_activeActionGroupIndex = -1;
		$("#obj2572").trigger("obj2572_onTap_ended");
		
		return;
	}
	window.obj2572_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



















/*
 *
 *   obj2572: Event Touch Down
 *
 */
$("#obj2572").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2572_onTap_activeActionGroupIndex != -1) return;
var obj2572_onTap_runningActionsCount = 0;
var obj2572_onTap_loopCount = 0;
obj2572_onTap_actionGroup0();
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
	
$("#obj665").trigger('SCEventShow');
$("#obj666").trigger('SCEventShow');
$("#obj2572").trigger('SCEventShow');
	
});