CameraPlugin
==============

Cross-platform CameraPlugin for Cordova / PhoneGap.

### Supported Platforms

- Android
- wp8 (Windows Phone)

## Using the plugin ##
The plugin creates the object `cordova/plugin/CameraHandler` with the method `isAutoFocus()`. 

A full example could be:
```
   br.com.triersistemas.plugins.cordova.camera.isAutoFocus(function(result) {
        alert('Esse dispositivo suporta o recurso de auto foco da câmera? \n' + result.isAutoFocus);
    },function(error) {
        alert('Esse dispositivo não suporta o recurso de auto foco da câmera: ' + error);
    });
```

## Licence ##

Comercial