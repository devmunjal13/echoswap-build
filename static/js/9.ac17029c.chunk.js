(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[9],{768:function(e,n,t){"use strict";t.d(n,"a",(function(){return O}));var c,i,r,a=t(67),o=t(0),s=t.n(o),d=t(5),l=t(15),j=d.e.div(c||(c=Object(a.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),b=function(e){var n,t=e.size,c=void 0===t?"md":t,i=Object(o.useContext)(d.a).spacing;switch(c){case"lg":n=i[6];break;case"sm":n=i[2];break;default:n=i[4]}return Object(l.jsx)(j,{size:n})},u=d.e.div(i||(i=Object(a.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"])),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),x=d.e.div(r||(r=Object(a.a)(["\n  flex: 1;\n  text-align: center;\n"]))),O=function(e){var n=e.children,t=s.a.Children.toArray(n).length;return Object(l.jsx)(u,{children:s.a.Children.map(n,(function(e,n){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{children:e}),n<t-1&&Object(l.jsx)(b,{})]})}))})}},770:function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return s})),t.d(n,"d",(function(){return r}));t(0);var c=t(49),i=t(15),r=function(){return Object(i.jsx)(c.A,{variant:"success",outline:!0,startIcon:Object(i.jsx)(c.D,{}),children:"No Fees"})},a=function(){return Object(i.jsx)(c.A,{variant:"secondary",outline:!0,startIcon:Object(i.jsx)(c.D,{}),children:"Core"})},o=function(){return Object(i.jsx)(c.A,{variant:"textSubtle",outline:!0,startIcon:Object(i.jsx)(c.l,{}),children:"Community"})},s=function(){return Object(i.jsx)(c.A,{variant:"binance",outline:!0,startIcon:Object(i.jsx)(c.c,{}),children:"Binance"})}},771:function(e,n,t){"use strict";var c,i=t(67),r=t(5).e.div(c||(c=Object(i.a)(["\n  color: ",";\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.1;\n  margin-bottom: 14px;\n"])),(function(e){var n=e.isFinished;return e.theme.colors[n?"textDisabled":"text"]}));n.a=r},773:function(e,n,t){"use strict";t.d(n,"a",(function(){return w}));var c,i,r,a,o,s,d,l=t(67),j=(t(0),t(5)),b=t(769),u=t(49),x=t(763),O=t(15),p=j.e.div(c||(c=Object(l.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.spacing[3]})),h=j.e.input(i||(i=Object(l.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(e){return e.theme.colors.primary})),f=function(e){var n=e.endAdornment,t=e.onChange,c=e.placeholder,i=e.startAdornment,r=e.value;return Object(O.jsxs)(p,{children:[!!i&&i,Object(O.jsx)(h,{placeholder:c,value:r,onChange:t}),!!n&&n]})},m=j.e.div(r||(r=Object(l.a)([""]))),g=j.e.div(a||(a=Object(l.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),v=j.e.div(o||(o=Object(l.a)(["\n  align-items: center;\n  display: flex;\n"]))),k=j.e.div(s||(s=Object(l.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.colors.primary})),y=j.e.span(d||(d=Object(l.a)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(e){return e.theme.colors.primary})),w=function(e){var n=e.max,t=e.symbol,c=e.onChange,i=e.onSelectMax,r=e.value,a=e.depositFeeBP,o=void 0===a?0:a,s=Object(x.a)();return Object(O.jsxs)(m,{children:[Object(O.jsxs)(k,{children:[n.toLocaleString()," ",t," ",s(526,"Available")]}),Object(O.jsx)(f,{endAdornment:Object(O.jsxs)(v,{children:[Object(O.jsx)(y,{children:t}),Object(O.jsx)(g,{}),Object(O.jsx)("div",{children:Object(O.jsx)(u.d,{size:"sm",onClick:i,children:s(452,"Max")})})]}),onChange:c,placeholder:"0",value:r}),o>0?Object(O.jsxs)(k,{children:[s(10001,"Deposit Fee"),": ",new b.a(r||0).times(o/1e4).toString()," ",t]}):null]})}},775:function(e,n,t){"use strict";t.d(n,"b",(function(){return b}));var c=t(16),i=t(6),r=t.n(i),a=t(0),o=t(77),s=t(56),d=t(152),l=t(766),j=t(765),b=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(s.b)(),i=Object(o.m)(),b=i.account,u=Object(j.d)(),x=Object(j.e)(e),O=Object(a.useCallback)(function(){var i=Object(c.a)(r.a.mark((function c(i){return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(0!==e){c.next=5;break}return c.next=3,Object(l.i)(u,0,i,b);case 3:c.next=12;break;case 5:if(!n){c.next=10;break}return c.next=8,Object(l.e)(x,i,b);case 8:c.next=12;break;case 10:return c.next=12,Object(l.d)(x,i,b);case 12:t(Object(d.g)(e,b)),t(Object(d.e)(e,b));case 14:case"end":return c.stop()}}),c)})));return function(e){return i.apply(this,arguments)}}(),[b,t,n,u,x,e]);return{onStake:O}};n.a=function(e){var n=Object(s.b)(),t=Object(o.m)().account,i=Object(j.d)(),b=Object(a.useCallback)(function(){var a=Object(c.a)(r.a.mark((function c(a){var o;return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(l.i)(i,e,a,t);case 2:o=c.sent,n(Object(d.a)(t)),console.info(o);case 5:case"end":return c.stop()}}),c)})));return function(e){return a.apply(this,arguments)}}(),[t,n,i,e]);return{onStake:b}}},776:function(e,n,t){"use strict";var c,i=t(67),r=t(5).e.div(c||(c=Object(i.a)(["\n  background: ",";\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  border-radius: 32px;\n  display: flex;\n  color: ",";\n  box-shadow: ",";\n  flex-direction: column;\n  position: relative;\n"])),(function(e){return e.theme.card.background}),(function(e){var n=e.isFinished;return e.theme.colors[n?"textDisabled":"secondary"]}),(function(e){return e.isActive?"0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4);":"0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)"}));n.a=r},784:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var c=t(769);c.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});var i=new c.a(10512e3)},785:function(e,n,t){"use strict";var c,i=t(67),r=t(5).e.div(c||(c=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"])));n.a=r},786:function(e,n,t){"use strict";t.d(n,"b",(function(){return u}));var c=t(16),i=t(6),r=t.n(i),a=t(0),o=t(77),s=t(56),d=t(152),l=t(766),j=t(765),b=[5,6,3,1,22,23],u=function(e){var n=Object(s.b)(),t=Object(o.m)().account,i=Object(j.d)(),u=Object(j.e)(e),x=b.includes(e),O=Object(a.useCallback)(function(){var a=Object(c.a)(r.a.mark((function c(a){var o,s,j;return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(0!==e){c.next=7;break}return c.next=3,Object(l.j)(i,0,a,t);case 3:o=c.sent,console.info(o),c.next=18;break;case 7:if(!x){c.next=14;break}return c.next=10,Object(l.c)(u,a,t);case 10:s=c.sent,console.info(s),c.next=18;break;case 14:return c.next=16,Object(l.f)(u,a,t);case 16:j=c.sent,console.info(j);case 18:n(Object(d.g)(e,t)),n(Object(d.e)(e,t)),n(Object(d.f)(e,t));case 21:case"end":return c.stop()}}),c)})));return function(e){return a.apply(this,arguments)}}(),[t,n,x,i,u,e]);return{onUnstake:O}};n.a=function(e){var n=Object(s.b)(),t=Object(o.m)().account,i=Object(j.d)(),b=Object(a.useCallback)(function(){var a=Object(c.a)(r.a.mark((function c(a){var o;return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(l.j)(i,e,a,t);case 2:o=c.sent,n(Object(d.a)(t)),console.info(o);case 5:case"end":return c.stop()}}),c)})));return function(e){return a.apply(this,arguments)}}(),[t,n,i,e]);return{onUnstake:b}}},787:function(e,n,t){"use strict";var c,i,r,a,o,s=t(67),d=(t(0),t(5)),l=t(49),j=t(770),b=t(763),u=t(776),x=t(771),O=t(15),p=d.e.div(c||(c=Object(s.a)(["\n  color: ",";\n  font-size: 40px;\n  font-weight: 600;\n"])),(function(e){return e.theme.colors.text})),h=d.e.div(i||(i=Object(s.a)(["\n  color: ",";\n  font-size: 14px;\n  margin-bottom: 16px;\n"])),(function(e){return e.theme.colors.textSubtle})),f=d.e.div(r||(r=Object(s.a)(["\n  display: flex;\n  font-size: 14px;\n"]))),m=d.e.div(a||(a=Object(s.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.text})),g=d.e.div(o||(o=Object(s.a)(["\n  border-top: 1px solid ",";\n  padding: 24px;\n"])),(function(e){return e.theme.isDark?"#524B63":"#E9EAEB"}));n.a=function(){var e=Object(b.a)();return Object(O.jsxs)(u.a,{children:[Object(O.jsxs)("div",{style:{padding:"24px"},children:[Object(O.jsxs)(x.a,{children:[e(414,"Your Project?")," ",Object(O.jsx)("span",{role:"img","aria-label":"eyes",children:"\ud83d\udc40"})]}),Object(O.jsx)(l.p,{src:"/images/bunny-question.svg",width:64,height:64,alt:"Your project here"}),Object(O.jsx)(p,{children:"???"}),Object(O.jsx)(h,{children:e(416,"Create a pool for your token")}),Object(O.jsx)(l.d,{variant:"secondary",as:"a",href:"https://docs.google.com/forms/d/e/1FAIpQLSekxfSHHTEdKwO2dDrG2A-hG6h7LQPszWHzyGSP4viGkiRJhA/viewform?usp=sf_link",external:!0,fullWidth:!0,mb:"16px",children:e(418,"Apply Now")}),Object(O.jsxs)(f,{children:[Object(O.jsxs)("div",{style:{flex:1},children:[e(736,"APR"),":"]}),Object(O.jsx)(m,{children:"??"})]}),Object(O.jsxs)(f,{children:[Object(O.jsxs)("div",{style:{flex:1},children:[Object(O.jsx)("span",{role:"img","aria-label":"syrup",children:" "}),e(384,"Your Stake"),":"]}),Object(O.jsx)(m,{children:"??? ECHO"})]})]}),Object(O.jsx)(g,{children:Object(O.jsx)(j.b,{})})]})}},889:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return en}));var c,i,r=t(67),a=t(25),o=t(14),s=t(0),d=t.n(s),l=t(28),j=t(13),b=t.n(j),u=t(5),x=t(77),O=t(49),p=t(784),h=t(815),f=t.n(h),m=t(872),g=t.n(m),v=t(763),k=t(338),y=function(){return Object(s.useContext)(k.a)},w=t(764),C=t(123),S=t(33),z=t(785),D=t(200),A=t(787),N=t(16),F=t(6),B=t.n(F),E=t(779),I=t(15),P=u.e.div(c||(c=Object(r.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){var n=e.isFinished;return e.theme.colors[n?"textDisabled":"primary"]})),R=function(e){var n=e.text,t=e.isFinished,c=void 0!==t&&t;return Object(I.jsx)(P,{isFinished:c,children:n})},T=t(765),M=t(775),L=t(786),U=t(777),W=t(780),Y=t.n(W),G=Object(u.e)(O.B)(i||(i=Object(r.a)(["\n  color: ",";\n"])),(function(e){var n=e.isDisabled,t=e.color,c=e.theme;return n?c.colors.textDisabled:t})),H=function(e){var n=e.value,t=e.fontSize,c=e.color,i=e.decimals,r=e.isDisabled,a=e.unit,o=Object(s.useRef)(0);return Object(s.useEffect)((function(){o.current=n}),[n]),Object(I.jsxs)(G,{bold:!0,color:c,fontSize:t,isDisabled:r,children:[Object(I.jsx)(Y.a,{start:o.current,end:n,decimals:i,duration:1,separator:","}),n&&a&&Object(I.jsx)("span",{children:a})]})};H.defaultProps={fontSize:"32px",isDisabled:!1,color:"text",decimals:3};var _,q,Q,J,V,K,X,Z,$,ee,ne,te,ce,ie,re,ae,oe,se,de,le,je,be,ue=H,xe=t(768),Oe=t(773),pe=function(e){var n=e.max,t=e.onConfirm,c=e.onDismiss,i=e.tokenName,r=void 0===i?"":i,o=Object(s.useState)(""),d=Object(a.a)(o,2),l=d[0],j=d[1],b=Object(s.useState)(!1),u=Object(a.a)(b,2),x=u[0],p=u[1],h=Object(v.a)(),f=Object(s.useMemo)((function(){return Object(w.b)(n)}),[n]),m=Object(s.useCallback)((function(e){j(e.currentTarget.value)}),[j]),g=Object(s.useCallback)((function(){j(f)}),[f,j]);return Object(I.jsxs)(O.v,{title:"".concat(h(316,"Deposit")," ").concat(r," Tokens"),onDismiss:c,children:[Object(I.jsx)(Oe.a,{value:l,onSelectMax:g,onChange:m,max:f,symbol:r}),Object(I.jsxs)(xe.a,{children:[Object(I.jsx)(O.d,{fullWidth:!0,variant:"secondary",onClick:c,children:h(462,"Cancel")}),Object(I.jsx)(O.d,{fullWidth:!0,disabled:x,onClick:Object(N.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,t(l);case 3:p(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:x?h(488,"Pending Confirmation"):h(464,"Confirm")})]})]})},he=function(e){var n=e.onConfirm,t=e.onDismiss,c=e.max,i=e.tokenName,r=void 0===i?"":i,o=Object(s.useState)(""),d=Object(a.a)(o,2),l=d[0],j=d[1],b=Object(s.useState)(!1),u=Object(a.a)(b,2),x=u[0],p=u[1],h=Object(v.a)(),f=Object(s.useMemo)((function(){return Object(w.b)(c)}),[c]),m=Object(s.useCallback)((function(e){j(e.currentTarget.value)}),[j]),g=Object(s.useCallback)((function(){j(f)}),[f,j]);return Object(I.jsxs)(O.v,{title:"Withdraw ".concat(r),onDismiss:t,children:[Object(I.jsx)(Oe.a,{onSelectMax:g,onChange:m,value:l,max:f,symbol:r}),Object(I.jsxs)(xe.a,{children:[Object(I.jsx)(O.d,{variant:"secondary",onClick:t,children:h(462,"Cancel")}),Object(I.jsx)(O.d,{disabled:x,onClick:Object(N.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,n(l);case 3:p(!1),t();case 5:case"end":return e.stop()}}),e)}))),children:x?h(488,"Pending Confirmation"):h(464,"Confirm")})]})]})},fe=function(e){var n=e.earnings,t=e.onConfirm,c=e.onDismiss,i=e.tokenName,r=void 0===i?"":i,o=Object(s.useState)(!1),d=Object(a.a)(o,2),l=d[0],j=d[1],b=Object(v.a)(),u=Object(s.useMemo)((function(){return Object(w.b)(n)}),[n]);return Object(I.jsxs)(O.v,{title:"".concat(b(999,"Compound")," ").concat(b(330,"".concat(r," Earned"))),onDismiss:c,children:[Object(I.jsx)(me,{children:Object(I.jsx)(ue,{value:Number(u)})}),Object(I.jsxs)(xe.a,{children:[Object(I.jsx)(O.d,{fullWidth:!0,variant:"secondary",onClick:c,children:b(462,"Cancel")}),Object(I.jsx)(O.d,{id:"compound-cake",fullWidth:!0,disabled:l,onClick:Object(N.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,t(u);case 3:j(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:l?b(488,"Pending Confirmation"):b(464,"Confirm")})]})]})},me=u.e.div(_||(_=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n"]))),ge=t(771),ve=t(776),ke=u.e.div(q||(q=Object(r.a)(["\n  color: #ed4b9e;\n  font-size: 24px;\n  font-weight: 600;\n  text-transform: uppercase;\n"]))),ye=u.e.a(Q||(Q=Object(r.a)(["\n  color: #ed4b9e;\n  font-size: 14px;\n"]))),we=function(e){var n=e.hasBalance;return void 0!==n&&n?Object(I.jsxs)("div",{children:[Object(I.jsx)(ke,{children:"Action Required"}),Object(I.jsx)(ye,{href:" https://pancakeswap.medium.com/urgent-action-required-changes-to-syrup-pools-70b98d7b2541",target:"_blank",children:"What do I need to do?"})]}):Object(I.jsx)("div",{children:Object(I.jsx)(ge.a,{isFinished:!0,children:"FINISHED"})})},Ce=t(78),Se=u.e.button(J||(J=Object(r.a)(["\n  align-items: center;\n  background: ",";\n  border: 0;\n  border-radius: 12px;\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-size: ","px;\n  font-weight: 700;\n  height: ","px;\n  justify-content: center;\n  outline: none;\n  padding-left: ","px;\n  padding-right: ","px;\n  pointer-events: ",";\n  width: 100%;\n  border: 2px solid ",";\n  width: 100px;\n  height: 30px;\n  font-size: 14px;\n  padding: 0px;\n"])),(function(e){return e.disabled?"#ddd":e.theme.card.background}),(function(e){return e.disabled?"#acaaaf":"#32cad7"}),(function(e){return e.fontSize}),(function(e){return e.size}),(function(e){return e.padding}),(function(e){return e.padding}),(function(e){return e.disabled?"none":void 0}),(function(e){return e.disabled?"#eee":"#33cbd7"})),ze=Object(u.e)(Ce.b)(V||(V=Object(r.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),De=u.e.a(K||(K=Object(r.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),Ae=function(e){var n,t,c,i=e.children,r=e.disabled,a=e.href,o=e.onClick,d=e.size,l=e.text,j=e.to,b=Object(s.useContext)(u.a),x=b.colors,O=b.spacing,p=x.background;switch(d){case"sm":t=O[3],n=36,c=14;break;case"lg":t=O[4],n=72,c=16;break;default:t=O[4],n=56,c=16}var h=Object(s.useMemo)((function(){return j?Object(I.jsx)(ze,{to:j,children:l}):a?Object(I.jsx)(De,{href:a,target:"__blank",children:l}):l}),[a,l,j]);return Object(I.jsxs)(Se,{boxShadow:undefined,color:p,disabled:r,fontSize:c,onClick:o,padding:t,size:n,children:[i,h]})},Ne=t(42),Fe=t(885),Be=t(886),Ee=t(770),Ie=(X={},Object(Ne.a)(X,S.a.BINANCE,Ee.a),Object(Ne.a)(X,S.a.CORE,Ee.c),Object(Ne.a)(X,S.a.COMMUNITY,Ee.b),X),Pe=u.e.div(Z||(Z=Object(r.a)(["\n  border-top: 1px solid ",";\n  color: ",";\n  padding: 24px;\n"])),(function(e){return e.theme.isDark?"#524B63":"#E9EAEB"}),(function(e){var n=e.isFinished;return e.theme.colors[n?"textDisabled2":"primary2"]})),Re=u.e.button($||($=Object(r.a)(["\n  align-items: center;\n  background-color: transparent;\n  border: 0;\n  color: ",";\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 16px;\n  font-weight: 600;\n  height: 32px;\n  justify-content: center;\n  outline: 0;\n  padding: 0;\n  &:hover {\n    opacity: 0.9;\n  }\n\n  & > svg {\n    margin-left: 4px;\n  }\n"])),(function(e){return e.theme.colors.primary})),Te=u.e.div(ee||(ee=Object(r.a)(["\n  margin-top: 24px;\n"]))),Me=u.e.div(ne||(ne=Object(r.a)(["\n  align-items: center;\n  display: flex;\n"]))),Le=u.e.div(te||(te=Object(r.a)(["\n  flex: 1;\n"]))),Ue=u.e.div(ce||(ce=Object(r.a)(["\n  font-size: 14px;\n"]))),We=u.e.a(ie||(ie=Object(r.a)(["\n  font-size: 14px;\n  text-decoration: none;\n  color: #12aab5;\n"]))),Ye=function(e){var n=e.projectLink,t=e.totalStaked,c=e.blocksRemaining,i=e.isFinished,r=e.blocksUntilStart,o=e.poolCategory,d=Object(s.useState)(!1),l=Object(a.a)(d,2),j=l[0],b=l[1],u=Object(v.a)(),x=j?Fe.a:Be.a,O=Ie[o];return Object(I.jsxs)(Pe,{isFinished:i,children:[Object(I.jsxs)(Me,{children:[Object(I.jsx)(Le,{children:Object(I.jsx)(O,{})}),Object(I.jsxs)(Re,{onClick:function(){return b(!j)},children:[j?"Hide":"Details"," ",Object(I.jsx)(x,{})]})]}),j&&Object(I.jsxs)(Te,{children:[Object(I.jsxs)(Me,{style:{marginBottom:"4px"},children:[Object(I.jsx)(Le,{children:Object(I.jsxs)(Ue,{children:[Object(I.jsxs)("span",{role:"img","aria-label":"syrup",children:["\ud83e\udd5e"," "]}),u(408,"Total")]})}),Object(I.jsx)(ue,{fontSize:"14px",isDisabled:i,value:Object(w.a)(t)})]}),r>0&&Object(I.jsxs)(Me,{children:[Object(I.jsx)(Le,{children:Object(I.jsxs)(Ue,{children:[u(410,"Start"),":"]})}),Object(I.jsx)(ue,{fontSize:"14px",isDisabled:i,value:r,decimals:0})]}),0===r&&c>0&&Object(I.jsxs)(Me,{children:[Object(I.jsx)(Le,{children:Object(I.jsxs)(Ue,{children:[u(410,"End"),":"]})}),Object(I.jsx)(ue,{fontSize:"14px",isDisabled:i,value:c,decimals:0})]}),Object(I.jsx)(We,{href:n,target:"_blank",children:u(412,"View project site")})]})]})},Ge=d.a.memo(Ye),He=u.e.div(re||(re=Object(r.a)(["\n  background-image: url('/images/pool-finished-sash.svg');\n  background-position: top right;\n  background-repeat: not-repeat;\n  height: 135px;\n  position: absolute;\n  right: -24px;\n  top: -24px;\n  width: 135px;\n"]))),_e=u.e.div(ae||(ae=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 16px 0;\n  width: 100%;\n  box-sizing: border-box;\n"]))),qe=u.e.div(oe||(oe=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n"]))),Qe=u.e.div(se||(se=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),Je=u.e.div(de||(de=Object(r.a)(["\n  display: flex;\n  font-size: 14px;\n"]))),Ve=function(e){var n=e.pool,t=n.sousId,c=n.image,i=n.tokenName,r=n.stakingTokenName,o=n.stakingTokenAddress,d=n.projectLink,l=n.harvest,j=n.apy,u=n.tokenDecimals,p=n.poolCategory,h=n.totalStaked,f=n.startBlock,m=n.endBlock,g=n.isFinished,k=n.userData,C=n.stakingLimit,z=p===S.a.BINANCE,D=Object(v.a)(),A=(Object(T.b)(o),Object(x.m)().account),F=y(),P=Object(M.b)(t,z).onStake,W=Object(L.b)(t).onUnstake,Y=Object(U.c)(t,z).onReward,G=Object(s.useState)(!1),H=Object(a.a)(G,2),_=H[0],q=H[1],Q=Object(s.useState)(!1),J=Object(a.a)(Q,2),V=J[0],K=J[1],X=new b.a((null===k||void 0===k?void 0:k.allowance)||0),Z=new b.a((null===k||void 0===k?void 0:k.stakingTokenBalance)||0),$=new b.a((null===k||void 0===k?void 0:k.stakedBalance)||0),ee=new b.a((null===k||void 0===k?void 0:k.pendingReward)||0),ne=Math.max(f-F,0),te=Math.max(m-F,0),ce=r===S.b.SYRUP,ie=(null===$||void 0===$?void 0:$.toNumber())>0,re=!ie&&!X.toNumber()&&!z,ae=g&&ie,oe=new b.a(C).multipliedBy(new b.a(10).pow(u)),se=Object(O.G)(Object(I.jsx)(pe,{max:C&&Z.isGreaterThan(oe)?oe:Z,onConfirm:P,tokenName:C?"".concat(r," (").concat(C," max)"):r})),de=Object(a.a)(se,1)[0],le=Object(O.G)(Object(I.jsx)(fe,{earnings:ee,onConfirm:P,tokenName:r})),je=Object(a.a)(le,1)[0],be=Object(O.G)(Object(I.jsx)(he,{max:$,onConfirm:W,tokenName:r})),xe=Object(a.a)(be,1)[0],Oe=Object(s.useCallback)(Object(N.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{q(!0)}catch(n){console.error(n)}case 1:case"end":return e.stop()}}),e)}))),[q]);return Object(I.jsxs)(ve.a,{isActive:ae,isFinished:g&&0!==t,children:[g&&0!==t&&Object(I.jsx)(He,{}),Object(I.jsxs)("div",{style:{padding:"24px"},children:[Object(I.jsxs)(ge.a,{isFinished:g&&0!==t,children:[ce&&"[OLD]"," ",i," ",D(348,"Pool")]}),Object(I.jsxs)("div",{style:{marginBottom:"8px",display:"flex",alignItems:"center"},children:[Object(I.jsx)("div",{style:{flex:1},children:Object(I.jsx)(O.p,{src:"/images/tokens/".concat(c||i,".png"),width:64,height:64,alt:i})}),A&&l&&!ce&&Object(I.jsx)(Ae,{disabled:!ee.toNumber()||V,text:V?"Collecting":"Harvest",onClick:Object(N.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(!0),e.next=3,Y();case 3:K(!1);case 4:case"end":return e.stop()}}),e)})))})]}),ce?Object(I.jsx)(we,{hasBalance:ie}):Object(I.jsxs)(qe,{children:[Object(I.jsx)(ue,{value:Object(w.a)(ee,u),isDisabled:g}),0===t&&A&&l&&Object(I.jsx)(Ae,{disabled:!ee.toNumber()||V,text:D(999,V?"Compounding":"Compound"),onClick:je})]}),Object(I.jsx)(R,{isFinished:g&&0!==t,text:D(330,"".concat(i," earned"))}),Object(I.jsxs)(_e,{children:[!A&&Object(I.jsx)(E.a,{}),A&&(re&&!ce?Object(I.jsx)("div",{style:{flex:1},children:Object(I.jsx)(O.d,{disabled:g||_,onClick:Oe,fullWidth:!0,children:"Approve ".concat(r)})}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(O.d,{disabled:$.eq(new b.a(0))||V,onClick:ce?Object(N.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(!0),e.next=3,W("0");case 3:K(!1);case 4:case"end":return e.stop()}}),e)}))):xe,children:"Unstake ".concat(r)}),Object(I.jsx)(Qe,{}),!ce&&Object(I.jsx)(O.o,{disabled:g&&0!==t,onClick:de,children:Object(I.jsx)(O.a,{color:"background"})})]}))]}),Object(I.jsxs)(Je,{children:[Object(I.jsxs)("div",{style:{flex:1},children:[D(736,"APR"),":"]}),g||ce||!j||null!==j&&void 0!==j&&j.isNaN()||null===j||void 0===j||!j.isFinite()?"-":Object(I.jsx)(ue,{fontSize:"14px",isDisabled:g,value:null===j||void 0===j?void 0:j.toNumber(),decimals:2,unit:"%"})]}),Object(I.jsxs)(Je,{children:[Object(I.jsxs)("div",{style:{flex:1},children:[Object(I.jsxs)("span",{role:"img","aria-label":r,children:["\ud83e\udd5e"," "]}),D(384,"Your Stake"),":"]}),Object(I.jsx)(ue,{fontSize:"14px",isDisabled:g,value:Object(w.a)($)})]})]}),Object(I.jsx)(Ge,{projectLink:d,totalStaked:h,blocksRemaining:te,isFinished:g,blocksUntilStart:ne,poolCategory:p})]})},Ke=function(){var e=Object(l.g)(),n=e.url,t=e.isExact,c=Object(v.a)();return Object(I.jsx)(Xe,{children:Object(I.jsxs)(O.e,{activeIndex:t?0:1,size:"sm",variant:"subtle",children:[Object(I.jsx)(O.f,{as:Ce.b,to:"".concat(n),children:c(999,"Active")}),Object(I.jsx)(O.f,{as:Ce.b,to:"".concat(n,"/history"),children:c(999,"Inactive")})]})})},Xe=u.e.div(le||(le=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),Ze=u.e.div(je||(je=Object(r.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),$e=u.e.div(be||(be=Object(r.a)(["\n  align-items: center;\n  color: ",";\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 250px;\n  padding: 48px 0;\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    font-size: 16px;\n    li {\n      margin-bottom: 4px;\n    }\n  }\n  img {\n    height: auto;\n    max-width: 100%;\n  }\n  @media (min-width: 576px) {\n    grid-template-columns: 1fr 1fr;\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.colors.primary})),en=function(){var e=Object(l.g)().path,n=Object(v.a)(),t=Object(x.m)().account,c=Object(C.c)(),i=Object(C.e)(t),r=Object(C.f)(),s=y(),d=i.map((function(e){var n=e.poolCategory===S.a.BINANCE,t=c.find((function(n){return n.tokenSymbol===e.tokenName})),i=c.find((function(n){return n.tokenSymbol===e.stakingTokenName})),a=n?new b.a(1):new b.a(null===i||void 0===i?void 0:i.tokenPriceVsQuote),d=function(e,n,t){var c=new b.a(n);return"BNB"===e?new b.a(1):n&&t===S.b.BUSD?c.div(r):c}(e.tokenName,null===t||void 0===t?void 0:t.tokenPriceVsQuote,null===t||void 0===t?void 0:t.quoteTokenSymbol).times(e.tokenPerBlock).times(p.a),l=a.times(Object(w.a)(e.totalStaked)),j=d.div(l).times(100);return Object(o.a)(Object(o.a)({},e),{},{isFinished:0!==e.sousId&&(e.isFinished||s>e.endBlock),apy:j})})),j=g()(d,(function(e){return e.isFinished})),u=Object(a.a)(j,2),h=u[0],m=u[1];return Object(I.jsxs)(D.a,{children:[Object(I.jsxs)($e,{children:[Object(I.jsxs)("div",{children:[Object(I.jsx)(O.n,{as:"h1",size:"xxl",mb:"16px",children:n(282,"SYRUP Pool")}),Object(I.jsxs)("ul",{children:[Object(I.jsx)("li",{children:n(580,"Stake CAKE to earn new tokens.")}),Object(I.jsx)("li",{children:n(404,"You can unstake at any time.")}),Object(I.jsx)("li",{children:n(406,"Rewards are calculated per block.")})]})]}),Object(I.jsx)("img",{src:"/images/syrup.png",alt:"SYRUP POOL icon",width:410,height:191})]}),Object(I.jsx)(Ke,{}),Object(I.jsx)(Ze,{}),Object(I.jsxs)(z.a,{children:[Object(I.jsx)(l.a,{exact:!0,path:"".concat(e),children:Object(I.jsxs)(I.Fragment,{children:[f()(m,["sortOrder"]).map((function(e){return Object(I.jsx)(Ve,{pool:e},e.sousId)})),Object(I.jsx)(A.a,{})]})}),Object(I.jsx)(l.a,{path:"".concat(e,"/history"),children:f()(h,["sortOrder"]).map((function(e){return Object(I.jsx)(Ve,{pool:e},e.sousId)}))})]})]})}}}]);
//# sourceMappingURL=9.ac17029c.chunk.js.map