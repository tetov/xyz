"use strict";(self.webpackChunktetov_xyz=self.webpackChunktetov_xyz||[]).push([[691],{4774:function(e,t,n){var r=n(4184),a=n.n(r),l=n(7294),c=n(9352),o=n(7735);const i=e=>{let{className:t,children:n}=e;return l.createElement("span",{className:t},n)},s=e=>{let{className:t,href:n,rel:r,children:a}=e;return l.createElement("a",{className:t,href:n,rel:r,children:a})},m=new Map([["name",c.Q$W],["gender-identity",c.TA6],["email",c.YTS],["openpgp",c._K6],["telephone",c.CUj],["github",c.q7V],["instagram",c.Nrw],["twitter",c.x2F],["linkedin",c.tsq],["matrix",o.RMl],["signal",o.D83],["mastodon",c.y3U],["url",c.Utb]]);t.Z=e=>{let{label:t,text:n,url:r,hcard:c,rel:o,className:u,printFriendlyText:d,useIcon:h=!0}=e;const p=m.get(t),f={className:a()(c,u)||void 0,href:null!=r?r:void 0,rel:null!=o?o:"me external",children:l.createElement(l.Fragment,null,h&&p&&l.createElement("div",{className:"motion-safe:group-hover:animate-pulse inline-block"},l.createElement(p,{size:"1em",className:"inline","aria-hidden":!0})),l.createElement("span",{className:a()({"print:hidden":d,"pl-1":h})},n),d&&l.createElement("span",{className:"hidden print:inline pl 1"},d))},v=r?s:i;return l.createElement("div",{className:"flex group p-2"},l.createElement(v,f))}},9602:function(e,t,n){var r=n(4184),a=n.n(r),l=n(7294);const c=e=>{let{itemProp:t,mfClass:n,children:r}=e;return l.createElement("h1",{itemProp:t,className:a()(n,"text-4xl font-semibold leading-relaxed text-center")},r)};t.Z=e=>{let{children:t,itemProp:n="headline",mfClass:r="p-name",articleHeader:a=!0}=e;const o={className:"mt-4 mb-8"},i={itemProp:n,mfClass:r,children:t};return l.createElement(l.Fragment,null,a?l.createElement("header",o,l.createElement(c,i)):l.createElement("div",o,l.createElement(c,i)))}},5277:function(e,t,n){n.r(t),n.d(t,{Head:function(){return d},default:function(){return u}});var r=n(1883),a=n(7294),l=n(4774);const c=e=>{let{contactDetails:t}=e;return a.createElement("div",{className:"h-card hidden","aria-hidden":!0},t.map((e=>a.createElement(l.Z,{useIcon:!1,key:e.label,label:e.label,url:e.url,hcard:e.hcard,text:e.text,rel:e.rel}))))};var o=e=>{let{nodes:t}=e;if(1!==t.length)throw new Error("More or less than one ContactData node found");const n=t[0].contactDataList.filter((e=>{let{url:t,hcard:n}=e;return t||n}));return a.createElement(c,{contactDetails:n})};var i=n(2596),s=n(2511),m=n(9602);var u=e=>{let{location:{pathname:t},data:{allContactDataYaml:{nodes:n}}}=e;return a.createElement(s.Z,{footerChildren:a.createElement(o,{nodes:n}),pathname:t},a.createElement(m.Z,null,"Hi! I'm Anton Tetov, I'm an architect, programmer and maker. These are some of my"," ",a.createElement(r.Link,{to:"/projects",className:"link-style"},"projects"),"."," ",a.createElement(r.Link,{to:"/contact",className:"link-style"},"Would you like to say hi?")))};const d=e=>{let{location:t}=e;return a.createElement(i.Z,{pathname:t.pathname})}},4405:function(e,t,n){n.d(t,{w_:function(){return s}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(a),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function i(e){return e&&e.map((function(e,t){return r.createElement(e.tag,c({key:t},e.attr),i(e.child))}))}function s(e){return function(t){return r.createElement(m,c({attr:c({},e.attr)},t),i(e.child))}}function m(e){var t=function(t){var n,a=e.attr,l=e.size,i=e.title,s=o(e,["attr","size","title"]),m=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(a)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-d1b3c0a210ad501c05f1.js.map