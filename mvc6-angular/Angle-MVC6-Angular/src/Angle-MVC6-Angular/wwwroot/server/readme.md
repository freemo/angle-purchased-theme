Angle
=====

Overview
--------

This is a summary of the original documentation to demonstrate the use of markdown reader and expose internal operational features of this template.

### Support

In case you have pre-sale questions:

[Send us a message >](https://wrapbootstrap.com/user/themicon)

Or 

[Add a comment >](https://wrapbootstrap.com/theme/angle-bootstrap-admin-app-angularjs-WB04HF123/comments)


*Both options needs a [Wrapbootstrap](https://wrapbootstrap.com/signin) account.

Structure
-----------

```
+-- app/
|   +-- css/
|   +-- documentation/
|   +-- img/
|   +-- js/
|   +-- i18n/
|   +-- pages/
|   +-- vendor/
|   +-- views/
+-- master/
|   +-- jade/
|   |   +-- pages/
|   |   +-- views/
|   +-- js/
|   |   +-- modules/
|   |   +-- custom/
|   +-- less/
|   |   +-- app/
|   |   +-- bootstrap/
|   |   +-- themes/
|   +-- sass/
|   +-- gulpfile.js
|   +-- package.json
|   +-- bower.json
+-- server/
|   +-- *.json
+-- vendor/
+-- index.html
```
---
#### Main folders explanation 

__app/__ folder
 
This folder contains the compiled files. __This files are ready to deploy on your server.__ 
 
- pages/
This folder contains the compiled html files for the single pages (out of the app).
- views/
This folder contains the compiled html files for the views and partials used for the app. 
- i18n/
This folder contains the json files use for translation.
- vendor/
This folder contains vendor files not managed via bower

__master/__ folder
 
This folder contains the source files. You will find the following folders inside
 
- jade/
This folder contains JADE files. This files need to be compiled into html files to be displayed by a browser
- less/
This folder contains the LESS files for the core styles and bootstrap styles.
- sass/
This folder contains the SASS files (.scss) for the core styles and bootstrap styles. 
- js/
Here you will find Javascript files for all features splitted into different modules/components.
 
__vendor/__ folder
 
This folder contains the vendor files used to include plugins and other components. This folder is handled via bower so optionally you can remove or upgrade the vendor components using such tool.

__server/__ folder
 
This folder contains server side files used for demonstration and guide for the flot chart and file upload components.
  
- __sidebar-menu.json__
This file is __important and required__ because it contains the sidebar menu definition.

### Custom code

To add your own code you can follow this instructions:

__Working with css and js__

- Create a file app/css/custom.css and add your own styles
- Create a file app/js/custom.js and add your own javascript
- Edit the file index.html and include custom.css after all other css files and custom.js after all other js files.

__Working with source files__

- For JS, go to folder master/js/custom and start editing the file custom.js. After compile the source again with gulp, your own code will included at th bottom of file app/js/app.js.
- For LESS, go to folder master/less and create a folder called custom and add your won less files. Then edit file app.less and @import all your stylesheets at the bottom (overrides all app default styles)

__A note on updating__

> The premise is, the less you change the downloaded code, the easier will be to apply any updates. Try always to keep your own code the most separated as possible from the package code to easily apply new updates when necessary.

Build
-----

**Important!** This section is for those who want to work with JADE, LESS/SASS and JavaScript modules.

__Node.js__ is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.

__Gulp__ is a task manager, you can define different tasks to run certain commands. Those commands does the compilation job for JADE and LESS, and concatenates the JS files.

__Bower__ is a dependency manager, it works by fetching and installing packages from all over, taking care of hunting, finding, downloading, and saving the stuff you're looking for. Bower keeps track of these packages in a manifest file, bower.json. 

The package includes under the master/ folder the file __gulpfile.js__,  __package.json__ and __bower.json__ to install the required components to compile the source files.

#### Installing tools

This section describes all necessary steps to install required tools suchs a node, gulp, bower, etc in order to build the source code.

#### Main Gulp tasks

 
This command will run the default task without minify assets

`$ gulp`

This task will generate the assest wihout mininfy and with sourcemaps

`$ gulp sourcemaps`

This taks will generate the asset minified

`$ gulp build`

You can also mix task build and sourcemaps to get minified version with sourcemaps

`$ gulp build sourcemaps`

All tasks will end up watching source files for LiveReload

#### AngularJS Template Cache

To enable this feature, run gulp with the following command

`$ gulp --usecache`

**Note**: This flag is recommended to be combined with build task so you can generate the best optimized version for production enviroment.


### Javascript

The Javascript source is divided in two main files that controls the app

__base.js__: contains the scripts to start the application(angularjs, jquery, etc.)

__app.js__: contains the modules used in the application (controllers, directives, etc)

__Note__ The edit the scripts included in base.js open the file vendor.base.json located under the master folder

The app.js script build (concatenation) order is 

All Javascript modules are concatenated in the following order
```
// main app modules
'master/js/app.module.js',
// template modules
'master/js/modules/**/*.module.js',
'master/js/modules/**/*.js',
// custom modules
'master/js/custom/**/*.module.js',
'master/js/custom/**/*.js'
```
 
#### Modules organization
 
```
angle --> [
    app.core --> [
        'ngRoute',
        'ngAnimate',
        'ngStorage',
        'ngCookies',
        'pascalprecht.translate',
        'ui.bootstrap',
        'ui.router',
        'oc.lazyLoad',
        'cfp.loadingBar',
        'ngSanitize',
        'ngResource',
        'tmh.dynamicLocale',
        'ui.utils'
    ],
    app.routes --> [
        'app.lazyload'
    ],
    app.sidebar,
    app.navsearch,
    app.preloader,
    app.loadingbar,
    app.translate,
    app.settings,
    app.dashboard,
    app.icons,
    app.flatdoc,
    app.notify,
    app.bootstrapui,
    app.elements,
    app.panels,
    app.charts,
    app.forms,
    app.locale,
    app.maps,
    app.pages,
    app.tables,
    app.extras,
    app.mailbox,
    app.utils --> [
        'app.colors'
    ]
]
```

### LESS

The LESS files compiles into the file __app.css__. This file contains the bootstrap styles and the application custom styles.

Also the __app-rtl.css__ is automatically generated with the same styles but inverted for RTL layout. To convert styles the node script css-flip is used.

### SASS
 
To build the styles using the SCSS files version you have to use the following command
 
`gulp --usesass`

### Vendor

Vendor script dependencies are managed by bower. Just run __bower install__ in folder master/ and all dependencies will be installed.

After installing all dependencies is necessary to install them in the locations the app expects them. To do that, run gulp task with the command `gulp scripts:vendor`  in the master folder.  
This task will run automatically the tasks  `scripts:vendor:app` and  `scripts:vendor:base`

#### Vendor folder

To avoid not necessary files that bower downloads there's a task `scripts:vendor:app` that will copy all files required by the app from the __bower_components__ folder to the main __/vendor__ folder.  
This files are listed in __vendor.json__ file which contains the path of all necessary files required by the app components. Those files are usually required via the lazy load module and you can include fonts, svg, etc.

#### Vendor Base

The `base.js` file is generated with the task  `scripts:vendor:base`. This task will read the list of files in the __vendor.base.json__ file and will concat and compress all files and move them to create the mentioned base.js file.  
All files in base.js are loaded when the app is required for first time and contains all vendor scripts necessary to start the app (jquery, angular, etc).

#### Vendor Updates

To update vendor files via bower you can edit the bower.json file by adding the last version you want to download. 

__Note__ The folder __app/vendor__ contains vendor files that currently aren't possible to be managed via bower

Usage
-----

### Layout

Layout can be changed via the following classes applied to the __body__ tag

`.layout-fixed`: Makes navbars become fixed while the user can scroll only content

`.layout-boxed`: Limits the width of the main wrapper element

`.aside-collapsed`: Condenses the sidebar showing only icons

`.aside-toggle`: used internally for mobiles to hide the sidebar off screen

`.offsidebar-open`: used internally to display the offsidebar component (formally the right sidebar) 

The following markup representation is in fact divided into views but this code will give a good perspective of the final organization after the app is rendered:

``` html
<html>
  <head>
    #metas and css
  </head>  
  <body>
    <section class="wrapper" data-ui-view>

        #start include from app.html
          <nav class="navbar topnavbar">
            #top navbar content
          </nav>
   
          <aside class="aside">
            #sidebar content (left)
          </aside>
   
          <aside class="offsidebar">
            #offsidebar content (right)
          </aside>
   
          <section>
            <div class="content-wrapper" data-ui-view>
              #page content
            </div>  
          </section>
        #end include from app.html

     </section>
 
     #scripts
 
  </body>
</html>
```

### Preloader

 
The site preloader is used adding the following markup to the index file right below the body tag (as child)
```
<div data-preloader></div>
```

Background color and Image logo are easily customizable.


### Lazy Load

This app requires only the necessary scripts according to the view that is loaded saving tons unnecessary request to the server.

The lazy load is handled by a custom core function based on the plugin [ocLazyLoad](https://github.com/ocombe/ocLazyLoad)


#### Adding new dependencies

You can add a new AngularJS dependencies following two alternatives.
 
**1-** To inject a module in the app initialization (i.e. angular.module[] definition), which also means it will be available across all the application, you can:

- a. Append the module content to the file base.js or add it to the file `/master/vendor.base.json` to generate it using Gulp

- b. Or, you can edit the index.html (or jade) and append the new assets before the app.js 
 
**2-** If you want to use the new module __only when it is required__, you can use the lazy load system
 
- a. Install the new component using Bower and add the main files to `vendor.json` in order to copy them to the app vendor folder (via Gulp).
 
- b. Add a new entry into APP_REQUIRES constant
 
For AngularJS dependencies, use module property 

```
modules: { name: 'moduleName', files : ['path/file1', 'path/fileetc']) }
```

For jQuery based and standalone scripts, use scripts property 

```
scripts: { 'some-plugin': ['path/to/file'] }
```

- c. Now you can add a new route and use the custom resolveFor helper to request the new module files and you can  use the new module in your view/controller

```
.state('app.my-view ', {
    url: '/my-view',
    templateUrl: helper.basepath('my-view.html'),
    resolve: helper.resolveFor('moduleName' )
})
```

### RTL

RTL support uses the a tool called [css-flip](https://github.com/twitter/css-flip) which inverts most the css properties to change the page orientation.  

### Routes

This app uses for routing the [AngularUI Router](https://github.com/angular-ui/ui-router) with nested states making more simple to manage the routing system and load resource in cascade.

We have added a custom Helper for Routes to resolve easily all dependencies

```
.state('app.someroute', {
  url: '/some_url',
  templateUrl: helper.basepath('someroute_view.html'),
  controller: 'someController',
  resolve: angular.extend(
    helper.resolveFor(), {
    // YOUR RESOLVES GO HERE
    }
  )
})
```

### Translation

The translation system uses the [AngularUI Translate](https://github.com/angular-translate/angular-translate) module.  
This modules simplifies the translation system by loading translate references from a JSON file and replacing the content where the reference has been used.

Examples

``` html
<h3 ui-translate="reference.NAME">Text that will be replaced</h3>

<h3>{{ 'reference.NAME' | translate }}</h3>

<a href="#" title="{{ 'reference.NAME' | translate }}">Link</a>
```

The JSON files with translation references are located in the folder app/i18n

### Dynamic Sidebar

The sidebar is created dynamically from a JSON file.  

__JSON properties format:__

``` js
[
  {
    "text":      "Item text",          // replaced by translate reference
    "sref":      "app.dashboard",      // the state name of the target route
    "icon":      "icon-speedometer",   // the icon full classname
    "translate": "sidebar.ITEM",       // the translation reference
    "heading":   "true"                // only when item is used as heading 
  },

  ...

]
```

This method is also useful if you pretend to generate a per user menu dynamically in the server.

### Markdown Docs

This documentation is loaded from a Markdown source using [Flatdoc](http://ricostacruz.com/flatdoc/) plugin.  
The menu and the content is generated automatically from the .md file and styled directly from custom css.


### Icons

Icons included from

* [__Font Awesome__](http://fortawesome.github.io/Font-Awesome/)
* [__Skycons__](http://darkskyapp.github.io/skycons/)
* [__Weather Icons__](http://erikflowers.github.io/weather-icons/)

### Themes

To change the color scheme you have 2 options:

#### From LESS files

Edit the LESS files in folder __master/less/app__ and the file __master/less/bootstrap/variables.less__ to use the color you want.  
Like Bootstrap, most of the colors are based on `@brand-*` variables.

You can also edit the files in __master/less/theme__ folder to create your own set of color schemes. This files must be included after the __app.css__ in order to override the default color set.

> Changing the theme from LESS files helps you to avoid bloating your css by not double declaring your color rules.

#### From CSS files

This template support color schemes including a css file. You can find the color options in the folder app/css/  files are named theme-*.css

If you want to change or add a new component color, just inspect the color using your favorite browser devtool and then replace the value in the file.

This files are prepared to change the basic color scheme (both sidebars and  top navbar) but if you want to make a more deep change I suggest you to check the LESS way which is more simple for multiple component changes.


Credits
-------

See the full list of credits [here](http://themicon.co/theme/angle/credits/)