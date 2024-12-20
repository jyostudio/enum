var b="*",g="...",T="##INNER_TYPE##",p="@@INNER_TYPE@@";function N(t,r){if(Array.isArray(r)){for(let n=0;n<r.length;n++)if(N(t,r[n]))return!0;return!1}if(typeof r!="function")return r===b&&t!==null||r===g||r===null&&t===null||r===typeof t;switch(typeof t){case"function":case"object":break;case"string":t=String;break;case"number":t=Number;break;case"boolean":t=Boolean;break;case"symbol":t=Symbol;break;case"bigint":t=BigInt;break;default:t=Object(t);break}return t===r||t instanceof r?!0:t?.[p]?t[p]===r?.[T]:!1}function w(t){if(t===null)return"null";if(t===b)return"(\u4EFB\u610F)";let r=typeof t;if(!["function","object"].includes(r))return r[0].toUpperCase()+r.slice(1);let n=(t?.name||t?.constructor?.name||"(\u672A\u77E5)").split(" ").pop();return[T,p].forEach(e=>{t?.[e]&&(n+=`<${w(t?.[e])}>`)}),r==="function"&&n==="anonymous"?"(\u533F\u540D)":n}function v(t,r,n){let e=t.stack.split(`
`).splice(3),l="",u=`
`,o="";e.forEach((c,s,h)=>{let f=c.trim().split(" "),d=f.length===3?f[1]:"(\u533F\u540D)",y=d.split(".").pop();h[s]={fullMethodName:d,methodName:y,link:f.length===3?f[2]:f[1]},s?u+=`${y}	${h[s].link}
`:o=y});let a=r.find(c=>c.length===n.length);if(!a)throw l+=`\u65B9\u6CD5 ${o} \u4E0D\u5B58\u5728 ${n.length} \u4E2A\u53C2\u6570\u7684\u91CD\u8F7D\u3002`,l+=u,new Error(l);let i=!1;if(a.forEach((c,s)=>{if(!N(n[s],c)){let h=Array.isArray(c)?c.map(w).join("\u3001"):w(c);l+=`${i?`
`:""}\u53C2\u6570${s+1}\uFF1A\u9884\u671F ${h} \u4F46\u5F97\u5230 ${w(n[s])}\u3002`,i=!0}}),i)throw l=`\u65B9\u6CD5 ${o} \u8C03\u7528\u9519\u8BEF
${l}`,l+=u,new Error(l)}function S(){let t=[],r=[],n=[],e=null;function l(...o){if(e)return e.apply(this,o);v(new Error,t,o)}function u(...o){if(!t.length)return l.apply(this,o);let a=o.length;t:for(let i=0;i<t.length;i++){let c=t[i],s=n[i],h=c.length;if(!(s.length!==a&&!s.rest||a===0&&h&&c[0]!==g)){for(let f=0;f<a;f++){let d=c[f]||c[h-1];if(!N(o[f],d)){try{let y=d?.["\u21C4"]?.(o[f]);if(N(y,d)){o[f]=y;continue}}catch{}continue t}}return r[i].apply(this,o)}}return l.apply(this,o)}return u.add=function(o,a){if(!Array.isArray(t))throw new TypeError("types \u5FC5\u987B\u662F\u6570\u7EC4\u3002");if(typeof a!="function")throw new TypeError("fn \u5FC5\u987B\u662F\u51FD\u6570\u3002");for(let i=0;i<o.length;i++)if(o[i]===g&&i!==o.length-1)throw new SyntaxError(`${g} \u5FC5\u987B\u662F\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u3002`);return t.forEach(i=>{if(i.length===o.length){for(let c=0;c<i.length;c++)if(i[c]!==o[c])return;throw new Error("\u5DF2\u5B58\u5728\u6B64\u7B7E\u540D\u7684\u91CD\u8F7D\u3002")}}),t.forEach(i=>{let c=Array.isArray(i);if(typeof i!="function"&&!c&&i!==b&&i!==g)throw new TypeError(`\u671F\u671B\u7C7B\u578B\u4E3A Class\u3001Array\u3001${b} \u6216\u672B\u5C3E\u53C2\u6570\u4E5F\u53EF\u4EE5\u662F ${g}\u3002`);if(c)for(let s=0;s<i.length;s++){let h=typeof i[s];if(h!=="function"&&!(h==="object"&&typeof i[s]?.constructor=="function")&&i[s]!==null&&i[s]!==b)throw new TypeError(`\u7C7B\u578B\u5FC5\u987B\u4E3A Class\u3001null \u6216 ${b}\u3002`)}}),t.push(o),r.push(a),n.push({length:o.length,rest:o[o.length-1]===g}),u},u.any=function(o){if(e)throw new Error("any \u51FD\u6570\u5DF2\u5B58\u5728\u3002");if(typeof o!="function")throw new TypeError("fn \u5FC5\u987B\u662F\u51FD\u6570\u3002");return e=o,u},u}var E=S().add([],function(){return S()}).add([Array,Function],function(t,r){let n=S();return n.add(t,r),n});var A=class t{#t;#n="";get description(){return this.#n}get valNumber(){return Number(this.#t)}get valString(){return""+(this.#t||"")}get valBoolean(){return!!this.#t}get valObject(){return Object(this.#t)}static#e=function(...r){return t.#e=E().add([],function(){this.#t=Symbol()}).add([t],function(n){this.#t=n.#t}).add(["*"],function(n){this.#t=n}).add([t,String],function(n,e){this.#t=n.#t,this.#n=e}).add(["*",String],function(n,e){this.#t=n,this.#n=e}),t.#e.apply(this,r)};constructor(...r){return t.#e.apply(this,r)}[Symbol.iterator]=function*(){yield this.#t};static getAll(...r){return t.getAll=E().add([],function(){let n=[],e=Object.getOwnPropertyNames(this);for(let l=0;l<e.length;l++){if(e[l]==="prototype")continue;let u=this[e[l]];typeof u=="object"&&u instanceof t&&n.push(u)}return n}),t.getAll.apply(this,r)}static getByValue(...r){function n(e,l){let u=this.getAll();for(let o=u.length;o--;)if(u[o][l]===e)return u[o];return null}return t.getByValue=E().add([Number],function(e){return n.call(this,e,"valNumber")}).add([String],function(e){return n.call(this,e,"valString")}).add([Boolean],function(e){return n.call(this,e,"valBoolean")}).add([t],function(e){return this.getByValue(e.valNumber)}).add([Object],function(e){return n.call(this,e,"valObject")}),t.getByValue.apply(this,r)}static getByDescription(...r){return t.getByDescription=E().add([String],function(n){let e=this.getAll();for(let l=e.length;l--;)if(e[l].description===n)return e[l];return null}),t.getByDescription.apply(this,r)}static set(...r){return t.set=E().add([Object],function(n){for(let e in n){let l=new this(n[e],e);Reflect.defineProperty(this,e,{writable:!1,enumerable:!0,configurable:!1,value:l})}Object.freeze(this)}),t.set.apply(this,r)}valueOf(){return this.#t}};export{A as default};
//# sourceMappingURL=index.js.map
