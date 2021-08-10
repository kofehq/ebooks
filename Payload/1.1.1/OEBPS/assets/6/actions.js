pubcoder.projectID = pubcoder.projectID || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.id = pubcoder.project.id || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.title = pubcoder.project.title || "210723_Desaforismos";
pubcoder.page.id = pubcoder.page.id || 3;
pubcoder.page.title = pubcoder.page.title || "6";
pubcoder.page.number = pubcoder.page.number || 6;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj32_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj24_onTap_activeActionGroupIndex = -1;
var obj24_onTap_runningActionsCount = 0;
var obj24_onTap_loopCount = 0;
var obj24_onLoad_activeActionGroupIndex = -1;
var obj24_onLoad_runningActionsCount = 0;
var obj24_onLoad_loopCount = 0;
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
	
initAnimation_32();
function initAnimation_32()
{
        var targetObjectId = "#obj32";
        var widthSCAnimationObject = 991;
        var heightSCAnimationObject = 991;
		var framesPerSecond = 12;
		var howManyLoops = 1;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj32 = $("#")[0];
        window.hasAudioTrack_obj32 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj32_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj32 = $(targetObjectId).spritespin("api");
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
		
obj24_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24_onTap_activeActionGroupIndex = -1;
		$("#obj24").trigger("obj24_onTap_ended");
		
		return;
	}
	window.obj24_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj24 
