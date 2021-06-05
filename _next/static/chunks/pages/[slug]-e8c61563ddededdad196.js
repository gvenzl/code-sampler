(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{18737:function(e,t,n){"use strict";var r=n(85893),a=n(67294),o=n(26396);t.Z=function(e){var t=e.description,n=(0,a.useState)(!0),i=n[0],s=n[1],l=function(){s(!i)};return(0,a.useEffect)((function(){setTimeout((function(){l()}),2500)}),[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.Z,{onClose:l,show:i,animation:!0,children:[(0,r.jsxs)(o.Z.Header,{children:[(0,r.jsx)("strong",{className:"mr-auto",children:"Notification"}),(0,r.jsx)("small",{children:"Just now"})]}),(0,r.jsx)(o.Z.Body,{children:t})]})})}},67568:function(e,t,n){"use strict";var r=n(85893),a=n(85466),o=n.n(a);t.Z=function(e){var t=e.tags;return(0,r.jsx)("div",{className:["d-flex","flex-row","flex-wrap","mb-2",o().tags].join(" "),children:t.map((function(e){return(0,r.jsx)("p",{className:["text-capitalize","mb-1 mr-1","text-truncate","px-2",o().tag].join(" "),children:e},e)}))})}},79827:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return F},default:function(){return R}});var r=n(85893),a=n(96156),o=n(87329),i=n(2949),s=n(10682),l=n(34051),c=n(31555),u=n(67294),d=(n(9675),n(61426)),f=n.n(d),m=n(10043),h=n.n(m),p=n(9008),b=n(78756),x=n.n(b),g=n(18737),j=n(26671),v=n(15293),y=n(43489),_=n(14779),k=n(36964),S=n.n(k),N=n(61738),O=n.n(N),w=n(79671),C=n.n(w),Z=function(e){var t=e.children,n=e.labels,a=e.selected,o=e.setSelected;return(0,r.jsxs)("div",{children:[(0,r.jsx)("ul",{className:C().tabsMenu,role:"list",children:n.map((function(e){var t=e===a?C().active:"";return(0,r.jsx)("li",{role:"listitem",onClick:function(){return o(e)},className:"".concat(C().tabsLabel," ").concat(t),children:(0,r.jsx)("button",{onClick:function(){return o(e)},tabIndex:"0",role:"button",style:{backgroundColor:"transparent",border:"0",padding:"0"},children:(0,r.jsx)("a",{style:{fontSize:".9rem"},children:e})})},e)}))}),t]})},B=function(e){var t=e.isSelected,n=e.children;return t?(0,r.jsx)("div",{children:n}):null},T=function(e){var t=e.children,n=e.labels,a=e.theme,o=e.toggleTheme,i=e.selected,s=e.setSelected,l=e.addAlert,c=JSON.parse(t),u={marginTop:"0",marginBottom:"0",border:"1px black solid",borderTop:"none",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px",minHeight:"3.2rem"};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(Z,{selected:i,setSelected:s,labels:n,children:c.items.map((function(e,t){return(0,r.jsxs)(B,{isSelected:i===e.label,children:[(0,r.jsxs)("div",{className:[O().iconGroup,"my-2","mx-2"].join(" "),children:[(0,r.jsx)("button",{"aria-label":"toggle theme",tabIndex:"0",className:O().iconButton,onClick:o,children:(0,r.jsx)(v.Z,{placement:"bottom",overlay:(0,r.jsx)(y.Z,{id:"tooltip-bottom",children:"Change code theme"}),children:(0,r.jsx)("span",{className:["fa fa-sun-o fa-lg","a11yDark"===a?"text-light":"text-dark"].join(" "),"aria-hidden":"true"})})}),(0,r.jsx)(S(),{className:O().iconButton,"data-clipboard-text":e.value,onClick:function(){l("Copied to clipboard")},children:(0,r.jsx)(v.Z,{placement:"bottom",overlay:(0,r.jsx)(y.Z,{id:"tooltip-copy",children:"Copy example code"}),children:(0,r.jsx)("div",{"aria-label":"copy to clipboard",tabIndex:"0",children:(0,r.jsx)("span",{className:["fa fa-copy fa-lg ","a11yDark"===a?"text-light":"text-dark"].join(" "),"aria-hidden":"true"})})})})]}),(0,r.jsx)(_.Z,{language:e.lang,style:"a11yDark"===a?j.Vg:j.E7,customStyle:u,showLineNumbers:!0,children:e.value})]},e.label)}))})})},P=n(26895),D=n.n(P),E=n(67568);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function J(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}var F=!0,R=function(e){var t=e.metaData,n=e.content,a=e.filename,d=(0,u.useState)((function(){return localStorage.getItem("theme")||"a11yLight";return"a11yLight"})),m=d[0],b=d[1],j=t.labels,v=(0,u.useState)(j[0]),y=v[0],_=v[1],k=function(){b("a11yDark"===m?"a11yLight":"a11yDark")},S=(0,u.useState)({}),N=S[0],O=S[1],w=N&&N[a]?"fa fa-bookmark fa-lg fa-2x text-light":"fa fa-bookmark-o fa-lg fa-2x text-light",C=N&&N[a]?"delete":"add",Z=N?"favorite bookmark selected":"favorite bookmark";var B=(0,u.useState)([]),P=B[0],L=B[1],F=function(e){var t=P,n=[].concat((0,o.Z)(t),[e]);L(n)},R=function(e,t,n){if("delete"===e)!function(e){N[e];var t=(0,i.Z)(N,[e].map(J));O(t),localStorage.setItem("favorites",JSON.stringify(t))}(t),F("Bookmark removed successfully!");else if("add"===e){var r=I({},N);r[t]=I({},n),O(r),localStorage.setItem("favorites",JSON.stringify(r)),F("Bookmark added successfully!")}};(0,u.useEffect)((function(){var e=function(){var e=[];e=Object.keys(JSON.parse(localStorage.getItem("preferredLanguages")||"{}"));for(var n=0;n<e.length;n++)for(var r=0;r<t.labels.length;r++)if(t.labels[r].toLowerCase().includes(e[n].toLowerCase()))return t.labels[r];return t.labels[0]}();y!==e&&_(e),O(JSON.parse(localStorage.getItem("favorites")))}),[]);var z=x()().use(h()).use(f(),{remarkReactComponents:{code:function(e){return(0,r.jsx)(T,I(I({},e),{},{theme:m,toggleTheme:k,labels:j,selected:y,setSelected:_,addAlert:F}))},h1:function(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.Z,{fluid:!0,children:(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(c.Z,{xs:9,sm:10,md:8,className:["p-0"].join(""),children:[(0,r.jsx)("h1",{className:D().sampleTitle,children:e.children}),(0,r.jsx)(E.Z,{tags:t.tags})]}),(0,r.jsx)(c.Z,{className:"d-flex justify-content-end p-0",xs:3,sm:2,md:4,children:(0,r.jsx)("button",{"data-bookmark":!0,"aria-label":Z,tabIndex:"0",onClick:function(){return R(C,a,t)},style:{backgroundColor:"transparent"},className:"border-0",children:(0,r.jsx)("span",{className:[w,D().iconButton].join(" "),"aria-hidden":"true"})})})]})})})},h2:function(e){return(0,r.jsx)("h2",{className:"ml-0",children:e.children})},table:function(e){return(0,r.jsx)("table",{border:"1",cellPadding:"5",style:{marginBottom:"1rem"},children:e.children})}}}).processSync(n).result;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(p.default,{children:[(0,r.jsx)("title",{children:t.title}),(0,r.jsx)("meta",{title:"description",content:t.description})]}),(0,r.jsx)("div",{style:{width:"80%",margin:"auto",marginBottom:"3rem"},className:"text-light",children:z}),(0,r.jsx)("div",{style:{position:"fixed",top:"4rem",right:"2rem"},children:P?P.map((function(e,t){return(0,r.jsx)(g.Z,{description:e},t)})):""})]})}},77891:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return n(79827)}])},26895:function(e){e.exports={iconButton:"CodeSample_iconButton__MhFhg",sampleTitle:"CodeSample_sampleTitle__2c3SO"}},61738:function(e){e.exports={iconButton:"CodeSnippets_iconButton__1yR1z",iconGroup:"CodeSnippets_iconGroup__1DfBn"}},79671:function(e){e.exports={tabsMenu:"Tabs_tabsMenu__jmQ5d",tabsLabel:"Tabs_tabsLabel__2d023",active:"Tabs_active__3-xYk"}},85466:function(e){e.exports={tag:"Tags_tag__2sw_z",tags:"Tags_tags__1ysPp"}},33596:function(){}},function(e){e.O(0,[146,346,774,888,179],(function(){return t=77891,e(e.s=t);var t}));var t=e.O();_N_E=t}]);