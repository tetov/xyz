(self.webpackChunktetov_xyz=self.webpackChunktetov_xyz||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},2705:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),o=function(e){var t=e.children;return r.createElement("footer",{className:"pt-8 pb-16 items-center"},t)},i=n(1597),a=n(4397),c=function(e){var t=e.subHeading;return r.createElement("header",{className:"text-center md:justify-between pt-12 mb-16 md:mb-12"},r.createElement(i.Link,{to:"/"},r.createElement("h1",{className:"text-7xl md:text-8xl font-bold tracking-tighter leading-tight"},(0,a.Z)().title))," ",t&&r.createElement("h2",{className:"mt-4 w-2/3 text-2xl md:text-4xl font-light inline-block leading-relaxed"},t))},u=n(9042),l=function(e){var t=e.children,n=e.subHeading,i=e.pathName;return r.createElement("div",{className:"global-wrapper min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text"},r.createElement(u.V,{pathName:i}),r.createElement("div",{className:"w-full md:w-3/4 lg:w-1/2 mx-auto px-5 space-y-6"},r.createElement(c,{subHeading:n}),r.createElement("main",null,t),r.createElement(o,null)))}},9042:function(e,t,n){"use strict";n.d(t,{q2:function(){return he},wM:function(){return ge},V:function(){return Ee}});var r,o,i,a,c=n(7294),u=n(5697),l=n.n(u),s=n(4839),f=n.n(s),p=n(2993),d=n.n(p),m=n(6494),y=n.n(m),h="bodyAttributes",b="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(T).map((function(e){return T[e]})),"charset"),w="cssText",E="href",A="http-equiv",C="innerHTML",O="itemprop",S="name",x="property",j="rel",k="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",N="defer",M="encodeSpecialCharacters",R="onChangeClientState",_="titleTemplate",H=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),D=[T.NOSCRIPT,T.SCRIPT,T.STYLE],q="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=J(e,T.TITLE),n=J(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,I);return t||r||void 0},W=function(e){return J(e,R)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===j&&"canonical"===e[n].toLowerCase()||u===j&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==C&&c!==w&&c!==O||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=y()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(T.BODY,r),ue(T.HTML,o),ce(f,p);var d={baseTag:le(T.BASE,n),linkTags:le(T.LINK,i),metaTags:le(T.META,a),noscriptTags:le(T.NOSCRIPT,c),scriptTags:le(T.SCRIPT,l),styleTags:le(T.STYLE,s)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,m,y)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(T.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(q),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(q):n.getAttribute(q)!==a.join(",")&&n.setAttribute(q,a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(q,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[q]=!0,o=fe(n,r),[c.createElement(T.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+V(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case b:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[q]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===C||n===w){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(T.BASE,t,r),bodyAttributes:pe(h,n,r),htmlAttributes:pe(b,o,r),link:pe(T.LINK,i,r),meta:pe(T.META,a,r),noscript:pe(T.NOSCRIPT,c,r),script:pe(T.SCRIPT,u,r),style:pe(T.STYLE,l,r),title:pe(T.TITLE,{title:f,titleAttributes:p},r)}},me=f()((function(e){return{baseTag:$([E,P],e),bodyAttributes:Q(h,e),defer:J(e,N),encode:J(e,M),htmlAttributes:Q(b,e),linkTags:G(T.LINK,[j,E],e),metaTags:G(T.META,[S,v,A,x,O],e),noscriptTags:G(T.NOSCRIPT,[C],e),onChangeClientState:W(e),scriptTags:G(T.SCRIPT,[k,C],e),styleTags:G(T.STYLE,[w],e),title:Z(e),titleAttributes:Q(g,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),ye=(o=me,a=i=function(e){function t(){return U(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case T.TITLE:return F({},o,((t={})[r.type]=a,t.titleAttributes=F({},i),t));case T.BODY:return F({},o,{bodyAttributes:F({},i)});case T.HTML:return F({},o,{htmlAttributes:F({},i)})}return F({},o,((n={})[r.type]=F({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(z(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ye.renderStatic=ye.rewind;var he=function(e){var t=e.title,n=e.excerpt,r=e.type,o=e.lang,i=e.dateCreated;return c.createElement(ye,null,o&&c.createElement("html",{lang:o}),c.createElement("title",null,t),c.createElement("meta",{property:"og:title",content:t}),n&&c.createElement("meta",{name:"description",content:n}),n&&c.createElement("meta",{property:"og:description",content:n}),r&&c.createElement("meta",{property:"og:type",content:r}),i&&"article"===r&&c.createElement("meta",{property:"article:published_time",content:i}))},be=n(4397),ge=function(e){var t=e.src,n=e.alt,r=(0,be.Z)().siteURL;return c.createElement(ye,null,t&&c.createElement("meta",{property:"og:image",content:r+t}),t&&n&&c.createElement("meta",{property:"og:image:alt",content:n}))},Te=n(1597),ve=function(){var e=(0,Te.useStaticQuery)("1394904020").allContactData;return 1!==e.nodes.length?"":"@"+e.nodes[0].username},we=n.p+"static/logo-29a38e0460492dd7fe187d2cc77f787b.png",Ee=function(e){var t=e.pathName,n=(0,be.Z)(),r=n.title,o=n.lang,i=n.siteURL,a=n.description,u=ve();return c.createElement(ye,{titleTemplate:"%s | "+r,defaultTitle:r},c.createElement("html",{lang:o||"en",prefix:"og: http://ogp.me/ns#"}),c.createElement("meta",{property:"og:site_name",content:r}),c.createElement("meta",{property:"og:url",content:i+t}),c.createElement("meta",{property:"og:type",content:"website"}),c.createElement("meta",{property:"og:title",content:r}),c.createElement("meta",{name:"description",content:a.trim()}),c.createElement("meta",{property:"og:description",content:a.trim()}),c.createElement("meta",{property:"og:image",content:i+we}),c.createElement("meta",{name:"twitter:card",content:"summary"}),c.createElement("meta",{name:"twitter:site",content:u}),c.createElement("meta",{name:"twitter:creator",content:u}))}},4397:function(e,t,n){"use strict";var r=n(1597);t.Z=function(){return(0,r.useStaticQuery)("2715279810").site.siteMetadata}}}]);
//# sourceMappingURL=commons-cd55b9c57d3a940c36d5.js.map