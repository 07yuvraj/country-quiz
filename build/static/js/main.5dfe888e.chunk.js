(this["webpackJsonpquiz-country"]=this["webpackJsonpquiz-country"]||[]).push([[0],{20:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),a=n(14),o=n.n(a),r=(n(20),n(3)),i=(n(5),n(15)),u=n.n(i),j=n(0),l=s.a.memo((function(t){var e=t.options,n=t.questionData,s=t.updateCorrect,a=t.questionNo,o=t.choice,i=t.handleNext,u=Object(c.useState)(" "),l=Object(r.a)(u,2),b=l[0],d=l[1],h=Object(c.useState)(!1),O=Object(r.a)(h,2),f=O[0],m=O[1],v=document.querySelectorAll(".btn");return Object(j.jsxs)("div",{className:"QuestionCard",children:[Object(j.jsx)("h1",{children:"Country Quiz"}),Object(j.jsxs)("div",{children:[1===o?Object(j.jsxs)("p",{children:[Object(j.jsx)("img",{className:"flag-img",src:n.flag,alt:"flag"})," ",Object(j.jsx)("br",{}),"is flag of which Country?"]}):Object(j.jsxs)("p",{children:[n.capital," is capital of which Country?"]}),e.map((function(t){return Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"btn btn-hove",onClick:function(e){d(t),m(!0),e.target.classList.add("display")},children:t})},t)}))]}),f?Object(j.jsxs)("div",{children:[function(t){v.forEach((function(t){t.classList.remove("btn-hove"),t.disabled=!0}));var e=document.querySelector(".display");t===n.name?(e.classList.add("correct"),e.classList.remove("btn")):(e.classList.add("incorrect"),e.classList.remove("btn"))}(b),Object(j.jsx)("button",{className:a<10?"btn2":"btn btn-hove",onClick:function(){i(),b===n.name&&s(),m(!1),v.forEach((function(t){t.classList.add("btn-hove")}))},children:a<10?Object(j.jsx)("span",{children:"Next"}):Object(j.jsx)("span",{children:"Check Result"})})]}):" "]})})),b=n.p+"static/media/undraw_winners_ao2o 2.d76bfdf8.svg";function d(t){var e=t.correctAns,n=t.setCorrect,c=t.setQuestion_no;return Object(j.jsxs)("div",{className:"result",children:[Object(j.jsx)("img",{src:b,alt:"winners"}),Object(j.jsxs)("h1",{children:["Your Score: ",e]}),Object(j.jsx)("button",{className:"btn btn-hove",onClick:function(){n(0),c(1)},children:"Restart Test"})]})}var h=function(){var t=Object(c.useState)(!1),e=Object(r.a)(t,2),n=e[0],s=e[1],a=Object(c.useState)([]),o=Object(r.a)(a,2),i=o[0],b=o[1],h=Object(c.useState)([]),O=Object(r.a)(h,2),f=O[0],m=O[1],v=Object(c.useState)(1),x=Object(r.a)(v,2),p=x[0],g=x[1],C=Object(c.useState)(0),S=Object(r.a)(C,2),N=S[0],y=S[1],L=Object(c.useState)(1),M=Object(r.a)(L,2),q=M[0],w=M[1];return Object(c.useEffect)((function(){var t,e;u.a.get("https://restcountries.eu/rest/v2/all").then((function(n){t=n.data,e=Math.floor(250*Math.random()+1),b(t[e]);var c=[];for(c.push(t[e].name);c.length<4;){var s=Math.floor(250*Math.random()+1);-1===c.indexOf(t[s].name)&&c.push(t[s].name)}m(function(t){for(var e,n,c=t.length;0!==c;)n=Math.floor(Math.random()*c),e=t[c-=1],t[c]=t[n],t[n]=e;return t}(c));var a=Math.floor(2*Math.random()+1);w(a)}))}),[n,p]),Object(j.jsxs)("div",{className:"App",children:[p<11?Object(j.jsx)(l,{options:f,questionData:i,updateCorrect:function(){y(N+1)},handleNext:function(){s(!n),g(p+1)},choice:q,questionNo:p}):Object(j.jsx)(d,{correctAns:N,setQuestion_no:g,setCorrect:y}),Object(j.jsx)("footer",{children:Object(j.jsx)("h2",{children:"With \u2764\ufe0f : Yuvi"})})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),s(t),a(t),o(t)}))};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),O()},5:function(t,e,n){}},[[40,1,2]]]);
//# sourceMappingURL=main.5dfe888e.chunk.js.map