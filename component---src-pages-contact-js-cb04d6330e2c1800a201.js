"use strict";(self.webpackChunksikes_and_carlton=self.webpackChunksikes_and_carlton||[]).push([[501],{9357:function(e,t,a){var r=a(7294),l=a(1883);t.Z=function(e){var t,a;let{description:n,title:s,children:o}=e;const{site:i}=(0,l.useStaticQuery)("63159454"),c=n||i.siteMetadata.description,d=null===(t=i.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,d?`${s} | ${d}`:s),r.createElement("meta",{name:"description",content:c}),r.createElement("meta",{property:"og:title",content:s}),r.createElement("meta",{property:"og:description",content:c}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=i.siteMetadata)||void 0===a?void 0:a.author)||""}),r.createElement("meta",{name:"twitter:title",content:s}),r.createElement("meta",{name:"twitter:description",content:c}),o)}},4267:function(e,t,a){a.r(t),a.d(t,{default:function(){return D}});var r=a(7294),l=a(9303),n=a(9357),s=a(4184),o=a.n(s),i=a(5697),c=a.n(i),d=a(3818),m=a(1377),f=a(6792),p=a(5893);const u=r.forwardRef((({id:e,bsPrefix:t,className:a,type:l="checkbox",isValid:n=!1,isInvalid:s=!1,as:i="input",...c},d)=>{const{controlId:u}=(0,r.useContext)(m.Z);return t=(0,f.vE)(t,"form-check-input"),(0,p.jsx)(i,{...c,ref:d,type:l,id:e||u,className:o()(a,t,n&&"is-valid",s&&"is-invalid")})}));u.displayName="FormCheckInput";var v=u;const b=r.forwardRef((({bsPrefix:e,className:t,htmlFor:a,...l},n)=>{const{controlId:s}=(0,r.useContext)(m.Z);return e=(0,f.vE)(e,"form-check-label"),(0,p.jsx)("label",{...l,ref:n,htmlFor:a||s,className:o()(t,e)})}));b.displayName="FormCheckLabel";var y=b;const x=r.forwardRef((({id:e,bsPrefix:t,bsSwitchPrefix:a,inline:l=!1,reverse:n=!1,disabled:s=!1,isValid:i=!1,isInvalid:c=!1,feedbackTooltip:u=!1,feedback:b,feedbackType:x,className:h,style:E,title:N="",type:w="checkbox",label:F,children:g,as:j="input",...I},C)=>{t=(0,f.vE)(t,"form-check"),a=(0,f.vE)(a,"form-switch");const{controlId:k}=(0,r.useContext)(m.Z),Z=(0,r.useMemo)((()=>({controlId:e||k})),[k,e]),R=!g&&null!=F&&!1!==F||function(e,t){return r.Children.toArray(e).some((e=>r.isValidElement(e)&&e.type===t))}(g,y),$=(0,p.jsx)(v,{...I,type:"switch"===w?"checkbox":w,ref:C,isValid:i,isInvalid:c,disabled:s,as:j});return(0,p.jsx)(m.Z.Provider,{value:Z,children:(0,p.jsx)("div",{style:E,className:o()(h,R&&t,l&&`${t}-inline`,n&&`${t}-reverse`,"switch"===w&&a),children:g||(0,p.jsxs)(p.Fragment,{children:[$,R&&(0,p.jsx)(y,{title:N,children:F}),b&&(0,p.jsx)(d.Z,{type:x,tooltip:u,children:b})]})})})}));x.displayName="FormCheck";var h=Object.assign(x,{Input:v,Label:y}),E=a(4716);const N=r.forwardRef((({className:e,bsPrefix:t,as:a="div",...r},l)=>(t=(0,f.vE)(t,"form-floating"),(0,p.jsx)(a,{ref:l,className:o()(e,t),...r}))));N.displayName="FormFloating";var w=N;const F=r.forwardRef((({controlId:e,as:t="div",...a},l)=>{const n=(0,r.useMemo)((()=>({controlId:e})),[e]);return(0,p.jsx)(m.Z.Provider,{value:n,children:(0,p.jsx)(t,{...a,ref:l})})}));F.displayName="FormGroup";var g=F,j=(a(2473),a(1555));const I=r.forwardRef((({as:e="label",bsPrefix:t,column:a=!1,visuallyHidden:l=!1,className:n,htmlFor:s,...i},c)=>{const{controlId:d}=(0,r.useContext)(m.Z);t=(0,f.vE)(t,"form-label");let u="col-form-label";"string"==typeof a&&(u=`${u} ${u}-${a}`);const v=o()(n,t,l&&"visually-hidden",a&&u);return s=s||d,a?(0,p.jsx)(j.Z,{ref:c,as:"label",className:v,htmlFor:s,...i}):(0,p.jsx)(e,{ref:c,className:v,htmlFor:s,...i})}));I.displayName="FormLabel";var C=I;const k=r.forwardRef((({bsPrefix:e,className:t,id:a,...l},n)=>{const{controlId:s}=(0,r.useContext)(m.Z);return e=(0,f.vE)(e,"form-range"),(0,p.jsx)("input",{...l,type:"range",ref:n,className:o()(t,e),id:a||s})}));k.displayName="FormRange";var Z=k;const R=r.forwardRef((({bsPrefix:e,size:t,htmlSize:a,className:l,isValid:n=!1,isInvalid:s=!1,id:i,...c},d)=>{const{controlId:u}=(0,r.useContext)(m.Z);return e=(0,f.vE)(e,"form-select"),(0,p.jsx)("select",{...c,size:a,ref:d,className:o()(l,e,t&&`${e}-${t}`,n&&"is-valid",s&&"is-invalid"),id:i||u})}));R.displayName="FormSelect";var $=R;const P=r.forwardRef((({bsPrefix:e,className:t,as:a="small",muted:r,...l},n)=>(e=(0,f.vE)(e,"form-text"),(0,p.jsx)(a,{...l,ref:n,className:o()(t,e,r&&"text-muted")}))));P.displayName="FormText";var L=P;const S=r.forwardRef(((e,t)=>(0,p.jsx)(h,{...e,ref:t,type:"switch"})));S.displayName="Switch";var T=Object.assign(S,{Input:h.Input,Label:h.Label});const G=r.forwardRef((({bsPrefix:e,className:t,children:a,controlId:r,label:l,...n},s)=>(e=(0,f.vE)(e,"form-floating"),(0,p.jsxs)(g,{ref:s,className:o()(t,e),controlId:r,...n,children:[a,(0,p.jsx)("label",{htmlFor:r,children:l})]}))));G.displayName="FloatingLabel";var z=G;const O={_ref:c().any,validated:c().bool,as:c().elementType},V=r.forwardRef((({className:e,validated:t,as:a="form",...r},l)=>(0,p.jsx)(a,{...r,ref:l,className:o()(e,t&&"was-validated")})));V.displayName="Form",V.propTypes=O;var _=Object.assign(V,{Group:g,Control:E.Z,Floating:w,Check:h,Switch:T,Label:C,Text:L,Range:Z,Select:$,FloatingLabel:z}),M=a(5005);var q=()=>r.createElement(_,{action:"https://docs.google.com/forms/d/e/1FAIpQLSeCGD6u9Hh-WE66PJlCEoBVBmwvKSDJatyZXmYCv8LhUDRFpg/formResponse",method:"POST",target:"_blank"},r.createElement(_.Group,{controlId:"name"},r.createElement(_.Label,null,"Name"),r.createElement(_.Control,{type:"text",name:"entry.222030724",required:!0})),r.createElement(_.Group,{controlId:"email"},r.createElement(_.Label,null,"Email"),r.createElement(_.Control,{type:"email",name:"entry.1989085065",required:!0})),r.createElement(_.Group,{controlId:"phone"},r.createElement(_.Label,null,"Phone Number"),r.createElement(_.Control,{type:"tel",name:"entry.286980625",required:!0})),r.createElement(_.Group,{controlId:"details"},r.createElement(_.Label,null,"Details"),r.createElement(_.Control,{as:"textarea",name:"entry.1652381296",required:!0})),r.createElement(_.Group,{controlId:"address"},r.createElement(_.Label,null,"Physical Address"),r.createElement(_.Control,{as:"textarea",name:"entry.245607667"})),r.createElement(M.Z,{type:"submit"},"Submit"));var D=()=>r.createElement(l.Z,null,r.createElement(n.Z,{title:"Contact Us"}),r.createElement(q,null))},5005:function(e,t,a){var r=a(4184),l=a.n(r),n=a(7294),s=a(861),o=a(6792),i=a(5893);const c=n.forwardRef((({as:e,bsPrefix:t,variant:a="primary",size:r,active:n=!1,disabled:c=!1,className:d,...m},f)=>{const p=(0,o.vE)(t,"btn"),[u,{tagName:v}]=(0,s.FT)({tagName:e,disabled:c,...m}),b=v;return(0,i.jsx)(b,{...u,...m,ref:f,disabled:c,className:l()(d,p,n&&"active",a&&`${p}-${a}`,r&&`${p}-${r}`,m.href&&c&&"disabled")})}));c.displayName="Button",t.Z=c},3818:function(e,t,a){var r=a(4184),l=a.n(r),n=a(7294),s=a(5697),o=a.n(s),i=a(5893);const c={type:o().string,tooltip:o().bool,as:o().elementType},d=n.forwardRef((({as:e="div",className:t,type:a="valid",tooltip:r=!1,...n},s)=>(0,i.jsx)(e,{...n,ref:s,className:l()(t,`${a}-${r?"tooltip":"feedback"}`)})));d.displayName="Feedback",d.propTypes=c,t.Z=d},1377:function(e,t,a){const r=a(7294).createContext({});t.Z=r},4716:function(e,t,a){var r=a(4184),l=a.n(r),n=a(7294),s=(a(2473),a(3818)),o=a(1377),i=a(6792),c=a(5893);const d=n.forwardRef((({bsPrefix:e,type:t,size:a,htmlSize:r,id:s,className:d,isValid:m=!1,isInvalid:f=!1,plaintext:p,readOnly:u,as:v="input",...b},y)=>{const{controlId:x}=(0,n.useContext)(o.Z);return e=(0,i.vE)(e,"form-control"),(0,c.jsx)(v,{...b,type:t,size:r,ref:y,readOnly:u,id:s||x,className:l()(d,p?`${e}-plaintext`:e,a&&`${e}-${a}`,"color"===t&&`${e}-color`,m&&"is-valid",f&&"is-invalid")})}));d.displayName="FormControl",t.Z=Object.assign(d,{Feedback:s.Z})},2473:function(e){var t=function(){};e.exports=t}}]);
//# sourceMappingURL=component---src-pages-contact-js-cb04d6330e2c1800a201.js.map