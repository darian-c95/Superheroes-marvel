(this["webpackJsonpalkemy-challenge-supehero"]=this["webpackJsonpalkemy-challenge-supehero"]||[]).push([[0],{106:function(e,t,a){},128:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(48),c=a.n(r),s=a(14),i=a(33),o=a(32),l=(a(106),a(0)),u=a.n(l),d=a(1),h=a(51);a(108),a(238);h.a.initializeApp({apiKey:"AIzaSyCW3JMAuAAWP1e5uE8kRC4QWWeQBoKcaDI",authDomain:"react-app-heroes.firebaseapp.com",projectId:"react-app-heroes",storageBucket:"react-app-heroes.appspot.com",messagingSenderId:"9529166087",appId:"1:9529166087:web:947200d1c62ecb64925da2"});h.a.firestore();var j="[Auth] Login",m="[Auth] Logout",b="[UI] Set Error",p="[UI] Remove Error",f="[UI] Start loading",O="[UI] Finish loading",g=function(e){return{type:b,payload:e}},x=function(){return{type:p}},v=function(){return{type:O}},N=function(e,t){return function(a){a({type:f}),h.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(w(t.uid,t.displayName)),a(v())})).catch((function(e){console.log(e),a(v())}))}},y=function(e,t,a){return function(n){h.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(d.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:a});case 3:n(w(r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}},w=function(e,t){return{type:j,payload:{uid:e,displayName:t}}},C=function(){return{type:m}},E=a(6),k=function(){var e=Object(i.b)();return Object(E.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark col-lg-12",children:Object(E.jsxs)("div",{className:"navbar-text col-lg-8 home-search-style",children:[Object(E.jsx)("div",{children:Object(E.jsx)("img",{className:"logo-style",src:"https://logos-download.com/wp-content/uploads/2018/07/Marvel_logo_red.png",alt:"logo-marvel"})}),Object(E.jsxs)("div",{className:"navbar-collapse justify-content-end",children:[Object(E.jsx)(o.b,{className:"home-style",to:"/home",children:"Home"}),Object(E.jsx)("div",{className:"navbar-nav",children:Object(E.jsx)(o.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})})]}),Object(E.jsx)("div",{className:"navbar-collapse collapse order-3 dual-collapse2 navbar-nav justify-content-end logout-style",children:Object(E.jsx)(o.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/login",onClick:function(){e(function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.auth().signOut();case 2:t(C());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})})]})})},_=a(15),A=a(54),S=a.n(A),I=a(4),P=a(19),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(s.a)(t,2),r=a[0],c=a[1],i=function(e){var t=e.target;c(Object(P.a)(Object(P.a)({},r),{},Object(I.a)({},t.name,t.value)))};return[r,i]},D=(a(128),a(95)),T=a.n(D),B=a(23),W=a.n(B),R=(a(156),Object(n.createContext)()),L=function(e){var t=e.name,a=e.hairColor,r=e.eyeColor,c=e.alias,s=e.id,i=e.url,o=e.work,l=e.alignment,u=e.height,d=e.weight,h=e.combat,j=e.durability,m=e.intelligence,b=e.power,p=e.speed,f=e.strength,O=Object(n.useContext)(R),g=O.state,x=O.dispatch;return Object(n.useEffect)((function(){localStorage.setItem("heroes",JSON.stringify(g))}),[g]),Object(E.jsx)("div",{className:"col-md-4",children:Object(E.jsxs)("div",{className:"card const-style",children:[Object(E.jsx)("img",{src:i,alt:t,className:"card-img-top"}),Object(E.jsx)("h1",{className:"title-style",children:t}),Object(E.jsxs)("div",{className:"container-add-alignment",children:[Object(E.jsxs)("p",{children:["Alignment: ",l]}),Object(E.jsx)("button",{className:"btn btn-primary col-lg-6 col-md-6",onClick:function(){return function(e,n){var s=function(e){return g.filter((function(t){return t.alignment===e}))};!1===g.map((function(e){return e.id})).some((function(t){return t===e}))?"good"===n&&s("good").length<=2||"bad"===n&&s("bad").length<=2?(x({type:"add",payload:{id:e,name:t,url:i,alignment:n,combat:h,durability:j,intelligence:m,power:b,speed:p,strength:f,work:o,alias:c,eyeColor:r,hairColor:a,height:u,weight:d}}),W.a.fire("Success","New hero added","success")):"neutral"===n?W.a.fire("Error","Neutral heroes can not be added","error"):W.a.fire("Error","Reach your maximum allowed","error"):W.a.fire("Error","Can not be added to the same hero","error")}(s,l)},children:"Add"})]})]})})},M=function(){var e=Object(_.g)(),t=S.a.parse(e.search).q,a=void 0===t?"batman":t,r=Object(n.useState)([]),c=Object(s.a)(r,2),i=c[0],o=c[1];Object(n.useEffect)((function(){l(a)}),[a]);var l=function(e){T()({method:"GET",url:"https://www.superheroapi.com/api.php/3798679520259337/search/".concat(e)}).then((function(e){var t=e.data.results.map((function(e){var t=e.powerstats,a=e.appearance,n=e.work,r=e.name,c=e.biography;return{id:e.id,url:e.image.url,combat:t.combat,durability:t.durability,intelligence:t.intelligence,power:t.power,speed:t.speed,strength:t.strength,eyeColor:a["eye-color"],hairColor:a["hair-color"],height:a.height[1],weight:a.weight[1],work:n.base,name:r,alias:c.aliases,alignment:c.alignment}}));o(t)})).catch((function(e){console.log(e),W.a.fire("Error","There is no hero by that name","error")}))};return Object(E.jsx)("div",{className:"row row-cols-1 row-cols-md-2 g-4 d-flex justify-content-center",children:i.map((function(e){return Object(E.jsx)(L,Object(P.a)({},e),e.id)}))})},U=function(e){var t=e.history,a=Object(_.g)(),n=S.a.parse(a.search).q,r=void 0===n?"batman":n,c=F({searchText:r}),i=Object(s.a)(c,2),o=i[0].searchText,l=i[1],u=function(e){e.preventDefault(),t.push("?q=".concat(o))};return Object(E.jsx)("div",{className:"animate__animated animate__fadeIn",children:Object(E.jsxs)("div",{className:"row adasdss",children:[Object(E.jsx)("div",{className:"col-12 mt-5",children:Object(E.jsxs)("form",{className:"form-style",onSubmit:u,children:[Object(E.jsx)("div",{className:"input-container",children:Object(E.jsx)("input",{type:"text",name:"searchText",autoComplete:"off",value:o,placeholder:"Find your hero",className:"form-control",onChange:l})}),Object(E.jsx)("div",{children:Object(E.jsx)("button",{type:"submit",className:"btn btn-primary m-0 mt-2",onClick:u,children:"Search"})})]})}),Object(E.jsx)("hr",{className:"hr-style"}),Object(E.jsx)(M,{hero:r})]})})},q=(a(157),function(){var e=Object(n.useContext)(R),t=e.state,a=e.dispatch,r=Object(n.useState)([]),c=Object(s.a)(r,2),i=c[0],l=c[1],u=t.map((function(e){var t=e.durability;return parseFloat(t)})).filter((function(e){return!0===Number.isInteger(e)})).reduce((function(e,t){return e+t}),0),d=t.map((function(e){var t=e.combat;return parseFloat(t)})).filter((function(e){return!0===Number.isInteger(e)})).reduce((function(e,t){return e+t}),0),h=t.map((function(e){var t=e.intelligence;return parseFloat(t)})).filter((function(e){return!0===Number.isInteger(e)})).reduce((function(e,t){return e+t}),0),j=t.map((function(e){var t=e.power;return parseFloat(t)})).filter((function(e){return!0===Number.isInteger(e)})).reduce((function(e,t){return e+t}),0),m=t.map((function(e){var t=e.speed;return parseFloat(t)})).filter((function(e){return!0===Number.isInteger(e)})).reduce((function(e,t){return e+t}),0),b=t.map((function(e){var t=e.strength;return parseFloat(t)})).filter((function(e){return!0===Number.isInteger(e)})).reduce((function(e,t){return e+t}),0),p=t.map((function(e){var t=e.height;return parseFloat(t)})),f=p.reduce((function(e,t){return e+t}),0),O=Math.round(f/p.length||0),g=t.map((function(e){var t=e.weight;return parseFloat(t)})),x=g.reduce((function(e,t){return e+t}),0),v=Math.round(x/g.length||0);Object(n.useEffect)((function(){l([{name:"Combat",value:d},{name:"Durability",value:u},{name:"Intelligence",value:h},{name:"Power",value:j},{name:"Speed",value:m},{name:"Strength",value:b},{name:"Average Height",value:O},{name:"Average Weight",value:v}].sort((function(e,t){return t.value-e.value})))}),[t,d,u,h,j,m,b,O,v]);return Object(E.jsxs)("div",{className:"animate__animated animate__fadeIn cont-home",children:[Object(E.jsxs)("div",{className:"text-center",children:[Object(E.jsx)("h2",{className:"text-center",children:"Total"}),Object(E.jsx)("div",{className:"row",children:i.map((function(e){return Object(E.jsxs)("div",{className:"progress",children:[Object(E.jsx)("p",{className:"text-values col-lg-6",children:e.name}),Object(E.jsxs)("div",{className:"cont-flex col-lg-6",children:[Object(E.jsx)("div",{className:"progress-bar bg-info margin-barra",role:"progressbar",style:{width:"".concat(e.value/100*10,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"50"}),Object(E.jsx)("p",{className:"number-value",children:e.value})]})]},e.name)}))})]}),Object(E.jsx)("h2",{className:"text-center",children:"Your Team"}),Object(E.jsx)("div",{className:" col-8 row row-cols-1 row-cols-md-3 g-4 mb-5 cont-team",children:t.map((function(e){return Object(E.jsx)("div",{className:"col",children:Object(E.jsxs)("div",{className:"card card-style",children:[Object(E.jsx)("img",{src:e.url,className:"card-img-top picture-style",alt:e.name}),Object(E.jsx)("h5",{className:"text-center pt-2",children:e.name}),Object(E.jsxs)("div",{className:"cont-button",children:[Object(E.jsx)(o.b,{to:"./hero/".concat(e.name),children:Object(E.jsx)("button",{className:"btn btn-primary",children:"More"})}),Object(E.jsx)("button",{className:"btn btn-danger btn-delete",onClick:function(){return t=e.id,void W.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&(a({type:"delete",payload:t}),W.a.fire("Deleted!","Your file has been deleted.","success"))}));var t},children:"Delete"})]})]})},e.id)}))})]})}),J=(a(158),function(e){var t=e.history,a=Object(n.useContext)(R).state,r=Object(_.h)().heroeName,c=a.filter((function(e){return e.name===r})).map((function(e){return{name:e.name,url:e.url,height:e.height,weight:e.weight,work:e.work,alias:e.alias,eyeColor:e.eyeColor,hairColor:e.hairColor}})),i=Object(s.a)(c,1)[0],o=i.name,l=i.url,u=i.work,d=i.alias,h=i.eyeColor,j=i.hairColor,m=i.height,b=i.weight;return Object(E.jsxs)("div",{className:"row hero-screen",children:[Object(E.jsx)("div",{className:"col-lg-6 text-center",children:Object(E.jsx)("img",{src:l,alt:o,className:"picture-style"})}),Object(E.jsxs)("div",{className:"col-lg-4 hero-description",children:[Object(E.jsx)("h1",{children:o}),Object(E.jsxs)("p",{children:["Alias: ",d]}),Object(E.jsxs)("p",{children:["Work: ",u]}),Object(E.jsxs)("p",{children:["Height: ",m]}),Object(E.jsxs)("p",{children:["Weight: ",b]}),Object(E.jsxs)("p",{children:["Eye Color: ",h]}),Object(E.jsxs)("p",{children:["Hair Color: ",j]}),Object(E.jsx)("button",{className:"btn btn-outline-info btn-lg",onClick:function(){t.length<=2?t.push("/"):t.goBack()},children:"Back"})]})]})}),H=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(k,{}),Object(E.jsx)("div",{className:"container mt-2",children:Object(E.jsxs)(_.d,{children:[Object(E.jsx)(_.b,{exact:!0,path:"/home",component:q}),Object(E.jsx)(_.b,{exact:!0,path:"/hero/:heroeName",component:J}),Object(E.jsx)(_.b,{exact:!0,path:"/search",component:U}),Object(E.jsx)(_.a,{to:"/"})]})})]})},Y=a(55),z=a.n(Y),K=(a(77),function(){var e=Object(i.b)(),t=F({name:"React",email:"challenge@alkemy.org",password:"react123",password2:"react123"}),a=Object(s.a)(t,2),n=a[0],r=a[1],c=n.name,l=n.email,u=n.password,d=n.password2,h=function(){return 0===c.trim().length?(e(g("Name is required")),W.a.fire("Error","Name is required","error"),!1):z.a.isEmail(l)?u!==d||u.length<6?(e(g("Password should be at least 6 characters and match each other")),W.a.fire("Error","Password should be at least 6 characters and match each other","error"),!1):(e(x()),!0):(e(g("Email is not valid")),W.a.fire("Error","Email is not valid","error"),!1)};return Object(E.jsx)("div",{className:"container-login",children:Object(E.jsxs)("form",{className:"form",onClick:function(t){t.preventDefault(),h()&&e(y(l,u,c))},children:[Object(E.jsx)("h3",{className:"auth__title",children:"Register"}),Object(E.jsx)("label",{children:"Name"}),Object(E.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:c,onChange:r}),Object(E.jsx)("label",{children:"Email"}),Object(E.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:l,onChange:r}),Object(E.jsx)("label",{children:"Password"}),Object(E.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:u,onChange:r}),Object(E.jsx)("label",{children:"Password Confirm"}),Object(E.jsx)("input",{type:"password",placeholder:"Confirm",name:"password2",className:"auth__input",value:d,onChange:r}),Object(E.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Register"}),Object(E.jsx)(o.b,{to:"/login",className:"link",children:"Already registered?"})]})})}),Q=function(e){e.history;var t=Object(i.b)(),a=Object(i.c)((function(e){return e.ui})).loading,n=F({email:"challenge@alkemy.org",password:"react123"}),r=Object(s.a)(n,2),c=r[0],l=r[1],u=c.email,d=c.password,h=function(){return z.a.isEmail(u)?d.length<6?(t(g("Password should be at least 6 characters and match each other")),W.a.fire("Error","Password should be at least 6 characters and match each other","error"),!1):(t(x()),!0):(t(g("Email is not valid")),W.a.fire("Error","Email is not valid","error"),!1)};return Object(E.jsx)("div",{className:"container-login",children:Object(E.jsx)("div",{className:"container",children:Object(E.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(N(u,d)),h()&&t(y(u,d))},className:"form",children:[Object(E.jsx)("h3",{className:"auth__title",children:"Login"}),Object(E.jsx)("label",{children:"Email"}),Object(E.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"on",value:u,onChange:l}),Object(E.jsx)("label",{children:"Password"}),Object(E.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",autoComplete:"on",value:d,onChange:l}),Object(E.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:a,children:"Login"}),Object(E.jsx)(o.b,{to:"/register",className:"link",children:"Create new account"})]})})})},X=a(56),G=["isAuthenticated","component"],V=function(e){var t=e.isAuthenticated,a=e.component,n=Object(X.a)(e,G);return Object(E.jsx)(_.b,Object(P.a)(Object(P.a)({},n),{},{component:function(e){return t?Object(E.jsx)(a,Object(P.a)({},e)):Object(E.jsx)(_.a,{to:"/login"})}}))},Z=["isAuthenticated","component"],$=function(e){var t=e.isAuthenticated,a=e.component,n=Object(X.a)(e,Z);return Object(E.jsx)(_.b,Object(P.a)(Object(P.a)({},n),{},{component:function(e){return t?Object(E.jsx)(_.a,{to:"/home"}):Object(E.jsx)(a,Object(P.a)({},e))}}))},ee=function(){var e=Object(i.b)(),t=Object(n.useState)(!0),a=Object(s.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(!1),u=Object(s.a)(l,2),d=u[0],j=u[1];return Object(n.useEffect)((function(){h.a.auth().onAuthStateChanged((function(t){(null===t||void 0===t?void 0:t.uid)?(e(w(t.uid,t.displayName)),j(!0)):j(!1),c(!1)}))}),[e,c,j]),Object(n.useEffect)((function(){if(r)return Object(E.jsx)("h1",{children:"Espere..."})}),[r]),Object(E.jsx)(o.a,{children:Object(E.jsx)("div",{children:Object(E.jsxs)(_.d,{children:[Object(E.jsx)($,{path:"/login",component:Q,isAuthenticated:d}),Object(E.jsx)($,{path:"/register",component:K,isAuthenticated:d}),Object(E.jsx)(V,{path:"/",component:H,isAuthenticated:d})]})})})},te=a(25),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(te.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));default:return e}},ne=a(43),re=a(96),ce={loading:!1,msgError:null},se="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ne.c,ie=Object(ne.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return{uid:t.payload.uid,name:t.payload.displayName};case m:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(P.a)(Object(P.a)({},e),{},{msgError:t.payload});case p:return Object(P.a)(Object(P.a)({},e),{},{msgError:null});case f:return Object(P.a)(Object(P.a)({},e),{},{loading:!0});case O:return Object(P.a)(Object(P.a)({},e),{},{loading:!1});default:return e}}}),oe=Object(ne.d)(ie,se(Object(ne.a)(re.a))),le=function(){return JSON.parse(localStorage.getItem("heroes"))||[]},ue=function(){var e=Object(n.useReducer)(ae,[],le),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(E.jsx)(i.a,{store:oe,children:Object(E.jsx)(R.Provider,{value:{state:a,dispatch:r},children:Object(E.jsx)(ee,{})})})};c.a.render(Object(E.jsx)(ue,{}),document.getElementById("root"))},77:function(e,t,a){}},[[237,1,2]]]);
//# sourceMappingURL=main.bb8a5a18.chunk.js.map