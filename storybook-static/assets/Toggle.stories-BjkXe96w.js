import{j as a}from"./iframe-BbtEY58W.js";import"./preload-helper-C1FmrZbK.js";const Y={large:{w:48,h:28},medium:{w:40,h:24},small:{w:32,h:18}},Z={large:{d:22,offset:3},medium:{d:18,offset:3},small:{d:14,offset:2}},$={large:17,medium:15,small:13};function U({state:A="on",size:c="medium",disabled:e=!1,withLabel:B=!0,withHint:g=!1,label:C="Enable notifications",hint:F="You will receive alerts for all activity.",labelPosition:b="right",onChange:d}){const l=A==="on",f=Y[c],t=Z[c],K=$[c],N=l?f.w-t.d-t.offset:t.offset;function h(){e||d==null||d(l?"off":"on")}const X=a.jsx("button",{role:"switch","aria-checked":l,"aria-disabled":e,onClick:h,onKeyDown:p=>{(p.key===" "||p.key==="Enter")&&(p.preventDefault(),h())},style:{position:"relative",display:"inline-flex",alignItems:"center",width:f.w,height:f.h,borderRadius:9999,border:"none",cursor:e?"not-allowed":"pointer",backgroundColor:l?"#068ae9":"#ced6de",transition:"background-color 200ms ease",flexShrink:0,outline:"none",padding:0},className:"focus-visible:ring-2 focus-visible:ring-offset-2",children:a.jsx("span",{style:{position:"absolute",width:t.d,height:t.d,borderRadius:9999,backgroundColor:"#ffffff",boxShadow:"0px 1px 2px 0px #1018280f, 0px 1px 3px 0px #1018281a",transform:`translateX(${N}px)`,transition:"transform 200ms ease, box-shadow 200ms ease"}})}),w=B?a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[a.jsx("span",{style:{fontSize:K,fontWeight:500,color:"hsl(var(--semantic-color-text-primary))",fontFamily:"var(--font-family-primary)",lineHeight:"20px",userSelect:"none"},children:C}),g&&a.jsx("span",{style:{fontSize:13,fontWeight:400,color:"hsl(var(--semantic-color-text-secondary))",fontFamily:"var(--font-family-primary)",lineHeight:"18px"},children:F})]}):null;return a.jsxs("div",{style:{display:"inline-flex",alignItems:g?"flex-start":"center",gap:10,opacity:e?.4:1,pointerEvents:e?"none":void 0,cursor:e?"not-allowed":"default"},children:[b==="left"&&w,X,b==="right"&&w]})}U.__docgenInfo={description:"",methods:[],displayName:"ToggleSwitch",props:{state:{required:!1,tsType:{name:"union",raw:"'on' | 'off'",elements:[{name:"literal",value:"'on'"},{name:"literal",value:"'off'"}]},description:"",defaultValue:{value:"'on'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},withLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},withHint:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Enable notifications'",computed:!1}},hint:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'You will receive alerts for all activity.'",computed:!1}},labelPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(next: ToggleState) => void",signature:{arguments:[{type:{name:"union",raw:"'on' | 'off'",elements:[{name:"literal",value:"'on'"},{name:"literal",value:"'off'"}]},name:"next"}],return:{name:"void"}}},description:""}}};const Q={title:"Components/Toggle",component:U,tags:["autodocs"],argTypes:{state:{control:"select",options:["on","off"]},size:{control:"select",options:["large","medium","small"]},disabled:{control:"boolean"},withLabel:{control:"boolean"},withHint:{control:"boolean"},labelPosition:{control:"select",options:["left","right"]},label:{control:"text"},hint:{control:"text"}}},n={args:{state:"on",size:"medium",withLabel:!0,label:"Enable notifications"}},s={args:{state:"off",size:"medium",withLabel:!0,label:"Enable notifications"}},o={args:{state:"on",size:"medium",withLabel:!0,withHint:!0,label:"Marketing emails",hint:"Receive news and promotional offers."}},r={args:{state:"off",size:"medium",disabled:!0,withLabel:!0,label:"Unavailable setting"}},i={args:{state:"on",size:"medium",withLabel:!0,labelPosition:"left",label:"Dark mode"}},u={args:{state:"on",size:"large",withLabel:!0,label:"Large toggle"}},m={args:{state:"on",size:"small",withLabel:!0,label:"Small toggle"}};var v,y,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    state: 'on',
    size: 'medium',
    withLabel: true,
    label: 'Enable notifications'
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var L,S,z;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    state: 'off',
    size: 'medium',
    withLabel: true,
    label: 'Enable notifications'
  }
}`,...(z=(S=s.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var T,k,E;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    state: 'on',
    size: 'medium',
    withLabel: true,
    withHint: true,
    label: 'Marketing emails',
    hint: 'Receive news and promotional offers.'
  }
}`,...(E=(k=o.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var q,D,j;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    state: 'off',
    size: 'medium',
    disabled: true,
    withLabel: true,
    label: 'Unavailable setting'
  }
}`,...(j=(D=r.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var H,V,R;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    state: 'on',
    size: 'medium',
    withLabel: true,
    labelPosition: 'left',
    label: 'Dark mode'
  }
}`,...(R=(V=i.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var _,I,O;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    state: 'on',
    size: 'large',
    withLabel: true,
    label: 'Large toggle'
  }
}`,...(O=(I=u.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var W,M,P;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    state: 'on',
    size: 'small',
    withLabel: true,
    label: 'Small toggle'
  }
}`,...(P=(M=m.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const ee=["Default","Off","WithHint","Disabled","LabelLeft","Large","Small"];export{n as Default,r as Disabled,i as LabelLeft,u as Large,s as Off,m as Small,o as WithHint,ee as __namedExportsOrder,Q as default};
