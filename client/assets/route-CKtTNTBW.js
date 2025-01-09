import{r as s,j as e}from"./index-DF-VfARk.js";import{A as p,T as u}from"./index-Pi5MhuwB.js";import{A as C}from"./index-CAyEHKTB.js";import{I as f,b as x,F as c,B as l}from"./index-CZ386Uyv.js";import{a as A}from"./index-DkUROBfk.js";import{u as S}from"./index-BIeDE5Ob.js";import{F as a}from"./index-e6vNLNv5.js";import{I as h}from"./index-C3dcIk9B.js";import"./index-DkfDQLHp.js";import"./collapse-BbEVqHco.js";import"./row-CN7xCyZB.js";import"./responsiveObserver-BnMIucoH.js";import"./ExclamationCircleFilled-DrSG7Lz4.js";import"./pickAttrs-BTWl6K21.js";var T={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z"}}]},name:"google",theme:"outlined"},b=function(r,n){return s.createElement(f,x({},r,{ref:n,icon:T}))},k=s.forwardRef(b),I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 01520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 01270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 010 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z"}}]},name:"login",theme:"outlined"},O=function(r,n){return s.createElement(f,x({},r,{ref:n,icon:I}))},E=s.forwardRef(O);const F=()=>{const{data:t}=p.configuration.getPublic.useQuery(),r=(t==null?void 0:t.authenticationProviders)??[];if(r.length===0)return e.jsx(e.Fragment,{});const n=i=>{switch(i.name){case"google":return e.jsx(k,{});default:return e.jsx(E,{})}};return e.jsx(e.Fragment,{children:e.jsx(c,{vertical:!0,align:"center",children:r.map(i=>e.jsx("a",{href:`/api/auth/${i.name}`,className:"w-full",children:e.jsxs(l,{size:"large",icon:e.jsx(n,{name:i.name}),block:!0,children:["Continue with"," ",e.jsx("span",{style:{textTransform:"capitalize"},children:i.name})]})},i.name))})})};var d;(t=>{t.SocialButtons=F})(d||(d={}));function U(){const t=A(),[r]=S(),[n]=a.useForm(),[i,m]=s.useState(!1),{mutateAsync:y}=p.authentication.login.useMutation({onSuccess:o=>{o.redirect&&(window.location.href=o.redirect)}}),g=r.get("error"),j={Signin:"Try signing in with a different account.",OAuthSignin:"Try signing in with a different account.",OAuthCallback:"Try signing in with a different account.",OAuthCreateAccount:"Try signing in with a different account.",EmailCreateAccount:"Try signing in with a different account.",Callback:"Try signing in with a different account.",OAuthAccountNotLinked:"To confirm your identity, sign in with the same account you used originally.",EmailSignin:"Check your email address.",CredentialsSignin:"Sign in failed. Check the details you provided are correct.",default:"Unable to sign in."}[g??"default"];s.useEffect(()=>{},[]);const w=async o=>{m(!0);try{await y({email:o.email,password:o.password})}catch(v){console.error(`Could not login: ${v.message}`,{variant:"error"}),m(!1)}};return e.jsx(c,{align:"center",justify:"center",vertical:!0,flex:1,children:e.jsxs(c,{vertical:!0,style:{width:"340px",paddingBottom:"50px",paddingTop:"50px"},gap:"middle",children:[e.jsx(C,{description:"Welcome!"}),g&&e.jsx(u.Text,{type:"danger",children:j}),e.jsxs(a,{form:n,onFinish:w,layout:"vertical",requiredMark:!1,children:[e.jsx(a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Email is required"}],children:e.jsx(h,{type:"email",placeholder:"Your email",autoComplete:"email"})}),e.jsx(a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Password is required"}],children:e.jsx(h.Password,{type:"password",placeholder:"Your password",autoComplete:"current-password"})}),e.jsx(a.Item,{children:e.jsx(c,{justify:"end",children:e.jsx(l,{type:"link",onClick:()=>t("/reset-password"),style:{padding:0,margin:0},children:"Forgot password?"})})}),e.jsx(a.Item,{children:e.jsx(l,{type:"primary",htmlType:"submit",block:!0,loading:i,children:"Sign in"})})]}),e.jsx(d.SocialButtons,{}),e.jsx(l,{ghost:!0,style:{border:"none"},onClick:()=>t("/register"),children:e.jsxs(c,{gap:"small",justify:"center",children:[e.jsx(u.Text,{type:"secondary",children:"No account?"})," ",e.jsx(u.Text,{children:"Sign up"})]})})]})})}export{U as default};
