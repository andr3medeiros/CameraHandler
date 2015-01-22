/**
 * cordova is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 *
 * Copyright (c) Trier Sistemas 2014
 */

var TrierPlugin = function (require, exports, module) {

	var exec = require("cordova/exec");

	/**
	 * Constructor.
	 *
	 * @returns {Camera}
	 */
	function Camera() {}

	/**
	 * Asks weather device camera supports auto-focus
	 *
	 * @param {Function} successCallback This function will recieve either true or false.
	 * @param {Function} errorCallback
	 */
	Camera.prototype.isAutoFocus = function (callbackSuccess,callbackError) {
		return exec(callbackSuccess, callbackError, 'br.com.triersistemas.plugins.cordova.camera.Camera', 'isAutoFocus', []);
	};

	var camera = new Camera();
	module.exports = camera;
}

TrierPlugin(require, exports, module);

cordova.define("cordova/plugin/Camera", TrierPlugin);