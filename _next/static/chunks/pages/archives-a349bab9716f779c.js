(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[623],{2861:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/archives",function(){return t(4361)}])},1551:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var o,i=(o=t(7294))&&o.__esModule?o:{default:o},l=t(1003),c=t(880),s=t(9246);var u={};function f(e,r,t,n){if(e&&l.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=c.useRouter(),o=i.default.useMemo((function(){var r=a(l.resolveHref(n,e.href,!0),2),t=r[0],o=r[1];return{href:t,as:e.as?l.resolveHref(n,e.as):o||t}}),[n,e.href,e.as]),d=o.href,v=o.as,p=e.children,m=e.replace,y=e.shallow,h=e.scroll,_=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var b=(r=i.default.Children.only(p))&&"object"===typeof r&&r.ref,g=a(s.useIntersection({rootMargin:"200px"}),2),A=g[0],w=g[1],x=i.default.useCallback((function(e){A(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,A]);i.default.useEffect((function(){var e=w&&t&&l.isLocalURL(d),r="undefined"!==typeof _?_:n&&n.locale,a=u[d+"%"+v+(r?"%"+r:"")];e&&!a&&f(n,d,v,{locale:r})}),[v,d,w,_,t,n]);var B={ref:x,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,o,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),r[a?"replace":"push"](t,n,{shallow:o,locale:c,scroll:i}))}(e,n,d,v,m,y,h,_)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,v,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var N="undefined"!==typeof _?_:n&&n.locale,E=n&&n.isLocaleDomain&&l.getDomainLocale(v,N,n&&n.locales,n&&n.domainLocales);B.href=E||l.addBasePath(l.addLocale(v,N,n&&n.defaultLocale))}return i.default.cloneElement(r,B)};r.default=d},9246:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!l,u=o.useRef(),f=a(o.useState(!1),2),d=f[0],v=f[1],p=a(o.useState(r?r.current:null),2),m=p[0],y=p[1],h=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=s.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=c.get(n):(r=c.get(t),s.push(t));if(r)return r;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=a.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return c.set(t,r={id:t,observer:o,elements:a}),r}(t),a=n.id,o=n.observer,i=n.elements;return i.set(e,r),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),c.delete(a);var r=s.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));r>-1&&s.splice(r,1)}}}(e,(function(e){return e&&v(e)}),{root:m,rootMargin:t}))}),[n,m,t,d]);return o.useEffect((function(){if(!l&&!d){var e=i.requestIdleCallback((function(){return v(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){r&&y(r.current)}),[r]),[h,d]};var o=t(7294),i=t(4686),l="undefined"!==typeof IntersectionObserver;var c=new Map,s=[]},4361:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return g}});var n=t(5893),a=t(7294),o=t(9008),i=t(7175),l=t(2257),c=t(7250),s=(t(8834),t(5710)),u=t.n(s),f=t(1990),d=t.n(f);function v(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function p(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return v(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=new Array,y=new Array;var h={root:["root","navBar","freeBox","footer"],navBar:["navBar"],freeBox:["freeBox"],footer:["footer"]};function _(e){var r=function(r){var t=(0,i.xf)(r,{name:e,descendantNames:p(h[e]),internalArgPropNames:y,internalVariantPropNames:m});return function(e){e.variants,e.args;var r=e.overrides,t=e.forNode;return e.args,(0,i.eh)(a.Fragment,null,(0,i.eh)(o.default,null,(0,i.eh)("meta",{name:"twitter:card",content:"summary"}),(0,i.eh)("title",{key:"title"},"normangershman.com - archives"),(0,i.eh)("meta",{key:"og:title",property:"og:title",content:"normangershman.com - archives"})),(0,i.eh)("style",null,"\n        body {\n          margin: 0;\n        }\n      "),(0,i.eh)("div",{className:u().plasmic_page_wrapper},(0,i.eh)("div",{"data-plasmic-name":"root","data-plasmic-override":r.root,"data-plasmic-root":!0,"data-plasmic-for-node":t,className:(0,i.AK)(u().all,u().root_reset,u().plasmic_default_styles,u().plasmic_mixins,u().plasmic_tokens,d().root)},(0,i.eh)(l.Z,{"data-plasmic-name":"navBar","data-plasmic-override":r.navBar,className:(0,i.AK)("__wab_instance",d().navBar),tabArchives:!0}),(0,i.eh)("div",{"data-plasmic-name":"freeBox","data-plasmic-override":r.freeBox,className:(0,i.AK)(u().all,d().freeBox)},(0,i.eh)("div",{className:(0,i.AK)(u().all,u().__wab_text,d().text__b6W6O)},"ARCHIVE COLLECTION"),(0,i.eh)("div",{className:(0,i.AK)(u().all,u().__wab_text,d().text__cTek)},"Each collection is a separate body of work by category, interest and aesthetics. Some prints are already available. More will be available monthly or sooner. Please do inquire if a particular one is of interest."),(0,i.eh)("div",{className:(0,i.AK)(u().all,u().__wab_text,d().text__jBJx)},"Gallery / listing of  title & one image per collection will show on this page")),(0,i.eh)(c.Z,{"data-plasmic-name":"footer","data-plasmic-override":r.footer,className:(0,i.AK)("__wab_instance",d().footer)}))))}({variants:t.variants,args:t.args,overrides:t.overrides,forNode:e})};return r.displayName="root"===e?"PlasmicArchives":"PlasmicArchives.".concat(e),r}var b=Object.assign(_("root"),{navBar:_("navBar"),freeBox:_("freeBox"),footer:_("footer"),internalVariantProps:m,internalArgProps:y});var g=function(){return(0,n.jsx)(b,{})}},1990:function(e){e.exports={root:"PlasmicArchives_root__MoOAm",navBar:"PlasmicArchives_navBar__4Apob",freeBox:"PlasmicArchives_freeBox__nv5yI",text__b6W6O:"PlasmicArchives_text__b6W6O__6F3pC",text__cTek:"PlasmicArchives_text__cTek__kZFNU",text__jBJx:"PlasmicArchives_text__jBJx__BZOg2",footer:"PlasmicArchives_footer__7QfOA"}},8834:function(){},9008:function(e,r,t){e.exports=t(3121)},1664:function(e,r,t){e.exports=t(1551)}},function(e){e.O(0,[894,774,888,179],(function(){return r=2861,e(e.s=r);var r}));var r=e.O();_N_E=r}]);