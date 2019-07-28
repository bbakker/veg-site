# veg-site design demo
A clickable design demo for demoing website design ideas  

* Here is our intended sitemap: https://app.flowmapp.com/share/29676cead45a757757332198541d6ed3
* Here are our intended user flows https://app.flowmapp.com/share/29676cead45a757757332198541d6ed3/userflow/668


---
## Getting started

### Installing prerequisites
1.  You need some terminal. On Windows we recommend "git bash terminal"

2. You'll need the latest version of nodejs and the node package manager NPM on your system. See https://nodejs.org/en/ or https://docs.npmjs.com/downloading-and-installing-node-js-and-npm to install these.

    1. Follow the nodejs and NPM installation instructions (on nodejs site) to install nodejs and NPM

3. Open a console and clone this project on your file system.
```
 $ git clone git@github.com:bbakker/veg-site.git foldername
```
4. After you've installed nodejs and npm run:

```
 $ npm install
```
Nodejs dependencies will now be installed.

---
## Start HTTP server and watch changes in any files

You need to compile before you can watch the pages.

    $ gulp watch

A browser wil now be opened and starts browsersync.
Browsersync will give you four access URL's. Eg:
    
    [Browsersync] Access URLs:
     -------------------------------------
           Local: http://localhost:xxxx
        External: http://192.168.2.20:xxxx
     -------------------------------------
              UI: http://localhost:xxxx
     UI External: http://localhost:xxxx
     -------------------------------------

Portnumbers change every run. See you console output for the exact URL's.

This way you can watch the pages on multiple devices. Every time one of your files change, the page will be reloaded automatically on all open devices.

## Pages so far
* http://localhost:xxxx/pages/homepage.html
* http://localhost:xxxx/pages/artikel.html

(Change xxxx the corect port number) 

---
## HTML partials
This demo makes use of html partials. See documentation: https://github.com/coderhaoxin/gulp-file-include

## SCSS Grid system
Just for the sake of fast mucking up this demo makes use of http://hugeinc.github.io/flexboxgrid-sass