(self.webpackChunk_splunk_ucc_ui_lib=self.webpackChunk_splunk_ucc_ui_lib||[]).push([[354],{27354:(e,t,n)=>{e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=196)}({0:function(e,t){e.exports=n(79903)},1:function(e,t){e.exports=n(45697)},10:function(e,t){e.exports=n(12471)},12:function(e,t,n){"use strict";function r(e,t){e&&("function"==typeof e?e(t):e.current=t)}n.d(t,"a",(function(){return r}))},151:function(e,t){e.exports=n(45215)},152:function(e,t){e.exports=n(77917)},196:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z})),n.d(t,"Panel",(function(){return T}));var r=n(2),o=n.n(r),i=n(1),a=n.n(i),u=n(151),l=n.n(u),c=n(10),f=n.n(c),s=n(5),p=n.n(s),d=n(152),y=n.n(d),b=n(26),v=n(43),m=n(3),h=n.n(m),g=n(8),O=n.n(g),P=n(0),w=h()(Object(b.animated)(O.a)).withConfig({displayName:"SlidingPanelsStyles__StyledBox",componentId:"su6isq-0"})(["overflow:hidden;position:relative;"]),j=h()(b.animated.div).withConfig({displayName:"SlidingPanelsStyles__Styled",componentId:"su6isq-1"})(["",";",";"],P.mixins.reset("block"),P.mixins.clearfix()),S=n(12);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A={elementRef:a.a.oneOfType([a.a.func,a.a.object]),panelId:a.a.any.isRequired,onMount:a.a.func,onUnmount:a.a.func},M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(u,e);var t,n,r,i,a=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(i){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?R(e):t}(this,e)});function u(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return C(R(e=a.call.apply(a,[this].concat(n))),"el",null),C(R(e),"handleMount",(function(t){e.el=t,Object(S.a)(e.props.elementRef,t)})),e}return t=u,(n=[{key:"componentDidMount",value:function(){var e,t;null===(e=(t=this.props).onMount)||void 0===e||e.call(t,this)}},{key:"componentWillUnmount",value:function(){var e,t;null===(e=(t=this.props).onUnmount)||void 0===e||e.call(t,this)}},{key:"getHeight",value:function(){var e;return null===(e=this.el)||void 0===e?void 0:e.clientHeight}},{key:"getWidth",value:function(){var e;return null===(e=this.el)||void 0===e?void 0:e.clientWidth}},{key:"render",value:function(){var e=this.props.panelId;return o.a.createElement(j,x({"data-test":"panel","data-test-panel-id":e},p()(this.props,f()(u.propTypes)),{ref:this.handleMount}))}}])&&I(t.prototype,n),u}(r.Component);C(M,"propTypes",A),C(M,"defaultProps",{});var T=M;function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){V(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t){return X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},X(e,t)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B={activePanelId:a.a.any.isRequired,children:a.a.node,elementRef:a.a.oneOfType([a.a.func,a.a.object]),innerClassName:a.a.string,innerStyle:a.a.object,onAnimationEnd:a.a.func,outerClassName:a.a.string,outerStyle:a.a.object,transition:a.a.oneOf(["forward","backward"])},F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(c,e);var t,n,i,a,u=(i=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(i);if(a){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?q(e):t}(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),V(q(t=u.call(this,e)),"panelInstances",{}),V(q(t),"allowAnimationUpdates",!0),V(q(t),"willEnter",(function(){return{translateX:0}})),V(q(t),"willLeave",(function(e){return e?{translateX:-1,position:"absolute",left:0,top:0}:{translateX:-1}})),V(q(t),"handlePanelMount",(function(e){t.panelInstances[e.props.panelId]=e,e.props.panelId===t.props.activePanelId&&t.setState({activePanel:e,panelLoading:!1})})),V(q(t),"handlePanelUnmount",(function(e){delete t.panelInstances[e.props.panelId]})),V(q(t),"handleAnimationEnd",(function(){var e,n;t.allowAnimationUpdates&&t.setState({animating:!1}),null===(e=(n=t.props).onAnimationEnd)||void 0===e||e.call(n)})),V(q(t),"renderPanel",(function(e,n,i){var a,u=t.props,l=u.children,c=u.transition,f=r.Children.toArray(l).filter(r.isValidElement).find((function(e){return e.props.panelId===n})),s=null===(a=e.translateX)||void 0===a?void 0:a.to((function(e){return"translateX(".concat(e*i*("forward"===c?1:-1),"px)")}));return f?o.a.createElement(b.animated.div,{style:e},Object(r.cloneElement)(f,{style:L(L({},f.props.style),{},{transform:s}),onMount:t.handlePanelMount,onUnmount:t.handlePanelUnmount})):null})),V(q(t),"renderOuterContainer",(function(e){var n=t.props,i=n.activePanelId,a=n.children,u=n.elementRef,s=n.outerClassName,d=n.outerStyle,m=n.innerClassName,h=n.innerStyle,g=t.state.animating,O=L(L({},d),g?{width:e.width,height:e.height}:{});r.Children.toArray(a).filter(r.isValidElement).find((function(e){return e.props.panelId===i}));var P=g?{translateX:1}:{},j=l()(y()(t.panelInstances),(function(e){return!!e})).map((function(e){var n,r=t.panelInstances[e.props.panelId];return r&&null!==(n=r.getWidth())&&void 0!==n?n:0})).reduce((function(e,t){return Math.max(e,t)}),0);return o.a.createElement(w,U({className:s,"data-test-active-panel-id":i,"data-test":"sliding-panels",elementRef:u,style:O},p()(t.props,f()(c.propTypes))),o.a.createElement(v.Transition,{from:P,enter:t.willEnter(),leave:t.willLeave(g),items:i},(function(e,n){return o.a.createElement(b.animated.div,{style:h,className:m},t.renderPanel(e,n,j))})))})),t.state={animating:!1,panelLoading:!1,prevActivePanelId:t.props.activePanelId,slidingId:0},t}return t=c,(n=[{key:"componentWillUnmount",value:function(){this.allowAnimationUpdates=!1}},{key:"render",value:function(){var e=this.state,t=e.activePanel,n=e.panelLoading,r={width:t?t.getWidth():0,height:t?t.getHeight():0};return o.a.createElement(v.Spring,{to:r,onRest:this.handleAnimationEnd,immediate:n,config:{precision:1}},this.renderOuterContainer)}}])&&W(t.prototype,n),c}(r.Component);V(F,"propTypes",B),V(F,"defaultProps",{transition:"forward"}),V(F,"Panel",T),V(F,"getDerivedStateFromProps",(function(e,t){return e.activePanelId!==t.prevActivePanelId?{animating:!0,panelLoading:!0,prevActivePanelId:e.activePanelId,slidingId:t.slidingId+1}:null}));var z=F},2:function(e,t){e.exports=n(67294)},26:function(e,t){e.exports=n(39920)},3:function(e,t){e.exports=n(12788)},43:function(e,t){e.exports=n(82640)},5:function(e,t){e.exports=n(23461)},8:function(e,t){e.exports=n(76493)}})}}]);