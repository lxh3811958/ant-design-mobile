webpackJsonp([19],{9:function(n,t,a){"use strict";a(15),a(14)},14:function(n,t){},15:function(n,t){},17:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}t.__esModule=!0;var e=a(23),o=s(e),p=a(22),c=s(p);t["default"]=function(){function n(n,t){var a=[],s=!0,e=!1,o=void 0;try{for(var p,u=(0,c["default"])(n);!(s=(p=u.next()).done)&&(a.push(p.value),!t||a.length!==t);s=!0);}catch(l){e=!0,o=l}finally{try{!s&&u["return"]&&u["return"]()}finally{if(e)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if((0,o["default"])(Object(t)))return n(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},18:function(n,t){"use strict";function a(n,t){var a={},s={};return Object.keys(n).forEach(function(e){t.indexOf(e)!==-1?a[e]=n[e]:s[e]=n[e]}),[a,s]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a,n.exports=t["default"]},20:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{myName:"TouchableFeedbackComponent"},a=u["default"].createClass({displayName:"TouchableFeedbackComponent",statics:t,getDefaultProps:function(){return{activeStyle:{}}},getInitialState:function(){return{touchFeedback:!1}},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},onMouseDown:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onMouseUp:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},render:function(){var t={};return this.props.activeStyle&&(t=l?{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}:{onMouseDown:this.onMouseDown,onMouseUp:this.state.touchFeedback?this.onMouseUp:void 0,onMouseLeave:this.state.touchFeedback?this.onMouseUp:void 0}),u["default"].createElement(n,(0,p["default"])({},this.props,{touchFeedback:this.state.touchFeedback},t))}});return a}Object.defineProperty(t,"__esModule",{value:!0});var o=a(7),p=s(o);t["default"]=e;var c=a(1),u=s(c),l="undefined"!=typeof window&&"ontouchstart"in window;n.exports=t["default"]},22:function(n,t,a){n.exports={"default":a(24),__esModule:!0}},23:function(n,t,a){n.exports={"default":a(25),__esModule:!0}},24:function(n,t,a){a(21),a(19),n.exports=a(26)},25:function(n,t,a){a(21),a(19),n.exports=a(27)},26:function(n,t,a){var s=a(33),e=a(36);n.exports=a(16).getIterator=function(n){var t=e(n);if("function"!=typeof t)throw TypeError(n+" is not iterable!");return s(t.call(n))}},27:function(n,t,a){var s=a(45),e=a(28)("iterator"),o=a(34);n.exports=a(16).isIterable=function(n){var t=Object(n);return void 0!==t[e]||"@@iterator"in t||o.hasOwnProperty(s(t))}},29:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(7),o=s(e),p=a(1),c=s(p);t["default"]=function(n){var t=n.type,a=n.className,s=void 0===a?"":a;return c["default"].createElement("i",(0,o["default"])({},n,{className:(s+" anticon anticon-"+t).trim()}))},n.exports=t["default"]},31:function(n,t,a){"use strict";a(37)},37:function(n,t){},41:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var e=a(8),o=s(e),p=a(4),c=s(p),u=a(6),l=s(u),i=a(5),r=s(i),f=a(1),d=s(f),k=a(3),h=s(k),m=function(n){function t(){return(0,c["default"])(this,t),(0,l["default"])(this,n.apply(this,arguments))}return(0,r["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,s=t.size,e=t.className,p=t.style,c=t.onClick,u=(0,h["default"])((n={},(0,o["default"])(n,""+a,!0),(0,o["default"])(n,a+"-"+s,!0),(0,o["default"])(n,e,!!e),n));return d["default"].createElement("div",{className:u,style:p,onClick:c})},t}(d["default"].Component);t["default"]=m,m.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=t["default"]},42:function(n,t,a){"use strict";a(9),a(57)},47:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function o(n){return e(n.type)&&j(n.props.children)?v["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(j(n)&&(n=n.split("").join(" ")),v["default"].createElement("span",null,n)):n}Object.defineProperty(t,"__esModule",{value:!0});var p=a(7),c=s(p),u=a(8),l=s(u),i=a(17),r=s(i),f=a(4),d=s(f),k=a(6),h=s(k),m=a(5),g=s(m),y=a(1),v=s(y),T=a(3),b=s(T),C=a(12),E=s(C),_=a(29),x=s(_),N=a(18),w=s(N),M=a(20),S=s(M),P=/^[\u4e00-\u9fa5]{2}$/,j=P.test.bind(P),O=function(n){function t(){return(0,d["default"])(this,t),(0,h["default"])(this,n.apply(this,arguments))}return(0,g["default"])(t,n),t.prototype.render=function(){var n,t=(0,w["default"])(this.props,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","touchFeedback","activeStyle"]),a=(0,r["default"])(t,2),s=a[0],e=s.children,p=s.className,u=s.prefixCls,i=s.type,f=s.size,d=s.inline,k=s.across,h=s.disabled,m=s.icon,g=s.loading,y=s.touchFeedback,T=s.activeStyle,C=a[1],_=(n={},(0,l["default"])(n,p,p),(0,l["default"])(n,u,!0),(0,l["default"])(n,u+"-primary","primary"===i),(0,l["default"])(n,u+"-ghost","ghost"===i),(0,l["default"])(n,u+"-warning","warning"===i),(0,l["default"])(n,u+"-small","small"===f),(0,l["default"])(n,u+"-inline",d),(0,l["default"])(n,u+"-across",k),(0,l["default"])(n,u+"-disabled",h),(0,l["default"])(n,u+"-loading",g),n),N=(0,E["default"])({},this.props.style);y&&(N=(0,E["default"])(N,T),_[u+"-active"]=!0);var M=g?"loading":m,S=v["default"].Children.map(e,o);return M&&(_[u+"-icon"]=!0),delete C.htmlType,v["default"].createElement("button",(0,c["default"])({},C,{type:this.props.htmlType||"button",style:N,className:(0,b["default"])(_),disabled:h}),M?v["default"].createElement(x["default"],{type:M}):null,S)},t}(v["default"].Component);O.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1},t["default"]=(0,S["default"])(O),n.exports=t["default"]},48:function(n,t,a){"use strict";a(9),a(31),a(53)},50:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var e=a(8),o=s(e),p=a(4),c=s(p),u=a(6),l=s(u),i=a(5),r=s(i),f=a(1),d=s(f),k=a(3),h=s(k),m=function(n){function t(){return(0,c["default"])(this,t),(0,l["default"])(this,n.apply(this,arguments))}return(0,r["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,s=t.size,e=t.className,p=t.children,c=t.style,u=(0,h["default"])((n={},(0,o["default"])(n,""+a,!0),(0,o["default"])(n,a+"-"+s,!0),(0,o["default"])(n,e,!!e),n));return d["default"].createElement("div",{className:u,style:c},p)},t}(d["default"].Component);t["default"]=m,m.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=t["default"]},51:function(n,t,a){"use strict";a(9),a(62)},53:function(n,t){},57:function(n,t){},62:function(n,t){},244:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(){return f=l["default"].newInstance({prefixCls:d,style:{top:0},transitionName:"am-fade"})}function o(n,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,s=arguments[3],o={info:"",success:"check-circle-o",fail:"cross-circle-o",offline:"frown",loading:"loading"}[t];"function"==typeof a&&(s=a,a=3);var p=e();p.notice({duration:a,style:{},content:o?c["default"].createElement("div",{className:d+"-text "+d+"-text-icon"},c["default"].createElement(r["default"],{type:o}),c["default"].createElement("div",null,n)):c["default"].createElement("div",{className:d+"-text"},c["default"].createElement("div",null,n)),onClose:function(){s&&s(),p.destroy(),p=null,f=null}})}Object.defineProperty(t,"__esModule",{value:!0});var p=a(1),c=s(p),u=a(260),l=s(u),i=a(29),r=s(i),f=void 0,d="am-toast";t["default"]={SHORT:3,LONG:8,show:function(n,t){return o(n,"info",t,function(){})},info:function(n,t,a){return o(n,"info",t,a)},success:function(n,t,a){return o(n,"success",t,a)},fail:function(n,t,a){return o(n,"fail",t,a)},offline:function(n,t,a){return o(n,"offline",t,a)},loading:function(n,t,a){return o(n,"loading",t,a)},hide:function(){f&&(f.destroy(),f=null)}},n.exports=t["default"]},245:function(n,t,a){"use strict";a(9),a(31),a(252)},252:function(n,t){},258:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}Object.defineProperty(t,"__esModule",{value:!0});var o=a(1),p=s(o),c=a(3),u=s(c),l=p["default"].createClass({displayName:"Notice",propTypes:{duration:o.PropTypes.number,onClose:o.PropTypes.func,children:o.PropTypes.any},getDefaultProps:function(){return{onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}}},componentDidMount:function(){var n=this;this.props.duration&&(this.closeTimer=setTimeout(function(){n.close()},1e3*this.props.duration))},componentWillUnmount:function(){this.clearCloseTimer()},clearCloseTimer:function(){this.closeTimer&&(clearTimeout(this.closeTimer),this.closeTimer=null)},close:function(){this.clearCloseTimer(),this.props.onClose()},render:function(){var n,t=this.props,a=t.prefixCls+"-notice",s=(n={},e(n,""+a,1),e(n,a+"-closable",t.closable),e(n,t.className,!!t.className),n);return p["default"].createElement("div",{className:(0,u["default"])(s),style:t.style},p["default"].createElement("div",{className:a+"-content"},t.children),t.closable?p["default"].createElement("a",{tabIndex:"0",onClick:this.close,className:a+"-close"},p["default"].createElement("span",{className:a+"-close-x"})):null)}});t["default"]=l,n.exports=t["default"]},259:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function o(){return"rcNotification_"+T+"_"+v++}Object.defineProperty(t,"__esModule",{value:!0});var p=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},c=a(1),u=s(c),l=a(2),i=s(l),r=a(77),f=s(r),d=a(261),k=s(d),h=a(3),m=s(h),g=a(258),y=s(g),v=0,T=Date.now(),b=u["default"].createClass({displayName:"Notification",propTypes:{prefixCls:c.PropTypes.string,transitionName:c.PropTypes.string,animation:c.PropTypes.oneOfType([c.PropTypes.string,c.PropTypes.object]),style:c.PropTypes.object},getDefaultProps:function(){return{prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}}},getInitialState:function(){return{notices:[]}},getTransitionName:function(){var n=this.props,t=n.transitionName;return!t&&n.animation&&(t=n.prefixCls+"-"+n.animation),t},add:function(n){var t=n.key=n.key||o();this.setState(function(a){var s=a.notices;if(!s.filter(function(n){return n.key===t}).length)return{notices:s.concat(n)}})},remove:function(n){this.setState(function(t){return{notices:t.notices.filter(function(t){return t.key!==n})}})},render:function(){var n,t=this,a=this.props,s=this.state.notices.map(function(n){var s=(0,k["default"])(t.remove.bind(t,n.key),n.onClose);return u["default"].createElement(y["default"],p({prefixCls:a.prefixCls},n,{onClose:s}),n.content)}),o=(n={},e(n,a.prefixCls,1),e(n,a.className,!!a.className),n);return u["default"].createElement("div",{className:(0,m["default"])(o),style:a.style},u["default"].createElement(f["default"],{transitionName:this.getTransitionName()},s))}});b.newInstance=function(n){var t=n||{},a=document.createElement("div");document.body.appendChild(a);var s=i["default"].render(u["default"].createElement(b,t),a);return{notice:function(n){s.add(n)},removeNotice:function(n){s.remove(n)},component:s,destroy:function(){i["default"].unmountComponentAtNode(a),document.body.removeChild(a)}}},t["default"]=b,n.exports=t["default"]},260:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(259),o=s(e);t["default"]=o["default"],n.exports=t["default"]},261:function(n,t){"use strict";function a(){var n=arguments;return function(){for(var t=0;t<n.length;t++)n[t]&&n[t].apply&&n[t].apply(this,arguments)}}n.exports=a},760:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(a(51),a(50)),o=s(e),p=(a(48),a(47)),c=s(p),u=(a(42),a(41)),l=s(u),i=(a(245),a(244)),r=s(i),f=a(1),d=s(f),k=a(2);s(k);n.exports={content:[["p","\u7eaf\u6587\u5b57\u3001\u7eaf\u56fe\u6807\u3001\u6210\u529f\u3001\u5931\u8d25\u3001\u79bb\u7ebf\u3001loading"]],meta:{order:0,title:"\u666e\u901a",filename:"components/toast/demo/basic.md",id:"components-toast-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Toast<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'\u8fd9\u662f\u4e00\u4e2a toast \u63d0\u793a!!!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">successToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'\u52a0\u8f7d\u6210\u529f!!!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">failToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">\'\u52a0\u8f7d\u5931\u8d25!!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">offline</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">offline</span><span class="token punctuation">(</span><span class="token string">\'\u7f51\u7edc\u8fde\u63a5\u5931\u8d25!!!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">loadingToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">\'\u52a0\u8f7d\u4e2d...\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'\u52a0\u8f7d\u5b8c\u6210!!!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> ToastExample <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>toast-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ghost<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u7eaf\u6587\u5b57 toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ghost<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>successToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u6210\u529f toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ghost<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>failToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u5931\u8d25 toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ghost<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>offline<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u7f51\u7edc toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ghost<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>loadingToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u52a0\u8f7d\u4e2d toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ToastExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(){r["default"].info("\u8fd9\u662f\u4e00\u4e2a toast \u63d0\u793a!!!")}function t(){r["default"].success("\u52a0\u8f7d\u6210\u529f!!!")}function a(){r["default"].fail("\u52a0\u8f7d\u5931\u8d25!!!",1)}function s(){r["default"].offline("\u7f51\u7edc\u8fde\u63a5\u5931\u8d25!!!")}function e(){r["default"].loading("\u52a0\u8f7d\u4e2d...",1,function(){console.log("\u52a0\u8f7d\u5b8c\u6210!!!")})}var p=d["default"].createClass({displayName:"ToastExample",render:function(){return d["default"].createElement("div",{className:"toast-container"},d["default"].createElement(l["default"],null),d["default"].createElement(o["default"],null,d["default"].createElement(c["default"],{type:"ghost",onClick:n},"\u7eaf\u6587\u5b57 toast")),d["default"].createElement(l["default"],null),d["default"].createElement(o["default"],null,d["default"].createElement(c["default"],{type:"ghost",onClick:t},"\u6210\u529f toast")),d["default"].createElement(l["default"],null),d["default"].createElement(o["default"],null,d["default"].createElement(c["default"],{type:"ghost",onClick:a},"\u5931\u8d25 toast")),d["default"].createElement(l["default"],null),d["default"].createElement(o["default"],null,d["default"].createElement(c["default"],{type:"ghost",onClick:s},"\u7f51\u7edc toast")),d["default"].createElement(l["default"],null),d["default"].createElement(o["default"],null,d["default"].createElement(c["default"],{type:"ghost",onClick:e},"\u52a0\u8f7d\u4e2d toast")),d["default"].createElement(l["default"],null))}});return d["default"].createElement(p,null)}}},901:function(n,t,a){n.exports={basic:a(760)}}});