(function() {
  var TcParser;

  TcParser = (typeof exports !== "undefined" && exports !== null) && exports || (this.TcParser = {});

  TcParser.execute = function($) {
    return {
      title: $("meta[name='twitter:title']").attr("content"),
      summary: $("meta[name='twitter:description']").attr("content"),
      image: $("meta[name='twitter:image']").attr("content"),
      author: $("meta[name='twitter:creator']").attr("content"),
      price: $("meta[itemprop='price']").attr("content"),
      priceCurrency: $("meta[itemprop='priceCurrency']").attr("content"),
      metaTags: 'airbnb accommodation hotel'
    };
  };

}).call(this);
