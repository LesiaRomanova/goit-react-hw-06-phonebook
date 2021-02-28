(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={TaskList:"ContactList_TaskList__odGqr",TaskList_item:"ContactList_TaskList_item__31RA8",completed:"ContactList_completed__3B3C9",TaskList_text:"ContactList_TaskList_text__13SCa",TaskList_actions:"ContactList_TaskList_actions__3EPks",TaskList_button:"ContactList_TaskList_button__2fOJX"}},38:function(t,e,n){"use strict";n.r(e);var a,c=n(0),o=n.n(c),r=n(9),s=n.n(r),i=n(5),u=n(22),l=n(12),b=n(6),d=n(2),j=n(3),m=n(8),h=n(39),_={addContact:Object(j.b)("contacts / addContact",(function(t){return{payload:Object(m.a)(Object(m.a)({},t),{},{id:Object(h.a)()})}})),removeContact:Object(j.b)("contacts / removeContact"),changeFilter:Object(j.b)("contacts / changeFilter")},O=Object(j.c)([],(a={},Object(b.a)(a,_.addContact,(function(t,e){var n=e.payload;return[].concat(Object(l.a)(t),[n])})),Object(b.a)(a,_.removeContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),f=Object(j.c)("",Object(b.a)({},_.changeFilter,(function(t,e){return e.payload}))),p=Object(d.c)({items:O,filter:f}),k=n(23),C=n.n(k),v=n(4),T=n(24),x=n.n(T),g=[].concat(Object(l.a)(Object(j.d)({serializableCheck:{ignoredActions:[v.a,v.f,v.b,v.c,v.d,v.e]}})),[C.a]),L={key:"contacts",storage:x.a,blacklist:["filter"]},y=Object(j.a)({reducer:{contacts:Object(v.g)(L,p)},middleware:g,devTools:!1}),E={store:y,persistor:Object(v.h)(y)},F=n(10),N=n(11),w=n(14),S=n(13),A=n(15),J=n.n(A),R=n(1),P=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},B=Object(i.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{contacts:P(n,a)}}),(function(t){return{onRemoveContact:function(e){return t(_.removeContact(e))}}}))((function(t){var e=t.contacts,n=t.onRemoveContact;return Object(R.jsx)("ul",{className:J.a.TaskList,children:e.map((function(t){return Object(R.jsxs)("li",{className:J.a.TaskList_item,children:[t.name+":"+t.number,Object(R.jsx)("button",{className:J.a.TaskList_button,type:"button",name:"delete",onClick:function(){return n(t.id)},children:"delete"})]},t.id)}))})})),I=function(t){var e=t.value,n=t.onChangeFilter;return Object(R.jsxs)("div",{children:["Find contacts by name",Object(R.jsx)("input",{type:"text",value:e,onChange:n})]})};I.defaultProps={value:"",onchangeFilter:function(){}};var V=Object(i.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChangeFilter:function(e){return t(_.changeFilter(e.target.value))}}}))(I),q=n(7),z=n.n(q),D=function(t){Object(w.a)(n,t);var e=Object(S.a)(n);function n(){var t;Object(F.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.props.items.find((function(e){return e.name===t.state.name}));console.log(n),n?alert("".concat(t.state.name," is already in contacts")):0!==t.state.name.length?(t.props.onAddContact(Object(m.a)({},t.state)),t.setState({name:"",number:""})):alert("Fields must be filled!")},t}return Object(N.a)(n,[{key:"render",value:function(){return Object(R.jsxs)("form",{className:z.a.TaskEditor,onSubmit:this.handleSubmit,children:[Object(R.jsxs)("label",{className:z.a.TaskEditor_label,children:["Name",Object(R.jsx)("input",{className:z.a.TaskEditor_input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(R.jsxs)("label",{className:z.a.TaskEditor_label,children:["Number",Object(R.jsx)("input",{className:z.a.TaskEditor_input,type:"text",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(R.jsx)("button",{className:z.a.TaskEditor_button,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),G=Object(i.b)((function(t){return{items:t.contacts.items}}),(function(t){return{onAddContact:function(e){return t(_.addContact(e))}}}))(D),K=function(t){Object(w.a)(n,t);var e=Object(S.a)(n);function n(){return Object(F.a)(this,n),e.apply(this,arguments)}return Object(N.a)(n,[{key:"render",value:function(){return Object(R.jsxs)("div",{children:[Object(R.jsx)("h1",{children:"Phonebook"}),Object(R.jsx)(G,{}),Object(R.jsx)("h2",{children:"Contacts"}),Object(R.jsx)(V,{}),Object(R.jsx)(B,{})]})}}]),n}(c.Component);s.a.render(Object(R.jsx)(o.a.StrictMode,{children:Object(R.jsx)(u.a,{loading:null,persistor:E.persistor,children:Object(R.jsx)(i.a,{store:E.store,children:Object(R.jsx)(K,{})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={TaskEditor:"ContactForm_TaskEditor__1aZVC",TaskEditor_label:"ContactForm_TaskEditor_label__2N9SI",TaskEditor_input:"ContactForm_TaskEditor_input__1JRev",TaskEditorinput:"ContactForm_TaskEditorinput__1WVrx",TaskEditor_button:"ContactForm_TaskEditor_button__2KTc6"}}},[[38,1,2]]]);
//# sourceMappingURL=main.52ebd68b.chunk.js.map