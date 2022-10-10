/*! For license information please see component---src-pages-contact-tsx-88297bbbf190b7b3fd94.js.LICENSE.txt */
(self.webpackChunktetov_xyz=self.webpackChunktetov_xyz||[]).push([[650],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var l=a.apply(null,n);l&&e.push(l)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function o(e){return e&&e.map((function(e,t){return r.createElement(e.tag,l({key:t},e.attr),o(e.child))}))}function u(e){return function(t){return r.createElement(s,l({attr:l({},e.attr)},t),o(e.child))}}function s(e){var t=function(t){var n,a=e.attr,i=e.size,o=e.title,u=c(e,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},7328:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r={};n.r(r),n.d(r,{RiGenderlessFill:function(){return c.TA6},RiGithubFill:function(){return c.q7V},RiInstagramFill:function(){return c.Nrw},RiKey2Fill:function(){return c._K6},RiLinkedinBoxFill:function(){return c.tsq},RiMailFill:function(){return c.YTS},RiMastodonFill:function(){return c.y3U},RiSmartphoneFill:function(){return c.CUj},RiTwitterFill:function(){return c.x2F},RiUserSmileFill:function(){return c.Q$W},SiMatrix:function(){return o.RMl},SiSignal:function(){return o.D83}});var a=n(5900),i=n.n(a),l=n(7294),c=n(7416),o=n(9463),u=function(e){var t=e.className,n=e.children;return l.createElement("span",{className:t},n)},s=function(e){var t=e.className,n=e.href,r=e.rel,a=e.children;return l.createElement("a",{className:t,href:n,rel:r,children:a})},m=function(e){var t=e.contactData,n=t.text,a=t.url,c=t.icon,o=t.hcard,m=t.rel,d=e.className,f=e.iconProp,p=void 0===f?{}:f,g=e.useIcon,h=void 0===g||g;p["aria-hidden"]=!0;var v=c?r[c]:void 0,y=m?m.join(" "):"me external",E={className:i()(o,d)||void 0,href:null!=a?a:void 0,rel:y,children:l.createElement(l.Fragment,null,c&&h&&l.createElement(v,p),n)},x=a?s:u;return l.createElement(x,E)}},5294:function(e,t,n){"use strict";n.d(t,{F:function(){return c}});var r=n(7294),a=n(2928),i=n(1082),l=function(){var e=(0,i.useStaticQuery)("1394904020").allContactData;return 1!==e.nodes.length?"":"@"+e.nodes[0].username},c=function(e){var t=e.pageTitle,n=e.description,i=e.imageUrl,c=e.pathname,o=e.children,u=(0,a.Z)(),s=u.title,m=u.description,d=u.image,f=u.siteURL,p=l(),g=n||m,h=""+f+(i||d);return r.createElement(r.Fragment,null,r.createElement("title",null,t?t+" - "+s:s),r.createElement("meta",{property:"og:title",content:t||s}),r.createElement("meta",{property:"og:site_name",content:s}),r.createElement("meta",{name:"description",content:g.trim(),id:"description"}),r.createElement("meta",{property:"og:description",content:g,id:"description"}),r.createElement("meta",{property:"og:image",content:h}),r.createElement("meta",{property:"og:url",content:""+f+(c||"")}),r.createElement("meta",{property:"og:type",content:"website",id:"og:type"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:site",content:p}),r.createElement("meta",{name:"twitter:creator",content:p}),o)}},6193:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),a=function(e){var t=e.children;return r.createElement("footer",{className:"pt-8 pb-16 items-center"},t)},i=n(1082),l=n(2928),c=function(e){var t=e.subHeading;return r.createElement("header",{className:"text-center md:justify-between pt-12 mb-16 md:mb-12"},r.createElement(i.Link,{to:"/"},r.createElement("h1",{className:"text-7xl md:text-8xl font-bold tracking-tighter leading-tight"},(0,l.Z)().title))," ",t&&r.createElement("h2",{className:"mt-4 w-2/3 text-2xl md:text-4xl font-light inline-block leading-relaxed"},t))},o=function(e){var t=e.children,n=e.subHeading;return r.createElement("div",{className:"global-wrapper min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text"},r.createElement("div",{className:"w-full md:w-3/4 lg:w-1/2 mx-auto px-5 space-y-6"},r.createElement(c,{subHeading:n}),r.createElement("main",null,t),r.createElement(a,null)))}},2928:function(e,t,n){"use strict";var r=n(1082);t.Z=function(){return(0,r.useStaticQuery)("1788884647").site.siteMetadata}},6865:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return u}});var r=n(5900),a=n.n(r),i=n(7294),l=n(7328),c=n(5294),o=n(6193),u=function(e){var t=e.location;return i.createElement(c.F,{pageTitle:"Contact",description:"Anton Tetov's contact details",pathname:t.pathname})};t.default=function(e){var t=e.data.allContactData.nodes;return i.createElement(o.Z,{subHeading:"Want to say hi?"},i.createElement("div",{className:"h-card md:px-44 text-center text-lg"},t.map((function(e){return i.createElement(l.Z,{contactData:e,key:e.id,className:a()("inline-block mx-4 whitespace-nowrap",{"hover:text-purple":Boolean(e.url)}),iconProp:{size:"2em",className:"p-2 inline-block"}})}))))}}}]);
//# sourceMappingURL=component---src-pages-contact-tsx-88297bbbf190b7b3fd94.js.map