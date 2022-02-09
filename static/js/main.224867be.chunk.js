(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),o=n.n(c),u=(n(17),n(6)),s=n(11),l=n(2),i=n.n(l),m=n(3),d=n(1),f=function(e){var t=e.color,n=e.text,r=e.onClick;return a.a.createElement("button",{onClick:r,style:{backgroundColor:t},className:"btn"},n)};f.defaultProps={color:"steelblue"};var p=f,b=function(e){var t=e.title,n=e.onAdd,r=e.showAdd;return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,t),a.a.createElement(p,{color:r?"red":"green",text:r?"Close":"Add",onClick:n}))};b.defaultProps={title:"Task Tracker"};var h=b,k=n(10),v=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return a.a.createElement("div",{className:"task ".concat(t.reminder?"reminder":""," "),onDoubleClick:function(){return r(t.id)}},a.a.createElement("h3",null,t.text," ",a.a.createElement(k.a,{style:{color:"red",opacity:.6,cursor:"pointer"},onClick:function(){return n(t.id)}})),a.a.createElement("p",null,t.day))},E=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return a.a.createElement(a.a.Fragment,null,t.map(function(e,t){return a.a.createElement(v,{key:t,task:e,onDelete:n,onToggle:r})}))},y=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(d.a)(n,2),o=c[0],u=c[1],s=Object(r.useState)(""),l=Object(d.a)(s,2),i=l[0],m=l[1],f=Object(r.useState)(!1),p=Object(d.a)(f,2),b=p[0],h=p[1];return a.a.createElement("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),o?(t({text:o,day:i,reminder:b}),u(""),m(""),h(!1)):alert("Please enter a task")}},a.a.createElement("div",{className:"form-control"},a.a.createElement("label",{htmlFor:"text"},"Task"),a.a.createElement("input",{type:"text",id:"text",name:"text",placeholder:"Task text",value:o,onChange:function(e){return u(e.target.value)}})),a.a.createElement("div",{className:"form-control"},a.a.createElement("label",null,"Day & Time"),a.a.createElement("input",{type:"text",id:"day",name:"day",placeholder:"Day description",value:i,onChange:function(e){return m(e.target.value)}})),a.a.createElement("div",{className:"form-control form-control-check"},a.a.createElement("label",{htmlFor:"reminder"},"Reminder"),a.a.createElement("input",{type:"checkbox",checked:b,id:"reminder",name:"reminder",value:b,onChange:function(e){return h(e.currentTarget.checked)}})),a.a.createElement("input",{type:"submit",value:"Save Task",className:"btn btn-block"}))},j=n(9),x=function(){return a.a.createElement("footer",null,a.a.createElement("p",null,"Copyright \xa9 2022"),a.a.createElement("a",{href:"/about"}," "))},g=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)([]),l=Object(d.a)(o,2),f=l[0],p=l[1];Object(r.useEffect)(function(){!function(){var e=Object(m.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var b=function(){var e=Object(m.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(i.a.mark(function e(t){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/totbian/task-tracker-backend".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(m.a)(i.a.mark(function e(t){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/totbian/task-tracker-backend",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,p([].concat(Object(s.a)(f),[r]));case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(m.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/totbian/task-tracker-backend".concat(t),{method:"DELETE"});case 2:p(f.filter(function(e){return e.id!==t}));case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(i.a.mark(function e(t){var n,r,a,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:return n=e.sent,r=Object(u.a)(Object(u.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("https://my-json-server.typicode.com/totbian/task-tracker-backend".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return a=e.sent,e.next=9,a.json();case 9:c=e.sent,p(f.map(function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{reminder:c.reminder}):e}));case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(j.a,null,a.a.createElement("div",{className:"container"},a.a.createElement(h,{onAdd:function(){return c(!n)},showAdd:n}),n&&a.a.createElement(y,{onAdd:v}),f.length>0?a.a.createElement(E,{tasks:f,onDelete:g,onToggle:O}):"No tasks to show",a.a.createElement(x,null)))},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)})};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),O()}},[[12,1,2]]]);
//# sourceMappingURL=main.224867be.chunk.js.map