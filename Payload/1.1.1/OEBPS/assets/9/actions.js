pubcoder.projectID = pubcoder.projectID || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.id = pubcoder.project.id || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.title = pubcoder.project.title || "210723_Desaforismos";
pubcoder.page.id = pubcoder.page.id || 2450;
pubcoder.page.title = pubcoder.page.title || "9";
pubcoder.page.number = pubcoder.page.number || 9;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj2459_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj2459_onLoad_activeActionGroupIndex = -1;
var obj2459_onLoad_runningActionsCount = 0;
var obj2459_onLoad_loopCount = 0;
var obj2457_onTap_activeActionGroupIndex = -1;
var obj2457_onTap_runningActionsCount = 0;
var obj2457_onTap_loopCount = 0;
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
	
initAnimation_2459();
function initAnimation_2459()
{
        var targetObjectId = "#obj2459";
        var widthSCAnimationObject = 1972;
        var heightSCAnimationObject = 1008;
		var framesPerSecond = 12;
		var howManyLoops = 0;
		var backToFirstFrame = false;
        var isAnimationInfinite = true;
        window.audio_animation_obj2459 = $("#")[0];
        window.hasAudioTrack_obj2459 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj2459_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj2459 = $(targetObjectId).spritespin("api");
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
		
obj2459_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2459_onLoad_activeActionGroupIndex = -1;
		$("#obj2459").trigger("obj2459_onLoad_ended");
		
		return;
	}
	window.obj2459_onLoad_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj2459 
playAnimation_2798();
function playAnimation_2798() {
	var targetObjectId = "#obj2459";
	var targetObject = $(targetObjectId)[0];
	window.obj2459_onLoad_runningActionsCount = obj2459_onLoad_runningActionsCount + 1;
	var isAnimationInfinite = true;
	if (isAnimationInfinite) {
		window.obj2459_onLoad_runningActionsCount = window.obj2459_onLoad_runningActionsCount - 1;
if (window.obj2459_onLoad_runningActionsCount == 0) {
	obj2459_onLoad_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj2459 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj2459;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj2459.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj2459").one("obj2459_animation_ended",function(event) {
		    window.obj2459_onLoad_runningActionsCount = window.obj2459_onLoad_runningActionsCount - 1;
if (window.obj2459_onLoad_runningActionsCount == 0) {
	obj2459_onLoad_actionGroup1();
}
		});
	}
 }


















};
obj2459_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2459_onLoad_activeActionGroupIndex = -1;
		$("#obj2459").trigger("obj2459_onLoad_ended");
		
		return;
	}
	window.obj2459_onLoad_activeActionGroupIndex = 1;
	








//	action: wait
wait_2799();
function wait_2799() {
	window.obj2459_onLoad_runningActionsCount = obj2459_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2459_onLoad_runningActionsCount = window.obj2459_onLoad_runningActionsCount - 1;
if (window.obj2459_onLoad_runningActionsCount == 0) {
	obj2459_onLoad_actionGroup2();
}
	}, 2000);
}












};
obj2459_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2459_onLoad_activeActionGroupIndex = -1;
		$("#obj2459").trigger("obj2459_onLoad_ended");
		
		return;
	}
	window.obj2459_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj2457 
show_2801();
function show_2801() {
	var element = "#obj2457";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2459_onLoad_runningActionsCount = obj2459_onLoad_runningActionsCount + 1;

	var animationType = "fadeInUp";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2459_onLoad_runningActionsCount = window.obj2459_onLoad_runningActionsCount - 1;
if (window.obj2459_onLoad_runningActionsCount == 0) {
	obj2459_onLoad_actionGroup3();
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
		window.obj2459_onLoad_runningActionsCount = window.obj2459_onLoad_runningActionsCount - 1;
if (window.obj2459_onLoad_runningActionsCount == 0) {
	obj2459_onLoad_actionGroup3();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj2459_onLoad_runningActionsCount = window.obj2459_onLoad_runningActionsCount - 1;
if (window.obj2459_onLoad_runningActionsCount == 0) {
	obj2459_onLoad_actionGroup3();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2459_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2459_onLoad_activeActionGroupIndex = -1;
		$("#obj2459").trigger("obj2459_onLoad_ended");
		
		return;
	}
	window.obj2459_onLoad_activeActionGroupIndex = 3;
	





















};
obj2457_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2457_onTap_activeActionGroupIndex = -1;
		$("#obj2457").trigger("obj2457_onTap_ended");
		
		return;
	}
	window.obj2457_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj2457 
show_2800();
function show_2800() {
	var element = "#obj2457";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2457_onTap_runningActionsCount = obj2457_onTap_runningActionsCount + 1;

	var animationType = "fadeInUp";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2457_onTap_runningActionsCount = window.obj2457_onTap_runningActionsCount - 1;
if (window.obj2457_onTap_runningActionsCount == 0) {
	obj2457_onTap_actionGroup1();
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
		window.obj2457_onTap_runningActionsCount = window.obj2457_onTap_runningActionsCount - 1;
if (window.obj2457_onTap_runningActionsCount == 0) {
	obj2457_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj2457_onTap_runningActionsCount = window.obj2457_onTap_runningActionsCount - 1;
if (window.obj2457_onTap_runningActionsCount == 0) {
	obj2457_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2457_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2457_onTap_activeActionGroupIndex = -1;
		$("#obj2457").trigger("obj2457_onTap_ended");
		
		return;
	}
	window.obj2457_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj2459: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2459_onLoad_activeActionGroupIndex != -1) return;
var obj2459_onLoad_runningActionsCount = 0;
var obj2459_onLoad_loopCount = 0;
obj2459_onLoad_actionGroup0();
});






/*
 *
 *   obj2457: Event Touch Down
 *
 */
$("#obj2457").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2457_onTap_activeActionGroupIndex != -1) return;
var obj2457_onTap_runningActionsCount = 0;
var obj2457_onTap_loopCount = 0;
obj2457_onTap_actionGroup0();
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
	
$("#obj2459").trigger('SCEventShow');
	
});