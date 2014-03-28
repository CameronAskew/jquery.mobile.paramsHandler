jquery.mobile.paramsHandler
===========================

A plug-in for adding URL parameters to jQuery Mobile pages.

Compatible with jQuery Mobile 1.4+<br />
Under the MIT license (basically use it as you please)


The URL parameters are maintained within the URL so page refreshes will work fine. Additionally, if someone navigates directly to a page with parameters, everything will work appropriately.


<b>Steps to use</b>
<ol>
<li>Download <b>jquery.mobile.paramsHandler-1.4.2.js</b> and add it to your page (after the jquery mobile library)</li>
<li>Add pages with the $.mobile.paramsHandler.addPage(pageId, requiredParams, optionalParams, callback) and then call $.mobile.paramsHandler.init()</li>
<li>You can now go to those pages and when those pages are opened, your callback will be fired and the URL parameters will be given to you</li>
</ol>


<b>EXAMPLE USAGE</b>

HTML
````
...
<div id="one" data-role="page">
    <a href="#two?param1=4&param2=2">Go to page "two" with some URL parameters</a>
</div>

<div id="two" data-role="page">
    <div id="param1display"></div>
    <div id="param2display"></div>
</div>
...
````

JS
```
$.mobile.paramsHandler.addPage(
    "two",                      // id of jquery mobile page you want to accept URL parameters
    ["param1", "param2"],       // required parameters for that page
    [],                         // optional parameters for that page,
    
    // callback function for when that page is about to show
    function (urlParams) {
        $("#param1display").html(urlParams.param1);
        $("#param2display").html(urlParams.param2);
    }
);

$.mobile.paramsHandler.init();
```
