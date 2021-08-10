pubcoder.projectID = pubcoder.projectID || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.id = pubcoder.project.id || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.title = pubcoder.project.title || "210723_Desaforismos";
pubcoder.page.id = pubcoder.page.id || 1988;
pubcoder.page.title = pubcoder.page.title || "16";
pubcoder.page.number = pubcoder.page.number || 16;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj1990_onLoad_activeActionGroupIndex = -1;
var obj1990_onLoad_runningActionsCount = 0;
var obj1990_onLoad_loopCount = 0;
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
		
obj1990_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1990_onLoad_activeActionGroupIndex = -1;
		$("#obj1990").trigger("obj1990_onLoad_ended");
		
		return;
	}
	window.obj1990_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_5275();
function wait_5275() {
	window.obj1990_onLoad_runningActionsCount = obj1990_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1990_onLoad_runningActionsCount = window.obj1990_onLoad_runningActionsCount - 1;
if (window.obj1990_onLoad_runningActionsCount == 0) {
	obj1990_onLoad_actionGroup1();
}
	}, 1000);
}












};
obj1990_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1990_onLoad_activeActionGroupIndex = -1;
		$("#obj1990").trigger("obj1990_onLoad_ended");
		
		return;
	}
	window.obj1990_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1990 
show_2000();
function show_2000() {
	var element = "#obj1990";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1990_onLoad_runningActionsCount = obj1990_onLoad_runningActionsCount + 1;

	var animationType = "bounceInUp";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1990_onLoad_runningActionsCount = window.obj1990_onLoad_runningActionsCount - 1;
if (window.obj1990_onLoad_runningActionsCount == 0) {
	obj1990_onLoad_actionGroup2();
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
		window.obj1990_onLoad_runningActionsCount = window.obj1990_onLoad_runningActionsCount - 1;
if (window.obj1990_onLoad_runningActionsCount == 0) {
	obj1990_onLoad_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1990_onLoad_runningActionsCount = window.obj1990_onLoad_runningActionsCount - 1;
if (window.obj1990_onLoad_runningActionsCount == 0) {
	obj1990_onLoad_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}


//	action: playMovie
//	target: obj2002 
playMovie_2004();
function playMovie_2004() {
	window.obj1990_onLoad_runningActionsCount = obj1990_onLoad_runningActionsCount + 1;
	var myVideo = $("#obj2002")[0];
	var playFromBeginning = false;
	var waitForCompletion = true;
	if (playFromBeginning) myVideo.currentTime = 0;
	myVideo.play();
	//myVideo.webkitEnterFullscreen();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1990_onLoad_runningActionsCount = window.obj1990_onLoad_runningActionsCount - 1;
if (window.obj1990_onLoad_runningActionsCount == 0) {
	obj1990_onLoad_actionGroup2();
}
		};
		// myVideo.addEventListener('pause', actionEnded, false);
		myVideo.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1990_onLoad_runningActionsCount = window.obj1990_onLoad_runningActionsCount - 1;
if (window.obj1990_onLoad_runningActionsCount == 0) {
	obj1990_onLoad_actionGroup2();
}
	}
}

















};
obj1990_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1990_onLoad_activeActionGroupIndex = -1;
		$("#obj1990").trigger("obj1990_onLoad_ended");
		
		return;
	}
	window.obj1990_onLoad_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





















/*
 *
 *   obj1990: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1990_onLoad_activeActionGroupIndex != -1) return;
var obj1990_onLoad_runningActionsCount = 0;
var obj1990_onLoad_loopCount = 0;
obj1990_onLoad_actionGroup0();
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
	
$("#obj2002").trigger('SCEventShow');
$("#obj1993").trigger('SCEventShow');
	
});