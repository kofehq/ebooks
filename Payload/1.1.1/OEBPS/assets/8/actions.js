pubcoder.projectID = pubcoder.projectID || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.id = pubcoder.project.id || "C58DD98ADA6D44539420920C7C601475";
pubcoder.project.title = pubcoder.project.title || "210723_Desaforismos";
pubcoder.page.id = pubcoder.page.id || 169;
pubcoder.page.title = pubcoder.page.title || "8";
pubcoder.page.number = pubcoder.page.number || 8;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj212_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj187_onTap_activeActionGroupIndex = -1;
var obj187_onTap_runningActionsCount = 0;
var obj187_onTap_loopCount = 0;
var obj187_onDrag_activeActionGroupIndex = -1;
var obj187_onDrag_runningActionsCount = 0;
var obj187_onDrag_loopCount = 0;
var obj187_onTouchDown_activeActionGroupIndex = -1;
var obj187_onTouchDown_runningActionsCount = 0;
var obj187_onTouchDown_loopCount = 0;
var obj212_onLoad_activeActionGroupIndex = -1;
var obj212_onLoad_runningActionsCount = 0;
var obj212_onLoad_loopCount = 0;
var obj362_onLoad_activeActionGroupIndex = -1;
var obj362_onLoad_runningActionsCount = 0;
var obj362_onLoad_loopCount = 0;
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
	
initAnimation_212();
function initAnimation_212()
{
        var targetObjectId = "#obj212";
        var widthSCAnimationObject = 1920;
        var heightSCAnimationObject = 960;
		var framesPerSecond = 12;
		var howManyLoops = 1;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj212 = $("#")[0];
        window.hasAudioTrack_obj212 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj212_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj212 = $(targetObjectId).spritespin("api");
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
		
obj187_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj187_onTap_activeActionGroupIndex = -1;
		$("#obj187").trigger("obj187_onTap_ended");
		
		return;
	}
	window.obj187_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj189 
