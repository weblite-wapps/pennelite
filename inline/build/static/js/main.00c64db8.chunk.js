(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{54:function(e,t,n){e.exports=n(71)},68:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(40),o=n(47),l=n(30),i=n(14),u=n(77),s=n(75),p=n(18),d=n(42),f=n(17),m=n(76),b=Object(m.a)("FETCH_PEN"),h=function(){return M(b.apply(void 0,arguments))},w=Object(m.a)("SET_PEN",function(e){return{pen:e}}),O=function(){return M(w.apply(void 0,arguments))},E={pen:{}},v=Object(p.a)({},"SET_PEN",function(e,t){var n=t.pen;return Object(d.a)({},e,{pen:n})}),j=n(52),_=n(43),g=n(49),y=n(73),S=n(74),N=n(34),P=n.n(N),V="https://wapp.weblite.me/pennelite",k=Object(u.a)(function(e){return e.pipe(Object(j.a)("FETCH_PEN"),Object(_.a)(f.b("payload")),Object(g.a)(function(e){var t,n=e._id;return(t="/fetchSinglePen",P.a.get(V+t).set("Access-Control-Allow-Origin","*")).query({_id:n}).catch(function(){return console.log("couldnt fetch")})}),Object(_.a)(f.b("body")),Object(y.a)(console.log),Object(y.a)(O),Object(S.a)())}),x="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({name:"pennelite-inline"}):i.d,C=Object(u.a)(k),H=Object(s.a)(),T=Object(i.e)(Object(i.c)({App:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;return v[n]?v[n](e,c):e}}),x(Object(i.a)(H)));H.run(C);var M=T.dispatch,D=T.getState,I=T,z=(n(68),n(44)),A=n(45),F=n(51),R=n(46),W=n(29),X=n(50),B=function(e){return a.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:"512px",height:"512px",viewBox:"0 0 357 357"},e),a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("g",{id:"fullscreen"},a.a.createElement("path",{d:"M51,229.5H0V357h127.5v-51H51V229.5z M0,127.5h51V51h76.5V0H0V127.5z M306,306h-76.5v51H357V229.5h-51V306z M229.5,0v51    H306v76.5h51V0H229.5z","data-original":"#000000","data-old_color":"#000000",fill:"#444343"}))))," ")},U=(n(69),function(e){function t(e){var n;return Object(z.a)(this,t),(n=Object(F.a)(this,Object(R.a)(t).call(this,e))).fullScreen=n.fullScreen.bind(Object(W.a)(n)),n}return Object(X.a)(t,e),Object(A.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.fetchPen;window&&window.W?window.W.loadData().then(function(t){var n=t.customize._id;n&&e({_id:n}),window.W.start()}):e({_id:""})}},{key:"componentDidUpdate",value:function(){var e=this.props.pen,t=this.iframeRef.contentWindow.document;t.open(),t.write("<html><body>".concat(e.html,"</body></html>")),t.write("<style>".concat(e.css,"</style>")),t.write("<script>".concat(e.js,"<\/script>")),t.close()}},{key:"fullScreen",value:function(){var e=this.iframeRef;document.fullscreenElement?document.exitFullscreen():e.requestFullscreen().then({}).catch(function(e){console.log("Error attempting to enable full-screen mode: ".concat(e.message," (").concat(e.name,")"))})}},{key:"render",value:function(){var e=this,t=this.props.pen.title;return a.a.createElement("div",{className:"root"},a.a.createElement("div",{className:"title"},t),a.a.createElement("iframe",{frameBorder:"1",style:{border:"none",background:"black"},allowFullScreen:!0,title:"peneliteInlineIframe",id:"iframeId",ref:function(t){e.iframeRef=t},width:"100%"}),a.a.createElement(B,{onClick:this.fullScreen,className:"fullScreen"}))}}]),t}(a.a.Component));U.defaultProps={};var q=Object(l.b)(function(){return{pen:f.a(["App","pen"])(D())}},function(){return{fetchPen:h}})(U),J=function(){return a.a.createElement(l.a,{store:I},a.a.createElement(q,null))};Object(r.render)(a.a.createElement(o.AppContainer,null,a.a.createElement(J,null)),window.document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.00c64db8.chunk.js.map