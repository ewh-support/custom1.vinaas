(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{164:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create_anim=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(66)),o=f(n(89)),i=f(n(165)),a=f(n(166)),u=f(n(167)),s=f(n(168)),l=n(169),c=f(l),d=n(4);function f(e){return e&&e.__esModule?e:{default:e}}t.create_anim=function(e){var t=e.width,n=e.height,f=e.contents;!1===o.default.isWebGLAvailable()&&(console.error("WebGL not available"),document.body.appendChild(o.default.getWebGLErrorMessage()));var h=function(e){var t=e.width,n=e.height,o=function(){return Math.min(800,t())},i=function(){return Math.min(100,n())},a=new r.OrthographicCamera(0,o(),0,-i(),0,2e3),u=new r.Scene;a.position.z=10;var l=(0,s.default)({scene:u,height:i,width:o}),c=new r.WebGLRenderer({alpha:!0,antialias:!0});return c.setPixelRatio(window.devicePixelRatio),c.setSize(o(),i()),c.setClearColor("#ffffff",0),c.localClippingEnabled=!0,c.domElement.style.position="absolute",c.domElement.style.top="0px",c.domElement.style.width="100%",c.domElement.style.height="100%",a.lookAt(u.position),{renderer:c,render:function(){return c.render(u,a)},grid:l,update_resize:function(e){var t=e.width,n=e.height;c.setSize(t(),n()),c.domElement.style.width="100%",c.domElement.style.height="100%",c.domElement.style.position="absolute",c.domElement.style.top="0px",a.right=t(),a.bottom=-n(),a.updateProjectionMatrix(),l.update_resize({width:t,height:n})}}}({width:t,height:n,designed_width:1280,designed_height:636,contents:f}),p=function(e){var t=e.width,n=e.contents,o=e.designed_width,a=function(e){return 175*e/o},u=function(e){return 160*e/o},s=function(e){return 140*e/o},d=function(e){return(o-320)*e/o},f=new r.OrthographicCamera(0,d(t()),0,-a(t()),0,2e3),h=new r.Scene;f.position.z=10;var p=(0,c.default)({scene:h,width:t,height:a,designed_width:o}),m=(0,i.default)({scene:h,width:t,designed_width:o,subtitle:{x:0,y:14,font_size:20},title:{x:0,y:138,font_size:150},contents:n});m.load();var g=new r.WebGLRenderer({alpha:!0,antialias:!0});return g.setPixelRatio(window.devicePixelRatio),g.setSize(t(),a(t())),g.setClearColor("#ffffff",0),g.localClippingEnabled=!0,g.domElement.style.position="absolute",g.domElement.name="texts",g.domElement.style.top=s(t())+"px",g.domElement.style.left=u(t())+"px",g.domElement.style.width=d(t())+"px",f.lookAt(h.position),{renderer:g,render:function(){return g.render(h,f)},texts:m,dot:p,dot_position:function(e){return(0,l.dot_position)(m.get_char_width)(e)},update_resize:function(e){var t=e.width;g.setSize(t(),a(t())),g.domElement.style.position="absolute",g.domElement.style.top=s(t())+"px",g.domElement.style.left=u(t())+"px",g.domElement.style.width=d(t())+"px",f.right=d(t()),f.bottom=-a(),f.updateProjectionMatrix()}}}({width:t,height:n,contents:f,designed_width:1280}),m=(0,u.default)({width:t,height:n}),g=(0,a.default)({logo_width_scale:.25});g.load();var v={text:!0,stars:!0,background:!0,logo:!0},y=(0,d.Anime)(60);!function e(){y.do(function(){v.stars&&(v.stars=m.render(),v.stars=!1),v.background&&(h.render(),v.background=!1),v.text&&(p.render(),v.text=!1),v.logo&&(g.render(),v.logo=!1)}),requestAnimationFrame(e)}();var w={};return{append_background:function(e){return e.appendChild(h.renderer.domElement)},append_canvas2:function(e){return e.appendChild(m.renderer.domElement)},append_canvas3:function(e){return e.appendChild(p.renderer.domElement)},append_logo:function(e){return e.appendChild(g.renderer.domElement)},texts:p.texts,logo:g,dot:p.dot,grid:h.grid,dot_position:p.dot_position,stars:m,render_text:function(){return v.text=!0},render_background:function(){return v.background=!0},render_logo:function(){return v.logo=!0},render_stars:function(){return v.stars=!0},update_resize:function(e){var t=e.width,n=e.height;w.h!==n()&&(h.update_resize({width:t,height:n}),m.update_resize({width:t,height:n}),g.update_resize(),w.h=n())}}}},165:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(90),i=(r=o)&&r.__esModule?r:{default:r},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(66));t.default=function(e){var t=e.width,n=e.scene,r=e.subtitle,o=e.title,u=e.designed_width,s=e.contents;s=s||{};var l=function(e,n,r,o,s,l,c,d){return function(e){var t=e.text,n=e.x,r=e.y,o=e.dx,u=e.dy,s=e.init_my,l=e.size,c=e.size_scale,d=e.letter_spacing,f=e.font_type,h=e.color;o=null!=o?o:1,u=null!=u?u:1,c=c||.72519,d=d||.931;var p=[new a.Plane(new a.Vector3(0,1,0),-(r-.24*l)),new a.Plane(new a.Vector3(0,-1,0),r+.73*l)],m=new a.MeshBasicMaterial({color:h||2960685,side:a.DoubleSide,depthWrite:!1,clippingPlanes:p,transparent:!0}),g=null;return{create_object:function(e){var o=(0,i.default)(e.data).create({text:t,size:c*l,letter_spacing:d}),f=new a.ShapeBufferGeometry(o.shapes);return f.translate(n,r,0),(g=new a.Mesh(f,m)).position.y=u*(s||0),g},translate:function(e){var t=e.mx,n=e.my;g&&(null!=t&&(g.position.x=(o||1)*t),null!=n&&n>-1&&n<1?(g.visible=!0,g.position.y=(u||1)*n):g.visible=!1)},font_type:function(){return f},get_all_char_widths:function(e){for(var t=" ,._-?!@".split(""),n="a".charCodeAt(0);n<="z".charCodeAt(0);n++)t.push(String.fromCharCode(n));for(var r="A".charCodeAt(0);r<="Z".charCodeAt(0);r++)t.push(String.fromCharCode(r));for(var o="0".charCodeAt(0);o<="9".charCodeAt(0);o++)t.push(String.fromCharCode(o));var i=d*l*c/e.data.resolution;return t.reduce(function(t,n){return t[n]=e.data.glyphs[n].ha*i,t},{})}}}({text:e,x:n*(d=null!=d?d:t()/u),init_my:-1,y:r*d,dy:o*d,size:s*d,font_type:l,color:c})},c=function(e,t){return l(e,r.x,-r.y,1.15*r.font_size,r.font_size,"subtitle",8421504,t)},d=function(e,t){return l(e,o.x,-o.y,1.15*o.font_size,o.font_size,"title",2105376,t)},f={scroll:c("< Somewhere far away in the world wide web ... />"),hello_:c("hello"!=s.to?"hello":""),question_:c("you're thinking, templates are too"),question2_:c("but you are so"),welcome:c("Welcome"),studio_:c("We are"),projects_:c("Our featured"),shots_:c("Our passionate"),message_:c("We are waiting for"),try_:c("simply put,"),thank_:c("Thank"),to_:c("a"),m1:d(" passionate"),m2:d(" ambitious"),m3:d(" bold"),who:d(""+s.to.replace("_"," ")),question:d(""+s.notbe.replace("_"," ")),question2:d(""+s.tobe.replace("_"," ")),hello:d("hello"),to:d("to"),studio:d("M1 Studio"),try:d(" we make web"),projects:d("projects"),shots:d("concepts"),message:d("you"),you:d("you")},h={};return{load:function(){(new a.FontLoader).load("https://storage.googleapis.com/m1-public/fonts/SofiaPro/Sofia%20Pro_Regular.json.gz",function(e){Object.keys(f).forEach(function(t){var r=f[t];"subtitle"===r.font_type()&&n.add(r.create_object(e))}),(new a.FontLoader).load("https://storage.googleapis.com/m1-public/fonts/SofiaPro/Sofia%20Pro%20Bold_Bold.json.gz",function(e){Object.keys(f).forEach(function(t){var r=f[t];"title"===r.font_type()&&n.add(r.create_object(e))});var t=d("",1);h=t.get_all_char_widths(e)})})},items:f,get_char_width:function(e){return h[e]||0}}}},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(101),i=(r=o)&&r.__esModule?r:{default:r},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(66));var u=function(){return window.innerWidth};t.default=function(e){var t=e.logo_width_scale,n=new a.OrthographicCamera(0,0,0,0,0,2300),r=new a.Scene,o=new a.WebGLRenderer({alpha:!0,antialias:!0});n.position.z=10,o.setPixelRatio(window.devicePixelRatio),o.setClearColor("#ffffff",0);var s=function(){o.render(r,n)},l=function(e){var t=e.w,i=e.h;o.setSize(t,i),n.left=0,n.right=t,n.bottom=0,n.top=i,n.updateProjectionMatrix(),n.lookAt(r.position),o.domElement.name="background",o.domElement.style.position="absolute",o.domElement.style.top="calc(50vh - "+i/2+"px)",o.domElement.style.left="calc(50vw - "+t/2+"px)",o.domElement.style.width=t+"px",o.domElement.style.height=i+"px",s()};l({w:0,h:0});var c={object:null,width:200,height:200},d={height:0},f=function(){var e=t*u(),n=e/c.width;d.height=e*c.height/c.width,c.object.scale.x=n,c.object.scale.y=n,l({w:e,h:d.height})};return{render:s,load:function(){(new i.default).load("svgs/m1_logo14.min.svg",function(e){var n=new a.Group,o=0,i=0,s=0,l=0,d=[];e.forEach(function(e){var t=new a.MeshBasicMaterial({color:e.color,side:a.DoubleSide,depthWrite:!1});e.toShapes(!0).forEach(function(e){var r=new a.ShapeBufferGeometry(e);d.push(r),r.computeBoundingBox(),o=Math.min(o,r.boundingBox.min.x),i=Math.max(i,r.boundingBox.max.x),s=Math.min(s,r.boundingBox.min.y),l=Math.max(l,r.boundingBox.max.y);var u=new a.Mesh(r,t);n.add(u)})});var h=i-o,p=l-s,m=t*u()/h;d.forEach(function(e){e.rotateX(Math.PI).translate(0,p,0).scale(m,m,1)}),c.height=p*m,c.width=h*m,c.object=n,n.position.y=-p*m,r.add(n),f()})},translate:function(e){var t=e.my;c.object&&(c.object.position.y=d.height*t*1.15)},renderer:o,update_resize:f}}},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(66));function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var i=(0,n(95).Space)(),a=(new r.TextureLoader).load("images/star6.png"),u={};t.default=function(e){var t=e.width,n=e.height,s=new r.PerspectiveCamera(55,t()/n(),2,2e3),l=new r.Scene;l.fog=new r.Fog(16777215,0,200);var c,d,f=(c=i.get_M1(),d=i.get_Dot(),{v1:i.get_Stars(),v2:d,v3:c,v4:i.get_DarkStars()}),h=function(e){var t=e.scene,n=e.points,o=new r.PointsMaterial({size:5,sizeAttenuation:!0,map:a,alphaTest:.2,transparent:!0});o.color.setHex(16460123);var i=new r.PointsMaterial({size:3,sizeAttenuation:!0,map:a,alphaTest:.3,transparent:!0});i.color.setHex(8421504);var u=function(e,n){if(null==e)return null;var o=new r.Geometry;e.forEach(function(e){return o.vertices.push(new r.Vector3(e.x,e.y,e.z))});var i=new r.Points(o,n),a={object:i,geometry:o,material:n};return t.add(i),a};return{m1_stars:n.v1.map(function(e){return u(e,o)}),dark_stars:n.v4.map(function(e){return u(e,i)})}}({scene:l,points:f}),p=h.m1_stars,m=h.dark_stars,g=function(e){var t=e.scene,n=e.points,o=new r.LineBasicMaterial({color:8421504}),i=new r.LineBasicMaterial({color:16460123}),a=function(e,t){if(t=t||new r.LineBasicMaterial({color:8421504}),null==e)return null;var n=new r.Geometry;e.forEach(function(e){return n.vertices.push(new r.Vector3(e.x,e.y,e.z))});var o=new r.Line(n,t);return o.position.x=-50,{object:o,geometry:n,material:t}};return n.v3.forEach(function(e){e.max=e.reduce(function(e,t){return e<t.y?t.y:e},-1e3)}),n.v3.sort(function(e,t){return e.max-t.max}),{M1:n.v3.map(function(e){var n=a(e,o);return t.add(n.object),n}),dot:n.v2.map(function(e){var n=a(e,i);return t.add(n.object),n.object.position.set(70,-70,-10),n})}}({scene:l,points:f}),v=g.M1,y=g.dot,w=new r.WebGLRenderer({alpha:!0,antialias:!0});w.setPixelRatio(window.devicePixelRatio),w.setClearColor("#ffffff",0);var b=function(e){var t=e.width,n=e.height,r=Math.min(1280,t());return[r,r*n()/t()]};!function(e){var t=e.width,n=e.height;w.setSize.apply(w,o(b({width:t,height:n}))),w.domElement.style.width="100%",w.domElement.style.height="100%"}({width:t,height:n});var _=!0,x=function(){return.05*(Math.random()-.45)},M=function(){return p.forEach(function(e){e.object.rotateZ(Math.PI/1e4)}),y.forEach(function(e){e.object.rotateY(Math.PI/720)}),m.forEach(function(e){var t=e.object.position;e.object.position.set(t.x+x(),t.y+x(),t.z+x())}),w.render(l,s),_};return{renderer:w,expand:function(){},opacity:function(e){w.domElement.style.opacity=e},set_fog:function(e){l.fog.far=e},set_structure_frame:function(e){e>0&&e<1&&v.forEach(function(t,n){n<e*v.length?(t.object.visible=!0,t.material.opacity=0):(t.material.opacity=0,t.object.visible=!1)})},set_frame:function(e){if(e>=5)_=!1;else{_=!0;var t=i.get_camera_position(e),n=t.position,r=t.focus;s.position.x=n.x,s.position.y=n.y,s.position.z=n.z,s.lookAt(r.x,r.y,r.z),s.updateProjectionMatrix()}},render:M,update_resize:function(e){var t=e.width,n=e.height;u.h!==n()&&(w.setSize.apply(w,o(b({width:t,height:n}))),w.setClearColor("#ffffff"),s.aspect=t()/n(),s.updateProjectionMatrix(),M(),u.h=n())}}}},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(66));t.default=function(e){var t=e.scene,n=e.width,o=e.height,i=-1,a=o(),u=[.125,.25,.375,.5,.625,.75,.875].map(function(e){return function(e){var t=new r.Geometry;t.vertices.push(new r.Vector3(e*n(),0,-1)),t.vertices.push(new r.Vector3(e*n(),-o(),-1));var u=new r.LineBasicMaterial({color:0,opacity:.1,transparent:!0}),s=new r.Line(t,u);return s.position.y=i*a,{object:s,geometry:t,material:u,x:e}}(e)});u.forEach(function(e){return t.add(e.object)});return{update_resize:function(e){var t=e.width,n=e.height;u.forEach(function(e){e.geometry.vertices[0].x=e.x*t(),e.geometry.vertices[1].x=e.x*t(),e.geometry.vertices[0].y=0,e.geometry.vertices[1].y=-n(),e.geometry.verticesNeedUpdate=!0,a=n(),e.object.position.y=i*a})},set:function(e){return function(t){i=t;var n,r,o,s=u[e];s.object.position.y=t*a,s.material.opacity=(n=.07,r=.8,o=Math.abs(t),Math.min(r,Math.max(n,o)))}}}}},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dot_position=void 0;var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(66));t.default=function(e){var t=e.scene,n=e.width,r=e.designed_width,i=new o.CircleGeometry(32,32),a=new o.MeshBasicMaterial({color:16460123,opacity:0,transparent:!0}),u=new o.Mesh(i,a);t.add(u);return{set:function(e){var t=e.x,o=e.y,i=e.size,s=e.opacity,l=e.color,c=void 0===l?1:l,d=n()/r;u.position.x=t*d,u.position.y=-o*d,u.scale.x=(i/64||1e-4)*d,u.scale.y=(i/64||1e-4)*d,u.material.opacity=s,a.color.setHSL(346/360,.96*c,.18+(.57-.18)*c)}}};t.dot_position=function(e){return function(t){var n=t.split(" ").filter(function(e){return e}),o=r(n,4),i=o[0],a=o[1],u=o[2],s=o[3],l={opacity:u?u.toNumber():1,color:s?s.toNumber():1,y:127.5};if(l.x="studio"===i?421.5:"projects"===i?557.5:"welcome"===i?532.5:"passionate"===i?742.5:"beautiful"===i?612.5:"young"===i?432.5:"concepts"===i?612.5:"Projects"===i?553.5:"_"===i?12.5:"shots"===i?362.5:"Shots"===i?382.5:"wemakeweb"===i?912.5:"motto"===i?85.5:"message"===i?182.5:"you"===i?255.5:"simply"===i?440.5:"to"===i?150.5:"M1"===i?202.5:"we"===i?207.5:"r"===i?387.5:"l"===i?37.5:20+i.replace("_"," ").convertVietToLatin().split("").reduce(function(t,n){return t+=e(n)},0),"logo"===a){l.size=640/299*13.56}else"hide"===a?(l.size=1,l.opacity=0):l.size=25;return l.x=l.x||0,l.y=l.y||0,l}}},89:function(e,t,n){"use strict";e.exports={isWebGLAvailable:function(){try{var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(e){return!1}},isWebGL2Available:function(){try{var e=document.createElement("canvas");return!(!window.WebGL2RenderingContext||!e.getContext("webgl2"))}catch(e){return!1}},getWebGLErrorMessage:function(){return this.getErrorMessage(1)},getWebGL2ErrorMessage:function(){return this.getErrorMessage(2)},getErrorMessage:function(e){var t={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext},n='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>',r=document.createElement("div");return r.id="webglmessage",r.style.fontFamily="monospace",r.style.fontSize="13px",r.style.fontWeight="normal",r.style.textAlign="center",r.style.background="#fff",r.style.color="#000",r.style.padding="1.5em",r.style.width="400px",r.style.margin="5em auto 0",n=(n=t[e]?n.replace("$0","graphics card"):n.replace("$0","browser")).replace("$1",{1:"WebGL",2:"WebGL 2"}[e]),r.innerHTML=n,r}}},90:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(66),o=function(e,t){return e.replace(/[0-9.-]+/g,function(e){return Math.floor(e.toNumber()*t*100)/100})},i=function(e,t,n){var r=0;return e.replace(/[0-9.-]+/g,function(e){return r++,e.toNumber()+(r%2?t:n)})};t.default=function(e){return{create:function(t){for(var n=t.text,a=t.size,u=t.letter_spacing,s=n&&n.split("")||[],l=a/e.resolution,c=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*l,d=[],f=0,h=0,p=0;p<s.length;p++){var m=s[p];if("\n"===m)f=0,h-=c;else{var g=e.glyphs[m]||e.glyphs["?"];if(g.o){var v=o(i(g.o,f,h),l);d.push(v)}f+=g.ha*(null==u?1:u)}}var y=function(e){var t=[];return e.map(function(e){return function(e){for(var t=new r.ShapePath,n=void 0,o=void 0,i=void 0,a=void 0,u=void 0,s=void 0,l=void 0,c=void 0,d=e.split(" ").filter(function(e){return e}),f=0,h=d.length;f<h;)switch(d[f++]){case"m":n=d[f++].toNumber(),o=d[f++].toNumber(),t.moveTo(n,o);break;case"l":n=d[f++].toNumber(),o=d[f++].toNumber(),t.lineTo(n,o);break;case"q":i=d[f++].toNumber(),a=d[f++].toNumber(),u=d[f++].toNumber(),s=d[f++].toNumber(),t.quadraticCurveTo(u,s,i,a);break;case"b":i=d[f++].toNumber(),a=d[f++].toNumber(),u=d[f++].toNumber(),s=d[f++].toNumber(),l=d[f++].toNumber(),c=d[f++].toNumber(),t.bezierCurveTo(u,s,l,c,i,a)}return t}(e).toShapes()}).forEach(function(e){return e.forEach(function(e){return t.push(e)})}),t}(d);return{paths:d,shapes:y}}}}}}]);