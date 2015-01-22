package br.com.triersistemas.plugins.cordova.camera;

import java.io.IOException;
import java.io.StringWriter;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;

import android.content.pm.PackageManager;
import android.util.JsonWriter;
import android.util.Log;

public class CameraHandler extends CordovaPlugin {
    private static final String IS_AUTO_FOCUS = "isAutoFocus";
    private static final String LOG_TAG = "CameraHandler";

    private CallbackContext callbackContext;

    /**
     * Constructor.
     */
    public CameraHandler() {
    }

    /**
     * Executes the request.
     *
     * This method is called from the WebView thread. To do a non-trivial amount of work, use:
     *     cordova.getThreadPool().execute(runnable);
     *
     * To run on the UI thread, use:
     *     cordova.getActivity().runOnUiThread(runnable);
     *
     * @param action          The action to execute.
     * @param args            The exec() arguments.
     * @param callbackContext The callback context used when calling back into JavaScript.
     * @return                Whether the action was valid.
     *
     * @sa https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java
     */
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
        this.callbackContext = callbackContext;

        if (action.equals(IS_AUTO_FOCUS)) {
            isAutoFocus();
            
            return true;
        }

        // Returning false results in a "MethodNotFound" error.
        return true;
    }
    
    private void isAutoFocus () {
        cordova.getThreadPool().execute(new Runnable() {
            @Override
            public void run() {
                
                // TODO: exportar para um método quando houver mais actions
                StringWriter out = new StringWriter();
                JsonWriter writer = new JsonWriter(out);
                PluginResult result;
                
                try {
                    
                    writer.beginObject().name("isAutoFocus").value(cordova.getActivity().getPackageManager().hasSystemFeature(PackageManager.FEATURE_CAMERA_AUTOFOCUS)).endObject();
                    result = new PluginResult(PluginResult.Status.OK, out.toString());
                    
                } catch (IOException e) {
                    result = new PluginResult(PluginResult.Status.ERROR, e.getMessage());
                    Log.e(LOG_TAG, e.getMessage());
                } finally {
                    
                    try {
                        writer.close();
                    } catch (IOException e) {
                        Log.e(LOG_TAG, e.getMessage());
                    }
                    
                }
                
                callbackContext.sendPluginResult(result);
            }
        });
    }
}