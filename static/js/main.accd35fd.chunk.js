(this["webpackJsonpmake-pathfinding-visualizer"]=this["webpackJsonpmake-pathfinding-visualizer"]||[]).push([[0],{102:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=102},103:function(t,e){},247:function(t,e){},248:function(t,e){},249:function(t,e){},250:function(t,e){},251:function(t,e){},252:function(t,e){},253:function(t,e,n){},254:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(28),c=n.n(o),i=n(14),u=n(104),s=n(4),l=n(29),d=n(1),f=n(16),p=n(107),b=n.n(p),v={};Object(f.a)(Array(20).keys()).forEach((function(t){Object(f.a)(Array(50).keys()).forEach((function(e){v["".concat(t,"-").concat(e)]={index:"".concat(t,"-").concat(e),x:e,y:t,pointType:"unvisited",wall:!1,visited:!1,cost:1,shortest:1/0,prev:null}}))}));var h={boardCoordinate:v,startPoint:"5-5",endPoint:"10-10",countAxisX:50,countAxisY:20,currentSearchPoints:[],algorithm:"dijkstra",visitedPoints:[],shortestPath:[],dragTarget:null},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"gridBox/setStartPoint":return Object(d.a)(Object(d.a)({},t),{},{startPoint:e.payload});case"gridBox/setEndPoint":return Object(d.a)(Object(d.a)({},t),{},{endPoint:e.payload});case"controllor/resetState":return h;case"controller/updateBox":var n=e.payload,a=Object.keys(n),r=Object(d.a)({},t.boardCoordinate[e.payload.point]);return a.forEach((function(t){r[t]=n[t]})),Object(d.a)(Object(d.a)({},t),{},{boardCoordinate:Object(d.a)(Object(d.a)({},t.boardCoordinate),{},Object(l.a)({},e.payload.point,r))});case"controller/updateShortestPath":switch(e.payload.algorithm){case"Daijkstra":var o=function(){var e=[],n=t.startPoint,a=t.endPoint,r=b()(t.boardCoordinate);r[n]=Object(d.a)(Object(d.a)({},r[n]),{},{shortest:0});for(var o=Object.values(r).filter((function(t){return"unvisited"===t.pointType&&t.shortest!==1/0})),c=!1;o.length>=1&&!1===c;){for(var i=o.sort((function(t,e){return t.shortest>=e.shortest?1:-1})),u=function(t){var n=i[t];if(n.index===a)return c=!0,"break";r[n.index].pointType="visited",e.push(n);var o=n.x,u=n.y,s="".concat(u+1,"-").concat(o),l="".concat(u-1,"-").concat(o),d=["".concat(u,"-").concat(o-1),s,l,"".concat(u,"-").concat(o+1)].filter((function(t){return void 0!==r[t]&&"unvisited"===r[t].pointType}));d.length>0&&d.forEach((function(t){r[t].shortest>r[t].cost+n.shortest&&(r[t].shortest=n.shortest,r[t].prev=n.index)}))},s=0;s<i.length;s++){if("break"===u(s))break}o=Object.values(r).filter((function(t){return"unvisited"===t.pointType&&t.shortest!==1/0}))}for(var l=[],f=a;null!==f;)void 0!==r[f]?null!==(f=r[f].prev)&&(l.push(f),r[f].pointType="path"):f=null;return l.reverse(),{v:Object(d.a)(Object(d.a)({},t),{},{visitedPoints:e,shortestPath:l})}}();if("object"===typeof o)return o.v;default:return t}case"updateDragTarget":var c=e.payload;return Object(d.a)(Object(d.a)({},t),{},{dragTarget:c});default:return t}},O=function(){return r.a.createElement("article",{id:"topbar"},r.a.createElement("section",{className:"title"},"Danny's Pathfinder"))},y=n(6),m=function(t){var e=t.x,n=t.y,o=t.pointType,c=t.visited,i=t.wall,u=Object(s.c)((function(t){return{startPoint:t.startPoint,endPoint:t.endPoint,dragTarget:t.dragTarget}})),l=u.startPoint,d=u.endPoint,f=u.dragTarget,p="".concat(n,"-").concat(e);Object(a.useEffect)((function(){"path"===o?j("box path"):"unvisited"===o?j("box"):"visited"===o?j("box visited"):"wall"===o&&j("box wall"),p===l?j("box start-point"):p===d&&j("box end-point")}),[l,d,p,o,i,c]);var b=Object(a.useState)("box"),v=Object(y.a)(b,2),h=v[0],j=v[1],O=Object(s.c)((function(t){return{boardCoordinate:t.boardCoordinate}})).boardCoordinate,m=Object(s.b)(),E=Object(a.useCallback)((function(t){return m({type:"controller/updateBox",payload:t})}),[m]),x=Object(a.useCallback)((function(t){m({type:"gridBox/setStartPoint",payload:t})}),[m]),g=Object(a.useCallback)((function(t){m({type:"gridBox/setEndPoint",payload:t})}),[m]),P=Object(a.useCallback)((function(t){return m({type:"updateDragTarget",payload:t})}));return r.a.createElement("div",{id:"column ".concat(p),className:h,onContextMenu:function(t){t.preventDefault(),g(p)},onClick:function(t){t.preventDefault(),E({point:p,pointType:"wall"===O[p].pointType?"unvisited":"wall"})},onDragEnter:function(t){t.stopPropagation(),t.preventDefault(),p===l?P("startPoint"):p===d?P("endPoint"):null===f&&E({point:p,pointType:"wall"===O[p].pointType?"unvisited":"wall"})},onDragOver:function(t){t.preventDefault()},onDragEnd:function(t){t.preventDefault(),P(null)},onDrop:function(t){"startPoint"===f?x(p):"endPoint"===f&&g(p)},onMouseEnter:function(){j(h+" hover")},onMouseLeave:function(){j(h.replace(" hover",""))},draggable:!0})},E=function(){var t=Object(s.c)((function(t){return{countAxisX:t.countAxisX,countAxisY:t.countAxisY}})),e=(t.countAxisX,t.countAxisY),n=Object(s.c)((function(t){return{boardCoordinate:t.boardCoordinate}})).boardCoordinate,a=Object.keys(n).map((function(t){var e=n[t],a=e.x,o=e.y,c=e.pointType,i=e.visited,u=e.wall,s=e.cost,l="".concat(o,"-").concat(a);return r.a.createElement(m,{x:a,y:o,pointType:c,visited:i,wall:u,cost:s,key:l})}));return r.a.createElement("section",{className:"grid-board"},function(){var t=[];return Object(f.a)(Array(e).keys()).forEach((function(e){var n=a.filter((function(t){return t.props.y===e}));t.push(r.a.createElement("div",{className:"row",key:"row-".concat(e)},n))})),t}())},x=n(31),g=function(t,e,n){var a=[],r=Object(x.cloneDeep)(t),o=0;r[e]=Object(d.a)(Object(d.a)({},r[e]),{},{shortest:0,order:o}),o=1;for(var c=Object.values(r).filter((function(t){return"unvisited"===t.pointType&&t.shortest!==1/0})),i=!1;c.length>=1&&!1===i;){for(var u=c.sort((function(t,e){return t.shortest>=e.shortest?1:-1})),s=function(t){var e=u[t];if(e.index===n)return i=!0,"break";r[e.index].pointType="visited",r[e.index].order=o,o+=1,a.push(e);var c=e.x,s=e.y,l="".concat(s+1,"-").concat(c),d="".concat(s-1,"-").concat(c),f=["".concat(s,"-").concat(c-1),l,d,"".concat(s,"-").concat(c+1)].filter((function(t){return void 0!==r[t]&&"unvisited"===r[t].pointType}));f.length>0&&f.forEach((function(t){r[t].shortest>r[t].cost+e.shortest&&(r[t].shortest=e.shortest,r[t].prev=e.index)}))},l=0;l<u.length;l++){if("break"===s(l))break}c=Object.values(r).filter((function(t){return"unvisited"===t.pointType&&t.shortest!==1/0}))}for(var f=[],p=n;null!==p;)void 0!==r[p]?null!==(p=r[p].prev)&&(f.push(p),r[p].pointType="path",o+=1):p=null;return f.reverse(),{visitedPoints:a,shortestPath:f}},P=(n(245),function(t,e,n){var a=Math.abs(n[t].x-n[e].x),r=Math.abs(n[t].y-n[e].y);return Math.sqrt(Math.pow(a,2)+Math.pow(r,2))}),k=function(t,e,n){var a=Object(x.cloneDeep)(t),r=[],o=[],c=[],i=[];a[e]=Object(d.a)(Object(d.a)({},a[e]),{},{distanceFromStart:0,heuristicDistance:0,fValue:null,open:!1,closed:!1,prev:null});for(var u=a[e];u.index!==n;){(function(t){var e=t.x,n=t.y,r="".concat(n+1,"-").concat(e),o="".concat(n-1,"-").concat(e);return["".concat(n,"-").concat(e-1),r,o,"".concat(n,"-").concat(e+1)].filter((function(t){return void 0!==a[t]&&"unvisited"===a[t].pointType}))})(u).forEach((function(t){if(!c.includes(t)&&!i.includes(t)){c.push(t);var r=Math.abs(a[e].x-a[t].x)+Math.abs(a[e].y-a[t].y),o=P(n,t,a),s=r+o;(s<a[t].fValue||void 0===a[t].fValue)&&(a[t].distanceFromStart=r,a[t].heuristicDistance=o,a[t].fValue=s,a[t].prev=u.index)}})),i.push(u.index);var s=function(t){return t.map((function(t){return a[t]})).sort((function(t,e){return t.fValue<=e.fValue?-1:1}))[0]}(c);c.splice(c.indexOf(s.index),1),r.push(u),u=s}for(var l=a[n].prev;null!=l;)o.push(l),l=a[l].prev;return o.reverse(),{visitedPoints:r,shortestPath:o}},C=function(t){var e=t.startButtonClick,n=t.restartButtonClick;return t.trigger?r.a.createElement("div",{className:"button-wrap"},r.a.createElement("button",{className:"button start",onClick:n},"PAUSE")):r.a.createElement("div",{className:"button-wrap"},r.a.createElement("button",{className:"button start",onClick:e},"START"))},T=function(t){var e=t.onClick;return r.a.createElement("div",{className:"button-wrap"},r.a.createElement("button",{className:"button reset",onClick:e},"RESET"))},w=function(t){var e=t.onChange;return r.a.createElement("div",{className:"button-wrap"},r.a.createElement("form",null,r.a.createElement("select",{className:"select-container",name:"algorithm",onChange:e},r.a.createElement("option",{value:"A-star"},"A-star"),r.a.createElement("option",{value:"Daijkstra"},"Daijkstra"))))},D=function(){var t=Object(s.c)((function(t){return{boardCoordinate:t.boardCoordinate,startPoint:t.startPoint,endPoint:t.endPoint}})),e=t.boardCoordinate,n=t.startPoint,o=t.endPoint,c=Object(s.b)(),i=Object(a.useCallback)((function(t){return c({type:"controller/updateBox",payload:t})}),[c]),u=(Object(a.useCallback)((function(t){c({type:"gridBoard/updateBoxType",payload:t})}),[c]),Object(a.useState)(!1)),l=Object(y.a)(u,2),d=l[0],f=l[1],p=Object(a.useState)(0),b=Object(y.a)(p,2),v=b[0],h=b[1],j=Object(a.useState)(0),O=Object(y.a)(j,2),m=O[0],E=O[1],x=Object(a.useState)("00:00:00"),P=Object(y.a)(x,2),D=(P[0],P[1]),S=Object(a.useState)(0),N=Object(y.a)(S,2),A=N[0],B=N[1],M=Object(a.useState)([]),V=Object(y.a)(M,2),R=V[0],X=V[1],Y=Object(a.useState)([]),F=Object(y.a)(Y,2),I=F[0],U=F[1],z=Object(a.useRef)(!1),J=Object(a.useRef)();function L(){void 0!=I[v]?(i({point:I[v].index,pointType:"visited"}),B(A+1),h(v+1)):(i({point:R[m],pointType:"path"}),E(m+1))}Object(a.useEffect)((function(){J.current=L})),Object(a.useEffect)((function(){if(d){var t=setInterval((function(){J.current()}),3);return function(){clearInterval(t)}}}),[d]);var _=Object(a.useCallback)((function(){c({type:"controllor/resetState"})}),[c]),q=Object(a.useState)("A-star"),W=Object(y.a)(q,2),G=W[0],H=W[1];return r.a.createElement("section",{id:"controller"},r.a.createElement("div",{className:"right"},r.a.createElement(w,{onChange:function(t){H(t.target.value)}}),r.a.createElement(C,{startButtonClick:function(){if(!z.current){var t=function(t){return"Daijkstra"===t?g(e,n,o):"A-star"===t?k(e,n,o):void 0}(G),a=t.visitedPoints,r=t.shortestPath;U(a),X(r)}f(!0)},restartButtonClick:function(){f(!1)},trigger:d}),r.a.createElement(T,{onClick:function(){f(!1),h(0),E(0),B(0),D("00:00:00"),_()}}),r.a.createElement("div",{className:"counter"},r.a.createElement("div",{className:"counter-box"},r.a.createElement("p",{className:"move-counter"},A)))))},S=function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement(O,null)),r.a.createElement("main",null,r.a.createElement("article",null,r.a.createElement(D,null),r.a.createElement(E,null))))},N=(n(253),Object(i.createStore)(j,Object(u.composeWithDevTools)()));c.a.render(r.a.createElement(s.a,{store:N},r.a.createElement(S,null)),document.getElementById("root"))}},[[254,1,2]]]);
//# sourceMappingURL=main.accd35fd.chunk.js.map