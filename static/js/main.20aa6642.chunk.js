(this["webpackJsonpkh2fm-randomizer"]=this["webpackJsonpkh2fm-randomizer"]||[]).push([[0],{113:function(e,a,t){"use strict";t.r(a);var n,r=t(0),l=t.n(r),c=t(10),o=t.n(c),i=t(42),s=t(155),m=t(152),u=t(27),d=t(114),p=Object(m.a)((function(){return{footer:{flexShrink:0},link:{color:"black",textDecoration:"none"},left:{float:"left"},right:{float:"right"}}})),b=function(){var e=p();return l.a.createElement("footer",{className:e.footer},l.a.createElement(s.a,null,l.a.createElement(d.a,{className:e.left},l.a.createElement("a",{href:"https://github.com/afresquet/kh2fm-randomizer",target:"_blank",rel:"noopener noreferrer",className:e.link},"GitHub")," - ",l.a.createElement("a",{href:"https://github.com/afresquet/kh2fm-randomizer",target:"_blank",rel:"noopener noreferrer",className:e.link},"Twitter")," - ",l.a.createElement("a",{href:"https://github.com/afresquet/kh2fm-randomizer",target:"_blank",rel:"noopener noreferrer",className:e.link},"Twitch")),l.a.createElement(d.a,{className:e.right},"Special thanks to"," ",l.a.createElement("a",{href:"https://twitter.com/Sonicshadowsil2",target:"_blank",rel:"noopener noreferrer",className:e.link},"Sonicshadowsilver2"),", ",l.a.createElement("a",{href:"https://twitter.com/desa3579",target:"_blank",rel:"noopener noreferrer",className:e.link},"Desa3579")," and ",l.a.createElement("a",{href:"https://twitter.com/Bizkit047",target:"_blank",rel:"noopener noreferrer",className:e.link},"Bizkit047"))))},h=t(23),f=t.n(h),E=t(36),g=t(31),w=t(14),v=t(18),k=t(162),O=t(171),y=t(161),j=t(157),A=t(173),T=t(174),C=t(158),R=t(168),S=t(169),B=t(172),N=t(49),M=t.n(N),x="https://us-central1-kh2fm-randomizer.cloudfunctions.net/randomizer";!function(e){e[e.BASE_GAME=0]="BASE_GAME",e[e.GOA_MOD=1]="GOA_MOD"}(n||(n={}));var z=Object(m.a)((function(e){return{paper:{margin:e.spacing(3),marginLeft:"auto",marginRight:"auto",padding:e.spacing(3),width:"50%"},marginBottom:{marginBottom:e.spacing(3)},worldsWrapper:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},buttonWrapper:{textAlign:"center"},button:{marginTop:e.spacing(3),width:"75%"}}})),G=function(e){var a=e.history,t=z(),c=Object(r.useState)(!1),o=Object(v.a)(c,2),i=o[0],s=o[1],m=Object(r.useState)({seed:""}),u=Object(v.a)(m,2),d=u[0],p=u[1],b=Object(r.useState)({stats:!0,criticalMode:!0,abilities:!0,donaldAbilities:!0,goofyAbilities:!0,formAbilities:!0,simulatedTwilightTown:!0,twilightTown:!0,hollowBastion:!0,cavernOfRemembrance:!0,beastsCastle:!0,olympus:!0,agrabah:!0,landOfDragons:!0,pooh:!0,atlantica:!0,prideLands:!0,disneyCastle:!0,timelessRiver:!0,halloweenTown:!0,portRoyal:!0,spaceParanoids:!0,twtnw:!0}),h=Object(v.a)(b,2),N=h[0],G=h[1],D=Object(r.useState)(n.GOA_MOD),_=Object(v.a)(D,2),W=_[0],P=_[1],L=Object(r.useCallback)((function(e){var a=e.target,t=a.name,n=a.value;p((function(e){return Object(w.a)(Object(w.a)({},e),{},Object(g.a)({},t,n))}))}),[]),F=Object(r.useCallback)((function(e){var a=e.target,t=a.name,n=a.checked;G((function(e){return Object(w.a)(Object(w.a)({},e),{},Object(g.a)({},t,n))}))}),[]),H=Object(r.useCallback)((function(e){P(e.target.value)}),[]),q=Object(r.useCallback)((function(e){return function(){G((function(a){return Object(w.a)(Object(w.a)({},a),{},Object(g.a)({},e,!a[e]))}))}}),[]),J=Object(r.useCallback)((function(e){var a=e.label,t=e.name,n=e.checked;return l.a.createElement("div",null,l.a.createElement(j.a,{label:a,control:l.a.createElement(S.a,{name:t,checked:n,onChange:F,color:"primary"})}))}),[F]),U=Object(r.useCallback)((function(e){var a=e.label,t=e.name,n=e.checked;return l.a.createElement(O.a,{label:a,color:n?"primary":"default",onClick:q(t)})}),[q]),V=Object(r.useCallback)(function(){var e=Object(E.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),s(!0),n=Object.entries(N).filter((function(e){var a=Object(v.a)(e,2);a[0];return a[1]})).reduce((function(e,a){var t=Object(v.a)(a,2),n=t[0],r=t[1];return Object(w.a)(Object(w.a)({},e),{},Object(g.a)({},n,r))}),{}),e.next=6,M.a.post("".concat(x,"/seed"),Object(w.a)(Object(w.a)(Object(w.a)({},d),n),{},{gameMode:W}));case 6:r=e.sent,a.push("/seed/".concat(r.data.seed)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),s(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}(),[d,N,W,a]);return l.a.createElement(C.a,{className:t.paper},l.a.createElement("form",{noValidate:!0,onSubmit:V},l.a.createElement("div",{className:t.marginBottom},l.a.createElement(B.a,{name:"seed",value:d.seed,label:"Seed (defaults to current time)",onChange:L,fullWidth:!0})),l.a.createElement("div",{className:t.marginBottom},l.a.createElement(y.a,{variant:"outlined",fullWidth:!0,disabled:!0},l.a.createElement(A.a,null,"Game Mode"),l.a.createElement(R.a,{value:W,onChange:H,label:"Game Mode"},l.a.createElement(T.a,{value:n.BASE_GAME},"Base Game"),l.a.createElement(T.a,{value:n.GOA_MOD},"Garden of Assemblage Mod")))),l.a.createElement("div",{className:t.marginBottom},l.a.createElement(J,{label:"Critical Mode",name:"criticalMode",checked:N.criticalMode}),l.a.createElement(J,{label:"Randomize Stats",name:"stats",checked:N.stats}),l.a.createElement(J,{label:"Randomize Abilities",name:"abilities",checked:N.abilities}),l.a.createElement(J,{label:"Randomize Donald's Abilities",name:"donaldAbilities",checked:N.donaldAbilities}),l.a.createElement(J,{label:"Randomize Goofy's Abilities",name:"goofyAbilities",checked:N.goofyAbilities}),l.a.createElement(J,{label:"Randomize Form Abilities",name:"formAbilities",checked:N.formAbilities})),l.a.createElement("div",{className:t.worldsWrapper},l.a.createElement(U,{label:"Simulated Twilight Town",name:"simulatedTwilightTown",checked:N.simulatedTwilightTown}),l.a.createElement(U,{label:"Twilight Town",name:"twilightTown",checked:N.twilightTown}),l.a.createElement(U,{label:"Hollow Bastion",name:"hollowBastion",checked:N.hollowBastion}),l.a.createElement(U,{label:"Cavern of Remembrance",name:"cavernOfRemembrance",checked:N.cavernOfRemembrance}),l.a.createElement(U,{label:"Beast's Castle",name:"beastsCastle",checked:N.beastsCastle}),l.a.createElement(U,{label:"Olympus Colisseum",name:"olympus",checked:N.olympus}),l.a.createElement(U,{label:"Agrabah",name:"agrabah",checked:N.agrabah}),l.a.createElement(U,{label:"Land of Dragons",name:"landOfDragons",checked:N.landOfDragons}),l.a.createElement(U,{label:"100 Acre Wood",name:"pooh",checked:N.pooh}),l.a.createElement(U,{label:"Atlantica",name:"atlantica",checked:N.atlantica}),l.a.createElement(U,{label:"Pride Lands",name:"prideLands",checked:N.prideLands}),l.a.createElement(U,{label:"Disne's Castle",name:"disneyCastle",checked:N.disneyCastle}),l.a.createElement(U,{label:"Timeless River",name:"timelessRiver",checked:N.timelessRiver}),l.a.createElement(U,{label:"Halloween Town",name:"halloweenTown",checked:N.halloweenTown}),l.a.createElement(U,{label:"Port Royal",name:"portRoyal",checked:N.portRoyal}),l.a.createElement(U,{label:"Space Paranoids",name:"spaceParanoids",checked:N.spaceParanoids}),l.a.createElement(U,{label:"The World That Never Was",name:"twtnw",checked:N.twtnw})),l.a.createElement("div",{className:t.buttonWrapper},l.a.createElement(k.a,{type:"submit",disabled:i,className:t.button,color:"primary",variant:"contained"},i?"Generating seed...":"Generate seed"))))},D=Object(m.a)((function(){return{link:{color:"black",textDecoration:"none"}}})),_=function(){var e=D();return l.a.createElement("header",null,l.a.createElement(s.a,null,l.a.createElement(d.a,{variant:"h4",align:"center"},l.a.createElement(i.b,{to:"/",className:e.link},"KH2FM Randomizer")),l.a.createElement(d.a,{variant:"subtitle1",align:"center"},"by"," ",l.a.createElement("a",{href:"https://github.com/afresquet",target:"_blank",rel:"noopener noreferrer",className:e.link},"Alvaro")," ",l.a.createElement("a",{href:"https://www.twitch.tv/valaxor_",target:"_blank",rel:"noopener noreferrer",className:e.link},"(Valaxor)"))))},W=t(170),P=t(165),L=t(167),F=t(164),H=t(166),q=t(163),J=t(75),U=t.n(J),V=function(e){return e.reduce((function(e,a){return e+function(e,a){var t=e.padStart(8,"0").toUpperCase(),n=a.padStart(8,"0").toUpperCase();return"patch=1,EE,".concat(t,",extended,").concat(n,"\n")}(a.location.value,a.reward.value)}),"")},I=function(e){var a=e.property,t=e.children;return a?l.a.createElement(d.a,null,t):null},K=function(e){var a=e.reward,t=e.location;return l.a.createElement(q.a,null,l.a.createElement(F.a,null,t.description),l.a.createElement(F.a,null,t.type),l.a.createElement(F.a,{colSpan:t.reward.name?1:2},a.name),t.reward.name?l.a.createElement(F.a,null,t.reward.name):null)},$=Object(m.a)((function(e){var a={margin:e.spacing(3),marginLeft:"auto",marginRight:"auto",padding:e.spacing(3),width:"50%",textAlign:"center"};return Object(W.a)({paper:a,title:{marginBottom:e.spacing(3)},button:{marginTop:e.spacing(3),width:"75%"},spoilerPaper:Object(w.a)(Object(w.a)({},a),{},{width:"auto"})})})),Q=function(e){var a=e.match.params.seed,t=$(),c=Object(r.useState)(null),o=Object(v.a)(c,2),i=o[0],s=o[1],m=Object(r.useState)(null),u=Object(v.a)(m,2),p=u[0],b=u[1],h=Object(r.useState)(!1),g=Object(v.a)(h,2),w=g[0],O=g[1],y=Object(r.useState)(!0),j=Object(v.a)(y,2),A=j[0],T=j[1],R=Object(r.useState)(null),S=Object(v.a)(R,2),B=S[0],N=S[1];Object(r.useEffect)((function(){Object(E.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("".concat(x,"/seed/").concat(a));case 3:t=e.sent,n=t.data,s(n.configuration),b(n.seed),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),N(e.t0);case 12:return e.prev=12,T(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()}),[a]);var z=Object(r.useCallback)(Object(E.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,p){e.next=3;break}return e.abrupt("return");case 3:T(!0),"F266B00B.pnach",a=V(p),U()(a,"F266B00B.pnach","application/octet-stream"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),N(e.t0);case 12:return e.prev=12,T(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])}))),[p]),G=Object(r.useCallback)(Object(E.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O((function(e){return!e}));case 1:case"end":return e.stop()}}),e)}))),[]);if(A&&!i)return l.a.createElement("div",null,"loading...");if(B)return console.error(B),l.a.createElement("div",null,"error");if(!i||!p)return null;var D="";return i.gameMode.mode===n.BASE_GAME?D="Base Game":i.gameMode.mode===n.GOA_MOD&&(D="Garden of Assemblage Mod"),l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,{variant:"outlined",className:t.paper},l.a.createElement("div",{className:t.title},l.a.createElement(d.a,{variant:"h4"},"Seed: ",i.seed),l.a.createElement(d.a,{variant:"h6"},"Game Mode: ",D)),l.a.createElement(I,{property:i.criticalMode},"Critical Mode"),l.a.createElement(I,{property:i.stats},"Randomize Stats"),l.a.createElement(I,{property:i.abilities},"Randomize Abilities"),l.a.createElement(I,{property:i.donaldAbilities},"Randomize Donald's Abilities"),l.a.createElement(I,{property:i.goofyAbilities},"Randomize Goofy's Abilities"),l.a.createElement(I,{property:i.formAbilities},"Randomize Form Abilities"),l.a.createElement(I,{property:i.simulatedTwilightTown},"Simulated Twilight Town"),l.a.createElement(I,{property:i.twilightTown},"Twilight Town"),l.a.createElement(I,{property:i.hollowBastion},"Hollow Bastion"),l.a.createElement(I,{property:i.cavernOfRemembrance},"Cavern of Remembrance"),l.a.createElement(I,{property:i.beastsCastle},"Beast's Castle"),l.a.createElement(I,{property:i.olympus},"Olympus"),l.a.createElement(I,{property:i.agrabah},"Agrabah"),l.a.createElement(I,{property:i.landOfDragons},"Land of Dragons"),l.a.createElement(I,{property:i.pooh},"100 Acre Wood"),l.a.createElement(I,{property:i.atlantica},"Atlantica"),l.a.createElement(I,{property:i.prideLands},"Pride Lands"),l.a.createElement(I,{property:i.disneyCastle},"Disney Castle"),l.a.createElement(I,{property:i.timelessRiver},"Timeless River"),l.a.createElement(I,{property:i.halloweenTown},"Halloween Town"),l.a.createElement(I,{property:i.portRoyal},"Port Royal"),l.a.createElement(I,{property:i.spaceParanoids},"Space Paranoids"),l.a.createElement(I,{property:i.twtnw},"The World That Never Was"),l.a.createElement(k.a,{onClick:z,color:"primary",variant:"contained",className:t.button},"Download seed"),l.a.createElement(k.a,{onClick:G,color:"primary",variant:"contained",className:t.button},w?"Hide":"Show"," spoiler logs")),w?l.a.createElement(C.a,{className:t.spoilerPaper,variant:"outlined"},l.a.createElement(P.a,{size:"small"},l.a.createElement(H.a,null,l.a.createElement(q.a,null,l.a.createElement(F.a,null,"Location"),l.a.createElement(F.a,null,"Type"),l.a.createElement(F.a,null,"Became"),l.a.createElement(F.a,null,"Original"))),l.a.createElement(L.a,null,p.map((function(e){var a=e.reward,t=e.location;return l.a.createElement(K,{reward:a,location:t})}))))):null)},X=Object(m.a)((function(e){return{content:{padding:e.spacing(3),flex:"1 0 auto"}}}));var Y=function(){var e=X();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:e.content},l.a.createElement(_,null),l.a.createElement("main",null,l.a.createElement(s.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",component:G,exact:!0}),l.a.createElement(u.a,{path:"/seed/:seed",component:Q,exact:!0}))))),l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,{basename:"/"},l.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,a,t){e.exports=t(113)}},[[85,1,2]]]);
//# sourceMappingURL=main.20aa6642.chunk.js.map