import{j as e}from"./iframe-BbtEY58W.js";import{c as X}from"./createLucideIcon-CO73uvZU.js";import"./preload-helper-C1FmrZbK.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=X("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),M={xl:56,large:48,medium:40,small:32},W={xl:14,large:12,medium:10,small:8},Z={xl:20,large:17,medium:14,small:11},J={blue:"#3491f4",pink:"#e879a0",green:"#22c55e",purple:"#a855f7",teal:"#14b8a6"},N={online:"#22c55e",offline:"#9ca3af",busy:"#ef4444"};function L({mode:i="initials",size:m="large",initials:A="HB",bg:V="blue",src:c,showStatus:F=!0,status:R="online"}){const a=M[m],d=W[m],H=Z[m],U=J[V];return e.jsxs("div",{style:{position:"relative",display:"inline-flex",flexShrink:0},children:[e.jsxs("div",{style:{width:a,height:a,borderRadius:9999,backgroundColor:i==="image"?"#e5e7eb":U,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",flexShrink:0},children:[i==="image"&&c&&e.jsx("img",{src:c,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}}),i==="image"&&!c&&e.jsx(p,{style:{width:a*.45,height:a*.45,color:"#9ca3af"}}),i==="icon"&&e.jsx(p,{style:{width:a*.45,height:a*.45,color:"#ffffff"}}),i==="initials"&&e.jsx("span",{style:{fontSize:H,fontWeight:600,color:"#ffffff",fontFamily:"var(--font-family-primary)",lineHeight:1},children:A.slice(0,2).toUpperCase()})]}),F&&e.jsx("span",{style:{position:"absolute",bottom:0,right:0,width:d,height:d,borderRadius:9999,backgroundColor:N[R],border:"2px solid #ffffff"}})]})}L.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{mode:{required:!1,tsType:{name:"union",raw:"'image' | 'icon' | 'initials'",elements:[{name:"literal",value:"'image'"},{name:"literal",value:"'icon'"},{name:"literal",value:"'initials'"}]},description:"",defaultValue:{value:"'initials'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xl' | 'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'xl'"},{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'large'",computed:!1}},initials:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'HB'",computed:!1}},bg:{required:!1,tsType:{name:"union",raw:"'blue' | 'pink' | 'green' | 'purple' | 'teal'",elements:[{name:"literal",value:"'blue'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'green'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'teal'"}]},description:"",defaultValue:{value:"'blue'",computed:!1}},src:{required:!1,tsType:{name:"string"},description:""},showStatus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'online' | 'offline' | 'busy'",elements:[{name:"literal",value:"'online'"},{name:"literal",value:"'offline'"},{name:"literal",value:"'busy'"}]},description:"",defaultValue:{value:"'online'",computed:!1}}}};const Q={title:"Components/Avatar",component:L,tags:["autodocs"],argTypes:{mode:{control:"select",options:["image","icon","initials"]},size:{control:"select",options:["xl","large","medium","small"]},bg:{control:"select",options:["blue","pink","green","purple","teal"]},status:{control:"select",options:["online","offline","busy"]},showStatus:{control:"boolean"},initials:{control:"text"}}},s={args:{mode:"initials",initials:"JD",bg:"blue",size:"medium"}},t={args:{mode:"icon",bg:"purple",size:"medium"}},n={args:{mode:"initials",initials:"AB",bg:"green",size:"medium",showStatus:!0,status:"online"}},l={args:{mode:"initials",initials:"CD",bg:"pink",size:"medium",showStatus:!0,status:"offline"}},r={args:{mode:"initials",initials:"EF",bg:"teal",size:"medium",showStatus:!0,status:"busy"}},o={args:{mode:"initials",initials:"XL",bg:"blue",size:"xl"}},u={args:{mode:"initials",initials:"SM",bg:"purple",size:"small"}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    mode: 'initials',
    initials: 'JD',
    bg: 'blue',
    size: 'medium'
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,y,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    mode: 'icon',
    bg: 'purple',
    size: 'medium'
  }
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var S,x,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    mode: 'initials',
    initials: 'AB',
    bg: 'green',
    size: 'medium',
    showStatus: true,
    status: 'online'
  }
}`,...(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var z,k,T;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    mode: 'initials',
    initials: 'CD',
    bg: 'pink',
    size: 'medium',
    showStatus: true,
    status: 'offline'
  }
}`,...(T=(k=l.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var j,O,C;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    mode: 'initials',
    initials: 'EF',
    bg: 'teal',
    size: 'medium',
    showStatus: true,
    status: 'busy'
  }
}`,...(C=(O=r.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var D,I,_;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    mode: 'initials',
    initials: 'XL',
    bg: 'blue',
    size: 'xl'
  }
}`,...(_=(I=o.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var q,B,E;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    mode: 'initials',
    initials: 'SM',
    bg: 'purple',
    size: 'small'
  }
}`,...(E=(B=u.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const Y=["Default","WithIcon","Online","Offline","Busy","XLarge","Small"];export{r as Busy,s as Default,l as Offline,n as Online,u as Small,t as WithIcon,o as XLarge,Y as __namedExportsOrder,Q as default};
