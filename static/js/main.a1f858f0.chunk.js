(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={contactList:"ContactList_contactList__r7Bti"}},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=n(12),i=n(8),l=n(2),u=n(3),b=n.n(u),j=n(0);function d(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),s=Object(l.a)(o,2),i=s[0],u=s[1],d=Object(a.useState)(""),m=Object(l.a)(d,2),p=m[0],O=m[1],f=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":r(a);break;case"number":u(a);break;default:return}},h=function(){r(""),u(""),O("")};return Object(j.jsxs)("form",{className:b.a.inputForm,onSubmit:function(t){t.preventDefault(),e.onSubmit({name:c,number:i,id:p}),h()},children:[Object(j.jsxs)("label",{className:b.a.label,children:[Object(j.jsx)("span",{children:"Name"}),Object(j.jsx)("input",{className:b.a.input,type:"text",name:"name",value:c,placeholder:"i.e. James Bond",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:f})]}),Object(j.jsxs)("label",{className:b.a.label,children:["Number",Object(j.jsx)("input",{className:b.a.input,type:"tel",name:"number",value:i,placeholder:"i.e. 007-00-00",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:f})]}),Object(j.jsx)("button",{className:b.a.submitBtn,type:"submit",children:"Add contact"})]})}d.defaultProps={value:""};var m=function(e){var t=e.id,n=e.name,a=e.number,c=e.onDeleteContact;return Object(j.jsxs)("li",{children:[Object(j.jsxs)("span",{children:[n,":"]}),Object(j.jsx)("span",{children:a}),Object(j.jsx)("button",{type:"button",onClick:function(){return c(t)},children:"Delete"})]},t)},p=n(11),O=n.n(p),f=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(j.jsx)("ul",{className:O.a.contactList,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(j.jsx)(m,{name:a,number:c,onDeleteContact:n,id:t},t)}))})},h=n(7),x=n.n(h),v=function(e){var t=e.value,n=e.onChange;return Object(j.jsxs)("label",{className:x.a.label,children:[" ","Find contacts by name",Object(j.jsx)("input",{className:x.a.input,type:"text",value:t,placeholder:"enter name",onChange:n})]})};v.defaultProps={value:""};var C=v,_=n(21);n(9);function g(){var e=Object(a.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:[]})),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("filter")))&&void 0!==e?e:""})),o=Object(l.a)(r,2),u=o[0],b=o[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var m=u.toLowerCase(),p=n.filter((function(e){return e.name.toLowerCase().includes(m)}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"title",children:"Phonebook"}),Object(j.jsx)(d,{onSubmit:function(e){var t=e.name.toLowerCase(),a=n.find((function(e){return e.name.toLowerCase()===t})),r=Object(i.a)(Object(i.a)({},e),{},{id:Object(_.a)()});a?alert("".concat(a.name," is already in contacts")):c((function(e){return[r].concat(Object(s.a)(e))}))}}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(C,{value:u,onChange:function(e){b(e.currentTarget.value)}}),Object(j.jsx)(f,{contacts:p,onDeleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})}g.defaultProps={contacts:[]};n(18);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={inputForm:"ContactForm_inputForm__3s3li",label:"ContactForm_label__39pAG",submitBtn:"ContactForm_submitBtn__35297"}},7:function(e,t,n){e.exports={label:"Filter_label__1L0jQ",input:"Filter_input__19PY5"}},9:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.a1f858f0.chunk.js.map