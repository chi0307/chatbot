(function(e){function t(t){for(var r,a,s=t[0],i=t[1],l=t[2],b=0,d=[];b<s.length;b++)a=s[b],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/chatbot/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0ae8":function(e,t,n){},"806a":function(e,t,n){"use strict";n("0ae8")},"834c":function(e,t,n){"use strict";n("f0a4")},a0d8:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("ad3d"),c=n("ecee"),a=n("c074"),s=n("f2d1"),i=n("b702"),l=(n("f5df1"),n("bc3a")),u=n.n(l),b=n("2106"),d=n.n(b);function f(e,t,n,o,c,a){var s=Object(r["w"])("router-view");return Object(r["o"])(),Object(r["d"])(s)}var p=n("d4ec"),v=n("262e"),m=n("2caf"),g=n("9ab4"),O=n("ce1f"),j=function(e){Object(v["a"])(n,e);var t=Object(m["a"])(n);function n(){return Object(p["a"])(this,n),t.apply(this,arguments)}return n}(O["b"]);j=Object(g["a"])([Object(O["a"])({created:function(){var e="".concat(window.innerHeight,"px");document.documentElement.style.setProperty("--real100vh",e)},components:{}})],j);var h=j;n("834c");h.render=f;var y=h,w=n("9483");Object(w["a"])("".concat("/chatbot/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var x=n("6c02"),k=Object(r["E"])("data-v-31d9fa16");Object(r["s"])("data-v-31d9fa16");var U={class:"index-page"},L={class:"chat-box",id:"content"},T={class:"all-message"},M={key:0,class:"user user-text"},C={key:1,class:"bot bot-text"},P={key:2,class:"bot bot-image"},A={key:3,class:"bot bot-video"},I={key:4,class:"bot bot-audio"},B={key:5,class:"bot bot-button"},R={class:"button-box"},H={key:6,class:"bot bot-carousel"},S={class:"carousel-box"},_={class:"carousel-content"},N={class:"carousel-text"},W={class:"title"},E={class:"features-box"},X={class:"send-message-box"};Object(r["p"])();var D=k((function(e,t,n,o,c,a){var s=Object(r["w"])("FontAwesomeIcon");return Object(r["o"])(),Object(r["d"])("div",U,[Object(r["f"])("div",L,[Object(r["f"])("div",T,[(Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(e.messagesList,(function(t,n){return Object(r["o"])(),Object(r["d"])("div",{key:n,class:"message"},["user"===t.role?(Object(r["o"])(),Object(r["d"])("div",M,[Object(r["f"])("p",null,Object(r["y"])(t.text),1)])):"bot"===t.role&&"text"===t.type?(Object(r["o"])(),Object(r["d"])("div",C,[Object(r["f"])("p",{innerHTML:t.text},null,8,["innerHTML"])])):"bot"===t.role&&"image"===t.type?(Object(r["o"])(),Object(r["d"])("div",P,[Object(r["f"])("a",{href:t.imageUrl,target:"_blank"},[Object(r["f"])("img",{src:t.previewImageUrl},null,8,["src"])],8,["href"])])):"bot"===t.role&&"video"===t.type?(Object(r["o"])(),Object(r["d"])("div",A,[Object(r["f"])("video",{src:t.videoUrl,poster:t.previewImageUrl,controls:""},null,8,["src","poster"])])):"bot"===t.role&&"audio"===t.type?(Object(r["o"])(),Object(r["d"])("div",I,[Object(r["f"])("audio",{src:t.audioUrl,controls:""},null,8,["src"])])):"bot"===t.role&&"button"===t.type?(Object(r["o"])(),Object(r["d"])("div",B,[Object(r["f"])("div",R,[Object(r["f"])("p",{innerHTML:t.text},null,8,["innerHTML"]),(Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(t.buttons,(function(t,n){return Object(r["o"])(),Object(r["d"])("button",{class:"action-button",key:n,onClick:function(n){return e.clickButton(t)}},Object(r["y"])(t.title),9,["onClick"])})),128))])])):"bot"===t.role&&"carousel"===t.type?(Object(r["o"])(),Object(r["d"])("div",H,[Object(r["f"])("div",S,[Object(r["f"])(s,{class:"icon arrow-left",icon:["fas","chevron-circle-left"],onClick:e.carouselArrowLeft},null,8,["onClick"]),Object(r["f"])("div",_,[(Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(t.columns,(function(t,n){return Object(r["o"])(),Object(r["d"])("div",{key:n,class:"carousel-box"},[t.imageUrl?(Object(r["o"])(),Object(r["d"])("img",{key:0,src:t.imageUrl,class:"carousel-image"},null,8,["src"])):Object(r["e"])("",!0),Object(r["f"])("div",N,[Object(r["f"])("h3",W,Object(r["y"])(t.title),1),Object(r["f"])("p",{innerHTML:t.text},null,8,["innerHTML"])]),(Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(t.buttons,(function(t,n){return Object(r["o"])(),Object(r["d"])("button",{class:"action-button",key:n,onClick:function(n){return e.clickButton(t)}},Object(r["y"])(t.title),9,["onClick"])})),128))])})),128))]),Object(r["f"])(s,{class:"icon arrow-right",icon:["fas","chevron-circle-right"],onClick:e.carouselArrowRight},null,8,["onClick"])])])):Object(r["e"])("",!0)])})),128))])]),Object(r["f"])("div",E,[Object(r["f"])(s,{class:"icon  pwa-button",icon:["fas","arrow-alt-circle-down"],onClick:e.installPWA},null,8,["onClick"]),Object(r["f"])("div",X,[Object(r["C"])(Object(r["f"])("input",{type:"text",class:"send-message",id:"inputMessage","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.inputText=t}),onKeyup:t[2]||(t[2]=Object(r["D"])((function(){return e.dialog&&e.dialog.apply(e,arguments)}),["enter"]))},null,544),[[r["A"],e.inputText]]),Object(r["f"])(s,{class:"icon",icon:["fas","paper-plane"],id:"testAddApp",onClick:e.dialog},null,8,["onClick"])])])])})),F=n("1da1"),J=n("bee2"),K=(n("96cf"),n("ac1f"),n("5319"),n("caad"),n("159b"),n("d81d"),function(e){Object(v["a"])(n,e);var t=Object(m["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.apply(this,arguments),e.inputText="",e.messagesList=[],e.replaceTextWrap=function(e){return e.replace(/\n/g,"<br/>")},e.scrollToBottom=function(){setTimeout((function(){var e=document.getElementById("content");e&&(e.scrollTop=e.scrollHeight)}),250)},e.findUpClassName=function(e,t){var n=e;while(n.parentNode)if(n=n.parentNode,Array.prototype.includes.call(n.classList,t))return n;return null},e.carouselArrowLeft=function(t){var n=e.findUpClassName(t.target,"carousel-box"),r=0;while(r+290<n.scrollLeft)r+=290;e.animalScrollX(n,r)},e.carouselArrowRight=function(t){var n=e.findUpClassName(t.target,"carousel-box"),r=0;while(r<=n.scrollLeft)r+=290;e.animalScrollX(n,r)},e.animalScrollX=function(e,t){for(var n=e.scrollLeft,r=n<t?1:-1,o=t-n>0?t-n:n-t,c=0;c<o;c+=1)setTimeout((function(){e.scrollLeft+=r}),c)},e}return Object(J["a"])(n,[{key:"dialog",value:function(){var e=Object(F["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.inputText,!t){e.next=6;break}return this.inputText="",this.addUserMessage(t),e.next=6,this.sendMessage(t);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"sendMessage",value:function(){var e=Object(F["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.axios({method:"post",url:"https://54302a7f-ff69-4940-83ee-c12be80801f6.mock.pstmn.io/message?text=".concat(t)});case 2:n=e.sent,r=n.data,console.log("🚀 ~ file: index.vue ~ line 66 ~ Home ~ sendMessage ~ botMessages",r),this.addBotMessages(r);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"addUserMessage",value:function(e){this.messagesList.push({role:"user",text:e}),this.scrollToBottom()}},{key:"addBotMessages",value:function(e){var t=this;e.forEach((function(e){switch(e.type){case"text":t.messagesList.push({role:"bot",type:"text",text:t.replaceTextWrap(e.text)});break;case"image":t.messagesList.push({role:"bot",type:"image",imageUrl:e.imageUrl,previewImageUrl:e.previewImageUrl});break;case"video":t.messagesList.push({role:"bot",type:"video",videoUrl:e.videoUrl,previewImageUrl:e.previewImageUrl});break;case"audio":t.messagesList.push({role:"bot",type:"audio",audioUrl:e.audioUrl});break;case"button":t.messagesList.push({role:"bot",type:"button",text:t.replaceTextWrap(e.text),buttons:e.buttons});break;case"carousel":t.messagesList.push({role:"bot",type:"carousel",columns:e.columns.map((function(e){return{title:e.title,imageUrl:e.imageUrl,text:t.replaceTextWrap(e.text),buttons:e.buttons}}))});break;default:break}})),this.scrollToBottom()}},{key:"clickButton",value:function(e){switch(e.type){case"postback":this.addUserMessage(e.title);break;case"url":window.open(e.url);break;case"phone":window.open("tel://".concat(e.number));break;default:break}}},{key:"installPWA",value:function(){var e=Object(F["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("🚀 ~ installPWA"),!this.deferredPrompt){e.next=9;break}return this.deferredPrompt.prompt(),e.next=5,this.deferredPrompt.userChoice;case 5:t=e.sent,console.log(t.outcome),"dismissed"===t.outcome?console.log("User cancelled home screen install"):console.log("User added to home screen"),this.deferredPrompt=null;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(O["b"]));K=Object(g["a"])([Object(O["a"])({created:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.sendMessage("hello");case 2:e.addBotMessages([{type:"text",text:"可以輸入以下文字，會顯示不同的回覆"},{type:"image",imageUrl:"example.png",previewImageUrl:"example.png"}]),window.addEventListener("beforeinstallprompt",(function(t){return console.log("beforeinstallprompt fired"),t.preventDefault(),e.deferredPrompt=t,!1}));case 4:case"end":return t.stop()}}),t)})))()},components:{}})],K);var V=K;n("806a");V.render=D,V.__scopeId="data-v-31d9fa16";var q=V,z=[{path:"/",name:"Index",component:q}],G=Object(x["a"])({history:Object(x["b"])("/chatbot/"),routes:z}),Q=G;n("a0d8");c["c"].add(a["a"]),c["c"].add(s["a"]),c["c"].add(i["a"]),Object(r["c"])(y).component("FontAwesomeIcon",o["a"]).use(d.a,u.a).use(Q).mount("#app")},f0a4:function(e,t,n){}});
//# sourceMappingURL=app.a3df3b46.js.map