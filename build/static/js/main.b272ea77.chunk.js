(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{18:function(e,n,t){e.exports=t(41)},40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),u=t(16),r=t.n(u),l=t(17),o=t(6),i=t(2),m=function(e){var n=e.value,t=e.handleFilter;return c.a.createElement(c.a.Fragment,null,c.a.createElement("label",null,"Filter shown with"),c.a.createElement("input",{type:"text",value:n,onChange:t}))},f=function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,"name:"," ",c.a.createElement("input",{type:"text",value:e.newName,onChange:e.handleName})),c.a.createElement("div",null,"number:",c.a.createElement("input",{type:"text",value:e.number,onChange:e.handlePhone})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add")))},d=function(e){var n=e.person,t=e.handleDelete;return c.a.createElement("p",null,n.name," ",n.number,c.a.createElement("button",{onClick:t},"delete"))},s=function(e){var n=e.message,t=e.className;return c.a.createElement("div",{className:t},n)},h=t(4),b=t.n(h),p="https://salty-anchorage-15992.herokuapp.com/api/persons",E=function(){return b.a.get(p).then((function(e){return e.data}))},v=function(e){return b.a.post(p,e).then((function(e){return e.data}))},j=function(e){return b.a.delete("".concat(p,"/").concat(e)).then((function(e){return e.data}))},O=function(e,n){return b.a.put("".concat(p,"/").concat(e),n).then((function(e){return e.data}))};t(40);var g=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],u=n[1],r=Object(a.useState)([]),h=Object(i.a)(r,2),b=h[0],p=h[1],g=Object(a.useState)(""),w=Object(i.a)(g,2),k=w[0],N=w[1],S=Object(a.useState)(""),y=Object(i.a)(S,2),C=y[0],D=y[1],x=Object(a.useState)(""),F=Object(i.a)(x,2),A=F[0],J=F[1],L=Object(a.useState)(null),P=Object(i.a)(L,2),B=P[0],I=P[1],T=Object(a.useState)(null),U=Object(i.a)(T,2),q=U[0],z=U[1];function G(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&j(e).then((function(n){u(t.filter((function(n){return n.id!==e})))})).catch((function(e){I(null),z("deleting ".concat(n.name," failed")),H()}))}function H(){setTimeout((function(){return I(null)}),5e3)}return Object(a.useEffect)((function(){E().then((function(e){u(e)}))}),[]),Object(a.useEffect)((function(){var e=t.filter((function(e){return e.name.toLowerCase().includes(A.toLowerCase())}));p(e)}),[A]),c.a.createElement("div",null,c.a.createElement("h1",null,"Numberbook"),B&&c.a.createElement(s,{message:B,className:"success"}),q&&c.a.createElement(s,{message:q,className:"error"}),c.a.createElement(m,{value:A,handleFilter:function(e){J(e.target.value)}}),c.a.createElement("h3",null,"Add a new"),c.a.createElement(f,{handleSubmit:function(e){if(e.preventDefault(),function(e,n){return n.some((function(n){return n.name===e}))}(k,t)){if(window.confirm("".concat(k," is already added to phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name===k})),a=n.id;O(a,Object(o.a)(Object(o.a)({},n),{},{number:C})).then((function(e){u(t.map((function(n){return n.id===a?e:n}))),N(""),D(""),I("Updated phone number for ".concat(n.name)),H()})).catch((function(e){I(null),z("updating ".concat(k," failed")),H()}))}}else v({name:k,number:C}).then((function(e){u([].concat(Object(l.a)(t),[e])),N(""),D(""),I("Added ".concat(k)),H()})).catch((function(e){I(null),z("adding ".concat(k," failed")),H()}))},newName:k,number:C,handleName:function(e){N(e.target.value)},handlePhone:function(e){D(e.target.value)}}),c.a.createElement("h2",null,"Numbers"),A&&b.map((function(e,n){return c.a.createElement(d,{key:e.id,person:e,handleDelete:function(){return G(e.id)}})})),!A&&t.map((function(e,n){return c.a.createElement(d,{key:e.id,person:e,handleDelete:function(){return G(e.id)}})})))};r.a.render(c.a.createElement(g,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b272ea77.chunk.js.map