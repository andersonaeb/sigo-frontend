(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[11],{1029:function(e,a,t){"use strict";t.r(a);var r=t(46),l=t(47),o=t(51),n=t(50),c=t(0),s=t.n(c),d=t(871),i=t(549),m=t(547),u=t(552),p=t(550),h=t(880),E={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40]}]},b={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[65,59,80,81,56,55,40]}]},C={labels:["Red","Green","Yellow"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},g={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},f={labels:["Red","Green","Yellow"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},v={datasets:[{data:[11,16,7,3,14],backgroundColor:["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB"],label:"My dataset"}],labels:["Red","Green","Yellow","Grey","Blue"]},N={tooltips:{enabled:!1,custom:h.CustomTooltips},maintainAspectRatio:!1},y=function(e){Object(o.a)(t,e);var a=Object(n.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(i.a,{className:"cols-2"},s.a.createElement(m.a,null,s.a.createElement(u.a,null,"Line Chart",s.a.createElement("div",{className:"card-header-actions"},s.a.createElement("a",{href:"http://www.chartjs.org",className:"card-header-action"},s.a.createElement("small",{className:"text-muted"},"docs")))),s.a.createElement(p.a,null,s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(d.c,{data:E,options:N})))),s.a.createElement(m.a,null,s.a.createElement(u.a,null,"Bar Chart",s.a.createElement("div",{className:"card-header-actions"},s.a.createElement("a",{href:"http://www.chartjs.org",className:"card-header-action"},s.a.createElement("small",{className:"text-muted"},"docs")))),s.a.createElement(p.a,null,s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(d.a,{data:b,options:N})))),s.a.createElement(m.a,null,s.a.createElement(u.a,null,"Doughnut Chart",s.a.createElement("div",{className:"card-header-actions"},s.a.createElement("a",{href:"http://www.chartjs.org",className:"card-header-action"},s.a.createElement("small",{className:"text-muted"},"docs")))),s.a.createElement(p.a,null,s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(d.b,{data:C})))),s.a.createElement(m.a,null,s.a.createElement(u.a,null,"Radar Chart",s.a.createElement("div",{className:"card-header-actions"},s.a.createElement("a",{href:"http://www.chartjs.org",className:"card-header-action"},s.a.createElement("small",{className:"text-muted"},"docs")))),s.a.createElement(p.a,null,s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(d.f,{data:g})))),s.a.createElement(m.a,null,s.a.createElement(u.a,null,"Pie Chart",s.a.createElement("div",{className:"card-header-actions"},s.a.createElement("a",{href:"http://www.chartjs.org",className:"card-header-action"},s.a.createElement("small",{className:"text-muted"},"docs")))),s.a.createElement(p.a,null,s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(d.d,{data:f})))),s.a.createElement(m.a,null,s.a.createElement(u.a,null,"Polar Area Chart",s.a.createElement("div",{className:"card-header-actions"},s.a.createElement("a",{href:"http://www.chartjs.org",className:"card-header-action"},s.a.createElement("small",{className:"text-muted"},"docs")))),s.a.createElement(p.a,null,s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(d.e,{data:v,options:N}))))))}}]),t}(c.Component);a.default=y},880:function(e,a,t){!function(e){"use strict";function a(e){var a=this,t="above",r="below",l="chartjs-tooltip",o="no-transform",n="tooltip-body",c="tooltip-body-item",s="tooltip-body-item-color",d="tooltip-body-item-label",i="tooltip-body-item-value",m="tooltip-header",u="tooltip-header-item",p={DIV:"div",SPAN:"span",TOOLTIP:(this._chart.canvas.id||function(){var e=function(){return(65536*(1+Math.random())|0).toString(16)},t="_canvas-"+(e()+e());return a._chart.canvas.id=t,t}())+"-tooltip"},h=document.getElementById(p.TOOLTIP);if(h||((h=document.createElement("div")).id=p.TOOLTIP,h.className=l,this._chart.canvas.parentNode.appendChild(h)),0!==e.opacity){if(h.classList.remove(t,r,o),e.yAlign?h.classList.add(e.yAlign):h.classList.add(o),e.body){var E=e.title||[],b=document.createElement(p.DIV);b.className=m,E.forEach((function(e){var a=document.createElement(p.DIV);a.className=u,a.innerHTML=e,b.appendChild(a)}));var C=document.createElement(p.DIV);C.className=n,e.body.map((function(e){return e.lines})).forEach((function(a,t){var r=document.createElement(p.DIV);r.className=c;var l=e.labelColors[t],o=document.createElement(p.SPAN);if(o.className=s,o.style.backgroundColor=l.backgroundColor,r.appendChild(o),a[0].split(":").length>1){var n=document.createElement(p.SPAN);n.className=d,n.innerHTML=a[0].split(": ")[0],r.appendChild(n);var m=document.createElement(p.SPAN);m.className=i,m.innerHTML=a[0].split(": ").pop(),r.appendChild(m)}else{var u=document.createElement(p.SPAN);u.className=i,u.innerHTML=a[0],r.appendChild(u)}C.appendChild(r)})),h.innerHTML="",h.appendChild(b),h.appendChild(C)}var g=this._chart.canvas.getBoundingClientRect(),f=this._chart.canvas.offsetTop,v=this._chart.canvas.offsetLeft+e.caretX,N=f+e.caretY,y=e.width/2;v+y>g.width?v-=y:v<y&&(v+=y),h.style.opacity=1,h.style.left=v+"px",h.style.top=N+"px"}else h.style.opacity=0}var t=a;e.CustomTooltips=a,e.customTooltips=t,Object.defineProperty(e,"__esModule",{value:!0})}(a)}}]);
//# sourceMappingURL=11.8ea8d81c.chunk.js.map