webpackJsonp([31],{9:function(n,s,a){"use strict";a(15),a(14)},14:function(n,s){},15:function(n,s){},17:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}s.__esModule=!0;var e=a(23),p=t(e),o=a(22),c=t(o);s["default"]=function(){function n(n,s){var a=[],t=!0,e=!1,p=void 0;try{for(var o,u=(0,c["default"])(n);!(t=(o=u.next()).done)&&(a.push(o.value),!s||a.length!==s);t=!0);}catch(l){e=!0,p=l}finally{try{!t&&u["return"]&&u["return"]()}finally{if(e)throw p}}return a}return function(s,a){if(Array.isArray(s))return s;if((0,p["default"])(Object(s)))return n(s,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},18:function(n,s){"use strict";function a(n,s){var a={},t={};return Object.keys(n).forEach(function(e){s.indexOf(e)!==-1?a[e]=n[e]:t[e]=n[e]}),[a,t]}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=a,n.exports=s["default"]},20:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{myName:"TouchableFeedbackComponent"},a=u["default"].createClass({displayName:"TouchableFeedbackComponent",statics:s,getDefaultProps:function(){return{activeStyle:{}}},getInitialState:function(){return{touchFeedback:!1}},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},onMouseDown:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onMouseUp:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},render:function(){var s={};return this.props.activeStyle&&(s=l?{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}:{onMouseDown:this.onMouseDown,onMouseUp:this.state.touchFeedback?this.onMouseUp:void 0,onMouseLeave:this.state.touchFeedback?this.onMouseUp:void 0}),u["default"].createElement(n,(0,o["default"])({},this.props,{touchFeedback:this.state.touchFeedback},s))}});return a}Object.defineProperty(s,"__esModule",{value:!0});var p=a(7),o=t(p);s["default"]=e;var c=a(1),u=t(c),l="undefined"!=typeof window&&"ontouchstart"in window;n.exports=s["default"]},22:function(n,s,a){n.exports={"default":a(24),__esModule:!0}},23:function(n,s,a){n.exports={"default":a(25),__esModule:!0}},24:function(n,s,a){a(21),a(19),n.exports=a(26)},25:function(n,s,a){a(21),a(19),n.exports=a(27)},26:function(n,s,a){var t=a(33),e=a(36);n.exports=a(16).getIterator=function(n){var s=e(n);if("function"!=typeof s)throw TypeError(n+" is not iterable!");return t(s.call(n))}},27:function(n,s,a){var t=a(45),e=a(28)("iterator"),p=a(34);n.exports=a(16).isIterable=function(n){var s=Object(n);return void 0!==s[e]||"@@iterator"in s||p.hasOwnProperty(t(s))}},29:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0});var e=a(7),p=t(e),o=a(1),c=t(o);s["default"]=function(n){var s=n.type,a=n.className,t=void 0===a?"":a;return c["default"].createElement("i",(0,p["default"])({},n,{className:(t+" anticon anticon-"+s).trim()}))},n.exports=s["default"]},31:function(n,s,a){"use strict";a(37)},37:function(n,s){},47:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function p(n){return e(n.type)&&P(n.props.children)?y["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(P(n)&&(n=n.split("").join(" ")),y["default"].createElement("span",null,n)):n}Object.defineProperty(s,"__esModule",{value:!0});var o=a(7),c=t(o),u=a(8),l=t(u),i=a(17),r=t(i),k=a(4),d=t(k),f=a(6),h=t(f),m=a(5),g=t(m),v=a(1),y=t(v),b=a(3),w=t(b),T=a(12),x=t(T),E=a(29),_=t(E),M=a(18),S=t(M),C=a(20),j=t(C),N=/^[\u4e00-\u9fa5]{2}$/,P=N.test.bind(N),F=function(n){function s(){return(0,d["default"])(this,s),(0,h["default"])(this,n.apply(this,arguments))}return(0,g["default"])(s,n),s.prototype.render=function(){var n,s=(0,S["default"])(this.props,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","touchFeedback","activeStyle"]),a=(0,r["default"])(s,2),t=a[0],e=t.children,o=t.className,u=t.prefixCls,i=t.type,k=t.size,d=t.inline,f=t.across,h=t.disabled,m=t.icon,g=t.loading,v=t.touchFeedback,b=t.activeStyle,T=a[1],E=(n={},(0,l["default"])(n,o,o),(0,l["default"])(n,u,!0),(0,l["default"])(n,u+"-primary","primary"===i),(0,l["default"])(n,u+"-ghost","ghost"===i),(0,l["default"])(n,u+"-warning","warning"===i),(0,l["default"])(n,u+"-small","small"===k),(0,l["default"])(n,u+"-inline",d),(0,l["default"])(n,u+"-across",f),(0,l["default"])(n,u+"-disabled",h),(0,l["default"])(n,u+"-loading",g),n),M=(0,x["default"])({},this.props.style);v&&(M=(0,x["default"])(M,b),E[u+"-active"]=!0);var C=g?"loading":m,j=y["default"].Children.map(e,p);return C&&(E[u+"-icon"]=!0),delete T.htmlType,y["default"].createElement("button",(0,c["default"])({},T,{type:this.props.htmlType||"button",style:M,className:(0,w["default"])(E),disabled:h}),C?y["default"].createElement(_["default"],{type:C}):null,j)},s}(y["default"].Component);F.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1},s["default"]=(0,j["default"])(F),n.exports=s["default"]},48:function(n,s,a){"use strict";a(9),a(31),a(53)},53:function(n,s){},716:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(48),a(47)),p=t(e),o=(a(810),a(809)),c=t(o),u=a(1),l=t(u),i=a(2);t(i);n.exports={content:[["p","\u57fa\u672c\u529f\u80fd\u5c55\u793a"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/progress/demo/basic.md",id:"components-progress-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Progress<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> MyProgress <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">getInitialState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      percent<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>percent <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>percent <span class="token operator">>=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> percent<span class="token punctuation">:</span> p <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> percent <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>progress-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fixed<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token number">36</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">40</span><span class="token punctuation">}</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>normal<span class="token punctuation">"</span></span> <span class="token attr-name">unfilled</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hide<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>show-info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>progress<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>normal<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span><span class="token operator">%</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">inline</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>add<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token operator">-</span><span class="token punctuation">)</span><span class="token number">10</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyProgress</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=l["default"].createClass({displayName:"MyProgress",getInitialState:function(){return{percent:50}},add:function(){var n=this.state.percent+10;this.state.percent>=100&&(n=0),this.setState({percent:n})},render:function(){var n=this.state.percent;return l["default"].createElement("div",{className:"progress-container"},l["default"].createElement(c["default"],{percent:30,position:"fixed"}),l["default"].createElement("div",{style:{height:36}}),l["default"].createElement(c["default"],{percent:40,position:"normal",unfilled:"hide"}),l["default"].createElement("div",{className:"show-info"},l["default"].createElement("div",{className:"progress"},l["default"].createElement(c["default"],{percent:n,position:"normal"})),l["default"].createElement("div",null,n,"%")),l["default"].createElement(p["default"],{inline:!0,style:{marginTop:20},onClick:this.add},"(+-)10"))}});return l["default"].createElement(n,null)},style:".show-info {\n  margin-top: 0.36rem;\n  display: flex;\n  align-items: center;\n}\n.show-info .progress {\n  margin-right: 0.1rem;\n  width: 100%;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.show-info</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token number">0.36</span>rem<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.show-info</span> <span class="token class">.progress</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">0.1</span>rem<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},809:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var e=a(8),p=t(e),o=a(4),c=t(o),u=a(6),l=t(u),i=a(5),r=t(i),k=a(1),d=t(k),f=a(3),h=t(f),m=a(12),g=t(m),v=function(n){function s(){return(0,c["default"])(this,s),(0,l["default"])(this,n.apply(this,arguments))}return(0,r["default"])(s,n),s.prototype.componentWillReceiveProps=function(){this.noAppearTransition=!0},s.prototype.componentDidMount=function(){var n=this;this.props.appearTransition&&setTimeout(function(){n.refs.bar.style.width=n.props.percent+"%"},10)},s.prototype.render=function(){var n,s=this.props,a=s.prefixCls,t=s.position,e=s.unfilled,o=s.style,c=void 0===o?{}:o,u={width:this.noAppearTransition||!this.props.appearTransition?this.props.percent+"%":0,height:0},l=(0,h["default"])((n={},(0,p["default"])(n,a+"-outer",!0),(0,p["default"])(n,a+"-fixed-outer","fixed"===t),(0,p["default"])(n,a+"-hide-outer","hide"===e),n));return d["default"].createElement("div",{className:l},d["default"].createElement("div",{ref:"bar",className:a+"-bar",style:(0,g["default"])({},c,u)}))},s}(d["default"].Component);s["default"]=v,v.defaultProps={prefixCls:"am-progress",percent:0,position:"fixed",unfilled:"show",appearTransition:!1},n.exports=s["default"]},810:function(n,s,a){"use strict";a(9),a(1138)},885:function(n,s,a){n.exports={basic:a(716)}},1138:function(n,s){}});