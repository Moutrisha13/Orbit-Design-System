import{j as e}from"./iframe-BbtEY58W.js";import"./preload-helper-C1FmrZbK.js";const V={large:20,medium:16,small:14},Z={large:8,medium:6,small:5},A={large:15,medium:14,small:13};function P({options:_,selected:q,size:c="medium",disabled:L=!1,showHint:C=!1,onChange:m}){const p=V[c],u=Z[c],W=A[c];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,fontFamily:"var(--font-family-primary)"},children:_.map(s=>{const g=s.id===q,t=L,k=t?"#f3f4f6":"#ffffff",B=t?"#d1d5db":g?"#068ae9":"#d1d5db";return e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,opacity:t?.5:1,cursor:t?"not-allowed":"pointer"},onClick:()=>!t&&(m==null?void 0:m(s.id)),children:[e.jsx("div",{style:{width:p,height:p,minWidth:p,borderRadius:9999,border:`1.5px solid ${B}`,backgroundColor:k,display:"flex",alignItems:"center",justifyContent:"center",marginTop:1,transition:"border-color 150ms"},children:g&&e.jsx("div",{style:{width:u,height:u,borderRadius:9999,backgroundColor:"#068ae9"}})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:1},children:[e.jsx("span",{style:{fontSize:W,fontWeight:500,color:t?"#9ca3af":"#111827",lineHeight:"20px"},children:s.label}),C&&s.hint&&e.jsx("span",{style:{fontSize:13,color:"#6b7280",lineHeight:"18px"},children:s.hint})]})]},s.id)})})}P.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioOption"}],raw:"RadioOption[]"},description:""},selected:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showHint:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const o=[{id:"opt1",label:"Option one",hint:"This is the first option."},{id:"opt2",label:"Option two",hint:"This is the second option."},{id:"opt3",label:"Option three",hint:"This is the third option."}],$={title:"Components/Radio",component:P,tags:["autodocs"],argTypes:{size:{control:"select",options:["large","medium","small"]},disabled:{control:"boolean"},showHint:{control:"boolean"}}},r={args:{options:o,selected:"opt1",size:"medium",showHint:!1}},a={args:{options:o,selected:"opt2",size:"medium",showHint:!0}},i={args:{options:o,selected:"opt1",size:"medium",disabled:!0}},n={args:{options:o,selected:null,size:"medium"}},l={args:{options:o,selected:"opt1",size:"large"}},d={args:{options:o,selected:"opt1",size:"small"}};var f,h,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    options: OPTIONS,
    selected: 'opt1',
    size: 'medium',
    showHint: false
  }
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,b,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    options: OPTIONS,
    selected: 'opt2',
    size: 'medium',
    showHint: true
  }
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var O,T,v;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    options: OPTIONS,
    selected: 'opt1',
    size: 'medium',
    disabled: true
  }
}`,...(v=(T=i.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var w,z,I;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    options: OPTIONS,
    selected: null,
    size: 'medium'
  }
}`,...(I=(z=n.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var j,H,N;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    options: OPTIONS,
    selected: 'opt1',
    size: 'large'
  }
}`,...(N=(H=l.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var R,D,E;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    options: OPTIONS,
    selected: 'opt1',
    size: 'small'
  }
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const J=["Default","WithHints","Disabled","NoneSelected","Large","Small"];export{r as Default,i as Disabled,l as Large,n as NoneSelected,d as Small,a as WithHints,J as __namedExportsOrder,$ as default};
