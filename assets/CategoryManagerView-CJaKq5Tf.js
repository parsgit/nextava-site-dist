import{_}from"./MyInput-DO0z0sBI.js";import{h as d,r as f,p as w,C as x,c as a,a as l,F as V,b as B,f as g,P as y,D as N,o as i,t as v}from"./index-B4jKedep.js";import{_ as D}from"./List-CU8GkRgp.js";const $={class:"mt-12 bg-base-200 rounded-xl shadow p-4"},E={class:"breadcrumbs text-sm p-4"},M=["onClick"],O={key:1},P={class:"bg-base-200 mt-4 p-4 rounded-b-xl w-full"},S={class:"mt-2 flex flex-wrap items-end gap-4"},U={__name:"CategoryManagerView",setup(T){const c={id:0,title:"",type:"",link:""};d({...c});const n=d({...c});d([]);const r=f("0"),u=d([]),p=f([]),b=()=>{n.parent=r.value,y("category/save",{category:n}).then(e=>{e.ok&&(N("Success","success"),Object.assign(n,c),o())})},k=e=>{y("category/remove",{id:e.id}).then(t=>{o()})},C=(e,t)=>{t.id=="edit"?Object.assign(n,e):t.id=="open"&&(console.log(e),m(e))},o=()=>{y("category/list-by-parent",{parent:r.value}).then(e=>{e.ok&&(u.splice(0),e.list.forEach(t=>u.push(t)),p.value=e.tree)})},m=(e,t)=>{console.log(e),r.value=e.id,o()};return w(()=>{o()}),x(r,e=>{o()}),(e,t)=>(i(),a("div",null,[l("div",$,[l("div",null,[l("div",E,[l("ul",null,[l("li",null,[l("a",{onClick:t[0]||(t[0]=s=>m({id:0}))},"Main")]),(i(!0),a(V,null,B(p.value,(s,h)=>(i(),a("li",{key:s.id},[h+1<p.value.length?(i(),a("a",{key:0,onClick:j=>m(s)},v(s.title),9,M)):(i(),a("span",O,v(s.title),1))]))),128))])])]),l("div",null,[g(D,{class:"mt-4",list:u,fields:["title","link","type"],btns:[{title:"Open",id:"open",class:"btn-info"},{title:"Edit",id:"edit"},{title:"Delete",id:"delete",class:"btn-error"}],"delete-action":!0,onDelete:k,onBtnAction:C},null,8,["list"])]),l("div",P,[t[3]||(t[3]=l("h3",{class:"font-bold text-xl"},"Create New Category",-1)),l("div",S,[g(_,{modelValue:n.title,"onUpdate:modelValue":t[1]||(t[1]=s=>n.title=s),title:"Title"},null,8,["modelValue"]),g(_,{modelValue:n.link,"onUpdate:modelValue":t[2]||(t[2]=s=>n.link=s),title:"Link"},null,8,["modelValue"]),l("button",{onClick:b,class:"btn btn-primary"},"Save")])])])]))}};export{U as default};
