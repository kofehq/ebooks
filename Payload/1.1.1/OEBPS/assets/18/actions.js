pubcoder.projectID = pubcoder.projectID || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.id = pubcoder.project.id || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.title = pubcoder.project.title || "210723_Desaforismos";
pubcoder.page.id = pubcoder.page.id || 1924;
pubcoder.page.title = pubcoder.page.title || "18";
pubcoder.page.number = pubcoder.page.number || 18;
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
var obj4504_onTap_activeActionGroupIndex = -1;
var obj4504_onTap_runningActionsCount = 0;
var obj4504_onTap_loopCount = 0;
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
		
obj4504_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4504_onTap_activeActionGroupIndex = -1;
		$("#obj4504").trigger("obj4504_onTap_ended");
		
		return;
	}
	window.obj4504_onTap_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj4492 
playAudio_4506();
function playAudio_4506() {
	window.obj4504_onTap_runningActionsCount = obj4504_onTap_runningActionsCount + 1;
	var myAudio = $("#obj4492")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj4504_onTap_runningActionsCount = window.obj4504_onTap_runningActionsCount - 1;
if (window.obj4504_onTap_runningActionsCount == 0) {
	obj4504_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4504_onTap_runningActionsCount = window.obj4504_onTap_runningActionsCount - 1;
if (window.obj4504_onTap_runningActionsCount == 0) {
	obj4504_onTap_actionGroup1();
}
	}
}








};
obj4504_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4504_onTap_activeActionGroupIndex = -1;
		$("#obj4504").trigger("obj4504_onTap_ended");
		
		return;
	}
	window.obj4504_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



























































/*
 *
 *   obj4504: Event Touch Down
 *
 */
$("#obj4504").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4504_onTap_activeActionGroupIndex != -1) return;
var obj4504_onTap_runningActionsCount = 0;
var obj4504_onTap_loopCount = 0;
obj4504_onTap_actionGroup0();
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
	
$("#obj1925").trigger('SCEventShow');
$("#obj1927").trigger('SCEventShow');
$("#obj1929").trigger('SCEventShow');
$("#obj4492").trigger('SCEventShow');
$("#obj4496").trigger('SCEventShow');
$("#obj4501").trigger('SCEventShow');
$("#obj4499").trigger('SCEventShow');
$("#obj4504").trigger('SCEventShow');
	
});