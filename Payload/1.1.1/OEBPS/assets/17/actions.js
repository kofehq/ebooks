pubcoder.projectID = pubcoder.projectID || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.id = pubcoder.project.id || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.title = pubcoder.project.title || "210723_Desaforismos";
pubcoder.page.id = pubcoder.page.id || 2006;
pubcoder.page.title = pubcoder.page.title || "17";
pubcoder.page.number = pubcoder.page.number || 17;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj4392_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj2008_onLoad_activeActionGroupIndex = -1;
var obj2008_onLoad_runningActionsCount = 0;
var obj2008_onLoad_loopCount = 0;
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
	
initAnimation_4392();
function initAnimation_4392()
{
        var targetObjectId = "#obj4392";
        var widthSCAnimationObject = 970;
        var heightSCAnimationObject = 1008;
		var framesPerSecond = 12;
		var howManyLoops = 1;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj4392 = $("#")[0];
        window.hasAudioTrack_obj4392 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj4392_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj4392 = $(targetObjectId).spritespin("api");
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
		
obj2008_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2008_onLoad_activeActionGroupIndex = -1;
		$("#obj2008").trigger("obj2008_onLoad_ended");
		
		return;
	}
	window.obj2008_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_4293();
function wait_4293() {
	window.obj2008_onLoad_runningActionsCount = obj2008_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2008_onLoad_runningActionsCount = window.obj2008_onLoad_runningActionsCount - 1;
if (window.obj2008_onLoad_runningActionsCount == 0) {
	obj2008_onLoad_actionGroup1();
}
	}, 2000);
}












};
obj2008_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2008_onLoad_activeActionGroupIndex = -1;
		$("#obj2008").trigger("obj2008_onLoad_ended");
		
		return;
	}
	window.obj2008_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj2008 
show_2017();
function show_2017() {
	var element = "#obj2008";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2008_onLoad_runningActionsCount = obj2008_onLoad_runningActionsCount + 1;

	var animationType = "fadeInUp";
	var animationDurationMs = 2000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2008_onLoad_runningActionsCount = window.obj2008_onLoad_runningActionsCount - 1;
if (window.obj2008_onLoad_runningActionsCount == 0) {
	obj2008_onLoad_actionGroup2();
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
		window.obj2008_onLoad_runningActionsCount = window.obj2008_onLoad_runningActionsCount - 1;
if (window.obj2008_onLoad_runningActionsCount == 0) {
	obj2008_onLoad_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(2000, function() {
	// 		setTimeout(function() {
	// 			window.obj2008_onLoad_runningActionsCount = window.obj2008_onLoad_runningActionsCount - 1;
if (window.obj2008_onLoad_runningActionsCount == 0) {
	obj2008_onLoad_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2008_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2008_onLoad_activeActionGroupIndex = -1;
		$("#obj2008").trigger("obj2008_onLoad_ended");
		
		return;
	}
	window.obj2008_onLoad_activeActionGroupIndex = 2;
	


//	action: playAnimation 
//	target: obj4392 
playAnimation_4291();
function playAnimation_4291() {
	var targetObjectId = "#obj4392";
	var targetObject = $(targetObjectId)[0];
	window.obj2008_onLoad_runningActionsCount = obj2008_onLoad_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj2008_onLoad_runningActionsCount = window.obj2008_onLoad_runningActionsCount - 1;
if (window.obj2008_onLoad_runningActionsCount == 0) {
	obj2008_onLoad_actionGroup3();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj4392 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj4392;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj4392.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj4392").one("obj4392_animation_ended",function(event) {
		    window.obj2008_onLoad_runningActionsCount = window.obj2008_onLoad_runningActionsCount - 1;
if (window.obj2008_onLoad_runningActionsCount == 0) {
	obj2008_onLoad_actionGroup3();
}
		});
	}
 }


















};
obj2008_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2008_onLoad_activeActionGroupIndex = -1;
		$("#obj2008").trigger("obj2008_onLoad_ended");
		
		return;
	}
	window.obj2008_onLoad_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj4597 
show_4601();
function show_4601() {
	var element = "#obj4597";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2008_onLoad_runningActionsCount = obj2008_onLoad_runningActionsCount + 1;

	var animationType = "swing";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2008_onLoad_runningActionsCount = window.obj2008_onLoad_runningActionsCount - 1;
if (window.obj2008_onLoad_runningActionsCount == 0) {
	obj2008_onLoad_actionGroup4();
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
		window.obj2008_onLoad_runningActionsCount = window.obj2008_onLoad_runningActionsCount - 1;
if (window.obj2008_onLoad_runningActionsCount == 0) {
	obj2008_onLoad_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj2008_onLoad_runningActionsCount = window.obj2008_onLoad_runningActionsCount - 1;
if (window.obj2008_onLoad_runningActionsCount == 0) {
	obj2008_onLoad_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2008_onLoad_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2008_onLoad_activeActionGroupIndex = -1;
		$("#obj2008").trigger("obj2008_onLoad_ended");
		
		return;
	}
	window.obj2008_onLoad_activeActionGroupIndex = 4;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj2008: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2008_onLoad_activeActionGroupIndex != -1) return;
var obj2008_onLoad_runningActionsCount = 0;
var obj2008_onLoad_loopCount = 0;
obj2008_onLoad_actionGroup0();
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
	
$("#obj2011").trigger('SCEventShow');
$("#obj4392").trigger('SCEventShow');
	
});