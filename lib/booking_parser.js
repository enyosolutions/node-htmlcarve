(function() {
    var Parser;

    Parser = (typeof exports !== "undefined" && exports !== null) && exports || (this.Parser = {});

    Parser.execute = function($) {
        return {
            title: $("meta[name='twitter:title']").attr("content"),
            summary: $("meta[name='twitter:description']").attr("content"),
            image: $("meta[name='twitter:image']").attr("content"),
            pictures: $('#photos_distinct a').map(function(i, e) {
                return $(e).attr('href').replace('max400', 'max1024x768');
            }),
            summary: $("#summary p").html(),
            metaTags: 'booking accommodation hotel'
        };
    };

}).call(this);
