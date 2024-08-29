import{r as P}from"./resumen-fd0581c0.js";import{V as I,W as S,U as k,d as U,u as O,r as x,k as m,l as w,S as C,R as b,p as n,y as i,s as o,n as $,X as A,x as T,Y as g,Z as y,$ as B,a0 as V,_ as D,O as E,P as M,b as R,w as L,F as W,G as q,H as K,Q as F}from"./index-6b3bda83.js";const G={async validateOrder(d){const c=I();try{c.setLoading(!0,"cargando");const l=await S.post(`${k}/validate-order-code`,d);if(l.status===200)l.data.valid?(U.push("/gracias"),c.visible.show_validate=!1):alert("codigo incorrecto"),c.setLoading(!1,"validando tu orden");else return c.setLoading(!1,"validando tu orden"),alert("error, intentalo de nuevo"),null}catch(l){return c.setLoading(!1,"validando tu orden"),console.error("An error occurred while sending the order:",l),alert("error, intentalo de nuevo"),null}}},H={style:{display:"flex","flex-direction":"column",gap:"2rem",position:"relative"}},j={key:0,style:{position:"absolute","background-color":"#ffffff9f",left:"0",right:"0",width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center"}},z=n("img",{src:B,alt:"",style:{width:"100%","max-width":"10rem"}},null,-1),Q=n("p",{style:{"max-width":"100%",color:"black"}},"Hemos enviado un código de 3 dígitos a tu WhatsApp. Introdúcelo para validar tu pedido.",-1),X={style:{display:"flex",gap:"1rem",margin:"auto"}},Y={__name:"validate",setup(d){const c=O(),l=I(),t=x({first:"",second:"",third:""}),h=(a,e)=>{const f=e.target.value;/^\d$/.test(f)?(t.value[a]=f,V(()=>r(a))):e.target.value=""},p=(a,e)=>{e.target.value===""&&V(()=>_(a))},r=a=>{a==="first"?(t.value.second="",document.querySelector("#secondInput").focus()):a==="second"&&(t.value.third="",document.querySelector("#thirdInput").focus())},_=a=>{a==="second"?(t.value.fist="",document.querySelector("#firstInput").focus()):a==="third"&&document.querySelector("#secondInput").focus()},v=async()=>{const a={order_id:c.last_order,order_code:t.value.first+t.value.second+t.value.third};await G.validateOrder(a)};return(a,e)=>{const f=m("Button"),u=m("Dialog");return w(),C(u,{modal:"",class:"mx-2",style:{width:"20rem",display:"flex","flex-direction":"column","background-color":"#fff"},visible:o(l).visible.show_validate,"onUpdate:visible":e[9]||(e[9]=s=>o(l).visible.show_validate=s)},{footer:b(()=>[n("div",null,[i(f,{disabled:o(l).loading.visible,onClick:v,style:{border:"none",width:"100%","font-weight":"bold"},label:"Validar mi pedido",severity:"help"},null,8,["disabled"])])]),default:b(()=>[n("div",H,[o(l).loading.visible?(w(),$("div",j,[i(o(A),{style:{width:"100px",height:"100px"},strokeWidth:"4",animationDuration:".1s","aria-label":"Custom ProgressSpinner"})])):T("",!0),z,Q,n("div",X,[i(o(g),{modelValue:t.value.first,"onUpdate:modelValue":e[0]||(e[0]=s=>t.value.first=s),id:"firstInput",style:{width:"3rem",height:"2rem","text-align":"center"},maxlength:"1",onInput:e[1]||(e[1]=s=>h("first",s)),onKeydown:e[2]||(e[2]=y(s=>p("first",s),["backspace"]))},null,8,["modelValue"]),i(o(g),{modelValue:t.value.second,"onUpdate:modelValue":e[3]||(e[3]=s=>t.value.second=s),id:"secondInput",style:{width:"3rem",height:"2rem","text-align":"center"},maxlength:"1",onInput:e[4]||(e[4]=s=>h("second",s)),onKeydown:e[5]||(e[5]=y(s=>p("second",s),["backspace"]))},null,8,["modelValue"]),i(o(g),{modelValue:t.value.third,"onUpdate:modelValue":e[6]||(e[6]=s=>t.value.third=s),id:"thirdInput",style:{width:"3rem",height:"2rem","text-align":"center"},maxlength:"1",onInput:e[7]||(e[7]=s=>h("third",s)),onKeydown:e[8]||(e[8]=y(s=>p("third",s),["backspace"]))},null,8,["modelValue"])])])]),_:1},8,["visible"])}}},Z="/images/WhatsApp.svg.webp",J={async getPaymentMethods(){try{const d=await S.get(`${k}/payment_methods/`);return d.status===200?d.data:(console.error("An error occurred while fetching the ingredients:",d.status),null)}catch(d){return console.error("An error occurred while fetching the ingredients:",d),null}}};const N=d=>(q("data-v-0593b311"),d=d(),K(),d),ee={class:"col-12 px-2 my-8 p-0",style:{"margin-top":"6rem"}},te=N(()=>n("b",null,"CARRITO DE COMPRAS",-1)),oe={class:"grid mx-auto",style:{"max-width":"800px"}},se={class:"col-12 md:col-6 p-1 md:px-4",style:{display:"flex","flex-direction":"column",gap:"1rem"}},le={class:"flex flex-wrap align-items-center mb-2 gap-2",style:{width:"100%"}},ne={class:"flex flex-wrap align-items-center mb-2 gap-2",style:{width:"100%"}},ae={class:"flex flex-wrap align-items-center mb-2 gap-2",style:{width:"100%"}},re={class:"flex flex-wrap align-items-center mb-2 gap-2 text-white",style:{width:"100%"}},ie=N(()=>n("p",null,[F("El telefono debe estar disponible en WhatsApp para validar el pedido "),n("img",{style:{width:"1.5rem"},src:Z,alt:""})],-1)),de={class:"flex flex-wrap align-items-center mb-2 gap-2",style:{width:"100%"}},ue={__name:"pay",setup(d){const c=O(),l=E();x(0);const t=M(),h=x([]);return R(async()=>{var p;h.value=await J.getPaymentMethods(),((p=t.user.payment_method_option)==null?void 0:p.id)!=7?l.setNeighborhoodPrice():l.setNeighborhoodPriceCero()}),L(()=>t.user.payment_method_option,p=>{p.id==7?(l.current_delivery=l.location.neigborhood.delivery_price,l.location.neigborhood.delivery_price=0):l.setNeighborhoodPrice()}),(p,r)=>{const _=m("P"),v=m("InputText"),a=m("InputMask"),e=m("Dropdown"),f=m("Textarea");return w(),$(W,null,[n("div",ee,[i(_,{class:"text-center text-6xl my-8 text-white"},{default:b(()=>[te]),_:1}),n("div",oe,[n("div",se,[n("div",le,[i(v,{style:{width:"100%"},id:"username",placeholder:"NOMBRE",modelValue:o(t).user.name,"onUpdate:modelValue":r[0]||(r[0]=u=>o(t).user.name=u),invalid:""},null,8,["modelValue"])]),n("div",ne,[i(v,{onClick:r[1]||(r[1]=u=>o(l).setVisible("currentSite",!0)),modelValue:o(l).location.neigborhood.name,style:{width:"100%"},id:"username",placeholder:"Barrio",invalid:"",readonly:""},null,8,["modelValue"])]),n("div",ae,[i(v,{modelValue:o(t).user.address,"onUpdate:modelValue":r[2]||(r[2]=u=>o(t).user.address=u),style:{width:"100%"},id:"username",placeholder:"DIRECCION",invalid:""},null,8,["modelValue"])]),n("div",re,[ie,i(a,{modelValue:o(t).user.phone_number,"onUpdate:modelValue":r[3]||(r[3]=u=>o(t).user.phone_number=u),style:{width:"100%"},prefix:"+57",id:"basic",mask:"999 999 9999",placeholder:"TELEFONO"},null,8,["modelValue"])]),n("div",de,[i(e,{modelValue:o(t).user.payment_method_option,"onUpdate:modelValue":r[4]||(r[4]=u=>o(t).user.payment_method_option=u),style:{width:"100%"},id:"username",placeholder:"METODO DE PAGO",invalid:"",options:h.value,optionLabel:"name"},null,8,["modelValue","options"])]),i(f,{modelValue:o(c).cart.order_notes,"onUpdate:modelValue":r[5]||(r[5]=u=>o(c).cart.order_notes=u),style:{height:"8rem",resize:"none"},placeholder:"NOTAS:"},null,8,["modelValue"])]),i(P,{class:"md:col-6"})])]),i(Y)],64)}}},me=D(ue,[["__scopeId","data-v-0593b311"]]);export{me as default};
