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
         * @returns {CameraPlugin}
         */
        function CameraPlugin() {

        /**
         * Asks weather device camera supports auo-focus
         *
         * @param {Function} successCallback This function will recieve either true or false.
         * @param {Function} errorCallback
         */
        CameraPlugin.prototype.isAutoFocus = function (successCallback, errorCallback) {
            if (errorCallback == null) {
                errorCallback = function () {
                };
            }

            if (typeof errorCallback != "function") {
                console.log("CameraPlugin.scan failure: failure parameter not a function");
                return;
            }

            if (typeof successCallback != "function") {
                console.log("CameraPlugin.scan failure: success callback parameter must be a function");
                return;
            }

            exec(successCallback, errorCallback, 'CameraPlugin', 'verify.auto.focus', []);
        };

        var CameraPlugin = new CameraPlugin();
        module.exports = CameraPlugin;

    }

    TrierPlugin(require, exports, module);

    cordova.define("cordova/plugin/CameraPlugin", TrierPlugin);