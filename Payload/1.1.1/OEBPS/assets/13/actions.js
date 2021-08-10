pubcoder.projectID = pubcoder.projectID || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.id = pubcoder.project.id || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.title = pubcoder.project.title || "210723_Desaforismos";
pubcoder.page.id = pubcoder.page.id || 1911;
pubcoder.page.title = pubcoder.page.title || "13";
pubcoder.page.number = pubcoder.page.number || 13;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj3731_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj3731_onLoad_activeActionGroupIndex = -1;
var obj3731_onLoad_runningActionsCount = 0;
var obj3731_onLoad_loopCount = 0;
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
	
initAnimation_3731();
function initAnimation_3731()
{
        var targetObjectId = "#obj3731";
        var widthSCAnimationObject = 1972;
        var heightSCAnimationObject = 1010;
		var framesPerSecond = 12;
		var howManyLoops = 0;
		var backToFirstFrame = false;
        var isAnimationInfinite = true;
        window.audio_animation_obj3731 = $("#")[0];
        window.hasAudioTrack_obj3731 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj3731_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj3731 = $(targetObjectId).spritespin("api");
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
		
obj3731_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3731_onLoad_activeActionGroupIndex = -1;
		$("#obj3731").trigger("obj3731_onLoad_ended");
		
		return;
	}
	window.obj3731_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_3926();
function wait_3926() {
	window.obj3731_onLoad_runningActionsCount = obj3731_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj3731_onLoad_runningActionsCount = window.obj3731_onLoad_runningActionsCount - 1;
if (window.obj3731_onLoad_runningActionsCount == 0) {
	obj3731_onLoad_actionGroup1();
}
	}, 1000);
}












};
obj3731_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3731_onLoad_activeActionGroupIndex = -1;
		$("#obj3731").trigger("obj3731_onLoad_ended");
		
		return;
	}
	window.obj3731_onLoad_activeActionGroupIndex = 1;
	


//	action: playAnimation 
//	target: obj3731 
playAnimation_3927();
function playAnimation_3927() {
	var targetObjectId = "#obj3731";
	var targetObject = $(targetObjectId)[0];
	window.obj3731_onLoad_runningActionsCount = obj3731_onLoad_runningActionsCount + 1;
	var isAnimationInfinite = true;
	if (isAnimationInfinite) {
		window.obj3731_onLoad_runningActionsCount = window.obj3731_onLoad_runningActionsCount - 1;
if (window.obj3731_onLoad_runningActionsCount == 0) {
	obj3731_onLoad_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj3731 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj3731;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj3731.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj3731").one("obj3731_animation_ended",function(event) {
		    window.obj3731_onLoad_runningActionsCount = window.obj3731_onLoad_runningActionsCount - 1;
if (window.obj3731_onLoad_runningActionsCount == 0) {
	obj3731_onLoad_actionGroup2();
}
		});
	}
 }


















};
obj3731_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3731_onLoad_activeActionGroupIndex = -1;
		$("#obj3731").trigger("obj3731_onLoad_ended");
		
		return;
	}
	window.obj3731_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj1913 
show_3928();
function show_3928() {
	var element = "#obj1913";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3731_onLoad_runningActionsCount = obj3731_onLoad_runningActionsCount + 1;

	var animationType = "bounceIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3731_onLoad_runningActionsCount = window.obj3731_onLoad_runningActionsCount - 1;
if (window.obj3731_onLoad_runningActionsCount == 0) {
	obj3731_onLoad_actionGroup3();
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
		window.obj3731_onLoad_runningActionsCount = window.obj3731_onLoad_runningActionsCount - 1;
if (window.obj3731_onLoad_runningActionsCount == 0) {
	obj3731_onLoad_actionGroup3();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj3731_onLoad_runningActionsCount = window.obj3731_onLoad_runningActionsCount - 1;
if (window.obj3731_onLoad_runningActionsCount == 0) {
	obj3731_onLoad_actionGroup3();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj3731_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3731_onLoad_activeActionGroupIndex = -1;
		$("#obj3731").trigger("obj3731_onLoad_ended");
		
		return;
	}
	window.obj3731_onLoad_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj3731: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3731_onLoad_activeActionGroupIndex != -1) return;
var obj3731_onLoad_runningActionsCount = 0;
var obj3731_onLoad_loopCount = 0;
obj3731_onLoad_actionGroup0();
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
	
$("#obj3731").trigger('SCEventShow');
	
});