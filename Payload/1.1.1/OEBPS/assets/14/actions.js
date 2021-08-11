pubcoder.projectID = pubcoder.projectID || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.id = pubcoder.project.id || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.title = pubcoder.project.title || "210723_Desaforismos";
pubcoder.page.id = pubcoder.page.id || 430;
pubcoder.page.title = pubcoder.page.title || "14";
pubcoder.page.number = pubcoder.page.number || 14;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj431_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj431_onLoad_activeActionGroupIndex = -1;
var obj431_onLoad_runningActionsCount = 0;
var obj431_onLoad_loopCount = 0;
var obj468_onLoad_activeActionGroupIndex = -1;
var obj468_onLoad_runningActionsCount = 0;
var obj468_onLoad_loopCount = 0;
var obj478_onLoad_activeActionGroupIndex = -1;
var obj478_onLoad_runningActionsCount = 0;
var obj478_onLoad_loopCount = 0;
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
	
initAnimation_431();
function initAnimation_431()
{
        var targetObjectId = "#obj431";
        var widthSCAnimationObject = 1920;
        var heightSCAnimationObject = 960;
		var framesPerSecond = 25;
		var howManyLoops = 0;
		var backToFirstFrame = false;
        var isAnimationInfinite = true;
        window.audio_animation_obj431 = $("#")[0];
        window.hasAudioTrack_obj431 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj431_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj431 = $(targetObjectId).spritespin("api");
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
		
obj431_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj431_onLoad_activeActionGroupIndex = -1;
		$("#obj431").trigger("obj431_onLoad_ended");
		
		return;
	}
	window.obj431_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_461();
function wait_461() {
	window.obj431_onLoad_runningActionsCount = obj431_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj431_onLoad_runningActionsCount = window.obj431_onLoad_runningActionsCount - 1;
if (window.obj431_onLoad_runningActionsCount == 0) {
	obj431_onLoad_actionGroup1();
}
	}, 1000);
}












};
obj431_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj431_onLoad_activeActionGroupIndex = -1;
		$("#obj431").trigger("obj431_onLoad_ended");
		
		return;
	}
	window.obj431_onLoad_activeActionGroupIndex = 1;
	


//	action: playAnimation 
//	target: obj431 
playAnimation_460();
function playAnimation_460() {
	var targetObjectId = "#obj431";
	var targetObject = $(targetObjectId)[0];
	window.obj431_onLoad_runningActionsCount = obj431_onLoad_runningActionsCount + 1;
	var isAnimationInfinite = true;
	if (isAnimationInfinite) {
		window.obj431_onLoad_runningActionsCount = window.obj431_onLoad_runningActionsCount - 1;
if (window.obj431_onLoad_runningActionsCount == 0) {
	obj431_onLoad_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj431 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj431;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj431.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj431").one("obj431_animation_ended",function(event) {
		    window.obj431_onLoad_runningActionsCount = window.obj431_onLoad_runningActionsCount - 1;
if (window.obj431_onLoad_runningActionsCount == 0) {
	obj431_onLoad_actionGroup2();
}
		});
	}
 }


















};
obj431_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj431_onLoad_activeActionGroupIndex = -1;
		$("#obj431").trigger("obj431_onLoad_ended");
		
		return;
	}
	window.obj431_onLoad_activeActionGroupIndex = 2;
	





















};
obj468_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj468_onLoad_activeActionGroupIndex = -1;
		$("#obj468").trigger("obj468_onLoad_ended");
		
		return;
	}
	window.obj468_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_474();
function wait_474() {
	window.obj468_onLoad_runningActionsCount = obj468_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj468_onLoad_runningActionsCount = window.obj468_onLoad_runningActionsCount - 1;
if (window.obj468_onLoad_runningActionsCount == 0) {
	obj468_onLoad_actionGroup1();
}
	}, 1500);
}












};
obj468_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj468_onLoad_activeActionGroupIndex = -1;
		$("#obj468").trigger("obj468_onLoad_ended");
		
		return;
	}
	window.obj468_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj468 
