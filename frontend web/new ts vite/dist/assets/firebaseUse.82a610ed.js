var Gm=Object.defineProperty,Wm=Object.defineProperties;var zm=Object.getOwnPropertyDescriptors;var ku=Object.getOwnPropertySymbols;var Hm=Object.prototype.hasOwnProperty,Ym=Object.prototype.propertyIsEnumerable;var Cu=(n,e,t)=>e in n?Gm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Nu=(n,e)=>{for(var t in e||(e={}))Hm.call(e,t)&&Cu(n,t,e[t]);if(ku)for(var t of ku(e))Ym.call(e,t)&&Cu(n,t,e[t]);return n},Du=(n,e)=>Wm(n,zm(e));import{_ as La}from"./index.23e8200d.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Qm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ah={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(d=64)),r.push(t[l],t[h],t[d],t[m])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Sh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Qm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Jm=function(n){const e=Sh(n);return Ah.encodeByteArray(e,!0)},fs=function(n){return Jm(n).replace(/\./g,"")},Xm=function(n){try{return Ah.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ps(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Zm(t)||(n[t]=ps(n[t],e[t]));return n}function Zm(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[fs(JSON.stringify(t)),fs(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kh(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($())}function Fa(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ng(){return typeof self=="object"&&self.self===self}function Ua(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bs(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rg(){return $().indexOf("Electron/")>=0}function Va(){const n=$();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ig(){return $().indexOf("MSAppHost/")>=0}function sg(){return!Fa()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wr(){return typeof indexedDB=="object"}function og(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="FirebaseError";class Le extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ag,Object.setPrototypeOf(this,Le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_n.prototype.create)}}class _n{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?cg(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Le(i,a,r)}}function cg(n,e){return n.replace(ug,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ug=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function lg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Jo(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Pu(s)&&Pu(o)){if(!Jo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Pu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Pr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ch(n,e){const t=new hg(n,e);return t.subscribe.bind(t)}class hg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");dg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Co),i.error===void 0&&(i.error=Co),i.complete===void 0&&(i.complete=Co);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Co(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(n){return n&&n._delegate?n._delegate:n}class tt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new eg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mg(e))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gt){return this.instances.has(e)}getOptions(e=Gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gt){return this.component?this.component.multipleInstances?e:Gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pg(n){return n===Gt?void 0:n}function mg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=[];var x;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(x||(x={}));const Nh={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},yg=x.INFO,vg={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},wg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=vg[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qs{constructor(e){this.name=e,this._logLevel=yg,this._logHandler=wg,this._userLogHandler=null,Ba.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}function Ig(n){Ba.forEach(e=>{e.setLogLevel(n)})}function _g(n,e){for(const t of Ba){let r=null;e&&e.level&&(r=Nh[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r!=null?r:i.logLevel)&&n({level:x[s].toLowerCase(),message:a,args:o,type:i.name})}}}const Eg=(n,e)=>e.some(t=>n instanceof t);let xu,Ou;function Tg(){return xu||(xu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bg(){return Ou||(Ou=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dh=new WeakMap,Xo=new WeakMap,Rh=new WeakMap,No=new WeakMap,qa=new WeakMap;function Sg(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(St(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Dh.set(t,n)}).catch(()=>{}),qa.set(e,n),e}function Ag(n){if(Xo.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Xo.set(n,e)}let Zo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Rh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return St(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function kg(n){Zo=n(Zo)}function Cg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Do(this),e,...t);return Rh.set(r,e.sort?e.sort():[e]),St(r)}:bg().includes(n)?function(...e){return n.apply(Do(this),e),St(Dh.get(this))}:function(...e){return St(n.apply(Do(this),e))}}function Ng(n){return typeof n=="function"?Cg(n):(n instanceof IDBTransaction&&Ag(n),Eg(n,Tg())?new Proxy(n,Zo):n)}function St(n){if(n instanceof IDBRequest)return Sg(n);if(No.has(n))return No.get(n);const e=Ng(n);return e!==n&&(No.set(n,e),qa.set(e,n)),e}const Do=n=>qa.get(n);function Dg(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=St(o);return r&&o.addEventListener("upgradeneeded",c=>{r(St(o.result),c.oldVersion,c.newVersion,St(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Rg=["get","getKey","getAll","getAllKeys","count"],Pg=["put","add","delete","clear"],Ro=new Map;function Mu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ro.get(e))return Ro.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Pg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Rg.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return Ro.set(e,s),s}kg(n=>Du(Nu({},n),{get:(e,t,r)=>Mu(e,t)||n.get(e,t,r),has:(e,t)=>!!Mu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Og(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Og(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ea="@firebase/app",Lu="0.7.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=new qs("@firebase/app"),Mg="@firebase/app-compat",Lg="@firebase/analytics-compat",Fg="@firebase/analytics",Ug="@firebase/app-check-compat",Vg="@firebase/app-check",Bg="@firebase/auth",qg="@firebase/auth-compat",$g="@firebase/database",jg="@firebase/database-compat",Kg="@firebase/functions",Gg="@firebase/functions-compat",Wg="@firebase/installations",zg="@firebase/installations-compat",Hg="@firebase/messaging",Yg="@firebase/messaging-compat",Qg="@firebase/performance",Jg="@firebase/performance-compat",Xg="@firebase/remote-config",Zg="@firebase/remote-config-compat",ey="@firebase/storage",ty="@firebase/storage-compat",ny="@firebase/firestore",ry="@firebase/firestore-compat",iy="firebase",sy="9.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="[DEFAULT]",oy={[ea]:"fire-core",[Mg]:"fire-core-compat",[Fg]:"fire-analytics",[Lg]:"fire-analytics-compat",[Vg]:"fire-app-check",[Ug]:"fire-app-check-compat",[Bg]:"fire-auth",[qg]:"fire-auth-compat",[$g]:"fire-rtdb",[jg]:"fire-rtdb-compat",[Kg]:"fire-fn",[Gg]:"fire-fn-compat",[Wg]:"fire-iid",[zg]:"fire-iid-compat",[Hg]:"fire-fcm",[Yg]:"fire-fcm-compat",[Qg]:"fire-perf",[Jg]:"fire-perf-compat",[Xg]:"fire-rc",[Zg]:"fire-rc-compat",[ey]:"fire-gcs",[ty]:"fire-gcs-compat",[ny]:"fire-fst",[ry]:"fire-fst-compat","fire-js":"fire-js",[iy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Map,zr=new Map;function ms(n,e){try{n.container.addComponent(e)}catch(t){$a.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ph(n,e){n.container.addOrOverwriteComponent(e)}function Ct(n){const e=n.name;if(zr.has(e))return $a.debug(`There were multiple attempts to register component ${e}.`),!1;zr.set(e,n);for(const t of kt.values())ms(t,n);return!0}function xh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ay(n,e,t=on){xh(n,e).clearInstance(t)}function cy(){zr.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Nt=new _n("app","Firebase",uy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=sy;function Oh(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:on,automaticDataCollectionEnabled:!1},e),r=t.name;if(typeof r!="string"||!r)throw Nt.create("bad-app-name",{appName:String(r)});const i=kt.get(r);if(i){if(Jo(n,i.options)&&Jo(t,i.config))return i;throw Nt.create("duplicate-app",{appName:r})}const s=new gg(r);for(const a of zr.values())s.addComponent(a);const o=new ly(n,t,s);return kt.set(r,o),o}function hy(n=on){const e=kt.get(n);if(!e)throw Nt.create("no-app",{appName:n});return e}function dy(){return Array.from(kt.values())}async function Mh(n){const e=n.name;kt.has(e)&&(kt.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function Xe(n,e,t){var r;let i=(r=oy[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$a.warn(a.join(" "));return}Ct(new tt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Lh(n,e){if(n!==null&&typeof n!="function")throw Nt.create("invalid-log-argument");_g(n,e)}function Fh(n){Ig(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy="firebase-heartbeat-database",py=1,Hr="firebase-heartbeat-store";let Po=null;function Uh(){return Po||(Po=Dg(fy,py,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Hr)}}}).catch(n=>{throw Nt.create("storage-open",{originalErrorMessage:n.message})})),Po}async function my(n){try{return(await Uh()).transaction(Hr).objectStore(Hr).get(Vh(n))}catch(e){throw Nt.create("storage-get",{originalErrorMessage:e.message})}}async function Fu(n,e){try{const r=(await Uh()).transaction(Hr,"readwrite");return await r.objectStore(Hr).put(e,Vh(n)),r.done}catch(t){throw Nt.create("storage-set",{originalErrorMessage:t.message})}}function Vh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=1024,yy=30*24*60*60*1e3;class vy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Iy(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Uu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=yy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Uu(),{heartbeatsToSend:t,unsentEntries:r}=wy(this._heartbeatsCache.heartbeats),i=fs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Uu(){return new Date().toISOString().substring(0,10)}function wy(n,e=gy){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Vu(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Vu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Iy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wr()?og().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await my(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vu(n){return fs(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(n){Ct(new tt("platform-logger",e=>new xg(e),"PRIVATE")),Ct(new tt("heartbeat",e=>new vy(e),"PRIVATE")),Xe(ea,Lu,n),Xe(ea,Lu,"esm2017"),Xe("fire-js","")}_y("");var Ey=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:En,_DEFAULT_ENTRY_NAME:on,_addComponent:ms,_addOrOverwriteComponent:Ph,_apps:kt,_clearComponents:cy,_components:zr,_getProvider:xh,_registerComponent:Ct,_removeServiceInstance:ay,deleteApp:Mh,getApp:hy,getApps:dy,initializeApp:Oh,onLog:Lh,registerVersion:Xe,setLogLevel:Fh,FirebaseError:Le},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,t){this._delegate=e,this.firebase=t,ms(e,new tt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Mh(this._delegate)))}_getService(e,t=on){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=on){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){ms(this._delegate,e)}_addOrOverwriteComponent(e){Ph(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Bu=new _n("app-compat","Firebase",by);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:Xe,setLogLevel:Fh,onLog:Lh,apps:null,SDK_VERSION:En,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:Ey}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||on,!Ru(e,u))throw Bu.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=Oh(u,l);if(Ru(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Ct(u)&&u.type==="PUBLIC"){const d=(m=i())=>{if(typeof m[h]!="function")throw Bu.create("invalid-app-argument",{appName:l});return m[h]()};u.serviceProps!==void 0&&ps(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...m){return this._getService.bind(this,l).apply(this,u.multipleInstances?m:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(){const n=Sy(Ty);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Bh,extendNamespace:e,createSubscribe:Ch,ErrorFactory:_n,deepExtend:ps});function e(t){ps(n,t)}return n}const Ay=Bh();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new qs("@firebase/app-compat"),ky="@firebase/app-compat",Cy="0.1.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(n){Xe(ky,Cy,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(ng()&&self.firebase!==void 0){qu.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&qu.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ft=Ay;Ny();var Dy="firebase",Ry="9.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft.registerVersion(Dy,Ry,"app-compat");const Tr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},xn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function qh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xy=Py,Oy=qh,$h=new _n("auth","Firebase",qh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=new qs("@firebase/auth");function is(n,...e){$u.logLevel<=x.ERROR&&$u.error(`Auth (${En}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n,...e){throw ja(n,...e)}function ye(n,...e){return ja(n,...e)}function jh(n,e,t){const r=Object.assign(Object.assign({},Oy()),{[e]:t});return new _n("auth","Firebase",r).create(e,{appName:n.name})}function ur(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ie(n,"argument-error"),jh(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ja(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return $h.create(n,...e)}function w(n,e,...t){if(!n)throw ja(e,...t)}function Qe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw is(e),new Error(e)}function Ke(n,e){n||Qe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Map;function Oe(n){Ke(n instanceof Function,"Expected a class definition");let e=ju.get(n);return e?(Ke(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ju.set(n,e),e)}function My(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Oe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ka(){return Ku()==="http:"||Ku()==="https:"}function Ku(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ka()||Ua()||"connection"in navigator)?navigator.onLine:!0}function Fy(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ke(t>e,"Short delay should be less than long delay!"),this.isMobile=kh()||Bs()}get(){return Ly()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(n,e){Ke(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=new Ii(3e4,6e4);function re(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function le(n,e,t,r,i={}){return Gh(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=cr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Kh.fetch()(Wh(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Gh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Uy),e);try{const i=new By(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw xr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw xr(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw xr(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw xr(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jh(n,l,u);Ie(n,l)}}catch(i){if(i instanceof Le)throw i;Ie(n,"network-request-failed")}}async function pt(n,e,t,r,i={}){const s=await le(n,e,t,r,i);return"mfaPendingCredential"in s&&Ie(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Wh(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Ga(n.config,i):`${n.config.apiScheme}://${i}`}class By{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ye(this.auth,"network-request-failed")),Vy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ye(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qy(n,e){return le(n,"POST","/v1/accounts:delete",e)}async function $y(n,e){return le(n,"POST","/v1/accounts:update",e)}async function jy(n,e){return le(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ky(n,e=!1){const t=S(n),r=await t.getIdToken(e),i=$s(r);w(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Lr(xo(i.auth_time)),issuedAtTime:Lr(xo(i.iat)),expirationTime:Lr(xo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xo(n){return Number(n)*1e3}function $s(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return is("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xm(t);return i?JSON.parse(i):(is("Failed to decode base64 JWT payload"),null)}catch(i){return is("Caught error parsing JWT payload as JSON",i),null}}function Gy(n){const e=$s(n);return w(e,"internal-error"),w(typeof e.exp!="undefined","internal-error"),w(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Le&&Wy(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Wy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lr(this.lastLoginAt),this.creationTime=Lr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(n){var e;const t=n.auth,r=await n.getIdToken(),i=await ut(n,jy(t,{idToken:r}));w(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Qy(s.providerUserInfo):[],a=Yy(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zh(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function Hy(n){const e=S(n);await Qr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yy(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Qy(n){return n.map(e=>{var{providerId:t}=e,r=La(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(n,e){const t=await Gh(n,{},async()=>{const r=cr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Wh(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Kh.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken!="undefined","internal-error"),w(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Gy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return w(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Jy(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Jr;return r&&(w(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(w(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(w(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return Qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n,e){w(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class nn{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=La(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ut(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ky(this,e)}reload(){return Hy(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Qr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ut(this,qy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,m=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,b=(a=t.tenantId)!==null&&a!==void 0?a:void 0,C=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,F=(u=t.createdAt)!==null&&u!==void 0?u:void 0,H=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:L,emailVerified:ie,isAnonymous:Y,providerData:V,stsTokenManager:fe}=t;w(L&&fe,e,"internal-error");const $t=Jr.fromJSON(this.name,fe);w(typeof L=="string",e,"internal-error"),vt(h,e.name),vt(d,e.name),w(typeof ie=="boolean",e,"internal-error"),w(typeof Y=="boolean",e,"internal-error"),vt(m,e.name),vt(g,e.name),vt(b,e.name),vt(C,e.name),vt(F,e.name),vt(H,e.name);const ko=new nn({uid:L,auth:e,email:d,emailVerified:ie,displayName:h,isAnonymous:Y,photoURL:g,phoneNumber:m,tenantId:b,stsTokenManager:$t,createdAt:F,lastLoginAt:H});return V&&Array.isArray(V)&&(ko.providerData=V.map(Km=>Object.assign({},Km))),C&&(ko._redirectEventId=C),ko}static async _fromIdTokenResponse(e,t,r=!1){const i=new Jr;i.updateFromServerResponse(t);const s=new nn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Qr(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Hh.type="NONE";const Hn=Hh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(n,e,t){return`firebase:${n}:${e}:${t}`}class $n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=rn(this.userKey,i.apiKey,s),this.fullPersistenceKey=rn("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new $n(Oe(Hn),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Oe(Hn);const o=rn(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=nn._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new $n(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new $n(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xh(e))return"Blackberry";if(Zh(e))return"Webos";if(Wa(e))return"Safari";if((e.includes("chrome/")||Qh(e))&&!e.includes("edge/"))return"Chrome";if(_i(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yh(n=$()){return/firefox\//i.test(n)}function Wa(n=$()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qh(n=$()){return/crios\//i.test(n)}function Jh(n=$()){return/iemobile/i.test(n)}function _i(n=$()){return/android/i.test(n)}function Xh(n=$()){return/blackberry/i.test(n)}function Zh(n=$()){return/webos/i.test(n)}function lr(n=$()){return/iphone|ipad|ipod/i.test(n)}function Xy(n=$()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function Zy(n=$()){var e;return lr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ev(){return Va()&&document.documentMode===10}function ed(n=$()){return lr(n)||_i(n)||Zh(n)||Xh(n)||/windows phone/i.test(n)||Jh(n)}function tv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(n,e=[]){let t;switch(n){case"Browser":t=Gu($());break;case"Worker":t=`${Gu($())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${En}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wu(this),this.idTokenSubscription=new Wu(this),this.beforeStateQueue=new nv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$h,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Oe(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $n.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qr(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?S(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Oe(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _n("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Oe(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await $n.create(this,[Oe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return w(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=td(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function ce(n){return S(n)}class Wu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ch(t=>this.observer=t)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function iv(n,e,t){const r=ce(n);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=nd(e),{host:o,port:a}=sv(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ov()}function nd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function sv(n){const e=nd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:zu(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:zu(o)}}}function zu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ov(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Qe("not implemented")}_getIdTokenResponse(e){return Qe("not implemented")}_linkToIdToken(e,t){return Qe("not implemented")}_getReauthenticationResolver(e){return Qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rd(n,e){return le(n,"POST","/v1/accounts:resetPassword",re(n,e))}async function id(n,e){return le(n,"POST","/v1/accounts:update",e)}async function av(n,e){return le(n,"POST","/v1/accounts:update",re(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cv(n,e){return pt(n,"POST","/v1/accounts:signInWithPassword",re(n,e))}async function js(n,e){return le(n,"POST","/v1/accounts:sendOobCode",re(n,e))}async function uv(n,e){return js(n,e)}async function lv(n,e){return js(n,e)}async function hv(n,e){return js(n,e)}async function dv(n,e){return js(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fv(n,e){return pt(n,"POST","/v1/accounts:signInWithEmailLink",re(n,e))}async function pv(n,e){return pt(n,"POST","/v1/accounts:signInWithEmailLink",re(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends hr{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Xr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Xr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return cv(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return fv(e,{email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return id(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pv(e,{idToken:t,email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(n,e){return pt(n,"POST","/v1/accounts:signInWithIdp",re(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="http://localhost";class nt extends hr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ie("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=La(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new nt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ct(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ct(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ct(e,t)}buildRequest(){const e={requestUri:mv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=cr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gv(n,e){return le(n,"POST","/v1/accounts:sendVerificationCode",re(n,e))}async function yv(n,e){return pt(n,"POST","/v1/accounts:signInWithPhoneNumber",re(n,e))}async function vv(n,e){const t=await pt(n,"POST","/v1/accounts:signInWithPhoneNumber",re(n,e));if(t.temporaryProof)throw xr(n,"account-exists-with-different-credential",t);return t}const wv={USER_NOT_FOUND:"user-not-found"};async function Iv(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return pt(n,"POST","/v1/accounts:signInWithPhoneNumber",re(n,t),wv)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends hr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new sn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new sn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return yv(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return vv(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Iv(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new sn({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ev(n){const e=Vn(Pr(n)).link,t=e?Vn(Pr(e)).deep_link_id:null,r=Vn(Pr(n)).deep_link_id;return(r?Vn(Pr(r)).link:null)||r||t||e||n}class Ks{constructor(e){var t,r,i,s,o,a;const c=Vn(Pr(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=_v((i=c.mode)!==null&&i!==void 0?i:null);w(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Ev(e);try{return new Ks(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.providerId=Ft.PROVIDER_ID}static credential(e,t){return Xr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ks.parseLink(t);return w(r,"argument-error"),Xr._fromEmailAndCode(e,r.code,r.tenantId)}}Ft.PROVIDER_ID="password";Ft.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ft.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends mt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class jn extends dr{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return w("providerId"in t&&"signInMethod"in t,"argument-error"),nt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return w(e.idToken||e.accessToken,"argument-error"),nt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return jn.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return jn.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new jn(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends dr{constructor(){super("facebook.com")}static credential(e){return nt._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return We.credential(e.oauthAccessToken)}catch{return null}}}We.FACEBOOK_SIGN_IN_METHOD="facebook.com";We.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends dr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nt._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ze.credential(t,r)}catch{return null}}}ze.GOOGLE_SIGN_IN_METHOD="google.com";ze.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends dr{constructor(){super("github.com")}static credential(e){return nt._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return He.credential(e.oauthAccessToken)}catch{return null}}}He.GITHUB_SIGN_IN_METHOD="github.com";He.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="http://localhost";class Yn extends hr{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return ct(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ct(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ct(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Yn(r,s)}static _create(e,t){return new Yn(e,t)}buildRequest(){return{requestUri:Tv,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv="saml.";class gs extends mt{constructor(e){w(e.startsWith(bv),"argument-error"),super(e)}static credentialFromResult(e){return gs.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return gs.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Yn.fromJSON(e);return w(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Yn._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends dr{constructor(){super("twitter.com")}static credential(e,t){return nt._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ye.credential(t,r)}catch{return null}}}Ye.TWITTER_SIGN_IN_METHOD="twitter.com";Ye.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sd(n,e){return pt(n,"POST","/v1/accounts:signUp",re(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await nn._fromIdTokenResponse(e,r,i),o=Hu(r);return new Be({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Hu(r);return new Be({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Hu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sv(n){var e;const t=ce(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Be({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await sd(t,{returnSecureToken:!0}),i=await Be._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends Le{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ys.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ys(e,t,r,i)}}function od(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ys._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Av(n,e){const t=S(n);await Gs(!0,t,e);const{providerUserInfo:r}=await $y(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=ad(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function za(n,e,t=!1){const r=await ut(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Be._forOperation(n,"link",r)}async function Gs(n,e,t){await Qr(e);const r=ad(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";w(r.has(t)===n,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cd(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await ut(n,od(r,i,e,n),t);w(s.idToken,r,"internal-error");const o=$s(s.idToken);w(o,r,"internal-error");const{sub:a}=o;return w(n.uid===a,r,"user-mismatch"),Be._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ie(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ud(n,e,t=!1){const r="signIn",i=await od(n,r,e),s=await Be._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Ws(n,e){return ud(ce(n),e)}async function ld(n,e){const t=S(n);return await Gs(!1,t,e.providerId),za(t,e)}async function hd(n,e){return cd(S(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv(n,e){return pt(n,"POST","/v1/accounts:signInWithCustomToken",re(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cv(n,e){const t=ce(n),r=await kv(t,{token:e,returnSecureToken:!0}),i=await Be._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Ha._fromServerResponse(e,t):Ie(e,"internal-error")}}class Ha extends zs{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Ha(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(n,e,t){var r;w(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),w(typeof t.dynamicLinkDomain=="undefined"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(w(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(w(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nv(n,e,t){const r=S(n),i={requestType:"PASSWORD_RESET",email:e};t&&Hs(r,i,t),await lv(r,i)}async function Dv(n,e,t){await rd(S(n),{oobCode:e,newPassword:t})}async function Rv(n,e){await av(S(n),{oobCode:e})}async function dd(n,e){const t=S(n),r=await rd(t,{oobCode:e}),i=r.requestType;switch(w(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":w(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":w(r.mfaInfo,t,"internal-error");default:w(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=zs._fromServerResponse(ce(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function Pv(n,e){const{data:t}=await dd(S(n),e);return t.email}async function xv(n,e,t){const r=ce(n),i=await sd(r,{returnSecureToken:!0,email:e,password:t}),s=await Be._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Ov(n,e,t){return Ws(S(n),Ft.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mv(n,e,t){const r=S(n),i={requestType:"EMAIL_SIGNIN",email:e};w(t.handleCodeInApp,r,"argument-error"),t&&Hs(r,i,t),await hv(r,i)}function Lv(n,e){const t=Ks.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function Fv(n,e,t){const r=S(n),i=Ft.credentialWithLink(e,t||Yr());return w(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Ws(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uv(n,e){return le(n,"POST","/v1/accounts:createAuthUri",re(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vv(n,e){const t=Ka()?Yr():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await Uv(S(n),r);return i||[]}async function Bv(n,e){const t=S(n),r=await n.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&Hs(t.auth,i,e);const{email:s}=await uv(t.auth,i);s!==n.email&&await n.reload()}async function qv(n,e,t){const r=S(n),i=await n.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};t&&Hs(r.auth,s,t);const{email:o}=await dv(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $v(n,e){return le(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jv(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=S(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await ut(r,$v(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Kv(n,e){return fd(S(n),e,null)}function Gv(n,e){return fd(S(n),null,e)}async function fd(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await ut(n,id(r,s));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n==null?void 0:n.idToken)){const o=(t=(e=$s(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Kn(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new zv(s,i);case"github.com":return new Hv(s,i);case"google.com":return new Yv(s,i);case"twitter.com":return new Qv(s,i,n.screenName||null);case"custom":case"anonymous":return new Kn(s,null);default:return new Kn(s,r,i)}}class Kn{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class pd extends Kn{constructor(e,t,r,i){super(e,t,r),this.username=i}}class zv extends Kn{constructor(e,t){super(e,"facebook.com",t)}}class Hv extends pd{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class Yv extends Kn{constructor(e,t){super(e,"google.com",t)}}class Qv extends pd{constructor(e,t,r){super(e,"twitter.com",t,r)}}function Jv(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:Wv(t)}class Jt{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new Jt("enroll",e)}static _fromMfaPendingCredential(e){return new Jt("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Jt._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Jt._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=ce(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>zs._fromServerResponse(r,a));w(i.mfaPendingCredential,r,"internal-error");const o=Jt._fromMfaPendingCredential(i.mfaPendingCredential);return new Ya(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await Be._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return w(t.user,r,"internal-error"),Be._forOperation(t.user,t.operationType,u);default:Ie(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Xv(n,e){var t;const r=S(n),i=e;return w(e.customData.operationType,r,"argument-error"),w((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Ya._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(n,e){return le(n,"POST","/v2/accounts/mfaEnrollment:start",re(n,e))}function ew(n,e){return le(n,"POST","/v2/accounts/mfaEnrollment:finalize",re(n,e))}function tw(n,e){return le(n,"POST","/v2/accounts/mfaEnrollment:withdraw",re(n,e))}class Qa{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>zs._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Qa(e)}async getSession(){return Jt._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const r=e,i=await this.getSession(),s=await ut(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await ut(this.user,tw(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const Oo=new WeakMap;function nw(n){const e=S(n);return Oo.has(e)||Oo.set(e,Qa._fromUser(e)),Oo.get(e)}const vs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vs,"1"),this.storage.removeItem(vs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(){const n=$();return Wa(n)||lr(n)}const iw=1e3,sw=10;class gd extends md{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rw()&&tv(),this.fallbackToPolling=ed(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ev()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,sw):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},iw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gd.type="LOCAL";const Ja=gd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd extends md{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yd.type="SESSION";const an=yd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Ys(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await ow(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ys.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Ei("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(){return window}function cw(n){ee().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(){return typeof ee().WorkerGlobalScope!="undefined"&&typeof ee().importScripts=="function"}async function uw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function hw(){return Xa()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="firebaseLocalStorageDb",dw=1,ws="firebaseLocalStorage",wd="fbase_key";class Ti{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qs(n,e){return n.transaction([ws],e?"readwrite":"readonly").objectStore(ws)}function fw(){const n=indexedDB.deleteDatabase(vd);return new Ti(n).toPromise()}function ta(){const n=indexedDB.open(vd,dw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ws,{keyPath:wd})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ws)?e(r):(r.close(),await fw(),e(await ta()))})})}async function Yu(n,e,t){const r=Qs(n,!0).put({[wd]:e,value:t});return new Ti(r).toPromise()}async function pw(n,e){const t=Qs(n,!1).get(e),r=await new Ti(t).toPromise();return r===void 0?null:r.value}function Qu(n,e){const t=Qs(n,!0).delete(e);return new Ti(t).toPromise()}const mw=800,gw=3;class Id{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ta(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>gw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ys._getInstance(hw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await uw(),!this.activeServiceWorker)return;this.sender=new aw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((t=r[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ta();return await Yu(e,vs,"1"),await Qu(e,vs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>pw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Qu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Qs(i,!1).getAll();return new Ti(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Id.type="LOCAL";const Zr=Id;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(n,e){return le(n,"POST","/v2/accounts/mfaSignIn:start",re(n,e))}function vw(n,e){return le(n,"POST","/v2/accounts/mfaSignIn:finalize",re(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ww(n){return(await le(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function _d(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=ye("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Iw().appendChild(r)})}function Ed(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=500,Ew=6e4,zi=1e12;class Tw{constructor(e){this.auth=e,this.counter=zi,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new bw(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||zi;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||zi;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||zi;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class bw{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;w(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Sw(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},Ew)},_w))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Sw(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=Ed("rcb"),Aw=new Ii(3e4,6e4),kw="https://www.google.com/recaptcha/api.js?";class Cw{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!ee().grecaptcha}load(e,t=""){return w(Nw(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(ee().grecaptcha):new Promise((r,i)=>{const s=ee().setTimeout(()=>{i(ye(e,"network-request-failed"))},Aw.get());ee()[Mo]=()=>{ee().clearTimeout(s),delete ee()[Mo];const a=ee().grecaptcha;if(!a){i(ye(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${kw}?${cr({onload:Mo,render:"explicit",hl:t})}`;_d(o).catch(()=>{clearTimeout(s),i(ye(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!ee().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Nw(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class Dw{async load(e){return new Tw(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="recaptcha",Rw={theme:"light",type:"image"};class Pw{constructor(e,t=Object.assign({},Rw),r){this.parameters=t,this.type=Td,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ce(r),this.isInvisible=this.parameters.size==="invisible",w(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;w(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Dw:new Cw,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){w(!this.parameters.sitekey,this.auth,"argument-error"),w(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),w(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=ee()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){w(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){w(Ka()&&!Xa(),this.auth,"internal-error"),await xw(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ww(this.auth);w(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return w(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function xw(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=sn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Ow(n,e,t){const r=ce(n),i=await Js(r,e,S(t));return new Za(i,s=>Ws(r,s))}async function Mw(n,e,t){const r=S(n);await Gs(!1,r,"phone");const i=await Js(r.auth,e,S(t));return new Za(i,s=>ld(r,s))}async function Lw(n,e,t){const r=S(n),i=await Js(r.auth,e,S(t));return new Za(i,s=>hd(r,s))}async function Js(n,e,t){var r;const i=await t.verify();try{w(typeof i=="string",n,"argument-error"),w(t.type===Td,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return w(o.type==="enroll",n,"internal-error"),(await Zv(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{w(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return w(a,n,"missing-multi-factor-info"),(await yw(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await gv(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function Fw(n,e){await za(S(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.providerId=je.PROVIDER_ID,this.auth=ce(e)}verifyPhoneNumber(e,t){return Js(this.auth,e,S(t))}static credential(e,t){return sn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return je.credentialFromTaggedObject(t)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?sn._fromTokenResponse(t,r):null}}je.PROVIDER_ID="phone";je.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(n,e){return e?Oe(e):(w(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec extends hr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ct(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ct(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ct(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Uw(n){return ud(n.auth,new ec(n),n.bypassAuthState)}function Vw(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),cd(t,new ec(n),n.bypassAuthState)}async function Bw(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),za(t,new ec(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Uw;case"linkViaPopup":case"linkViaRedirect":return Bw;case"reauthViaPopup":case"reauthViaRedirect":return Vw;default:Ie(this.auth,"internal-error")}}resolve(e){Ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=new Ii(2e3,1e4);async function $w(n,e,t){const r=ce(n);ur(n,e,mt);const i=Tn(r,t);return new st(r,"signInViaPopup",e,i).executeNotNull()}async function jw(n,e,t){const r=S(n);ur(r.auth,e,mt);const i=Tn(r.auth,t);return new st(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function Kw(n,e,t){const r=S(n);ur(r.auth,e,mt);const i=Tn(r.auth,t);return new st(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class st extends bd{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,st.currentPopupAction&&st.currentPopupAction.cancel(),st.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){Ke(this.filter.length===1,"Popup operations only handle one event");const e=Ei();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,st.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ye(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,qw.get())};e()}}st.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw="pendingRedirect",Fr=new Map;class Ww extends bd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Fr.get(this.auth._key());if(!e){try{const r=await zw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Fr.set(this.auth._key(),e)}return this.bypassAuthState||Fr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zw(n,e){const t=Ad(e),r=Sd(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function tc(n,e){return Sd(n)._set(Ad(e),"true")}function Hw(){Fr.clear()}function nc(n,e){Fr.set(n._key(),e)}function Sd(n){return Oe(n._redirectPersistence)}function Ad(n){return rn(Gw,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(n,e,t){return Qw(n,e,t)}async function Qw(n,e,t){const r=ce(n);ur(n,e,mt);const i=Tn(r,t);return await tc(i,r),i._openRedirect(r,e,"signInViaRedirect")}function Jw(n,e,t){return Xw(n,e,t)}async function Xw(n,e,t){const r=S(n);ur(r.auth,e,mt);const i=Tn(r.auth,t);await tc(i,r.auth);const s=await kd(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function Zw(n,e,t){return eI(n,e,t)}async function eI(n,e,t){const r=S(n);ur(r.auth,e,mt);const i=Tn(r.auth,t);await Gs(!1,r,e.providerId),await tc(i,r.auth);const s=await kd(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function tI(n,e){return await ce(n)._initializationPromise,Xs(n,e,!1)}async function Xs(n,e,t=!1){const r=ce(n),i=Tn(r,e),o=await new Ww(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function kd(n){const e=Ei(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=10*60*1e3;class Cd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Nd(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ye(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ju(e))}saveEventToCache(e){this.cachedEventUids.add(Ju(e)),this.lastProcessedEventTime=Date.now()}}function Ju(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Nd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dd(n,e={}){return le(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sI=/^https?/;async function oI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Dd(n);for(const t of e)try{if(aI(t))return}catch{}Ie(n,"unauthorized-domain")}function aI(n){const e=Yr(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!sI.test(t))return!1;if(iI.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=new Ii(3e4,6e4);function Xu(){const n=ee().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function uI(n){return new Promise((e,t)=>{var r,i,s;function o(){Xu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xu(),t(ye(n,"network-request-failed"))},timeout:cI.get()})}if(!((i=(r=ee().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ee().gapi)===null||s===void 0)&&s.load)o();else{const a=Ed("iframefcb");return ee()[a]=()=>{gapi.load?o():t(ye(n,"network-request-failed"))},_d(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw ss=null,e})}let ss=null;function lI(n){return ss=ss||uI(n),ss}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=new Ii(5e3,15e3),dI="__/auth/iframe",fI="emulator/auth/iframe",pI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gI(n){const e=n.config;w(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ga(e,fI):`https://${n.config.authDomain}/${dI}`,r={apiKey:e.apiKey,appName:n.name,v:En},i=mI.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${cr(r).slice(1)}`}async function yI(n){const e=await lI(n),t=ee().gapi;return w(t,n,"internal-error"),e.open({where:document.body,url:gI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ye(n,"network-request-failed"),a=ee().setTimeout(()=>{s(o)},hI.get());function c(){ee().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wI=500,II=600,_I="_blank",EI="http://localhost";class Zu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TI(n,e,t,r=wI,i=II){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},vI),{width:r.toString(),height:i.toString(),top:s,left:o}),u=$().toLowerCase();t&&(a=Qh(u)?_I:t),Yh(u)&&(e=e||EI,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[m,g])=>`${d}${m}=${g},`,"");if(Zy(u)&&a!=="_self")return bI(e||"",a),new Zu(null);const h=window.open(e||"",a,l);w(h,n,"popup-blocked");try{h.focus()}catch{}return new Zu(h)}function bI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="__/auth/handler",AI="emulator/auth/handler";function na(n,e,t,r,i,s){w(n.config.authDomain,n,"auth-domain-config-required"),w(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:En,eventId:i};if(e instanceof mt){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",lg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(s||{}))o[c]=u}if(e instanceof dr){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${kI(n)}?${cr(a).slice(1)}`}function kI({config:n}){return n.emulator?Ga(n,AI):`https://${n.authDomain}/${SI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="webStorageSupport";class CI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=an,this._completeRedirectFn=Xs,this._overrideRedirectResult=nc}async _openPopup(e,t,r,i){var s;Ke((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=na(e,t,r,Yr(),i);return TI(e,o,Ei())}async _openRedirect(e,t,r,i){return await this._originValidation(e),cw(na(e,t,r,Yr(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Ke(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await yI(e),r=new Cd(e);return t.register("authEvent",i=>(w(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Lo,{type:Lo},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Lo];o!==void 0&&t(!!o),Ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=oI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ed()||Wa()||lr()}}const NI=CI;class DI{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Qe("unexpected MultiFactorSessionType")}}}class rc extends DI{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new rc(e)}_finalizeEnroll(e,t,r){return ew(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return vw(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Rd{constructor(){}static assertion(e){return rc._fromCredential(e)}}Rd.FACTOR_ID="phone";var el="@firebase/auth",tl="0.20.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xI(n){Ct(new tt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{w(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),w(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:td(n)},l=new rv(a,c,u);return My(l,t),l})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ct(new tt("auth-internal",e=>{const t=ce(e.getProvider("auth").getImmediate());return(r=>new RI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(el,tl,PI(n)),Xe(el,tl,"esm2017")}xI("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=2e3;async function MI(n,e,t){var r;const{BuildInfo:i}=cn();Ke(e.sessionId,"AuthEvent did not contain a session ID");const s=await BI(e.sessionId),o={};return lr()?o.ibi=i.packageName:_i()?o.apn=i.packageName:Ie(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,na(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function LI(n){const{BuildInfo:e}=cn(),t={};lr()?t.iosBundleId=e.packageName:_i()?t.androidPackageName=e.packageName:Ie(n,"operation-not-supported-in-this-environment"),await Dd(n,t)}function FI(n){const{cordova:e}=cn();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,Xy()?"_blank":"_system","location=yes"),t(i)})})}async function UI(n,e,t){const{cordova:r}=cn();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(ye(n,"redirect-cancelled-by-user"))},OI))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),_i()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function VI(n){var e,t,r,i,s,o,a,c,u,l;const h=cn();w(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),w(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)!="undefined",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),w(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function BI(n){const e=qI(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function qI(n){if(Ke(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=20;class jI extends Cd{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function KI(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:zI(),postBody:null,tenantId:n.tenantId,error:ye(n,"no-auth-event")}}function GI(n,e){return ra()._set(ia(n),e)}async function nl(n){const e=await ra()._get(ia(n));return e&&await ra()._remove(ia(n)),e}function WI(n,e){var t,r;const i=YI(e);if(i.includes("/__/auth/callback")){const s=os(i),o=s.firebaseError?HI(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?ye(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function zI(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<$I;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function ra(){return Oe(Ja)}function ia(n){return rn("authEvent",n.config.apiKey,n.name)}function HI(n){try{return JSON.parse(n)}catch{return null}}function YI(n){const e=os(n),t=e.link?decodeURIComponent(e.link):void 0,r=os(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return os(i).link||i||r||t||n}function os(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Vn(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=500;class JI{constructor(){this._redirectPersistence=an,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Xs,this._overrideRedirectResult=nc}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new jI(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ie(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){VI(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),Hw(),await this._originValidation(e);const o=KI(e,r,i);await GI(e,o);const a=await MI(e,o,t),c=await FI(a);return UI(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=LI(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=cn(),o=setTimeout(async()=>{await nl(e),t.onEvent(rl())},QI),a=async l=>{clearTimeout(o);const h=await nl(e);let d=null;h&&(l==null?void 0:l.url)&&(d=WI(h,l.url)),t.onEvent(d||rl())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;cn().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const XI=JI;function rl(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ye("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(n,e){ce(n)._logFramework(e)}var e_="@firebase/auth-compat",t_="0.2.15";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=1e3;function Ur(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function r_(){return Ur()==="http:"||Ur()==="https:"}function Pd(n=$()){return!!((Ur()==="file:"||Ur()==="ionic:"||Ur()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function i_(){return Bs()||Fa()}function s_(){return Va()&&(document==null?void 0:document.documentMode)===11}function o_(n=$()){return/Edge\/\d+/.test(n)}function a_(n=$()){return s_()||o_(n)}function xd(){try{const n=self.localStorage,e=Ei();if(n)return n.setItem(e,"1"),n.removeItem(e),a_()?Wr():!0}catch{return ic()&&Wr()}return!1}function ic(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Fo(){return(r_()||Ua()||Pd())&&!i_()&&xd()&&!ic()}function Od(){return Pd()&&typeof document!="undefined"}async function c_(){return Od()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},n_);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function u_(){return typeof window!="undefined"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe={LOCAL:"local",NONE:"none",SESSION:"session"},br=w,Md="persistence";function l_(n,e){if(br(Object.values(xe).includes(e),n,"invalid-persistence-type"),Bs()){br(e!==xe.SESSION,n,"unsupported-persistence-type");return}if(Fa()){br(e===xe.NONE,n,"unsupported-persistence-type");return}if(ic()){br(e===xe.NONE||e===xe.LOCAL&&Wr(),n,"unsupported-persistence-type");return}br(e===xe.NONE||xd(),n,"unsupported-persistence-type")}async function sa(n){await n._initializationPromise;const e=Ld(),t=rn(Md,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function h_(n,e){const t=Ld();if(!t)return[];const r=rn(Md,n,e);switch(t.getItem(r)){case xe.NONE:return[Hn];case xe.LOCAL:return[Zr,an];case xe.SESSION:return[an];default:return[]}}function Ld(){var n;try{return((n=u_())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=w;class Tt{constructor(){this.browserResolver=Oe(NI),this.cordovaResolver=Oe(XI),this.underlyingResolver=null,this._redirectPersistence=an,this._completeRedirectFn=Xs,this._overrideRedirectResult=nc}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Od()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return d_(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await c_();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(n){return n.unwrap()}function f_(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(n){return Ud(n)}function m_(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new g_(n,Xv(n,e))}else if(r){const i=Ud(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Ud(n){const{_tokenResponse:e}=n instanceof Le?n.customData:n;if(!e)return null;if(!(n instanceof Le)&&"temporaryProof"in e&&"phoneNumber"in e)return je.credentialFromResult(n);const t=e.providerId;if(!t||t===Tr.PASSWORD)return null;let r;switch(t){case Tr.GOOGLE:r=ze;break;case Tr.FACEBOOK:r=We;break;case Tr.GITHUB:r=He;break;case Tr.TWITTER:r=Ye;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Yn._create(t,a):nt._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new jn(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof Le?r.credentialFromError(n):r.credentialFromResult(n)}function Re(n,e){return e.catch(t=>{throw t instanceof Le&&m_(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:p_(t),additionalUserInfo:Jv(t),user:ot.getOrCreate(i)}})}async function oa(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Re(n,t.confirm(r))}}class g_{constructor(e,t){this.resolver=t,this.auth=f_(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Re(Fd(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this._delegate=e,this.multiFactor=nw(e)}static getOrCreate(e){return ot.USER_MAP.has(e)||ot.USER_MAP.set(e,new ot(e)),ot.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Re(this.auth,ld(this._delegate,e))}async linkWithPhoneNumber(e,t){return oa(this.auth,Mw(this._delegate,e,t))}async linkWithPopup(e){return Re(this.auth,Kw(this._delegate,e,Tt))}async linkWithRedirect(e){return await sa(ce(this.auth)),Zw(this._delegate,e,Tt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Re(this.auth,hd(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return oa(this.auth,Lw(this._delegate,e,t))}reauthenticateWithPopup(e){return Re(this.auth,jw(this._delegate,e,Tt))}async reauthenticateWithRedirect(e){return await sa(ce(this.auth)),Jw(this._delegate,e,Tt)}sendEmailVerification(e){return Bv(this._delegate,e)}async unlink(e){return await Av(this._delegate,e),this}updateEmail(e){return Kv(this._delegate,e)}updatePassword(e){return Gv(this._delegate,e)}updatePhoneNumber(e){return Fw(this._delegate,e)}updateProfile(e){return jv(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return qv(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ot.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=w;class aa{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Sr(r,"invalid-api-key",{appName:e.name}),Sr(r,"invalid-api-key",{appName:e.name});const i=typeof window!="undefined"?Tt:void 0;this._delegate=t.initialize({options:{persistence:y_(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(xy),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ot.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){iv(this._delegate,e,t)}applyActionCode(e){return Rv(this._delegate,e)}checkActionCode(e){return dd(this._delegate,e)}confirmPasswordReset(e,t){return Dv(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Re(this._delegate,xv(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Vv(this._delegate,e)}isSignInWithEmailLink(e){return Lv(this._delegate,e)}async getRedirectResult(){Sr(Fo(),this._delegate,"operation-not-supported-in-this-environment");const e=await tI(this._delegate,Tt);return e?Re(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){ZI(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=il(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=il(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return Mv(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Nv(this._delegate,e,t||void 0)}async setPersistence(e){l_(this._delegate,e);let t;switch(e){case xe.SESSION:t=an;break;case xe.LOCAL:t=await Oe(Zr)._isAvailable()?Zr:Ja;break;case xe.NONE:t=Hn;break;default:return Ie("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Re(this._delegate,Sv(this._delegate))}signInWithCredential(e){return Re(this._delegate,Ws(this._delegate,e))}signInWithCustomToken(e){return Re(this._delegate,Cv(this._delegate,e))}signInWithEmailAndPassword(e,t){return Re(this._delegate,Ov(this._delegate,e,t))}signInWithEmailLink(e,t){return Re(this._delegate,Fv(this._delegate,e,t))}signInWithPhoneNumber(e,t){return oa(this._delegate,Ow(this._delegate,e,t))}async signInWithPopup(e){return Sr(Fo(),this._delegate,"operation-not-supported-in-this-environment"),Re(this._delegate,$w(this._delegate,e,Tt))}async signInWithRedirect(e){return Sr(Fo(),this._delegate,"operation-not-supported-in-this-environment"),await sa(this._delegate),Yw(this._delegate,e,Tt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Pv(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}aa.Persistence=xe;function il(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&ot.getOrCreate(o)),error:e,complete:t}}function y_(n,e){const t=h_(n,e);if(typeof self!="undefined"&&!t.includes(Zr)&&t.push(Zr),typeof window!="undefined")for(const r of[Ja,an])t.includes(r)||t.push(r);return t.includes(Hn)||t.push(Hn),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this.providerId="phone",this._delegate=new je(Fd(ft.auth()))}static credential(e,t){return je.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}sc.PHONE_SIGN_IN_METHOD=je.PHONE_SIGN_IN_METHOD;sc.PROVIDER_ID=je.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=w;class w_{constructor(e,t,r=ft.app()){var i;v_((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Pw(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="auth-compat";function __(n){n.INTERNAL.registerComponent(new tt(I_,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new aa(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:xn.EMAIL_SIGNIN,PASSWORD_RESET:xn.PASSWORD_RESET,RECOVER_EMAIL:xn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:xn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:xn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:xn.VERIFY_EMAIL}},EmailAuthProvider:Ft,FacebookAuthProvider:We,GithubAuthProvider:He,GoogleAuthProvider:ze,OAuthProvider:jn,SAMLAuthProvider:gs,PhoneAuthProvider:sc,PhoneMultiFactorGenerator:Rd,RecaptchaVerifier:w_,TwitterAuthProvider:Ye,Auth:aa,AuthCredential:hr,Error:Le}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(e_,t_)}__(ft);var E_=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},E,oc=oc||{},N=E_||self;function Is(){}function ca(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function bi(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function T_(n){return Object.prototype.hasOwnProperty.call(n,Uo)&&n[Uo]||(n[Uo]=++b_)}var Uo="closure_uid_"+(1e9*Math.random()>>>0),b_=0;function S_(n,e,t){return n.call.apply(n.bind,arguments)}function A_(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function ve(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ve=S_:ve=A_,ve.apply(null,arguments)}function Hi(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function _e(n,e){function t(){}t.prototype=e.prototype,n.Z=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ut(){this.s=this.s,this.o=this.o}var k_=0;Ut.prototype.s=!1;Ut.prototype.na=function(){!this.s&&(this.s=!0,this.M(),k_!=0)&&T_(this)};Ut.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Vd=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1},Bd=Array.prototype.forEach?function(n,e,t){Array.prototype.forEach.call(n,e,t)}:function(n,e,t){const r=n.length,i=typeof n=="string"?n.split(""):n;for(let s=0;s<r;s++)s in i&&e.call(t,i[s],s,n)};function C_(n){e:{var e=wE;const t=n.length,r=typeof n=="string"?n.split(""):n;for(let i=0;i<t;i++)if(i in r&&e.call(void 0,r[i],i,n)){e=i;break e}e=-1}return 0>e?null:typeof n=="string"?n.charAt(e):n[e]}function sl(n){return Array.prototype.concat.apply([],arguments)}function ac(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function _s(n){return/^[\s\xa0]*$/.test(n)}var ol=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function ke(n,e){return n.indexOf(e)!=-1}function Vo(n,e){return n<e?-1:n>e?1:0}var Ce;e:{var al=N.navigator;if(al){var cl=al.userAgent;if(cl){Ce=cl;break e}}Ce=""}function cc(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function qd(n){const e={};for(const t in n)e[t]=n[t];return e}var ul="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $d(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<ul.length;s++)t=ul[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function uc(n){return uc[" "](n),n}uc[" "]=Is;function N_(n){var e=P_;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var D_=ke(Ce,"Opera"),Qn=ke(Ce,"Trident")||ke(Ce,"MSIE"),jd=ke(Ce,"Edge"),ua=jd||Qn,Kd=ke(Ce,"Gecko")&&!(ke(Ce.toLowerCase(),"webkit")&&!ke(Ce,"Edge"))&&!(ke(Ce,"Trident")||ke(Ce,"MSIE"))&&!ke(Ce,"Edge"),R_=ke(Ce.toLowerCase(),"webkit")&&!ke(Ce,"Edge");function Gd(){var n=N.document;return n?n.documentMode:void 0}var Es;e:{var Bo="",qo=function(){var n=Ce;if(Kd)return/rv:([^\);]+)(\)|;)/.exec(n);if(jd)return/Edge\/([\d\.]+)/.exec(n);if(Qn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(R_)return/WebKit\/(\S+)/.exec(n);if(D_)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(qo&&(Bo=qo?qo[1]:""),Qn){var $o=Gd();if($o!=null&&$o>parseFloat(Bo)){Es=String($o);break e}}Es=Bo}var P_={};function x_(){return N_(function(){let n=0;const e=ol(String(Es)).split("."),t=ol("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var i=e[o]||"",s=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;n=Vo(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Vo(i[2].length==0,s[2].length==0)||Vo(i[2],s[2]),i=i[3],s=s[3]}while(n==0)}return 0<=n})}var la;if(N.document&&Qn){var ll=Gd();la=ll||parseInt(Es,10)||void 0}else la=void 0;var O_=la,M_=function(){if(!N.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{N.addEventListener("test",Is,e),N.removeEventListener("test",Is,e)}catch{}return n}();function Te(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};function ei(n,e){if(Te.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Kd){e:{try{uc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:L_[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&ei.Z.h.call(this)}}_e(ei,Te);var L_={2:"touch",3:"pen",4:"mouse"};ei.prototype.h=function(){ei.Z.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Si="closure_listenable_"+(1e6*Math.random()|0),F_=0;function U_(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.ia=i,this.key=++F_,this.ca=this.fa=!1}function Zs(n){n.ca=!0,n.listener=null,n.proxy=null,n.src=null,n.ia=null}function eo(n){this.src=n,this.g={},this.h=0}eo.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=da(n,e,r,i);return-1<o?(e=n[o],t||(e.fa=!1)):(e=new U_(e,this.src,s,!!r,i),e.fa=t,n.push(e)),e};function ha(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Vd(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Zs(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function da(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.ca&&s.listener==e&&s.capture==!!t&&s.ia==r)return i}return-1}var lc="closure_lm_"+(1e6*Math.random()|0),jo={};function Wd(n,e,t,r,i){if(r&&r.once)return Hd(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Wd(n,e[s],t,r,i);return null}return t=fc(t),n&&n[Si]?n.N(e,t,bi(r)?!!r.capture:!!r,i):zd(n,e,t,!1,r,i)}function zd(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=bi(i)?!!i.capture:!!i,a=dc(n);if(a||(n[lc]=a=new eo(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=V_(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)M_||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(Qd(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function V_(){function n(t){return e.call(n.src,n.listener,t)}var e=B_;return n}function Hd(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Hd(n,e[s],t,r,i);return null}return t=fc(t),n&&n[Si]?n.O(e,t,bi(r)?!!r.capture:!!r,i):zd(n,e,t,!0,r,i)}function Yd(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Yd(n,e[s],t,r,i);else r=bi(r)?!!r.capture:!!r,t=fc(t),n&&n[Si]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=da(s,t,r,i),-1<t&&(Zs(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=dc(n))&&(e=n.g[e.toString()],n=-1,e&&(n=da(e,t,r,i)),(t=-1<n?e[n]:null)&&hc(t))}function hc(n){if(typeof n!="number"&&n&&!n.ca){var e=n.src;if(e&&e[Si])ha(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Qd(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=dc(e))?(ha(t,n),t.h==0&&(t.src=null,e[lc]=null)):Zs(n)}}}function Qd(n){return n in jo?jo[n]:jo[n]="on"+n}function B_(n,e){if(n.ca)n=!0;else{e=new ei(e,this);var t=n.listener,r=n.ia||n.src;n.fa&&hc(n),n=t.call(r,e)}return n}function dc(n){return n=n[lc],n instanceof eo?n:null}var Ko="__closure_events_fn_"+(1e9*Math.random()>>>0);function fc(n){return typeof n=="function"?n:(n[Ko]||(n[Ko]=function(e){return n.handleEvent(e)}),n[Ko])}function ue(){Ut.call(this),this.i=new eo(this),this.P=this,this.I=null}_e(ue,Ut);ue.prototype[Si]=!0;ue.prototype.removeEventListener=function(n,e,t,r){Yd(this,n,e,t,r)};function we(n,e){var t,r=n.I;if(r)for(t=[];r;r=r.I)t.push(r);if(n=n.P,r=e.type||e,typeof e=="string")e=new Te(e,n);else if(e instanceof Te)e.target=e.target||n;else{var i=e;e=new Te(r,n),$d(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=Yi(o,r,!0,e)&&i}if(o=e.g=n,i=Yi(o,r,!0,e)&&i,i=Yi(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=Yi(o,r,!1,e)&&i}ue.prototype.M=function(){if(ue.Z.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)Zs(t[r]);delete n.g[e],n.h--}}this.I=null};ue.prototype.N=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};ue.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function Yi(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==t){var a=o.listener,c=o.ia||o.src;o.fa&&ha(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var pc=N.JSON.stringify;function q_(){var n=Xd;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class $_{constructor(){this.h=this.g=null}add(e,t){const r=Jd.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Jd=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new j_,n=>n.reset());class j_{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function K_(n){N.setTimeout(()=>{throw n},0)}function mc(n,e){fa||G_(),pa||(fa(),pa=!0),Xd.add(n,e)}var fa;function G_(){var n=N.Promise.resolve(void 0);fa=function(){n.then(W_)}}var pa=!1,Xd=new $_;function W_(){for(var n;n=q_();){try{n.h.call(n.g)}catch(t){K_(t)}var e=Jd;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}pa=!1}function to(n,e){ue.call(this),this.h=n||1,this.g=e||N,this.j=ve(this.kb,this),this.l=Date.now()}_e(to,ue);E=to.prototype;E.da=!1;E.S=null;E.kb=function(){if(this.da){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-n):(this.S&&(this.g.clearTimeout(this.S),this.S=null),we(this,"tick"),this.da&&(gc(this),this.start()))}};E.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function gc(n){n.da=!1,n.S&&(n.g.clearTimeout(n.S),n.S=null)}E.M=function(){to.Z.M.call(this),gc(this),delete this.g};function yc(n,e,t){if(typeof n=="function")t&&(n=ve(n,t));else if(n&&typeof n.handleEvent=="function")n=ve(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:N.setTimeout(n,e||0)}function Zd(n){n.g=yc(()=>{n.g=null,n.i&&(n.i=!1,Zd(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class z_ extends Ut{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Zd(this)}M(){super.M(),this.g&&(N.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ti(n){Ut.call(this),this.h=n,this.g={}}_e(ti,Ut);var hl=[];function ef(n,e,t,r){Array.isArray(t)||(t&&(hl[0]=t.toString()),t=hl);for(var i=0;i<t.length;i++){var s=Wd(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function tf(n){cc(n.g,function(e,t){this.g.hasOwnProperty(t)&&hc(e)},n),n.g={}}ti.prototype.M=function(){ti.Z.M.call(this),tf(this)};ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function no(){this.g=!0}no.prototype.Aa=function(){this.g=!1};function H_(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function Y_(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function Bn(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+J_(n,t)+(r?" "+r:"")})}function Q_(n,e){n.info(function(){return"TIMEOUT: "+e})}no.prototype.info=function(){};function J_(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return pc(t)}catch{return e}}var bn={},dl=null;function ro(){return dl=dl||new ue}bn.Ma="serverreachability";function nf(n){Te.call(this,bn.Ma,n)}_e(nf,Te);function ni(n){const e=ro();we(e,new nf(e))}bn.STAT_EVENT="statevent";function rf(n,e){Te.call(this,bn.STAT_EVENT,n),this.stat=e}_e(rf,Te);function Ne(n){const e=ro();we(e,new rf(e,n))}bn.Na="timingevent";function sf(n,e){Te.call(this,bn.Na,n),this.size=e}_e(sf,Te);function Ai(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return N.setTimeout(function(){n()},e)}var io={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},of={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function vc(){}vc.prototype.h=null;function fl(n){return n.h||(n.h=n.i())}function af(){}var ki={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function wc(){Te.call(this,"d")}_e(wc,Te);function Ic(){Te.call(this,"c")}_e(Ic,Te);var ma;function so(){}_e(so,vc);so.prototype.g=function(){return new XMLHttpRequest};so.prototype.i=function(){return{}};ma=new so;function Ci(n,e,t,r){this.l=n,this.j=e,this.m=t,this.X=r||1,this.V=new ti(this),this.P=X_,n=ua?125:void 0,this.W=new to(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new cf}function cf(){this.i=null,this.g="",this.h=!1}var X_=45e3,ga={},Ts={};E=Ci.prototype;E.setTimeout=function(n){this.P=n};function ya(n,e,t){n.K=1,n.v=ao(lt(e)),n.s=t,n.U=!0,uf(n,null)}function uf(n,e){n.F=Date.now(),Ni(n),n.A=lt(n.v);var t=n.A,r=n.X;Array.isArray(r)||(r=[String(r)]),gf(t.h,"t",r),n.C=0,t=n.l.H,n.h=new cf,n.g=Lf(n.l,t?e:null,!n.s),0<n.O&&(n.L=new z_(ve(n.Ia,n,n.g),n.O)),ef(n.V,n.g,"readystatechange",n.gb),e=n.H?qd(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.s,e)):(n.u="GET",n.g.ea(n.A,n.u,null,e)),ni(),H_(n.j,n.u,n.A,n.m,n.X,n.s)}E.gb=function(n){n=n.target;const e=this.L;e&&at(n)==3?e.l():this.Ia(n)};E.Ia=function(n){try{if(n==this.g)e:{const l=at(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||ua||this.g&&(this.h.h||this.g.ga()||yl(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?ni(3):ni(2)),oo(this);var t=this.g.ba();this.N=t;t:if(lf(this)){var r=yl(this.g);n="";var i=r.length,s=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Xt(this),Vr(this);var o="";break t}this.h.i=new N.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=t==200,Y_(this.j,this.u,this.A,this.m,this.X,l,t),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_s(a)){var u=a;break t}}u=null}if(t=u)Bn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,va(this,t);else{this.i=!1,this.o=3,Ne(12),Xt(this),Vr(this);break e}}this.U?(hf(this,l,o),ua&&this.i&&l==3&&(ef(this.V,this.W,"tick",this.fb),this.W.start())):(Bn(this.j,this.m,o,null),va(this,o)),l==4&&Xt(this),this.i&&!this.I&&(l==4?Pf(this.l,this):(this.i=!1,Ni(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ne(12)):(this.o=0,Ne(13)),Xt(this),Vr(this)}}}catch{}finally{}};function lf(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Ba:!1}function hf(n,e,t){let r=!0,i;for(;!n.I&&n.C<t.length;)if(i=Z_(n,t),i==Ts){e==4&&(n.o=4,Ne(14),r=!1),Bn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==ga){n.o=4,Ne(15),Bn(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Bn(n.j,n.m,i,null),va(n,i);lf(n)&&i!=Ts&&i!=ga&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Ne(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.aa&&(n.aa=!0,e=n.l,e.g==n&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+t.length),Nc(e),e.L=!0,Ne(11))):(Bn(n.j,n.m,t,"[Invalid Chunked Response]"),Xt(n),Vr(n))}E.fb=function(){if(this.g){var n=at(this.g),e=this.g.ga();this.C<e.length&&(oo(this),hf(this,n,e),this.i&&n!=4&&Ni(this))}};function Z_(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Ts:(t=Number(e.substring(t,r)),isNaN(t)?ga:(r+=1,r+t>e.length?Ts:(e=e.substr(r,t),n.C=r+t,e)))}E.cancel=function(){this.I=!0,Xt(this)};function Ni(n){n.Y=Date.now()+n.P,df(n,n.P)}function df(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Ai(ve(n.eb,n),e)}function oo(n){n.B&&(N.clearTimeout(n.B),n.B=null)}E.eb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Q_(this.j,this.A),this.K!=2&&(ni(),Ne(17)),Xt(this),this.o=2,Vr(this)):df(this,this.Y-n)};function Vr(n){n.l.G==0||n.I||Pf(n.l,n)}function Xt(n){oo(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,gc(n.W),tf(n.V),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function va(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||wa(t.i,n))){if(t.I=n.N,!n.J&&wa(t.i,n)&&t.G==3){try{var r=t.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)ks(t),lo(t);else break e;Cc(t),Ne(18)}}else t.ta=i[1],0<t.ta-t.U&&37500>i[2]&&t.N&&t.A==0&&!t.v&&(t.v=Ai(ve(t.ab,t),6e3));if(1>=wf(t.i)&&t.ka){try{t.ka()}catch{}t.ka=void 0}}else Zt(t,11)}else if((n.J||t.g==n)&&ks(t),!_s(e))for(i=t.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.U=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.J=u[1],t.la=u[2];const l=u[3];l!=null&&(t.ma=l,t.h.info("VER="+t.ma));const h=u[4];h!=null&&(t.za=h,t.h.info("SVER="+t.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.K=r,t.h.info("backChannelRequestTimeoutMs_="+r)),r=t;const m=n.g;if(m){const g=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;!s.g&&(ke(g,"spdy")||ke(g,"quic")||ke(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Tc(s,s.h),s.h=null))}if(r.D){const b=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(r.sa=b,j(r.F,r.D,b))}}t.G=3,t.j&&t.j.xa(),t.$&&(t.O=Date.now()-n.F,t.h.info("Handshake RTT: "+t.O+"ms")),r=t;var o=n;if(r.oa=Mf(r,r.H?r.la:null,r.W),o.J){If(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(oo(a),Ni(a)),r.g=o}else Df(r);0<t.l.length&&ho(t)}else u[0]!="stop"&&u[0]!="close"||Zt(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Zt(t,7):kc(t):u[0]!="noop"&&t.j&&t.j.wa(u),t.A=0)}}ni(4)}catch{}}function eE(n){if(n.R&&typeof n.R=="function")return n.R();if(typeof n=="string")return n.split("");if(ca(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function _c(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(ca(n)||typeof n=="string")Bd(n,e,void 0);else{if(n.T&&typeof n.T=="function")var t=n.T();else if(n.R&&typeof n.R=="function")t=void 0;else if(ca(n)||typeof n=="string"){t=[];for(var r=n.length,i=0;i<r;i++)t.push(i)}else for(i in t=[],r=0,n)t[r++]=i;r=eE(n),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}}function fr(n,e){this.h={},this.g=[],this.i=0;var t=arguments.length;if(1<t){if(t%2)throw Error("Uneven number of arguments");for(var r=0;r<t;r+=2)this.set(arguments[r],arguments[r+1])}else if(n)if(n instanceof fr)for(t=n.T(),r=0;r<t.length;r++)this.set(t[r],n.get(t[r]));else for(r in n)this.set(r,n[r])}E=fr.prototype;E.R=function(){Ec(this);for(var n=[],e=0;e<this.g.length;e++)n.push(this.h[this.g[e]]);return n};E.T=function(){return Ec(this),this.g.concat()};function Ec(n){if(n.i!=n.g.length){for(var e=0,t=0;e<n.g.length;){var r=n.g[e];un(n.h,r)&&(n.g[t++]=r),e++}n.g.length=t}if(n.i!=n.g.length){var i={};for(t=e=0;e<n.g.length;)r=n.g[e],un(i,r)||(n.g[t++]=r,i[r]=1),e++;n.g.length=t}}E.get=function(n,e){return un(this.h,n)?this.h[n]:e};E.set=function(n,e){un(this.h,n)||(this.i++,this.g.push(n)),this.h[n]=e};E.forEach=function(n,e){for(var t=this.T(),r=0;r<t.length;r++){var i=t[r],s=this.get(i);n.call(e,s,i,this)}};function un(n,e){return Object.prototype.hasOwnProperty.call(n,e)}var ff=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function tE(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ln(n,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,n instanceof ln){this.g=e!==void 0?e:n.g,bs(this,n.j),this.s=n.s,Ss(this,n.i),As(this,n.m),this.l=n.l,e=n.h;var t=new ri;t.i=e.i,e.g&&(t.g=new fr(e.g),t.h=e.h),pl(this,t),this.o=n.o}else n&&(t=String(n).match(ff))?(this.g=!!e,bs(this,t[1]||"",!0),this.s=Br(t[2]||""),Ss(this,t[3]||"",!0),As(this,t[4]),this.l=Br(t[5]||"",!0),pl(this,t[6]||"",!0),this.o=Br(t[7]||"")):(this.g=!!e,this.h=new ri(null,this.g))}ln.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Or(e,ml,!0),":");var t=this.i;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Or(e,ml,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.i&&t.charAt(0)!="/"&&n.push("/"),n.push(Or(t,t.charAt(0)=="/"?oE:sE,!0))),(t=this.h.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Or(t,cE)),n.join("")};function lt(n){return new ln(n)}function bs(n,e,t){n.j=t?Br(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Ss(n,e,t){n.i=t?Br(e,!0):e}function As(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function pl(n,e,t){e instanceof ri?(n.h=e,uE(n.h,n.g)):(t||(e=Or(e,aE)),n.h=new ri(e,n.g))}function j(n,e,t){n.h.set(e,t)}function ao(n){return j(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function nE(n){return n instanceof ln?lt(n):new ln(n,void 0)}function rE(n,e,t,r){var i=new ln(null,void 0);return n&&bs(i,n),e&&Ss(i,e),t&&As(i,t),r&&(i.l=r),i}function Br(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Or(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,iE),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function iE(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var ml=/[#\/\?@]/g,sE=/[#\?:]/g,oE=/[#\?]/g,aE=/[#\?@]/g,cE=/#/g;function ri(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Vt(n){n.g||(n.g=new fr,n.h=0,n.i&&tE(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}E=ri.prototype;E.add=function(n,e){Vt(this),this.i=null,n=pr(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function pf(n,e){Vt(n),e=pr(n,e),un(n.g.h,e)&&(n.i=null,n.h-=n.g.get(e).length,n=n.g,un(n.h,e)&&(delete n.h[e],n.i--,n.g.length>2*n.i&&Ec(n)))}function mf(n,e){return Vt(n),e=pr(n,e),un(n.g.h,e)}E.forEach=function(n,e){Vt(this),this.g.forEach(function(t,r){Bd(t,function(i){n.call(e,i,r,this)},this)},this)};E.T=function(){Vt(this);for(var n=this.g.R(),e=this.g.T(),t=[],r=0;r<e.length;r++)for(var i=n[r],s=0;s<i.length;s++)t.push(e[r]);return t};E.R=function(n){Vt(this);var e=[];if(typeof n=="string")mf(this,n)&&(e=sl(e,this.g.get(pr(this,n))));else{n=this.g.R();for(var t=0;t<n.length;t++)e=sl(e,n[t])}return e};E.set=function(n,e){return Vt(this),this.i=null,n=pr(this,n),mf(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};E.get=function(n,e){return n?(n=this.R(n),0<n.length?String(n[0]):e):e};function gf(n,e,t){pf(n,e),0<t.length&&(n.i=null,n.g.set(pr(n,e),ac(t)),n.h+=t.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var n=[],e=this.g.T(),t=0;t<e.length;t++){var r=e[t],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),n.push(o)}}return this.i=n.join("&")};function pr(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function uE(n,e){e&&!n.j&&(Vt(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(pf(this,r),gf(this,i,t))},n)),n.j=e}var lE=class{constructor(n,e){this.h=n,this.g=e}};function yf(n){this.l=n||hE,N.PerformanceNavigationTiming?(n=N.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(N.g&&N.g.Ea&&N.g.Ea()&&N.g.Ea().Zb),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hE=10;function vf(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function wf(n){return n.h?1:n.g?n.g.size:0}function wa(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Tc(n,e){n.g?n.g.add(e):n.h=e}function If(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}yf.prototype.cancel=function(){if(this.i=_f(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function _f(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return ac(n.i)}function bc(){}bc.prototype.stringify=function(n){return N.JSON.stringify(n,void 0)};bc.prototype.parse=function(n){return N.JSON.parse(n,void 0)};function dE(){this.g=new bc}function fE(n,e,t){const r=t||"";try{_c(n,function(i,s){let o=i;bi(i)&&(o=pc(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function pE(n,e){const t=new no;if(N.Image){const r=new Image;r.onload=Hi(Qi,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Hi(Qi,t,r,"TestLoadImage: error",!1,e),r.onabort=Hi(Qi,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Hi(Qi,t,r,"TestLoadImage: timeout",!1,e),N.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Qi(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Di(n){this.l=n.$b||null,this.j=n.ib||!1}_e(Di,vc);Di.prototype.g=function(){return new co(this.l,this.j)};Di.prototype.i=function(n){return function(){return n}}({});function co(n,e){ue.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=Sc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_e(co,ue);var Sc=0;E=co.prototype;E.open=function(n,e){if(this.readyState!=Sc)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,ii(this)};E.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||N).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ri(this)),this.readyState=Sc};E.Va=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof N.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ef(this)}else n.text().then(this.Ua.bind(this),this.ha.bind(this))};function Ef(n){n.j.read().then(n.Sa.bind(n)).catch(n.ha.bind(n))}E.Sa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Ri(this):ii(this),this.readyState==3&&Ef(this)}};E.Ua=function(n){this.g&&(this.response=this.responseText=n,Ri(this))};E.Ta=function(n){this.g&&(this.response=n,Ri(this))};E.ha=function(){this.g&&Ri(this)};function Ri(n){n.readyState=4,n.l=null,n.j=null,n.A=null,ii(n)}E.setRequestHeader=function(n,e){this.v.append(n,e)};E.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function ii(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(co.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var mE=N.JSON.parse;function Z(n){ue.call(this),this.headers=new fr,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Tf,this.K=this.L=!1}_e(Z,ue);var Tf="",gE=/^https?$/i,yE=["POST","PUT"];E=Z.prototype;E.ea=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ma.g(),this.C=this.u?fl(this.u):fl(ma),this.g.onreadystatechange=ve(this.Fa,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(s){gl(this,s);return}n=t||"";const i=new fr(this.headers);r&&_c(r,function(s,o){i.set(o,s)}),r=C_(i.T()),t=N.FormData&&n instanceof N.FormData,!(0<=Vd(yE,e))||r||t||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Af(this),0<this.B&&((this.K=vE(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ve(this.pa,this)):this.A=yc(this.pa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){gl(this,s)}};function vE(n){return Qn&&x_()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}function wE(n){return n.toLowerCase()=="content-type"}E.pa=function(){typeof oc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,we(this,"timeout"),this.abort(8))};function gl(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,bf(n),uo(n)}function bf(n){n.D||(n.D=!0,we(n,"complete"),we(n,"error"))}E.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,we(this,"complete"),we(this,"abort"),uo(this))};E.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),uo(this,!0)),Z.Z.M.call(this)};E.Fa=function(){this.s||(this.F||this.v||this.l?Sf(this):this.cb())};E.cb=function(){Sf(this)};function Sf(n){if(n.h&&typeof oc!="undefined"&&(!n.C[1]||at(n)!=4||n.ba()!=2)){if(n.v&&at(n)==4)yc(n.Fa,0,n);else if(we(n,"readystatechange"),at(n)==4){n.h=!1;try{const a=n.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var i=String(n.H).match(ff)[1]||null;if(!i&&N.self&&N.self.location){var s=N.self.location.protocol;i=s.substr(0,s.length-1)}r=!gE.test(i?i.toLowerCase():"")}t=r}if(t)we(n,"complete"),we(n,"success");else{n.m=6;try{var o=2<at(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.ba()+"]",bf(n)}}finally{uo(n)}}}}function uo(n,e){if(n.g){Af(n);const t=n.g,r=n.C[0]?Is:null;n.g=null,n.C=null,e||we(n,"ready");try{t.onreadystatechange=r}catch{}}}function Af(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(N.clearTimeout(n.A),n.A=null)}function at(n){return n.g?n.g.readyState:0}E.ba=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}};E.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Qa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),mE(e)}};function yl(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case Tf:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}E.Da=function(){return this.m};E.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function IE(n){let e="";return cc(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Ac(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=IE(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):j(n,e,t))}function Ar(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function kf(n){this.za=0,this.l=[],this.h=new no,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ar("failFast",!1,n),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ar("baseRetryDelayMs",5e3,n),this.$a=Ar("retryDelaySeedMs",1e4,n),this.Ya=Ar("forwardChannelMaxRetries",2,n),this.ra=Ar("forwardChannelRequestTimeoutMs",2e4,n),this.qa=n&&n.xmlHttpFactory||void 0,this.Ba=n&&n.Yb||!1,this.K=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.J="",this.i=new yf(n&&n.concurrentRequestLimit),this.Ca=new dE,this.ja=n&&n.fastHandshake||!1,this.Ra=n&&n.Wb||!1,n&&n.Aa&&this.h.Aa(),n&&n.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&n&&n.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!n||n.Xb!==!1}E=kf.prototype;E.ma=8;E.G=1;function kc(n){if(Cf(n),n.G==3){var e=n.V++,t=lt(n.F);j(t,"SID",n.J),j(t,"RID",e),j(t,"TYPE","terminate"),Pi(n,t),e=new Ci(n,n.h,e,void 0),e.K=2,e.v=ao(lt(t)),t=!1,N.navigator&&N.navigator.sendBeacon&&(t=N.navigator.sendBeacon(e.v.toString(),"")),!t&&N.Image&&(new Image().src=e.v,t=!0),t||(e.g=Lf(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ni(e)}Of(n)}E.hb=function(n){try{this.h.info("Origin Trials invoked: "+n)}catch{}};function lo(n){n.g&&(Nc(n),n.g.cancel(),n.g=null)}function Cf(n){lo(n),n.u&&(N.clearTimeout(n.u),n.u=null),ks(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&N.clearTimeout(n.m),n.m=null)}function Go(n,e){n.l.push(new lE(n.Za++,e)),n.G==3&&ho(n)}function ho(n){vf(n.i)||n.m||(n.m=!0,mc(n.Ha,n),n.C=0)}function _E(n,e){return wf(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.l=e.D.concat(n.l),!0):n.G==1||n.G==2||n.C>=(n.Xa?0:n.Ya)?!1:(n.m=Ai(ve(n.Ha,n,e),xf(n,n.C)),n.C++,!0)}E.Ha=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.V=Math.floor(1e5*Math.random()),n=this.V++;const i=new Ci(this,this.h,n,void 0);let s=this.s;if(this.P&&(s?(s=qd(s),$d(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,t=0;t<this.l.length;t++){t:{var r=this.l[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.l.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Nf(this,i,e),t=lt(this.F),j(t,"RID",n),j(t,"CVER",22),this.D&&j(t,"X-HTTP-Session-Id",this.D),Pi(this,t),this.o&&s&&Ac(t,this.o,s),Tc(this.i,i),this.Ra&&j(t,"TYPE","init"),this.ja?(j(t,"$req",e),j(t,"SID","null"),i.$=!0,ya(i,t,null)):ya(i,t,e),this.G=2}}else this.G==3&&(n?vl(this,n):this.l.length==0||vf(this.i)||vl(this))};function vl(n,e){var t;e?t=e.m:t=n.V++;const r=lt(n.F);j(r,"SID",n.J),j(r,"RID",t),j(r,"AID",n.U),Pi(n,r),n.o&&n.s&&Ac(r,n.o,n.s),t=new Ci(n,n.h,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.l=e.D.concat(n.l)),e=Nf(n,t,1e3),t.setTimeout(Math.round(.5*n.ra)+Math.round(.5*n.ra*Math.random())),Tc(n.i,t),ya(t,r,e)}function Pi(n,e){n.j&&_c({},function(t,r){j(e,r,t)})}function Nf(n,e,t){t=Math.min(n.l.length,t);var r=n.j?ve(n.j.Oa,n.j,n):null;e:{var i=n.l;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].h;const l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{fE(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.l.splice(0,t),e.D=n,r}function Df(n){n.g||n.u||(n.Y=1,mc(n.Ga,n),n.A=0)}function Cc(n){return n.g||n.u||3<=n.A?!1:(n.Y++,n.u=Ai(ve(n.Ga,n),xf(n,n.A)),n.A++,!0)}E.Ga=function(){if(this.u=null,Rf(this),this.$&&!(this.L||this.g==null||0>=this.O)){var n=2*this.O;this.h.info("BP detection timer enabled: "+n),this.B=Ai(ve(this.bb,this),n)}};E.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ne(10),lo(this),Rf(this))};function Nc(n){n.B!=null&&(N.clearTimeout(n.B),n.B=null)}function Rf(n){n.g=new Ci(n,n.h,"rpc",n.Y),n.o===null&&(n.g.H=n.s),n.g.O=0;var e=lt(n.oa);j(e,"RID","rpc"),j(e,"SID",n.J),j(e,"CI",n.N?"0":"1"),j(e,"AID",n.U),Pi(n,e),j(e,"TYPE","xmlhttp"),n.o&&n.s&&Ac(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.la,t.K=1,t.v=ao(lt(e)),t.s=null,t.U=!0,uf(t,n)}E.ab=function(){this.v!=null&&(this.v=null,lo(this),Cc(this),Ne(19))};function ks(n){n.v!=null&&(N.clearTimeout(n.v),n.v=null)}function Pf(n,e){var t=null;if(n.g==e){ks(n),Nc(n),n.g=null;var r=2}else if(wa(n.i,e))t=e.D,If(n.i,e),r=1;else return;if(n.I=e.N,n.G!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var i=n.C;r=ro(),we(r,new sf(r,t)),ho(n)}else Df(n);else if(i=e.o,i==3||i==0&&0<n.I||!(r==1&&_E(n,e)||r==2&&Cc(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:Zt(n,5);break;case 4:Zt(n,10);break;case 3:Zt(n,6);break;default:Zt(n,2)}}}function xf(n,e){let t=n.Pa+Math.floor(Math.random()*n.$a);return n.j||(t*=2),t*e}function Zt(n,e){if(n.h.info("Error code "+e),e==2){var t=null;n.j&&(t=null);var r=ve(n.jb,n);t||(t=new ln("//www.google.com/images/cleardot.gif"),N.location&&N.location.protocol=="http"||bs(t,"https"),ao(t)),pE(t.toString(),r)}else Ne(2);n.G=0,n.j&&n.j.va(e),Of(n),Cf(n)}E.jb=function(n){n?(this.h.info("Successfully pinged google.com"),Ne(2)):(this.h.info("Failed to ping google.com"),Ne(1))};function Of(n){n.G=0,n.I=-1,n.j&&((_f(n.i).length!=0||n.l.length!=0)&&(n.i.i.length=0,ac(n.l),n.l.length=0),n.j.ua())}function Mf(n,e,t){let r=nE(t);if(r.i!="")e&&Ss(r,e+"."+r.i),As(r,r.m);else{const i=N.location;r=rE(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,t)}return n.aa&&cc(n.aa,function(i,s){j(r,s,i)}),e=n.D,t=n.sa,e&&t&&j(r,e,t),j(r,"VER",n.ma),Pi(n,r),r}function Lf(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ba&&!n.qa?new Z(new Di({ib:!0})):new Z(n.qa),e.L=n.H,e}function Ff(){}E=Ff.prototype;E.xa=function(){};E.wa=function(){};E.va=function(){};E.ua=function(){};E.Oa=function(){};function Cs(){if(Qn&&!(10<=Number(O_)))throw Error("Environmental error: no available transport.")}Cs.prototype.g=function(n,e){return new Fe(n,e)};function Fe(n,e){ue.call(this),this.g=new kf(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.P=n,(n=e&&e.httpHeadersOverwriteParam)&&!_s(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_s(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new mr(this)}_e(Fe,ue);Fe.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;n.Wa&&(n.h.info("Origin Trials enabled."),mc(ve(n.hb,n,e))),Ne(0),n.W=e,n.aa=t||{},n.N=n.X,n.F=Mf(n,null,n.W),ho(n)};Fe.prototype.close=function(){kc(this.g)};Fe.prototype.u=function(n){if(typeof n=="string"){var e={};e.__data__=n,Go(this.g,e)}else this.v?(e={},e.__data__=pc(n),Go(this.g,e)):Go(this.g,n)};Fe.prototype.M=function(){this.g.j=null,delete this.j,kc(this.g),delete this.g,Fe.Z.M.call(this)};function Uf(n){wc.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}_e(Uf,wc);function Vf(){Ic.call(this),this.status=1}_e(Vf,Ic);function mr(n){this.g=n}_e(mr,Ff);mr.prototype.xa=function(){we(this.g,"a")};mr.prototype.wa=function(n){we(this.g,new Uf(n))};mr.prototype.va=function(n){we(this.g,new Vf)};mr.prototype.ua=function(){we(this.g,"b")};Cs.prototype.createWebChannel=Cs.prototype.g;Fe.prototype.send=Fe.prototype.u;Fe.prototype.open=Fe.prototype.m;Fe.prototype.close=Fe.prototype.close;io.NO_ERROR=0;io.TIMEOUT=8;io.HTTP_ERROR=6;of.COMPLETE="complete";af.EventType=ki;ki.OPEN="a";ki.CLOSE="b";ki.ERROR="c";ki.MESSAGE="d";ue.prototype.listen=ue.prototype.N;Z.prototype.listenOnce=Z.prototype.O;Z.prototype.getLastError=Z.prototype.La;Z.prototype.getLastErrorCode=Z.prototype.Da;Z.prototype.getStatus=Z.prototype.ba;Z.prototype.getResponseJson=Z.prototype.Qa;Z.prototype.getResponseText=Z.prototype.ga;Z.prototype.send=Z.prototype.ea;var EE=function(){return new Cs},TE=function(){return ro()},Wo=io,bE=of,SE=bn,wl={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},AE=Di,Ji=af,kE=Z;const Il="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pe.UNAUTHENTICATED=new pe(null),pe.GOOGLE_CREDENTIALS=new pe("google-credentials-uid"),pe.FIRST_PARTY=new pe("first-party-uid"),pe.MOCK_USER=new pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gr="9.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new qs("@firebase/firestore");function Ia(){return Dt.logLevel}function CE(n){Dt.setLogLevel(n)}function v(n,...e){if(Dt.logLevel<=x.DEBUG){const t=e.map(Dc);Dt.debug(`Firestore (${gr}): ${n}`,...t)}}function J(n,...e){if(Dt.logLevel<=x.ERROR){const t=e.map(Dc);Dt.error(`Firestore (${gr}): ${n}`,...t)}}function si(n,...e){if(Dt.logLevel<=x.WARN){const t=e.map(Dc);Dt.warn(`Firestore (${gr}): ${n}`,...t)}}function Dc(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(n="Unexpected state"){const e=`FIRESTORE (${gr}) INTERNAL ASSERTION FAILED: `+n;throw J(e),new Error(e)}function k(n,e){n||T()}function NE(n,e){n||T()}function _(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Le{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(pe.UNAUTHENTICATED))}shutdown(){}}class RE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class PE{constructor(e){this.t=e,this.currentUser=pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new oe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new oe,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new oe)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(k(typeof r.accessToken=="string"),new Bf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return k(e===null||typeof e=="string"),new pe(e)}}class xE{constructor(e,t,r){this.type="FirstParty",this.user=pe.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class OE{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new xE(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ME{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LE{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const r=s=>{s.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(k(typeof t.token=="string"),this.p=t.token,new ME(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.I(r),this.T=r=>t.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me.A=-1;class qf{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=FE(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function D(n,e){return n<e?-1:n>e?1:0}function Jn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function $f(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return W.fromMillis(Date.now())}static fromDate(e){return W.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new W(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.timestamp=e}static fromTimestamp(e){return new A(e)}static min(){return new A(new W(0,0))}static max(){return new A(new W(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Sn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function jf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t,r){t===void 0?t=0:t>e.length&&T(),r===void 0?r=e.length-t:r>e.length-t&&T(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return oi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof oi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class P extends oi{construct(e,t,r){return new P(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new y(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new P(t)}static emptyPath(){return new P([])}}const UE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class te extends oi{construct(e,t,r){return new te(e,t,r)}static isValidIdentifier(e){return UE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new te(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new y(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new y(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new te(t)}static emptyPath(){return new te([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.fields=e,e.sort(te.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Jn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new ne(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ne(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ne.EMPTY_BYTE_STRING=new ne("");const BE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rt(n){if(k(!!n),typeof n=="string"){let e=0;const t=BE.exec(n);if(k(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:K(n.seconds),nanos:K(n.nanos)}}function K(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function hn(n){return typeof n=="string"?ne.fromBase64String(n):ne.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Kf(n){const e=n.mapValue.fields.__previous_value__;return Rc(e)?Kf(e):e}function ai(n){const e=Rt(n.mapValue.fields.__local_write_time__.timestampValue);return new W(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,t,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ht{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ht("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ht&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(n){return n==null}function ci(n){return n===0&&1/n==-1/0}function Gf(n){return typeof n=="number"&&Number.isInteger(n)&&!ci(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(P.fromString(e))}static fromName(e){return new I(P.fromString(e).popFirst(5))}static empty(){return new I(P.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&P.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return P.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new P(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},as={nullValue:"NULL_VALUE"};function dn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Rc(n)?4:Wf(n)?9007199254740991:10:T()}function rt(n,e){if(n===e)return!0;const t=dn(n);if(t!==dn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ai(n).isEqual(ai(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Rt(r.timestampValue),o=Rt(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return hn(r.bytesValue).isEqual(hn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return K(r.geoPointValue.latitude)===K(i.geoPointValue.latitude)&&K(r.geoPointValue.longitude)===K(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return K(r.integerValue)===K(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=K(r.doubleValue),o=K(i.doubleValue);return s===o?ci(s)===ci(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return Jn(n.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(_l(s)!==_l(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!rt(s[a],o[a])))return!1;return!0}(n,e);default:return T()}}function ui(n,e){return(n.values||[]).find(t=>rt(t,e))!==void 0}function Pt(n,e){if(n===e)return 0;const t=dn(n),r=dn(e);if(t!==r)return D(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return D(n.booleanValue,e.booleanValue);case 2:return function(i,s){const o=K(i.integerValue||i.doubleValue),a=K(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return El(n.timestampValue,e.timestampValue);case 4:return El(ai(n),ai(e));case 5:return D(n.stringValue,e.stringValue);case 6:return function(i,s){const o=hn(i),a=hn(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=D(o[c],a[c]);if(u!==0)return u}return D(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const o=D(K(i.latitude),K(s.latitude));return o!==0?o:D(K(i.longitude),K(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Pt(o[c],a[c]);if(u)return u}return D(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===bt.mapValue&&s===bt.mapValue)return 0;if(i===bt.mapValue)return 1;if(s===bt.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=D(a[l],u[l]);if(h!==0)return h;const d=Pt(o[a[l]],c[u[l]]);if(d!==0)return d}return D(a.length,u.length)}(n.mapValue,e.mapValue);default:throw T()}}function El(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return D(n,e);const t=Rt(n),r=Rt(e),i=D(t.seconds,r.seconds);return i!==0?i:D(t.nanos,r.nanos)}function Gn(n){return _a(n)}function _a(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const i=Rt(r);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?hn(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,I.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=_a(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${_a(r.fields[a])}`;return s+"}"}(n.mapValue):T();var e,t}function fn(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ea(n){return!!n&&"integerValue"in n}function li(n){return!!n&&"arrayValue"in n}function Tl(n){return!!n&&"nullValue"in n}function bl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function cs(n){return!!n&&"mapValue"in n}function qr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Sn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=qr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Wf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function $E(n){return"nullValue"in n?as:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?fn(ht.empty(),I.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:T()}function jE(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?fn(ht.empty(),I.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?bt:T()}function Sl(n,e){const t=Pt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Al(n,e){const t=Pt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.value=e}static empty(){return new Ee({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!cs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qr(t)}setAll(e){let t=te.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=qr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());cs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];cs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Sn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ee(qr(this.value))}}function zf(n){const e=[];return Sn(n.fields,(t,r)=>{const i=new te([t]);if(cs(r)){const s=zf(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Xn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t,r,i,s,o){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new B(e,0,A.min(),A.min(),Ee.empty(),0)}static newFoundDocument(e,t,r){return new B(e,1,t,A.min(),r,0)}static newNoDocument(e,t){return new B(e,2,t,A.min(),Ee.empty(),0)}static newUnknownDocument(e,t){return new B(e,3,t,A.min(),Ee.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ee.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ee.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof B&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new B(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Hf{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Ta(n){return n.fields.find(e=>e.kind===2)}function Wt(n){return n.fields.filter(e=>e.kind!==2)}Hf.UNKNOWN_ID=-1;class KE{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ns{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ns(0,Ge.min())}}function Yf(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=A.fromTimestamp(r===1e9?new W(t+1,0):new W(t,r));return new Ge(i,I.empty(),e)}function GE(n){return new Ge(n.readTime,n.key,-1)}class Ge{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ge(A.min(),I.empty(),-1)}static max(){return new Ge(A.max(),I.empty(),-1)}}function Qf(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=I.comparator(n.documentKey,e.documentKey),t!==0?t:D(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new z(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xi(this.root,e,this.comparator,!0)}}class Xi{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:me.RED,this.left=i!=null?i:me.EMPTY,this.right=s!=null?s:me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new me(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return me.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const e=this.left.check();if(e!==this.right.check())throw T();return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(n,e,t,r,i){return this}insert(n,e,t){return new me(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.comparator=e,this.data=new z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new kl(this.data.getIterator())}getIteratorFrom(e){return new kl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof U)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new U(this.comparator);return t.data=e,t}}class kl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function On(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.P=null}}function Cl(n,e=null,t=[],r=[],i=null,s=null,o=null){return new WE(n,e,t,r,i,s,o)}function pn(n){const e=_(n);if(e.P===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Gn(i.value);var i}).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),xi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Gn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Gn(r)).join(",")),e.P=t}return e.P}function zE(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(r=t).field.canonicalString()} ${r.op} ${Gn(r.value)}`;var r}).join(", ")}]`),xi(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: ",e+=n.startAt.inclusive?"b:":"a:",e+=n.startAt.position.map(t=>Gn(t)).join(",")),n.endAt&&(e+=", endAt: ",e+=n.endAt.inclusive?"a:":"b:",e+=n.endAt.position.map(t=>Gn(t)).join(",")),`Target(${e})`}function Oi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<n.orderBy.length;i++)if(!tT(n.orderBy[i],e.orderBy[i]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let i=0;i<n.filters.length;i++)if(t=n.filters[i],r=e.filters[i],t.op!==r.op||!t.field.isEqual(r.field)||!rt(t.value,r.value))return!1;var t,r;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Pl(n.startAt,e.startAt)&&Pl(n.endAt,e.endAt)}function Ds(n){return I.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Rs(n,e){return n.filters.filter(t=>t instanceof ge&&t.field.isEqual(e))}function Nl(n,e,t){let r=as,i=!0;for(const s of Rs(n,e)){let o=as,a=!0;switch(s.op){case"<":case"<=":o=$E(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=as}Sl({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Sl({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Dl(n,e,t){let r=bt,i=!0;for(const s of Rs(n,e)){let o=bt,a=!0;switch(s.op){case">=":case">":o=jE(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=bt}Al({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Al({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}class ge extends class{}{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.V(e,t,r):new HE(e,t,r):t==="array-contains"?new JE(e,r):t==="in"?new XE(e,r):t==="not-in"?new ZE(e,r):t==="array-contains-any"?new eT(e,r):new ge(e,t,r)}static V(e,t,r){return t==="in"?new YE(e,r):new QE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.v(Pt(t,this.value)):t!==null&&dn(this.value)===dn(t)&&this.v(Pt(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return T()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class HE extends ge{constructor(e,t,r){super(e,t,r),this.key=I.fromName(r.referenceValue)}matches(e){const t=I.comparator(e.key,this.key);return this.v(t)}}class YE extends ge{constructor(e,t){super(e,"in",t),this.keys=Jf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class QE extends ge{constructor(e,t){super(e,"not-in",t),this.keys=Jf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Jf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>I.fromName(r.referenceValue))}class JE extends ge{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return li(t)&&ui(t.arrayValue,this.value)}}class XE extends ge{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ui(this.value.arrayValue,t)}}class ZE extends ge{constructor(e,t){super(e,"not-in",t)}matches(e){if(ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ui(this.value.arrayValue,t)}}class eT extends ge{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!li(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ui(this.value.arrayValue,r))}}class xt{constructor(e,t){this.position=e,this.inclusive=t}}class Wn{constructor(e,t="asc"){this.field=e,this.dir=t}}function tT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function Rl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=I.comparator(I.fromName(o.referenceValue),t.key):r=Pt(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Pl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!rt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function Xf(n,e,t,r,i,s,o,a){return new gt(n,e,t,r,i,s,o,a)}function yr(n){return new gt(n)}function nT(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Pc(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function xc(n){for(const e of n.filters)if(e.S())return e.field;return null}function Oc(n){return n.collectionGroup!==null}function Zn(n){const e=_(n);if(e.D===null){e.D=[];const t=xc(e),r=Pc(e);if(t!==null&&r===null)t.isKeyField()||e.D.push(new Wn(t)),e.D.push(new Wn(te.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.D.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Wn(te.keyField(),s))}}}return e.D}function qe(n){const e=_(n);if(!e.C)if(e.limitType==="F")e.C=Cl(e.path,e.collectionGroup,Zn(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Zn(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new Wn(s.field,o))}const r=e.endAt?new xt(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new xt(e.startAt.position,e.startAt.inclusive):null;e.C=Cl(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e.C}function Zf(n,e,t){return new gt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Mi(n,e){return Oi(qe(n),qe(e))&&n.limitType===e.limitType}function ep(n){return`${pn(qe(n))}|lt:${n.limitType}`}function ba(n){return`Query(target=${zE(qe(n))}; limitType=${n.limitType})`}function Mc(n,e){return e.isFoundDocument()&&function(t,r){const i=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):I.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,r){for(const i of t.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const i of t.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(i,s,o){const a=Rl(i,s,o);return i.inclusive?a<=0:a<0}(t.startAt,Zn(t),r)||t.endAt&&!function(i,s,o){const a=Rl(i,s,o);return i.inclusive?a>=0:a>0}(t.endAt,Zn(t),r))}(n,e)}function tp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function np(n){return(e,t)=>{let r=!1;for(const i of Zn(n)){const s=rT(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rT(n,e,t){const r=n.field.isKeyField()?I.comparator(e.key,t.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Pt(a,c):T()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return T()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(n,e){if(n.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ci(e)?"-0":e}}function ip(n){return{integerValue:""+n}}function sp(n,e){return Gf(e)?ip(e):rp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this._=void 0}}function iT(n,e,t){return n instanceof er?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(t,e):n instanceof mn?ap(n,e):n instanceof gn?cp(n,e):function(r,i){const s=op(r,i),o=xl(s)+xl(r.k);return Ea(s)&&Ea(r.k)?ip(o):rp(r.M,o)}(n,e)}function sT(n,e,t){return n instanceof mn?ap(n,e):n instanceof gn?cp(n,e):t}function op(n,e){return n instanceof tr?Ea(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class er extends fo{}class mn extends fo{constructor(e){super(),this.elements=e}}function ap(n,e){const t=up(e);for(const r of n.elements)t.some(i=>rt(i,r))||t.push(r);return{arrayValue:{values:t}}}class gn extends fo{constructor(e){super(),this.elements=e}}function cp(n,e){let t=up(e);for(const r of n.elements)t=t.filter(i=>!rt(i,r));return{arrayValue:{values:t}}}class tr extends fo{constructor(e,t){super(),this.M=e,this.k=t}}function xl(n){return K(n.integerValue||n.doubleValue)}function up(n){return li(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t){this.field=e,this.transform=t}}function oT(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof mn&&r instanceof mn||t instanceof gn&&r instanceof gn?Jn(t.elements,r.elements,rt):t instanceof tr&&r instanceof tr?rt(t.k,r.k):t instanceof er&&r instanceof er}(n.transform,e.transform)}class aT{constructor(e,t){this.version=e,this.transformResults=t}}class X{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new X}static exists(e){return new X(void 0,e)}static updateTime(e){return new X(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function us(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class po{}function cT(n,e,t){n instanceof Fi?function(r,i,s){const o=r.value.clone(),a=Ll(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof An?function(r,i,s){if(!us(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Ll(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(lp(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(n,e,t):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function Sa(n,e,t){n instanceof Fi?function(r,i,s){if(!us(r.precondition,i))return;const o=r.value.clone(),a=Fl(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(Ml(i),o).setHasLocalMutations()}(n,e,t):n instanceof An?function(r,i,s){if(!us(r.precondition,i))return;const o=Fl(r.fieldTransforms,s,i),a=i.data;a.setAll(lp(r)),a.setAll(o),i.convertToFoundDocument(Ml(i),a).setHasLocalMutations()}(n,e,t):function(r,i){us(r.precondition,i)&&i.convertToNoDocument(A.min())}(n,e)}function uT(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=op(r.transform,i||null);s!=null&&(t==null&&(t=Ee.empty()),t.set(r.field,s))}return t||null}function Ol(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&Jn(t,r,(i,s)=>oT(i,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}function Ml(n){return n.isFoundDocument()?n.version:A.min()}class Fi extends po{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}}class An extends po{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function lp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ll(n,e,t){const r=new Map;k(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,sT(o,a,t[i]))}return r}function Fl(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,iT(s,o,e))}return r}class Ui extends po{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Lc extends po{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q,R;function hp(n){switch(n){default:return T();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function dp(n){if(n===void 0)return J("GRPC error has no .code"),p.UNKNOWN;switch(n){case Q.OK:return p.OK;case Q.CANCELLED:return p.CANCELLED;case Q.UNKNOWN:return p.UNKNOWN;case Q.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case Q.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case Q.INTERNAL:return p.INTERNAL;case Q.UNAVAILABLE:return p.UNAVAILABLE;case Q.UNAUTHENTICATED:return p.UNAUTHENTICATED;case Q.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case Q.NOT_FOUND:return p.NOT_FOUND;case Q.ALREADY_EXISTS:return p.ALREADY_EXISTS;case Q.PERMISSION_DENIED:return p.PERMISSION_DENIED;case Q.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case Q.ABORTED:return p.ABORTED;case Q.OUT_OF_RANGE:return p.OUT_OF_RANGE;case Q.UNIMPLEMENTED:return p.UNIMPLEMENTED;case Q.DATA_LOSS:return p.DATA_LOSS;default:return T()}}(R=Q||(Q={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Sn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return jf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=new z(I.comparator);function Ue(){return hT}const dT=new z(I.comparator);function Aa(...n){let e=dT;for(const t of n)e=e.insert(t.key,t);return e}function $r(){return new Bt(n=>n.toString(),(n,e)=>n.isEqual(e))}const fT=new z(I.comparator),pT=new U(I.comparator);function M(...n){let e=pT;for(const t of n)e=e.add(t);return e}const mT=new U(D);function mo(){return mT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t){const r=new Map;return r.set(e,Bi.createSynthesizedTargetChangeForCurrentChange(e,t)),new Vi(A.min(),r,mo(),Ue(),M())}}class Bi{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Bi(ne.EMPTY_BYTE_STRING,t,M(),M(),M())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t,r,i){this.O=e,this.removedTargetIds=t,this.key=r,this.F=i}}class fp{constructor(e,t){this.targetId=e,this.$=t}}class pp{constructor(e,t,r=ne.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Ul{constructor(){this.B=0,this.L=Bl(),this.U=ne.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=M(),t=M(),r=M();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:T()}}),new Bi(this.U,this.q,e,t,r)}J(){this.K=!1,this.L=Bl()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class gT{constructor(e){this.nt=e,this.st=new Map,this.it=Ue(),this.rt=Vl(),this.ot=new U(D)}ut(e){for(const t of e.O)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ht(e){this.forEachTarget(e,t=>{const r=this.lt(t);switch(e.state){case 0:this.ft(t)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(t);break;case 3:this.ft(t)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),r.W(e.resumeToken));break;default:T()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach((r,i)=>{this.ft(i)&&t(i)})}_t(e){const t=e.targetId,r=e.$.count,i=this.wt(t);if(i){const s=i.target;if(Ds(s))if(r===0){const o=new I(s.path);this.ct(t,o,B.newNoDocument(o,A.min()))}else k(r===1);else this.gt(t)!==r&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&Ds(a.target)){const c=new I(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,B.newNoDocument(c,e))}s.j&&(t.set(o,s.H()),s.J())}});let r=M();this.rt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.it.forEach((s,o)=>o.setReadTime(e));const i=new Vi(e,t,this.ot,this.it,r);return this.it=Ue(),this.rt=Vl(),this.ot=new U(D),i}at(e,t){if(!this.ft(e))return;const r=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,r),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,r){if(!this.ft(e))return;const i=this.lt(e);this.It(e,t)?i.Y(t,1):i.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(e)),r&&(this.it=this.it.insert(t,r))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new Ul,this.st.set(e,t)),t}Tt(e){let t=this.rt.get(e);return t||(t=new U(D),this.rt=this.rt.insert(e,t)),t}ft(e){const t=this.wt(e)!==null;return t||v("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new Ul),this.nt.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function Vl(){return new z(I.comparator)}function Bl(){return new z(I.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),vT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class wT{constructor(e,t){this.databaseId=e,this.N=t}}function hi(n,e){return n.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mp(n,e){return n.N?e.toBase64():e.toUint8Array()}function IT(n,e){return hi(n,e.toTimestamp())}function ae(n){return k(!!n),A.fromTimestamp(function(e){const t=Rt(e);return new W(t.seconds,t.nanos)}(n))}function Fc(n,e){return function(t){return new P(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function gp(n){const e=P.fromString(n);return k(bp(e)),e}function di(n,e){return Fc(n.databaseId,e.path)}function Ze(n,e){const t=gp(e);if(t.get(1)!==n.databaseId.projectId)throw new y(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new I(vp(t))}function ka(n,e){return Fc(n.databaseId,e)}function yp(n){const e=gp(n);return e.length===4?P.emptyPath():vp(e)}function fi(n){return new P(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function vp(n){return k(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ql(n,e,t){return{name:di(n,e),fields:t.value.mapValue.fields}}function wp(n,e,t){const r=Ze(n,e.name),i=ae(e.updateTime),s=new Ee({mapValue:{fields:e.fields}}),o=B.newFoundDocument(r,i,s);return t&&o.setHasCommittedMutations(),t?o.setHasCommittedMutations():o}function _T(n,e){return"found"in e?function(t,r){k(!!r.found),r.found.name,r.found.updateTime;const i=Ze(t,r.found.name),s=ae(r.found.updateTime),o=new Ee({mapValue:{fields:r.found.fields}});return B.newFoundDocument(i,s,o)}(n,e):"missing"in e?function(t,r){k(!!r.missing),k(!!r.readTime);const i=Ze(t,r.missing),s=ae(r.readTime);return B.newNoDocument(i,s)}(n,e):T()}function ET(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.N?(k(u===void 0||typeof u=="string"),ne.fromBase64String(u||"")):(k(u===void 0||u instanceof Uint8Array),ne.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?p.UNKNOWN:dp(c.code);return new y(u,c.message||"")}(o);t=new pp(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ze(n,r.document.name),s=ae(r.document.updateTime),o=new Ee({mapValue:{fields:r.document.fields}}),a=B.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];t=new ls(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ze(n,r.document),s=r.readTime?ae(r.readTime):A.min(),o=B.newNoDocument(i,s),a=r.removedTargetIds||[];t=new ls([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ze(n,r.document),s=r.removedTargetIds||[];t=new ls([],s,i,null)}else{if(!("filter"in e))return T();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new lT(i),o=r.targetId;t=new fp(o,s)}}return t}function pi(n,e){let t;if(e instanceof Fi)t={update:ql(n,e.key,e.value)};else if(e instanceof Ui)t={delete:di(n,e.key)};else if(e instanceof An)t={update:ql(n,e.key,e.data),updateMask:NT(e.fieldMask)};else{if(!(e instanceof Lc))return T();t={verify:di(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof er)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof mn)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof gn)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof tr)return{fieldPath:s.field.canonicalString(),increment:o.k};throw T()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:IT(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:T()}(n,e.precondition)),t}function Ca(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?X.updateTime(ae(i.updateTime)):i.exists!==void 0?X.exists(i.exists):X.none()}(e.currentDocument):X.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)k(o.setToServerValue==="REQUEST_TIME"),a=new er;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new mn(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new gn(u)}else"increment"in o?a=new tr(s,o.increment):T();const c=te.fromServerFormat(o.fieldPath);return new Li(c,a)}(n,i)):[];if(e.update){e.update.name;const i=Ze(n,e.update.name),s=new Ee({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Xn(c.map(u=>te.fromServerFormat(u)))}(e.updateMask);return new An(i,s,o,t,r)}return new Fi(i,s,t,r)}if(e.delete){const i=Ze(n,e.delete);return new Ui(i,t)}if(e.verify){const i=Ze(n,e.verify);return new Lc(i,t)}return T()}function TT(n,e){return n&&n.length>0?(k(e!==void 0),n.map(t=>function(r,i){let s=r.updateTime?ae(r.updateTime):ae(i);return s.isEqual(A.min())&&(s=ae(i)),new aT(s,r.transformResults||[])}(t,e))):[]}function Ip(n,e){return{documents:[ka(n,e.path)]}}function _p(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=ka(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=ka(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(bl(h.value))return{unaryFilter:{field:Mn(h.field),op:"IS_NAN"}};if(Tl(h.value))return{unaryFilter:{field:Mn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(bl(h.value))return{unaryFilter:{field:Mn(h.field),op:"IS_NOT_NAN"}};if(Tl(h.value))return{unaryFilter:{field:Mn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mn(h.field),op:AT(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Mn(l.field),direction:ST(l.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=function(c,u){return c.N||xi(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Ep(n){let e=yp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){k(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=Tp(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new Wn(qn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,xi(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new xt(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new xt(d,h)}(t.endAt)),Xf(e,i,o,s,a,"F",c,u)}function bT(n,e){const t=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function Tp(n){return n?n.unaryFilter!==void 0?[CT(n)]:n.fieldFilter!==void 0?[kT(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>Tp(e)).reduce((e,t)=>e.concat(t)):T():[]}function ST(n){return yT[n]}function AT(n){return vT[n]}function Mn(n){return{fieldPath:n.canonicalString()}}function qn(n){return te.fromServerFormat(n.fieldPath)}function kT(n){return ge.create(qn(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(n.fieldFilter.op),n.fieldFilter.value)}function CT(n){switch(n.unaryFilter.op){case"IS_NAN":const e=qn(n.unaryFilter.field);return ge.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=qn(n.unaryFilter.field);return ge.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=qn(n.unaryFilter.field);return ge.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=qn(n.unaryFilter.field);return ge.create(i,"!=",{nullValue:"NULL_VALUE"});default:return T()}}function NT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=$l(e)),e=DT(n.get(t),e);return $l(e)}function DT(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function $l(n){return n+""}function Je(n){const e=n.length;if(k(e>=2),e===2)return k(n.charAt(0)===""&&n.charAt(1)===""),P.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&T(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:T()}s=o+2}return new P(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(n,e){return[n,De(e)]}function Sp(n,e,t){return[n,De(e),t]}const RT={},PT=["prefixPath","collectionGroup","readTime","documentId"],xT=["prefixPath","collectionGroup","documentId"],OT=["collectionGroup","readTime","prefixPath","documentId"],MT=["canonicalId","targetId"],LT=["targetId","path"],FT=["path","targetId"],UT=["collectionId","parent"],VT=["indexId","uid"],BT=["uid","sequenceNumber"],qT=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],$T=["indexId","uid","orderedDocumentKey"],jT=["userId","collectionPath","documentId"],KT=["userId","collectionPath","largestBatchId"],GT=["userId","collectionGroup","largestBatchId"],Ap=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],WT=[...Ap,"documentOverlays"],kp=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],zT=[...kp,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Np{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new f((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof f?t:f.resolve(t)}catch(t){return f.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):f.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):f.reject(t)}static resolve(e){return new f((t,r)=>{t(e)})}static reject(e){return new f((t,r)=>{r(e)})}static waitFor(e){return new f((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=f.resolve(!1);for(const r of e)t=t.next(i=>i?f.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.At=new oe,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{t.error?this.At.reject(new jr(e,t.error)):this.At.resolve()},this.transaction.onerror=r=>{const i=Uc(r.target.error);this.At.reject(new jr(e,i))}}static open(e,t,r,i){try{return new go(t,e.transaction(i,r))}catch(s){throw new jr(t,s)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(v("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}bt(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new YT(t)}}class $e{constructor(e,t,r){this.name=e,this.version=t,this.Pt=r,$e.Vt($())===12.2&&J("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return v("SimpleDb","Removing database:",e),zt(window.indexedDB.deleteDatabase(e)).toPromise()}static vt(){if(!Wr())return!1;if($e.St())return!0;const e=$(),t=$e.Vt(e),r=0<t&&t<10,i=$e.Dt(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static St(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.Ct)==="YES"}static xt(e,t){return e.store(t)}static Vt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static Dt(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async Nt(e){return this.db||(v("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new jr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new y(p.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(p.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new jr(e,o))},i.onupgradeneeded=s=>{v("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.Pt.kt(o,i.transaction,s.oldVersion,this.version).next(()=>{v("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Mt&&(this.db.onversionchange=t=>this.Mt(t)),this.db}Ot(e){this.Mt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.Nt(e);const a=go.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.bt(),u)).catch(u=>(a.abort(u),f.reject(u))).toPromise();return c.catch(()=>{}),await a.Rt,c}catch(a){const c=a.name!=="FirebaseError"&&o<3;if(v("SimpleDb","Transaction failed with error:",a.message,"Retrying:",c),this.close(),!c)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class HT{constructor(e){this.Ft=e,this.$t=!1,this.Bt=null}get isDone(){return this.$t}get Lt(){return this.Bt}set cursor(e){this.Ft=e}done(){this.$t=!0}Ut(e){this.Bt=e}delete(){return zt(this.Ft.delete())}}class jr extends y{constructor(e,t){super(p.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function kn(n){return n.name==="IndexedDbTransactionError"}class YT{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(v("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(v("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),zt(r)}add(e){return v("SimpleDb","ADD",this.store.name,e,e),zt(this.store.add(e))}get(e){return zt(this.store.get(e)).next(t=>(t===void 0&&(t=null),v("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return v("SimpleDb","DELETE",this.store.name,e),zt(this.store.delete(e))}count(){return v("SimpleDb","COUNT",this.store.name),zt(this.store.count())}qt(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.Kt(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new f((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}Gt(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new f((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Qt(e,t){v("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.jt=!1;const i=this.cursor(r);return this.Kt(i,(s,o,a)=>a.delete())}Wt(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.Kt(i,t)}zt(e){const t=this.cursor({});return new f((r,i)=>{t.onerror=s=>{const o=Uc(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}Kt(e,t){const r=[];return new f((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new HT(a),u=t(a.primaryKey,a.value,c);if(u instanceof f){const l=u.catch(h=>(c.done(),f.reject(h)));r.push(l)}c.isDone?i():c.Lt===null?a.continue():a.continue(c.Lt)}}).next(()=>f.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.jt?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function zt(n){return new f((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Uc(r.target.error);t(i)}})}let Kl=!1;function Uc(n){const e=$e.Vt($());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Kl||(Kl=!0,setTimeout(()=>{throw r},0)),r}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends Np{constructor(e,t){super(),this.Ht=e,this.currentSequenceNumber=t}}function he(n,e){const t=_(n);return $e.xt(t.Ht,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&cT(s,e,r[i])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Sa(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Sa(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const r=e.get(t.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(A.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),M())}isEqual(e){return this.batchId===e.batchId&&Jn(this.mutations,e.mutations,(t,r)=>Ol(t,r))&&Jn(this.baseMutations,e.baseMutations,(t,r)=>Ol(t,r))}}class Bc{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){k(e.mutations.length===r.length);let i=fT;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Bc(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t,r,i,s=A.min(),o=A.min(),a=ne.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new At(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e){this.Jt=e}}function QT(n,e){let t;if(e.document)t=wp(n.Jt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=I.fromSegments(e.noDocument.path),i=vn(e.noDocument.readTime);t=B.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return T();{const r=I.fromSegments(e.unknownDocument.path),i=vn(e.unknownDocument.version);t=B.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(r){const i=new W(r[0],r[1]);return A.fromTimestamp(i)}(e.readTime)),t}function Wl(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ps(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:di(i,s.key),fields:s.data.value.mapValue.fields,updateTime:hi(i,s.version.toTimestamp())}}(n.Jt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:yn(e.version)};else{if(!e.isUnknownDocument())return T();r.unknownDocument={path:t.path.toArray(),version:yn(e.version)}}return r}function Ps(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function yn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function vn(n){const e=new W(n.seconds,n.nanoseconds);return A.fromTimestamp(e)}function Fn(n,e){const t=(e.baseMutations||[]).map(s=>Ca(n.Jt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Ca(n.Jt,s)),i=W.fromMillis(e.localWriteTimeMs);return new Vc(e.batchId,i,t,r)}function Mr(n){const e=vn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?vn(n.lastLimboFreeSnapshotVersion):A.min();let r;var i;return n.query.documents!==void 0?(k((i=n.query).documents.length===1),r=qe(yr(yp(i.documents[0])))):r=function(s){return qe(Ep(s))}(n.query),new At(r,n.targetId,0,n.lastListenSequenceNumber,e,t,ne.fromBase64String(n.resumeToken))}function Rp(n,e){const t=yn(e.snapshotVersion),r=yn(e.lastLimboFreeSnapshotVersion);let i;i=Ds(e.target)?Ip(n.Jt,e.target):_p(n.Jt,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:pn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function $c(n){const e=Ep({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Zf(e,e.limit,"L"):e}function zo(n,e){return new qc(e.largestBatchId,Ca(n.Jt,e.overlayMutation))}function zl(n,e){const t=e.path.lastSegment();return[n,De(e.path.popLast()),t]}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{getBundleMetadata(e,t){return Hl(e).get(t).next(r=>{if(r)return{id:(i=r).bundleId,createTime:vn(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return Hl(e).put({bundleId:(r=t).id,createTime:yn(ae(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return Yl(e).get(t).next(r=>{if(r)return{name:(i=r).name,query:$c(i.bundledQuery),readTime:vn(i.readTime)};var i})}saveNamedQuery(e,t){return Yl(e).put(function(r){return{name:r.name,readTime:yn(ae(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function Hl(n){return he(n,"bundles")}function Yl(n){return he(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){this.M=e,this.userId=t}static Yt(e,t){const r=t.uid||"";return new jc(e,r)}getOverlay(e,t){return kr(e).get(zl(this.userId,t)).next(r=>r?zo(this.M,r):null)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new qc(t,o);i.push(this.Xt(e,a))}),f.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(De(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(kr(e).Qt("collectionPathOverlayIndex",a))}),f.waitFor(s)}getOverlaysForCollection(e,t,r){const i=$r(),s=De(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return kr(e).qt("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=zo(this.M,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=$r();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return kr(e).Wt({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=zo(this.M,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}Xt(e,t){return kr(e).put(function(r,i,s){const[o,a,c]=zl(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:pi(r.Jt,s.mutation)}}(this.M,this.userId,t))}}function kr(n){return he(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(){}Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(K(e.integerValue));else if("doubleValue"in e){const r=K(e.doubleValue);isNaN(r)?this.ne(t,13):(this.ne(t,15),ci(r)?t.se(0):t.se(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ne(t,20),typeof r=="string"?t.ie(r):(t.ie(`${r.seconds||""}`),t.se(r.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ue(hn(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ae(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ne(t,45),t.se(r.latitude||0),t.se(r.longitude||0)}else"mapValue"in e?Wf(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):T()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){const r=e.fields||{};this.ne(t,55);for(const i of Object.keys(r))this.re(i,t),this.te(r[i],t)}he(e,t){const r=e.values||[];this.ne(t,50);for(const i of r)this.te(i,t)}ae(e,t){this.ne(t,37),I.fromName(e).path.forEach(r=>{this.ne(t,60),this.le(r,t)})}ne(e,t){e.se(t)}oe(e){e.se(2)}}Ht.fe=new Ht;function XT(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function Ql(n){const e=64-function(t){let r=0;for(let i=0;i<8;++i){const s=XT(255&t[i]);if(r+=s,s!==8)break}return r}(n);return Math.ceil(e/8)}class ZT{constructor(){this.buffer=new Uint8Array(1024),this.position=0}de(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this._e(r.value),r=t.next();this.we()}me(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.ge(r.value),r=t.next();this.ye()}pe(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this._e(r);else if(r<2048)this._e(960|r>>>6),this._e(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this._e(480|r>>>12),this._e(128|63&r>>>6),this._e(128|63&r);else{const i=t.codePointAt(0);this._e(240|i>>>18),this._e(128|63&i>>>12),this._e(128|63&i>>>6),this._e(128|63&i)}}this.we()}Ie(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.ge(r);else if(r<2048)this.ge(960|r>>>6),this.ge(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.ge(480|r>>>12),this.ge(128|63&r>>>6),this.ge(128|63&r);else{const i=t.codePointAt(0);this.ge(240|i>>>18),this.ge(128|63&i>>>12),this.ge(128|63&i>>>6),this.ge(128|63&i)}}this.ye()}Te(e){const t=this.Ee(e),r=Ql(t);this.Ae(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Re(e){const t=this.Ee(e),r=Ql(t);this.Ae(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}be(){this.Pe(255),this.Pe(255)}Ve(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Ae(e.length),this.buffer.set(e,this.position),this.position+=e.length}Se(){return this.buffer.slice(0,this.position)}Ee(e){const t=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}_e(e){const t=255&e;t===0?(this.Pe(0),this.Pe(255)):t===255?(this.Pe(255),this.Pe(0)):this.Pe(t)}ge(e){const t=255&e;t===0?(this.ve(0),this.ve(255)):t===255?(this.ve(255),this.ve(0)):this.ve(e)}we(){this.Pe(0),this.Pe(1)}ye(){this.ve(0),this.ve(1)}Pe(e){this.Ae(1),this.buffer[this.position++]=e}ve(e){this.Ae(1),this.buffer[this.position++]=~e}Ae(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class eb{constructor(e){this.De=e}ue(e){this.De.de(e)}ie(e){this.De.pe(e)}se(e){this.De.Te(e)}ee(){this.De.be()}}class tb{constructor(e){this.De=e}ue(e){this.De.me(e)}ie(e){this.De.Ie(e)}se(e){this.De.Re(e)}ee(){this.De.Ve()}}class Cr{constructor(){this.De=new ZT,this.Ce=new eb(this.De),this.xe=new tb(this.De)}seed(e){this.De.seed(e)}Ne(e){return e===0?this.Ce:this.xe}Se(){return this.De.Se()}reset(){this.De.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}ke(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Yt(this.indexId,this.documentKey,this.arrayValue,r)}}function jt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Jl(n.arrayValue,e.arrayValue),t!==0?t:(t=Jl(n.directionalValue,e.directionalValue),t!==0?t:I.comparator(n.documentKey,e.documentKey)))}function Jl(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Me=e.orderBy,this.Oe=[];for(const t of e.filters){const r=t;r.S()?this.Fe=r:this.Oe.push(r)}}$e(e){const t=Ta(e);if(t!==void 0&&!this.Be(t))return!1;const r=Wt(e);let i=0,s=0;for(;i<r.length&&this.Be(r[i]);++i);if(i===r.length)return!0;if(this.Fe!==void 0){const o=r[i];if(!this.Le(this.Fe,o)||!this.Ue(this.Me[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Me.length||!this.Ue(this.Me[s++],o))return!1}return!0}Be(e){for(const t of this.Oe)if(this.Le(t,e))return!0;return!1}Le(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Ue(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(){this.qe=new Kc}addToCollectionParentIndex(e,t){return this.qe.add(t),f.resolve()}getCollectionParents(e,t){return f.resolve(this.qe.getEntries(t))}addFieldIndex(e,t){return f.resolve()}deleteFieldIndex(e,t){return f.resolve()}getDocumentsMatchingTarget(e,t){return f.resolve(null)}getIndexType(e,t){return f.resolve(0)}getFieldIndexes(e,t){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,t){return f.resolve(Ge.min())}updateCollectionGroup(e,t,r){return f.resolve()}updateIndexEntries(e,t){return f.resolve()}}class Kc{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new U(P.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new U(P.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new Uint8Array(0);class ib{constructor(e,t){this.user=e,this.databaseId=t,this.Ke=new Kc,this.Ge=new Bt(r=>pn(r),(r,i)=>Oi(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ke.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.Ke.add(t)});const s={collectionId:r,parent:De(i)};return Xl(e).put(s)}return f.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[$f(t),""],!1,!0);return Xl(e).qt(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Je(o.parent))}return r})}addFieldIndex(e,t){const r=es(e),i=function(s){return{indexId:s.indexId,collectionGroup:s.collectionGroup,fields:s.fields.map(o=>[o.fieldPath.canonicalString(),o.kind])}}(t);return delete i.indexId,r.add(i).next()}deleteFieldIndex(e,t){const r=es(e),i=ts(e),s=Nr(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=Nr(e);let i=!0;const s=new Map;return f.forEach(this.Qe(t),o=>this.je(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=M();const a=[];return f.forEach(s,(c,u)=>{var l;v("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(L=>`${L.fieldPath}:${L.kind}`).join(",")}`} to execute ${pn(t)}`);const h=function(L,ie){const Y=Ta(ie);if(Y===void 0)return null;for(const V of Rs(L,Y.fieldPath))switch(V.op){case"array-contains-any":return V.value.arrayValue.values||[];case"array-contains":return[V.value]}return null}(u,c),d=function(L,ie){const Y=new Map;for(const V of Wt(ie))for(const fe of Rs(L,V.fieldPath))switch(fe.op){case"==":case"in":Y.set(V.fieldPath.canonicalString(),fe.value);break;case"not-in":case"!=":return Y.set(V.fieldPath.canonicalString(),fe.value),Array.from(Y.values())}return null}(u,c),m=function(L,ie){const Y=[];let V=!0;for(const fe of Wt(ie)){const $t=fe.kind===0?Nl(L,fe.fieldPath,L.startAt):Dl(L,fe.fieldPath,L.startAt);Y.push($t.value),V&&(V=$t.inclusive)}return new xt(Y,V)}(u,c),g=function(L,ie){const Y=[];let V=!0;for(const fe of Wt(ie)){const $t=fe.kind===0?Dl(L,fe.fieldPath,L.endAt):Nl(L,fe.fieldPath,L.endAt);Y.push($t.value),V&&(V=$t.inclusive)}return new xt(Y,V)}(u,c),b=this.We(c,u,m),C=this.We(c,u,g),F=this.ze(c,u,d),H=this.He(c.indexId,h,b,m.inclusive,C,g.inclusive,F);return f.forEach(H,L=>r.Gt(L,t.limit).next(ie=>{ie.forEach(Y=>{const V=I.fromSegments(Y.documentKey);o.has(V)||(o=o.add(V),a.push(V))})}))}).next(()=>a)}return f.resolve(null)})}Qe(e){let t=this.Ge.get(e);return t||(t=[e],this.Ge.set(e,t),t)}He(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.Je(t[h/u]):Zi,m=this.Ye(e,d,r[h%u],i),g=this.Xe(e,d,s[h%u],o),b=a.map(C=>this.Ye(e,d,C,!0));l.push(...this.createRange(m,g,b))}return l}Ye(e,t,r,i){const s=new Yt(e,I.empty(),t,r);return i?s:s.ke()}Xe(e,t,r,i){const s=new Yt(e,I.empty(),t,r);return i?s.ke():s}je(e,t){const r=new nb(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.$e(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;return f.forEach(this.Qe(t),i=>this.je(e,i).next(s=>{s?r!==0&&s.fields.length<function(o){let a=new U(te.comparator),c=!1;for(const u of o.filters){const l=u;l.field.isKeyField()||(l.op==="array-contains"||l.op==="array-contains-any"?c=!0:a=a.add(l.field))}for(const u of o.orderBy)u.field.isKeyField()||(a=a.add(u.field));return a.size+(c?1:0)}(i)&&(r=1):r=0})).next(()=>r)}Ze(e,t){const r=new Cr;for(const i of Wt(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Ne(i.kind);Ht.fe.Zt(s,o)}return r.Se()}Je(e){const t=new Cr;return Ht.fe.Zt(e,t.Ne(0)),t.Se()}tn(e,t){const r=new Cr;return Ht.fe.Zt(fn(this.databaseId,t),r.Ne(function(i){const s=Wt(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Se()}ze(e,t,r){if(r===null)return[];let i=[];i.push(new Cr);let s=0;for(const o of Wt(e)){const a=r[s++];for(const c of i)if(this.en(t,o.fieldPath)&&li(a))i=this.nn(i,o,a);else{const u=c.Ne(o.kind);Ht.fe.Zt(a,u)}}return this.sn(i)}We(e,t,r){return this.ze(e,t,r.position)}sn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Se();return t}nn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new Cr;c.seed(a.Se()),Ht.fe.Zt(o,c.Ne(t.kind)),s.push(c)}return s}en(e,t){return!!e.filters.find(r=>r instanceof ge&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=es(e),i=ts(e);return(t?r.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.qt()).next(s=>{const o=[];return f.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Ns(l.sequenceNumber,new Ge(vn(l.readTime),new I(Je(l.documentKey)),l.largestBatchId)):Ns.empty(),d=u.fields.map(([m,g])=>new KE(te.fromServerFormat(m),g));return new Hf(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:D(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=es(e),s=ts(e);return this.rn(e).next(o=>i.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>f.forEach(a,c=>s.put(function(u,l,h,d){return{indexId:u,uid:l.uid||"",sequenceNumber:h,readTime:yn(d.readTime),documentKey:De(d.documentKey.path),largestBatchId:d.largestBatchId}}(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return f.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?f.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),f.forEach(a,c=>this.on(e,i,c).next(u=>{const l=this.un(s,c);return u.isEqual(l)?f.resolve():this.an(e,s,c,u,l)}))))})}cn(e,t,r,i){return Nr(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.tn(r,t.key),documentKey:t.key.path.toArray()})}hn(e,t,r,i){return Nr(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.tn(r,t.key),t.key.path.toArray()])}on(e,t,r){const i=Nr(e);let s=new U(jt);return i.Wt({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.tn(r,t)])},(o,a)=>{s=s.add(new Yt(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}un(e,t){let r=new U(jt);const i=this.Ze(t,e);if(i==null)return r;const s=Ta(t);if(s!=null){const o=e.data.field(s.fieldPath);if(li(o))for(const a of o.arrayValue.values||[])r=r.add(new Yt(t.indexId,e.key,this.Je(a),i))}else r=r.add(new Yt(t.indexId,e.key,Zi,i));return r}an(e,t,r,i,s){v("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),m=c.getIterator();let g=On(d),b=On(m);for(;g||b;){let C=!1,F=!1;if(g&&b){const H=u(g,b);H<0?F=!0:H>0&&(C=!0)}else g!=null?F=!0:C=!0;C?(l(b),b=On(m)):F?(h(g),g=On(d)):(g=On(d),b=On(m))}}(i,s,jt,a=>{o.push(this.cn(e,t,r,a))},a=>{o.push(this.hn(e,t,r,a))}),f.waitFor(o)}rn(e){let t=1;return ts(e).Wt({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>jt(o,a)).filter((o,a,c)=>!a||jt(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=jt(o,e),c=jt(o,t);if(a===0)i[0]=e.ke();else if(a>0&&c<0)i.push(o),i.push(o.ke());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2)s.push(IDBKeyRange.bound([i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Zi,[]],[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Zi,[]]));return s}getMinOffset(e,t){let r;return f.forEach(this.Qe(t),i=>this.je(e,i).next(s=>{s?(!r||Qf(s.indexState.offset,r)<0)&&(r=s.indexState.offset):r=Ge.min()})).next(()=>r)}}function Xl(n){return he(n,"collectionParents")}function Nr(n){return he(n,"indexEntries")}function es(n){return he(n,"indexConfiguration")}function ts(n){return he(n,"indexState")}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Pe{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Pe(e,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Wt({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{k(a===1)}));const u=[];for(const l of t.mutations){const h=Sp(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return f.waitFor(s).next(()=>u)}function xs(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw T();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe.DEFAULT_COLLECTION_PERCENTILE=10,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pe.DEFAULT=new Pe(41943040,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pe.DISABLED=new Pe(-1,0,0);class Gc{constructor(e,t,r,i){this.userId=e,this.M=t,this.indexManager=r,this.referenceDelegate=i,this.ln={}}static Yt(e,t,r,i){k(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Gc(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return wt(e).Wt({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Un(e),o=wt(e);return o.add({}).next(a=>{k(typeof a=="number");const c=new Vc(a,t,r,i),u=function(d,m,g){const b=g.baseMutations.map(F=>pi(d.Jt,F)),C=g.mutations.map(F=>pi(d.Jt,F));return{userId:m,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:b,mutations:C}}(this.M,this.userId,c),l=[];let h=new U((d,m)=>D(d.canonicalString(),m.canonicalString()));for(const d of i){const m=Sp(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(m,RT))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.ln[a]=c.keys()}),f.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return wt(e).get(t).next(r=>r?(k(r.userId===this.userId),Fn(this.M,r)):null)}fn(e,t){return this.ln[t]?f.resolve(this.ln[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.ln[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return wt(e).Wt({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(k(a.batchId>=r),s=Fn(this.M,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return wt(e).Wt({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return wt(e).qt("userMutationsIndex",t).next(r=>r.map(i=>Fn(this.M,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=hs(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Un(e).Wt({range:i},(o,a,c)=>{const[u,l,h]=o,d=Je(l);if(u===this.userId&&t.path.isEqual(d))return wt(e).get(h).next(m=>{if(!m)throw T();k(m.userId===this.userId),s.push(Fn(this.M,m))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new U(D);const i=[];return t.forEach(s=>{const o=hs(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=Un(e).Wt({range:a},(u,l,h)=>{const[d,m,g]=u,b=Je(m);d===this.userId&&s.path.isEqual(b)?r=r.add(g):h.done()});i.push(c)}),f.waitFor(i).next(()=>this.dn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=hs(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new U(D);return Un(e).Wt({range:o},(c,u,l)=>{const[h,d,m]=c,g=Je(d);h===this.userId&&r.isPrefixOf(g)?g.length===i&&(a=a.add(m)):l.done()}).next(()=>this.dn(e,a))}dn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(wt(e).get(s).next(o=>{if(o===null)throw T();k(o.userId===this.userId),r.push(Fn(this.M,o))}))}),f.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return Pp(e.Ht,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this._n(t.batchId)}),f.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}_n(e){delete this.ln[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return f.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return Un(e).Wt({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=Je(s[1]);i.push(c)}else a.done()}).next(()=>{k(i.length===0)})})}containsKey(e,t){return xp(e,this.userId,t)}wn(e){return Op(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function xp(n,e,t){const r=hs(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Un(n).Wt({range:s,jt:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function wt(n){return he(n,"mutations")}function Un(n){return he(n,"documentMutations")}function Op(n){return he(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new wn(0)}static yn(){return new wn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,t){this.referenceDelegate=e,this.M=t}allocateTargetId(e){return this.pn(e).next(t=>{const r=new wn(t.highestTargetId);return t.highestTargetId=r.next(),this.In(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.pn(e).next(t=>A.fromTimestamp(new W(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.pn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.pn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.In(e,i)))}addTargetData(e,t){return this.Tn(e,t).next(()=>this.pn(e).next(r=>(r.targetCount+=1,this.En(t,r),this.In(e,r))))}updateTargetData(e,t){return this.Tn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ln(e).delete(t.targetId)).next(()=>this.pn(e)).next(r=>(k(r.targetCount>0),r.targetCount-=1,this.In(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Ln(e).Wt((o,a)=>{const c=Mr(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>f.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Ln(e).Wt((r,i)=>{const s=Mr(i);t(s)})}pn(e){return eh(e).get("targetGlobalKey").next(t=>(k(t!==null),t))}In(e,t){return eh(e).put("targetGlobalKey",t)}Tn(e,t){return Ln(e).put(Rp(this.M,t))}En(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.pn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=pn(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ln(e).Wt({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=Mr(a);Oi(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=_t(e);return t.forEach(o=>{const a=De(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),f.waitFor(i)}removeMatchingKeys(e,t,r){const i=_t(e);return f.forEach(t,s=>{const o=De(s.path);return f.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=_t(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=_t(e);let s=M();return i.Wt({range:r,jt:!0},(o,a,c)=>{const u=Je(o[1]),l=new I(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=De(t.path),i=IDBKeyRange.bound([r],[$f(r)],!1,!0);let s=0;return _t(e).Wt({index:"documentTargetsIndex",jt:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}Et(e,t){return Ln(e).get(t).next(r=>r?Mr(r):null)}}function Ln(n){return he(n,"targets")}function eh(n){return he(n,"targetGlobal")}function _t(n){return he(n,"targetDocuments")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==Cp)throw n;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th([n,e],[t,r]){const i=D(n,t);return i===0?D(e,r):i}class ob{constructor(e){this.An=e,this.buffer=new U(th),this.Rn=0}bn(){return++this.Rn}Pn(e){const t=[e,this.bn()];if(this.buffer.size<this.An)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();th(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ab{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.Vn=!1,this.vn=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Sn(e)}stop(){this.vn&&(this.vn.cancel(),this.vn=null)}get started(){return this.vn!==null}Sn(e){const t=this.Vn?3e5:6e4;v("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.vn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.vn=null,this.Vn=!0;try{await e.collectGarbage(this.garbageCollector)}catch(r){kn(r)?v("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",r):await Cn(r)}await this.Sn(e)})}}class cb{constructor(e,t){this.Dn=e,this.params=t}calculateTargetCount(e,t){return this.Dn.Cn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return f.resolve(Me.A);const r=new ob(t);return this.Dn.forEachTarget(e,i=>r.Pn(i.sequenceNumber)).next(()=>this.Dn.xn(e,i=>r.Pn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Dn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Dn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(v("LruGarbageCollector","Garbage collection skipped; disabled"),f.resolve(Zl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(v("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zl):this.Nn(e,t))}getCacheSize(e){return this.Dn.getCacheSize(e)}Nn(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(v("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Ia()<=x.DEBUG&&v("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),f.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,t){this.db=e,this.garbageCollector=function(r,i){return new cb(r,i)}(this,t)}Cn(e){const t=this.kn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}kn(e){let t=0;return this.xn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}xn(e,t){return this.Mn(e,(r,i)=>t(i))}addReference(e,t,r){return ns(e,r)}removeReference(e,t,r){return ns(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return ns(e,t)}On(e,t){return function(r,i){let s=!1;return Op(r).zt(o=>xp(r,o,i).next(a=>(a&&(s=!0),f.resolve(!a)))).next(()=>s)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Mn(e,(o,a)=>{if(a<=t){const c=this.On(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,A.min()),_t(e).delete([0,De(o.path)])))});i.push(c)}}).next(()=>f.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return ns(e,t)}Mn(e,t){const r=_t(e);let i,s=Me.A;return r.Wt({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Me.A&&t(new I(Je(i)),s),s=u,i=c):s=Me.A}).next(()=>{s!==Me.A&&t(new I(Je(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ns(n,e){return _t(n).put(function(t,r){return{targetId:0,path:De(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(){this.changes=new Bt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,B.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?f.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.M=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Kt(e).put(r)}removeEntry(e,t,r){return Kt(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Ps(s),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Fn(e,r)))}getEntry(e,t){let r=B.newInvalidDocument(t);return Kt(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Dr(t))},(i,s)=>{r=this.$n(t,s)}).next(()=>r)}Bn(e,t){let r={size:0,document:B.newInvalidDocument(t)};return Kt(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Dr(t))},(i,s)=>{r={document:this.$n(t,s),size:xs(s)}}).next(()=>r)}getEntries(e,t){let r=Ue();return this.Ln(e,t,(i,s)=>{const o=this.$n(i,s);r=r.insert(i,o)}).next(()=>r)}Un(e,t){let r=Ue(),i=new z(I.comparator);return this.Ln(e,t,(s,o)=>{const a=this.$n(s,o);r=r.insert(s,a),i=i.insert(s,xs(o))}).next(()=>({documents:r,qn:i}))}Ln(e,t,r){if(t.isEmpty())return f.resolve();let i=new U(ih);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Dr(i.first()),Dr(i.last())),o=i.getIterator();let a=o.getNext();return Kt(e).Wt({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=I.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&ih(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.Ut(Dr(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,t,r){const i=[t.popLast().toArray(),t.lastSegment(),Ps(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],s=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Kt(e).qt(IDBKeyRange.bound(i,s,!0)).next(o=>{let a=Ue();for(const c of o){const u=this.$n(I.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(u.key,u)}return a})}getAllFromCollectionGroup(e,t,r,i){let s=Ue();const o=rh(t,r),a=rh(t,Ge.max());return Kt(e).Wt({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.$n(I.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new hb(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return nh(e).get("remoteDocumentGlobalKey").next(t=>(k(!!t),t))}Fn(e,t){return nh(e).put("remoteDocumentGlobalKey",t)}$n(e,t){if(t){const r=QT(this.M,t);if(!(r.isNoDocument()&&r.version.isEqual(A.min())))return r}return B.newInvalidDocument(e)}}class hb extends Mp{constructor(e,t){super(),this.Kn=e,this.trackRemovals=t,this.Gn=new Bt(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new U((s,o)=>D(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Gn.get(s);if(t.push(this.Kn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=Wl(this.Kn.M,o);i=i.add(s.path.popLast()),r+=xs(c)-a.size,t.push(this.Kn.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=Wl(this.Kn.M,o.convertToNoDocument(A.min()));t.push(this.Kn.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.Kn.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Kn.updateMetadata(e,r)),f.waitFor(t)}getFromCache(e,t){return this.Kn.Bn(e,t).next(r=>(this.Gn.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Kn.Un(e,t).next(({documents:r,qn:i})=>(i.forEach((s,o)=>{this.Gn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function nh(n){return he(n,"remoteDocumentGlobal")}function Kt(n){return he(n,"remoteDocumentsV14")}function Dr(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function rh(n,e){const t=e.documentKey.path.toArray();return[n,Ps(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function ih(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=D(t[s],r[s]),i)return i;return i=D(t.length,r.length),i||(i=D(t[t.length-2],r[r.length-2]),i||D(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e){this.M=e}kt(e,t,r,i){const s=new go("createOrUpgrade",t);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",jl,{unique:!0}),a.createObjectStore("documentMutations")}(e),sh(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=f.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),sh(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:A.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").qt().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",jl,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return f.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Qn(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.jn(s)))),r<7&&i>=7&&(o=o.next(()=>this.Wn(s))),r<8&&i>=8&&(o=o.next(()=>this.zn(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.Hn(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:jT});c.createIndex("collectionPathOverlayIndex",KT,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",GT,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:PT});c.createIndex("documentKeyIndex",xT),c.createIndex("collectionGroupIndex",OT)}(e)).next(()=>this.Jn(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>{(function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:VT}).createIndex("sequenceNumberIndex",BT,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:qT}).createIndex("documentKeyIndex",$T,{unique:!1})})(e)})),o}jn(e){let t=0;return e.store("remoteDocuments").Wt((r,i)=>{t+=xs(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Qn(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.qt().next(i=>f.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.qt("userMutationsIndex",o).next(a=>f.forEach(a,c=>{k(c.userId===s.userId);const u=Fn(this.M,c);return Pp(e,s.userId,u).next(()=>{})}))}))}Wn(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Wt((o,a)=>{const c=new P(o),u=function(l){return[0,De(l)]}(c);s.push(t.get(u).next(l=>l?f.resolve():(h=>t.put({targetId:0,path:De(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>f.waitFor(s))})}zn(e,t){e.createObjectStore("collectionParents",{keyPath:UT});const r=t.store("collectionParents"),i=new Kc,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:De(c)})}};return t.store("remoteDocuments").Wt({jt:!0},(o,a)=>{const c=new P(o);return s(c.popLast())}).next(()=>t.store("documentMutations").Wt({jt:!0},([o,a,c],u)=>{const l=Je(a);return s(l.popLast())}))}Hn(e){const t=e.store("targets");return t.Wt((r,i)=>{const s=Mr(i),o=Rp(this.M,s);return t.put(o)})}Jn(e,t){const r=t.store("remoteDocuments"),i=[];return r.Wt((s,o)=>{const a=t.store("remoteDocumentsV14"),c=(u=o,u.document?new I(P.fromString(u.document.name).popFirst(5)):u.noDocument?I.fromSegments(u.noDocument.path):u.unknownDocument?I.fromSegments(u.unknownDocument.path):T()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>f.waitFor(i))}}function sh(n){n.createObjectStore("targetDocuments",{keyPath:LT}).createIndex("documentTargetsIndex",FT,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",MT,{unique:!0}),n.createObjectStore("targetGlobal")}const Ho="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Wc{constructor(e,t,r,i,s,o,a,c,u,l,h=13){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Yn=s,this.window=o,this.document=a,this.Xn=u,this.Zn=l,this.ts=h,this.es=null,this.ns=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ss=null,this.inForeground=!1,this.rs=null,this.os=null,this.us=Number.NEGATIVE_INFINITY,this.cs=d=>Promise.resolve(),!Wc.vt())throw new y(p.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new ub(this,i),this.hs=t+"main",this.M=new Dp(c),this.ls=new $e(this.hs,this.ts,new db(this.M)),this.fs=new sb(this.referenceDelegate,this.M),this.ds=function(d){return new lb(d)}(this.M),this._s=new JT,this.window&&this.window.localStorage?this.ws=this.window.localStorage:(this.ws=null,l===!1&&J("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gs().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new y(p.FAILED_PRECONDITION,Ho);return this.ys(),this.ps(),this.Is(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.fs.getHighestSequenceNumber(e))}).then(e=>{this.es=new Me(e,this.Xn)}).then(()=>{this.ns=!0}).catch(e=>(this.ls&&this.ls.close(),Promise.reject(e)))}Ts(e){return this.cs=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ls.Ot(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Yn.enqueueAndForget(async()=>{this.started&&await this.gs()}))}gs(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>rs(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Es(e).next(t=>{t||(this.isPrimary=!1,this.Yn.enqueueRetryable(()=>this.cs(!1)))})}).next(()=>this.As(e)).next(t=>this.isPrimary&&!t?this.Rs(e).next(()=>!1):!!t&&this.bs(e).next(()=>!0))).catch(e=>{if(kn(e))return v("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return v("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Yn.enqueueRetryable(()=>this.cs(e)),this.isPrimary=e})}Es(e){return Rr(e).get("owner").next(t=>f.resolve(this.Ps(t)))}Vs(e){return rs(e).delete(this.clientId)}async vs(){if(this.isPrimary&&!this.Ss(this.us,18e5)){this.us=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=he(t,"clientMetadata");return r.qt().next(i=>{const s=this.Ds(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return f.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.ws)for(const t of e)this.ws.removeItem(this.Cs(t.clientId))}}Is(){this.os=this.Yn.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.gs().then(()=>this.vs()).then(()=>this.Is()))}Ps(e){return!!e&&e.ownerId===this.clientId}As(e){return this.Zn?f.resolve(!0):Rr(e).get("owner").next(t=>{if(t!==null&&this.Ss(t.leaseTimestampMs,5e3)&&!this.xs(t.ownerId)){if(this.Ps(t)&&this.networkEnabled)return!0;if(!this.Ps(t)){if(!t.allowTabSynchronization)throw new y(p.FAILED_PRECONDITION,Ho);return!1}}return!(!this.networkEnabled||!this.inForeground)||rs(e).qt().next(r=>this.Ds(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&v("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.ns=!1,this.Ns(),this.os&&(this.os.cancel(),this.os=null),this.ks(),this.Ms(),await this.ls.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Gl(e,Me.A);return this.Rs(t).next(()=>this.Vs(t))}),this.ls.close(),this.Os()}Ds(e,t){return e.filter(r=>this.Ss(r.updateTimeMs,t)&&!this.xs(r.clientId))}Fs(){return this.runTransaction("getActiveClients","readonly",e=>rs(e).qt().next(t=>this.Ds(t,18e5).map(r=>r.clientId)))}get started(){return this.ns}getMutationQueue(e,t){return Gc.Yt(e,this.M,t,this.referenceDelegate)}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getIndexManager(e){return new ib(e,this.M.Jt.databaseId)}getDocumentOverlayCache(e){return jc.Yt(this.M,e)}getBundleCache(){return this._s}runTransaction(e,t,r){v("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(o=this.ts)===14?zT:o===13?kp:o===12?WT:o===11?Ap:void T();var o;let a;return this.ls.runTransaction(e,i,s,c=>(a=new Gl(c,this.es?this.es.next():Me.A),t==="readwrite-primary"?this.Es(a).next(u=>!!u||this.As(a)).next(u=>{if(!u)throw J(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Yn.enqueueRetryable(()=>this.cs(!1)),new y(p.FAILED_PRECONDITION,Cp);return r(a)}).next(u=>this.bs(a).next(()=>u)):this.$s(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}$s(e){return Rr(e).get("owner").next(t=>{if(t!==null&&this.Ss(t.leaseTimestampMs,5e3)&&!this.xs(t.ownerId)&&!this.Ps(t)&&!(this.Zn||this.allowTabSynchronization&&t.allowTabSynchronization))throw new y(p.FAILED_PRECONDITION,Ho)})}bs(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Rr(e).put("owner",t)}static vt(){return $e.vt()}Rs(e){const t=Rr(e);return t.get("owner").next(r=>this.Ps(r)?(v("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):f.resolve())}Ss(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(J(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ys(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.rs=()=>{this.Yn.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.gs()))},this.document.addEventListener("visibilitychange",this.rs),this.inForeground=this.document.visibilityState==="visible")}ks(){this.rs&&(this.document.removeEventListener("visibilitychange",this.rs),this.rs=null)}ps(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ss=()=>{this.Ns(),sg()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Yn.enterRestrictedMode(!0),this.Yn.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ss))}Ms(){this.ss&&(this.window.removeEventListener("pagehide",this.ss),this.ss=null)}xs(e){var t;try{const r=((t=this.ws)===null||t===void 0?void 0:t.getItem(this.Cs(e)))!==null;return v("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return J("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ns(){if(this.ws)try{this.ws.setItem(this.Cs(this.clientId),String(Date.now()))}catch(e){J("Failed to set zombie client id.",e)}}Os(){if(this.ws)try{this.ws.removeItem(this.Cs(this.clientId))}catch{}}Cs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Rr(n){return he(n,"owner")}function rs(n){return he(n,"clientMetadata")}function zc(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,t,r){this.ds=e,this.Bs=t,this.indexManager=r}Ls(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,t).next(r=>this.Us(e,t,r))}Us(e,t,r){return this.ds.getEntry(e,t).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}qs(e,t){e.forEach((r,i)=>{for(const s of t)s.applyToLocalView(i)})}Ks(e,t){return this.ds.getEntries(e,t).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,t).next(r=>this.qs(t,r))}Qs(e,t,r){return function(i){return I.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.js(e,t.path):Oc(t)?this.Ws(e,t,r):this.zs(e,t,r)}js(e,t){return this.Ls(e,new I(t)).next(r=>{let i=Aa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Ws(e,t,r){const i=t.collectionGroup;let s=Aa();return this.indexManager.getCollectionParents(e,i).next(o=>f.forEach(o,a=>{const c=function(u,l){return new gt(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(i));return this.zs(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}zs(e,t,r){let i;return this.ds.getAllFromCollection(e,t.path,r).next(s=>(i=s,this.Bs.getAllMutationBatchesAffectingQuery(e,t))).next(s=>{for(const o of s)for(const a of o.mutations){const c=a.key;let u=i.get(c);u==null&&(u=B.newInvalidDocument(c),i=i.insert(c,u)),Sa(a,u,o.localWriteTime),u.isFoundDocument()||(i=i.remove(c))}}).next(()=>(i.forEach((s,o)=>{Mc(t,o)||(i=i.remove(s))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Hs=r,this.Js=i}static Ys(e,t){let r=M(),i=M();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Hc(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(){this.Xs=!1}initialize(e,t){this.Zs=e,this.indexManager=t,this.Xs=!0}Qs(e,t,r,i){return this.ti(e,t).next(s=>s||this.ei(e,t,i,r)).next(s=>s||this.ni(e,t))}ti(e,t){return f.resolve(null)}ei(e,t,r,i){return nT(t)||i.isEqual(A.min())?this.ni(e,t):this.Zs.Ks(e,r).next(s=>{const o=this.si(t,s);return this.ii(t,o,r,i)?this.ni(e,t):(Ia()<=x.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ba(t)),this.ri(e,o,t,Yf(i,-1)))})}si(e,t){let r=new U(np(e));return t.forEach((i,s)=>{Mc(e,s)&&(r=r.add(s))}),r}ii(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ni(e,t){return Ia()<=x.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",ba(t)),this.Zs.Qs(e,t,Ge.min())}ri(e,t,r,i){return this.Zs.Qs(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,t,r,i){this.persistence=e,this.oi=t,this.M=i,this.ui=new z(D),this.ai=new Bt(s=>pn(s),Oi),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(r)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new fb(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ui))}}function Fp(n,e,t,r){return new pb(n,e,t,r)}async function Up(n,e){const t=_(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.Bs.getAllMutationBatches(r).next(s=>(i=s,t.li(e),t.Bs.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=M();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.fi.Ks(r,c).next(u=>({di:u,removedBatchIds:o,addedBatchIds:a}))})})}function mb(n,e){const t=_(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.hi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=f.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(g=>{const b=c.docVersions.get(m);k(b!==null),g.version.compareTo(b)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>o.Bs.removeMutationBatch(a,l))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.Bs.performConsistencyCheck(r)).next(()=>t.fi.Ks(r,i))})}function Vp(n){const e=_(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.fs.getLastRemoteSnapshotVersion(t))}function gb(n,e){const t=_(n),r=e.snapshotVersion;let i=t.ui;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.hi.newChangeBuffer({trackRemovals:!0});i=t.ui;const a=[];e.targetChanges.forEach((u,l)=>{const h=i.get(l);if(!h)return;a.push(t.fs.removeMatchingKeys(s,u.removedDocuments,l).next(()=>t.fs.addMatchingKeys(s,u.addedDocuments,l)));let d=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(l)?d=d.withResumeToken(ne.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),i=i.insert(l,d),function(m,g,b){return m.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(h,d,u)&&a.push(t.fs.updateTargetData(s,d))});let c=Ue();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(Bp(s,o,e.documentUpdates).next(u=>{c=u})),!r.isEqual(A.min())){const u=t.fs.getLastRemoteSnapshotVersion(s).next(l=>t.fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return f.waitFor(a).next(()=>o.apply(s)).next(()=>t.fi.Gs(s,c)).next(()=>c)}).then(s=>(t.ui=i,s))}function Bp(n,e,t){let r=M();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let s=Ue();return t.forEach((o,a)=>{const c=i.get(o);a.isNoDocument()&&a.version.isEqual(A.min())?(e.removeEntry(o,a.readTime),s=s.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),s=s.insert(o,a)):v("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),s})}function yb(n,e){const t=_(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.Bs.getNextMutationBatchAfterBatchId(r,e)))}function nr(n,e){const t=_(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.fs.getTargetData(r,e).next(s=>s?(i=s,f.resolve(i)):t.fs.allocateTargetId(r).next(o=>(i=new At(e,o,0,r.currentSequenceNumber),t.fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ui=t.ui.insert(r.targetId,r),t.ai.set(e,r.targetId)),r})}async function rr(n,e,t){const r=_(n),i=r.ui.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!kn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ui=r.ui.remove(e),r.ai.delete(i.target)}function Os(n,e,t){const r=_(n);let i=A.min(),s=M();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=_(a),h=l.ai.get(u);return h!==void 0?f.resolve(l.ui.get(h)):l.fs.getTargetData(c,u)}(r,o,qe(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.oi.Qs(o,e,t?i:A.min(),t?s:M())).next(a=>(jp(r,tp(e),a),{documents:a,_i:s})))}function qp(n,e){const t=_(n),r=_(t.fs),i=t.ui.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.Et(s,e).next(o=>o?o.target:null))}function $p(n,e){const t=_(n),r=t.ci.get(e)||A.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.hi.getAllFromCollectionGroup(i,e,Yf(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(jp(t,e,i),i))}function jp(n,e,t){let r=A.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ci.set(e,r)}async function vb(n,e,t,r){const i=_(n);let s=M(),o=Ue();for(const u of t){const l=e.wi(u.metadata.name);u.document&&(s=s.add(l));const h=e.mi(u);h.setReadTime(e.gi(u.metadata.readTime)),o=o.insert(l,h)}const a=i.hi.newChangeBuffer({trackRemovals:!0}),c=await nr(i,function(u){return qe(yr(P.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>Bp(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.fs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.fs.addMatchingKeys(u,s,c.targetId)).next(()=>i.fi.Gs(u,l)).next(()=>l)))}async function wb(n,e,t=M()){const r=await nr(n,qe($c(e.bundledQuery))),i=_(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ae(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i._s.saveNamedQuery(s,e);const a=r.withResumeToken(ne.EMPTY_BYTE_STRING,o);return i.ui=i.ui.insert(a.targetId,a),i.fs.updateTargetData(s,a).next(()=>i.fs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.fs.addMatchingKeys(s,t,r.targetId)).next(()=>i._s.saveNamedQuery(s,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,t){return f.resolve(this.yi.get(t))}saveBundleMetadata(e,t){var r;return this.yi.set(t.id,{id:(r=t).id,version:r.version,createTime:ae(r.createTime)}),f.resolve()}getNamedQuery(e,t){return f.resolve(this.pi.get(t))}saveNamedQuery(e,t){return this.pi.set(t.name,function(r){return{name:r.name,query:$c(r.bundledQuery),readTime:ae(r.readTime)}}(t)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(){this.overlays=new z(I.comparator),this.Ii=new Map}getOverlay(e,t){return f.resolve(this.overlays.get(t))}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Xt(e,t,s)}),f.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ii.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ii.delete(r)),f.resolve()}getOverlaysForCollection(e,t,r){const i=$r(),s=t.length+1,o=new I(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return f.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new z((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=$r(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=$r(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return f.resolve(a)}Xt(e,t,r){if(r===null)return;const i=this.overlays.get(r.key);if(i!==null){const o=this.Ii.get(i.largestBatchId).delete(r.key);this.Ii.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new qc(t,r));let s=this.Ii.get(t);s===void 0&&(s=M(),this.Ii.set(t,s)),this.Ii.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this.Ti=new U(se.Ei),this.Ai=new U(se.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,t){const r=new se(e,t);this.Ti=this.Ti.add(r),this.Ai=this.Ai.add(r)}bi(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Pi(new se(e,t))}Vi(e,t){e.forEach(r=>this.removeReference(r,t))}vi(e){const t=new I(new P([])),r=new se(t,e),i=new se(t,e+1),s=[];return this.Ai.forEachInRange([r,i],o=>{this.Pi(o),s.push(o.key)}),s}Si(){this.Ti.forEach(e=>this.Pi(e))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const t=new I(new P([])),r=new se(t,e),i=new se(t,e+1);let s=M();return this.Ai.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new se(e,0),r=this.Ti.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class se{constructor(e,t){this.key=e,this.Ci=t}static Ei(e,t){return I.comparator(e.key,t.key)||D(e.Ci,t.Ci)}static Ri(e,t){return D(e.Ci,t.Ci)||I.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.Bs=[],this.xi=1,this.Ni=new U(se.Ei)}checkEmpty(e){return f.resolve(this.Bs.length===0)}addMutationBatch(e,t,r,i){const s=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new Vc(s,t,r,i);this.Bs.push(o);for(const a of i)this.Ni=this.Ni.add(new se(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,t){return f.resolve(this.ki(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Mi(r),s=i<0?0:i;return f.resolve(this.Bs.length>s?this.Bs[s]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.Bs.length===0?-1:this.xi-1)}getAllMutationBatches(e){return f.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new se(t,0),i=new se(t,Number.POSITIVE_INFINITY),s=[];return this.Ni.forEachInRange([r,i],o=>{const a=this.ki(o.Ci);s.push(a)}),f.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new U(D);return t.forEach(i=>{const s=new se(i,0),o=new se(i,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([s,o],a=>{r=r.add(a.Ci)})}),f.resolve(this.Oi(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;I.isDocumentKey(s)||(s=s.child(""));const o=new se(new I(s),0);let a=new U(D);return this.Ni.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.Ci)),!0)},o),f.resolve(this.Oi(a))}Oi(e){const t=[];return e.forEach(r=>{const i=this.ki(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){k(this.Fi(t.batchId,"removed")===0),this.Bs.shift();let r=this.Ni;return f.forEach(t.mutations,i=>{const s=new se(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Ni=r})}_n(e){}containsKey(e,t){const r=new se(t,0),i=this.Ni.firstAfterOrEqual(r);return f.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.Bs.length,f.resolve()}Fi(e,t){return this.Mi(e)}Mi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}ki(e){const t=this.Mi(e);return t<0||t>=this.Bs.length?null:this.Bs[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.$i=e,this.docs=new z(I.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.$i(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return f.resolve(r?r.document.mutableCopy():B.newInvalidDocument(t))}getEntries(e,t){let r=Ue();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():B.newInvalidDocument(i))}),f.resolve(r)}getAllFromCollection(e,t,r){let i=Ue();const s=new I(t.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||Qf(GE(c),r)<=0||(i=i.insert(c.key,c.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(e,t,r,i){T()}Bi(e,t){return f.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new bb(this)}getSize(e){return f.resolve(this.size)}}class bb extends Mp{constructor(e){super(),this.Kn=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Kn.addEntry(e,i)):this.Kn.removeEntry(r)}),f.waitFor(t)}getFromCache(e,t){return this.Kn.getEntry(e,t)}getAllFromCache(e,t){return this.Kn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.persistence=e,this.Li=new Bt(t=>pn(t),Oi),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.Ui=0,this.qi=new Yc,this.targetCount=0,this.Ki=wn.gn()}forEachTarget(e,t){return this.Li.forEach((r,i)=>t(i)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Ui&&(this.Ui=t),f.resolve()}Tn(e){this.Li.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ki=new wn(t),this.highestTargetId=t),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,t){return this.Tn(t),this.targetCount+=1,f.resolve()}updateTargetData(e,t){return this.Tn(t),f.resolve()}removeTargetData(e,t){return this.Li.delete(t.target),this.qi.vi(t.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Li.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Li.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),f.waitFor(s).next(()=>i)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,t){const r=this.Li.get(t)||null;return f.resolve(r)}addMatchingKeys(e,t,r){return this.qi.bi(t,r),f.resolve()}removeMatchingKeys(e,t,r){this.qi.Vi(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),f.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.qi.vi(t),f.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qi.Di(t);return f.resolve(r)}containsKey(e,t){return f.resolve(this.qi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,t){this.Gi={},this.overlays={},this.es=new Me(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new Sb(this),this.indexManager=new rb,this.ds=function(r){return new Tb(r)}(r=>this.referenceDelegate.Qi(r)),this.M=new Dp(t),this._s=new Ib(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _b,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Gi[e.toKey()];return r||(r=new Eb(t,this.referenceDelegate),this.Gi[e.toKey()]=r),r}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,t,r){v("MemoryPersistence","Starting transaction:",e);const i=new kb(this.es.next());return this.referenceDelegate.ji(),r(i).next(s=>this.referenceDelegate.Wi(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zi(e,t){return f.or(Object.values(this.Gi).map(r=>()=>r.containsKey(e,t)))}}class kb extends Np{constructor(e){super(),this.currentSequenceNumber=e}}class Qc{constructor(e){this.persistence=e,this.Hi=new Yc,this.Ji=null}static Yi(e){return new Qc(e)}get Xi(){if(this.Ji)return this.Ji;throw T()}addReference(e,t,r){return this.Hi.addReference(r,t),this.Xi.delete(r.toString()),f.resolve()}removeReference(e,t,r){return this.Hi.removeReference(r,t),this.Xi.add(r.toString()),f.resolve()}markPotentiallyOrphaned(e,t){return this.Xi.add(t.toString()),f.resolve()}removeTarget(e,t){this.Hi.vi(t.targetId).forEach(i=>this.Xi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}ji(){this.Ji=new Set}Wi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Xi,r=>{const i=I.fromPath(r);return this.Zi(e,i).next(s=>{s||t.removeEntry(i,A.min())})}).next(()=>(this.Ji=null,t.apply(e)))}updateLimboDocument(e,t){return this.Zi(e,t).next(r=>{r?this.Xi.delete(t.toString()):this.Xi.add(t.toString())})}Qi(e){return 0}Zi(e,t){return f.or([()=>f.resolve(this.Hi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zi(e,t)])}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(n,e){return`firestore_clients_${n}_${e}`}function ah(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Yo(n,e){return`firestore_targets_${n}_${e}`}class Ms{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static tr(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new y(i.error.code,i.error.message))),o?new Ms(e,t,i.state,s):(J("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}er(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Kr{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static tr(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new y(r.error.code,r.error.message))),s?new Kr(e,r.state,i):(J("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}er(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ls{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static tr(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=mo();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Gf(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Ls(e,s):(J("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Jc{constructor(e,t){this.clientId=e,this.onlineState=t}static tr(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Jc(t.clientId,t.onlineState):(J("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Na{constructor(){this.activeTargetIds=mo()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qo{constructor(e,t,r,i,s){this.window=e,this.Yn=t,this.persistenceKey=r,this.ir=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.rr=this.ur.bind(this),this.ar=new z(D),this.started=!1,this.cr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.hr=oh(this.persistenceKey,this.ir),this.lr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ar=this.ar.insert(this.ir,new Na),this.dr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this._r=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.wr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.mr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.gr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.rr)}static vt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Fs();for(const r of e){if(r===this.ir)continue;const i=this.getItem(oh(this.persistenceKey,r));if(i){const s=Ls.tr(r,i);s&&(this.ar=this.ar.insert(s.clientId,s))}}this.yr();const t=this.storage.getItem(this.mr);if(t){const r=this.pr(t);r&&this.Ir(r)}for(const r of this.cr)this.ur(r);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.lr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Tr(this.ar)}isActiveQueryTarget(e){let t=!1;return this.ar.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Er(e,"pending")}updateMutationState(e,t,r){this.Er(e,t,r),this.Ar(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Yo(this.persistenceKey,e));if(r){const i=Kr.tr(e,r);i&&(t=i.state)}}return this.Rr.nr(e),this.yr(),t}removeLocalQueryTarget(e){this.Rr.sr(e),this.yr()}isLocalQueryTarget(e){return this.Rr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Yo(this.persistenceKey,e))}updateQueryState(e,t,r){this.br(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Ar(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Pr(e)}notifyBundleLoaded(e){this.Vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.rr),this.removeItem(this.hr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return v("SharedClientState","READ",e,t),t}setItem(e,t){v("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){v("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ur(e){const t=e;if(t.storageArea===this.storage){if(v("SharedClientState","EVENT",t.key,t.newValue),t.key===this.hr)return void J("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Yn.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.dr.test(t.key)){if(t.newValue==null){const r=this.vr(t.key);return this.Sr(r,null)}{const r=this.Dr(t.key,t.newValue);if(r)return this.Sr(r.clientId,r)}}else if(this._r.test(t.key)){if(t.newValue!==null){const r=this.Cr(t.key,t.newValue);if(r)return this.Nr(r)}}else if(this.wr.test(t.key)){if(t.newValue!==null){const r=this.kr(t.key,t.newValue);if(r)return this.Mr(r)}}else if(t.key===this.mr){if(t.newValue!==null){const r=this.pr(t.newValue);if(r)return this.Ir(r)}}else if(t.key===this.lr){const r=function(i){let s=Me.A;if(i!=null)try{const o=JSON.parse(i);k(typeof o=="number"),s=o}catch(o){J("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(t.newValue);r!==Me.A&&this.sequenceNumberHandler(r)}else if(t.key===this.gr){const r=this.Or(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Fr(i)))}}}else this.cr.push(t)})}}get Rr(){return this.ar.get(this.ir)}yr(){this.setItem(this.hr,this.Rr.er())}Er(e,t,r){const i=new Ms(this.currentUser,e,t,r),s=ah(this.persistenceKey,this.currentUser,e);this.setItem(s,i.er())}Ar(e){const t=ah(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Pr(e){const t={clientId:this.ir,onlineState:e};this.storage.setItem(this.mr,JSON.stringify(t))}br(e,t,r){const i=Yo(this.persistenceKey,e),s=new Kr(e,t,r);this.setItem(i,s.er())}Vr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.gr,t)}vr(e){const t=this.dr.exec(e);return t?t[1]:null}Dr(e,t){const r=this.vr(e);return Ls.tr(r,t)}Cr(e,t){const r=this._r.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Ms.tr(new pe(s),i,t)}kr(e,t){const r=this.wr.exec(e),i=Number(r[1]);return Kr.tr(i,t)}pr(e){return Jc.tr(e)}Or(e){return JSON.parse(e)}async Nr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.$r(e.batchId,e.state,e.error);v("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Mr(e){return this.syncEngine.Br(e.targetId,e.state,e.error)}Sr(e,t){const r=t?this.ar.insert(e,t):this.ar.remove(e),i=this.Tr(this.ar),s=this.Tr(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Lr(o,a).then(()=>{this.ar=r})}Ir(e){this.ar.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Tr(e){let t=mo();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class Kp{constructor(){this.Ur=new Na,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,t,r){this.qr[e]=t}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Na,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{Kr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.uo=t+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,t,r,i,s){const o=this.ho(e,t);v("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw si("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,t,r,i,s){return this.co(e,t,r,i,s)}lo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+gr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,t){const r=Nb[e];return`${this.uo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,r,i){return new Promise((s,o)=>{const a=new kE;a.listenOnce(bE.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Wo.NO_ERROR:const u=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Wo.TIMEOUT:v("Connection",'RPC "'+e+'" timed out'),o(new y(p.DEADLINE_EXCEEDED,"Request time out"));break;case Wo.HTTP_ERROR:const l=a.getStatus();if(v("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(m){const g=m.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(g)>=0?g:p.UNKNOWN}(h.status);o(new y(d,h.message))}else o(new y(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new y(p.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{v("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(t,"POST",c,r,15)})}wo(e,t,r){const i=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=EE(),o=TE(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new AE({})),this.lo(a.initMessageHeaders,t,r),kh()||Bs()||rg()||Va()||ig()||Ua()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");v("Connection","Creating WebChannel: "+c,a);const u=s.createWebChannel(c,a);let l=!1,h=!1;const d=new Db({Jr:g=>{h?v("Connection","Not sending because WebChannel is closed:",g):(l||(v("Connection","Opening WebChannel transport."),u.open(),l=!0),v("Connection","WebChannel sending:",g),u.send(g))},Yr:()=>u.close()}),m=(g,b,C)=>{g.listen(b,F=>{try{C(F)}catch(H){setTimeout(()=>{throw H},0)}})};return m(u,Ji.EventType.OPEN,()=>{h||v("Connection","WebChannel transport opened.")}),m(u,Ji.EventType.CLOSE,()=>{h||(h=!0,v("Connection","WebChannel transport closed"),d.ro())}),m(u,Ji.EventType.ERROR,g=>{h||(h=!0,si("Connection","WebChannel transport errored:",g),d.ro(new y(p.UNAVAILABLE,"The operation could not be completed")))}),m(u,Ji.EventType.MESSAGE,g=>{var b;if(!h){const C=g.data[0];k(!!C);const F=C,H=F.error||((b=F[0])===null||b===void 0?void 0:b.error);if(H){v("Connection","WebChannel received error:",H);const L=H.status;let ie=function(V){const fe=Q[V];if(fe!==void 0)return dp(fe)}(L),Y=H.message;ie===void 0&&(ie=p.INTERNAL,Y="Unknown error status: "+L+" with message "+H.message),h=!0,d.ro(new y(ie,Y)),u.close()}else v("Connection","WebChannel received:",C),d.oo(C)}}),m(o,SE.STAT_EVENT,g=>{g.stat===wl.PROXY?v("Connection","Detected buffering proxy"):g.stat===wl.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.io()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(){return typeof window!="undefined"?window:null}function ds(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(n){return new wT(n,!0)}class Xc{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Yn=e,this.timerId=t,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,t-r);i>0&&v("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,t,r,i,s,o,a,c){this.Yn=e,this.Vo=r,this.vo=i,this.So=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Xc(e,t)}ko(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&this.Co===null&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,t){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():t&&t.code===p.RESOURCE_EXHAUSTED?(J(t.toString()),J("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):t&&t.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(t)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),t=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Do===t&&this.Qo(r,i)},r=>{e(()=>{const i=new y(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(i)})})}Qo(e,t){const r=this.Go(this.Do);this.stream=this.Wo(e,t),this.stream.Xr(()=>{r(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(i=>{r(()=>this.jo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return t=>{this.Yn.enqueueAndForget(()=>this.Do===e?t():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Pb extends Wp{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.M=s}Wo(e,t){return this.So.wo("Listen",e,t)}onMessage(e){this.No.reset();const t=ET(this.M,e),r=function(i){if(!("targetChange"in i))return A.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?A.min():s.readTime?ae(s.readTime):A.min()}(e);return this.listener.zo(t,r)}Ho(e){const t={};t.database=fi(this.M),t.addTarget=function(i,s){let o;const a=s.target;return o=Ds(a)?{documents:Ip(i,a)}:{query:_p(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=mp(i,s.resumeToken):s.snapshotVersion.compareTo(A.min())>0&&(o.readTime=hi(i,s.snapshotVersion.toTimestamp())),o}(this.M,e);const r=bT(this.M,e);r&&(t.labels=r),this.Lo(t)}Jo(e){const t={};t.database=fi(this.M),t.removeTarget=e,this.Lo(t)}}class xb extends Wp{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.M=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,t){return this.So.wo("Write",e,t)}onMessage(e){if(k(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const t=TT(e.writeResults,e.commitTime),r=ae(e.commitTime);return this.listener.tu(r,t)}return k(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=fi(this.M),this.Lo(e)}Zo(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>pi(this.M,r))};this.Lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.So=r,this.M=i,this.su=!1}iu(){if(this.su)throw new y(p.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So.co(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(p.UNKNOWN,i.toString())})}_o(e,t,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So._o(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(p.UNKNOWN,i.toString())})}terminate(){this.su=!0}}class Mb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){this.ru===0&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(J(t),this.uu=!1):v("OnlineStateTracker",t)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.Kr(o=>{r.enqueueAndForget(async()=>{qt(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=_(a);c.wu.add(4),await vr(c),c.yu.set("Unknown"),c.wu.delete(4),await $i(c)}(this))})}),this.yu=new Mb(r,i)}}async function $i(n){if(qt(n))for(const e of n.mu)await e(!0)}async function vr(n){for(const e of n.mu)await e(!1)}function yo(n,e){const t=_(n);t._u.has(e.targetId)||(t._u.set(e.targetId,e),tu(t)?eu(t):Ir(t).Mo()&&Zc(t,e))}function mi(n,e){const t=_(n),r=Ir(t);t._u.delete(e),r.Mo()&&zp(t,e),t._u.size===0&&(r.Mo()?r.$o():qt(t)&&t.yu.set("Unknown"))}function Zc(n,e){n.pu.Z(e.targetId),Ir(n).Ho(e)}function zp(n,e){n.pu.Z(e),Ir(n).Jo(e)}function eu(n){n.pu=new gT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n._u.get(e)||null}),Ir(n).start(),n.yu.au()}function tu(n){return qt(n)&&!Ir(n).ko()&&n._u.size>0}function qt(n){return _(n).wu.size===0}function Hp(n){n.pu=void 0}async function Fb(n){n._u.forEach((e,t)=>{Zc(n,e)})}async function Ub(n,e){Hp(n),tu(n)?(n.yu.lu(e),eu(n)):n.yu.set("Unknown")}async function Vb(n,e,t){if(n.yu.set("Online"),e instanceof pp&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r._u.delete(o),r.pu.removeTarget(o))}(n,e)}catch(r){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fs(n,r)}else if(e instanceof ls?n.pu.ut(e):e instanceof fp?n.pu._t(e):n.pu.ht(e),!t.isEqual(A.min()))try{const r=await Vp(n.localStore);t.compareTo(r)>=0&&await function(i,s){const o=i.pu.yt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i._u.get(c);u&&i._u.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i._u.get(a);if(!c)return;i._u.set(a,c.withResumeToken(ne.EMPTY_BYTE_STRING,c.snapshotVersion)),zp(i,a);const u=new At(c.target,a,1,c.sequenceNumber);Zc(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){v("RemoteStore","Failed to raise snapshot:",r),await Fs(n,r)}}async function Fs(n,e,t){if(!kn(e))throw e;n.wu.add(1),await vr(n),n.yu.set("Offline"),t||(t=()=>Vp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await t(),n.wu.delete(1),await $i(n)})}function Yp(n,e){return e().catch(t=>Fs(n,t,e))}async function wr(n){const e=_(n),t=Ot(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;Bb(e);)try{const i=await yb(e.localStore,r);if(i===null){e.du.length===0&&t.$o();break}r=i.batchId,qb(e,i)}catch(i){await Fs(e,i)}Qp(e)&&Jp(e)}function Bb(n){return qt(n)&&n.du.length<10}function qb(n,e){n.du.push(e);const t=Ot(n);t.Mo()&&t.Xo&&t.Zo(e.mutations)}function Qp(n){return qt(n)&&!Ot(n).ko()&&n.du.length>0}function Jp(n){Ot(n).start()}async function $b(n){Ot(n).nu()}async function jb(n){const e=Ot(n);for(const t of n.du)e.Zo(t.mutations)}async function Kb(n,e,t){const r=n.du.shift(),i=Bc.from(r,e,t);await Yp(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await wr(n)}async function Gb(n,e){e&&Ot(n).Xo&&await async function(t,r){if(i=r.code,hp(i)&&i!==p.ABORTED){const s=t.du.shift();Ot(t).Fo(),await Yp(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,r)),await wr(t)}var i}(n,e),Qp(n)&&Jp(n)}async function uh(n,e){const t=_(n);t.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const r=qt(t);t.wu.add(3),await vr(t),r&&t.yu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.wu.delete(3),await $i(t)}async function Da(n,e){const t=_(n);e?(t.wu.delete(2),await $i(t)):e||(t.wu.add(2),await vr(t),t.yu.set("Unknown"))}function Ir(n){return n.Iu||(n.Iu=function(e,t,r){const i=_(e);return i.iu(),new Pb(t,i.So,i.authCredentials,i.appCheckCredentials,i.M,r)}(n.datastore,n.asyncQueue,{Xr:Fb.bind(null,n),eo:Ub.bind(null,n),zo:Vb.bind(null,n)}),n.mu.push(async e=>{e?(n.Iu.Fo(),tu(n)?eu(n):n.yu.set("Unknown")):(await n.Iu.stop(),Hp(n))})),n.Iu}function Ot(n){return n.Tu||(n.Tu=function(e,t,r){const i=_(e);return i.iu(),new xb(t,i.So,i.authCredentials,i.appCheckCredentials,i.M,r)}(n.datastore,n.asyncQueue,{Xr:$b.bind(null,n),eo:Gb.bind(null,n),eu:jb.bind(null,n),tu:Kb.bind(null,n)}),n.mu.push(async e=>{e?(n.Tu.Fo(),await wr(n)):(await n.Tu.stop(),n.du.length>0&&(v("RemoteStore",`Stopping write stream with ${n.du.length} pending writes`),n.du=[]))})),n.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new oe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new nu(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _r(n,e){if(J("AsyncQueue",`${e}: ${n}`),kn(n))return new y(p.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||I.comparator(t.key,r.key):(t,r)=>I.comparator(t.key,r.key),this.keyedMap=Aa(),this.sortedSet=new z(this.comparator)}static emptySet(e){return new zn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new zn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(){this.Eu=new z(I.comparator)}track(e){const t=e.doc.key,r=this.Eu.get(t);r?e.type!==0&&r.type===3?this.Eu=this.Eu.insert(t,e):e.type===3&&r.type!==1?this.Eu=this.Eu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Eu=this.Eu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Eu=this.Eu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Eu=this.Eu.remove(t):e.type===1&&r.type===2?this.Eu=this.Eu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Eu=this.Eu.insert(t,{type:2,doc:e.doc}):T():this.Eu=this.Eu.insert(t,e)}Au(){const e=[];return this.Eu.inorderTraversal((t,r)=>{e.push(r)}),e}}class ir{constructor(e,t,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,t,r,i){const s=[];return t.forEach(o=>{s.push({type:0,doc:o})}),new ir(e,t,zn.emptySet(t),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(){this.Ru=void 0,this.listeners=[]}}class zb{constructor(){this.queries=new Bt(e=>ep(e),Mi),this.onlineState="Unknown",this.bu=new Set}}async function ru(n,e){const t=_(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new Wb),i)try{s.Ru=await t.onListen(r)}catch(o){const a=_r(o,`Initialization of query '${ba(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.Pu(t.onlineState),s.Ru&&e.Vu(s.Ru)&&su(t)}async function iu(n,e){const t=_(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function Hb(n,e){const t=_(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.Vu(i)&&(r=!0);o.Ru=i}}r&&su(t)}function Yb(n,e,t){const r=_(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function su(n){n.bu.forEach(e=>{e.next()})}class ou{constructor(e,t,r){this.query=e,this.vu=t,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ir(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),t=!0):this.xu(e,this.onlineState)&&(this.Nu(e),t=!0),this.Du=e,t}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let t=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),t=!0),t}xu(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.ku||!r)&&(!e.docs.isEmpty()||t==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const t=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Nu(e){e=ir.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,t){this.payload=e,this.byteLength=t}Mu(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this.M=e}wi(e){return Ze(this.M,e)}mi(e){return e.metadata.exists?wp(this.M,e.document,!1):B.newNoDocument(this.wi(e.metadata.name),this.gi(e.metadata.readTime))}gi(e){return ae(e)}}class Jb{constructor(e,t,r){this.Ou=e,this.localStore=t,this.M=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Xp(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const r=P.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,r=new hh(this.M);for(const i of e)if(i.metadata.queries){const s=r.wi(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||M()).add(s);t.set(o,a)}}return t}async complete(){const e=await vb(this.localStore,new hh(this.M),this.documents,this.Ou.id),t=this.$u(this.documents);for(const r of this.queries)await wb(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function Xp(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.key=e}}class em{constructor(e){this.key=e}}class tm{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.current=!1,this.Ku=M(),this.mutatedKeys=M(),this.Gu=np(e),this.Qu=new zn(this.Gu)}get ju(){return this.Uu}Wu(e,t){const r=t?t.zu:new lh,i=t?t.Qu:this.Qu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),m=Mc(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),b=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let C=!1;d&&m?d.data.isEqual(m.data)?g!==b&&(r.track({type:3,doc:m}),C=!0):this.Hu(d,m)||(r.track({type:2,doc:m}),C=!0,(c&&this.Gu(m,c)>0||u&&this.Gu(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),C=!0):d&&!m&&(r.track({type:1,doc:d}),C=!0,(c||u)&&(a=!0)),C&&(m?(o=o.add(m),s=b?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,ii:a,mutatedKeys:s}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Au();s.sort((u,l)=>function(h,d){const m=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return m(h)-m(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(r);const o=t?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,s.length!==0||c?{snapshot:new ir(this.query,e.Qu,i,s,e.mutatedKeys,a===0,c,!1),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new lh,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(t=>this.Uu=this.Uu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Uu=this.Uu.delete(t)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=M(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const t=[];return e.forEach(r=>{this.Ku.has(r)||t.push(new em(r))}),this.Ku.forEach(r=>{e.has(r)||t.push(new Zp(r))}),t}ta(e){this.Uu=e._i,this.Ku=M();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ea(){return ir.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0)}}class Xb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Zb{constructor(e){this.key=e,this.na=!1}}class e0{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sa={},this.ia=new Bt(a=>ep(a),Mi),this.ra=new Map,this.oa=new Set,this.ua=new z(I.comparator),this.aa=new Map,this.ca=new Yc,this.ha={},this.la=new Map,this.fa=wn.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return this.da===!0}}async function t0(n,e){const t=hu(n);let r,i;const s=t.ia.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.ea();else{const o=await nr(t.localStore,qe(e));t.isPrimaryClient&&yo(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await au(t,e,r,a==="current")}return i}async function au(n,e,t,r){n._a=(l,h,d)=>async function(m,g,b,C){let F=g.view.Wu(b);F.ii&&(F=await Os(m.localStore,g.query,!1).then(({documents:ie})=>g.view.Wu(ie,F)));const H=C&&C.targetChanges.get(g.targetId),L=g.view.applyChanges(F,m.isPrimaryClient,H);return Ra(m,g.targetId,L.Xu),L.snapshot}(n,l,h,d);const i=await Os(n.localStore,e,!0),s=new tm(e,i._i),o=s.Wu(i.documents),a=Bi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline"),c=s.applyChanges(o,n.isPrimaryClient,a);Ra(n,t,c.Xu);const u=new Xb(e,t,s);return n.ia.set(e,u),n.ra.has(t)?n.ra.get(t).push(e):n.ra.set(t,[e]),c.snapshot}async function n0(n,e){const t=_(n),r=t.ia.get(e),i=t.ra.get(r.targetId);if(i.length>1)return t.ra.set(r.targetId,i.filter(s=>!Mi(s,e))),void t.ia.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await rr(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),mi(t.remoteStore,r.targetId),sr(t,r.targetId)}).catch(Cn)):(sr(t,r.targetId),await rr(t.localStore,r.targetId,!0))}async function r0(n,e,t){const r=du(n);try{const i=await function(s,o){const a=_(s),c=W.now(),u=o.reduce((h,d)=>h.add(d.key),M());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.fi.Ks(h,u).next(d=>{l=d;const m=[];for(const g of o){const b=uT(g,l.get(g.key));b!=null&&m.push(new An(g.key,b,zf(b.value.mapValue),X.exists(!0)))}return a.Bs.addMutationBatch(h,c,m,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.ha[s.currentUser.toKey()];c||(c=new z(D)),c=c.insert(o,a),s.ha[s.currentUser.toKey()]=c}(r,i.batchId,t),await yt(r,i.changes),await wr(r.remoteStore)}catch(i){const s=_r(i,"Failed to persist write");t.reject(s)}}async function nm(n,e){const t=_(n);try{const r=await gb(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.aa.get(s);o&&(k(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.na=!0:i.modifiedDocuments.size>0?k(o.na):i.removedDocuments.size>0&&(k(o.na),o.na=!1))}),await yt(t,r,e)}catch(r){await Cn(r)}}function dh(n,e,t){const r=_(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ia.forEach((s,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=_(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Pu(o)&&(c=!0)}),c&&su(a)}(r.eventManager,e),i.length&&r.sa.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function i0(n,e,t){const r=_(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.aa.get(e),s=i&&i.key;if(s){let o=new z(I.comparator);o=o.insert(s,B.newNoDocument(s,A.min()));const a=M().add(s),c=new Vi(A.min(),new Map,new U(D),o,a);await nm(r,c),r.ua=r.ua.remove(s),r.aa.delete(e),lu(r)}else await rr(r.localStore,e,!1).then(()=>sr(r,e,t)).catch(Cn)}async function s0(n,e){const t=_(n),r=e.batch.batchId;try{const i=await mb(t.localStore,e);uu(t,r,null),cu(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await yt(t,i)}catch(i){await Cn(i)}}async function o0(n,e,t){const r=_(n);try{const i=await function(s,o){const a=_(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.Bs.lookupMutationBatch(c,o).next(l=>(k(l!==null),u=l.keys(),a.Bs.removeMutationBatch(c,l))).next(()=>a.Bs.performConsistencyCheck(c)).next(()=>a.fi.Ks(c,u))})}(r.localStore,e);uu(r,e,t),cu(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await yt(r,i)}catch(i){await Cn(i)}}async function a0(n,e){const t=_(n);qt(t.remoteStore)||v("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=_(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.Bs.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const i=t.la.get(r)||[];i.push(e),t.la.set(r,i)}catch(r){const i=_r(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function cu(n,e){(n.la.get(e)||[]).forEach(t=>{t.resolve()}),n.la.delete(e)}function uu(n,e,t){const r=_(n);let i=r.ha[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.ha[r.currentUser.toKey()]=i}}function sr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.ra.get(e))n.ia.delete(r),t&&n.sa.wa(r,t);n.ra.delete(e),n.isPrimaryClient&&n.ca.vi(e).forEach(r=>{n.ca.containsKey(r)||rm(n,r)})}function rm(n,e){n.oa.delete(e.path.canonicalString());const t=n.ua.get(e);t!==null&&(mi(n.remoteStore,t),n.ua=n.ua.remove(e),n.aa.delete(t),lu(n))}function Ra(n,e,t){for(const r of t)r instanceof Zp?(n.ca.addReference(r.key,e),c0(n,r)):r instanceof em?(v("SyncEngine","Document no longer in limbo: "+r.key),n.ca.removeReference(r.key,e),n.ca.containsKey(r.key)||rm(n,r.key)):T()}function c0(n,e){const t=e.key,r=t.path.canonicalString();n.ua.get(t)||n.oa.has(r)||(v("SyncEngine","New document in limbo: "+t),n.oa.add(r),lu(n))}function lu(n){for(;n.oa.size>0&&n.ua.size<n.maxConcurrentLimboResolutions;){const e=n.oa.values().next().value;n.oa.delete(e);const t=new I(P.fromString(e)),r=n.fa.next();n.aa.set(r,new Zb(t)),n.ua=n.ua.insert(t,r),yo(n.remoteStore,new At(qe(yr(t.path)),r,2,Me.A))}}async function yt(n,e,t){const r=_(n),i=[],s=[],o=[];r.ia.isEmpty()||(r.ia.forEach((a,c)=>{o.push(r._a(c,e,t).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),i.push(u);const l=Hc.Ys(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.sa.zo(i),await async function(a,c){const u=_(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>f.forEach(c,h=>f.forEach(h.Hs,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>f.forEach(h.Js,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!kn(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.ui.get(h),m=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(m);u.ui=u.ui.insert(h,g)}}}(r.localStore,s))}async function u0(n,e){const t=_(n);if(!t.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const r=await Up(t.localStore,e);t.currentUser=e,function(i,s){i.la.forEach(o=>{o.forEach(a=>{a.reject(new y(p.CANCELLED,s))})}),i.la.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yt(t,r.di)}}function l0(n,e){const t=_(n),r=t.aa.get(e);if(r&&r.na)return M().add(r.key);{let i=M();const s=t.ra.get(e);if(!s)return i;for(const o of s){const a=t.ia.get(o);i=i.unionWith(a.view.ju)}return i}}async function h0(n,e){const t=_(n),r=await Os(t.localStore,e.query,!0),i=e.view.ta(r);return t.isPrimaryClient&&Ra(t,e.targetId,i.Xu),i}async function d0(n,e){const t=_(n);return $p(t.localStore,e).then(r=>yt(t,r))}async function f0(n,e,t,r){const i=_(n),s=await function(o,a){const c=_(o),u=_(c.Bs);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.fn(l,a).next(h=>h?c.fi.Ks(l,h):f.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await wr(i.remoteStore):t==="acknowledged"||t==="rejected"?(uu(i,e,r||null),cu(i,e),function(o,a){_(_(o).Bs)._n(a)}(i.localStore,e)):T(),await yt(i,s)):v("SyncEngine","Cannot apply mutation batch with id: "+e)}async function p0(n,e){const t=_(n);if(hu(t),du(t),e===!0&&t.da!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await fh(t,r.toArray());t.da=!0,await Da(t.remoteStore,!0);for(const s of i)yo(t.remoteStore,s)}else if(e===!1&&t.da!==!1){const r=[];let i=Promise.resolve();t.ra.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(sr(t,o),rr(t.localStore,o,!0))),mi(t.remoteStore,o)}),await i,await fh(t,r),function(s){const o=_(s);o.aa.forEach((a,c)=>{mi(o.remoteStore,c)}),o.ca.Si(),o.aa=new Map,o.ua=new z(I.comparator)}(t),t.da=!1,await Da(t.remoteStore,!1)}}async function fh(n,e,t){const r=_(n),i=[],s=[];for(const o of e){let a;const c=r.ra.get(o);if(c&&c.length!==0){a=await nr(r.localStore,qe(c[0]));for(const u of c){const l=r.ia.get(u),h=await h0(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await qp(r.localStore,o);a=await nr(r.localStore,u),await au(r,im(u),o,!1)}i.push(a)}return r.sa.zo(s),i}function im(n){return Xf(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function m0(n){const e=_(n);return _(_(e.localStore).persistence).Fs()}async function g0(n,e,t,r){const i=_(n);if(i.da)return void v("SyncEngine","Ignoring unexpected query state notification.");const s=i.ra.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await $p(i.localStore,tp(s[0])),a=Vi.createSynthesizedRemoteEventForCurrentChange(e,t==="current");await yt(i,o,a);break}case"rejected":await rr(i.localStore,e,!0),sr(i,e,r);break;default:T()}}async function y0(n,e,t){const r=hu(n);if(r.da){for(const i of e){if(r.ra.has(i)){v("SyncEngine","Adding an already active target "+i);continue}const s=await qp(r.localStore,i),o=await nr(r.localStore,s);await au(r,im(s),o.targetId,!1),yo(r.remoteStore,o)}for(const i of t)r.ra.has(i)&&await rr(r.localStore,i,!1).then(()=>{mi(r.remoteStore,i),sr(r,i)}).catch(Cn)}}function hu(n){const e=_(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=nm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=l0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=i0.bind(null,e),e.sa.zo=Hb.bind(null,e.eventManager),e.sa.wa=Yb.bind(null,e.eventManager),e}function du(n){const e=_(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=s0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=o0.bind(null,e),e}function v0(n,e,t){const r=_(n);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const m=_(h),g=ae(d.createTime);return m.persistence.runTransaction("hasNewerBundle","readonly",b=>m._s.getBundleMetadata(b,d.id)).then(b=>!!b&&b.createTime.compareTo(g)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(Xp(a));const c=new Jb(a,i.localStore,s.M);let u=await s.ma();for(;u;){const h=await c.Fu(u);h&&o._updateProgress(h),u=await s.ma()}const l=await c.complete();return await yt(i,l.Lu,void 0),await function(h,d){const m=_(h);return m.persistence.runTransaction("Save bundle","readwrite",g=>m._s.saveBundleMetadata(g,d))}(i.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Bu)}catch(a){return si("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class sm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=qi(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return Fp(this.persistence,new Lp,e.initialUser,this.M)}ya(e){return new Ab(Qc.Yi,this.M)}ga(e){return new Kp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class om extends sm{constructor(e,t,r){super(),this.Ta=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ta.initialize(this,e),await du(this.Ta.syncEngine),await wr(this.Ta.remoteStore),await this.persistence.Ts(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Ia(e){return Fp(this.persistence,new Lp,e.initialUser,this.M)}pa(e){const t=this.persistence.referenceDelegate.garbageCollector;return new ab(t,e.asyncQueue)}ya(e){const t=zc(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Pe.withCacheSize(this.cacheSizeBytes):Pe.DEFAULT;return new Wc(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Gp(),ds(),this.M,this.sharedClientState,!!this.forceOwnership)}ga(e){return new Kp}}class w0 extends om{constructor(e,t){super(e,t,!1),this.Ta=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ta.syncEngine;this.sharedClientState instanceof Qo&&(this.sharedClientState.syncEngine={$r:f0.bind(null,t),Br:g0.bind(null,t),Lr:y0.bind(null,t),Fs:m0.bind(null,t),Fr:d0.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ts(async r=>{await p0(this.Ta.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):r||this.gcScheduler.stop())})}ga(e){const t=Gp();if(!Qo.vt(t))throw new y(p.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=zc(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Qo(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class fu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=u0.bind(null,this.syncEngine),await Da(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new zb}createDatastore(e){const t=qi(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new Rb(i));var i;return function(s,o,a,c){return new Ob(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>dh(this.syncEngine,a,0),o=ch.vt()?new ch:new Cb,new Lb(t,r,i,s,o);var t,r,i,s,o}createSyncEngine(e,t){return function(r,i,s,o,a,c,u){const l=new e0(r,i,s,o,a,c);return u&&(l.da=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=_(e);v("RemoteStore","RemoteStore shutting down."),t.wu.add(5),await vr(t),t.gu.shutdown(),t.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,t){this.Ra=e,this.M=t,this.metadata=new oe,this.buffer=new Uint8Array,this.ba=new TextDecoder("utf-8"),this.Pa().then(r=>{r&&r.Mu()?this.metadata.resolve(r.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.payload)}`))},r=>this.metadata.reject(r))}close(){return this.Ra.cancel()}async getMetadata(){return this.metadata.promise}async ma(){return await this.getMetadata(),this.Pa()}async Pa(){const e=await this.Va();if(e===null)return null;const t=this.ba.decode(e),r=Number(t);isNaN(r)&&this.va(`length string (${t}) is not valid number`);const i=await this.Sa(r);return new Qb(JSON.parse(i),e.length+r)}Da(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Va(){for(;this.Da()<0&&!await this.Ca(););if(this.buffer.length===0)return null;const e=this.Da();e<0&&this.va("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Sa(e){for(;this.buffer.length<e;)await this.Ca()&&this.va("Reached the end of bundle when more is expected.");const t=this.ba.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}va(e){throw this.Ra.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ca(){const e=await this.Ra.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new y(p.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,i){const s=_(r),o=fi(s.M)+"/documents",a={documents:i.map(h=>di(s.M,h))},c=await s._o("BatchGetDocuments",o,a),u=new Map;c.forEach(h=>{const d=_T(s.M,h);u.set(d.key.toString(),d)});const l=[];return i.forEach(h=>{const d=u.get(h.toString());k(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ui(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=I.fromPath(r);this.mutations.push(new Lc(i,this.precondition(i)))}),await async function(t,r){const i=_(t),s=fi(i.M)+"/documents",o={writes:r.map(a=>pi(i.M,a))};await i.co("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw T();t=A.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new y(p.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?X.updateTime(t):X.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(A.min()))throw new y(p.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return X.updateTime(t)}return X.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.xa=r.maxAttempts,this.No=new Xc(this.asyncQueue,"transaction_retry")}run(){this.xa-=1,this.Na()}Na(){this.No.Ro(async()=>{const e=new _0(this.datastore),t=this.ka(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ma(i)}))}).catch(r=>{this.Ma(r)})})}ka(e){try{const t=this.updateFunction(e);return!xi(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Ma(e){this.xa>0&&this.Oa(e)?(this.xa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Na(),Promise.resolve()))):this.deferred.reject(e)}Oa(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||!hp(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=pe.UNAUTHENTICATED,this.clientId=qf.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{v("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(v("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new oe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=_r(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function am(n,e){n.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Up(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function cm(n,e){n.asyncQueue.verifyOperationInProgress();const t=await pu(n);v("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>uh(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>uh(e.remoteStore,s)),n.onlineComponents=e}async function pu(n){return n.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await am(n,new sm)),n.offlineComponents}async function wo(n){return n.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await cm(n,new fu)),n.onlineComponents}function um(n){return pu(n).then(e=>e.persistence)}function mu(n){return pu(n).then(e=>e.localStore)}function lm(n){return wo(n).then(e=>e.remoteStore)}function gu(n){return wo(n).then(e=>e.syncEngine)}async function or(n){const e=await wo(n),t=e.eventManager;return t.onListen=t0.bind(null,e.syncEngine),t.onUnlisten=n0.bind(null,e.syncEngine),t}function b0(n){return n.asyncQueue.enqueue(async()=>{const e=await um(n),t=await lm(n);return e.setNetworkEnabled(!0),function(r){const i=_(r);return i.wu.delete(0),$i(i)}(t)})}function S0(n){return n.asyncQueue.enqueue(async()=>{const e=await um(n),t=await lm(n);return e.setNetworkEnabled(!1),async function(r){const i=_(r);i.wu.add(0),await vr(i),i.yu.set("Offline")}(t)})}function A0(n,e){const t=new oe;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const u=_(a);return u.persistence.runTransaction("read document","readonly",l=>u.fi.Ls(l,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new y(p.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=_r(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await mu(n),e,t)),t.promise}function hm(n,e,t={}){const r=new oe;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new vo({next:h=>{s.enqueueAndForget(()=>iu(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new y(p.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new y(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new ou(yr(o.path),u,{includeMetadataChanges:!0,ku:!0});return ru(i,l)}(await or(n),n.asyncQueue,e,t,r)),r.promise}function k0(n,e){const t=new oe;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Os(r,i,!0),a=new tm(i,o._i),c=a.Wu(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=_r(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await mu(n),e,t)),t.promise}function dm(n,e,t={}){const r=new oe;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new vo({next:h=>{s.enqueueAndForget(()=>iu(i,l)),h.fromCache&&a.source==="server"?c.reject(new y(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new ou(o,u,{includeMetadataChanges:!0,ku:!0});return ru(i,l)}(await or(n),n.asyncQueue,e,t,r)),r.promise}function C0(n,e){const t=new vo(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,i){_(r).bu.add(i),i.next()}(await or(n),t)),()=>{t.Aa(),n.asyncQueue.enqueueAndForget(async()=>function(r,i){_(r).bu.delete(i)}(await or(n),t))}}function N0(n,e,t){const r=new oe;return n.asyncQueue.enqueueAndForget(async()=>{const i=await function(s){return wo(s).then(o=>o.datastore)}(n);new E0(n.asyncQueue,i,t,e,r).run()}),r.promise}function D0(n,e,t,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(c,u){return new I0(c,u)}(function(c,u){if(c instanceof Uint8Array)return ph(c,u);if(c instanceof ArrayBuffer)return ph(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,qi(e));n.asyncQueue.enqueueAndForget(async()=>{v0(await gu(n),i,r)})}function R0(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const i=_(t);return i.persistence.runTransaction("Get named query","readonly",s=>i._s.getNamedQuery(s,r))}(await mu(n),e))}const mh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(n,e,t){if(!t)throw new y(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function fm(n,e,t,r){if(e===!0&&r===!0)throw new y(p.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function gh(n){if(!I.isDocumentKey(n))throw new y(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function yh(n){if(I.isDocumentKey(n))throw new y(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Io(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":T()}function O(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Io(n);throw new y(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function pm(n,e){if(e<=0)throw new y(p.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new y(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,fm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t,r){this._authCredentials=t,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vh({}),this._settingsFrozen=!1,e instanceof ht?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new y(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ht(i.options.projectId)}(e))}get app(){if(!this._app)throw new y(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vh(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new DE;switch(t.type){case"gapi":const r=t.client;return k(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new OE(r,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new y(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=mh.get(e);t&&(v("ComponentProvider","Removing Datastore"),mh.delete(e),t.terminate())}(this),Promise.resolve()}}function P0(n,e,t,r={}){var i;const s=(n=O(n,ji))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&si("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=pe.MOCK_USER;else{o=tg(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new y(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new pe(c)}n._authCredentials=new RE(new Bf(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new et(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new q(this.firestore,e,this._key)}}class be{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new be(this.firestore,e,this._query)}}class et extends be{constructor(e,t,r){super(e,t,yr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new q(this.firestore,null,new I(e))}withConverter(e){return new et(this.firestore,e,this._path)}}function mm(n,e,...t){if(n=S(n),yu("collection","path",e),n instanceof ji){const r=P.fromString(e,...t);return yh(r),new et(n,null,r)}{if(!(n instanceof q||n instanceof et))throw new y(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(P.fromString(e,...t));return yh(r),new et(n.firestore,null,r)}}function x0(n,e){if(n=O(n,ji),yu("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new y(p.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new be(n,null,function(t){return new gt(P.emptyPath(),t)}(e))}function Us(n,e,...t){if(n=S(n),arguments.length===1&&(e=qf.R()),yu("doc","path",e),n instanceof ji){const r=P.fromString(e,...t);return gh(r),new q(n,null,new I(r))}{if(!(n instanceof q||n instanceof et))throw new y(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(P.fromString(e,...t));return gh(r),new q(n.firestore,n instanceof et?n.converter:null,new I(r))}}function gm(n,e){return n=S(n),e=S(e),(n instanceof q||n instanceof et)&&(e instanceof q||e instanceof et)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function ym(n,e){return n=S(n),e=S(e),n instanceof be&&e instanceof be&&n.firestore===e.firestore&&Mi(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new Xc(this,"async_queue_retry"),this.Qa=()=>{const t=ds();t&&v("AsyncQueue","Visibility state changed to "+t.visibilityState),this.No.Po()};const e=ds();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const t=ds();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise(()=>{});const t=new oe;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$a.push(e),this.za()))}async za(){if(this.$a.length!==0){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!kn(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(e){const t=this.Fa.then(()=>(this.qa=!0,e().catch(r=>{this.Ua=r,this.qa=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw J("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.qa=!1,r))));return this.Fa=t,t}enqueueAfterDelay(e,t,r){this.ja(),this.Ga.indexOf(e)>-1&&(t=0);const i=nu.createAndSchedule(this,e,t,r,s=>this.Ha(s));return this.La.push(i),i}ja(){this.Ua&&T()}verifyOperationInProgress(){}async Ja(){let e;do e=this.Fa,await e;while(e!==this.Fa)}Ya(e){for(const t of this.La)if(t.timerId===e)return!0;return!1}Xa(e){return this.Ja().then(()=>{this.La.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.La)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ja()})}Za(e){this.Ga.push(e)}Ha(e){const t=this.La.indexOf(e);this.La.splice(t,1)}}function Pa(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class M0{constructor(){this._progressObserver={},this._taskCompletionResolver=new oe,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=-1;class G extends ji{constructor(e,t,r){super(e,t,r),this.type="firestore",this._queue=new O0,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||vm(this),this._firestoreClient.terminate()}}function de(n){return n._firestoreClient||vm(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function vm(n){var e;const t=n._freezeSettings(),r=function(i,s,o,a){return new qE(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new T0(n._authCredentials,n._appCheckCredentials,n._queue,r)}function F0(n,e){Im(n=O(n,G));const t=de(n),r=n._freezeSettings(),i=new fu;return wm(t,i,new om(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function U0(n){Im(n=O(n,G));const e=de(n),t=n._freezeSettings(),r=new fu;return wm(e,r,new w0(r,t.cacheSizeBytes))}function wm(n,e,t){const r=new oe;return n.asyncQueue.enqueue(async()=>{try{await am(n,t),await cm(n,e),r.resolve()}catch(i){if(!function(s){return s.name==="FirebaseError"?s.code===p.FAILED_PRECONDITION||s.code===p.UNIMPLEMENTED:typeof DOMException!="undefined"&&s instanceof DOMException?s.code===22||s.code===20||s.code===11:!0}(i))throw i;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+i),r.reject(i)}}).then(()=>r.promise)}function V0(n){if(n._initialized&&!n._terminated)throw new y(p.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new oe;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!$e.vt())return Promise.resolve();const r=t+"main";await $e.delete(r)}(zc(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function B0(n){return function(e){const t=new oe;return e.asyncQueue.enqueueAndForget(async()=>a0(await gu(e),t)),t.promise}(de(n=O(n,G)))}function q0(n){return b0(de(n=O(n,G)))}function $0(n){return S0(de(n=O(n,G)))}function j0(n,e){const t=de(n=O(n,G)),r=new M0;return D0(t,n._databaseId,e,r),r}function K0(n,e){return R0(de(n=O(n,G)),e).then(t=>t?new be(n,null,t.query):null)}function Im(n){if(n._initialized||n._terminated)throw new y(p.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this._byteString=e}static fromBase64String(e){try{return new it(ne.fromBase64String(e))}catch(t){throw new y(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new it(ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=/^__.*__$/;class W0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new An(e,this.data,this.fieldMask,t,this.fieldTransforms):new Fi(e,this.data,t,this.fieldTransforms)}}class _m{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new An(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Em(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class Eo{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.M=r,this.ignoreUndefinedProperties=i,s===void 0&&this.tc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new Eo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.nc({path:r,ic:!1});return i.rc(e),i}oc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.nc({path:r,ic:!1});return i.tc(),i}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return Vs(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(e.length===0)throw this.ac("Document fields must not be empty");if(Em(this.ec)&&G0.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class z0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.M=r||qi(e)}lc(e,t,r,i=!1){return new Eo({ec:e,methodName:t,hc:r,path:te.emptyPath(),ic:!1,cc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Dn(n){const e=n._freezeSettings(),t=qi(n._databaseId);return new z0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function To(n,e,t,r,i,s={}){const o=n.lc(s.merge||s.mergeFields?2:0,e,t,i);_u("Data must be an object, but it was:",o,r);const a=Sm(r,o);let c,u;if(s.merge)c=new Xn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=xa(e,h,t);if(!o.contains(d))throw new y(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);km(l,d)||l.push(d)}c=new Xn(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new W0(new Ee(a),c,u)}class Ki extends Nn{_toFieldTransform(e){if(e.ec!==2)throw e.ec===1?e.ac(`${this._methodName}() can only appear at the top level of your update data`):e.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ki}}function Tm(n,e,t){return new Eo({ec:3,hc:e.settings.hc,methodName:n._methodName,ic:t},e.databaseId,e.M,e.ignoreUndefinedProperties)}class vu extends Nn{_toFieldTransform(e){return new Li(e.path,new er)}isEqual(e){return e instanceof vu}}class H0 extends Nn{constructor(e,t){super(e),this.fc=t}_toFieldTransform(e){const t=Tm(this,e,!0),r=this.fc.map(s=>Rn(s,t)),i=new mn(r);return new Li(e.path,i)}isEqual(e){return this===e}}class Y0 extends Nn{constructor(e,t){super(e),this.fc=t}_toFieldTransform(e){const t=Tm(this,e,!0),r=this.fc.map(s=>Rn(s,t)),i=new gn(r);return new Li(e.path,i)}isEqual(e){return this===e}}class Q0 extends Nn{constructor(e,t){super(e),this.dc=t}_toFieldTransform(e){const t=new tr(e.M,sp(e.M,this.dc));return new Li(e.path,t)}isEqual(e){return this===e}}function wu(n,e,t,r){const i=n.lc(1,e,t);_u("Data must be an object, but it was:",i,r);const s=[],o=Ee.empty();Sn(r,(c,u)=>{const l=Eu(e,c,t);u=S(u);const h=i.oc(l);if(u instanceof Ki)s.push(l);else{const d=Rn(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Xn(s);return new _m(o,a,i.fieldTransforms)}function Iu(n,e,t,r,i,s){const o=n.lc(1,e,t),a=[xa(e,r,t)],c=[i];if(s.length%2!=0)throw new y(p.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(xa(e,s[d])),c.push(s[d+1]);const u=[],l=Ee.empty();for(let d=a.length-1;d>=0;--d)if(!km(u,a[d])){const m=a[d];let g=c[d];g=S(g);const b=o.oc(m);if(g instanceof Ki)u.push(m);else{const C=Rn(g,b);C!=null&&(u.push(m),l.set(m,C))}}const h=new Xn(u);return new _m(l,h,o.fieldTransforms)}function bm(n,e,t,r=!1){return Rn(t,n.lc(r?4:3,e))}function Rn(n,e){if(Am(n=S(n)))return _u("Unsupported field value:",e,n),Sm(n,e);if(n instanceof Nn)return function(t,r){if(!Em(r.ec))throw r.ac(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ac(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ic&&e.ec!==4)throw e.ac("Nested arrays are not supported");return function(t,r){const i=[];let s=0;for(const o of t){let a=Rn(o,r.uc(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(n,e)}return function(t,r){if((t=S(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return sp(r.M,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=W.fromDate(t);return{timestampValue:hi(r.M,i)}}if(t instanceof W){const i=new W(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:hi(r.M,i)}}if(t instanceof _o)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof it)return{bytesValue:mp(r.M,t._byteString)};if(t instanceof q){const i=r.databaseId,s=t.firestore._databaseId;if(!s.isEqual(i))throw r.ac(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fc(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.ac(`Unsupported field value: ${Io(t)}`)}(n,e)}function Sm(n,e){const t={};return jf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sn(n,(r,i)=>{const s=Rn(i,e.sc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Am(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof W||n instanceof _o||n instanceof it||n instanceof q||n instanceof Nn)}function _u(n,e,t){if(!Am(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Io(t);throw r==="an object"?e.ac(n+" a custom object"):e.ac(n+" "+r)}}function xa(n,e,t){if((e=S(e))instanceof Mt)return e._internalPath;if(typeof e=="string")return Eu(n,e);throw Vs("Field path arguments must be of type string or ",n,!1,void 0,t)}const J0=new RegExp("[~\\*/\\[\\]]");function Eu(n,e,t){if(e.search(J0)>=0)throw Vs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Mt(...e.split("."))._internalPath}catch{throw Vs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Vs(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new y(p.INVALID_ARGUMENT,a+n+c)}function km(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new q(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new X0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(bo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class X0 extends gi{data(){return super.data()}}function bo(n,e){return typeof e=="string"?Eu(n,e):e instanceof Mt?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dt extends gi{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Gr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(bo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Gr extends dt{data(e={}){return super.data(e)}}class Lt{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new en(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Gr(this._firestore,this._userDataWriter,r.key,r,new en(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new y(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Gr(r._firestore,r._userDataWriter,o.doc.key,o.doc,new en(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Gr(r._firestore,r._userDataWriter,o.doc.key,o.doc,new en(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:Z0(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Z0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}function Cm(n,e){return n instanceof dt&&e instanceof dt?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Lt&&e instanceof Lt&&n._firestore===e._firestore&&ym(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gi{}function It(n,...e){for(const t of e)n=t._apply(n);return n}class eS extends Gi{constructor(e,t,r){super(),this._c=e,this.wc=t,this.mc=r,this.type="where"}_apply(e){const t=Dn(e.firestore),r=function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new y(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Ih(l,u);const m=[];for(const g of l)m.push(wh(a,i,g));h={arrayValue:{values:m}}}else h=wh(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Ih(l,u),h=bm(o,s,l,u==="in"||u==="not-in");const d=ge.create(c,u,h);return function(m,g){if(g.S()){const C=xc(m);if(C!==null&&!C.isEqual(g.field))throw new y(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${C.toString()}' and '${g.field.toString()}'`);const F=Pc(m);F!==null&&Om(m,g.field,F)}const b=function(C,F){for(const H of C.filters)if(F.indexOf(H.op)>=0)return H.op;return null}(m,function(C){switch(C){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(b!==null)throw b===g.op?new y(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new y(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${b.toString()}' filters.`)}(i,d),d}(e._query,"where",t,e.firestore._databaseId,this._c,this.wc,this.mc);return new be(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new gt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function tS(n,e,t){const r=e,i=bo("where",n);return new eS(i,r,t)}class nS extends Gi{constructor(e,t){super(),this._c=e,this.gc=t,this.type="orderBy"}_apply(e){const t=function(r,i,s){if(r.startAt!==null)throw new y(p.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new y(p.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Wn(i,s);return function(a,c){if(Pc(a)===null){const u=xc(a);u!==null&&Om(a,u,c.field)}}(r,o),o}(e._query,this._c,this.gc);return new be(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new gt(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function rS(n,e="asc"){const t=e,r=bo("orderBy",n);return new nS(r,t)}class Dm extends Gi{constructor(e,t,r){super(),this.type=e,this.yc=t,this.Ic=r}_apply(e){return new be(e.firestore,e.converter,Zf(e._query,this.yc,this.Ic))}}function iS(n){return pm("limit",n),new Dm("limit",n,"F")}function sS(n){return pm("limitToLast",n),new Dm("limitToLast",n,"L")}class Rm extends Gi{constructor(e,t,r){super(),this.type=e,this.Tc=t,this.Ec=r}_apply(e){const t=xm(e,this.type,this.Tc,this.Ec);return new be(e.firestore,e.converter,function(r,i){return new gt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,t))}}function oS(...n){return new Rm("startAt",n,!0)}function aS(...n){return new Rm("startAfter",n,!1)}class Pm extends Gi{constructor(e,t,r){super(),this.type=e,this.Tc=t,this.Ec=r}_apply(e){const t=xm(e,this.type,this.Tc,this.Ec);return new be(e.firestore,e.converter,function(r,i){return new gt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,t))}}function cS(...n){return new Pm("endBefore",n,!1)}function uS(...n){return new Pm("endAt",n,!0)}function xm(n,e,t,r){if(t[0]=S(t[0]),t[0]instanceof gi)return function(i,s,o,a,c){if(!a)throw new y(p.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Zn(i))if(l.field.isKeyField())u.push(fn(s,a.key));else{const h=a.data.field(l.field);if(Rc(h))throw new y(p.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new y(p.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new xt(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Dn(n.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new y(p.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let m=0;m<u.length;m++){const g=u[m];if(h[m].field.isKeyField()){if(typeof g!="string")throw new y(p.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!Oc(s)&&g.indexOf("/")!==-1)throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const b=s.path.child(P.fromString(g));if(!I.isDocumentKey(b))throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const C=new I(b);d.push(fn(o,C))}else{const b=bm(a,c,g);d.push(b)}}return new xt(d,l)}(n._query,n.firestore._databaseId,i,e,t,r)}}function wh(n,e,t){if(typeof(t=S(t))=="string"){if(t==="")throw new y(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Oc(e)&&t.indexOf("/")!==-1)throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(P.fromString(t));if(!I.isDocumentKey(r))throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fn(n,new I(r))}if(t instanceof q)return fn(n,t._key);throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Io(t)}.`)}function Ih(n,e){if(!Array.isArray(n)||n.length===0)throw new y(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new y(p.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Om(n,e,t){if(!t.isEqual(e))throw new y(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{convertValue(e,t="none"){switch(dn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return K(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(hn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw T()}}convertObject(e,t){const r={};return Sn(e.fields,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new _o(K(e.latitude),K(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Kf(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ai(e));default:return null}}convertTimestamp(e){const t=Rt(e);return new W(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=P.fromString(e);k(bp(r));const i=new ht(r.get(1),r.get(3)),s=new I(r.popFirst(5));return i.isEqual(t)||J(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class hS extends Tu{constructor(e){super(),this.firestore=e}convertBytes(e){return new it(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new q(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Dn(e)}set(e,t,r){this._verifyNotCommitted();const i=Et(e,this._firestore),s=So(i.converter,t,r),o=To(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,X.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Et(e,this._firestore);let o;return o=typeof(t=S(t))=="string"||t instanceof Mt?Iu(this._dataReader,"WriteBatch.update",s._key,t,r,i):wu(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,X.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Et(e,this._firestore);return this._mutations=this._mutations.concat(new Ui(t._key,X.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new y(p.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Et(n,e){if((n=S(n)).firestore!==e)throw new y(p.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(n){n=O(n,q);const e=O(n.firestore,G);return hm(de(e),n._key).then(t=>bu(e,n,t))}class Pn extends Tu{constructor(e){super(),this.firestore=e}convertBytes(e){return new it(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new q(this.firestore,null,t)}}function pS(n){n=O(n,q);const e=O(n.firestore,G),t=de(e),r=new Pn(e);return A0(t,n._key).then(i=>new dt(e,r,n._key,i,new en(i!==null&&i.hasLocalMutations,!0),n.converter))}function mS(n){n=O(n,q);const e=O(n.firestore,G);return hm(de(e),n._key,{source:"server"}).then(t=>bu(e,n,t))}function gS(n){n=O(n,be);const e=O(n.firestore,G),t=de(e),r=new Pn(e);return Nm(n._query),dm(t,n._query).then(i=>new Lt(e,r,n,i))}function yS(n){n=O(n,be);const e=O(n.firestore,G),t=de(e),r=new Pn(e);return k0(t,n._query).then(i=>new Lt(e,r,n,i))}function vS(n){n=O(n,be);const e=O(n.firestore,G),t=de(e),r=new Pn(e);return dm(t,n._query,{source:"server"}).then(i=>new Lt(e,r,n,i))}function _h(n,e,t){n=O(n,q);const r=O(n.firestore,G),i=So(n.converter,e,t);return Wi(r,[To(Dn(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,X.none())])}function Eh(n,e,t,...r){n=O(n,q);const i=O(n.firestore,G),s=Dn(i);let o;return o=typeof(e=S(e))=="string"||e instanceof Mt?Iu(s,"updateDoc",n._key,e,t,r):wu(s,"updateDoc",n._key,e),Wi(i,[o.toMutation(n._key,X.exists(!0))])}function wS(n){return Wi(O(n.firestore,G),[new Ui(n._key,X.none())])}function IS(n,e){const t=O(n.firestore,G),r=Us(n),i=So(n.converter,e);return Wi(t,[To(Dn(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,X.exists(!1))]).then(()=>r)}function Mm(n,...e){var t,r,i;n=S(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Pa(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Pa(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof q)u=O(n.firestore,G),l=yr(n._key.path),c={next:h=>{e[o]&&e[o](bu(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=O(n,be);u=O(h.firestore,G),l=h._query;const d=new Pn(u);c={next:m=>{e[o]&&e[o](new Lt(u,d,h,m))},error:e[o+1],complete:e[o+2]},Nm(n._query)}return function(h,d,m,g){const b=new vo(g),C=new ou(d,b,m);return h.asyncQueue.enqueueAndForget(async()=>ru(await or(h),C)),()=>{b.Aa(),h.asyncQueue.enqueueAndForget(async()=>iu(await or(h),C))}}(de(u),l,a,c)}function _S(n,e){return C0(de(n=O(n,G)),Pa(e)?e:{next:e})}function Wi(n,e){return function(t,r){const i=new oe;return t.asyncQueue.enqueueAndForget(async()=>r0(await gu(t),r,i)),i.promise}(de(n),e)}function bu(n,e,t){const r=t.docs.get(e._key),i=new Pn(n);return new dt(n,i,e._key,r,new en(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Dn(e)}get(e){const t=Et(e,this._firestore),r=new hS(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return T();const s=i[0];if(s.isFoundDocument())return new gi(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new gi(this._firestore,r,t._key,null,t.converter);throw T()})}set(e,t,r){const i=Et(e,this._firestore),s=So(i.converter,t,r),o=To(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=Et(e,this._firestore);let o;return o=typeof(t=S(t))=="string"||t instanceof Mt?Iu(this._dataReader,"Transaction.update",s._key,t,r,i):wu(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=Et(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Et(e,this._firestore),r=new Pn(this._firestore);return super.get(e).then(i=>new dt(this._firestore,r,t._key,i._document,new en(!1,!1),t.converter))}}function TS(n,e,t){n=O(n,G);const r=Object.assign(Object.assign({},lS),t);return function(i){if(i.maxAttempts<1)throw new y(p.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),N0(de(n),i=>e(new ES(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(){return new Ki("deleteField")}function SS(){return new vu("serverTimestamp")}function AS(...n){return new H0("arrayUnion",n)}function kS(...n){return new Y0("arrayRemove",n)}function CS(n){return new Q0("increment",n)}(function(n,e=!0){(function(t){gr=t})(En),Ct(new tt("firestore",(t,{options:r})=>{const i=t.getProvider("app").getImmediate(),s=new G(i,new PE(t.getProvider("auth-internal")),new LE(t.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),Xe(Il,"3.4.9",n),Xe(Il,"3.4.9","esm2017")})();const NS="@firebase/firestore-compat",DS="0.1.18";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new y("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(){if(typeof Uint8Array=="undefined")throw new y("unimplemented","Uint8Arrays are not available in this environment.")}function bh(){if(!VE())throw new y("unimplemented","Blobs are unavailable in Firestore in this environment.")}class yi{constructor(e){this._delegate=e}static fromBase64String(e){return bh(),new yi(it.fromBase64String(e))}static fromUint8Array(e){return Th(),new yi(it.fromUint8Array(e))}toBase64(){return bh(),this._delegate.toBase64()}toUint8Array(){return Th(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n){return RS(n,["next","error","complete"])}function RS(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{enableIndexedDbPersistence(e,t){return F0(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return U0(e._delegate)}clearIndexedDbPersistence(e){return V0(e._delegate)}}class Lm{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ht||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&si("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){P0(this._delegate,e,t,r)}enableNetwork(){return q0(this._delegate)}disableNetwork(){return $0(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,fm("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return B0(this._delegate)}onSnapshotsInSync(e){return _S(this._delegate,e)}get app(){if(!this._appCompat)throw new y("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ar(this,mm(this._delegate,e))}catch(t){throw Ae(t,"collection()","Firestore.collection()")}}doc(e){try{return new Ve(this,Us(this._delegate,e))}catch(t){throw Ae(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Se(this,x0(this._delegate,e))}catch(t){throw Ae(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return TS(this._delegate,t=>e(new Fm(this,t)))}batch(){return de(this._delegate),new Um(new dS(this._delegate,e=>Wi(this._delegate,e)))}loadBundle(e){return j0(this._delegate,e)}namedQuery(e){return K0(this._delegate,e).then(t=>t?new Se(this,t):null)}}class Ao extends Tu{constructor(e){super(),this.firestore=e}convertBytes(e){return new yi(new it(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Ve.forKey(t,this.firestore,null)}}function xS(n){CE(n)}class Fm{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Ao(e)}get(e){const t=tn(e);return this._delegate.get(t).then(r=>new vi(this._firestore,new dt(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=tn(e);return r?(Su("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=tn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=tn(e);return this._delegate.delete(t),this}}class Um{constructor(e){this._delegate=e}set(e,t,r){const i=tn(e);return r?(Su("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=tn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=tn(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class In{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Gr(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new wi(this._firestore,r),t!=null?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=In.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new In(e,new Ao(e),t),i.set(t,s)),s}}In.INSTANCES=new WeakMap;class Ve{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Ao(e)}static forPath(e,t,r){if(e.length%2!==0)throw new y("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Ve(t,new q(t._delegate,r,new I(e)))}static forKey(e,t,r){return new Ve(t,new q(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new ar(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ar(this.firestore,mm(this._delegate,e))}catch(t){throw Ae(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=S(e),e instanceof q?gm(this._delegate,e):!1}set(e,t){t=Su("DocumentReference.set",t);try{return t?_h(this._delegate,e,t):_h(this._delegate,e)}catch(r){throw Ae(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?Eh(this._delegate,e):Eh(this._delegate,e,t,...r)}catch(i){throw Ae(i,"updateDoc()","DocumentReference.update()")}}delete(){return wS(this._delegate)}onSnapshot(...e){const t=Vm(e),r=Bm(e,i=>new vi(this.firestore,new dt(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Mm(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=pS(this._delegate):(e==null?void 0:e.source)==="server"?t=mS(this._delegate):t=fS(this._delegate),t.then(r=>new vi(this.firestore,new dt(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Ve(this.firestore,e?this._delegate.withConverter(In.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ae(n,e,t){return n.message=n.message.replace(e,t),n}function Vm(n){for(const e of n)if(typeof e=="object"&&!Oa(e))return e;return{}}function Bm(n,e){var t,r;let i;return Oa(n[0])?i=n[0]:Oa(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class vi{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Ve(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Cm(this._delegate,e._delegate)}}class wi extends vi{data(e){const t=this._delegate.data(e);return NE(t!==void 0),t}}class Se{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Ao(e)}where(e,t,r){try{return new Se(this.firestore,It(this._delegate,tS(e,t,r)))}catch(i){throw Ae(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Se(this.firestore,It(this._delegate,rS(e,t)))}catch(r){throw Ae(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Se(this.firestore,It(this._delegate,iS(e)))}catch(t){throw Ae(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Se(this.firestore,It(this._delegate,sS(e)))}catch(t){throw Ae(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Se(this.firestore,It(this._delegate,oS(...e)))}catch(t){throw Ae(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Se(this.firestore,It(this._delegate,aS(...e)))}catch(t){throw Ae(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Se(this.firestore,It(this._delegate,cS(...e)))}catch(t){throw Ae(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Se(this.firestore,It(this._delegate,uS(...e)))}catch(t){throw Ae(t,"endAt()","Query.endAt()")}}isEqual(e){return ym(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=yS(this._delegate):(e==null?void 0:e.source)==="server"?t=vS(this._delegate):t=gS(this._delegate),t.then(r=>new Ma(this.firestore,new Lt(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=Vm(e),r=Bm(e,i=>new Ma(this.firestore,new Lt(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Mm(this._delegate,t,r)}withConverter(e){return new Se(this.firestore,e?this._delegate.withConverter(In.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class OS{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new wi(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Ma{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Se(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new wi(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new OS(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new wi(this._firestore,r))})}isEqual(e){return Cm(this._delegate,e._delegate)}}class ar extends Se{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Ve(this.firestore,e):null}doc(e){try{return e===void 0?new Ve(this.firestore,Us(this._delegate)):new Ve(this.firestore,Us(this._delegate,e))}catch(t){throw Ae(t,"doc()","CollectionReference.doc()")}}add(e){return IS(this._delegate,e).then(t=>new Ve(this.firestore,t))}isEqual(e){return gm(this._delegate,e._delegate)}withConverter(e){return new ar(this.firestore,e?this._delegate.withConverter(In.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function tn(n){return O(n,q)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(...e){this._delegate=new Mt(...e)}static documentId(){return new Au(te.keyField().canonicalString())}isEqual(e){return e=S(e),e instanceof Mt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this._delegate=e}static serverTimestamp(){const e=SS();return e._methodName="FieldValue.serverTimestamp",new Qt(e)}static delete(){const e=bS();return e._methodName="FieldValue.delete",new Qt(e)}static arrayUnion(...e){const t=AS(...e);return t._methodName="FieldValue.arrayUnion",new Qt(t)}static arrayRemove(...e){const t=kS(...e);return t._methodName="FieldValue.arrayRemove",new Qt(t)}static increment(e){const t=CS(e);return t._methodName="FieldValue.increment",new Qt(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS={Firestore:Lm,GeoPoint:_o,Timestamp:W,Blob:yi,Transaction:Fm,WriteBatch:Um,DocumentReference:Ve,DocumentSnapshot:vi,Query:Se,QueryDocumentSnapshot:wi,QuerySnapshot:Ma,CollectionReference:ar,FieldPath:Au,FieldValue:Qt,setLogLevel:xS,CACHE_SIZE_UNLIMITED:L0};function LS(n,e){n.INTERNAL.registerComponent(new tt("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},MS)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(n){LS(n,(e,t)=>new Lm(e,t,new PS)),n.registerVersion(NS,DS)}FS(ft);const US={apiKey:"AIzaSyCHrLIgAYBE7XRslJqJJvR4JZ6pYpdEWTk",authDomain:"fypserver-160d2.firebaseapp.com",projectId:"fypserver-160d2",storageBucket:"fypserver-160d2.appspot.com",messagingSenderId:"1072551566605",appId:"1:1072551566605:web:73987b85ba0fbdbdbfe444",measurementId:"G-BLVG0TQYNK"};ft.initializeApp(US);const qm=new ft.auth.GoogleAuthProvider;qm.setCustomParameters({prompt:"select_account"});const $m=ft.auth(),Er=ft.firestore();async function qS(){$m.signInWithPopup(qm).catch(function(n){console.error(n)})}const $S=()=>$m.signOut().catch(function(n){console.error(n)});async function jS(n,e,t,r,i){return new Promise((s,o)=>{Er.collection(n).doc(e).collection(t).doc(r).set(i).then(()=>{s(!0)}).catch(a=>{console.error("Error adding document: ",a),s(!1)})})}async function KS(n,e,t,r){return new Promise((i,s)=>{Er.collection(n).doc(e).collection(t).doc().set(r).then(()=>{i(!0)}).catch(o=>{console.error("Error adding document: ",o),i(!1)})})}const jm=5;async function GS(n,e,t){return new Promise(async(r,i)=>{try{let o=(await Er.collection(n).doc(e).collection(t).orderBy("createAt","desc").limit(jm).get()).docs.map(a=>a.data());r({status:!0,data:o})}catch(s){console.log(s),r({status:!1})}})}async function WS(n,e,t,r){return new Promise(async(i,s)=>{try{let a=(await Er.collection(n).doc(e).collection(t).orderBy("createAt","desc").startAfter(r).limit(jm).get()).docs.map(c=>c.data());i({status:!0,data:a})}catch(o){console.log(o),i({status:!1})}})}async function zS(n){return new Promise(async(e,t)=>{try{let r=await Er.collection("users").doc(n).collection("userSetting").doc("currentConfig").get(),i=r.exists?r.data():[];e({status:!0,data:i})}catch(r){console.log(r),e({status:!1})}})}async function HS(n,e){return new Promise(async(t,r)=>{try{await Er.collection("users").doc(n).collection("userSetting").doc("currentConfig").update(e),t({status:!0})}catch(i){console.log(i),t({status:!1})}})}export{KS as a,WS as b,$S as c,zS as d,jS as e,ft as f,GS as g,qS as s,HS as u};
