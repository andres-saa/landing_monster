import{_ as $,O as R,r as D,u as L,P as N,b as U,e as B,g as T,o as M,d as P,k as I,l as i,n as r,p as t,t as n,s,Q as C,F as y,C as f,y as _,R as E,x as q,E as h,G as V,H as j}from"./index-6b3bda83.js";const l=g=>(V("data-v-cb21688a"),g=g(),j(),g),F={class:"p-2 col-12 my-3",style:{height:"auto","min-height":"90vh",display:"flex","justify-content":"center","align-items":"center"}},G={class:"shadow-3 p-4",style:{"border-radius":"0.5rem","max-width":"500px"}},H={class:"text-4xl text-center mt-5",style:{"font-weight":"bold"}},Q=l(()=>t("p",{class:"text-2xl text-center mb-5",style:{"font-weight":"bold"}},"🔥MUCHAS GRACIAS POR TU COMPRA!🔥",-1)),z={class:"text-4xl text-center my-5",style:{"font-weight":"bold","text-transform":"uppercase"}},Z=l(()=>t("span",{class:"text-2xl"},"ID DEL PEDIDO",-1)),J=l(()=>t("br",null,null,-1)),K=l(()=>t("p",{class:"text-2xl text-center my-3 p-3",style:{"border-radius":".3rem","background-color":"var(--primary-color)",color:"white"}},"Hemos recibido tu pedido y en breve será despachado",-1)),W={id:"factura",style:{width:"100%","text-transform":"uppercase"}},X={class:"",style:{width:"auto",color:"black"}},Y=l(()=>t("div",{class:"",style:{"font-weight":"bold",color:"white",margin:"0","background-color":"black","align-items":"center",display:"grid","grid-template-columns":"auto auto"}},[t("div",{style:{width:"100%"},class:"p-1"},[t("b",null," PRODUCTOS")]),t("div",{class:"p-1"},[t("p",{style:{"text-align":"end","font-weight":"bold"}},[t("b",null," TOTAL ")])])],-1)),tt={style:{display:"grid","grid-template-columns":"auto auto"}},et={class:"p-0 m-0"},ot={style:{"text-align":"end",color:"black"}},st=l(()=>t("div",{style:{"background-color":"rgba(0, 0, 0, 0.286)",height:"1px"}},null,-1)),nt={class:"p-1",style:{"background-color":"black","font-weight":"bold",color:"white",width:"100%",margin:"0"}},at={style:{display:"grid","grid-template-columns":"auto 20%","align-items":"center"}},lt={style:{"text-align":"end",color:"black"}},it={class:"",style:{display:"grid",color:"","margin-top":"0.5rem","grid-template-columns":"auto auto"}},rt=l(()=>t("div",{class:""},[t("span",{style:{"font-weight":"bold"}},[t("b",null,"Subtotal")])],-1)),ct={class:""},dt={style:{"text-align":"end","font-weight":"bold",color:"black"}},ut=l(()=>t("div",{class:""},[t("span",{style:{"font-weight":"bold"}},[t("b",null,"Domicilio")])],-1)),pt={class:""},_t={style:{"text-align":"end","font-weight":"bold",color:"black"}},ht=l(()=>t("div",{class:""},[t("span",{style:{"font-weight":"bold",color:"black"}},[t("b",null,"Total")])],-1)),gt={class:""},mt={style:{"text-align":"end",color:"black","font-weight":"bold"}},bt=l(()=>t("div",{class:""},null,-1)),yt={style:{display:"flex","flex-direction":"column",gap:"1rem"}},ft=["href"],vt={__name:"gracias",setup(g){const b=R(),c=D(""),o=L(),d=N();U(()=>{var u,p;c.value=`Hola soy *${d.user.name.toUpperCase()}* 🤗 acabo de hacer el siguiente pedido en la página web. El número de la orden es *#${o.last_order}*.


*Escribo para Realizar la Transferecia*

*🛒 PRODUCTOS*
${o.cart.products.map(e=>`*${e.quantity}* ${e.product.product_name}`).join(`
`)}

`,o.cart.additions.length>0&&(c.value+=`*➕ ADICIONES*
${o.cart.additions.filter(e=>e.group=="ADICIONES").map(e=>`*${e.quantity}* ${e.name}`).join(`
`)}

`),o.cart.additions.filter(e=>e.group=="CAMBIOS").length>0&&(c.value+=`*➕ CAMBIOS*
${o.cart.additions.filter(e=>e.group=="CAMBIOS").map(e=>`*${e.quantity}* ${e.name}`).join(`
`)}

`),o.cart.additions.filter(e=>e.group=="SALSAS").length>0&&(c.value+=`*➕ SALSAS*
${o.cart.additions.filter(e=>e.group=="SALSAS").map(e=>` ${e.name}`).join(`
`)}

`),c.value+=`*📍 DIRECCIÓN*
${d.user.address} BARRIO ${(p=(u=b.location)==null?void 0:u.neigborhood)==null?void 0:p.name}

*📞 TELEFONO*
${d.user.phone_number}

*📝 NOTAS*
${o.cart.order_notes||"Sin notas"}

*💰 METODO DE PAGO*
${d.user.payment_method_option.name}

*Muchas Gracias* 🙏`,console.log(c.value)});const k=B(()=>{const u="https://api.whatsapp.com/send",p=new URLSearchParams({phone:"573053447255",text:c.value});return`${u}?${p.toString()}`});return T(()=>{d.user={name:"",neigborhood:"",address:"",phone_number:"",payment_method_option:""},o.cart={products:[],total_cost:0,additions:[]}}),M(()=>{o.cart.products.length<=0&&P.push("/")}),(u,p)=>{var S,w,x,A;const e=I("Button"),v=I("router-link");return i(),r("div",F,[t("div",G,[t("p",H," 🤩"+n(s(d).user.name.toUpperCase())+"🤩",1),Q,t("p",z,[Z,C(),J,C(" #"+n(s(o).last_order),1)]),K,t("div",W,[t("div",X,[Y,(i(!0),r(y,null,f(s(o).cart.products,a=>(i(),r("div",null,[t("div",tt,[t("p",et,n(a.quantity)+" "+n(a.product.product_name),1),t("div",null,[t("p",ot,n(s(h)(a.total_cost)),1)])]),st]))),256)),(i(!0),r(y,null,f({ADICIONES:s(o).cart.additions.filter(a=>a.group=="ADICIONES"),SALSAS:s(o).cart.additions.filter(a=>a.group=="SALSAS"),CAMBIOS:s(o).cart.additions.filter(a=>a.group=="CAMBIOS")},(a,O)=>(i(),r("div",{key:O,style:{position:"relative","margin-top":"0.5rem"}},[t("p",nt,[t("b",null,n(O),1)]),(i(!0),r(y,null,f(a,m=>(i(),r("div",null,[t("div",at,[t("div",null,[t("p",null,n(m.quantity)+" "+n(m.name),1)]),t("div",null,[t("p",lt,n(s(h)(m.price*m.quantity)),1)])])]))),256))]))),128)),t("div",it,[rt,t("div",ct,[t("p",dt,[t("b",null,n(s(h)(s(o).cart.total_cost)),1)])]),ut,t("div",pt,[t("p",_t,[t("b",null,n(s(h)((w=(S=s(b).location)==null?void 0:S.neigborhood)==null?void 0:w.delivery_price)),1)])]),ht,t("div",gt,[t("p",mt,[t("b",null,n(s(h)(((A=(x=s(b).location)==null?void 0:x.neigborhood)==null?void 0:A.delivery_price)+s(o).cart.total_cost)),1)])]),bt])])]),t("div",yt,[_(v,{to:"/rastrear-pedido"},{default:E(()=>[_(e,{class:"mt-3",icon:"pi ",iconPos:"right",severity:"warning",style:{"font-weight":"bold",width:"100%"},label:"PUEDES RASTREARLO AQUI"})]),_:1}),s(d).user.payment_method_option.id==6?(i(),r("a",{key:0,href:k.value,target:"_blank"},[_(e,{icon:"pi pi-whatsapp",severity:"danger",class:"wsp",style:{"font-weight":"bold","background-color":"#00b66c",border:"none",width:"100%"},label:"REALIZAR TRANSFERENCIA"})],8,ft)):q("",!0),_(v,{to:"/"},{default:E(()=>[_(e,{icon:"pi pi-arrow-left",severity:"danger",outlined:"",style:{"font-weight":"bold",border:"none",width:"100%"},label:"VOLVER AL MENU"})]),_:1})])])])}}},wt=$(vt,[["__scopeId","data-v-cb21688a"]]);export{wt as default};
