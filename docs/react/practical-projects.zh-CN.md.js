webpackJsonp([45],{777:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var i=t(1),l=(a(i),t(2));a(l);e.exports={content:["article",{},["h2","\u5b89\u88c5 dva"],["p","\u901a\u8fc7 npm \u5b89\u88c5 dva \u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> dva-cli -g'},["code","$ npm install dva-cli -g"]],["h2","\u521b\u5efa\u65b0\u5e94\u7528"],["p","\u5b89\u88c5\u5b8c dva-cli \u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u5728 terminal \u91cc\u8bbf\u95ee\u5230 ",["code","dva"]," \u547d\u4ee4\u3002\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",["code","dva new"]," \u521b\u5efa\u65b0\u5e94\u7528\u3002"],["pre",{lang:"bash",highlighted:"$ dva new dva-quickstart"},["code","$ dva new dva-quickstart"]],["p","\u8fd9\u4f1a\u521b\u5efa ",["code","dva-quickstart"]," \u76ee\u5f55\uff0c\u5305\u542b\u9879\u76ee\u521d\u59cb\u5316\u76ee\u5f55\u548c\u6587\u4ef6\uff0c\u5e76\u63d0\u4f9b\u5f00\u53d1\u670d\u52a1\u5668\u3001\u6784\u5efa\u811a\u672c\u3001\u6570\u636e mock \u670d\u52a1\u3001\u4ee3\u7406\u670d\u52a1\u5668\u7b49\u529f\u80fd\u3002"],["p","\u7136\u540e\u6211\u4eec ",["code","cd"]," \u8fdb\u5165 ",["code","dva-quickstart"]," \u76ee\u5f55\uff0c\u5e76\u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668\uff1a"],["pre",{lang:"bash",highlighted:'$ <span class="token function">cd</span> dva-quickstart\n$ <span class="token function">npm</span> start'},["code","$ cd dva-quickstart\n$ npm start"]],["p","\u51e0\u79d2\u949f\u540e\uff0c\u4f60\u4f1a\u770b\u5230\u4ee5\u4e0b\u8f93\u51fa\uff1a"],["pre",{lang:"bash",highlighted:"          proxy: load rule from proxy.config.js\n          proxy: listened on 8989\n\ud83d\udce6  411/411 build modules\nwebpack: bundle build is now finished."},["code","          proxy: load rule from proxy.config.js\n          proxy: listened on 8989\n\ud83d\udce6  411/411 build modules\nwebpack: bundle build is now finished."]],["p","\u5728\u6d4f\u89c8\u5668\u91cc\u6253\u5f00 ",["a",{title:null,href:"http://localhost:8989"},"http://localhost:8989"]," \uff0c\u4f60\u4f1a\u770b\u5230 dva \u7684\u6b22\u8fce\u754c\u9762\u3002"],["h2","\u4f7f\u7528 antd-mobile"],["p",["a",{title:null,href:"/docs/react/introduce#\u4f7f\u7528"},"\u89c1\u6b64\u4f7f\u7528\u793a\u4f8b"],"\uff0c\u8981\u70b9\u6982\u62ec\u5982\u4e0b\uff1a"],["ul",["li",["p",["code","npm install antd-mobile babel-plugin-import --save"]," \u5b89\u88c5\u4f9d\u8d56"]],["li",["p","\u4e0d\u9700\u8981\u518d\u8bbe\u7f6e resolve (\u56e0\u4e3a atool-build \u5185\u90e8\u5df2\u7ecf\u8bbe\u7f6e\u597d)"]],["li",["p",["code","babel-plugin-import"]," \u662f\u7528\u6765\u6309\u9700\u52a0\u8f7d\u811a\u672c\u548c\u6837\u5f0f\uff0c\u7f16\u8f91 ",["code","webpack.config.js"],"\uff0c\u4f7f ",["code","babel-plugin-import"]," \u63d2\u4ef6\u751f\u6548"]],["li",["p","\u9ad8\u6e05\u65b9\u6848\u8bbe\u7f6e\uff0c\u8ba9\u9875\u9762\u663e\u793a\u6548\u679c\u66f4\u52a0\u7ec6\u817b"]]],["h2","\u63a5\u4e0b\u6765\uff1a"],["ul",["li",["p","\u5b9a\u4e49\u8def\u7531"]],["li",["p","\u7f16\u5199 UI Component"]],["li",["p","\u5b9a\u4e49 Model"]]],["p","\u8bf7\u53c2\u8003 ",["a",{title:null,href:"https://github.com/dvajs/dva/tree/master/examples"},"dva examples"]],["h2","\u6784\u5efa\u5e94\u7528"],["p","\u5b8c\u6210\u5f00\u53d1\u5e76\u4e14\u5728\u5f00\u53d1\u73af\u5883\u9a8c\u8bc1\u4e4b\u540e\uff0c\u5c31\u9700\u8981\u90e8\u7f72\u7ed9\u6211\u4eec\u7684\u7528\u6237\u4e86\u3002\u5148\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff1a"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> run build'},["code","$ npm run build"]],["p","\u51e0\u79d2\u540e\uff0c\u8f93\u51fa\u5e94\u8be5\u5982\u4e0b\uff1a"],["pre",{lang:"bash",highlighted:'Child\n    Time: 14008ms\n         Asset       Size  Chunks             Chunk Names\n    index.html  255 bytes          <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>\n     common.js    1.18 kB       0  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  common\n      index.js     504 kB    1, 0  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  index\n     index.css     127 kB    1, 0  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  index'},["code","Child\n    Time: 14008ms\n         Asset       Size  Chunks             Chunk Names\n    index.html  255 bytes          [emitted]\n     common.js    1.18 kB       0  [emitted]  common\n      index.js     504 kB    1, 0  [emitted]  index\n     index.css     127 kB    1, 0  [emitted]  index"]],["p",["code","build"]," \u547d\u4ee4\u4f1a\u6253\u5305\u6240\u6709\u7684\u8d44\u6e90\uff0c\u5305\u542b JavaScript, CSS, web fonts, images, html \u7b49\u3002\u7136\u540e\u4f60\u53ef\u4ee5\u5728 ",["code","dist/"]," \u76ee\u5f55\u4e0b\u627e\u5230\u8fd9\u4e9b\u6587\u4ef6\u3002"],["h2","\u4e0b\u4e00\u6b65"],["p","\u6211\u4eec\u5df2\u7ecf\u5b8c\u6210\u4e86\u4e00\u4e2a\u7b80\u5355\u5e94\u7528\uff0c\u4f60\u53ef\u80fd\u8fd8\u6709\u5f88\u591a\u7591\u95ee\uff0c\u6bd4\u5982\uff1a"],["ul",["li",["p","\u5982\u4f55\u5904\u7406\u5f02\u6b65\u8bf7\u6c42"]],["li",["p","\u5982\u4f55\u4f18\u96c5\u5730\u52a0\u8f7d\u521d\u59cb\u6570\u636e"]],["li",["p","\u5982\u4f55\u7edf\u4e00\u5904\u7406\u51fa\u9519\uff0c\u4ee5\u53ca\u7279\u5b9a\u64cd\u4f5c\u7684\u51fa\u9519"]],["li",["p","\u5982\u4f55\u52a8\u6001\u52a0\u8f7d\u8def\u7531\u548c Model\uff0c\u4ee5\u52a0\u901f\u9875\u9762\u8f7d\u5165\u901f\u5ea6"]],["li",["p","\u5982\u4f55\u5b9e\u73b0 hmr"]],["li",["p","\u5982\u4f55 mock \u6570\u636e"]],["li",["p","\u7b49\u7b49"]]],["p","\u4f60\u53ef\u4ee5\uff1a"],["ul",["li",["p","\u8bbf\u95ee ",["a",{title:null,href:"https://github.com/dvajs/dva"},"dva \u5b98\u7f51"],"\u3002"]],["li",["p","\u67e5\u770b\u6240\u6709 ",["a",{title:null,href:"https://github.com/dvajs/dva#api"},"API"],"\u3002"]],["li",["p",["a",{title:null,href:"https://github.com/dvajs/dva-docs/blob/master/v1/zh-cn/tutorial/01-%E6%A6%82%E8%A6%81.md"},"\u6559\u7a0b"],"\uff0c\u4e00\u6b65\u6b65\u5b8c\u6210\u4e00\u4e2a\u4e2d\u578b\u5e94\u7528\u3002"]],["li",["p","\u770b\u770b ",["a",{title:null,href:"https://github.com/dvajs/dva-hackernews"},"dva \u7248 hackernews"]," \u662f ",["a",{title:null,href:"https://github.com/sorrycc/blog/issues/9"},"\u5982\u4f55\u5b9e\u73b0"]," \u7684\u3002"]]]],meta:{order:3,title:"\u9879\u76ee\u5b9e\u6218",filename:"docs/react/practical-projects.zh-CN.md"},description:["section",["p",["a",{title:null,href:"https://github.com/dvajs/dva"},"dva"]," \u662f\u4e00\u4e2a\u57fa\u4e8e react \u548c redux \u7684\u8f7b\u91cf\u5e94\u7528\u6846\u67b6\uff0c\u6982\u5ff5\u6765\u81ea elm\uff0c\u652f\u6301 side effects\u3001\u70ed\u66ff\u6362\u3001\u52a8\u6001\u52a0\u8f7d\u3001react-native\u3001SSR \u7b49\uff0c\u5df2\u5728\u751f\u4ea7\u73af\u5883\u5e7f\u6cdb\u5e94\u7528\u3002"],["p","\u672c\u6587\u4f1a\u5f15\u5bfc\u4f60\u4f7f\u7528 dva \u548c antd \u4ece 0 \u5f00\u59cb\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u5e94\u7528\u3002"],["p","\u4f1a\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9\uff1a"]],toc:["ul",["li",["a",{href:"#\u5b89\u88c5-dva"},"\u5b89\u88c5 dva"]],["li",["a",{href:"#\u521b\u5efa\u65b0\u5e94\u7528"},"\u521b\u5efa\u65b0\u5e94\u7528"]],["li",["a",{href:"#\u4f7f\u7528-antd-mobile"},"\u4f7f\u7528 antd-mobile"]],["li",["a",{href:"#\u63a5\u4e0b\u6765\uff1a"},"\u63a5\u4e0b\u6765\uff1a"]],["li",["a",{href:"#\u6784\u5efa\u5e94\u7528"},"\u6784\u5efa\u5e94\u7528"]],["li",["a",{href:"#\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"]]]}}});