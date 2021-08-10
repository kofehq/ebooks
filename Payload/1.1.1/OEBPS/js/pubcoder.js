var PubCoder = {
	project: {
		id : "",
		title : "",
		assessments : {
			count: 0,
			questions: 0,
			items: [
				
			]
		}
	},
	page: {
		id : "",
		title : "",
		alias : ""
	},
	objects: {},
	controllers: {
		get: function(ref) {
			if (ref instanceof Node) {
				return pubcoder.controllers.all[$(ref).attr("id")];
			} else {
				return pubcoder.controllers.all[ref];
			}
		},
		getAll: function() {
			return _(pubcoder.controllers.all).values();
		},
		all: {}
	},
	
	pages: {
		
"page2": "../1/page.xhtml", 
"page2068": "../2/page.xhtml", 
"page924": "../3/page.xhtml", 
"page1435": "../4/page.xhtml", 
"page1449": "../5/page.xhtml", 
"page3": "../6/page.xhtml", 
"page1682": "../7/page.xhtml", 
"page169": "../8/page.xhtml", 
"page2450": "../9/page.xhtml", 
"page2802": "../10/page.xhtml", 
"page2930": "../11/page.xhtml", 
"page1843": "../12/page.xhtml", 
"page1911": "../13/page.xhtml", 
"page430": "../14/page.xhtml", 
"page3961": "../15/page.xhtml", 
"page1988": "../16/page.xhtml", 
"page2006": "../17/page.xhtml", 
"page1924": "../18/page.xhtml", 
"page4517": "../19/page.xhtml", 
"page1951": "../20/page.xhtml", 
	},
	
	Events: {
		Run: 'SCEventRun',
		Shake: 'SCEventShake',
		Show: 'SCEventShow',
		SwipeDown: 'SCswipedown',
		SwipeLeft: 'SCswipeleft',
		SwipeRight: 'SCswiperight',
		SwipeUp: 'SCswipeup',
		PinchClose: "pinchin",
		PinchOpen: "pinchout",
		Tap: 'click',
		DoubleTap: "doubletap",
		Press: "press",
		TouchDown: "mousedown",
		TouchUp: "mouseup",
		PageLoad: 'SCEventPageLoad',
		PagePlay: 'SCEventPagePlay',
		PageReady: 'SCEventPageReady'
	},
	isAndroidReader: (typeof(Android) !== "undefined" || navigator.userAgent.indexOf("PubCoderReaderAndroidUA") > -1), // legacy reader
	isAndroid: (navigator.userAgent.toLowerCase().indexOf("android") > -1),
	isQuickPreview: false,
	
	Accelerometer: {
		Enabled: true,
		X: 0,
		Y: 0
	},
	callID: 0,
	call: function (methodName, methodParameters) {
		PubCoder.callID++;
		document.title = JSON.stringify ({"method" : methodName, "params" : methodParameters, "id" : PubCoder.callID} );
		setTimeout(function() { document.title = ' '; }, 1);
	},
	alert: function (alertTitle, alertText) {
		if (typeof(alertText) == "undefined") {
			$("#SCDefaultAlertTitle").hide();
			alertText = alertTitle;
			alertTitle = "";
		} else {
			$("#SCDefaultAlertTitle").show();
		}
		$("#SCDefaultAlertTitle").html(alertTitle);
		$("#SCDefaultAlertMsg").html(alertText);
		try {
			$('[data-remodal-id=SCDefaultAlert]').remodal().open();
		} catch (e) {
			// for modals opened too early, wait and retry
			setTimeout(function() { PubCoder.alert(alertTitle, alertText) }, 1000);
		}
	},
	getCurrentPageNumber: function () {
		var locPieces = window.location.href.split("/");
		return (locPieces[locPieces.length-2]);
	},
	getObjectWithId: function (objID) {
		// this returns the JQuery object, regardless of the objID parameter being "obj4" or "#obj4" or $("#obj4")
		if (typeof objID == "string" && objID.indexOf("#") != 0) objID = "#" + objID;
		return $("#" + $(objID).attr("id"));
	},
	getObjectsWithClass: function (className) {
		return $("." + className);
	},
	getPageObjectsWithClass: function (className) {
		return $(".SCContent ." + className);
	},
	getOverlayObjectsWithClass: function (className) {
		return $(".SCOverlay ." + className);
	},
	getLayers: function(containerName) {
		var layers = $("." + containerName + ">.SCPageObject");
		layers.sort(function(a, b) {
		    a = parseInt($(a).css("z-index"));
		    b = parseInt($(b).css("z-index"));
		    if (a == b) { return 0; }
		    if (a > b) {
		        return 1;
		    } else {
		        return -1;
		    }
		});
		return layers;
	},
	moveLayer: function(containerName, sourceIndex, destIndex) {
		var layers = this.getLayers(containerName);
		var layersNew = layers.slice(0);
		var objToMove = layersNew[sourceIndex];
		layersNew.splice(sourceIndex, 1);
		layersNew.splice(destIndex, 0, objToMove);
		for (var i = layers.length - 1; i >= 0; i--) {
			var attr = $(layers[i]).attr("data-SCPageObject-InitialLayer")
			if (typeof attr == typeof undefined) $(layers[i]).attr("data-SCPageObject-InitialLayer", i.toString())
			layers[i] = $(layers[i]).css("z-index");
		};
		for (var i = layers.length - 1; i >= 0; i--) {
			$(layersNew[i]).css("z-index", layers[i]);
		};
	},
	getPageObjectContainerName: function(obj) {
		var objParent = obj.parent();
		var knownContainers = ["SCContent", "SCOverlay", "SCContentOverlay", "SCContentUnderlay"];
		for (var i = knownContainers.length - 1; i >= 0; i--) {
			if (objParent.hasClass(knownContainers[i])) return knownContainers[i];
		};
		return null;
	},
	bringPageObjectToFront: function(obj) {
		obj = PubCoder.getObjectWithId(obj);
		var containerName = this.getPageObjectContainerName(obj);
		var layers = this.getLayers(containerName);
		var i = layers.index(obj);
		if (i < 0) return;
		if (i >= layers.length-1) return;
		this.moveLayer(containerName, i, layers.length-1);
	},
	bringPageObjectForward: function(obj) {
		obj = PubCoder.getObjectWithId(obj);
		var containerName = this.getPageObjectContainerName(obj);
		var layers = this.getLayers(containerName);
		var i = layers.index(obj);
		if (i < 0) return;
		if (i >= layers.length-1) return;
		this.moveLayer(containerName, i, i+1);
	},
	sendPageObjectBackward: function(obj) {
		obj = PubCoder.getObjectWithId(obj);
		var containerName = this.getPageObjectContainerName(obj);
		var layers = this.getLayers(containerName);
		var i = layers.index(obj);
		if (i <= 0) return;
		this.moveLayer(containerName, i, i-1);
	},
	sendPageObjectToBack: function(obj) {
		obj = PubCoder.getObjectWithId(obj);
		var containerName = this.getPageObjectContainerName(obj);
		var layers = this.getLayers(containerName);
		var i = layers.index(obj);
		if (i <= 0) return;
		this.moveLayer(containerName, i, 0);
	},
	bringPageObjectToInitialLayer: function(obj) {
		obj = PubCoder.getObjectWithId(obj);
		var containerName = this.getPageObjectContainerName(obj);
		var layers = this.getLayers(containerName);
		var i = layers.index(obj);
		var attr = $(layers[i]).attr("data-SCPageObject-InitialLayer");
		if (typeof attr == typeof undefined) return
		this.moveLayer(containerName, i, parseInt(attr));
	},
	getCounterValue: function(obj) {
		obj = PubCoder.getObjectWithId(obj);
		return eval("window." + $(obj).attr("id") + "_counterValue");
	},
	switchText: function(obj, newText) {
		obj = PubCoder.getObjectWithId(obj);
		if (newText.indexOf("<") < 0) newText = "<p>" + newText + "</p>";
		var objContent = $("#" + obj.attr("id") + "_content");
		$(objContent).html(newText);
	},
	goToPage: function(pageNumber) {
		pubcoder.openUrl("../" + pageNumber + "/page.xhtml", false);
	},
	openUrl: function (url, openInBrowser) {
		if (window.XPUB != undefined) {
			window.XPUB.openUrl(url, openInBrowser);
		} else if (openInBrowser) {
			window.open(url);
		} else {
			window.location = url;
		}
	},
};
PubCoder.events = PubCoder.Events;
var pubcoder = PubCoder;