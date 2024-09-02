
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.6b51a4a4389bb4bd8a60.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/699.baseline.en.f32e514f786d9948508f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/723.baseline.en.4e74c9d386be1720f0fd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/137.baseline.en.c9f3e54905e2cc4deaff.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.89ae57483fad96391225.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/977.baseline.en.ced19ebca9f312cb8c0c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/539.baseline.en.dfb95250bd52c6f905a3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/582.baseline.en.d192ee6ceb50b7df305d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/927.baseline.en.d52963cebed50f376c29.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2.baseline.en.ac747b888048f67b8b74.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/387.baseline.en.9e8e02d725230ae42deb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.5dbb44490820b17da68b.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/699.baseline.en.42acfc4d3349b98feb91.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.b33fe50d6fdb42d0dcda.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.baseline.en.79760fa23cd582569d36.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  