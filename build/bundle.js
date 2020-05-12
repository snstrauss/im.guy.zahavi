var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function a(t){let e;return c(t,t=>e=t)(),e}function l(t,e,n){t.$$.on_destroy.push(c(e,n))}function u(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function p(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function y(){return m("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let b;function w(t){b=t}function x(){if(!b)throw new Error("Function called outside component initialization");return b}function v(t,e){x().$$.context.set(t,e)}function _(t){return x().$$.context.get(t)}const k=[],P=[],O=[],E=[],F=Promise.resolve();let j=!1;function S(){j||(j=!0,F.then(I))}function L(t){O.push(t)}let M=!1;const D=new Set;function I(){if(!M){M=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];w(e),R(e.$$)}for(k.length=0;P.length;)P.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];D.has(e)||(D.add(e),e())}O.length=0}while(k.length);for(;E.length;)E.pop()();j=!1,M=!1,D.clear()}}function R(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const A=new Set;let N;function C(){N={r:0,c:[],p:N}}function q(){N.r||r(N.c),N=N.p}function B(t,e){t&&t.i&&(A.delete(t),t.i(e))}function T(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),N.c.push(()=>{A.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function U(t,e){T(t,1,1,()=>{e.delete(t.key)})}function K(t,e,n,o,r,i,s,c,a,l,u,p){let f=t.length,d=i.length,h=f;const m={};for(;h--;)m[t[h].key]=h;const g=[],y=new Map,$=new Map;for(h=d;h--;){const t=p(r,i,h),c=n(t);let a=s.get(c);a?o&&a.p(t,e):(a=l(c,t),a.c()),y.set(c,g[h]=a),c in m&&$.set(c,Math.abs(h-m[c]))}const b=new Set,w=new Set;function x(t){B(t,1),t.m(c,u,s.has(t.key)),s.set(t.key,t),u=t.first,d--}for(;f&&d;){const e=g[d-1],n=t[f-1],o=e.key,r=n.key;e===n?(u=e.first,f--,d--):y.has(r)?!s.has(o)||b.has(o)?x(e):w.has(r)?f--:$.get(o)>$.get(r)?(w.add(o),x(e)):(b.add(r),f--):(a(n,s),f--)}for(;f--;){const e=t[f];y.has(e.key)||a(e,s)}for(;d;)x(g[d-1]);return g}function H(t,e){const n={},o={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],c=e[i];if(c){for(const t in s)t in c||(o[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[i]=c}else for(const t in s)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function z(t){return"object"==typeof t&&null!==t?t:{}}function J(t){t&&t.c()}function G(t,e,o){const{fragment:s,on_mount:c,on_destroy:a,after_update:l}=t.$$;s&&s.m(e,o),L(()=>{const e=c.map(n).filter(i);a?a.push(...e):r(e),t.$$.on_mount=[]}),l.forEach(L)}function Q(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function V(e,n,i,s,c,a,l=[-1]){const u=b;w(e);const p=n.props||{},f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l};let h=!1;if(f.ctx=i?i(e,p,(t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=r)&&(f.bound[t]&&f.bound[t](r),h&&function(t,e){-1===t.$$.dirty[0]&&(k.push(t),S(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n}):[],f.update(),h=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(d)}else f.fragment&&f.fragment.c();n.intro&&B(e.$$.fragment),G(e,n.target,n.anchor),I()}w(u)}class W{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const X=[];function Y(e,n=t){let o;const r=[];function i(t){if(s(e,t)&&(e=t,o)){const t=!X.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),X.push(n,e)}if(t){for(let t=0;t<X.length;t+=2)X[t][0](X[t+1]);X.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(s,c=t){const a=[s,c];return r.push(a),1===r.length&&(o=n(i)||t),s(e),()=>{const t=r.indexOf(a);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function Z(e,n,o){const s=!Array.isArray(e),a=s?[e]:e,l=n.length<2;return{subscribe:Y(o,e=>{let o=!1;const u=[];let p=0,f=t;const d=()=>{if(p)return;f();const o=n(s?u[0]:u,e);l?e(o):f=i(o)?o:t},h=a.map((t,e)=>c(t,t=>{u[e]=t,p&=~(1<<e),o&&d()},()=>{p|=1<<e}));return o=!0,d(),function(){r(h),f()}}).subscribe}}const tt=Y(null),et=Y([]),nt=Y(null),ot=(()=>{const{set:t,subscribe:e}=Y("");return{subscribe:e,set(e){e.match(/^\//)?t(e):console.warn("Basepaths must start with /")},update(){console.warn("Use assignment or set to update basepaths.")}}})(),rt=Z([ot,nt],([t,e])=>{const n=window.location.pathname,[,o,r]=n.match(`^(${t})(${e.regex})`)||[];return{base:o,path:r}}),it=RegExp(/\:([^/()]+)/g);function st(t){if(navigator.userAgent.includes("jsdom"))return!1;!function t(e){e&&e.scrollTo&&"scroll-lock"!==e.dataset.routify&&(e.style["scroll-behavior"]="auto",e.scrollTo({top:0,behavior:"auto"}),e.style["scroll-behavior"]="",t(e.parentElement))}(t),function(){if(navigator.userAgent.includes("jsdom"))return!1;const{hash:t}=window.location;if(t){const e=document.querySelector(t);t&&e&&e.scrollIntoView()}}()}const ct=t=>{const e=[];let n;for(;n=it.exec(t);)e.push(n[1]);return e};let at=!1;var lt={queryHandler:{parse:t=>{return e=new URLSearchParams(t),[...e].reduce((t,[e,n])=>(t[e]=n,t),{});var e},stringify:t=>"?"+new URLSearchParams(t).toString()}};function ut(){return _("routify")}const pt={_hooks:[],subscribe:dt},ft={_hooks:[],subscribe:dt};function dt(t){const e=this._hooks,n=e.length;return t(t=>{e[n]=t}),()=>delete e[n]}const ht={subscribe:t=>Z([ut(),tt,et,rt],t=>function(t,e,n,o){return function(r,i,s){const{component:c}=t;if(r=r||"./",s&&!1!==s.strict||(r=r.replace(/index$/,"")),r.match(/^\.\.?\//)){let[,t,e]=r.match(/^([\.\/]+)(.*)/),n=c.path.replace(/\/$/,"");(t.match(/\.\.\//g)||[]).forEach(()=>n=n.replace(/\/[^\/]+\/?$/,"")),r=`${n}/${e}`.replace(/\/$/,"")}else if(r.match(/^\//));else{const t=n.find(t=>t.meta.name===r);t&&(r=t.shortPath)}const a=Object.assign({},e.params,c.params,i);let l=r;for(const[t,e]of Object.entries(a))l=l.replace(":"+t,e);return(o.base+l+function(t,e){if(!lt.queryHandler)return"";const n=ct(t),o={};e&&Object.entries(e).forEach(([t,e])=>{n.includes(t)||(o[t]=e)});return lt.queryHandler.stringify(o)}(r,i)).replace(/\?$/,"")}}(...t)).subscribe(t)};const mt={subscribe:t=>Z(ht,t=>function(e,n,o,r){const i=t(e,n);o?_("routifyupdatepage")(i,r):history.pushState({},null,i)}).subscribe(t)},gt={props:{},templates:{},services:{plain:{propField:"name",valueField:"content"},twitter:{propField:"name",valueField:"content"},og:{propField:"property",valueField:"content"}},plugins:[{name:"applyTemplate",condition:()=>!0,action:(t,e)=>[t,(gt.getLongest(gt.templates,t)||(t=>t))(e)]},{name:"createMeta",condition:()=>!0,action(t,e){gt.writeMeta(t,e)}},{name:"createOG",condition:t=>!t.match(":"),action(t,e){gt.writeMeta("og:"+t,e)}},{name:"createTitle",condition:t=>"title"===t,action(t,e){document.title=e}}],getLongest(t,e){const n=t[e];if(n){const o=a(tt).path;return n[Object.keys(t[e]).filter(t=>o.includes(t)).sort((t,e)=>e.length-t.length)[0]]}},writeMeta(t,e){const n=document.getElementsByTagName("head")[0],o=t.match(/(.+)\:/),r=o&&o[1]||"plain",{propField:i,valueField:s}=yt.services[r]||yt.services.plain,c=document.querySelector(`meta[${i}='${t}']`);c&&c.remove();const a=document.createElement("meta");a.setAttribute(i,t),a.setAttribute(s,e),a.setAttribute("data-origin","routify"),n.appendChild(a)},set(t,e){gt.plugins.forEach(n=>{n.condition(t,e)&&([t,e]=n.action(t,e)||[t,e])})},clear(){const t=document.querySelector("meta");t&&t.remove()},template(t,e){const n=gt.getOrigin();gt.templates[t]=gt.templates[t]||{},gt.templates[t][n]=e},update(){Object.keys(gt.props).forEach(t=>{let e=gt.getLongest(gt.props,t);gt.plugins.forEach(n=>{n.condition(t,e)&&([t,e]=n.action(t,e)||[t,e])})})},batchedUpdate(){gt._pendingUpdate||(gt._pendingUpdate=!0,setTimeout(()=>{gt._pendingUpdate=!1,this.update()}))},_updateQueued:!1,getOrigin(){const t=ut();return t&&a(t).path||"/"},_pendingUpdate:!1},yt=new Proxy(gt,{set(t,e,n,o){const{props:r,getOrigin:i}=t;return Reflect.has(t,e)?Reflect.set(t,e,n,o):(r[e]=r[e]||{},r[e][i()]=n),window.routify.appLoaded&&t.batchedUpdate(),!0}});function $t(t,e,n){const o=t.slice();return o[20]=e[n].component,o[21]=e[n].componentFile,o}function bt(t,e,n){const o=t.slice();return o[20]=e[n].component,o[21]=e[n].componentFile,o}function wt(t){let e,n,o,r;const i=[vt,xt],s=[];function c(t,e){return!1===t[6].component.isLayout?0:t[5].length?1:-1}return~(e=c(t))&&(n=s[e]=i[e](t)),{c(){n&&n.c(),o=y()},m(t,n){~e&&s[e].m(t,n),f(t,o,n),r=!0},p(t,r){let a=e;e=c(t),e===a?~e&&s[e].p(t,r):(n&&(C(),T(s[a],1,1,()=>{s[a]=null}),q()),~e?(n=s[e],n||(n=s[e]=i[e](t),n.c()),B(n,1),n.m(o.parentNode,o)):n=null)},i(t){r||(B(n),r=!0)},o(t){T(n),r=!1},d(t){~e&&s[e].d(t),t&&d(o)}}}function xt(t){let e,n,o=[],r=new Map,i=[t[6]];const s=t=>t[20].path;for(let e=0;e<1;e+=1){let n=$t(t,i,e),c=s(n);r.set(c,o[e]=kt(c,n))}return{c(){for(let t=0;t<1;t+=1)o[t].c();e=y()},m(t,r){for(let e=0;e<1;e+=1)o[e].m(t,r);f(t,e,r),n=!0},p(t,n){if(201326711&n){const i=[t[6]];C(),o=K(o,n,s,1,t,i,r,e.parentNode,U,kt,e,$t),q()}},i(t){if(!n){for(let t=0;t<1;t+=1)B(o[t]);n=!0}},o(t){for(let t=0;t<1;t+=1)T(o[t]);n=!1},d(t){for(let e=0;e<1;e+=1)o[e].d(t);t&&d(e)}}}function vt(t){let e,n,o=[],r=new Map,i=[t[6]];const s=t=>t[20].path;for(let e=0;e<1;e+=1){let n=bt(t,i,e),c=s(n);r.set(c,o[e]=Pt(c,n))}return{c(){for(let t=0;t<1;t+=1)o[t].c();e=y()},m(t,r){for(let e=0;e<1;e+=1)o[e].m(t,r);f(t,e,r),n=!0},p(t,n){if(85&n){const i=[t[6]];C(),o=K(o,n,s,1,t,i,r,e.parentNode,U,Pt,e,bt),q()}},i(t){if(!n){for(let t=0;t<1;t+=1)B(o[t]);n=!0}},o(t){for(let t=0;t<1;t+=1)T(o[t]);n=!1},d(t){for(let e=0;e<1;e+=1)o[e].d(t);t&&d(e)}}}function _t(t){let e,n;const o=new jt({props:{layouts:[...t[5]],Decorator:void 0!==t[27]?t[27]:t[1],childOfDecorator:t[4].isDecorator,scoped:{...t[0],...t[26]}}});return{c(){J(o.$$.fragment),e=g()},m(t,r){G(o,t,r),f(t,e,r),n=!0},p(t,e){const n={};32&e&&(n.layouts=[...t[5]]),134217730&e&&(n.Decorator=void 0!==t[27]?t[27]:t[1]),16&e&&(n.childOfDecorator=t[4].isDecorator),67108865&e&&(n.scoped={...t[0],...t[26]}),o.$set(n)},i(t){n||(B(o.$$.fragment,t),n=!0)},o(t){T(o.$$.fragment,t),n=!1},d(t){Q(o,t),t&&d(e)}}}function kt(t,n){let o,r,i;const s=[{scoped:n[0]},{scopedSync:n[2]},n[4].param||{}];var c=n[21];function a(t){let n={$$slots:{default:[_t,({scoped:t,decorator:e})=>({26:t,27:e}),({scoped:t,decorator:e})=>(t?67108864:0)|(e?134217728:0)]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(c)var l=new c(a(n));return{key:t,first:null,c(){o=y(),l&&J(l.$$.fragment),r=y(),this.first=o},m(t,e){f(t,o,e),l&&G(l,t,e),f(t,r,e),i=!0},p(t,e){const n=21&e?H(s,[1&e&&{scoped:t[0]},4&e&&{scopedSync:t[2]},16&e&&z(t[4].param||{})]):{};if(469762099&e&&(n.$$scope={dirty:e,ctx:t}),c!==(c=t[21])){if(l){C();const t=l;T(t.$$.fragment,1,0,()=>{Q(t,1)}),q()}c?(J((l=new c(a(t))).$$.fragment),B(l.$$.fragment,1),G(l,r.parentNode,r)):l=null}else c&&l.$set(n)},i(t){i||(l&&B(l.$$.fragment,t),i=!0)},o(t){l&&T(l.$$.fragment,t),i=!1},d(t){t&&d(o),t&&d(r),l&&Q(l,t)}}}function Pt(t,n){let o,r,i;const s=[{scoped:n[0]},{scopedSync:n[2]},n[4].param||{}];var c=n[21];function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(c)var l=new c(a());return{key:t,first:null,c(){o=y(),l&&J(l.$$.fragment),r=y(),this.first=o},m(t,e){f(t,o,e),l&&G(l,t,e),f(t,r,e),i=!0},p(t,e){const n=21&e?H(s,[1&e&&{scoped:t[0]},4&e&&{scopedSync:t[2]},16&e&&z(t[4].param||{})]):{};if(c!==(c=t[21])){if(l){C();const t=l;T(t.$$.fragment,1,0,()=>{Q(t,1)}),q()}c?(J((l=new c(a())).$$.fragment),B(l.$$.fragment,1),G(l,r.parentNode,r)):l=null}else c&&l.$set(n)},i(t){i||(l&&B(l.$$.fragment,t),i=!0)},o(t){l&&T(l.$$.fragment,t),i=!1},d(t){t&&d(o),t&&d(r),l&&Q(l,t)}}}function Ot(e){let n,o,r;return{c(){n=h("span")},m(s,c,a){var l;f(s,n,c),a&&r(),l=o=e[8].call(null,n),r=l&&i(l.destroy)?l.destroy:t},d(t){t&&d(n),r()}}}function Et(t){let e,n,o,r=t[6]&&wt(t),i=!t[3]&&Ot(t);return{c(){r&&r.c(),e=g(),i&&i.c(),n=y()},m(t,s){r&&r.m(t,s),f(t,e,s),i&&i.m(t,s),f(t,n,s),o=!0},p(t,[o]){t[6]?r?(r.p(t,o),64&o&&B(r,1)):(r=wt(t),r.c(),B(r,1),r.m(e.parentNode,e)):r&&(C(),T(r,1,1,()=>{r=null}),q()),t[3]?i&&(i.d(1),i=null):i||(i=Ot(t),i.c(),i.m(n.parentNode,n))},i(t){o||(B(r),o=!0)},o(t){T(r),o=!1},d(t){r&&r.d(t),t&&d(e),i&&i.d(t),t&&d(n)}}}function Ft(t,e,n){let o,r;l(t,tt,t=>n(14,r=t));let i,{layouts:s=[]}=e,{scoped:c={}}=e,{Decorator:u=null}=e,{childOfDecorator:p=!1}=e,f={},d=!1,h=!1,m=null,g=null,y=[];const $=Y(null);l(t,$,t=>n(6,o=t));const b=_("routify");function w(t){const e=a(b);n(2,f={...c}),n(13,g=m),0===y.length&&async function(){pt._hooks.forEach(t=>t(m.api)),await function(){return S(),F}(),st(i),yt.update(),window.routify.appLoaded||async function(){const t=o.component.path,e=r.path,n=t===e;!window.routify.stopAutoReady&&n&&(dispatchEvent(new CustomEvent("app-loaded")),window.routify.appLoaded=!0)}()}(),$.set({layout:h?e.layout:m,component:m,componentFile:t,child:h?e.child:a($)&&a($).child}),e&&!h&&b.update(t=>(t.child=m||t.child,t))}return h=u&&!p,v("routify",$),t.$set=t=>{"layouts"in t&&n(9,s=t.layouts),"scoped"in t&&n(0,c=t.scoped),"Decorator"in t&&n(1,u=t.Decorator),"childOfDecorator"in t&&n(10,p=t.childOfDecorator)},t.$$.update=()=>{if(4610&t.$$.dirty&&h){const t={component:()=>u,path:s[0].path+"__decorator",isDecorator:!0};n(9,s=[t,...s])}512&t.$$.dirty&&n(4,[m,...y]=s,m,(n(5,y),n(9,s),n(12,h),n(1,u))),8208&t.$$.dirty&&(d=!g||g.path!==m.path),16&t.$$.dirty&&function(t){let e=t.component();e instanceof Promise?e.then(w):w(e)}(m)},[c,u,f,i,m,y,o,$,function(t){n(3,i=t.parentElement)},s,p]}class jt extends W{constructor(t){super(),V(this,t,Ft,Et,s,{layouts:9,scoped:0,Decorator:1,childOfDecorator:10})}}const{_hooks:St}=ft;function Lt(t,e){let n=!1;function o(o,r){const i=window.location.pathname,s=It(o||i,t),c=[...(r&&It(i,t)||s).layouts,s];n&&delete n.last,s.last=n,n=s,o||nt.set(s),tt.set(s),e(c)}const r=function(t){["pushState","replaceState"].forEach(t=>{const e=history[t];history[t]=async function(n={},o,r){const{id:i,path:s,params:c}=a(tt);n={id:i,path:s,params:c,...n};const l=new Event(t.toLowerCase());if(Object.assign(l,{state:n,title:o,url:r}),await Dt(l))return e.apply(this,[n,o,r]),dispatchEvent(l)}});let e=!1;const n={click:Mt,pushstate:()=>t(),replacestate:()=>t(),popstate:async n=>{e?e=!1:await Dt(n)?t():(e=!0,n.preventDefault(),history.go(1))}};return Object.entries(n).forEach(t=>addEventListener(...t)),()=>{Object.entries(n).forEach(t=>removeEventListener(...t))}}(o);return{updatePage:o,destroy:r}}function Mt(t){const e=t.target.closest("a"),n=e&&e.getAttribute("href");t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button||t.defaultPrevented||n&&!e.target&&e.host===location.host&&(t.preventDefault(),history.pushState({},"",n))}async function Dt(t){const e=a(tt);for(const n of St.filter(Boolean))if(await!n(t,e))return!1;return!0}function It(t,e){const n=a(ot),o=e.find(e=>t.match(`^${n}${e.regex}`));if(!o)throw new Error(`Route could not be found. Make sure ${t}.svelte or ${t}/index.svelte exists. A restart may be required.`);const[,r,i]=t.match(`^(${a(ot)})(${o.regex})`);if(lt.queryHandler&&(o.params=lt.queryHandler.parse(window.location.search)),o.paramKeys){const t=function(t){const e=[];return t.forEach(t=>{e[t.path.split("/").filter(Boolean).length-1]=t}),e}(o.layouts),e=i.split("/").filter(Boolean);(function(t){return t.split("/").filter(Boolean).map(t=>t.match(/\:(.+)/)).map(t=>t&&t[1])})(o.path).forEach((n,r)=>{n&&(o.params[n]=e[r],t[r]?t[r].param={[n]:e[r]}:o.param={[n]:e[r]})})}return o.leftover=t.replace(new RegExp(r+o.regex),""),o}function Rt(t){let e;const n=new jt({props:{layouts:t[0]}});return{c(){J(n.$$.fragment)},m(t,o){G(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.layouts=t[0]),n.$set(o)},i(t){e||(B(n.$$.fragment,t),e=!0)},o(t){T(n.$$.fragment,t),e=!1},d(t){Q(n,t)}}}function At(t){let e,n,o=t[0]&&null!==t[1]&&Rt(t);return{c(){o&&o.c(),e=y()},m(t,r){o&&o.m(t,r),f(t,e,r),n=!0},p(t,[n]){t[0]&&null!==t[1]?o?(o.p(t,n),3&n&&B(o,1)):(o=Rt(t),o.c(),B(o,1),o.m(e.parentNode,e)):o&&(C(),T(o,1,1,()=>{o=null}),q())},i(t){n||(B(o),n=!0)},o(t){T(o),n=!1},d(t){o&&o.d(t),t&&d(e)}}}function Nt(t,e,n){let o;l(t,tt,t=>n(1,o=t));let r,i,{routes:s}=e,{config:c={}}=e;Object.entries(c).forEach(([t,e])=>{lt[t]=e}),function(){if(at)return;const t=console.warn;console.warn=function(e,...n){if(!["was created with unknown prop 'scoped'","was created with unknown prop 'scopedSync'"].find(t=>e.includes(t)))return t(e,...n)},at=!0}(),window.routify||(window.routify={});v("routifyupdatepage",(...t)=>i&&i.updatePage(...t));const a=t=>n(0,r=t),u=()=>{i&&(i.destroy(),i=null)};let p=null;var f;return f=u,x().$$.on_destroy.push(f),t.$set=t=>{"routes"in t&&n(2,s=t.routes),"config"in t&&n(3,c=t.config)},t.$$.update=()=>{4&t.$$.dirty&&s&&(clearTimeout(p),p=setTimeout(()=>{u(),i=Lt(s,a),et.set(s),i.updatePage()}))},[r,o,s,c]}class Ct extends W{constructor(t){super(),V(this,t,Nt,At,s,{routes:2,config:3})}}async function qt(t,e,n){const{state:o,scope:r,parent:i}=n||{};return n={file:t,parent:i,state:o||{},scope:Bt(r||{})},await e(n),t.children&&(n.parent=t,await Promise.all(t.children.map(t=>qt(t,e,n)))),n}function Bt(t){return JSON.parse(JSON.stringify(t))}var Tt=function(t){const e=async function(e){return await qt(e.tree,t,{state:{treePayload:e}})};return e.sync=function(e){return function t(e,n,o){const{state:r,scope:i,parent:s}=o||{};o={file:e,parent:s,state:r||{},scope:Bt(i||{})},n(o),e.children&&(o.parent=e,e.children.map(e=>t(e,n,o)));return o}(e.tree,t,{state:{treePayload:e}})},e},Ut=Tt;const Kt=Ut(({file:t})=>{(t.isPage||t.isFallback)&&(t.regex=((t,e)=>{const n=e?"":"/?$";return t=(t=(t=t.replace(/\/_fallback?$/,"(/|$)")).replace(/\/index$/,"(/index)?")).replace(it,"([^/]+)")+n})(t.path,t.isFallback))}),Ht=Ut(({file:t})=>{t.paramKeys=ct(t.path)}),zt=Ut(({file:t})=>{t.isFallback||t.isIndex?t.shortPath=t.path.replace(/\/[^/]+$/,""):t.shortPath=t.path}),Jt=Ut(({file:t})=>{t.ranking=(({path:t})=>t.split("/").filter(Boolean).map(t=>"_fallback"===t?"A":t.startsWith(":")?"B":"C").join(""))(t)}),Gt=Ut(({file:t})=>{const e=t,n=t.meta&&t.meta.children||[];n.length&&(e.children=e.children||[],e.children.push(...n.map(t=>({isMeta:!0,...t,meta:t}))))}),Qt=Ut(t=>{const{file:e}=t,{isLayout:n,isFallback:o,meta:r}=e;e.isIndexable=!n&&!o&&!1!==r.index,e.isNonIndexable=!e.isIndexable}),Vt=Ut(({file:t,parent:e})=>{Object.defineProperty(t,"parent",{get:()=>e}),Object.defineProperty(t,"nextSibling",{get:()=>Wt(t,1)}),Object.defineProperty(t,"prevSibling",{get:()=>Wt(t,-1)}),Object.defineProperty(t,"lineage",{get:()=>function t(e,n=[]){e&&(n.unshift(e),t(e.parent,n));return n}(e)})});function Wt(t,e){if(!t.root){const n=t.parent.children.filter(t=>t.isIndexable),o=n.indexOf(t);return n[o+e]}}const Xt=Ut(({file:t,parent:e})=>{t.isIndex&&Object.defineProperty(e,"index",{get:()=>t}),t.isLayout&&Object.defineProperty(e,"layout",{get:()=>t})}),Yt=Ut(({file:t,scope:e})=>{Object.defineProperty(t,"layouts",{get:()=>function t(e){const{parent:n}=e,o=n&&n.layout,r=o&&o.isReset,i=n&&!r&&t(n)||[];o&&i.push(o);return i}(t)})}),Zt=Ut(({file:t})=>{const e=t.root?function(){}:t.children?(t.isFile,function(){}):(t.isReset||t.isLayout||t.isFallback,function(){});Object.setPrototypeOf(t,e.prototype)});var te=Object.freeze({__proto__:null,setRegex:Kt,setParamKeys:Ht,setShortPath:zt,setRank:Jt,addMetaChildren:Gt,setIsIndexable:Qt,assignRelations:Vt,assignIndex:Xt,assignLayout:Yt,createFlatList:t=>{Ut(t=>{(t.file.isPage||t.file.isFallback)&&t.state.treePayload.routes.push(t.file)}).sync(t),t.routes.sort((t,e)=>t.ranking>=e.ranking?-1:1)},setPrototype:Zt});const ee=Ut(({file:t})=>{t.api=new ne(t)});class ne{constructor(t){this.__file=t,Object.defineProperty(this,"__file",{enumerable:!1}),this.isMeta=!!t.isMeta,this.path=t.path,this.title=function(t){return void 0!==t.meta.title?t.meta.title:(t.shortPath||t.path).split("/").pop().replace(/-/g," ")}(t),this.meta=t.meta}get parent(){return!this.__file.root&&this.__file.parent.api}get children(){return(this.__file.children||this.__file.isLayout&&this.__file.parent.children||[]).filter(t=>!t.isNonIndexable).sort((t,e)=>(t.meta.index||t.meta.title||t.path).toString().localeCompare(e.meta.index,void 0,{numeric:!0,sensitivity:"base"})).map(({api:t})=>t)}get next(){return oe(this,1)}get prev(){return oe(this,-1)}}function oe(t,e){if(!t.__file.root){const n=t.parent.children.indexOf(t);return t.parent.children[n+e]}}const re={...te,assignAPI:ee};function ie(t,e,n){const o=t.slice();return o[5]=e[n][0],o[6]=e[n][1],o}function se(t){let e,n,o,r=t[5]+"";function i(...e){return t[4](t[6],...e)}return{c(){e=h("button"),n=m(r)},m(t,r,s){var c,a,l,u;f(t,e,r),p(e,n),s&&o(),a="click",l=i,(c=e).addEventListener(a,l,u),o=()=>c.removeEventListener(a,l,u)},p(e,n){t=e},d(t){t&&d(e),o()}}}function ce(t){let e,n,o,r,i,s,c,a,l,y,b,w=Object.entries(t[1]),x=[];for(let e=0;e<w.length;e+=1)x[e]=se(ie(t,w,e));const v=t[3].default,_=function(t,e,n,o){if(t){const r=u(t,e,n,o);return t[0](r)}}(v,t,t[2],null);return{c(){e=h("main"),n=h("header"),o=h("nav");for(let t=0;t<x.length;t+=1)x[t].c();r=g(),i=h("main"),s=m("did i ruin everything?: "),c=h("br"),a=g(),_&&_.c(),l=g(),y=h("footer"),y.textContent="i am footer",$(n,"class","svelte-146wru9"),$(i,"class","svelte-146wru9"),$(y,"class","svelte-146wru9"),$(e,"class","main-container svelte-146wru9")},m(t,u){f(t,e,u),p(e,n),p(n,o);for(let t=0;t<x.length;t+=1)x[t].m(o,null);p(e,r),p(e,i),p(i,s),p(i,c),p(i,a),_&&_.m(i,null),p(e,l),p(e,y),b=!0},p(t,[e]){if(3&e){let n;for(w=Object.entries(t[1]),n=0;n<w.length;n+=1){const r=ie(t,w,n);x[n]?x[n].p(r,e):(x[n]=se(r),x[n].c(),x[n].m(o,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=w.length}_&&_.p&&4&e&&_.p(u(v,t,t[2],null),function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(v,t[2],e,null))},i(t){b||(B(_,t),b=!0)},o(t){T(_,t),b=!1},d(t){t&&d(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(x,t),_&&_.d(t)}}}function ae(t,e,n){let o;l(t,mt,t=>n(0,o=t)),console.log("layout");let{$$slots:r={},$$scope:i}=e;return t.$set=t=>{"$$scope"in t&&n(2,i=t.$$scope)},[o,{home:"/",about:"about",contact:"contact"},i,r,t=>o(t)]}class le extends W{constructor(t){super(),V(this,t,ae,ce,s,{})}}function ue(e){let n;return{c(){n=h("h1"),n.textContent="i am about page"},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&d(n)}}}function pe(t){return console.log("about page"),[]}class fe extends W{constructor(t){super(),V(this,t,pe,ue,s,{})}}function de(e){let n;return{c(){n=h("h1"),n.textContent="i am contact"},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&d(n)}}}function he(t){return console.log("contact page"),[]}class me extends W{constructor(t){super(),V(this,t,he,de,s,{})}}function ge(e){let n;return{c(){n=h("h1"),n.textContent="i am home"},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&d(n)}}}function ye(t){return console.log("home page"),[]}class $e extends W{constructor(t){super(),V(this,t,ye,ge,s,{})}}const be={name:"root",filepath:"/",root:!0,ownMeta:{},children:[{isFile:!0,isDir:!1,ext:"svelte",isLayout:!0,isReset:!1,isIndex:!1,isFallback:!1,isPage:!1,ownMeta:{},meta:{preload:!1,"precache-order":!1,"precache-proximity":!0,recursive:!0},path:"/",id:"__layout",component:()=>le},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!0,ownMeta:{},meta:{preload:!1,"precache-order":!1,"precache-proximity":!0,recursive:!0},path:"/about",id:"_about",component:()=>fe},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!0,ownMeta:{},meta:{preload:!1,"precache-order":!1,"precache-proximity":!0,recursive:!0},path:"/contact",id:"_contact",component:()=>me},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!0,isFallback:!1,isPage:!0,ownMeta:{},meta:{preload:!1,"precache-order":!1,"precache-proximity":!0,recursive:!0},path:"/index",id:"_index",component:()=>$e}],isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,meta:{preload:!1,"precache-order":!1,"precache-proximity":!0,recursive:!0},path:"/"},{tree:we,routes:xe}=function(t){const e=["setParamKeys","setRegex","setShortPath","setRank","assignLayout","setPrototype","addMetaChildren","assignRelations","setIsIndexable","assignIndex","assignAPI","createFlatList"],n={tree:t,routes:[]};for(let t of e){(re[t].sync||re[t])(n)}return n}(be);function ve(e){let n,o,r,i,s,c,a;const l=new Ct({props:{routes:xe}});return{c(){n=h("div"),o=m("i am app last try?. "),r=h("br"),i=m("\n\trouter: "),s=h("br"),c=g(),J(l.$$.fragment),$(n,"class","app-container svelte-ajempb")},m(t,e){f(t,n,e),p(n,o),p(n,r),p(n,i),p(n,s),p(n,c),G(l,n,null),a=!0},p:t,i(t){a||(B(l.$$.fragment,t),a=!0)},o(t){T(l.$$.fragment,t),a=!1},d(t){t&&d(n),Q(l)}}}function _e(t){return console.log("sessionStorage: "),console.log(sessionStorage),[]}return new class extends W{constructor(t){super(),V(this,t,_e,ve,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
