import{j as a}from"./iframe-BbtEY58W.js";import{c as O}from"./createLucideIcon-CO73uvZU.js";import{M as X}from"./minus-BUZ_GBx5.js";import"./preload-helper-C1FmrZbK.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=O("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=O("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),ae={primary:{bg:"#068ae9",hoverBg:"#056ab2",pressedBg:"#045a97",text:"#ffffff"},secondary:{bg:"#ffffff",hoverBg:"#eff6ff",pressedBg:"#dbeafe",text:"#068ae9",border:"#068ae9"},success:{bg:"#16a34a",hoverBg:"#15803d",pressedBg:"#166534",text:"#ffffff"},warning:{bg:"#d97706",hoverBg:"#b45309",pressedBg:"#92400e",text:"#ffffff"},failure:{bg:"#dc2626",hoverBg:"#b91c1c",pressedBg:"#991b1b",text:"#ffffff"},info:{bg:"#0891b2",hoverBg:"#0e7490",pressedBg:"#155e75",text:"#ffffff"}},te={large:{height:48,px:24,py:16,fontSize:17,iconSize:18,gap:8},medium:{height:40,px:20,py:12,fontSize:15,iconSize:16,gap:6},small:{height:32,px:16,py:8,fontSize:13,iconSize:14,gap:5}};function Z({variant:$="primary",state:n="default",size:G="medium",withText:h=!0,label:g="Button",showLeftIcon:J=!0,showRightIcon:K=!0,onClick:Q}){const t=ae[$],e=te[G],s=n==="disabled",r=n==="loading",U=n==="pressed"?t.pressedBg:n==="hover"?t.hoverBg:t.bg;return a.jsxs("button",{onClick:!s&&!r?Q:void 0,disabled:s,"aria-disabled":s,"aria-busy":r,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:e.gap,height:e.height,paddingLeft:e.px,paddingRight:e.px,fontSize:e.fontSize,fontFamily:"var(--font-family-primary)",fontWeight:600,lineHeight:1,color:t.text,backgroundColor:U,border:t.border?`1.5px solid ${t.border}`:"none",borderRadius:8,cursor:s?"not-allowed":r?"wait":"pointer",opacity:s?.4:1,transition:"background-color 150ms ease, opacity 150ms ease",outline:"none",whiteSpace:"nowrap"},children:[r?a.jsx(Y,{style:{width:e.iconSize,height:e.iconSize,animation:"spin 1s linear infinite"}}):a.jsxs(a.Fragment,{children:[J&&a.jsx(X,{style:{width:e.iconSize,height:e.iconSize,flexShrink:0}}),h&&a.jsx("span",{children:g}),K&&a.jsx(ee,{style:{width:e.iconSize,height:e.iconSize,flexShrink:0}})]}),r&&h&&a.jsx("span",{children:g})]})}Z.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'warning' | 'failure' | 'info'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'failure'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hover' | 'pressed' | 'loading' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'loading'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},withText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Button'",computed:!1}},showLeftIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showRightIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ce={title:"Components/Button",component:Z,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","success","warning","failure","info"]},state:{control:"select",options:["default","hover","pressed","loading","disabled"]},size:{control:"select",options:["large","medium","small"]},withText:{control:"boolean"},label:{control:"text"},showLeftIcon:{control:"boolean"},showRightIcon:{control:"boolean"}}},o={args:{variant:"primary",label:"Button",size:"medium",withText:!0,showLeftIcon:!0,showRightIcon:!0}},i={args:{variant:"secondary",label:"Button",size:"medium",withText:!0,showLeftIcon:!1,showRightIcon:!1}},l={args:{variant:"success",label:"Button",size:"medium",withText:!0,showLeftIcon:!1,showRightIcon:!1}},c={args:{variant:"warning",label:"Button",size:"medium",withText:!0,showLeftIcon:!1,showRightIcon:!1}},u={args:{variant:"failure",label:"Button",size:"medium",withText:!0,showLeftIcon:!1,showRightIcon:!1}},d={args:{variant:"info",label:"Button",size:"medium",withText:!0,showLeftIcon:!1,showRightIcon:!1}},f={args:{variant:"primary",state:"loading",label:"Button",size:"medium",withText:!0,showLeftIcon:!1,showRightIcon:!1}},m={args:{variant:"primary",label:"Button",size:"large",withText:!0,showLeftIcon:!1,showRightIcon:!1}},p={args:{variant:"primary",label:"Button",size:"small",withText:!0,showLeftIcon:!1,showRightIcon:!1}};var w,v,b;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'Button',
    size: 'medium',
    withText: true,
    showLeftIcon: true,
    showRightIcon: true
  }
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,x,I;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Button',
    size: 'medium',
    withText: true,
    showLeftIcon: false,
    showRightIcon: false
  }
}`,...(I=(x=i.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var B,z,S;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    label: 'Button',
    size: 'medium',
    withText: true,
    showLeftIcon: false,
    showRightIcon: false
  }
}`,...(S=(z=l.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var L,T,R;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    label: 'Button',
    size: 'medium',
    withText: true,
    showLeftIcon: false,
    showRightIcon: false
  }
}`,...(R=(T=c.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var j,k,q;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'failure',
    label: 'Button',
    size: 'medium',
    withText: true,
    showLeftIcon: false,
    showRightIcon: false
  }
}`,...(q=(k=u.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var V,C,P;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    label: 'Button',
    size: 'medium',
    withText: true,
    showLeftIcon: false,
    showRightIcon: false
  }
}`,...(P=(C=d.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var M,F,_;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    state: 'loading',
    label: 'Button',
    size: 'medium',
    withText: true,
    showLeftIcon: false,
    showRightIcon: false
  }
}`,...(_=(F=f.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var E,H,W;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'Button',
    size: 'large',
    withText: true,
    showLeftIcon: false,
    showRightIcon: false
  }
}`,...(W=(H=m.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var A,N,D;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'Button',
    size: 'small',
    withText: true,
    showLeftIcon: false,
    showRightIcon: false
  }
}`,...(D=(N=p.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};const ue=["Primary","Secondary","Success","Warning","Failure","Info","Loading","Large","Small"];export{u as Failure,d as Info,m as Large,f as Loading,o as Primary,i as Secondary,p as Small,l as Success,c as Warning,ue as __namedExportsOrder,ce as default};