hide_166();
function hide_166() {
	var element = "#obj24";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24_onTap_runningActionsCount = obj24_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj24_onTap_runningActionsCount = window.obj24_onTap_runningActionsCount - 1;
if (window.obj24_onTap_runningActionsCount == 0) {
	obj24_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_166(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj24_onTap_runningActionsCount = window.obj24_onTap_runningActionsCount - 1;
if (window.obj24_onTap_runningActionsCount == 0) {
	obj24_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj24_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24_onTap_activeActionGroupIndex = -1;
		$("#obj24").trigger("obj24_onTap_ended");
		
		return;
	}
	window.obj24_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj21 
hide_162();
function hide_162() {
	var element = "#obj21";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24_onTap_runningActionsCount = obj24_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj24_onTap_runningActionsCount = window.obj24_onTap_runningActionsCount - 1;
if (window.obj24_onTap_runningActionsCount == 0) {
	obj24_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_162(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj24_onTap_runningActionsCount = window.obj24_onTap_runningActionsCount - 1;
if (window.obj24_onTap_runningActionsCount == 0) {
	obj24_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj24_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24_onTap_activeActionGroupIndex = -1;
		$("#obj24").trigger("obj24_onTap_ended");
		
		return;
	}
	window.obj24_onTap_activeActionGroupIndex = 2;
	


//	action: playAnimation 
//	target: obj32 
playAnimation_167();
function playAnimation_167() {
	var targetObjectId = "#obj32";
	var targetObject = $(targetObjectId)[0];
	window.obj24_onTap_runningActionsCount = obj24_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj24_onTap_runningActionsCount = window.obj24_onTap_runningActionsCount - 1;
if (window.obj24_onTap_runningActionsCount == 0) {
	obj24_onTap_actionGroup3();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj32 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj32;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj32.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj32").one("obj32_animation_ended",function(event) {
		    window.obj24_onTap_runningActionsCount = window.obj24_onTap_runningActionsCount - 1;
if (window.obj24_onTap_runningActionsCount == 0) {
	obj24_onTap_actionGroup3();
}
		});
	}
 }


















};
obj24_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24_onTap_activeActionGroupIndex = -1;
		$("#obj24").trigger("obj24_onTap_ended");
		
		return;
	}
	window.obj24_onTap_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj173 
show_180();
function show_180() {
	var element = "#obj173";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj24_onTap_runningActionsCount = obj24_onTap_runningActionsCount + 1;

	var animationType = "fadeInUp";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj24_onTap_runningActionsCount = window.obj24_onTap_runningActionsCount - 1;
if (window.obj24_onTap_runningActionsCount == 0) {
	obj24_onTap_actionGroup4();
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
		window.obj24_onTap_runningActionsCount = window.obj24_onTap_runningActionsCount - 1;
if (window.obj24_onTap_runningActionsCount == 0) {
	obj24_onTap_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj24_onTap_runningActionsCount = window.obj24_onTap_runningActionsCount - 1;
if (window.obj24_onTap_runningActionsCount == 0) {
	obj24_onTap_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj24_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24_onTap_activeActionGroupIndex = -1;
		$("#obj24").trigger("obj24_onTap_ended");
		
		return;
	}
	window.obj24_onTap_activeActionGroupIndex = 4;
	

//	action: show 
//	target: obj175 
show_181();
function show_181() {
	var element = "#obj175";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj24_onTap_runningActionsCount = obj24_onTap_runningActionsCount + 1;

	var animationType = "fadeInUp";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj24_onTap_runningActionsCount = window.obj24_onTap_runningActionsCount - 1;
if (window.obj24_onTap_runningActionsCount == 0) {
	obj24_onTap_actionGroup5();
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
		window.obj24_onTap_runningActionsCount = window.obj24_onTap_runningActionsCount - 1;
if (window.obj24_onTap_runningActionsCount == 0) {
	obj24_onTap_actionGroup5();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj24_onTap_runningActionsCount = window.obj24_onTap_runningActionsCount - 1;
if (window.obj24_onTap_runningActionsCount == 0) {
	obj24_onTap_actionGroup5();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj24_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24_onTap_activeActionGroupIndex = -1;
		$("#obj24").trigger("obj24_onTap_ended");
		
		return;
	}
	window.obj24_onTap_activeActionGroupIndex = 5;
	

//	action: show 
//	target: obj177 
show_182();
function show_182() {
	var element = "#obj177";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj24_onTap_runningActionsCount = obj24_onTap_runningActionsCount + 1;

	var animationType = "fadeInUp";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj24_onTap_runningActionsCount = window.obj24_onTap_runningActionsCount - 1;
if (window.obj24_onTap_runningActionsCount == 0) {
	obj24_onTap_actionGroup6();
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
		window.obj24_onTap_runningActionsCount = window.obj24_onTap_runningActionsCount - 1;
if (window.obj24_onTap_runningActionsCount == 0) {
	obj24_onTap_actionGroup6();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj24_onTap_runningActionsCount = window.obj24_onTap_runningActionsCount - 1;
if (window.obj24_onTap_runningActionsCount == 0) {
	obj24_onTap_actionGroup6();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj24_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24_onTap_activeActionGroupIndex = -1;
		$("#obj24").trigger("obj24_onTap_ended");
		
		return;
	}
	window.obj24_onTap_activeActionGroupIndex = 6;
	





















};
obj24_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24_onLoad_activeActionGroupIndex = -1;
		$("#obj24").trigger("obj24_onLoad_ended");
		
		return;
	}
	window.obj24_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj24 
hide_1461();
function hide_1461() {
	var element = "#obj24";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24_onLoad_runningActionsCount = obj24_onLoad_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj24_onLoad_runningActionsCount = window.obj24_onLoad_runningActionsCount - 1;
if (window.obj24_onLoad_runningActionsCount == 0) {
	obj24_onLoad_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1461(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj24_onLoad_runningActionsCount = window.obj24_onLoad_runningActionsCount - 1;
if (window.obj24_onLoad_runningActionsCount == 0) {
	obj24_onLoad_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj24_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24_onLoad_activeActionGroupIndex = -1;
		$("#obj24").trigger("obj24_onLoad_ended");
		
		return;
	}
	window.obj24_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj21 
hide_1462();
function hide_1462() {
	var element = "#obj21";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24_onLoad_runningActionsCount = obj24_onLoad_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj24_onLoad_runningActionsCount = window.obj24_onLoad_runningActionsCount - 1;
if (window.obj24_onLoad_runningActionsCount == 0) {
	obj24_onLoad_actionGroup2();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1462(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj24_onLoad_runningActionsCount = window.obj24_onLoad_runningActionsCount - 1;
if (window.obj24_onLoad_runningActionsCount == 0) {
	obj24_onLoad_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj24_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24_onLoad_activeActionGroupIndex = -1;
		$("#obj24").trigger("obj24_onLoad_ended");
		
		return;
	}
	window.obj24_onLoad_activeActionGroupIndex = 2;
	


//	action: playAnimation 
//	target: obj32 
playAnimation_1463();
function playAnimation_1463() {
	var targetObjectId = "#obj32";
	var targetObject = $(targetObjectId)[0];
	window.obj24_onLoad_runningActionsCount = obj24_onLoad_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj24_onLoad_runningActionsCount = window.obj24_onLoad_runningActionsCount - 1;
if (window.obj24_onLoad_runningActionsCount == 0) {
	obj24_onLoad_actionGroup3();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj32 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj32;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj32.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj32").one("obj32_animation_ended",function(event) {
		    window.obj24_onLoad_runningActionsCount = window.obj24_onLoad_runningActionsCount - 1;
if (window.obj24_onLoad_runningActionsCount == 0) {
	obj24_onLoad_actionGroup3();
}
		});
	}
 }


















};
obj24_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24_onLoad_activeActionGroupIndex = -1;
		$("#obj24").trigger("obj24_onLoad_ended");
		
		return;
	}
	window.obj24_onLoad_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj173 
show_1464();
function show_1464() {
	var element = "#obj173";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj24_onLoad_runningActionsCount = obj24_onLoad_runningActionsCount + 1;

	var animationType = "fadeInUp";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj24_onLoad_runningActionsCount = window.obj24_onLoad_runningActionsCount - 1;
if (window.obj24_onLoad_runningActionsCount == 0) {
	obj24_onLoad_actionGroup4();
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
		window.obj24_onLoad_runningActionsCount = window.obj24_onLoad_runningActionsCount - 1;
if (window.obj24_onLoad_runningActionsCount == 0) {
	obj24_onLoad_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj24_onLoad_runningActionsCount = window.obj24_onLoad_runningActionsCount - 1;
if (window.obj24_onLoad_runningActionsCount == 0) {
	obj24_onLoad_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj24_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24_onLoad_activeActionGroupIndex = -1;
		$("#obj24").trigger("obj24_onLoad_ended");
		
		return;
	}
	window.obj24_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	target: obj175 
show_1465();
function show_1465() {
	var element = "#obj175";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj24_onLoad_runningActionsCount = obj24_onLoad_runningActionsCount + 1;

	var animationType = "fadeInUp";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj24_onLoad_runningActionsCount = window.obj24_onLoad_runningActionsCount - 1;
if (window.obj24_onLoad_runningActionsCount == 0) {
	obj24_onLoad_actionGroup5();
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
		window.obj24_onLoad_runningActionsCount = window.obj24_onLoad_runningActionsCount - 1;
if (window.obj24_onLoad_runningActionsCount == 0) {
	obj24_onLoad_actionGroup5();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj24_onLoad_runningActionsCount = window.obj24_onLoad_runningActionsCount - 1;
if (window.obj24_onLoad_runningActionsCount == 0) {
	obj24_onLoad_actionGroup5();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj24_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24_onLoad_activeActionGroupIndex = -1;
		$("#obj24").trigger("obj24_onLoad_ended");
		
		return;
	}
	window.obj24_onLoad_activeActionGroupIndex = 5;
	

//	action: show 
//	target: obj177 
show_1466();
function show_1466() {
	var element = "#obj177";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj24_onLoad_runningActionsCount = obj24_onLoad_runningActionsCount + 1;

	var animationType = "fadeInUp";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj24_onLoad_runningActionsCount = window.obj24_onLoad_runningActionsCount - 1;
if (window.obj24_onLoad_runningActionsCount == 0) {
	obj24_onLoad_actionGroup6();
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
		window.obj24_onLoad_runningActionsCount = window.obj24_onLoad_runningActionsCount - 1;
if (window.obj24_onLoad_runningActionsCount == 0) {
	obj24_onLoad_actionGroup6();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj24_onLoad_runningActionsCount = window.obj24_onLoad_runningActionsCount - 1;
if (window.obj24_onLoad_runningActionsCount == 0) {
	obj24_onLoad_actionGroup6();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj24_onLoad_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24_onLoad_activeActionGroupIndex = -1;
		$("#obj24").trigger("obj24_onLoad_ended");
		
		return;
	}
	window.obj24_onLoad_activeActionGroupIndex = 6;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



























/*
 *
 *   obj24: Event Touch Down
 *
 */
$("#obj24").one(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24_onTap_activeActionGroupIndex != -1) return;
var obj24_onTap_runningActionsCount = 0;
var obj24_onTap_loopCount = 0;
obj24_onTap_actionGroup0();
});


/*
 *
 *   obj24: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj24_onLoad_activeActionGroupIndex != -1) return;
var obj24_onLoad_runningActionsCount = 0;
var obj24_onLoad_loopCount = 0;
obj24_onLoad_actionGroup0();
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
	
$("#obj32").trigger('SCEventShow');
$("#obj21").trigger('SCEventShow');
$("#obj18").trigger('SCEventShow');
$("#obj24").trigger('SCEventShow');
$("#obj5589").trigger('SCEventShow');
$("#obj5584").trigger('SCEventShow');
$("#obj5591").trigger('SCEventShow');
$("#obj5585").trigger('SCEventShow');
	
});