(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[786],{50676:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},87329:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(50676);var a=r(82961);function o(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},82961:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(50676);function a(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}},94044:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(67294),a=r(6454),o=r(55088),s=Math.pow(2,31)-1;function i(e,t,r){var n=r-Date.now();e.current=n<=s?setTimeout(t,n):setTimeout((function(){return i(e,t,r)}),s)}function c(){var e=(0,a.Z)(),t=(0,n.useRef)();return(0,o.Z)((function(){return clearTimeout(t.current)})),(0,n.useMemo)((function(){var r=function(){return clearTimeout(t.current)};return{set:function(n,a){void 0===a&&(a=0),e()&&(r(),a<=s?t.current=setTimeout(n,a):i(t,n,Date.now()+a))},clear:r}}),[])}},25236:function(e,t,r){"use strict";var n=r(85893),a=r(24479),o=r(34051),s=r(31555),i=r(41664),c=r(67568);t.Z=function(e){var t=e.title,r=e.description,l=e.tags,u=e.filename,f=e.favorite,d=e.onClickFavorite,m=f?"fa fa-bookmark fa-sm fa-2x":"fa fa-bookmark-o fa-sm fa-2x",v=f?"delete":"add",x=f?"favorite bookmark selected":"favorite bookmark";return(0,n.jsx)(a.Z,{style:{backgroundColor:"#dae2ef",flexBasis:"30%"},children:(0,n.jsxs)(a.Z.Body,{children:[(0,n.jsx)(a.Z.Title,{className:"text-capitalize",children:(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(s.Z,{children:(0,n.jsx)(i.default,{href:"/".concat(u),children:t})}),(0,n.jsx)(s.Z,{xs:"auto",className:["d-flex","justify-content-end"].join(" "),children:(0,n.jsx)("button",{"aria-label":x,tabIndex:"0",onClick:function(){return d(v,u,{title:t,description:r,tags:l})},style:{backgroundColor:"transparent"},className:"border-0",children:(0,n.jsx)("span",{className:m,style:{color:"#2b6242"},"aria-hidden":"true"})})})]})}),(0,n.jsx)(c.Z,{tags:l}),(0,n.jsx)(a.Z.Text,{children:r})]})})}},18737:function(e,t,r){"use strict";var n=r(85893),a=r(67294),o=r(26396);t.Z=function(e){var t=e.description,r=(0,a.useState)(!0),s=r[0],i=r[1],c=function(){i(!s)};return(0,a.useEffect)((function(){setTimeout((function(){c()}),2500)}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.Z,{onClose:c,show:s,animation:!0,children:[(0,n.jsxs)(o.Z.Header,{children:[(0,n.jsx)("strong",{className:"mr-auto",children:"Notification"}),(0,n.jsx)("small",{children:"Just now"})]}),(0,n.jsx)(o.Z.Body,{children:t})]})})}},67568:function(e,t,r){"use strict";var n=r(85893),a=r(85466),o=r.n(a);t.Z=function(e){var t=e.tags;return(0,n.jsx)("div",{className:["d-flex","flex-row","flex-wrap","mb-2",o().tags].join(" "),children:t.map((function(e){return(0,n.jsx)("p",{className:["text-capitalize","mb-1 mr-1","text-truncate","px-2",o().tag].join(" "),children:e},e)}))})}},85466:function(e){e.exports={tag:"Tags_tag__2sw_z",tags:"Tags_tags__1ysPp"}},24479:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(89578),a=r(38829),o=r(94184),s=r.n(o),i=r(67294),c=r(76792),l=r(44680),u=r(39602),f=i.createContext(null);f.displayName="CardContext";var d=f,m=i.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,l=e.variant,u=e.as,f=void 0===u?"img":u,d=(0,a.Z)(e,["bsPrefix","className","variant","as"]),m=(0,c.vE)(r,"card-img");return i.createElement(f,(0,n.Z)({ref:t,className:s()(l?m+"-"+l:m,o)},d))}));m.displayName="CardImg",m.defaultProps={variant:null};var v=m,x=(0,u.Z)("h5"),b=(0,u.Z)("h6"),Z=(0,l.Z)("card-body"),h=(0,l.Z)("card-title",{Component:x}),p=(0,l.Z)("card-subtitle",{Component:b}),y=(0,l.Z)("card-link",{Component:"a"}),N=(0,l.Z)("card-text",{Component:"p"}),g=(0,l.Z)("card-header"),j=(0,l.Z)("card-footer"),C=(0,l.Z)("card-img-overlay"),E=i.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,l=e.bg,u=e.text,f=e.border,m=e.body,v=e.children,x=e.as,b=void 0===x?"div":x,h=(0,a.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),p=(0,c.vE)(r,"card"),y=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:p+"-header"}}),[p]);return i.createElement(d.Provider,{value:y},i.createElement(b,(0,n.Z)({ref:t},h,{className:s()(o,p,l&&"bg-"+l,u&&"text-"+u,f&&"border-"+f)}),m?i.createElement(Z,null,v):v))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=v,E.Title=h,E.Subtitle=p,E.Body=Z,E.Link=y,E.Text=N,E.Header=g,E.Footer=j,E.ImgOverlay=C;var w=E},31555:function(e,t,r){"use strict";var n=r(89578),a=r(38829),o=r(94184),s=r.n(o),i=r(67294),c=r(76792),l=["xl","lg","md","sm","xs"],u=i.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,u=e.as,f=void 0===u?"div":u,d=(0,a.Z)(e,["bsPrefix","className","as"]),m=(0,c.vE)(r,"col"),v=[],x=[];return l.forEach((function(e){var t,r,n,a=d[e];if(delete d[e],"object"===typeof a&&null!=a){var o=a.span;t=void 0===o||o,r=a.offset,n=a.order}else t=a;var s="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+m+s:""+m+s+"-"+t),null!=n&&x.push("order"+s+"-"+n),null!=r&&x.push("offset"+s+"-"+r)})),v.length||v.push(m),i.createElement(f,(0,n.Z)({},d,{ref:t,className:s().apply(void 0,[o].concat(v,x))}))}));u.displayName="Col",t.Z=u},34051:function(e,t,r){"use strict";var n=r(89578),a=r(38829),o=r(94184),s=r.n(o),i=r(67294),c=r(76792),l=["xl","lg","md","sm","xs"],u=i.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,u=e.noGutters,f=e.as,d=void 0===f?"div":f,m=(0,a.Z)(e,["bsPrefix","className","noGutters","as"]),v=(0,c.vE)(r,"row"),x=v+"-cols",b=[];return l.forEach((function(e){var t,r=m[e];delete m[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=r&&"object"===typeof r?r.cols:r)&&b.push(""+x+n+"-"+t)})),i.createElement(d,(0,n.Z)({ref:t},m,{className:s().apply(void 0,[o,v,u&&"no-gutters"].concat(b))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.Z=u},26396:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(89578),a=r(38829),o=r(67294),s=r(94184),i=r.n(s),c=r(94044),l=r(41068),u=r(96895),f=r(76792),d=r(41485),m=o.createContext({onClose:function(){}}),v=o.forwardRef((function(e,t){var r=e.bsPrefix,s=e.closeLabel,c=e.closeButton,l=e.className,v=e.children,x=(0,a.Z)(e,["bsPrefix","closeLabel","closeButton","className","children"]);r=(0,f.vE)(r,"toast-header");var b=(0,o.useContext)(m),Z=(0,u.Z)((function(e){b&&b.onClose&&b.onClose(e)}));return o.createElement("div",(0,n.Z)({ref:t},x,{className:i()(r,l)}),v,c&&o.createElement(d.Z,{label:s,onClick:Z,className:"ml-2 mb-1","data-dismiss":"toast"}))}));v.displayName="ToastHeader",v.defaultProps={closeLabel:"Close",closeButton:!0};var x=v,b=(0,r(44680).Z)("toast-body"),Z=o.forwardRef((function(e,t){var r=e.bsPrefix,s=e.className,u=e.children,d=e.transition,v=void 0===d?l.Z:d,x=e.show,b=void 0===x||x,Z=e.animation,h=void 0===Z||Z,p=e.delay,y=void 0===p?3e3:p,N=e.autohide,g=void 0!==N&&N,j=e.onClose,C=(0,a.Z)(e,["bsPrefix","className","children","transition","show","animation","delay","autohide","onClose"]);r=(0,f.vE)(r,"toast");var E=(0,o.useRef)(y),w=(0,o.useRef)(j);(0,o.useEffect)((function(){E.current=y,w.current=j}),[y,j]);var k=(0,c.Z)(),P=!(!g||!b),T=(0,o.useCallback)((function(){P&&(null==w.current||w.current())}),[P]);(0,o.useEffect)((function(){k.set(T,E.current)}),[k,T]);var _=(0,o.useMemo)((function(){return{onClose:j}}),[j]),R=!(!v||!h),B=o.createElement("div",(0,n.Z)({},C,{ref:t,className:i()(r,s,!R&&(b?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}),u);return o.createElement(m.Provider,{value:_},R&&v?o.createElement(v,{in:b,unmountOnExit:!0},B):B)}));Z.displayName="Toast";var h=Object.assign(Z,{Body:b,Header:x})}}]);