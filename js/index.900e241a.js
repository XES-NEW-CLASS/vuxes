(function(e){function t(t){for(var r,o,a=t[0],s=t[1],u=t[2],d=0,l=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&l.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);h&&h(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={index:0},i={index:0},c=[];function a(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-28c696e0":"53a65289","chunk-2d0a3986":"26713356","chunk-2d0a5522":"ccaa06f1","chunk-2d0b289c":"05848983","chunk-2d0b6355":"5f1e924a","chunk-2d0b9027":"242c1168","chunk-2d0cc9d7":"481ea8da","chunk-2d0d6b8b":"6bb8a0e8","chunk-2d0d762a":"ad3f075d","chunk-2d0d7e71":"e524b714","chunk-2d0ddf85":"fb168a8c","chunk-2d0df484":"a750ba53","chunk-2d213c8d":"b86accd4","chunk-2d21eeba":"e23f4fde","chunk-2d2261b2":"10c93df7"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-28c696e0":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-28c696e0":"5bbb643b","chunk-2d0a3986":"31d6cfe0","chunk-2d0a5522":"31d6cfe0","chunk-2d0b289c":"31d6cfe0","chunk-2d0b6355":"31d6cfe0","chunk-2d0b9027":"31d6cfe0","chunk-2d0cc9d7":"31d6cfe0","chunk-2d0d6b8b":"31d6cfe0","chunk-2d0d762a":"31d6cfe0","chunk-2d0d7e71":"31d6cfe0","chunk-2d0ddf85":"31d6cfe0","chunk-2d0df484":"31d6cfe0","chunk-2d213c8d":"31d6cfe0","chunk-2d21eeba":"31d6cfe0","chunk-2d2261b2":"31d6cfe0"}[e]+".css",i=s.p+r,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var u=c[a],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===i))return t()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){u=l[a],d=u.getAttribute("data-href");if(d===r||d===i)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],h.parentNode.removeChild(h),n(c)},h.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=a(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(h);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}i[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var h=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("c31f")},"0b0e":function(e,t,n){"use strict";var r=n("b04c"),o=n.n(r);o.a},"2d1a":function(e,t,n){var r={"./button-demo.vue":"f232","./message-test-demo.vue":"c49a","./popover-demo.vue":"fdfb"};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id="2d1a"},"2f2c":function(e,t,n){"use strict";var r=n("bc4c"),o=n.n(r);o.a},"3b86":function(e,t,n){},"4f53":function(e,t,n){var r={"./bem.md":["7992","chunk-2d0d7e71"],"./button.md":["039f","chunk-2d0a3986"],"./contribute.md":["1bd2","chunk-2d0b6355"],"./exploit-component.md":["88f4","chunk-2d0df484"],"./exploit-doc.md":["30b6","chunk-2d0b9027"],"./file-structure.md":["adc7","chunk-2d213c8d"],"./git-standard.md":["2514","chunk-2d0b289c"],"./install.md":["d82b","chunk-2d21eeba"],"./introduce.md":["09cf","chunk-2d0a5522"],"./logs.md":["4f4c","chunk-2d0cc9d7"],"./message.md":["771e","chunk-2d0d762a"],"./popover.md":["e6f1","chunk-2d2261b2"],"./start.md":["843f","chunk-2d0ddf85"]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="4f53",e.exports=o},5676:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDMtMDVUMTE6MTU6MjIrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTAzLTA1VDE5OjIzOjI5KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTAzLTA1VDE5OjIzOjI5KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU5ZTEzZjFkLTllYWQtNDI2OS1iZGQxLTgzNTZjMTdiMjQ2MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpjOTM2NDU0YS05ZWRjLTRhODAtYjZhYS0xMmUyNDljNTVmMjUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjOTM2NDU0YS05ZWRjLTRhODAtYjZhYS0xMmUyNDljNTVmMjUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmM5MzY0NTRhLTllZGMtNGE4MC1iNmFhLTEyZTI0OWM1NWYyNSIgc3RFdnQ6d2hlbj0iMjAyMC0wMy0wNVQxMToxNToyMiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5ZTEzZjFkLTllYWQtNDI2OS1iZGQxLTgzNTZjMTdiMjQ2MSIgc3RFdnQ6d2hlbj0iMjAyMC0wMy0wNVQxOToyMzoyOSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+MnyNWgAABetJREFUeJztml+IXFcdxz/n3D/zJ7s7szvb3c10m6ZJbTZpNrQUfGhrRVDbh1KQBiki6EvxoVB9EEoepCDE+Fz8g+CDgqIvgpYKig/inxiNAdO01WjTtM1uJtPJZrJ/5s+de+ecnw+z6yZrN1nl3rkDmS9cGO6cmd/3fO7vnPM7914lItzJ0mkbSFtDAGkbSFtDAGkbSFtDAGkbSFt3LIC3mqEGUMNC6A6Xm7aBG9W+8vsZWouztCrl3PxXX+1HzL4BCD44NUlQnZH2wixBpUz7cpl2Zbd0qjMEV8p0rheJgA5ztDnfHr3vYm7vs28m7StxAO0zL7wo5773JXyjiZjDAAIoegNQA8764a078pnDyQVJe4N+ZMDahf0E5hB5eh1Ut2lvNz4oe6tmcSl5AP74Mj4DO90mbkt5nmEH13JjRPRbiWeAbbUyt4siQP5GAhrIdseSddZTbACuv/LtT5v33tuLgDSbI9Js5e1VfVfuU389lDkCdmX732YV/Lj7IL8MH2JWLbC7W2e+ml+62xP/YFGFcXn8MMUGoP2DH37BLl7+nJ6cBNcB7WGbYxCGt4yiAEfBr7v7+Un7SdAVsCscPl9YeGSxeyyg7u9yaY14ujHqqVWtsEdK7rmjB4p/j8N3bACcPfdcUq6HKqxnrijI5MF12ckcMKWa4FRBXQWaTPuGrMuJdiQsh3A16NK1cLlpWGh6Lx09wGABiFtagash4ygywMb6qYDpnK7GFSdhAAocg/LoTWzRNs0ErO2AGKALEmGxqO2Khhj3b8muPCIgDrigHHpDwdLrwNYDWf+yVyo6aCTOnm6j5DJACWqkTefkHJ3fjuMcPPz1/NeOnVACEnVd6F14AcjIyPw73r6H33FOzeYsChh1SzTM8of8b7w2Ex0CyjOYa3nMxRG8idkoVzyyXX3fKhQol71VZnM+gqJt1jASobYkqQIkxsxNdg6wCpWN0KUQlWu0btU0DJdty7ZodJ3/nNva+c3zO1lXdqbBWQUcjXE11tnstCiFthZl5KbUH8wMsPaWpm43dHU2Y6OcweRvBmCs4DeCzS10zIoNgF1amjQXL6KKBVAa5TrgeSjPR9bWkCDIbv3NK9//0Sdz2Wygi46VP4X3f/4vAaqwCSC70qR2aA9nP/sobhChbPw75NgAjHzzxDHz/vvflWZrxNbrE7KyMibLy0VZWR2Xf/7rAZXJ3FTTnzpztnj6b298tFQsHg8mHOZfj5j7c4fGxCaAXbUVdNfCc49hHI02ltAK7a78F8z/V7EBGH3i8Ro8Xttp+4zvB5MT48eLY6NEBQdnPGK1FNApKJQBbSCfs7RUjkuNLl5oyFtLZPjOqK8acfkeiElQNDgReC0hKmjMLkWYUywWPPS8/8LzD+TOlDD1CUfqY75anZ8Z7cYVeyAAeGtC/YCmOZ2nU9R0c2Cyig+CiIcPZs998b786aRipwbgxqXMCYTmlGb1XtAhqK6gjeAHgjSSvTWYagZsrGrigBsI7pY6UW3sGxLUgN6q7J8GHoAVSdTjwAGwIgSdDvXlFaq1pZfb7SCfZLwU54De4LbW0gkj2kFAt2vIZjLPT4yP1fffe0916mOl2jNPfuJCki5SA9DphP6V2tLLWjuVu0rF2sGP7KvevXuqUp6Zrjx4YH9fngoBICKpHa/95nf70owvIsMXJPo+BOrfOnpcLi/O6r33v60K5QrF3VVVmF1Uo1O1scMfj+1u707V9wxYenHypD177VE1Rm8e1IAHssp59+lnXp34yi9e6qefvmeAKpQravoaatxfPyNgLXTMHO3rf+y3nwGoAxRop/fuQGYktm3uTjUAANLVEEC/A0r90h5p0HsMlsBNzv9VfQfgPPLsz3Qpe1aumvOyECL1sPcIHejXe0E3KrVCaOXkTx+yb//hCXvh5GNy6fUj9k3mnKfmfl76xj8+008fA1EJrr77hm9Ov/a0KuRbxae+/Kt+xh4IAGlquAqkbSBtDQGkbSBtDQGkbSBtDQGkbSBtDQGkbSBt/RuESu1/wuUyYAAAAABJRU5ErkJggg=="},6170:function(e,t,n){"use strict";var r=n("3b86"),o=n.n(r);o.a},"9dac":function(e,t,n){},b04c:function(e,t,n){},b3f7:function(e,t,n){},bc4c:function(e,t,n){},c31f:function(e,t,n){"use strict";n.r(t);n("4160"),n("d81d"),n("b0c0"),n("d3b7"),n("159b"),n("ddb0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("mainHeader",{staticClass:"header"}),n("router-view")],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"page-header",style:"index"===e.$route.name?"box-shadow:none":"box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)"},[e._m(0)])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-container"},[r("a",{attrs:{href:"https://github.com/XES-NEW-CLASS/vuxes",target:"__blank"}},[r("img",{staticClass:"logo",attrs:{src:n("5676"),alt:""}}),r("span",{staticClass:"name"},[e._v("Vuxes")])])])}],s={data:function(){return{}}},u=s,d=(n("0b0e"),n("2877")),l=Object(d["a"])(u,c,a,!1,null,null,null),h=l.exports,f={name:"app",components:{mainHeader:h}},p=f,m=(n("e780"),Object(d["a"])(p,o,i,!1,null,null,null)),b=m.exports,v=n("ca83"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"docs-demo-wrapper"},[n("div",{staticClass:"demo-container",style:{height:e.isExpand?"auto":"0"}},[n("div",{attrs:{span:"14"}},[n("div",{staticClass:"docs-demo docs-demo--expand"},[n("div",{staticClass:"highlight-wrapper"},[e._t("highlight")],2)])])]),n("span",{staticClass:"docs-trans docs-demo__triangle",class:{hover:e.hovering},on:{mouseenter:function(t){e.hovering=!0},mouseleave:function(t){e.hovering=!1},click:e.toggle}},[e._v(" "+e._s(e.isExpand?"隐藏代码":"显示代码")+" ")])])},y=[],k={data:function(){return{isExpand:!1,hovering:!1}},computed:{iconClass:function(){return this.isExpand?"docs-trans-caret-top":"docs-trans-caret-bottom"}},methods:{toggle:function(){this.isExpand=!this.isExpand}}},w=k,A=(n("2f2c"),Object(d["a"])(w,g,y,!1,null,null,null)),x=A.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:e.bem([e.type]),attrs:{type:"button"}},[e._t("default")],2)},E=[],N=(n("a9e3"),n("b64b"),"__"),C="--",M=function(e,t,n){return t?e+n+t:e},S=function e(t,n){if("string"===typeof n)return M(t,n,C);if(Array.isArray(n))return n.map((function(n){return e(t,n)}));var r={};return n&&Object.keys(n).forEach((function(e){r[t+C+e]=n[e]})),r},D={methods:{bem:function(e,t){var n=this.$options.name;return e&&"string"!==typeof e&&(t=e,e=""),e=M(n,e,N),t?[e,S(e,t)]:e}}},O=(n("ac1f"),n("5319"),function(e,t){for(var n=0;n<t.length;n++)if(e===t[n])return!0;return!1}),L=function(e){var t=/-(\w)/g;return e.replace(t,(function(e,t){return t.toUpperCase()}))},P=function(e){return void 0!==e&&null!==e},T=function(){return Math.floor(1e4*Math.random())},G="x-",I={prefix:G};function Z(e){var t=this.name;e.component(t,this),e.component(L("-".concat(t)),this)}function W(){return[]}function z(e){Object.keys(e).forEach((function(t){e[t]===Array?e[t]={type:Array,default:W}:e[t]===Number&&(e[t]={type:Number,default:0})}))}var _=function(e){return e.name=I.prefix+e.name,e.install=e.install||Z,e.mixins=e.mixins||[],e.mixins.push(D),e.methods=e.methods||{},e.methods.isDef=P,e.props&&z(e.props),e},R=_({name:"button",props:{type:{validator:function(e){return O(e,["default","primary","info","success","warning","danger"])},type:String,default:"default"}}}),U=R,Y=Object(d["a"])(U,j,E,!1,null,null,null),B=Y.exports,V=B,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"message-move",appear:""},on:{"after-leave":e.close}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],class:e.bem()},[n("span",[n("i",{class:e.iconType[e.type]}),e._v(e._s(e.content))])])])},J=[],X={name:"message-test",data:function(){return{visible:!0,iconType:{info:"x-icon-info info",error:"x-icon-x-circle error",success:"x-icon-check-circle success",warning:"x-icon-alert-triangle warning",loading:"x-icon-loader loading"},time:this.duration}},props:{content:String,type:String,duration:{type:Number,default:1.5}},mounted:function(){this.duration&&setTimeout(this.hide,1e3*this.duration)},methods:{hide:function(){this.visible=!1},close:function(){this.visible||this.$emit("onClose")}}},H=X,Q=Object(d["a"])(H,F,J,!1,null,null,null),K=Q.exports,$=function(e,t,n){e.name=I.prefix+e.name,e.mixins=e.mixins||[],e.mixins.push(D);var o=new r["a"]({render:function(n){return n(e,{props:t})}}).$mount(),i=n||document.body;i.appendChild(o.$el);var c=o.$children[0];return c.remove=function(){i.removeChild(o.$el),o.$destroy()},c},q=(n("25f0"),function(e){return"[object Number]"===Object.prototype.toString.call(e)}),ee=function(e){return"[object String]"===Object.prototype.toString.call(e)};function te(e,t,n){if(ee(e)||""!==e){var r={content:e,type:t};q(n)&&(r.duration=n);var o=$(K,r);return o.$on("onClose",o.remove),o.hide.bind(this)}}var ne=Object.keys(K.data().iconType),re={};ne.forEach((function(e){re[e]=function(t,n){return te(t,e,n)}}));var oe=re,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("transition",{attrs:{name:e.transition},on:{"after-enter":e.handleAfterEnter,"after-leave":e.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.disabled&&e.showPopper,expression:"!disabled && showPopper"}],ref:"popper",staticClass:"x-popover x-popper",class:[e.popperClass,e.content&&"x-popover--plain"],style:{width:e.width+"px",left:"100px"},attrs:{role:"tooltip",id:e.tooltipId,"aria-hidden":e.disabled||!e.showPopper?"true":"false"}},[e.title?n("div",{staticClass:"x-popover__title",domProps:{textContent:e._s(e.title)}}):e._e(),e._t("default",[e._v(e._s(e.content))])],2)]),e._t("reference")],2)},ce=[],ae=(n("c975"),n("9129"),{data:function(){return{showPopper:!1}},props:{value:Boolean},watch:{value:{immediate:!0,handler:function(e){console.log(1,e),this.showPopper=e,this.$emit("input",e)}}}}),se=(n("4de4"),n("caad"),n("2532"),n("466d"),n("1276"),n("53ca"),r["a"].prototype.$isServer),ue=(se||Number(document.documentMode),function(e){return(e||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")}),de=function(){return!se&&document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)}}(),le=function(){return!se&&document.removeEventListener?function(e,t,n){e&&t&&e.removeEventListener(t,n,!1)}:function(e,t,n){e&&t&&e.detachEvent("on"+t,n)}}();function he(e,t){if(!e||!t)return!1;if(-1!==t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}function fe(e,t){if(e){for(var n=e.className,r=(t||"").split(" "),o=0,i=r.length;o<i;o++){var c=r[o];c&&(e.classList?e.classList.add(c):he(e,c)||(n+=" "+c))}e.classList||(e.className=n)}}function pe(e,t){if(e&&t){for(var n=t.split(" "),r=" "+e.className+" ",o=0,i=n.length;o<i;o++){var c=n[o];c&&(e.classList?e.classList.remove(c):he(e,c)&&(r=r.replace(" "+c+" "," ")))}e.classList||(e.className=ue(r))}}var me=_({name:"popover",mixins:[ae],props:{transition:{type:String,default:"fade-in-linear"},popperClass:String,content:String,disabled:Boolean,width:{type:[String,Number],validator:function(e){return Number.isNaN(+e)?150:e}},title:String,reference:{},popper:{},trigger:{type:String,default:"click",validator:function(e){return["click","focus","hover","manual"].indexOf(e)>=0}},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:200},visibleArrow:{default:!0},arrowOffset:{type:Number,default:0},tabindex:{type:Number,default:0}},data:function(){return{referenceElm:null,_timer:null}},methods:{handleAfterEnter:function(){this.$emit("after-enter")},handleAfterLeave:function(){this.$emit("after-leave")},doToggle:function(){this.showPopper=!this.showPopper},doShow:function(){this.showPopper=!0},doClose:function(){this.showPopper=!1},handleFocus:function(){fe(this.referenceElm,"focusing"),"click"!==this.trigger&&"focus"!==this.trigger||(this.showPopper=!0)},handleBlur:function(){pe(this.referenceElm,"focusing"),"click"!==this.trigger&&"focus"!==this.trigger||(this.showPopper=!1)},handleClick:function(){pe(this.referenceElm,"focusing")},handleKeydown:function(e){27===e.keyCode&&"manual"!==this.trigger&&this.doClose()},handleDocumentClick:function(e){var t=this.reference||this.$refs.reference,n=this.popper||this.$refs.popper;if(!t){var r=this.$slots.reference;r&&r[0]&&(t=this.referenceElm=r[0].elm)}this.$el&&t&&!this.$el.contains(e.target)&&!t.contains(e.target)&&n&&!n.contains(e.target)&&(this.showPopper=!1)},handleMouseEnter:function(){var e=this;clearTimeout(this._timer),this.openDelay?this._timer=setTimeout((function(){e.showPopper=!0}),this.openDelay):this.showPopper=!0},handleMouseLeave:function(){var e=this;clearTimeout(this._timer),this.closeDelay?this._timer=setTimeout((function(){e.showPopper=!1}),this.closeDelay):this.showPopper=!1},cleanTimer:function(){(this.openDelay||this.closeDelay)&&clearTimeout(this._timer)}},computed:{tooltipId:function(){return"x-popover-".concat(T())}},watch:{showPopper:function(e){this.disabled||(e?this.$emit("show"):this.$emit("hide"))}},mounted:function(){var e=this,t=this.referenceElm=this.reference||this.$refs.reference,n=this.popper||this.$refs.popper;if(!t){var r=this.$slots.reference;r&&r[0]&&(t=this.referenceElm=r[0].elm)}t&&(fe(t,"el-popover__reference"),t.setAttribute("aria-describedby",this.tooltipId),t.setAttribute("tabindex",this.tabindex),n.setAttribute("tabindex",0),"click"!==this.trigger&&(de(t,"focusin",(function(){e.handleFocus();var n=t.__vue__;n&&"function"===typeof n.focus&&n.focus()})),de(n,"focusin",this.handleFocus),de(t,"focusout",this.handleBlur),de(n,"focusout",this.handleBlur)),de(t,"keydown",this.handleKeydown),de(t,"click",this.handleClick)),"click"===this.trigger?(de(t,"click",this.doToggle),de(document,"click",this.handleDocumentClick)):"hover"===this.trigger?(de(t,"mouseenter",this.handleMouseEnter),de(n,"mouseenter",this.handleMouseEnter),de(t,"mouseleave",this.handleMouseLeave),de(n,"mouseleave",this.handleMouseLeave)):"focus"===this.trigger&&(this.tabindex<0&&console.warn("[Vuxes Warn][Popover]a negative taindex means that the element cannot be focused by tab key"),t.querySelector("input, textarea")?(de(t,"focusin",this.doShow),de(t,"focusout",this.doClose)):(de(t,"mousedown",this.doShow),de(t,"mouseup",this.doClose)))},beforeDestroy:function(){this.cleanTimer()},destroyed:function(){var e=this.reference;le(e,"click",this.doToggle),le(e,"mouseup",this.doClose),le(e,"mousedown",this.doShow),le(e,"focusin",this.doShow),le(e,"focusout",this.doClose),le(e,"mousedown",this.doShow),le(e,"mouseup",this.doClose),le(e,"mouseleave",this.handleMouseLeave),le(e,"mouseenter",this.handleMouseEnter),le(document,"click",this.handleDocumentClick)}}),be=me,ve=Object(d["a"])(be,ie,ce,!1,null,null,null),ge=ve.exports,ye=ge,ke="0.0.1",we=[V,oe,ye],Ae=function(e){we.forEach((function(t){e.use(t),e.prototype.$messageTest=oe}))};"undefined"!==typeof window&&window.Vue&&Ae(window.Vue);var xe={install:Ae,version:ke};n("b3f7");r["a"].component("demo-block",x),r["a"].use(xe);var je=[];function Ee(e){e.keys().forEach((function(t){je.push(e(t).default)}))}Ee(n("2d1a")),je.map((function(e){return r["a"].component(e.name,e)})),window.addEventListener("unhandledrejection",(function(e){return e.preventDefault()})),r["a"].config.productionTip=!1,new r["a"]({router:v["a"],render:function(e){return e(b)}}).$mount("#app")},c49a:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-block"},[n("span",{staticClass:"btn",on:{click:e.info}},[e._v("测试message")])])},o=[],i={name:"x-message-test-demo",methods:{info:function(){this.$messageTest.info("message 消息")}}},c=i,a=(n("6170"),n("2877")),s=Object(a["a"])(c,r,o,!1,null,"13886e1c",null);t["default"]=s.exports},ca83:function(e,t,n){"use strict";n("d3b7");var r=n("2b0e"),o=n("8c4f"),i=(n("99af"),n("4de4"),n("4160"),n("b0c0"),n("b64b"),n("159b"),n("ee95")),c=[];Object.keys(i).forEach((function(e){c=c.concat(i[e])}));var a=function e(t){t.forEach((function(t){t.children?(e(t.children),c=c.concat(t.children)):"index"===t.name?t.component=function(){return n.e("chunk-2d0a5522").then(n.bind(null,"09cf"))}:t.component=function(){return n("4f53")("./"+t.name+".md")}}))};a(c);var s=c.filter((function(e){return e.path})),u=s;r["a"].use(o["a"]);var d=[{path:"/",redirect:"/doc/index"},{name:"doc",path:"/doc",redirect:"/doc/index",component:function(){return n.e("chunk-28c696e0").then(n.bind(null,"9cf0"))},children:u},{name:"post",path:"/post",component:function(){return n.e("chunk-2d0d6b8b").then(n.bind(null,"7480"))}}];t["a"]=new o["a"]({routes:d})},e780:function(e,t,n){"use strict";var r=n("9dac"),o=n.n(r);o.a},ee95:function(e){e.exports=JSON.parse('{"引导":[{"name":"index","path":"index"},{"name":"introduce","path":"introduce","desc":"介绍"},{"name":"install","path":"install","desc":"安装"},{"name":"start","path":"start","desc":"快速上手"},{"name":"logs","path":"logs","desc":"更新日志"}],"组件":[{"desc":"基础","children":[{"desc":"Button 按钮","name":"button","path":"button"}]},{"desc":"布局","children":[{"desc":"开发中...","name":"","path":""}]},{"desc":"导航","children":[{"desc":"开发中...","name":"","path":""}]},{"desc":"表单","children":[{"desc":"开发中...","name":"","path":""}]},{"desc":"视图","children":[{"desc":"Message 全局提示","name":"message","path":"message"}]},{"desc":"图表","children":[{"desc":"开发中...","name":"","path":""}]},{"desc":"其他","children":[{"desc":"Popover","name":"popover","path":"popover"}]}],"开发指南":[{"desc":"如何开发","children":[{"desc":"开发组件","name":"exploit-component","path":"exploit-component"},{"desc":"开发文档","name":"exploit-doc","path":"exploit-doc"}]},{"name":"file-structure","path":"file-structure","desc":"项目结构"},{"name":"git-standard","path":"git-standard","desc":"Git规范"},{"name":"bem","path":"bem","desc":"Bem规范"}]}')},f232:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-block"},[n("x-button",{staticClass:"mr-10"},[e._v("默认按钮")]),n("x-button",{staticClass:"mr-10",attrs:{type:"primary"}},[e._v("主要按钮")]),n("x-button",{staticClass:"mr-10",attrs:{type:"success"}},[e._v("成功按钮")]),n("x-button",{staticClass:"mr-10",attrs:{type:"info"}},[e._v("信息按钮")]),n("x-button",{staticClass:"mr-10",attrs:{type:"warning"}},[e._v("警告按钮")]),n("x-button",{attrs:{type:"danger"}},[e._v("危险按钮")])],1)},o=[],i={name:"x-button-demo"},c=i,a=n("2877"),s=Object(a["a"])(c,r,o,!1,null,null,null);t["default"]=s.exports},fdfb:function(e,t,n){"use strict";n.r(t);var r=function(e,t){var n=t._c;return n("div",{staticClass:"demo-block"},[n("x-popover",{attrs:{title:"测试用",content:"测试文案",trigger:"hover"}},[n("x-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("hover 激活")])],1),n("x-popover",{attrs:{title:"测试用",content:"测试文案",trigger:"click"}},[n("x-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("click 激活")])],1),n("x-popover",{attrs:{title:"测试用",content:"测试文案",trigger:"focus"}},[n("x-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("focus 激活")])],1),n("x-popover",{attrs:{title:"测试用",content:"测试文案",trigger:"manual"},model:{value:t.isShowManualPopper,callback:function(e){t.isShowManualPopper=e},expression:"isShowManualPopper"}},[n("x-button",{attrs:{slot:"reference"},on:{click:function(e){t.isShowManualPopper=!t.isShowManualPopper}},slot:"reference"},[t._v("manual 激活")])],1)],1)},o=[],i={name:"x-popover-demo",data:function(){return{isShowManualPopper:!1}}},c=i,a=n("2877"),s=Object(a["a"])(c,r,o,!0,null,null,null);t["default"]=s.exports}});