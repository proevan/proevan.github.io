webpackHotUpdate(2,{

/***/ 74:
/***/ function(module, exports) {

	module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta name=\"viewport\" content=\"initial-scale=1.0, user-scalable=no\">\n    <meta charset=\"UTF-8\">\n    <script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js\"></script>\n    <!-- Latest compiled and minified CSS -->\n    <script type=\"text/javascript\" src=\"dist/js/main.js\"></script>\n\n    <script type=\"text/javascript\" src=\"dist/js/hmr.js\"></script>\n    <script type=\"text/javascript\" src=\"http://localhost:8080/webpack-dev-server.js\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css\">\n\n    <link rel=\"stylesheet\" href=\"dist/css/main.css\">\n    <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.js\"></script>\n    <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.26/vue.min.js\"></script>\n    <style type=\"text/css\">\n\n    </style>\n    <title>手遊金幣</title>\n</head>\n<body>\n  <ul id=\"example-1\">\n    <li v-for=\"item in items\">\n      <img src=\"{{ item['im:image'][0].label }}\">\n      {{ item.title.label }}\n    </li>\n  </ul>\n  <div id=\"search\" class=\"ui search\">\n    <div class=\"ui icon input\">\n      <input class=\"\" type=\"text\" placeholder=\"Search countries...\" v-on:keyup.enter=\"doSearch\">\n      <i class=\"inverted circular search link icon\"></i>\n    </div>\n    <div class=\"results\"></div>\n  </div>\n  <div id=\"popular_app\" class=\"ui container\">\n    <!-- <h2 class=\"ui header\">熱門遊戲</h2> -->\n    <img src=\"images/latest_app_tab.png\" style=\"width: 100%\">\n    <div id=\"apps_container\" class=\"ui five column grid\">\n      <div class=\"column\" v-for=\"item in items\">\n        <img class=\"ui fluid rounded image\"  src=\"{{ item['im:image'][0].label }}\">\n        <div class=\"app_title\">{{ item.title.label.split('-')[0] }}</div>\n      </div>\n      <div class=\"column\">\n        <img class=\"ui fluid rounded image\" src=\"http://is2.mzstatic.com/image/thumb/Purple20/v4/eb/31/21/eb312106-4b24-0a13-5606-357ba8ceb3b1/mzl.rklubacs.png/100x100bb-85.png\">\n      </div>\n        \n      <div class=\"column\">\n        <img class=\"ui fluid rounded image\" src=\"http://is4.mzstatic.com/image/thumb/Purple30/v4/34/10/a2/3410a267-ad20-a9e0-24bc-d55fc454c176/mzl.nefloxrn.png/100x100bb-85.png\">\n      </div>\n        \n      <div class=\"column\">\n        <img class=\"ui fluid rounded image\" src=\"http://is1.mzstatic.com/image/thumb/Purple20/v4/21/d3/23/21d32367-457e-d8e1-b16e-846d1307ac5b/pr_source.png/100x100bb-85.png\">\n      </div>\n        \n      <div class=\"column\">\n        <img class=\"ui fluid rounded image\" src=\"http://is2.mzstatic.com/image/thumb/Purple30/v4/60/05/7e/60057ef4-5df0-58c7-5cf8-7c072d1377b2/mzl.uoxtuums.png/100x100bb-85.png\">\n      </div>\n        \n      <div class=\"column\">\n        <img class=\"ui fluid rounded image\" src=\"http://is2.mzstatic.com/image/thumb/Purple20/v4/e3/14/c3/e314c30e-44a6-0965-3427-08763439b9fc/mzl.dfreobxz.png/100x100bb-85.png\">\n      </div>\n        \n      <div class=\"column\">\n        <img class=\"ui fluid rounded image\" src=\"http://is5.mzstatic.com/image/thumb/Purple20/v4/94/d3/8c/94d38cf5-852d-8d5c-5de6-764fb7593c49/mzl.ewgkvhvp.png/100x100bb-85.png\">\n      </div>\n        \n      <div class=\"column\">\n        <img class=\"ui fluid rounded image\" src=\"http://is5.mzstatic.com/image/thumb/Purple60/v4/93/4a/c7/934ac729-44cf-b224-2121-41722d99404e/mzl.gzkihblm.png/100x100bb-85.png\">\n      </div>\n        \n      <div class=\"column\">\n        <img class=\"ui fluid rounded image\" src=\"http://is3.mzstatic.com/image/thumb/Purple20/v4/79/72/78/797278fd-eb6b-e82e-af51-0855c225b8ab/mzl.uvqthxom.png/100x100bb-85.png\">\n      </div>\n        \n      <div class=\"column\">\n        <img class=\"ui fluid rounded image\" src=\"http://is3.mzstatic.com/image/thumb/Purple30/v4/bb/8f/2a/bb8f2a6a-e1a8-b708-e51b-11949169857b/mzl.kbkbfobf.png/100x100bb-85.png\">\n      </div>\n        \n      <div class=\"column\">\n        <img class=\"ui fluid rounded image\" src=\"http://is3.mzstatic.com/image/thumb/Purple20/v4/b6/c0/cd/b6c0cdad-382d-cf6b-5b5c-3a038a06044e/mzl.mdldlnkg.jpg/100x100bb-85.png\">\n      </div>\n    </div>\n  </div>\n  <script>\n  $(document).ready(function(){\n    var example1 = new Vue({\n      el: '#apps_container',\n      data: {\n        items: []\n      }\n    })\n    var topFreeAppUrl = \"https://itunes.apple.com/tw/rss/topfreeapplications/limit=10/json\";\n    var data;\n    $.getJSON(topFreeAppUrl, function(res){\n      data = res;\n      example1.items = res.feed.entry\n    })\n\n    var searchVm = new Vue({\n      el: \"#search\",\n      methods: {\n        doSearch: function (e) {\n          debugger;\n        }\n      }\n    });\n  })\n\n  </script>  \n\n\n</body>\n</html>"

/***/ }

})