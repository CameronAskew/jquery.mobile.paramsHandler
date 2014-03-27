jquery.mobile.paramsHandler
===========================

A plug-in for adding URL parameters to jQuery Mobile pages

Compatible with jQuery Mobile 1.4+

EXAMPLE USAGE:

$.mobile.paramsHandler.addPage(
    "two",                      // jquery mobile page id which will accept parameters
    ["param1", "param2"],       // required parameters for that page
    [],                         // optional parameters for that page,
    function (urlVars) {
        $("#param1display").html(urlVars.param1);
        $("#param2display").html(urlVars.param2);
    }
);

$.mobile.paramsHandler.init();
