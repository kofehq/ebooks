pubcoder.projectID = pubcoder.projectID || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.id = pubcoder.project.id || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.title = pubcoder.project.title || "210723_Desaforismos";
pubcoder.page.id = pubcoder.page.id || 924;
pubcoder.page.title = pubcoder.page.title || "3";
pubcoder.page.number = pubcoder.page.number || 3;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj927_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj927_onLoad_activeActionGroupIndex = -1;
var obj927_onLoad_runningActionsCount = 0;
var obj927_onLoad_loopCount = 0;
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
	
initAnimation_927();
function initAnimation_927()
{
        var targetObjectId = "#obj927";
        var widthSCAnimationObject = 982;
        var heightSCAnimationObject = 982;
		var framesPerSecond = 12;
		var howManyLoops = 1;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj927 = $("#")[0];
        window.hasAudioTrack_obj927 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj927_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj927 = $(targetObjectId).spritespin("api");
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
		
obj927_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj927_onLoad_activeActionGroupIndex = -1;
		$("#obj927").trigger("obj927_onLoad_ended");
		
		return;
	}
	window.obj927_onLoad_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj927 
playAnimation_1074();
function playAnimation_1074() {
	var targetObjectId = "#obj927";
	var targetObject = $(targetObjectId)[0];
	window.obj927_onLoad_runningActionsCount = obj927_onLoad_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj927_onLoad_runningActionsCount = window.obj927_onLoad_runningActionsCount - 1;
if (window.obj927_onLoad_runningActionsCount == 0) {
	obj927_onLoad_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj927 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj927;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj927.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj927").one("obj927_animation_ended",function(event) {
		    window.obj927_onLoad_runningActionsCount = window.obj927_onLoad_runningActionsCount - 1;
if (window.obj927_onLoad_runningActionsCount == 0) {
	obj927_onLoad_actionGroup1();
}
		});
	}
 }


















};
obj927_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj927_onLoad_activeActionGroupIndex = -1;
		$("#obj927").trigger("obj927_onLoad_ended");
		
		return;
	}
	window.obj927_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj927: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj927_onLoad_activeActionGroupIndex != -1) return;
var obj927_onLoad_runningActionsCount = 0;
var obj927_onLoad_loopCount = 0;
obj927_onLoad_actionGroup0();
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
	
$("#obj927").trigger('SCEventShow');
$("#obj5102").trigger('SCEventShow');
	
});