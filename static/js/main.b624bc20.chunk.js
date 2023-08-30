(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),i=c(1),d=(c(10),c(11),c(4)),o=c.n(d),r=c(0),j=function(e){var t=e.todos,c=e.onTodoSelected,s=e.selectedTodoId;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":s===e.id}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(r.jsx)("span",{className:"icon",children:s===e.id?Object(r.jsx)("i",{className:"far fa-eye-slash"}):Object(r.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var b=function(e){var t=e.query,c=e.onQueryChange,a=e.status,n=e.onStatusChange;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){return n(e.target.value)},children:[Object(r.jsx)("option",{value:s.All,children:"All"}),Object(r.jsx)("option",{value:s.Active,children:"Active"}),Object(r.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},h=(c(13),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.todo,c=e.close,s=Object(i.useState)(null),a=Object(l.a)(s,2),n=a[0],d=a[1];return Object(i.useEffect)((function(){var e;(e=t.userId,u("/users/".concat(e))).then(d)}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),n?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]}):Object(r.jsx)(h,{})]})},O=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(!1),d=Object(l.a)(n,2),o=d[0],O=d[1],x=Object(i.useState)(null),f=Object(l.a)(x,2),p=f[0],v=f[1],N=Object(i.useState)(""),y=Object(l.a)(N,2),g=y[0],C=y[1],S=Object(i.useState)(s.All),k=Object(l.a)(S,2),w=k[0],A=k[1],T=Object(i.useState)(""),E=Object(l.a)(T,2),I=E[0],_=E[1];Object(i.useEffect)((function(){O(!0),u("/todos").then(a).catch((function(){_("Error fetching todos")})).finally((function(){return O(!1)}))}),[]);var L=Object(i.useMemo)((function(){var e=g.toLowerCase();return c.filter((function(t){var c=w!==s.Completed||t.completed,a=w!==s.Active||!t.completed,n=t.title.toLowerCase().includes(e);return c&&a&&n}))}),[c,g,w]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(b,{query:g,onQueryChange:C,status:w,onStatusChange:A})}),Object(r.jsxs)("div",{className:"block",children:[o&&Object(r.jsx)(h,{}),I&&Object(r.jsx)("div",{className:"notification is-danger",children:I}),!o&&!I&&Object(r.jsx)(j,{todos:L,onTodoSelected:v,selectedTodoId:null===p||void 0===p?void 0:p.id})]})]})})}),p&&Object(r.jsx)(m,{todo:p,close:function(){return v(null)}})]})};n.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b624bc20.chunk.js.map