(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(1),r=n.n(i),l=n(4),a=n.n(l);n(16),n.p,n(17);var o=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,l=e.getTTFB;n(t),c(t),i(t),r(t),l(t)}))},s=(n(18),n(9)),u=n(5),d=n(6),_=n(7),b=n(10),h=n(8),k=(n.p,function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(t){var c;return Object(d.a)(this,n),(c=e.call(this,t)).btnInc__onClick_Handler__setTimeout=function(){1===c.click__.clickedCount&&(clearTimeout(c.click__.timerClick),c.click__.clickedCount=0,c.click__.isClicked=!1,c.btnInc__onClick_Action())},c.btnInc__onClick_Handler=function(){c.click__.clickedCount++,c.click__.timerClick=setTimeout(c.btnInc__onClick_Handler__setTimeout,c.click__.DifferentiatingTime),!1===c.click__.isClicked&&c.click__.clickedCount>=2&&(clearTimeout(c.click__.timerClick),c.click__.clickedCount=0,c.btnInc__onDoubleClick_Action())},c.inclementTotal=function(t){c.setState({count:c.state.count+1}),console.log("productId{productId}")},c.declementTotal=function(t){0!==c.state.count&&(c.setState({count:c.state.count-1}),console.log("productId{productId}"))},c.state={count:0,arrTag:["tagA","tagB","tagC"],productId:101,imgUrl:"https://picsum.photos/200",address:{street:"Viphavadee"}},c.stylesSpan={fontSize:10,fontWeight:"bold",textAlign:"center"},c.stylesBtn={fontSize:30,fontWeight:"bold",textAlign:"center"},c.click__={timerClick:null,DifferentiatingTime:250,clickedCount:0,isClicked:!1},c}return Object(_.a)(n,[{key:"render",value:function(){var t=this;return Object(c.jsxs)(r.a.Fragment,{children:[Object(c.jsx)("img",{src:this.state.imgUrl,alt:"HeaderImg",onDoubleClick:this.btn_onDoubleClick}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{style:this.stylesSpan,className:this.getClassSpan(),children:this.format__count()}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{style:this.stylesSpan,className:"badge badge-info m-2",children:Object(c.jsx)("h2",{children:this.state.productId})}),this.renderTag(),Object(c.jsx)("button",{className:"btn btn-secondary m-3",style:this.stylesBtn,onClick:function(){return t.inclementTotal(t.state.productId)},children:"Increment"}),Object(c.jsx)("button",{className:"btn btn-secondary m-3",style:this.stylesBtn,onClick:function(){return t.declementTotal(t.state.productId)},children:"Decrement"})]})}},{key:"btnInc__onClick_Action",value:function(){this.inclementTotal()}},{key:"btnInc__onDoubleClick_Action",value:function(){}},{key:"renderTag",value:function(){return 0===this.state.arrTag.length?Object(c.jsx)("div",{style:{backgroundColor:"green"},children:"There is no tag!"}):this.format__arrTag01()}},{key:"getClassSpan",value:function(){var t="badge m-2 badge-";return t+=0===this.state.count?"warning":"primary"}},{key:"format__count",value:function(){var t=this.state.count;return 0===t?Object(c.jsx)("h1",{children:"Zero"}):Object(c.jsx)("h1",{children:t})}},{key:"format__arrTag01",value:function(){return Object(c.jsx)("ul",{style:{backgroundColor:"green"},children:this.state.arrTag.map((function(t,e){return Object(c.jsx)("li",{children:t},e)}))})}},{key:"format__arrTag02",value:function(){var t,e=[],n=Object(u.a)(this.state.arrTag.entries());try{for(n.s();!(t=n.n()).done;){var i=Object(s.a)(t.value,2),r=i[0],l=i[1];e.push(Object(c.jsx)("li",{children:l},r))}}catch(a){n.e(a)}finally{n.f()}return Object(c.jsx)("ul",{children:e})}}]),n}(i.Component));a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),o()}},[[19,1,2]]]);
//# sourceMappingURL=main.b4d1f4e1.chunk.js.map