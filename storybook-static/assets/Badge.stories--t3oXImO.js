import{j as t}from"./iframe-BbtEY58W.js";import{c as G}from"./createLucideIcon-CO73uvZU.js";import"./preload-helper-C1FmrZbK.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=G("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),d={default:{light:{bg:"#f8f9fa",text:"#343a40",dot:"#6c757d"},heavy:{bg:"#495057",text:"#ffffff",dot:"#ffffff"}},blue:{light:{bg:"#eff6ff",text:"#1d4ed8",dot:"#3b82f6"},heavy:{bg:"#2563eb",text:"#ffffff",dot:"#ffffff"}},green:{light:{bg:"#f0fdf4",text:"#15803d",dot:"#22c55e"},heavy:{bg:"#16a34a",text:"#ffffff",dot:"#ffffff"}},red:{light:{bg:"#fef2f2",text:"#b91c1c",dot:"#ef4444"},heavy:{bg:"#dc2626",text:"#ffffff",dot:"#ffffff"}},yellow:{light:{bg:"#fffbeb",text:"#b45309",dot:"#f59e0b"},heavy:{bg:"#d97706",text:"#ffffff",dot:"#ffffff"}},purple:{light:{bg:"#faf5ff",text:"#7e22ce",dot:"#a855f7"},heavy:{bg:"#9333ea",text:"#ffffff",dot:"#ffffff"}}};function _({color:i="blue",style:u="light",showIcon:A=!0,showCount:H=!1,label:z="Live",count:D=12}){const e=d[i][u];return t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:4,fontFamily:"var(--font-family-primary)"},children:[t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:5,height:24,padding:"0 10px",borderRadius:9999,backgroundColor:e.bg,color:e.text,fontSize:12,fontWeight:500,lineHeight:1},children:[A&&t.jsx(U,{style:{width:8,height:8,fill:e.dot,color:e.dot,flexShrink:0}}),z]}),H&&t.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",height:20,minWidth:20,padding:"0 6px",borderRadius:9999,backgroundColor:u==="heavy"?d[i].heavy.bg:"#374151",color:"#ffffff",fontSize:11,fontWeight:600},children:D})]})}_.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{color:{required:!1,tsType:{name:"union",raw:"'default' | 'blue' | 'green' | 'red' | 'yellow' | 'purple'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'green'"},{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'purple'"}]},description:"",defaultValue:{value:"'blue'",computed:!1}},style:{required:!1,tsType:{name:"union",raw:"'light' | 'heavy'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'heavy'"}]},description:"",defaultValue:{value:"'light'",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Live'",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"12",computed:!1}}}};const J={title:"Components/Badge",component:_,tags:["autodocs"],argTypes:{color:{control:"select",options:["default","blue","green","red","yellow","purple"]},style:{control:"select",options:["light","heavy"]},showIcon:{control:"boolean"},showCount:{control:"boolean"},label:{control:"text"},count:{control:"number"}}},l={args:{color:"default",style:"light",label:"Badge",showIcon:!0,showCount:!1}},o={args:{color:"blue",style:"light",label:"New",showIcon:!1}},r={args:{color:"green",style:"light",label:"Active",showIcon:!0}},a={args:{color:"red",style:"light",label:"Error",showIcon:!0}},s={args:{color:"yellow",style:"light",label:"Pending",showIcon:!0}},n={args:{color:"purple",style:"light",label:"Beta",showIcon:!0}},f={args:{color:"blue",style:"heavy",label:"New",showIcon:!1}},c={args:{color:"red",style:"light",label:"Unread",showCount:!0,count:12}};var g,p,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    color: 'default',
    style: 'light',
    label: 'Badge',
    showIcon: true,
    showCount: false
  }
}`,...(h=(p=l.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,y,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    color: 'blue',
    style: 'light',
    label: 'New',
    showIcon: false
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,w,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    color: 'green',
    style: 'light',
    label: 'Active',
    showIcon: true
  }
}`,...(x=(w=r.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var I,C,S;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: 'red',
    style: 'light',
    label: 'Error',
    showIcon: true
  }
}`,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var B,T,j;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    color: 'yellow',
    style: 'light',
    label: 'Pending',
    showIcon: true
  }
}`,...(j=(T=s.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var q,E,V;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    color: 'purple',
    style: 'light',
    label: 'Beta',
    showIcon: true
  }
}`,...(V=(E=n.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var N,P,R;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    color: 'blue',
    style: 'heavy',
    label: 'New',
    showIcon: false
  }
}`,...(R=(P=f.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var W,k,L;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    color: 'red',
    style: 'light',
    label: 'Unread',
    showCount: true,
    count: 12
  }
}`,...(L=(k=c.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const K=["Default","Blue","Green","Red","Yellow","Purple","Heavy","WithCount"];export{o as Blue,l as Default,r as Green,f as Heavy,n as Purple,a as Red,c as WithCount,s as Yellow,K as __namedExportsOrder,J as default};
