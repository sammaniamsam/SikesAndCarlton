"use strict";(self.webpackChunksikes_and_carlton=self.webpackChunksikes_and_carlton||[]).push([[501],{5037:function(e,a,t){t.r(a),t.d(a,{Head:function(){return K},default:function(){return Q}});var r=t(7294),l=t(2819),s=t(9357),n=t(4184),o=t.n(n),i=t(5697),c=t.n(i),d=t(5893);const m={type:c().string,tooltip:c().bool,as:c().elementType},f=r.forwardRef((({as:e="div",className:a,type:t="valid",tooltip:r=!1,...l},s)=>(0,d.jsx)(e,{...l,ref:s,className:o()(a,`${t}-${r?"tooltip":"feedback"}`)})));f.displayName="Feedback",f.propTypes=m;var p=f;var u=r.createContext({}),b=t(6792);const v=r.forwardRef((({id:e,bsPrefix:a,className:t,type:l="checkbox",isValid:s=!1,isInvalid:n=!1,as:i="input",...c},m)=>{const{controlId:f}=(0,r.useContext)(u);return a=(0,b.vE)(a,"form-check-input"),(0,d.jsx)(i,{...c,ref:m,type:l,id:e||f,className:o()(t,a,s&&"is-valid",n&&"is-invalid")})}));v.displayName="FormCheckInput";var x=v;const y=r.forwardRef((({bsPrefix:e,className:a,htmlFor:t,...l},s)=>{const{controlId:n}=(0,r.useContext)(u);return e=(0,b.vE)(e,"form-check-label"),(0,d.jsx)("label",{...l,ref:s,htmlFor:t||n,className:o()(a,e)})}));y.displayName="FormCheckLabel";var h=y;const N=r.forwardRef((({id:e,bsPrefix:a,bsSwitchPrefix:t,inline:l=!1,reverse:s=!1,disabled:n=!1,isValid:i=!1,isInvalid:c=!1,feedbackTooltip:m=!1,feedback:f,feedbackType:v,className:y,style:N,title:E="",type:I="checkbox",label:j,children:F,as:k="input",...w},g)=>{a=(0,b.vE)(a,"form-check"),t=(0,b.vE)(t,"form-switch");const{controlId:C}=(0,r.useContext)(u),R=(0,r.useMemo)((()=>({controlId:e||C})),[C,e]),P=!F&&null!=j&&!1!==j||function(e,a){return r.Children.toArray(e).some((e=>r.isValidElement(e)&&e.type===a))}(F,h),$=(0,d.jsx)(x,{...w,type:"switch"===I?"checkbox":I,ref:g,isValid:i,isInvalid:c,disabled:n,as:k});return(0,d.jsx)(u.Provider,{value:R,children:(0,d.jsx)("div",{style:N,className:o()(y,P&&a,l&&`${a}-inline`,s&&`${a}-reverse`,"switch"===I&&t),children:F||(0,d.jsxs)(d.Fragment,{children:[$,P&&(0,d.jsx)(h,{title:E,children:j}),f&&(0,d.jsx)(p,{type:v,tooltip:m,children:f})]})})})}));N.displayName="FormCheck";var E=Object.assign(N,{Input:x,Label:h});t(2473);const I=r.forwardRef((({bsPrefix:e,type:a,size:t,htmlSize:l,id:s,className:n,isValid:i=!1,isInvalid:c=!1,plaintext:m,readOnly:f,as:p="input",...v},x)=>{const{controlId:y}=(0,r.useContext)(u);return e=(0,b.vE)(e,"form-control"),(0,d.jsx)(p,{...v,type:a,size:l,ref:x,readOnly:f,id:s||y,className:o()(n,m?`${e}-plaintext`:e,t&&`${e}-${t}`,"color"===a&&`${e}-color`,i&&"is-valid",c&&"is-invalid")})}));I.displayName="FormControl";var j=Object.assign(I,{Feedback:p});const F=r.forwardRef((({className:e,bsPrefix:a,as:t="div",...r},l)=>(a=(0,b.vE)(a,"form-floating"),(0,d.jsx)(t,{ref:l,className:o()(e,a),...r}))));F.displayName="FormFloating";var k=F;const w=r.forwardRef((({controlId:e,as:a="div",...t},l)=>{const s=(0,r.useMemo)((()=>({controlId:e})),[e]);return(0,d.jsx)(u.Provider,{value:s,children:(0,d.jsx)(a,{...t,ref:l})})}));w.displayName="FormGroup";var g=w,C=t(1555);const R=r.forwardRef((({as:e="label",bsPrefix:a,column:t=!1,visuallyHidden:l=!1,className:s,htmlFor:n,...i},c)=>{const{controlId:m}=(0,r.useContext)(u);a=(0,b.vE)(a,"form-label");let f="col-form-label";"string"==typeof t&&(f=`${f} ${f}-${t}`);const p=o()(s,a,l&&"visually-hidden",t&&f);return n=n||m,t?(0,d.jsx)(C.Z,{ref:c,as:"label",className:p,htmlFor:n,...i}):(0,d.jsx)(e,{ref:c,className:p,htmlFor:n,...i})}));R.displayName="FormLabel";var P=R;const $=r.forwardRef((({bsPrefix:e,className:a,id:t,...l},s)=>{const{controlId:n}=(0,r.useContext)(u);return e=(0,b.vE)(e,"form-range"),(0,d.jsx)("input",{...l,type:"range",ref:s,className:o()(a,e),id:t||n})}));$.displayName="FormRange";var L=$;const S=r.forwardRef((({bsPrefix:e,size:a,htmlSize:t,className:l,isValid:s=!1,isInvalid:n=!1,id:i,...c},m)=>{const{controlId:f}=(0,r.useContext)(u);return e=(0,b.vE)(e,"form-select"),(0,d.jsx)("select",{...c,size:t,ref:m,className:o()(l,e,a&&`${e}-${a}`,s&&"is-valid",n&&"is-invalid"),id:i||f})}));S.displayName="FormSelect";var T=S;const G=r.forwardRef((({bsPrefix:e,className:a,as:t="small",muted:r,...l},s)=>(e=(0,b.vE)(e,"form-text"),(0,d.jsx)(t,{...l,ref:s,className:o()(a,e,r&&"text-muted")}))));G.displayName="FormText";var O=G;const _=r.forwardRef(((e,a)=>(0,d.jsx)(E,{...e,ref:a,type:"switch"})));_.displayName="Switch";var z=Object.assign(_,{Input:E.Input,Label:E.Label});const Z=r.forwardRef((({bsPrefix:e,className:a,children:t,controlId:r,label:l,...s},n)=>(e=(0,b.vE)(e,"form-floating"),(0,d.jsxs)(g,{ref:n,className:o()(a,e),controlId:r,...s,children:[t,(0,d.jsx)("label",{htmlFor:r,children:l})]}))));Z.displayName="FloatingLabel";var q=Z;const V={_ref:c().any,validated:c().bool,as:c().elementType},A=r.forwardRef((({className:e,validated:a,as:t="form",...r},l)=>(0,d.jsx)(t,{...r,ref:l,className:o()(e,a&&"was-validated")})));A.displayName="Form",A.propTypes=V;var H=Object.assign(A,{Group:g,Control:j,Floating:k,Check:E,Switch:z,Label:P,Text:O,Range:L,Select:T,FloatingLabel:q}),B=t(861);const M=r.forwardRef((({as:e,bsPrefix:a,variant:t="primary",size:r,active:l=!1,disabled:s=!1,className:n,...i},c)=>{const m=(0,b.vE)(a,"btn"),[f,{tagName:p}]=(0,B.FT)({tagName:e,disabled:s,...i}),u=p;return(0,d.jsx)(u,{...f,...i,ref:c,disabled:s,className:o()(n,m,l&&"active",t&&`${m}-${t}`,r&&`${m}-${r}`,i.href&&s&&"disabled")})}));M.displayName="Button";var X=M;var D=()=>{const e={marginBottom:"15px"};return r.createElement(H,{action:"https://docs.google.com/forms/d/e/1FAIpQLSdXkPPKWh6uetRc9k87uxgbSUOZqr_-fZyRH_5ZqLIhaGcYXA/formResponse",method:"POST",target:"_blank"},r.createElement(H.Group,{controlId:"name",style:e},r.createElement(H.Label,null,"Name"),r.createElement(H.Control,{type:"text",name:"entry.461958518",required:!0})),r.createElement(H.Group,{controlId:"email",style:e},r.createElement(H.Label,null,"Email"),r.createElement(H.Control,{type:"email",name:"entry.114581294",required:!0})),r.createElement(H.Group,{controlId:"phone",style:e},r.createElement(H.Label,null,"Phone Number"),r.createElement(H.Control,{type:"tel",name:"entry.517148974",required:!0})),r.createElement(H.Group,{controlId:"details",style:e},r.createElement(H.Label,null,"Details"),r.createElement(H.Control,{as:"textarea",name:"entry.958979502",required:!0})),r.createElement(H.Group,{controlId:"address",style:e},r.createElement(H.Label,null,"Physical Address"),r.createElement(H.Control,{as:"textarea",name:"entry.295656525"})),r.createElement(X,{type:"submit"},"Submit"))};const K=()=>r.createElement(s.Z,{title:"Contact"});var Q=()=>r.createElement(l.Z,null,r.createElement(s.Z,{title:"Contact"}),r.createElement(D,null))},2473:function(e){var a=function(){};e.exports=a}}]);
//# sourceMappingURL=component---src-pages-contact-js-783b2fbb09c14b3b9c71.js.map