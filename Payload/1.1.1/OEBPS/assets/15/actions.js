pubcoder.projectID = pubcoder.projectID || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.id = pubcoder.project.id || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.title = pubcoder.project.title || "210723_Desaforismos";
pubcoder.page.id = pubcoder.page.id || 3961;
pubcoder.page.title = pubcoder.page.title || "15";
pubcoder.page.number = pubcoder.page.number || 15;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj3969_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj3969_onLoad_activeActionGroupIndex = -1;
var obj3969_onLoad_runningActionsCount = 0;
var obj3969_onLoad_loopCount = 0;
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
	
initAnimation_3969();
function initAnimation_3969()
{
        var targetObjectId = "#obj3969";
        var widthSCAnimationObject = 1948;
        var heightSCAnimationObject = 992;
		var framesPerSecond = 12;
		var howManyLoops = 0;
		var backToFirstFrame = false;
        var isAnimationInfinite = true;
        window.audio_animation_obj3969 = $("#")[0];
        window.hasAudioTrack_obj3969 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj3969_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj3969 = $(targetObjectId).spritespin("api");
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
		
obj3969_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3969_onLoad_activeActionGroupIndex = -1;
		$("#obj3969").trigger("obj3969_onLoad_ended");
		
		return;
	}
	window.obj3969_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_4189();
function wait_4189() {
	window.obj3969_onLoad_runningActionsCount = obj3969_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj3969_onLoad_runningActionsCount = window.obj3969_onLoad_runningActionsCount - 1;
if (window.obj3969_onLoad_runningActionsCount == 0) {
	obj3969_onLoad_actionGroup1();
}
	}, 1000);
}












};
obj3969_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3969_onLoad_activeActionGroupIndex = -1;
		$("#obj3969").trigger("obj3969_onLoad_ended");
		
		return;
	}
	window.obj3969_onLoad_activeActionGroupIndex = 1;
	


//	action: playAnimation 
//	target: obj3969 
playAnimation_4188();
function playAnimation_4188() {
	var targetObjectId = "#obj3969";
	var targetObject = $(targetObjectId)[0];
	window.obj3969_onLoad_runningActionsCount = obj3969_onLoad_runningActionsCount + 1;
	var isAnimationInfinite = true;
	if (isAnimationInfinite) {
		window.obj3969_onLoad_runningActionsCount = window.obj3969_onLoad_runningActionsCount - 1;
if (window.obj3969_onLoad_runningActionsCount == 0) {
	obj3969_onLoad_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj3969 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj3969;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj3969.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj3969").one("obj3969_animation_ended",function(event) {
		    window.obj3969_onLoad_runningActionsCount = window.obj3969_onLoad_runningActionsCount - 1;
if (window.obj3969_onLoad_runningActionsCount == 0) {
	obj3969_onLoad_actionGroup2();
}
		});
	}
 }


















};
obj3969_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3969_onLoad_activeActionGroupIndex = -1;
		$("#obj3969").trigger("obj3969_onLoad_ended");
		
		return;
	}
	window.obj3969_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj4183 
show_4190();
function show_4190() {
	var element = "#obj4183";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3969_onLoad_runningActionsCount = obj3969_onLoad_runningActionsCount + 1;

	var animationType = "slideInDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3969_onLoad_runningActionsCount = window.obj3969_onLoad_runningActionsCount - 1;
if (window.obj3969_onLoad_runningActionsCount == 0) {
	obj3969_onLoad_actionGroup3();
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
		window.obj3969_onLoad_runningActionsCount = window.obj3969_onLoad_runningActionsCount - 1;
if (window.obj3969_onLoad_runningActionsCount == 0) {
	obj3969_onLoad_actionGroup3();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj3969_onLoad_runningActionsCount = window.obj3969_onLoad_runningActionsCount - 1;
if (window.obj3969_onLoad_runningActionsCount == 0) {
	obj3969_onLoad_actionGroup3();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj3969_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3969_onLoad_activeActionGroupIndex = -1;
		$("#obj3969").trigger("obj3969_onLoad_ended");
		
		return;
	}
	window.obj3969_onLoad_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj4182 
show_4191();
function show_4191() {
	var element = "#obj4182";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3969_onLoad_runningActionsCount = obj3969_onLoad_runningActionsCount + 1;

	var animationType = "zoomIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3969_onLoad_runningActionsCount = window.obj3969_onLoad_runningActionsCount - 1;
if (window.obj3969_onLoad_runningActionsCount == 0) {
	obj3969_onLoad_actionGroup4();
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
		window.obj3969_onLoad_runningActionsCount = window.obj3969_onLoad_runningActionsCount - 1;
if (window.obj3969_onLoad_runningActionsCount == 0) {
	obj3969_onLoad_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj3969_onLoad_runningActionsCount = window.obj3969_onLoad_runningActionsCount - 1;
if (window.obj3969_onLoad_runningActionsCount == 0) {
	obj3969_onLoad_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj3969_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3969_onLoad_activeActionGroupIndex = -1;
		$("#obj3969").trigger("obj3969_onLoad_ended");
		
		return;
	}
	window.obj3969_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	target: obj4181 
show_4192();
function show_4192() {
	var element = "#obj4181";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3969_onLoad_runningActionsCount = obj3969_onLoad_runningActionsCount + 1;

	var animationType = "slideInUp";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3969_onLoad_runningActionsCount = window.obj3969_onLoad_runningActionsCount - 1;
if (window.obj3969_onLoad_runningActionsCount == 0) {
	obj3969_onLoad_actionGroup5();
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
		window.obj3969_onLoad_runningActionsCount = window.obj3969_onLoad_runningActionsCount - 1;
if (window.obj3969_onLoad_runningActionsCount == 0) {
	obj3969_onLoad_actionGroup5();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj3969_onLoad_runningActionsCount = window.obj3969_onLoad_runningActionsCount - 1;
if (window.obj3969_onLoad_runningActionsCount == 0) {
	obj3969_onLoad_actionGroup5();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj3969_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3969_onLoad_activeActionGroupIndex = -1;
		$("#obj3969").trigger("obj3969_onLoad_ended");
		
		return;
	}
	window.obj3969_onLoad_activeActionGroupIndex = 5;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj3969: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3969_onLoad_activeActionGroupIndex != -1) return;
var obj3969_onLoad_runningActionsCount = 0;
var obj3969_onLoad_loopCount = 0;
obj3969_onLoad_actionGroup0();
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
	
$("#obj3969").trigger('SCEventShow');
	
});