import{u as y}from"./vue-kakuyaku.BuVa5Y5r.js";import b from"./CompatibilityMatrixTableIcon.aZWFGqly.js";import{d as k,k as x,o as t,c as e,m as i,F as d,G as u,t as p,J as v,p as m,e as C,q as I,s as S,_ as T}from"./framework.p90Iz9wz.js";import"./IconCheck.DGdobGcP.js";const M=l=>(I("data-v-ba4f590a"),l=l(),S(),l),g={key:0},j=["title"],B={key:1,class:"border rounded p-2 my-4"},F={key:0,class:"flex space-x-2 items-center"},L=M(()=>i("span",null,"Loading data...",-1)),N=[L],V={key:1},w=k({__name:"CompatibilityMatrixTable",setup(l){const h="https://docs-compat.iroha2.tachi.soramitsu.co.jp/compat-matrix",o=y(()=>fetch(h,{}).then(r=>r.json()),{immediate:!0}),c=x(()=>{if(!o.state.fulfilled)return null;const r=o.state.fulfilled.value,_=["Story",...r.included_sdks.map(a=>a.name)],s=r.stories.map(a=>({story:a.name,results:a.results.map(n=>n.status)}));return{headers:_,rows:s}});return(r,_)=>c.value?(t(),e("table",g,[i("thead",null,[(t(!0),e(d,null,u(c.value.headers,s=>(t(),e("th",{key:s},p(s),1))),128))]),i("tbody",null,[(t(!0),e(d,null,u(c.value.rows,(s,a)=>(t(),e("tr",{key:a},[i("td",null,p(s.story),1),(t(!0),e(d,null,u(s.results,(n,f)=>(t(),e("td",{key:f,class:"status-cell",title:`Status: ${n}`},[v(b,{status:n},null,8,["status"])],8,j))),128))]))),128))])])):(t(),e("div",B,[m(o).state.pending?(t(),e("div",F,N)):m(o).state.rejected?(t(),e("div",V," Failed to load compatibility matrix data: "+p(m(o).state.rejected.reason),1)):C("",!0)]))}}),E=T(w,[["__scopeId","data-v-ba4f590a"]]);export{E as default};
