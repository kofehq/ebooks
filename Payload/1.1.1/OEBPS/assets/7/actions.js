pubcoder.projectID = pubcoder.projectID || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.id = pubcoder.project.id || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.title = pubcoder.project.title || "210723_Desaforismos";
pubcoder.page.id = pubcoder.page.id || 1682;
pubcoder.page.title = pubcoder.page.title || "7";
pubcoder.page.number = pubcoder.page.number || 7;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj2342_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj2342_onTap_activeActionGroupIndex = -1;
var obj2342_onTap_runningActionsCount = 0;
var obj2342_onTap_loopCount = 0;
var obj2342_onLoad_activeActionGroupIndex = -1;
var obj2342_onLoad_runningActionsCount = 0;
var obj2342_onLoad_loopCount = 0;
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
	
initAnimation_2342();
function initAnimation_2342()
{
        var targetObjectId = "#obj2342";
        var widthSCAnimationObject = 1962;
        var heightSCAnimationObject = 996;
		var framesPerSecond = 12;
		var howManyLoops = 0;
		var backToFirstFrame = false;
        var isAnimationInfinite = true;
        window.audio_animation_obj2342 = $("#")[0];
        window.hasAudioTrack_obj2342 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj2342_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj2342 = $(targetObjectId).spritespin("api");
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
		
obj2342_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2342_onTap_activeActionGroupIndex = -1;
		$("#obj2342").trigger("obj2342_onTap_ended");
		
		return;
	}
	window.obj2342_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj2342 
playAnimation_2442();
function playAnimation_2442() {
	var targetObjectId = "#obj2342";
	var targetObject = $(targetObjectId)[0];
	window.obj2342_onTap_runningActionsCount = obj2342_onTap_runningActionsCount + 1;
	var isAnimationInfinite = true;
	if (isAnimationInfinite) {
		window.obj2342_onTap_runningActionsCount = window.obj2342_onTap_runningActionsCount - 1;
if (window.obj2342_onTap_runningActionsCount == 0) {
	obj2342_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj2342 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj2342;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj2342.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj2342").one("obj2342_animation_ended",function(event) {
		    window.obj2342_onTap_runningActionsCount = window.obj2342_onTap_runningActionsCount - 1;
if (window.obj2342_onTap_runningActionsCount == 0) {
	obj2342_onTap_actionGroup1();
}
		});
	}
 }


















};
obj2342_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2342_onTap_activeActionGroupIndex = -1;
		$("#obj2342").trigger("obj2342_onTap_ended");
		
		return;
	}
	window.obj2342_onTap_activeActionGroupIndex = 1;
	








//	action: wait
wait_2443();
function wait_2443() {
	window.obj2342_onTap_runningActionsCount = obj2342_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2342_onTap_runningActionsCount = window.obj2342_onTap_runningActionsCount - 1;
if (window.obj2342_onTap_runningActionsCount == 0) {
	obj2342_onTap_actionGroup2();
}
	}, 2000);
}












};
obj2342_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2342_onTap_activeActionGroupIndex = -1;
		$("#obj2342").trigger("obj2342_onTap_ended");
		
		return;
	}
	window.obj2342_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj1737 
