pubcoder.projectID = pubcoder.projectID || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.id = pubcoder.project.id || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.title = pubcoder.project.title || "210723_Desaforismos";
pubcoder.page.id = pubcoder.page.id || 2930;
pubcoder.page.title = pubcoder.page.title || "11";
pubcoder.page.number = pubcoder.page.number || 11;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj2942_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj2942_onLoad_activeActionGroupIndex = -1;
var obj2942_onLoad_runningActionsCount = 0;
var obj2942_onLoad_loopCount = 0;
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
	
initAnimation_2942();
function initAnimation_2942()
{
        var targetObjectId = "#obj2942";
        var widthSCAnimationObject = 1992;
        var heightSCAnimationObject = 1002;
		var framesPerSecond = 12;
		var howManyLoops = 0;
		var backToFirstFrame = false;
        var isAnimationInfinite = true;
        window.audio_animation_obj2942 = $("#")[0];
        window.hasAudioTrack_obj2942 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj2942_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj2942 = $(targetObjectId).spritespin("api");
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
		
obj2942_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2942_onLoad_activeActionGroupIndex = -1;
		$("#obj2942").trigger("obj2942_onLoad_ended");
		
		return;
	}
	window.obj2942_onLoad_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj2942 
playAnimation_3549();
function playAnimation_3549() {
	var targetObjectId = "#obj2942";
	var targetObject = $(targetObjectId)[0];
	window.obj2942_onLoad_runningActionsCount = obj2942_onLoad_runningActionsCount + 1;
	var isAnimationInfinite = true;
	if (isAnimationInfinite) {
		window.obj2942_onLoad_runningActionsCount = window.obj2942_onLoad_runningActionsCount - 1;
if (window.obj2942_onLoad_runningActionsCount == 0) {
	obj2942_onLoad_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj2942 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj2942;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj2942.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj2942").one("obj2942_animation_ended",function(event) {
		    window.obj2942_onLoad_runningActionsCount = window.obj2942_onLoad_runningActionsCount - 1;
if (window.obj2942_onLoad_runningActionsCount == 0) {
	obj2942_onLoad_actionGroup1();
}
		});
	}
 }


















};
obj2942_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2942_onLoad_activeActionGroupIndex = -1;
		$("#obj2942").trigger("obj2942_onLoad_ended");
		
		return;
	}
	window.obj2942_onLoad_activeActionGroupIndex = 1;
	








//	action: wait
wait_3553();
function wait_3553() {
	window.obj2942_onLoad_runningActionsCount = obj2942_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2942_onLoad_runningActionsCount = window.obj2942_onLoad_runningActionsCount - 1;
if (window.obj2942_onLoad_runningActionsCount == 0) {
	obj2942_onLoad_actionGroup2();
}
	}, 3000);
}












};
obj2942_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2942_onLoad_activeActionGroupIndex = -1;
		$("#obj2942").trigger("obj2942_onLoad_ended");
		
		return;
	}
	window.obj2942_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj2938 
show_3550();
function show_3550() {
	var element = "#obj2938";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2942_onLoad_runningActionsCount = obj2942_onLoad_runningActionsCount + 1;

	var animationType = "fadeInUp";
	var animationDurationMs = 2000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2942_onLoad_runningActionsCount = window.obj2942_onLoad_runningActionsCount - 1;
if (window.obj2942_onLoad_runningActionsCount == 0) {
	obj2942_onLoad_actionGroup3();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj2942_onLoad_runningActionsCount = window.obj2942_onLoad_runningActionsCount - 1;
if (window.obj2942_onLoad_runningActionsCount == 0) {
	obj2942_onLoad_actionGroup3();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(2000, function() {
	// 		setTimeout(function() {
	// 			window.obj2942_onLoad_runningActionsCount = window.obj2942_onLoad_runningActionsCount - 1;
if (window.obj2942_onLoad_runningActionsCount == 0) {
	obj2942_onLoad_actionGroup3();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2942_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2942_onLoad_activeActionGroupIndex = -1;
		$("#obj2942").trigger("obj2942_onLoad_ended");
		
		return;
	}
	window.obj2942_onLoad_activeActionGroupIndex = 3;
	








//	action: wait
wait_3551();
function wait_3551() {
	window.obj2942_onLoad_runningActionsCount = obj2942_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2942_onLoad_runningActionsCount = window.obj2942_onLoad_runningActionsCount - 1;
if (window.obj2942_onLoad_runningActionsCount == 0) {
	obj2942_onLoad_actionGroup4();
}
	}, 2000);
}












};
obj2942_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2942_onLoad_activeActionGroupIndex = -1;
		$("#obj2942").trigger("obj2942_onLoad_ended");
		
		return;
	}
	window.obj2942_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	target: obj2940 
show_3552();
function show_3552() {
	var element = "#obj2940";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2942_onLoad_runningActionsCount = obj2942_onLoad_runningActionsCount + 1;

	var animationType = "fadeInUp";
	var animationDurationMs = 2000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2942_onLoad_runningActionsCount = window.obj2942_onLoad_runningActionsCount - 1;
if (window.obj2942_onLoad_runningActionsCount == 0) {
	obj2942_onLoad_actionGroup5();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj2942_onLoad_runningActionsCount = window.obj2942_onLoad_runningActionsCount - 1;
if (window.obj2942_onLoad_runningActionsCount == 0) {
	obj2942_onLoad_actionGroup5();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(2000, function() {
	// 		setTimeout(function() {
	// 			window.obj2942_onLoad_runningActionsCount = window.obj2942_onLoad_runningActionsCount - 1;
if (window.obj2942_onLoad_runningActionsCount == 0) {
	obj2942_onLoad_actionGroup5();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2942_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2942_onLoad_activeActionGroupIndex = -1;
		$("#obj2942").trigger("obj2942_onLoad_ended");
		
		return;
	}
	window.obj2942_onLoad_activeActionGroupIndex = 5;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj2942: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2942_onLoad_activeActionGroupIndex != -1) return;
var obj2942_onLoad_runningActionsCount = 0;
var obj2942_onLoad_loopCount = 0;
obj2942_onLoad_actionGroup0();
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
	
$("#obj2942").trigger('SCEventShow');
	
});