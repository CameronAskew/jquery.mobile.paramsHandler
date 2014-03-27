jquery.mobile.paramsHandler
===========================

A plug-in for adding URL parameters to jQuery Mobile pages

Compatible with jQuery Mobile 1.4+<br />
Under the MIT license (basically use it as you please)

<b>EXAMPLE USAGE</b>

```
$.mobile.paramsHandler.addPage(
    "two",                      // jquery mobile page id which will accept parameters
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
