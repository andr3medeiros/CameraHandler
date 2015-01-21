CameraPlugin
==============

Cross-platform CameraPlugin for Cordova / PhoneGap.

### Supported Platforms

- Android
- wp8 (Windows Phone)

## Using the plugin ##
The plugin creates the object `cordova/plugin/Camera` with the method `isAutoFocus()`. 

A full example could be:
```
   br.com.triersistemas.plugins.cordova.camera.isAutoFocus(function(response) {
		if(response.isAutoFocus)
			alert('Esse dispositivo suporta o recurso de auto foco da câmera.');
		else
			alert('Esse dispositivo não suporta o recurso de auto foco da câmera.');
	},function(error) {
		alert('Esse dispositivo não suporta o recurso de auto foco da câmera.');
	});
```

## Licence ##

Comercial