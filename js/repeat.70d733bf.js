(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["repeat"],{"0d8d":function(t,e,r){},"1dde":function(t,e,r){var n=r("d039"),s=r("b622"),o=r("2d00"),c=s("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"5e62":function(t,e,r){"use strict";r("78e9")},"65f0":function(t,e,r){var n=r("861d"),s=r("e8b5"),o=r("b622"),c=o("species");t.exports=function(t,e){var r;return s(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!s(r.prototype)?n(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"78e9":function(t,e,r){},8418:function(t,e,r){"use strict";var n=r("c04e"),s=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var c=n(e);c in t?s.f(t,c,o(0,r)):t[c]=r}},"99af":function(t,e,r){"use strict";var n=r("23e7"),s=r("d039"),o=r("e8b5"),c=r("861d"),i=r("7b0b"),a=r("50c4"),u=r("8418"),l=r("65f0"),f=r("1dde"),d=r("b622"),h=r("2d00"),b=d("isConcatSpreadable"),v=9007199254740991,O="Maximum allowed index exceeded",p=h>=51||!s((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),j=f("concat"),g=function(t){if(!c(t))return!1;var e=t[b];return void 0!==e?!!e:o(t)},w=!p||!j;n({target:"Array",proto:!0,forced:w},{concat:function(t){var e,r,n,s,o,c=i(this),f=l(c,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?c:arguments[e],g(o)){if(s=a(o.length),d+s>v)throw TypeError(O);for(r=0;r<s;r++,d++)r in o&&u(f,d,o[r])}else{if(d>=v)throw TypeError(O);u(f,d++,o)}return f.length=d,f}})},ae40:function(t,e,r){var n=r("83ab"),s=r("d039"),o=r("5135"),c=Object.defineProperty,i={},a=function(t){throw t};t.exports=function(t,e){if(o(i,t))return i[t];e||(e={});var r=[][t],u=!!o(e,"ACCESSORS")&&e.ACCESSORS,l=o(e,0)?e[0]:a,f=o(e,1)?e[1]:void 0;return i[t]=!!r&&!s((function(){if(u&&!n)return!0;var t={length:-1};u?c(t,1,{enumerable:!0,get:a}):t[1]=1,r.call(t,l,f)}))}},b543:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),s=Object(n["C"])("data-v-47ac4022");Object(n["s"])("data-v-47ac4022");var o={class:"nav"},c={class:"nav__wrapper"},i=Object(n["g"])("svg",{class:"feather"},[Object(n["g"])("use",{"xlink:href":"/res/feather-sprite.svg#arrow-left"})],-1),a=Object(n["g"])("h1",{class:"nav__title"},"Repeat game",-1),u={class:"nav__panel"},l=Object(n["g"])("svg",{class:"feather"},[Object(n["g"])("use",{"xlink:href":"/res/feather-sprite.svg#skip-back"})],-1),f={class:"screen"},d={class:"answers"};Object(n["q"])();var h=s((function(t,e,r,h,b,v){var O=Object(n["w"])("router-link"),p=Object(n["w"])("asset");return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["g"])("div",o,[Object(n["g"])("div",c,[Object(n["g"])(O,{class:"nav__button",to:"/",tag:"button","aria-label":"Powrót"},{default:s((function(){return[i]})),_:1}),a,Object(n["g"])("div",u,[Object(n["g"])("span",null,"Poziom "+Object(n["y"])(b.level),1)]),Object(n["g"])(O,{class:"nav__button",to:"/",tag:"button","aria-label":"Od nowa"},{default:s((function(){return[l]})),_:1})])]),Object(n["g"])("div",{class:["game",{busy:b.isBusy}]},[Object(n["g"])("div",f,[Object(n["g"])(p,{class:"picture",name:b.actual},null,8,["name"]),b.resultText?(Object(n["p"])(),Object(n["d"])("span",{key:0,class:["result",b.resultClass],textContent:Object(n["y"])(b.resultText)},null,10,["textContent"])):Object(n["e"])("",!0)]),Object(n["g"])("ul",null,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(b.solutionCount,(function(t){return Object(n["p"])(),Object(n["d"])("li",{class:["order",{active:t==b.order,good:b.solutionCorrectness[t-1]}],key:t},Object(n["y"])(t),3)})),128))]),Object(n["g"])("ul",d,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(b.answers,(function(t,e){return Object(n["p"])(),Object(n["d"])("li",{class:"answer",key:e,onClick:function(e){return v.choose(t)}},[Object(n["g"])(p,{name:t},null,8,["name"])],8,["onClick"])})),128))])],2)])})),b=(r("fb6a"),Object(n["C"])("data-v-e1e8cef6"));Object(n["s"])("data-v-e1e8cef6");var v={class:"asset"};Object(n["q"])();var O=b((function(t,e,r,s,o,c){return Object(n["p"])(),Object(n["d"])("svg",v,[Object(n["g"])("use",{href:c.svgUrl},null,8,["href"])])})),p=(r("99af"),r("b0c0"),{props:["name"],computed:{svgUrl:function(){return"".concat(this.$store.getters.currentAssetsUrl,"#").concat(this.name)}}});r("f4f1");p.render=O,p.__scopeId="data-v-e1e8cef6";var j=p,g=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],w={components:{asset:j},data:function(){return{counter:0,level:1,answers:[],actual:null,solution:[],solutionCount:0,solutionCorrectness:[],isBusy:!1,order:0,answerOrder:0,resultText:null,resultClass:{correct:!1,mistake:!1}}},created:function(){this.solutionCount=3,this.answers=g.sort((function(){return.5-Math.random()})).slice(0,6),this.shuffle()},methods:{shuffle:function(){this.isBusy=!0,++this.counter%5==0&&(this.answers=g.sort((function(){return.5-Math.random()})).slice(0,6)),this.solutionCount=this.level+2,this.chosenSolution=[],this.solution=[];for(var t=0;t<this.solutionCount;t++){var e=Math.floor(Math.random()*this.answers.length);this.solution.push(this.answers[e])}this.showSolutionItem()},showSolutionItem:function(){var t=this;if(this.order>this.solutionCount)return this.order=0,this.actual=null,void(this.isBusy=!1);setTimeout((function(){t.actual=t.solution[t.order],t.order++,t.showSolutionItem()}),1500)},choose:function(t){var e=this;t==this.solution[this.answerOrder]?(this.solutionCorrectness.push(!0),this.answerOrder++,this.solutionCount==this.solutionCorrectness.length&&(this.isBusy=!0,this.resultClass={correct:!0,mistake:!1},this.resultText="Bardzo dobrze",this.level++,setTimeout((function(){e.resultText=null,e.answerOrder=0,e.solutionCorrectness=[],e.shuffle()}),1200))):(this.resultClass={correct:!1,mistake:!0},this.resultText="Pomyłka",this.level=--this.level>=1?this.level:1,setTimeout((function(){e.resultText=null}),1200),this.answerOrder=0,this.solutionCorrectness=[],this.shuffle())}}};r("5e62");w.render=h,w.__scopeId="data-v-47ac4022";e["default"]=w},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},f4f1:function(t,e,r){"use strict";r("0d8d")},fb6a:function(t,e,r){"use strict";var n=r("23e7"),s=r("861d"),o=r("e8b5"),c=r("23cb"),i=r("50c4"),a=r("fc6a"),u=r("8418"),l=r("b622"),f=r("1dde"),d=r("ae40"),h=f("slice"),b=d("slice",{ACCESSORS:!0,0:0,1:2}),v=l("species"),O=[].slice,p=Math.max;n({target:"Array",proto:!0,forced:!h||!b},{slice:function(t,e){var r,n,l,f=a(this),d=i(f.length),h=c(t,d),b=c(void 0===e?d:e,d);if(o(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?s(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return O.call(f,h,b);for(n=new(void 0===r?Array:r)(p(b-h,0)),l=0;h<b;h++,l++)h in f&&u(n,l,f[h]);return n.length=l,n}})}}]);
//# sourceMappingURL=repeat.70d733bf.js.map