show_472();
function show_472() {
	var element = "#obj468";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj468_onLoad_runningActionsCount = obj468_onLoad_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj468_onLoad_runningActionsCount = window.obj468_onLoad_runningActionsCount - 1;
if (window.obj468_onLoad_runningActionsCount == 0) {
	obj468_onLoad_actionGroup2();
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
		window.obj468_onLoad_runningActionsCount = window.obj468_onLoad_runningActionsCount - 1;
if (window.obj468_onLoad_runningActionsCount == 0) {
	obj468_onLoad_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj468_onLoad_runningActionsCount = window.obj468_onLoad_runningActionsCount - 1;
if (window.obj468_onLoad_runningActionsCount == 0) {
	obj468_onLoad_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}


//	action: playMovie
//	target: obj468 
playMovie_473();
function playMovie_473() {
	window.obj468_onLoad_runningActionsCount = obj468_onLoad_runningActionsCount + 1;
	var myVideo = $("#obj468")[0];
	var playFromBeginning = false;
	var waitForCompletion = true;
	if (playFromBeginning) myVideo.currentTime = 0;
	myVideo.play();
	//myVideo.webkitEnterFullscreen();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj468_onLoad_runningActionsCount = window.obj468_onLoad_runningActionsCount - 1;
if (window.obj468_onLoad_runningActionsCount == 0) {
	obj468_onLoad_actionGroup2();
}
		};
		// myVideo.addEventListener('pause', actionEnded, false);
		myVideo.addEventListener('ended', actionEnded, false);
	} else {
		window.obj468_onLoad_runningActionsCount = window.obj468_onLoad_runningActionsCount - 1;
if (window.obj468_onLoad_runningActionsCount == 0) {
	obj468_onLoad_actionGroup2();
}
	}
}








//	action: playAudio
//	target: obj462 
playAudio_475();
function playAudio_475() {
	window.obj468_onLoad_runningActionsCount = obj468_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj462")[0];
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
		    window.obj468_onLoad_runningActionsCount = window.obj468_onLoad_runningActionsCount - 1;
if (window.obj468_onLoad_runningActionsCount == 0) {
	obj468_onLoad_actionGroup2();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj468_onLoad_runningActionsCount = window.obj468_onLoad_runningActionsCount - 1;
if (window.obj468_onLoad_runningActionsCount == 0) {
	obj468_onLoad_actionGroup2();
}
	}
}








};
obj468_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj468_onLoad_activeActionGroupIndex = -1;
		$("#obj468").trigger("obj468_onLoad_ended");
		
		return;
	}
	window.obj468_onLoad_activeActionGroupIndex = 2;
	





















};
obj478_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj478_onLoad_activeActionGroupIndex = -1;
		$("#obj478").trigger("obj478_onLoad_ended");
		
		return;
	}
	window.obj478_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_483();
function wait_483() {
	window.obj478_onLoad_runningActionsCount = obj478_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj478_onLoad_runningActionsCount = window.obj478_onLoad_runningActionsCount - 1;
if (window.obj478_onLoad_runningActionsCount == 0) {
	obj478_onLoad_actionGroup1();
}
	}, 4000);
}












};
obj478_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj478_onLoad_activeActionGroupIndex = -1;
		$("#obj478").trigger("obj478_onLoad_ended");
		
		return;
	}
	window.obj478_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj478 
show_482();
function show_482() {
	var element = "#obj478";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj478_onLoad_runningActionsCount = obj478_onLoad_runningActionsCount + 1;

	var animationType = "wobble";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj478_onLoad_runningActionsCount = window.obj478_onLoad_runningActionsCount - 1;
if (window.obj478_onLoad_runningActionsCount == 0) {
	obj478_onLoad_actionGroup2();
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
		window.obj478_onLoad_runningActionsCount = window.obj478_onLoad_runningActionsCount - 1;
if (window.obj478_onLoad_runningActionsCount == 0) {
	obj478_onLoad_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj478_onLoad_runningActionsCount = window.obj478_onLoad_runningActionsCount - 1;
if (window.obj478_onLoad_runningActionsCount == 0) {
	obj478_onLoad_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj478_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj478_onLoad_activeActionGroupIndex = -1;
		$("#obj478").trigger("obj478_onLoad_ended");
		
		return;
	}
	window.obj478_onLoad_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj431: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj431_onLoad_activeActionGroupIndex != -1) return;
var obj431_onLoad_runningActionsCount = 0;
var obj431_onLoad_loopCount = 0;
obj431_onLoad_actionGroup0();
});
















/*
 *
 *   obj468: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj468_onLoad_activeActionGroupIndex != -1) return;
var obj468_onLoad_runningActionsCount = 0;
var obj468_onLoad_loopCount = 0;
obj468_onLoad_actionGroup0();
});








/*
 *
 *   obj478: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj478_onLoad_activeActionGroupIndex != -1) return;
var obj478_onLoad_runningActionsCount = 0;
var obj478_onLoad_loopCount = 0;
obj478_onLoad_actionGroup0();
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
	
$("#obj465").trigger('SCEventShow');
$("#obj431").trigger('SCEventShow');
$("#obj462").trigger('SCEventShow');
	
});