show_2444();
function show_2444() {
	var element = "#obj1737";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2342_onTap_runningActionsCount = obj2342_onTap_runningActionsCount + 1;

	var animationType = "bounceIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2342_onTap_runningActionsCount = window.obj2342_onTap_runningActionsCount - 1;
if (window.obj2342_onTap_runningActionsCount == 0) {
	obj2342_onTap_actionGroup3();
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
		window.obj2342_onTap_runningActionsCount = window.obj2342_onTap_runningActionsCount - 1;
if (window.obj2342_onTap_runningActionsCount == 0) {
	obj2342_onTap_actionGroup3();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj2342_onTap_runningActionsCount = window.obj2342_onTap_runningActionsCount - 1;
if (window.obj2342_onTap_runningActionsCount == 0) {
	obj2342_onTap_actionGroup3();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2342_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2342_onTap_activeActionGroupIndex = -1;
		$("#obj2342").trigger("obj2342_onTap_ended");
		
		return;
	}
	window.obj2342_onTap_activeActionGroupIndex = 3;
	





















};
obj2342_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2342_onLoad_activeActionGroupIndex = -1;
		$("#obj2342").trigger("obj2342_onLoad_ended");
		
		return;
	}
	window.obj2342_onLoad_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj2342 
playAnimation_2446();
function playAnimation_2446() {
	var targetObjectId = "#obj2342";
	var targetObject = $(targetObjectId)[0];
	window.obj2342_onLoad_runningActionsCount = obj2342_onLoad_runningActionsCount + 1;
	var isAnimationInfinite = true;
	if (isAnimationInfinite) {
		window.obj2342_onLoad_runningActionsCount = window.obj2342_onLoad_runningActionsCount - 1;
if (window.obj2342_onLoad_runningActionsCount == 0) {
	obj2342_onLoad_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj2342 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj2342;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj2342.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj2342").one("obj2342_animation_ended",function(event) {
		    window.obj2342_onLoad_runningActionsCount = window.obj2342_onLoad_runningActionsCount - 1;
if (window.obj2342_onLoad_runningActionsCount == 0) {
	obj2342_onLoad_actionGroup1();
}
		});
	}
 }


















};
obj2342_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2342_onLoad_activeActionGroupIndex = -1;
		$("#obj2342").trigger("obj2342_onLoad_ended");
		
		return;
	}
	window.obj2342_onLoad_activeActionGroupIndex = 1;
	








//	action: wait
wait_2448();
function wait_2448() {
	window.obj2342_onLoad_runningActionsCount = obj2342_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2342_onLoad_runningActionsCount = window.obj2342_onLoad_runningActionsCount - 1;
if (window.obj2342_onLoad_runningActionsCount == 0) {
	obj2342_onLoad_actionGroup2();
}
	}, 2000);
}












};
obj2342_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2342_onLoad_activeActionGroupIndex = -1;
		$("#obj2342").trigger("obj2342_onLoad_ended");
		
		return;
	}
	window.obj2342_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj1737 
show_2449();
function show_2449() {
	var element = "#obj1737";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2342_onLoad_runningActionsCount = obj2342_onLoad_runningActionsCount + 1;

	var animationType = "bounceIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2342_onLoad_runningActionsCount = window.obj2342_onLoad_runningActionsCount - 1;
if (window.obj2342_onLoad_runningActionsCount == 0) {
	obj2342_onLoad_actionGroup3();
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
		window.obj2342_onLoad_runningActionsCount = window.obj2342_onLoad_runningActionsCount - 1;
if (window.obj2342_onLoad_runningActionsCount == 0) {
	obj2342_onLoad_actionGroup3();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj2342_onLoad_runningActionsCount = window.obj2342_onLoad_runningActionsCount - 1;
if (window.obj2342_onLoad_runningActionsCount == 0) {
	obj2342_onLoad_actionGroup3();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2342_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2342_onLoad_activeActionGroupIndex = -1;
		$("#obj2342").trigger("obj2342_onLoad_ended");
		
		return;
	}
	window.obj2342_onLoad_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



/*
 *
 *   obj2342: Event Touch Down
 *
 */
$("#obj2342").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2342_onTap_activeActionGroupIndex != -1) return;
var obj2342_onTap_runningActionsCount = 0;
var obj2342_onTap_loopCount = 0;
obj2342_onTap_actionGroup0();
});


/*
 *
 *   obj2342: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2342_onLoad_activeActionGroupIndex != -1) return;
var obj2342_onLoad_runningActionsCount = 0;
var obj2342_onLoad_loopCount = 0;
obj2342_onLoad_actionGroup0();
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
	
$("#obj2342").trigger('SCEventShow');
	
});