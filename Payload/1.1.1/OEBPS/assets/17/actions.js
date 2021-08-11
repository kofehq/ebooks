pubcoder.projectID = pubcoder.projectID || "9BAFAFFC54C447E991DC838D64F52FA6";
pubcoder.project.id = pubcoder.project.id || "9BAFAFFC54C447E991DC838D64F52FA6";
pubcoder.project.title = pubcoder.project.title || "210721_a arte muda da fuga";
pubcoder.page.id = pubcoder.page.id || 107;
pubcoder.page.title = pubcoder.page.title || "17";
pubcoder.page.number = pubcoder.page.number || 17;
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
var obj1558_onTap_activeActionGroupIndex = -1;
var obj1558_onTap_runningActionsCount = 0;
var obj1558_onTap_loopCount = 0;
var obj2230_onTap_activeActionGroupIndex = -1;
var obj2230_onTap_runningActionsCount = 0;
var obj2230_onTap_loopCount = 0;
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
		
obj1558_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1558_onTap_activeActionGroupIndex = -1;
		$("#obj1558").trigger("obj1558_onTap_ended");
		
		return;
	}
	window.obj1558_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1561 
hide_1567();
function hide_1567() {
	var element = "#obj1561";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1558_onTap_runningActionsCount = obj1558_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1558_onTap_runningActionsCount = window.obj1558_onTap_runningActionsCount - 1;
if (window.obj1558_onTap_runningActionsCount == 0) {
	obj1558_onTap_actionGroup1();
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
		setTimeout(hide_1567(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1558_onTap_runningActionsCount = window.obj1558_onTap_runningActionsCount - 1;
if (window.obj1558_onTap_runningActionsCount == 0) {
	obj1558_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1558_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1558_onTap_activeActionGroupIndex = -1;
		$("#obj1558").trigger("obj1558_onTap_ended");
		
		return;
	}
	window.obj1558_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1556 
show_1568();
function show_1568() {
	var element = "#obj1556";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1558_onTap_runningActionsCount = obj1558_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1558_onTap_runningActionsCount = window.obj1558_onTap_runningActionsCount - 1;
if (window.obj1558_onTap_runningActionsCount == 0) {
	obj1558_onTap_actionGroup2();
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
		window.obj1558_onTap_runningActionsCount = window.obj1558_onTap_runningActionsCount - 1;
if (window.obj1558_onTap_runningActionsCount == 0) {
	obj1558_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1558_onTap_runningActionsCount = window.obj1558_onTap_runningActionsCount - 1;
if (window.obj1558_onTap_runningActionsCount == 0) {
	obj1558_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}











//	action: playAudio
//	target: obj1556 
playAudio_1566();
function playAudio_1566() {
	window.obj1558_onTap_runningActionsCount = obj1558_onTap_runningActionsCount + 1;
	var myAudio = $("#obj1556")[0];
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
		    window.obj1558_onTap_runningActionsCount = window.obj1558_onTap_runningActionsCount - 1;
if (window.obj1558_onTap_runningActionsCount == 0) {
	obj1558_onTap_actionGroup2();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1558_onTap_runningActionsCount = window.obj1558_onTap_runningActionsCount - 1;
if (window.obj1558_onTap_runningActionsCount == 0) {
	obj1558_onTap_actionGroup2();
}
	}
}








};
obj1558_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1558_onTap_activeActionGroupIndex = -1;
		$("#obj1558").trigger("obj1558_onTap_ended");
		
		return;
	}
	window.obj1558_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj1556 
hide_1570();
function hide_1570() {
	var element = "#obj1556";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1558_onTap_runningActionsCount = obj1558_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1558_onTap_runningActionsCount = window.obj1558_onTap_runningActionsCount - 1;
if (window.obj1558_onTap_runningActionsCount == 0) {
	obj1558_onTap_actionGroup3();
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
		setTimeout(hide_1570(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1558_onTap_runningActionsCount = window.obj1558_onTap_runningActionsCount - 1;
if (window.obj1558_onTap_runningActionsCount == 0) {
	obj1558_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1561 
show_1569();
function show_1569() {
	var element = "#obj1561";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1558_onTap_runningActionsCount = obj1558_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1558_onTap_runningActionsCount = window.obj1558_onTap_runningActionsCount - 1;
if (window.obj1558_onTap_runningActionsCount == 0) {
	obj1558_onTap_actionGroup3();
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
		window.obj1558_onTap_runningActionsCount = window.obj1558_onTap_runningActionsCount - 1;
if (window.obj1558_onTap_runningActionsCount == 0) {
	obj1558_onTap_actionGroup3();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1558_onTap_runningActionsCount = window.obj1558_onTap_runningActionsCount - 1;
if (window.obj1558_onTap_runningActionsCount == 0) {
	obj1558_onTap_actionGroup3();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1558_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1558_onTap_activeActionGroupIndex = -1;
		$("#obj1558").trigger("obj1558_onTap_ended");
		
		return;
	}
	window.obj1558_onTap_activeActionGroupIndex = 3;
	





















};
obj2230_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2230_onTap_activeActionGroupIndex = -1;
		$("#obj2230").trigger("obj2230_onTap_ended");
		
		return;
	}
	window.obj2230_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2232();
function goToPage_2232() {
	window.obj2230_onTap_runningActionsCount = obj2230_onTap_runningActionsCount + 1;
	$("#anchor138")[0].click();
	window.obj2230_onTap_runningActionsCount = window.obj2230_onTap_runningActionsCount - 1;
if (window.obj2230_onTap_runningActionsCount == 0) {
	obj2230_onTap_actionGroup1();
}
}




















};
obj2230_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2230_onTap_activeActionGroupIndex = -1;
		$("#obj2230").trigger("obj2230_onTap_ended");
		
		return;
	}
	window.obj2230_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj1558: Event Touch Down
 *
 */
$("#obj1558").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1558_onTap_activeActionGroupIndex != -1) return;
var obj1558_onTap_runningActionsCount = 0;
var obj1558_onTap_loopCount = 0;
obj1558_onTap_actionGroup0();
});
















/*
 *
 *   obj2230: Event Touch Down
 *
 */
$("#obj2230").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2230_onTap_activeActionGroupIndex != -1) return;
var obj2230_onTap_runningActionsCount = 0;
var obj2230_onTap_loopCount = 0;
obj2230_onTap_actionGroup0();
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
	
$("#obj1563").trigger('SCEventShow');
$("#obj108").trigger('SCEventShow');
$("#obj109").trigger('SCEventShow');
$("#obj110").trigger('SCEventShow');
$("#obj1558").trigger('SCEventShow');
$("#obj1561").trigger('SCEventShow');
$("#obj2230").trigger('SCEventShow');
	
});