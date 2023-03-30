"use strict";(self.webpackChunktetov_xyz=self.webpackChunktetov_xyz||[]).push([[650],{4774:function(e,t,n){var r=n(4184),l=n.n(r),a=n(7294),o=n(9352),c=n(7735);const i=e=>{let{className:t,children:n}=e;return a.createElement("span",{className:t},n)},s=e=>{let{className:t,href:n,rel:r,children:l}=e;return a.createElement("a",{className:t,href:n,rel:r,children:l})},m=new Map([["name",o.Q$W],["gender-identity",o.TA6],["email",o.YTS],["openpgp",o._K6],["telephone",o.CUj],["github",o.q7V],["instagram",o.Nrw],["twitter",o.x2F],["linkedin",o.tsq],["matrix",c.RMl],["signal",c.D83],["mastodon",o.y3U],["url",o.Utb]]);t.Z=e=>{let{label:t,text:n,url:r,hcard:o,rel:c,className:u,printFriendlyText:d,useIcon:p=!0}=e;const h=m.get(t),f={className:l()(o,u)||void 0,href:null!=r?r:void 0,rel:null!=c?c:"me external",children:a.createElement(a.Fragment,null,p&&h&&a.createElement("div",{className:"motion-safe:group-hover:animate-pulse inline-block"},a.createElement(h,{size:"1em",className:"inline","aria-hidden":!0})),a.createElement("span",{className:l()({"print:hidden":d,"pl-1":p})},n),d&&a.createElement("span",{className:"hidden print:inline pl 1"},d))},v=r?s:i;return a.createElement("div",{className:"flex group p-2"},a.createElement(v,f))}},9602:function(e,t,n){var r=n(4184),l=n.n(r),a=n(7294);const o=e=>{let{itemProp:t,mfClass:n,children:r}=e;return a.createElement("h1",{itemProp:t,className:l()(n,"text-4xl font-semibold leading-relaxed text-center")},r)};t.Z=e=>{let{children:t,itemProp:n="headline",mfClass:r="p-name",articleHeader:l=!0}=e;const c={className:"mt-4 mb-8"},i={itemProp:n,mfClass:r,children:t};return a.createElement(a.Fragment,null,l?a.createElement("header",c,a.createElement(o,i)):a.createElement("div",c,a.createElement(o,i)))}},6865:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m}});var r=n(4184),l=n.n(r),a=n(7294),o=n(4774),c=n(2596),i=n(2511),s=n(9602);const m=e=>{let{location:t}=e;return a.createElement(c.Z,{pageTitle:"Contact",description:"Anton Tetov's contact details",pathname:t.pathname})};t.default=e=>{let{location:{pathname:t},data:{allContactDataYaml:{nodes:n}}}=e;if(1!==n.length)throw new Error("More or less than one ContactData node found");const{contactDataList:r}=n[0],c=r.filter((e=>"url"!==e.label));return a.createElement(i.Z,{pathname:t},a.createElement(s.Z,null,"Want to say hi?"),a.createElement("div",{className:"h-card text-lg flex flex-row flex-wrap justify-around"},c.map((e=>{var t,n,r,c;return a.createElement(o.Z,{className:l()("mx-4 whitespace-nowrap",{"hover:text-purple":Boolean(e.url)}),text:e.text,url:null!==(t=e.url)&&void 0!==t?t:void 0,hcard:null!==(n=e.hcard)&&void 0!==n?n:void 0,rel:null!==(r=e.rel)&&void 0!==r?r:void 0,key:e.label,label:e.label,printFriendlyText:null!==(c=e.printFriendlyText)&&void 0!==c?c:void 0})}))))}},4405:function(e,t,n){n.d(t,{w_:function(){return s}});var r=n(7294),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(l),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},o.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n};function i(e){return e&&e.map((function(e,t){return r.createElement(e.tag,o({key:t},e.attr),i(e.child))}))}function s(e){return function(t){return r.createElement(m,o({attr:o({},e.attr)},t),i(e.child))}}function m(e){var t=function(t){var n,l=e.attr,a=e.size,i=e.title,s=c(e,["attr","size","title"]),m=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,s,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(l)}}}]);
//# sourceMappingURL=component---src-pages-contact-tsx-de603c7e87f2eb1ffd7d.js.map