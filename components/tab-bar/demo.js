webpackJsonp([31],{9:function(n,a,s){"use strict";s(14),s(13)},13:function(n,a){},14:function(n,a){},23:function(n,a,s){"use strict";s(31)},31:function(n,a){},231:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(7),p=t(e),o=s(4),c=t(o),l=s(6),u=t(l),i=s(5),r=t(i),k=s(1),d=t(k),f=s(3),b=t(f),g=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a,s=this.props,t=s.text,e=s.prefixCls,o=s.overflowCount,c=s.className,l=s.style,u=s.children,i=this.props.dot,r=this.props.size,k=this.props.corner;t=t>o?o+"+":t,i&&(t="");var f=!(t&&"0"!==t||i),g=(0,b["default"])((n={},(0,p["default"])(n,e+"-dot",i),(0,p["default"])(n,e+"-dot-large",i&&"large"===r),(0,p["default"])(n,e+"-text",!i&&!k),(0,p["default"])(n,e+"-corner",k),(0,p["default"])(n,e+"-corner-large",k&&"large"===r),n)),m=(0,b["default"])((a={},(0,p["default"])(a,c,!!c),(0,p["default"])(a,e,!0),(0,p["default"])(a,e+"-not-a-wrapper",!u),(0,p["default"])(a,e+"-corner-wrapper",k),(0,p["default"])(a,e+"-corner-wrapper-large",k&&"large"===r),a));return d["default"].createElement("span",{className:m,title:t},u,!f&&d["default"].createElement("sup",{className:g,style:l},t))},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-badge",text:null,dot:!1,corner:!1,overflowCount:99,size:null},n.exports=a["default"]},232:function(n,a,s){"use strict";s(9),s(23),s(403)},276:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(7),p=t(e),o=s(1),c=t(o),l=s(3),u=t(l),i=c["default"].createClass({displayName:"TabPane",propTypes:{className:o.PropTypes.string,active:o.PropTypes.bool,style:o.PropTypes.any,destroyInactiveTabPane:o.PropTypes.bool,forceRender:o.PropTypes.bool,placeholder:o.PropTypes.node},getDefaultProps:function(){return{placeholder:null}},render:function(){var n,a=this.props,s=a.className,t=a.destroyInactiveTabPane,e=a.active,o=a.forceRender;this._isActived=this._isActived||e;var l=a.rootPrefixCls+"-tabpane",i=(0,u["default"])((n={},(0,p["default"])(n,l,1),(0,p["default"])(n,l+"-inactive",!e),(0,p["default"])(n,l+"-active",e),(0,p["default"])(n,s,s),n)),r=t?e:this._isActived;return c["default"].createElement("div",{style:a.style,role:"tabpanel","aria-hidden":a.active?"false":"true",className:i},r||o?a.children:a.placeholder)}});a["default"]=i,n.exports=a["default"]},277:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(Array.isArray(n))return n.filter(function(n){return!!n});var a=[];return f["default"].Children.forEach(n,function(n){n&&a.push(n)}),a}function p(n,a){for(var s=e(n),t=0;t<s.length;t++)if(s[t].key===a)return t;return-1}function o(n,a){var s=e(n);return s[a].key}function c(n,a){n.transform=a,n.webkitTransform=a,n.mozTransform=a}function l(n){return"transform"in n||"webkitTransform"in n||"MozTransform"in n}function u(n,a){n.transition=a,n.webkitTransition=a,n.MozTransition=a}function i(n){return{transform:n,WebkitTransform:n,MozTransform:n}}function r(n){return"left"===n||"right"===n}function k(n,a){var s=r(a)?"translateY":"translateX";return s+"("+100*-n+"%) translateZ(0)"}Object.defineProperty(a,"__esModule",{value:!0}),a.toArray=e,a.getActiveIndex=p,a.getActiveKey=o,a.setTransform=c,a.isTransformSupported=l,a.setTransition=u,a.getTransformPropValue=i,a.isVertical=r,a.getTransformByIndex=k;var d=s(1),f=t(d)},312:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(8),p=t(e),o=s(7),c=t(o),l=s(1),u=t(l),i=s(3),r=t(i),k=s(277),d=u["default"].createClass({displayName:"TabContent",propTypes:{animated:l.PropTypes.bool,prefixCls:l.PropTypes.string,children:l.PropTypes.any,activeKey:l.PropTypes.string,style:l.PropTypes.any,tabBarPosition:l.PropTypes.string},getDefaultProps:function(){return{animated:!0}},getTabPanes:function(){var n=this.props,a=n.activeKey,s=n.children,t=[];return u["default"].Children.forEach(s,function(s){if(s){var e=s.key,p=a===e;t.push(u["default"].cloneElement(s,{active:p,destroyInactiveTabPane:n.destroyInactiveTabPane,rootPrefixCls:n.prefixCls}))}}),t},render:function(){var n,a=this.props,s=a.prefixCls,t=a.children,e=a.activeKey,o=a.tabBarPosition,l=a.animated,i=a.style,d=(0,r["default"])((n={},(0,c["default"])(n,s+"-content",!0),(0,c["default"])(n,l?s+"-content-animated":s+"-content-no-animated",!0),n));if(l){var f=(0,k.getActiveIndex)(t,e);i=f!==-1?(0,p["default"])({},i,(0,k.getTransformPropValue)((0,k.getTransformByIndex)(f,o))):(0,p["default"])({},i,{display:"none"})}return u["default"].createElement("div",{className:d,style:i},this.getTabPanes())}});a["default"]=d,n.exports=a["default"]},403:function(n,a){},440:function(n,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={LEFT:37,UP:38,RIGHT:39,DOWN:40},n.exports=a["default"]},441:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(7),p=t(e),o=s(8),c=t(o),l=s(1),u=t(l),i=s(3),r=t(i),k={"float":"right"};a["default"]={getDefaultProps:function(){return{styles:{}}},onTabClick:function(n){this.props.onTabClick(n)},getTabs:function(){var n=this,a=this.props,s=a.panels,t=a.activeKey,e=[],p=a.prefixCls;return u["default"].Children.forEach(s,function(a){if(a){var s=a.key,o=t===s?p+"-tab-active":"";o+=" "+p+"-tab";var l={};a.props.disabled?o+=" "+p+"-tab-disabled":l={onClick:n.onTabClick.bind(n,s)};var i={};t===s&&(i.ref="activeTab"),e.push(u["default"].createElement("div",(0,c["default"])({role:"tab","aria-disabled":a.props.disabled?"true":"false","aria-selected":t===s?"true":"false"},l,{className:o,key:s},i),a.props.tab))}}),e},getRootNode:function(n){var a,s=this.props,t=s.prefixCls,e=s.onKeyDown,o=s.className,c=s.extraContent,l=s.style,i=(0,r["default"])((a={},(0,p["default"])(a,t+"-bar",1),(0,p["default"])(a,o,!!o),a));return u["default"].createElement("div",{role:"tablist",className:i,tabIndex:"0",ref:"root",onKeyDown:e,style:l},c?u["default"].createElement("div",{style:k,key:"extra"},c):null,n)}},n.exports=a["default"]},442:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(){}function p(n){var a=void 0;return u["default"].Children.forEach(n.children,function(n){!n||a||n.props.disabled||(a=n.key)}),a}Object.defineProperty(a,"__esModule",{value:!0});var o=s(7),c=t(o),l=s(1),u=t(l),i=s(440),r=t(i),k=s(276),d=t(k),f=s(3),b=t(f),g=u["default"].createClass({displayName:"Tabs",propTypes:{destroyInactiveTabPane:l.PropTypes.bool,renderTabBar:l.PropTypes.func.isRequired,renderTabContent:l.PropTypes.func.isRequired,onChange:l.PropTypes.func,children:l.PropTypes.any,prefixCls:l.PropTypes.string,className:l.PropTypes.string,tabBarPosition:l.PropTypes.string,style:l.PropTypes.object},getDefaultProps:function(){return{prefixCls:"rc-tabs",destroyInactiveTabPane:!1,onChange:e,tabBarPosition:"top",style:{}}},getInitialState:function(){var n=this.props,a=void 0;return a="activeKey"in n?n.activeKey:"defaultActiveKey"in n?n.defaultActiveKey:p(n),{activeKey:a}},componentWillReceiveProps:function(n){"activeKey"in n&&this.setState({activeKey:n.activeKey})},onTabClick:function(n){this.tabBar.props.onTabClick&&this.tabBar.props.onTabClick(n),this.setActiveKey(n)},onNavKeyDown:function(n){var a=n.keyCode;if(a===r["default"].RIGHT||a===r["default"].DOWN){n.preventDefault();var s=this.getNextActiveKey(!0);this.onTabClick(s)}else if(a===r["default"].LEFT||a===r["default"].UP){n.preventDefault();var t=this.getNextActiveKey(!1);this.onTabClick(t)}},setActiveKey:function(n){this.state.activeKey!==n&&("activeKey"in this.props||this.setState({activeKey:n}),this.props.onChange(n))},getNextActiveKey:function(n){var a=this.state.activeKey,s=[];u["default"].Children.forEach(this.props.children,function(a){a&&!a.props.disabled&&(n?s.push(a):s.unshift(a))});var t=s.length,e=t&&s[0].key;return s.forEach(function(n,p){n.key===a&&(e=p===t-1?s[0].key:s[p+1].key)}),e},render:function(){var n,a=this.props,s=a.prefixCls,t=a.tabBarPosition,e=a.className,p=a.renderTabContent,o=a.renderTabBar,l=(0,b["default"])((n={},(0,c["default"])(n,s,1),(0,c["default"])(n,s+"-"+t,1),(0,c["default"])(n,e,!!e),n));this.tabBar=o();var i=[u["default"].cloneElement(this.tabBar,{prefixCls:s,key:"tabBar",onKeyDown:this.onNavKeyDown,tabBarPosition:t,onTabClick:this.onTabClick,panels:a.children,activeKey:this.state.activeKey}),u["default"].cloneElement(p(),{prefixCls:s,tabBarPosition:t,activeKey:this.state.activeKey,destroyInactiveTabPane:a.destroyInactiveTabPane,children:a.children,onChange:this.setActiveKey,key:"tabContent"})];return"bottom"===t&&i.reverse(),u["default"].createElement("div",{className:l,style:a.style},i)}});g.TabPane=d["default"],a["default"]=g,n.exports=a["default"]},443:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a.TabPane=a["default"]=void 0;var e=s(442),p=t(e),o=s(276),c=t(o);a["default"]=p["default"],a.TabPane=c["default"]},786:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(854),s(853)),p=t(e),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:[["p","\u591a\u7528\u4e8e\u9875\u9762\u7684\u5185\u5bb9\u533a\u5757\uff0c\u8d77\u7740\u63a7\u5236\u5c0f\u8303\u56f4\u5185\u7684\u5927\u5757\u5185\u5bb9\u7684\u5206\u7ec4\u548c\u9690\u85cf\uff0c\u8d77\u7740\u4fdd\u6301\u754c\u9762\u6574\u6d01\u7684\u4f5c\u7528\u3002"]],meta:{order:0,title:"APP\u578b\u9009\u9879\u5361",filename:"components/tab-bar/demo/basic.md",id:"components-tab-bar-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TabBar <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> TabBarExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      selectedTab<span class="token punctuation" >:</span> <span class="token string" >\'redTab\'</span><span class="token punctuation" >,</span>\n      hidden<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >renderContent</span><span class="token punctuation" >(</span>pageText<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> backgroundColor<span class="token punctuation" >:</span> <span class="token string" >\'white\'</span><span class="token punctuation" >,</span> height<span class="token punctuation" >:</span> <span class="token string" >\'100%\'</span><span class="token punctuation" >,</span> textAlign<span class="token punctuation" >:</span> <span class="token string" >\'center\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> paddingTop<span class="token punctuation" >:</span> <span class="token number" >60</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u4f60\u5df2\u70b9\u51fb\u201c<span class="token punctuation" >{</span>pageText<span class="token punctuation" >}</span>\u201d tab\uff0c \u5f53\u524d\u5c55\u793a\u201c<span class="token punctuation" >{</span>pageText<span class="token punctuation" >}</span>\u201d\u4fe1\u606f<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> display<span class="token punctuation" >:</span> <span class="token string" >\'block\'</span><span class="token punctuation" >,</span> marginTop<span class="token punctuation" >:</span> <span class="token number" >40</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n          e<span class="token punctuation" >.</span><span class="token function" >preventDefault</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n          <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n            hidden<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>hidden<span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n        <span class="token punctuation" >}</span></span><span class="token attr-name" >}</span><span class="token punctuation" >></span></span>\u70b9\u51fb\u5207\u6362 tab<span class="token operator" >-</span>bar \u663e\u793a<span class="token operator" >/</span>\u9690\u85cf<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabBar</span>\n        <span class="token attr-name" >unselectedTintColor</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#949494<span class="token punctuation" >"</span></span>\n        <span class="token attr-name" >tintColor</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#33A3F4<span class="token punctuation" >"</span></span>\n        <span class="token attr-name" >barTintColor</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>white<span class="token punctuation" >"</span></span>\n        <span class="token attr-name" >hidden</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>hidden<span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabBar.Item</span>\n          <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u751f\u6d3b<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u751f\u6d3b<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >icon</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> uri<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/XLdKiKAwDRXQNhC.png\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >selectedIcon</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> uri<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/iKfBQdGdTMubhXy.png\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >selected</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>selectedTab <span class="token operator" >===</span> <span class="token string" >\'blueTab\'</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >onPress</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n            <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n              selectedTab<span class="token punctuation" >:</span> <span class="token string" >\'blueTab\'</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n          <span class="token punctuation" >}</span></span><span class="token attr-name" >}</span>\n        <span class="token punctuation" >></span></span>\n          <span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >renderContent</span><span class="token punctuation" >(</span><span class="token string" >\'\u751f\u6d3b\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabBar.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabBar.Item</span>\n          <span class="token attr-name" >icon</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> uri<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >selectedIcon</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> uri<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u53e3\u7891<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u53e3\u7891<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >badge</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >selected</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>selectedTab <span class="token operator" >===</span> <span class="token string" >\'redTab\'</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >onPress</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n            <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n              selectedTab<span class="token punctuation" >:</span> <span class="token string" >\'redTab\'</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n          <span class="token punctuation" >}</span></span><span class="token attr-name" >}</span>\n        <span class="token punctuation" >></span></span>\n          <span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >renderContent</span><span class="token punctuation" >(</span><span class="token string" >\'\u53e3\u7891\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabBar.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabBar.Item</span>\n          <span class="token attr-name" >icon</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> uri<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/EljxLrJEShWZObW.png\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >selectedIcon</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> uri<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/LWNaMdwAFSmYBFw.png\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u670b\u53cb<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u670b\u53cb<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >selected</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>selectedTab <span class="token operator" >===</span> <span class="token string" >\'greenTab\'</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >onPress</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n            <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n              selectedTab<span class="token punctuation" >:</span> <span class="token string" >\'greenTab\'</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n          <span class="token punctuation" >}</span></span><span class="token attr-name" >}</span>\n        <span class="token punctuation" >></span></span>\n          <span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >renderContent</span><span class="token punctuation" >(</span><span class="token string" >\'\u670b\u53cb\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabBar.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabBar.Item</span>\n          <span class="token attr-name" >icon</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> uri<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/YWpPVCVOnJoCYhs.png\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >selectedIcon</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> uri<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/WadBBxOIZtDzsgP.png\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6211\u7684<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6211\u7684<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >selected</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>selectedTab <span class="token operator" >===</span> <span class="token string" >\'yellowTab\'</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >onPress</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n            <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n              selectedTab<span class="token punctuation" >:</span> <span class="token string" >\'yellowTab\'</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n          <span class="token punctuation" >}</span></span><span class="token attr-name" >}</span>\n        <span class="token punctuation" >></span></span>\n          <span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >renderContent</span><span class="token punctuation" >(</span><span class="token string" >\'\u6211\u7684\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabBar.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabBar</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabBarExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'
}],preview:function(){var n=c["default"].createClass({displayName:"TabBarExample",getInitialState:function(){return{selectedTab:"redTab",hidden:!1}},renderContent:function(n){var a=this;return c["default"].createElement("div",{style:{backgroundColor:"white",height:"100%",textAlign:"center"}},c["default"].createElement("div",{style:{paddingTop:60}},"\u4f60\u5df2\u70b9\u51fb\u201c",n,"\u201d tab\uff0c \u5f53\u524d\u5c55\u793a\u201c",n,"\u201d\u4fe1\u606f"),c["default"].createElement("a",{style:{display:"block",marginTop:40},onClick:function(n){n.preventDefault(),a.setState({hidden:!a.state.hidden})}},"\u70b9\u51fb\u5207\u6362 tab-bar \u663e\u793a/\u9690\u85cf"))},render:function(){var n=this;return c["default"].createElement(p["default"],{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white",hidden:this.state.hidden},c["default"].createElement(p["default"].Item,{title:"\u751f\u6d3b",key:"\u751f\u6d3b",icon:{uri:"https://zos.alipayobjects.com/rmsportal/XLdKiKAwDRXQNhC.png"},selectedIcon:{uri:"https://zos.alipayobjects.com/rmsportal/iKfBQdGdTMubhXy.png"},selected:"blueTab"===this.state.selectedTab,onPress:function(){n.setState({selectedTab:"blueTab"})}},this.renderContent("\u751f\u6d3b")),c["default"].createElement(p["default"].Item,{icon:{uri:"https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png"},selectedIcon:{uri:"https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png"},title:"\u53e3\u7891",key:"\u53e3\u7891",badge:1,selected:"redTab"===this.state.selectedTab,onPress:function(){n.setState({selectedTab:"redTab"})}},this.renderContent("\u53e3\u7891")),c["default"].createElement(p["default"].Item,{icon:{uri:"https://zos.alipayobjects.com/rmsportal/EljxLrJEShWZObW.png"},selectedIcon:{uri:"https://zos.alipayobjects.com/rmsportal/LWNaMdwAFSmYBFw.png"},title:"\u670b\u53cb",key:"\u670b\u53cb",selected:"greenTab"===this.state.selectedTab,onPress:function(){n.setState({selectedTab:"greenTab"})}},this.renderContent("\u670b\u53cb")),c["default"].createElement(p["default"].Item,{icon:{uri:"https://zos.alipayobjects.com/rmsportal/YWpPVCVOnJoCYhs.png"},selectedIcon:{uri:"https://zos.alipayobjects.com/rmsportal/WadBBxOIZtDzsgP.png"},title:"\u6211\u7684",key:"\u6211\u7684",selected:"yellowTab"===this.state.selectedTab,onPress:function(){n.setState({selectedTab:"yellowTab"})}},this.renderContent("\u6211\u7684")))}});return c["default"].createElement(n,null)},style:".demo-preview-item,\n.am-tab-bar,\n.am-tab-bar-content,\n.am-tab-bar-tabpane {\n  height: 100%;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.demo-preview-item</span>,\n<span class="token class" >.am-tab-bar</span>,\n<span class="token class" >.am-tab-bar-content</span>,\n<span class="token class" >.am-tab-bar-tabpane</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >100%</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},852:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(4),p=t(e),o=s(6),c=t(o),l=s(5),u=t(l),i=s(1),r=t(i),k=s(231),d=t(k),f=function(n){function a(){return(0,p["default"])(this,a),(0,c["default"])(this,n.apply(this,arguments))}return(0,u["default"])(a,n),a.prototype.render=function(){var n=this.props,a=n.title,s=n.icon,t=n.selectedIcon,e=n.prefixCls,p=n.badge,o=n.selected,c=n.unselectedTintColor,l=n.tintColor;return r["default"].createElement("div",null,r["default"].createElement("div",{className:e+"-icon"},p?r["default"].createElement(d["default"],{text:p,className:e+"-badge"},r["default"].createElement("img",{className:e+"-image",src:o?t.uri:s.uri,alt:a})):r["default"].createElement("img",{className:e+"-image",src:o?t.uri:s.uri,alt:a})),r["default"].createElement("p",{className:e+"-title",style:{color:o?l:c}},a))},a}(r["default"].Component);a["default"]=f,n.exports=a["default"]},853:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(1),p=t(e),o=s(443),c=t(o),l=s(852),u=t(l),i=s(312),r=t(i),k=s(1285),d=t(k),f=p["default"].createClass({displayName:"AntTabBar",statics:{Item:function(){}},getDefaultProps:function(){return{prefixCls:"am-tab-bar",barTintColor:"white",tintColor:"#108ee9",unselectedTintColor:"#888"}},onChange:function(n){p["default"].Children.forEach(this.props.children,function(a){a.key===n&&a.props.onPress&&a.props.onPress()})},renderTabBar:function(){var n=this.props,a=n.onTabClick,s=n.barTintColor,t=n.hidden,e=n.prefixCls,o=t?e+"-bar-hidden":"";return p["default"].createElement(d["default"],{className:o,onTabClick:a,style:{backgroundColor:s}})},renderTabContent:function(){return p["default"].createElement(r["default"],{animated:!1})},render:function(){var n=this,a=void 0,s=[];p["default"].Children.forEach(this.props.children,function(n){n.props.selected&&(a=n.key),s.push(n)});var t=this.props,e=t.tintColor,l=t.unselectedTintColor,i=s.map(function(a){var s=a.props,t=p["default"].createElement(u["default"],{prefixCls:n.props.prefixCls+"-tab",badge:s.badge,selected:s.selected,icon:s.icon,selectedIcon:s.selectedIcon,title:s.title,tintColor:e,unselectedTintColor:l});return p["default"].createElement(o.TabPane,{placeholder:"\u6b63\u5728\u52a0\u8f7d",tab:t,key:a.key},s.children)});return p["default"].createElement(c["default"],{renderTabBar:this.renderTabBar,renderTabContent:this.renderTabContent,tabBarPosition:"bottom",prefixCls:this.props.prefixCls,activeKey:a,onChange:this.onChange},i)}});a["default"]=f,n.exports=a["default"]},854:function(n,a,s){"use strict";s(9),s(1166),s(232)},922:function(n,a,s){n.exports={basic:s(786)}},1166:function(n,a){},1285:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(1),p=t(e),o=s(441),c=t(o),l=p["default"].createClass({displayName:"TabBar",mixins:[c["default"]],render:function(){var n=this.getTabs();return this.getRootNode(n)}});a["default"]=l,n.exports=a["default"]}});