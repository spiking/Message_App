# Message App
This is an Angular message app developed with the MEAN-Stack [http://mean.io/#!/].

* MongoDB [database]
* Express [Node.js framework]
* AngularJS [HTML extension]
* Node.js [Server]

## Project Structure ##

### Folders

##### assets
* The angular 2 typescript files. Compiled into javascript (bundle.js) in the public/js folder by the task runner, the gulpfile.

##### bin
* Contains the www-file, the Node.js server. Handles setup of server, which ports to listen to etc. Receives requests which will be directed to the app.js.

##### models
* Back-end models. Using mongoose to simplify the interaction between Node.js and mongoDB (https://github.com/Automattic/mongoose).

##### node_modules
* All modules, dependencies and packages in the app. Configured by package.json.

##### public
* The Javascript, bundle.js, and CSS accessible by the browser.

##### routes
* Contains the files which handles specific requests on different pages in the app. 

##### views
* Holds the views (container), rendered by Node.js.

### Other Files

##### app.component.ts
* The core component of the app.

##### app.js
* Receives requests from server. Interacts with the requests by parsing it and redirect them to specific routes etc. All interactions are through the express app-object.

##### boots.ts
* Providers needed for the app to function.

#### gulpfile.ts
* Task runner, builds the app and compiles the code into the public folder.
