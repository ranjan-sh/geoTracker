package io.appery.project510183;

import android.os.Bundle;
import android.util.Log;

import org.apache.cordova.*;

public class MainActivity extends CordovaActivity {
    private final static String TAG = "MainActivity";

    private final boolean isAutoupdateEnabled = true;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // enable Cordova apps to be started in the background
        Bundle extras = getIntent().getExtras();
        if (extras != null && extras.getBoolean("cdvStartInBackground", false)) {
            moveTaskToBack(true);
        }
        String startFileName = null;

        if (isAutoupdateEnabled) {
            Log.d(TAG, "Init activity");
            int splashscreenTime = preferences.getInteger("SplashScreenDelay", 3000);
            preferences.set("SplashScreenDelay", 100000);
            init();

            Log.d(TAG, "Start autoupdate");
            AutoUpdateTask autoUpdateTask = new AutoUpdateTask(this, appView, splashscreenTime);
            autoUpdateTask.execute();
        } else {
            String filePath = AutoUpdateTask.WORK_DIR + "index.html";
            Log.d(TAG, "Open URL: " + filePath);
            loadUrl(filePath);
        }
    }

    @Override
    public void onBackPressed() {
        moveTaskToBack(true);
    }
}
