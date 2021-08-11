pubcoder.projectID = pubcoder.projectID || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.id = pubcoder.project.id || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.title = pubcoder.project.title || "210723_Desaforismos";
pubcoder.page.id = pubcoder.page.id || 2068;
pubcoder.page.title = pubcoder.page.title || "2";
pubcoder.page.number = pubcoder.page.number || 2;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj2071_animation_count = 0;
var obj5017_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj2071_onLoad_activeActionGroupIndex = -1;
var obj2071_onLoad_runningActionsCount = 0;
var obj2071_onLoad_loopCount = 0;
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
	
initAnimation_2071();
function initAnimation_2071()
{
        var targetObjectId = "#obj2071";
        var widthSCAnimationObject = 919;
        var heightSCAnimationObject = 918;
		var framesPerSecond = 24;
		var howManyLoops = 0;
		var backToFirstFrame = false;
        var isAnimationInfinite = true;
        window.audio_animation_obj2071 = $("#")[0];
        window.hasAudioTrack_obj2071 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj2071_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj2071 = $(targetObjectId).spritespin("api");
}
initAnimation_5017();
function initAnimation_5017()
{
        var targetObjectId = "#obj5017";
        var widthSCAnimationObject = 140;
        var heightSCAnimationObject = 43;
		var framesPerSecond = 24;
		var howManyLoops = 0;
		var backToFirstFrame = false;
        var isAnimationInfinite = true;
        window.audio_animation_obj5017 = $("#")[0];
        window.hasAudioTrack_obj5017 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5017_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5017 = $(targetObjectId).spritespin("api");
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
		
obj2071_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2071_onLoad_activeActionGroupIndex = -1;
		$("#obj2071").trigger("obj2071_onLoad_ended");
		
		return;
	}
	window.obj2071_onLoad_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5017 
playAnimation_5100();
function playAnimation_5100() {
	var targetObjectId = "#obj5017";
	var targetObject = $(targetObjectId)[0];
	window.obj2071_onLoad_runningActionsCount = obj2071_onLoad_runningActionsCount + 1;
	var isAnimationInfinite = true;
	if (isAnimationInfinite) {
		window.obj2071_onLoad_runningActionsCount = window.obj2071_onLoad_runningActionsCount - 1;
if (window.obj2071_onLoad_runningActionsCount == 0) {
	obj2071_onLoad_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5017 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5017;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5017.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5017").one("obj5017_animation_ended",function(event) {
		    window.obj2071_onLoad_runningActionsCount = window.obj2071_onLoad_runningActionsCount - 1;
if (window.obj2071_onLoad_runningActionsCount == 0) {
	obj2071_onLoad_actionGroup1();
}
		});
	}
 }


















};
obj2071_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2071_onLoad_activeActionGroupIndex = -1;
		$("#obj2071").trigger("obj2071_onLoad_ended");
		
		return;
	}
	window.obj2071_onLoad_activeActionGroupIndex = 1;
	


//	action: playAnimation 
//	target: obj2071 
playAnimation_2236();
function playAnimation_2236() {
	var targetObjectId = "#obj2071";
	var targetObject = $(targetObjectId)[0];
	window.obj2071_onLoad_runningActionsCount = obj2071_onLoad_runningActionsCount + 1;
	var isAnimationInfinite = true;
	if (isAnimationInfinite) {
		window.obj2071_onLoad_runningActionsCount = window.obj2071_onLoad_runningActionsCount - 1;
if (window.obj2071_onLoad_runningActionsCount == 0) {
	obj2071_onLoad_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj2071 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj2071;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj2071.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj2071").one("obj2071_animation_ended",function(event) {
		    window.obj2071_onLoad_runningActionsCount = window.obj2071_onLoad_runningActionsCount - 1;
if (window.obj2071_onLoad_runningActionsCount == 0) {
	obj2071_onLoad_actionGroup2();
}
		});
	}
 }


















};
obj2071_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2071_onLoad_activeActionGroupIndex = -1;
		$("#obj2071").trigger("obj2071_onLoad_ended");
		
		return;
	}
	window.obj2071_onLoad_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj2071: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2071_onLoad_activeActionGroupIndex != -1) return;
var obj2071_onLoad_runningActionsCount = 0;
var obj2071_onLoad_loopCount = 0;
obj2071_onLoad_actionGroup0();
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
	
$("#obj2069").trigger('SCEventShow');
$("#obj2071").trigger('SCEventShow');
$("#obj2098").trigger('SCEventShow');
$("#obj2102").trigger('SCEventShow');
$("#obj2104").trigger('SCEventShow');
$("#obj5017").trigger('SCEventShow');
	
});