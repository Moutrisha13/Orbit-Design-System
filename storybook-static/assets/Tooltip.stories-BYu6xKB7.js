import{j as r}from"./iframe-BbtEY58W.js";import"./preload-helper-C1FmrZbK.js";const e=6;function _(n){switch(n){case"top":return{bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:8};case"bottom":return{top:"100%",left:"50%",transform:"translateX(-50%)",marginTop:8};case"left":return{right:"100%",top:"50%",transform:"translateY(-50%)",marginRight:8};case"right":return{left:"100%",top:"50%",transform:"translateY(-50%)",marginLeft:8}}}function E(n,a){const t=a?"#1f2937":"#ffffff",o={position:"absolute",width:0,height:0};switch(n){case"top":return{...o,top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:`${e}px solid transparent`,borderRight:`${e}px solid transparent`,borderTop:`${e}px solid ${t}`};case"bottom":return{...o,bottom:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:`${e}px solid transparent`,borderRight:`${e}px solid transparent`,borderBottom:`${e}px solid ${t}`};case"left":return{...o,left:"100%",top:"50%",transform:"translateY(-50%)",borderTop:`${e}px solid transparent`,borderBottom:`${e}px solid transparent`,borderLeft:`${e}px solid ${t}`};case"right":return{...o,right:"100%",top:"50%",transform:"translateY(-50%)",borderTop:`${e}px solid transparent`,borderBottom:`${e}px solid transparent`,borderRight:`${e}px solid ${t}`}}}function N({content:n="This is a tooltip",placement:a="top",style:t="dark",showArrow:o=!0,children:B}){const s=t==="dark",q={position:"absolute",..._(a),whiteSpace:"nowrap",padding:"6px 10px",borderRadius:6,fontSize:13,fontWeight:500,lineHeight:"18px",fontFamily:"var(--font-family-primary)",backgroundColor:s?"#1f2937":"#ffffff",color:s?"#ffffff":"#1f2937",border:s?"none":"1px solid #e5e7eb",boxShadow:s?"none":"0 1px 3px rgba(0,0,0,0.1)",zIndex:10,pointerEvents:"none"};return r.jsxs("div",{style:{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:[B,r.jsxs("div",{style:q,children:[n,o&&r.jsx("div",{style:E(a,s)})]})]})}N.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'This is a tooltip'",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},style:{required:!1,tsType:{name:"union",raw:"'dark' | 'light'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:"",defaultValue:{value:"'dark'",computed:!1}},showArrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const X={title:"Components/Tooltip",component:N,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{content:{control:"text"},placement:{control:"select",options:["top","bottom","left","right"]},style:{control:"select",options:["dark","light"]},showArrow:{control:"boolean"}}},l={args:{content:"This is a tooltip",placement:"top",style:"dark",showArrow:!0,children:r.jsx("span",{style:{padding:"8px 16px",border:"1px solid #e5e7eb",borderRadius:8,cursor:"default"},children:"Hover me"})}},d={args:{content:"Tooltip below",placement:"bottom",style:"dark",showArrow:!0,children:r.jsx("span",{style:{padding:"8px 16px",border:"1px solid #e5e7eb",borderRadius:8,cursor:"default"},children:"Hover me"})}},p={args:{content:"Tooltip on left",placement:"left",style:"dark",showArrow:!0,children:r.jsx("span",{style:{padding:"8px 16px",border:"1px solid #e5e7eb",borderRadius:8,cursor:"default"},children:"Hover me"})}},i={args:{content:"Tooltip on right",placement:"right",style:"dark",showArrow:!0,children:r.jsx("span",{style:{padding:"8px 16px",border:"1px solid #e5e7eb",borderRadius:8,cursor:"default"},children:"Hover me"})}},c={args:{content:"Light tooltip",placement:"top",style:"light",showArrow:!0,children:r.jsx("span",{style:{padding:"8px 16px",border:"1px solid #e5e7eb",borderRadius:8,cursor:"default"},children:"Hover me"})}},u={args:{content:"No arrow",placement:"top",style:"dark",showArrow:!1,children:r.jsx("span",{style:{padding:"8px 16px",border:"1px solid #e5e7eb",borderRadius:8,cursor:"default"},children:"Hover me"})}};var m,f,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip',
    placement: 'top',
    style: 'dark',
    showArrow: true,
    children: <span style={{
      padding: '8px 16px',
      border: '1px solid #e5e7eb',
      borderRadius: 8,
      cursor: 'default'
    }}>Hover me</span>
  }
}`,...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,g,x;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip below',
    placement: 'bottom',
    style: 'dark',
    showArrow: true,
    children: <span style={{
      padding: '8px 16px',
      border: '1px solid #e5e7eb',
      borderRadius: 8,
      cursor: 'default'
    }}>Hover me</span>
  }
}`,...(x=(g=d.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,w,v;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip on left',
    placement: 'left',
    style: 'dark',
    showArrow: true,
    children: <span style={{
      padding: '8px 16px',
      border: '1px solid #e5e7eb',
      borderRadius: 8,
      cursor: 'default'
    }}>Hover me</span>
  }
}`,...(v=(w=p.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var R,T,k;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip on right',
    placement: 'right',
    style: 'dark',
    showArrow: true,
    children: <span style={{
      padding: '8px 16px',
      border: '1px solid #e5e7eb',
      borderRadius: 8,
      cursor: 'default'
    }}>Hover me</span>
  }
}`,...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var A,$,H;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    content: 'Light tooltip',
    placement: 'top',
    style: 'light',
    showArrow: true,
    children: <span style={{
      padding: '8px 16px',
      border: '1px solid #e5e7eb',
      borderRadius: 8,
      cursor: 'default'
    }}>Hover me</span>
  }
}`,...(H=($=c.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var j,S,L;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    content: 'No arrow',
    placement: 'top',
    style: 'dark',
    showArrow: false,
    children: <span style={{
      padding: '8px 16px',
      border: '1px solid #e5e7eb',
      borderRadius: 8,
      cursor: 'default'
    }}>Hover me</span>
  }
}`,...(L=(S=u.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};const Y=["Default","Bottom","Left","Right","Light","NoArrow"];export{d as Bottom,l as Default,p as Left,c as Light,u as NoArrow,i as Right,Y as __namedExportsOrder,X as default};
