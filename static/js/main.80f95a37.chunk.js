(this.webpackJsonpquizapp=this.webpackJsonpquizapp||[]).push([[0],{72:function(e,t,n){},74:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),i=n.n(c),o=(n(72),n(32)),s=n.n(o),u=n(44),l=n(19),j=(n(74),n(110)),d=n(116),b=n(119),p=n(120),h=n(123),m=n(61),f=n.n(m),x=n(83),O=n(118),v=n(122),g=n(16),y=n(113),C=n(115),E=n(117),q=n(60),N=n.n(q),w=n(6),S=Object(j.a)({root:{width:"60%",padding:"30px",backgroundColor:"#DEDEDE"},resultContainer:{display:"flex",flexDirection:"column",alignItems:"center"},resultDiv:{marginBottom:"30px",fontFamily:"Roboto-Mono, monospace"},resetButton:{"&.MuiIconButton-root":{borderRadius:"unset"}}});var k=function(e){var t=S(),n=e.count,a=e.getbackToQuiz;return Object(w.jsx)("div",{className:t.resultContainer,children:Object(w.jsx)(y.a,{className:t.root,children:Object(w.jsxs)(C.a,{children:[Object(w.jsxs)(d.a,{variant:"h5",className:t.resultDiv,children:["Your Result-Correct Answers::",n]}),Object(w.jsxs)(E.a,{className:t.resetButton,onClick:function(){a()},color:"primary",children:["RESET",Object(w.jsx)(N.a,{})]})]})})})},T=Object(j.a)({root:{minWidth:"40%"},paperCss:{width:"60%",height:"300px"},questionContainer:{display:"flex",alignItems:"center",flexDirection:"column"},buttonContainer:{display:"flex",padding:"10px 10px"},button:{marginLeft:"auto"},questionCard:{padding:"20px",margin:"25px 0px",height:"100px"},timerStyle:{fontFamily:"Roboto-Mono, monospace"},colorCorrectAnswer:{backgroundColor:"#92F7BA",padding:"15px",borderRadius:"7px",color:"#474747"},colorWrongAnswer:{backgroundColor:"#FF7A7A",padding:"15px",borderRadius:"7px",color:"#474747"}});var A=function(e){var t=T(),n=e.questions,r=e.gobacktoHome,c=Object(a.useState)(0),i=Object(l.a)(c,2),o=i[0],s=i[1],u=Object(a.useState)(0),j=Object(l.a)(u,2),b=j[0],p=j[1],h=Object(a.useState)(10),m=Object(l.a)(h,2),f=m[0],y=m[1],C=Object(a.useState)(""),E=Object(l.a)(C,2),q=E[0],N=E[1],S=Object(a.useState)(!1),A=Object(l.a)(S,2),F=A[0],D=A[1];Object(a.useEffect)((function(){if(o<11&&g.a.isEmpty(q)){var e=setInterval((function(){y((function(e){return 1===e?10:e-1}))}),1e3);return function(){return clearInterval(e)}}}),[o,n,q]),Object(a.useEffect)((function(){g.a.isEqual(f,10)&&s((function(e){return e+1}))}),[f]),Object(a.useEffect)((function(){11===o&&(s(0),D(!0))}),[o,r]);var B=function(e){g.a.isEqual(e,n[o-1].correct_answer)&&(p((function(e){return e+1})),N("Correct")),g.a.isEqual(e,n[o-1].correct_answer)||N("Wrong"),setTimeout((function(){y(10),N("")}),3e3)};return Object(w.jsxs)("div",{children:[!F&&Object(w.jsxs)("div",{className:t.questionContainer,children:[Object(w.jsxs)(x.a,{elevation:5,className:t.paperCss,children:[Object(w.jsxs)("div",{className:t.buttonContainer,children:[Object(w.jsxs)(d.a,{variant:"h6",className:t.timerStyle,children:["Timer: ",f]}),Object(w.jsxs)(d.a,{variant:"h6",className:"".concat(t.button," ").concat(t.timerStyle),children:["Question no:: ",o]})]}),n[o-1]&&Object(w.jsx)("div",{className:t.questionCard,children:Object(w.jsx)(d.a,{variant:"h5",children:n[o-1].question})}),Object(w.jsxs)("div",{className:t.buttonContainer,children:[Object(w.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){return B("True")},disabled:!g.a.isEmpty(q),children:"TRUE"}),Object(w.jsx)(O.a,{className:t.button,variant:"contained",color:"primary",onClick:function(){return B("False")},disabled:!g.a.isEmpty(q),children:"FALSE"})]})]}),q&&Object(w.jsx)(v.a,{autoHideDuration:3e3,open:!g.a.isEmpty(q),anchorOrigin:{vertical:"bottom",horizontal:"center"},children:Object(w.jsx)("div",{className:g.a.isEqual(q,"Correct")?t.colorCorrectAnswer:t.colorWrongAnswer,children:Object(w.jsx)(d.a,{variant:"h6",className:t.timerStyle,children:g.a.isEqual(q,"Correct")?q:"".concat(q,"----Correct Answer:").concat(n[o-1].correct_answer)})})})]}),F&&Object(w.jsx)(k,{count:b,getbackToQuiz:function(){D(!1),r()}})]})},F=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://opentdb.com/api.php?amount=10&category=18&difficulty="+t+"&type=boolean",a={method:"GET"},e.next=4,fetch(n,a);case 4:if(!(r=e.sent).ok){e.next=7;break}return e.abrupt("return",r.json().then((function(e){return e})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=Object(j.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:520,top:"50px"},selectEmpty:{marginTop:e.spacing(2)},errorText:{marginTop:"60px",color:"#EB0909"}}}));var B=function(){var e=D(),t=Object(a.useState)(""),n=Object(l.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(null),o=Object(l.a)(i,2),j=o[0],m=o[1],x=Object(a.useState)(null),O=Object(l.a)(x,2),v=O[0],y=O[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(r);case 2:(t=e.sent)&&(y(t.results),m(t.response_code));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("choice==",r),!g.a.isEmpty(r)&&function(){e.apply(this,arguments)}()}),[r]),Object(w.jsxs)("div",{className:"App",children:[Object(w.jsxs)("header",{className:"App-header",children:[Object(w.jsx)(d.a,{variant:"h3",style:{margin:"50px"},children:"Quiz-Application"}),(g.a.isNull(v)||g.a.isUndefined(v)||g.a.isEqual(j,1))&&Object(w.jsxs)("div",{children:[Object(w.jsx)(d.a,{variant:"h4",children:"To start quiz lease select difficulty level"}),Object(w.jsx)(b.a,{className:e.formControl,children:Object(w.jsxs)(p.a,{value:r,onChange:function(e){c(e.target.value)},children:[Object(w.jsx)(h.a,{value:"easy",children:"Easy"}),Object(w.jsx)(h.a,{value:"medium",children:"Medium"}),Object(w.jsx)(h.a,{value:"hard",children:"Difficult"})]})})]})]}),g.a.isEqual(j,0)&&Object(w.jsx)(A,{questions:v,gobacktoHome:function(){c(""),y(null),m(null)}}),g.a.isEqual(j,1)&&Object(w.jsxs)("div",{className:e.errorText,children:[Object(w.jsx)(f.a,{style:{verticalAlign:"sub"}}),"Oops!! Seems there was a problem in loading the questions. Please try again"]})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(B,{})}),document.getElementById("root")),R()}},[[81,1,2]]]);
//# sourceMappingURL=main.80f95a37.chunk.js.map