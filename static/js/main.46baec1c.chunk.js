(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={container:"App_container__79Npq",title:"App_title__2tC37"}},2:function(t,e,n){t.exports={form:"ContactForm_form__3OybF",label:"ContactForm_label__2rjg5",input:"ContactForm_input__2W4_Z",inputBtn:"ContactForm_inputBtn__twi_F"}},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),i=n.n(c),r=n(14),s=n.n(r),o=(n(20),n(11)),l=n(3),u=n(4),b=n(7),m=n(6),d=n(5),j=n(13),h=n(23),f=n(2),p=n.n(f),O={name:"",number:"",id:""},_=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state=Object(j.a)({},O),t.handleChange=function(e){var n=e.target;t.setState(Object(d.a)({id:Object(h.a)()},n.name,n.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.addContact(Object(j.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:p.a.form,action:"",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:p.a.label,htmlFor:"name",children:[" ","Name",Object(a.jsx)("input",{className:p.a.input,type:"text",name:"name",value:e,placeholder:"name",onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:p.a.label,htmlFor:"number",children:[" ","Number",Object(a.jsx)("input",{className:p.a.input,type:"tel",name:"number",value:n,placeholder:"number",onChange:this.handleChange})]}),Object(a.jsx)("input",{className:p.a.inputBtn,type:"submit",value:"Add contuct"})]})})}}]),n}(c.Component),x=n(8),C=n.n(x),v=function(t){var e=t.list,n=t.toDelete;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("ul",{className:C.a.list,children:e.map((function(t){return Object(a.jsxs)("li",{className:C.a.listItem,children:[t.name," : ",t.number,Object(a.jsx)("button",{className:C.a.btn,type:"button",onClick:function(){return n(t.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t.id)}))})})},g=n(9),F=n.n(g),N=function(t){var e=t.filterRender,n=t.filter;return Object(a.jsxs)("div",{className:F.a.box,children:[Object(a.jsx)("label",{className:F.a.label,children:"Find contacts by name"}),Object(a.jsx)("input",{className:F.a.input,type:"text",value:n,onChange:function(t){return e(t.target.value)}})]})},y=n(10),S=n.n(y),k=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.toAddContact=function(e){if(t.state.contacts.some((function(t){return t.name===e.name})))return alert("".concat(e.name," \u0443\u0436\u0435 \u0435\u0441\u0442\u044c"));e.name.length>=1&&t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[e])}}))},t.filterRender=function(e){t.setState({filter:e})},t.filterTask=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.toDelete=function(e){var n=t.state.contacts,a=n.find((function(t){return t.id===e})),c=n.indexOf(a);t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts.slice(0,c)),Object(o.a)(t.contacts.slice(c+1)))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=this.filterTask();return Object(a.jsxs)("div",{className:S.a.container,children:[Object(a.jsx)("h1",{className:S.a.title,children:"Phonebook"}),Object(a.jsx)(_,{addContact:this.toAddContact}),Object(a.jsx)("h2",{className:S.a.title,children:"Contacts"}),e.length>1&&Object(a.jsx)(N,{value:n,filterRender:this.filterRender}),Object(a.jsx)(v,{list:c,toDelete:this.toDelete})]})}}]),n}(c.Component),w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),i(t),r(t)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),w()},8:function(t,e,n){t.exports={list:"ContactList_list__3CYGQ",btn:"ContactList_btn__38YBf",listItem:"ContactList_listItem__3Dju5"}},9:function(t,e,n){t.exports={box:"Filter_box__1qd1q",input:"Filter_input__3p4Fa",label:"Filter_label__3FPZ2"}}},[[21,1,2]]]);
//# sourceMappingURL=main.46baec1c.chunk.js.map