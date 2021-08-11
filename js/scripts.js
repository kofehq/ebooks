/**
 * @author Angelo Scicolone <angelo.scicolone@pubcoder.com>
 * @copyright Copyright 2021 PubCoder srl. All rights reserved.
 */

 
/**
* The global PubViewer object, which manages the javascript side of XReader
* @global
*/
var PubViewer = PubViewer || {

	/**
	 * Whether XReader was already intialized
	 * @type {boolean}
	 * @memberof PubViewer
	 */
	inited: false,

	/**
	 * Latest id used to send messages to the native app via jsBridge
	 * @type {number}
	 * @memberof PubViewer
	 */
	sentMsgID : 0,
	pageInstanceID : 1,

	/**
	 * Set by onTouchStart as a time reference of when the user finger was initially placed on the screen
	 * @type {number}
	 * @memberof PubViewer
	 */
	touchStartTime : Date.now(),

	/**
	 * Set by onTouchStart to true if it was not handled by content
	 * @type {number}
	 * @memberof PubViewer
	 */
	touchActionDefaultPrevented : false,

	/**
	 * Set by onTouchStart to the X coordinate of the touchstart event
	 * @type {number}
	 * @memberof PubViewer
	 */
	touchStartX : 0,

	/**
	 * Set by onTouchStart to the Y coordinate of the touchstart event
	 * @type {number}
	 * @memberof PubViewer
	 */
	touchStartY : 0,

	/**
	 * Incremented by onTouchMove, every time it is called
	 * @type {number}
	 * @memberof PubViewer
	 */
	touchMoves : 0,
	
	/**
	 * True if the user is currently dragging/swiping pages, false otherwise
	 * @type {boolean}
	 * @memberof PubViewer
	 */
	draggingPage : false,

	/**
	 * True if the user just finished dragging/swiping pages, false otherwise
	 * @type {boolean}
	 * @memberof PubViewer
	 */
	wasDraggingPage : false,

	/**
	 * True if the user page dragging/swiping is allowed at the moment, false otherwise
	 * @type {boolean}
	 * @memberof PubViewer
	 */
	canDragPage : false,

	/**
	 * True if the user page dragging/swiping to left is allowed at the moment, false otherwise
	 * @type {boolean}
	 * @memberof PubViewer
	 */
	canDragPageLeft: false,

	/**
	 * True if the user page dragging/swiping to right is allowed at the moment, false otherwise
	 * @type {boolean}
	 * @memberof PubViewer
	 */
	canDragPageRight: false,

	/**
	 * Current drag delta applied to pages UI as a translation, derived from the user horizontal finger swipe
	 * @type {number}
	 * @memberof PubViewer
	 */
	currentDragX : 0,

	/**
	 * Set by handleReaderTouchAction as a time reference of when the last touchend/mouseup event handled by the reader happened
	 * @type {number}
	 * @memberof PubViewer
	 */
	lastReaderTouchEndTime : 0,

	/**
	 * Set by handleReaderTouchAction as a time reference of when the last click event handled by the reader happened
	 * @type {number}
	 * @memberof PubViewer
	 */
	lastReaderTapTime : 0,

	/**
	 * Width of the entire reader window/container
	 * @type {number}
	 * @memberof PubViewer
	 */
	containerWidth : 0,

	/**
	 * Height of the entire reader window/container
	 * @type {number}
	 * @memberof PubViewer
	 */
	containerHeight : 0,

	/**
	 * True if currently displaying double pages / facing pages, false otherwise
	 * @type {boolean}
	 * @memberof PubViewer
	 */
	isDoublePage : true,

	/**
	 * PubViewer.Android native app sets the reader zoom level here
	 * @type {number}
	 * @memberof PubViewer
	 */
	zoom : 1,

	/**
	 * The width of a page in the current rendition
	 * @type {number}
	 * @memberof PubViewer
	 */
	pageW : 0,

	/**
	 * The height of a page in the current rendition
	 * @type {number}
	 * @memberof PubViewer
	 */
	pageH : 0,

	/**
	 * The zoom ratio currently applied to each page to fit the reader screen
	 * @type {number}
	 * @memberof PubViewer
	 */
	pageZoom: 0,

	/**
	 * True if a page-turn animation is currently running, false otherwise
	 * @type {boolean}
	 * @memberof PubViewer
	 */
	isTurningPages: false,

	/**
	 * An orientation value that overrides the main window orientation, or null to use window.orientation
	 * PubViewer.Android sets this nativaley, since in Android 4.4 window.orientation does not change automatically when turning the device upside down
	 * @type {number}
	 * @memberof PubViewer
	 */
	overriddenOrientation: null,


	/**
	 * An object containing document settings
	 * @type {Object}
	 * @memberof PubViewer
	 */
	Document : {
		Settings: {
			appName: "PubCoder Project",
			appIdentifier: "",
			facingPagesInLandscape: true,
			lockOrientation:false,
			restoreLatestPage:true
		},
		Renditions : {
			Mobile : [],
			Desktop : []
		},
	},


	/**
	 * An object containing media overlay settings
	 * @type {Object}
	 * @memberof PubViewer
	 */
	MediaOverlay: {
		/**
		 * True if media overlays are enabled, false otherwise
		 * @memberof PubViewer.MediaOverlay
		 * @type {boolean}
		 */
		IsPlaying: false,

		/**
		 * The Id of the DOM element to be currently highlighted
		 * @memberof PubViewer.MediaOverlay
		 * @type {string}
		 */
		CurrentElement : null,

		/**
		 * The CSS class to be applied to the highlighted element
		 * @memberof PubViewer.MediaOverlay
		 * @type {string}
		 */
		ActiveElementClass : "-epub-media-overlay-active", // for compatibility
	},


	/**
	 * An object containing definitions of supported platforms
	 * @type {Object}
	 * @memberof PubViewer
	 */
	Platform : {
		iOS : "iOS",
		Android : "Android",
		Web : "Web",
		Unknown : "Unknown"
	},

	/**
	 * An object containing definitions of supported idioms
	 * @type {Object}
	 * @memberof PubViewer
	 */
	Idiom : {
		Phone : "Phone",
		Tablet : "Tablet",
		Desktop : "Desktop",
		Unknown : "Unknown"
	},


	/**
	 * An object containing values and functions to check version of the native app.
	 * Values of this object are set by the native app
	 * @type {Object}
	 * @memberof PubViewer
	 */
	Version : {
		Platform : "Unknown",
		Idiom : "Unknown",
		Major : 0,
		Minor : 0,
		Patch : 0,
		checkVersionRequired : function(rMajor, rMinor, rPatch) {
				if (PubViewer.Version.Major > rMajor) {
						return true;
				} else if (PubViewer.Version.Major == rMajor) {
						if (PubViewer.Version.Minor > rMinor) {
								return true
						} else if (PubViewer.Version.Minor == rMinor) {
								return (PubViewer.Version.Patch >= rPatch);
						}
				}
				return false;
		},
	},


	/**
	 * An object containing various reader settings coming from the native app
	 * @type {Object}
	 * @memberof PubViewer
	 */
	ReaderSettings : {
		EnableDoublePage : false,
		EnableRightToLeft : false,
		EnableSwipeToNavigate: true,
		EnablePinchToZoom: true,
		EnableTouchToOpenAppMenu: true,
		EnableTapToSeekReadaloud: true,
		ViewportFitCover: true
	},


	/**
	 * Returns true if reader is currently zoomed, false otherwise
	 * @type {Object}
	 * @memberof PubViewer
	 * @returns {boolean} true if reader is currently zoomed, false otherwise
	 */
	getWindowZoomedByUser : function() {
		if (PubViewer.Version.Platform == PubViewer.Platform.Android) {
			return (PubViewer.zoom > 1); // sometimes zoom out can actually bring the value to 0.9999, not 1
		} else if (typeof(window.visualViewport) !== "undefined" && typeof(window.visualViewport.scale) === "number") {
			return (window.visualViewport.scale > 1);
		} else {
			return (document.documentElement.clientWidth - window.innerWidth > 0.001);
		}
	},


	/**
	 * Inits the JavaScript side of XReader, e.g. binding all necessary events.
	 * When initialization is completed, notifies the native side so it can start loading content page(s)
	 * @memberof PubViewer
	 */
	init: function () {
		if (document.body == null) {
			// document is not yet ready. retry in a few moments
			setTimeout(function () { PubViewer.init(); }, 50);
			return;
		}

		if (PubViewer.inited) {
			return;
		} else {
			// console.log("initing");
			PubViewer.inited = true;
		}

		$("body").bind('touchstart mousedown', function(ev, iframeEvent){
			PubViewer.onTouchStart(ev, iframeEvent);
		});

		$("body").bind('touchmove', function(ev, iframeEvent){
			PubViewer.onTouchMove(ev, iframeEvent);
		});

		$("body").bind('touchend mouseup', function(ev, iframeEvent){
			PubViewer.onTouchEnd(ev, iframeEvent);
		});

		$("#container").bind('click', function(ev, iframeEvent){
			PubViewer.onTap(ev, iframeEvent);
		});

		$("#overlay").bind('touchstart mousedown', function(ev, iframeEvent){
			PubViewer.onTouchStart(ev, iframeEvent);
		});

		$("#overlay").bind('touchmove', function(ev, iframeEvent){
			PubViewer.onTouchMove(ev, iframeEvent);
		});

		$("#overlay").bind('touchend mouseup', function(e){
			PubViewer.onTouchEnd(e);
		});

		$("#overlay").bind('click', function(ev, iframeEvent){
			PubViewer.onTap(ev, iframeEvent);
		});

		$(window).bind('keydown', function(ev, iframeEvent){
			PubViewer.onKeyDown(ev, iframeEvent);
		});

		// PubViewer.adjustInterface();

		PubViewer.callAppMethod("Inited", [window.innerWidth, window.innerHeight]);

		$(window).resize(function() {
			PubViewer._lastKnownWindowInnerWidth = window.innerWidth;
			PubViewer._lastKnownWindowInnerHeight = window.innerHeight;
			PubViewer.onWindowResize();
		});
		if (PubViewer.Version.Platform == PubViewer.Platform.Web) {
			// resize events are not fired while page (or its iframes) are loading, so this
			// is a workaround to avoid UI to screw up - e.g. changing device orientation 
			// while content pages are loading
			window.setInterval(function () {
				if (PubViewer._lastKnownWindowInnerWidth != window.innerWidth ||
					PubViewer._lastKnownWindowInnerHeight != window.innerHeight) {
						PubViewer._lastKnownWindowInnerWidth = window.innerWidth;
						PubViewer._lastKnownWindowInnerHeight = window.innerHeight;
						PubViewer.onWindowResize();
					}
			}, 250);
		}
	},


	/**
	 * Handles window resizing event, eventually notifying the native side that orientation has changed
	 * @memberof PubViewer
	 */
	onWindowResize: function() {
		if (PubViewer.Version.Platform == PubViewer.Platform.Web) {
			var width = window.innerWidth;
			var height = window.innerHeight;
			if (PubViewer.getWindowZoomedByUser()) {
				width = document.documentElement.clientWidth;
				height = document.documentElement.clientHeight;
			}
			PubViewer.callAppMethod("WindowResize", [width, height]);
			return;
		}
		
		if ((window.innerWidth > window.innerHeight && PubViewer.containerWidth > PubViewer.containerHeight) ||
			(window.innerWidth < window.innerHeight && PubViewer.containerWidth < PubViewer.containerHeight)) {
			// orientation didn't change zooming on Android 4.4, window size changes temporarily
			return;
		} else if (window.innerWidth == window.innerHeight) {
			console.log("skipped onWindowResize at " + window.innerWidth + " x " + window.innerHeight);
			// probably device was rotated and innerHeight was not yet updated, retry in a few moments
			setTimeout(PubViewer.onWindowResize, 10);
			return;
		}
		PubViewer.callAppMethod("WindowResize", [window.innerWidth, window.innerHeight]);
	},


	setOverriddenOrientation: function(orientation) {
		PubViewer.overriddenOrientation = orientation;
	},


	/**
	 * Handles touch/tap reader action.
	 * Evantually tells the app side to show/hide menu
	 * @memberof PubViewer
	 * @param {Event} e original The tap/touchend/mouseup event
	 */
	handleReaderTouchAction : function(e) {
		if (e == null) return
		if (e.originalEvent != null) {
			// console.log(e.type, e.defaultPrevented);
			e = e.originalEvent;
		}
		if (e.defaultPrevented) return;
		
		if (e.type == "touchend" || e.type == "mouseup") {
			PubViewer.lastReaderTouchEndTime = Date.now();
		} else if (e.type == "click") {
			PubViewer.lastReaderTapTime = Date.now();
		} else {
			return;
		}
		if (PubViewer.Version.Platform != PubViewer.Platform.Web ||
			Math.abs(PubViewer.lastReaderTouchEndTime - PubViewer.lastReaderTapTime) < 250) {
			PubViewer.callAppMethod("ToggleMenu");
		}
	},


	/**
	 * Handles tap event coming from page content iframe or reader UI.
	 * @memberof PubViewer
	 * @param {Event} ev The tap event, eventually re-triggered from the outer PubViewer object
	 * @param {Event} iframeEvent The original event catched in the iframe, or null if event comes from the XReader UI
	 */
	onTap: function(ev, iframeEvent) {
		// choose the right event object and sync preventDefault
		var e;
		if (iframeEvent != null) {
			// console.log("catched iframe event! " + iframeEvent.defaultPrevented);
			e = iframeEvent;
			if (iframeEvent.defaultPrevented) e.preventDefault();
		} else {
			e = ev.originalEvent;
			if (ev.defaultPrevented) e.preventDefault();
		}
		// console.log("reader tap", e);

		// eventually deny tap to show menu if click was default-prevented or originated from specific controls
		var eventComesFromRealClick = (e.isTrusted == true || e.x != 0 || e.y != 0); // both isTrusted and screenX/Y are not set correctly on Android 4.4
		var neverShowMenuObjects = [ "textarea", "input", "button", "select", "label" ];
		if (e.defaultPrevented || !eventComesFromRealClick || PubViewer.wasDraggingPage || (e.target != null && neverShowMenuObjects.indexOf(e.target.localName) >= 0)) {
			// console.log("canceled click");
			PubViewer.wasDraggingPage = false;
			PubViewer.touchActionDefaultPrevented = true;
			// e.stopPropagation();
			return false;
		}
		// console.log(e.target);

		// eventually deny tap to show menu on video or audio with controls
		neverSwipeObjects = [ "video", "audio" ];
		if (e.target != null && neverSwipeObjects.indexOf(e.target.localName) >= 0 && e.target.controls) {
			// console.log("canceled click");
			PubViewer.wasDraggingPage = false;
			PubViewer.touchActionDefaultPrevented = true;
			// e.stopPropagation();
			return false;
		}

		// tell native app to toggle menu
		PubViewer.handleReaderTouchAction(e);
	},


	/**
	 * Handles keydown event coming from page content iframe or reader UI.
	 * Evantually tells native side to switch page if left/right arrow key was pressed
	 * @memberof PubViewer
	 * @param {Event} ev The keydown event, eventually re-triggered from the outer PubViewer object
	 * @param {Event} iframeEvent The original event catched in the iframe, or null if event comes from the XReader UI
	 */
	onKeyDown: function (ev, iframeEvent) {
		// choose the right event object and sync preventDefault
		var e;
		if (iframeEvent != null) {
			// console.log("catched iframe event! " + iframeEvent.defaultPrevented);
			e = iframeEvent;
			if (iframeEvent.defaultPrevented) e.preventDefault();
		} else {
			e = ev.originalEvent;
			if (ev.defaultPrevented) e.preventDefault();
		}
		// console.log(e);

		// eventually deny page swipe
		var neverShowMenuObjects = [ "textarea", "input" ];
		if (e.defaultPrevented || PubViewer.isTurningPages || (e.target != null && neverShowMenuObjects.indexOf(e.target.localName) >= 0)) {
			// console.log("canceled arrow key page change");
			return false;
		}
		
		if (PubViewer.ReaderSettings.EnableSwipeToNavigate || PubViewer.ReaderSettings.EnableNavigationArrows) {
			if (e.keyCode == 39) { // arrow right
				PubViewer.callAppMethod("GoToPageAtRight", []);
			} else if (e.keyCode == 37) { // arrow left
				PubViewer.callAppMethod("GoToPageAtLeft", []);
			}
		}
	},


	/**
	 * Handles touchstart event coming from page content iframe or reader UI.
	 * This includes allowing or denying page swipe, that will later be handled by onTouchMove
	 * @memberof PubViewer
	 * @param {Event} ev The touchstart event, eventually re-triggered from the outer PubViewer object
	 * @param {Event} iframeEvent The original event catched in the iframe, or null if event comes from the XReader UI
	 */
	onTouchStart: function(ev, iframeEvent) {
		// console.log("body.touchstart");
		PubViewer.touchStartTime = Date.now();
		PubViewer.touchActionDefaultPrevented = true; // will be set to false at the end of the function if every other check fails

		// choose the right event object and sync preventDefault
		var e;
		if (iframeEvent != null) {
			// console.log("catched iframe event! " + iframeEvent.defaultPrevented);
			e = iframeEvent;
			if (iframeEvent.defaultPrevented) e.preventDefault();
		} else {
			e = ev.originalEvent;
			if (ev.defaultPrevented) e.preventDefault();
		}
		// console.log(e);

		// ignore touch if default is prevented of reader is already handling page-turning
		if (e.defaultPrevented || PubViewer.isTurningPages) {
			// e.stopPropagation();
			return false;
		}
		
		// eventually ignore touches started on focused text controls, to allow cursor dragging instead
		var neverSwipeObjects = [ "textarea", "input" ];
		if (e.target != null && neverSwipeObjects.indexOf(e.target.localName) >= 0 && $(e.target).is(":focus")) {
			return false;
		}

		// eventually ignore touches started on audio controls, to allow timeline cursor dragging instead
		neverSwipeObjects = [ "audio" ];
		if (e.target != null && neverSwipeObjects.indexOf(e.target.localName) >= 0 && e.target.controls) {
			return false;
		}

		// eventually ignore touches started on video with controls, to allow timeline cursor dragging instead
		neverSwipeObjects = [ "video" ];
		if (e.target != null && neverSwipeObjects.indexOf(e.target.localName) >= 0 && e.target.controls) {
			return false;
			// the following ignored touches only if started on lower end of video, to allow page drag when not touching
			// controls, but does not work on iOS when page is zoomed
			// var limitY = e.target.offsetTop + e.target.offsetHeight - 60;
			// console.log("touchY: " + e.changedTouches[0].screenY);
			// console.log("limitY: " + limitY);
			// if (e.changedTouches[0].screenY > limitY) return false;
		}

		// eventually ignore touches started on horizontally-scrollable elements
		if (e.target != null) {
			var el = e.target;
			while (el != null && !el.classList.contains("SCContent") && !el.classList.contains("SCOverlay") &&
							!el.classList.contains("SCPage") && el.nodeName != "body") {
				// console.log(el);
				var cs = window.getComputedStyle(el);
				if (cs["overflow-x"] == "scroll") {
					PubViewer.canDragPage = false;
					return false;
				}
				el = el.parentElement;
			}
		}

		// eventually start page dragging
		if (PubViewer.ReaderSettings.EnableSwipeToNavigate && e.type == "touchstart" && e.touches.length == 1 && !PubViewer.getWindowZoomedByUser()) {
			PubViewer.cancelPageSwitch(false);
			PubViewer.wasDraggingPage = false;
			PubViewer.draggingPage = false;
			PubViewer.canDragPage = true;
			PubViewer.touchMoves = 0;
			PubViewer.touchStartX = e.changedTouches[0].screenX;
			PubViewer.touchStartY = e.changedTouches[0].screenY;
			PubViewer.currentDragX = 0;
			// console.log("TouchStart: " + PubViewer.touchStartX + ", " + PubViewer.touchStartY);
			// PubViewer.callAppMethod("TouchStart", [PubViewer.touchStartX, PubViewer.touchStartY]);
			// e.preventDefault(); // preventing default here will make pinch to zoom not work
			// console.log("qui2");
		}
		
		// touch start was handled by reader
		PubViewer.touchActionDefaultPrevented = false;
	},


	/**
	 * Handles touchmove events coming from page content iframe or reader UI.
	 * This includes code for actually swiping between pages, if previously allowed by onTouchStart
	 * @memberof PubViewer
	 * @param {Event} ev The touchmove event, eventually re-triggered from the outer PubViewer object
	 * @param {Event} iframeEvent The original event catched in the iframe, or null if event comes from the XReader UI
	 */
	onTouchMove: function(ev, iframeEvent){
		// console.log(iframeEvent);
		// console.log("body.touchmove");
		var e;
		if (iframeEvent != null) {
			// console.log("catched iframe event! " + iframeEvent.defaultPrevented);
			e = iframeEvent;
			if (iframeEvent.defaultPrevented) e.preventDefault();
		} else {
			e = ev.originalEvent;
			if (ev.defaultPrevented) e.preventDefault();
		}
		// console.log(e);
		// console.log(ev);
		if (e.defaultPrevented) {
			// console.log("touchMove defaultPrevented");
			// PubViewer.canDragPage = false;
			// e.stopPropagation();
			return false;
		}
		// console.log(e.type, e.view, e.view.getSelection().toString());
		if (e.type == "touchmove" && e.view.getSelection().toString().length > 0) {
			// don't drag page to allow drag-to-select-text
			console.log("touchMove canceled to allow drag-to-select-text");
			return false;
		}
		if (e.touches.length == 1 && PubViewer.canDragPage) {
			PubViewer.touchMoves++;
			var multiplier = (PubViewer.Version.Platform == PubViewer.Platform.Android ? (PubViewer.containerHeight / screen.height) : 1.0);
			var dx = (e.changedTouches[0].screenX - PubViewer.touchStartX) * multiplier;
			var dy = (e.changedTouches[0].screenY - PubViewer.touchStartY) * multiplier;
			// console.log("TouchMove: " + e.changedTouches[0].screenX + " - " + PubViewer.touchStartX + " = " + dx);
			if (PubViewer.touchMoves > 1) {
				// PubViewer.callAppMethod("TouchMove", [dx, dy]);
			}
			if (!PubViewer.draggingPage) {
				// if drag has already started, go on with the drag, otherwise, check before allowing the drag
				if (Math.abs(dx) <= Math.abs(dy)) return;
				if (Math.abs(dx) < 10) return;
				// if ((dx > 0 && !PubViewer.canDragPageRight) || (dx < 0 && !PubViewer.canDragPageLeft)) return; // drag is allowed here but canceled later on
				if (PubViewer.getWindowZoomedByUser()) return;
			}
			
			if (!(e.ownerDocument == document && e.target.id == "overlay")) e.preventDefault(); // preventing default will make vertical scrolling not work / not preventing it will make event fire only once on Android 4.4
			PubViewer.draggingPage = true;

			// try to load the loading images before they are actually used, to avoid flickering
			// if (PubViewer.Version.Platform != PubViewer.Platform.Android) {
			var prepareWrapperOne = ($("#ReaderPageOne").css("opacity") == "1" && $("#ReaderPageOne").css("display") == "block"); // otherwise previous page is still loading and wrapper background is visible!!
			var prepareWrapperTwo = ($("#ReaderPageTwo").css("opacity") == "1" && $("#ReaderPageTwo").css("display") == "block"); // otherwise previous page is still loading and wrapper background is visible!!
			if (PubViewer.currentDragX <= 0 && dx > 0) {
				if (prepareWrapperOne) document.getElementById('ReaderPageOneWrapper').style.backgroundImage = document.getElementById('ReaderLeftThumbnailOne').style.backgroundImage;
				if (prepareWrapperTwo) document.getElementById('ReaderPageTwoWrapper').style.backgroundImage = document.getElementById('ReaderLeftThumbnailTwo').style.backgroundImage;
			} else if (PubViewer.currentDragX >= 0 && dx < 0) {
				if (prepareWrapperOne) document.getElementById('ReaderPageOneWrapper').style.backgroundImage = document.getElementById('ReaderRightThumbnailOne').style.backgroundImage;
				if (prepareWrapperTwo) document.getElementById('ReaderPageTwoWrapper').style.backgroundImage = document.getElementById('ReaderRightThumbnailTwo').style.backgroundImage;
			}
			// }

			// var pageOneContainer = document.getElementById('ReaderPageOne');
			// var pageTwoContainer = document.getElementById('ReaderPageTwo');
			// $(pageOneContainer).hide();
			// $(pageTwoContainer).hide();

			PubViewer.currentDragX = dx;
			document.getElementById('container').style.webkitTransform = "translate3d(" + dx + "px, 0, 0)";
		
		}

	},


	/**
	 * Handles touchend events coming from page content iframe or reader UI.
	 * This includes code for actually deciding if we have to switch page after a page swipe handled by onTouchMove
	 * @memberof PubViewer
	 * @param {Event} ev The touchend event, eventually re-triggered from the outer PubViewer object
	 * @param {Event} iframeEvent The original event catched in the iframe, or null if event comes from the XReader UI
	 */
	onTouchEnd: function(ev, iframeEvent){
		PubViewer.canDragPage = false;

		var e;
		if (iframeEvent != null) {
			// console.log("catched iframe event! " + iframeEvent.defaultPrevented);
			e = iframeEvent;
			if (iframeEvent.defaultPrevented) e.preventDefault();
		} else {
			e = ev.originalEvent;
			if (ev.defaultPrevented) e.preventDefault();
		}

		if (e.defaultPrevented) {
			PubViewer.touchActionDefaultPrevented = true;
			return true;
		}
		var ms = Date.now() - PubViewer.touchStartTime;
		var speed = (Math.abs(PubViewer.currentDragX)/PubViewer.containerWidth) / (ms/1000)
		// console.log("TouchEnd (" + ms + "ms, " + PubViewer.currentDragX + ", " + speed + " screens/second)", e);
		
		// eventually handle page drag end
		if (PubViewer.draggingPage) {
			var currentPageDx = 0;
			if (ms < 500 && speed > 0.8) {
				// quick swipe
				currentPageDx = -PubViewer.currentDragX / Math.abs(PubViewer.currentDragX);
			} else if (PubViewer.currentDragX > PubViewer.containerWidth / 2) {
				currentPageDx = -1;
			} else if (PubViewer.currentDragX < -PubViewer.containerWidth / 2) {
				currentPageDx = 1;
			}
			if (currentPageDx > 0 && PubViewer.canDragPageLeft) {
				PubViewer.turnPagesRightAnimated();
			} else if (currentPageDx < 0 && PubViewer.canDragPageRight) {
				PubViewer.turnPagesLeftAnimated();
			} else {
				PubViewer.cancelPageSwitch(true);
				$("#overlay").hide();
			}
			e.preventDefault();
			// e.stopPropagation();
			PubViewer.draggingPage = false;
			PubViewer.wasDraggingPage = true;
			setTimeout(function() {
				PubViewer.wasDraggingPage = false;
			}, 500);
			return;
		}

		// eventually handle tap-to-show-menu, handling this mouseup as a click on the container
		// (the click may still be ignored, e.g. if a default-prevented click happened almost at the same time)
		if (!PubViewer.touchActionDefaultPrevented && Date.now() - PubViewer.touchStartTime < 250) {
			PubViewer.handleReaderTouchAction(e);
		}
	},


	/**
	 * Resizes reader UI to fit page(s) on the screen size, basing on the current screen size or
	 * on a custom size given as passed with the function parameters
	 * @memberof PubViewer
	 * @param {number} customWidth The custom width to resize the UI to, or null to use the actual window width
	 * @param {number} customHeight The custom height to resize the UI to, or null to use the actual window height
	 */
	adjustInterface: function(customWidth, customHeight) {
		if (customWidth != null && customHeight != null) {
			// console.log("adjustInterface manually at " + customWidth + " x " + customHeight);
			PubViewer.containerWidth = customWidth;
			PubViewer.containerHeight = customHeight;

		} else {
			if (window.innerWidth == window.innerHeight) {
				// console.log("skipped adjustInterface at " + window.innerWidth + " x " + window.innerHeight);
				// probably device was rotated and innerHeight was not yet updated, retry in a few moments
				setTimeout(PubViewer.adjustInterface, 100);
				return;
			}
			if (PubViewer.getWindowZoomedByUser()) {
				PubViewer.containerWidth = document.documentElement.clientWidth;
				PubViewer.containerHeight = document.documentElement.clientHeight;
			} else {
				PubViewer.containerWidth = window.innerWidth;
				PubViewer.containerHeight = window.innerHeight;
			}
		}

		// $("body").css("width", PubViewer.containerWidth + "px");
		// $("body").css("height", PubViewer.containerHeight + "px");
		$("#spread").css("width", PubViewer.containerWidth + "px");
		$("#spread").css("height", PubViewer.containerHeight + "px");
		$("#container").css("width", PubViewer.containerWidth + "px");
		$("#container").css("height", PubViewer.containerHeight + "px");
		$("#overlay").css("width", PubViewer.containerWidth + "px");
		$("#overlay").css("height", PubViewer.containerHeight + "px");

		var pageOneColumn = document.getElementById('ReaderPageOneColumn');
		var pageTwoColumn = document.getElementById('ReaderPageTwoColumn');
		var leftThumbnailOne = document.getElementById('ReaderLeftThumbnailOne');
		var leftThumbnailTwo = document.getElementById('ReaderLeftThumbnailTwo');
		var leftThumbnailOneColumn = document.getElementById('ReaderLeftThumbnailOneColumn');
		var leftThumbnailTwoColumn = document.getElementById('ReaderLeftThumbnailTwoColumn');
		var rightThumbnailOne = document.getElementById('ReaderRightThumbnailOne');
		var rightThumbnailTwo = document.getElementById('ReaderRightThumbnailTwo');
		var rightThumbnailOneColumn = document.getElementById('ReaderRightThumbnailOneColumn');
		var rightThumbnailTwoColumn = document.getElementById('ReaderRightThumbnailTwoColumn');
		var pageOneWrapper = document.getElementById('ReaderPageOneWrapper');
		var pageOne = document.getElementById('ReaderPageOne');
		var pageTwoWrapper = document.getElementById('ReaderPageTwoWrapper');
		var pageTwo = document.getElementById('ReaderPageTwo');
		
		var doublePageItemsVisibility = "hidden";
		var doublePageItemsDisplay = "none";
		if (PubViewer.isDoublePage) {
			pageOneColumn.style.width = "50%";
			leftThumbnailOneColumn.style.width = "50%";
			rightThumbnailOneColumn.style.width = "50%";
			doublePageItemsVisibility = "visible";
			doublePageItemsDisplay = "block";
		} else {
			pageOneColumn.style.width = "100%";
			leftThumbnailOneColumn.style.width = "100%";
			rightThumbnailOneColumn.style.width = "100%";
		}
		pageTwoColumn.style.visibility = doublePageItemsVisibility;
		pageTwoColumn.style.display = doublePageItemsDisplay;
		leftThumbnailTwoColumn.style.visibility = doublePageItemsVisibility;
		leftThumbnailTwoColumn.style.display = doublePageItemsDisplay;
		rightThumbnailTwoColumn.style.visibility = doublePageItemsVisibility;
		rightThumbnailTwoColumn.style.display = doublePageItemsDisplay;

		var cw = Math.round(PubViewer.containerWidth / (PubViewer.isDoublePage ? 2 : 1));
		var ch = PubViewer.containerHeight;

		if (PubViewer.pageH/PubViewer.pageW < ch/cw) {
			PubViewer.pageZoom = cw/PubViewer.pageW;
		} else {
			PubViewer.pageZoom = ch/PubViewer.pageH;
		}

		var wrapperWidth = PubViewer.pageW * PubViewer.pageZoom;
		var wrapperHeight = PubViewer.pageH * PubViewer.pageZoom;
		$(".ReaderPageWrapper").css("width", wrapperWidth + "px");
		$(".ReaderPageWrapper").css("height", wrapperHeight + "px");
		$(".ReaderPageWrapper").css("top", Math.round((ch - wrapperHeight)/2) + "px");
		var wrappersOneX = Math.round((cw - wrapperWidth)/2) + "px";
		var wrappersTwoX = wrappersOneX;
		if (PubViewer.isDoublePage) {
			wrappersOneX = (cw - wrapperWidth) + "px";
			wrappersTwoX = "0px";
		}
		pageOneWrapper.style.left = wrappersOneX
		pageTwoWrapper.style.left = wrappersTwoX
		leftThumbnailOne.style.left = wrappersOneX
		leftThumbnailTwo.style.left = wrappersTwoX
		rightThumbnailOne.style.left = wrappersOneX
		rightThumbnailTwo.style.left = wrappersTwoX


		$(".ReaderPage").css("width", PubViewer.pageW + "px");
		$(".ReaderPage").css("height", PubViewer.pageH + "px");
		$(".ReaderPage").css("webkit-transform", "scale(" + PubViewer.pageZoom + ")");
	},


	/**
	 * Starts to load one or two facing content pages in the reader iframes, and starts initialization loop that will
	 * wait for full page load before initializing it. While waiting it displays a thumbnail that will be later hidden when loading is completed, 
	 * and prepares thumbnails of adjacent pages for faster page swipe when the user will do it next.
	 * This is the order of thumbnails as displayed on the reader when using single page: thumbLeftOne, thumbOne, thumbRightOne.
	 * This is the order of thumbnails as displayed on the reader when using facing pages: thumbLeftTwo, thumbLeftOne, thumbOne, thumbTwo, thumbRightOne, thumbRightTwo.
	 * @memberof PubViewer
	 * @param {Object} readerSettings An object containing various settings and parameters passed by the native side (see PubViewer.ReaderSettings)
	 * @param {number} w width of the page, in pixels
	 * @param {number} h height of the page, in pixels
	 * @param {string} pageOne URL of the single page to be loaded, or URL of the page to be loaded in the left when loading two facing pages
	 * @param {string} pageTwo URL of the page to be loaded in the right when loading two facing pages, or empty if loading one page
	 * @param {string} thumbOne URL of the loading image thumbnail for the single page to be loaded, or for the left page when loading two facing pages
	 * @param {string} thumbTwo URL of the loading image thumbnail for the right page when loading two facing pages
	 * @param {string} thumbRightOne URL of the loading image thumbnail for the page at right of the current one (or of the current right page when loading facing pages)
	 * @param {string} thumbRightTwo URL of the loading image thumbnail for the page at right of thumbRightOne when loading facing pages, or empty if loading one page
	 * @param {string} thumbLeftOne URL of the loading image thumbnail for the page at left of the current one (or of the current left page when loading facing pages)
	 * @param {string} thumbLeftTwo URL of the loading image thumbnail for the page at left of thumbLeftOne when loading facing pages, or empty if loading one page
	 */
	load: function(readerSettings, w, h, pageOne, pageTwo, thumbOne, thumbTwo, thumbRightOne, thumbRightTwo, thumbLeftOne, thumbLeftTwo) {
		PubViewer.isTurningPages = false;
		PubViewer.isDoublePage = readerSettings.EnableDoublePage;
		PubViewer.pageW = w;
		PubViewer.pageH = h;
		PubViewer.ReaderSettings = readerSettings;

		if (!PubViewer.draggingPage) $("#overlay").show();

		var metaViewportContent = "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=6";
		if (!readerSettings.EnablePinchToZoom) metaViewportContent += ", user-scalable=no";
		if (readerSettings.ViewportFitCover) metaViewportContent += ", viewport-fit=cover";
		document.querySelector("meta[name=viewport]").setAttribute("content", metaViewportContent);

		if (PubViewer.Version.Platform == PubViewer.Platform.iOS) {
			PubViewer.adjustInterface(readerSettings.WebViewWidth, readerSettings.WebViewHeight);
		} else {
			PubViewer.adjustInterface();
		}

		var pageOneWrapper = document.getElementById('ReaderPageOneWrapper');
		var pageOneContainer = document.getElementById('ReaderPageOne');
		pageOneContainer.setAttribute('src', pageOne);

		var pageTwoWrapper = document.getElementById('ReaderPageTwoWrapper');
		var pageTwoContainer = document.getElementById('ReaderPageTwo');
		pageTwoContainer.setAttribute('src', pageTwo);

		pageOneWrapper.style.backgroundImage = "url('" + thumbOne + "')";
		pageTwoWrapper.style.backgroundImage = "url('" + thumbTwo + "')";

		if (pageOne == null || pageOne == "") {
			$(pageOneContainer).hide();
			$(".SCLoader", pageOneWrapper).hide();
		} else {
			$(pageOneContainer).css("opacity", "0.001");
			$(pageOneContainer).show();
			setTimeout(function(){
				if ($(pageOneContainer).css("display") != "none" && $(pageOneContainer).css("opacity") != "1" &&
					pageOneContainer.getAttribute('src') == pageOne) {
					$(".SCLoader", pageOneWrapper).show();
				}
			}, 2000);
		}
		if (pageTwo == null || pageTwo == "") {
			$(pageTwoContainer).hide();
			$(".SCLoader", pageTwoWrapper).hide();
		} else {
			$(pageTwoContainer).css("opacity", "0.001");
			$(pageTwoContainer).show();
			setTimeout(function(){
				if ($(pageTwoContainer).css("display") != "none" && $(pageTwoContainer).css("opacity") != "1" &&
					pageTwoContainer.getAttribute('src') == pageTwo) {
					$(".SCLoader", pageTwoWrapper).show();
				}
			}, 2000);
		}

		document.getElementById('container').style.webkitTransform = "translate3d(0px, 0, 0)";
		document.getElementById('container').style.transform = "";

		setTimeout(function () {
			document.getElementById('ReaderLeftThumbnailOne').style.backgroundImage = "url('" + thumbLeftOne + "')";
			document.getElementById('ReaderLeftThumbnailTwo').style.backgroundImage = "url('" + thumbLeftTwo + "')";
			document.getElementById('ReaderRightThumbnailOne').style.backgroundImage = "url('" + thumbRightOne + "')";
			document.getElementById('ReaderRightThumbnailTwo').style.backgroundImage = "url('" + thumbRightTwo + "')";
			PubViewer.initReaderPage(pageOneContainer, pageOne, PubViewer.pageInstanceID++);
		}, 25);
		setTimeout(function () {
			PubViewer.initReaderPage(pageTwoContainer, pageTwo, PubViewer.pageInstanceID++);
		}, 125);
	},


	/**
	 * Initializes a content page injecting required JavaScript to handle XReader events and functionalities, then
	 * starts to "play" the page. If the page is not fully loaded, retries the initialization in a few milliseconds
	 * @memberof PubViewer
	 * @param {Element} iframeElement The frame where the content page resides
	 * @param {string} src The source URL of the page to be initialized
	 * @param {number} pagePageInstanceId an incremental ID used to handle a unique page initialization flow, avoiding to initialize the page twice
	 */
	initReaderPage: function(iframeElement, src, pagePageInstanceId) {
		if (src == null || src.length == 0) return;
		if (iframeElement.contentWindow != null
			&& iframeElement.contentWindow.location != null
			&& iframeElement.contentWindow.location.href != null
			&& iframeElement.contentWindow.document != null
			&& iframeElement.contentWindow.document.body != null
			&& iframeElement.contentWindow.document.body.getAttribute("XReaderPagePageInstanceId") != null
			&& iframeElement.contentWindow.document.body.getAttribute("XReaderPagePageInstanceId") > pagePageInstanceId) {
			// give up, another, newer page was already loaded
			return;
		}
		if (iframeElement.contentWindow == null
			|| iframeElement.contentWindow.location == null
			|| iframeElement.contentWindow.location.href == null
			|| iframeElement.contentWindow.location.href != src
			|| iframeElement.contentWindow.document == null
			|| iframeElement.contentWindow.document.body == null
			|| iframeElement.contentWindow.document.body.childElementCount == 0
			|| iframeElement.contentWindow.document.body.getAttribute("XReaderPagePageInstanceId") != null) {
			// iframe is not yet ready. retry in a few moments
			// console.log("skipped initReaderPage (1) " + src);
			setTimeout(function () { PubViewer.initReaderPage(iframeElement, src, pagePageInstanceId); }, 100);
			return;
		}
		
		var iframeWindow = iframeElement.contentWindow;
		var iframeDocument = iframeWindow.document;
		var iframeBody = iframeDocument.body;

		// if (iframeElement.contentWindow.document.body.setAttribute("XReaderPagePageInstanceId") != pageInstanceID) {}
		iframeBody.setAttribute("XReaderPagePageInstanceId", pagePageInstanceId);
		
		// add events listener to page iframe
		// console.log(iframeElement.contentWindow.location.href);
		var forwardEventToPubViewer = function(e) {
			$("body").trigger(e.type, [e]);
		};
		iframeBody.addEventListener("touchstart", forwardEventToPubViewer);
		iframeBody.addEventListener("touchmove", forwardEventToPubViewer);
		iframeBody.addEventListener("touchend", forwardEventToPubViewer);
		iframeBody.addEventListener("mousedown", forwardEventToPubViewer);
		iframeBody.addEventListener("mousemove", forwardEventToPubViewer);
		iframeBody.addEventListener("mouseup", forwardEventToPubViewer);
		iframeBody.addEventListener("click", function(e) {
			// console.log("qui", e);
			$("#container").trigger(e.type, [e]);
		});
		// $(iframeBody).bind('touchstart touchmove touchend mousedown mousemove mouseup', function(e) {
		// 	console.log("I AM TRIGGERING");
		// 	e = e.originalEvent;
		// 	$("body").trigger(e.type, [e]);
		// });
		iframeWindow.addEventListener('keydown', function(e) {
			$(window).trigger('keydown', [e]);
		});

		// add event listeners to page internal iframes (if any)
		var pageIframes = iframeBody.getElementsByTagName("iframe");
		$.each(pageIframes, function(index, item) {
			item.onload = function () {
				var w = item.contentWindow;
				w.addEventListener('touchend', function(e) {
					$("body").trigger('touchend', [e]);
				});
				w.addEventListener('touchmove', function(e) {
					$("body").trigger('touchmove', [e]);
				});
				w.addEventListener('touchstart', function(e) {
					$("body").trigger('touchstart', [e]);
				});
				w.addEventListener('click', function(e) {
					// console.log(e);
					if (e.defaultPrevented) {
						e.stopPropagation();
						return true;
					}
					$("#container").trigger('click', [e]);
				});
				w.addEventListener('keydown', function(e) {
					$(window).trigger('keydown', [e]);
				});

				var internalIframeDocument = w.document;
				var internalIframeInjectedCss = "* { -webkit-tap-highlight-color: transparent; }";
				var internalIframeInjectedStyleNode = internalIframeDocument.createElement('style'); internalIframeInjectedStyleNode.innerHTML = internalIframeInjectedCss; internalIframeDocument.head.appendChild(internalIframeInjectedStyleNode);
			}
		});

		// iframeDocument.addEventListener('touchmove', function (event) {
		// 	if (event.scale !== 1) { event.preventDefault(); }
		// }, { passive: false });
		
		// toggle menu on click
		// var pageElement = iframeBody.getElementsByClassName("SCPage")[0];
		// pageElement.addEventListener('click', function(e) {
		// 	if (e.defaultPrevented) {
		// 		e.stopPropagation();
		// 		return true;
		// 	}
		// 	$("#container").trigger('click', [e]);
		// });

		// initializing XPUB functionalities
		var oXPUB = new XPUB(iframeElement);
		
		iframeElement.contentWindow.XPUB = oXPUB;

		// handle content links, forwarding them to the reader if the page is not being scrolled
		var links = Array.prototype.slice.call(
				iframeDocument.getElementsByTagName('a')
		);
		var count = links.length;
		for(var i = 0; i < count; i++) {
			links[i].addEventListener('click', function(e) {
				e.preventDefault();
				if (PubViewer.wasDraggingPage) {
					// console.log("canceled click");
					PubViewer.wasDraggingPage = false;
				} else {
					// console.log(this.href);
					oXPUB.openUrl(this.href, false);
				}
				return true;
			});
		}

		// click on read-aloud block seeks media overlay playback to that block
		if (PubViewer.ReaderSettings.EnableTapToSeekReadaloud) {
			$(iframeBody.getElementsByClassName("SCReadaloudBlock")).click(function (e) { 
				if (!PubViewer.MediaOverlay.IsPlaying) return;
				if (e.isDefaultPrevented()) {
					e.stopPropagation();
					return true;
				} else {
					e.preventDefault();
				}
				oXPUB.seekReadaloud(this.id);
			});
		}

		// avoid highlight color on clicks
		var injectedCss = "* { -webkit-tap-highlight-color: transparent; }";
		var injectedStyleNode = iframeDocument.createElement('style'); injectedStyleNode.innerHTML = injectedCss; iframeDocument.head.appendChild(injectedStyleNode);

		// define current orientation
		if (PubViewer.orientation != undefined) PubViewer.setOrientation(PubViewer.orientation);

		// start content page interactivity
		var event = document.createEvent("Event");
		event.initEvent("SCEventPageLoad", false, true); 
		iframeElement.contentWindow.dispatchEvent(event);

		// console.log("ok");
	},


	/**
	 * Cancels a page switch initiated by user swipe, resetting the UI to current page(s) display.
	 * I.e. this is called when user raises its finger when the amount of swipe was not sufficient to change page, or
	 * when an invalid page switch was requested (go before the first page or after the last page)
	 * @memberof PubViewer
	 * @param {boolean} animated true to animate the page switch cancelation, false otherwise
	 */
	cancelPageSwitch : function (animated) {
		if (animated == true) {
			$('#container').transition({ x: 0 }, 400, 'snap');
		} else {
			document.getElementById('container').style.webkitTransform = "translate3d(0px, 0, 0)";
			document.getElementById('container').style.transform = "";
		}
	},


	/**
	 * Turns to page(s) at right of the current one(s) with an animation
	 * @memberof PubViewer
	 * @param {function} onCompletionFunction a custom function that will be executed when the page turn animation is completed, or null for the standard behavior, that is notifying native app that page(s) changed so that it can start to load the right pages
	 */
	turnPagesRightAnimated : function(onCompletionFunction) {
		// var curTransform = new   WebKitCSSMatrix(window.getComputedStyle($("#container")[0]).webkitTransform); console.log(curTransform.m41);
		if (PubViewer.isTurningPages && onCompletionFunction != null) {
			onCompletionFunction();
			return;
		}
		PubViewer.isTurningPages = true;
		if (onCompletionFunction == null) {
			onCompletionFunction = function() {
				PubViewer.callAppMethod("GoToPageAtRight", []);
			};
		} else {
			// if an onCompletion function is set, probably this call is not originating from a touch start, so thumbnails were not set correctly
			document.getElementById('ReaderPageOneWrapper').style.backgroundImage = document.getElementById('ReaderRightThumbnailOne').style.backgroundImage;
			document.getElementById('ReaderPageTwoWrapper').style.backgroundImage = document.getElementById('ReaderRightThumbnailTwo').style.backgroundImage;
		}
		$('#container').transition({ x: -PubViewer.containerWidth }, 250, 'out', onCompletionFunction);
	},


	/**
	 * Turns to page(s) at left of the current one(s) with an animation
	 * @memberof PubViewer
	 * @param {function} onCompletionFunction a custom function that will be executed when the page turn animation is completed, or null for the standard behavior, that is notifying native app that page(s) changed so that it can start to load the right pages
	 */
	turnPagesLeftAnimated : function(onCompletionFunction) {
		// var curTransform = new   WebKitCSSMatrix(window.getComputedStyle($("#container")[0]).webkitTransform); console.log(curTransform.m41);
		if (PubViewer.isTurningPages && onCompletionFunction != null) {
			onCompletionFunction();
			return;
		}
		PubViewer.isTurningPages = true;
		if (onCompletionFunction == null) {
			onCompletionFunction = function() {
				PubViewer.callAppMethod("GoToPageAtLeft", []);
			};
		} else {
			document.getElementById('ReaderPageOneWrapper').style.backgroundImage = document.getElementById('ReaderLeftThumbnailOne').style.backgroundImage;
			document.getElementById('ReaderPageTwoWrapper').style.backgroundImage = document.getElementById('ReaderLeftThumbnailTwo').style.backgroundImage;
		}
		$('#container').transition({ x: PubViewer.containerWidth }, 250, 'out', onCompletionFunction);
	},


	/**
	 * Returns the iframe element currently displaying the given page, or null if no iframe is displaying the given page
	 * @memberof PubViewer
	 * @param {string} pageSrc URL of the page for which we want to get the iframe currently displaying it
	 * @returns {Element} the iframe element currently displaying the given page, or null
	 */
	getPageContentWindow : function (pageSrc) {
		var iframeOne = document.getElementById("ReaderPageOne");
		if (iframeOne.contentWindow.location.href == pageSrc) {
			return iframeOne.contentWindow;
		}
		var iframeTwo = document.getElementById("ReaderPageTwo");
		if (iframeTwo.contentWindow.location.href == pageSrc) {
			return iframeTwo.contentWindow;
		}
		return null;
	},


	/**
	 * Applies the current status of the media overlay, eventually highlighting the correct element
	 * @memberof PubViewer
	 * @param {boolean} enabled true if media overlays are currently enabled, false otherwise
	 * @param {string} pageSrc URL of the current page handling media overlay at the moment
	 * @param {string} elementId Id of the DOM element that should be highlighted, or null if no element should be highglighted
	 */
	applyMediaOverlay : function (enabled, pageSrc, elementId) {
		PubViewer.MediaOverlay.IsPlaying = enabled;
		PubViewer.MediaOverlay.CurrentElement = elementId;

		var iframeOne = document.getElementById("ReaderPageOne");
		var iframeTwo = document.getElementById("ReaderPageTwo");
		var eventToTrigger = enabled ? "SCEventReadAloudStarted" : "SCEventReadAloudStopped";
		
		[iframeOne,iframeTwo].forEach(function (iframe) {
			try {
				$(iframe.contentWindow.document.getElementsByClassName(PubViewer.MediaOverlay.ActiveElementClass)).removeClass(PubViewer.MediaOverlay.ActiveElementClass);
				if (iframe.contentWindow.XPUB.isReadAloudActive != enabled) {
					iframe.contentWindow.XPUB.isReadAloudActive = enabled;
					iframe.contentWindow.$(".SCPageObject").trigger(eventToTrigger);
				}
			} catch (err) {}
		});

		if (!enabled || elementId == null) return;

		var pageContentWindow = PubViewer.getPageContentWindow(pageSrc);
		if (pageContentWindow == null) return;

		$(pageContentWindow.document.getElementById(elementId)).addClass(PubViewer.MediaOverlay.ActiveElementClass);
	},


	/**
	 * Executes a given JavaScript function on the window of the iframe that is displaying the given content page
	 * @memberof PubViewer
	 * @param {string} pageSrc URL of the content page to execute the function on, or "*" to execute the function on all currently displayed pages
	 * @param {string} fn The code of the funcion to be excuted
	 */
	executeJavascript : function (pageSrc, fn) {
		if (pageSrc == "*") {
			var iframeOne = document.getElementById("ReaderPageOne");
			var iframeTwo = document.getElementById("ReaderPageTwo");

			try {
				if (iframeOne.contentWindow.location.href != "about:blank")
					PubViewer.executeJavascript(iframeOne.contentWindow.location.href, fn);
			} finally {
				if (iframeTwo.contentWindow.location.href != "about:blank")
					PubViewer.executeJavascript(iframeTwo.contentWindow.location.href, fn);
			}
		} else {
			var pageContentWindow = PubViewer.getPageContentWindow(pageSrc);
			if (pageContentWindow == null) return;

			pageContentWindow.tmpExecJsFn = fn;
			pageContentWindow.tmpExecJsFn(pageContentWindow.$, pageContentWindow);
		}
	},


	/**
	 * Calls a function on the native app using the javascript-to-native bridge
	 * @memberof PubViewer
	 * @param {string} methodName name of the method to be executed on the native app
	 * @param {Object} methodParameters parameter or array of parameters to be passed to the native method, or null if none applies
	 */
	callAppMethod : function (methodName, methodParameters) {
		if (methodParameters == null) {
			methodParameters = [];
		} else if (!(methodParameters instanceof Array)) {
			methodParameters = [methodParameters];
		}
			PubViewer.sentMsgID++;
			var data = {"method" : methodName, "params" : methodParameters, "id" : PubViewer.sentMsgID};
			jsBridge.invokeAction(JSON.stringify(data));
	},


	/**
	 * Asks the native app to save a backup of current local storage, for later restoration
	 * @memberof PubViewer
	 */
	backupLocalStorage: function () {
		var values = {},
			keys = Object.keys(localStorage),
			i = keys.length;
		while ( i-- ) {
			values[keys[i]] = localStorage.getItem(keys[i]);
		}
		PubViewer.callAppMethod("BackupLocalStorage", JSON.stringify(values));
	},


	/**
	 * Restores a key/pair backup of previous local storage into the current local storage.
	 * Works around http port randomization and random local storage cleanup by the OS
	 * @memberof PubViewer
	 * @param {Object} localStorageBackup a key/pair backup of previous local storage to be restored to the current local storage
	 */
	restoreLocalStorage: function (localStorageBackup) {
		// restore local storage
		var keys = Object.keys(localStorageBackup),
			i = keys.length;
		localStorage.clear();
		while ( i-- ) {
			localStorage.setItem(keys[i], localStorageBackup[keys[i]]);
		}
	}

	
};






