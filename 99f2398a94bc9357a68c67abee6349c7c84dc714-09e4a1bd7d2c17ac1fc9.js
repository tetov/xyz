"use strict";(self.webpackChunktetov_xyz=self.webpackChunktetov_xyz||[]).push([[406],{8032:function(e,t,a){a.d(t,{G:function(){return q},L:function(){return f},M:function(){return k},P:function(){return C},_:function(){return i},a:function(){return s},b:function(){return m},d:function(){return d},g:function(){return g},h:function(){return o}});var r=a(7294),n=(a(2369),a(5697)),l=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(a=l[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData},d=e=>{var t,a,r;return null==(t=c(e))||null==(a=t.images)||null==(r=a.fallback)?void 0:r.src};function u(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function m(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function g(e,t,a,r,n,l,i,o){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],h=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,a=i(e,p);return r.createElement(r.Fragment,null,r.createElement(h,s({},a)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],v=function(e){let{src:t,srcSet:a,loading:n,alt:l="",shouldLoad:o}=e,c=i(e,y);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},E=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,l=i(e,b);const o=l.sizes||(null==t?void 0:t.sizes),c=r.createElement(v,s({},l,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return r.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var w;v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},E.displayName="Picture",E.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const x=["fallback"],C=function(e){let{fallback:t}=e,a=i(e,x);return t?r.createElement(E,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};C.displayName="Placeholder",C.propTypes={fallback:n.string,sources:null==(w=E.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(E,s({},e)),r.createElement("noscript",null,r.createElement(E,s({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=E.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],S=e=>e.replace(/\n/g,""),I=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},T={image:l().object.isRequired,alt:I},_=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],P=["style","className"],j=new Set;let O,M;const R=function(e){let{as:t="div",image:n,style:l,backgroundColor:c,className:d,class:m,onStartLoad:g,onLoad:p,onError:h}=e,f=i(e,_);const{width:y,height:b,layout:v}=n,E=u(y,b,v),{style:w,className:x}=E,C=i(E,P),k=(0,r.useRef)(),L=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const N=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,y,b);return(0,r.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return M=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(L);if(M&&j.has(L))return;let t,r;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;k.current&&(k.current.innerHTML=a(s({isLoading:!0,isLoaded:j.has(L),image:n},f)),j.has(L)||(t=requestAnimationFrame((()=>{k.current&&(r=i(k.current,L,j,l,g,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{j.has(L)&&M&&(k.current.innerHTML=M(s({isLoading:j.has(L),isLoaded:j.has(L),image:n},f)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},C,{style:s({},w,l,{backgroundColor:c}),className:x+(d?" "+d:""),ref:k,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},q=(0,r.memo)((function(e){return e.image?(0,r.createElement)(R,e):null}));q.propTypes=T,q.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:a,__imageData:n,__error:l}=t,o=i(t,A);return l&&console.warn(l),n?r.createElement(e,s({image:n},o)):(console.warn("Image not loaded",a),null)}}const F=z((function(e){let{as:t="div",className:a,class:n,style:l,image:o,loading:c="lazy",imgClassName:d,imgStyle:p,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=i(e,L);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),p=s({objectFit:y,objectPosition:b,backgroundColor:h},p);const{width:E,height:w,layout:x,images:I,placeholder:T,backgroundColor:_}=o,P=u(E,w,x),{style:j,className:O}=P,M=i(P,N),R={fallback:void 0,sources:[]};return I.fallback&&(R.fallback=s({},I.fallback,{srcSet:I.fallback.srcSet?S(I.fallback.srcSet):void 0})),I.sources&&(R.sources=I.sources.map((e=>s({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,s({},M,{style:s({},j,l,{backgroundColor:h}),className:O+(a?" "+a:"")}),r.createElement(f,{layout:x,width:E,height:w},r.createElement(C,s({},g(T,!1,x,E,w,_,y,b))),r.createElement(k,s({"data-gatsby-image-ssr":"",className:d},v,m("eager"===c,!1,R,c,p)))))})),H=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),D={src:l().string.isRequired,alt:I,width:H,height:H,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};F.displayName="StaticImage",F.propTypes=D;const G=z(q);G.displayName="StaticImage",G.propTypes=D},2369:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,s=new RegExp("^"+l.source),i=new RegExp(l.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,r,n)=>{let l=!1,s=!1,i=!1;for(let o=0;o<e.length;o++){const c=e[o];l&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,i=s,s=!0,o++):s&&i&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),i=s,s=!1,l=!0):(l=r(c)===c&&n(c)!==c,i=s,s=n(c)===c&&r(c)!==c)}return e})(e,l,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,l):l(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,o.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},4666:function(e,t,a){a.d(t,{d2:function(){return u},m7:function(){return m},p2:function(){return g}});var r=a(9602),n=a(5278),l=a.n(n),s=a(4184),i=a.n(s),o=a(1883),c=a(8032),d=a(7294);const u=e=>{let{pathname:t,className:a="",html:n,title:s,date:u,machineReadableDate:m,bannerImageData:g,imageAlt:p,imageCaption:h,articleMarkup:f}=e;return d.createElement("article",{className:i()(a,null==f?void 0:f.articleMF2Class,"mx-auto"),itemScope:!0,itemType:(null==f?void 0:f.articleType)&&"http://schema.org/"+f.articleType},d.createElement("header",{className:"mb-2"},d.createElement(r.Z,{itemProp:"headline",mfClass:"p-name"},s)),g&&d.createElement("figure",null,d.createElement(c.G,{alt:p||"Cover image for "+s,image:g,loading:"eager",className:"mt-4 mb-2 shadow-sm hover:shadow-md transition-shadow duration-200"}),h&&d.createElement("figcaption",{className:"mt-2 mb-4 italic",dangerouslySetInnerHTML:{__html:h}})),d.createElement("div",{className:"e-content max-w-2xl mx-auto",dangerouslySetInnerHTML:{__html:n},itemProp:null==f?void 0:f.bodyItemProp}),d.createElement("footer",{className:"text-sm text-center italic"},d.createElement(o.Link,{to:t,className:"u-url"},d.createElement(l(),{className:"w-8 h-8 rounded-full mx-auto mt-12 mb-6"}),d.createElement("time",{className:"dt-published",itemProp:"dateCreated",dateTime:m},u))))},m=e=>{let{nodes:t}=e;return d.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-8"},t.map((e=>d.createElement(g,Object.assign({key:e.id},e)))))},g=e=>{var t;let{excerpt:a,fields:{slug:r,category:n},frontmatter:{title:l,description:s,image:i,imageAlt:u}}=e;const m=null==i||null===(t=i.childImageSharp)||void 0===t?void 0:t.previewImg;if("projs"===n&&!m)throw new Error("Missing preview image.");if(!(s||a))throw new Error("Missing blurb (neither description nor excerpt present).");return d.createElement("div",null,d.createElement(o.Link,{to:"/"+r+"/",className:"link-style"},m&&d.createElement(c.G,{alt:u||"Cover image for "+l,image:m,loading:"lazy",className:"mb-5"}),d.createElement("h2",{className:"text-xl mb-3 leading-snug"},l)),d.createElement("div",{className:"mb-4"},d.createElement("p",{className:"text-lg leading-relaxed mb-4",dangerouslySetInnerHTML:{__html:s||a||""}})))}},9602:function(e,t,a){var r=a(4184),n=a.n(r),l=a(7294);const s=e=>{let{itemProp:t,mfClass:a,children:r}=e;return l.createElement("h1",{itemProp:t,className:n()(a,"text-4xl font-semibold leading-relaxed text-center")},r)};t.Z=e=>{let{children:t,itemProp:a="headline",mfClass:r="p-name",articleHeader:n=!0}=e;const i={className:"mt-4 mb-8"},o={itemProp:a,mfClass:r,children:t};return l.createElement(l.Fragment,null,n?l.createElement("header",i,l.createElement(s,o)):l.createElement("div",i,l.createElement(s,o)))}}}]);
//# sourceMappingURL=99f2398a94bc9357a68c67abee6349c7c84dc714-09e4a1bd7d2c17ac1fc9.js.map