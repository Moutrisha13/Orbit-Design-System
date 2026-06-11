import{r as x,j as n}from"./iframe-BbtEY58W.js";import{c as O}from"./createLucideIcon-CO73uvZU.js";import"./preload-helper-C1FmrZbK.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=O("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=O("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]),ae={large:{height:56,contentPadding:"16px 24px",fontSize:17},medium:{height:48,contentPadding:"12px 20px",fontSize:15},small:{height:40,contentPadding:"8px 16px",fontSize:13}};function H({type:N="single",variant:r="default",size:Y="medium",showChevron:Z=!0,showLeadingIcon:G=!1,dividers:J=!0,defaultOpen:v=null,items:f}){const y=x.useId(),[K,Q]=x.useState(()=>new Set(v?[v]:[]));function U(e){Q(i=>{const t=new Set(i);return t.has(e)?t.delete(e):(N==="single"&&t.clear(),t.add(e)),t})}const o=ae[Y],X=r==="bordered"?{border:"1px solid hsl(var(--semantic-color-border-default))",borderRadius:8,overflow:"hidden",padding:4}:r==="filled"?{display:"flex",flexDirection:"column",gap:4}:{};return n.jsx("div",{style:X,children:f.map((e,i)=>{const t=K.has(e.id),a=!!e.disabled,b=`${y}-trigger-${e.id}`,w=`${y}-content-${e.id}`,ee=J&&i<f.length-1&&r!=="filled",re={height:o.height,paddingLeft:r==="filled"?16:0,paddingRight:r==="filled"?16:0,fontSize:o.fontSize,fontFamily:"var(--font-family-primary)",fontWeight:500,color:"hsl(var(--semantic-color-text-primary))",backgroundColor:t&&r==="filled"||r==="filled"?"hsl(var(--semantic-color-surface-subtle))":"transparent",borderRadius:r==="filled"?8:0,cursor:a?"not-allowed":"pointer",opacity:a?.4:1,display:"flex",alignItems:"center",width:"100%",textAlign:"left",border:"none",outline:"none",gap:10,transition:"background-color 150ms ease"},te=r==="bordered"?{borderBottom:i<f.length-1?"1px solid hsl(var(--semantic-color-border-default))":"none"}:{};return n.jsxs("div",{style:te,children:[n.jsxs("button",{id:b,"aria-expanded":t,"aria-controls":w,disabled:a,onClick:()=>!a&&U(e.id),style:re,onMouseEnter:h=>{!a&&r!=="filled"&&(h.currentTarget.style.backgroundColor="hsl(var(--semantic-color-surface-subtle))")},onMouseLeave:h=>{!a&&r!=="filled"&&(h.currentTarget.style.backgroundColor="transparent")},children:[G&&n.jsx(se,{style:{width:16,height:16,flexShrink:0,color:"hsl(var(--semantic-color-text-brand-primary))"}}),n.jsx("span",{style:{flex:1,minWidth:0},children:e.trigger}),Z&&n.jsx(ne,{style:{width:16,height:16,flexShrink:0,color:"hsl(var(--semantic-color-text-secondary))",transform:t?"rotate(180deg)":"rotate(0deg)",transition:"transform 200ms ease"}})]}),n.jsx("div",{id:w,role:"region","aria-labelledby":b,style:{display:"grid",gridTemplateRows:t?"1fr":"0fr",transition:"grid-template-rows 200ms ease"},children:n.jsx("div",{style:{overflow:"hidden"},children:n.jsx("p",{style:{padding:o.contentPadding,paddingTop:4,fontFamily:"var(--font-family-primary)",fontSize:o.fontSize,fontWeight:400,lineHeight:1.6,color:"hsl(var(--semantic-color-text-secondary))"},children:e.content})})}),ee&&n.jsx("div",{style:{height:1,backgroundColor:"hsl(var(--semantic-color-border-default))"}})]},e.id)})})}H.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{type:{required:!1,tsType:{name:"union",raw:"'single' | 'multiple'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multiple'"}]},description:"",defaultValue:{value:"'single'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'bordered' | 'filled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'filled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},showChevron:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},dividers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},defaultOpen:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItem"}],raw:"AccordionItem[]"},description:""}}};const s=[{id:"1",trigger:"What is a design system?",content:"A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications."},{id:"2",trigger:"How do I get started?",content:"Clone the repository, install dependencies with npm install, then run npm run dev to start the development server."},{id:"3",trigger:"Can I customise the tokens?",content:"Yes — all design tokens are defined as CSS custom properties in src/generated/tokens.css and can be overridden per-theme."}],de={title:"Components/Accordion",component:H,tags:["autodocs"],argTypes:{type:{control:"select",options:["single","multiple"]},variant:{control:"select",options:["default","bordered","filled"]},size:{control:"select",options:["large","medium","small"]},showChevron:{control:"boolean"},showLeadingIcon:{control:"boolean"},dividers:{control:"boolean"}}},l={args:{type:"single",variant:"default",size:"medium",showChevron:!0,dividers:!0,items:s}},d={args:{type:"single",variant:"bordered",size:"medium",showChevron:!0,dividers:!0,items:s}},c={args:{type:"single",variant:"filled",size:"medium",showChevron:!0,dividers:!0,items:s}},u={args:{type:"multiple",variant:"default",size:"medium",showChevron:!0,dividers:!0,items:s}},m={args:{type:"single",variant:"default",size:"medium",showChevron:!0,showLeadingIcon:!0,dividers:!0,items:s}},p={args:{type:"single",variant:"default",size:"large",showChevron:!0,dividers:!0,items:s}},g={args:{type:"single",variant:"default",size:"small",showChevron:!0,dividers:!0,items:s}};var S,C,I;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'single',
    variant: 'default',
    size: 'medium',
    showChevron: true,
    dividers: true,
    items: ITEMS
  }
}`,...(I=(C=l.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var z,T,k;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: 'single',
    variant: 'bordered',
    size: 'medium',
    showChevron: true,
    dividers: true,
    items: ITEMS
  }
}`,...(k=(T=d.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var E,j,M;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'single',
    variant: 'filled',
    size: 'medium',
    showChevron: true,
    dividers: true,
    items: ITEMS
  }
}`,...(M=(j=c.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var L,q,D;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: 'multiple',
    variant: 'default',
    size: 'medium',
    showChevron: true,
    dividers: true,
    items: ITEMS
  }
}`,...(D=(q=u.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var A,V,W;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: 'single',
    variant: 'default',
    size: 'medium',
    showChevron: true,
    showLeadingIcon: true,
    dividers: true,
    items: ITEMS
  }
}`,...(W=(V=m.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var R,F,P;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: 'single',
    variant: 'default',
    size: 'large',
    showChevron: true,
    dividers: true,
    items: ITEMS
  }
}`,...(P=(F=p.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var _,$,B;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'single',
    variant: 'default',
    size: 'small',
    showChevron: true,
    dividers: true,
    items: ITEMS
  }
}`,...(B=($=g.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const ce=["Default","Bordered","Filled","Multiple","WithLeadingIcon","Large","Small"];export{d as Bordered,l as Default,c as Filled,p as Large,u as Multiple,g as Small,m as WithLeadingIcon,ce as __namedExportsOrder,de as default};
