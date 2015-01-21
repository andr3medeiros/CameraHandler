CameraPlugin
==============

Cross-platform CameraPlugin for Cordova / PhoneGap.

### Supported Platforms

- Android
- iOS

Note: the Android source for this project includes an Android Library Project.
plugman currently doesn't support Library Project refs, so its been
prebuilt as a jar library. Any updates to the Library Project should be
committed with an updated jar.

## Using the plugin ##
The plugin creates the object `cordova/plugin/CameraPlugin` with the method `isAutoFocus()`. 

A full example could be:
```
   br.com.triersistemas.camerainfo.isAutoFocus(function(bool) {
		if(bool)
			alert('Esse dispositivo suporta o recurso de auto foco da câmera.');
		else
			alert('Esse dispositivo não suporta o recurso de auto foco da câmera.');
	},function(error) {
		alert('Esse dispositivo não suporta o recurso de auto foco da câmera.');
	});
```

## Licence ##

The MIT License

Copyright (c) 2010 Matt Kane

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
