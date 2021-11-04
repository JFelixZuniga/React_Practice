(this.webpackJsonpcotizador=this.webpackJsonpcotizador||[]).push([[0],{21:function(e,n,c){},28:function(e,n,c){},29:function(e,n,c){"use strict";c.r(n);var t,a,i,r,o,s,l,j,d=c(1),b=c.n(d),u=c(7),O=c.n(u),x=(c(21),c(9)),h=c(2),m=c(3),p=c(0),g=m.a.header(t||(t=Object(h.a)(["\n  background-color: #26c6da;\n  padding: 10px;\n  font-weight: bold;\n  color: #ffffff;\n"]))),v=m.a.h1(a||(a=Object(h.a)(['\n  font-size: 2rem;\n  margin: 0;\n  font-family: "Slabo 27px", serif;\n  text-align: center;\n']))),f=function(e){var n=e.titulo;return Object(p.jsx)(g,{children:Object(p.jsx)(v,{children:n})})},k=c(10),N=c(13);function C(e){return e.charAt(0).toUpperCase()+e.slice(1)}var w,y,z,S,F,A,E=m.a.div(i||(i=Object(h.a)(["\n  display: flex;\n  margin-bottom: 1rem;\n  align-items: center;\n"]))),P=m.a.label(r||(r=Object(h.a)(["\n  flex: 0 0 100px;\n"]))),T=m.a.select(o||(o=Object(h.a)(["\n  display: block;\n  width: 100%;\n  padding: 1rem;\n  border: 1px solid #e1e1e1;\n  -webkit-appearance: none;\n"]))),B=m.a.input(s||(s=Object(h.a)(["\n  margin: 0 1rem;\n"]))),D=m.a.button(l||(l=Object(h.a)(["\n  background-color: #00838f;\n  font-size: 16px;\n  width: 100%;\n  padding: 1rem;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: bold;\n  border: none;\n  transition: background-color 0.3s ease;\n  margin-top: 2rem;\n  &:hover {\n    background-color: #26c6da;\n    cursor: pointer;\n  }\n"]))),M=m.a.div(j||(j=Object(h.a)(["\n  background-color: red;\n  color: white;\n  padding: 1rem;\n  width: 100%;\n  text-align: center;\n  margin-bottom: 2rem;\n"]))),R=function(e){var n=e.guardarResumen,c=e.guardarCargando,t=Object(d.useState)({marca:"",year:"",plan:""}),a=Object(x.a)(t,2),i=a[0],r=a[1],o=Object(d.useState)(!1),s=Object(x.a)(o,2),l=s[0],j=s[1],b=i.marca,u=i.year,O=i.plan,h=function(e){r(Object(N.a)(Object(N.a)({},i),{},Object(k.a)({},e.target.name,e.target.value)))};return Object(p.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==b.trim()&&""!==u.trim()&&""!==O.trim()){j(!1);var t=2e3,a=function(e){return(new Date).getFullYear()-e}(u);t-=3*a*t/100,t=function(e){var n;switch(e){case"europeo":n=1.3;break;case"americano":n=1.15;break;case"asiatico":n=1.05}return n}(b)*t;var r=function(e){return"basico"===e?1.2:1.5}(O);t=parseFloat(r*t).toFixed(2),c(!0),setTimeout((function(){c(!1),n({cotizacion:Number(t),datos:i})}),3e3)}else j(!0)},children:[l?Object(p.jsx)(M,{children:"Todos los campos son obligatorios"}):null,Object(p.jsxs)(E,{children:[Object(p.jsx)(P,{children:"Marca"}),Object(p.jsxs)(T,{name:"marca",value:b,onChange:h,children:[Object(p.jsx)("option",{value:"",children:"-- Seleccione --"}),Object(p.jsx)("option",{value:"americano",children:"Americano"}),Object(p.jsx)("option",{value:"europeo",children:"Europeo"}),Object(p.jsx)("option",{value:"asiatico",children:"Asiatico"})]})]}),Object(p.jsxs)(E,{children:[Object(p.jsx)(P,{children:"A\xf1o"}),Object(p.jsxs)(T,{name:"year",value:u,onChange:h,children:[Object(p.jsx)("option",{value:"",children:"-- Seleccione --"}),Object(p.jsx)("option",{value:"2021",children:"2021"}),Object(p.jsx)("option",{value:"2020",children:"2020"}),Object(p.jsx)("option",{value:"2019",children:"2019"}),Object(p.jsx)("option",{value:"2018",children:"2018"}),Object(p.jsx)("option",{value:"2017",children:"2017"}),Object(p.jsx)("option",{value:"2016",children:"2016"}),Object(p.jsx)("option",{value:"2015",children:"2015"}),Object(p.jsx)("option",{value:"2014",children:"2014"}),Object(p.jsx)("option",{value:"2013",children:"2013"}),Object(p.jsx)("option",{value:"2012",children:"2012"})]})]}),Object(p.jsxs)(E,{children:[Object(p.jsx)(P,{children:"Plan"}),Object(p.jsx)(B,{type:"radio",name:"plan",value:"basico",checked:"basico"===O,onChange:h})," ","B\xe1sico",Object(p.jsx)(B,{type:"radio",name:"plan",value:"completo",checked:"completo"===O,onChange:h})," ","Completo"]}),Object(p.jsx)(D,{type:"submit",children:"Cotizar"})]})},I=m.a.div(w||(w=Object(h.a)(["\n  padding: 1rem;\n  text-align: center;\n  background-color: #00838f;\n  color: #fff;\n  margin-top: 1rem;\n"]))),J=function(e){var n=e.datos,c=n.marca,t=n.year,a=n.plan;return""===c||""===t||""===a?null:Object(p.jsxs)(I,{children:[Object(p.jsx)("h2",{children:"Resumen de Cotizaci\xf3n"}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:["Marca: ",C(c)," "]}),Object(p.jsxs)("li",{children:["Plan: ",C(a)," "]}),Object(p.jsxs)("li",{children:["A\xf1o del Auto: ",t," "]})]})]})},L=c(32),U=c(31),Y=m.a.p(y||(y=Object(h.a)(["\n  background-color: rgb(127, 224, 237);\n  margin-top: 2rem;\n  padding: 1rem;\n  text-align: center;\n"]))),$=m.a.div(z||(z=Object(h.a)(["\n  text-align: center;\n  padding: 0.5rem;\n  border: 1px solid #26c6da;\n  background-color: rgb(127, 224, 237);\n  margin-top: 1rem;\n  position: relative;\n"]))),q=m.a.p(S||(S=Object(h.a)(["\n  color: #00838f;\n  padding: 1rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0;\n"]))),G=function(e){var n=e.cotizacion;return 0===n?Object(p.jsx)(Y,{children:"Elige marca, a\xf1o y tipo de seguro"}):Object(p.jsx)($,{children:Object(p.jsx)(L.a,{component:"span",className:"resultado",children:Object(p.jsx)(U.a,{classNames:"resultado",timeout:{enter:500,exit:500},children:Object(p.jsxs)(q,{children:["El total es: $ ",Object(p.jsxs)("span",{children:[" ",n," "]})," "]})},n)})})},H=(c(28),function(){return Object(p.jsxs)("div",{className:"sk-circle",children:[Object(p.jsx)("div",{className:"sk-circle1 sk-child"}),Object(p.jsx)("div",{className:"sk-circle2 sk-child"}),Object(p.jsx)("div",{className:"sk-circle3 sk-child"}),Object(p.jsx)("div",{className:"sk-circle4 sk-child"}),Object(p.jsx)("div",{className:"sk-circle5 sk-child"}),Object(p.jsx)("div",{className:"sk-circle6 sk-child"}),Object(p.jsx)("div",{className:"sk-circle7 sk-child"}),Object(p.jsx)("div",{className:"sk-circle8 sk-child"}),Object(p.jsx)("div",{className:"sk-circle9 sk-child"}),Object(p.jsx)("div",{className:"sk-circle10 sk-child"}),Object(p.jsx)("div",{className:"sk-circle11 sk-child"}),Object(p.jsx)("div",{className:"sk-circle12 sk-child"})]})}),K=m.a.div(F||(F=Object(h.a)(["\n  max-width: 600px;\n  margin: 0 auto;\n"]))),Q=m.a.div(A||(A=Object(h.a)(["\n  background-color: #fff;\n  padding: 3rem;\n"])));var V=function(){var e=Object(d.useState)({cotizacion:0,datos:{marca:"",year:"",plan:""}}),n=Object(x.a)(e,2),c=n[0],t=n[1],a=Object(d.useState)(!1),i=Object(x.a)(a,2),r=i[0],o=i[1],s=c.cotizacion,l=c.datos;return Object(p.jsxs)(K,{children:[Object(p.jsx)(f,{titulo:"Cotizador de Seguros"}),Object(p.jsxs)(Q,{children:[Object(p.jsx)(R,{guardarResumen:t,guardarCargando:o}),r?Object(p.jsx)(H,{}):null,Object(p.jsx)(J,{datos:l}),r?null:Object(p.jsx)(G,{cotizacion:s})]})]})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(n){var c=n.getCLS,t=n.getFID,a=n.getFCP,i=n.getLCP,r=n.getTTFB;c(e),t(e),a(e),i(e),r(e)}))};O.a.render(Object(p.jsx)(b.a.StrictMode,{children:Object(p.jsx)(V,{})}),document.getElementById("root")),W()}},[[29,1,2]]]);
//# sourceMappingURL=main.c740b753.chunk.js.map