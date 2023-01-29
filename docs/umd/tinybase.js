var e,t;e=this,t=function(e,t){"use strict";const s=e=>typeof e,n="",o=s(n),r=s(!0),a=s(0),i=s(s),l="default",c="utf8",d="Listener",u="Result",h="add",f="Table",g="RowIds",L="CellIds",w="Cell",v=e=>n+e,p=(e,t)=>e.includes(t),S=(e,t)=>e.every(t),R=(e,t)=>C(e)===C(t)&&S(e,((e,s)=>t[s]===e)),y=(e,t)=>S(e,((s,n)=>0==n||t(e[n-1],s)<=0)),I=(e,t)=>e.sort(t),T=(e,t)=>e.forEach(t),b=(e,t)=>e.map(t),m=e=>E(e,((e,t)=>e+t),0),C=e=>e.length,V=e=>0==C(e),E=(e,t,s)=>e.reduce(t,s),k=(e,t,s)=>e.slice(t,s),J=(e,...t)=>e.push(...t),M=e=>e.pop(),x=e=>e.shift(),A=e=>JSON.stringify(e,((e,t)=>j(t,Map)?E([...t],((e,[t,s])=>(e[t]=s,e)),{}):t)),D=JSON.parse,F=Math.max,P=Math.min,Q=isFinite,j=(e,t)=>e instanceof t,z=e=>null==e,N=(e,t,s)=>z(e)?s?.():t(e),O=e=>e==o||e==r,W=e=>s(e)==i,B=e=>Array.isArray(e),q=()=>{},H=e=>e.size,$=(e,t)=>e?.has(t)??!1,G=e=>z(e)||0==H(e),K=e=>[...e?.values()??[]],U=e=>e.clear(),X=(e,t)=>e?.forEach(t),Y=(e,t)=>e?.delete(t),Z=e=>new Map(e),_=e=>[...e?.keys()??[]],ee=(e,t)=>e?.get(t),te=(e,t)=>X(e,((e,s)=>t(s,e))),se=(e,t,s)=>z(s)?(Y(e,t),e):e?.set(t,s),ne=(e,t,s)=>($(e,t)||se(e,t,s()),ee(e,t)),oe=(e,t,s)=>{const n={},o=t??(e=>e);return X(e,((e,t)=>N(o(e),(e=>s?.(e)?0:n[t]=e)))),n},re=(e,t)=>{const s=Z(),n=t??(e=>e);return X(e,((e,t)=>s.set(t,n(e)))),s},ae=e=>re(e,re),ie=(e,t,s,n,o=0)=>N((s?ne:ee)(e,t[o],o>C(t)-2?s:Z),(r=>{if(o>C(t)-2)return n?.(r)&&se(e,t[o]),r;const a=ie(r,t,s,n,o+1);return G(r)&&se(e,t[o]),a})),le=e=>{const t=s(e);return O(t)||t==a&&Q(e)?t:void 0},ce=(e,t,s,n,o)=>z(o)?e.delCell(t,s,n,!0):e.setCell(t,s,n,o),de=(e,t,s)=>z(s)?e.delValue(t):e.setValue(t,s),ue=e=>new Set(B(e)||z(e)?e:[e]),he=(e,t)=>e?.add(t),fe=(e,t,s)=>{const n=e.hasRow,o=Z(),r=Z(),a=Z(),i=Z(),l=Z(),c=(t,s,...n)=>{const o=ne(l,t,ue);return T(n,(t=>he(o,t)&&s&&e.callListener(t))),n},d=(t,...s)=>N(ee(l,t),(n=>{T(V(s)?K(n):s,(t=>{e.delListener(t),Y(n,t)})),G(n)&&se(l,t)})),u=(e,s)=>{se(o,e,s),$(r,e)||(se(r,e,t()),se(a,e,Z()),se(i,e,Z()))},h=e=>{se(o,e),se(r,e),se(a,e),se(i,e),d(e)};return[()=>e,()=>_(o),e=>te(r,e),e=>$(r,e),e=>ee(o,e),e=>ee(r,e),(e,t)=>se(r,e,t),u,(t,o,r,l,h)=>{u(t,o);const f=Z(),g=Z(),L=ee(a,t),w=ee(i,t),v=t=>{const r=s=>e.getCell(o,t,s),a=ee(L,t),i=n(o,t)?s(l(r,t)):void 0;if(a===i||B(a)&&B(i)&&R(a,i)||se(f,t,[a,i]),!z(h)){const e=ee(w,t),s=n(o,t)?h(r,t):void 0;e!=s&&se(g,t,s)}},p=e=>{r((()=>{X(f,(([,e],t)=>se(L,t,e))),X(g,((e,t)=>se(w,t,e)))}),f,g,L,w,e),U(f),U(g)};te(L,v),e.hasTable(o)&&T(e.getRowIds(o),(e=>{$(L,e)||v(e)})),p(!0),d(t),c(t,0,e.addRowListener(o,null,((e,t,s)=>v(s))),e.addTableListener(o,(()=>p())))},h,()=>te(l,h),c,d]},ge=(e,t)=>s(e)==o?t=>t(e):e??(()=>t??n),Le=e=>{const t=new WeakMap;return s=>(t.has(s)||t.set(s,e(s)),t.get(s))},we=/^\d+$/,ve=()=>{const e=[];let t=0;return[()=>x(e)??n+t++,t=>{we.test(t)&&C(e)<1e3&&J(e,t)}]},pe=e=>{let t;const[s,o]=ve(),r=Z();return[(o,a,i,l=[],c=(()=>[]))=>{t??=e();const d=s();return se(r,d,[o,a,i,l,c]),he(ie(a,i??[n],ue),d),d},(e,s,...o)=>T(((e,t=[n])=>{const s=[],o=(e,n)=>n==C(t)?J(s,e):null===t[n]?X(e,(e=>o(e,n+1))):T([t[n],null],(t=>o(ee(e,t),n+1)));return o(e,0),s})(e,s),(e=>X(e,(e=>ee(r,e)[0](t,...s??[],...o))))),e=>N(ee(r,e),(([,t,s])=>(ie(t,s??[n],void 0,(t=>(Y(t,e),G(t)?1:0))),se(r,e),o(e),s))),e=>N(ee(r,e),(([e,,s=[],n,o])=>{const r=(...a)=>{const i=C(a);i==C(s)?e(t,...a,...o(a)):z(s[i])?T(n[i]?.(...a)??[],(e=>r(...a,e))):r(...a,s[i])};r()}))]},Se=Object,Re=Se.keys,ye=Se.isFrozen,Ie=Se.freeze,Te=e=>j(e,Se)&&e.constructor==Se,be=(e,t)=>!z(((e,t)=>N(e,(e=>e[t])))(e,t)),me=(e,t)=>delete e[t],Ce=(e,t)=>b(Se.entries(e),(([e,s])=>t(s,e))),Ve=e=>Te(e)&&V(Re(e)),Ee=Le((e=>{let t,s,o,r=100,a=Z(),i=Z(),l=1;const c=Z(),d=Z(),[u,h,f]=pe((()=>W)),g=Z(),L=Z(),w=[],v=[],S=(t,s)=>{l=0,e.transaction((()=>{const[n,o]=ee(g,s);X(n,((s,n)=>X(s,((s,o)=>X(s,((s,r)=>ce(e,n,o,r,s[t]))))))),X(o,((s,n)=>de(e,n,s[t])))})),l=1},R=e=>{se(g,e),se(L,e),h(d,[e])},y=(e,t)=>T(((e,t)=>e.splice(0,t))(e,t??C(e)),R),I=()=>y(w,C(w)-r),b=()=>N(t,(()=>{J(w,t),I(),y(v),t=void 0,o=1})),m=()=>{t=M(w),o=1},E=e.addCellListener(null,null,null,((e,t,s,n,o,r)=>{if(l){b();const e=ne(a,t,Z),i=ne(e,s,Z),l=ne(i,n,(()=>[r,void 0]));l[1]=o,l[0]===o&&G(se(i,n))&&G(se(e,s))&&G(se(a,t))&&m(),P()}})),k=e.addValueListener(null,((e,t,s,n)=>{if(l){b();const e=ne(i,t,(()=>[n,void 0]));e[1]=s,e[0]===s&&G(se(i,t))&&m(),P()}})),A=(e="")=>(z(t)&&(t=n+s++,se(g,t,[a,i]),j(t,e),a=Z(),i=Z(),o=1),t),D=()=>{V(w)||(((e,...t)=>{e.unshift(...t)})(v,A()),S(0,t),t=M(w),o=1)},F=()=>{V(v)||(J(w,t),t=x(v),S(1,t),o=1)},P=()=>{o&&(h(c),o=0)},Q=e=>{const t=A(e);return P(),t},j=(e,t)=>(O(e)&&ee(L,e)!==t&&(se(L,e,t),h(d,[e])),W),O=e=>$(g,e),W={setSize:e=>(r=e,I(),W),addCheckpoint:Q,setCheckpoint:j,getStore:()=>e,getCheckpointIds:()=>[[...w],t,[...v]],forEachCheckpoint:e=>te(L,e),hasCheckpoint:O,getCheckpoint:e=>ee(L,e),goBackward:()=>(D(),P(),W),goForward:()=>(F(),P(),W),goTo:e=>{const s=p(w,e)?D:p(v,e)?F:null;for(;!z(s)&&e!=t;)s();return P(),W},addCheckpointIdsListener:e=>u(e,c),addCheckpointListener:(e,t)=>u(t,d,[e]),delListener:e=>(f(e),W),clear:()=>(y(w),y(v),z(t)||R(t),t=void 0,s=0,Q(),W),destroy:()=>{e.delListener(E),e.delListener(k)},getListenerStats:()=>({})};return Ie(W.clear())})),ke=(e,t)=>e<t?-1:1,Je=Le((e=>{const t=Z(),s=Z(),[o,r,a,i,l,c,d,,u,h,f]=fe(e,Z,(e=>z(e)?n:B(e)?b(e,v):v(e))),[g,L,w]=pe((()=>S)),p=(t,s,n)=>{const o=l(t);X(n,((t,n)=>s(n,(s=>X(t,(t=>s(t,(s=>e.forEachCell(o,t,s)))))))))},S={setIndexDefinition:(e,n,o,r,a,i=ke)=>{const l=z(a)?void 0:([e],[t])=>a(e,t);return u(e,n,((n,o,a,u,h,f)=>{let g=0;const w=ue(),v=ue(),p=c(e);if(X(o,(([e,t],s)=>{const n=ue(e),o=ue(t);X(n,(e=>Y(o,e)?Y(n,e):0)),X(n,(e=>{he(w,e),N(ee(p,e),(t=>{Y(t,s),G(t)&&(se(p,e),g=1)}))})),X(o,(e=>{he(w,e),$(p,e)||(se(p,e,ue()),g=1),he(ee(p,e),s),z(r)||he(v,e)}))})),n(),G(h)||(f?te(p,(e=>he(v,e))):te(a,(e=>N(ee(u,e),(e=>he(v,e))))),X(v,(e=>{const t=(t,s)=>i(ee(h,t),ee(h,s),e),s=[...ee(p,e)];y(s,t)||(se(p,e,ue(I(s,t))),he(w,e))}))),(g||f)&&!z(l)){const t=[...p];y(t,l)||(d(e,Z(I(t,l))),g=1)}g&&L(t,[e]),X(w,(t=>L(s,[e,t])))}),ge(o),N(r,ge)),S},delIndexDefinition:e=>(h(e),S),getStore:o,getIndexIds:r,forEachIndex:e=>a(((t,s)=>e(t,(e=>p(t,e,s))))),forEachSlice:(e,t)=>p(e,t,c(e)),hasIndex:i,hasSlice:(e,t)=>$(c(e),t),getTableId:l,getSliceIds:e=>_(c(e)),getSliceRowIds:(e,t)=>K(ee(c(e),t)),addSliceIdsListener:(e,s)=>g(s,t,[e]),addSliceRowIdsListener:(e,t,n)=>g(n,s,[e,t]),delListener:e=>(w(e),S),destroy:f,getListenerStats:()=>({})};return Ie(S)})),Me=Z([["avg",[(e,t)=>m(e)/t,(e,t,s)=>e+(t-e)/(s+1),(e,t,s)=>e+(e-t)/(s-1),(e,t,s,n)=>e+(t-s)/n]],["max",[e=>F(...e),(e,t)=>F(t,e),(e,t)=>t==e?void 0:e,(e,t,s)=>s==e?void 0:F(t,e)]],["min",[e=>P(...e),(e,t)=>P(t,e),(e,t)=>t==e?void 0:e,(e,t,s)=>s==e?void 0:P(t,e)]],["sum",[e=>m(e),(e,t)=>e+t,(e,t)=>e-t,(e,t,s)=>e-s+t]]]),xe=(e,t,s,n,o,r=!1)=>{if(G(s))return;const[a,i,l,c]=o;return r||=z(e),X(n,(([s,n])=>{r||(e=z(s)?i?.(e,n,t++):z(n)?l?.(e,s,t--):c?.(e,n,s,t),r||=z(e))})),r?a(K(s),H(s)):e},Ae=Le((e=>{const t=Z(),[s,o,r,a,i,l,c,,d,u,h]=fe(e,q,(e=>isNaN(e)||z(e)||!0===e||!1===e||e===n?void 0:1*e)),[f,g,L]=pe((()=>w)),w={setMetricDefinition:(e,s,n,o,r,a,i)=>{const u=W(n)?[n,r,a,i]:ee(Me,n)??ee(Me,"sum");return d(e,s,((s,n,o,r,a,i)=>{const d=l(e),h=H(r);i||=z(d),s();let f=xe(d,h,r,n,u,i);Q(f)||(f=void 0),f!=d&&(c(e,f),g(t,[e],f,d))}),ge(o,1)),w},delMetricDefinition:e=>(u(e),w),getStore:s,getMetricIds:o,forEachMetric:r,hasMetric:a,getTableId:i,getMetric:l,addMetricListener:(e,s)=>f(s,t,[e]),delListener:e=>(L(e),w),destroy:h,getListenerStats:()=>({})};return Ie(w)})),De=(e,t,s,o,r)=>{let a,i,l=0;const c={load:async(s,o)=>{if(2!=l){l=1;const r=await t();z(r)||r==n?e.transaction((()=>e.setTables(s).setValues(o))):e.setJson(r),l=0}return c},startAutoLoad:async(e,t)=>(c.stopAutoLoad(),await c.load(e,t),o(c.load),c),stopAutoLoad:()=>(r(),c),save:async()=>(1!=l&&(l=2,await s(e.getJson()),l=0),c),startAutoSave:async()=>(await c.stopAutoSave().save(),a=e.addTablesListener(c.save),i=e.addValuesListener(c.save),c),stopAutoSave:()=>(N(a,e.delListener),N(i,e.delListener),c),getStore:()=>e,destroy:()=>c.stopAutoLoad().stopAutoSave(),getStats:()=>({})};return Ie(c)},Fe="storage",Pe=globalThis.window,Qe=(e,t,s)=>{let n;return De(e,(async()=>s.getItem(t)),(async e=>s.setItem(t,e)),(e=>{n=n=>{n.storageArea===s&&n.key===t&&e()},Pe.addEventListener(Fe,n)}),(()=>{Pe.removeEventListener(Fe,n),n=void 0}))},je=e=>e.headers.get("ETag"),ze=Le((e=>{const t=e.createStore,[s,o,r,a,i,,,l,,c,v,p,R]=fe(e,(()=>!0),q),y=t(),I=t(),b=Z(),m=(e,t,...s)=>T(s,(s=>he(ne(ne(b,t,Z),e,ue),s))),E=e=>{N(ee(b,e),(e=>{te(e,((e,t)=>X(t,(t=>e.delListener(t))))),U(e)})),T([I,y],(t=>t.delTable(e)))},M=(e,t,s)=>m(t,e,t.addWillFinishTransactionListener(s.startTransaction),t.addDidFinishTransactionListener((()=>s.finishTransaction()))),x={setQueryDefinition:(t,s,o)=>{l(t,s),E(t);const r=[],a=[[null,[s,null,null,[],Z()]]],i=[],c=[],d=[];o({select:(e,t)=>{const s=W(e)?[C(r)+n,e]:[z(t)?e:t,s=>s(e,t)];return J(r,s),{as:e=>s[0]=e}},join:(e,t,s)=>{const n=z(s)||W(t)?null:t,o=z(n)?t:s,r=[e,[e,n,W(o)?o:e=>e(o),[],Z()]];return J(a,r),{as:e=>r[0]=e}},where:(e,t,s)=>J(i,W(e)?e:z(s)?s=>s(e)===t:n=>n(e,t)===s),group:(e,t,s,n,o)=>{const r=[e,[e,W(t)?[t,s,n,o]:ee(Me,t)??[(e,t)=>t]]];return J(c,r),{as:e=>r[0]=e}},having:(e,t)=>J(d,W(e)?e:s=>s(e)===t)});const u=Z(r);if(G(u))return x;const h=Z(a);te(h,((e,[,t])=>N(ee(h,t),(({3:t})=>z(e)?0:J(t,e)))));const f=Z(c);let g=y;if(G(f)&&V(d))g=I;else{M(t,g,I);const e=Z();te(f,((t,[s,n])=>he(ne(e,s,ue),[t,n])));const s=ue();te(u,(t=>$(e,t)?0:he(s,t)));const n=Z(),o=(s,n,o,r)=>N(s,(([a,i,l,c])=>{te(n,((t,[s])=>{const n=ne(a,t,Z),i=ee(n,o),l=r?void 0:s;if(i!==l){const s=ue([[i,l]]),r=H(n);se(n,o,l),X(ee(e,t),(([e,t])=>{const o=xe(c[e],r,n,s,t);c[e]=z(le(o))?null:o}))}})),G(i)||!S(d,(e=>e((e=>c[e]))))?I.delRow(t,l):z(l)?s[2]=I.addRow(t,c):I.setRow(t,l,c)}));m(g,t,g.addRowListener(t,null,((r,a,i,l)=>{const c=[],d=[],u=Z(),h=g.hasRow(t,i);let f=!h;X(s,(e=>{const[s,n,o]=l(t,i,e);J(c,n),J(d,o),f||=s})),te(e,(e=>{const[s,,n]=l(t,i,e);(f||s)&&se(u,e,[n])})),f&&o(ie(n,c,void 0,(([,e])=>(Y(e,i),G(e)))),u,i,1),h&&o(ie(n,d,(()=>{const e={};return X(s,(s=>e[s]=g.getCell(t,i,s))),[Z(),ue(),void 0,e]}),(([,e])=>{he(e,i)})),u,i)})))}M(t,e,g);const L=(n,o,r,a)=>{const l=t=>e.getCell(o,r,t);T(a,(s=>{const[o,,r,a,i]=ee(h,s),c=r?.(l,n),[d,u]=ee(i,n)??[];c!=d&&(z(u)||R(t,u),se(i,n,z(c)?null:[c,...p(t,1,e.addRowListener(o,c,(()=>L(n,o,c,a))))]))})),(n=>{const o=(t,o)=>e.getCell(...z(o)?[s,n,t]:t===s?[s,n,o]:[ee(h,t)?.[0],ee(ee(h,t)?.[4],n)?.[0],o]);g.transaction((()=>S(i,(e=>e(o)))?te(u,((e,s)=>ce(g,t,n,e,s(o,n)))):g.delRow(t,n)))})(n)},{3:w}=ee(h,null);return g.transaction((()=>p(t,1,e.addRowListener(s,null,((n,o,r)=>{e.hasRow(s,r)?L(r,s,r,w):(g.delRow(t,r),X(h,(({4:e})=>N(ee(e,r),(([,s])=>{R(t,s),se(e,r)})))))}))))),x},delQueryDefinition:e=>(E(e),c(e),x),getStore:s,getQueryIds:o,forEachQuery:r,hasQuery:a,getTableId:i,delListener:e=>(I.delListener(e),x),destroy:v,getListenerStats:()=>{const{tables:e,tableIds:t,transaction:s,...n}=I.getListenerStats();return n}};return Ce({[f]:[1,1],[g]:[0,1],SortedRowIds:[0,5],Row:[1,2],[L]:[0,2],[w]:[1,3]},(([e,t],s)=>{T(e?["get","has","forEach"]:["get"],(e=>x[e+u+s]=(...t)=>I[e+s](...t))),x[h+u+s+d]=(...e)=>I[h+s+d](...k(e,0,t),((s,...n)=>e[t](x,...n)))})),Ie(x)})),Ne=Le((e=>{const t=Z(),s=Z(),o=Z(),r=Z(),[a,i,l,c,d,u,,,h,f,g]=fe(e,(()=>[Z(),Z(),Z(),Z()]),(e=>z(e)?void 0:e+n)),[L,w,v]=pe((()=>y)),p=(e,t,s)=>N(u(e),(([n,,o])=>{if(!$(o,t)){const r=ue();if(d(e)!=R(e))he(r,t);else{let e=t;for(;!z(e)&&!$(r,e);)he(r,e),e=ee(n,e)}if(s)return r;se(o,t,r)}return ee(o,t)})),S=(e,t)=>N(u(e),(([,,e])=>se(e,t))),R=e=>ee(t,e),y={setRelationshipDefinition:(e,n,a,i)=>(se(t,e,a),h(e,n,((t,n)=>{const a=ue(),i=ue(),l=ue(),[c,d]=u(e);X(n,(([t,s],n)=>{z(t)||(he(i,t),N(ee(d,t),(e=>{Y(e,n),G(e)&&se(d,t)}))),z(s)||(he(i,s),$(d,s)||se(d,s,ue()),he(ee(d,s),n)),he(a,n),se(c,n,s),te(ee(r,e),(t=>{$(p(e,t),n)&&he(l,t)}))})),t(),X(a,(t=>w(s,[e,t]))),X(i,(t=>w(o,[e,t]))),X(l,(t=>{S(e,t),w(r,[e,t])}))}),ge(i)),y),delRelationshipDefinition:e=>(se(t,e),f(e),y),getStore:a,getRelationshipIds:i,forEachRelationship:t=>l((s=>t(s,(t=>e.forEachRow(d(s),t))))),hasRelationship:c,getLocalTableId:d,getRemoteTableId:R,getRemoteRowId:(e,t)=>ee(u(e)?.[0],t),getLocalRowIds:(e,t)=>K(ee(u(e)?.[1],t)),getLinkedRowIds:(e,t)=>z(u(e))?[t]:K(p(e,t,!0)),addRemoteRowIdListener:(e,t,n)=>L(n,s,[e,t]),addLocalRowIdsListener:(e,t,s)=>L(s,o,[e,t]),addLinkedRowIdsListener:(e,t,s)=>(p(e,t),L(s,r,[e,t])),delListener:e=>(S(...v(e)),y),destroy:g,getListenerStats:()=>({})};return Ie(y)})),Oe=e=>[e,e],We=()=>[Z(),Z()],Be=(e,t,s,n=se)=>{const o=(r=e=>!be(t,e),_(e).filter(r));var r;return T(Re(t),(n=>s(e,n,t[n]))),T(o,(t=>n(e,t))),e},qe=(e,t,s)=>z(e)||!Te(e)||Ve(e)||ye(e)?(s?.(),!1):(Ce(e,((s,n)=>{t(s,n)||me(e,n)})),!Ve(e)),He=(e,t,s)=>se(e,t,ee(e,t)==-s?void 0:s),$e=()=>{let e,t,s,n,o=0;const r=Z(),i=Z(),c=Z(),u=Z(),S=Z(),y=Z(),m=Z(),C=Z(),V=Z(),E=Z(),M=Z(),x=Z(),F=ue(),P=Z(),Q=Z(),j=Z(),B=We(),q=We(),H=We(),K=We(),ie=We(),fe=We(),ge=We(),Le=We(),we=We(),Se=We(),Re=We(),ye=We(),Te=We(),Ee=We(),[Je,Me,xe,Ae]=pe((()=>Kt)),De=e=>{if(!qe(e,((e,t)=>p(["type",l],t))))return!1;const t=e.type;return!(!O(t)&&t!=a||(le(e.default)!=t&&me(e,l),0))},Fe=(t,s)=>(!e||$(V,s)||vt(s))&&qe(t,((e,t)=>Pe(s,t,e)),(()=>vt(s))),Pe=(e,t,s,n)=>qe(n?s:Ne(s,e,t),((n,o)=>N(Qe(e,t,o,n),(e=>(s[o]=e,!0)),(()=>!1))),(()=>vt(e,t))),Qe=(t,s,n,o)=>e?N(ee(ee(V,t),n),(e=>le(o)!=e.type?vt(t,s,n,o,e.default):o),(()=>vt(t,s,n,o))):z(le(o))?vt(t,s,n,o):o,je=(e,t)=>qe(t?e:Ge(e),((t,s)=>N(ze(s,t),(t=>(e[s]=t,!0)),(()=>!1))),(()=>pt())),ze=(e,s)=>t?N(ee(M,e),(t=>le(s)!=t.type?pt(e,s,t.default):s),(()=>pt(e,s))):z(le(s))?pt(e,s):s,Ne=(e,t,s)=>(N(ee(E,t),(([n,o])=>{X(n,((t,s)=>{be(e,s)||(e[s]=t)})),X(o,(n=>{be(e,n)||vt(t,s,n)}))})),e),Ge=e=>(t&&(X(x,((t,s)=>{be(e,s)||(e[s]=t)})),X(F,(t=>{be(e,t)||pt(t)}))),e),Ke=e=>Be(V,e,((e,t,s)=>{const n=Z(),o=ue();Be(ne(V,t,Z),s,((e,t,s)=>{se(e,t,s),N(s.default,(e=>se(n,t,e)),(()=>he(o,t)))})),se(E,t,[n,o])}),((e,t)=>{se(V,t),se(E,t)})),Ue=e=>Be(M,e,((e,t,s)=>{se(M,t,s),N(s.default,(e=>se(x,t,e)),(()=>he(F,t)))}),((e,t)=>{se(M,t),se(x,t),Y(F,t)})),Xe=e=>Ve(e)?Ot():Pt(e),Ye=e=>Be(Q,e,((e,t,s)=>Ze(t,s)),((e,t)=>it(t))),Ze=(e,t)=>Be(ne(Q,e,(()=>(ut(e,1),Z()))),t,((t,s,n)=>_e(e,t,s,n)),((t,s)=>lt(e,t,s))),_e=(e,t,s,n,o)=>Be(ne(t,s,(()=>(ht(e,s,1),Z()))),n,((t,n,o)=>et(e,s,t,n,o)),((n,r)=>ct(e,t,s,n,r,o))),et=(e,t,s,n,o)=>{$(s,n)||ft(e,t,n,1);const r=ee(s,n);o!==r&&(gt(e,t,n,r,o),se(s,n,o))},tt=(e,t,s,n,o)=>N(ee(t,s),(t=>et(e,s,t,n,o)),(()=>_e(e,t,s,Ne({[n]:o},e,s)))),st=e=>Ve(e)?Wt():Qt(e),nt=e=>Be(j,e,((e,t,s)=>ot(t,s)),((e,t)=>dt(t))),ot=(e,t)=>{$(j,e)||Lt(e,1);const s=ee(j,e);t!==s&&(wt(e,s,t),se(j,e,t))},rt=e=>{const[t]=ne(P,e,ve),s=t();return $(ee(Q,e),s)?rt(e):s},at=e=>ee(Q,e)??Ze(e,{}),it=e=>Ze(e,{}),lt=(e,t,s)=>{const[,n]=ne(P,e,ve);n(s),_e(e,t,s,{},!0)},ct=(e,t,s,n,o,r)=>{const a=ee(ee(E,e)?.[0],o);if(!z(a)&&!r)return et(e,s,n,o,a);const i=t=>{gt(e,s,t,ee(n,t)),ft(e,s,t,-1),se(n,t)};z(a)?i(o):te(n,i),G(n)&&(ht(e,s,-1),G(se(t,s))&&(ut(e,-1),se(Q,e),se(P,e)))},dt=e=>{const t=ee(x,e);if(!z(t))return ot(e,t);wt(e,ee(j,e)),Lt(e,-1),se(j,e)},ut=(e,t)=>He(r,e,t),ht=(e,t,s)=>He(ne(i,e,Z),t,s),ft=(e,t,s,n)=>He(ne(ne(c,e,Z),t,Z),s,n),gt=(e,t,s,n,o)=>ne(ne(ne(u,e,Z),t,Z),s,(()=>[n,0]))[1]=o,Lt=(e,t)=>He(S,e,t),wt=(e,t,s)=>ne(y,e,(()=>[t,0]))[1]=s,vt=(e,t,s,n,o)=>(J(ne(ne(ne(m,e,Z),t,Z),s,(()=>[])),n),o),pt=(e,t,s)=>(J(ne(C,e,(()=>[])),t),s),St=(e,t,s)=>N(ee(ee(ee(u,e),t),s),(([e,t])=>[!0,e,t]),(()=>[!1,...Oe(xt(e,t,s))])),Rt=e=>N(ee(y,e),(([e,t])=>[!0,e,t]),(()=>[!1,...Oe(Ft(e))])),yt=e=>G(m)||G(we[e])?0:X(e?re(m,ae):m,((t,s)=>X(t,((t,n)=>X(t,((t,o)=>Me(we[e],[s,n,o],t))))))),It=e=>G(C)||G(Se[e])?0:X(e?re(C):C,((t,s)=>Me(Se[e],[s],t))),Tt=(e,t,s)=>{if(!G(t))return Me(e,s),1},bt=e=>{const t=G(ie[e]),s=G(ge[e])&&G(K[e])&&t&&G(q[e]),n=G(Le[e])&&G(fe[e])&&G(H[e])&&G(B[e]);if(!s||!n){const o=e?[re(r),ae(i),re(c,ae),re(u,ae)]:[r,i,c,u];if(!s){X(o[2],((t,s)=>X(t,((t,n)=>Tt(ge[e],t,[s,n])))));const s=ue();X(o[1],((n,o)=>{Tt(K[e],n,[o])&&!t&&(Me(ie[e],[o,null]),he(s,o))})),t||X(o[3],((t,n)=>{if(!$(s,n)){const s=ue();X(t,(e=>X(e,(([t,n],o)=>n!==t?he(s,o):Y(e,o))))),X(s,(t=>Me(ie[e],[n,t])))}})),Tt(q[e],o[0])}if(!n){let t;X(o[3],((s,n)=>{let o;X(s,((s,r)=>{let a;X(s,(([s,i],l)=>{i!==s&&(Me(Le[e],[n,r,l],i,s,St),t=o=a=1)})),a&&Me(fe[e],[n,r],St)})),o&&Me(H[e],[n],St)})),t&&Me(B[e],void 0,St)}}},mt=e=>{const t=G(ye[e]),s=G(Te[e])&&G(Re[e]);if(!t||!s){const n=e?[re(S),re(y)]:[S,y];if(t||Tt(ye[e],n[0]),!s){let t;X(n[1],(([s,n],o)=>{n!==s&&(Me(Te[e],[o],n,s,Rt),t=1)})),t&&Me(Re[e],void 0,Rt)}}},Ct=(e,...t)=>(Ht((()=>e(...b(t,v)))),Kt),Vt=()=>oe(Q,(e=>oe(e,oe))),Et=()=>_(Q),kt=e=>_(ee(Q,v(e))),Jt=(e,t,s,n=0,o)=>{return b(k(I((r=ee(Q,v(e)),a=(e,s)=>[z(t)?s:ee(e,v(t)),s],b([...r?.entries()??[]],(([e,t])=>a(t,e)))),(([e],[t])=>ke(e,t)*(s?-1:1))),n,z(o)?o:n+o),(([,e])=>e));var r,a},Mt=(e,t)=>_(ee(ee(Q,v(e)),v(t))),xt=(e,t,s)=>ee(ee(ee(Q,v(e)),v(t)),v(s)),At=()=>oe(j),Dt=()=>_(j),Ft=e=>ee(j,v(e)),Pt=e=>Ct((()=>(e=>qe(e,Fe,vt))(e)?Ye(e):0)),Qt=e=>Ct((()=>je(e)?nt(e):0)),jt=e=>{try{Xe(D(e))}catch{}return Kt},zt=t=>Ct((()=>{if((e=qe(t,(e=>qe(e,De))))&&(Ke(t),!G(Q))){const e=Vt();Ot(),Pt(e)}})),Nt=e=>Ct((()=>{if(t=(e=>qe(e,De))(e)){const s=At();qt(),Wt(),t=!0,Ue(e),Qt(s)}})),Ot=()=>Ct((()=>Ye({}))),Wt=()=>Ct((()=>nt({}))),Bt=()=>Ct((()=>{Ke({}),e=!1})),qt=()=>Ct((()=>{Ue({}),t=!1})),Ht=(e,t)=>{if(-1==o)return;$t();const s=e();return Gt(t),s},$t=()=>(o++,Kt),Gt=e=>(o>0&&(o--,0==o&&(s=!G(u),n=!G(y),o=1,yt(1),s&&bt(1),It(1),n&&mt(1),o=-1,e?.(oe(u,(e=>oe(e,(e=>oe(e,(e=>[...e]),(([e,t])=>e===t))),Ve)),Ve),oe(m,(e=>oe(e,oe))),oe(y,(e=>[...e]),(([e,t])=>e===t)),oe(C))&&(o=1,X(u,((e,t)=>X(e,((e,s)=>X(e,(([e],n)=>ce(Kt,t,s,n,e))))))),X(y,(([e],t)=>de(Kt,t,e))),o=-1,s=n=!1),Me(Ee[0],void 0,s,n),yt(0),s&&bt(0),It(0),n&&mt(0),Me(Ee[1],void 0,s,n),o=0,T([r,i,c,u,m,S,y,C],U))),Kt),Kt={getTables:Vt,getTableIds:Et,getTable:e=>oe(ee(Q,v(e)),oe),getRowIds:kt,getSortedRowIds:Jt,getRow:(e,t)=>oe(ee(ee(Q,v(e)),v(t))),getCellIds:Mt,getCell:xt,getValues:At,getValueIds:Dt,getValue:Ft,hasTables:()=>!G(Q),hasTable:e=>$(Q,v(e)),hasRow:(e,t)=>$(ee(Q,v(e)),v(t)),hasCell:(e,t,s)=>$(ee(ee(Q,v(e)),v(t)),v(s)),hasValues:()=>!G(j),hasValue:e=>$(j,v(e)),getTablesJson:()=>A(Q),getValuesJson:()=>A(j),getJson:()=>A([Q,j]),getTablesSchemaJson:()=>A(V),getValuesSchemaJson:()=>A(M),getSchemaJson:()=>A([V,M]),setTables:Pt,setTable:(e,t)=>Ct((e=>Fe(t,e)?Ze(e,t):0),e),setRow:(e,t,s)=>Ct(((e,t)=>Pe(e,t,s)?_e(e,at(e),t,s):0),e,t),addRow:(e,t)=>Ht((()=>{let s;return Pe(e,s,t)&&(e=v(e),_e(e,at(e),s=rt(e),t)),s})),setPartialRow:(e,t,s)=>Ct(((e,t)=>{if(Pe(e,t,s,1)){const n=at(e);Ce(s,((s,o)=>tt(e,n,t,o,s)))}}),e,t),setCell:(e,t,s,n)=>Ct(((e,t,s)=>N(Qe(e,t,s,W(n)?n(xt(e,t,s)):n),(n=>tt(e,at(e),t,s,n)))),e,t,s),setValues:Qt,setPartialValues:e=>Ct((()=>je(e,1)?Ce(e,((e,t)=>ot(t,e))):0)),setValue:(e,t)=>Ct((e=>N(ze(e,W(t)?t(Ft(e)):t),(t=>ot(e,t)))),e),setTablesJson:jt,setValuesJson:e=>{try{st(D(e))}catch{}return Kt},setJson:e=>{try{const[t,s]=D(e);Xe(t),st(s)}catch{jt(e)}return Kt},setTablesSchema:zt,setValuesSchema:Nt,setSchema:(e,t)=>Ct((()=>{zt(e),Nt(t)})),delTables:Ot,delTable:e=>Ct((e=>$(Q,e)?it(e):0),e),delRow:(e,t)=>Ct(((e,t)=>N(ee(Q,e),(s=>$(s,t)?lt(e,s,t):0))),e,t),delCell:(e,t,s,n)=>Ct(((e,t,s)=>N(ee(Q,e),(o=>N(ee(o,t),(r=>$(r,s)?ct(e,o,t,r,s,n):0))))),e,t,s),delValues:Wt,delValue:e=>Ct((e=>$(j,e)?dt(e):0),e),delTablesSchema:Bt,delValuesSchema:qt,delSchema:()=>Ct((()=>{Bt(),qt()})),transaction:Ht,startTransaction:$t,finishTransaction:Gt,forEachTable:e=>X(Q,((t,s)=>e(s,(e=>X(t,((t,s)=>e(s,(e=>te(t,e))))))))),forEachRow:(e,t)=>X(ee(Q,v(e)),((e,s)=>t(s,(t=>te(e,t))))),forEachCell:(e,t,s)=>te(ee(ee(Q,v(e)),v(t)),s),forEachValue:e=>te(j,e),addSortedRowIdsListener:(e,t,s,n,o,r,a)=>{let i=Jt(e,t,s,n,o);return Je((()=>{const a=Jt(e,t,s,n,o);R(a,i)||(i=a,r(Kt,e,t,s,n,o,i))}),ie[a?1:0],[e,t],[Et])},addWillFinishTransactionListener:e=>Je(e,Ee[0]),addDidFinishTransactionListener:e=>Je(e,Ee[1]),callListener:e=>(Ae(e),Kt),delListener:e=>(xe(e),Kt),getListenerStats:()=>({}),createStore:$e};return Ce({Tables:[0,B],TableIds:[0,q],[f]:[1,H,[Et]],[g]:[1,K,[Et]],Row:[2,fe,[Et,kt]],[L]:[2,ge,[Et,kt]],[w]:[3,Le,[Et,kt,Mt],e=>Oe(xt(...e))],InvalidCell:[3,we],Values:[0,Re],ValueIds:[0,ye],Value:[1,Te,[Dt],e=>Oe(Ft(e[0]))],InvalidValue:[1,Se]},(([e,t,s,n],o)=>{Kt[h+o+d]=(...o)=>Je(o[e],t[o[e+1]?1:0],e>0?k(o,0,e):void 0,s,n)})),Ie(Kt)};e.createCheckpoints=Ee,e.createCustomPersister=De,e.createFilePersister=(e,s)=>{let n;return De(e,(async()=>{try{return await t.promises.readFile(s,c)}catch{}}),(async e=>{try{await t.promises.writeFile(s,e,c)}catch{}}),(e=>{n=t.watch(s,e)}),(()=>{n?.close(),n=void 0}))},e.createIndexes=Je,e.createLocalPersister=(e,t)=>Qe(e,t,localStorage),e.createMetrics=Ae,e.createQueries=ze,e.createRelationships=Ne,e.createRemotePersister=(e,t,s,n)=>{let o,r;return De(e,(async()=>{const e=await fetch(t);return r=je(e),e.text()}),(async e=>await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:e})),(e=>{o=setInterval((async()=>{const s=await fetch(t,{method:"HEAD"}),n=je(s);z(r)||z(n)||n==r||(r=n,e())}),1e3*n)}),(()=>{N(o,clearInterval),o=void 0}))},e.createSessionPersister=(e,t)=>Qe(e,t,sessionStorage),e.createStore=$e,e.defaultSorter=ke},"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("fs")):"function"==typeof define&&define.amd?define(["exports","fs"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBase={},e.fs);
