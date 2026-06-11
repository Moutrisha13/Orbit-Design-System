import{j as e}from"./iframe-BbtEY58W.js";import{c as Y}from"./createLucideIcon-CO73uvZU.js";import{M as F}from"./minus-BUZ_GBx5.js";import"./preload-helper-C1FmrZbK.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=Y("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),$={large:20,medium:16,small:14},G={large:13,medium:11,small:9},J={large:15,medium:14,small:13};function M({state:p="checked",size:d="medium",disabled:t=!1,showLabel:h=!0,showHint:f=!1,label:O="Accept terms and conditions",hint:Z="You must agree to our terms to continue.",onChange:m}){const u=$[d],a=G[d],B=J[d],b=p==="checked",g=p==="indeterminate",k=b||g,K=t?"#f3f4f6":k?"#068ae9":"#ffffff",N=t?"#d1d5db":k?"#068ae9":"#d1d5db";return e.jsxs("div",{style:{display:"inline-flex",alignItems:"flex-start",gap:8,opacity:t?.5:1,cursor:t?"not-allowed":"pointer",fontFamily:"var(--font-family-primary)"},onClick:()=>!t&&(m==null?void 0:m()),children:[e.jsxs("div",{style:{width:u,height:u,minWidth:u,borderRadius:4,border:`1.5px solid ${N}`,backgroundColor:K,display:"flex",alignItems:"center",justifyContent:"center",marginTop:1,transition:"background-color 150ms, border-color 150ms"},children:[b&&e.jsx(X,{style:{width:a,height:a,color:"#ffffff",strokeWidth:3}}),g&&e.jsx(F,{style:{width:a,height:a,color:"#ffffff",strokeWidth:3}})]}),(h||f)&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[h&&e.jsx("span",{style:{fontSize:B,fontWeight:500,color:t?"#9ca3af":"#111827",lineHeight:"20px"},children:O}),f&&e.jsx("span",{style:{fontSize:13,fontWeight:400,color:"#6b7280",lineHeight:"18px"},children:Z})]})]})}M.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{state:{required:!1,tsType:{name:"union",raw:"'unchecked' | 'checked' | 'indeterminate'",elements:[{name:"literal",value:"'unchecked'"},{name:"literal",value:"'checked'"},{name:"literal",value:"'indeterminate'"}]},description:"",defaultValue:{value:"'checked'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showHint:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Accept terms and conditions'",computed:!1}},hint:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'You must agree to our terms to continue.'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ae={title:"Components/Checkbox",component:M,tags:["autodocs"],argTypes:{state:{control:"select",options:["unchecked","checked","indeterminate"]},size:{control:"select",options:["large","medium","small"]},disabled:{control:"boolean"},showLabel:{control:"boolean"},showHint:{control:"boolean"},label:{control:"text"},hint:{control:"text"}}},s={args:{state:"checked",size:"medium",showLabel:!0,label:"Accept terms and conditions"}},r={args:{state:"unchecked",size:"medium",showLabel:!0,label:"Subscribe to newsletter"}},n={args:{state:"indeterminate",size:"medium",showLabel:!0,label:"Select all items"}},o={args:{state:"unchecked",size:"medium",showLabel:!0,showHint:!0,label:"Remember me",hint:"Keep me signed in on this device."}},l={args:{state:"unchecked",size:"medium",disabled:!0,showLabel:!0,label:"Unavailable option"}},i={args:{state:"checked",size:"large",showLabel:!0,label:"Large checkbox"}},c={args:{state:"checked",size:"small",showLabel:!0,label:"Small checkbox"}};var x,w,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    state: 'checked',
    size: 'medium',
    showLabel: true,
    label: 'Accept terms and conditions'
  }
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var S,v,L;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    state: 'unchecked',
    size: 'medium',
    showLabel: true,
    label: 'Subscribe to newsletter'
  }
}`,...(L=(v=r.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var z,I,j;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    state: 'indeterminate',
    size: 'medium',
    showLabel: true,
    label: 'Select all items'
  }
}`,...(j=(I=n.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var T,q,C;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    state: 'unchecked',
    size: 'medium',
    showLabel: true,
    showHint: true,
    label: 'Remember me',
    hint: 'Keep me signed in on this device.'
  }
}`,...(C=(q=o.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var H,V,W;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    state: 'unchecked',
    size: 'medium',
    disabled: true,
    showLabel: true,
    label: 'Unavailable option'
  }
}`,...(W=(V=l.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var _,E,A;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    state: 'checked',
    size: 'large',
    showLabel: true,
    label: 'Large checkbox'
  }
}`,...(A=(E=i.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var D,R,U;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    state: 'checked',
    size: 'small',
    showLabel: true,
    label: 'Small checkbox'
  }
}`,...(U=(R=c.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const se=["Default","Unchecked","Indeterminate","WithHint","Disabled","Large","Small"];export{s as Default,l as Disabled,n as Indeterminate,i as Large,c as Small,r as Unchecked,o as WithHint,se as __namedExportsOrder,ae as default};
