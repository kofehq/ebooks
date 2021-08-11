pubcoder.projectID = pubcoder.projectID || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.id = pubcoder.project.id || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.title = pubcoder.project.title || "210723_Desaforismos";
pubcoder.page.id = pubcoder.page.id || 1843;
pubcoder.page.title = pubcoder.page.title || "12";
pubcoder.page.number = pubcoder.page.number || 12;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj3590_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj1854_onLoad_activeActionGroupIndex = -1;
var obj1854_onLoad_runningActionsCount = 0;
var obj1854_onLoad_loopCount = 0;
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
	
initAnimation_3590();
function initAnimation_3590()
{
        var targetObjectId = "#obj3590";
        var widthSCAnimationObject = 1001;
        var heightSCAnimationObject = 1048;
		var framesPerSecond = 12;
		var howManyLoops = 0;
		var backToFirstFrame = false;
        var isAnimationInfinite = true;
        window.audio_animation_obj3590 = $("#")[0];
        window.hasAudioTrack_obj3590 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj3590_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj3590 = $(targetObjectId).spritespin("api");
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
		
obj1854_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1854_onLoad_activeActionGroupIndex = -1;
		$("#obj1854").trigger("obj1854_onLoad_ended");
		
		return;
	}
	window.obj1854_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_1908();
function wait_1908() {
	window.obj1854_onLoad_runningActionsCount = obj1854_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1854_onLoad_runningActionsCount = window.obj1854_onLoad_runningActionsCount - 1;
if (window.obj1854_onLoad_runningActionsCount == 0) {
	obj1854_onLoad_actionGroup1();
}
	}, 1000);
}












};
obj1854_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1854_onLoad_activeActionGroupIndex = -1;
		$("#obj1854").trigger("obj1854_onLoad_ended");
		
		return;
	}
	window.obj1854_onLoad_activeActionGroupIndex = 1;
	


//	action: playAnimation 
//	target: obj3590 
playAnimation_3712();
function playAnimation_3712() {
	var targetObjectId = "#obj3590";
	var targetObject = $(targetObjectId)[0];
	window.obj1854_onLoad_runningActionsCount = obj1854_onLoad_runningActionsCount + 1;
	var isAnimationInfinite = true;
	if (isAnimationInfinite) {
		window.obj1854_onLoad_runningActionsCount = window.obj1854_onLoad_runningActionsCount - 1;
if (window.obj1854_onLoad_runningActionsCount == 0) {
	obj1854_onLoad_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj3590 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj3590;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj3590.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj3590").one("obj3590_animation_ended",function(event) {
		    window.obj1854_onLoad_runningActionsCount = window.obj1854_onLoad_runningActionsCount - 1;
if (window.obj1854_onLoad_runningActionsCount == 0) {
	obj1854_onLoad_actionGroup2();
}
		});
	}
 }


















};
obj1854_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1854_onLoad_activeActionGroupIndex = -1;
		$("#obj1854").trigger("obj1854_onLoad_ended");
		
		return;
	}
	window.obj1854_onLoad_activeActionGroupIndex = 2;
	








//	action: wait
wait_3713();
function wait_3713() {
	window.obj1854_onLoad_runningActionsCount = obj1854_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1854_onLoad_runningActionsCount = window.obj1854_onLoad_runningActionsCount - 1;
if (window.obj1854_onLoad_runningActionsCount == 0) {
	obj1854_onLoad_actionGroup3();
}
	}, 1000);
}












};
obj1854_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1854_onLoad_activeActionGroupIndex = -1;
		$("#obj1854").trigger("obj1854_onLoad_ended");
		
		return;
	}
	window.obj1854_onLoad_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj1854 
show_1909();
function show_1909() {
	var element = "#obj1854";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1854_onLoad_runningActionsCount = obj1854_onLoad_runningActionsCount + 1;

	var animationType = "bounceIn";
	var animationDurationMs = 1200;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1854_onLoad_runningActionsCount = window.obj1854_onLoad_runningActionsCount - 1;
if (window.obj1854_onLoad_runningActionsCount == 0) {
	obj1854_onLoad_actionGroup4();
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
		window.obj1854_onLoad_runningActionsCount = window.obj1854_onLoad_runningActionsCount - 1;
if (window.obj1854_onLoad_runningActionsCount == 0) {
	obj1854_onLoad_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1200, function() {
	// 		setTimeout(function() {
	// 			window.obj1854_onLoad_runningActionsCount = window.obj1854_onLoad_runningActionsCount - 1;
if (window.obj1854_onLoad_runningActionsCount == 0) {
	obj1854_onLoad_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1854_onLoad_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1854_onLoad_activeActionGroupIndex = -1;
		$("#obj1854").trigger("obj1854_onLoad_ended");
		
		return;
	}
	window.obj1854_onLoad_activeActionGroupIndex = 4;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





















/*
 *
 *   obj1854: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1854_onLoad_activeActionGroupIndex != -1) return;
var obj1854_onLoad_runningActionsCount = 0;
var obj1854_onLoad_loopCount = 0;
obj1854_onLoad_actionGroup0();
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
	
$("#obj3590").trigger('SCEventShow');
$("#obj1851").trigger('SCEventShow');
	
});