var e,t;e=this,t=function(e){"use strict";const t=e=>typeof e,s="",n=t(s),l=t(!0),a=t(0),r=t(t),o="type",c="default",i=e=>s+e,u=(e,t)=>e.forEach(t),d=(e,t)=>e.map(t),f=e=>e.length,h=(e,t,s)=>e.slice(t,s),T=(e,...t)=>e.push(...t),g=e=>JSON.stringify(e,((e,t)=>{return y(t,Map)?(s=(e,[t,s])=>(e[t]=s,e),n={},[...t].reduce(s,n)):t;var s,n})),b=JSON.parse,V=isFinite,y=(e,t)=>e instanceof t,S=e=>null==e,p=(e,t,s)=>S(e)?s?.():t(e),v=e=>e==n||e==l,w=e=>t(e)==r,m=(e,t)=>e?.has(t)??!1,I=e=>S(e)||0==(e=>e.size)(e),R=e=>e.clear(),C=(e,t)=>e?.forEach(t),J=(e,t)=>e?.delete(t),L=e=>new Map(e),E=e=>[...e?.keys()??[]],F=(e,t)=>e?.get(t),x=(e,t)=>C(e,((e,s)=>t(s,e))),z=(e,t,s)=>S(s)?(J(e,t),e):e?.set(t,s),O=(e,t,s)=>(m(e,t)||z(e,t,s()),F(e,t)),j=(e,t,s)=>{const n={},l=t??(e=>e);return C(e,((e,t)=>p(l(e),(e=>s?.(e)?0:n[t]=e)))),n},k=(e,t)=>{const s=L(),n=t??(e=>e);return C(e,((e,t)=>s.set(t,n(e)))),s},A=e=>k(e,k),M=(e,t,s,n,l=0)=>p((s?O:F)(e,t[l],l>f(t)-2?s:L),(a=>{if(l>f(t)-2)return n?.(a)&&z(e,t[l]),a;const r=M(a,t,s,n,l+1);return I(a)&&z(e,t[l]),r})),N=e=>new Set(Array.isArray(e)||S(e)?e:[e]),P=(e,t)=>e?.add(t),B=/^\d+$/,D=()=>{const e=[];let t=0;return[()=>e.shift()??s+t++,t=>{B.test(t)&&f(e)<1e3&&T(e,t)}]},W=Object,$=W.keys,q=W.isFrozen,G=W.freeze,H=e=>y(e,W)&&e.constructor==W,K=(e,t)=>!S(((e,t)=>p(e,(e=>e[t])))(e,t)),Q=(e,t)=>delete e[t],U=(e,t)=>d(W.entries(e),(([e,s])=>t(s,e))),X=e=>{return H(e)&&(t=$(e),0==f(t));var t},Y=e=>[e,e],Z=()=>[L(),L()],_=e=>{const s=t(e);return v(s)||s==a&&V(e)?s:void 0},ee=(e,t,s,n=z)=>{const l=(a=e=>!K(t,e),E(e).filter(a));var a;return u($(t),(n=>s(e,n,t[n]))),u(l,(t=>n(e,t))),e},te=(e,t,s)=>S(e)||!H(e)||X(e)||q(e)?(s?.(),!1):(U(e,((s,n)=>{t(s,n)||Q(e,n)})),!X(e)),se=(e,t,s)=>z(e,t,F(e,t)==-s?void 0:s),ne=()=>{let e,t,n,l,r=0;const V=L(),y=L(),B=L(),W=L(),$=L(),q=L(),H=L(),le=L(),ae=L(),re=L(),oe=L(),ce=L(),ie=N(),ue=L(),de=L(),fe=L(),he=Z(),Te=Z(),ge=Z(),be=Z(),Ve=Z(),ye=Z(),Se=Z(),pe=Z(),ve=Z(),we=Z(),me=Z(),Ie=Z(),Re=Z(),Ce=Z(),[Je,Le,Ee,Fe]=(e=>{let t;const[n,l]=D(),a=L();return[(e,l,r,o=[],c=(()=>[]))=>{t??=Pt;const i=n();return z(a,i,[e,l,r,o,c]),P(M(l,r??[s],N),i),i},(e,n,...l)=>u(((e,t=[s])=>{const n=[],l=(e,s)=>s==f(t)?T(n,e):null===t[s]?C(e,(e=>l(e,s+1))):u([t[s],null],(t=>l(F(e,t),s+1)));return l(e,0),n})(e,n),(e=>C(e,(e=>F(a,e)[0](t,...n??[],...l))))),e=>p(F(a,e),(([,t,n])=>(M(t,n??[s],void 0,(t=>(J(t,e),I(t)?1:0))),z(a,e),l(e),n))),e=>p(F(a,e),(([e,,s=[],n,l])=>{const a=(...r)=>{const o=f(r);o==f(s)?e(t,...r,...l(r)):S(s[o])?u(n[o]?.(...r)??[],(e=>a(...r,e))):a(...r,s[o])};a()}))]})(),xe=e=>{if(!te(e,((e,t)=>[o,c].includes(t))))return!1;const t=e.type;return!(!v(t)&&t!=a||(_(e.default)!=t&&Q(e,c),0))},ze=(t,s)=>(!e||m(ae,s)||ct(s))&&te(t,((e,t)=>Oe(s,t,e)),(()=>ct(s))),Oe=(e,t,s,n)=>te(n?s:Me(s,e,t),((n,l)=>p(je(e,t,l,n),(e=>(s[l]=e,!0)),(()=>!1))),(()=>ct(e,t))),je=(t,s,n,l)=>e?p(F(F(ae,t),n),(e=>_(l)!=e.type?ct(t,s,n,l,e.default):l),(()=>ct(t,s,n,l))):S(_(l))?ct(t,s,n,l):l,ke=(e,t)=>te(t?e:Ne(e),((t,s)=>p(Ae(s,t),(t=>(e[s]=t,!0)),(()=>!1))),(()=>it())),Ae=(e,s)=>t?p(F(oe,e),(t=>_(s)!=t.type?it(e,s,t.default):s),(()=>it(e,s))):S(_(s))?it(e,s):s,Me=(e,t,s)=>(p(F(re,t),(([n,l])=>{C(n,((t,s)=>{K(e,s)||(e[s]=t)})),C(l,(n=>{K(e,n)||ct(t,s,n)}))})),e),Ne=e=>(t&&(C(ce,((t,s)=>{K(e,s)||(e[s]=t)})),C(ie,(t=>{K(e,t)||it(t)}))),e),Pe=e=>ee(ae,e,((e,t,s)=>{const n=L(),l=N();ee(O(ae,t,L),s,((e,t,s)=>{z(e,t,s),p(s.default,(e=>z(n,t,e)),(()=>P(l,t)))})),z(re,t,[n,l])}),((e,t)=>{z(ae,t),z(re,t)})),Be=e=>ee(oe,e,((e,t,s)=>{z(oe,t,s),p(s.default,(e=>z(ce,t,e)),(()=>P(ie,t)))}),((e,t)=>{z(oe,t),z(ce,t),J(ie,t)})),De=e=>X(e)?zt():Jt(e),We=e=>ee(de,e,((e,t,s)=>$e(t,s)),((e,t)=>Ze(t))),$e=(e,t)=>ee(O(de,e,(()=>(st(e,1),L()))),t,((t,s,n)=>qe(e,t,s,n)),((t,s)=>_e(e,t,s))),qe=(e,t,s,n,l)=>ee(O(t,s,(()=>(nt(e,s,1),L()))),n,((t,n,l)=>Ge(e,s,t,n,l)),((n,a)=>et(e,t,s,n,a,l))),Ge=(e,t,s,n,l)=>{m(s,n)||lt(e,t,n,1);const a=F(s,n);l!==a&&(at(e,t,n,a,l),z(s,n,l))},He=(e,t,s,n,l)=>p(F(t,s),(t=>Ge(e,s,t,n,l)),(()=>qe(e,t,s,Me({[n]:l},e,s)))),Ke=e=>X(e)?Ot():Lt(e),Qe=e=>ee(fe,e,((e,t,s)=>Ue(t,s)),((e,t)=>tt(t))),Ue=(e,t)=>{m(fe,e)||rt(e,1);const s=F(fe,e);t!==s&&(ot(e,s,t),z(fe,e,t))},Xe=e=>{const[t]=O(ue,e,D),s=t();return m(F(de,e),s)?Xe(e):s},Ye=e=>F(de,e)??$e(e,{}),Ze=e=>$e(e,{}),_e=(e,t,s)=>{const[,n]=O(ue,e,D);n(s),qe(e,t,s,{},!0)},et=(e,t,s,n,l,a)=>{const r=F(F(re,e)?.[0],l);if(!S(r)&&!a)return Ge(e,s,n,l,r);const o=t=>{at(e,s,t,F(n,t)),lt(e,s,t,-1),z(n,t)};S(r)?o(l):x(n,o),I(n)&&(nt(e,s,-1),I(z(t,s))&&(st(e,-1),z(de,e),z(ue,e)))},tt=e=>{const t=F(ce,e);if(!S(t))return Ue(e,t);ot(e,F(fe,e)),rt(e,-1),z(fe,e)},st=(e,t)=>se(V,e,t),nt=(e,t,s)=>se(O(y,e,L),t,s),lt=(e,t,s,n)=>se(O(O(B,e,L),t,L),s,n),at=(e,t,s,n,l)=>O(O(O(W,e,L),t,L),s,(()=>[n,0]))[1]=l,rt=(e,t)=>se($,e,t),ot=(e,t,s)=>O(q,e,(()=>[t,0]))[1]=s,ct=(e,t,s,n,l)=>(T(O(O(O(H,e,L),t,L),s,(()=>[])),n),l),it=(e,t,s)=>(T(O(le,e,(()=>[])),t),s),ut=(e,t,s)=>p(F(F(F(W,e),t),s),(([e,t])=>[!0,e,t]),(()=>[!1,...Y(mt(e,t,s))])),dt=e=>p(F(q,e),(([e,t])=>[!0,e,t]),(()=>[!1,...Y(Ct(e))])),ft=e=>I(H)||I(ve[e])?0:C(e?k(H,A):H,((t,s)=>C(t,((t,n)=>C(t,((t,l)=>Le(ve[e],[s,n,l],t))))))),ht=e=>I(le)||I(we[e])?0:C(e?k(le):le,((t,s)=>Le(we[e],[s],t))),Tt=(e,t,s)=>{if(!I(t))return Le(e,s),1},gt=e=>{const t=I(Ve[e]),s=I(Se[e])&&I(be[e])&&t&&I(Te[e]),n=I(pe[e])&&I(ye[e])&&I(ge[e])&&I(he[e]);if(!s||!n){const l=e?[k(V),A(y),k(B,A),k(W,A)]:[V,y,B,W];if(!s){C(l[2],((t,s)=>C(t,((t,n)=>Tt(Se[e],t,[s,n])))));const s=N();C(l[1],((n,l)=>{Tt(be[e],n,[l])&&!t&&(Le(Ve[e],[l,null]),P(s,l))})),t||C(l[3],((t,n)=>{if(!m(s,n)){const s=N();C(t,(e=>C(e,(([t,n],l)=>n!==t?P(s,l):J(e,l))))),C(s,(t=>Le(Ve[e],[n,t])))}})),Tt(Te[e],l[0])}if(!n){let t;C(l[3],((s,n)=>{let l;C(s,((s,a)=>{let r;C(s,(([s,o],c)=>{o!==s&&(Le(pe[e],[n,a,c],o,s,ut),t=l=r=1)})),r&&Le(ye[e],[n,a],ut)})),l&&Le(ge[e],[n],ut)})),t&&Le(he[e],void 0,ut)}}},bt=e=>{const t=I(Ie[e]),s=I(Re[e])&&I(me[e]);if(!t||!s){const n=e?[k($),k(q)]:[$,q];if(t||Tt(Ie[e],n[0]),!s){let t;C(n[1],(([s,n],l)=>{n!==s&&(Le(Re[e],[l],n,s,dt),t=1)})),t&&Le(me[e],void 0,dt)}}},Vt=(e,...t)=>(At((()=>e(...d(t,i)))),Pt),yt=()=>j(de,(e=>j(e,j))),St=()=>E(de),pt=e=>E(F(de,i(e))),vt=(e,t,s,n=0,l)=>{return d(h((r=F(de,i(e)),o=(e,s)=>[S(t)?s:F(e,i(t)),s],a=([e],[t])=>(e<t?-1:1)*(s?-1:1),d([...r?.entries()??[]],(([e,t])=>o(t,e))).sort(a)),n,S(l)?l:n+l),(([,e])=>e));var a,r,o},wt=(e,t)=>E(F(F(de,i(e)),i(t))),mt=(e,t,s)=>F(F(F(de,i(e)),i(t)),i(s)),It=()=>j(fe),Rt=()=>E(fe),Ct=e=>F(fe,i(e)),Jt=e=>Vt((()=>(e=>te(e,ze,ct))(e)?We(e):0)),Lt=e=>Vt((()=>ke(e)?Qe(e):0)),Et=e=>{try{De(b(e))}catch{}return Pt},Ft=t=>Vt((()=>{if((e=te(t,(e=>te(e,xe))))&&(Pe(t),!I(de))){const e=yt();zt(),Jt(e)}})),xt=e=>Vt((()=>{if(t=(e=>te(e,xe))(e)){const s=It();kt(),Ot(),t=!0,Be(e),Lt(s)}})),zt=()=>Vt((()=>We({}))),Ot=()=>Vt((()=>Qe({}))),jt=()=>Vt((()=>{Pe({}),e=!1})),kt=()=>Vt((()=>{Be({}),t=!1})),At=(e,t)=>{if(-1==r)return;Mt();const s=e();return Nt(t),s},Mt=()=>(r++,Pt),Nt=e=>(r>0&&(r--,0==r&&(n=!I(W),l=!I(q),r=1,ft(1),n&&gt(1),ht(1),l&&bt(1),r=-1,e?.(j(W,(e=>j(e,(e=>j(e,(e=>[...e]),(([e,t])=>e===t))),X)),X),j(H,(e=>j(e,j))),j(q,(e=>[...e]),(([e,t])=>e===t)),j(le))&&(r=1,C(W,((e,t)=>C(e,((e,s)=>C(e,(([e],n)=>((e,t,s,n,l)=>S(l)?e.delCell(t,s,n,!0):e.setCell(t,s,n,l))(Pt,t,s,n,e))))))),C(q,(([e],t)=>((e,t,s)=>S(s)?e.delValue(t):e.setValue(t,s))(Pt,t,e))),r=-1,n=l=!1),Le(Ce[0],void 0,n,l),ft(0),n&&gt(0),ht(0),l&&bt(0),Le(Ce[1],void 0,n,l),r=0,u([V,y,B,W,H,$,q,le],R))),Pt),Pt={getTables:yt,getTableIds:St,getTable:e=>j(F(de,i(e)),j),getRowIds:pt,getSortedRowIds:vt,getRow:(e,t)=>j(F(F(de,i(e)),i(t))),getCellIds:wt,getCell:mt,getValues:It,getValueIds:Rt,getValue:Ct,hasTables:()=>!I(de),hasTable:e=>m(de,i(e)),hasRow:(e,t)=>m(F(de,i(e)),i(t)),hasCell:(e,t,s)=>m(F(F(de,i(e)),i(t)),i(s)),hasValues:()=>!I(fe),hasValue:e=>m(fe,i(e)),getTablesJson:()=>g(de),getValuesJson:()=>g(fe),getJson:()=>g([de,fe]),getTablesSchemaJson:()=>g(ae),getValuesSchemaJson:()=>g(oe),getSchemaJson:()=>g([ae,oe]),setTables:Jt,setTable:(e,t)=>Vt((e=>ze(t,e)?$e(e,t):0),e),setRow:(e,t,s)=>Vt(((e,t)=>Oe(e,t,s)?qe(e,Ye(e),t,s):0),e,t),addRow:(e,t)=>At((()=>{let s;return Oe(e,s,t)&&(e=i(e),qe(e,Ye(e),s=Xe(e),t)),s})),setPartialRow:(e,t,s)=>Vt(((e,t)=>{if(Oe(e,t,s,1)){const n=Ye(e);U(s,((s,l)=>He(e,n,t,l,s)))}}),e,t),setCell:(e,t,s,n)=>Vt(((e,t,s)=>p(je(e,t,s,w(n)?n(mt(e,t,s)):n),(n=>He(e,Ye(e),t,s,n)))),e,t,s),setValues:Lt,setPartialValues:e=>Vt((()=>ke(e,1)?U(e,((e,t)=>Ue(t,e))):0)),setValue:(e,t)=>Vt((e=>p(Ae(e,w(t)?t(Ct(e)):t),(t=>Ue(e,t)))),e),setTablesJson:Et,setValuesJson:e=>{try{Ke(b(e))}catch{}return Pt},setJson:e=>{try{const[t,s]=b(e);De(t),Ke(s)}catch{Et(e)}return Pt},setTablesSchema:Ft,setValuesSchema:xt,setSchema:(e,t)=>Vt((()=>{Ft(e),xt(t)})),delTables:zt,delTable:e=>Vt((e=>m(de,e)?Ze(e):0),e),delRow:(e,t)=>Vt(((e,t)=>p(F(de,e),(s=>m(s,t)?_e(e,s,t):0))),e,t),delCell:(e,t,s,n)=>Vt(((e,t,s)=>p(F(de,e),(l=>p(F(l,t),(a=>m(a,s)?et(e,l,t,a,s,n):0))))),e,t,s),delValues:Ot,delValue:e=>Vt((e=>m(fe,e)?tt(e):0),e),delTablesSchema:jt,delValuesSchema:kt,delSchema:()=>Vt((()=>{jt(),kt()})),transaction:At,startTransaction:Mt,finishTransaction:Nt,forEachTable:e=>C(de,((t,s)=>e(s,(e=>C(t,((t,s)=>e(s,(e=>x(t,e))))))))),forEachRow:(e,t)=>C(F(de,i(e)),((e,s)=>t(s,(t=>x(e,t))))),forEachCell:(e,t,s)=>x(F(F(de,i(e)),i(t)),s),forEachValue:e=>x(fe,e),addSortedRowIdsListener:(e,t,s,n,l,a,r)=>{let o=vt(e,t,s,n,l);return Je((()=>{const r=vt(e,t,s,n,l);var c,i,u;i=o,f(c=r)===f(i)&&(u=(e,t)=>i[t]===e,c.every(u))||(o=r,a(Pt,e,t,s,n,l,o))}),Ve[r?1:0],[e,t],[St])},addWillFinishTransactionListener:e=>Je(e,Ce[0]),addDidFinishTransactionListener:e=>Je(e,Ce[1]),callListener:e=>(Fe(e),Pt),delListener:e=>(Ee(e),Pt),getListenerStats:()=>({}),createStore:ne};return U({Tables:[0,he],TableIds:[0,Te],Table:[1,ge,[St]],RowIds:[1,be,[St]],Row:[2,ye,[St,pt]],CellIds:[2,Se,[St,pt]],Cell:[3,pe,[St,pt,wt],e=>Y(mt(...e))],InvalidCell:[3,ve],Values:[0,me],ValueIds:[0,Ie],Value:[1,Re,[Rt],e=>Y(Ct(e[0]))],InvalidValue:[1,we]},(([e,t,s,n],l)=>{Pt["add"+l+"Listener"]=(...l)=>Je(l[e],t[l[e+1]?1:0],e>0?h(l,0,e):void 0,s,n)})),G(Pt)};e.createStore=ne},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBaseStore={});
