"use strict";var _slicedToArray=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]&&h["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();(function(){var a=function(a,b,c){var d=_slicedToArray(a,2),e=d[0],f=d[1],g=_slicedToArray(b,2),h=g[0],i=g[1];return h+(c-e)*(i-h)/(f-e)},b=1,c=10,d=5,e=function(e){return e<c?a([b+1,c],[2,d],e):d};window.curve=function curve(a){return a<=b?0:Math.floor((a-b)*e(a))}})();
