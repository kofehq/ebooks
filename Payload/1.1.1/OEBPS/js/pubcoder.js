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
		
"page4": "../1/page.xhtml", 
"page11": "../2/page.xhtml", 
"page13": "../3/page.xhtml", 
"page17": "../4/page.xhtml", 
"page20": "../5/page.xhtml", 
"page42": "../6/page.xhtml", 
"page43": "../7/page.xhtml", 
"page45": "../8/page.xhtml", 
"page48": "../9/page.xhtml", 
"page51": "../10/page.xhtml", 
"page72": "../11/page.xhtml", 
"page89": "../12/page.xhtml", 
"page92": "../13/page.xhtml", 
"page95": "../14/page.xhtml", 
"page97": "../15/page.xhtml", 
"page104": "../16/page.xhtml", 
"page107": "../17/page.xhtml", 
"page113": "../18/page.xhtml", 
"page116": "../19/page.xhtml", 
"page122": "../20/page.xhtml", 
"page125": "../21/page.xhtml", 
"page131": "../22/page.xhtml", 
"page134": "../23/page.xhtml", 
"page141": "../24/page.xhtml", 
"page144": "../25/page.xhtml", 
"page150": "../26/page.xhtml", 
"page154": "../27/page.xhtml", 
"page160": "../28/page.xhtml", 
"page163": "../29/page.xhtml", 
"page170": "../30/page.xhtml", 
"page173": "../31/page.xhtml", 
"page179": "../32/page.xhtml", 
"page182": "../33/page.xhtml", 
"page189": "../34/page.xhtml", 
"page192": "../35/page.xhtml", 
"page199": "../36/page.xhtml", 
"page202": "../37/page.xhtml", 
"page209": "../38/page.xhtml", 
"page212": "../39/page.xhtml", 
"page214": "../40/page.xhtml", 
"page216": "../41/page.xhtml", 
"page222": "../42/page.xhtml", 
"page225": "../43/page.xhtml", 
"page232": "../44/page.xhtml", 
"page235": "../45/page.xhtml", 
"page242": "../46/page.xhtml", 
"page245": "../47/page.xhtml", 
"page252": "../48/page.xhtml", 
"page255": "../49/page.xhtml", 
"page262": "../50/page.xhtml", 
"page266": "../51/page.xhtml", 
"page273": "../52/page.xhtml", 
"page276": "../53/page.xhtml", 
"page282": "../54/page.xhtml", 
"page285": "../55/page.xhtml", 
"page292": "../56/page.xhtml", 
"page295": "../57/page.xhtml", 
"page302": "../58/page.xhtml", 
"page305": "../59/page.xhtml", 
"page312": "../60/page.xhtml", 
"page315": "../61/page.xhtml", 
"page322": "../62/page.xhtml", 
"page325": "../63/page.xhtml", 
"page332": "../64/page.xhtml", 
"page335": "../65/page.xhtml", 
"page341": "../66/page.xhtml", 
"page344": "../67/page.xhtml", 
"page346": "../68/page.xhtml", 
"page348": "../69/page.xhtml", 
"page355": "../70/page.xhtml", 
"page358": "../71/page.xhtml", 
"page365": "../72/page.xhtml", 
"page368": "../73/page.xhtml", 
"page375": "../74/page.xhtml", 
"page378": "../75/page.xhtml", 
"page385": "../76/page.xhtml", 
"page388": "../77/page.xhtml", 
"page390": "../78/page.xhtml", 
"page392": "../79/page.xhtml", 
"page399": "../80/page.xhtml", 
"page402": "../81/page.xhtml", 
"page408": "../82/page.xhtml", 
"page411": "../83/page.xhtml", 
"page418": "../84/page.xhtml", 
"page421": "../85/page.xhtml", 
"page428": "../86/page.xhtml", 
"page431": "../87/page.xhtml", 
"page438": "../88/page.xhtml", 
"page441": "../89/page.xhtml", 
"page448": "../90/page.xhtml", 
"page452": "../91/page.xhtml", 
"page459": "../92/page.xhtml", 
"page462": "../93/page.xhtml", 
"page469": "../94/page.xhtml", 
"page472": "../95/page.xhtml", 
"page479": "../96/page.xhtml", 
"page482": "../97/page.xhtml", 
"page488": "../98/page.xhtml", 
"page491": "../99/page.xhtml", 
"page493": "../100/page.xhtml", 
"page495": "../101/page.xhtml", 
"page502": "../102/page.xhtml", 
"page505": "../103/page.xhtml", 
"page512": "../104/page.xhtml", 
"page515": "../105/page.xhtml", 
"page522": "../106/page.xhtml", 
"page525": "../107/page.xhtml", 
"page532": "../108/page.xhtml", 
"page535": "../109/page.xhtml", 
"page542": "../110/page.xhtml", 
"page545": "../111/page.xhtml", 
"page552": "../112/page.xhtml", 
"page555": "../113/page.xhtml", 
"page562": "../114/page.xhtml", 
"page565": "../115/page.xhtml", 
"page567": "../116/page.xhtml", 
"page570": "../117/page.xhtml", 
"page576": "../118/page.xhtml", 
"page579": "../119/page.xhtml", 
"page585": "../120/page.xhtml", 
"page588": "../121/page.xhtml", 
"page594": "../122/page.xhtml", 
"page597": "../123/page.xhtml", 
"page603": "../124/page.xhtml", 
"page606": "../125/page.xhtml", 
"page613": "../126/page.xhtml", 
"page617": "../127/page.xhtml", 
"page623": "../128/page.xhtml", 
"page626": "../129/page.xhtml", 
"page632": "../130/page.xhtml", 
"page635": "../131/page.xhtml", 
"page641": "../132/page.xhtml", 
"page644": "../133/page.xhtml", 
"page650": "../134/page.xhtml", 
"page653": "../135/page.xhtml", 
"page659": "../136/page.xhtml", 
"page662": "../137/page.xhtml", 
"page664": "../138/page.xhtml", 
"page667": "../139/page.xhtml", 
"page673": "../140/page.xhtml", 
"page676": "../141/page.xhtml", 
"page682": "../142/page.xhtml", 
"page685": "../143/page.xhtml", 
"page691": "../144/page.xhtml", 
"page694": "../145/page.xhtml", 
"page700": "../146/page.xhtml", 
"page703": "../147/page.xhtml", 
"page709": "../148/page.xhtml", 
"page710": "../149/page.xhtml", 
"page713": "../150/page.xhtml", 
"page715": "../151/page.xhtml", 
"page717": "../152/page.xhtml", 
"page719": "../153/page.xhtml", 
"page721": "../154/page.xhtml", 
"page723": "../155/page.xhtml", 
"page726": "../156/page.xhtml", 
"page729": "../157/page.xhtml", 
"page731": "../158/page.xhtml", 
"page732": "../159/page.xhtml", 
"page734": "../160/page.xhtml", 
"page740": "../161/page.xhtml", 
"page746": "../162/page.xhtml", 
"page749": "../163/page.xhtml", 
"page753": "../164/page.xhtml", 
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