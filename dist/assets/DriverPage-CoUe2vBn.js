import{_ as D,c as I,w as a,u as l,A as p,t as g,o as n,a as t,b as o,r as i,F as _,I as x,d as C,e as w,f as s,g as u,h as d,i as m}from"./index-C7kpSTE6.js";/* empty css                                                                         */const B=["alt","src"],N=["src"],F={components:{AppHeader:p},data(){return{teams:g}},methods:{navigateToDriver(r){this.$router.push("/tabs/driverDetails/".concat(r))}},setup(){return{router:w()}}},P=Object.assign(F,{__name:"DriverPage",setup(r){return(f,T)=>{const h=s("ion-card-subtitle"),v=s("ion-img"),b=s("ion-card-title"),y=s("ion-card-header"),k=s("ion-card");return n(),I(l(C),null,{default:a(()=>[t(p),t(l(x),{fullscreen:!0},{default:a(()=>[(n(!0),o(_,null,i(l(g),c=>(n(),o("div",{key:c.team},[(n(!0),o(_,null,i(c.drivers,e=>(n(),o("div",{key:e.name},[t(k,{onClick:V=>f.navigateToDriver(e.id)},{default:a(()=>[u("img",{class:"driver-image",alt:e.name,src:e.img},null,8,B),u("img",{class:"number-image",src:e.driverNumberImg},null,8,N),t(y,null,{default:a(()=>[t(h,null,{default:a(()=>[d(m(c.team),1)]),_:2},1024),t(b,{style:{display:"flex","justify-content":"space-between"}},{default:a(()=>[d(m(e.name)+" ",1),t(v,{src:e.countryFlagImg,style:{width:"10%"}},null,8,["src"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])]))),128))]))),128))]),_:1})]),_:1})}}}),A=D(P,[["__scopeId","data-v-0e532f8a"]]);export{A as default};
