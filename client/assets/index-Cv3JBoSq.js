import{I as He,b as J,X as H,Z as Re,e as G,Y as ve,$ as De,V as ke,_ as Z,O as B,g as Ge,m as Ke,K as xe,r as We,c as pe,n as ze,R as Ue,a0 as Ve,a1 as Be,a2 as Xe,a3 as Ye}from"./index-CZ386Uyv.js";import{r as s,R as M,c as Qe}from"./index-DF-VfARk.js";import{R as qe,a as Ze}from"./ExclamationCircleFilled-DrSG7Lz4.js";import{K as Je,x as en,b as Ie}from"./index-Pi5MhuwB.js";import{p as nn}from"./pickAttrs-BTWl6K21.js";import{R as tn}from"./CloseOutlined-C3B3v_Kh.js";var on={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},an=function(n,a){return s.createElement(He,J({},n,{ref:a,icon:on}))},sn=s.forwardRef(an),$e=s.forwardRef(function(e,n){var a=e.prefixCls,t=e.style,o=e.className,r=e.duration,u=r===void 0?4.5:r,y=e.showProgress,l=e.pauseOnHover,c=l===void 0?!0:l,C=e.eventKey,v=e.content,m=e.closable,g=e.closeIcon,E=g===void 0?"x":g,d=e.props,p=e.onClick,A=e.onNoticeClose,k=e.times,O=e.hovering,P=s.useState(!1),S=H(P,2),h=S[0],I=S[1],f=s.useState(0),i=H(f,2),b=i[0],x=i[1],j=s.useState(0),F=H(j,2),w=F[0],X=F[1],R=O||h,L=u>0&&y,K=function(){A(C)},Y=function(N){(N.key==="Enter"||N.code==="Enter"||N.keyCode===Je.ENTER)&&K()};s.useEffect(function(){if(!R&&u>0){var T=Date.now()-w,N=setTimeout(function(){K()},u*1e3-w);return function(){c&&clearTimeout(N),X(Date.now()-T)}}},[u,R,k]),s.useEffect(function(){if(!R&&L&&(c||w===0)){var T=performance.now(),N,$=function ce(){cancelAnimationFrame(N),N=requestAnimationFrame(function(ie){var V=ie+w-T,W=Math.min(V/(u*1e3),1);x(W*100),W<1&&ce()})};return $(),function(){c&&cancelAnimationFrame(N)}}},[u,w,R,L,k]);var te=s.useMemo(function(){return Re(m)==="object"&&m!==null?m:m?{closeIcon:E}:{}},[m,E]),re=nn(te,!0),Q=100-(!b||b<0?0:b>100?100:b),D="".concat(a,"-notice");return s.createElement("div",J({},d,{ref:n,className:G(D,o,ve({},"".concat(D,"-closable"),m)),style:t,onMouseEnter:function(N){var $;I(!0),d==null||($=d.onMouseEnter)===null||$===void 0||$.call(d,N)},onMouseLeave:function(N){var $;I(!1),d==null||($=d.onMouseLeave)===null||$===void 0||$.call(d,N)},onClick:p}),s.createElement("div",{className:"".concat(D,"-content")},v),m&&s.createElement("a",J({tabIndex:0,className:"".concat(D,"-close"),onKeyDown:Y,"aria-label":"Close"},re,{onClick:function(N){N.preventDefault(),N.stopPropagation(),K()}}),te.closeIcon),L&&s.createElement("progress",{className:"".concat(D,"-progress"),max:"100",value:Q},Q+"%"))}),we=M.createContext({}),rn=function(n){var a=n.children,t=n.classNames;return M.createElement(we.Provider,{value:{classNames:t}},a)},Ne=8,be=3,Ee=16,cn=function(n){var a={offset:Ne,threshold:be,gap:Ee};if(n&&Re(n)==="object"){var t,o,r;a.offset=(t=n.offset)!==null&&t!==void 0?t:Ne,a.threshold=(o=n.threshold)!==null&&o!==void 0?o:be,a.gap=(r=n.gap)!==null&&r!==void 0?r:Ee}return[!!n,a]},ln=["className","style","classNames","styles"],un=function(n){var a=n.configList,t=n.placement,o=n.prefixCls,r=n.className,u=n.style,y=n.motion,l=n.onAllNoticeRemoved,c=n.onNoticeClose,C=n.stack,v=s.useContext(we),m=v.classNames,g=s.useRef({}),E=s.useState(null),d=H(E,2),p=d[0],A=d[1],k=s.useState([]),O=H(k,2),P=O[0],S=O[1],h=a.map(function(R){return{config:R,key:String(R.key)}}),I=cn(C),f=H(I,2),i=f[0],b=f[1],x=b.offset,j=b.threshold,F=b.gap,w=i&&(P.length>0||h.length<=j),X=typeof y=="function"?y(t):y;return s.useEffect(function(){i&&P.length>1&&S(function(R){return R.filter(function(L){return h.some(function(K){var Y=K.key;return L===Y})})})},[P,h,i]),s.useEffect(function(){var R;if(i&&g.current[(R=h[h.length-1])===null||R===void 0?void 0:R.key]){var L;A(g.current[(L=h[h.length-1])===null||L===void 0?void 0:L.key])}},[h,i]),M.createElement(De,J({key:t,className:G(o,"".concat(o,"-").concat(t),m==null?void 0:m.list,r,ve(ve({},"".concat(o,"-stack"),!!i),"".concat(o,"-stack-expanded"),w)),style:u,keys:h,motionAppear:!0},X,{onAllRemoved:function(){l(t)}}),function(R,L){var K=R.config,Y=R.className,te=R.style,re=R.index,Q=K,D=Q.key,T=Q.times,N=String(D),$=K,ce=$.className,ie=$.style,V=$.classNames,W=$.styles,_e=ke($,ln),le=h.findIndex(function(ae){return ae.key===N}),oe={};if(i){var q=h.length-1-(le>-1?le:re-1),Ce=t==="top"||t==="bottom"?"-50%":"0";if(q>0){var ue,fe,de;oe.height=w?(ue=g.current[N])===null||ue===void 0?void 0:ue.offsetHeight:p==null?void 0:p.offsetHeight;for(var he=0,me=0;me<q;me++){var ge;he+=((ge=g.current[h[h.length-1-me].key])===null||ge===void 0?void 0:ge.offsetHeight)+F}var Fe=(w?he:q*x)*(t.startsWith("top")?1:-1),Le=!w&&p!==null&&p!==void 0&&p.offsetWidth&&(fe=g.current[N])!==null&&fe!==void 0&&fe.offsetWidth?((p==null?void 0:p.offsetWidth)-x*2*(q<3?q:3))/((de=g.current[N])===null||de===void 0?void 0:de.offsetWidth):1;oe.transform="translate3d(".concat(Ce,", ").concat(Fe,"px, 0) scaleX(").concat(Le,")")}else oe.transform="translate3d(".concat(Ce,", 0, 0)")}return M.createElement("div",{ref:L,className:G("".concat(o,"-notice-wrapper"),Y,V==null?void 0:V.wrapper),style:Z(Z(Z({},te),oe),W==null?void 0:W.wrapper),onMouseEnter:function(){return S(function(z){return z.includes(N)?z:[].concat(B(z),[N])})},onMouseLeave:function(){return S(function(z){return z.filter(function(Te){return Te!==N})})}},M.createElement($e,J({},_e,{ref:function(z){le>-1?g.current[N]=z:delete g.current[N]},prefixCls:o,classNames:V,styles:W,className:G(ce,m==null?void 0:m.notice),style:ie,times:T,key:D,eventKey:D,onNoticeClose:c,hovering:i&&P.length>0})))})},fn=s.forwardRef(function(e,n){var a=e.prefixCls,t=a===void 0?"rc-notification":a,o=e.container,r=e.motion,u=e.maxCount,y=e.className,l=e.style,c=e.onAllRemoved,C=e.stack,v=e.renderNotifications,m=s.useState([]),g=H(m,2),E=g[0],d=g[1],p=function(i){var b,x=E.find(function(j){return j.key===i});x==null||(b=x.onClose)===null||b===void 0||b.call(x),d(function(j){return j.filter(function(F){return F.key!==i})})};s.useImperativeHandle(n,function(){return{open:function(i){d(function(b){var x=B(b),j=x.findIndex(function(X){return X.key===i.key}),F=Z({},i);if(j>=0){var w;F.times=(((w=b[j])===null||w===void 0?void 0:w.times)||0)+1,x[j]=F}else F.times=0,x.push(F);return u>0&&x.length>u&&(x=x.slice(-u)),x})},close:function(i){p(i)},destroy:function(){d([])}}});var A=s.useState({}),k=H(A,2),O=k[0],P=k[1];s.useEffect(function(){var f={};E.forEach(function(i){var b=i.placement,x=b===void 0?"topRight":b;x&&(f[x]=f[x]||[],f[x].push(i))}),Object.keys(O).forEach(function(i){f[i]=f[i]||[]}),P(f)},[E]);var S=function(i){P(function(b){var x=Z({},b),j=x[i]||[];return j.length||delete x[i],x})},h=s.useRef(!1);if(s.useEffect(function(){Object.keys(O).length>0?h.current=!0:h.current&&(c==null||c(),h.current=!1)},[O]),!o)return null;var I=Object.keys(O);return Qe.createPortal(s.createElement(s.Fragment,null,I.map(function(f){var i=O[f],b=s.createElement(un,{key:f,configList:i,placement:f,prefixCls:t,className:y==null?void 0:y(f),style:l==null?void 0:l(f),motion:r,onNoticeClose:p,onAllNoticeRemoved:S,stack:C});return v?v(b,{prefixCls:t,key:f}):b})),o)}),dn=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],mn=function(){return document.body},Se=0;function gn(){for(var e={},n=arguments.length,a=new Array(n),t=0;t<n;t++)a[t]=arguments[t];return a.forEach(function(o){o&&Object.keys(o).forEach(function(r){var u=o[r];u!==void 0&&(e[r]=u)})}),e}function vn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.getContainer,a=n===void 0?mn:n,t=e.motion,o=e.prefixCls,r=e.maxCount,u=e.className,y=e.style,l=e.onAllRemoved,c=e.stack,C=e.renderNotifications,v=ke(e,dn),m=s.useState(),g=H(m,2),E=g[0],d=g[1],p=s.useRef(),A=s.createElement(fn,{container:E,ref:p,prefixCls:o,motion:t,maxCount:r,className:u,style:y,onAllRemoved:l,stack:c,renderNotifications:C}),k=s.useState([]),O=H(k,2),P=O[0],S=O[1],h=s.useMemo(function(){return{open:function(f){var i=gn(v,f);(i.key===null||i.key===void 0)&&(i.key="rc-notification-".concat(Se),Se+=1),S(function(b){return[].concat(B(b),[{type:"open",config:i}])})},close:function(f){S(function(i){return[].concat(B(i),[{type:"close",key:f}])})},destroy:function(){S(function(f){return[].concat(B(f),[{type:"destroy"}])})}}},[]);return s.useEffect(function(){d(a())}),s.useEffect(function(){p.current&&P.length&&(P.forEach(function(I){switch(I.type){case"open":p.current.open(I.config);break;case"close":p.current.close(I.key);break;case"destroy":p.current.destroy();break}}),S(function(I){return I.filter(function(f){return!P.includes(f)})}))},[P]),[h,A]}const pn=e=>{const{componentCls:n,iconCls:a,boxShadow:t,colorText:o,colorSuccess:r,colorError:u,colorWarning:y,colorInfo:l,fontSizeLG:c,motionEaseInOutCirc:C,motionDurationSlow:v,marginXS:m,paddingXS:g,borderRadiusLG:E,zIndexPopup:d,contentPadding:p,contentBg:A}=e,k=`${n}-notice`,O=new xe("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:g,transform:"translateY(0)",opacity:1}}),P=new xe("MessageMoveOut",{"0%":{maxHeight:e.height,padding:g,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),S={padding:g,textAlign:"center",[`${n}-custom-content`]:{display:"flex",alignItems:"center"},[`${n}-custom-content > ${a}`]:{marginInlineEnd:m,fontSize:c},[`${k}-content`]:{display:"inline-block",padding:p,background:A,borderRadius:E,boxShadow:t,pointerEvents:"all"},[`${n}-success > ${a}`]:{color:r},[`${n}-error > ${a}`]:{color:u},[`${n}-warning > ${a}`]:{color:y},[`${n}-info > ${a},
      ${n}-loading > ${a}`]:{color:l}};return[{[n]:Object.assign(Object.assign({},We(e)),{color:o,position:"fixed",top:m,width:"100%",pointerEvents:"none",zIndex:d,[`${n}-move-up`]:{animationFillMode:"forwards"},[`
        ${n}-move-up-appear,
        ${n}-move-up-enter
      `]:{animationName:O,animationDuration:v,animationPlayState:"paused",animationTimingFunction:C},[`
        ${n}-move-up-appear${n}-move-up-appear-active,
        ${n}-move-up-enter${n}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${n}-move-up-leave`]:{animationName:P,animationDuration:v,animationPlayState:"paused",animationTimingFunction:C},[`${n}-move-up-leave${n}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[n]:{[`${k}-wrapper`]:Object.assign({},S)}},{[`${n}-notice-pure-panel`]:Object.assign(Object.assign({},S),{padding:0,textAlign:"start"})}]},yn=e=>({zIndexPopup:e.zIndexPopupBase+en+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`}),Me=Ge("Message",e=>{const n=Ke(e,{height:150});return[pn(n)]},yn);var Cn=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const hn={info:s.createElement(sn,null),success:s.createElement(qe,null),error:s.createElement(ze,null),warning:s.createElement(Ze,null),loading:s.createElement(Ue,null)},Ae=e=>{let{prefixCls:n,type:a,icon:t,children:o}=e;return s.createElement("div",{className:G(`${n}-custom-content`,`${n}-${a}`)},t||hn[a],s.createElement("span",null,o))},xn=e=>{const{prefixCls:n,className:a,type:t,icon:o,content:r}=e,u=Cn(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:y}=s.useContext(pe),l=n||y("message"),c=Ie(l),[C,v,m]=Me(l,c);return C(s.createElement($e,Object.assign({},u,{prefixCls:l,className:G(a,v,`${l}-notice-pure-panel`,m,c),eventKey:"pure",duration:null,content:s.createElement(Ae,{prefixCls:l,type:t,icon:o},r)})))};function Nn(e,n){return{motionName:n??`${e}-move-up`}}function ye(e){let n;const a=new Promise(o=>{n=e(()=>{o(!0)})}),t=()=>{n==null||n()};return t.then=(o,r)=>a.then(o,r),t.promise=a,t}var bn=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const En=8,Sn=3,On=e=>{let{children:n,prefixCls:a}=e;const t=Ie(a),[o,r,u]=Me(a,t);return o(s.createElement(rn,{classNames:{list:G(r,u,t)}},n))},Pn=(e,n)=>{let{prefixCls:a,key:t}=n;return s.createElement(On,{prefixCls:a,key:t},e)},Rn=s.forwardRef((e,n)=>{const{top:a,prefixCls:t,getContainer:o,maxCount:r,duration:u=Sn,rtl:y,transitionName:l,onAllRemoved:c}=e,{getPrefixCls:C,getPopupContainer:v,message:m,direction:g}=s.useContext(pe),E=t||C("message"),d=()=>({left:"50%",transform:"translateX(-50%)",top:a??En}),p=()=>G({[`${E}-rtl`]:y??g==="rtl"}),A=()=>Nn(E,l),k=s.createElement("span",{className:`${E}-close-x`},s.createElement(tn,{className:`${E}-close-icon`})),[O,P]=vn({prefixCls:E,style:d,className:p,motion:A,closable:!1,closeIcon:k,duration:u,getContainer:()=>(o==null?void 0:o())||(v==null?void 0:v())||document.body,maxCount:r,onAllRemoved:c,renderNotifications:Pn});return s.useImperativeHandle(n,()=>Object.assign(Object.assign({},O),{prefixCls:E,message:m})),P});let Oe=0;function je(e){const n=s.useRef(null);return Ve(),[s.useMemo(()=>{const t=l=>{var c;(c=n.current)===null||c===void 0||c.close(l)},o=l=>{if(!n.current){const h=()=>{};return h.then=()=>{},h}const{open:c,prefixCls:C,message:v}=n.current,m=`${C}-notice`,{content:g,icon:E,type:d,key:p,className:A,style:k,onClose:O}=l,P=bn(l,["content","icon","type","key","className","style","onClose"]);let S=p;return S==null&&(Oe+=1,S=`antd-message-${Oe}`),ye(h=>(c(Object.assign(Object.assign({},P),{key:S,content:s.createElement(Ae,{prefixCls:C,type:d,icon:E},g),placement:"top",className:G(d&&`${m}-${d}`,A,v==null?void 0:v.className),style:Object.assign(Object.assign({},v==null?void 0:v.style),k),onClose:()=>{O==null||O(),h()}})),()=>{t(S)}))},u={open:o,destroy:l=>{var c;l!==void 0?t(l):(c=n.current)===null||c===void 0||c.destroy()}};return["info","success","warning","error","loading"].forEach(l=>{const c=(C,v,m)=>{let g;C&&typeof C=="object"&&"content"in C?g=C:g={content:C};let E,d;typeof v=="function"?d=v:(E=v,d=m);const p=Object.assign(Object.assign({onClose:d,duration:E},g),{type:l});return o(p)};u[l]=c}),u},[]),s.createElement(Rn,Object.assign({key:"message-holder"},e,{ref:n}))]}function kn(e){return je(e)}const In=M.createContext({});let _=null,U=e=>e(),ee=[],ne={};function Pe(){const{getContainer:e,duration:n,rtl:a,maxCount:t,top:o}=ne,r=(e==null?void 0:e())||document.body;return{getContainer:()=>r,duration:n,rtl:a,maxCount:t,top:o}}const $n=M.forwardRef((e,n)=>{const{messageConfig:a,sync:t}=e,{getPrefixCls:o}=s.useContext(pe),r=ne.prefixCls||o("message"),u=s.useContext(In),[y,l]=je(Object.assign(Object.assign(Object.assign({},a),{prefixCls:r}),u.message));return M.useImperativeHandle(n,()=>{const c=Object.assign({},y);return Object.keys(c).forEach(C=>{c[C]=function(){return t(),y[C].apply(y,arguments)}}),{instance:c,sync:t}}),l}),wn=M.forwardRef((e,n)=>{const[a,t]=M.useState(Pe),o=()=>{t(Pe)};M.useEffect(o,[]);const r=Ye(),u=r.getRootPrefixCls(),y=r.getIconPrefixCls(),l=r.getTheme(),c=M.createElement($n,{ref:n,sync:o,messageConfig:a});return M.createElement(Xe,{prefixCls:u,iconPrefixCls:y,theme:l},r.holderRender?r.holderRender(c):c)});function se(){if(!_){const e=document.createDocumentFragment(),n={fragment:e};_=n,U(()=>{Be(M.createElement(wn,{ref:a=>{const{instance:t,sync:o}=a||{};Promise.resolve().then(()=>{!n.instance&&t&&(n.instance=t,n.sync=o,se())})}}),e)});return}_.instance&&(ee.forEach(e=>{const{type:n,skipped:a}=e;if(!a)switch(n){case"open":{U(()=>{const t=_.instance.open(Object.assign(Object.assign({},ne),e.config));t==null||t.then(e.resolve),e.setCloseFn(t)});break}case"destroy":U(()=>{_==null||_.instance.destroy(e.key)});break;default:U(()=>{var t;const o=(t=_.instance)[n].apply(t,B(e.args));o==null||o.then(e.resolve),e.setCloseFn(o)})}}),ee=[])}function Mn(e){ne=Object.assign(Object.assign({},ne),e),U(()=>{var n;(n=_==null?void 0:_.sync)===null||n===void 0||n.call(_)})}function An(e){const n=ye(a=>{let t;const o={type:"open",config:e,resolve:a,setCloseFn:r=>{t=r}};return ee.push(o),()=>{t?U(()=>{t()}):o.skipped=!0}});return se(),n}function jn(e,n){const a=ye(t=>{let o;const r={type:e,args:n,resolve:t,setCloseFn:u=>{o=u}};return ee.push(r),()=>{o?U(()=>{o()}):r.skipped=!0}});return se(),a}const _n=e=>{ee.push({type:"destroy",key:e}),se()},Fn=["success","info","warning","error","loading"],Ln={open:An,destroy:_n,config:Mn,useMessage:kn,_InternalPanelDoNotUseOrYouWillBeFired:xn},Tn=Ln;Fn.forEach(e=>{Tn[e]=function(){for(var n=arguments.length,a=new Array(n),t=0;t<n;t++)a[t]=arguments[t];return jn(e,a)}});export{sn as R,Tn as s};
