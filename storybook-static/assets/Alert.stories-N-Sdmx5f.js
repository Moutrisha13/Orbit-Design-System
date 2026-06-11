import{j as e}from"./iframe-BbtEY58W.js";import{c as a}from"./createLucideIcon-CO73uvZU.js";import"./preload-helper-C1FmrZbK.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=a("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=a("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=a("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=a("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=a("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=a("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),K={default:{bg:"#f8f9fa",border:"#dee2e6",iconColor:"#495057",titleColor:"#343a40",textColor:"#6c757d",actionColor:"#495057"},success:{bg:"#f0fdf4",border:"#bbf7d0",iconColor:"#16a34a",titleColor:"#15803d",textColor:"#166534",actionColor:"#16a34a"},warning:{bg:"#fffbeb",border:"#fde68a",iconColor:"#d97706",titleColor:"#b45309",textColor:"#92400e",actionColor:"#d97706"},failure:{bg:"#fef2f2",border:"#fecaca",iconColor:"#dc2626",titleColor:"#b91c1c",textColor:"#991b1b",actionColor:"#dc2626"},info:{bg:"#eff6ff",border:"#bfdbfe",iconColor:"#2563eb",titleColor:"#1d4ed8",textColor:"#1e40af",actionColor:"#2563eb"}},Q={default:L,success:O,warning:G,failure:P,info:$};function U({variant:g="default",title:o,description:p,showIcon:V=!0,actions:f,onDismiss:h}){const r=K[g],X=Q[g];return e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:12,padding:16,borderRadius:8,border:`1px solid ${r.border}`,backgroundColor:r.bg,fontFamily:"var(--font-family-primary)"},role:"alert",children:[V&&e.jsx(X,{style:{width:20,height:20,flexShrink:0,marginTop:o&&p?1:0,color:r.iconColor}}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[o&&e.jsx("p",{style:{margin:0,fontSize:14,fontWeight:600,lineHeight:"20px",color:r.titleColor},children:o}),p&&e.jsx("p",{style:{margin:o?"2px 0 0":0,fontSize:14,fontWeight:400,lineHeight:"20px",color:r.textColor},children:p}),f&&f.length>0&&e.jsx("div",{style:{display:"flex",gap:12,marginTop:10},children:f.map((m,B)=>e.jsx("button",{onClick:m.onClick,style:{padding:0,background:"none",border:"none",cursor:"pointer",fontSize:13,fontWeight:600,fontFamily:"var(--font-family-primary)",color:B===0?r.actionColor:r.textColor,textDecoration:"none"},children:m.label},m.label))})]}),h&&e.jsx("button",{onClick:h,style:{flexShrink:0,background:"none",border:"none",cursor:"pointer",padding:2,borderRadius:4,color:r.textColor,display:"flex",alignItems:"center"},"aria-label":"Dismiss",children:e.jsx(J,{style:{width:16,height:16}})})]})}U.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'failure' | 'info'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'failure'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},actions:{required:!1,tsType:{name:"Array",elements:[{name:"AlertAction"}],raw:"AlertAction[]"},description:""},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ae={title:"Components/Alert",component:U,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","success","warning","failure","info"]},title:{control:"text"},description:{control:"text"},showIcon:{control:"boolean"}}},t={args:{variant:"default",title:"Heads up",description:"This is a default alert with some useful information.",showIcon:!0}},n={args:{variant:"success",title:"Changes saved",description:"Your profile has been updated successfully.",showIcon:!0}},s={args:{variant:"warning",title:"Storage nearly full",description:"You have used 90% of your storage quota.",showIcon:!0}},i={args:{variant:"failure",title:"Something went wrong",description:"We could not process your request. Please try again.",showIcon:!0}},l={args:{variant:"info",title:"New features available",description:"Check out the latest updates to the design system.",showIcon:!0}},c={args:{variant:"warning",title:"Unsaved changes",description:"You have unsaved changes that will be lost.",showIcon:!0,actions:[{label:"Save now"},{label:"Discard"}]}},d={args:{variant:"info",title:"Update available",showIcon:!1}},u={args:{variant:"success",title:"Email verified",description:"Your email address has been confirmed.",showIcon:!0,onDismiss:()=>{}}};var y,b,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    title: 'Heads up',
    description: 'This is a default alert with some useful information.',
    showIcon: true
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var w,C,x;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Changes saved',
    description: 'Your profile has been updated successfully.',
    showIcon: true
  }
}`,...(x=(C=n.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var I,k,S;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Storage nearly full',
    description: 'You have used 90% of your storage quota.',
    showIcon: true
  }
}`,...(S=(k=s.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var A,T,q;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'failure',
    title: 'Something went wrong',
    description: 'We could not process your request. Please try again.',
    showIcon: true
  }
}`,...(q=(T=i.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var j,D,W;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'New features available',
    description: 'Check out the latest updates to the design system.',
    showIcon: true
  }
}`,...(W=(D=l.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var M,Y,z;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Unsaved changes',
    description: 'You have unsaved changes that will be lost.',
    showIcon: true,
    actions: [{
      label: 'Save now'
    }, {
      label: 'Discard'
    }]
  }
}`,...(z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var N,_,E;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Update available',
    showIcon: false
  }
}`,...(E=(_=d.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var H,R,F;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Email verified',
    description: 'Your email address has been confirmed.',
    showIcon: true,
    onDismiss: () => {}
  }
}`,...(F=(R=u.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};const oe=["Default","Success","Warning","Failure","Info","WithActions","Minimal","Dismissible"];export{t as Default,u as Dismissible,i as Failure,l as Info,d as Minimal,n as Success,s as Warning,c as WithActions,oe as __namedExportsOrder,ae as default};
