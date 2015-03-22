$.mobile.paramsHandler = {
    _pagesWithParams: [],

    addPage: function (id, requiredParams, optionalParams, callback) {
        var page = new PageWithParams(id, requiredParams, optionalParams, callback);
        this._pagesWithParams.push(page);
    },

    init: function () {
        $(document).on("pagebeforechange", function (e, data) {
            if (typeof data.toPage !== "string") {
                return;
            }

            var u = $.mobile.path.parseUrl(data.toPage);

            var pageMatch = null;
            var pages = $.mobile.paramsHandler._pagesWithParams;

            for (var i in pages) {

                var page = pages[i];
                var re = "^#" + page.id + "(\\?|$)";

                if (u.hash.search(re) !== -1) {
                    pageMatch = page;
                }
            }

            var vm;
            if (!pageMatch) {
                return;
            }

            // TODO: add default functionality for if there's a parameter missing
            var urlVars = getUrlVars(u.hash);
            if (urlVars == null) {
                return;
            }

            for (var j in pageMatch.requiredParams) {
                if (urlVars[j]) {
                    pageMatch.requiredParams[j] = urlVars[j];
                } else {
                    return;
                }
            }

            for (var k in pageMatch.optionalParams) {
                if (urlVars[k]) {
                    pageMatch.optionalParams[k] = urlVars[k];
                }
            }

            pageMatch.callback(urlVars);

            pageMatch.reset();

            $(":mobile-pagecontainer").pagecontainer("change", "#" + pageMatch.id, data.options);

            window.history.replaceState(null, null, u.href);

            e.preventDefault();
        });
    }
};

function PageWithParams(id, requiredParams, optionalParams, callback) {
    var self = this;

    self.id = id;
    self.callback = callback;
    self.requiredParams = [];
    self.optionalParams = [];

    self.reset = function () {
        for (var x = 0; x < requiredParams.length;x++) {
            self.requiredParams[requiredParams[x]] = null;
        }
        for (var y = 0; y < optionalParams.length; y++) {
            self.optionalParams[optionalParams[y]] = null;
        }
    };
    self.reset();
}

function getUrlVars(url) {
    var vars = [];
    if (url.indexOf('?') == -1) {
        return null;
    }
    var queryUrl = url.slice(url.lastIndexOf('?') + 1);
    var hashes = queryUrl.split('&');
    for (var i = 0; i < hashes.length; i++) {
        url = hashes[i].split('=');
        vars[url[0]] = url[1];
    }
    return vars;
}
