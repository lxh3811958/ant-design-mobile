webpackJsonp([30],{9:function(n,a,s){"use strict";s(15),s(14)},14:function(n,a){},15:function(n,a){},17:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=s(23),p=t(e),o=s(22),c=t(o);a["default"]=function(){function n(n,a){var s=[],t=!0,e=!1,p=void 0;try{for(var o,l=(0,c["default"])(n);!(t=(o=l.next()).done)&&(s.push(o.value),!a||s.length!==a);t=!0);}catch(u){e=!0,p=u}finally{try{!t&&l["return"]&&l["return"]()}finally{if(e)throw p}}return s}return function(a,s){if(Array.isArray(a))return a;if((0,p["default"])(Object(a)))return n(a,s);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},18:function(n,a){"use strict";function s(n,a){var s={},t={};return Object.keys(n).forEach(function(e){a.indexOf(e)!==-1?s[e]=n[e]:t[e]=n[e]}),[s,t]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},20:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{myName:"TouchableFeedbackComponent"},s=l["default"].createClass({displayName:"TouchableFeedbackComponent",statics:a,getDefaultProps:function(){return{activeStyle:{}}},getInitialState:function(){return{touchFeedback:!1}},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},onMouseDown:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onMouseUp:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},render:function(){var a={};return this.props.activeStyle&&(a=u?{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}:{onMouseDown:this.onMouseDown,onMouseUp:this.state.touchFeedback?this.onMouseUp:void 0,onMouseLeave:this.state.touchFeedback?this.onMouseUp:void 0}),l["default"].createElement(n,(0,o["default"])({},this.props,{touchFeedback:this.state.touchFeedback},a))}});return s}Object.defineProperty(a,"__esModule",{value:!0});var p=s(7),o=t(p);a["default"]=e;var c=s(1),l=t(c),u="undefined"!=typeof window&&"ontouchstart"in window;n.exports=a["default"]},22:function(n,a,s){n.exports={"default":s(24),__esModule:!0}},23:function(n,a,s){n.exports={"default":s(25),__esModule:!0}},24:function(n,a,s){s(21),s(19),n.exports=s(26)},25:function(n,a,s){s(21),s(19),n.exports=s(27)},26:function(n,a,s){var t=s(33),e=s(36);n.exports=s(16).getIterator=function(n){var a=e(n);if("function"!=typeof a)throw TypeError(n+" is not iterable!");return t(a.call(n))}},27:function(n,a,s){var t=s(45),e=s(28)("iterator"),p=s(34);n.exports=s(16).isIterable=function(n){var a=Object(n);return void 0!==a[e]||"@@iterator"in a||p.hasOwnProperty(t(a))}},29:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(7),p=t(e),o=s(1),c=t(o);a["default"]=function(n){var a=n.type,s=n.className,t=void 0===s?"":s;return c["default"].createElement("i",(0,p["default"])({},n,{className:(t+" anticon anticon-"+a).trim()}))},n.exports=a["default"]},31:function(n,a,s){"use strict";s(37)},37:function(n,a){},47:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function p(n){return e(n.type)&&C(n.props.children)?y["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(C(n)&&(n=n.split("").join(" ")),y["default"].createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var o=s(7),c=t(o),l=s(8),u=t(l),i=s(17),r=t(i),k=s(4),d=t(k),f=s(6),m=t(f),g=s(5),h=t(g),v=s(1),y=t(v),b=s(3),E=t(b),T=s(12),x=t(T),j=s(29),_=t(j),M=s(18),w=t(M),U=s(20),z=t(U),S=/^[\u4e00-\u9fa5]{2}$/,C=S.test.bind(S),N=function(n){function a(){return(0,d["default"])(this,a),(0,m["default"])(this,n.apply(this,arguments))}return(0,h["default"])(a,n),a.prototype.render=function(){var n,a=(0,w["default"])(this.props,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","touchFeedback","activeStyle"]),s=(0,r["default"])(a,2),t=s[0],e=t.children,o=t.className,l=t.prefixCls,i=t.type,k=t.size,d=t.inline,f=t.across,m=t.disabled,g=t.icon,h=t.loading,v=t.touchFeedback,b=t.activeStyle,T=s[1],j=(n={},(0,u["default"])(n,o,o),(0,u["default"])(n,l,!0),(0,u["default"])(n,l+"-primary","primary"===i),(0,u["default"])(n,l+"-ghost","ghost"===i),(0,u["default"])(n,l+"-warning","warning"===i),(0,u["default"])(n,l+"-small","small"===k),(0,u["default"])(n,l+"-inline",d),(0,u["default"])(n,l+"-across",f),(0,u["default"])(n,l+"-disabled",m),(0,u["default"])(n,l+"-loading",h),n),M=(0,x["default"])({},this.props.style);v&&(M=(0,x["default"])(M,b),j[l+"-active"]=!0);var U=h?"loading":g,z=y["default"].Children.map(e,p);return U&&(j[l+"-icon"]=!0),delete T.htmlType,y["default"].createElement("button",(0,c["default"])({},T,{type:this.props.htmlType||"button",style:M,className:(0,E["default"])(j),disabled:m}),U?y["default"].createElement(_["default"],{type:U}):null,z)},a}(y["default"].Component);N.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1},a["default"]=(0,z["default"])(N),n.exports=a["default"]},48:function(n,a,s){"use strict";s(9),s(31),s(53)},53:function(n,a){},722:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(816),s(815)),p=t(e),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:[],meta:{order:0,title:"\u793a\u4f8b",filename:"components/result/demo/basic.md",id:"components-result-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Result <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ResultExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'#999\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u652f\u4ed8\u6210\u529f<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span>\n    <span class="token attr-name">imgUrl</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png<span class="token punctuation">"</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u652f\u4ed8\u6210\u529f<span class="token punctuation">"</span></span>\n    <span class="token attr-name">message={&lt;div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">:</span> <span class="token string">\'0.72rem\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'#000\'</span><span class="token punctuation">,</span> lineHeight<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token number">998.00</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>del</span><span class="token punctuation">></span></span><span class="token number">1098</span>\u5143<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>del</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n  <span class="token operator">/</span><span class="token operator">></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'#999\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u9a8c\u8bc1\u6210\u529f<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span>\n    <span class="token attr-name">imgUrl</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/hbTlcWTgMzkBEiU.png<span class="token punctuation">"</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u9a8c\u8bc1\u6210\u529f<span class="token punctuation">"</span></span>\n    <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6240\u63d0\u4ea4\u5185\u5bb9\u5df2\u6210\u529f\u5b8c\u6210\u9a8c\u8bc1<span class="token punctuation">"</span></span>\n  <span class="token punctuation">/></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'#999\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u652f\u4ed8\u5931\u8d25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span>\n    <span class="token attr-name">imgUrl</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/LUIUWjyMDWctQTf.png<span class="token punctuation">"</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u652f\u4ed8\u5931\u8d25<span class="token punctuation">"</span></span>\n    <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6240\u9009\u94f6\u884c\u5361\u4f59\u989d\u4e0d\u8db3<span class="token punctuation">"</span></span>\n  <span class="token punctuation">/></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'#999\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u7b49\u5f85\u5904\u7406<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span>\n    <span class="token attr-name">imgUrl</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/gIGluyutXOpJmqx.png<span class="token punctuation">"</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7b49\u5f85\u5904\u7406<span class="token punctuation">"</span></span>\n    <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5df2\u63d0\u4ea4\u7533\u8bf7\uff0c\u7b49\u5f85\u94f6\u884c\u5904\u7406<span class="token punctuation">"</span></span>\n  <span class="token punctuation">/></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'#999\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u64cd\u4f5c\u5931\u8d25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span>\n    <span class="token attr-name">imgUrl</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/NRzOqylcxEstLGf.png<span class="token punctuation">"</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u65e0\u6cd5\u5b8c\u6210\u64cd\u4f5c<span class="token punctuation">"</span></span>\n    <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7531\u4e8e\u4f60\u7684\u652f\u4ed8\u5b9d\u8d26\u6237\u8fd8\u672a\u7ed1\u5b9a\u6dd8\u5b9d\u8d26\u6237\u8bf7\u767b\u8bf7\u767b\u5f55www.taobao.com<span class="token punctuation">"</span></span>\n  <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ResultExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=function(){return c["default"].createElement("div",null,c["default"].createElement("p",{style:{margin:10,color:"#999"}},"\u652f\u4ed8\u6210\u529f"),c["default"].createElement(p["default"],{imgUrl:"https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png",title:"\u652f\u4ed8\u6210\u529f",message:c["default"].createElement("div",null,c["default"].createElement("div",{style:{fontSize:"0.72rem",color:"#000",lineHeight:1}},"998.00"),c["default"].createElement("del",null,"1098\u5143"))}),c["default"].createElement("p",{style:{margin:10,color:"#999"}},"\u9a8c\u8bc1\u6210\u529f"),c["default"].createElement(p["default"],{imgUrl:"https://zos.alipayobjects.com/rmsportal/hbTlcWTgMzkBEiU.png",title:"\u9a8c\u8bc1\u6210\u529f",message:"\u6240\u63d0\u4ea4\u5185\u5bb9\u5df2\u6210\u529f\u5b8c\u6210\u9a8c\u8bc1"}),c["default"].createElement("p",{style:{margin:10,color:"#999"}},"\u652f\u4ed8\u5931\u8d25"),c["default"].createElement(p["default"],{imgUrl:"https://zos.alipayobjects.com/rmsportal/LUIUWjyMDWctQTf.png",title:"\u652f\u4ed8\u5931\u8d25",message:"\u6240\u9009\u94f6\u884c\u5361\u4f59\u989d\u4e0d\u8db3"}),c["default"].createElement("p",{style:{margin:10,color:"#999"}},"\u7b49\u5f85\u5904\u7406"),c["default"].createElement(p["default"],{imgUrl:"https://zos.alipayobjects.com/rmsportal/gIGluyutXOpJmqx.png",title:"\u7b49\u5f85\u5904\u7406",message:"\u5df2\u63d0\u4ea4\u7533\u8bf7\uff0c\u7b49\u5f85\u94f6\u884c\u5904\u7406"}),c["default"].createElement("p",{style:{margin:10,color:"#999"}},"\u64cd\u4f5c\u5931\u8d25"),c["default"].createElement(p["default"],{imgUrl:"https://zos.alipayobjects.com/rmsportal/NRzOqylcxEstLGf.png",title:"\u65e0\u6cd5\u5b8c\u6210\u64cd\u4f5c",message:"\u7531\u4e8e\u4f60\u7684\u652f\u4ed8\u5b9d\u8d26\u6237\u8fd8\u672a\u7ed1\u5b9a\u6dd8\u5b9d\u8d26\u6237\u8bf7\u767b\u8bf7\u767b\u5f55www.taobao.com"}))};return c["default"].createElement(n,null)}}},815:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(){}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(8),o=t(p),c=s(4),l=t(c),u=s(6),i=t(u),r=s(5),k=t(r),d=s(1),f=t(d),m=s(47),g=t(m),h=s(3),v=t(h),y=function(n){function a(){return(0,l["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.className,e=a.img,p=a.imgUrl,c=a.title,l=a.message,u=a.buttonText,i=a.buttonClick,r=a.buttonType,k=(0,v["default"])((n={},(0,o["default"])(n,""+s,!0),(0,o["default"])(n,t,t),n)),d=null;return e?d=f["default"].createElement("div",{className:s+"-pic"},e):p&&(d=f["default"].createElement("div",{className:s+"-pic",style:{backgroundImage:"url("+p+")"}})),f["default"].createElement("div",{className:k},d,c?f["default"].createElement("div",{className:s+"-title"},c):null,l?f["default"].createElement("div",{className:s+"-message"},l):null,u?f["default"].createElement("div",{className:s+"-button"},f["default"].createElement(g["default"],{type:r,onClick:i},u)):null)},a}(f["default"].Component);a["default"]=y,y.defaultProps={prefixCls:"am-result",buttonType:"",buttonClick:e},n.exports=a["default"]},816:function(n,a,s){"use strict";s(9),s(48),s(1140)},888:function(n,a,s){n.exports={basic:s(722)}},1140:function(n,a){}});