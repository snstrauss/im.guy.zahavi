var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n){t.appendChild(n)}function u(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function s(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let l;function d(t){l=t}const p=[],h=[],m=[],g=[],$=Promise.resolve();let y=!1;function b(t){m.push(t)}let x=!1;const _=new Set;function v(){if(!x){x=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];d(n),w(n.$$)}for(p.length=0;h.length;)h.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];_.has(n)||(_.add(n),n())}m.length=0}while(p.length);for(;g.length;)g.pop()();y=!1,x=!1,_.clear()}}function w(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(b)}}const E=new Set;function j(t,n){-1===t.$$.dirty[0]&&(p.push(t),y||(y=!0,$.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function A(c,a,f,i,s,p,h=[-1]){const m=l;d(c);const g=a.props||{},$=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:e(),dirty:h};let y=!1;if($.ctx=f?f(c,g,(t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&s($.ctx[t],$.ctx[t]=o)&&($.bound[t]&&$.bound[t](o),y&&j(c,t)),n}):[],$.update(),y=!0,o($.before_update),$.fragment=!!i&&i($.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);$.fragment&&$.fragment.l(t),t.forEach(u)}else $.fragment&&$.fragment.c();a.intro&&((x=c.$$.fragment)&&x.i&&(E.delete(x),x.i(_))),function(t,e,c){const{fragment:a,on_mount:u,on_destroy:f,after_update:i}=t.$$;a&&a.m(e,c),b(()=>{const e=u.map(n).filter(r);f?f.push(...e):o(e),t.$$.on_mount=[]}),i.forEach(b)}(c,a.target,a.anchor),v()}var x,_;d(m)}function k(n){let e,o,r,c,l,d;return{c(){e=f("h1"),o=i("hello i am "),r=f("span"),r.textContent="page",c=i(" with "),l=f("span"),d=i(n[0]),s(r,"class","red svelte-toj4hc"),s(l,"class","svelte-toj4hc")},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n),a(e,o),a(e,r),a(e,c),a(e,l),a(l,d)},p(t,[n]){1&n&&function(t,n){n=""+n,t.data!==n&&(t.data=n)}(d,t[0])},i:t,o:t,d(t){t&&u(e)}}}function C(t,n,e){let{name:o}=n;return t.$set=t=>{"name"in t&&e(0,o=t.name)},[o]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),A(this,t,C,k,c,{name:0})}}({target:document.body,props:{name:"change 3"}})}();
//# sourceMappingURL=bundle.js.map
