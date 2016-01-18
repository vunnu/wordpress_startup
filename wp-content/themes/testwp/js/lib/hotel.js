var easyAccessHotelsWidgetScriptLoaded = false;
function easyAccessHotelsInitJQuery() {
    if (typeof (easyAccessHotelsOwnJQuery) == "undefined") {
        if (!easyAccessHotelsWidgetScriptLoaded) {
            easyAccessHotelsWidgetScriptLoaded = true;
            document.write("<scr" + "ipt charset=\"UTF-8\" type=\"text/javascript\" src=\"//online.bookvisit.com/Content/widget/script/WidgetScripts.min.js\"></scr" + "ipt>");
        }
        setTimeout("easyAccessHotelsInitJQuery()", 50);
    } else {
        var baseUrl = "//online.bookvisit.com/widget/GetWidgetSearchFormMultipleRooms";
        (function ($) {
            $.getJSON(baseUrl + "?channelId=6364fb85-adf5-4395-a6bd-5d44f2429934&openOption=iframe&culture=lt-LT&containerId=searchContainer&displayPromoCode=true&displayCorpCode=true&displayIATACode=false&jsoncallback=?", function (json) {
                $("#searchContainer").html(json.Widget);
            });
        })(easyAccessHotelsOwnJQuery);
    }
}
easyAccessHotelsInitJQuery();