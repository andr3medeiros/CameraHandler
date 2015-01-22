/**
 * cordova is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 *
 * Copyright (c) Trier Sistemas 2014
 */

var TrierCameraHandlerPlugin = function (require, exports, module) {

	var exec = require("cordova/exec");

	/**
	 * Constructor.
	 *
	 * @returns {CameraHandler}
	 */
	function CameraHandler() {}

	/**
	 * Asks weather device camera supports auto-focus
	 *
	 * @param {Function} successCallback This function will recieve either true or false.
	 * @param {Function} errorCallback
	 */
	CameraHandler.prototype.isAutoFocus = function (callbackSuccess,callbackError) {
		return exec(callbackSuccess, callbackError, 'CameraHandler', 'isAutoFocus', []);
	};

	var camera = new CameraHandler();
	module.exports = camera;
}

TrierCameraHandlerPlugin(require, exports, module);

cordova.define("cordova/plugin/CameraHandler", TrierCameraHandlerPlugin);