webpackJsonp([14],{9:function(n,t,a){"use strict";a(15),a(14)},14:function(n,t){},15:function(n,t){},17:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}t.__esModule=!0;var e=a(23),o=s(e),p=a(22),u=s(p);t["default"]=function(){function n(n,t){var a=[],s=!0,e=!1,o=void 0;try{for(var p,c=(0,u["default"])(n);!(s=(p=c.next()).done)&&(a.push(p.value),!t||a.length!==t);s=!0);}catch(l){e=!0,o=l}finally{try{!s&&c["return"]&&c["return"]()}finally{if(e)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if((0,o["default"])(Object(t)))return n(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},18:function(n,t){"use strict";function a(n,t){var a={},s={};return Object.keys(n).forEach(function(e){t.indexOf(e)!==-1?a[e]=n[e]:s[e]=n[e]}),[a,s]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a,n.exports=t["default"]},20:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{myName:"TouchableFeedbackComponent"},a=c["default"].createClass({displayName:"TouchableFeedbackComponent",statics:t,getDefaultProps:function(){return{activeStyle:{}}},getInitialState:function(){return{touchFeedback:!1}},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},onMouseDown:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onMouseUp:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},render:function(){var t={};return this.props.activeStyle&&(t=l?{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}:{onMouseDown:this.onMouseDown,onMouseUp:this.state.touchFeedback?this.onMouseUp:void 0,onMouseLeave:this.state.touchFeedback?this.onMouseUp:void 0}),c["default"].createElement(n,(0,p["default"])({},this.props,{touchFeedback:this.state.touchFeedback},t))}});return a}Object.defineProperty(t,"__esModule",{value:!0});var o=a(7),p=s(o);t["default"]=e;var u=a(1),c=s(u),l="undefined"!=typeof window&&"ontouchstart"in window;n.exports=t["default"]},22:function(n,t,a){n.exports={"default":a(24),__esModule:!0}},23:function(n,t,a){n.exports={"default":a(25),__esModule:!0}},24:function(n,t,a){a(21),a(19),n.exports=a(26)},25:function(n,t,a){a(21),a(19),n.exports=a(27)},26:function(n,t,a){var s=a(33),e=a(36);n.exports=a(16).getIterator=function(n){var t=e(n);if("function"!=typeof t)throw TypeError(n+" is not iterable!");return s(t.call(n))}},27:function(n,t,a){var s=a(45),e=a(28)("iterator"),o=a(34);n.exports=a(16).isIterable=function(n){var t=Object(n);return void 0!==t[e]||"@@iterator"in t||o.hasOwnProperty(s(t))}},29:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(7),o=s(e),p=a(1),u=s(p);t["default"]=function(n){var t=n.type,a=n.className,s=void 0===a?"":a;return u["default"].createElement("i",(0,o["default"])({},n,{className:(s+" anticon anticon-"+t).trim()}))},n.exports=t["default"]},31:function(n,t,a){"use strict";a(37)},37:function(n,t){},47:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function o(n){return e(n.type)&&M(n.props.children)?y["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(M(n)&&(n=n.split("").join(" ")),y["default"].createElement("span",null,n)):n}Object.defineProperty(t,"__esModule",{value:!0});var p=a(7),u=s(p),c=a(8),l=s(c),i=a(17),r=s(i),f=a(4),d=s(f),k=a(6),m=s(k),h=a(5),g=s(h),v=a(1),y=s(v),b=a(3),C=s(b),w=a(12),x=s(w),_=a(29),T=s(_),j=a(18),E=s(j),N=a(20),P=s(N),I=/^[\u4e00-\u9fa5]{2}$/,M=I.test.bind(I),S=function(n){function t(){return(0,d["default"])(this,t),(0,m["default"])(this,n.apply(this,arguments))}return(0,g["default"])(t,n),t.prototype.render=function(){var n,t=(0,E["default"])(this.props,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","touchFeedback","activeStyle"]),a=(0,r["default"])(t,2),s=a[0],e=s.children,p=s.className,c=s.prefixCls,i=s.type,f=s.size,d=s.inline,k=s.across,m=s.disabled,h=s.icon,g=s.loading,v=s.touchFeedback,b=s.activeStyle,w=a[1],_=(n={},(0,l["default"])(n,p,p),(0,l["default"])(n,c,!0),(0,l["default"])(n,c+"-primary","primary"===i),(0,l["default"])(n,c+"-ghost","ghost"===i),(0,l["default"])(n,c+"-warning","warning"===i),(0,l["default"])(n,c+"-small","small"===f),(0,l["default"])(n,c+"-inline",d),(0,l["default"])(n,c+"-across",k),(0,l["default"])(n,c+"-disabled",m),(0,l["default"])(n,c+"-loading",g),n),j=(0,x["default"])({},this.props.style);v&&(j=(0,x["default"])(j,b),_[c+"-active"]=!0);var N=g?"loading":h,P=y["default"].Children.map(e,o);return N&&(_[c+"-icon"]=!0),delete w.htmlType,y["default"].createElement("button",(0,u["default"])({},w,{type:this.props.htmlType||"button",style:j,className:(0,C["default"])(_),disabled:m}),N?y["default"].createElement(T["default"],{type:N}):null,P)},t}(y["default"].Component);S.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1},t["default"]=(0,P["default"])(S),n.exports=t["default"]},48:function(n,t,a){"use strict";a(9),a(31),a(53)},50:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var e=a(8),o=s(e),p=a(4),u=s(p),c=a(6),l=s(c),i=a(5),r=s(i),f=a(1),d=s(f),k=a(3),m=s(k),h=function(n){function t(){return(0,u["default"])(this,t),(0,l["default"])(this,n.apply(this,arguments))}return(0,r["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,s=t.size,e=t.className,p=t.children,u=t.style,c=(0,m["default"])((n={},(0,o["default"])(n,""+a,!0),(0,o["default"])(n,a+"-"+s,!0),(0,o["default"])(n,e,!!e),n));return d["default"].createElement("div",{className:c,style:u},p)},t}(d["default"].Component);t["default"]=h,h.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=t["default"]},51:function(n,t,a){"use strict";a(9),a(62)},53:function(n,t){},62:function(n,t){},64:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var e=a(8),o=s(e),p=a(4),u=s(p),c=a(6),l=s(c),i=a(5),r=s(i),f=a(1),d=s(f),k=a(3),m=s(k),h=function(n){function t(){return(0,u["default"])(this,t),(0,l["default"])(this,n.apply(this,arguments))}return(0,r["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.direction,s=t.wrap,e=t.justify,p=t.align,u=t.alignContent,c=t.className,l=t.children,i=t.prefixCls,r=t.style,f=t.onClick,k=(0,m["default"])((n={},(0,o["default"])(n,i,!0),(0,o["default"])(n,i+"-dir-row","row"===a),(0,o["default"])(n,i+"-dir-row-reverse","row-reverse"===a),(0,o["default"])(n,i+"-dir-column","column"===a),(0,o["default"])(n,i+"-dir-column-reverse","column-reverse"===a),(0,o["default"])(n,i+"-nowrap","nowrap"===s),(0,o["default"])(n,i+"-wrap","wrap"===s),(0,o["default"])(n,i+"-wrap-reverse","wrap-reverse"===s),(0,o["default"])(n,i+"-justify-start","start"===e),(0,o["default"])(n,i+"-justify-end","end"===e),(0,o["default"])(n,i+"-justify-center","center"===e),(0,o["default"])(n,i+"-justify-between","between"===e),(0,o["default"])(n,i+"-justify-around","around"===e),(0,o["default"])(n,i+"-align-top","top"===p||"start"===p),(0,o["default"])(n,i+"-align-middle","middle"===p||"center"===p),(0,o["default"])(n,i+"-align-bottom","bottom"===p||"end"===p),(0,o["default"])(n,i+"-align-baseline","baseline"===p),(0,o["default"])(n,i+"-align-stretch","stretch"===p),(0,o["default"])(n,i+"-align-content-start","start"===u),(0,o["default"])(n,i+"-align-content-end","end"===u),(0,o["default"])(n,i+"-align-content-center","center"===u),(0,o["default"])(n,i+"-align-content-between","between"===u),(0,o["default"])(n,i+"-align-content-around","around"===u),(0,o["default"])(n,i+"-align-content-stretch","stretch"===u),(0,o["default"])(n,c,c),n));return d["default"].createElement("div",{className:k,style:r,onClick:f},l)},t}(d["default"].Component);t["default"]=h,h.defaultProps={prefixCls:"am-flexbox",align:"center",onClick:function(){}},n.exports=t["default"]},65:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var e=a(8),o=s(e),p=a(4),u=s(p),c=a(6),l=s(c),i=a(5),r=s(i),f=a(1),d=s(f),k=a(3),m=s(k),h=function(n){function t(){return(0,u["default"])(this,t),(0,l["default"])(this,n.apply(this,arguments))}return(0,r["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.children,s=t.className,e=t.prefixCls,p=t.style,u=t.onClick,c=(0,m["default"])((n={},(0,o["default"])(n,e+"-item",!0),(0,o["default"])(n,s,s),n));return d["default"].createElement("div",{className:c,style:p,onClick:u},a)},t}(d["default"].Component);t["default"]=h,h.defaultProps={prefixCls:"am-flexbox"},n.exports=t["default"]},66:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(64),o=s(e),p=a(65),u=s(p);o["default"].Item=u["default"],t["default"]=o["default"],n.exports=t["default"]},67:function(n,t,a){"use strict";a(9),a(76)},76:function(n,t){},244:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(){return f=l["default"].newInstance({prefixCls:d,style:{top:0},transitionName:"am-fade"})}function o(n,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,s=arguments[3],o={info:"",success:"check-circle-o",fail:"cross-circle-o",offline:"frown",loading:"loading"}[t];"function"==typeof a&&(s=a,a=3);var p=e();p.notice({duration:a,style:{},content:o?u["default"].createElement("div",{className:d+"-text "+d+"-text-icon"},u["default"].createElement(r["default"],{type:o}),u["default"].createElement("div",null,n)):u["default"].createElement("div",{className:d+"-text"},u["default"].createElement("div",null,n)),onClose:function(){s&&s(),p.destroy(),p=null,f=null}})}Object.defineProperty(t,"__esModule",{value:!0});var p=a(1),u=s(p),c=a(260),l=s(c),i=a(29),r=s(i),f=void 0,d="am-toast";t["default"]={SHORT:3,LONG:8,show:function(n,t){return o(n,"info",t,function(){})},info:function(n,t,a){return o(n,"info",t,a)},success:function(n,t,a){return o(n,"success",t,a)},fail:function(n,t,a){return o(n,"fail",t,a)},offline:function(n,t,a){return o(n,"offline",t,a)},loading:function(n,t,a){return o(n,"loading",t,a)},hide:function(){f&&(f.destroy(),f=null)}},n.exports=t["default"]},245:function(n,t,a){"use strict";a(9),a(31),a(252)},252:function(n,t){},258:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}Object.defineProperty(t,"__esModule",{value:!0});var o=a(1),p=s(o),u=a(3),c=s(u),l=p["default"].createClass({displayName:"Notice",propTypes:{duration:o.PropTypes.number,onClose:o.PropTypes.func,children:o.PropTypes.any},getDefaultProps:function(){return{onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}}},componentDidMount:function(){var n=this;this.props.duration&&(this.closeTimer=setTimeout(function(){n.close()},1e3*this.props.duration))},componentWillUnmount:function(){this.clearCloseTimer()},clearCloseTimer:function(){this.closeTimer&&(clearTimeout(this.closeTimer),this.closeTimer=null)},close:function(){this.clearCloseTimer(),this.props.onClose()},render:function(){var n,t=this.props,a=t.prefixCls+"-notice",s=(n={},e(n,""+a,1),e(n,a+"-closable",t.closable),e(n,t.className,!!t.className),n);return p["default"].createElement("div",{className:(0,c["default"])(s),style:t.style},p["default"].createElement("div",{className:a+"-content"},t.children),t.closable?p["default"].createElement("a",{tabIndex:"0",onClick:this.close,className:a+"-close"},p["default"].createElement("span",{className:a+"-close-x"})):null)}});t["default"]=l,n.exports=t["default"]},259:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function o(){return"rcNotification_"+b+"_"+y++}Object.defineProperty(t,"__esModule",{value:!0});var p=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},u=a(1),c=s(u),l=a(2),i=s(l),r=a(77),f=s(r),d=a(261),k=s(d),m=a(3),h=s(m),g=a(258),v=s(g),y=0,b=Date.now(),C=c["default"].createClass({displayName:"Notification",propTypes:{prefixCls:u.PropTypes.string,transitionName:u.PropTypes.string,animation:u.PropTypes.oneOfType([u.PropTypes.string,u.PropTypes.object]),style:u.PropTypes.object},getDefaultProps:function(){return{prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}}},getInitialState:function(){return{notices:[]}},getTransitionName:function(){var n=this.props,t=n.transitionName;return!t&&n.animation&&(t=n.prefixCls+"-"+n.animation),t},add:function(n){var t=n.key=n.key||o();this.setState(function(a){var s=a.notices;if(!s.filter(function(n){return n.key===t}).length)return{notices:s.concat(n)}})},remove:function(n){this.setState(function(t){return{notices:t.notices.filter(function(t){return t.key!==n})}})},render:function(){var n,t=this,a=this.props,s=this.state.notices.map(function(n){var s=(0,k["default"])(t.remove.bind(t,n.key),n.onClose);return c["default"].createElement(v["default"],p({prefixCls:a.prefixCls},n,{onClose:s}),n.content)}),o=(n={},e(n,a.prefixCls,1),e(n,a.className,!!a.className),n);return c["default"].createElement("div",{className:(0,h["default"])(o),style:a.style},c["default"].createElement(f["default"],{transitionName:this.getTransitionName()},s))}});C.newInstance=function(n){var t=n||{},a=document.createElement("div");document.body.appendChild(a);var s=i["default"].render(c["default"].createElement(C,t),a);return{notice:function(n){s.add(n)},removeNotice:function(n){s.remove(n)},component:s,destroy:function(){i["default"].unmountComponentAtNode(a),document.body.removeChild(a)}}},t["default"]=C,n.exports=t["default"]},260:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(259),o=s(e);t["default"]=o["default"],n.exports=t["default"]},261:function(n,t){"use strict";function a(){var n=arguments;return function(){for(var t=0;t<n.length;t++)n[t]&&n[t].apply&&n[t].apply(this,arguments)}}n.exports=a},682:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(a(798),a(797)),o=s(e),p=(a(48),a(47)),u=s(p),c=a(1),l=s(c),i=a(2);s(i);n.exports={content:[],meta:{order:0,title:"\u7b80\u5355\u7684\u56fe\u7247\u9009\u62e9\u7ec4\u4ef6",filename:"components/image-picker/demo/basic.md",id:"components-image-picker-demo-basic"},description:["section"],toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ImagePicker<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2121\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2122\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ImagePickerExample <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">getInitialState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> files<span class="token punctuation">:</span> data<span class="token punctuation">,</span> custom<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">onChange</span><span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      files<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">onAddImageClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      files<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>files<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation">,</span>\n        id<span class="token punctuation">:</span> <span class="token string">\'3\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">sw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      custom<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>custom<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> files<span class="token punctuation">,</span> custom <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">inline</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>sw<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>custom <span class="token operator">?</span> <span class="token string">\'\u81ea\u5b9a\u4e49\'</span> <span class="token punctuation">:</span> <span class="token string">\'\u5e38\u7528\u7684\'</span><span class="token punctuation">}</span>\u9009\u62e9\u56fe\u7247\u7684\u65b9\u6cd5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>custom <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePicker</span>\n        <span class="token attr-name">files</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onImageClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onAddImageClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onAddImageClick<span class="token punctuation">}</span></span>\n        <span class="token attr-name">selectable</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span> <span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePicker</span>\n        <span class="token attr-name">files</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onImageClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">selectable</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePickerExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=[{url:"https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",id:"2121"},{url:"https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg",id:"2122"}],t=l["default"].createClass({displayName:"ImagePickerExample",getInitialState:function(){return{files:n,custom:!1}},onChange:function(n,t,a){console.log(n,t,a),this.setState({files:n})},onAddImageClick:function(){this.setState({files:this.state.files.concat({url:"https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg",id:"3"})})},sw:function(){this.setState({custom:!this.state.custom})},render:function(){var n=this.state,t=n.files,a=n.custom;return l["default"].createElement("div",null,l["default"].createElement(u["default"],{inline:!0,style:{margin:10},onClick:this.sw},a?"\u81ea\u5b9a\u4e49":"\u5e38\u7528\u7684","\u9009\u62e9\u56fe\u7247\u7684\u65b9\u6cd5"),a?l["default"].createElement(o["default"],{files:t,onChange:this.onChange,onImageClick:function(n,t){return console.log(n,t)},onAddImageClick:this.onAddImageClick,selectable:t.length<5}):l["default"].createElement(o["default"],{files:t,onChange:this.onChange,onImageClick:function(n,t){return console.log(n,t)},selectable:t.length<5}))}});return l["default"].createElement(t,null)}}},797:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(){}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=a(8),p=s(o),u=a(4),c=s(u),l=a(6),i=s(l),r=a(5),f=s(r),d=a(1),k=s(d),m=a(3),h=s(m),g=a(50),v=s(g),y=a(66),b=s(y),C=a(244),w=s(C),x=a(799),_=s(x),T=function(n){function t(){(0,c["default"])(this,t);var a=(0,i["default"])(this,n.apply(this,arguments));return a.getOrientation=function(n,t){if(/iphone|ipad/i.test(navigator.userAgent)){var a=new FileReader;a.onload=function(n){var a=new DataView(n.target.result);if(65496!==a.getUint16(0,!1))return t(-2);for(var s=a.byteLength,e=2;e<s;){var o=a.getUint16(e,!1);if(e+=2,65505===o){var p=a.getUint32(e+=2,!1);if(1165519206!==p)return t(-1);var u=18761===a.getUint16(e+=6,!1);e+=a.getUint32(e+4,u);var c=a.getUint16(e,u);e+=2;for(var l=0;l<c;l++)if(274===a.getUint16(e+12*l,u))return t(a.getUint16(e+12*l+8,u))}else{if(65280!==(65280&o))break;e+=a.getUint16(e,!1)}}return t(-1)},a.readAsArrayBuffer(n.slice(0,65536))}else t("-1")},a.removeImage=function(n){var t=[],s=a.props.files,e=void 0===s?[]:s;e.forEach(function(a,s){n!==s&&t.push(a)}),a.props.onChange&&a.props.onChange(t,"remove",n)},a.addImage=function(n){var t=a.props.files,s=void 0===t?[]:t,e=s.concat(n);a.props.onChange&&a.props.onChange(e,"add")},a.onImageClick=function(n){a.props.onImageClick&&a.props.onImageClick(n,a.props.files)},a.onFileChange=function(){var n=a.refs.fileSelectorInput;n.files&&n.files.length&&!function(){var t=n.files[0],s=new FileReader;s.onload=function(s){var e=s.target.result;if(!e)return void w["default"].fail("\u56fe\u7247\u83b7\u53d6\u5931\u8d25");var o=1;a.getOrientation(t,function(s){s>0&&(o=s),a.addImage({url:e,orientation:o,file:t}),n.value=""})},s.readAsDataURL(t)}()},a}return(0,f["default"])(t,n),t.prototype.render=function(){var n,t=this,a=this.props,s=a.prefixCls,e=a.style,o=a.className,u=a.files,c=void 0===u?[]:u,l=a.selectable,i=a.onAddImageClick,r=window.devicePixelRatio||1,f=[],d=(document.documentElement.clientWidth-18*r-6*r*3)/4,m=(0,h["default"])((n={},(0,p["default"])(n,""+s,!0),(0,p["default"])(n,o,o),n)),g={width:d+"px",height:d+"px"};return c.forEach(function(n,a){f.push(k["default"].createElement("div",{key:a,className:s+"-item",style:g},k["default"].createElement("div",{className:s+"-item-remove",onClick:function(){t.removeImage(a)}}),k["default"].createElement("div",{className:s+"-item-content",onClick:function(){t.onImageClick(a)},style:{backgroundImage:"url("+n.url+")"}})))}),k["default"].createElement("div",{className:m,style:e},k["default"].createElement("div",{className:s+"-list"},k["default"].createElement(v["default"],{size:"md"},k["default"].createElement(b["default"],{wrap:"wrap"},f,l&&k["default"].createElement(_["default"],{prefixCls:s+"-upload-btn",className:s+"-item "+s+"-upload-btn",style:g,onClick:function(){i&&i()}},i?null:k["default"].createElement("input",{
style:g,ref:"fileSelectorInput",type:"file",accept:"image/jpg,image/jpeg,image/png,image/gif",onChange:function(){t.onFileChange()}}))))))},t}(k["default"].Component);t["default"]=T,T.defaultProps={prefixCls:"am-image-picker",files:[],onChange:e,onImageClick:e,selectable:!0},n.exports=t["default"]},798:function(n,t,a){"use strict";a(9),a(51),a(67),a(245),a(1132)},799:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(7),o=s(e),p=a(17),u=s(p),c=a(4),l=s(c),i=a(6),r=s(i),f=a(5),d=s(f),k=a(1),m=s(k),h=a(12),g=s(h),v=a(18),y=s(v),b=a(20),C=s(b),w=function(n){function t(){return(0,l["default"])(this,t),(0,r["default"])(this,n.apply(this,arguments))}return(0,d["default"])(t,n),t.prototype.render=function(){var n=(0,y["default"])(this.props,["children","className","prefixCls","touchFeedback","activeStyle"]),t=(0,u["default"])(n,2),a=t[0],s=a.children,e=a.className,p=a.prefixCls,c=a.touchFeedback,l=a.activeStyle,i=t[1],r=(0,g["default"])({},this.props.style);return c&&(r=(0,g["default"])(r,l)),m["default"].createElement("div",(0,o["default"])({},i,{style:r,className:c?e+" "+p+"-active":""+e}),s)},t}(m["default"].Component);t["default"]=(0,C["default"])(w),n.exports=t["default"]},873:function(n,t,a){n.exports={basic:a(682)}},1132:function(n,t){}});