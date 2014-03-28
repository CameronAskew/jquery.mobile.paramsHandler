jquery.mobile.paramsHandler
===========================

A plug-in for adding URL parameters to jQuery Mobile pages.

<ol>
<li>Download <b>jquery.mobile.paramsHandler-1.4.2.js</b> and add it to your page (after the jquery mobile library)</li>
<li>Sequentially add 
</ol>

Compatible with jQuery Mobile 1.4+<br />
Under the MIT license (basically use it as you please)

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
