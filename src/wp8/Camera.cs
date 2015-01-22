/*  
    Copyright (c) 2011 Microsoft Corporation.  All rights reserved. 
    Use of this sample source code is subject to the terms of the Microsoft license  
    agreement under which you licensed this sample source code and is provided AS-IS. 
    If you did not accept the terms of the license agreement, you are not authorized  
    to use this sample source code.  For the terms of the license, please see the  
    license agreement between you and Microsoft. 
   
    To see all Code Samples for Windows Phone, visit http://go.microsoft.com/fwlink/?LinkID=219604  
   
*/ 
namespace WPCordovaClassLib.Cordova.Commands
{ 
    using Microsoft.Devices; 

    public class Camera : BaseCommand 
    { 
        PhotoCamera cam;

        public Camera() {
            cam = new Microsoft.Devices.PhotoCamera(CameraType.Primary);
        }

        public void isAutoFocus(string options)
        {
            PluginResult result;
            
            if(cam.IsFocusSupported == true) {
                result = new PluginResult(PluginResult.Status.OK,new CameraResult(true)); 
            } else {
                result = new PluginResult(PluginResult.Status.OK,new CameraResult(false)); 
            }

            this.DispatchCommandResult(result);
        }
    }

    [DataContract]
    public sealed class CameraResult
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CameraResult"/> class.
        /// </summary>
        /// <param name="isAutoFocus">if set to <c>true</c> [isAutoFocus].</param>
        public CameraResult(bool isAutoFocus = true)
        {
            this.isAutoFocus = isAutoFocus;
        } 

        /// <summary>
        /// Gets a value indicating whether auto-focus is supported.
        /// </summary>
        /// <value>
        ///   <c>true</c> if isAutoFocus; otherwise, <c>false</c>.
        /// </value>
        [DataMember(Name = "isAutoFocus")]
        public bool isAutoFocus { get; private set; }
    }
} 