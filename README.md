# veg-site
Prototype (design) partials for our new Church website. Here is our intended sitemap: https://app.flowmapp.com/share/29676cead45a757757332198541d6ed3
Here are our intended user flows https://app.flowmapp.com/share/29676cead45a757757332198541d6ed3/userflow/668

* Homepage
* 

---
## Installing
You'll need the latest version of nodejs and the node package manager NPM on your system. See https://nodejs.org/en/ or https://docs.npmjs.com/downloading-and-installing-node-js-and-npm to install these.


---
## Getting started

After you've installed nodejs and npm run:

    $ npm install

Nodejs dependencies will now be installed.

---
## Start server and watch changes in any files

    $ gulp watch

Opens a browser and starts browsersync.
Browsersync will give you four access URL's. Eg:
    
    [Browsersync] Access URLs:
     -------------------------------------
           Local: http://localhost:3024
        External: http://192.168.2.20:3024
     -------------------------------------
              UI: http://localhost:3025
     UI External: http://localhost:3025
     -------------------------------------
This way you can watch the pages on multiple devices. Every time one of your files change, the page will be reloaded automatically on all open devices.

---
## HTML partials
We make use of html partials. See documentation: https://github.com/coderhaoxin/gulp-file-include


