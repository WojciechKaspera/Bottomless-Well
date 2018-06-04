// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD89FyO7hjw4TVUTMdaZaX8nDcD5Ia0F5U',
    authDomain: 'bottomless-well.firebaseapp.com',
    databaseURL: 'https://bottomless-well.firebaseio.com',
    projectId: 'bottomless-well',
    storageBucket: 'bottomless-well.appspot.com',
    messagingSenderId: '637507313240'
  }
};
