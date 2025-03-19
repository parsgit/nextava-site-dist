import{r as S,c as o,a as e,t as a,u as i,G as c,b as j,A as z,F as C,d as F,P,e as D,o as l}from"./index-BjwwnkM8.js";const E={class:"bg-gray-900 text-white min-h-screen"},G={class:"bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center"},I={class:"text-2xl font-bold text-white"},$={class:"text-center py-20 bg-gradient-to-b from-gray-800 to-gray-900"},O=["src"],U={class:"text-5xl font-extrabold mt-12"},q=["innerHTML"],J={class:"flex gap-8 justify-center mt-12"},K=["href"],Q=["href"],R={id:"services",class:"py-16 px-6"},W={class:"grid md:grid-cols-3 gap-8 mt-8"},X={dir:"auto",class:"p-6 bg-gray-800 shadow-lg rounded-xl"},Y={class:"text-xl font-semibold text-blue-400"},Z={key:0,class:"mt-2 text-gray-300"},ee={id:"projects",class:"py-16 bg-gray-800 px-6"},te=["innerHTML"],se={id:"about",class:"py-16 px-6"},ae={class:"mt-4 text-center text-gray-400 max-w-3xl mx-auto",dir:"auto"},oe={class:"mt-4 text-center text-gray-400 max-w-3xl mx-auto"},re={__name:"HomeView",setup(le){const u=S({}),t=S({});return(()=>{P("api/page-config/index").then(n=>{var s;console.log(n),n.ok&&(u.value=n.config,t.value=D(u.value),document.getElementById("_title").innerHTML=(s=t==null?void 0:t.value)==null?void 0:s._title.value)})})(),(n,s)=>{var d,x,_,v,g,m,h,p,f,b,y,w,k,A,B,T,H,M,V,L;return l(),o("div",E,[e("header",G,[e("h1",I,a(i(c)(t.value,"SiteName")),1)]),e("section",$,[e("div",null,[(x=(d=t.value)==null?void 0:d.main_icon)!=null&&x.value?(l(),o("img",{key:0,class:"mx-auto w-32",src:i(z).server+((v=(_=t.value)==null?void 0:_.main_icon)==null?void 0:v.value),alt:""},null,8,O)):j("",!0)]),e("h2",U,a(i(c)(t.value,"SiteTitle")),1),e("p",{class:"mt-4 text-lg text-gray-400",innerHTML:i(c)(t.value,"SiteHeaderText")},null,8,q),e("div",J,[e("a",{href:(m=(g=t.value)==null?void 0:g.DownloadFromMyket)==null?void 0:m.value,target:"_blank",class:"btn btn-info"},a((p=(h=t.value)==null?void 0:h.ButtonMyket)==null?void 0:p.value),9,K),e("a",{href:(b=(f=t.value)==null?void 0:f.DownloadFromBazzar)==null?void 0:b.value,target:"_blank",class:"btn btn-primary"},a((w=(y=t.value)==null?void 0:y.ButtonBazzar)==null?void 0:w.value),9,Q)])]),e("section",R,[s[0]||(s[0]=e("h2",{class:"text-3xl font-bold text-center"},"قابلیت‌ها",-1)),e("div",W,[(l(!0),o(C,null,F((A=(k=t.value)==null?void 0:k.Services)==null?void 0:A.options,r=>{var N;return l(),o("div",X,[e("h3",Y,a(r.value),1),(N=t.value[`service_${r.name}_description`])!=null&&N.value?(l(),o("p",Z,a(t.value[`service_${r.name}_description`].value),1)):j("",!0)])}),256))])]),e("section",ee,[s[1]||(s[1]=e("h2",{class:"text-2xl font-bold text-center font-semibold text-blue-400"},"درباره نکست آوا",-1)),e("div",{dir:"rtl",class:"mt-8 text-center",innerHTML:(T=(B=t.value)==null?void 0:B.AboutNextAVA)==null?void 0:T.html},null,8,te)]),e("section",se,[s[2]||(s[2]=e("h2",{class:"text-3xl font-bold text-center"},"تماس با ما",-1)),e("p",ae,a((M=(H=t.value)==null?void 0:H.ContactUsText)==null?void 0:M.value),1),e("p",oe,[e("a",null,a((L=(V=t.value)==null?void 0:V.Email)==null?void 0:L.value),1)])]),s[3]||(s[3]=e("footer",{class:"py-6 bg-gray-800 text-center text-gray-400"},[e("p",null,"© 2025 NextAVA. All rights reserved.")],-1))])}}};export{re as default};