/**
 * Creates a new XPUB object, which is injected in the content page's window and used
 * as a bridge between content javascript and functionalities implemented by the reader
 * @constructor
 * @param {Element} iframeElement The DOM Element of the iframe where the object will be injected
 */
function XPUB(iframeElement) {
	this.iframeElement = iframeElement;
	this.xpubWindow = this.iframeElement.contentWindow;
	this.pageUrl = this.xpubWindow.location.href;
	this.parentDocument = document;
	this.readerPrefersToHandleAudio = PubViewer.Version.Platform == PubViewer.Platform.iOS ||
		(PubViewer.Version.Platform == PubViewer.Platform.Web && (typeof(window.AudioContext) !== "undefined") || typeof(window.webkitAudioContext) !== "undefined");
}


/**
 * Calls the native application using a jsBridge
 * @memberof XPUB
 * @instance
 * @param {Element} iframeElement 
 */
XPUB.prototype.callNative = function(methodName, methodParameters) {
	methodName = "XPUB." + methodName;
	if (methodParameters == null) {
		methodParameters = [];
	} else if (!(methodParameters instanceof Array)) {
		methodParameters = [methodParameters];
	}
	methodParameters.unshift(this.pageUrl)
	PubViewer.callAppMethod(methodName, methodParameters);
};