show_193();
function show_193() {
	var element = "#obj189";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj187_onTap_runningActionsCount = obj187_onTap_runningActionsCount + 1;

	var animationType = "fadeInLeft";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj187_onTap_runningActionsCount = window.obj187_onTap_runningActionsCount - 1;
if (window.obj187_onTap_runningActionsCount == 0) {
	obj187_onTap_actionGroup1();
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
		window.obj187_onTap_runningActionsCount = window.obj187_onTap_runningActionsCount - 1;
if (window.obj187_onTap_runningActionsCount == 0) {
	obj187_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj187_onTap_runningActionsCount = window.obj187_onTap_runningActionsCount - 1;
if (window.obj187_onTap_runningActionsCount == 0) {
	obj187_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj187_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj187_onTap_activeActionGroupIndex = -1;
		$("#obj187").trigger("obj187_onTap_ended");
		
		return;
	}
	window.obj187_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj187 
hide_195();
function hide_195() {
	var element = "#obj187";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj187_onTap_runningActionsCount = obj187_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj187_onTap_runningActionsCount = window.obj187_onTap_runningActionsCount - 1;
if (window.obj187_onTap_runningActionsCount == 0) {
	obj187_onTap_actionGroup2();
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
		setTimeout(hide_195(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj187_onTap_runningActionsCount = window.obj187_onTap_runningActionsCount - 1;
if (window.obj187_onTap_runningActionsCount == 0) {
	obj187_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj187_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj187_onTap_activeActionGroupIndex = -1;
		$("#obj187").trigger("obj187_onTap_ended");
		
		return;
	}
	window.obj187_onTap_activeActionGroupIndex = 2;
	





















};
obj187_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj187_onTouchDown_activeActionGroupIndex = -1;
		$("#obj187").trigger("obj187_onTouchDown_ended");
		
		return;
	}
	window.obj187_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj187");
//	action: dragDrop
//	target: obj187 
dragDrop_192();
function dragDrop_192() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj187_onTouchDown_runningActionsCount = obj187_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj187');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj187_onTouchDown_runningActionsCount = window.obj187_onTouchDown_runningActionsCount - 1;
if (window.obj187_onTouchDown_runningActionsCount == 0) {
	obj187_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_192 = false;
    	var dropped_id_192;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_192 = true;
					dropped_id_192 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_192) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj187_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj187_onTouchDown_activeActionGroupIndex = -1;
		$("#obj187").trigger("obj187_onTouchDown_ended");
		
		return;
	}
	window.obj187_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj212_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj212_onLoad_activeActionGroupIndex = -1;
		$("#obj212").trigger("obj212_onLoad_ended");
		
		return;
	}
	window.obj212_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj212 
show_366();
function show_366() {
	var element = "#obj212";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj212_onLoad_runningActionsCount = obj212_onLoad_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj212_onLoad_runningActionsCount = window.obj212_onLoad_runningActionsCount - 1;
if (window.obj212_onLoad_runningActionsCount == 0) {
	obj212_onLoad_actionGroup1();
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
		window.obj212_onLoad_runningActionsCount = window.obj212_onLoad_runningActionsCount - 1;
if (window.obj212_onLoad_runningActionsCount == 0) {
	obj212_onLoad_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj212_onLoad_runningActionsCount = window.obj212_onLoad_runningActionsCount - 1;
if (window.obj212_onLoad_runningActionsCount == 0) {
	obj212_onLoad_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}







//	action: wait
wait_423();
function wait_423() {
	window.obj212_onLoad_runningActionsCount = obj212_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj212_onLoad_runningActionsCount = window.obj212_onLoad_runningActionsCount - 1;
if (window.obj212_onLoad_runningActionsCount == 0) {
	obj212_onLoad_actionGroup1();
}
	}, 1000);
}












};
obj212_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj212_onLoad_activeActionGroupIndex = -1;
		$("#obj212").trigger("obj212_onLoad_ended");
		
		return;
	}
	window.obj212_onLoad_activeActionGroupIndex = 1;
	


//	action: playAnimation 
//	target: obj212 
playAnimation_370();
function playAnimation_370() {
	var targetObjectId = "#obj212";
	var targetObject = $(targetObjectId)[0];
	window.obj212_onLoad_runningActionsCount = obj212_onLoad_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj212_onLoad_runningActionsCount = window.obj212_onLoad_runningActionsCount - 1;
if (window.obj212_onLoad_runningActionsCount == 0) {
	obj212_onLoad_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj212 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj212;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj212.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj212").one("obj212_animation_ended",function(event) {
		    window.obj212_onLoad_runningActionsCount = window.obj212_onLoad_runningActionsCount - 1;
if (window.obj212_onLoad_runningActionsCount == 0) {
	obj212_onLoad_actionGroup2();
}
		});
	}
 }










//	action: playAudio
//	target: obj410 
playAudio_406();
function playAudio_406() {
	window.obj212_onLoad_runningActionsCount = obj212_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj410")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
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
		    window.obj212_onLoad_runningActionsCount = window.obj212_onLoad_runningActionsCount - 1;
if (window.obj212_onLoad_runningActionsCount == 0) {
	obj212_onLoad_actionGroup2();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj212_onLoad_runningActionsCount = window.obj212_onLoad_runningActionsCount - 1;
if (window.obj212_onLoad_runningActionsCount == 0) {
	obj212_onLoad_actionGroup2();
}
	}
}








};
obj212_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj212_onLoad_activeActionGroupIndex = -1;
		$("#obj212").trigger("obj212_onLoad_ended");
		
		return;
	}
	window.obj212_onLoad_activeActionGroupIndex = 2;
	





















};
obj362_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj362_onLoad_activeActionGroupIndex = -1;
		$("#obj362").trigger("obj362_onLoad_ended");
		
		return;
	}
	window.obj362_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_421();
function wait_421() {
	window.obj362_onLoad_runningActionsCount = obj362_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj362_onLoad_runningActionsCount = window.obj362_onLoad_runningActionsCount - 1;
if (window.obj362_onLoad_runningActionsCount == 0) {
	obj362_onLoad_actionGroup1();
}
	}, 2000);
}












};
obj362_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj362_onLoad_activeActionGroupIndex = -1;
		$("#obj362").trigger("obj362_onLoad_ended");
		
		return;
	}
	window.obj362_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj361 
