webpackHotUpdate(2,{

/***/ 74:
/***/ function(module, exports) {

	module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta name=\"viewport\" content=\"initial-scale=1.0, user-scalable=no\">\n    <meta charset=\"UTF-8\">\n    <script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js\"></script>\n    <!-- Latest compiled and minified CSS -->\n    <script type=\"text/javascript\" src=\"dist/js/main.js\"></script>\n    <script type=\"text/javascript\" src=\"dist/js/hmr.js\"></script>\n    <script type=\"text/javascript\" src=\"http://localhost:8080/webpack-dev-server.js\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css\">\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css\">\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.css\">\n    <link rel=\"stylesheet\" href=\"dist/css/main.css\">\n\n    <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.js\"></script>\n    <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.26/vue.min.js\"></script>\n    <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js\"></script>\n    <style type=\"text/css\">\n    </style>\n    <title>手遊金幣</title>\n</head>\n<body>\n  <div id=\"navbar\" class=\"ui menu no-border-radius grey\">\n    <div class=\"ui container\">\n      <a href=\"#\" class=\"logo\">\n        <img src=\"images/logo.png\" alt=\"GameCoin - 遊戲金幣\">\n      </a>\n      <div id=\"menu_user_info\" class=\"ui right floated item\">\n        <div class=\"point\"><i class=\"dollar icon\"></i><span>100</span></div>\n        <img src=\"images/user_icon.png\">\n      </div>\n    </div>\n  </div>\n  <div class=\"ui fluid container\">\n  </div>\n  <center>\n<!--   <div class=\"owl-carousel owl-theme\" id=\"banner-owl\">\n      <div class=\"item\">\n        <a href=\"https://gamewallet.jp/web/campaigns/app_install\"><img src=\"https://gamewallet.s3-ap-northeast-1.amazonaws.com/production/0ccfa3cfa11376c8.png\" alt=\"0ccfa3cfa11376c8\" /></a>\n      </div>\n      <div class=\"item\">\n        <a href=\"http://gamewallet.jp/users/followers\"><img src=\"https://gamewallet.s3-ap-northeast-1.amazonaws.com/production/11cddf1d5186ec8b.png\" alt=\"11cddf1d5186ec8b\" /></a>\n      </div>\n      <div class=\"item\">\n        <a href=\"javascript:{if(!userSignedIn()){showLoginPopup();}else{location.href = &#39;/mypage/add_home/home&#39;;}}\"><img src=\"https://gamewallet.s3-ap-northeast-1.amazonaws.com/production/0588dd8ec41712a4.png\" alt=\"0588dd8ec41712a4\" /></a>\n      </div>\n  </div> -->\n  </center>\n  <img src=\"images/carousel.png\" class=\"m-carousel\">\n  <div id=\"search_app\" class=\"ui container\">\n    <div id=\"search\" class=\"ui search\">\n      <div class=\"ui icon input\">\n        <input class=\"\" type=\"text\" placeholder=\"Search apps...\" v-on:keyup.enter=\"doSearch\" v-model=\"searchString\">\n        <i v-on:click=\"doSearch\" class=\"inverted circular search link icon\"></i>\n      </div>\n      <div class=\"results\"></div>\n    </div>\n    <!-- <img src=\"images/latest_app_tab.png\" style=\"width: 100%\"> -->\n    <div id=\"apps_container\" >\n      <h1 v-if=\"searchResults.length == 0\">0</h1>\n      <div class=\"app_box\" v-for=\"item in searchResults\">\n        <img class=\"ui rounded image\"  v-bind:src=\"item.artworkUrl100\">\n      </div>\n    </div>\n  </div>    \n\n  <div id=\"latest_app\" class=\"ui container\">\n    <!-- <h2 class=\"ui header\">熱門遊戲</h2> -->\n    <img src=\"images/latest_app_tab.png\" style=\"width: 100%\">\n    <div id=\"apps_container\" class=\"ui five column grid\">\n      <div class=\"column\" v-for=\"item in items\">\n        <img class=\"ui fluid rounded image\"  v-bind:src=\"item['im:image'][0].label\">\n        <div class=\"app_title\">{{ item.title.label.split('-')[0] }}</div>\n      </div>\n\n    </div>\n  </div>\n  <div id=\"popular_app\" class=\"ui container\">\n    <!-- <img src=\"images/latest_app_tab.png\" style=\"width: 100%\"> -->\n    <img src=\"images/latest_app_tab.png\" style=\"width: 100%\">\n    <div id=\"apps_container\" class=\"ui five column grid\">\n      <div class=\"column\" v-for=\"item in items\">\n        <img class=\"ui fluid rounded image\"  v-bind:src=\"item['im:image'][0].label\">\n        <div class=\"app_title\">{{ item.title.label.split('-')[0] }}</div>\n      </div>\n\n    </div>\n  </div>\n  <script>\n  $(document).ready(function(){\n    var example1 = new Vue({\n      el: '#popular_app',\n      data: {\n        items: []\n      }\n    })\n    var topFreeAppUrl = \"https://itunes.apple.com/tw/rss/topfreeapplications/limit=10/json\";\n    var topGrossingAppUrl = \"https://itunes.apple.com/tw/rss/topgrossingapplications/limit=10/genre=6014/json\";\n\n    var topFreeApps;\n    $.getJSON(topFreeAppUrl, function(res){\n      topFreeApps = res;\n      example1.items = res.feed.entry\n    })\n\n    var searchVm = new Vue({\n      el: \"#search_app\",\n      data: {\n        searchString: \"\",\n        searchResults: []\n      },\n      methods: {\n        doSearch: function (e) {\n          $.ajax({\n            url: 'https://itunes.apple.com/search',\n            dataType: \"jsonp\",\n            data: {\n              term:this.searchString,\n              media: \"software\",\n              lang: \"zh_tw\", \n              country: \"tw\",\n              limit: 10\n            },\n            success: function(resJson) {\n              this.searchResults = resJson.results;\n            }.bind(this)\n          });\n        }\n      }\n    });\n    \n    var multiple = $('.owl-carousel .item').length > 1;\n    $('#banner-owl').owlCarousel({\n      loop: multiple,\n      margin: 10,\n      nav: multiple,\n      singleItem: true,\n      autoWidth: true,\n      autoplay: true,\n      autoplayTimeout: 5000,\n      autoplayHoverPause: false,\n      items: 1,\n    });\n  })\n\n  </script>  \n\n\n</body>\n</html>"

/***/ }

})