/**
 * This function is called by the content page when it is fully loaded.
 * It clears the loading thumbnail, thus revealing the real page content, and starts executing page
 * animations. Also forwards the "ready" status to the native reader
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.ready = function() {	
	var caller = this;
	setTimeout(function () {
		if (caller.iframeElement.contentWindow.location.href != caller.pageUrl) return; // frame loaded another page in the meantime
		caller.iframeElement.contentWindow.showAssetsParity("all");

		var event = caller.parentDocument.createEvent("Event");
		event.initEvent("SCEventPagePlay", false, true); 
		caller.xpubWindow.dispatchEvent(event);
		$(caller.iframeElement).css("opacity", "1");
		$(".SCLoader", $(caller.iframeElement.parentElement)).hide();

		caller.callNative("Ready");
		if (!PubViewer.draggingPage) $("#overlay").hide();
		window.lastXpub = caller;
	}, 500);
};


/**
 * Asks the native reader to open an URL
 * @memberof XPUB
 * @instance
 * @param {string} url The URL to be opened
 * @param {boolean} openInBrowser True if URL should be opened in default system browser, false to open the url using in-app browser
 */
XPUB.prototype.openUrl = function (url, openInBrowser) {
	this.callNative("OpenUrl", [url, openInBrowser]);
};