show_424();
function show_424() {
	var element = "#obj361";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj362_onLoad_runningActionsCount = obj362_onLoad_runningActionsCount + 1;

	var animationType = "fadeInDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj362_onLoad_runningActionsCount = window.obj362_onLoad_runningActionsCount - 1;
if (window.obj362_onLoad_runningActionsCount == 0) {
	obj362_onLoad_actionGroup2();
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
		window.obj362_onLoad_runningActionsCount = window.obj362_onLoad_runningActionsCount - 1;
if (window.obj362_onLoad_runningActionsCount == 0) {
	obj362_onLoad_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj362_onLoad_runningActionsCount = window.obj362_onLoad_runningActionsCount - 1;
if (window.obj362_onLoad_runningActionsCount == 0) {
	obj362_onLoad_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj362_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj362_onLoad_activeActionGroupIndex = -1;
		$("#obj362").trigger("obj362_onLoad_ended");
		
		return;
	}
	window.obj362_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj362 
show_420();
function show_420() {
	var element = "#obj362";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj362_onLoad_runningActionsCount = obj362_onLoad_runningActionsCount + 1;

	var animationType = "fadeInRight";
	var animationDurationMs = 2000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj362_onLoad_runningActionsCount = window.obj362_onLoad_runningActionsCount - 1;
if (window.obj362_onLoad_runningActionsCount == 0) {
	obj362_onLoad_actionGroup3();
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
		window.obj362_onLoad_runningActionsCount = window.obj362_onLoad_runningActionsCount - 1;
if (window.obj362_onLoad_runningActionsCount == 0) {
	obj362_onLoad_actionGroup3();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(2000, function() {
	// 		setTimeout(function() {
	// 			window.obj362_onLoad_runningActionsCount = window.obj362_onLoad_runningActionsCount - 1;
if (window.obj362_onLoad_runningActionsCount == 0) {
	obj362_onLoad_actionGroup3();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj362_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj362_onLoad_activeActionGroupIndex = -1;
		$("#obj362").trigger("obj362_onLoad_ended");
		
		return;
	}
	window.obj362_onLoad_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj363 
show_425();
function show_425() {
	var element = "#obj363";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj362_onLoad_runningActionsCount = obj362_onLoad_runningActionsCount + 1;

	var animationType = "fadeInUp";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj362_onLoad_runningActionsCount = window.obj362_onLoad_runningActionsCount - 1;
if (window.obj362_onLoad_runningActionsCount == 0) {
	obj362_onLoad_actionGroup4();
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
		window.obj362_onLoad_runningActionsCount = window.obj362_onLoad_runningActionsCount - 1;
if (window.obj362_onLoad_runningActionsCount == 0) {
	obj362_onLoad_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj362_onLoad_runningActionsCount = window.obj362_onLoad_runningActionsCount - 1;
if (window.obj362_onLoad_runningActionsCount == 0) {
	obj362_onLoad_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj362_onLoad_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj362_onLoad_activeActionGroupIndex = -1;
		$("#obj362").trigger("obj362_onLoad_ended");
		
		return;
	}
	window.obj362_onLoad_activeActionGroupIndex = 4;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



/*
 *
 *   obj187: Event Touch Down
 *
 */
$("#obj187").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj187_onTap_activeActionGroupIndex != -1) return;
var obj187_onTap_runningActionsCount = 0;
var obj187_onTap_loopCount = 0;
obj187_onTap_actionGroup0();
});

/*
 *
 *   obj187: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj187");
	var winTarget = document.getElementById("obj187");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj187").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj187_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj187_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj187_onTouchDown_activeActionGroupIndex != -1) return;
var obj187_onTouchDown_runningActionsCount = 0;
var obj187_onTouchDown_loopCount = 0;
obj187_onTouchDown_actionGroup0();
});

















/*
 *
 *   obj212: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj212_onLoad_activeActionGroupIndex != -1) return;
var obj212_onLoad_runningActionsCount = 0;
var obj212_onLoad_loopCount = 0;
obj212_onLoad_actionGroup0();
});
















/*
 *
 *   obj362: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj362_onLoad_activeActionGroupIndex != -1) return;
var obj362_onLoad_runningActionsCount = 0;
var obj362_onLoad_loopCount = 0;
obj362_onLoad_actionGroup0();
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
	
$("#obj187").trigger('SCEventShow');
$("#obj212").trigger('SCEventShow');
$("#obj410").trigger('SCEventShow');
	
});