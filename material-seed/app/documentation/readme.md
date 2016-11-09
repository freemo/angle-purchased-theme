Angle
=====

Overview
--------

This document aims to explain the best way to work with the product and its components.

__All the best and enjoy coding.__

### Support

In case you have questions

[Contact Support >](https://wrapbootstrap.com/user/themicon)


Getting started
---------------

### Tips

- Do not start from scratch, use an existing asset and modify it to learn how it works.
- Explore the sources for ideas and sample code.
- Use Firebug or Chrome Developer Tools to find bugs on your website. Using one of those tools will help you to save time analyzing the site and finding elements structure, like classes, id or tags
  - Quick tip: open your site with Chrome, press F12 and go to console tab, reload your page and if something goes wrong you will see your page errors in red text.
- In case of error messages, someone might have seen it too, so you can try a Google search for a quick fix.

### Starting the app

Since this is AngularJS based application you need a server (Apache, IIS, xampp, etc)to serve the html files and perform http request to load all views.

**Important!** Opening the index.html with a double click (i.e. using file:// protocol) will show you only a blank page because there's no server that response to the requests made for each view in order to display the app interface.

Customizing
-----------

### Structure

Before starting to customize the template, here are the project files organization structure:

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
|   |   |   +-- controllers/
|   |   |   +-- directives/
|   |   |   +-- services/
|   |   +-- custom/
|   +-- less/
|   |   +-- app/
|   |   +-- bootstrap/
|   |   +-- themes/
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
- js/
Here you will find pure JS files. All this files are concatenated into the file app.js. 
 
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

**Important!** You only need to follow this instructions in case you want to work with JADE, LESS and concatenate all JS modules.

__Node.js__ is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.

__Gulp__ is a task manager, you can define different tasks to run certain commands. Those commands does the compilation job for JADE and LESS, and concatenates the JS files.

__Bower__ is a dependency manager, it works by fetching and installing packages from all over, taking care of hunting, finding, downloading, and saving the stuff you're looking for. Bower keeps track of these packages in a manifest file, bower.json. 

The package includes under the master/ folder the file __gulpfile.js__,  __package.json__ and __bower.json__ to install the required components to compile the source files.

#### Installing tools

The following steps are intended to be an orientation guide, if you are not experienced with this you will need to learn more about it from Google :)

- To install node and npm, go to http://nodejs.org/
- Run __npm install -g bower__ to install bower to manage dependencies
- Download and install GIT for your platform http://git-scm.com/downloads

Once  you have all tools installed

- Open a terminal, go the package __master/__ folder, then run the command __npm install__. This command will install gulp and all project dependencies. 
- Then, to install vendor dependencies, run __bower install__
- Finally run __gulp__ to start the task manager 

If everything goes fine, you should see the messages in the terminal telling you that most the task are done ok. The task will watch for files to compile them automatically all files when change.

To enable the automatic page reload there is also included a LiveReload task that requires the Chrome plugin [Livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)

### Javascript

The Javascript source is divided in two main files that controls the app

__base.js__: contains the scripts to start the application

__app.js__: contains the modules used in the application (controllers, directive, etc)

__Note__ The edit the scripts included in base.js open the file vendor.base.json located under the master folder

The app.js script build (concatenation) order is 

```
'js/app.init.js'
'js/modules/*.js'
'js/modules/controllers/*.js'
'js/modules/directives/*.js'
'js/modules/services/*.js'
'js/modules/filters/*.js'
```

### LESS

The LESS files compiles into the file __app.css__. This file contains the bootstrap styles and the application custom styles.

Also the __app-rtl.css__ is automatically generated with the same styles but inverted for RTL layout. To convert styles the node script css-flip is used.

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

Layout can be changed via the following classed applied to the __body__ tag

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

### Lazy Load

This app requires only the necessary scripts according to the view that is loaded saving tons unnecessary request to the server.

The lazy load is handled by a custom core function based on the plugin [ocLazyLoad](https://github.com/ocombe/ocLazyLoad)

To configure the lazy scripts, you need to edit the constants `APP_REQUIRES` (constants.js)  
Then edit the app configuration (config.js) where you will find the routes configuration and add or edit the params using the special function `resolveFor` which handles the scripts request order for the current route.

### RTL

RTL support uses the a tool called [css-flip](https://github.com/twitter/css-flip) which inverts most the css properties to change the page orientation.  
It's also a property `$rootScope.isRTL`  to detect when the site is in RTL mode. 

### Routes

This app uses for routing the [AngularUI Router](https://github.com/angular-ui/ui-router) with nested states making more simple to manage the routing system and load resource in cascade.

All routes are defined in the file __config.js__

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

This is method is also useful if you pretend to generate a per user menu dynamically in the server.

### Markdown Docs

This documentation is loaded from a Markdown source using [Flatdoc](http://ricostacruz.com/flatdoc/) plugin.
The menu and the content is generated automatically from the .md file and styled directly from custom css.

Via the `flatdoc` directive you can use it like this

``` html
<flatdoc src="path/to/readme.md"></flatdoc>
```

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

Directives
----------

This item include the following directives. 

`[href]`  
*File*: anchor.js  
Disables null anchor behavior

`[animate-enabled]`  
*File*: animate-enabled.js  
Enable or disables ngAnimate for element with directive

`[chosen]`  
*File*: chosen-select.js  
Initializes the chose select plugin

`[classyloader]`  
*File*: classy-loader.js  
Enable use of classyLoader directly from data attributes

`[reset-key]`  
*File*: clear-storage.js  
Removes a key from the browser storage via element click

`[filestyle]`  
*File*: filestyle.js  
Initializes the fielstyle plugin

`[flatdoc]`  
*File*: flatdoc.js  
Creates the flatdoc markup and initializes the plugin

`[form-wizard]`  
*File*: form-wizard.js  
Handles form wizard plugin and validation

`[toggle-fullscreen]`  
*File*: fullscreen.js  
Toggle the fullscreen mode on/off

`[gmap]`  
*File*: gmap.js  
Init Google Map plugin

`[load-css]`  
*File*: load-css.js  
Request and load into the current page a css file

`[markdownarea]`  
*File*: markdownarea.js  
Markdown Editor from UIKit adapted for Bootstrap Layout.

`[masked]`  
*File*: masked.js  
Initializes the masked inputs

`[search-open]`  
*File*: navbar-search.js  
Open the search in the top navbar. Use `[search-dismiss__]   in buttons a`t close it.

`[notify]`  
*File*: notify.js  
Create a notifications that fade out automatically. Based on Notify addon from UIKit (http://getuikit.com/docs/addons_notify.html)

`[now]`  
*File*: now.js  
Provides a simple way to display the current time formatted

`[paneltool]`  
*Module* panel-tools.js  
Directive tools to control panels. Allows collapse, refresh and dismiss (remove) Saves panel state in browser storage.  
Supports attributes [panel-dismiss] [panel-collapse] [panel-refresh]

`[animate]`  
*File*: play-animation.js  
Provides a simple way to run animation with a trigger. Requires animo.js

`[scrollable]`  
*File*: scroll.js  
Make a content box scrollable

`[sidebar]`  
*File*: sidebar.js  
Wraps the sidebar and handles collapsed state

`[skycon]`  
*File*: skycons.js  
Include any animated weather icon from Skycons

`[sparkline]`  
*File*: sparkline.js  
SparkLines Mini Charts

`[check-all]`  
*File*: table-checkall.js  
Tables check all checkbox

`[tagsinput]`  
*File*: tags-input.js  
Initializes the tag inputs plugin

`[toggle-state]`  
*File*: toggle-state.js  
Toggle a classname from the __body__ tag. Useful to change a state that affects globally the entire layout or more than one item.  
Elements must have [toggle-state="CLASS-NAME-TO-TOGGLE"]. Use [no-persist] to avoid saving the sate in browser storage.

`[ui-slider]`  
*File*: ui-slider.js  
Initializes the jQuery UI slider controls

`[validate-form]`  
*File*: validate-form.js  
Initializes the validation plugin Parsley

`[vector-map]`  
*File*: vector-map.js.js  
Initializes jQuery Vector Map plugin


### Bootstrap

This item include all directives from [Angular BootstrapUI].

[Angular BootstrapUI]: http://github.com/api

Constants
---------

### Colors

`APP_COLORS`  
Defines the brand colors used in the css accessible from JS

``` js
App.controller('ExampleCtrl', ['APP_COLORS', function(colors) {
  console.log( colors.primary ); 
  // prints #5d9cec
}]);
```

This constant is used  together with the __service colors__ to provide access from the $scope to each color by its name

Example 

``` html
<div sparkline data-bar-color="{{colorByName('primary')}}" ></div>
```

### Media Queries

`APP_MEDIAQUERY`  
Defines the media queries used in the css accessible from JS

``` js
App.controller('ExampleCtrl', ['APP_MEDIAQUERY', function(mq) {
  console.log( mq.mobile ); 
  // prints 480
}]);
```
### Requires

`APP_REQUIRES`  
Defines the script used with the lazy load system. 

Format:

``` js
// Put here all jQuery script (and not angular js)
scripts: {
  'friendly-name' : ['path/to/plugin.js', 'path/to/plugin.css', '...'],
  ...
}
// Put here all angular js modules that needs to be instantiated
modules: {
  { 
    name: 'toaster', files: ['path/to/module.js', 'path/to/module.css', '...']
  },
  ...
}
```

Learn more by looking into the file __config.js__

Credits
-------
<div class="row">
<div class="col-lg-3">
[Angular](https://angularjs.org/)  
[Angular Docs](https://docs.angularjs.org/guide/)  
[ocLazyLoad](https://github.com/ocombe/ocLazyLoad)  
[uiRouter](https://github.com/angular-ui/ui-router)  
[uiTranslate](https://github.com/angular-translate/angular-translate)  
[uiBootstrap](http://angular-ui.github.io/bootstrap/)  
[Toaster](https://github.com/jirikavi/AngularJS-Toaster)  
[Angular Loading Bar](http://chieffancypants.github.io/angular-loading-bar/)  
[Bootstrap](http://getbootstrap.com/)  
[jQuery]( http://jquery.com/)  
[Fastclick](https://github.com/ftlabs/fastclick)  
[Animo](http://labs.bigroomstudios.com/libraries/animo-js)  
[Animate.css](http://daneden.github.io/animate.css/)  
[Chosen](http://harvesthq.github.io/chosen/)  
[Codemirror](http://codemirror.net/)  
[BS Filestyle](http://markusslima.github.io/bootstrap-filestyle/)  
[FlotCharts](http://www.flotcharts.org/)  
[gMap](http://github.com/marioestrada/jQuery-gMap)  
[Marked](https://github.com/chjj/marked)  
[ClassyLoader](http://www.class.pm/projects/jquery/classyloader/)  
[CSSRadialBar](http://codepen.io/geedmo/pen/InFfd)  
</div>
<div class="col-lg-3">
[Modernizr](http://modernizr.com/)  
[MomentJs](http://momentjs.com/)  
[Parsley](http://parsleyjs.org/)  
[Bootstrap Slider](http://www.eyecon.ro/bootstrap-slider)  
[Sparkline](http://omnipotent.net/jquery.sparkline/#s-about)  
[BS Tags Input](http://timschlechter.github.io/bootstrap-tagsinput/examples/bootstrap3/)  
[slimSCroll](http://rocha.la/jQuery-slimScroll)  
[DataTables](https://datatables.net/.)  
[FullCalendar](http://arshaw.com/fullcalendar/docs/)  
[CsSpinner](http://jh3y.github.io/-cs-spinner/)  
[InputMask](https://github.com/RobinHerbots/jquery.inputmask)  
[jVectorMap](http://jvectormap.com/)  
[FlatDoc](https://github.com/rstacruz/flatdoc)  
[jQueryUI](http://jqueryui.com/sortable/)  
[UiKit Upload](http://www.getuikit.com/docs/addons_upload.html)  
[UiKit Notify](http://www.getuikit.com/docs/addons_notify.html)  
[UiKit MarkdownArea](http://www.getuikit.com/docs/addons_markdownarea.html)  
</div>
<div class="col-lg-3">
Icons  

[Font Awesome](http://fortawesome.github.io/Font-Awesome/)  
[Skycons](http://darkskyapp.github.io/skycons/)  
[Weather Icons](http://erikflowers.github.io/weather-icons/)  
<br>
Demo images  

[uiFaces](http://uifaces.com/)  
[Raumrot](http://www.raumrot.com/10/)  
[Unsplash](http://unsplash.com)  
</div>
</div>