/**
 * Asks the native reader to open its menu
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.openMenu = function() {
	this.callNative("OpenMenu");
};


/**
 * Asks the native reader to play an audio file natively
 * @memberof XPUB
 * @instance
 * @param {string} url URL of audio to be played
 * @param {boolean} playFromBeginning True if audio should be played from beginning even if it was previously paused
 * @param {string} objectIdInPage The id of the corresponding audio node on the page
 */
XPUB.prototype.playAudio = function (url, playFromBeginning, objectIdInPage) {
	this.callNative("PlayAudio", [url, playFromBeginning, objectIdInPage]);
};


/**
 * Asks the native reader to init native device motion monitoring
 * @memberof XPUB
 * @instance
 */
 XPUB.prototype.initDeviceMotion = function () {
	this.callNative("InitDeviceMotion", []);
};


/**
 * Pauses all playing audio/video media on the page
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.pauseAllMedia = function () {
	// console.log("pausing all audio/video media on page");
	var $ = this.xpubWindow.$;

	$("audio,video").each(function( index ) {
		var myMedia = $(this)[0];
		if (myMedia.duration > 0 && !myMedia.paused) {
			$(this).attr("data-mediaPausedByXPUB", "true");
			try {
				myMedia.pause();
			} catch (err) {
				// do nothing just continue with the next media
			}
		}
	});
};


/**
 * Resumes playback of all audio/video media on the page previously stopped by pauseAllMedia
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.resumeAllMedia = function () {
	// console.log("resuming all audio/video media on page");
	var $ = this.xpubWindow.$;
	var doc = this.xpubWindow.document;

	$(doc).find("[data-mediaPausedByXPUB='true']").each(function( index ) {
		$(this).attr("data-mediaPausedByXPUB", "false");
		var myMedia = $(this)[0];
		try {
			myMedia.play();
		} catch (err) {
			// do nothing just continue with the next media
		}
	});
};


/**
 * Asks the native reader to open its localizations menu
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.openLocalizationsMenu = function() {
	this.callNative("OpenLocalizationsMenu");
};


/**
 * Asks the native reader to toggle read aloud (aka media overlay) playback status
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.startStopReadAloud = function(event) {
	this.callNative("StartStopReadAloud");
	event.preventDefault();
};


/**
 * Asks the native reader to seek read aloud to a certain block
 * @memberof XPUB
 * @instance
 * @param {string} blockId The id of the block to seek read aloud to playback to
 */
