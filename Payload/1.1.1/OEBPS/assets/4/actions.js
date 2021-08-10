pubcoder.projectID = pubcoder.projectID || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.id = pubcoder.project.id || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.title = pubcoder.project.title || "210723_Desaforismos";
pubcoder.page.id = pubcoder.page.id || 1435;
pubcoder.page.title = pubcoder.page.title || "4";
pubcoder.page.number = pubcoder.page.number || 4;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj5188_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj5188_onLoad_activeActionGroupIndex = -1;
var obj5188_onLoad_runningActionsCount = 0;
var obj5188_onLoad_loopCount = 0;
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
	
initAnimation_5188();
function initAnimation_5188()
{
        var targetObjectId = "#obj5188";
        var widthSCAnimationObject = 184;
        var heightSCAnimationObject = 56;
		var framesPerSecond = 24;
		var howManyLoops = 0;
		var backToFirstFrame = false;
        var isAnimationInfinite = true;
        window.audio_animation_obj5188 = $("#")[0];
        window.hasAudioTrack_obj5188 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5188_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5188 = $(targetObjectId).spritespin("api");
}

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
		
obj5188_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5188_onLoad_activeActionGroupIndex = -1;
		$("#obj5188").trigger("obj5188_onLoad_ended");
		
		return;
	}
	window.obj5188_onLoad_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5188 
playAnimation_5272();
function playAnimation_5272() {
	var targetObjectId = "#obj5188";
	var targetObject = $(targetObjectId)[0];
	window.obj5188_onLoad_runningActionsCount = obj5188_onLoad_runningActionsCount + 1;
	var isAnimationInfinite = true;
	if (isAnimationInfinite) {
		window.obj5188_onLoad_runningActionsCount = window.obj5188_onLoad_runningActionsCount - 1;
if (window.obj5188_onLoad_runningActionsCount == 0) {
	obj5188_onLoad_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5188 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5188;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5188.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5188").one("obj5188_animation_ended",function(event) {
		    window.obj5188_onLoad_runningActionsCount = window.obj5188_onLoad_runningActionsCount - 1;
if (window.obj5188_onLoad_runningActionsCount == 0) {
	obj5188_onLoad_actionGroup1();
}
		});
	}
 }


















};
obj5188_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5188_onLoad_activeActionGroupIndex = -1;
		$("#obj5188").trigger("obj5188_onLoad_ended");
		
		return;
	}
	window.obj5188_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





































/*
 *
 *   obj5188: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5188_onLoad_activeActionGroupIndex != -1) return;
var obj5188_onLoad_runningActionsCount = 0;
var obj5188_onLoad_loopCount = 0;
obj5188_onLoad_actionGroup0();
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
	
$("#obj1437").trigger('SCEventShow');
$("#obj1439").trigger('SCEventShow');
$("#obj1445").trigger('SCEventShow');
$("#obj1447").trigger('SCEventShow');
$("#obj5188").trigger('SCEventShow');
	
});