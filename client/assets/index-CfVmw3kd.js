import{r as s}from"./index-DF-VfARk.js";import{R as K,a as Q}from"./ExclamationCircleFilled-DrSG7Lz4.js";import{g as U,r as Y,h as P,c as Z,e as v,j as ee,k as ne,l as oe,n as te,o as j,p as re,q as ie,s as se,v as le,w as ae}from"./index-CZ386Uyv.js";import{R as ce}from"./CloseOutlined-C3B3v_Kh.js";import{R as de}from"./index-Cv3JBoSq.js";import{p as ue}from"./pickAttrs-BTWl6K21.js";const S=(e,n,o,t,i)=>({background:e,border:`${P(t.lineWidth)} ${t.lineType} ${n}`,[`${i}-icon`]:{color:o}}),fe=e=>{const{componentCls:n,motionDurationSlow:o,marginXS:t,marginSM:i,fontSize:l,fontSizeLG:d,lineHeight:f,borderRadiusLG:g,motionEaseInOutCirc:m,withDescriptionIconSize:b,colorText:y,colorTextHeading:C,withDescriptionPadding:h,defaultPadding:a}=e;return{[n]:Object.assign(Object.assign({},Y(e)),{position:"relative",display:"flex",alignItems:"center",padding:a,wordWrap:"break-word",borderRadius:g,[`&${n}-rtl`]:{direction:"rtl"},[`${n}-content`]:{flex:1,minWidth:0},[`${n}-icon`]:{marginInlineEnd:t,lineHeight:0},"&-description":{display:"none",fontSize:l,lineHeight:f},"&-message":{color:C},[`&${n}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${o} ${m}, opacity ${o} ${m},
        padding-top ${o} ${m}, padding-bottom ${o} ${m},
        margin-bottom ${o} ${m}`},[`&${n}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${n}-with-description`]:{alignItems:"flex-start",padding:h,[`${n}-icon`]:{marginInlineEnd:i,fontSize:b,lineHeight:0},[`${n}-message`]:{display:"block",marginBottom:t,color:C,fontSize:d},[`${n}-description`]:{display:"block",color:y}},[`${n}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},me=e=>{const{componentCls:n,colorSuccess:o,colorSuccessBorder:t,colorSuccessBg:i,colorWarning:l,colorWarningBorder:d,colorWarningBg:f,colorError:g,colorErrorBorder:m,colorErrorBg:b,colorInfo:y,colorInfoBorder:C,colorInfoBg:h}=e;return{[n]:{"&-success":S(i,t,o,e,n),"&-info":S(h,C,y,e,n),"&-warning":S(f,d,l,e,n),"&-error":Object.assign(Object.assign({},S(b,m,g,e,n)),{[`${n}-description > pre`]:{margin:0,padding:0}})}}},pe=e=>{const{componentCls:n,iconCls:o,motionDurationMid:t,marginXS:i,fontSizeIcon:l,colorIcon:d,colorIconHover:f}=e;return{[n]:{"&-action":{marginInlineStart:i},[`${n}-close-icon`]:{marginInlineStart:i,padding:0,overflow:"hidden",fontSize:l,lineHeight:P(l),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${o}-close`]:{color:d,transition:`color ${t}`,"&:hover":{color:f}}},"&-close-text":{color:d,transition:`color ${t}`,"&:hover":{color:f}}}}},ge=e=>({withDescriptionIconSize:e.fontSizeHeading3,defaultPadding:`${e.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`}),be=U("Alert",e=>[fe(e),me(e),pe(e)],ge);var R=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(o[t[i]]=e[t[i]]);return o};const ye={success:K,info:de,error:te,warning:Q},$e=e=>{const{icon:n,prefixCls:o,type:t}=e,i=ye[t]||null;return n?oe(n,s.createElement("span",{className:`${o}-icon`},n),()=>({className:v(`${o}-icon`,{[n.props.className]:n.props.className})})):s.createElement(i,{className:`${o}-icon`})},Ce=e=>{const{isClosable:n,prefixCls:o,closeIcon:t,handleClose:i,ariaProps:l}=e,d=t===!0||t===void 0?s.createElement(ce,null):t;return n?s.createElement("button",Object.assign({type:"button",onClick:i,className:`${o}-close-icon`,tabIndex:0},l),d):null},B=s.forwardRef((e,n)=>{const{description:o,prefixCls:t,message:i,banner:l,className:d,rootClassName:f,style:g,onMouseEnter:m,onMouseLeave:b,onClick:y,afterClose:C,showIcon:h,closable:a,closeText:I,closeIcon:$,action:E,id:H}=e,M=R(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action","id"]),[x,z]=s.useState(!1),w=s.useRef(null);s.useImperativeHandle(n,()=>({nativeElement:w.current}));const{getPrefixCls:_,direction:D,alert:r}=s.useContext(Z),c=_("alert",t),[T,A,k]=be(c),L=u=>{var p;z(!0),(p=e.onClose)===null||p===void 0||p.call(e,u)},N=s.useMemo(()=>e.type!==void 0?e.type:l?"warning":"info",[e.type,l]),W=s.useMemo(()=>typeof a=="object"&&a.closeIcon||I?!0:typeof a=="boolean"?a:$!==!1&&$!==null&&$!==void 0?!0:!!(r!=null&&r.closable),[I,$,a,r==null?void 0:r.closable]),O=l&&h===void 0?!0:h,G=v(c,`${c}-${N}`,{[`${c}-with-description`]:!!o,[`${c}-no-icon`]:!O,[`${c}-banner`]:!!l,[`${c}-rtl`]:D==="rtl"},r==null?void 0:r.className,d,f,k,A),V=ue(M,{aria:!0,data:!0}),X=s.useMemo(()=>{var u,p;return typeof a=="object"&&a.closeIcon?a.closeIcon:I||($!==void 0?$:typeof(r==null?void 0:r.closable)=="object"&&(!((u=r==null?void 0:r.closable)===null||u===void 0)&&u.closeIcon)?(p=r==null?void 0:r.closable)===null||p===void 0?void 0:p.closeIcon:r==null?void 0:r.closeIcon)},[$,a,I,r==null?void 0:r.closeIcon]),q=s.useMemo(()=>{const u=a??(r==null?void 0:r.closable);return typeof u=="object"?R(u,["closeIcon"]):{}},[a,r==null?void 0:r.closable]);return T(s.createElement(ee,{visible:!x,motionName:`${c}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:u=>({maxHeight:u.offsetHeight}),onLeaveEnd:C},(u,p)=>{let{className:F,style:J}=u;return s.createElement("div",Object.assign({id:H,ref:ne(w,p),"data-show":!x,className:v(G,F),style:Object.assign(Object.assign(Object.assign({},r==null?void 0:r.style),g),J),onMouseEnter:m,onMouseLeave:b,onClick:y,role:"alert"},V),O?s.createElement($e,{description:o,icon:e.icon,prefixCls:c,type:N}):null,s.createElement("div",{className:`${c}-content`},i?s.createElement("div",{className:`${c}-message`},i):null,o?s.createElement("div",{className:`${c}-description`},o):null),E?s.createElement("div",{className:`${c}-action`},E):null,s.createElement(Ce,{isClosable:W,prefixCls:c,closeIcon:X,handleClose:L,ariaProps:q}))}))});function he(e,n,o){return n=j(n),re(e,ie()?Reflect.construct(n,o||[],j(e).constructor):n.apply(e,o))}let Ie=function(e){function n(){var o;return ae(this,n),o=he(this,n,arguments),o.state={error:void 0,info:{componentStack:""}},o}return se(n,e),le(n,[{key:"componentDidCatch",value:function(t,i){this.setState({error:t,info:i})}},{key:"render",value:function(){const{message:t,description:i,id:l,children:d}=this.props,{error:f,info:g}=this.state,m=(g==null?void 0:g.componentStack)||null,b=typeof t>"u"?(f||"").toString():t,y=typeof i>"u"?m:i;return f?s.createElement(B,{id:l,type:"error",message:b,description:s.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},y)}):d}}])}(s.Component);const Se=B;Se.ErrorBoundary=Ie;export{Se as A};