XPUB.prototype.seekReadaloud = function (blockId) {
	this.callNative("SeekReadaloud", [blockId]);
}


/**
 * Asks the native reader to toggle soundtrack playback status
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.toggleSoundtrack = function() {
	this.callNative("ToggleSoundtrack");
};


/**
 * Asks the native reader to start soundtrack playback
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.startSoundtrack = function() {
	this.callNative("StartSoundtrack");
};


/**
 * Asks the native reader to stop soundtrack playback
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.stopSoundtrack = function() {
	this.callNative("StopSoundtrack");
};


/**
 * Asks the native reader to close itself
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.close = function() {
	this.callNative("Close");
};


/**
 * Finds occurrences of a string in the content page and highlights them
 * @memberof XPUB
 * @instance
 * @param {string} keyword The keyword to search for
 */
XPUB.prototype.find = function (keyword) {
	this.clearSearchResults();
	this.findInElement(this.xpubWindow.document.body, keyword);
};


/**
 * Finds occurrences of a string in the given content page element and highlights them.
 * Recursevely searches in nested elements
 * @memberof XPUB
 * @instance
 * @param {Element} element The element whereby the search will take place
 * @param {string} keyword The keyword to search for
 */
XPUB.prototype.findInElement = function (element, keyword) {
	var doc = this.xpubWindow.document;
	if (element) {
		if (element.nodeType == 3) {        // Text node
			while (true) {
				var value = element.nodeValue;  // Search for keyword in text node
				var idx = value.toLowerCase().indexOf(keyword.toLowerCase());

				if (idx < 0) break;             // not found, abort

				var span = doc.createElement("span");
				var text = doc.createTextNode(value.substr(idx,keyword.length));
				span.appendChild(text);
				span.setAttribute("class","MyAppHighlight");
				span.style.backgroundColor="yellow";
				span.style.color="black";
				text = doc.createTextNode(value.substr(idx+keyword.length));
				element.deleteData(idx, value.length - idx);
				var next = element.nextSibling;
				element.parentNode.insertBefore(span, next);
				element.parentNode.insertBefore(text, next);
				element = text;
				// SearchResultCount++;	// update the counter
			}
		} else if (element.nodeType == 1) { // Element node
			if (element.style.display != "none" && element.nodeName.toLowerCase() != 'select') {
				for (var i=element.childNodes.length-1; i>=0; i--) {
					this.findInElement(element.childNodes[i],keyword);
				}
			}
		}
	}
};


