(this["webpackJsonpdigi-app"]=this["webpackJsonpdigi-app"]||[]).push([[0],{107:function(e,a,t){},108:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(10),i=t.n(r),o=(t(76),t(43)),s=t(11),l=(t(77),t(34)),d=t.n(l),u=t(44),p=t(40),j=t(159),h=t(158),m=t(152),b=t(157),f=t(154),O=t(153),x=t(64),v=t.n(x),g=t(110),w=t(147),k=t(150),y=t(45),C=t.n(y),N=t(6),S=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function F(){var e=S(),a=Object(n.useState)(""),t=Object(p.a)(a,2),c=t[0],r=t[1],i=Object(n.useState)(""),o=Object(p.a)(i,2),l=o[0],x=o[1],w=Object(s.f)(),y=function(){var e=Object(u.a)(d.a.mark((function e(a){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,C.a.post("https://cors-anywhere.herokuapp.com/http://13.234.118.47/api/login/",{email:c,password:l},{crossdomain:!0},{headers:{"Content-Type":"application/json"}});case 4:t=e.sent,console.log(t.data.token),localStorage.setItem("token",t.data.token),w.push("/home"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}();return Object(N.jsxs)(k.a,{component:"main",maxWidth:"xs",children:[Object(N.jsx)(m.a,{}),Object(N.jsxs)("div",{className:e.paper,children:[Object(N.jsx)(j.a,{className:e.avatar,children:Object(N.jsx)(v.a,{})}),Object(N.jsx)(g.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(N.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(N.jsx)(b.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:c,onChange:function(e){return r(e.target.value)}}),Object(N.jsx)(b.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:l,onChange:function(e){return x(e.target.value)}}),Object(N.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:y,children:"Sign In"}),Object(N.jsxs)(O.a,{container:!0,children:[Object(N.jsx)(O.a,{item:!0,xs:!0,children:Object(N.jsx)(f.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(N.jsx)(O.a,{item:!0,children:Object(N.jsx)(f.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]})]})}var I=t(155),T=t(156);t(107);var D=function(){var e=Object(s.f)(),a=Object(n.useState)(""),t=Object(p.a)(a,2),c=t[0],r=t[1],i=function(){var e=Object(u.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://cors-anywhere.herokuapp.com/http://13.234.118.47/api/profile/",{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"token 69c5b4bf7f0b925a754bd7dd730d70a7e641fa4d66431231b187c011582fd420"}});case 2:a=e.sent,r(a.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),console.log(c),Object(N.jsxs)("div",{children:[Object(N.jsx)(h.a,{onClick:function(a){a.preventDefault(),localStorage.removeItem("token"),e.push("/")},className:"logout__btn",variant:"contained",color:"primary",children:"Log out"}),Object(N.jsx)(I.a,{className:"card",children:Object(N.jsxs)(T.a,{children:[Object(N.jsx)(g.a,{className:"data",variant:"h5",component:"h2",children:c.username}),Object(N.jsx)(g.a,{className:"data",variant:"h5",component:"h2",children:c.email}),Object(N.jsx)(g.a,{className:"data",variant:"h5",component:"h2",children:c.phone_number}),Object(N.jsx)(g.a,{className:"data",variant:"h5",component:"h2",children:c.designation})]})})]})};var W=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(o.a,{children:Object(N.jsxs)(s.c,{children:[Object(N.jsx)(s.a,{path:"/home",children:Object(N.jsx)(D,{})}),Object(N.jsx)(s.a,{path:"/",children:Object(N.jsx)(F,{})})]})})})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,161)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,r=a.getLCP,i=a.getTTFB;t(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(W,{})}),document.getElementById("root")),A()},76:function(e,a,t){},77:function(e,a,t){}},[[108,1,2]]]);
//# sourceMappingURL=main.397bbab6.chunk.js.map