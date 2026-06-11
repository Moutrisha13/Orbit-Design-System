import{j as e}from"./iframe-BbtEY58W.js";import{c as m}from"./createLucideIcon-CO73uvZU.js";import"./preload-helper-C1FmrZbK.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=m("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=m("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=m("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),re={large:48,medium:40,small:32},se={large:15,medium:14,small:13};function O({state:s="default",size:p="medium",showLabel:$=!0,showHint:A=!0,showLeftIcon:f=!1,showRightIcon:h=!1,label:N="Email address",placeholder:P="Enter your email",hint:b="We'll never share your email.",value:G="",onChange:c}){const B=re[p],J=se[p],a=s==="disabled",r=s==="error",g=s==="focused",K=r?"#ef4444":g?"#068ae9":"#d1d5db",Q=a?"#f9fafb":"#ffffff",U=g?"0 0 0 3px rgba(6,138,233,0.15)":"none",X=r?"#ef4444":"#6b7280",y=a?"#9ca3af":"#6b7280";return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,fontFamily:"var(--font-family-primary)",width:"100%"},children:[$&&e.jsx("label",{style:{fontSize:14,fontWeight:500,color:a?"#9ca3af":"#374151",lineHeight:"20px"},children:N}),e.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center"},children:[f&&e.jsx(ae,{style:{position:"absolute",left:12,width:16,height:16,color:y,pointerEvents:"none",flexShrink:0}}),e.jsx("input",{type:"text",placeholder:P,value:G,onChange:Y=>c==null?void 0:c(Y.target.value),disabled:a,readOnly:s==="focused",style:{width:"100%",height:B,padding:`0 ${h||r?40:12}px 0 ${f?40:12}px`,fontSize:J,fontFamily:"var(--font-family-primary)",fontWeight:400,color:a?"#9ca3af":"#111827",backgroundColor:Q,border:`1px solid ${K}`,borderRadius:8,outline:"none",boxShadow:U,cursor:a?"not-allowed":"text",transition:"border-color 150ms, box-shadow 150ms"}}),h&&!r&&e.jsx(ee,{style:{position:"absolute",right:12,width:16,height:16,color:y,pointerEvents:"none"}}),r&&e.jsx(Z,{style:{position:"absolute",right:12,width:16,height:16,color:"#ef4444",pointerEvents:"none"}})]}),A&&b&&e.jsx("p",{style:{margin:0,fontSize:13,fontWeight:400,color:X,lineHeight:"18px"},children:b})]})}O.__docgenInfo={description:"",methods:[],displayName:"Input",props:{state:{required:!1,tsType:{name:"union",raw:"'default' | 'focused' | 'error' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'focused'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showHint:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showLeftIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showRightIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Email address'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Enter your email'",computed:!1}},hint:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:`"We'll never share your email."`,computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:""}}};const ne={title:"Components/Input",component:O,tags:["autodocs"],argTypes:{state:{control:"select",options:["default","focused","error","disabled"]},size:{control:"select",options:["large","medium","small"]},showLabel:{control:"boolean"},showHint:{control:"boolean"},showLeftIcon:{control:"boolean"},showRightIcon:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},hint:{control:"text"}}},l={args:{state:"default",size:"medium",showLabel:!0,showHint:!0,label:"Email address",placeholder:"Enter your email"}},t={args:{state:"focused",size:"medium",showLabel:!0,showHint:!0,label:"Email address",placeholder:"Enter your email"}},o={args:{state:"error",size:"medium",showLabel:!0,showHint:!0,label:"Email address",hint:"Please enter a valid email address."}},n={args:{state:"disabled",size:"medium",showLabel:!0,label:"Email address",placeholder:"Enter your email"}},i={args:{state:"default",size:"medium",showLabel:!0,showLeftIcon:!0,showRightIcon:!0,label:"Email address"}},d={args:{state:"default",size:"large",showLabel:!0,label:"Email address",placeholder:"Enter your email"}},u={args:{state:"default",size:"small",showLabel:!0,label:"Email address",placeholder:"Enter your email"}};var w,E,x;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    state: 'default',
    size: 'medium',
    showLabel: true,
    showHint: true,
    label: 'Email address',
    placeholder: 'Enter your email'
  }
}`,...(x=(E=l.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var v,L,z;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    state: 'focused',
    size: 'medium',
    showLabel: true,
    showHint: true,
    label: 'Email address',
    placeholder: 'Enter your email'
  }
}`,...(z=(L=t.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var I,S,T;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    state: 'error',
    size: 'medium',
    showLabel: true,
    showHint: true,
    label: 'Email address',
    hint: 'Please enter a valid email address.'
  }
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var q,H,k;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    state: 'disabled',
    size: 'medium',
    showLabel: true,
    label: 'Email address',
    placeholder: 'Enter your email'
  }
}`,...(k=(H=n.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var j,V,W;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    state: 'default',
    size: 'medium',
    showLabel: true,
    showLeftIcon: true,
    showRightIcon: true,
    label: 'Email address'
  }
}`,...(W=(V=i.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var C,D,F;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    state: 'default',
    size: 'large',
    showLabel: true,
    label: 'Email address',
    placeholder: 'Enter your email'
  }
}`,...(F=(D=d.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var R,_,M;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    state: 'default',
    size: 'small',
    showLabel: true,
    label: 'Email address',
    placeholder: 'Enter your email'
  }
}`,...(M=(_=u.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};const ie=["Default","Focused","Error","Disabled","WithIcons","Large","Small"];export{l as Default,n as Disabled,o as Error,t as Focused,d as Large,u as Small,i as WithIcons,ie as __namedExportsOrder,ne as default};
