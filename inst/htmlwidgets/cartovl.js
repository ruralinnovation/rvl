!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";var o=function(e,t){const n=t.longitude||"lng",o=t.latitude||"lat",a={type:"FeatureCollection",features:[]},c=Object.keys(e)[0],i=Object.keys(e).filter(e=>e!=n&&e!=o),u=e[c].length;for(let t=0;t<u;t++){let c={type:"Feature",geometry:{type:"Point",coordinates:[e[n][t],e[o][t]]},properties:r(i,e,t)};a.features.push(c)}return a};const r=function(e,t,n){const o={};return e.forEach(e=>o[e]=t[e][n]),o};var a=n(1);n.d(t,"d",function(){return c}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return l});function c(e,t){let n=this;t.df&&(e=o(e,t)),n.on("load",()=>n.addSource(t.id,{type:"geojson",data:e}))}function i(e){let t=this;t.on("load",()=>t.addLayer(e))}function u(e,t){let n=this;n.on("load",()=>{t.df?e=o(e,t):"string"==typeof e&&(e=n.getSource(e)._data),s(n,e,t).addTo(n)})}function l(e,t){let n=this;fetch(e).then(e=>e.json()).then(e=>{s(n,e,t).addTo(n)})}const s=function(e,t,n){const o=new carto.source.GeoJSON(t),r=new carto.Viz(n.vizDef.join("\n")),c=new carto.Layer(n.id,o,r);if(n.popup){new carto.Interactivity(c).on("featureClick",t=>{const n=t.features[0];if(!n)return;const o=n.variables.popup?[n.variables.popup.value]:function(e){return Object.keys(e.variables).map(t=>`<h1>${t}</h1><p>${e.variables[t].value}</p>`)}(n);console.log(o);const r=t.coordinates;(new mapboxgl.Popup).setLngLat([r.lng,r.lat]).setHTML(o.join("\n")).addTo(e)})}return n.legend&&c.on("loaded",()=>{const t=c.viz.color.getLegendData().data.map(e=>{const t=e.value;return`<li><span class="point-mark" style="background-color:${`rgba(${t.r}, ${t.g}, ${t.b}, ${t.a})`};border: 1px solid black;"></span> <span>${e.key instanceof Array?`${e.key[0]} - ${e.key[1]}`:e.key}</span></li>`}),o=(n.legend.title?`<h1>${n.legend.title}</h1>`:"")+`<ul>${t.join("\n")}</ul>`;a.a.call(e,o)}),c}},function(e,t,n){"use strict";t.a=function(e){let t=this.getContainer(),n=document.createElement("div");n.className="map-overlay",n.innerHTML=e,t.appendChild(n)}},function(e,t,n){"use strict";(function(e){var o=n(3),r=n(0),a=n(1);const c=e._cartoVLWidget={},i=c.methods={addLayer:r.b,addExternalLayer:r.a,addMapboxSource:r.d,addMapboxLayer:r.c,addBox:a.a};i.addControl=function(e,t,n){this.addControl(new mapboxgl[e](t),n||"top-left")},t.a=function(e,t,n){const o={};var r=null;return o.renderValue=function(t){console.log(t),u(),mapboxgl.accessToken=t.mapProperties.mapboxAccessToken,(r=c.map=l(e.id,t.mapProperties)).on("idle",()=>console.log("ready")),t.calls.forEach(e=>i[e.name].apply(r,e.args))},o.resize=function(e,t){},o};const u=function(){console.log("carto-vl "+carto.version),console.log("mapbox-gl "+mapboxgl.version)},l=function(e,t){return new mapboxgl.Map({container:e,style:t.style||Object(o.a)("black"),center:t.center||[0,30],zoom:t.zoom||2})}}).call(this,n(5))},function(e,t,n){"use strict";t.a=function(e){return{version:8,sources:{},layers:[{id:"background",type:"background",paint:{"background-color":e}}]}}},function(e,t,n){"use strict";n.r(t);var o=n(2);HTMLWidgets.widget({name:"cartovl",type:"output",factory:o.a})},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);