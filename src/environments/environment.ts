// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Environment} from "./interface";

// export const environment: Environment = {
//   production: false,
//   apiKey: "AIzaSyDE-Wsd-PslYeRFus_s8sCsVxPNowziwLc"
// };

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDE-Wsd-PslYeRFus_s8sCsVxPNowziwLc",
    authDomain: "angular-registration-d46e2.firebaseapp.com",
    projectId: "angular-registration-d46e2",
    storageBucket: "angular-registration-d46e2.appspot.com",
    messagingSenderId: "1049247712550",
    appId: "1:1049247712550:web:59925d3b6af6151a282de7"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