/**
 * Clears any found occurrences in the content page, previously highlighted by XPUB.findInElement
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.clearSearchResults = function () {
	this.clearSearchResultsFromElement(this.xpubWindow.document.body);
};


/**
 * Clears any found occurrences in the given content page element, as previously highlighted by XPUB.findInElement
 * Recursevely clears also nested elements
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.clearSearchResultsFromElement = function (element) {
  if (element) {
    if (element.nodeType == 1) {
      if (element.getAttribute("class") == "MyAppHighlight") {
        var text = element.removeChild(element.firstChild);
        element.parentNode.insertBefore(text,element);
        element.parentNode.removeChild(element);
        return true;
      } else {
        var normalize = false;
        for (var i=element.childNodes.length-1; i>=0; i--) {
          if (this.clearSearchResultsFromElement(element.childNodes[i])) {
            normalize = true;
          }
        }
        if (normalize) {
          element.normalize();
        }
      }
    }
  }
  return false;
};


/**
 * Returns orientation from the main window, since iframes not always have a correct window.orientation value.
 * The value can be overridden by the native app by setting the PubViewer.overriddenOrientation value, which will be preferred when not null.
 * e.g. PubViewer.Droid sets it nativaley, since in Android 4.4 window.orientation does not change automatically when turning the device upside down
 * @memberof XPUB
 * @instance
 * @returns {number} orientation in degrees
 */
