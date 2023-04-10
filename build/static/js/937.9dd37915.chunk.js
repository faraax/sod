(self.webpackChunksod=self.webpackChunksod||[]).push([[937],{7430:function(e){e.exports={firstBox:{title:"Key Partnerships",questions:["Who are your suppliers, partners, strategic alliances?\n","What are your and their motivations for the partnership?\n","What resources do you receive from suppliers?\n"]},secondBox:{title:"Key Activities",questions:["What activities do you perform to build your product?\n","What every-day activities do you do to solve problems?\n"]},thirdBox:{title:"Value Propositions",questions:["What value are you bringing to your customers?\n","What's unique about your product?\n","What are the defferent values you bring to different customers?\n"]},forthBox:{title:"Customer Relationships",questions:["To what extent do you deliver customer care (personal assistance or self-services)?\n","What channels for customer communication do you have?\n"]},fifthBox:{title:"Customer Segments",questions:["Who is your customer?","What are their problems?\n","What's their age, location, job?\n","What competitor product are they using?\n"]},sixthBox:{title:"Key Resources",questions:["What physical, human, and financial resources does your business need?\n","What assets do you need to produce and deliver your product?\n","What resources to perform key activities and use channels?\n"]},seventhBox:{title:"Channels",questions:["How do you let your future customers know about your product?\n","How do you make your product reach your customers?\n","Which supply channels are you using?\n","What comminication channels are you using?\n"]},eightBox:{title:"Cost Structure",questions:["What costs you have to cover to create and deliver your product?\n","How much of your cost structure is allocated for development, marketing, and the stuff?\n"]},ninthBox:{title:"Revenue Streams",questions:["How is your business monetized?","What revenue models are you using?\n","What is the pricing strategy?\n","What payment channels are you using?\n"]}}},7617:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var o=r(4165),n=r(5861),s=r(9439),a=r(1243),l=r(7430),i=r.n(l),c=r(7692),d=r(2791),u=r(2398),x=r(4942),m=r(1413),f=r(3433),h=r(9126),g=r(7762),p=r(184),b={KeyPartnerships:728,KeyActivities:364,ValuePropositions:728,CustomerRelationships:364,CustomerSegments:728,Channels:364,KeyResources:364,RevenueStreams:420,CostStructure:420,BrainstormingNotes:728};function y(e){var t=e.setInpActive,r=e.objName,o=(0,d.useRef)(null),n=(0,d.useState)(""),a=(0,s.Z)(n,2),l=a[0],i=a[1],h=(0,u.j)(),y=h.dispatch,v=h.form;(0,d.useEffect)((function(){var e=function(e){13===e.keyCode&&(""===l?t(!1):v[r].list.length+[l].length<=b[r]/28?(y({type:"UPDATEFORM",payload:(0,m.Z)((0,m.Z)({},v),{},(0,x.Z)({},r,{list:[].concat((0,f.Z)(v[r].list),[l])}))}),t(!1)):(console.log("Inp => Limitation exceeded!"),t(!1)))};document.addEventListener("keydown",e);var n=function(e){27===e.keyCode&&t(!1)};function s(e){o.current&&!o.current.contains(e.target)&&(""===l?t(!1):v[r].list.length+[l].length<=b[r]/28?(y({type:"UPDATEFORM",payload:(0,m.Z)((0,m.Z)({},v),{},(0,x.Z)({},r,{list:[].concat((0,f.Z)(v[r].list),[l])}))}),t(!1)):(console.log("Inp => Limitation exceeded!"),t(!1)))}return document.addEventListener("keydown",n),document.addEventListener("mousedown",s),function(){document.removeEventListener("keydown",n),document.removeEventListener("keydown",e),document.removeEventListener("mousedown",s)}}),[t,o,l,y,r,v]);var j=function(e){document.execCommand(e,!1,null)};return(0,p.jsxs)("div",{ref:o,children:[(0,p.jsx)("div",{className:"flex",children:(0,p.jsx)("div",{role:"textbox",title:"Type a message","data-placeholder":"Click here and type ...",contentEditable:!0,onClick:function(){return t(!0)},onInput:function(e){var t,r=["i","b","a"],o=(new DOMParser).parseFromString(e.target.innerHTML,"text/html"),n="",s=(0,g.Z)(o.body.childNodes);try{for(s.s();!(t=s.n()).done;){var a=t.value;if(a.nodeType===Node.TEXT_NODE)n+=a.textContent;else if(r.includes(a.tagName.toLowerCase())){var l=Array.from(a.attributes).map((function(e){return"".concat(e.name,'="').concat(e.value,'"')})).join(" ");n+="<".concat(a.tagName.toLowerCase()," ").concat(l,">").concat(a.textContent,"</").concat(a.tagName.toLowerCase(),">")}}}catch(c){s.e(c)}finally{s.f()}if(e.target.innerHTML.startsWith("&nbsp;"))i("");else{n=n.replace(new RegExp("(.{".concat(28,"})"),"g"),"$1\n"),i(n)}},onPaste:function(e){e.preventDefault();var t=e.clipboardData.getData("text/plain");document.execCommand("insertHTML",!1,t)},className:"input_text_editor px-5 py-1 focus:border-none bg-gray-50 break-all w-full active:border-none outline-none"})}),(0,p.jsxs)("div",{className:"flex justify-center items-center border border-gray-500 rounded-md max-w-[150px] m-2 bg-white",children:[(0,p.jsx)("button",{onClick:function(){return j("bold")},className:"flex justify-center items-center font-bold hover:bg-gray-200 text-xl h-10 w-10 rounded-md",children:"B"}),(0,p.jsx)("button",{onClick:function(){return j("italic")},className:"flex justify-center items-center font-bold hover:bg-gray-200 text-xl h-10 w-10 rounded-md",children:"i"}),(0,p.jsx)("button",{onClick:function(){return function(e){var t=prompt("Inset Link");document.execCommand(e,!1,t)}("createLink")},className:"flex justify-center items-center font-bold hover:bg-gray-200 text-xl h-10 w-10 rounded-md",children:(0,p.jsx)(c.Wlb,{})}),(0,p.jsx)("button",{onClick:function(){return e="unlink",void document.execCommand(e,!1,"");var e},className:"flex justify-center items-center font-bold hover:bg-gray-200 text-xl h-10 w-10 rounded-md",children:(0,p.jsx)(c.nL$,{})})]})]})}var v=r(1213),j=r(7425);function w(e){var t=e.handleEdit,r=e.index,o=e.setNewInpValue,n=e.valueToEdit,a=(e.objName,(0,d.useRef)(null)),l=(0,d.useState)(""),i=(0,s.Z)(l,2),u=i[0],x=i[1];(0,d.useEffect)((function(){var e=function(e){13===e.keyCode&&(""===u?(t(r,n),o(!1)):(t(r,u),o(!1)))};window.addEventListener("keydown",e);var s=function(e){27===e.keyCode&&o(!1)};function l(e){a.current&&!a.current.contains(e.target)&&(""===u?(t(r,n),o(!1)):(t(r,u),o(!1)))}return window.addEventListener("keydown",s),document.addEventListener("mousedown",l),function(){window.removeEventListener("keydown",s),window.removeEventListener("keydown",e),document.removeEventListener("mousedown",l)}}),[a,u,t,r,o,n]);var m=function(e){document.execCommand(e,!1,null)};return(0,p.jsxs)("div",{ref:a,children:[(0,p.jsx)("div",{className:"flex",children:(0,p.jsx)("div",{role:"textbox",title:"Type a message","data-placeholder":"Type here...",contentEditable:!0,onInput:function(e){var t,r=["i","b","a"],o=(new DOMParser).parseFromString(e.target.innerHTML,"text/html"),n="",s=(0,g.Z)(o.body.childNodes);try{for(s.s();!(t=s.n()).done;){var a=t.value;if(a.nodeType===Node.TEXT_NODE)n+=a.textContent;else if(r.includes(a.tagName.toLowerCase())){var l=Array.from(a.attributes).map((function(e){return"".concat(e.name,'="').concat(e.value,'"')})).join(" ");n+="<".concat(a.tagName.toLowerCase()," ").concat(l,">").concat(a.textContent,"</").concat(a.tagName.toLowerCase(),">")}}}catch(i){s.e(i)}finally{s.f()}e.target.innerHTML.startsWith("&nbsp;")?x(""):x(n)},onPaste:function(e){e.preventDefault();var t=e.clipboardData.getData("text/plain");document.execCommand("insertHTML",!1,t)},className:"input_text_editor px-5 py-1 focus:border-none bg-gray-100 break-all w-full active:border-none outline-none",dangerouslySetInnerHTML:{__html:n}})}),(0,p.jsxs)("div",{className:"flex justify-center items-center border border-gray-500 rounded-md max-w-[150px] m-2 bg-white",children:[(0,p.jsx)("button",{onClick:function(){return m("bold")},className:"flex justify-center items-center font-bold hover:bg-gray-200 text-xl h-10 w-10 rounded-md",children:"B"}),(0,p.jsx)("button",{onClick:function(){return m("italic")},className:"flex justify-center items-center font-bold hover:bg-gray-200 text-xl h-10 w-10 rounded-md",children:"i"}),(0,p.jsx)("button",{onClick:function(){return function(e){var t=prompt("Inset Link");document.execCommand(e,!1,t)}("createLink")},className:"flex justify-center items-center font-bold hover:bg-gray-200 text-xl h-10 w-10 rounded-md",children:(0,p.jsx)(c.Wlb,{})}),(0,p.jsx)("button",{onClick:function(){return e="unlink",void document.execCommand(e,!1,"");var e},className:"flex justify-center items-center font-bold hover:bg-gray-200 text-xl h-10 w-10 rounded-md",children:(0,p.jsx)(c.nL$,{})})]})]})}function C(e){var t=e.value,r=e.handleEdit,o=e.index,n=e.objName,a=(0,d.useState)(!1),l=(0,s.Z)(a,2),i=l[0],c=l[1],f=(0,d.useState)(!1),h=(0,s.Z)(f,2),g=h[0],b=h[1],y=(0,u.j)(),C=y.dispatch,R=y.form;return(0,p.jsxs)("div",{onDoubleClick:function(){return c(!0)},children:[i&&(0,p.jsx)(w,{handleEdit:r,index:o,setNewInpValue:c,valueToEdit:t,objName:n}),!i&&(0,p.jsxs)("div",{className:"flex items-center gap-3 justify-center px-2 cursor-pointer hover:bg-white",children:[(0,p.jsxs)("div",{className:"hover:bg-slate-200 text-lg group relative",onClick:function(){return b(!g)},children:[(0,p.jsx)(v.GZz,{}),g&&(0,p.jsx)("div",{className:"absolute bg-white p-2 border shadow-2xl z-10 border-gray-300",children:(0,p.jsxs)("ul",{children:[(0,p.jsxs)("li",{onClick:function(){return c(!0)},className:"flex items-center gap-3 hover:bg-gray-200 hover:text-primary p-1 w-28 text-sm",children:[(0,p.jsx)(j.v0Y,{}),"Edit"]}),(0,p.jsxs)("li",{onClick:function(){return function(e){var t=R[n].list.filter((function(t){return t!==e}));C({type:"UPDATEFORM",payload:(0,m.Z)((0,m.Z)({},R),{},(0,x.Z)({},n,{list:t}))})}(t)},className:"flex items-center gap-3 hover:bg-gray-200 hover:text-primary p-1 w-28 text-sm",children:[(0,p.jsx)(j.qy0,{}),"Delete"]})]})})]}),(0,p.jsx)("div",{className:"w-full break-all text-area",dangerouslySetInnerHTML:{__html:t}})]})]})}var R={KeyPartnerships:728,KeyActivities:364,ValuePropositions:728,CustomerRelationships:364,CustomerSegments:728,Channels:364,KeyResources:364,RevenueStreams:420,CostStructure:420,BrainstormingNotes:728};function N(e){var t,r=e.list,o=e.title,n=e.objName,a=(0,d.useState)(!1),l=(0,s.Z)(a,2),i=l[0],c=l[1],g=(0,u.j)(),b=g.dispatch,v=g.form,j=(0,d.useRef)(null),w=(0,d.useRef)(null),N=function(){var e=(0,f.Z)(v[n].list),t=e.splice(j.current,1)[0];e.splice(w.current,0,t),j.current=null,w.current=null,b({type:"UPDATEFORM",payload:(0,m.Z)((0,m.Z)({},v),{},(0,x.Z)({},n,{list:e}))})},k=function(e,t){var r=(0,f.Z)(v[n].list);r[e]=t,b({type:"UPDATEFORM",payload:(0,m.Z)((0,m.Z)({},v),{},(0,x.Z)({},n,{list:r}))})};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"flex flex-col",children:[(0,p.jsxs)("div",{className:"flex items-center px-3 py-3",children:[(0,p.jsx)("h2",{className:"text-lg font-medium",children:o}),0===v[n].list.length&&(0,p.jsx)(p.Fragment,{children:!i&&(0,p.jsx)("button",{onClick:function(){return c(!0)},className:"py-3 text-primary font-semibold flex items-center text-lg hover:text-opacity-60 cursor-pointer ml-auto",children:(0,p.jsxs)("h3",{className:"flex items-center gap-1 justify-center",children:[(0,p.jsx)("span",{children:"+"}),"Add"]})})}),v[n].list.length>0||i?(0,p.jsx)("div",{title:r,className:"bg-secondary h-7 w-7 rounded-full text-lg cursor-pointer ml-auto flex justify-center items-center text-white",children:(0,p.jsx)(h.fB8,{className:"text-lg"})}):null]}),(0,p.jsx)("div",{className:"px-4",children:(""!==v[n].list||null!==v[n].list)&&(null===(t=v[n].list)||void 0===t?void 0:t.map((function(e,t){return e=e.replace(/\n/g,""),(0,p.jsx)("div",{draggable:!0,onDragStart:function(e){return j.current=t},onDragEnter:function(e){return w.current=t},onDragEnd:N,onDragOver:function(e){return e.preventDefault()},children:(0,p.jsx)(C,{value:e,handleEdit:k,index:t,objName:n})},t)})))}),(0,p.jsx)("div",{children:!i&&(0===v[n].list.length?(0,p.jsx)("p",{className:"px-4 text-base text-secondary",children:null===r||void 0===r?void 0:r.map((function(e,t){return(0,p.jsxs)(d.Fragment,{children:[e,(0,p.jsx)("br",{})]},t)}))}):(0,p.jsx)("div",{onClick:function(){return c(!0)},className:"".concat(100===function(e){var t=R[e]/28;return Math.floor(v[e].list.length/t*100)}(n)?"hidden":"block"," px-5 py-3 text-primary font-semibold flex items-center text-lg hover:text-opacity-60 cursor-pointer"),children:(0,p.jsxs)("h3",{children:[(0,p.jsx)("span",{children:"+"}),"Add More"]})}))})]}),i&&(0,p.jsx)(y,{setInpActive:c,objName:n})]})}function k(e){var t,r=e.objName,o=(0,d.useState)(!1),n=(0,s.Z)(o,2),a=n[0],l=n[1],i=(0,u.j)(),c=i.dispatch,h=i.form,g=(0,d.useRef)(null),b=(0,d.useRef)(null),v=function(){var e=(0,f.Z)(h[r].list),t=e.splice(g.current,1)[0];e.splice(b.current,0,t),g.current=null,b.current=null,c({type:"UPDATEFORM",payload:(0,m.Z)((0,m.Z)({},h),{},(0,x.Z)({},r,{list:e}))})},j=function(e,t){var o=(0,f.Z)(h[r].list);o[e]=t,c({type:"UPDATEFORM",payload:(0,m.Z)((0,m.Z)({},h),{},(0,x.Z)({},r,{list:o}))})};return(0,p.jsx)("div",{className:"border-2 border-gray-300 min-h-52 p-5",children:(0,p.jsxs)("div",{className:"hover:text-opacity-60",children:[0===h[r].list.length&&!a&&(0,p.jsxs)("h1",{className:"text-2xl text-primary font-medium cursor-pointer",onClick:function(){return l(!a)},children:[(0,p.jsx)("span",{children:"+"}),"Add Business Notes Here"]}),(""!==h[r].list||null!==h[r].list)&&(null===(t=h[r].list)||void 0===t?void 0:t.map((function(e,t){return(0,p.jsx)("div",{draggable:!0,onDragStart:function(e){return g.current=t},onDragEnter:function(e){return b.current=t},onDragEnd:v,onDragOver:function(e){return e.preventDefault()},children:(0,p.jsx)(C,{value:e,handleEdit:j,index:t,objName:r})},t)}))),!a&&(0===h[r].list.length?null:(0,p.jsx)("div",{onClick:function(){return l(!0)},className:"px-5 py-3 text-primary font-semibold flex items-center text-lg hover:text-opacity-60 cursor-pointer",children:(0,p.jsxs)("h3",{children:[(0,p.jsx)("span",{children:"+"}),"Add More"]})})),a&&(0,p.jsx)(y,{setInpActive:l,objName:r})]})})}var Z=r(4225),B=r.p+"static/media/Roboto-Regular.fc2b5060f7accec5cf74.ttf",S=r.p+"static/media/Roboto-Bold.f80816a5455d171f948d.ttf",E=r.p+"static/media/Roboto-Italic.87f3afe16a8c3c370634.ttf",T=r.p+"static/media/Roboto-BoldItalic.87d61cea6fe1d235d4a8.ttf";Z.Zx.register({family:"Roboto",format:"truetype",fonts:[{src:S},{src:E},{src:T}]});var D=Z.mM.create({page:{backgroundColor:"#fff"},invoiceDateContainer:{flexDirection:"row",justifyContent:"space-between",margin:20},label:{fontSize:48},tableContainer:{flexDirection:"row",flexWrap:"wrap",marginLeft:30,marginBottom:20,borderWidth:1,borderColor:"#333",width:1150},firstRow:{borderWidth:1,borderColor:"#333",width:230,height:500,borderLeft:"none",borderTop:"none"},firstRowInner:{flexDirection:"row",flexWrap:"wrap",borderWidth:1,borderColor:"#333",width:230,height:250,borderLeft:"none",borderTop:"none",borderRight:"none"},firstRowLastCol:{flexDirection:"column",flexWrap:"wrap",borderWidth:1,borderColor:"#333",width:228,borderLeft:"none",borderTop:"none",borderRight:"none"},secRow:{flexDirection:"column",flexWrap:"wrap",borderWidth:1,borderColor:"#333",width:574,height:200,borderLeft:"none",borderTop:"none",borderBottom:"none"},borderRightNone:{border:"none"},title:{fontSize:16,marginHorizontal:5,marginVertical:3,fontFamily:"Roboto",fontWeight:"normal"},container:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",height:"80px"},name:{marginRight:20,marginTop:20},date:{marginRight:20}});function A(e){var t=e.form,r=e.canvas_name,o=(new Date).toLocaleDateString(),n=function(e){for(var t={bold:"",italic:"",link:"",src:null,text:""},r=(new DOMParser).parseFromString(e,"text/html"),o=r.getElementsByTagName("b"),n=r.getElementsByTagName("i"),s=r.getElementsByTagName("a"),a=0;a<s.length;a++){var l=s[a];t.link=!0,t.src=l.getAttribute("href"),t.text=l.innerText.replace("\n","")}for(var i=0;i<o.length;i++){var c=o[i];t.bold=!0,t.text=c.textContent.replace("\n","")}for(var d=0;d<n.length;d++){var u=n[d];t.italic=!0,t.text=u.textContent.replace("\n","")}return o.length<1&&n.length<1&&s.length<1&&(t.text+=e),t},s=Array(t).map((function(e,t){return(0,p.jsxs)(Z.G7,{style:D.tableContainer,children:[(0,p.jsxs)(Z.G7,{style:D.firstRow,children:[(0,p.jsx)(Z.xv,{style:D.title,children:"Key Partnerships"}),e.KeyPartnerships.list.map((function(e,t){var r=n(e);Z.Zx.register({family:"Roboto-Regular",format:"truetype",src:B}),Z.Zx.register({family:"Roboto-Bold",format:"truetype",src:S}),Z.Zx.register({family:"Roboto-Italic",format:"truetype",src:E}),Z.Zx.register({family:"Roboto-Bold-Italic",format:"truetype",src:T});var o=Z.mM.create({list:{flexDirection:"row",fontSize:12,marginHorizontal:10,width:230,fontFamily:r.bold?"Roboto-Bold":r.italic?"Roboto-Italic":"Roboto-Regular"}});return r.link?(0,p.jsx)(Z.rU,{src:r.src,style:o.list,children:r.text},t):(0,p.jsx)(Z.xv,{style:o.list,children:r.text},t)}))]}),(0,p.jsxs)(Z.G7,{style:D.firstRow,children:[(0,p.jsxs)(Z.G7,{style:D.firstRowInner,children:[(0,p.jsx)(Z.xv,{style:D.title,children:"Key Activities"}),e.KeyActivities.list.map((function(e,t){var r=n(e);Z.Zx.register({family:"Roboto-Regular",format:"truetype",src:B}),Z.Zx.register({family:"Roboto-Bold",format:"truetype",src:S}),Z.Zx.register({family:"Roboto-Italic",format:"truetype",src:E}),Z.Zx.register({family:"Roboto-Bold-Italic",format:"truetype",src:T});var o=Z.mM.create({list:{fontSize:12,marginHorizontal:10,width:230,fontFamily:r.bold?"Roboto-Bold":r.italic?"Roboto-Italic":"Roboto-Regular"}});return r.link?(0,p.jsx)(Z.rU,{src:r.src,style:o.list,children:r.text},t):(0,p.jsx)(Z.xv,{style:o.list,children:r.text},t)}))]}),(0,p.jsxs)(Z.G7,{style:D.firstRowInner,children:[(0,p.jsx)(Z.xv,{style:D.title,children:"Key Resources"}),e.KeyResources.list.map((function(e,t){var r=n(e);Z.Zx.register({family:"Roboto-Regular",format:"truetype",src:B}),Z.Zx.register({family:"Roboto-Bold",format:"truetype",src:S}),Z.Zx.register({family:"Roboto-Italic",format:"truetype",src:E}),Z.Zx.register({family:"Roboto-Bold-Italic",format:"truetype",src:T});var o=Z.mM.create({list:{fontSize:12,marginHorizontal:10,width:230,fontFamily:r.bold?"Roboto-Bold":r.italic?"Roboto-Italic":"Roboto-Regular"}});return r.link?(0,p.jsx)(Z.rU,{src:r.src,style:o.list,children:r.text},t):(0,p.jsx)(Z.xv,{style:o.list,children:r.text},t)}))]})]}),(0,p.jsxs)(Z.G7,{style:D.firstRow,children:[(0,p.jsx)(Z.xv,{style:D.title,children:" Value Propositions"}),e.ValuePropositions.list.map((function(e,t){var r=n(e);Z.Zx.register({family:"Roboto-Regular",format:"truetype",src:B}),Z.Zx.register({family:"Roboto-Bold",format:"truetype",src:S}),Z.Zx.register({family:"Roboto-Italic",format:"truetype",src:E}),Z.Zx.register({family:"Roboto-Bold-Italic",format:"truetype",src:T});var o=Z.mM.create({list:{fontSize:12,marginHorizontal:10,width:230,fontFamily:r.bold?"Roboto-Bold":r.italic?"Roboto-Italic":"Roboto-Regular"}});return r.link?(0,p.jsx)(Z.rU,{src:r.src,style:o.list,children:r.text},t):(0,p.jsx)(Z.xv,{style:o.list,children:r.text},t)}))]}),(0,p.jsxs)(Z.G7,{style:D.firstRow,children:[(0,p.jsxs)(Z.G7,{style:D.firstRowInner,children:[(0,p.jsx)(Z.xv,{style:D.title,children:" Customer Relationships"}),e.CustomerRelationships.list.map((function(e,t){var r=n(e);Z.Zx.register({family:"Roboto-Regular",format:"truetype",src:B}),Z.Zx.register({family:"Roboto-Bold",format:"truetype",src:S}),Z.Zx.register({family:"Roboto-Italic",format:"truetype",src:E}),Z.Zx.register({family:"Roboto-Bold-Italic",format:"truetype",src:T});var o=Z.mM.create({list:{fontSize:12,marginHorizontal:10,width:230,fontFamily:r.bold?"Roboto-Bold":r.italic?"Roboto-Italic":"Roboto-Regular"}});return r.link?(0,p.jsx)(Z.rU,{src:r.src,style:o.list,children:r.text},t):(0,p.jsx)(Z.xv,{style:o.list,children:r.text},t)}))]}),(0,p.jsxs)(Z.G7,{style:D.firstRowInner,children:[(0,p.jsx)(Z.xv,{style:D.title,children:" Channels"}),e.Channels.list.map((function(e,t){var r=n(e);Z.Zx.register({family:"Roboto-Regular",format:"truetype",src:B}),Z.Zx.register({family:"Roboto-Bold",format:"truetype",src:S}),Z.Zx.register({family:"Roboto-Italic",format:"truetype",src:E}),Z.Zx.register({family:"Roboto-Bold-Italic",format:"truetype",src:T});var o=Z.mM.create({list:{fontSize:12,marginHorizontal:10,width:230,fontFamily:r.bold?"Roboto-Bold":r.italic?"Roboto-Italic":"Roboto-Regular"}});return r.link?(0,p.jsx)(Z.rU,{src:r.src,style:o.list,children:r.text},t):(0,p.jsx)(Z.xv,{style:o.list,children:r.text},t)}))]})]}),(0,p.jsxs)(Z.G7,{style:D.firstRowLastCol,children:[(0,p.jsx)(Z.xv,{style:D.title,children:"Customer Segments"}),e.CustomerSegments.list.map((function(e,t){var r=n(e);Z.Zx.register({family:"Roboto-Regular",format:"truetype",src:B}),Z.Zx.register({family:"Roboto-Bold",format:"truetype",src:S}),Z.Zx.register({family:"Roboto-Italic",format:"truetype",src:E}),Z.Zx.register({family:"Roboto-Bold-Italic",format:"truetype",src:T});var o=Z.mM.create({list:{fontSize:12,marginHorizontal:10,width:230,fontFamily:r.bold?"Roboto-Bold":r.italic?"Roboto-Italic":"Roboto-Regular"}});return r.link?(0,p.jsx)(Z.rU,{src:r.src,style:o.list,children:r.text},t):(0,p.jsx)(Z.xv,{style:o.list,children:r.text},t)}))]}),(0,p.jsxs)(Z.G7,{style:D.secRow,children:[(0,p.jsx)(Z.xv,{style:D.title,children:"Cost Structure"}),e.CostStructure.list.map((function(e,t){var r=n(e);Z.Zx.register({family:"Roboto-Regular",format:"truetype",src:B}),Z.Zx.register({family:"Roboto-Bold",format:"truetype",src:S}),Z.Zx.register({family:"Roboto-Italic",format:"truetype",src:E}),Z.Zx.register({family:"Roboto-Bold-Italic",format:"truetype",src:T});var o=Z.mM.create({list:{fontSize:12,marginHorizontal:10,width:230,fontFamily:r.bold?"Roboto-Bold":r.italic?"Roboto-Italic":"Roboto-Regular"}});return r.link?(0,p.jsx)(Z.rU,{src:r.src,style:o.list,children:r.text},t):(0,p.jsx)(Z.xv,{style:o.list,children:r.text},t)}))]}),(0,p.jsxs)(Z.G7,{style:D.borderRightNone,children:[(0,p.jsx)(Z.xv,{style:D.title,children:"Revenue Streams"}),e.RevenueStreams.list.map((function(e,t){var r=n(e);Z.Zx.register({family:"Roboto-Regular",format:"truetype",src:B}),Z.Zx.register({family:"Roboto-Bold",format:"truetype",src:S}),Z.Zx.register({family:"Roboto-Italic",format:"truetype",src:E}),Z.Zx.register({family:"Roboto-Bold-Italic",format:"truetype",src:T});var o=Z.mM.create({list:{fontSize:12,marginHorizontal:10,width:230,fontFamily:r.bold?"Roboto-Bold":r.italic?"Roboto-Italic":"Roboto-Regular"}});return r.link?(0,p.jsx)(Z.rU,{src:r.src,style:o.list,children:r.text},t):(0,p.jsx)(Z.xv,{style:o.list,children:r.text},t)}))]})]},t)}));return(0,p.jsx)(Z.BB,{title:"PDF_CHECK",children:(0,p.jsxs)(Z.T3,{size:"A3",orientation:"landscape",style:D.page,children:[(0,p.jsxs)(Z.G7,{style:D.invoiceDateContainer,children:[(0,p.jsx)(Z.xv,{style:D.label,children:"Business Model Canvas"}),(0,p.jsxs)(Z.G7,{children:[(0,p.jsxs)(Z.xv,{style:D.name,children:["Canvas Name: ",r]}),(0,p.jsxs)(Z.xv,{style:D.date,children:["Date: ",o]})]})]}),s]})})}var I={KeyPartnerships:728,KeyActivities:364,ValuePropositions:728,CustomerRelationships:364,CustomerSegments:728,Channels:364,KeyResources:364,RevenueStreams:420,CostStructure:420,BrainstormingNotes:728};function L(e){var t=e.objName,r=(0,u.j)().form,o=function(e){var t=I[e]/28;return Math.floor(r[e].list.length/t*100)};return r[t].list.length>0&&(0,p.jsxs)("div",{className:"relative w-full bg-secondary h-1 flex mb-2",children:[(0,p.jsx)("div",{className:"absolute bg-primary h-1",style:{width:"".concat(o(t)>100?"100%":o(t),"%")}}),o(t)>=100?null:(0,p.jsxs)("span",{className:"ml-auto m-2 text-xs",children:[100-o(t),"% Left"]})]})}var M=r(8329),W=r(9085),P=(r(5462),r(6106));function _(){var e=(0,u.j)(),t=e.form,r=e.dispatch,l=e.user,x=e.canvas_name,m=(0,d.useState)(!1),f=(0,s.Z)(m,2),h=f[0],g=f[1],b=(0,d.useState)([]),y=(0,s.Z)(b,2),v=y[0],j=y[1],w=(0,d.useState)(""),C=(0,s.Z)(w,2),R=C[0],B=C[1],S=(0,d.useState)("Select Canvas"),E=(0,s.Z)(S,2),T=E[0],D=E[1],I=(0,d.useState)(!1),_=(0,s.Z)(I,2),F=_[0],H=_[1],O=M.Z.get("sodIdToken"),K=function(){var e=(0,n.Z)((0,o.Z)().mark((function e(){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Select Canvas"!==T){e.next=19;break}if(e.prev=1,!(R.length>0)){e.next=10;break}return e.next=5,a.Z.post("".concat("https://toolbox.steveondigital.com:5000","/save-canvas"),{google_id:l.data.google_id,canvas_name:R,canvas:t},{headers:{"ngrok-skip-browser-warning":!0,Authorization:"Bearer ".concat(O)}});case 5:W.Am.success("Canvas Posted Successfully",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:!0,theme:"colored"}),D(null),r({type:"RESET_STATE"}),e.next=11;break;case 10:W.Am.error("Give the Name of Canvas",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:!0,theme:"colored"});case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),e.t0.response.data&&W.Am.error(e.t0.response.data.message,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:!0,theme:"colored"}),console.log(e.t0);case 17:e.next=29;break;case 19:return e.prev=19,e.next=22,a.Z.post("".concat("https://toolbox.steveondigital.com:5000","/update-canvas"),{google_id:l.data.google_id,canvas_name:T,canvas:t},{headers:{"ngrok-skip-browser-warning":!0,Authorization:"Bearer ".concat(O)}});case 22:n=e.sent,W.Am.success(n.data.message,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:!0,theme:"colored"}),e.next=29;break;case 26:e.prev=26,e.t1=e.catch(19),console.log(e.t1);case 29:case"end":return e.stop()}}),e,null,[[1,13],[19,26]])})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=(0,n.Z)((0,o.Z)().mark((function e(){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.post("".concat("https://toolbox.steveondigital.com:5000","/delete-canvas"),{canvas_name:T},{headers:{"ngrok-skip-browser-warning":!0,Authorization:"Bearer ".concat(O)}});case 3:t=e.sent,r({type:"RESET_STATE"}),D("Select Canvas"),W.Am.success("Canvas Deleted",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:!0,theme:"colored"}),console.log(t.data.message),g(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),g(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();(0,d.useEffect)((function(){var e=function(){var e=(0,n.Z)((0,o.Z)().mark((function e(){var t,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("".concat("https://toolbox.steveondigital.com:5000","/get-canvas-names"),{headers:{"ngrok-skip-browser-warning":!0,Authorization:"Bearer ".concat(O)}});case 3:t=e.sent,r=t.data,j(r.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[T,O]),(0,d.useEffect)((function(){var e=function(){var e=(0,n.Z)((0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H(!0),e.prev=1,t=T,e.next=5,a.Z.post("".concat("https://toolbox.steveondigital.com:5000","/get-canvas"),{canvas_name:t},{headers:{"ngrok-skip-browser-warning":!0,Authorization:"Bearer ".concat(O),"Access-Control-Allow-Origin":"*"}});case 5:n=e.sent,r({type:"UPDATEFORM",payload:n.data.data.canvas}),r({type:"UPDATECANVASNAME",payload:n.data.data.canvas_name}),H(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("get Canvas Err",e.t0),H(!1);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();"Select Canvas"!==T&&e()}),[T,r,O]);var U=function(){D("Select Canvas"),B(""),r({type:"RESET_STATE"})};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"px-2 2xl:px-24 xl:px-24 lg:px-24 md:px-16 py-10",children:[(0,p.jsxs)("div",{className:"hidden 2xl:flex xl:flex lg:flex md:hidden my-5 gap-4 btn:flex-col flex-col 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col",children:[(0,p.jsxs)("div",{className:"flex gap-5 items-center",children:[(0,p.jsx)("h3",{className:"".concat("Select Canvas"===T?"border-b-2 border-primary text-primary":"text-secondary"," text-xl hover:text-primary font-medium cursor-pointer hover:border-b-2 hover:border-primary"),onClick:U,children:"Create BMC"}),(0,p.jsxs)("select",{name:"canvas",className:"w-52 border px-5 py-2",value:T,onChange:function(e){return D(e.target.value)},children:[(0,p.jsx)("option",{selected:!0,disabled:!0,value:"Select Canvas",children:"Select Canvas"}),v&&v.map((function(e,t){return(0,p.jsx)("option",{value:e.canvas_name,children:e.canvas_name},t)}))]})]}),(0,p.jsx)("div",{className:"flex ml-auto gap-3",children:h?"Select Canvas"===T?(0,p.jsx)(p.Fragment,{}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("button",{onClick:q,className:"bg-primary text-white p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg",children:"Yes, Delete Canvas"}),(0,p.jsx)("button",{onClick:function(){return g(!1)},className:"border-primary border text-primary p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg",children:"No, Keep Canvas"})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"w-72",children:(0,p.jsx)("input",{type:"text",name:"Canvas",value:R,placeholder:"Type in the name of canvas",className:"w-full px-5 py-3 border",required:!0,onChange:function(e){return B(e.target.value)}})}),(0,p.jsxs)(Z.WD,{document:(0,p.jsx)(d.Suspense,{fallback:(0,p.jsx)(z,{}),children:(0,p.jsx)(A,{form:t,canvas_name:x})}),fileName:T,className:"bg-primary text-white p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg",children:[(0,p.jsx)(c.yf7,{className:"text-xl"}),"Download"]}),(0,p.jsx)("button",{onClick:K,className:"bg-primary text-white p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg",children:"Save Template"}),"Select Canvas"===T?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("button",{onClick:function(){return g(!0)},className:"bg-primary text-white p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg",children:"Delete Canvas"})]})})]}),(0,p.jsxs)("div",{className:"flex 2xl:hidden xl:hidden lg:hidden md:flex my-5 gap-4 btn:flex-col flex-col 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col",children:[(0,p.jsxs)("div",{className:"flex gap-5 justify-center",children:[(0,p.jsx)("h3",{className:"".concat("Select Canvas"===T?"border-b-2 border-primary":""," text-xl text-secondary hover:text-primary font-medium cursor-pointer hover:border-b-2 hover:border-primary"),onClick:U,children:"Create BMC"}),(0,p.jsxs)("select",{name:"canvas",className:"w-52 border px-5",value:T,onChange:function(e){return D(e.target.value)},children:[(0,p.jsx)("option",{selected:!0,disabled:!0,value:"Select Canvas",children:"Select Canvas"}),v&&v.map((function(e,t){return(0,p.jsx)("option",{value:e.canvas_name,children:e.canvas_name},t)}))]})]}),(0,p.jsx)("div",{className:"flex ml-auto gap-3 justify-center w-full",children:(0,p.jsx)("div",{className:"w-full",children:(0,p.jsx)("input",{type:"text",name:"Canvas",value:R,placeholder:"Type in the name of canvas",className:"w-full px-5 py-3 border",required:!0,onChange:function(e){return B(e.target.value)}})})}),(0,p.jsxs)("div",{className:"flex gap-5 justify-center flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col",children:[(0,p.jsxs)(Z.WD,{document:(0,p.jsx)(d.Suspense,{fallback:(0,p.jsx)(z,{}),children:(0,p.jsx)(A,{form:t})}),fileName:T,className:"bg-primary text-white p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg",children:[(0,p.jsx)(c.yf7,{className:"text-xl"}),"Download"]}),(0,p.jsx)("button",{onClick:K,className:"bg-primary text-white p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg",children:"Save Template"}),"Select Canvas"===T?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("button",{onClick:q,className:"bg-primary text-white p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg",children:"Delete Canvas"})]})]}),(0,p.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-5 grid-rows-4 border-2 border-gray-300",children:F?(0,p.jsxs)("div",{className:"flex justify-center items-center gap-2 p-3 rounded-lg font-bold h-screen cursor-wait col-span-full",children:[(0,p.jsxs)("svg",{className:"h-20 w-20 animate-spin",viewBox:"3 3 18 18",children:[(0,p.jsx)("path",{className:"fill-gray-300",d:"M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"}),(0,p.jsx)("path",{className:"fill-primary",d:"M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"})]}),(0,p.jsx)("span",{className:"text-4xl",children:"Loading..."})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:" flex flex-col lg:row-span-2 lg:col-span-1 2xl:border-r-2 xl:border-r-2 lg:border-r-2  border-r-0 border-b-2 border-gray-300 gap-2 w-full hover:bg-gray-100",children:[(0,p.jsx)(L,{objName:"KeyPartnerships"}),(0,p.jsx)(N,{list:i().firstBox.questions,title:i().firstBox.title,objName:"KeyPartnerships"})]}),(0,p.jsxs)("div",{className:"flex flex-col lg:border-r-2 lg:border-b-2 border-b-2 lg:border-gray-300 w-full hover:bg-gray-100",children:[(0,p.jsx)(L,{objName:"KeyActivities"}),(0,p.jsx)(N,{list:i().secondBox.questions,title:i().secondBox.title,objName:"KeyActivities"})]}),(0,p.jsxs)("div",{className:"flex flex-col lg:row-span-2 lg:border-r-2 lg:border-b-2 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100",children:[(0,p.jsx)(L,{objName:"ValuePropositions"}),(0,p.jsx)(N,{list:i().thirdBox.questions,title:i().thirdBox.title,objName:"ValuePropositions"})]}),(0,p.jsxs)("div",{className:"flex flex-col lg:border-r-2 lg:border-b-2 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100",children:[(0,p.jsx)(L,{objName:"CustomerRelationships"}),(0,p.jsx)(N,{list:i().forthBox.questions,title:i().forthBox.title,objName:"CustomerRelationships"})]}),(0,p.jsxs)("div",{className:"flex flex-col lg:row-span-2 lg:border-b-2 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100",children:[(0,p.jsx)(L,{objName:"CustomerSegments"}),(0,p.jsx)(N,{list:i().fifthBox.questions,title:i().fifthBox.title,objName:"CustomerSegments"})]}),(0,p.jsxs)("div",{className:"flex flex-col lg:border-b-2 lg:border-r-2 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100",children:[(0,p.jsx)(L,{objName:"KeyResources"}),(0,p.jsx)(N,{list:i().sixthBox.questions,title:i().sixthBox.title,objName:"KeyResources"})]}),(0,p.jsxs)("div",{className:"flex flex-col lg:border-r-2 lg:border-b-2 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100",children:[(0,p.jsx)(L,{objName:"Channels"}),(0,p.jsx)(N,{list:i().seventhBox.questions,title:i().seventhBox.title,objName:"Channels"})]}),(0,p.jsxs)("div",{className:"flex flex-col lg:row-span-2 lg:col-span-2 lg:border-r-2 2xl:border-b-0 xl:border-b-0 lg:border-b-0 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100",children:[(0,p.jsx)(L,{objName:"CostStructure"}),(0,p.jsx)(N,{list:i().eightBox.questions,title:i().eightBox.title,objName:"CostStructure"})]}),(0,p.jsxs)("div",{className:"flex flex-col lg:row-span-2 lg:col-span-3 2xl:border-b-0 xl:border-b-0 lg:border-b-0 border-b-2 lg:border-gray-300 gap-2 w-full hover:bg-gray-100",children:[(0,p.jsx)(L,{objName:"RevenueStreams"}),(0,p.jsx)(N,{list:i().ninthBox.questions,title:i().ninthBox.title,objName:"RevenueStreams"})]})]})}),(0,p.jsxs)("div",{className:"flex mt-1 justify-between items-center 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse flex-col-reverse gap-5",children:[(0,p.jsx)("div",{className:"2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4 w-full",children:(0,p.jsxs)("p",{children:["Business Model Canvas by Alexander Osterwalder from ",(0,p.jsx)("a",{className:"text-blue-600 underline",href:"https://www.strategyzer.com/",target:"_blank",rel:"noopener noreferrer",children:"Strategyzer.com "}),". The business model canvas itself is licensed under the ",(0,p.jsx)("a",{className:"text-blue-600 underline",href:"https://creativecommons.org/licenses/by-sa/3.0/deed.en",target:"_blank",rel:"noopener noreferrer",children:"CC BY SA 3.0."})," / Modifications by StemJee Inc."]})}),(0,p.jsx)("div",{className:"flex gap-3 mt-5",children:(0,p.jsx)("button",{onClick:function(){return r({type:"RESET_STATE"})},className:"bg-primary text-white p-2 font-medium flex gap-3 justify-center items-center hover:bg-opacity-80 px-3 rounded-lg",children:"Clear Template"})})]}),(0,p.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,p.jsx)("h1",{className:"text-3xl font-bold",children:"Brainstorming Notes"}),(0,p.jsx)("p",{children:"Write down you thought here and then move them to necessary section."}),(0,p.jsx)(k,{objName:"BrainstormingNotes"})]}),(0,p.jsx)(W.Ix,{position:"bottom-right",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,theme:"colored"})]}),(0,p.jsx)(P.Z,{})]})}var z=function(){}},2480:function(){}}]);
//# sourceMappingURL=937.9dd37915.chunk.js.map