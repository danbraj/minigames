(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["memory"],{"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),c=r("17c2"),s=r("9112");for(var a in i){var o=n[a],u=o&&o.prototype;if(u&&u.forEach!==c)try{s(u,"forEach",c)}catch(f){u.forEach=c}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),c=r("ae40"),s=i("forEach"),a=c("forEach");t.exports=s&&a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),c=r("2d00"),s=i("species");t.exports=function(t){return c>=51||!n((function(){var e=[],r=e.constructor={};return r[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},4837:function(t,e,r){"use strict";r("98ae")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),i=r("5899"),c="["+i+"]",s=RegExp("^"+c+c+"*"),a=RegExp(c+c+"*$"),o=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(s,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:o(1),end:o(2),trim:o(3)}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),c=r("b622"),s=c("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[s],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"6bb2":function(t,e,r){},7156:function(t,e,r){var n=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var c,s;return i&&"function"==typeof(c=e.constructor)&&c!==r&&n(s=c.prototype)&&s!==r.prototype&&i(t,s),t}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),c=r("5c6c");t.exports=function(t,e,r){var s=n(e);s in t?i.f(t,s,c(0,r)):t[s]=r}},"98ae":function(t,e,r){},"99af":function(t,e,r){"use strict";var n=r("23e7"),i=r("d039"),c=r("e8b5"),s=r("861d"),a=r("7b0b"),o=r("50c4"),u=r("8418"),f=r("65f0"),d=r("1dde"),l=r("b622"),h=r("2d00"),b=l("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",g=h>=51||!i((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),y=d("concat"),O=function(t){if(!s(t))return!1;var e=t[b];return void 0!==e?!!e:c(t)},j=!g||!y;n({target:"Array",proto:!0,forced:j},{concat:function(t){var e,r,n,i,c,s=a(this),d=f(s,0),l=0;for(e=-1,n=arguments.length;e<n;e++)if(c=-1===e?s:arguments[e],O(c)){if(i=o(c.length),l+i>p)throw TypeError(v);for(r=0;r<i;r++,l++)r in c&&u(d,l,c[r])}else{if(l>=p)throw TypeError(v);u(d,l++,c)}return d.length=l,d}})},"9a0b":function(t,e,r){"use strict";r.r(e);var n=r("7a23"),i=Object(n["C"])("data-v-f877ecc2");Object(n["s"])("data-v-f877ecc2");var c={class:"nav"},s={class:"nav__wrapper"},a=Object(n["g"])("svg",{class:"feather"},[Object(n["g"])("use",{"xlink:href":"/res/feather-sprite.svg#arrow-left"})],-1),o=Object(n["g"])("h1",{class:"nav__title"},"Memory",-1),u={class:"nav__panel"},f={key:0,class:"feather"},d=Object(n["g"])("use",{"xlink:href":"/res/feather-sprite.svg#chevron-down"},null,-1),l={key:1,class:"feather"},h=Object(n["g"])("use",{"xlink:href":"/res/feather-sprite.svg#chevrons-up"},null,-1),b=Object(n["g"])("svg",{class:"feather"},[Object(n["g"])("use",{"xlink:href":"/res/feather-sprite.svg#refresh-cw"})],-1);Object(n["q"])();var p=i((function(t,e,r,p,v,g){var y=Object(n["w"])("router-link"),O=Object(n["w"])("card");return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["g"])("div",c,[Object(n["g"])("div",s,[Object(n["g"])(y,{class:"nav__button",to:"/",tag:"button","aria-label":"Powrót"},{default:i((function(){return[a]})),_:1}),o,Object(n["g"])("div",u,[Object(n["g"])("span",null,"Poziom "+Object(n["y"])(v.isHard?"trudny":"normalny"),1)]),Object(n["g"])("button",{class:"nav__button",onClick:e[1]||(e[1]=function(t){return g.toggleHardDifficulty()}),tag:"button","aria-label":"Ustawienia"},[v.isHard?(Object(n["p"])(),Object(n["d"])("svg",f,[d])):(Object(n["p"])(),Object(n["d"])("svg",l,[h]))]),Object(n["g"])("button",{class:"nav__button",onClick:e[2]||(e[2]=function(t){return g.restart()}),tag:"button","aria-label":"Jeszsze raz"},[b])])]),Object(n["g"])("div",{class:["game",{busy:v.isBusy}]},[v.cooldown>0?(Object(n["p"])(),Object(n["d"])("progress",{key:0,class:"indicator",value:v.cooldown,max:"25"},null,8,["value"])):Object(n["e"])("",!0),(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(v.cards,(function(t,e){return Object(n["p"])(),Object(n["d"])(O,{key:e,card:t,onClick:function(t){return g.flip(e)},class:{"card--small":v.isHard}},null,8,["card","onClick","class"])})),128)),0==v.cardsLeft?(Object(n["p"])(),Object(n["d"])("button",{key:1,class:"btn--again",onClick:e[3]||(e[3]=function(){return g.restart.apply(g,arguments)})},"Jeszcze raz")):Object(n["e"])("",!0)],2)])})),v=(r("99af"),r("4160"),r("d81d"),r("fb6a"),r("159b"),Object(n["C"])("data-v-6dbfd7fd"));Object(n["s"])("data-v-6dbfd7fd");var g=Object(n["g"])("div",{class:"card__back"},null,-1);Object(n["q"])();var y=v((function(t,e,r,i,c,s){var a=Object(n["w"])("Icon");return Object(n["p"])(),Object(n["d"])("div",{class:["card",{"card--flipped":r.card.isFlipped,"card--matched":r.card.isMatched}]},[Object(n["g"])(a,{class:"card__front",id:r.card.handle},null,8,["id"]),g],2)}));function O(t,e,r,i,c,s){return Object(n["p"])(),Object(n["d"])("svg",null,[Object(n["g"])("use",{href:s.svgUrl},null,8,["href"])])}r("a9e3");var j={props:{id:Number},computed:{svgUrl:function(){return"".concat(this.$store.getters.currentAssetsUrl,"#").concat(this.id<18?this.id:this.id-18)}}};j.render=O;var m=j,S={components:{Icon:m},props:{card:Object}};r("f75e");S.render=y,S.__scopeId="data-v-6dbfd7fd";var L=S,E=[0,1,2,3,4,5,6,7,8,9,10,11],w=[12,13,14,15,16,17],C=[6,12,18],A={components:{Card:L},data:function(){return{difficulty:1,cards:[],cardsCount:-1,cardsLeft:-1,first:-1,count:-1,isBusy:!0,cooldown:0,isHard:!1}},created:function(){this.shuffle(),this.cardsCount=2*C[this.difficulty],this.cardsLeft=this.cardsCount,this.isBusy=!1},methods:{flip:function(t){var e=this;if(!this.cards[t].isFlipped&&!this.isBusy)if(this.cards[t].isFlipped=!0,this.count++,0==this.count)this.first=t;else if(1==this.count){this.isBusy=!0;var r=this.first,n=t;if(r!=n&&this.cards[r].handle==this.cards[n].handle)this.cards[r].isMatched=!0,this.cards[n].isMatched=!0,this.isBusy=!1,this.cardsLeft-=2;else var i=function(){e.cooldown>=25?(e.cards[r].isFlipped=!1,e.cards[n].isFlipped=!1,e.isBusy=!1,e.cooldown=0,clearInterval(c)):e.cooldown++},c=setInterval(i,75);this.count=-1,this.first=-1}},restart:function(){var t=this;this.isBusy||(this.isBusy=!0,this.cards.forEach((function(t){t.isFlipped=!1,t.isMatched=!1})),this.count=-1,this.first=-1,setTimeout((function(){t.shuffle()}),670),this.cardsCount=2*C[this.difficulty],this.cardsLeft=this.cardsCount,this.isBusy=!1)},shuffle:function(){var t,e=E;2==this.difficulty?(t=e.concat(w),this.isHard=!0):(t=e.sort((function(){return.5-Math.random()})).slice(0,C[this.difficulty]),this.isHard=!1),this.cards=t.concat(t).sort((function(){return.5-Math.random()})).map((function(t){return{handle:t,isFlipped:!1,isMatched:!1}}))},setDifficulty:function(t){this.isBusy||(this.difficulty=t>=0&&t<3?t:0,this.restart(),this.cards=null)},toggleHardDifficulty:function(){this.isBusy||(this.difficulty=2==this.difficulty?1:2,this.restart(),this.cards=null)}}};r("4837");A.render=p,A.__scopeId="data-v-f877ecc2";e["default"]=A},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,r){"use strict";var n=r("83ab"),i=r("da84"),c=r("94ca"),s=r("6eeb"),a=r("5135"),o=r("c6b6"),u=r("7156"),f=r("c04e"),d=r("d039"),l=r("7c73"),h=r("241c").f,b=r("06cf").f,p=r("9bf2").f,v=r("58a8").trim,g="Number",y=i[g],O=y.prototype,j=o(l(O))==g,m=function(t){var e,r,n,i,c,s,a,o,u=f(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+u}for(c=u.slice(2),s=c.length,a=0;a<s;a++)if(o=c.charCodeAt(a),o<48||o>i)return NaN;return parseInt(c,n)}return+u};if(c(g,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var S,L=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof L&&(j?d((function(){O.valueOf.call(r)})):o(r)!=g)?u(new y(m(e)),r,L):m(e)},E=n?h(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;E.length>w;w++)a(y,S=E[w])&&!a(L,S)&&p(L,S,b(y,S));L.prototype=O,O.constructor=L,s(i,g,L)}},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),c=r("5135"),s=Object.defineProperty,a={},o=function(t){throw t};t.exports=function(t,e){if(c(a,t))return a[t];e||(e={});var r=[][t],u=!!c(e,"ACCESSORS")&&e.ACCESSORS,f=c(e,0)?e[0]:o,d=c(e,1)?e[1]:void 0;return a[t]=!!r&&!i((function(){if(u&&!n)return!0;var t={length:-1};u?s(t,1,{enumerable:!0,get:o}):t[1]=1,r.call(t,f,d)}))}},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),c=r("7b0b"),s=r("50c4"),a=r("65f0"),o=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,f=4==t,d=6==t,l=5==t||d;return function(h,b,p,v){for(var g,y,O=c(h),j=i(O),m=n(b,p,3),S=s(j.length),L=0,E=v||a,w=e?E(h,S):r?E(h,0):void 0;S>L;L++)if((l||L in j)&&(g=j[L],y=m(g,L,O),t))if(e)w[L]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return L;case 2:o.call(w,g)}else if(f)return!1;return d?-1:u||f?f:w}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},d81d:function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").map,c=r("1dde"),s=r("ae40"),a=c("map"),o=s("map");n({target:"Array",proto:!0,forced:!a||!o},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},f75e:function(t,e,r){"use strict";r("6bb2")},fb6a:function(t,e,r){"use strict";var n=r("23e7"),i=r("861d"),c=r("e8b5"),s=r("23cb"),a=r("50c4"),o=r("fc6a"),u=r("8418"),f=r("b622"),d=r("1dde"),l=r("ae40"),h=d("slice"),b=l("slice",{ACCESSORS:!0,0:0,1:2}),p=f("species"),v=[].slice,g=Math.max;n({target:"Array",proto:!0,forced:!h||!b},{slice:function(t,e){var r,n,f,d=o(this),l=a(d.length),h=s(t,l),b=s(void 0===e?l:e,l);if(c(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!c(r.prototype)?i(r)&&(r=r[p],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return v.call(d,h,b);for(n=new(void 0===r?Array:r)(g(b-h,0)),f=0;h<b;h++,f++)h in d&&u(n,f,d[h]);return n.length=f,n}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=memory.b9c5db07.js.map