XPUB.prototype.getOrientation = function() {
	return (PubViewer.overriddenOrientation != null ? PubViewer.overriddenOrientation : window.orientation);
};


/**
 * Asks the native reader to send an email
 * @memberof XPUB
 * @instance
 * @param {string} recipient The email recipient
 * @param {string} subject The email subject
 * @param {string} content The email content
 */
XPUB.prototype.sendMail = function(recipient, subject, content) {
	this.callNative("SendMail", [recipient, subject, content]);
};


/**
 * Asks the native reader to take a photo
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.takePhoto = function() {
	this.callNative("TakePhoto");
};


/**
 * Asks the native reader to pick a photo from the library
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.pickPhoto = function() {
	this.callNative("PickPhoto");
};


/**
 * Asks the native reader to scan a QR code
 * @memberof XPUB
 * @instance
 */
XPUB.prototype.scanQr = function() {
	this.callNative("ScanQr");
};


/**
 * True if Read Aloud is playing, false otherwise
 * @type {boolean}
 * @memberof XPUB
 */
XPUB.prototype.isReadAloudActive = false;


/**
 * True if reader prefers to handle audio on its own, false otherwise.
 * Some actions (e.g. playAudioFile) will look at this value to decide whether to call
 * XPUB.playAudio to use the reader implementation or use their own implementation
 * @type {boolean}
 * @memberof XPUB
 */
 XPUB.prototype.readerPrefersToHandleAudio;


// After all declarations, finally call initialization function (if not running locally or on IE)
if (document.location.protocol != "file:" && navigator.userAgent.indexOf("MSIE ") < 0 && navigator.userAgent.indexOf("Trident/") < 0) {
	PubViewer.init();
}