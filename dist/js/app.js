/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//! moment.js
//! version : 2.17.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    var k;
    for (k in obj) {
        // even if its not own property I'd still call it non-empty
        return false;
    }
    return true;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

var some$1 = some;

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some$1.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

function isUndefined(input) {
    return input === void 0;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i in momentProperties) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _ordinalParseLenient.
    this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var keys$1 = keys;

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid()) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

var indexOf$1 = indexOf;

function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return this._months;
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return this._monthsShort;
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function createDate (y, m, d, h, M, s, ms) {
    //can't just apply() to create a date:
    //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
    var date = new Date(y, m, d, h, M, s, ms);

    //the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    //the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return this._weekdays;
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    ordinalParse: defaultOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            require('./locale/' + name);
            // because defineLocale currently also sets the global locale, we
            // want to undo that for lazy loaded locales
            getSetGlobalLocale(oldLocale);
        } catch (e) { }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, parentConfig = baseConfig;
        // MERGE
        if (locales[name] != null) {
            parentConfig = locales[name]._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys$1(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
        hooks.createFromInputFallback(config);
    }
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse)) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }

    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (input === undefined) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (typeof(input) === 'object') {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    if (units === 'year' || units === 'month' || units === 'quarter') {
        output = monthDiff(this, that);
        if (units === 'quarter') {
            output = output / 3;
        } else if (units === 'year') {
            output = output / 12;
        }
    } else {
        delta = this - that;
        output = units === 'second' ? delta / 1e3 : // 1000
            units === 'minute' ? delta / 6e4 : // 1000 * 60
            units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
            units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
            units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
            delta;
    }
    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString () {
    var m = this.clone().utc();
    if (0 < m.year() && m.year() <= 9999) {
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            return this.toDate().toISOString();
        } else {
            return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    } else {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 < this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$1 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$1;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function get$2 (units) {
    units = normalizeUnits(units);
    return this[units + 's']();
}

function makeGetter(name) {
    return function () {
        return this._data[name];
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    s: 45,  // seconds to minute
    m: 45,  // minutes to hour
    h: 22,  // hours to day
    d: 26,  // days to month
    M: 11   // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds < thresholds.s && ['s', seconds]  ||
            minutes <= 1           && ['m']           ||
            minutes < thresholds.m && ['mm', minutes] ||
            hours   <= 1           && ['h']           ||
            hours   < thresholds.h && ['hh', hours]   ||
            days    <= 1           && ['d']           ||
            days    < thresholds.d && ['dd', days]    ||
            months  <= 1           && ['M']           ||
            months  < thresholds.M && ['MM', months]  ||
            years   <= 1           && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    return true;
}

function humanize (withSuffix) {
    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    return (total < 0 ? '-' : '') +
        'P' +
        (Y ? Y + 'Y' : '') +
        (M ? M + 'M' : '') +
        (D ? D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? h + 'H' : '') +
        (m ? m + 'M' : '') +
        (s ? s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports


hooks.version = '2.17.0';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

return hooks;

})));

window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(231,233,237)'
};

window.randomScalingFactor = function() {
	return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
}
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.4.0
 *
 * Copyright 2016 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Chart=t()}}(function(){var t;return function e(t,n,i){function a(o,s){if(!n[o]){if(!t[o]){var l="function"==typeof require&&require;if(!s&&l)return l(o,!0);if(r)return r(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[o]={exports:{}};t[o][0].call(d.exports,function(e){var n=t[o][1][e];return a(n?n:e)},d,d.exports,e,t,n,i)}return n[o].exports}for(var r="function"==typeof require&&require,o=0;o<i.length;o++)a(i[o]);return a}({1:[function(t,e,n){var i=t(22)();t(20)(i),t(16)(i),t(19)(i),t(15)(i),t(17)(i),t(18)(i),t(23)(i),t(27)(i),t(25)(i),t(28)(i),t(26)(i),t(29)(i),t(24)(i),t(21)(i),t(30)(i),t(31)(i),t(32)(i),t(33)(i),t(34)(i),t(37)(i),t(35)(i),t(36)(i),t(38)(i),t(39)(i),t(40)(i),t(9)(i),t(10)(i),t(11)(i),t(12)(i),t(13)(i),t(14)(i),t(2)(i),t(3)(i),t(4)(i),t(5)(i),t(6)(i),t(7)(i),t(8)(i),window.Chart=e.exports=i},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,2:2,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,3:3,30:30,31:31,32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,4:4,40:40,5:5,6:6,7:7,8:8,9:9}],2:[function(t,e,n){"use strict";e.exports=function(t){t.Bar=function(e,n){return n.type="bar",new t(e,n)}}},{}],3:[function(t,e,n){"use strict";e.exports=function(t){t.Bubble=function(e,n){return n.type="bubble",new t(e,n)}}},{}],4:[function(t,e,n){"use strict";e.exports=function(t){t.Doughnut=function(e,n){return n.type="doughnut",new t(e,n)}}},{}],5:[function(t,e,n){"use strict";e.exports=function(t){t.Line=function(e,n){return n.type="line",new t(e,n)}}},{}],6:[function(t,e,n){"use strict";e.exports=function(t){t.PolarArea=function(e,n){return n.type="polarArea",new t(e,n)}}},{}],7:[function(t,e,n){"use strict";e.exports=function(t){t.Radar=function(e,n){return n.type="radar",new t(e,n)}}},{}],8:[function(t,e,n){"use strict";e.exports=function(t){var e={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-1"}],yAxes:[{type:"linear",position:"left",id:"y-axis-1"}]},tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}};t.defaults.scatter=e,t.controllers.scatter=t.controllers.line,t.Scatter=function(e,n){return n.type="scatter",new t(e,n)}}},{}],9:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bar={hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}},t.controllers.bar=t.DatasetController.extend({dataElementType:t.elements.Rectangle,initialize:function(e,n){t.DatasetController.prototype.initialize.call(this,e,n),this.getMeta().bar=!0},getBarCount:function(){var t=this,n=0;return e.each(t.chart.data.datasets,function(e,i){var a=t.chart.getDatasetMeta(i);a.bar&&t.chart.isDatasetVisible(i)&&++n},t),n},update:function(t){var n=this;e.each(n.getMeta().data,function(e,i){n.updateElement(e,i,t)},n)},updateElement:function(t,n,i){var a=this,r=a.getMeta(),o=a.getScaleForId(r.xAxisID),s=a.getScaleForId(r.yAxisID),l=s.getBasePixel(),u=a.chart.options.elements.rectangle,d=t.custom||{},c=a.getDataset();t._xScale=o,t._yScale=s,t._datasetIndex=a.index,t._index=n;var h=a.getRuler(n);t._model={x:a.calculateBarX(n,a.index,h),y:i?l:a.calculateBarY(n,a.index),label:a.chart.data.labels[n],datasetLabel:c.label,base:i?l:a.calculateBarBase(a.index,n),width:a.calculateBarWidth(h),backgroundColor:d.backgroundColor?d.backgroundColor:e.getValueAtIndexOrDefault(c.backgroundColor,n,u.backgroundColor),borderSkipped:d.borderSkipped?d.borderSkipped:u.borderSkipped,borderColor:d.borderColor?d.borderColor:e.getValueAtIndexOrDefault(c.borderColor,n,u.borderColor),borderWidth:d.borderWidth?d.borderWidth:e.getValueAtIndexOrDefault(c.borderWidth,n,u.borderWidth)},t.pivot()},calculateBarBase:function(t,e){var n=this,i=n.getMeta(),a=n.getScaleForId(i.yAxisID),r=0;if(a.options.stacked){for(var o=n.chart,s=o.data.datasets,l=Number(s[t].data[e]),u=0;t>u;u++){var d=s[u],c=o.getDatasetMeta(u);if(c.bar&&c.yAxisID===a.id&&o.isDatasetVisible(u)){var h=Number(d.data[e]);r+=0>l?Math.min(h,0):Math.max(h,0)}}return a.getPixelForValue(r)}return a.getBasePixel()},getRuler:function(t){var e,n=this,i=n.getMeta(),a=n.getScaleForId(i.xAxisID),r=n.getBarCount();e="category"===a.options.type?a.getPixelForTick(t+1)-a.getPixelForTick(t):a.width/a.ticks.length;var o=e*a.options.categoryPercentage,s=(e-e*a.options.categoryPercentage)/2,l=o/r;if(a.ticks.length!==n.chart.data.labels.length){var u=a.ticks.length/n.chart.data.labels.length;l*=u}var d=l*a.options.barPercentage,c=l-l*a.options.barPercentage;return{datasetCount:r,tickWidth:e,categoryWidth:o,categorySpacing:s,fullBarWidth:l,barWidth:d,barSpacing:c}},calculateBarWidth:function(t){var e=this.getScaleForId(this.getMeta().xAxisID);return e.options.barThickness?e.options.barThickness:e.options.stacked?t.categoryWidth:t.barWidth},getBarIndex:function(t){var e,n,i=0;for(n=0;t>n;++n)e=this.chart.getDatasetMeta(n),e.bar&&this.chart.isDatasetVisible(n)&&++i;return i},calculateBarX:function(t,e,n){var i=this,a=i.getMeta(),r=i.getScaleForId(a.xAxisID),o=i.getBarIndex(e),s=r.getPixelForValue(null,t,e,i.chart.isCombo);return s-=i.chart.isCombo?n.tickWidth/2:0,r.options.stacked?s+n.categoryWidth/2+n.categorySpacing:s+n.barWidth/2+n.categorySpacing+n.barWidth*o+n.barSpacing/2+n.barSpacing*o},calculateBarY:function(t,e){var n=this,i=n.getMeta(),a=n.getScaleForId(i.yAxisID),r=Number(n.getDataset().data[t]);if(a.options.stacked){for(var o=0,s=0,l=0;e>l;l++){var u=n.chart.data.datasets[l],d=n.chart.getDatasetMeta(l);if(d.bar&&d.yAxisID===a.id&&n.chart.isDatasetVisible(l)){var c=Number(u.data[t]);0>c?s+=c||0:o+=c||0}}return 0>r?a.getPixelForValue(s+r):a.getPixelForValue(o+r)}return a.getPixelForValue(r)},draw:function(t){var e,n,i=this,a=t||1,r=i.getMeta().data,o=i.getDataset();for(e=0,n=r.length;n>e;++e){var s=o.data[e];null===s||void 0===s||isNaN(s)||r[e].transition(a).draw()}},setHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},r=t._model;r.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:e.getValueAtIndexOrDefault(n.hoverBackgroundColor,i,e.getHoverColor(r.backgroundColor)),r.borderColor=a.hoverBorderColor?a.hoverBorderColor:e.getValueAtIndexOrDefault(n.hoverBorderColor,i,e.getHoverColor(r.borderColor)),r.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:e.getValueAtIndexOrDefault(n.hoverBorderWidth,i,r.borderWidth)},removeHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},r=t._model,o=this.chart.options.elements.rectangle;r.backgroundColor=a.backgroundColor?a.backgroundColor:e.getValueAtIndexOrDefault(n.backgroundColor,i,o.backgroundColor),r.borderColor=a.borderColor?a.borderColor:e.getValueAtIndexOrDefault(n.borderColor,i,o.borderColor),r.borderWidth=a.borderWidth?a.borderWidth:e.getValueAtIndexOrDefault(n.borderWidth,i,o.borderWidth)}}),t.defaults.horizontalBar={hover:{mode:"label"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var n="";return t.length>0&&(t[0].yLabel?n=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(n=e.labels[t[0].index])),n},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n+": "+t.xLabel}}}},t.controllers.horizontalBar=t.controllers.bar.extend({updateElement:function(t,n,i){var a=this,r=a.getMeta(),o=a.getScaleForId(r.xAxisID),s=a.getScaleForId(r.yAxisID),l=o.getBasePixel(),u=t.custom||{},d=a.getDataset(),c=a.chart.options.elements.rectangle;t._xScale=o,t._yScale=s,t._datasetIndex=a.index,t._index=n;var h=a.getRuler(n);t._model={x:i?l:a.calculateBarX(n,a.index),y:a.calculateBarY(n,a.index,h),label:a.chart.data.labels[n],datasetLabel:d.label,base:i?l:a.calculateBarBase(a.index,n),height:a.calculateBarHeight(h),backgroundColor:u.backgroundColor?u.backgroundColor:e.getValueAtIndexOrDefault(d.backgroundColor,n,c.backgroundColor),borderSkipped:u.borderSkipped?u.borderSkipped:c.borderSkipped,borderColor:u.borderColor?u.borderColor:e.getValueAtIndexOrDefault(d.borderColor,n,c.borderColor),borderWidth:u.borderWidth?u.borderWidth:e.getValueAtIndexOrDefault(d.borderWidth,n,c.borderWidth)},t.draw=function(){function t(t){return l[(d+t)%4]}var e=this._chart.ctx,n=this._view,i=n.height/2,a=n.y-i,r=n.y+i,o=n.base-(n.base-n.x),s=n.borderWidth/2;n.borderWidth&&(a+=s,r-=s,o+=s),e.beginPath(),e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth;var l=[[n.base,r],[n.base,a],[o,a],[o,r]],u=["bottom","left","top","right"],d=u.indexOf(n.borderSkipped,0);-1===d&&(d=0),e.moveTo.apply(e,t(0));for(var c=1;4>c;c++)e.lineTo.apply(e,t(c));e.fill(),n.borderWidth&&e.stroke()},t.pivot()},calculateBarBase:function(t,e){var n=this,i=n.getMeta(),a=n.getScaleForId(i.xAxisID),r=0;if(a.options.stacked){for(var o=n.chart,s=o.data.datasets,l=Number(s[t].data[e]),u=0;t>u;u++){var d=s[u],c=o.getDatasetMeta(u);if(c.bar&&c.xAxisID===a.id&&o.isDatasetVisible(u)){var h=Number(d.data[e]);r+=0>l?Math.min(h,0):Math.max(h,0)}}return a.getPixelForValue(r)}return a.getBasePixel()},getRuler:function(t){var e,n=this,i=n.getMeta(),a=n.getScaleForId(i.yAxisID),r=n.getBarCount();e="category"===a.options.type?a.getPixelForTick(t+1)-a.getPixelForTick(t):a.width/a.ticks.length;var o=e*a.options.categoryPercentage,s=(e-e*a.options.categoryPercentage)/2,l=o/r;if(a.ticks.length!==n.chart.data.labels.length){var u=a.ticks.length/n.chart.data.labels.length;l*=u}var d=l*a.options.barPercentage,c=l-l*a.options.barPercentage;return{datasetCount:r,tickHeight:e,categoryHeight:o,categorySpacing:s,fullBarHeight:l,barHeight:d,barSpacing:c}},calculateBarHeight:function(t){var e=this,n=e.getScaleForId(e.getMeta().yAxisID);return n.options.barThickness?n.options.barThickness:n.options.stacked?t.categoryHeight:t.barHeight},calculateBarX:function(t,e){var n=this,i=n.getMeta(),a=n.getScaleForId(i.xAxisID),r=Number(n.getDataset().data[t]);if(a.options.stacked){for(var o=0,s=0,l=0;e>l;l++){var u=n.chart.data.datasets[l],d=n.chart.getDatasetMeta(l);if(d.bar&&d.xAxisID===a.id&&n.chart.isDatasetVisible(l)){var c=Number(u.data[t]);0>c?s+=c||0:o+=c||0}}return 0>r?a.getPixelForValue(s+r):a.getPixelForValue(o+r)}return a.getPixelForValue(r)},calculateBarY:function(t,e,n){var i=this,a=i.getMeta(),r=i.getScaleForId(a.yAxisID),o=i.getBarIndex(e),s=r.getPixelForValue(null,t,e,i.chart.isCombo);return s-=i.chart.isCombo?n.tickHeight/2:0,r.options.stacked?s+n.categoryHeight/2+n.categorySpacing:s+n.barHeight/2+n.categorySpacing+n.barHeight*o+n.barSpacing/2+n.barSpacing*o}})}},{}],10:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bubble={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"",i=e.datasets[t.datasetIndex].data[t.index];return n+": ("+t.xLabel+", "+t.yLabel+", "+i.r+")"}}}},t.controllers.bubble=t.DatasetController.extend({dataElementType:t.elements.Point,update:function(t){var n=this,i=n.getMeta(),a=i.data;e.each(a,function(e,i){n.updateElement(e,i,t)})},updateElement:function(n,i,a){var r=this,o=r.getMeta(),s=r.getScaleForId(o.xAxisID),l=r.getScaleForId(o.yAxisID),u=n.custom||{},d=r.getDataset(),c=d.data[i],h=r.chart.options.elements.point,f=r.index;e.extend(n,{_xScale:s,_yScale:l,_datasetIndex:f,_index:i,_model:{x:a?s.getPixelForDecimal(.5):s.getPixelForValue("object"==typeof c?c:NaN,i,f,r.chart.isCombo),y:a?l.getBasePixel():l.getPixelForValue(c,i,f),radius:a?0:u.radius?u.radius:r.getRadius(c),hitRadius:u.hitRadius?u.hitRadius:e.getValueAtIndexOrDefault(d.hitRadius,i,h.hitRadius)}}),t.DatasetController.prototype.removeHoverStyle.call(r,n,h);var g=n._model;g.skip=u.skip?u.skip:isNaN(g.x)||isNaN(g.y),n.pivot()},getRadius:function(t){return t.r||this.chart.options.elements.point.radius},setHoverStyle:function(n){var i=this;t.DatasetController.prototype.setHoverStyle.call(i,n);var a=i.chart.data.datasets[n._datasetIndex],r=n._index,o=n.custom||{},s=n._model;s.radius=o.hoverRadius?o.hoverRadius:e.getValueAtIndexOrDefault(a.hoverRadius,r,i.chart.options.elements.point.hoverRadius)+i.getRadius(a.data[r])},removeHoverStyle:function(e){var n=this;t.DatasetController.prototype.removeHoverStyle.call(n,e,n.chart.options.elements.point);var i=n.chart.data.datasets[e._datasetIndex].data[e._index],a=e.custom||{},r=e._model;r.radius=a.radius?a.radius:n.getRadius(i)}})}},{}],11:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults;n.doughnut={animation:{animateRotate:!0,animateScale:!1},aspectRatio:1,hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var n=t.data,i=n.datasets,a=n.labels;if(i.length)for(var r=0;r<i[0].data.length;++r)e.push('<li><span style="background-color:'+i[0].backgroundColor[r]+'"></span>'),a[r]&&e.push(a[r]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var n=t.data;return n.labels.length&&n.datasets.length?n.labels.map(function(i,a){var r=t.getDatasetMeta(0),o=n.datasets[0],s=r.data[a],l=s&&s.custom||{},u=e.getValueAtIndexOrDefault,d=t.options.elements.arc,c=l.backgroundColor?l.backgroundColor:u(o.backgroundColor,a,d.backgroundColor),h=l.borderColor?l.borderColor:u(o.borderColor,a,d.borderColor),f=l.borderWidth?l.borderWidth:u(o.borderWidth,a,d.borderWidth);return{text:i,fillStyle:c,strokeStyle:h,lineWidth:f,hidden:isNaN(o.data[a])||r.data[a].hidden,index:a}}):[]}},onClick:function(t,e){var n,i,a,r=e.index,o=this.chart;for(n=0,i=(o.data.datasets||[]).length;i>n;++n)a=o.getDatasetMeta(n),a.data[r]&&(a.data[r].hidden=!a.data[r].hidden);o.update()}},cutoutPercentage:50,rotation:Math.PI*-.5,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,n){var i=n.labels[t.index],a=": "+n.datasets[t.datasetIndex].data[t.index];return e.isArray(i)?(i=i.slice(),i[0]+=a):i+=a,i}}}},n.pie=e.clone(n.doughnut),e.extend(n.pie,{cutoutPercentage:0}),t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,getRingIndex:function(t){for(var e=0,n=0;t>n;++n)this.chart.isDatasetVisible(n)&&++e;return e},update:function(t){var n=this,i=n.chart,a=i.chartArea,r=i.options,o=r.elements.arc,s=a.right-a.left-o.borderWidth,l=a.bottom-a.top-o.borderWidth,u=Math.min(s,l),d={x:0,y:0},c=n.getMeta(),h=r.cutoutPercentage,f=r.circumference;if(f<2*Math.PI){var g=r.rotation%(2*Math.PI);g+=2*Math.PI*(g>=Math.PI?-1:g<-Math.PI?1:0);var m=g+f,p={x:Math.cos(g),y:Math.sin(g)},v={x:Math.cos(m),y:Math.sin(m)},b=0>=g&&m>=0||g<=2*Math.PI&&2*Math.PI<=m,y=g<=.5*Math.PI&&.5*Math.PI<=m||g<=2.5*Math.PI&&2.5*Math.PI<=m,x=g<=-Math.PI&&-Math.PI<=m||g<=Math.PI&&Math.PI<=m,k=g<=.5*-Math.PI&&.5*-Math.PI<=m||g<=1.5*Math.PI&&1.5*Math.PI<=m,_=h/100,w={x:x?-1:Math.min(p.x*(p.x<0?1:_),v.x*(v.x<0?1:_)),y:k?-1:Math.min(p.y*(p.y<0?1:_),v.y*(v.y<0?1:_))},S={x:b?1:Math.max(p.x*(p.x>0?1:_),v.x*(v.x>0?1:_)),y:y?1:Math.max(p.y*(p.y>0?1:_),v.y*(v.y>0?1:_))},M={width:.5*(S.x-w.x),height:.5*(S.y-w.y)};u=Math.min(s/M.width,l/M.height),d={x:(S.x+w.x)*-.5,y:(S.y+w.y)*-.5}}i.borderWidth=n.getMaxBorderWidth(c.data),i.outerRadius=Math.max((u-i.borderWidth)/2,0),i.innerRadius=Math.max(h?i.outerRadius/100*h:1,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),i.offsetX=d.x*i.outerRadius,i.offsetY=d.y*i.outerRadius,c.total=n.calculateTotal(),n.outerRadius=i.outerRadius-i.radiusLength*n.getRingIndex(n.index),n.innerRadius=n.outerRadius-i.radiusLength,e.each(c.data,function(e,i){n.updateElement(e,i,t)})},updateElement:function(t,n,i){var a=this,r=a.chart,o=r.chartArea,s=r.options,l=s.animation,u=(o.left+o.right)/2,d=(o.top+o.bottom)/2,c=s.rotation,h=s.rotation,f=a.getDataset(),g=i&&l.animateRotate?0:t.hidden?0:a.calculateCircumference(f.data[n])*(s.circumference/(2*Math.PI)),m=i&&l.animateScale?0:a.innerRadius,p=i&&l.animateScale?0:a.outerRadius,v=e.getValueAtIndexOrDefault;e.extend(t,{_datasetIndex:a.index,_index:n,_model:{x:u+r.offsetX,y:d+r.offsetY,startAngle:c,endAngle:h,circumference:g,outerRadius:p,innerRadius:m,label:v(f.label,n,r.data.labels[n])}});var b=t._model;this.removeHoverStyle(t),i&&l.animateRotate||(0===n?b.startAngle=s.rotation:b.startAngle=a.getMeta().data[n-1]._model.endAngle,b.endAngle=b.startAngle+b.circumference),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},calculateTotal:function(){var t,n=this.getDataset(),i=this.getMeta(),a=0;return e.each(i.data,function(e,i){t=n.data[i],isNaN(t)||e.hidden||(a+=Math.abs(t))}),a},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(t/e):0},getMaxBorderWidth:function(t){for(var e,n,i=0,a=this.index,r=t.length,o=0;r>o;o++)e=t[o]._model?t[o]._model.borderWidth:0,n=t[o]._chart?t[o]._chart.config.data.datasets[a].hoverBorderWidth:0,i=e>i?e:i,i=n>i?n:i;return i}})}},{}],12:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return n.getValueOrDefault(t.showLine,e.showLines)}var n=t.helpers;t.defaults.line={showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}},t.controllers.line=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,update:function(t){var i,a,r,o=this,s=o.getMeta(),l=s.dataset,u=s.data||[],d=o.chart.options,c=d.elements.line,h=o.getScaleForId(s.yAxisID),f=o.getDataset(),g=e(f,d);for(g&&(r=l.custom||{},void 0!==f.tension&&void 0===f.lineTension&&(f.lineTension=f.tension),l._scale=h,l._datasetIndex=o.index,l._children=u,l._model={spanGaps:f.spanGaps?f.spanGaps:d.spanGaps,tension:r.tension?r.tension:n.getValueOrDefault(f.lineTension,c.tension),backgroundColor:r.backgroundColor?r.backgroundColor:f.backgroundColor||c.backgroundColor,borderWidth:r.borderWidth?r.borderWidth:f.borderWidth||c.borderWidth,borderColor:r.borderColor?r.borderColor:f.borderColor||c.borderColor,borderCapStyle:r.borderCapStyle?r.borderCapStyle:f.borderCapStyle||c.borderCapStyle,borderDash:r.borderDash?r.borderDash:f.borderDash||c.borderDash,borderDashOffset:r.borderDashOffset?r.borderDashOffset:f.borderDashOffset||c.borderDashOffset,borderJoinStyle:r.borderJoinStyle?r.borderJoinStyle:f.borderJoinStyle||c.borderJoinStyle,fill:r.fill?r.fill:void 0!==f.fill?f.fill:c.fill,steppedLine:r.steppedLine?r.steppedLine:n.getValueOrDefault(f.steppedLine,c.stepped),cubicInterpolationMode:r.cubicInterpolationMode?r.cubicInterpolationMode:n.getValueOrDefault(f.cubicInterpolationMode,c.cubicInterpolationMode),scaleTop:h.top,scaleBottom:h.bottom,scaleZero:h.getBasePixel()},l.pivot()),i=0,a=u.length;a>i;++i)o.updateElement(u[i],i,t);for(g&&0!==l._model.tension&&o.updateBezierControlPoints(),i=0,a=u.length;a>i;++i)u[i].pivot()},getPointBackgroundColor:function(t,e){var i=this.chart.options.elements.point.backgroundColor,a=this.getDataset(),r=t.custom||{};return r.backgroundColor?i=r.backgroundColor:a.pointBackgroundColor?i=n.getValueAtIndexOrDefault(a.pointBackgroundColor,e,i):a.backgroundColor&&(i=a.backgroundColor),i},getPointBorderColor:function(t,e){var i=this.chart.options.elements.point.borderColor,a=this.getDataset(),r=t.custom||{};return r.borderColor?i=r.borderColor:a.pointBorderColor?i=n.getValueAtIndexOrDefault(a.pointBorderColor,e,i):a.borderColor&&(i=a.borderColor),i},getPointBorderWidth:function(t,e){var i=this.chart.options.elements.point.borderWidth,a=this.getDataset(),r=t.custom||{};return r.borderWidth?i=r.borderWidth:a.pointBorderWidth?i=n.getValueAtIndexOrDefault(a.pointBorderWidth,e,i):a.borderWidth&&(i=a.borderWidth),i},updateElement:function(t,e,i){var a,r,o=this,s=o.getMeta(),l=t.custom||{},u=o.getDataset(),d=o.index,c=u.data[e],h=o.getScaleForId(s.yAxisID),f=o.getScaleForId(s.xAxisID),g=o.chart.options.elements.point,m=o.chart.data.labels||[],p=1===m.length||1===u.data.length||o.chart.isCombo;void 0!==u.radius&&void 0===u.pointRadius&&(u.pointRadius=u.radius),void 0!==u.hitRadius&&void 0===u.pointHitRadius&&(u.pointHitRadius=u.hitRadius),a=f.getPixelForValue("object"==typeof c?c:NaN,e,d,p),r=i?h.getBasePixel():o.calculatePointY(c,e,d),t._xScale=f,t._yScale=h,t._datasetIndex=d,t._index=e,t._model={x:a,y:r,skip:l.skip||isNaN(a)||isNaN(r),radius:l.radius||n.getValueAtIndexOrDefault(u.pointRadius,e,g.radius),pointStyle:l.pointStyle||n.getValueAtIndexOrDefault(u.pointStyle,e,g.pointStyle),backgroundColor:o.getPointBackgroundColor(t,e),borderColor:o.getPointBorderColor(t,e),borderWidth:o.getPointBorderWidth(t,e),tension:s.dataset._model?s.dataset._model.tension:0,steppedLine:s.dataset._model?s.dataset._model.steppedLine:!1,hitRadius:l.hitRadius||n.getValueAtIndexOrDefault(u.pointHitRadius,e,g.hitRadius)}},calculatePointY:function(t,e,n){var i,a,r,o=this,s=o.chart,l=o.getMeta(),u=o.getScaleForId(l.yAxisID),d=0,c=0;if(u.options.stacked){for(i=0;n>i;i++)if(a=s.data.datasets[i],r=s.getDatasetMeta(i),"line"===r.type&&r.yAxisID===u.id&&s.isDatasetVisible(i)){var h=Number(u.getRightValue(a.data[e]));0>h?c+=h||0:d+=h||0}var f=Number(u.getRightValue(t));return 0>f?u.getPixelForValue(c+f):u.getPixelForValue(d+f)}return u.getPixelForValue(t)},updateBezierControlPoints:function(){function t(t,e,n){return Math.max(Math.min(t,n),e)}var e,i,a,r,o,s=this,l=s.getMeta(),u=s.chart.chartArea,d=l.data||[];if(l.dataset._model.spanGaps&&(d=d.filter(function(t){return!t._model.skip})),"monotone"===l.dataset._model.cubicInterpolationMode)n.splineCurveMonotone(d);else for(e=0,i=d.length;i>e;++e)a=d[e],r=a._model,o=n.splineCurve(n.previousItem(d,e)._model,r,n.nextItem(d,e)._model,l.dataset._model.tension),r.controlPointPreviousX=o.previous.x,r.controlPointPreviousY=o.previous.y,r.controlPointNextX=o.next.x,r.controlPointNextY=o.next.y;if(s.chart.options.elements.line.capBezierPoints)for(e=0,i=d.length;i>e;++e)r=d[e]._model,r.controlPointPreviousX=t(r.controlPointPreviousX,u.left,u.right),r.controlPointPreviousY=t(r.controlPointPreviousY,u.top,u.bottom),r.controlPointNextX=t(r.controlPointNextX,u.left,u.right),r.controlPointNextY=t(r.controlPointNextY,u.top,u.bottom)},draw:function(t){var n,i,a=this,r=a.getMeta(),o=r.data||[],s=t||1;for(n=0,i=o.length;i>n;++n)o[n].transition(s);for(e(a.getDataset(),a.chart.options)&&r.dataset.transition(s).draw(),n=0,i=o.length;i>n;++n)o[n].draw()},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},r=t._model;r.radius=a.hoverRadius||n.getValueAtIndexOrDefault(e.pointHoverRadius,i,this.chart.options.elements.point.hoverRadius),r.backgroundColor=a.hoverBackgroundColor||n.getValueAtIndexOrDefault(e.pointHoverBackgroundColor,i,n.getHoverColor(r.backgroundColor)),r.borderColor=a.hoverBorderColor||n.getValueAtIndexOrDefault(e.pointHoverBorderColor,i,n.getHoverColor(r.borderColor)),r.borderWidth=a.hoverBorderWidth||n.getValueAtIndexOrDefault(e.pointHoverBorderWidth,i,r.borderWidth)},removeHoverStyle:function(t){var e=this,i=e.chart.data.datasets[t._datasetIndex],a=t._index,r=t.custom||{},o=t._model;void 0!==i.radius&&void 0===i.pointRadius&&(i.pointRadius=i.radius),o.radius=r.radius||n.getValueAtIndexOrDefault(i.pointRadius,a,e.chart.options.elements.point.radius),o.backgroundColor=e.getPointBackgroundColor(t,a),o.borderColor=e.getPointBorderColor(t,a),o.borderWidth=e.getPointBorderWidth(t,a)}})}},{}],13:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.polarArea={scale:{type:"radialLinear",lineArc:!0,ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,aspectRatio:1,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var n=t.data,i=n.datasets,a=n.labels;if(i.length)for(var r=0;r<i[0].data.length;++r)e.push('<li><span style="background-color:'+i[0].backgroundColor[r]+'"></span>'),a[r]&&e.push(a[r]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var n=t.data;return n.labels.length&&n.datasets.length?n.labels.map(function(i,a){var r=t.getDatasetMeta(0),o=n.datasets[0],s=r.data[a],l=s.custom||{},u=e.getValueAtIndexOrDefault,d=t.options.elements.arc,c=l.backgroundColor?l.backgroundColor:u(o.backgroundColor,a,d.backgroundColor),h=l.borderColor?l.borderColor:u(o.borderColor,a,d.borderColor),f=l.borderWidth?l.borderWidth:u(o.borderWidth,a,d.borderWidth);return{text:i,fillStyle:c,strokeStyle:h,lineWidth:f,hidden:isNaN(o.data[a])||r.data[a].hidden,index:a}}):[]}},onClick:function(t,e){var n,i,a,r=e.index,o=this.chart;for(n=0,i=(o.data.datasets||[]).length;i>n;++n)a=o.getDatasetMeta(n),a.data[r].hidden=!a.data[r].hidden;o.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}},t.controllers.polarArea=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,update:function(t){var n=this,i=n.chart,a=i.chartArea,r=n.getMeta(),o=i.options,s=o.elements.arc,l=Math.min(a.right-a.left,a.bottom-a.top);i.outerRadius=Math.max((l-s.borderWidth/2)/2,0),i.innerRadius=Math.max(o.cutoutPercentage?i.outerRadius/100*o.cutoutPercentage:1,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),n.outerRadius=i.outerRadius-i.radiusLength*n.index,n.innerRadius=n.outerRadius-i.radiusLength,r.count=n.countVisibleElements(),e.each(r.data,function(e,i){n.updateElement(e,i,t)})},updateElement:function(t,n,i){for(var a=this,r=a.chart,o=a.getDataset(),s=r.options,l=s.animation,u=r.scale,d=e.getValueAtIndexOrDefault,c=r.data.labels,h=a.calculateCircumference(o.data[n]),f=u.xCenter,g=u.yCenter,m=0,p=a.getMeta(),v=0;n>v;++v)isNaN(o.data[v])||p.data[v].hidden||++m;var b=s.startAngle,y=t.hidden?0:u.getDistanceFromCenterForValue(o.data[n]),x=b+h*m,k=x+(t.hidden?0:h),_=l.animateScale?0:u.getDistanceFromCenterForValue(o.data[n]);e.extend(t,{_datasetIndex:a.index,_index:n,_scale:u,_model:{x:f,y:g,innerRadius:0,outerRadius:i?_:y,startAngle:i&&l.animateRotate?b:x,endAngle:i&&l.animateRotate?b:k,label:d(c,n,c[n])}}),a.removeHoverStyle(t),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},countVisibleElements:function(){var t=this.getDataset(),n=this.getMeta(),i=0;return e.each(n.data,function(e,n){isNaN(t.data[n])||e.hidden||i++}),i},calculateCircumference:function(t){var e=this.getMeta().count;return e>0&&!isNaN(t)?2*Math.PI/e:0}})}},{}],14:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.radar={aspectRatio:1,scale:{type:"radialLinear"},elements:{line:{tension:0}}},t.controllers.radar=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,linkScales:e.noop,update:function(t){var n=this,i=n.getMeta(),a=i.dataset,r=i.data,o=a.custom||{},s=n.getDataset(),l=n.chart.options.elements.line,u=n.chart.scale;void 0!==s.tension&&void 0===s.lineTension&&(s.lineTension=s.tension),e.extend(i.dataset,{_datasetIndex:n.index,_children:r,_loop:!0,_model:{tension:o.tension?o.tension:e.getValueOrDefault(s.lineTension,l.tension),backgroundColor:o.backgroundColor?o.backgroundColor:s.backgroundColor||l.backgroundColor,borderWidth:o.borderWidth?o.borderWidth:s.borderWidth||l.borderWidth,borderColor:o.borderColor?o.borderColor:s.borderColor||l.borderColor,fill:o.fill?o.fill:void 0!==s.fill?s.fill:l.fill,borderCapStyle:o.borderCapStyle?o.borderCapStyle:s.borderCapStyle||l.borderCapStyle,borderDash:o.borderDash?o.borderDash:s.borderDash||l.borderDash,borderDashOffset:o.borderDashOffset?o.borderDashOffset:s.borderDashOffset||l.borderDashOffset,borderJoinStyle:o.borderJoinStyle?o.borderJoinStyle:s.borderJoinStyle||l.borderJoinStyle,scaleTop:u.top,scaleBottom:u.bottom,scaleZero:u.getBasePosition()}}),i.dataset.pivot(),e.each(r,function(e,i){n.updateElement(e,i,t)},n),n.updateBezierControlPoints()},updateElement:function(t,n,i){var a=this,r=t.custom||{},o=a.getDataset(),s=a.chart.scale,l=a.chart.options.elements.point,u=s.getPointPositionForValue(n,o.data[n]);e.extend(t,{_datasetIndex:a.index,_index:n,_scale:s,_model:{x:i?s.xCenter:u.x,y:i?s.yCenter:u.y,tension:r.tension?r.tension:e.getValueOrDefault(o.tension,a.chart.options.elements.line.tension),radius:r.radius?r.radius:e.getValueAtIndexOrDefault(o.pointRadius,n,l.radius),backgroundColor:r.backgroundColor?r.backgroundColor:e.getValueAtIndexOrDefault(o.pointBackgroundColor,n,l.backgroundColor),borderColor:r.borderColor?r.borderColor:e.getValueAtIndexOrDefault(o.pointBorderColor,n,l.borderColor),borderWidth:r.borderWidth?r.borderWidth:e.getValueAtIndexOrDefault(o.pointBorderWidth,n,l.borderWidth),pointStyle:r.pointStyle?r.pointStyle:e.getValueAtIndexOrDefault(o.pointStyle,n,l.pointStyle),hitRadius:r.hitRadius?r.hitRadius:e.getValueAtIndexOrDefault(o.hitRadius,n,l.hitRadius)}}),t._model.skip=r.skip?r.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,n=this.getMeta();e.each(n.data,function(i,a){var r=i._model,o=e.splineCurve(e.previousItem(n.data,a,!0)._model,r,e.nextItem(n.data,a,!0)._model,r.tension);r.controlPointPreviousX=Math.max(Math.min(o.previous.x,t.right),t.left),r.controlPointPreviousY=Math.max(Math.min(o.previous.y,t.bottom),t.top),r.controlPointNextX=Math.max(Math.min(o.next.x,t.right),t.left),r.controlPointNextY=Math.max(Math.min(o.next.y,t.bottom),t.top),i.pivot()})},draw:function(t){var n=this.getMeta(),i=t||1;e.each(n.data,function(t){t.transition(i)}),n.dataset.transition(i).draw(),e.each(n.data,function(t){t.draw()})},setHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},a=t._index,r=t._model;r.radius=i.hoverRadius?i.hoverRadius:e.getValueAtIndexOrDefault(n.pointHoverRadius,a,this.chart.options.elements.point.hoverRadius),r.backgroundColor=i.hoverBackgroundColor?i.hoverBackgroundColor:e.getValueAtIndexOrDefault(n.pointHoverBackgroundColor,a,e.getHoverColor(r.backgroundColor)),r.borderColor=i.hoverBorderColor?i.hoverBorderColor:e.getValueAtIndexOrDefault(n.pointHoverBorderColor,a,e.getHoverColor(r.borderColor)),r.borderWidth=i.hoverBorderWidth?i.hoverBorderWidth:e.getValueAtIndexOrDefault(n.pointHoverBorderWidth,a,r.borderWidth)},removeHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},a=t._index,r=t._model,o=this.chart.options.elements.point;r.radius=i.radius?i.radius:e.getValueAtIndexOrDefault(n.radius,a,o.radius),r.backgroundColor=i.backgroundColor?i.backgroundColor:e.getValueAtIndexOrDefault(n.pointBackgroundColor,a,o.backgroundColor),r.borderColor=i.borderColor?i.borderColor:e.getValueAtIndexOrDefault(n.pointBorderColor,a,o.borderColor),r.borderWidth=i.borderWidth?i.borderWidth:e.getValueAtIndexOrDefault(n.pointBorderWidth,a,o.borderWidth)}})}},{}],15:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.animation={duration:1e3,easing:"easeOutQuart",onProgress:e.noop,onComplete:e.noop},t.Animation=t.Element.extend({currentStep:null,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),t.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,n,i){var a=this;i||(t.animating=!0);for(var r=0;r<a.animations.length;++r)if(a.animations[r].chartInstance===t)return void(a.animations[r].animationObject=e);a.animations.push({chartInstance:t,animationObject:e}),1===a.animations.length&&a.requestAnimationFrame()},cancelAnimation:function(t){
var n=e.findIndex(this.animations,function(e){return e.chartInstance===t});-1!==n&&(this.animations.splice(n,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=e.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){var t=this,e=Date.now(),n=0;t.dropFrames>1&&(n=Math.floor(t.dropFrames),t.dropFrames=t.dropFrames%1);for(var i=0;i<t.animations.length;)null===t.animations[i].animationObject.currentStep&&(t.animations[i].animationObject.currentStep=0),t.animations[i].animationObject.currentStep+=1+n,t.animations[i].animationObject.currentStep>t.animations[i].animationObject.numSteps&&(t.animations[i].animationObject.currentStep=t.animations[i].animationObject.numSteps),t.animations[i].animationObject.render(t.animations[i].chartInstance,t.animations[i].animationObject),t.animations[i].animationObject.onAnimationProgress&&t.animations[i].animationObject.onAnimationProgress.call&&t.animations[i].animationObject.onAnimationProgress.call(t.animations[i].chartInstance,t.animations[i]),t.animations[i].animationObject.currentStep===t.animations[i].animationObject.numSteps?(t.animations[i].animationObject.onAnimationComplete&&t.animations[i].animationObject.onAnimationComplete.call&&t.animations[i].animationObject.onAnimationComplete.call(t.animations[i].chartInstance,t.animations[i]),t.animations[i].chartInstance.animating=!1,t.animations.splice(i,1)):++i;var a=Date.now(),r=(a-e)/t.frameDuration;t.dropFrames+=r,t.animations.length>0&&t.requestAnimationFrame()}}}},{}],16:[function(t,e,n){"use strict";e.exports=function(t){var e=t.canvasHelpers={};e.drawPoint=function(t,e,n,i,a){var r,o,s,l,u,d;if("object"==typeof e&&(r=e.toString(),"[object HTMLImageElement]"===r||"[object HTMLCanvasElement]"===r))return void t.drawImage(e,i-e.width/2,a-e.height/2);if(!(isNaN(n)||0>=n)){switch(e){default:t.beginPath(),t.arc(i,a,n,0,2*Math.PI),t.closePath(),t.fill();break;case"triangle":t.beginPath(),o=3*n/Math.sqrt(3),u=o*Math.sqrt(3)/2,t.moveTo(i-o/2,a+u/3),t.lineTo(i+o/2,a+u/3),t.lineTo(i,a-2*u/3),t.closePath(),t.fill();break;case"rect":d=1/Math.SQRT2*n,t.beginPath(),t.fillRect(i-d,a-d,2*d,2*d),t.strokeRect(i-d,a-d,2*d,2*d);break;case"rectRot":d=1/Math.SQRT2*n,t.beginPath(),t.moveTo(i-d,a),t.lineTo(i,a+d),t.lineTo(i+d,a),t.lineTo(i,a-d),t.closePath(),t.fill();break;case"cross":t.beginPath(),t.moveTo(i,a+n),t.lineTo(i,a-n),t.moveTo(i-n,a),t.lineTo(i+n,a),t.closePath();break;case"crossRot":t.beginPath(),s=Math.cos(Math.PI/4)*n,l=Math.sin(Math.PI/4)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l),t.moveTo(i-s,a+l),t.lineTo(i+s,a-l),t.closePath();break;case"star":t.beginPath(),t.moveTo(i,a+n),t.lineTo(i,a-n),t.moveTo(i-n,a),t.lineTo(i+n,a),s=Math.cos(Math.PI/4)*n,l=Math.sin(Math.PI/4)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l),t.moveTo(i-s,a+l),t.lineTo(i+s,a-l),t.closePath();break;case"line":t.beginPath(),t.moveTo(i-n,a),t.lineTo(i+n,a),t.closePath();break;case"dash":t.beginPath(),t.moveTo(i,a),t.lineTo(i+n,a),t.closePath()}t.stroke()}}}},{}],17:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){var n=o.getStyle(t,e),i=n&&n.match(/(\d+)px/);return i?Number(i[1]):void 0}function n(t,n){var i=t.style,a=t.getAttribute("height"),r=t.getAttribute("width");if(t._chartjs={initial:{height:a,width:r,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",null===r||""===r){var o=e(t,"width");void 0!==o&&(t.width=o)}if(null===a||""===a)if(""===t.style.height)t.height=t.width/(n.options.aspectRatio||2);else{var s=e(t,"height");void 0!==o&&(t.height=s)}return t}function i(t){if(t._chartjs){var e=t._chartjs.initial;["height","width"].forEach(function(n){var i=e[n];void 0===i||null===i?t.removeAttribute(n):t.setAttribute(n,i)}),o.each(e.style||{},function(e,n){t.style[n]=e}),t.width=t.width,delete t._chartjs}}function a(t,e){if("string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t instanceof HTMLCanvasElement){var i=t.getContext&&t.getContext("2d");if(i instanceof CanvasRenderingContext2D)return n(t,e),i}return null}function r(e){e=e||{};var n=e.data=e.data||{};return n.datasets=n.datasets||[],n.labels=n.labels||[],e.options=o.configMerge(t.defaults.global,t.defaults[e.type],e.options||{}),e}var o=t.helpers;t.types={},t.instances={},t.controllers={},t.Controller=function(e,n,i){var s=this;n=r(n);var l=a(e,n),u=l&&l.canvas,d=u&&u.height,c=u&&u.width;return i.ctx=l,i.canvas=u,i.config=n,i.width=c,i.height=d,i.aspectRatio=d?c/d:null,s.id=o.uid(),s.chart=i,s.config=n,s.options=n.options,s._bufferedRender=!1,t.instances[s.id]=s,Object.defineProperty(s,"data",{get:function(){return s.config.data}}),l&&u?(o.retinaScale(i),s.options.responsive&&(o.addResizeListener(u.parentNode,function(){s.resize()}),s.resize(!0)),s.initialize(),s):(console.error("Failed to create chart: can't acquire context from the given item"),s)},o.extend(t.Controller.prototype,{initialize:function(){var e=this;return t.plugins.notify("beforeInit",[e]),e.bindEvents(),e.ensureScalesHaveIDs(),e.buildOrUpdateControllers(),e.buildScales(),e.updateLayout(),e.resetElements(),e.initToolTip(),e.update(),t.plugins.notify("afterInit",[e]),e},clear:function(){return o.clear(this.chart),this},stop:function(){return t.animationService.cancelAnimation(this),this},resize:function(e){var n=this,i=n.chart,a=n.options,r=i.canvas,s=a.maintainAspectRatio&&i.aspectRatio||null,l=Math.floor(o.getMaximumWidth(r)),u=Math.floor(s?l/s:o.getMaximumHeight(r));if(i.width!==l||i.height!==u){r.width=i.width=l,r.height=i.height=u,r.style.width=l+"px",r.style.height=u+"px",o.retinaScale(i);var d={width:l,height:u};t.plugins.notify("resize",[n,d]),n.options.onResize&&n.options.onResize(n,d),e||(n.stop(),n.update(n.options.responsiveAnimationDuration))}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},n=t.scale;o.each(e.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),o.each(e.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),n&&(n.id=n.id||"scale")},buildScales:function(){var e=this,n=e.options,i=e.scales={},a=[];n.scales&&(a=a.concat((n.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category"}}),(n.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear"}}))),n.scale&&a.push({options:n.scale,dtype:"radialLinear",isDefault:!0}),o.each(a,function(n){var a=n.options,r=o.getValueOrDefault(a.type,n.dtype),s=t.scaleService.getScaleConstructor(r);if(s){var l=new s({id:a.id,options:a,ctx:e.chart.ctx,chart:e});i[l.id]=l,n.isDefault&&(e.scale=l)}}),t.scaleService.addScalesToLayout(this)},updateLayout:function(){t.layoutService.update(this,this.chart.width,this.chart.height)},buildOrUpdateControllers:function(){var e=this,n=[],i=[];if(o.each(e.data.datasets,function(a,r){var o=e.getDatasetMeta(r);o.type||(o.type=a.type||e.config.type),n.push(o.type),o.controller?o.controller.updateIndex(r):(o.controller=new t.controllers[o.type](e,r),i.push(o.controller))},e),n.length>1)for(var a=1;a<n.length;a++)if(n[a]!==n[a-1]){e.isCombo=!0;break}return i},resetElements:function(){var t=this;o.each(t.data.datasets,function(e,n){t.getDatasetMeta(n).controller.reset()},t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(e,n){var i=this;t.plugins.notify("beforeUpdate",[i]),i.tooltip._data=i.data;var a=i.buildOrUpdateControllers();o.each(i.data.datasets,function(t,e){i.getDatasetMeta(e).controller.buildOrUpdateElements()},i),t.layoutService.update(i,i.chart.width,i.chart.height),t.plugins.notify("afterScaleUpdate",[i]),o.each(a,function(t){t.reset()}),i.updateDatasets(),t.plugins.notify("afterUpdate",[i]),i._bufferedRender?i._bufferedRequest={lazy:n,duration:e}:i.render(e,n)},updateDatasets:function(){var e,n,i=this;if(t.plugins.notify("beforeDatasetsUpdate",[i])){for(e=0,n=i.data.datasets.length;n>e;++e)i.getDatasetMeta(e).controller.update();t.plugins.notify("afterDatasetsUpdate",[i])}},render:function(e,n){var i=this;t.plugins.notify("beforeRender",[i]);var a=i.options.animation;if(a&&("undefined"!=typeof e&&0!==e||"undefined"==typeof e&&0!==a.duration)){var r=new t.Animation;r.numSteps=(e||a.duration)/16.66,r.easing=a.easing,r.render=function(t,e){var n=o.easingEffects[e.easing],i=e.currentStep/e.numSteps,a=n(i);t.draw(a,i,e.currentStep)},r.onAnimationProgress=a.onProgress,r.onAnimationComplete=a.onComplete,t.animationService.addAnimation(i,r,e,n)}else i.draw(),a&&a.onComplete&&a.onComplete.call&&a.onComplete.call(i);return i},draw:function(e){var n=this,i=e||1;n.clear(),t.plugins.notify("beforeDraw",[n,i]),o.each(n.boxes,function(t){t.draw(n.chartArea)},n),n.scale&&n.scale.draw(),t.plugins.notify("beforeDatasetsDraw",[n,i]),o.each(n.data.datasets,function(t,i){n.isDatasetVisible(i)&&n.getDatasetMeta(i).controller.draw(e)},n,!0),t.plugins.notify("afterDatasetsDraw",[n,i]),n.tooltip.transition(i).draw(),t.plugins.notify("afterDraw",[n,i])},getElementAtEvent:function(e){return t.Interaction.modes.single(this,e)},getElementsAtEvent:function(e){return t.Interaction.modes.label(this,e,{intersect:!0})},getElementsAtXAxis:function(e){return t.Interaction.modes["x-axis"](this,e,{intersect:!0})},getElementsAtEventForMode:function(e,n,i){var a=t.Interaction.modes[n];return"function"==typeof a?a(this,e,i):[]},getDatasetAtEvent:function(e){return t.Interaction.modes.dataset(this,e)},getDatasetMeta:function(t){var e=this,n=e.data.datasets[t];n._meta||(n._meta={});var i=n._meta[e.id];return i||(i=n._meta[e.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,n=this.data.datasets.length;n>e;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroy:function(){var e,n,a,r=this,s=r.chart.canvas;for(r.stop(),n=0,a=r.data.datasets.length;a>n;++n)e=r.getDatasetMeta(n),e.controller&&(e.controller.destroy(),e.controller=null);s&&(o.unbindEvents(r,r.events),o.removeResizeListener(s.parentNode),o.clear(r.chart),i(s),r.chart.canvas=null,r.chart.ctx=null),t.plugins.notify("destroy",[r]),delete t.instances[r.id]},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)},initToolTip:function(){var e=this;e.tooltip=new t.Tooltip({_chart:e.chart,_chartInstance:e,_data:e.data,_options:e.options.tooltips},e),e.tooltip.initialize()},bindEvents:function(){var t=this;o.bindEvents(t,t.options.events,function(e){t.eventHandler(e)})},updateHoverStyle:function(t,e,n){var i,a,r,o=n?"setHoverStyle":"removeHoverStyle";for(a=0,r=t.length;r>a;++a)i=t[a],i&&this.getDatasetMeta(i._datasetIndex).controller[o](i)},eventHandler:function(t){var e=this,n=e.legend,i=e.tooltip,a=e.options.hover;e._bufferedRender=!0,e._bufferedRequest=null;var r=e.handleEvent(t);r|=n&&n.handleEvent(t),r|=i&&i.handleEvent(t);var o=e._bufferedRequest;return o?e.render(o.duration,o.lazy):r&&!e.animating&&(e.stop(),e.render(a.animationDuration,!0)),e._bufferedRender=!1,e._bufferedRequest=null,e},handleEvent:function(t){var e=this,n=e.options||{},i=n.hover,a=!1;return e.lastActive=e.lastActive||[],"mouseout"===t.type?e.active=[]:e.active=e.getElementsAtEventForMode(t,i.mode,i),i.onHover&&i.onHover.call(e,e.active),("mouseup"===t.type||"click"===t.type)&&n.onClick&&n.onClick.call(e,t,e.active),e.lastActive.length&&e.updateHoverStyle(e.lastActive,i.mode,!1),e.active.length&&i.mode&&e.updateHoverStyle(e.active,i.mode,!0),a=!o.arrayEquals(e.active,e.lastActive),e.lastActive=e.active,a}})}},{}],18:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return t._chartjs?void t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),void a.forEach(function(e){var n="onData"+e.charAt(0).toUpperCase()+e.slice(1),a=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),r=a.apply(this,e);return i.each(t._chartjs.listeners,function(t){"function"==typeof t[n]&&t[n].apply(t,e)}),r}})}))}function n(t,e){var n=t._chartjs;if(n){var i=n.listeners,r=i.indexOf(e);-1!==r&&i.splice(r,1),i.length>0||(a.forEach(function(e){delete t[e]}),delete t._chartjs)}}var i=t.helpers,a=["push","pop","shift","splice","unshift"];t.DatasetController=function(t,e){this.initialize(t,e)},i.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){var n=this;n.chart=t,n.index=e,n.linkScales(),n.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this,e=t.getMeta(),n=t.getDataset();null===e.xAxisID&&(e.xAxisID=n.xAxisID||t.chart.options.scales.xAxes[0].id),null===e.yAxisID&&(e.yAxisID=n.yAxisID||t.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},destroy:function(){this._data&&n(this._data,this)},createMetaDataset:function(){var t=this,e=t.datasetElementType;return e&&new e({_chart:t.chart.chart,_datasetIndex:t.index})},createMetaData:function(t){var e=this,n=e.dataElementType;return n&&new n({_chart:e.chart.chart,_datasetIndex:e.index,_index:t})},addElements:function(){var t,e,n=this,i=n.getMeta(),a=n.getDataset().data||[],r=i.data;for(t=0,e=a.length;e>t;++t)r[t]=r[t]||n.createMetaData(t);i.dataset=i.dataset||n.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t=this,i=t.getDataset(),a=i.data||(i.data=[]);t._data!==a&&(t._data&&n(t._data,t),e(a,t),t._data=a),t.resyncElements()},update:i.noop,draw:function(t){var e,n,i=t||1,a=this.getMeta().data;for(e=0,n=a.length;n>e;++e)a[e].transition(i).draw()},removeHoverStyle:function(t,e){var n=this.chart.data.datasets[t._datasetIndex],a=t._index,r=t.custom||{},o=i.getValueAtIndexOrDefault,s=t._model;s.backgroundColor=r.backgroundColor?r.backgroundColor:o(n.backgroundColor,a,e.backgroundColor),s.borderColor=r.borderColor?r.borderColor:o(n.borderColor,a,e.borderColor),s.borderWidth=r.borderWidth?r.borderWidth:o(n.borderWidth,a,e.borderWidth)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t._index,a=t.custom||{},r=i.getValueAtIndexOrDefault,o=i.getHoverColor,s=t._model;s.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:r(e.hoverBackgroundColor,n,o(s.backgroundColor)),s.borderColor=a.hoverBorderColor?a.hoverBorderColor:r(e.hoverBorderColor,n,o(s.borderColor)),s.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:r(e.hoverBorderWidth,n,s.borderWidth)},resyncElements:function(){var t=this,e=t.getMeta(),n=t.getDataset().data,i=e.data.length,a=n.length;i>a?e.data.splice(a,i-a):a>i&&t.insertElements(i,a-i)},insertElements:function(t,e){for(var n=0;e>n;++n)this.addElementAndReset(t+n)},onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),t.DatasetController.extend=i.inherits}},{}],19:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.elements={},t.Element=function(t){e.extend(this,t),this.initialize.apply(this,arguments)},e.extend(t.Element.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=e.clone(t._model)),t._start=e.clone(t._view),t},transition:function(t){var n=this;return n._view||(n._view=e.clone(n._model)),1===t?(n._view=n._model,n._start=null,n):(n._start||n.pivot(),e.each(n._model,function(i,a){if("_"===a[0]);else if(n._view.hasOwnProperty(a))if(i===n._view[a]);else if("string"==typeof i)try{var r=e.color(n._model[a]).mix(e.color(n._start[a]),t);n._view[a]=r.rgbString()}catch(o){n._view[a]=i}else if("number"==typeof i){var s=void 0!==n._start[a]&&isNaN(n._start[a])===!1?n._start[a]:0;n._view[a]=(n._model[a]-s)*t+s}else n._view[a]=i;else"number"!=typeof i||isNaN(n._view[a])?n._view[a]=i:n._view[a]=i*t},n),n)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return e.isNumber(this._model.x)&&e.isNumber(this._model.y)}}),t.Element.extend=e.inherits}},{}],20:[function(t,e,n){"use strict";var i=t(42);e.exports=function(t){function e(t,e,n){var i;return"string"==typeof t?(i=parseInt(t,10),-1!==t.indexOf("%")&&(i=i/100*e.parentNode[n])):i=t,i}function n(t){return void 0!==t&&null!==t&&"none"!==t}function a(t,i,a){var r=document.defaultView,o=t.parentNode,s=r.getComputedStyle(t)[i],l=r.getComputedStyle(o)[i],u=n(s),d=n(l),c=Number.POSITIVE_INFINITY;return u||d?Math.min(u?e(s,t,a):c,d?e(l,o,a):c):"none"}var r=t.helpers={};r.each=function(t,e,n,i){var a,o;if(r.isArray(t))if(o=t.length,i)for(a=o-1;a>=0;a--)e.call(n,t[a],a);else for(a=0;o>a;a++)e.call(n,t[a],a);else if("object"==typeof t){var s=Object.keys(t);for(o=s.length,a=0;o>a;a++)e.call(n,t[s[a]],s[a])}},r.clone=function(t){var e={};return r.each(t,function(t,n){r.isArray(t)?e[n]=t.slice(0):"object"==typeof t&&null!==t?e[n]=r.clone(t):e[n]=t}),e},r.extend=function(t){for(var e=function(e,n){t[n]=e},n=1,i=arguments.length;i>n;n++)r.each(arguments[n],e);return t},r.configMerge=function(e){var n=r.clone(e);return r.each(Array.prototype.slice.call(arguments,1),function(e){r.each(e,function(e,i){var a=n.hasOwnProperty(i),o=a?n[i]:{};"scales"===i?n[i]=r.scaleMerge(o,e):"scale"===i?n[i]=r.configMerge(o,t.scaleService.getScaleDefaults(e.type),e):!a||"object"!=typeof o||r.isArray(o)||null===o||"object"!=typeof e||r.isArray(e)?n[i]=e:n[i]=r.configMerge(o,e)})}),n},r.scaleMerge=function(e,n){var i=r.clone(e);return r.each(n,function(e,n){"xAxes"===n||"yAxes"===n?i.hasOwnProperty(n)?r.each(e,function(e,a){var o=r.getValueOrDefault(e.type,"xAxes"===n?"category":"linear"),s=t.scaleService.getScaleDefaults(o);a>=i[n].length||!i[n][a].type?i[n].push(r.configMerge(s,e)):e.type&&e.type!==i[n][a].type?i[n][a]=r.configMerge(i[n][a],s,e):i[n][a]=r.configMerge(i[n][a],e)}):(i[n]=[],r.each(e,function(e){var a=r.getValueOrDefault(e.type,"xAxes"===n?"category":"linear");i[n].push(r.configMerge(t.scaleService.getScaleDefaults(a),e))})):i.hasOwnProperty(n)&&"object"==typeof i[n]&&null!==i[n]&&"object"==typeof e?i[n]=r.configMerge(i[n],e):i[n]=e}),i},r.getValueAtIndexOrDefault=function(t,e,n){return void 0===t||null===t?n:r.isArray(t)?e<t.length?t[e]:n:t},r.getValueOrDefault=function(t,e){return void 0===t?e:t},r.indexOf=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var n=0,i=t.length;i>n;++n)if(t[n]===e)return n;return-1},r.where=function(t,e){if(r.isArray(t)&&Array.prototype.filter)return t.filter(e);var n=[];return r.each(t,function(t){e(t)&&n.push(t)}),n},r.findIndex=Array.prototype.findIndex?function(t,e,n){return t.findIndex(e,n)}:function(t,e,n){n=void 0===n?t:n;for(var i=0,a=t.length;a>i;++i)if(e.call(n,t[i],i,t))return i;return-1},r.findNextWhere=function(t,e,n){(void 0===n||null===n)&&(n=-1);for(var i=n+1;i<t.length;i++){var a=t[i];if(e(a))return a}},r.findPreviousWhere=function(t,e,n){(void 0===n||null===n)&&(n=t.length);for(var i=n-1;i>=0;i--){var a=t[i];if(e(a))return a}},r.inherits=function(t){var e=this,n=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},i=function(){this.constructor=n};return i.prototype=e.prototype,n.prototype=new i,n.extend=r.inherits,t&&r.extend(n.prototype,t),n.__super__=e.prototype,n},r.noop=function(){},r.uid=function(){var t=0;return function(){return t++}}(),r.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},r.almostEquals=function(t,e,n){return Math.abs(t-e)<n},r.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},r.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},r.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return t=+t,0===t||isNaN(t)?t:t>0?1:-1},r.log10=Math.log10?function(t){return Math.log10(t)}:function(t){return Math.log(t)/Math.LN10},r.toRadians=function(t){return t*(Math.PI/180)},r.toDegrees=function(t){return t*(180/Math.PI)},r.getAngleFromPoint=function(t,e){var n=e.x-t.x,i=e.y-t.y,a=Math.sqrt(n*n+i*i),r=Math.atan2(i,n);return r<-.5*Math.PI&&(r+=2*Math.PI),{angle:r,distance:a}},r.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},r.aliasPixel=function(t){return t%2===0?0:.5},r.splineCurve=function(t,e,n,i){var a=t.skip?e:t,r=e,o=n.skip?e:n,s=Math.sqrt(Math.pow(r.x-a.x,2)+Math.pow(r.y-a.y,2)),l=Math.sqrt(Math.pow(o.x-r.x,2)+Math.pow(o.y-r.y,2)),u=s/(s+l),d=l/(s+l);u=isNaN(u)?0:u,d=isNaN(d)?0:d;var c=i*u,h=i*d;return{previous:{x:r.x-c*(o.x-a.x),y:r.y-c*(o.y-a.y)},next:{x:r.x+h*(o.x-a.x),y:r.y+h*(o.y-a.y)}}},r.EPSILON=Number.EPSILON||1e-14,r.splineCurveMonotone=function(t){var e,n,i,a,o=(t||[]).map(function(t){return{model:t._model,deltaK:0,mK:0}}),s=o.length;for(e=0;s>e;++e)i=o[e],i.model.skip||(n=e>0?o[e-1]:null,a=s-1>e?o[e+1]:null,a&&!a.model.skip&&(i.deltaK=(a.model.y-i.model.y)/(a.model.x-i.model.x)),!n||n.model.skip?i.mK=i.deltaK:!a||a.model.skip?i.mK=n.deltaK:this.sign(n.deltaK)!==this.sign(i.deltaK)?i.mK=0:i.mK=(n.deltaK+i.deltaK)/2);var l,u,d,c;for(e=0;s-1>e;++e)i=o[e],a=o[e+1],i.model.skip||a.model.skip||(r.almostEquals(i.deltaK,0,this.EPSILON)?i.mK=a.mK=0:(l=i.mK/i.deltaK,u=a.mK/i.deltaK,c=Math.pow(l,2)+Math.pow(u,2),9>=c||(d=3/Math.sqrt(c),i.mK=l*d*i.deltaK,a.mK=u*d*i.deltaK)));var h;for(e=0;s>e;++e)i=o[e],i.model.skip||(n=e>0?o[e-1]:null,a=s-1>e?o[e+1]:null,n&&!n.model.skip&&(h=(i.model.x-n.model.x)/3,i.model.controlPointPreviousX=i.model.x-h,i.model.controlPointPreviousY=i.model.y-h*i.mK),a&&!a.model.skip&&(h=(a.model.x-i.model.x)/3,i.model.controlPointNextX=i.model.x+h,i.model.controlPointNextY=i.model.y+h*i.mK))},r.nextItem=function(t,e,n){return n?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},r.previousItem=function(t,e,n){return n?0>=e?t[t.length-1]:t[e-1]:0>=e?t[0]:t[e-1]},r.niceNum=function(t,e){var n,i=Math.floor(r.log10(t)),a=t/Math.pow(10,i);return n=e?1.5>a?1:3>a?2:7>a?5:10:1>=a?1:2>=a?2:5>=a?5:10,n*Math.pow(10,i)};var o=r.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-0.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-0.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-0.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===(t/=1)?1:(n||(n=.3),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),-(i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)))},easeOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===(t/=1)?1:(n||(n=.3),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),i*Math.pow(2,-10*t)*Math.sin((1*t-e)*(2*Math.PI)/n)+1)},easeInOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:2===(t/=.5)?1:(n||(n=1*(.3*1.5)),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),1>t?-.5*(i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)):i*Math.pow(2,-10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)*.5+1)},easeInBack:function(t){var e=1.70158;return 1*(t/=1)*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return 1*((t=t/1-1)*t*((e+1)*t+e)+1)},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:function(t){return 1-o.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?1*(7.5625*t*t):2/2.75>t?1*(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return.5>t?.5*o.easeInBounce(2*t):.5*o.easeOutBounce(2*t-1)+.5}};r.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),r.getRelativePosition=function(t,e){var n,i,a=t.originalEvent||t,o=t.currentTarget||t.srcElement,s=o.getBoundingClientRect(),l=a.touches;l&&l.length>0?(n=l[0].clientX,i=l[0].clientY):(n=a.clientX,i=a.clientY);var u=parseFloat(r.getStyle(o,"padding-left")),d=parseFloat(r.getStyle(o,"padding-top")),c=parseFloat(r.getStyle(o,"padding-right")),h=parseFloat(r.getStyle(o,"padding-bottom")),f=s.right-s.left-u-c,g=s.bottom-s.top-d-h;return n=Math.round((n-s.left-u)/f*o.width/e.currentDevicePixelRatio),i=Math.round((i-s.top-d)/g*o.height/e.currentDevicePixelRatio),{x:n,y:i}},r.addEvent=function(t,e,n){t.addEventListener?t.addEventListener(e,n):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n},r.removeEvent=function(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=r.noop},r.bindEvents=function(t,e,n){var i=t.events=t.events||{};r.each(e,function(e){i[e]=function(){n.apply(t,arguments)},r.addEvent(t.chart.canvas,e,i[e])})},r.unbindEvents=function(t,e){var n=t.chart.canvas;r.each(e,function(t,e){r.removeEvent(n,e,t)})},r.getConstraintWidth=function(t){return a(t,"max-width","clientWidth")},r.getConstraintHeight=function(t){return a(t,"max-height","clientHeight")},r.getMaximumWidth=function(t){var e=t.parentNode,n=parseInt(r.getStyle(e,"padding-left"),10),i=parseInt(r.getStyle(e,"padding-right"),10),a=e.clientWidth-n-i,o=r.getConstraintWidth(t);return isNaN(o)?a:Math.min(a,o)},r.getMaximumHeight=function(t){var e=t.parentNode,n=parseInt(r.getStyle(e,"padding-top"),10),i=parseInt(r.getStyle(e,"padding-bottom"),10),a=e.clientHeight-n-i,o=r.getConstraintHeight(t);return isNaN(o)?a:Math.min(a,o)},r.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},r.retinaScale=function(t){var e=t.currentDevicePixelRatio=window.devicePixelRatio||1;if(1!==e){var n=t.canvas,i=t.height,a=t.width;n.height=i*e,n.width=a*e,t.ctx.scale(e,e),n.style.height=i+"px",n.style.width=a+"px"}},r.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},r.fontString=function(t,e,n){return e+" "+t+"px "+n},r.longestText=function(t,e,n,i){i=i||{};var a=i.data=i.data||{},o=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(a=i.data={},o=i.garbageCollect=[],i.font=e),t.font=e;var s=0;r.each(n,function(e){void 0!==e&&null!==e&&r.isArray(e)!==!0?s=r.measureText(t,a,o,s,e):r.isArray(e)&&r.each(e,function(e){void 0===e||null===e||r.isArray(e)||(s=r.measureText(t,a,o,s,e))})});var l=o.length/2;if(l>n.length){for(var u=0;l>u;u++)delete a[o[u]];o.splice(0,l)}return s},r.measureText=function(t,e,n,i,a){var r=e[a];return r||(r=e[a]=t.measureText(a).width,n.push(a)),r>i&&(i=r),i},r.numberOfLabelLines=function(t){var e=1;return r.each(t,function(t){r.isArray(t)&&t.length>e&&(e=t.length)}),e},r.drawRoundedRectangle=function(t,e,n,i,a,r){t.beginPath(),t.moveTo(e+r,n),t.lineTo(e+i-r,n),t.quadraticCurveTo(e+i,n,e+i,n+r),t.lineTo(e+i,n+a-r),t.quadraticCurveTo(e+i,n+a,e+i-r,n+a),t.lineTo(e+r,n+a),t.quadraticCurveTo(e,n+a,e,n+a-r),t.lineTo(e,n+r),t.quadraticCurveTo(e,n,e+r,n),t.closePath()},r.color=function(e){return i?i(e instanceof CanvasGradient?t.defaults.global.defaultColor:e):(console.error("Color.js not found!"),e)},r.addResizeListener=function(t,e){var n=document.createElement("iframe");n.className="chartjs-hidden-iframe",n.style.cssText="display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;",n.tabIndex=-1;var i=t._chartjs={resizer:n,ticking:!1},a=function(){i.ticking||(i.ticking=!0,r.requestAnimFrame.call(window,function(){return i.resizer?(i.ticking=!1,e()):void 0}))};r.addEvent(n,"load",function(){r.addEvent(n.contentWindow||n,"resize",a),a()}),t.insertBefore(n,t.firstChild)},r.removeResizeListener=function(t){if(t&&t._chartjs){var e=t._chartjs.resizer;e&&(e.parentNode.removeChild(e),t._chartjs.resizer=null),delete t._chartjs}},r.isArray=Array.isArray?function(t){return Array.isArray(t)}:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r.arrayEquals=function(t,e){var n,i,a,o;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;i>n;++n)if(a=t[n],o=e[n],a instanceof Array&&o instanceof Array){if(!r.arrayEquals(a,o))return!1}else if(a!==o)return!1;return!0},r.callCallback=function(t,e,n){t&&"function"==typeof t.call&&t.apply(n,e)},r.getHoverColor=function(t){return t instanceof CanvasPattern?t:r.color(t).saturate(.5).darken(.1).rgbString()}}},{42:42}],21:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){var n,i,a,r,o,s=t.data.datasets;for(i=0,r=s.length;r>i;++i)if(t.isDatasetVisible(i))for(n=t.getDatasetMeta(i),a=0,o=n.data.length;o>a;++a){var l=n.data[a];l._view.skip||e(l)}}function n(t,n){var i=[];return e(t,function(t){t.inRange(n.x,n.y)&&i.push(t)}),i}function i(t,n,i,a){var o=Number.POSITIVE_INFINITY,s=[];return a||(a=r.distanceBetweenPoints),e(t,function(t){if(!i||t.inRange(n.x,n.y)){var e=t.getCenterPoint(),r=a(n,e);o>r?(s=[t],o=r):r===o&&s.push(t)}}),s}function a(t,e,a){var o=r.getRelativePosition(e,t.chart),s=function(t,e){return Math.abs(t.x-e.x)},l=a.intersect?n(t,o):i(t,o,!1,s),u=[];return l.length?(t.data.datasets.forEach(function(e,n){if(t.isDatasetVisible(n)){var i=t.getDatasetMeta(n),a=i.data[l[0]._index];a&&!a._view.skip&&u.push(a)}}),u):[]}var r=t.helpers;t.Interaction={modes:{single:function(t,n){var i=r.getRelativePosition(n,t.chart),a=[];return e(t,function(t){return t.inRange(i.x,i.y)?(a.push(t),a):void 0}),a.slice(0,1)},label:a,index:a,dataset:function(t,e,a){var o=r.getRelativePosition(e,t.chart),s=a.intersect?n(t,o):i(t,o,!1);return s.length>0&&(s=t.getDatasetMeta(s[0]._datasetIndex).data),s},"x-axis":function(t,e){return a(t,e,!0)},point:function(t,e){var i=r.getRelativePosition(e,t.chart);return n(t,i)},nearest:function(t,e,n){var a=r.getRelativePosition(e,t.chart),o=i(t,a,n.intersect);return o.length>1&&o.sort(function(t,e){var n=t.getArea(),i=e.getArea(),a=n-i;return 0===a&&(a=t._datasetIndex-e._datasetIndex),a}),o.slice(0,1)},x:function(t,n,i){var a=r.getRelativePosition(n,t.chart),o=[],s=!1;return e(t,function(t){t.inXRange(a.x)&&o.push(t),t.inRange(a.x,a.y)&&(s=!0)}),i.intersect&&!s&&(o=[]),o},y:function(t,n,i){var a=r.getRelativePosition(n,t.chart),o=[],s=!1;return e(t,function(t){t.inYRange(a.y)&&o.push(t),t.inRange(a.x,a.y)&&(s=!0)}),i.intersect&&!s&&(o=[]),o}}}}},{}],22:[function(t,e,n){"use strict";e.exports=function(){var t=function(e,n){return this.controller=new t.Controller(e,n,this),
this.controller};return t.defaults={global:{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var n=0;n<t.data.datasets.length;n++)e.push('<li><span style="background-color:'+t.data.datasets[n].backgroundColor+'"></span>'),t.data.datasets[n].label&&e.push(t.data.datasets[n].label),e.push("</li>");return e.push("</ul>"),e.join("")}}},t.Chart=t,t}},{}],23:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.layoutService={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),t.boxes.push(e)},removeBox:function(t,e){t.boxes&&t.boxes.splice(t.boxes.indexOf(e),1)},update:function(t,n,i){function a(t){var e,n=t.isHorizontal();n?(e=t.update(t.options.fullWidth?y:M,S),D-=e.height):(e=t.update(w,_),M-=e.width),C.push({horizontal:n,minSize:e,box:t})}function r(t){var n=e.findNextWhere(C,function(e){return e.box===t});if(n)if(t.isHorizontal()){var i={left:T,right:P,top:0,bottom:0};t.update(t.options.fullWidth?y:M,x/2,i)}else t.update(n.minSize.width,D)}function o(t){var n=e.findNextWhere(C,function(e){return e.box===t}),i={left:0,right:0,top:I,bottom:F};n&&t.update(n.minSize.width,D,i)}function s(t){t.isHorizontal()?(t.left=t.options.fullWidth?d:T,t.right=t.options.fullWidth?n-c:T+M,t.top=L,t.bottom=L+t.height,L=t.bottom):(t.left=R,t.right=R+t.width,t.top=I,t.bottom=I+D,R=t.right)}if(t){var l=t.options.layout,u=l?l.padding:null,d=0,c=0,h=0,f=0;isNaN(u)?(d=u.left||0,c=u.right||0,h=u.top||0,f=u.bottom||0):(d=u,c=u,h=u,f=u);var g=e.where(t.boxes,function(t){return"left"===t.options.position}),m=e.where(t.boxes,function(t){return"right"===t.options.position}),p=e.where(t.boxes,function(t){return"top"===t.options.position}),v=e.where(t.boxes,function(t){return"bottom"===t.options.position}),b=e.where(t.boxes,function(t){return"chartArea"===t.options.position});p.sort(function(t,e){return(e.options.fullWidth?1:0)-(t.options.fullWidth?1:0)}),v.sort(function(t,e){return(t.options.fullWidth?1:0)-(e.options.fullWidth?1:0)});var y=n-d-c,x=i-h-f,k=y/2,_=x/2,w=(n-k)/(g.length+m.length),S=(i-_)/(p.length+v.length),M=y,D=x,C=[];e.each(g.concat(m,p,v),a);var T=d,P=c,I=h,F=f;e.each(g.concat(m),r),e.each(g,function(t){T+=t.width}),e.each(m,function(t){P+=t.width}),e.each(p.concat(v),r),e.each(p,function(t){I+=t.height}),e.each(v,function(t){F+=t.height}),e.each(g.concat(m),o),T=d,P=c,I=h,F=f,e.each(g,function(t){T+=t.width}),e.each(m,function(t){P+=t.width}),e.each(p,function(t){I+=t.height}),e.each(v,function(t){F+=t.height});var A=i-I-F,O=n-T-P;(O!==M||A!==D)&&(e.each(g,function(t){t.height=A}),e.each(m,function(t){t.height=A}),e.each(p,function(t){t.options.fullWidth||(t.width=O)}),e.each(v,function(t){t.options.fullWidth||(t.width=O)}),D=A,M=O);var R=d,L=h;e.each(g.concat(p),s),R+=M,L+=D,e.each(m,s),e.each(v,s),t.chartArea={left:T,top:I,right:T+M,bottom:I+D},e.each(b,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(M,D)})}}}}},{}],24:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return t.usePointStyle?e*Math.SQRT2:t.boxWidth}var n=t.helpers,i=n.noop;t.defaults.global.legend={display:!0,position:"top",fullWidth:!0,reverse:!1,onClick:function(t,e){var n=e.datasetIndex,i=this.chart,a=i.getDatasetMeta(n);a.hidden=null===a.hidden?!i.data.datasets[n].hidden:null,i.update()},onHover:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data;return n.isArray(e.datasets)?e.datasets.map(function(e,i){return{text:e.label,fillStyle:n.isArray(e.backgroundColor)?e.backgroundColor[0]:e.backgroundColor,hidden:!t.isDatasetVisible(i),lineCap:e.borderCapStyle,lineDash:e.borderDash,lineDashOffset:e.borderDashOffset,lineJoin:e.borderJoinStyle,lineWidth:e.borderWidth,strokeStyle:e.borderColor,pointStyle:e.pointStyle,datasetIndex:i}},this):[]}}},t.Legend=t.Element.extend({initialize:function(t){n.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:i,update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:i,beforeSetDimensions:i,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:i,beforeBuildLabels:i,buildLabels:function(){var t=this,e=t.options.labels,n=e.generateLabels.call(t,t.chart);e.filter&&(n=n.filter(function(n){return e.filter(n,t.chart.data)})),t.options.reverse&&n.reverse(),t.legendItems=n},afterBuildLabels:i,beforeFit:i,fit:function(){var i=this,a=i.options,r=a.labels,o=a.display,s=i.ctx,l=t.defaults.global,u=n.getValueOrDefault,d=u(r.fontSize,l.defaultFontSize),c=u(r.fontStyle,l.defaultFontStyle),h=u(r.fontFamily,l.defaultFontFamily),f=n.fontString(d,c,h),g=i.legendHitBoxes=[],m=i.minSize,p=i.isHorizontal();if(p?(m.width=i.maxWidth,m.height=o?10:0):(m.width=o?10:0,m.height=i.maxHeight),o)if(s.font=f,p){var v=i.lineWidths=[0],b=i.legendItems.length?d+r.padding:0;s.textAlign="left",s.textBaseline="top",n.each(i.legendItems,function(t,n){var a=e(r,d),o=a+d/2+s.measureText(t.text).width;v[v.length-1]+o+r.padding>=i.width&&(b+=d+r.padding,v[v.length]=i.left),g[n]={left:0,top:0,width:o,height:d},v[v.length-1]+=o+r.padding}),m.height+=b}else{var y=r.padding,x=i.columnWidths=[],k=r.padding,_=0,w=0,S=d+y;n.each(i.legendItems,function(t,n){var i=e(r,d),a=i+d/2+s.measureText(t.text).width;w+S>m.height&&(k+=_+r.padding,x.push(_),_=0,w=0),_=Math.max(_,a),w+=S,g[n]={left:0,top:0,width:a,height:d}}),k+=_,x.push(_),m.width+=k}i.width=m.width,i.height=m.height},afterFit:i,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var i=this,a=i.options,r=a.labels,o=t.defaults.global,s=o.elements.line,l=i.width,u=i.lineWidths;if(a.display){var d,c=i.ctx,h=n.getValueOrDefault,f=h(r.fontColor,o.defaultFontColor),g=h(r.fontSize,o.defaultFontSize),m=h(r.fontStyle,o.defaultFontStyle),p=h(r.fontFamily,o.defaultFontFamily),v=n.fontString(g,m,p);c.textAlign="left",c.textBaseline="top",c.lineWidth=.5,c.strokeStyle=f,c.fillStyle=f,c.font=v;var b=e(r,g),y=i.legendHitBoxes,x=function(e,n,i){if(!(isNaN(b)||0>=b)){c.save(),c.fillStyle=h(i.fillStyle,o.defaultColor),c.lineCap=h(i.lineCap,s.borderCapStyle),c.lineDashOffset=h(i.lineDashOffset,s.borderDashOffset),c.lineJoin=h(i.lineJoin,s.borderJoinStyle),c.lineWidth=h(i.lineWidth,s.borderWidth),c.strokeStyle=h(i.strokeStyle,o.defaultColor);var r=0===h(i.lineWidth,s.borderWidth);if(c.setLineDash&&c.setLineDash(h(i.lineDash,s.borderDash)),a.labels&&a.labels.usePointStyle){var l=g*Math.SQRT2/2,u=l/Math.SQRT2,d=e+u,f=n+u;t.canvasHelpers.drawPoint(c,i.pointStyle,l,d,f)}else r||c.strokeRect(e,n,b,g),c.fillRect(e,n,b,g);c.restore()}},k=function(t,e,n,i){c.fillText(n.text,b+g/2+t,e),n.hidden&&(c.beginPath(),c.lineWidth=2,c.moveTo(b+g/2+t,e+g/2),c.lineTo(b+g/2+t+i,e+g/2),c.stroke())},_=i.isHorizontal();d=_?{x:i.left+(l-u[0])/2,y:i.top+r.padding,line:0}:{x:i.left+r.padding,y:i.top+r.padding,line:0};var w=g+r.padding;n.each(i.legendItems,function(t,e){var n=c.measureText(t.text).width,a=b+g/2+n,o=d.x,s=d.y;_?o+a>=l&&(s=d.y+=w,d.line++,o=d.x=i.left+(l-u[d.line])/2):s+w>i.bottom&&(o=d.x=o+i.columnWidths[d.line]+r.padding,s=d.y=i.top,d.line++),x(o,s,t),y[e].left=o,y[e].top=s,k(o,s,t,n),_?d.x+=a+r.padding:d.y+=w})}},handleEvent:function(t){var e=this,i=e.options,a="mouseup"===t.type?"click":t.type,r=!1;if("mousemove"===a){if(!i.onHover)return}else{if("click"!==a)return;if(!i.onClick)return}var o=n.getRelativePosition(t,e.chart.chart),s=o.x,l=o.y;if(s>=e.left&&s<=e.right&&l>=e.top&&l<=e.bottom)for(var u=e.legendHitBoxes,d=0;d<u.length;++d){var c=u[d];if(s>=c.left&&s<=c.left+c.width&&l>=c.top&&l<=c.top+c.height){if("click"===a){i.onClick.call(e,t,e.legendItems[d]),r=!0;break}if("mousemove"===a){i.onHover.call(e,t,e.legendItems[d]),r=!0;break}}}return r}}),t.plugins.register({beforeInit:function(e){var n=e.options,i=n.legend;i&&(e.legend=new t.Legend({ctx:e.chart.ctx,options:i,chart:e}),t.layoutService.addBox(e,e.legend))}})}},{}],25:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers.noop;t.plugins={_plugins:[],register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){-1===e.indexOf(t)&&e.push(t)})},unregister:function(t){var e=this._plugins;[].concat(t).forEach(function(t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)})},clear:function(){this._plugins=[]},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e){var n,i,a=this._plugins,r=a.length;for(n=0;r>n;++n)if(i=a[n],"function"==typeof i[t]&&i[t].apply(i,e||[])===!1)return!1;return!0}},t.PluginBase=t.Element.extend({beforeInit:e,afterInit:e,beforeUpdate:e,afterUpdate:e,beforeDraw:e,afterDraw:e,destroy:e}),t.pluginService=t.plugins}},{}],26:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.scale={display:!0,position:"left",gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{labelString:"",display:!1},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:10,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:t.Ticks.formatters.values}},t.Scale=t.Element.extend({beforeUpdate:function(){e.callCallback(this.options.beforeUpdate,[this])},update:function(t,n,i){var a=this;return a.beforeUpdate(),a.maxWidth=t,a.maxHeight=n,a.margins=e.extend({left:0,right:0,top:0,bottom:0},i),a.beforeSetDimensions(),a.setDimensions(),a.afterSetDimensions(),a.beforeDataLimits(),a.determineDataLimits(),a.afterDataLimits(),a.beforeBuildTicks(),a.buildTicks(),a.afterBuildTicks(),a.beforeTickToLabelConversion(),a.convertTicksToLabels(),a.afterTickToLabelConversion(),a.beforeCalculateTickRotation(),a.calculateTickRotation(),a.afterCalculateTickRotation(),a.beforeFit(),a.fit(),a.afterFit(),a.afterUpdate(),a.minSize},afterUpdate:function(){e.callCallback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){e.callCallback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){e.callCallback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){e.callCallback(this.options.beforeDataLimits,[this])},determineDataLimits:e.noop,afterDataLimits:function(){e.callCallback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){e.callCallback(this.options.beforeBuildTicks,[this])},buildTicks:e.noop,afterBuildTicks:function(){e.callCallback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){e.callCallback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this,e=t.options.ticks;t.ticks=t.ticks.map(e.userCallback||e.callback)},afterTickToLabelConversion:function(){e.callCallback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){e.callCallback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var n=this,i=n.ctx,a=t.defaults.global,r=n.options.ticks,o=e.getValueOrDefault(r.fontSize,a.defaultFontSize),s=e.getValueOrDefault(r.fontStyle,a.defaultFontStyle),l=e.getValueOrDefault(r.fontFamily,a.defaultFontFamily),u=e.fontString(o,s,l);i.font=u;var d,c=i.measureText(n.ticks[0]).width,h=i.measureText(n.ticks[n.ticks.length-1]).width;if(n.labelRotation=r.minRotation||0,n.paddingRight=0,n.paddingLeft=0,n.options.display&&n.isHorizontal()){n.paddingRight=h/2+3,n.paddingLeft=c/2+3,n.longestTextCache||(n.longestTextCache={});for(var f,g,m=e.longestText(i,u,n.ticks,n.longestTextCache),p=m,v=n.getPixelForTick(1)-n.getPixelForTick(0)-6;p>v&&n.labelRotation<r.maxRotation;){if(f=Math.cos(e.toRadians(n.labelRotation)),g=Math.sin(e.toRadians(n.labelRotation)),d=f*c,d+o/2>n.yLabelWidth&&(n.paddingLeft=d+o/2),n.paddingRight=o/2,g*m>n.maxHeight){n.labelRotation--;break}n.labelRotation++,p=f*m}}n.margins&&(n.paddingLeft=Math.max(n.paddingLeft-n.margins.left,0),n.paddingRight=Math.max(n.paddingRight-n.margins.right,0))},afterCalculateTickRotation:function(){e.callCallback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){e.callCallback(this.options.beforeFit,[this])},fit:function(){var n=this,i=n.minSize={width:0,height:0},a=n.options,r=t.defaults.global,o=a.ticks,s=a.scaleLabel,l=a.gridLines,u=a.display,d=n.isHorizontal(),c=e.getValueOrDefault(o.fontSize,r.defaultFontSize),h=e.getValueOrDefault(o.fontStyle,r.defaultFontStyle),f=e.getValueOrDefault(o.fontFamily,r.defaultFontFamily),g=e.fontString(c,h,f),m=e.getValueOrDefault(s.fontSize,r.defaultFontSize),p=a.gridLines.tickMarkLength;if(d?i.width=n.isFullWidth()?n.maxWidth-n.margins.left-n.margins.right:n.maxWidth:i.width=u&&l.drawTicks?p:0,d?i.height=u&&l.drawTicks?p:0:i.height=n.maxHeight,s.display&&u&&(d?i.height+=1.5*m:i.width+=1.5*m),o.display&&u){n.longestTextCache||(n.longestTextCache={});var v=e.longestText(n.ctx,g,n.ticks,n.longestTextCache),b=e.numberOfLabelLines(n.ticks),y=.5*c;if(d){n.longestLabelWidth=v;var x=Math.sin(e.toRadians(n.labelRotation))*n.longestLabelWidth+c*b+y*b;i.height=Math.min(n.maxHeight,i.height+x),n.ctx.font=g;var k=n.ctx.measureText(n.ticks[0]).width,_=n.ctx.measureText(n.ticks[n.ticks.length-1]).width,w=Math.cos(e.toRadians(n.labelRotation)),S=Math.sin(e.toRadians(n.labelRotation));n.paddingLeft=0!==n.labelRotation?w*k+3:k/2+3,n.paddingRight=0!==n.labelRotation?S*(c/2)+3:_/2+3}else{var M=n.maxWidth-i.width,D=o.mirror;D?v=0:v+=n.options.ticks.padding,M>v?i.width+=v:i.width=n.maxWidth,n.paddingTop=c/2,n.paddingBottom=c/2}}n.margins&&(n.paddingLeft=Math.max(n.paddingLeft-n.margins.left,0),n.paddingTop=Math.max(n.paddingTop-n.margins.top,0),n.paddingRight=Math.max(n.paddingRight-n.margins.right,0),n.paddingBottom=Math.max(n.paddingBottom-n.margins.bottom,0)),n.width=i.width,n.height=i.height},afterFit:function(){e.callCallback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){return null===t||"undefined"==typeof t?NaN:"number"!=typeof t||isFinite(t)?"object"==typeof t?t instanceof Date||t.isValid?t:this.getRightValue(this.isHorizontal()?t.x:t.y):t:NaN},getLabelForIndex:e.noop,getPixelForValue:e.noop,getValueForPixel:e.noop,getPixelForTick:function(t,e){var n=this;if(n.isHorizontal()){var i=n.width-(n.paddingLeft+n.paddingRight),a=i/Math.max(n.ticks.length-(n.options.gridLines.offsetGridLines?0:1),1),r=a*t+n.paddingLeft;e&&(r+=a/2);var o=n.left+Math.round(r);return o+=n.isFullWidth()?n.margins.left:0}var s=n.height-(n.paddingTop+n.paddingBottom);return n.top+t*(s/(n.ticks.length-1))},getPixelForDecimal:function(t){var e=this;if(e.isHorizontal()){var n=e.width-(e.paddingLeft+e.paddingRight),i=n*t+e.paddingLeft,a=e.left+Math.round(i);return a+=e.isFullWidth()?e.margins.left:0}return e.top+t*e.height},getBasePixel:function(){var t=this,e=t.min,n=t.max;return t.getPixelForValue(t.beginAtZero?0:0>e&&0>n?n:e>0&&n>0?e:0)},draw:function(n){var i=this,a=i.options;if(a.display){var r,o,s=i.ctx,l=t.defaults.global,u=a.ticks,d=a.gridLines,c=a.scaleLabel,h=0!==i.labelRotation,f=u.autoSkip,g=i.isHorizontal();u.maxTicksLimit&&(o=u.maxTicksLimit);var m=e.getValueOrDefault(u.fontColor,l.defaultFontColor),p=e.getValueOrDefault(u.fontSize,l.defaultFontSize),v=e.getValueOrDefault(u.fontStyle,l.defaultFontStyle),b=e.getValueOrDefault(u.fontFamily,l.defaultFontFamily),y=e.fontString(p,v,b),x=d.tickMarkLength,k=e.getValueOrDefault(d.borderDash,l.borderDash),_=e.getValueOrDefault(d.borderDashOffset,l.borderDashOffset),w=e.getValueOrDefault(c.fontColor,l.defaultFontColor),S=e.getValueOrDefault(c.fontSize,l.defaultFontSize),M=e.getValueOrDefault(c.fontStyle,l.defaultFontStyle),D=e.getValueOrDefault(c.fontFamily,l.defaultFontFamily),C=e.fontString(S,M,D),T=e.toRadians(i.labelRotation),P=Math.cos(T),I=i.longestLabelWidth*P;s.fillStyle=m;var F=[];if(g){if(r=!1,h&&(I/=2),(I+u.autoSkipPadding)*i.ticks.length>i.width-(i.paddingLeft+i.paddingRight)&&(r=1+Math.floor((I+u.autoSkipPadding)*i.ticks.length/(i.width-(i.paddingLeft+i.paddingRight)))),o&&i.ticks.length>o)for(;!r||i.ticks.length/(r||1)>o;)r||(r=1),r+=1;f||(r=!1)}var A="right"===a.position?i.left:i.right-x,O="right"===a.position?i.left+x:i.right,R="bottom"===a.position?i.top:i.bottom-x,L="bottom"===a.position?i.top+x:i.bottom;if(e.each(i.ticks,function(t,o){if(void 0!==t&&null!==t){var s=i.ticks.length===o+1,l=r>1&&o%r>0||o%r===0&&o+r>=i.ticks.length;if((!l||s)&&void 0!==t&&null!==t){var c,f;o===("undefined"!=typeof i.zeroLineIndex?i.zeroLineIndex:0)?(c=d.zeroLineWidth,f=d.zeroLineColor):(c=e.getValueAtIndexOrDefault(d.lineWidth,o),f=e.getValueAtIndexOrDefault(d.color,o));var m,p,v,b,y,w,S,M,D,C,P="middle",I="middle";if(g){h||(I="top"===a.position?"bottom":"top"),P=h?"right":"center";var W=i.getPixelForTick(o)+e.aliasPixel(c);D=i.getPixelForTick(o,d.offsetGridLines)+u.labelOffset,C=h?i.top+12:"top"===a.position?i.bottom-x:i.top+x,m=v=y=S=W,p=R,b=L,w=n.top,M=n.bottom}else{"left"===a.position?u.mirror?(D=i.right+u.padding,P="left"):(D=i.right-u.padding,P="right"):u.mirror?(D=i.left-u.padding,P="right"):(D=i.left+u.padding,P="left");var V=i.getPixelForTick(o);V+=e.aliasPixel(c),C=i.getPixelForTick(o,d.offsetGridLines),m=A,v=O,y=n.left,S=n.right,p=b=w=M=V}F.push({tx1:m,ty1:p,tx2:v,ty2:b,x1:y,y1:w,x2:S,y2:M,labelX:D,labelY:C,glWidth:c,glColor:f,glBorderDash:k,glBorderDashOffset:_,rotation:-1*T,label:t,textBaseline:I,textAlign:P})}}}),e.each(F,function(t){if(d.display&&(s.save(),s.lineWidth=t.glWidth,s.strokeStyle=t.glColor,s.setLineDash&&(s.setLineDash(t.glBorderDash),s.lineDashOffset=t.glBorderDashOffset),s.beginPath(),d.drawTicks&&(s.moveTo(t.tx1,t.ty1),s.lineTo(t.tx2,t.ty2)),d.drawOnChartArea&&(s.moveTo(t.x1,t.y1),s.lineTo(t.x2,t.y2)),s.stroke(),s.restore()),u.display){s.save(),s.translate(t.labelX,t.labelY),s.rotate(t.rotation),s.font=y,s.textBaseline=t.textBaseline,s.textAlign=t.textAlign;var n=t.label;if(e.isArray(n))for(var i=0,a=-(n.length-1)*p*.75;i<n.length;++i)s.fillText(""+n[i],0,a),a+=1.5*p;else s.fillText(n,0,0);s.restore()}}),c.display){var W,V,Y=0;if(g)W=i.left+(i.right-i.left)/2,V="bottom"===a.position?i.bottom-S/2:i.top+S/2;else{var B="left"===a.position;W=B?i.left+S/2:i.right-S/2,V=i.top+(i.bottom-i.top)/2,Y=B?-.5*Math.PI:.5*Math.PI}s.save(),s.translate(W,V),s.rotate(Y),s.textAlign="center",s.textBaseline="middle",s.fillStyle=w,s.font=C,s.fillText(c.labelString,0,0),s.restore()}if(d.drawBorder){s.lineWidth=e.getValueAtIndexOrDefault(d.lineWidth,0),s.strokeStyle=e.getValueAtIndexOrDefault(d.color,0);var z=i.left,N=i.right,H=i.top,E=i.bottom,U=e.aliasPixel(s.lineWidth);g?(H=E="top"===a.position?i.bottom:i.top,H+=U,E+=U):(z=N="left"===a.position?i.right:i.left,z+=U,N+=U),s.beginPath(),s.moveTo(z,H),s.lineTo(N,E),s.stroke()}}}})}},{}],27:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.scaleService={constructors:{},defaults:{},registerScaleType:function(t,n,i){this.constructors[t]=n,this.defaults[t]=e.clone(i)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(n){return this.defaults.hasOwnProperty(n)?e.scaleMerge(t.defaults.scale,this.defaults[n]):{}},updateScaleDefaults:function(t,n){var i=this.defaults;i.hasOwnProperty(t)&&(i[t]=e.extend(i[t],n))},addScalesToLayout:function(n){e.each(n.scales,function(e){t.layoutService.addBox(n,e)})}}}},{}],28:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.Ticks={generators:{linear:function(t,n){var i,a=[];if(t.stepSize&&t.stepSize>0)i=t.stepSize;else{var r=e.niceNum(n.max-n.min,!1);i=e.niceNum(r/(t.maxTicks-1),!0)}var o=Math.floor(n.min/i)*i,s=Math.ceil(n.max/i)*i;if(t.min&&t.max&&t.stepSize){var l=(t.max-t.min)%t.stepSize===0;l&&(o=t.min,s=t.max)}var u=(s-o)/i;u=e.almostEquals(u,Math.round(u),i/1e3)?Math.round(u):Math.ceil(u),a.push(void 0!==t.min?t.min:o);for(var d=1;u>d;++d)a.push(o+d*i);return a.push(void 0!==t.max?t.max:s),a},logarithmic:function(t,n){for(var i=[],a=e.getValueOrDefault,r=a(t.min,Math.pow(10,Math.floor(e.log10(n.min))));r<n.max;){i.push(r);var o,s;0===r?(o=Math.floor(e.log10(n.minNotZero)),s=Math.round(n.minNotZero/Math.pow(10,o))):(o=Math.floor(e.log10(r)),s=Math.floor(r/Math.pow(10,o))+1),10===s&&(s=1,++o),r=s*Math.pow(10,o)}var l=a(t.max,r);return i.push(l),i}},formatters:{values:function(t){return e.isArray(t)?t:""+t},linear:function(t,n,i){var a=i.length>3?i[2]-i[1]:i[1]-i[0];Math.abs(a)>1&&t!==Math.floor(t)&&(a=t-Math.floor(t));var r=e.log10(Math.abs(a)),o="";if(0!==t){var s=-1*Math.floor(r);s=Math.max(Math.min(s,20),0),o=t.toFixed(s)}else o="0";return o},logarithmic:function(t,n,i){var a=t/Math.pow(10,Math.floor(e.log10(t)));return 0===t?"0":1===a||2===a||5===a||0===n||n===i.length-1?t.toExponential():""}}}}},{}],29:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.title={display:!1,position:"top",fullWidth:!0,fontStyle:"bold",padding:10,text:""};var n=e.noop;t.Title=t.Element.extend({initialize:function(n){var i=this;e.extend(i,n),i.options=e.configMerge(t.defaults.global.title,n.options),i.legendHitBoxes=[]},beforeUpdate:function(){var n=this.chart.options;n&&n.title&&(this.options=e.configMerge(t.defaults.global.title,n.title))},update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:n,beforeSetDimensions:n,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:n,beforeBuildLabels:n,buildLabels:n,afterBuildLabels:n,beforeFit:n,fit:function(){var n=this,i=e.getValueOrDefault,a=n.options,r=t.defaults.global,o=a.display,s=i(a.fontSize,r.defaultFontSize),l=n.minSize;n.isHorizontal()?(l.width=n.maxWidth,l.height=o?s+2*a.padding:0):(l.width=o?s+2*a.padding:0,l.height=n.maxHeight),n.width=l.width,n.height=l.height},afterFit:n,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var n=this,i=n.ctx,a=e.getValueOrDefault,r=n.options,o=t.defaults.global;if(r.display){var s,l,u,d=a(r.fontSize,o.defaultFontSize),c=a(r.fontStyle,o.defaultFontStyle),h=a(r.fontFamily,o.defaultFontFamily),f=e.fontString(d,c,h),g=0,m=n.top,p=n.left,v=n.bottom,b=n.right;i.fillStyle=a(r.fontColor,o.defaultFontColor),i.font=f,n.isHorizontal()?(s=p+(b-p)/2,l=m+(v-m)/2,u=b-p):(s="left"===r.position?p+d/2:b-d/2,l=m+(v-m)/2,u=v-m,g=Math.PI*("left"===r.position?-.5:.5)),i.save(),i.translate(s,l),i.rotate(g),i.textAlign="center",i.textBaseline="middle",i.fillText(r.text,0,0,u),i.restore()}}}),t.plugins.register({beforeInit:function(e){var n=e.options,i=n.title;i&&(e.titleBlock=new t.Title({ctx:e.chart.ctx,options:i,chart:e}),t.layoutService.addBox(e,e.titleBlock))}})}},{}],30:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){var n=l.color(t);return n.alpha(e*n.alpha()).rgbaString()}function n(t,e){return e&&(l.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function i(t){var e=t._xScale,n=t._yScale||t._scale,i=t._index,a=t._datasetIndex;return{xLabel:e?e.getLabelForIndex(i,a):"",yLabel:n?n.getLabelForIndex(i,a):"",index:i,datasetIndex:a,x:t._model.x,y:t._model.y}}function a(e){var n=t.defaults.global,i=l.getValueOrDefault;return{xPadding:e.xPadding,yPadding:e.yPadding,xAlign:e.xAlign,yAlign:e.yAlign,bodyFontColor:e.bodyFontColor,_bodyFontFamily:i(e.bodyFontFamily,n.defaultFontFamily),_bodyFontStyle:i(e.bodyFontStyle,n.defaultFontStyle),_bodyAlign:e.bodyAlign,bodyFontSize:i(e.bodyFontSize,n.defaultFontSize),bodySpacing:e.bodySpacing,titleFontColor:e.titleFontColor,_titleFontFamily:i(e.titleFontFamily,n.defaultFontFamily),_titleFontStyle:i(e.titleFontStyle,n.defaultFontStyle),titleFontSize:i(e.titleFontSize,n.defaultFontSize),_titleAlign:e.titleAlign,titleSpacing:e.titleSpacing,titleMarginBottom:e.titleMarginBottom,footerFontColor:e.footerFontColor,_footerFontFamily:i(e.footerFontFamily,n.defaultFontFamily),_footerFontStyle:i(e.footerFontStyle,n.defaultFontStyle),footerFontSize:i(e.footerFontSize,n.defaultFontSize),_footerAlign:e.footerAlign,footerSpacing:e.footerSpacing,footerMarginTop:e.footerMarginTop,caretSize:e.caretSize,cornerRadius:e.cornerRadius,backgroundColor:e.backgroundColor,opacity:0,legendColorBackground:e.multiKeyBackground,displayColors:e.displayColors}}function r(t,e){var n=t._chart.ctx,i=2*e.yPadding,a=0,r=e.body,o=r.reduce(function(t,e){return t+e.before.length+e.lines.length+e.after.length},0);o+=e.beforeBody.length+e.afterBody.length;var s=e.title.length,u=e.footer.length,d=e.titleFontSize,c=e.bodyFontSize,h=e.footerFontSize;i+=s*d,i+=s?(s-1)*e.titleSpacing:0,i+=s?e.titleMarginBottom:0,i+=o*c,i+=o?(o-1)*e.bodySpacing:0,i+=u?e.footerMarginTop:0,i+=u*h,i+=u?(u-1)*e.footerSpacing:0;var f=0,g=function(t){a=Math.max(a,n.measureText(t).width+f)};return n.font=l.fontString(d,e._titleFontStyle,e._titleFontFamily),l.each(e.title,g),n.font=l.fontString(c,e._bodyFontStyle,e._bodyFontFamily),l.each(e.beforeBody.concat(e.afterBody),g),f=e.displayColors?c+2:0,l.each(r,function(t){l.each(t.before,g),l.each(t.lines,g),l.each(t.after,g)}),f=0,n.font=l.fontString(h,e._footerFontStyle,e._footerFontFamily),l.each(e.footer,g),a+=2*e.xPadding,{width:a,height:i}}function o(t,e){var n=t._model,i=t._chart,a=t._chartInstance.chartArea,r="center",o="center";n.y<e.height?o="top":n.y>i.height-e.height&&(o="bottom");var s,l,u,d,c,h=(a.left+a.right)/2,f=(a.top+a.bottom)/2;"center"===o?(s=function(t){return h>=t},l=function(t){return t>h}):(s=function(t){return t<=e.width/2},l=function(t){return t>=i.width-e.width/2}),u=function(t){return t+e.width>i.width},d=function(t){return t-e.width<0},c=function(t){return f>=t?"top":"bottom"},s(n.x)?(r="left",u(n.x)&&(r="center",o=c(n.y))):l(n.x)&&(r="right",d(n.x)&&(r="center",o=c(n.y)));var g=t._options;return{xAlign:g.xAlign?g.xAlign:r,yAlign:g.yAlign?g.yAlign:o}}function s(t,e,n){var i=t.x,a=t.y,r=t.caretSize,o=t.caretPadding,s=t.cornerRadius,l=n.xAlign,u=n.yAlign,d=r+o,c=s+o;return"right"===l?i-=e.width:"center"===l&&(i-=e.width/2),"top"===u?a+=d:a-="bottom"===u?e.height+d:e.height/2,"center"===u?"left"===l?i+=d:"right"===l&&(i-=d):"left"===l?i-=c:"right"===l&&(i+=c),{x:i,y:a}}var l=t.helpers;t.defaults.global.tooltips={enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,callbacks:{beforeTitle:l.noop,title:function(t,e){var n="",i=e.labels,a=i?i.length:0;if(t.length>0){var r=t[0];r.xLabel?n=r.xLabel:a>0&&r.index<a&&(n=i[r.index])}return n},afterTitle:l.noop,beforeBody:l.noop,beforeLabel:l.noop,label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n+": "+t.yLabel},labelColor:function(t,e){var n=e.getDatasetMeta(t.datasetIndex),i=n.data[t.index],a=i._view;return{borderColor:a.borderColor,backgroundColor:a.backgroundColor}},afterLabel:l.noop,afterBody:l.noop,beforeFooter:l.noop,footer:l.noop,afterFooter:l.noop}},t.Tooltip=t.Element.extend({initialize:function(){this._model=a(this._options)},getTitle:function(){var t=this,e=t._options,i=e.callbacks,a=i.beforeTitle.apply(t,arguments),r=i.title.apply(t,arguments),o=i.afterTitle.apply(t,arguments),s=[];return s=n(s,a),s=n(s,r),s=n(s,o)},getBeforeBody:function(){var t=this._options.callbacks.beforeBody.apply(this,arguments);return l.isArray(t)?t:void 0!==t?[t]:[]},getBody:function(t,e){var i=this,a=i._options.callbacks,r=[];return l.each(t,function(t){var o={before:[],lines:[],after:[]};n(o.before,a.beforeLabel.call(i,t,e)),n(o.lines,a.label.call(i,t,e)),n(o.after,a.afterLabel.call(i,t,e)),r.push(o)}),r},getAfterBody:function(){var t=this._options.callbacks.afterBody.apply(this,arguments);return l.isArray(t)?t:void 0!==t?[t]:[]},getFooter:function(){var t=this,e=t._options.callbacks,i=e.beforeFooter.apply(t,arguments),a=e.footer.apply(t,arguments),r=e.afterFooter.apply(t,arguments),o=[];return o=n(o,i),o=n(o,a),o=n(o,r)},update:function(e){var n,u,d=this,c=d._options,h=d._model,f=d._model=a(c),g=d._active,m=d._data,p=d._chartInstance,v={xAlign:h.xAlign,yAlign:h.yAlign},b={x:h.x,y:h.y},y={width:h.width,height:h.height},x={x:h.caretX,y:h.caretY};if(g.length){f.opacity=1;var k=[];x=t.Tooltip.positioners[c.position](g,d._eventPosition);var _=[];for(n=0,u=g.length;u>n;++n)_.push(i(g[n]));c.filter&&(_=_.filter(function(t){return c.filter(t,m)})),c.itemSort&&(_=_.sort(function(t,e){return c.itemSort(t,e,m)})),l.each(_,function(t){k.push(c.callbacks.labelColor.call(d,t,p))}),f.title=d.getTitle(_,m),f.beforeBody=d.getBeforeBody(_,m),f.body=d.getBody(_,m),f.afterBody=d.getAfterBody(_,m),f.footer=d.getFooter(_,m),f.x=Math.round(x.x),f.y=Math.round(x.y),f.caretPadding=l.getValueOrDefault(x.padding,2),f.labelColors=k,f.dataPoints=_,y=r(this,f),v=o(this,y),b=s(f,y,v)}else f.opacity=0;return f.xAlign=v.xAlign,f.yAlign=v.yAlign,f.x=b.x,f.y=b.y,f.width=y.width,f.height=y.height,f.caretX=x.x,f.caretY=x.y,d._model=f,e&&c.custom&&c.custom.call(d,f),d},drawCaret:function(t,n,i){var a,r,o,s,l,u,d=this._view,c=this._chart.ctx,h=d.caretSize,f=d.cornerRadius,g=d.xAlign,m=d.yAlign,p=t.x,v=t.y,b=n.width,y=n.height;"center"===m?("left"===g?(a=p,r=a-h,o=a):(a=p+b,r=a+h,o=a),l=v+y/2,s=l-h,u=l+h):("left"===g?(a=p+f,r=a+h,o=r+h):"right"===g?(a=p+b-f,r=a-h,o=r-h):(r=p+b/2,a=r-h,o=r+h),"top"===m?(s=v,l=s-h,u=s):(s=v+y,l=s+h,u=s)),c.fillStyle=e(d.backgroundColor,i),c.beginPath(),c.moveTo(a,s),c.lineTo(r,l),c.lineTo(o,u),c.closePath(),c.fill()},drawTitle:function(t,n,i,a){var r=n.title;if(r.length){i.textAlign=n._titleAlign,i.textBaseline="top";var o=n.titleFontSize,s=n.titleSpacing;i.fillStyle=e(n.titleFontColor,a),i.font=l.fontString(o,n._titleFontStyle,n._titleFontFamily);var u,d;for(u=0,d=r.length;d>u;++u)i.fillText(r[u],t.x,t.y),t.y+=o+s,u+1===r.length&&(t.y+=n.titleMarginBottom-s)}},drawBody:function(t,n,i,a){var r=n.bodyFontSize,o=n.bodySpacing,s=n.body;i.textAlign=n._bodyAlign,i.textBaseline="top";var u=e(n.bodyFontColor,a);i.fillStyle=u,i.font=l.fontString(r,n._bodyFontStyle,n._bodyFontFamily);var d=0,c=function(e){i.fillText(e,t.x+d,t.y),t.y+=r+o};l.each(n.beforeBody,c);var h=n.displayColors;d=h?r+2:0,l.each(s,function(o,s){l.each(o.before,c),l.each(o.lines,function(o){h&&(i.fillStyle=e(n.legendColorBackground,a),i.fillRect(t.x,t.y,r,r),i.strokeStyle=e(n.labelColors[s].borderColor,a),i.strokeRect(t.x,t.y,r,r),i.fillStyle=e(n.labelColors[s].backgroundColor,a),
i.fillRect(t.x+1,t.y+1,r-2,r-2),i.fillStyle=u),c(o)}),l.each(o.after,c)}),d=0,l.each(n.afterBody,c),t.y-=o},drawFooter:function(t,n,i,a){var r=n.footer;r.length&&(t.y+=n.footerMarginTop,i.textAlign=n._footerAlign,i.textBaseline="top",i.fillStyle=e(n.footerFontColor,a),i.font=l.fontString(n.footerFontSize,n._footerFontStyle,n._footerFontFamily),l.each(r,function(e){i.fillText(e,t.x,t.y),t.y+=n.footerFontSize+n.footerSpacing}))},drawBackground:function(t,n,i,a,r){i.fillStyle=e(n.backgroundColor,r),l.drawRoundedRectangle(i,t.x,t.y,a.width,a.height,n.cornerRadius),i.fill()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var n={width:e.width,height:e.height},i={x:e.x,y:e.y},a=Math.abs(e.opacity<.001)?0:e.opacity;this._options.enabled&&(this.drawBackground(i,e,t,n,a),this.drawCaret(i,n,a),i.x+=e.xPadding,i.y+=e.yPadding,this.drawTitle(i,e,t,a),this.drawBody(i,e,t,a),this.drawFooter(i,e,t,a))}},handleEvent:function(t){var e=this,n=e._options,i=!1;if(e._lastActive=e._lastActive||[],"mouseout"===t.type?e._active=[]:e._active=e._chartInstance.getElementsAtEventForMode(t,n.mode,n),i=!l.arrayEquals(e._active,e._lastActive),e._lastActive=e._active,n.enabled||n.custom){e._eventPosition=l.getRelativePosition(t,e._chart);var a=e._model;e.update(!0),e.pivot(),i|=a.x!==e._model.x||a.y!==e._model.y}return i}}),t.Tooltip.positioners={average:function(t){if(!t.length)return!1;var e,n,i=0,a=0,r=0;for(e=0,n=t.length;n>e;++e){var o=t[e];if(o&&o.hasValue()){var s=o.tooltipPosition();i+=s.x,a+=s.y,++r}}return{x:Math.round(i/r),y:Math.round(a/r)}},nearest:function(t,e){var n,i,a,r=e.x,o=e.y,s=Number.POSITIVE_INFINITY;for(i=0,a=t.length;a>i;++i){var u=t[i];if(u&&u.hasValue()){var d=u.getCenterPoint(),c=l.distanceBetweenPoints(e,d);s>c&&(s=c,n=u)}}if(n){var h=n.tooltipPosition();r=h.x,o=h.y}return{x:r,y:o}}}}},{}],31:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults.global;n.elements.arc={backgroundColor:n.defaultColor,borderColor:"#fff",borderWidth:2},t.elements.Arc=t.Element.extend({inLabelRange:function(t){var e=this._view;return e?Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2):!1},inRange:function(t,n){var i=this._view;if(i){for(var a=e.getAngleFromPoint(i,{x:t,y:n}),r=a.angle,o=a.distance,s=i.startAngle,l=i.endAngle;s>l;)l+=2*Math.PI;for(;r>l;)r-=2*Math.PI;for(;s>r;)r+=2*Math.PI;var u=r>=s&&l>=r,d=o>=i.innerRadius&&o<=i.outerRadius;return u&&d}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,n=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,n=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},draw:function(){var t=this._chart.ctx,e=this._view,n=e.startAngle,i=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,n,i),t.arc(e.x,e.y,e.innerRadius,i,n,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})}},{}],32:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults.global;t.defaults.global.elements.line={tension:.4,backgroundColor:n.defaultColor,borderWidth:3,borderColor:n.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0},t.elements.Line=t.Element.extend({draw:function(){function t(t,e){var n=e._view;e._view.steppedLine===!0?(l.lineTo(n.x,t._view.y),l.lineTo(n.x,n.y)):0===e._view.tension?l.lineTo(n.x,n.y):l.bezierCurveTo(t._view.controlPointNextX,t._view.controlPointNextY,n.controlPointPreviousX,n.controlPointPreviousY,n.x,n.y)}var i=this,a=i._view,r=a.spanGaps,o=a.scaleZero,s=i._loop;s||("top"===a.fill?o=a.scaleTop:"bottom"===a.fill&&(o=a.scaleBottom));var l=i._chart.ctx;l.save();var u=i._children.slice(),d=-1;s&&u.length&&u.push(u[0]);var c,h,f,g;if(u.length&&a.fill){for(l.beginPath(),c=0;c<u.length;++c)h=u[c],f=e.previousItem(u,c),g=h._view,0===c?(s?l.moveTo(o.x,o.y):l.moveTo(g.x,o),g.skip||(d=c,l.lineTo(g.x,g.y))):(f=-1===d?f:u[d],g.skip?r||d!==c-1||(s?l.lineTo(o.x,o.y):l.lineTo(f._view.x,o)):(d!==c-1?r&&-1!==d?t(f,h):s?l.lineTo(g.x,g.y):(l.lineTo(g.x,o),l.lineTo(g.x,g.y)):t(f,h),d=c));s||-1===d||l.lineTo(u[d]._view.x,o),l.fillStyle=a.backgroundColor||n.defaultColor,l.closePath(),l.fill()}var m=n.elements.line;for(l.lineCap=a.borderCapStyle||m.borderCapStyle,l.setLineDash&&l.setLineDash(a.borderDash||m.borderDash),l.lineDashOffset=a.borderDashOffset||m.borderDashOffset,l.lineJoin=a.borderJoinStyle||m.borderJoinStyle,l.lineWidth=a.borderWidth||m.borderWidth,l.strokeStyle=a.borderColor||n.defaultColor,l.beginPath(),d=-1,c=0;c<u.length;++c)h=u[c],f=e.previousItem(u,c),g=h._view,0===c?g.skip||(l.moveTo(g.x,g.y),d=c):(f=-1===d?f:u[d],g.skip||(d!==c-1&&!r||-1===d?l.moveTo(g.x,g.y):t(f,h),d=c));l.stroke(),l.restore()}})}},{}],33:[function(t,e,n){"use strict";e.exports=function(t){function e(t){var e=this._view;return e?Math.pow(t-e.x,2)<Math.pow(e.radius+e.hitRadius,2):!1}function n(t){var e=this._view;return e?Math.pow(t-e.y,2)<Math.pow(e.radius+e.hitRadius,2):!1}var i=t.helpers,a=t.defaults.global,r=a.defaultColor;a.elements.point={radius:3,pointStyle:"circle",backgroundColor:r,borderWidth:1,borderColor:r,hitRadius:1,hoverRadius:4,hoverBorderWidth:1},t.elements.Point=t.Element.extend({inRange:function(t,e){var n=this._view;return n?Math.pow(t-n.x,2)+Math.pow(e-n.y,2)<Math.pow(n.hitRadius+n.radius,2):!1},inLabelRange:e,inXRange:e,inYRange:n,getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(){var e=this._view,n=this._chart.ctx,o=e.pointStyle,s=e.radius,l=e.x,u=e.y;e.skip||(n.strokeStyle=e.borderColor||r,n.lineWidth=i.getValueOrDefault(e.borderWidth,a.elements.point.borderWidth),n.fillStyle=e.backgroundColor||r,t.canvasHelpers.drawPoint(n,o,s,l,u))}})}},{}],34:[function(t,e,n){"use strict";e.exports=function(t){function e(t){return void 0!==t._view.width}function n(t){var n,i,a,r,o=t._view;if(e(t)){var s=o.width/2;n=o.x-s,i=o.x+s,a=Math.min(o.y,o.base),r=Math.max(o.y,o.base)}else{var l=o.height/2;n=Math.min(o.x,o.base),i=Math.max(o.x,o.base),a=o.y-l,r=o.y+l}return{left:n,top:a,right:i,bottom:r}}var i=t.defaults.global;i.elements.rectangle={backgroundColor:i.defaultColor,borderWidth:0,borderColor:i.defaultColor,borderSkipped:"bottom"},t.elements.Rectangle=t.Element.extend({draw:function(){function t(t){return l[(d+t)%4]}var e=this._chart.ctx,n=this._view,i=n.width/2,a=n.x-i,r=n.x+i,o=n.base-(n.base-n.y),s=n.borderWidth/2;n.borderWidth&&(a+=s,r-=s,o+=s),e.beginPath(),e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth;var l=[[a,n.base],[a,o],[r,o],[r,n.base]],u=["bottom","left","top","right"],d=u.indexOf(n.borderSkipped,0);-1===d&&(d=0);var c=t(0);e.moveTo(c[0],c[1]);for(var h=1;4>h;h++)c=t(h),e.lineTo(c[0],c[1]);e.fill(),n.borderWidth&&e.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var i=!1;if(this._view){var a=n(this);i=t>=a.left&&t<=a.right&&e>=a.top&&e<=a.bottom}return i},inLabelRange:function(t,i){var a=this;if(!a._view)return!1;var r=!1,o=n(a);return r=e(a)?t>=o.left&&t<=o.right:i>=o.top&&i<=o.bottom},inXRange:function(t){var e=n(this);return t>=e.left&&t<=e.right},inYRange:function(t){var e=n(this);return t>=e.top&&t<=e.bottom},getCenterPoint:function(){var t,n,i=this._view;return e(this)?(t=i.x,n=(i.y+i.base)/2):(t=(i.x+i.base)/2,n=i.y),{x:t,y:n}},getArea:function(){var t=this._view;return t.width*Math.abs(t.y-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})}},{}],35:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n={position:"bottom"},i=t.Scale.extend({getLabels:function(){var t=this.chart.data;return(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},determineDataLimits:function(){var t=this,n=t.getLabels();t.minIndex=0,t.maxIndex=n.length-1;var i;void 0!==t.options.ticks.min&&(i=e.indexOf(n,t.options.ticks.min),t.minIndex=-1!==i?i:t.minIndex),void 0!==t.options.ticks.max&&(i=e.indexOf(n,t.options.ticks.max),t.maxIndex=-1!==i?i:t.maxIndex),t.min=n[t.minIndex],t.max=n[t.maxIndex]},buildTicks:function(){var t=this,e=t.getLabels();t.ticks=0===t.minIndex&&t.maxIndex===e.length-1?e:e.slice(t.minIndex,t.maxIndex+1)},getLabelForIndex:function(t,e){var n=this,i=n.chart.data,a=n.isHorizontal();return i.xLabels&&a||i.yLabels&&!a?n.getRightValue(i.datasets[e].data[t]):n.ticks[t]},getPixelForValue:function(t,e,n,i){var a=this,r=Math.max(a.maxIndex+1-a.minIndex-(a.options.gridLines.offsetGridLines?0:1),1);if(void 0!==t&&isNaN(e)){var o=a.getLabels(),s=o.indexOf(t);e=-1!==s?s:e}if(a.isHorizontal()){var l=a.width-(a.paddingLeft+a.paddingRight),u=l/r,d=u*(e-a.minIndex)+a.paddingLeft;return(a.options.gridLines.offsetGridLines&&i||a.maxIndex===a.minIndex&&i)&&(d+=u/2),a.left+Math.round(d)}var c=a.height-(a.paddingTop+a.paddingBottom),h=c/r,f=h*(e-a.minIndex)+a.paddingTop;return a.options.gridLines.offsetGridLines&&i&&(f+=h/2),a.top+Math.round(f)},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null,e)},getValueForPixel:function(t){var e,n=this,i=Math.max(n.ticks.length-(n.options.gridLines.offsetGridLines?0:1),1),a=n.isHorizontal(),r=a?n.width-(n.paddingLeft+n.paddingRight):n.height-(n.paddingTop+n.paddingBottom),o=r/i;return t-=a?n.left:n.top,n.options.gridLines.offsetGridLines&&(t-=o/2),t-=a?n.paddingLeft:n.paddingTop,e=0>=t?0:Math.round(t/o)},getBasePixel:function(){return this.bottom}});t.scaleService.registerScaleType("category",i,n)}},{}],36:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n={position:"left",ticks:{callback:t.Ticks.formatters.linear}},i=t.LinearScaleBase.extend({determineDataLimits:function(){function t(t){return s?t.xAxisID===n.id:t.yAxisID===n.id}var n=this,i=n.options,a=n.chart,r=a.data,o=r.datasets,s=n.isHorizontal();if(n.min=null,n.max=null,i.stacked){var l={};e.each(o,function(r,o){var s=a.getDatasetMeta(o);void 0===l[s.type]&&(l[s.type]={positiveValues:[],negativeValues:[]});var u=l[s.type].positiveValues,d=l[s.type].negativeValues;a.isDatasetVisible(o)&&t(s)&&e.each(r.data,function(t,e){var a=+n.getRightValue(t);isNaN(a)||s.data[e].hidden||(u[e]=u[e]||0,d[e]=d[e]||0,i.relativePoints?u[e]=100:0>a?d[e]+=a:u[e]+=a)})}),e.each(l,function(t){var i=t.positiveValues.concat(t.negativeValues),a=e.min(i),r=e.max(i);n.min=null===n.min?a:Math.min(n.min,a),n.max=null===n.max?r:Math.max(n.max,r)})}else e.each(o,function(i,r){var o=a.getDatasetMeta(r);a.isDatasetVisible(r)&&t(o)&&e.each(i.data,function(t,e){var i=+n.getRightValue(t);isNaN(i)||o.data[e].hidden||(null===n.min?n.min=i:i<n.min&&(n.min=i),null===n.max?n.max=i:i>n.max&&(n.max=i))})});this.handleTickRangeOptions()},getTickLimit:function(){var n,i=this,a=i.options.ticks;if(i.isHorizontal())n=Math.min(a.maxTicksLimit?a.maxTicksLimit:11,Math.ceil(i.width/50));else{var r=e.getValueOrDefault(a.fontSize,t.defaults.global.defaultFontSize);n=Math.min(a.maxTicksLimit?a.maxTicksLimit:11,Math.ceil(i.height/(2*r)))}return n},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){var e,n,i=this,a=i.paddingLeft,r=i.paddingBottom,o=i.start,s=+i.getRightValue(t),l=i.end-o;return i.isHorizontal()?(n=i.width-(a+i.paddingRight),e=i.left+n/l*(s-o),Math.round(e+a)):(n=i.height-(i.paddingTop+r),e=i.bottom-r-n/l*(s-o),Math.round(e))},getValueForPixel:function(t){var e=this,n=e.isHorizontal(),i=e.paddingLeft,a=e.paddingBottom,r=n?e.width-(i+e.paddingRight):e.height-(e.paddingTop+a),o=(n?t-e.left-i:e.bottom-a-t)/r;return e.start+(e.end-e.start)*o},getPixelForTick:function(t){return this.getPixelForValue(this.ticksAsNumbers[t])}});t.scaleService.registerScaleType("linear",i,n)}},{}],37:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=e.noop;t.LinearScaleBase=t.Scale.extend({handleTickRangeOptions:function(){var t=this,n=t.options,i=n.ticks;if(i.beginAtZero){var a=e.sign(t.min),r=e.sign(t.max);0>a&&0>r?t.max=0:a>0&&r>0&&(t.min=0)}void 0!==i.min?t.min=i.min:void 0!==i.suggestedMin&&(t.min=Math.min(t.min,i.suggestedMin)),void 0!==i.max?t.max=i.max:void 0!==i.suggestedMax&&(t.max=Math.max(t.max,i.suggestedMax)),t.min===t.max&&(t.max++,i.beginAtZero||t.min--)},getTickLimit:n,handleDirectionalChanges:n,buildTicks:function(){var n=this,i=n.options,a=i.ticks,r=n.getTickLimit();r=Math.max(2,r);var o={maxTicks:r,min:a.min,max:a.max,stepSize:e.getValueOrDefault(a.fixedStepSize,a.stepSize)},s=n.ticks=t.Ticks.generators.linear(o,n);n.handleDirectionalChanges(),n.max=e.max(s),n.min=e.min(s),a.reverse?(s.reverse(),n.start=n.max,n.end=n.min):(n.start=n.min,n.end=n.max)},convertTicksToLabels:function(){var e=this;e.ticksAsNumbers=e.ticks.slice(),e.zeroLineIndex=e.ticks.indexOf(0),t.Scale.prototype.convertTicksToLabels.call(e)}})}},{}],38:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n={position:"left",ticks:{callback:t.Ticks.formatters.logarithmic}},i=t.Scale.extend({determineDataLimits:function(){function t(t){return u?t.xAxisID===n.id:t.yAxisID===n.id}var n=this,i=n.options,a=i.ticks,r=n.chart,o=r.data,s=o.datasets,l=e.getValueOrDefault,u=n.isHorizontal();if(n.min=null,n.max=null,n.minNotZero=null,i.stacked){var d={};e.each(s,function(a,o){var s=r.getDatasetMeta(o);r.isDatasetVisible(o)&&t(s)&&(void 0===d[s.type]&&(d[s.type]=[]),e.each(a.data,function(t,e){var a=d[s.type],r=+n.getRightValue(t);isNaN(r)||s.data[e].hidden||(a[e]=a[e]||0,i.relativePoints?a[e]=100:a[e]+=r)}))}),e.each(d,function(t){var i=e.min(t),a=e.max(t);n.min=null===n.min?i:Math.min(n.min,i),n.max=null===n.max?a:Math.max(n.max,a)})}else e.each(s,function(i,a){var o=r.getDatasetMeta(a);r.isDatasetVisible(a)&&t(o)&&e.each(i.data,function(t,e){var i=+n.getRightValue(t);isNaN(i)||o.data[e].hidden||(null===n.min?n.min=i:i<n.min&&(n.min=i),null===n.max?n.max=i:i>n.max&&(n.max=i),0!==i&&(null===n.minNotZero||i<n.minNotZero)&&(n.minNotZero=i))})});n.min=l(a.min,n.min),n.max=l(a.max,n.max),n.min===n.max&&(0!==n.min&&null!==n.min?(n.min=Math.pow(10,Math.floor(e.log10(n.min))-1),n.max=Math.pow(10,Math.floor(e.log10(n.max))+1)):(n.min=1,n.max=10))},buildTicks:function(){var n=this,i=n.options,a=i.ticks,r={min:a.min,max:a.max},o=n.ticks=t.Ticks.generators.logarithmic(r,n);n.isHorizontal()||o.reverse(),n.max=e.max(o),n.min=e.min(o),a.reverse?(o.reverse(),n.start=n.max,n.end=n.min):(n.start=n.min,n.end=n.max)},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),t.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){return this.getPixelForValue(this.tickValues[t])},getPixelForValue:function(t){var n,i,a,r=this,o=r.start,s=+r.getRightValue(t),l=r.paddingTop,u=r.paddingBottom,d=r.paddingLeft,c=r.options,h=c.ticks;return r.isHorizontal()?(a=e.log10(r.end)-e.log10(o),0===s?i=r.left+d:(n=r.width-(d+r.paddingRight),i=r.left+n/a*(e.log10(s)-e.log10(o)),i+=d)):(n=r.height-(l+u),0!==o||h.reverse?0===r.end&&h.reverse?(a=e.log10(r.start)-e.log10(r.minNotZero),i=s===r.end?r.top+l:s===r.minNotZero?r.top+l+.02*n:r.top+l+.02*n+.98*n/a*(e.log10(s)-e.log10(r.minNotZero))):(a=e.log10(r.end)-e.log10(o),n=r.height-(l+u),i=r.bottom-u-n/a*(e.log10(s)-e.log10(o))):(a=e.log10(r.end)-e.log10(r.minNotZero),i=s===o?r.bottom-u:s===r.minNotZero?r.bottom-u-.02*n:r.bottom-u-.02*n-.98*n/a*(e.log10(s)-e.log10(r.minNotZero)))),i},getValueForPixel:function(t){var n,i,a=this,r=e.log10(a.end)-e.log10(a.start);return a.isHorizontal()?(i=a.width-(a.paddingLeft+a.paddingRight),n=a.start*Math.pow(10,(t-a.left-a.paddingLeft)*r/i)):(i=a.height-(a.paddingTop+a.paddingBottom),n=Math.pow(10,(a.bottom-a.paddingBottom-t)*r/i)/a.start),n}});t.scaleService.registerScaleType("logarithmic",i,n)}},{}],39:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults.global,i={display:!0,animate:!0,lineArc:!1,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:t.Ticks.formatters.linear},pointLabels:{fontSize:10,callback:function(t){return t}}},a=t.LinearScaleBase.extend({getValueCount:function(){return this.chart.data.labels.length},setDimensions:function(){var t=this,i=t.options,a=i.ticks;t.width=t.maxWidth,t.height=t.maxHeight,t.xCenter=Math.round(t.width/2),t.yCenter=Math.round(t.height/2);var r=e.min([t.height,t.width]),o=e.getValueOrDefault(a.fontSize,n.defaultFontSize);t.drawingArea=i.display?r/2-(o/2+a.backdropPaddingY):r/2},determineDataLimits:function(){var t=this,n=t.chart;t.min=null,t.max=null,e.each(n.data.datasets,function(i,a){if(n.isDatasetVisible(a)){var r=n.getDatasetMeta(a);e.each(i.data,function(e,n){var i=+t.getRightValue(e);isNaN(i)||r.data[n].hidden||(null===t.min?t.min=i:i<t.min&&(t.min=i),null===t.max?t.max=i:i>t.max&&(t.max=i))})}}),t.handleTickRangeOptions()},getTickLimit:function(){var t=this.options.ticks,i=e.getValueOrDefault(t.fontSize,n.defaultFontSize);return Math.min(t.maxTicksLimit?t.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*i)))},convertTicksToLabels:function(){var e=this;t.LinearScaleBase.prototype.convertTicksToLabels.call(e),e.pointLabels=e.chart.data.labels.map(e.options.pointLabels.callback,e)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t,i,a,r,o,s,l,u,d,c,h,f,g=this.options.pointLabels,m=e.getValueOrDefault(g.fontSize,n.defaultFontSize),p=e.getValueOrDefault(g.fontStyle,n.defaultFontStyle),v=e.getValueOrDefault(g.fontFamily,n.defaultFontFamily),b=e.fontString(m,p,v),y=e.min([this.height/2-m-5,this.width/2]),x=this.width,k=0;for(this.ctx.font=b,i=0;i<this.getValueCount();i++){t=this.getPointPosition(i,y),a=this.ctx.measureText(this.pointLabels[i]?this.pointLabels[i]:"").width+5;var _=this.getIndexAngle(i)+Math.PI/2,w=360*_/(2*Math.PI)%360;0===w||180===w?(r=a/2,t.x+r>x&&(x=t.x+r,o=i),t.x-r<k&&(k=t.x-r,l=i)):180>w?t.x+a>x&&(x=t.x+a,o=i):t.x-a<k&&(k=t.x-a,l=i)}d=k,c=Math.ceil(x-this.width),s=this.getIndexAngle(o),u=this.getIndexAngle(l),h=c/Math.sin(s+Math.PI/2),f=d/Math.sin(u+Math.PI/2),h=e.isNumber(h)?h:0,f=e.isNumber(f)?f:0,this.drawingArea=Math.round(y-(f+h)/2),this.setCenterPoint(f,h)},setCenterPoint:function(t,e){var n=this,i=n.width-e-n.drawingArea,a=t+n.drawingArea;n.xCenter=Math.round((a+i)/2+n.left),n.yCenter=Math.round(n.height/2+n.top)},getIndexAngle:function(t){var e=2*Math.PI/this.getValueCount(),n=this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0,i=n*Math.PI*2/360;return t*e-Math.PI/2+i},getDistanceFromCenterForValue:function(t){var e=this;if(null===t)return 0;var n=e.drawingArea/(e.max-e.min);return e.options.reverse?(e.max-t)*n:(t-e.min)*n},getPointPosition:function(t,e){var n=this,i=n.getIndexAngle(t);return{x:Math.round(Math.cos(i)*e)+n.xCenter,y:Math.round(Math.sin(i)*e)+n.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this,e=t.min,n=t.max;return t.getPointPositionForValue(0,t.beginAtZero?0:0>e&&0>n?n:e>0&&n>0?e:0)},draw:function(){var t=this,i=t.options,a=i.gridLines,r=i.ticks,o=i.angleLines,s=i.pointLabels,l=e.getValueOrDefault;if(i.display){var u=t.ctx,d=l(r.fontSize,n.defaultFontSize),c=l(r.fontStyle,n.defaultFontStyle),h=l(r.fontFamily,n.defaultFontFamily),f=e.fontString(d,c,h);if(e.each(t.ticks,function(o,s){if(s>0||i.reverse){var c=t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]),h=t.yCenter-c;if(a.display&&0!==s)if(u.strokeStyle=e.getValueAtIndexOrDefault(a.color,s-1),u.lineWidth=e.getValueAtIndexOrDefault(a.lineWidth,s-1),i.lineArc)u.beginPath(),u.arc(t.xCenter,t.yCenter,c,0,2*Math.PI),u.closePath(),u.stroke();else{u.beginPath();for(var g=0;g<t.getValueCount();g++){var m=t.getPointPosition(g,c);0===g?u.moveTo(m.x,m.y):u.lineTo(m.x,m.y)}u.closePath(),u.stroke()}if(r.display){var p=l(r.fontColor,n.defaultFontColor);if(u.font=f,r.showLabelBackdrop){var v=u.measureText(o).width;u.fillStyle=r.backdropColor,u.fillRect(t.xCenter-v/2-r.backdropPaddingX,h-d/2-r.backdropPaddingY,v+2*r.backdropPaddingX,d+2*r.backdropPaddingY)}u.textAlign="center",u.textBaseline="middle",u.fillStyle=p,u.fillText(o,t.xCenter,h)}}}),!i.lineArc){u.lineWidth=o.lineWidth,u.strokeStyle=o.color;for(var g=t.getDistanceFromCenterForValue(i.reverse?t.min:t.max),m=l(s.fontSize,n.defaultFontSize),p=l(s.fontStyle,n.defaultFontStyle),v=l(s.fontFamily,n.defaultFontFamily),b=e.fontString(m,p,v),y=t.getValueCount()-1;y>=0;y--){if(o.display){var x=t.getPointPosition(y,g);u.beginPath(),u.moveTo(t.xCenter,t.yCenter),u.lineTo(x.x,x.y),u.stroke(),u.closePath()}var k=t.getPointPosition(y,g+5),_=l(s.fontColor,n.defaultFontColor);u.font=b,u.fillStyle=_;var w=t.pointLabels,S=this.getIndexAngle(y)+Math.PI/2,M=360*S/(2*Math.PI)%360;0===M||180===M?u.textAlign="center":180>M?u.textAlign="left":u.textAlign="right",90===M||270===M?u.textBaseline="middle":M>270||90>M?u.textBaseline="bottom":u.textBaseline="top",u.fillText(w[y]?w[y]:"",k.x,k.y)}}}}});t.scaleService.registerScaleType("radialLinear",a,i)}},{}],40:[function(t,e,n){"use strict";var i=t(46);i="function"==typeof i?i:window.moment,e.exports=function(t){var e=t.helpers,n={units:[{name:"millisecond",steps:[1,2,5,10,20,50,100,250,500]},{name:"second",steps:[1,2,5,10,30]},{name:"minute",steps:[1,2,5,10,30]},{name:"hour",steps:[1,2,3,6,12]},{name:"day",steps:[1,2,5]},{name:"week",maxStep:4},{name:"month",maxStep:3},{name:"quarter",maxStep:4},{name:"year",maxStep:!1}]},a={position:"bottom",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm:ss a",hour:"MMM D, hA",day:"ll",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1}},r=t.Scale.extend({initialize:function(){if(!i)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");t.Scale.prototype.initialize.call(this)},getLabelMoment:function(t,e){return null===t||null===e?null:"undefined"!=typeof this.labelMoments[t]?this.labelMoments[t][e]:null},getLabelDiff:function(t,e){var n=this;return null===t||null===e?null:(void 0===n.labelDiffs&&n.buildLabelDiffs(),"undefined"!=typeof n.labelDiffs[t]?n.labelDiffs[t][e]:null)},getMomentStartOf:function(t){var e=this;return"week"===e.options.time.unit&&e.options.time.isoWeekday!==!1?t.clone().startOf("isoWeek").isoWeekday(e.options.time.isoWeekday):t.clone().startOf(e.tickUnit)},determineDataLimits:function(){var t=this;t.labelMoments=[];var n=[];t.chart.data.labels&&t.chart.data.labels.length>0?(e.each(t.chart.data.labels,function(e){var i=t.parseTime(e);i.isValid()&&(t.options.time.round&&i.startOf(t.options.time.round),n.push(i))},t),t.firstTick=i.min.call(t,n),t.lastTick=i.max.call(t,n)):(t.firstTick=null,t.lastTick=null),e.each(t.chart.data.datasets,function(a,r){var o=[],s=t.chart.isDatasetVisible(r);"object"==typeof a.data[0]&&null!==a.data[0]?e.each(a.data,function(e){var n=t.parseTime(t.getRightValue(e));n.isValid()&&(t.options.time.round&&n.startOf(t.options.time.round),o.push(n),s&&(t.firstTick=null!==t.firstTick?i.min(t.firstTick,n):n,t.lastTick=null!==t.lastTick?i.max(t.lastTick,n):n))},t):o=n,t.labelMoments.push(o)},t),t.options.time.min&&(t.firstTick=t.parseTime(t.options.time.min)),t.options.time.max&&(t.lastTick=t.parseTime(t.options.time.max)),t.firstTick=(t.firstTick||i()).clone(),t.lastTick=(t.lastTick||i()).clone()},buildLabelDiffs:function(){var t=this;t.labelDiffs=[];var n=[];t.chart.data.labels&&t.chart.data.labels.length>0&&e.each(t.chart.data.labels,function(e){var i=t.parseTime(e);i.isValid()&&(t.options.time.round&&i.startOf(t.options.time.round),n.push(i.diff(t.firstTick,t.tickUnit,!0)))},t),e.each(t.chart.data.datasets,function(i){var a=[];"object"==typeof i.data[0]&&null!==i.data[0]?e.each(i.data,function(e){var n=t.parseTime(t.getRightValue(e));n.isValid()&&(t.options.time.round&&n.startOf(t.options.time.round),a.push(n.diff(t.firstTick,t.tickUnit,!0)))},t):a=n,t.labelDiffs.push(a)},t)},buildTicks:function(){var i=this;i.ctx.save();var a=e.getValueOrDefault(i.options.ticks.fontSize,t.defaults.global.defaultFontSize),r=e.getValueOrDefault(i.options.ticks.fontStyle,t.defaults.global.defaultFontStyle),o=e.getValueOrDefault(i.options.ticks.fontFamily,t.defaults.global.defaultFontFamily),s=e.fontString(a,r,o);if(i.ctx.font=s,i.ticks=[],i.unitScale=1,i.scaleSizeInUnits=0,i.options.time.unit)i.tickUnit=i.options.time.unit||"day",i.displayFormat=i.options.time.displayFormats[i.tickUnit],i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0),i.unitScale=e.getValueOrDefault(i.options.time.unitStepSize,1);else{var l=i.isHorizontal()?i.width-(i.paddingLeft+i.paddingRight):i.height-(i.paddingTop+i.paddingBottom),u=i.tickFormatFunction(i.firstTick,0,[]),d=i.ctx.measureText(u).width,c=Math.cos(e.toRadians(i.options.ticks.maxRotation)),h=Math.sin(e.toRadians(i.options.ticks.maxRotation));d=d*c+a*h;var f=l/d;i.tickUnit=i.options.time.minUnit,i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0),i.displayFormat=i.options.time.displayFormats[i.tickUnit];for(var g=0,m=n.units[g];g<n.units.length;){if(i.unitScale=1,e.isArray(m.steps)&&Math.ceil(i.scaleSizeInUnits/f)<e.max(m.steps)){for(var p=0;p<m.steps.length;++p)if(m.steps[p]>=Math.ceil(i.scaleSizeInUnits/f)){i.unitScale=e.getValueOrDefault(i.options.time.unitStepSize,m.steps[p]);break}break}if(m.maxStep===!1||Math.ceil(i.scaleSizeInUnits/f)<m.maxStep){i.unitScale=e.getValueOrDefault(i.options.time.unitStepSize,Math.ceil(i.scaleSizeInUnits/f));break}++g,m=n.units[g],i.tickUnit=m.name;var v=i.firstTick.diff(i.getMomentStartOf(i.firstTick),i.tickUnit,!0),b=i.getMomentStartOf(i.lastTick.clone().add(1,i.tickUnit)).diff(i.lastTick,i.tickUnit,!0);i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0)+v+b,i.displayFormat=i.options.time.displayFormats[m.name]}}var y;if(i.options.time.min?y=i.getMomentStartOf(i.firstTick):(i.firstTick=i.getMomentStartOf(i.firstTick),y=i.firstTick),!i.options.time.max){var x=i.getMomentStartOf(i.lastTick),k=x.diff(i.lastTick,i.tickUnit,!0);0>k?i.lastTick=i.getMomentStartOf(i.lastTick.add(1,i.tickUnit)):k>=0&&(i.lastTick=x),i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0)}i.options.time.displayFormat&&(i.displayFormat=i.options.time.displayFormat),i.ticks.push(i.firstTick.clone());for(var _=1;_<=i.scaleSizeInUnits;++_){var w=y.clone().add(_,i.tickUnit);if(i.options.time.max&&w.diff(i.lastTick,i.tickUnit,!0)>=0)break;_%i.unitScale===0&&i.ticks.push(w)}var S=i.ticks[i.ticks.length-1].diff(i.lastTick,i.tickUnit);(0!==S||0===i.scaleSizeInUnits)&&(i.options.time.max?(i.ticks.push(i.lastTick.clone()),i.scaleSizeInUnits=i.lastTick.diff(i.ticks[0],i.tickUnit,!0)):(i.ticks.push(i.lastTick.clone()),i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0))),i.ctx.restore(),i.labelDiffs=void 0},getLabelForIndex:function(t,e){var n=this,i=n.chart.data.labels&&t<n.chart.data.labels.length?n.chart.data.labels[t]:"";return"object"==typeof n.chart.data.datasets[e].data[0]&&(i=n.getRightValue(n.chart.data.datasets[e].data[t])),n.options.time.tooltipFormat&&(i=n.parseTime(i).format(n.options.time.tooltipFormat)),i},tickFormatFunction:function(t,n,i){var a=t.format(this.displayFormat),r=this.options.ticks,o=e.getValueOrDefault(r.callback,r.userCallback);return o?o(a,n,i):a},convertTicksToLabels:function(){var t=this;t.tickMoments=t.ticks,t.ticks=t.ticks.map(t.tickFormatFunction,t)},getPixelForValue:function(t,e,n){var i=this,a=null;if(void 0!==e&&void 0!==n&&(a=i.getLabelDiff(n,e)),null===a&&(t&&t.isValid||(t=i.parseTime(i.getRightValue(t))),t&&t.isValid&&t.isValid()&&(a=t.diff(i.firstTick,i.tickUnit,!0))),null!==a){var r=0!==a?a/i.scaleSizeInUnits:a;if(i.isHorizontal()){var o=i.width-(i.paddingLeft+i.paddingRight),s=o*r+i.paddingLeft;return i.left+Math.round(s)}var l=i.height-(i.paddingTop+i.paddingBottom),u=l*r+i.paddingTop;return i.top+Math.round(u)}},getPixelForTick:function(t){return this.getPixelForValue(this.tickMoments[t],null,null)},getValueForPixel:function(t){var e=this,n=e.isHorizontal()?e.width-(e.paddingLeft+e.paddingRight):e.height-(e.paddingTop+e.paddingBottom),a=(t-(e.isHorizontal()?e.left+e.paddingLeft:e.top+e.paddingTop))/n;return a*=e.scaleSizeInUnits,e.firstTick.clone().add(i.duration(a,e.tickUnit).asSeconds(),"seconds")},parseTime:function(t){var e=this;return"string"==typeof e.options.time.parser?i(t,e.options.time.parser):"function"==typeof e.options.time.parser?e.options.time.parser(t):"function"==typeof t.getMonth||"number"==typeof t?i(t):t.isValid&&t.isValid()?t:"string"!=typeof e.options.time.format&&e.options.time.format.call?(console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"),e.options.time.format(t)):i(t,e.options.time.format)}});t.scaleService.registerScaleType("time",r,a)}},{46:46}],41:[function(t,e,n){function i(t){if(t){var e=/^#([a-fA-F0-9]{3})$/,n=/^#([a-fA-F0-9]{6})$/,i=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,a=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,r=/(\w+)/,o=[0,0,0],s=1,l=t.match(e);if(l){l=l[1];for(var u=0;u<o.length;u++)o[u]=parseInt(l[u]+l[u],16)}else if(l=t.match(n)){l=l[1];for(var u=0;u<o.length;u++)o[u]=parseInt(l.slice(2*u,2*u+2),16)}else if(l=t.match(i)){for(var u=0;u<o.length;u++)o[u]=parseInt(l[u+1]);s=parseFloat(l[4])}else if(l=t.match(a)){for(var u=0;u<o.length;u++)o[u]=Math.round(2.55*parseFloat(l[u+1]));s=parseFloat(l[4])}else if(l=t.match(r)){if("transparent"==l[1])return[0,0,0,0];if(o=x[l[1]],!o)return}for(var u=0;u<o.length;u++)o[u]=b(o[u],0,255);return s=s||0==s?b(s,0,1):1,o[3]=s,o}}function a(t){if(t){var e=/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,n=t.match(e);if(n){var i=parseFloat(n[4]),a=b(parseInt(n[1]),0,360),r=b(parseFloat(n[2]),0,100),o=b(parseFloat(n[3]),0,100),s=b(isNaN(i)?1:i,0,1);return[a,r,o,s]}}}function r(t){if(t){var e=/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,n=t.match(e);if(n){var i=parseFloat(n[4]),a=b(parseInt(n[1]),0,360),r=b(parseFloat(n[2]),0,100),o=b(parseFloat(n[3]),0,100),s=b(isNaN(i)?1:i,0,1);return[a,r,o,s]}}}function o(t){var e=i(t);return e&&e.slice(0,3)}function s(t){var e=a(t);return e&&e.slice(0,3)}function l(t){var e=i(t);return e?e[3]:(e=a(t))?e[3]:(e=r(t))?e[3]:void 0}function u(t){return"#"+y(t[0])+y(t[1])+y(t[2])}function d(t,e){return 1>e||t[3]&&t[3]<1?c(t,e):"rgb("+t[0]+", "+t[1]+", "+t[2]+")"}function c(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function h(t,e){if(1>e||t[3]&&t[3]<1)return f(t,e);var n=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgb("+n+"%, "+i+"%, "+a+"%)"}function f(t,e){var n=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgba("+n+"%, "+i+"%, "+a+"%, "+(e||t[3]||1)+")"}function g(t,e){return 1>e||t[3]&&t[3]<1?m(t,e):"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"}function m(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}
function p(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"}function v(t){return k[t.slice(0,3)]}function b(t,e,n){return Math.min(Math.max(e,t),n)}function y(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var x=t(45);e.exports={getRgba:i,getHsla:a,getRgb:o,getHsl:s,getHwb:r,getAlpha:l,hexString:u,rgbString:d,rgbaString:c,percentString:h,percentaString:f,hslString:g,hslaString:m,hwbString:p,keyword:v};var k={};for(var _ in x)k[x[_]]=_},{45:45}],42:[function(t,e,n){var i=t(44),a=t(41),r=function(t){if(t instanceof r)return t;if(!(this instanceof r))return new r(t);this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1};var e;if("string"==typeof t)if(e=a.getRgba(t))this.setValues("rgb",e);else if(e=a.getHsla(t))this.setValues("hsl",e);else{if(!(e=a.getHwb(t)))throw new Error('Unable to parse color from string "'+t+'"');this.setValues("hwb",e)}else if("object"==typeof t)if(e=t,void 0!==e.r||void 0!==e.red)this.setValues("rgb",e);else if(void 0!==e.l||void 0!==e.lightness)this.setValues("hsl",e);else if(void 0!==e.v||void 0!==e.value)this.setValues("hsv",e);else if(void 0!==e.w||void 0!==e.whiteness)this.setValues("hwb",e);else{if(void 0===e.c&&void 0===e.cyan)throw new Error("Unable to parse color from object "+JSON.stringify(t));this.setValues("cmyk",e)}};r.prototype={rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t%=360,t=0>t?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return a.hexString(this.values.rgb)},rgbString:function(){return a.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return a.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return a.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return a.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return a.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return a.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return a.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],n=0;n<t.length;n++){var i=t[n]/255;e[n]=.03928>=i?i/12.92:Math.pow((i+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),n=t.luminosity();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb,e=(299*t[0]+587*t[1]+114*t[2])/1e3;return 128>e},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;3>e;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,n=(e[0]+t)%360;return e[0]=0>n?360+n:n,this.setValues("hsl",e),this},mix:function(t,e){var n=this,i=t,a=void 0===e?.5:e,r=2*a-1,o=n.alpha()-i.alpha(),s=((r*o===-1?r:(r+o)/(1+r*o))+1)/2,l=1-s;return this.rgb(s*n.red()+l*i.red(),s*n.green()+l*i.green(),s*n.blue()+l*i.blue()).alpha(n.alpha()*a+i.alpha()*(1-a))},toJSON:function(){return this.rgb()},clone:function(){var t,e,n=new r,i=this.values,a=n.values;for(var o in i)i.hasOwnProperty(o)&&(t=i[o],e={}.toString.call(t),"[object Array]"===e?a[o]=t.slice(0):"[object Number]"===e?a[o]=t:console.error("unexpected color value:",t));return n}},r.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},r.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},r.prototype.getValues=function(t){for(var e=this.values,n={},i=0;i<t.length;i++)n[t.charAt(i)]=e[t][i];return 1!==e.alpha&&(n.a=e.alpha),n},r.prototype.setValues=function(t,e){var n,a=this.values,r=this.spaces,o=this.maxes,s=1;if("alpha"===t)s=e;else if(e.length)a[t]=e.slice(0,t.length),s=e[t.length];else if(void 0!==e[t.charAt(0)]){for(n=0;n<t.length;n++)a[t][n]=e[t.charAt(n)];s=e.a}else if(void 0!==e[r[t][0]]){var l=r[t];for(n=0;n<t.length;n++)a[t][n]=e[l[n]];s=e.alpha}if(a.alpha=Math.max(0,Math.min(1,void 0===s?a.alpha:s)),"alpha"===t)return!1;var u;for(n=0;n<t.length;n++)u=Math.max(0,Math.min(o[t][n],a[t][n])),a[t][n]=Math.round(u);for(var d in r)d!==t&&(a[d]=i[t][d](a[t]));return!0},r.prototype.setSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n),this)},r.prototype.setChannel=function(t,e,n){var i=this.values[t];return void 0===n?i[e]:n===i[e]?this:(i[e]=n,this.setValues(t,i),this)},"undefined"!=typeof window&&(window.Color=r),e.exports=r},{41:41,44:44}],43:[function(t,e,n){function i(t){var e,n,i,a=t[0]/255,r=t[1]/255,o=t[2]/255,s=Math.min(a,r,o),l=Math.max(a,r,o),u=l-s;return l==s?e=0:a==l?e=(r-o)/u:r==l?e=2+(o-a)/u:o==l&&(e=4+(a-r)/u),e=Math.min(60*e,360),0>e&&(e+=360),i=(s+l)/2,n=l==s?0:.5>=i?u/(l+s):u/(2-l-s),[e,100*n,100*i]}function a(t){var e,n,i,a=t[0],r=t[1],o=t[2],s=Math.min(a,r,o),l=Math.max(a,r,o),u=l-s;return n=0==l?0:u/l*1e3/10,l==s?e=0:a==l?e=(r-o)/u:r==l?e=2+(o-a)/u:o==l&&(e=4+(a-r)/u),e=Math.min(60*e,360),0>e&&(e+=360),i=l/255*1e3/10,[e,n,i]}function o(t){var e=t[0],n=t[1],a=t[2],r=i(t)[0],o=1/255*Math.min(e,Math.min(n,a)),a=1-1/255*Math.max(e,Math.max(n,a));return[r,100*o,100*a]}function s(t){var e,n,i,a,r=t[0]/255,o=t[1]/255,s=t[2]/255;return a=Math.min(1-r,1-o,1-s),e=(1-r-a)/(1-a)||0,n=(1-o-a)/(1-a)||0,i=(1-s-a)/(1-a)||0,[100*e,100*n,100*i,100*a]}function l(t){return K[JSON.stringify(t)]}function u(t){var e=t[0]/255,n=t[1]/255,i=t[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92;var a=.4124*e+.3576*n+.1805*i,r=.2126*e+.7152*n+.0722*i,o=.0193*e+.1192*n+.9505*i;return[100*a,100*r,100*o]}function d(t){var e,n,i,a=u(t),r=a[0],o=a[1],s=a[2];return r/=95.047,o/=100,s/=108.883,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,e=116*o-16,n=500*(r-o),i=200*(o-s),[e,n,i]}function c(t){return Y(d(t))}function h(t){var e,n,i,a,r,o=t[0]/360,s=t[1]/100,l=t[2]/100;if(0==s)return r=255*l,[r,r,r];n=.5>l?l*(1+s):l+s-l*s,e=2*l-n,a=[0,0,0];for(var u=0;3>u;u++)i=o+1/3*-(u-1),0>i&&i++,i>1&&i--,r=1>6*i?e+6*(n-e)*i:1>2*i?n:2>3*i?e+(n-e)*(2/3-i)*6:e,a[u]=255*r;return a}function f(t){var e,n,i=t[0],a=t[1]/100,r=t[2]/100;return 0===r?[0,0,0]:(r*=2,a*=1>=r?r:2-r,n=(r+a)/2,e=2*a/(r+a),[i,100*e,100*n])}function m(t){return o(h(t))}function p(t){return s(h(t))}function v(t){return l(h(t))}function y(t){var e=t[0]/60,n=t[1]/100,i=t[2]/100,a=Math.floor(e)%6,r=e-Math.floor(e),o=255*i*(1-n),s=255*i*(1-n*r),l=255*i*(1-n*(1-r)),i=255*i;switch(a){case 0:return[i,l,o];case 1:return[s,i,o];case 2:return[o,i,l];case 3:return[o,s,i];case 4:return[l,o,i];case 5:return[i,o,s]}}function x(t){var e,n,i=t[0],a=t[1]/100,r=t[2]/100;return n=(2-a)*r,e=a*r,e/=1>=n?n:2-n,e=e||0,n/=2,[i,100*e,100*n]}function k(t){return o(y(t))}function _(t){return s(y(t))}function w(t){return l(y(t))}function S(t){var e,n,i,a,o=t[0]/360,s=t[1]/100,l=t[2]/100,u=s+l;switch(u>1&&(s/=u,l/=u),e=Math.floor(6*o),n=1-l,i=6*o-e,0!=(1&e)&&(i=1-i),a=s+i*(n-s),e){default:case 6:case 0:r=n,g=a,b=s;break;case 1:r=a,g=n,b=s;break;case 2:r=s,g=n,b=a;break;case 3:r=s,g=a,b=n;break;case 4:r=a,g=s,b=n;break;case 5:r=n,g=s,b=a}return[255*r,255*g,255*b]}function M(t){return i(S(t))}function D(t){return a(S(t))}function C(t){return s(S(t))}function T(t){return l(S(t))}function P(t){var e,n,i,a=t[0]/100,r=t[1]/100,o=t[2]/100,s=t[3]/100;return e=1-Math.min(1,a*(1-s)+s),n=1-Math.min(1,r*(1-s)+s),i=1-Math.min(1,o*(1-s)+s),[255*e,255*n,255*i]}function I(t){return i(P(t))}function F(t){return a(P(t))}function A(t){return o(P(t))}function O(t){return l(P(t))}function R(t){var e,n,i,a=t[0]/100,r=t[1]/100,o=t[2]/100;return e=3.2406*a+-1.5372*r+o*-.4986,n=a*-.9689+1.8758*r+.0415*o,i=.0557*a+r*-.204+1.057*o,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:e=12.92*e,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n=12.92*n,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=12.92*i,e=Math.min(Math.max(0,e),1),n=Math.min(Math.max(0,n),1),i=Math.min(Math.max(0,i),1),[255*e,255*n,255*i]}function L(t){var e,n,i,a=t[0],r=t[1],o=t[2];return a/=95.047,r/=100,o/=108.883,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,e=116*r-16,n=500*(a-r),i=200*(r-o),[e,n,i]}function W(t){return Y(L(t))}function V(t){var e,n,i,a,r=t[0],o=t[1],s=t[2];return 8>=r?(n=100*r/903.3,a=7.787*(n/100)+16/116):(n=100*Math.pow((r+16)/116,3),a=Math.pow(n/100,1/3)),e=.008856>=e/95.047?e=95.047*(o/500+a-16/116)/7.787:95.047*Math.pow(o/500+a,3),i=.008859>=i/108.883?i=108.883*(a-s/200-16/116)/7.787:108.883*Math.pow(a-s/200,3),[e,n,i]}function Y(t){var e,n,i,a=t[0],r=t[1],o=t[2];return e=Math.atan2(o,r),n=360*e/2/Math.PI,0>n&&(n+=360),i=Math.sqrt(r*r+o*o),[a,i,n]}function B(t){return R(V(t))}function z(t){var e,n,i,a=t[0],r=t[1],o=t[2];return i=o/360*2*Math.PI,e=r*Math.cos(i),n=r*Math.sin(i),[a,e,n]}function N(t){return V(z(t))}function H(t){return B(z(t))}function E(t){return J[t]}function U(t){return i(E(t))}function j(t){return a(E(t))}function G(t){return o(E(t))}function q(t){return s(E(t))}function Z(t){return d(E(t))}function X(t){return u(E(t))}e.exports={rgb2hsl:i,rgb2hsv:a,rgb2hwb:o,rgb2cmyk:s,rgb2keyword:l,rgb2xyz:u,rgb2lab:d,rgb2lch:c,hsl2rgb:h,hsl2hsv:f,hsl2hwb:m,hsl2cmyk:p,hsl2keyword:v,hsv2rgb:y,hsv2hsl:x,hsv2hwb:k,hsv2cmyk:_,hsv2keyword:w,hwb2rgb:S,hwb2hsl:M,hwb2hsv:D,hwb2cmyk:C,hwb2keyword:T,cmyk2rgb:P,cmyk2hsl:I,cmyk2hsv:F,cmyk2hwb:A,cmyk2keyword:O,keyword2rgb:E,keyword2hsl:U,keyword2hsv:j,keyword2hwb:G,keyword2cmyk:q,keyword2lab:Z,keyword2xyz:X,xyz2rgb:R,xyz2lab:L,xyz2lch:W,lab2xyz:V,lab2rgb:B,lab2lch:Y,lch2lab:z,lch2xyz:N,lch2rgb:H};var J={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},K={};for(var Q in J)K[JSON.stringify(J[Q])]=Q},{}],44:[function(t,e,n){var i=t(43),a=function(){return new u};for(var r in i){a[r+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),i[t](e)}}(r);var o=/(\w+)2(\w+)/.exec(r),s=o[1],l=o[2];a[s]=a[s]||{},a[s][l]=a[r]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var n=i[t](e);if("string"==typeof n||void 0===n)return n;for(var a=0;a<n.length;a++)n[a]=Math.round(n[a]);return n}}(r)}var u=function(){this.convs={}};u.prototype.routeSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n))},u.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},u.prototype.getValues=function(t){var e=this.convs[t];if(!e){var n=this.space,i=this.convs[n];e=a[n][t](i),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){u.prototype[t]=function(e){return this.routeSpace(t,arguments)}}),e.exports=a},{43:43}],45:[function(t,e,n){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],46:[function(e,n,i){!function(e,a){"object"==typeof i&&"undefined"!=typeof n?n.exports=a():"function"==typeof t&&t.amd?t(a):e.moment=a()}(this,function(){"use strict";function t(){return vi.apply(null,arguments)}function i(t){vi=t}function a(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)}function r(t){return null!=t&&"[object Object]"===Object.prototype.toString.call(t)}function o(t){var e;for(e in t)return!1;return!0}function s(t){return"number"==typeof value||"[object Number]"===Object.prototype.toString.call(t)}function l(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function u(t,e){var n,i=[];for(n=0;n<t.length;++n)i.push(e(t[n],n));return i}function d(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function c(t,e){for(var n in e)d(e,n)&&(t[n]=e[n]);return d(e,"toString")&&(t.toString=e.toString),d(e,"valueOf")&&(t.valueOf=e.valueOf),t}function h(t,e,n,i){return ye(t,e,n,i,!0).utc()}function f(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function g(t){return null==t._pf&&(t._pf=f()),t._pf}function m(t){if(null==t._isValid){var e=g(t),n=yi.call(e.parsedDateParts,function(t){return null!=t}),i=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidMonth&&!e.invalidWeekday&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&n);if(t._strict&&(i=i&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour),null!=Object.isFrozen&&Object.isFrozen(t))return i;t._isValid=i}return t._isValid}function p(t){var e=h(NaN);return null!=t?c(g(e),t):g(e).userInvalidated=!0,e}function v(t){return void 0===t}function b(t,e){var n,i,a;if(v(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),v(e._i)||(t._i=e._i),v(e._f)||(t._f=e._f),v(e._l)||(t._l=e._l),v(e._strict)||(t._strict=e._strict),v(e._tzm)||(t._tzm=e._tzm),v(e._isUTC)||(t._isUTC=e._isUTC),v(e._offset)||(t._offset=e._offset),v(e._pf)||(t._pf=g(e)),v(e._locale)||(t._locale=e._locale),xi.length>0)for(n in xi)i=xi[n],a=e[i],v(a)||(t[i]=a);return t}function y(e){b(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),ki===!1&&(ki=!0,t.updateOffset(this),ki=!1)}function x(t){return t instanceof y||null!=t&&null!=t._isAMomentObject}function k(t){return 0>t?Math.ceil(t)||0:Math.floor(t)}function _(t){var e=+t,n=0;return 0!==e&&isFinite(e)&&(n=k(e)),n}function w(t,e,n){var i,a=Math.min(t.length,e.length),r=Math.abs(t.length-e.length),o=0;for(i=0;a>i;i++)(n&&t[i]!==e[i]||!n&&_(t[i])!==_(e[i]))&&o++;return o+r}function S(e){t.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function M(e,n){var i=!0;return c(function(){if(null!=t.deprecationHandler&&t.deprecationHandler(null,e),i){for(var a,r=[],o=0;o<arguments.length;o++){if(a="","object"==typeof arguments[o]){a+="\n["+o+"] ";for(var s in arguments[0])a+=s+": "+arguments[0][s]+", ";a=a.slice(0,-2)}else a=arguments[o];r.push(a)}S(e+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack),i=!1}return n.apply(this,arguments)},n)}function D(e,n){null!=t.deprecationHandler&&t.deprecationHandler(e,n),_i[e]||(S(n),_i[e]=!0)}function C(t){return t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)}function T(t){var e,n;for(n in t)e=t[n],C(e)?this[n]=e:this["_"+n]=e;this._config=t,this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function P(t,e){var n,i=c({},t);for(n in e)d(e,n)&&(r(t[n])&&r(e[n])?(i[n]={},c(i[n],t[n]),c(i[n],e[n])):null!=e[n]?i[n]=e[n]:delete i[n]);for(n in t)d(t,n)&&!d(e,n)&&r(t[n])&&(i[n]=c({},i[n]));return i}function I(t){null!=t&&this.set(t)}function F(t,e,n){var i=this._calendar[t]||this._calendar.sameElse;return C(i)?i.call(e,n):i}function A(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t])}function O(){return this._invalidDate}function R(t){return this._ordinal.replace("%d",t)}function L(t,e,n,i){var a=this._relativeTime[n];return C(a)?a(t,e,n,i):a.replace(/%d/i,t)}function W(t,e){var n=this._relativeTime[t>0?"future":"past"];return C(n)?n(e):n.replace(/%s/i,e)}function V(t,e){var n=t.toLowerCase();Ai[n]=Ai[n+"s"]=Ai[e]=t}function Y(t){return"string"==typeof t?Ai[t]||Ai[t.toLowerCase()]:void 0}function B(t){var e,n,i={};for(n in t)d(t,n)&&(e=Y(n),e&&(i[e]=t[n]));return i}function z(t,e){Oi[t]=e}function N(t){var e=[];for(var n in t)e.push({unit:n,priority:Oi[n]});return e.sort(function(t,e){return t.priority-e.priority}),e}function H(e,n){return function(i){return null!=i?(U(this,e,i),t.updateOffset(this,n),this):E(this,e)}}function E(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function U(t,e,n){t.isValid()&&t._d["set"+(t._isUTC?"UTC":"")+e](n)}function j(t){return t=Y(t),C(this[t])?this[t]():this}function G(t,e){if("object"==typeof t){t=B(t);for(var n=N(t),i=0;i<n.length;i++)this[n[i].unit](t[n[i].unit])}else if(t=Y(t),C(this[t]))return this[t](e);return this}function q(t,e,n){var i=""+Math.abs(t),a=e-i.length,r=t>=0;return(r?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+i}function Z(t,e,n,i){var a=i;"string"==typeof i&&(a=function(){return this[i]()}),t&&(Vi[t]=a),e&&(Vi[e[0]]=function(){return q(a.apply(this,arguments),e[1],e[2])}),n&&(Vi[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),t)})}function X(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function J(t){var e,n,i=t.match(Ri);for(e=0,n=i.length;n>e;e++)Vi[i[e]]?i[e]=Vi[i[e]]:i[e]=X(i[e]);return function(e){var a,r="";for(a=0;n>a;a++)r+=i[a]instanceof Function?i[a].call(e,t):i[a];return r}}function K(t,e){return t.isValid()?(e=Q(e,t.localeData()),Wi[e]=Wi[e]||J(e),Wi[e](t)):t.localeData().invalidDate()}function Q(t,e){function n(t){return e.longDateFormat(t)||t}var i=5;for(Li.lastIndex=0;i>=0&&Li.test(t);)t=t.replace(Li,n),Li.lastIndex=0,i-=1;return t}function $(t,e,n){ea[t]=C(e)?e:function(t,i){return t&&n?n:e}}function tt(t,e){return d(ea,t)?ea[t](e._strict,e._locale):new RegExp(et(t))}function et(t){return nt(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,n,i,a){return e||n||i||a}))}function nt(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function it(t,e){var n,i=e;for("string"==typeof t&&(t=[t]),s(e)&&(i=function(t,n){n[e]=_(t)}),n=0;n<t.length;n++)na[t[n]]=i}function at(t,e){it(t,function(t,n,i,a){i._w=i._w||{},e(t,i._w,i,a)})}function rt(t,e,n){null!=e&&d(na,t)&&na[t](e,n._a,n,t)}function ot(t,e){return new Date(Date.UTC(t,e+1,0)).getUTCDate()}function st(t,e){return t?a(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||fa).test(e)?"format":"standalone"][t.month()]:this._months}function lt(t,e){return t?a(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[fa.test(e)?"format":"standalone"][t.month()]:this._monthsShort}function ut(t,e,n){var i,a,r,o=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;12>i;++i)r=h([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===e?(a=ha.call(this._shortMonthsParse,o),-1!==a?a:null):(a=ha.call(this._longMonthsParse,o),-1!==a?a:null):"MMM"===e?(a=ha.call(this._shortMonthsParse,o),-1!==a?a:(a=ha.call(this._longMonthsParse,o),-1!==a?a:null)):(a=ha.call(this._longMonthsParse,o),-1!==a?a:(a=ha.call(this._shortMonthsParse,o),-1!==a?a:null))}function dt(t,e,n){var i,a,r;if(this._monthsParseExact)return ut.call(this,t,e,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;12>i;i++){if(a=h([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(r="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[i]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===e&&this._longMonthsParse[i].test(t))return i;if(n&&"MMM"===e&&this._shortMonthsParse[i].test(t))return i;if(!n&&this._monthsParse[i].test(t))return i}}function ct(t,e){var n;if(!t.isValid())return t;if("string"==typeof e)if(/^\d+$/.test(e))e=_(e);else if(e=t.localeData().monthsParse(e),!s(e))return t;return n=Math.min(t.date(),ot(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t}function ht(e){return null!=e?(ct(this,e),t.updateOffset(this,!0),this):E(this,"Month")}function ft(){return ot(this.year(),this.month())}function gt(t){return this._monthsParseExact?(d(this,"_monthsRegex")||pt.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(d(this,"_monthsShortRegex")||(this._monthsShortRegex=pa),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function mt(t){return this._monthsParseExact?(d(this,"_monthsRegex")||pt.call(this),t?this._monthsStrictRegex:this._monthsRegex):(d(this,"_monthsRegex")||(this._monthsRegex=va),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function pt(){function t(t,e){return e.length-t.length}var e,n,i=[],a=[],r=[];for(e=0;12>e;e++)n=h([2e3,e]),i.push(this.monthsShort(n,"")),a.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(i.sort(t),a.sort(t),r.sort(t),e=0;12>e;e++)i[e]=nt(i[e]),a[e]=nt(a[e]);for(e=0;24>e;e++)r[e]=nt(r[e]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i")}function vt(t){return bt(t)?366:365}function bt(t){return t%4===0&&t%100!==0||t%400===0}function yt(){return bt(this.year())}function xt(t,e,n,i,a,r,o){var s=new Date(t,e,n,i,a,r,o);return 100>t&&t>=0&&isFinite(s.getFullYear())&&s.setFullYear(t),s}function kt(t){var e=new Date(Date.UTC.apply(null,arguments));return 100>t&&t>=0&&isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t),e}function _t(t,e,n){var i=7+e-n,a=(7+kt(t,0,i).getUTCDay()-e)%7;return-a+i-1}function wt(t,e,n,i,a){var r,o,s=(7+n-i)%7,l=_t(t,i,a),u=1+7*(e-1)+s+l;return 0>=u?(r=t-1,o=vt(r)+u):u>vt(t)?(r=t+1,o=u-vt(t)):(r=t,o=u),{year:r,dayOfYear:o}}function St(t,e,n){var i,a,r=_t(t.year(),e,n),o=Math.floor((t.dayOfYear()-r-1)/7)+1;return 1>o?(a=t.year()-1,i=o+Mt(a,e,n)):o>Mt(t.year(),e,n)?(i=o-Mt(t.year(),e,n),a=t.year()+1):(a=t.year(),i=o),{week:i,year:a}}function Mt(t,e,n){var i=_t(t,e,n),a=_t(t+1,e,n);return(vt(t)-i+a)/7}function Dt(t){return St(t,this._week.dow,this._week.doy).week}function Ct(){return this._week.dow}function Tt(){return this._week.doy}function Pt(t){var e=this.localeData().week(this);return null==t?e:this.add(7*(t-e),"d")}function It(t){var e=St(this,1,4).week;return null==t?e:this.add(7*(t-e),"d")}function Ft(t,e){return"string"!=typeof t?t:isNaN(t)?(t=e.weekdaysParse(t),"number"==typeof t?t:null):parseInt(t,10)}function At(t,e){return"string"==typeof t?e.weekdaysParse(t)%7||7:isNaN(t)?null:t}function Ot(t,e){return t?a(this._weekdays)?this._weekdays[t.day()]:this._weekdays[this._weekdays.isFormat.test(e)?"format":"standalone"][t.day()]:this._weekdays}function Rt(t){return t?this._weekdaysShort[t.day()]:this._weekdaysShort}function Lt(t){return t?this._weekdaysMin[t.day()]:this._weekdaysMin}function Wt(t,e,n){var i,a,r,o=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],
i=0;7>i;++i)r=h([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===e?(a=ha.call(this._weekdaysParse,o),-1!==a?a:null):"ddd"===e?(a=ha.call(this._shortWeekdaysParse,o),-1!==a?a:null):(a=ha.call(this._minWeekdaysParse,o),-1!==a?a:null):"dddd"===e?(a=ha.call(this._weekdaysParse,o),-1!==a?a:(a=ha.call(this._shortWeekdaysParse,o),-1!==a?a:(a=ha.call(this._minWeekdaysParse,o),-1!==a?a:null))):"ddd"===e?(a=ha.call(this._shortWeekdaysParse,o),-1!==a?a:(a=ha.call(this._weekdaysParse,o),-1!==a?a:(a=ha.call(this._minWeekdaysParse,o),-1!==a?a:null))):(a=ha.call(this._minWeekdaysParse,o),-1!==a?a:(a=ha.call(this._weekdaysParse,o),-1!==a?a:(a=ha.call(this._shortWeekdaysParse,o),-1!==a?a:null)))}function Vt(t,e,n){var i,a,r;if(this._weekdaysParseExact)return Wt.call(this,t,e,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;7>i;i++){if(a=h([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(a,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(a,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(a,"").replace(".",".?")+"$","i")),this._weekdaysParse[i]||(r="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[i]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===e&&this._fullWeekdaysParse[i].test(t))return i;if(n&&"ddd"===e&&this._shortWeekdaysParse[i].test(t))return i;if(n&&"dd"===e&&this._minWeekdaysParse[i].test(t))return i;if(!n&&this._weekdaysParse[i].test(t))return i}}function Yt(t){if(!this.isValid())return null!=t?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(t=Ft(t,this.localeData()),this.add(t-e,"d")):e}function Bt(t){if(!this.isValid())return null!=t?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return null==t?e:this.add(t-e,"d")}function zt(t){if(!this.isValid())return null!=t?this:NaN;if(null!=t){var e=At(t,this.localeData());return this.day(this.day()%7?e:e-7)}return this.day()||7}function Nt(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Ut.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(d(this,"_weekdaysRegex")||(this._weekdaysRegex=wa),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function Ht(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Ut.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(d(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Sa),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Et(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Ut.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(d(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ma),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Ut(){function t(t,e){return e.length-t.length}var e,n,i,a,r,o=[],s=[],l=[],u=[];for(e=0;7>e;e++)n=h([2e3,1]).day(e),i=this.weekdaysMin(n,""),a=this.weekdaysShort(n,""),r=this.weekdays(n,""),o.push(i),s.push(a),l.push(r),u.push(i),u.push(a),u.push(r);for(o.sort(t),s.sort(t),l.sort(t),u.sort(t),e=0;7>e;e++)s[e]=nt(s[e]),l[e]=nt(l[e]),u[e]=nt(u[e]);this._weekdaysRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}function jt(){return this.hours()%12||12}function Gt(){return this.hours()||24}function qt(t,e){Z(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}function Zt(t,e){return e._meridiemParse}function Xt(t){return"p"===(t+"").toLowerCase().charAt(0)}function Jt(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"}function Kt(t){return t?t.toLowerCase().replace("_","-"):t}function Qt(t){for(var e,n,i,a,r=0;r<t.length;){for(a=Kt(t[r]).split("-"),e=a.length,n=Kt(t[r+1]),n=n?n.split("-"):null;e>0;){if(i=$t(a.slice(0,e).join("-")))return i;if(n&&n.length>=e&&w(a,n,!0)>=e-1)break;e--}r++}return null}function $t(t){var i=null;if(!Ia[t]&&"undefined"!=typeof n&&n&&n.exports)try{i=Da._abbr,e("./locale/"+t),te(i)}catch(a){}return Ia[t]}function te(t,e){var n;return t&&(n=v(e)?ie(t):ee(t,e),n&&(Da=n)),Da._abbr}function ee(t,e){if(null!==e){var n=Pa;if(e.abbr=t,null!=Ia[t])D("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=Ia[t]._config;else if(null!=e.parentLocale){if(null==Ia[e.parentLocale])return Fa[e.parentLocale]||(Fa[e.parentLocale]=[]),Fa[e.parentLocale].push({name:t,config:e}),null;n=Ia[e.parentLocale]._config}return Ia[t]=new I(P(n,e)),Fa[t]&&Fa[t].forEach(function(t){ee(t.name,t.config)}),te(t),Ia[t]}return delete Ia[t],null}function ne(t,e){if(null!=e){var n,i=Pa;null!=Ia[t]&&(i=Ia[t]._config),e=P(i,e),n=new I(e),n.parentLocale=Ia[t],Ia[t]=n,te(t)}else null!=Ia[t]&&(null!=Ia[t].parentLocale?Ia[t]=Ia[t].parentLocale:null!=Ia[t]&&delete Ia[t]);return Ia[t]}function ie(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return Da;if(!a(t)){if(e=$t(t))return e;t=[t]}return Qt(t)}function ae(){return Mi(Ia)}function re(t){var e,n=t._a;return n&&-2===g(t).overflow&&(e=n[aa]<0||n[aa]>11?aa:n[ra]<1||n[ra]>ot(n[ia],n[aa])?ra:n[oa]<0||n[oa]>24||24===n[oa]&&(0!==n[sa]||0!==n[la]||0!==n[ua])?oa:n[sa]<0||n[sa]>59?sa:n[la]<0||n[la]>59?la:n[ua]<0||n[ua]>999?ua:-1,g(t)._overflowDayOfYear&&(ia>e||e>ra)&&(e=ra),g(t)._overflowWeeks&&-1===e&&(e=da),g(t)._overflowWeekday&&-1===e&&(e=ca),g(t).overflow=e),t}function oe(t){var e,n,i,a,r,o,s=t._i,l=Aa.exec(s)||Oa.exec(s);if(l){for(g(t).iso=!0,e=0,n=La.length;n>e;e++)if(La[e][1].exec(l[1])){a=La[e][0],i=La[e][2]!==!1;break}if(null==a)return void(t._isValid=!1);if(l[3]){for(e=0,n=Wa.length;n>e;e++)if(Wa[e][1].exec(l[3])){r=(l[2]||" ")+Wa[e][0];break}if(null==r)return void(t._isValid=!1)}if(!i&&null!=r)return void(t._isValid=!1);if(l[4]){if(!Ra.exec(l[4]))return void(t._isValid=!1);o="Z"}t._f=a+(r||"")+(o||""),he(t)}else t._isValid=!1}function se(e){var n=Va.exec(e._i);return null!==n?void(e._d=new Date(+n[1])):(oe(e),void(e._isValid===!1&&(delete e._isValid,t.createFromInputFallback(e))))}function le(t,e,n){return null!=t?t:null!=e?e:n}function ue(e){var n=new Date(t.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function de(t){var e,n,i,a,r=[];if(!t._d){for(i=ue(t),t._w&&null==t._a[ra]&&null==t._a[aa]&&ce(t),t._dayOfYear&&(a=le(t._a[ia],i[ia]),t._dayOfYear>vt(a)&&(g(t)._overflowDayOfYear=!0),n=kt(a,0,t._dayOfYear),t._a[aa]=n.getUTCMonth(),t._a[ra]=n.getUTCDate()),e=0;3>e&&null==t._a[e];++e)t._a[e]=r[e]=i[e];for(;7>e;e++)t._a[e]=r[e]=null==t._a[e]?2===e?1:0:t._a[e];24===t._a[oa]&&0===t._a[sa]&&0===t._a[la]&&0===t._a[ua]&&(t._nextDay=!0,t._a[oa]=0),t._d=(t._useUTC?kt:xt).apply(null,r),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[oa]=24)}}function ce(t){var e,n,i,a,r,o,s,l;if(e=t._w,null!=e.GG||null!=e.W||null!=e.E)r=1,o=4,n=le(e.GG,t._a[ia],St(xe(),1,4).year),i=le(e.W,1),a=le(e.E,1),(1>a||a>7)&&(l=!0);else{r=t._locale._week.dow,o=t._locale._week.doy;var u=St(xe(),r,o);n=le(e.gg,t._a[ia],u.year),i=le(e.w,u.week),null!=e.d?(a=e.d,(0>a||a>6)&&(l=!0)):null!=e.e?(a=e.e+r,(e.e<0||e.e>6)&&(l=!0)):a=r}1>i||i>Mt(n,r,o)?g(t)._overflowWeeks=!0:null!=l?g(t)._overflowWeekday=!0:(s=wt(n,i,a,r,o),t._a[ia]=s.year,t._dayOfYear=s.dayOfYear)}function he(e){if(e._f===t.ISO_8601)return void oe(e);e._a=[],g(e).empty=!0;var n,i,a,r,o,s=""+e._i,l=s.length,u=0;for(a=Q(e._f,e._locale).match(Ri)||[],n=0;n<a.length;n++)r=a[n],i=(s.match(tt(r,e))||[])[0],i&&(o=s.substr(0,s.indexOf(i)),o.length>0&&g(e).unusedInput.push(o),s=s.slice(s.indexOf(i)+i.length),u+=i.length),Vi[r]?(i?g(e).empty=!1:g(e).unusedTokens.push(r),rt(r,i,e)):e._strict&&!i&&g(e).unusedTokens.push(r);g(e).charsLeftOver=l-u,s.length>0&&g(e).unusedInput.push(s),e._a[oa]<=12&&g(e).bigHour===!0&&e._a[oa]>0&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[oa]=fe(e._locale,e._a[oa],e._meridiem),de(e),re(e)}function fe(t,e,n){var i;return null==n?e:null!=t.meridiemHour?t.meridiemHour(e,n):null!=t.isPM?(i=t.isPM(n),i&&12>e&&(e+=12),i||12!==e||(e=0),e):e}function ge(t){var e,n,i,a,r;if(0===t._f.length)return g(t).invalidFormat=!0,void(t._d=new Date(NaN));for(a=0;a<t._f.length;a++)r=0,e=b({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[a],he(e),m(e)&&(r+=g(e).charsLeftOver,r+=10*g(e).unusedTokens.length,g(e).score=r,(null==i||i>r)&&(i=r,n=e));c(t,n||e)}function me(t){if(!t._d){var e=B(t._i);t._a=u([e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],function(t){return t&&parseInt(t,10)}),de(t)}}function pe(t){var e=new y(re(ve(t)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function ve(t){var e=t._i,n=t._f;return t._locale=t._locale||ie(t._l),null===e||void 0===n&&""===e?p({nullInput:!0}):("string"==typeof e&&(t._i=e=t._locale.preparse(e)),x(e)?new y(re(e)):(l(e)?t._d=e:a(n)?ge(t):n?he(t):be(t),m(t)||(t._d=null),t))}function be(e){var n=e._i;void 0===n?e._d=new Date(t.now()):l(n)?e._d=new Date(n.valueOf()):"string"==typeof n?se(e):a(n)?(e._a=u(n.slice(0),function(t){return parseInt(t,10)}),de(e)):"object"==typeof n?me(e):s(n)?e._d=new Date(n):t.createFromInputFallback(e)}function ye(t,e,n,i,s){var l={};return(n===!0||n===!1)&&(i=n,n=void 0),(r(t)&&o(t)||a(t)&&0===t.length)&&(t=void 0),l._isAMomentObject=!0,l._useUTC=l._isUTC=s,l._l=n,l._i=t,l._f=e,l._strict=i,pe(l)}function xe(t,e,n,i){return ye(t,e,n,i,!1)}function ke(t,e){var n,i;if(1===e.length&&a(e[0])&&(e=e[0]),!e.length)return xe();for(n=e[0],i=1;i<e.length;++i)(!e[i].isValid()||e[i][t](n))&&(n=e[i]);return n}function _e(){var t=[].slice.call(arguments,0);return ke("isBefore",t)}function we(){var t=[].slice.call(arguments,0);return ke("isAfter",t)}function Se(t){var e=B(t),n=e.year||0,i=e.quarter||0,a=e.month||0,r=e.week||0,o=e.day||0,s=e.hour||0,l=e.minute||0,u=e.second||0,d=e.millisecond||0;this._milliseconds=+d+1e3*u+6e4*l+1e3*s*60*60,this._days=+o+7*r,this._months=+a+3*i+12*n,this._data={},this._locale=ie(),this._bubble()}function Me(t){return t instanceof Se}function De(t){return 0>t?-1*Math.round(-1*t):Math.round(t)}function Ce(t,e){Z(t,0,0,function(){var t=this.utcOffset(),n="+";return 0>t&&(t=-t,n="-"),n+q(~~(t/60),2)+e+q(~~t%60,2)})}function Te(t,e){var n=(e||"").match(t);if(null===n)return null;var i=n[n.length-1]||[],a=(i+"").match(Na)||["-",0,0],r=+(60*a[1])+_(a[2]);return 0===r?0:"+"===a[0]?r:-r}function Pe(e,n){var i,a;return n._isUTC?(i=n.clone(),a=(x(e)||l(e)?e.valueOf():xe(e).valueOf())-i.valueOf(),i._d.setTime(i._d.valueOf()+a),t.updateOffset(i,!1),i):xe(e).local()}function Ie(t){return 15*-Math.round(t._d.getTimezoneOffset()/15)}function Fe(e,n){var i,a=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(e=Te(Qi,e),null===e)return this}else Math.abs(e)<16&&(e=60*e);return!this._isUTC&&n&&(i=Ie(this)),this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),a!==e&&(!n||this._changeInProgress?qe(this,He(e-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,t.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?a:Ie(this)}function Ae(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function Oe(t){return this.utcOffset(0,t)}function Re(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Ie(this),"m")),this}function Le(){if(null!=this._tzm)this.utcOffset(this._tzm);else if("string"==typeof this._i){var t=Te(Ki,this._i);null!=t?this.utcOffset(t):this.utcOffset(0,!0)}return this}function We(t){return this.isValid()?(t=t?xe(t).utcOffset():0,(this.utcOffset()-t)%60===0):!1}function Ve(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ye(){if(!v(this._isDSTShifted))return this._isDSTShifted;var t={};if(b(t,this),t=ve(t),t._a){var e=t._isUTC?h(t._a):xe(t._a);this._isDSTShifted=this.isValid()&&w(t._a,e.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Be(){return this.isValid()?!this._isUTC:!1}function ze(){return this.isValid()?this._isUTC:!1}function Ne(){return this.isValid()?this._isUTC&&0===this._offset:!1}function He(t,e){var n,i,a,r=t,o=null;return Me(t)?r={ms:t._milliseconds,d:t._days,M:t._months}:s(t)?(r={},e?r[e]=t:r.milliseconds=t):(o=Ha.exec(t))?(n="-"===o[1]?-1:1,r={y:0,d:_(o[ra])*n,h:_(o[oa])*n,m:_(o[sa])*n,s:_(o[la])*n,ms:_(De(1e3*o[ua]))*n}):(o=Ea.exec(t))?(n="-"===o[1]?-1:1,r={y:Ee(o[2],n),M:Ee(o[3],n),w:Ee(o[4],n),d:Ee(o[5],n),h:Ee(o[6],n),m:Ee(o[7],n),s:Ee(o[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(a=je(xe(r.from),xe(r.to)),r={},r.ms=a.milliseconds,r.M=a.months),i=new Se(r),Me(t)&&d(t,"_locale")&&(i._locale=t._locale),i}function Ee(t,e){var n=t&&parseFloat(t.replace(",","."));return(isNaN(n)?0:n)*e}function Ue(t,e){var n={milliseconds:0,months:0};return n.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function je(t,e){var n;return t.isValid()&&e.isValid()?(e=Pe(e,t),t.isBefore(e)?n=Ue(t,e):(n=Ue(e,t),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Ge(t,e){return function(n,i){var a,r;return null===i||isNaN(+i)||(D(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),r=n,n=i,i=r),n="string"==typeof n?+n:n,a=He(n,i),qe(this,a,t),this}}function qe(e,n,i,a){var r=n._milliseconds,o=De(n._days),s=De(n._months);e.isValid()&&(a=null==a?!0:a,r&&e._d.setTime(e._d.valueOf()+r*i),o&&U(e,"Date",E(e,"Date")+o*i),s&&ct(e,E(e,"Month")+s*i),a&&t.updateOffset(e,o||s))}function Ze(t,e){var n=t.diff(e,"days",!0);return-6>n?"sameElse":-1>n?"lastWeek":0>n?"lastDay":1>n?"sameDay":2>n?"nextDay":7>n?"nextWeek":"sameElse"}function Xe(e,n){var i=e||xe(),a=Pe(i,this).startOf("day"),r=t.calendarFormat(this,a)||"sameElse",o=n&&(C(n[r])?n[r].call(this,i):n[r]);return this.format(o||this.localeData().calendar(r,this,xe(i)))}function Je(){return new y(this)}function Ke(t,e){var n=x(t)?t:xe(t);return this.isValid()&&n.isValid()?(e=Y(v(e)?"millisecond":e),"millisecond"===e?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(e).valueOf()):!1}function Qe(t,e){var n=x(t)?t:xe(t);return this.isValid()&&n.isValid()?(e=Y(v(e)?"millisecond":e),"millisecond"===e?this.valueOf()<n.valueOf():this.clone().endOf(e).valueOf()<n.valueOf()):!1}function $e(t,e,n,i){return i=i||"()",("("===i[0]?this.isAfter(t,n):!this.isBefore(t,n))&&(")"===i[1]?this.isBefore(e,n):!this.isAfter(e,n))}function tn(t,e){var n,i=x(t)?t:xe(t);return this.isValid()&&i.isValid()?(e=Y(e||"millisecond"),"millisecond"===e?this.valueOf()===i.valueOf():(n=i.valueOf(),this.clone().startOf(e).valueOf()<=n&&n<=this.clone().endOf(e).valueOf())):!1}function en(t,e){return this.isSame(t,e)||this.isAfter(t,e)}function nn(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function an(t,e,n){var i,a,r,o;return this.isValid()?(i=Pe(t,this),i.isValid()?(a=6e4*(i.utcOffset()-this.utcOffset()),e=Y(e),"year"===e||"month"===e||"quarter"===e?(o=rn(this,i),"quarter"===e?o/=3:"year"===e&&(o/=12)):(r=this-i,o="second"===e?r/1e3:"minute"===e?r/6e4:"hour"===e?r/36e5:"day"===e?(r-a)/864e5:"week"===e?(r-a)/6048e5:r),n?o:k(o)):NaN):NaN}function rn(t,e){var n,i,a=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(a,"months");return 0>e-r?(n=t.clone().add(a-1,"months"),i=(e-r)/(r-n)):(n=t.clone().add(a+1,"months"),i=(e-r)/(n-r)),-(a+i)||0}function on(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function sn(){var t=this.clone().utc();return 0<t.year()&&t.year()<=9999?C(Date.prototype.toISOString)?this.toDate().toISOString():K(t,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):K(t,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function ln(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",e="";this.isLocal()||(t=0===this.utcOffset()?"moment.utc":"moment.parseZone",e="Z");var n="["+t+'("]',i=0<this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",r=e+'[")]';return this.format(n+i+a+r)}function un(e){e||(e=this.isUtc()?t.defaultFormatUtc:t.defaultFormat);var n=K(this,e);return this.localeData().postformat(n)}function dn(t,e){return this.isValid()&&(x(t)&&t.isValid()||xe(t).isValid())?He({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function cn(t){return this.from(xe(),t)}function hn(t,e){return this.isValid()&&(x(t)&&t.isValid()||xe(t).isValid())?He({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function fn(t){return this.to(xe(),t)}function gn(t){var e;return void 0===t?this._locale._abbr:(e=ie(t),null!=e&&(this._locale=e),this)}function mn(){return this._locale}function pn(t){switch(t=Y(t)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),"isoWeek"===t&&this.isoWeekday(1),"quarter"===t&&this.month(3*Math.floor(this.month()/3)),this}function vn(t){return t=Y(t),void 0===t||"millisecond"===t?this:("date"===t&&(t="day"),this.startOf(t).add(1,"isoWeek"===t?"week":t).subtract(1,"ms"))}function bn(){return this._d.valueOf()-6e4*(this._offset||0)}function yn(){return Math.floor(this.valueOf()/1e3)}function xn(){return new Date(this.valueOf())}function kn(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function _n(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function wn(){return this.isValid()?this.toISOString():null}function Sn(){return m(this)}function Mn(){return c({},g(this))}function Dn(){return g(this).overflow}function Cn(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Tn(t,e){Z(0,[t,t.length],0,e)}function Pn(t){return On.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function In(t){return On.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function Fn(){return Mt(this.year(),1,4)}function An(){var t=this.localeData()._week;return Mt(this.year(),t.dow,t.doy)}function On(t,e,n,i,a){var r;return null==t?St(this,i,a).year:(r=Mt(t,i,a),e>r&&(e=r),Rn.call(this,t,e,n,i,a))}function Rn(t,e,n,i,a){var r=wt(t,e,n,i,a),o=kt(r.year,0,r.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}function Ln(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)}function Wn(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"d")}function Vn(t,e){e[ua]=_(1e3*("0."+t))}function Yn(){return this._isUTC?"UTC":""}function Bn(){return this._isUTC?"Coordinated Universal Time":""}function zn(t){return xe(1e3*t)}function Nn(){return xe.apply(null,arguments).parseZone()}function Hn(t){return t}function En(t,e,n,i){var a=ie(),r=h().set(i,e);return a[n](r,t)}function Un(t,e,n){if(s(t)&&(e=t,t=void 0),t=t||"",null!=e)return En(t,e,n,"month");var i,a=[];for(i=0;12>i;i++)a[i]=En(t,i,n,"month");return a}function jn(t,e,n,i){"boolean"==typeof t?(s(e)&&(n=e,e=void 0),e=e||""):(e=t,n=e,t=!1,s(e)&&(n=e,e=void 0),e=e||"");var a=ie(),r=t?a._week.dow:0;if(null!=n)return En(e,(n+r)%7,i,"day");var o,l=[];for(o=0;7>o;o++)l[o]=En(e,(o+r)%7,i,"day");return l}function Gn(t,e){return Un(t,e,"months")}function qn(t,e){return Un(t,e,"monthsShort")}function Zn(t,e,n){return jn(t,e,n,"weekdays")}function Xn(t,e,n){return jn(t,e,n,"weekdaysShort")}function Jn(t,e,n){return jn(t,e,n,"weekdaysMin")}function Kn(){var t=this._data;return this._milliseconds=tr(this._milliseconds),this._days=tr(this._days),this._months=tr(this._months),t.milliseconds=tr(t.milliseconds),t.seconds=tr(t.seconds),t.minutes=tr(t.minutes),t.hours=tr(t.hours),t.months=tr(t.months),t.years=tr(t.years),this}function Qn(t,e,n,i){var a=He(e,n);return t._milliseconds+=i*a._milliseconds,t._days+=i*a._days,t._months+=i*a._months,t._bubble()}function $n(t,e){return Qn(this,t,e,1)}function ti(t,e){return Qn(this,t,e,-1)}function ei(t){return 0>t?Math.floor(t):Math.ceil(t)}function ni(){var t,e,n,i,a,r=this._milliseconds,o=this._days,s=this._months,l=this._data;return r>=0&&o>=0&&s>=0||0>=r&&0>=o&&0>=s||(r+=864e5*ei(ai(s)+o),o=0,s=0),l.milliseconds=r%1e3,t=k(r/1e3),l.seconds=t%60,e=k(t/60),l.minutes=e%60,n=k(e/60),l.hours=n%24,o+=k(n/24),a=k(ii(o)),s+=a,o-=ei(ai(a)),i=k(s/12),s%=12,l.days=o,l.months=s,l.years=i,this}function ii(t){return 4800*t/146097}function ai(t){return 146097*t/4800}function ri(t){var e,n,i=this._milliseconds;if(t=Y(t),"month"===t||"year"===t)return e=this._days+i/864e5,n=this._months+ii(e),"month"===t?n:n/12;switch(e=this._days+Math.round(ai(this._months)),t){case"week":return e/7+i/6048e5;case"day":return e+i/864e5;case"hour":return 24*e+i/36e5;case"minute":return 1440*e+i/6e4;case"second":return 86400*e+i/1e3;case"millisecond":return Math.floor(864e5*e)+i;default:throw new Error("Unknown unit "+t)}}function oi(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*_(this._months/12)}function si(t){return function(){return this.as(t)}}function li(t){return t=Y(t),this[t+"s"]()}function ui(t){return function(){return this._data[t]}}function di(){return k(this.days()/7)}function ci(t,e,n,i,a){return a.relativeTime(e||1,!!n,t,i)}function hi(t,e,n){var i=He(t).abs(),a=pr(i.as("s")),r=pr(i.as("m")),o=pr(i.as("h")),s=pr(i.as("d")),l=pr(i.as("M")),u=pr(i.as("y")),d=a<vr.s&&["s",a]||1>=r&&["m"]||r<vr.m&&["mm",r]||1>=o&&["h"]||o<vr.h&&["hh",o]||1>=s&&["d"]||s<vr.d&&["dd",s]||1>=l&&["M"]||l<vr.M&&["MM",l]||1>=u&&["y"]||["yy",u];return d[2]=e,d[3]=+t>0,d[4]=n,ci.apply(null,d)}function fi(t){return void 0===t?pr:"function"==typeof t?(pr=t,!0):!1}function gi(t,e){return void 0===vr[t]?!1:void 0===e?vr[t]:(vr[t]=e,!0)}function mi(t){var e=this.localeData(),n=hi(this,!t,e);return t&&(n=e.pastFuture(+this,n)),e.postformat(n)}function pi(){var t,e,n,i=br(this._milliseconds)/1e3,a=br(this._days),r=br(this._months);t=k(i/60),e=k(t/60),i%=60,t%=60,n=k(r/12),r%=12;var o=n,s=r,l=a,u=e,d=t,c=i,h=this.asSeconds();return h?(0>h?"-":"")+"P"+(o?o+"Y":"")+(s?s+"M":"")+(l?l+"D":"")+(u||d||c?"T":"")+(u?u+"H":"")+(d?d+"M":"")+(c?c+"S":""):"P0D"}var vi,bi;bi=Array.prototype.some?Array.prototype.some:function(t){for(var e=Object(this),n=e.length>>>0,i=0;n>i;i++)if(i in e&&t.call(this,e[i],i,e))return!0;return!1};var yi=bi,xi=t.momentProperties=[],ki=!1,_i={};t.suppressDeprecationWarnings=!1,t.deprecationHandler=null;var wi;wi=Object.keys?Object.keys:function(t){var e,n=[];for(e in t)d(t,e)&&n.push(e);return n};var Si,Mi=wi,Di={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Ci={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Ti="Invalid date",Pi="%d",Ii=/\d{1,2}/,Fi={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Ai={},Oi={},Ri=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Li=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Wi={},Vi={},Yi=/\d/,Bi=/\d\d/,zi=/\d{3}/,Ni=/\d{4}/,Hi=/[+-]?\d{6}/,Ei=/\d\d?/,Ui=/\d\d\d\d?/,ji=/\d\d\d\d\d\d?/,Gi=/\d{1,3}/,qi=/\d{1,4}/,Zi=/[+-]?\d{1,6}/,Xi=/\d+/,Ji=/[+-]?\d+/,Ki=/Z|[+-]\d\d:?\d\d/gi,Qi=/Z|[+-]\d\d(?::?\d\d)?/gi,$i=/[+-]?\d+(\.\d{1,3})?/,ta=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,ea={},na={},ia=0,aa=1,ra=2,oa=3,sa=4,la=5,ua=6,da=7,ca=8;Si=Array.prototype.indexOf?Array.prototype.indexOf:function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1};var ha=Si;Z("M",["MM",2],"Mo",function(){return this.month()+1}),Z("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)}),Z("MMMM",0,0,function(t){return this.localeData().months(this,t)}),V("month","M"),z("month",8),$("M",Ei),$("MM",Ei,Bi),$("MMM",function(t,e){return e.monthsShortRegex(t)}),$("MMMM",function(t,e){return e.monthsRegex(t)}),it(["M","MM"],function(t,e){e[aa]=_(t)-1}),it(["MMM","MMMM"],function(t,e,n,i){var a=n._locale.monthsParse(t,i,n._strict);null!=a?e[aa]=a:g(n).invalidMonth=t});var fa=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,ga="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ma="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),pa=ta,va=ta;Z("Y",0,0,function(){var t=this.year();return 9999>=t?""+t:"+"+t}),Z(0,["YY",2],0,function(){return this.year()%100}),Z(0,["YYYY",4],0,"year"),Z(0,["YYYYY",5],0,"year"),Z(0,["YYYYYY",6,!0],0,"year"),V("year","y"),z("year",1),$("Y",Ji),$("YY",Ei,Bi),$("YYYY",qi,Ni),$("YYYYY",Zi,Hi),$("YYYYYY",Zi,Hi),it(["YYYYY","YYYYYY"],ia),it("YYYY",function(e,n){n[ia]=2===e.length?t.parseTwoDigitYear(e):_(e)}),it("YY",function(e,n){n[ia]=t.parseTwoDigitYear(e)}),it("Y",function(t,e){e[ia]=parseInt(t,10)}),t.parseTwoDigitYear=function(t){return _(t)+(_(t)>68?1900:2e3)};var ba=H("FullYear",!0);Z("w",["ww",2],"wo","week"),Z("W",["WW",2],"Wo","isoWeek"),V("week","w"),V("isoWeek","W"),z("week",5),z("isoWeek",5),$("w",Ei),$("ww",Ei,Bi),$("W",Ei),$("WW",Ei,Bi),at(["w","ww","W","WW"],function(t,e,n,i){e[i.substr(0,1)]=_(t)});var ya={dow:0,doy:6};Z("d",0,"do","day"),Z("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)}),Z("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)}),Z("dddd",0,0,function(t){return this.localeData().weekdays(this,t)}),Z("e",0,0,"weekday"),Z("E",0,0,"isoWeekday"),V("day","d"),V("weekday","e"),V("isoWeekday","E"),z("day",11),z("weekday",11),z("isoWeekday",11),$("d",Ei),$("e",Ei),$("E",Ei),$("dd",function(t,e){return e.weekdaysMinRegex(t)}),$("ddd",function(t,e){return e.weekdaysShortRegex(t)}),$("dddd",function(t,e){return e.weekdaysRegex(t)}),at(["dd","ddd","dddd"],function(t,e,n,i){var a=n._locale.weekdaysParse(t,i,n._strict);null!=a?e.d=a:g(n).invalidWeekday=t}),at(["d","e","E"],function(t,e,n,i){e[i]=_(t)});var xa="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ka="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),_a="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),wa=ta,Sa=ta,Ma=ta;Z("H",["HH",2],0,"hour"),Z("h",["hh",2],0,jt),Z("k",["kk",2],0,Gt),Z("hmm",0,0,function(){return""+jt.apply(this)+q(this.minutes(),2)}),Z("hmmss",0,0,function(){return""+jt.apply(this)+q(this.minutes(),2)+q(this.seconds(),2)}),Z("Hmm",0,0,function(){return""+this.hours()+q(this.minutes(),2)}),Z("Hmmss",0,0,function(){return""+this.hours()+q(this.minutes(),2)+q(this.seconds(),2)}),qt("a",!0),qt("A",!1),V("hour","h"),z("hour",13),$("a",Zt),$("A",Zt),$("H",Ei),$("h",Ei),$("HH",Ei,Bi),$("hh",Ei,Bi),$("hmm",Ui),$("hmmss",ji),$("Hmm",Ui),$("Hmmss",ji),it(["H","HH"],oa),it(["a","A"],function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t}),it(["h","hh"],function(t,e,n){e[oa]=_(t),g(n).bigHour=!0}),it("hmm",function(t,e,n){var i=t.length-2;e[oa]=_(t.substr(0,i)),e[sa]=_(t.substr(i)),g(n).bigHour=!0}),it("hmmss",function(t,e,n){var i=t.length-4,a=t.length-2;e[oa]=_(t.substr(0,i)),e[sa]=_(t.substr(i,2)),e[la]=_(t.substr(a)),g(n).bigHour=!0}),it("Hmm",function(t,e,n){var i=t.length-2;e[oa]=_(t.substr(0,i)),e[sa]=_(t.substr(i))}),it("Hmmss",function(t,e,n){var i=t.length-4,a=t.length-2;e[oa]=_(t.substr(0,i)),e[sa]=_(t.substr(i,2)),e[la]=_(t.substr(a))});var Da,Ca=/[ap]\.?m?\.?/i,Ta=H("Hours",!0),Pa={calendar:Di,longDateFormat:Ci,invalidDate:Ti,ordinal:Pi,ordinalParse:Ii,relativeTime:Fi,months:ga,monthsShort:ma,week:ya,weekdays:xa,weekdaysMin:_a,weekdaysShort:ka,meridiemParse:Ca},Ia={},Fa={},Aa=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Oa=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ra=/Z|[+-]\d\d(?::?\d\d)?/,La=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Wa=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Va=/^\/?Date\((\-?\d+)/i;t.createFromInputFallback=M("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))}),t.ISO_8601=function(){};var Ya=M("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=xe.apply(null,arguments);return this.isValid()&&t.isValid()?this>t?this:t:p()}),Ba=M("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=xe.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:p()}),za=function(){return Date.now?Date.now():+new Date};Ce("Z",":"),Ce("ZZ",""),$("Z",Qi),$("ZZ",Qi),it(["Z","ZZ"],function(t,e,n){n._useUTC=!0,n._tzm=Te(Qi,t)});var Na=/([\+\-]|\d\d)/gi;t.updateOffset=function(){};var Ha=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ea=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;He.fn=Se.prototype;var Ua=Ge(1,"add"),ja=Ge(-1,"subtract");t.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",t.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Ga=M("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return void 0===t?this.localeData():this.locale(t)});Z(0,["gg",2],0,function(){return this.weekYear()%100}),Z(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Tn("gggg","weekYear"),Tn("ggggg","weekYear"),Tn("GGGG","isoWeekYear"),Tn("GGGGG","isoWeekYear"),V("weekYear","gg"),V("isoWeekYear","GG"),z("weekYear",1),z("isoWeekYear",1),$("G",Ji),$("g",Ji),$("GG",Ei,Bi),$("gg",Ei,Bi),$("GGGG",qi,Ni),$("gggg",qi,Ni),$("GGGGG",Zi,Hi),$("ggggg",Zi,Hi),at(["gggg","ggggg","GGGG","GGGGG"],function(t,e,n,i){e[i.substr(0,2)]=_(t)}),at(["gg","GG"],function(e,n,i,a){n[a]=t.parseTwoDigitYear(e)}),Z("Q",0,"Qo","quarter"),V("quarter","Q"),
z("quarter",7),$("Q",Yi),it("Q",function(t,e){e[aa]=3*(_(t)-1)}),Z("D",["DD",2],"Do","date"),V("date","D"),z("date",9),$("D",Ei),$("DD",Ei,Bi),$("Do",function(t,e){return t?e._ordinalParse:e._ordinalParseLenient}),it(["D","DD"],ra),it("Do",function(t,e){e[ra]=_(t.match(Ei)[0],10)});var qa=H("Date",!0);Z("DDD",["DDDD",3],"DDDo","dayOfYear"),V("dayOfYear","DDD"),z("dayOfYear",4),$("DDD",Gi),$("DDDD",zi),it(["DDD","DDDD"],function(t,e,n){n._dayOfYear=_(t)}),Z("m",["mm",2],0,"minute"),V("minute","m"),z("minute",14),$("m",Ei),$("mm",Ei,Bi),it(["m","mm"],sa);var Za=H("Minutes",!1);Z("s",["ss",2],0,"second"),V("second","s"),z("second",15),$("s",Ei),$("ss",Ei,Bi),it(["s","ss"],la);var Xa=H("Seconds",!1);Z("S",0,0,function(){return~~(this.millisecond()/100)}),Z(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),Z(0,["SSS",3],0,"millisecond"),Z(0,["SSSS",4],0,function(){return 10*this.millisecond()}),Z(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),Z(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),Z(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),Z(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),Z(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),V("millisecond","ms"),z("millisecond",16),$("S",Gi,Yi),$("SS",Gi,Bi),$("SSS",Gi,zi);var Ja;for(Ja="SSSS";Ja.length<=9;Ja+="S")$(Ja,Xi);for(Ja="S";Ja.length<=9;Ja+="S")it(Ja,Vn);var Ka=H("Milliseconds",!1);Z("z",0,0,"zoneAbbr"),Z("zz",0,0,"zoneName");var Qa=y.prototype;Qa.add=Ua,Qa.calendar=Xe,Qa.clone=Je,Qa.diff=an,Qa.endOf=vn,Qa.format=un,Qa.from=dn,Qa.fromNow=cn,Qa.to=hn,Qa.toNow=fn,Qa.get=j,Qa.invalidAt=Dn,Qa.isAfter=Ke,Qa.isBefore=Qe,Qa.isBetween=$e,Qa.isSame=tn,Qa.isSameOrAfter=en,Qa.isSameOrBefore=nn,Qa.isValid=Sn,Qa.lang=Ga,Qa.locale=gn,Qa.localeData=mn,Qa.max=Ba,Qa.min=Ya,Qa.parsingFlags=Mn,Qa.set=G,Qa.startOf=pn,Qa.subtract=ja,Qa.toArray=kn,Qa.toObject=_n,Qa.toDate=xn,Qa.toISOString=sn,Qa.inspect=ln,Qa.toJSON=wn,Qa.toString=on,Qa.unix=yn,Qa.valueOf=bn,Qa.creationData=Cn,Qa.year=ba,Qa.isLeapYear=yt,Qa.weekYear=Pn,Qa.isoWeekYear=In,Qa.quarter=Qa.quarters=Ln,Qa.month=ht,Qa.daysInMonth=ft,Qa.week=Qa.weeks=Pt,Qa.isoWeek=Qa.isoWeeks=It,Qa.weeksInYear=An,Qa.isoWeeksInYear=Fn,Qa.date=qa,Qa.day=Qa.days=Yt,Qa.weekday=Bt,Qa.isoWeekday=zt,Qa.dayOfYear=Wn,Qa.hour=Qa.hours=Ta,Qa.minute=Qa.minutes=Za,Qa.second=Qa.seconds=Xa,Qa.millisecond=Qa.milliseconds=Ka,Qa.utcOffset=Fe,Qa.utc=Oe,Qa.local=Re,Qa.parseZone=Le,Qa.hasAlignedHourOffset=We,Qa.isDST=Ve,Qa.isLocal=Be,Qa.isUtcOffset=ze,Qa.isUtc=Ne,Qa.isUTC=Ne,Qa.zoneAbbr=Yn,Qa.zoneName=Bn,Qa.dates=M("dates accessor is deprecated. Use date instead.",qa),Qa.months=M("months accessor is deprecated. Use month instead",ht),Qa.years=M("years accessor is deprecated. Use year instead",ba),Qa.zone=M("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Ae),Qa.isDSTShifted=M("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ye);var $a=I.prototype;$a.calendar=F,$a.longDateFormat=A,$a.invalidDate=O,$a.ordinal=R,$a.preparse=Hn,$a.postformat=Hn,$a.relativeTime=L,$a.pastFuture=W,$a.set=T,$a.months=st,$a.monthsShort=lt,$a.monthsParse=dt,$a.monthsRegex=mt,$a.monthsShortRegex=gt,$a.week=Dt,$a.firstDayOfYear=Tt,$a.firstDayOfWeek=Ct,$a.weekdays=Ot,$a.weekdaysMin=Lt,$a.weekdaysShort=Rt,$a.weekdaysParse=Vt,$a.weekdaysRegex=Nt,$a.weekdaysShortRegex=Ht,$a.weekdaysMinRegex=Et,$a.isPM=Xt,$a.meridiem=Jt,te("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,n=1===_(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n}}),t.lang=M("moment.lang is deprecated. Use moment.locale instead.",te),t.langData=M("moment.langData is deprecated. Use moment.localeData instead.",ie);var tr=Math.abs,er=si("ms"),nr=si("s"),ir=si("m"),ar=si("h"),rr=si("d"),or=si("w"),sr=si("M"),lr=si("y"),ur=ui("milliseconds"),dr=ui("seconds"),cr=ui("minutes"),hr=ui("hours"),fr=ui("days"),gr=ui("months"),mr=ui("years"),pr=Math.round,vr={s:45,m:45,h:22,d:26,M:11},br=Math.abs,yr=Se.prototype;return yr.abs=Kn,yr.add=$n,yr.subtract=ti,yr.as=ri,yr.asMilliseconds=er,yr.asSeconds=nr,yr.asMinutes=ir,yr.asHours=ar,yr.asDays=rr,yr.asWeeks=or,yr.asMonths=sr,yr.asYears=lr,yr.valueOf=oi,yr._bubble=ni,yr.get=li,yr.milliseconds=ur,yr.seconds=dr,yr.minutes=cr,yr.hours=hr,yr.days=fr,yr.weeks=di,yr.months=gr,yr.years=mr,yr.humanize=mi,yr.toISOString=pi,yr.toString=pi,yr.toJSON=pi,yr.locale=gn,yr.localeData=mn,yr.toIsoString=M("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",pi),yr.lang=Ga,Z("X",0,0,"unix"),Z("x",0,0,"valueOf"),$("x",Ji),$("X",$i),it("X",function(t,e,n){n._d=new Date(1e3*parseFloat(t,10))}),it("x",function(t,e,n){n._d=new Date(_(t))}),t.version="2.16.0",i(xe),t.fn=Qa,t.min=_e,t.max=we,t.now=za,t.utc=h,t.unix=zn,t.months=Gn,t.isDate=l,t.locale=te,t.invalid=p,t.duration=He,t.isMoment=x,t.weekdays=Zn,t.parseZone=Nn,t.localeData=ie,t.isDuration=Me,t.monthsShort=qn,t.weekdaysMin=Jn,t.defineLocale=ee,t.updateLocale=ne,t.locales=ae,t.weekdaysShort=Xn,t.normalizeUnits=Y,t.relativeTimeRounding=fi,t.relativeTimeThreshold=gi,t.calendarFormat=Ze,t.prototype=Qa,t})},{}]},{},[1])(1)});
var TMFC1 = '<select class="lineNumbers">';
	TMFC1  +=	'<option value="">Select Line</option>';
	TMFC1  +=	'<option value="800">800 (Manganese/Zinc Phosphate)</option>';
	TMFC1  +=	'<option value="900">900 (ChemFilm)</option>';
	TMFC1  +=	'<option value="1300">1300 (Chloride Zinc - Barrel)</option>';
	TMFC1  +=	'<option value="1700">1700 (Alkaline Zinc - Rack)</option>';
	TMFC1  +=	'<option value="2500">2500 (Zinc-Nickel/Passivate)</option>';
	TMFC1  +='</select>';
	
var	TMFC2   = '<select class="lineNumbers">';
	TMFC2  +=	'<option value="">Select Line</option>';
	TMFC2  +=	'<option value="oven">Oven</option>';
	TMFC2  +=	'<option value="customer_product">Customer Product</option>';
	TMFC2  += '</select>';
	
var	TP = '<select class="lineNumbers">';
	TP += '<option value="">Select Line</option>';
	TP += '<option value="5700">Electroless Nickel</option>';
	TP += '<option value="5600">Zinc Chloride - Rack</option>';
	TP += '</select>';
	
var AH = '<select class="lineNumbers">';
	AH += '<option value="">Select Line</option>';
	AH += '<option value="3500">Sulfuric Anodize</option>';
	AH += '</select>';
	
var sel = getCookie('.location');	

//Cookie functions for setting and retrieving, the duration I set is 24hrs only.	
function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var key = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');

    return key ? key[2] : null;
}

//When building is selected
$('.location').on('change', function () {
	
	var optionValue = $(this).val();
	
	if( optionValue === "tmfcBuidling1") {//If optionValue is tmfcBuidling1
		$('.lineNumbers').remove();//remove .lineNumbers
		$('.lineNumbersHolder').append(TMFC1).hide().fadeIn();//append TMFC1 to .lineNumbersHolder
	} else if(optionValue === "tmfcBuidling2") {
		$('.lineNumbers').remove();//remove .lineNumbers
		$('.lineNumbersHolder').append(TMFC2).hide().fadeIn();//append TMFC1 to .lineNumbersHolder
	} else if(optionValue === "aluminumHardcoat") {
		$('.lineNumbers').remove();//remove .lineNumbers
		$('.lineNumbersHolder').append(AH).hide().fadeIn();//append TMFC1 to .lineNumbersHolder
	} else if(optionValue === "tulsaPlating") {
		$('.lineNumbers').remove();//remove .lineNumbers
		$('.lineNumbersHolder').append(TP).hide().fadeIn();//append TMFC1 to .lineNumbersHolder
	} else {
		$('.lineNumbers').fadeOut().remove();//remove .lineNumbers
		$('.lineNumbersHolder').append("");
		$('.load').css('background', 'rgba(211,211,211,0.5)');
	}
	setCookie('.location', optionValue);
});

if (sel) {
    /* if cookie key 'select' is set change the '.location' selected value 
      and trigger the change() event.*/
    $('.location').val(sel).trigger('change');
}

//When line number is selected
$('.lineNumbersHolder').on('change', '.lineNumbers', function() {
	var optionValue = $(this).val(); 

	if( optionValue !== "" ) {
		$('.load').css('background', 'rgba(50,205,50, 0.5)');
	} else {
		$('.load').css('background', 'rgba(211,211,211,0.5)');
	}
	
})

//When 'Load Line' button is clicked
$('.load').on('click', function() {
	var optionValue = $('.lineNumbers option:selected').val();
	if(optionValue !== "") {
		window.location.href = optionValue + "Line.html";
	}
});

	
var fontLink = '<link href="https://fonts.googleapis.com/css?family=Kanit:300,500" rel="stylesheet">';
$('head').append(fontLink);
var t1301 = {
	tmfcParameters : {
		concentrations     : {
			"SSP-140"   : ["8 - 11", ' oz/gal'],
			"Activity"  : [">80", '%'],
			"Saturation": ["<20", '%'],
		},
		lineNumber     : 1301,
		applicationType: "Cleaner",
		temp           : "120 - 160°F",
		immersion      : "3 - 10 min",
		tankSize       : {
			lngth      : "\"",
			width      : "\"",
			depth      : "\" (sol. level)",
			capacity   : " gallons"
		
		},
		tankMaterial   : "Steel",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Carbon Steel",
		coilType       : "Serpentine",
		agitationLevel : "Mild - ",
		agitationType  : "Low Pressure Air",
		TDS            : ["Cleaner SSP-140 TDS.pdf"]
	},
	makeup : {
		date : new Date("December 30, 2016"),
		components: [
			{
			component  : "Cleaner SSP-140",
			unit       : " oz/gal",
			makeupAt   : "10",
			amount     : " lbs"
			}
		]
	},
	analysis : [
/*Week 50*/	
		{
			date : new Date("12/15/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/14/2016"),
			"SSP-140"   : 9.52,
			"Activity"  : 85,
			"Saturation": 45,
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/13/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/12/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
/*Week 49*/
		{
			date : new Date("12/8/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/7/2016"),
			"SSP-140"  : 9.81,
			"Activity"  : 85,
			"Saturation": 40,
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/6/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/5/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
/*Week 48*/
		{
			date : new Date("12/1/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/30/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/29/2016"),
			"SSP-140"  : 10.5,
			"Activity"  : 83,
			"Saturation": 40,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/28/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 47*/
		{
			date : new Date("11/23/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/22/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/21/2016"),
			"SSP-140"  : 10.80,
			"Activity"  : 87,
			"Saturation": 35,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 46*/		
		{
			date : new Date("11/17/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/16/2016"),
			"SSP-140"  : 11.02,
			"Activity"  : 88,
			"Saturation": 35,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/15/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/14/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 45*/
		{
			date : new Date("11/10/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/9/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/8/2016"),
			"SSP-140"  : 10.64,
			"Activity"  : 90,
			"Saturation": 30,
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/7/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
/*Week 44*/
		{
			date : new Date("11/3/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/2/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/1/2016"),
			"SSP-140"  : 10.91,
			"Activity"  : 90,
			"Saturation": 25,
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("10/31/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
/*Week 43*/
		{
			date : new Date("10/27/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/26/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/25/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/24/2016"),
			"SSP-140": 9.2,
			"Activity"  : 89,
			"Saturation": 20,
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			},
			additions : {
				"SSP-140" : [25, " lbs"],
			}
		},
/*Week 42*/
		{
			date : new Date("10/20/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/19/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/18/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/17/2016"),
			"SSP-140": 9.8,
			"Activity"  : 91,
			"Saturation": 15,
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			},
			additions : {
				"SSP-140" : [25, " lbs"],
			}
		},
/*Week 41*/
		{
			date : new Date("10/13/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/12/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/11/2016"),
			"SSP-140": 8.13,
			"Activity"  : 93,
			"Saturation": 10,
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			},
			additions : {
				"SSP-140" : [100, " lbs"],
			}
		},
		{
			date : new Date("10/10/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},	
/*Week 40*/
		{
			date : new Date("10/6/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/5/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/4/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/3/2016"),
			"SSP-140": 6.61,
			"Activity"  : 94,
			"Saturation": 3,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
			additions : {
				"SSP-140" : [100, " lbs"],
			}
		},
/*3rd QUARTER*/	
/*Week 39*/
		{
			date : new Date("9/1/2016"),
			"SSP-140": 8.36,
			"Activity"  : 86,
			"Saturation": 40,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date : new Date("8/17/2016"),
			"SSP-140": 9.5,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
			additions : {
				"SSP-140" : [50, " lbs"],
			}
		},
		{
			date : new Date("8/9/2016"),
			"SSP-140": 9.5,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
			additions : {
				"SSP-140" : [15, " lbs"],
			}
		},
		{
			date : new Date("7/21/2016"),
			"SSP-140": 10.41,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date : new Date("7/5/2016"),
			"SSP-140": 8.22,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
			additions : {
				"SSP-140" : [50, " lbs"],
			}
		},
	],	
};
var t1302 = {
	tmfcParameters : {
		concentrations: {
			"Anokleen #2-S"   : ["8 - 10", " oz/gal"],
			"Activity"  : [">80", '%'],
			"Saturation": ["<20", '%'],
		},
		lineNumber         : 1302,
		applicationType    : "Electro-Cleaner",
		temp               : "130 - 160°F",
		immersion          : "1 - 5 min",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Stainless Steel",
		coilType       : "Serpentine",
		agitationLevel : "Low - ",
		agitationType  : "Air",
		TDS            : ["Anokleen 2-S TDS.pdf"]
	},
	makeup : {
		date : new Date("December 30, 2016"),
		components: [
			{
			component  : "Cleaner Anokleen #2-S",
			unit       : " oz/gal",
			makeupAt   : "10",
			amount     : " lbs"
			},
		]
	},
	analysis : [
/*Week 50*/	
		{
			date : new Date("12/15/2016"),
			"Anokleen #2-S" : 10.05,
			"Activity"  : 85,
			"Saturation": 45,
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/14/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/13/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/12/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
/*Week 49*/
		{
			date : new Date("12/8/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/7/2016"),
			"Anokleen #2-S" : 10.23,
			"Activity"  : 84,
			"Saturation": 40,
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/6/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/5/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
/*Week 48*/
		{
			date : new Date("12/1/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/30/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/29/2016"),
			"Anokleen #2-S" : 10.58,
			"Activity"  : 86,
			"Saturation": 40,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/28/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 47*/
		{
			date : new Date("11/23/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/22/2016"),
			"Anokleen #2-S" : 8.66,
			"Activity"  : 88,
			"Saturation": 35,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			},
			additions : {
				"Anokleen #2-S" : [25, "lbs"]
			}
		},
		{
			date : new Date("11/21/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 46*/		
		{
			date : new Date("11/17/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/16/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/15/2016"),
			"Anokleen #2-S" : 9.21,
			"Activity"  : 88,
			"Saturation": 30,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/14/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 45*/
		{
			date : new Date("11/10/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/9/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/8/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/7/2016"),
			"Anokleen #2-S" : 9.50,
			"Activity"  : 89,
			"Saturation": 25,
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
/*Week 44*/
		{
			date : new Date("11/3/2016"),
			"Anokleen #2-S" : 9.58,
			"Activity"  : 89,
			"Saturation": 25,
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/2/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/1/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("10/31/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
/*Week 43*/
		{
			date : new Date("10/27/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/26/2016"),
			"Anokleen #2-S" : 10.44,
			"Activity"  : 91,
			"Saturation": 15,
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/25/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/24/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			},
		},
/*Week 42*/
		{
			date : new Date("10/20/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/19/2016"),
			"Anokleen #2-S" : 10.91,
			"Activity"  : 94,
			"Saturation": 10,
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/18/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/17/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			},
		},
/*Week 41*/
		{
			date : new Date("10/13/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/12/2016"),
			"Anokleen #2-S" : 8.50,
			"Activity"  : 92,
			"Saturation": 15,
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/11/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			},
		},
		{
			date : new Date("10/10/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
/*Week 40*/
		{
			date : new Date("10/6/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/5/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/4/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/3/2016"),
			"Anokleen #2-S" : 9.55,
			"Activity"  : 96,
			"Saturation": 10,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
		},
/*Week 39*/
		{
			date : new Date("9/29/2016"),
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date : new Date("9/28/2016"),
			"Anokleen #2-S" : 10.05,
			"Activity"  : 98,
			"Saturation": 5,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date : new Date("9/27/2016"),
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date : new Date("9/26/2016"),
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
	]
};
var t1303 = {
	tmfcParameters : {
		lineNumber         : 1303,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : [""]
	},
};
var t1304 = {
	tmfcParameters : {
		concentrations     : {
			"HCL" : ["25 - 30", '%']
		},
		lineNumber     : 1304,
		applicationType: "Acid Pickle",
		temp           : "70 - 90°F",
		immersion      : "1 - 5 min",
		tankSize       : {
			lngth      : "\"",
			width      : "\"",
			depth      : "\" (sol level)",
			capacity   : " gallons"
		
		},
		tankMaterial   : "Steel w/Liner",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "n/a",
		coilType       : "U",
		agitationLevel : "Mild - ",
		agitationType  : "Low Pressure Air",
	},
	makeup : {
		date : new Date("December 9, 2016"),
		components: [
			{
			component  : "Hydrochloric Acid",
			unit       : "%",
			makeupAt   : "25",
			amount     : "gallons"
			}
		]
	},
	analysis : [
		{
			date : new Date("11/03/2016"),
			HCL  : 29.2
		},
	],	
};
var t1305 = {
	tmfcParameters : {
		lineNumber         : 1305,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t1306 = {
	tmfcParameters : {
		lineNumber         : 1306,
		applicationType    : "non-use",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t1307 = {
	tmfcParameters : {
		concentrations     : {
			"Zinc"       : ["1.0 - 1.5", " oz/gal"],
			"KCL"        : ["18 - 20", " oz/gal"],
			"Boric"      : ["3.5 - 4.5", " oz/gal"],
			"Carbonates" : ["<10", " oz/gal"],
			"Iron"       : ["<10", " ppm"],
			"Chromium"   : ["<10", " ppm"],
			"Copper"     : ["<2", " ppm"],

		},
		lineNumber         : 1307,
		applicationType    : "Electro-Plating",
		temp               : "70 - 100°F",
		pH                 : "5.0 - 5.4",
		immersion          : "",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : "gallons"		
		},
		tankMaterial   : "Steel w/Liner",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Stainless Steel",
		coilType       : "Serpentine",
		agitationLevel : "Low - ",
		agitationType  : "Low Pressure Air",
		TDS            : ["HP RADIANCE AZ TDS.pdf"]
	},
	makeup : {
		date : new Date("July 5, 2016"),
		components: [
			{
			component  : "Zinc Chloride",
			unit       : " oz/gal",
			makeupAt   : "4.0",
			amount     : "gallons"
			},
			{
			component  : "Potassium Chloride",
			unit       : " oz/gal",
			makeupAt   : "4.0",
			amount     : "gallons"
			},
			{
			component  : "Boric Acid",
			unit       : " oz/gal",
			makeupAt   : "4.0",
			amount     : "gallons"
			},
			{
			component  : "AZ Carrier",
			unit       : " oz/gal",
			makeupAt   : "4.0",
			amount     : "gallons"
			},
			{
			component  : "AZ Brightener",
			unit       : " oz/gal",
			makeupAt   : "4.0",
			amount     : "gallons"
			},
		]
	},
	analysis : [
		{
			date       : new Date("12/01/2016"),
			Zinc       : 4.00, 
			KCL        : 20.0,
			Boric      : 4.5,
			Carbonates : 2,
			Iron       : 10,
			Chromium   : 1.0,
			Copper     : 1.0,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
			additions : {
				"Zinc Chloride" : [1, "gal"]
			}
		},
	],
};
var t1308 = {
	tmfcParameters : {
		lineNumber         : 1308,
		applicationType    : "non-use",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "None",
		TDS            : []
	},
};
var t1309 = {
	tmfcParameters : {
		lineNumber     : 1309,
		applicationType: "Sour Dip",
		temp           : "60 - 90°F",
		concentrations     : {
			"Nitric Acid"   : ["0.25 - 0.75", '%'],
		},
		immersion      : "30 - 90sec",
		tankSize       : {
			lngth      : "\"",
			width      : "\"",
			depth      : "\" (sol level)",
			capacity   : "gallons"
		
		},
		tankMaterial   : "Plastic",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "n/a",
		coilType       : "Serpentine",
		agitationLevel : "Mild - ",
		agitationType  : "Low Pressure Air",
	},	
	makeup : {
		date : new Date("November 28, 2016"),
		components: [
			{
			component  : "Nitric Acid",
			unit       : "%",
			makeupAt   : "0.25",
			amount     : "mls"
			}
		]
	},
	analysis : [
		{
			date   : new Date("12/01/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 152,
				"3:00PM" : 155
			},
			pH   : {
				"8:00AM" : 2.0,
			}
		},
		
	],
};
var t1310 = {
	tmfcParameters : {
		concentrations: {
			"Prodigy Triton"   : ["8", "% bv"],
		},
		lineNumber         : 1310,
		applicationType    : "Trivalent Clear Chromate",
		temp               : "70 - 90°F",
		immersion          : "15 - 30 sec",
		pH                 : 2.0 - 2.4,
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : "gallons",		
		},
		tankMaterial   : "",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Stainless Steel",
		coilType       : "Serpentine",
		agitationLevel : "Low - ",
		agitationType  : "Air",
		TDS            : ["Prodigy Triton TDS.pdf"],
	},
	makeup : {
		date : new Date("October 1, 2016"),
		components: [
			{
			component  : "Prodigy Triton",
			unit       : "% bv",
			makeupAt   : "8",
			amount     : "gal",
			},
			{
			component  : "Sodium Hydroxide",
			unit       : "",
			makeupAt   : "raise to pH of 2.2",
			amount     : "As needed",
			},
		]
	},
	analysis : [
		{
			date   : new Date("12/01/2016"),
			"Prodigy Triton" : 8.1,
			temp  : {
				"8:00AM" : 60,
				"11:30AM": 80,
				"3:00PM" : 75
			},
			pH : {
				"8:00AM" : 2.20,
				"11:30AM": 2.25,
				"3:00PM" : 2.30
			},
		},
		
	],
	additions : [
		{
			date : new Date("12/03/2016"),
			component : {
				"Triton" : [50, "lbs"],
			},
		},
	],
	
};
var t1311 = {
	tmfcParameters : {
		lineNumber         : 1311,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t1312 = {
	tmfcParameters : {
		concentrations: {
			"546-A"   : ["10", "% bv"],
			"546-B"   : ["1", "% bv"],
		},
		lineNumber         : 1312,
		applicationType    : "Trivalent Yellow Chromate",
		temp               : "70 - 90°F",
		pH                 : "1.8 - 2.1",
		immersion          : "30 - 90 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Steel",
		coilType       : "",
		agitationLevel : "High - ",
		agitationType  : "Low Pressure Air",
		TDS            : ["546 Yellow TDS.pdf"]
	},
	makeup : {
		date : new Date("August 1, 2016"),
		components: [
			{
			component  : "Accu-Labs 546-A",
			unit       : "% bv",
			makeupAt   : "10",
			amount     : "gal"
			},
			{
			component  : "Accu-Labs 546-B",
			unit       : "% bv",
			makeupAt   : "1",
			amount     : "gal"
			},
		]
	},
	analysis : [
		{
			date   : new Date("12/01/2016"),
			"546-A" : 10.23, 
			"546-B" : 1.2,
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 152,
				"3:00PM" : 155
			},
			pH : {
				"8:00AM" : 1.96,
			}
		},
		
	],
	additions : [
		{
			date : new Date("12/03/2016"),
			component : {
				"546-A" : [2000, "mls"],
				"546-B" : [300, "mls"],
			}
		},
	],
	
};
var t1313 = {
	tmfcParameters : {
		lineNumber         : 1313,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};


var t1701 = {
	tmfcParameters : {
		concentrations     : {
			"SSP-140"   : ["8 - 11", ' oz/gal'],
			"Activity"  : [">80", '%'],
			"Saturation": ["<20", '%'],
		},
		lineNumber     : 1701,
		applicationType: "Cleaner",
		temp           : "120 - 160°F",
		immersion      : "3 - 10 min",
		tankSize       : {
			lngth      : "72\"",
			width      : "56\"",
			depth      : "25\" (sol. level)",
			capacity   : "440 gallons"
		
		},
		tankMaterial   : "Steel",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Carbon Steel",
		coilType       : "Serpentine",
		agitationLevel : "Mild - ",
		agitationType  : "Compressed Air",
		TDS            : ["Cleaner SSP-140 TDS.pdf"]
	},
	makeup : {
		date : new Date("October 1, 2016"),
		components: [
			{
			component  : "Cleaner SSP-140",
			unit       : " oz/gal",
			makeupAt   : "10",
			amount     : "275 lbs"
			}
		]
	},
	analysis : [
/*Week 50*/	
		{
			date : new Date("12/15/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/14/2016"),
			"SSP-140"   : 9.52,
			"Activity"  : 85,
			"Saturation": 45,
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/13/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/12/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
/*Week 49*/
		{
			date : new Date("12/8/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/7/2016"),
			"SSP-140"  : 9.81,
			"Activity"  : 85,
			"Saturation": 40,
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/6/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/5/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
/*Week 48*/
		{
			date : new Date("12/1/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/30/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/29/2016"),
			"SSP-140"  : 10.5,
			"Activity"  : 83,
			"Saturation": 40,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/28/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 47*/
		{
			date : new Date("11/23/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/22/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/21/2016"),
			"SSP-140"  : 10.80,
			"Activity"  : 87,
			"Saturation": 35,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 46*/		
		{
			date : new Date("11/17/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/16/2016"),
			"SSP-140"  : 11.02,
			"Activity"  : 88,
			"Saturation": 35,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/15/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/14/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 45*/
		{
			date : new Date("11/10/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/9/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/8/2016"),
			"SSP-140"  : 10.64,
			"Activity"  : 90,
			"Saturation": 30,
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/7/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
/*Week 44*/
		{
			date : new Date("11/3/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/2/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/1/2016"),
			"SSP-140"  : 10.91,
			"Activity"  : 90,
			"Saturation": 25,
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("10/31/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
/*Week 43*/
		{
			date : new Date("10/27/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/26/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/25/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/24/2016"),
			"SSP-140": 9.2,
			"Activity"  : 89,
			"Saturation": 20,
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			},
			additions : {
				"SSP-140" : [25, " lbs"],
			}
		},
/*Week 42*/
		{
			date : new Date("10/20/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/19/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/18/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/17/2016"),
			"SSP-140": 9.8,
			"Activity"  : 91,
			"Saturation": 15,
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			},
			additions : {
				"SSP-140" : [25, " lbs"],
			}
		},
/*Week 41*/
		{
			date : new Date("10/13/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/12/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/11/2016"),
			"SSP-140": 8.13,
			"Activity"  : 93,
			"Saturation": 10,
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			},
			additions : {
				"SSP-140" : [100, " lbs"],
			}
		},
		{
			date : new Date("10/10/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},	
/*Week 40*/
		{
			date : new Date("10/6/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/5/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/4/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/3/2016"),
			"SSP-140": 6.61,
			"Activity"  : 94,
			"Saturation": 3,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
			additions : {
				"SSP-140" : [100, " lbs"],
			}
		},
/*3rd QUARTER*/	
/*Week 39*/
		{
			date : new Date("9/1/2016"),
			"SSP-140": 8.36,
			"Activity"  : 86,
			"Saturation": 40,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date : new Date("8/17/2016"),
			"SSP-140": 9.5,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
			additions : {
				"SSP-140" : [50, " lbs"],
			}
		},
		{
			date : new Date("8/9/2016"),
			"SSP-140": 9.5,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
			additions : {
				"SSP-140" : [15, " lbs"],
			}
		},
		{
			date : new Date("7/21/2016"),
			"SSP-140": 10.41,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date : new Date("7/5/2016"),
			"SSP-140": 8.22,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
			additions : {
				"SSP-140" : [50, " lbs"],
			}
		},
	],	
};
var t1702 = {
	tmfcParameters : {
		concentrations: {
			"Anokleen #2-S"   : ["8 - 10", " oz/gal"],
			"Activity"  : [">80", '%'],
			"Saturation": ["<20", '%'],
		},
		lineNumber         : 1702,
		applicationType    : "Electro-Cleaner",
		temp               : "130 - 160°F",
		immersion          : "1 - 5 min",
		tankSize           : {
			lngth          : '33\"',
			width          : '56"',
			depth          : '25"' + ' (sol. level)',
			capacity       : "200 gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Stainless Steel",
		coilType       : "Serpentine",
		agitationLevel : "Low - ",
		agitationType  : "Air",
		TDS            : ["Anokleen 2-S TDS.pdf"]
	},
	makeup : {
		date : new Date("October 1, 2016"),
		components: [
			{
			component  : "Cleaner Anokleen #2-S",
			unit       : " oz/gal",
			makeupAt   : "10",
			amount     : "125 lbs"
			},
		]
	},
	analysis : [
/*Week 50*/	
		{
			date : new Date("12/15/2016"),
			"Anokleen #2-S" : 10.05,
			"Activity"  : 85,
			"Saturation": 45,
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/14/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/13/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/12/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
/*Week 49*/
		{
			date : new Date("12/8/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/7/2016"),
			"Anokleen #2-S" : 10.23,
			"Activity"  : 84,
			"Saturation": 40,
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/6/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/5/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
/*Week 48*/
		{
			date : new Date("12/1/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/30/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/29/2016"),
			"Anokleen #2-S" : 10.58,
			"Activity"  : 86,
			"Saturation": 40,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/28/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 47*/
		{
			date : new Date("11/23/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/22/2016"),
			"Anokleen #2-S" : 8.66,
			"Activity"  : 88,
			"Saturation": 35,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			},
			additions : {
				"Anokleen #2-S" : [25, "lbs"]
			}
		},
		{
			date : new Date("11/21/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 46*/		
		{
			date : new Date("11/17/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/16/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/15/2016"),
			"Anokleen #2-S" : 9.21,
			"Activity"  : 88,
			"Saturation": 30,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/14/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 45*/
		{
			date : new Date("11/10/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/9/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/8/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/7/2016"),
			"Anokleen #2-S" : 9.50,
			"Activity"  : 89,
			"Saturation": 25,
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
/*Week 44*/
		{
			date : new Date("11/3/2016"),
			"Anokleen #2-S" : 9.58,
			"Activity"  : 89,
			"Saturation": 25,
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/2/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/1/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("10/31/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
/*Week 43*/
		{
			date : new Date("10/27/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/26/2016"),
			"Anokleen #2-S" : 10.44,
			"Activity"  : 91,
			"Saturation": 15,
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/25/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/24/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			},
		},
/*Week 42*/
		{
			date : new Date("10/20/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/19/2016"),
			"Anokleen #2-S" : 10.91,
			"Activity"  : 94,
			"Saturation": 10,
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/18/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/17/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			},
		},
/*Week 41*/
		{
			date : new Date("10/13/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/12/2016"),
			"Anokleen #2-S" : 8.50,
			"Activity"  : 92,
			"Saturation": 15,
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/11/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			},
		},
		{
			date : new Date("10/10/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
/*Week 40*/
		{
			date : new Date("10/6/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/5/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/4/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/3/2016"),
			"Anokleen #2-S" : 9.55,
			"Activity"  : 96,
			"Saturation": 10,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
		},
/*Week 39*/
		{
			date : new Date("9/29/2016"),
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date : new Date("9/28/2016"),
			"Anokleen #2-S" : 10.05,
			"Activity"  : 98,
			"Saturation": 5,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date : new Date("9/27/2016"),
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date : new Date("9/26/2016"),
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
	]
};
var t1703 = {
	tmfcParameters : {
		lineNumber         : 1703,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '31\"',
			width          : '56"',
			depth          : '23"' + ' (sol. level)',
			capacity       : "175 gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t1704 = {
	tmfcParameters : {
		concentrations     : {
			"HCL" : ["25 - 30", '%']
		},
		lineNumber     : 1704,
		applicationType: "Acid Pickle",
		temp           : "70 - 90°F",
		immersion      : "1 - 5 min",
		tankSize       : {
			lngth      : "58\"",
			width      : "48\"",
			depth      : "32\" (sol level)",
			capacity   : "400 gallons"
		
		},
		tankMaterial   : "Steel w/Liner",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "n/a",
		coilType       : "U",
		agitationLevel : "Mild - ",
		agitationType  : "Compressed Air",
	},
	makeup : {
		date : new Date("December 9, 2016"),
		components: [
			{
			component  : "Hydrochloric Acid",
			unit       : "%",
			makeupAt   : "25",
			amount     : "110 gallons"
			}
		]
	},
	analysis : [
		{
			date : new Date("11/03/2016"),
			HCL  : 29.2
		},
		{
			date : new Date("10/31/2016"),
			HCL: 30.5
		},
		{
			date : new Date("10/28/2016"),
			HCL: 31.3
		},
		{
			date : new Date("10/15/2016"),
			HCL: 28.5
		},
		{
			date : new Date("10/08/2016"),
			HCL: 30.6
		},
		{
			date : new Date("10/01/2016"),
			HCL: 29.0
		},
		{
			date : new Date("09/29/2016"),
			HCL: 33.2
		},
		{
			date : new Date("09/15/2016"),
			HCL: 32.0
		}
	],	
};
var t1705 = {
	tmfcParameters : {
		lineNumber         : 1705,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '25\"',
			width          : '56"',
			depth          : '24"' + ' (sol. level)',
			capacity       : "145 gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t1706 = {
	tmfcParameters : {
		concentrations     : {
			"Zinc"             : ["1.0 - 1.5", " oz/gal"],
			"NaOH"             : ["15 - 18", " oz/gal"],
			"Carbonates"       : ["<10", " oz/gal"],
			"Iron"             : ["<10", " ppm"],
			"Chromium"         : ["<10", " ppm"],
			"Copper"           : ["<2", " ppm"],

		},
		lineNumber         : 1706,
		applicationType    : "Electro-Plating",
		temp               : "70 - 100°F",
		immersion          : "",
		tankSize           : {
			lngth          : '142\"',
			width          : '54.5"',
			depth          : '26"' + ' (sol. level)',
			capacity       : "1165 gallons"		
		},
		tankMaterial   : "Steel w/Liner",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Stainless Steel",
		coilType       : "U",
		agitationLevel : "Low - ",
		agitationType  : "Pump",
		TDS            : ["Havastar ZN Gleam AB TDS.pdf"]
	},
	makeup : {
		date : new Date("July 5, 2016"),
		components: [
			{
			component  : "Zinc Sol 2272",
			unit       : " oz/gal",
			makeupAt   : "1.3",
			amount     : "69 gallons"
			},
			{
			component  : "Sodium Hydroxide",
			unit       : " oz/gal",
			makeupAt   : "16.0",
			amount     : "1,165 lbs"
			},
			{
			component  : "Havastar ZN Gleam A",
			unit       : "%",
			makeupAt   : "1",
			amount     : "11.5 gal"
			},
			{
			component  : "Havastar ZN Gleam B",
			unit       : "%",
			makeupAt   : "0.75",
			amount     : "8.5 gal"
			},
			{
			component  : "Havtech ZN Purifier",
			unit       : "%",
			makeupAt   : "0.1",
			amount     : "4500 mls"
			},
			{
			component  : "NCZ Conditioner",
			unit       : " lbs",
			makeupAt   : "",
			amount     : "50 lbs"
			},
			{
			component  : "Iron",
			unit       : " ppm",
			},
		]
	},
	analysis : [
		{
			date   : new Date("12/01/2016"),
			Zinc   : 1.46, 
			NaOH   : 15.48,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
		},
		{
			date   : new Date("11/28/2016"),
			Zinc   : 1.74, 
			NaOH   : 16.43,
			temp   : {
				"8:00AM" : 61,
				"11:30AM": 70,
				"3:00PM" : 75
			}
		},
		{
			date   : new Date("11/23/2016"),
			Zinc   : 1.31, 
			NaOH   : 16.32,
			temp   : {
				"8:00AM" : 68,
				"11:30AM": 72,
				"3:00PM" : 73
			}
		},	
		{
			date   : new Date("11/21/2016"),
			Zinc   : 1.34, 
			NaOH   : 16.43,
			temp   : {
				"8:00AM" : 70,
				"11:30AM": 77,
				"3:00PM" : 80
			}
		},	
		{
			date   : new Date("11/17/2016"),
			Zinc   : 1.39, 
			NaOH   : 16.43,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
			}
		},	
		{
			date   : new Date("11/14/2016"),
			Zinc   : 1.48, 
			NaOH   : 16.64,
			temp   : {
				"8:00AM" : 72,
			}
		},
		{
			date   : new Date("11/10/2016"),
			Zinc   : 1.39, 
			NaOH   : 16.54,
			temp   : {
				"8:00AM" : 75,
				"11:30AM": 79,
				"3:00PM" : 85
			}
		},	
		{
			date   : new Date("11/09/2016"),
			Zinc   : 1.46, 
			temp   : {
				"8:00AM" : 76,
				"11:30AM": 81,
				"3:00PM" : 81
			}
		},	
		{
			date   : new Date("11/07/2016"),
			Zinc   : 1.50, 
			NaOH   : 17.07,
			temp   : {
				"8:00AM" : 73,
				"11:30AM": 76,
				"3:00PM" : 82
			}
		},
		{
			date   : new Date("11/03/2016"),
			Zinc   : 1.39, 
			NaOH   : 16.96,
			temp   : {
				"8:00AM" : 80,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date   : new Date("11/02/2016"),
			Zinc   : 1.34, 
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date   : new Date("10/31/2016"),
			Zinc   : 1.77, 
			NaOH   : 16.11,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
      additions : {
				"Zinc Hydroxide" : [10, "gal"],
				"NaOH"           : [100, "lbs"]
			},
		},
		{
			date   : new Date("10/27/2016"),
			Zinc   : 1.39, 
			NaOH   : 16.43,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date   : new Date("10/26/2016"),
			Zinc   : 1.43, 
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date   : new Date("10/24/2016"),
			Zinc   : 1.48, 
			NaOH   : 16.43,
		},
		{
			date   : new Date("10/20/2016"),
			Zinc   : 1.34, 
			NaOH   : 17.38,
		},
		{
			date   : new Date("10/19/2016"),
			Zinc   : 1.50, 
		},
		{
			date   : new Date("10/17/2016"),
			Zinc   : 1.50, 
			NaOH   : 15.58,
		},
		{
			date   : new Date("10/13/2016"),
			Zinc   : 1.17, 
			NaOH   : 15.68,
		},
		{
			date   : new Date("10/12/2016"),
			Zinc   : 1.18, 
      additions : {
				"Zinc Hydroxide" : [10, "gal"],
			},
		},
		{
			date   : new Date("10/10/2016"),
			Zinc   : 1.57, 
			NaOH   : 16.11,
		},
		{
			date   : new Date("10/06/2016"),
			Zinc   : 1.22, 
			NaOH   : 15.90,
		},
		{
			date   : new Date("10/05/2016"),
			Zinc   : 1.31, 
		},
		{
			date   : new Date("10/03/2016"),
			Zinc   : 1.75, 
			NaOH   : 16.43,
		},
		{
			date   : new Date("09/29/2016"),
			Zinc   : 1.48, 
			NaOH   : 16.54,
		},
		{
			date   : new Date("09/28/2016"),
			Zinc   : 1.50, 
		},
		{
			date   : new Date("09/26/2016"),
			Zinc   : 1.53, 
			NaOH   : 15.58,
      additions : {
				"NaOH"           : [50, "lbs"]
			},
		},
		{
			date   : new Date("09/22/2016"),
			Zinc   : 1.41, 
			NaOH   : 16.01,
		},
		{
			date   : new Date("09/21/2016"),
			Zinc   : 1.32, 
		},
		{
			date       : new Date("09/20/2016"),
			Zinc       : 1.4, 
			NaOH       : 16.8,
			Carbonates : 4.9,
			Iron       : 2.1,
			Chromium   : 1.4,
			Copper     : 1.6,
		},
		{
			date   : new Date("09/19/2016"),
			Zinc   : 1.41, 
			NaOH   : 16.64,
		},
		{
			date   : new Date("09/14/2016"),
			Zinc   : 1.48, 
		},
		{
			date   : new Date("09/13/2016"),
			Zinc   : 1.58, 
		},
		{
			date   : new Date("09/12/2016"),
			Zinc   : 1.67, 
			NaOH   : 16.22,
      additions : {
				"NaOH"           : [50, "lbs"]
			},
		},
		{
			date   : new Date("09/08/2016"),
			Zinc   : 1.34, 
			NaOH   : 16.43,
		},
		{
			date   : new Date("09/07/2016"),
			Zinc   : 1.50, 
		},
		{
			date   : new Date("09/06/2016"),
			Zinc   : 1.65, 
			NaOH   : 16.32,
		},
		{
			date   : new Date("09/01/2016"),
			Zinc   : 1.31, 
			NaOH   : 16.22,
		},
		{
			date   : new Date("08/31/2016"),
			Zinc   : 1.31, 
		},
		{
			date   : new Date("08/25/2016"),
			Zinc   : 1.48, 
			NaOH   : 15.90,
      additions : {
				"NaOH"           : [50, "lbs"]
			},
		},
		{
			date   : new Date("08/24/2016"),
			Zinc   : 1.48, 
		},	
		{
			date   : new Date("08/22/2016"),
			Zinc   : 1.76, 
			NaOH   : 15.61,
		},	
		{
			date   : new Date("08/18/2016"),
			Zinc   : 1.32, 
			NaOH   : 15.05,
      additions : {
				"NaOH"           : [50, "lbs"]
			},
		},	
		{
			date   : new Date("08/17/2016"),
			Zinc   : 1.46, 
		},	
		{
			date   : new Date("08/15/2016"),
			Zinc   : 1.75, 
			NaOH   : 16.64,
		},	
		{
			date   : new Date("08/11/2016"),
			Zinc   : 1.48, 
			NaOH   : 16.43,
		},	
		{
			date   : new Date("08/10/2016"),
			Zinc   : 1.22, 
      additions : {
				"Zinc Hydroxide" : [10, "gal"],
			},
		},	
		{
			date   : new Date("08/08/2016"),
			Zinc   : 1.43, 
			NaOH   : 16.43,
		},	
		{
			date   : new Date("08/04/2016"),
			Zinc   : 1.25, 
			NaOH   : 15.90,
      additions : {
				"NaOH"           : [50, "lbs"]
			},
		},	
		{
			date   : new Date("08/03/2016"),
			Zinc   : 1.31, 
		},	
		{
			date   : new Date("08/01/2016"),
			Zinc   : 1.39, 
			NaOH   : 15.48,
      additions : {
				"NaOH"           : [50, "lbs"]
			},
		},	
		{
			date   : new Date("07/28/2016"),
			Zinc   : 1.22, 
			NaOH   : 15.79,
		},	
		{
			date   : new Date("07/27/2016"),
			Zinc   : 1.22, 
		},	
		{
			date   : new Date("07/26/2016"),
			Zinc       : 1.24, 
			NaOH       : 16.2,
			Carbonates : 0.7,
			Iron       : 5.1,
			Chromium   : 1.3,
			Copper     : 0.7,
		},	
		{
			date   : new Date("07/25/2016"),
			Zinc   : 1.31, 
			NaOH   : 14.73,
      additions : {
				"NaOH"           : [100, "lbs"]
			},
		},	
		{
			date   : new Date("07/21/2016"),
			Zinc   : 1.37, 
			NaOH   : 15.68,
		},	
		{
			date   : new Date("07/20/2016"),
			Zinc   : 1.39, 
		},	
		{
			date   : new Date("07/19/2016"),
			Zinc   : 1.32, 
		},	
		{
			date   : new Date("07/18/2016"),
			Zinc   : 1.32, 
			NaOH   : 16.01,
		},	
		{
			date   : new Date("07/14/2016"),
			Zinc   : 1.31, 
			NaOH   : 16.32,
		},	
		{
			date   : new Date("07/13/2016"),
			Zinc   : 1.25, 
		},	
		{
			date   : new Date("07/12/2016"),
			Zinc   : 1.06, 
      additions : {
				"Zinc Hydroxide" : [10, "gal"],
			},
		},	
		{
			date   : new Date("07/11/2016"),
			Zinc   : 1.11, 
			NaOH   : 16.00,
		},			{
			date   : new Date("07/06/2016"),
			Zinc   : 1.32, 
		},	
		{
			date   : new Date("07/05/2016"),
			Zinc   : 1.36, 
			NaOH   : 16.96,
		},			{
			date   : new Date("06/27/2016"),
			Zinc   : 1.32, 
			NaOH   : 16.32,
		},	
		{
			date   : new Date("06/22/2016"),
			Zinc   : 1.4, 
		},
		{
			date   : new Date("06/20/2016"),
			Zinc   : 1.4, 
			NaOH   : 16.8,
		},	
		{
			date   : new Date("06/15/2016"),
			Zinc   : 1.4, 
			NaOH   : 16.1,
		},	
		{
			date   : new Date("06/13/2016"),
			Zinc   : 1.4, 
			NaOH   : 15.5,
		},
		{
			date   : new Date("06/09/2016"),
			Zinc   : 1.3, 
			NaOH   : 16.2,
		},	
		{
			date   : new Date("06/08/2016"),
			Zinc   : 1.4, 
			NaOH   : 16.3,
		},	
		{
			date   : new Date("06/06/2016"),
			Zinc   : 1.6, 
			NaOH   : 16.4,
		},	
		{
			date   : new Date("06/02/2016"),
			Zinc   : 1.5, 
			NaOH   : 16.9,
		},	
		{
			date   : new Date("05/31/2016"),
			Zinc   : 1.6, 
			NaOH   : 16.9,
		},	
		{
			date   : new Date("05/26/2016"),
			Zinc   : 1.4, 
			NaOH   : 16.5,
		},	
		{
			date   : new Date("05/25/2016"),
			Zinc   : 1.2, 
		},	
		{
			date   : new Date("05/24/2016"),
			Zinc   : 1.1, 
			NaOH   : 13.9,
		},
		{		
			date   : new Date("05/23/2016"),
			Zinc   : 1.5, 
			NaOH   : 17.0,
		},
		{		
			date   : new Date("05/16/2016"),
			Zinc   : 1.4, 
			NaOH   : 17.2,
		},	
		{
			date   : new Date("05/11/2016"),
			Zinc   : 1.3, 
			NaOH   : 15.6,
		},
		{		
			date   : new Date("05/10/2016"),
			Zinc   : 1.3, 
			NaOH   : 15.6,
		},	
		{
			date   : new Date("05/09/2016"),
			Zinc   : 1.3, 
			NaOH   : 14.8,
		},	
		{
			date   : new Date("05/02/2016"),
			Zinc   : 1.4, 
			NaOH   : 16.2,
		},	
		{
			date   : new Date("04/27/2016"),
			Zinc   : 1.5, 
			NaOH   : 16.3,
		},
		{		
			date   : new Date("04/25/2016"),
			Zinc   : 1.6, 
			NaOH   : 16.4,
		},
		{		
			date   : new Date("04/18/2016"),
			Zinc   : 1.3, 
			NaOH   : 16.1,
		},
		{		
			date   : new Date("04/14/2016"),
			Zinc   : 1.3, 
			NaOH   : 15.4,
		},	
		{
			date   : new Date("04/13/2016"),
			Zinc   : 1.3, 
		},	
		{
			date   : new Date("04/11/2016"),
			Zinc   : 1.4, 
			NaOH   : 16.0,
		},	
		{
			date   : new Date("04/06/2016"),
			Zinc   : 1.3, 
		},	
		{
			date   : new Date("04/04/2016"),
			Zinc   : 1.4, 
			NaOH   : 15.5,
		},	
		{
			date   : new Date("03/28/2016"),
			Zinc   : 1.4, 
			NaOH   : 15.6,
		},	
		{
			date   : new Date("03/23/2016"),
			Zinc   : 1.3, 
		},	
		{
			date   : new Date("03/21/2016"),
			Zinc   : 1.3, 
			NaOH   : 15.5,
		},
		{		
			date   : new Date("03/14/2016"),
			Zinc   : 1.3, 
			NaOH   : 15.3,
		},	
		{
			date   : new Date("03/07/2016"),
			Zinc   : 1.2, 
			NaOH   : 15.4,
		},
		{		
			date   : new Date("03/02/2016"),
			Zinc   : 1.4, 
		},
		{		
			date   : new Date("02/29/2016"),
			Zinc   : 1.5, 
			NaOH   : 15.8,
		},	
		{
			date   : new Date("02/25/2016"),
			Zinc   : 1.3, 
			NaOH   : 15.6,
		},
		{		
			date   : new Date("02/24/2016"),
			Zinc   : 1.3, 
		},
		{		
			date   : new Date("02/22/2016"),
			Zinc   : 1.4, 
			NaOH   : 14.3,
		},
		{		
			date   : new Date("02/18/2016"),
			Zinc   : 1.3, 
			NaOH   : 15.3,
		},
		{		
			date   : new Date("02/17/2016"),
			Zinc   : 1.1, 
		},
		{		
			date   : new Date("02/15/2016"),
			Zinc   : 1.4, 
			NaOH   : 16.9,
		},	
		{
			date   : new Date("02/11/2016"),
			Zinc   : 1.2, 
			NaOH   : 15.7,
		},	
		{
			date   : new Date("02/03/2016"),
			Zinc   : 1.2, 
			NaOH   : 15.9,
		},
		{		
			date   : new Date("02/01/2016"),
			Zinc   : 1.3, 
			NaOH   : 15.9,
		},	
		{
			date   : new Date("01/28/2016"),
			Zinc   : 1.1, 
			NaOH   : 16.1,
		},	
		{
			date   : new Date("01/27/2016"),
			Zinc   : 1.3,
		}
		
	],
};
var t1707 = {
	tmfcParameters : {
		concentrations     : {
			"Zinc"             : ["1.0 - 1.5", " oz/gal"],
			"NaOH"             : ["15 - 18", " oz/gal"],
			"Carbonates"       : ["<10", " oz/gal"],
			"Iron"             : ["<10", " ppm"],
			"Chromium"         : ["<10", " ppm"],
			"Copper"           : ["<2", " ppm"],

		},
		lineNumber         : 1707,
		applicationType    : "Electro-Plating",
		temp               : "70 - 100°F",
		immersion          : "",
		tankSize           : {
			lngth          : '142\"',
			width          : '54.5"',
			depth          : '26"' + ' (sol. level)',
			capacity       : "1165 gallons"		
		},
		tankMaterial   : "Steel w/Liner",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Stainless Steel",
		coilType       : "U",
		agitationLevel : "Low - ",
		agitationType  : "Pump",
		TDS            : ["Havastar ZN Gleam AB TDS.pdf"]
	},
	makeup : {
		date : new Date("July 5, 2016"),
		components: [
			{
			component  : "Zinc Sol 2272",
			unit       : " oz/gal",
			makeupAt   : "1.3",
			amount     : "69 gallons"
			},
			{
			component  : "Sodium Hydroxide",
			unit       : " oz/gal",
			makeupAt   : "16.0",
			amount     : "1,165 lbs"
			},
			{
			component  : "Havastar ZN Gleam A",
			unit       : "%",
			makeupAt   : "1",
			amount     : "11.5 gal"
			},
			{
			component  : "Havastar ZN Gleam B",
			unit       : "%",
			makeupAt   : "0.75",
			amount     : "8.5 gal"
			},
			{
			component  : "Havtech ZN Purifier",
			unit       : "%",
			makeupAt   : "0.1",
			amount     : "4500 mls"
			},
			{
			component  : "NCZ Conditioner",
			unit       : " lbs",
			makeupAt   : "",
			amount     : "50 lbs"
			},
			{
			component  : "Iron",
			unit       : " ppm",
			},
		]
	},
	analysis : [
/*Week 50*/	
		{
			date : new Date("12/15/2016"),
			temp : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			},	
		},
		{
			date : new Date("12/14/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			},
		},
		{
			date : new Date("12/13/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/12/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			},
			additions : {
				"NCZ Conditioner" : [10, " lbs"]
			},
		},
/*Week 49*/
		{
			date : new Date("12/8/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/7/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/6/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/5/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			},
			additions : {
				"NCZ Conditioner" : [10, " lbs"]
			},
		},
/*Week 48*/
		{
			date : new Date("12/1/2016"),
			Zinc       : 1.53, 
			NaOH       : 15.37,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/30/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/29/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/28/2016"),
			Zinc       : 1.62, 
			NaOH       : 16.11,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			},
			additions : {
				"NCZ Conditioner" : [10, " lbs"]
			},
		},
/*Week 47*/
		{
			date : new Date("11/23/2016"),
			Zinc       : 1.48, 
			NaOH       : 16.01,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/22/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/21/2016"),
			Zinc       : 1.43, 
			NaOH       : 16.75,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			},
			additions : {
				"NCZ Conditioner" : [10, " lbs"]
			},
		},
/*Week 46*/		
		{
			date : new Date("11/17/2016"),
			Zinc       : 1.39, 
			NaOH       : 16.11,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/16/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/15/2016"),
			Zinc       : 1.41, 
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/14/2016"),
			Zinc       : 1.65, 
			NaOH       : 16.54,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			},
			additions : {
				"NCZ Conditioner" : [10, " lbs"]
			},
		},
/*Week 45*/
		{
			date : new Date("11/10/2016"),
			Zinc       : 1.25, 
			NaOH       : 16.32,
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/9/2016"),
			Zinc       : 1.39, 
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/8/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/7/2016"),
			Zinc       : 1.48, 
			NaOH       : 17.17,
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			},
			additions : {
				"NCZ Conditioner" : [10, " lbs"]
			},
		},
/*Week 44*/
		{
			date : new Date("11/3/2016"),
			Zinc       : 1.24, 
			NaOH       : 17.07,
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/2/2016"),
			Zinc       : 1.25, 
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/1/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("10/31/2016"),
			Zinc       : 1.39, 
			NaOH       : 15.79,
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			},
			additions : {
				"NaOH"           : [100, "lbs"],
				"NCZ Conditioner": [10, "lbs"]
			},
		},
/*Week 43*/
		{
			date : new Date("10/27/2016"),
			Zinc       : 1.18, 
			NaOH       : 15.15,
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			},
			additions : {
				"NaOH"           : [100, "lbs"]
			},
		},
		{
			date : new Date("10/26/2016"),
			Zinc       : 1.29, 
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/25/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/24/2016"),
			Zinc       : 1.31, 
			NaOH       : 15.37,
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			},
			additions : {
				"NCZ Conditioner" : [10, "lbs"]
			},
		},
/*Week 42*/
		{
			date : new Date("10/20/2016"),
			Zinc       : 1.24, 
			NaOH       : 15.90,
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/19/2016"),
			Zinc       : 1.31, 
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/18/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/17/2016"),
			Zinc       : 1.41, 
			NaOH       : 16.01,
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			},
			additions : {
				"NCZ Conditioner" : [10, " lbs"]
			},
		},
/*Week 41*/
		{
			date : new Date("10/13/2016"),
			Zinc       : 1.34, 
			NaOH       : 16.11,
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/12/2016"),
			Zinc       : 1.18, 
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			},
			additions : {
				"Zinc Hydroxide" : [5, "gal"],
			},
		},
		{
			date : new Date("10/11/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			},
		},
		{
			date : new Date("10/10/2016"),
			Zinc       : 1.65, 
			NaOH       : 16.54,
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			},
			additions : {
				"NCZ Conditioner" : [10, " lbs"]
			},
		},
/*Week 40*/
		{
			date : new Date("10/6/2016"),
			Zinc       : 1.39, 
			NaOH       : 16.54,
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/5/2016"),
			Zinc       : 1.48, 
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/4/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/3/2016"),
			Zinc       : 1.67, 
			NaOH       : 16.96,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
			additions : {
				"NCZ Conditioner" : [10, " lbs"]
			},
		},
/*Week 39*/
		{
			date : new Date("9/29/2016"),
			Zinc       : 1.39, 
			NaOH       : 16.85,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date : new Date("9/28/2016"),
			Zinc       : 1.22, 
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
			additions : {
				"Zinc Hydroxide" : [10, "gal"],
			},
		},
		{
			date : new Date("9/27/2016"),
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date : new Date("9/26/2016"),
			Zinc       : 1.39, 
			NaOH       : 15.69,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
			additions : {
				"NCZ Conditioner" : [10, " lbs"]
			},
		},
	]
};
var t1708 = {
	tmfcParameters : {
		lineNumber         : 1708,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '36\"',
			width          : '194"',
			depth          : '27"' + ' (sol. level)',
			capacity       : "815 gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t1709 = {
	tmfcParameters : {
		lineNumber     : 1709,
		applicationType: "Sour Dip",
		temp           : "60 - 90°F",
		conc           : "0.25- 0.75%",
		immersion      : "30 - 90sec",
		tankSize       : {
			lngth      : "58\"",
			width      : "48\"",
			depth      : "32\" (sol level)",
			capacity   : "160 gallons"
		
		},
		tankMaterial   : "Plastic",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "n/a",
		coilType       : "Serpentine",
		agitationLevel : "Mild - ",
		agitationType  : "Compressed Air",
	},	
	makeup : {
		date : new Date("November 28, 2016"),
		components: [
			{
			component  : "Nitric Acid",
			unit       : "%",
			makeupAt   : "0.25",
			amount     : "3000 mls"
			}
		]
	},
	analysis : [
		{
			date   : new Date("12/01/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 152,
				"3:00PM" : 155
			},
			pH   : {
				"8:00AM" : 1.37,
			}
		},
		
	],
};
var t1710 = {
	tmfcParameters : {
		lineNumber         : 1710,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '31\"',
			width          : '56"',
			depth          : '25"' + ' (sol. level)',
			capacity       : "190 gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t1711 = {
	tmfcParameters : {
		concentrations: {
			"Prodigy Triton"   : ["8", "% bv"],
		},
		lineNumber         : 1711,
		applicationType    : "Trivalent Clear Chromate",
		temp               : "70 - 90°F",
		immersion          : "15 - 30 sec",
		pH                 : 2.0 - 2.4,
		tankSize           : {
			lngth          : '27\"',
			width          : '55"',
			depth          : '26.5"' + ' (sol. level)',
			capacity       : "170 gallons",		
		},
		tankMaterial   : "",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Stainless Steel",
		coilType       : "Serpentine",
		agitationLevel : "Low - ",
		agitationType  : "Air",
		TDS            : ["Prodigy Triton TDS.pdf"],
	},
	makeup : {
		date : new Date("October 1, 2016"),
		components: [
			{
			component  : "Prodigy Triton",
			unit       : "% bv",
			makeupAt   : "8",
			amount     : "13.6 gal",
			},
			{
			component  : "Sodium Hydroxide",
			unit       : "",
			makeupAt   : "raise to pH of 2.2",
			amount     : "As needed",
			},
		]
	},
	analysis : [
		{
			date   : new Date("12/01/2016"),
			"Prodigy Triton" : 8.1,
			temp  : {
				"8:00AM" : 60,
				"11:30AM": 80,
				"3:00PM" : 75
			},
			pH : {
				"8:00AM" : 2.20,
				"11:30AM": 2.25,
				"3:00PM" : 2.30
			},
		},
		
	],
	additions : [
		{
			date : new Date("12/03/2016"),
			component : {
				"Triton" : [50, "lbs"],
			},
		},
	],
	
};
var t1712 = {
	tmfcParameters : {
		lineNumber         : 1712,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '34.5\"',
			width          : '55"',
			depth          : '25"' + ' (sol. level)',
			capacity       : "205 gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t1713 = {
	tmfcParameters : {
		lineNumber         : 1713,
		applicationType    : "Non-Use",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '25\"',
			width          : '56"',
			depth          : '24"' + ' (sol. level)',
			capacity       : "145 gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
	},
};
var t1714 = {
	tmfcParameters : {
		lineNumber         : 1714,
		applicationType    : "Non-Use",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '25\"',
			width          : '56"',
			depth          : '24"' + ' (sol. level)',
			capacity       : "145 gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t1715 = {
	tmfcParameters : {
		lineNumber         : 1715,
		applicationType    : "Rinse",
		temp               : "120 - 160°F",
		immersion          : "5 - 10 sec",
		tankSize           : {
			lngth          : '26.5\"',
			width          : '55"',
			depth          : '27"' + ' (sol. level)',
			capacity       : "170 gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t1716 = {
	tmfcParameters : {
		lineNumber         : 1716,
		applicationType    : "Non-Use",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '25\"',
			width          : '56"',
			depth          : '24"' + ' (sol. level)',
			capacity       : "145 gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t1717 = {
	tmfcParameters : {
		concentrations: {
			"546-A"   : ["10", "% bv"],
			"546-B"   : ["1", "% bv"],
		},
		lineNumber         : 1717,
		applicationType    : "Trivalent Yellow Chromate",
		temp               : "70 - 90°F",
		pH                 : "1.8 - 2.1",
		immersion          : "30 - 90 sec",
		tankSize           : {
			lngth          : '29.5\"',
			width          : '56"',
			depth          : '25"' + ' (sol. level)',
			capacity       : "180 gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Steel",
		coilType       : "U",
		agitationLevel : "High - ",
		agitationType  : "Air",
		TDS            : ["546 Yellow TDS.pdf"]
	},
	makeup : {
		date : new Date("August 1, 2016"),
		components: [
			{
			component  : "Accu-Labs 546-A",
			unit       : "% bv",
			makeupAt   : "10",
			amount     : "18 gal"
			},
			{
			component  : "Accu-Labs 546-B",
			unit       : "% bv",
			makeupAt   : "1",
			amount     : "1.8 gal"
			},
		]
	},
	analysis : [
		{
			date   : new Date("12/01/2016"),
			"546-A" : 10.23, 
			"546-B" : 1.2,
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 152,
				"3:00PM" : 155
			},
			pH : {
				"8:00AM" : 1.96,
			}
		},
		
	],
	additions : [
		{
			date : new Date("12/03/2016"),
			component : {
				"546-A" : [2000, "mls"],
				"546-B" : [300, "mls"],
			}
		},
	],
	
};
var t1718 = {
	tmfcParameters : {
		lineNumber         : 1718,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '26.5\"',
			width          : '56"',
			depth          : '23"' + ' (sol. level)',
			capacity       : "150 gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};


var t2501 = {
	tmfcParameters : {
		concentrations     : {
			"SSP-140"   : ["8 - 11", ' oz/gal'],
			"Activity"  : [">80", '%'],
			"Saturation": ["<20", '%'],
		},
		lineNumber     : 2501,
		applicationType: "Cleaner",
		temp           : "120 - 160°F",
		immersion      : "3 - 10 min",
		tankSize       : {
			lngth      : "\"",
			width      : "\"",
			depth      : "\" (sol. level)",
			capacity   : " gallons"
		
		},
		tankMaterial   : "Steel",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Carbon Steel",
		coilType       : "Serpentine",
		agitationLevel : "Mild - ",
		agitationType  : "Compressed Air",
		TDS            : ["Cleaner SSP-140 TDS.pdf"]
	},
	makeup : {
		date : new Date("October 1, 2016"),
		components: [
			{
			component  : "Cleaner SSP-140",
			unit       : " oz/gal",
			makeupAt   : "10",
			amount     : "275 lbs"
			}
		]
	},
	analysis : [
/*Week 50*/	
		{
			date : new Date("12/15/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/14/2016"),
			"SSP-140"   : 9.52,
			"Activity"  : 85,
			"Saturation": 45,
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/13/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/12/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
/*Week 49*/
		{
			date : new Date("12/8/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/7/2016"),
			"SSP-140"  : 9.81,
			"Activity"  : 85,
			"Saturation": 40,
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/6/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/5/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
/*Week 48*/
		{
			date : new Date("12/1/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/30/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/29/2016"),
			"SSP-140"  : 10.5,
			"Activity"  : 83,
			"Saturation": 40,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/28/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 47*/
		{
			date : new Date("11/23/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/22/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/21/2016"),
			"SSP-140"  : 10.80,
			"Activity"  : 87,
			"Saturation": 35,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 46*/		
		{
			date : new Date("11/17/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/16/2016"),
			"SSP-140"  : 11.02,
			"Activity"  : 88,
			"Saturation": 35,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/15/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/14/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 45*/
		{
			date : new Date("11/10/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/9/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/8/2016"),
			"SSP-140"  : 10.64,
			"Activity"  : 90,
			"Saturation": 30,
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/7/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
/*Week 44*/
		{
			date : new Date("11/3/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/2/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/1/2016"),
			"SSP-140"  : 10.91,
			"Activity"  : 90,
			"Saturation": 25,
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("10/31/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
/*Week 43*/
		{
			date : new Date("10/27/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/26/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/25/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/24/2016"),
			"SSP-140": 9.2,
			"Activity"  : 89,
			"Saturation": 20,
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			},
			additions : {
				"SSP-140" : [25, " lbs"],
			}
		},
/*Week 42*/
		{
			date : new Date("10/20/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/19/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/18/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/17/2016"),
			"SSP-140": 9.8,
			"Activity"  : 91,
			"Saturation": 15,
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			},
			additions : {
				"SSP-140" : [25, " lbs"],
			}
		},
/*Week 41*/
		{
			date : new Date("10/13/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/12/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/11/2016"),
			"SSP-140": 8.13,
			"Activity"  : 93,
			"Saturation": 10,
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			},
			additions : {
				"SSP-140" : [100, " lbs"],
			}
		},
		{
			date : new Date("10/10/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},	
/*Week 40*/
		{
			date : new Date("10/6/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/5/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/4/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/3/2016"),
			"SSP-140": 6.61,
			"Activity"  : 94,
			"Saturation": 3,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
			additions : {
				"SSP-140" : [100, " lbs"],
			}
		},
/*3rd QUARTER*/	
/*Week 39*/
		{
			date : new Date("9/1/2016"),
			"SSP-140": 8.36,
			"Activity"  : 86,
			"Saturation": 40,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date : new Date("8/17/2016"),
			"SSP-140": 9.5,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
			additions : {
				"SSP-140" : [50, " lbs"],
			}
		},
		{
			date : new Date("8/9/2016"),
			"SSP-140": 9.5,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
			additions : {
				"SSP-140" : [15, " lbs"],
			}
		},
		{
			date : new Date("7/21/2016"),
			"SSP-140": 10.41,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date : new Date("7/5/2016"),
			"SSP-140": 8.22,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
			additions : {
				"SSP-140" : [50, " lbs"],
			}
		},
	],	
};
var t2502 = {
	tmfcParameters : {
		lineNumber         : 2502,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t2503 = {
	tmfcParameters : {
		concentrations: {
			"Anokleen #2-S"   : ["8 - 10", " oz/gal"],
			"Activity"  : [">80", '%'],
			"Saturation": ["<20", '%'],
		},
		lineNumber         : 2503,
		applicationType    : "Electro-Cleaner",
		temp               : "130 - 160°F",
		immersion          : "1 - 5 min",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Stainless Steel",
		coilType       : "Serpentine",
		agitationLevel : "Low - ",
		agitationType  : "Air",
		TDS            : ["Anokleen 2-S TDS.pdf"]
	},
	makeup : {
		date : new Date("December 30, 2016"),
		components: [
			{
			component  : "Cleaner Anokleen #2-S",
			unit       : " oz/gal",
			makeupAt   : "10",
			amount     : " lbs"
			},
		]
	},
	analysis : [
/*Week 50*/	
		{
			date : new Date("12/15/2016"),
			"Anokleen #2-S" : 10.05,
			"Activity"  : 85,
			"Saturation": 45,
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/14/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/13/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/12/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
/*Week 49*/
		{
			date : new Date("12/8/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/7/2016"),
			"Anokleen #2-S" : 10.23,
			"Activity"  : 84,
			"Saturation": 40,
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/6/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/5/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
/*Week 48*/
		{
			date : new Date("12/1/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/30/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/29/2016"),
			"Anokleen #2-S" : 10.58,
			"Activity"  : 86,
			"Saturation": 40,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/28/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 47*/
		{
			date : new Date("11/23/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/22/2016"),
			"Anokleen #2-S" : 8.66,
			"Activity"  : 88,
			"Saturation": 35,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			},
			additions : {
				"Anokleen #2-S" : [25, "lbs"]
			}
		},
		{
			date : new Date("11/21/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 46*/		
		{
			date : new Date("11/17/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/16/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/15/2016"),
			"Anokleen #2-S" : 9.21,
			"Activity"  : 88,
			"Saturation": 30,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/14/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 45*/
		{
			date : new Date("11/10/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/9/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/8/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/7/2016"),
			"Anokleen #2-S" : 9.50,
			"Activity"  : 89,
			"Saturation": 25,
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
/*Week 44*/
		{
			date : new Date("11/3/2016"),
			"Anokleen #2-S" : 9.58,
			"Activity"  : 89,
			"Saturation": 25,
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/2/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/1/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("10/31/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
/*Week 43*/
		{
			date : new Date("10/27/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/26/2016"),
			"Anokleen #2-S" : 10.44,
			"Activity"  : 91,
			"Saturation": 15,
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/25/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/24/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			},
		},
/*Week 42*/
		{
			date : new Date("10/20/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/19/2016"),
			"Anokleen #2-S" : 10.91,
			"Activity"  : 94,
			"Saturation": 10,
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/18/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/17/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			},
		},
/*Week 41*/
		{
			date : new Date("10/13/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/12/2016"),
			"Anokleen #2-S" : 8.50,
			"Activity"  : 92,
			"Saturation": 15,
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/11/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			},
		},
		{
			date : new Date("10/10/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
/*Week 40*/
		{
			date : new Date("10/6/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/5/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/4/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/3/2016"),
			"Anokleen #2-S" : 9.55,
			"Activity"  : 96,
			"Saturation": 10,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
		},
/*Week 39*/
		{
			date : new Date("9/29/2016"),
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date : new Date("9/28/2016"),
			"Anokleen #2-S" : 10.05,
			"Activity"  : 98,
			"Saturation": 5,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date : new Date("9/27/2016"),
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date : new Date("9/26/2016"),
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
	]
};
var t2504 = {
	tmfcParameters : {
		lineNumber         : 2504,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t2505 = {
	tmfcParameters : {
		concentrations     : {
			"HP Acidsalt FLWET" : ["14 - 16", 'oz/gal']
		},
		lineNumber     : 2505,
		applicationType: "Acid Pickle",
		temp           : "70 - 90°F",
		immersion      : "15 - 45 sec",
		tankSize       : {
			lngth      : "\"",
			width      : "\"",
			depth      : "\" (sol level)",
			capacity   : " gallons"
		
		},
		tankMaterial   : "Steel w/Liner",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "n/a",
		coilType       : "U",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : ["HP Acidsalt FLWET TDS.pdf"]
	},
	makeup : {
		date : new Date("December 9, 2016"),
		components: [
			{
			component  : "HP Acidsalt FLWET",
			unit       : "oz/gal",
			makeupAt   : "14",
			amount     : "gallons"
			}
		]
	},
	analysis : [
		{
			date : new Date("11/03/2016"),
			FLWET  : 14.0
		},
	],	
};
var t2506 = {
	tmfcParameters : {
		lineNumber         : 2506,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t2507 = {
	tmfcParameters : {
		concentrations     : {
			"Nickel Chloride" : ["27 - 32", 'oz/gal'],
			"Hydrochloric Acid" : ["9 - 12", '%']
			},
		lineNumber     : 2507,
		applicationType: "Nickel Strike",
		temp           : "70 - 90°F",
		immersion      : "45 - 120 sec",
		tankSize       : {
			lngth      : "\"",
			width      : "\"",
			depth      : "\" (sol level)",
			capacity   : " gallons"
		
		},
		tankMaterial   : "Steel w/Liner",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "n/a",
		coilType       : "U",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
	makeup : {
		date : new Date("December 28, 2016"),
		components: [
			{
			component  : "Nickel Hydroxide",
			unit       : "oz/gal",
			makeupAt   : "28",
			amount     : "gallons"
			},
			{
			component  : "Hydrochloric Acid",
			unit       : "%",
			makeupAt   : "11",
			amount     : "gallons"
			},
		]
	},
	analysis : [
		{
			date : new Date("11/03/2016"),
			"Nickel Chloride"  : 28.0,
			HCL : 11.0
		},
	],	
};
var t2508 = {
	tmfcParameters : {
		lineNumber         : 2508,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t2509 = {
	tmfcParameters : {
		lineNumber         : 2509,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t2510 = {
	tmfcParameters : {
		concentrations     : {
			"Zinc" : ["1.20 - 1.45", ' oz/gal'],
			"Sodium Hydroxide" : ["14 - 19", " oz/gal"]
		},
		lineNumber     : 2510,
		applicationType: "Electro-Plating",
		temp           : "60 - 80°F",
		immersion      : "10 - 30 min",
		tankSize       : {
			lngth      : "\"",
			width      : "\"",
			depth      : "\" (sol level)",
			capacity   : " gallons"
		
		},
		tankMaterial   : "Steel w/Liner",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "n/a",
		coilType       : "U",
		agitationLevel : "Low - ",
		agitationType  : "Pump",
		TDS            : ["Havalloy Z-N(Rev 1).pdf"]
	},
	makeup : {
		date : new Date("January 16, 2017"),
		components: [
			{
			component  : "Zinc Hydroxide",
			unit       : "oz/gal",
			makeupAt   : "1.4",
			amount     : "gallons"
			},
			{
			component  : "Sodium Hydroxide",
			unit       : "oz/gal",
			makeupAt   : "16",
			amount     : "gallons"
			},
		]
	},
	analysis : [
		{
			date : new Date("11/03/2016"),
			"Zinc"  : 1.4,
			"Sodium Hydroxide" : 16.0
		},
	],	
};
var t2511 = {
	tmfcParameters : {
		lineNumber         : 2511,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t2512 = {
	tmfcParameters : {
		lineNumber         : 2512,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t2513 = {
	tmfcParameters : {
		concentrations     : {
			"Nitric Acid" : ["20 - 25", '%']
		},
		lineNumber     : 2513,
		applicationType: "Passivate",
		temp           : "60 - 100°F",
		immersion      : "20 - 30 min",
		tankSize       : {
			lngth      : "\"",
			width      : "\"",
			depth      : "\" (sol level)",
			capacity   : " gallons"
		
		},
		tankMaterial   : "Steel w/Liner",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Stainless Steel",
		coilType       : "U",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
	},
	makeup : {
		date : new Date("December 28, 2016"),
		components: [
			{
			component  : "Nitric Acid",
			unit       : "%",
			makeupAt   : "25",
			amount     : "gallons"
			}
		]
	},
	analysis : [
		{
			date : new Date("11/03/2016"),
			Nitric  : 25.0
		},
	],	
};
var t2514 = {
	tmfcParameters : {
		lineNumber         : 2514,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t2515 = {
	tmfcParameters : {
		lineNumber         : 2515,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t2516 = {
	tmfcParameters : {
		lineNumber         : 2516,
		applicationType    : "Non-use",
		temp               : "",
		immersion          : "",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "",
		agitationType  : "Air",
		TDS            : []
	},
};
var t2517 = {
	tmfcParameters : {
		lineNumber         : 2517,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t2518 = {
	tmfcParameters : {
		concentrations     : {
			"COLDIP NI-Z TRI BLUE 100" : ["14 - 16", '%']
		},
		lineNumber     : 2518,
		applicationType: "Chromate",
		temp           : "130 - 150°F",
		immersion      : "30 - 90 sec",
		pH             : 2.3 - 2.4,
		tankSize       : {
			lngth      : "\"",
			width      : "\"",
			depth      : "\" (sol level)",
			capacity   : " gallons"
		
		},
		tankMaterial   : "Steel w/Liner",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "n/a",
		coilType       : "Serpentine",
		agitationLevel : "High - ",
		agitationType  : "Air",
		TDS            : ["COLDIP NI-Z TRI BLUE 100 TDS.pdf"]
	},
	makeup : {
		date : new Date("December 28, 2016"),
		components: [
			{
			component  : "COLDIP NI-Z TRI BLUE 100",
			unit       : "%",
			makeupAt   : "5",
			amount     : "gallons"
			}
		]
	},
	analysis : [
		{
			date : new Date("11/03/2016"),
			"TRI BLUE 100": 5
		},
	],	
};
var t2519 = {
	tmfcParameters : {
		concentrations     : {
			"Nitric Acid" : ["20 - 25", '%'],
			"Sodium DiChromate" : ["2 - 3", "% b/w"]
		},
		lineNumber     : 2519,
		applicationType: "Passivate",
		temp           : "120 - 140°F",
		immersion      : "20 - 30 min",
		tankSize       : {
			lngth      : "\"",
			width      : "\"",
			depth      : "\" (sol level)",
			capacity   : " gallons"
		
		},
		tankMaterial   : "Steel w/Liner",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Stainless Steel",
		coilType       : "U",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
	},
	makeup : {
		date : new Date("December 28, 2016"),
		components: [
			{
			component  : "Nitric Acid",
			unit       : "%",
			makeupAt   : "25",
			amount     : "gallons"
			},
			{
			component  : "Sodium DiChromate",
			unit       : "% b/w",
			makeupAt   : "3",
			amount     : "lbs"
			},
		]
	},
	analysis : [
		{
			date : new Date("11/03/2016"),
			Nitric  : 25.0,
			"Sodium DiChromate" : 3.0,
		},
	],	
};
var t2520 = {
	tmfcParameters : {
		lineNumber         : 2520,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t2521 = {
	tmfcParameters : {
		lineNumber         : 2521,
		applicationType    : "Non-use",
		temp               : "",
		immersion          : "",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "",
		agitationType  : "Air",
		TDS            : []
	},
};
var t2522 = {
	tmfcParameters : {
		lineNumber         : 2522,
		applicationType    : "Non-use",
		temp               : "",
		immersion          : "",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "",
		agitationType  : "Air",
	},
};
var t2523 = {
	tmfcParameters : {
		lineNumber         : 2523,
		applicationType    : "Non-use",
		temp               : "",
		immersion          : "",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "",
		agitationType  : "Air",
	},
};


var t801 = {
	tmfcParameters : {
		concentrations     : {
			"SSP-140"   : ["8 - 11", ' oz/gal'],
			"Activity"  : [">80", '%'],
			"Saturation": ["<20", '%'],
		},
		lineNumber     : 801,
		applicationType: "Cleaner",
		temp           : "120 - 160°F",
		immersion      : "3 - 10 min",
		tankSize       : {
			lngth      : "\"",
			width      : "\"",
			depth      : "\" (sol. level)",
			capacity   : " gallons"
		
		},
		tankMaterial   : "Steel",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Carbon Steel",
		coilType       : "Serpentine",
		agitationLevel : "Mild - ",
		agitationType  : "Compressed Air",
		TDS            : ["Cleaner SSP-140 TDS.pdf"],
	},
	makeup : {
		date : new Date("December 30, 2016"),
		components: [
			{
			component  : "Cleaner SSP-140",
			unit       : " oz/gal",
			makeupAt   : "10",
			amount     : "275 lbs"
			}
		]
	},
	analysis : [
/*Week 50*/	
		{
			date : new Date("12/15/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/14/2016"),
			"SSP-140"   : 9.52,
			"Activity"  : 85,
			"Saturation": 45,
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/13/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/12/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
/*Week 49*/
		{
			date : new Date("12/8/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/7/2016"),
			"SSP-140"  : 9.81,
			"Activity"  : 85,
			"Saturation": 40,
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/6/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
		{
			date : new Date("12/5/2016"),
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
/*Week 48*/
		{
			date : new Date("12/1/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/30/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/29/2016"),
			"SSP-140"  : 10.5,
			"Activity"  : 83,
			"Saturation": 40,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/28/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 47*/
		{
			date : new Date("11/23/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/22/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/21/2016"),
			"SSP-140"  : 10.80,
			"Activity"  : 87,
			"Saturation": 35,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 46*/		
		{
			date : new Date("11/17/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/16/2016"),
			"SSP-140"  : 11.02,
			"Activity"  : 88,
			"Saturation": 35,
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/15/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
		{
			date : new Date("11/14/2016"),
			temp   : {
				"8:00AM" : 143,
				"11:30AM": 151,
				"3:00PM" : 148
			}
		},
/*Week 45*/
		{
			date : new Date("11/10/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/9/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/8/2016"),
			"SSP-140"  : 10.64,
			"Activity"  : 90,
			"Saturation": 30,
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/7/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
/*Week 44*/
		{
			date : new Date("11/3/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/2/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("11/1/2016"),
			"SSP-140"  : 10.91,
			"Activity"  : 90,
			"Saturation": 25,
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
		{
			date : new Date("10/31/2016"),
			temp   : {
				"8:00AM" : 135,
				"11:30AM": 162,
				"3:00PM" : 158
			}
		},
/*Week 43*/
		{
			date : new Date("10/27/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/26/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/25/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/24/2016"),
			"SSP-140": 9.2,
			"Activity"  : 89,
			"Saturation": 20,
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			},
			additions : {
				"SSP-140" : [25, " lbs"],
			}
		},
/*Week 42*/
		{
			date : new Date("10/20/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/19/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/18/2016"),
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			}
		},
		{
			date : new Date("10/17/2016"),
			"SSP-140": 9.8,
			"Activity"  : 91,
			"Saturation": 15,
			temp   : {
				"8:00AM" : 144,
				"11:30AM": 155,
				"3:00PM" : 161
			},
			additions : {
				"SSP-140" : [25, " lbs"],
			}
		},
/*Week 41*/
		{
			date : new Date("10/13/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/12/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/11/2016"),
			"SSP-140": 8.13,
			"Activity"  : 93,
			"Saturation": 10,
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			},
			additions : {
				"SSP-140" : [100, " lbs"],
			}
		},
		{
			date : new Date("10/10/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},	
/*Week 40*/
		{
			date : new Date("10/6/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/5/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/4/2016"),
			temp   : {
				"8:00AM" : 133,
				"11:30AM": 135,
				"3:00PM" : 140
			}
		},
		{
			date : new Date("10/3/2016"),
			"SSP-140": 6.61,
			"Activity"  : 94,
			"Saturation": 3,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
			additions : {
				"SSP-140" : [100, " lbs"],
			}
		},
/*3rd QUARTER*/	
/*Week 39*/
		{
			date : new Date("9/1/2016"),
			"SSP-140": 8.36,
			"Activity"  : 86,
			"Saturation": 40,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date : new Date("8/17/2016"),
			"SSP-140": 9.5,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
			additions : {
				"SSP-140" : [50, " lbs"],
			}
		},
		{
			date : new Date("8/9/2016"),
			"SSP-140": 9.5,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
			additions : {
				"SSP-140" : [15, " lbs"],
			}
		},
		{
			date : new Date("7/21/2016"),
			"SSP-140": 10.41,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date : new Date("7/5/2016"),
			"SSP-140": 8.22,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			},
			additions : {
				"SSP-140" : [50, " lbs"],
			}
		},
	],	
};
var t802 = {
	tmfcParameters : {
		lineNumber         : 802,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t803 = {
	tmfcParameters : {
		concentrations     : {
			"Bonderite M-AC M" : ["", '% b/w'],
		},
		lineNumber     : 803,
		applicationType: "Conditioner",
		temp           : "120 - 190°F",
		immersion      : "1 min",
		tankSize       : {
			lngth      : "\"",
			width      : "\"",
			depth      : "\" (sol level)",
			capacity   : " gallons",
		
		},
		tankMaterial   : "Steel w/Liner",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "n/a",
		coilType       : "U",
		agitationLevel : "Mild - ",
		agitationType  : "Mixer",
		TDS            : ["BONDERITE M-AC M - TPB.pdf"],
	},
	makeup : {
		date : new Date("January 25, 2017"),
		components: [
			{
			component  : "Bonderite M-AC M",
			unit       : "% b/w",
			makeupAt   : "",
			amount     : "lbs",
			}
		]
	},	
};
var t804 = {
	tmfcParameters : {
		concentrations     : {
			"Total Acid" : ["11.0 - 12.5", '%'],
			"Free Acid"  : ["2.0 - 2.2", '%'],
			"Iron"       : ["0.28 - 0.33", '%'],
		},
		lineNumber     : 804,
		applicationType: "Manganese Phosphate",
		temp           : "190 - 205°F",
		immersion      : "4 - 15 min",
		tankSize       : {
			lngth      : "\"",
			width      : "\"",
			depth      : "\" (sol level)",
			capacity   : " gallons"
		
		},
		tankMaterial   : "Steel w/Liner",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "n/a",
		coilType       : "U",
		agitationLevel : "",
		agitationType  : "None",
		TDS            : ["BONDERITE M-MN LUBRITE 2 - TPB.pdf"]
	},
	makeup : {
		date : new Date("January 9, 2016"),
		components: [
			{
			component  : "Bonderite M-MN LUBRITE 2",
			unit       : "%",
			makeupAt   : "12",
			amount     : "gallons",
			},
			{
			component  : "Bonderite M-AD 10",
			unit       : "%",
			makeupAt   : "0.3",
			amount     : "gallons",
			},
		]
	},
	analysis : [
		{
			date : new Date("11/03/2016"),
			"Total Acid"  : 12.0,
			"Free Acid" : 2.2,
			Iron : 0.3,
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 193,
				"3:00PM" : 196
			}
		},
	],	
};
var t805 = {
	tmfcParameters : {
		concentrations     : {
			"Total Acid" : ["4.0 - 6.0", '%'],
			Iron : ["0 - 5", "%"],
		},
		lineNumber     : 805,
		applicationType: "Zinc Phosphate",
		temp           : "160 - 190°F",
		immersion      : "5 - 15 min",
		tankSize       : {
			lngth      : "\"",
			width      : "\"",
			depth      : "\" (sol level)",
			capacity   : " gallons"
		
		},
		tankMaterial   : "Steel w/Liner",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "n/a",
		coilType       : "U",
		agitationLevel : "",
		agitationType  : "None",
		TDS            : ["HP PHOS ZN 1400 TDS.pdf"]
	},
	makeup : {
		date : new Date("January 9, 2016"),
		components: [
			{
			component  : "HP PHOS ZN 1400",
			unit       : "%",
			makeupAt   : "5",
			amount     : "gallons",
			},
		]
	},
	analysis : [
		{
			date : new Date("11/03/2016"),
			"Total Acid"  : 5.0,
			Iron : 0.3,
		},
	],	
};
var t806 = {
	tmfcParameters : {
		lineNumber         : 806,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t807 = {
	tmfcParameters : {
		concentrations     : {
			"Bonderite L-GP 5800" : ["8.0 - 11.0", '%'],
		},
		lineNumber     : 807,
		applicationType: "Rust Preventative",
		temp           : "Ambient - 140°F",
		immersion      : "10 - 60 sec",
		tankSize       : {
			lngth      : "\"",
			width      : "\"",
			depth      : "\" (sol level)",
			capacity   : " gallons"
		
		},
		tankMaterial   : "Steel w/Liner",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "n/a",
		coilType       : "U",
		agitationLevel : "Low - ",
		agitationType  : "Pump",
		TDS            : ["Bonderite L-GP 5800 - TPB.pdf"]
	},
	makeup : {
		date : new Date("January 9, 2016"),
		components: [
			{
			component  : "Bonderite L-GP 5800",
			unit       : "%",
			makeupAt   : "9",
			amount     : "gallons",
			},
		]
	},
	analysis : [
		{
			date : new Date("11/03/2016"),
			"Refractometer"  : 9.0,
		},
	],	
};


var t901 = {
	tmfcParameters : {
		concentrations     : {
			"ACO 8800 HD"   : ["4 - 8", ' oz/gal'],
		},
		lineNumber     : 901,
		applicationType: "Aluminum Cleaner",
		temp           : "120 - 160°F",
		immersion      : "1 - 10 min",
		tankSize       : {
			lngth      : "\"",
			width      : "\"",
			depth      : "\" (sol. level)",
			capacity   : " gallons"
		
		},
		tankMaterial   : "Plastic",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Stainless Steel",
		coilType       : "Serpentine",
		agitationLevel : "Low - ",
		agitationType  : "Pump",
		TDS            : ["ACO 8800 HD TDS.pdf"]
	},
	makeup : {
		date : new Date("January 2, 2016"),
		components: [
			{
			component  : "ACO 8800 HD",
			unit       : " oz/gal",
			makeupAt   : "8",
			amount     : " lbs"
			}
		]
	},
	analysis : [
/*Week 50*/	
		{
			date : new Date("12/15/2016"),
			"ACO 8800 HD" : 8.0,
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
	],	
};
var t902 = {
	tmfcParameters : {
		lineNumber         : 902,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t903 = {
	tmfcParameters : {
		concentrations     : {
			"ND-68 G"   : ["4 - 12", ' oz/gal'],
			"Aluminum"  : ["0+", "g/L"],
		},
		lineNumber     : 903,
		applicationType: "Aluminum Etch",
		temp           : "80 - 170°F",
		immersion      : "15sec - 5min",
		tankSize       : {
			lngth      : "\"",
			width      : "\"",
			depth      : "\" (sol. level)",
			capacity   : " gallons"
		
		},
		tankMaterial   : "Plastic",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Stainless Steel",
		coilType       : "Serpentine",
		agitationLevel : "Low - ",
		agitationType  : "Pump",
		TDS            : ["ND-68 G TDS.pdf"]
	},
	makeup : {
		date : new Date("January 2, 2016"),
		components: [
			{
			component  : "ND-68 G",
			unit       : " oz/gal",
			makeupAt   : "4",
			amount     : " lbs"
			}
		]
	},
	analysis : [
/*Week 50*/	
		{
			date : new Date("12/15/2016"),
			"ND-68 G"  : 8.0,
			"Aluminum" : 20,
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
	],	
};
var t904 = {
	tmfcParameters : {
		lineNumber         : 904,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "Plastic",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t905 = {
	tmfcParameters : {
		concentrations     : {
			"Deox CR#1"   : ["1 - 2", ' oz/gal'],
			"Nitric Acid"  : ["5 - 10", "%"],
		},
		lineNumber     : 905,
		applicationType: "Alumnium Deoxidizer",
		temp           : "60 - 90°F",
		immersion      : "30sec - 5min",
		tankSize       : {
			lngth      : "\"",
			width      : "\"",
			depth      : "\" (sol. level)",
			capacity   : " gallons"
		
		},
		tankMaterial   : "Plastic",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Stainless Steel",
		coilType       : "Serpentine",
		agitationLevel : "Low - ",
		agitationType  : "Pump",
		TDS            : ["DEOX CR 1 TDS.pdf"]
	},
	makeup : {
		date : new Date("July 1, 2016"),
		components: [
			{
			component  : "Deox CR#1",
			unit       : " oz/gal",
			makeupAt   : "2",
			amount     : " lbs"
			},
			{
			component  : "Nitric Acid",
			unit       : "%",
			makeupAt   : "10",
			amount     : " gal"
			},
		]
	},
	analysis : [
/*Week 50*/	
		{
			date : new Date("12/15/2016"),
			"Deox CR#1"   : 2.0,
			"Nitric Acid" : 10,
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
	],	
};
var t906 = {
	tmfcParameters : {
		lineNumber         : 906,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "Plastic",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t907 = {
	tmfcParameters : {
		concentrations     : {
			"SurTec 650"   : ["10 - 30", '%'],
		},
		lineNumber     : 907,
		applicationType: "Trivalent Chromate",
		temp           : "86 - 104°F",
		pH             : 3.7 - 3.95,
		immersion      : "1 - 6 min",
		tankSize       : {
			lngth      : "\"",
			width      : "\"",
			depth      : "\" (sol. level)",
			capacity   : " gallons"
		
		},
		tankMaterial   : "Plastic",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Stainless Steel",
		coilType       : "Serpentine",
		agitationLevel : "Low - ",
		agitationType  : "Pump",
		TDS            : ["SurTec 650 V TDS.pdf"]
	},
	makeup : {
		date : new Date("July 1, 2016"),
		components: [
			{
			component  : "SurTec 650",
			unit       : "%",
			makeupAt   : "20",
			amount     : " gal"
			},
		]
	},
	analysis : [
/*Week 50*/	
		{
			date : new Date("12/15/2016"),
			"SurTec 650"   : 25,
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
	],	
};
var t908 = {
	tmfcParameters : {
		lineNumber         : 908,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "Plastic",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t909 = {
	tmfcParameters : {
		concentrations     : {
			"Havacoat AL-Y"   : ["1 - 3", ' oz/gal'],
		},
		lineNumber     : 909,
		applicationType: "Hexavalent Chromate",
		temp           : "60 - 80°F",
		pH             : 1.7 - 1.9,
		immersion      : "1 - 2 min",
		tankSize       : {
			lngth      : "\"",
			width      : "\"",
			depth      : "\" (sol. level)",
			capacity   : " gallons"
		
		},
		tankMaterial   : "Plastic",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Stainless Steel",
		coilType       : "Serpentine",
		agitationLevel : "Low - ",
		agitationType  : "Pump",
		TDS            : ["Havacoat AL-Y TDS.pdf"]
	},
	makeup : {
		date : new Date("January 3, 2016"),
		components: [
			{
			component  : "Havacoat AL-Y",
			unit       : " oz/gal",
			makeupAt   : "2",
			amount     : " lbs"
			},
		]
	},
	analysis : [
/*Week 50*/	
		{
			date : new Date("12/15/2016"),
			"Havacoat AL-Y" : 2.0,
			temp   : {
				"8:00AM" : 131,
				"11:30AM": 135,
				"3:00PM" : 142
			}
		},
	],	
};
var t910 = {
	tmfcParameters : {
		lineNumber         : 910,
		applicationType    : "Rinse",
		temp               : "Ambient",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "Plastic",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Mild - ",
		agitationType  : "Air",
		TDS            : []
	},
};
var t911 = {
	tmfcParameters : {
		lineNumber         : 911,
		applicationType    : "Rinse",
		temp               : "100 - 130°F",
		immersion          : ">30 sec",
		tankSize           : {
			lngth          : '\"',
			width          : '"',
			depth          : '"' + ' (sol. level)',
			capacity       : " gallons"		
		},
		tankMaterial   : "Plastic",
		heatMethod     : "none",
		heatMaterial   : "none",
		coilType       : "none",
		agitationLevel : "Low - ",
		agitationType  : "Pump",
		TDS            : []
	},
};












//npm install gulp gulp-concat gulp-connect gulp-eslint gulp-eslint gulp-file gulp-html-validator gulp-insert gulp-replace gulp-size gulp-streamify gulp-uglify gulp-util gulp-zip child_process gulp-karma browserify vinyl-source-stream merge-stream bundle-collapser yargs --save-dev

function Tank(tid) {
	
	
	if(tid.makeup) {
		this.makeupDate = tid.makeup.date;
	}
	if(tid.tmfcParameters.pH) {
		this.pH = tid.tmfcParameters.pH;
	}		
	this.lineNumber        = tid.tmfcParameters.lineNumber;
	this.applicationType   = tid.tmfcParameters.applicationType;
	this.requiredTemp      = tid.tmfcParameters.temp;
	this.requiredImmersion = tid.tmfcParameters.immersion;
	this.tankLngth         = tid.tmfcParameters.tankSize.lngth;
	this.tankWidth         = tid.tmfcParameters.tankSize.width;
	this.tankDepth         = tid.tmfcParameters.tankSize.depth;
	this.tankCapacity      = tid.tmfcParameters.tankSize.capacity;
	this.tankMaterial      = tid.tmfcParameters.tankMaterial;
	this.heatMethod        = tid.tmfcParameters.heatMethod;
	this.heatMaterial      = tid.tmfcParameters.heatMaterial;
	this.coilType          = tid.tmfcParameters.coilType;
	this.agitationLevel    = tid.tmfcParameters.agitationLevel;
	this.agitationType     = tid.tmfcParameters.agitationType;
	this.TDS               = tid.tmfcParameters.TDS;

	/*DATA GENERATED WITHIN MAKE-UP MODAL*/
	function addMakeupHTML() {
		for(var i = 0; i < tid.makeup.components.length; i++) { //Cycle over each object in components array
			var component = '';
			var unit = '';
			var amount = '';
			var makeupAt = '';
			var html = '';			
			if(tid.makeup.components[i].makeupAt) { //If components object has makeupAt property			
				component = tid.makeup.components[i].component; //set component key, unit key and amount key
				unit = tid.makeup.components[i].unit;
				amount = tid.makeup.components[i].amount;
				makeupAt = tid.makeup.components[i].makeupAt;
				html = '<p class="tankTable"><span class="data">';
				  html += component;
				  html += ': </span><span class="data">'
				  html += amount;
				  html += ' <span class="data parenthesis">(';
				  html += makeupAt + unit;
				  html += ')</span></span></p>';
				$('div[data-remodal-id="modal-makeup"]').append(html); //Append HTML to data-remodal-id="modal-makeup"
			}
		}
		$('div[data-remodal-id="modal-makeup"]').append('<br><button data-remodal-action="confirm" class="remodal-confirm">OK</button>');
	}
	var oneDay; // hours*minutes*seconds*milliseconds
	var firstDate;
	var secondDate;
	var diffDays;
	if(tid.makeup) {
		oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
		firstDate = new Date();
		secondDate = this.makeupDate;
		diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
	}
	
	
	
	
	
	
	/*SVG*/
	var html = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none;">';
			html += '<symbol id="record-keeping-icon" viewBox="0 0 100 100">';
			html += '<title>record-keeping-icon</title>';
			html += '<path class="st0" d="M84.3,29.2c0-0.1,0-0.1-0.1-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2';
			html += 'c0-0.1-0.1-0.1-0.2-0.2c0,0-0.1-0.1-0.1-0.1l0,0c0,0,0,0,0,0L64.4,8.4c-0.4-0.7-1-1.1-1.9-1.1c0,0,0,0-0.1,0c0,0,0,0-0.1,0H21.8';
			html += 'c-3.4,0-6.1,2.8-6.1,6.1v71.7c0,3.4,2.8,6.1,6.1,6.1h56.4c3.4,0,6.1-2.8,6.1-6.1V29.6C84.4,29.4,84.4,29.3,84.3,29.2z M64.6,14.7';
			html += 'l12.6,12.8H66.6c-1.1,0-1.9-0.9-1.9-1.9V14.7z M78.2,87.1H21.8c-1.1,0-1.9-0.9-1.9-1.9V13.4c0-1.1,0.9-1.9,1.9-1.9h38.6v14';
			html += 'c0,3.4,2.8,6.1,6.1,6.1h13.6v53.4C80.1,86.2,79.3,87.1,78.2,87.1z M68.5,49.3c0,1.2-0.9,2.1-2.1,2.1H33.6c-1.2,0-2.1-0.9-2.1-2.1';
			html += 's0.9-2.1,2.1-2.1h32.8C67.5,47.2,68.5,48.1,68.5,49.3z M68.5,59c0,1.2-0.9,2.1-2.1,2.1H33.6c-1.2,0-2.1-0.9-2.1-2.1';
			html += 'c0-1.2,0.9-2.1,2.1-2.1h32.8C67.5,56.9,68.5,57.9,68.5,59z M68.5,68.8c0,1.2-0.9,2.1-2.1,2.1H33.6c-1.2,0-2.1-0.9-2.1-2.1';
			html += 'c0-1.2,0.9-2.1,2.1-2.1h32.8C67.5,66.7,68.5,67.7,68.5,68.8z"/>';
		  html += '</symbol>';
		html += '</svg>';
		
		/*TANK NUMBER AND APPLICATION TYPE*/
		html += '<div class="tank">';
			html += '<div class="tank_id">';
				html += '<div class="application_type"><div class="tank_number"><a data-remodal-target="modal-tank" href="#">'
				html += this.lineNumber;
				html += '</a></div><div class="applicationType">';
				html += this.applicationType;
				html += '</div></div>';
				
		/*DAYS SINCE MAKEUP*/
				if(tid.makeup) {
					html += '<div class="last_made-up"><span class="number">';
					html += diffDays;
					html += '</span> days since <a data-remodal-target="modal-makeup" href="#">makeup</a></div>';
				}				
		/*TDS LINK*/
			html += '</div>';
			html += '<ul class="tds_list">';
			if(this.TDS) {
				if(this.TDS.length !== 0) {
					html += '<li><a href="./assets/pdf/';
					html += this.TDS;
					html += '">';
					html += '<img src="assets/img/datasheet-icon.jpg">';
					html += '</a></li>';
				}		
			}	
			html += '</ul>';
			
		/*PROCESS CONTROL SECTION*/
			html += '<div class="process_control">';
			
			/*TMFC CONTROL PARAMETERS*/
				html += '<div class="tmfc_control_parameters_cont">';
					html += '<h3 class="tmfc_control_parameters_title">TMFC Contorl Parameters</h3>';
					html += '<ul class="tmfc_control_parameters_list">';
						html += '<li><span class="propName">Temperature: </span><span class="propValue">';
						html += this.requiredTemp;
						html += '</span></li>';
						html += '<li><span class="propName">Agitation: </span><span class="propValue">';
						html += this.agitationLevel + this.agitationType;
						html += '</span></li>';
					html += '</ul>';
				html += '</div>';
				
			/*LATEST ANALYSIS*/
				if(tid.analysis) {
					var quit;
					for(var i = 0; i < tid.analysis.length; i++) { //Cycle through each object in analysis array 
						for(var key in tid.analysis[i]) {  //Cycle through each key in analysis object
							if(tid.analysis[i].hasOwnProperty(key) && key !== 'date' && key !== "temp" && key !== "additions" && key !== "pH" && quit !== "quit") {
								html += '<div class="current_state-cont">';
								html += '<h3 class="current_state_title">Latest Analysis</h3>';
								html += '<ul class="current_state_list">';
								html += '</ul>';
								html += '</div>';
								quit = "quit";
							}
						}
					}
				}	
			/*RECORDS*/
				if(tid.analysis) {
					html += '<div class="data_records_cont">';
					html += '<h3 class="data_records_title">Records</h3>';
					html += '<ul class="data_records_list">';
				
				
					var stop;
					/*LAB ANALYSIS BUTTON*/
						for(var i = 0; i < tid.analysis.length; i++) { //Cycle through each object in analysis array 
							for(var key in tid.analysis[i]) {  //Cycle through each key in analysis object
								if(tid.analysis[i].hasOwnProperty(key) && key !== 'date' && key !== "temp" && key !== "additions" && key !== "pH" && stop !== "stop") {
									html += '<a href="'
									html += this.lineNumber;
									html += 'chart.html"><li>';
									html += '<svg>';
									html += '<use xlink:href="#record-keeping-icon"></use>';
									html += '</svg>';
									html += 'Lab Analysis';
									html += '</li></a>';
									stop = "stop";
									/* i = tid.analysis.length; */
								}
							}
						}
						
					/*CHEMICAL ADDITIONS*/	
						for(i = 0; i < tid.analysis.length; i++) { //Cycle through analysis objects
							if(tid.analysis[i].additions) { 
								html += '<a href ="';
								html += this.lineNumber;
								html += 'add.html"><li>';
								html += '<svg>';
									html += '<use xlink:href="#record-keeping-icon"></use>';
								html += '</svg>';
								html += 'Chemical Additions Log';
								html += '</li></a>';	
								break;
							}
						}
						
					
					/*TEMP/PH LOG*/
						for(i = 0; i < tid.analysis.length; i++) {
							if(tid.analysis[i].temp || tid.analysis[i].pH) {
								html += '<a href="';
								html += this.lineNumber;
								html += 'tempph.html"><li>';
								html += '<svg>';
								html += '<use xlink:href="#record-keeping-icon"></use>';
								html += '</svg>';
								html += 'Temp/pH Log';
								html += '</li></a>';
								html += '</ul>';
								html += '</div>';
								html += '</div>';
								
								html += '<a class="line" href="#"><div>Line</div></a>';
								
								html += '</div>';
								break;
							}
						}
				}	
			
		/*MAKE-UP MODAL*/
		html += '<div class="remodal-bg">';
			html += '<div class="remodal" data-remodal-id="modal-makeup" data-remodal-options="hashTracking: false">';
			  html += '<button data-remodal-action="close" class="remodal-close"></button>';
			  html += '<h1 class="remodal_heading"><span>';
			  html += this.applicationType;
			  html += '</span> Makeup</h1>';
			html += '</div>';
		html += '</div>';
		
		
		/*TANK SPECIFICATIONS MODAL*/
		html += '<div class="remodal-bg">';
			html += '<div class="remodal" data-remodal-id="modal-tank" data-remodal-options="hashTracking: false">';
			  html += '<button data-remodal-action="close" class="remodal-close"></button>';
			  html += '<h1 class="remodal_heading">Container Specifications</h1>';
			  html += '<p class="tankTable"><span class="data">Capacity: </span><span class="data">';
			  html += this.tankCapacity;
			  html += '</span></p>';
			  html += '<p class="tankTable"><span class="data">Width: </span><span class="data">';
			  html += this.tankWidth;
			  html += '</span></p>';
			  html += '<p class="tankTable"><span class="data">Length: </span><span class="data">';
			  html += this.tankLngth;
			  html += '</span></p>';
			  html += '<p class="tankTable"><span class="data">Depth: </span><span class="data">';
			  html += this.tankDepth;
			  html += '</span></p>';
			  html += '<p class="tankTable"><span class="data">Tank Material: </span><span class="data">';
			  html += this.tankMaterial;
			  html += '</span></p>';
			  html += '<p class="tankTable"><span class="data">Heat Method: </span><span class="data">';
			  html += this.heatMethod;
			  html += '</span></p>';
			  html += '<p class="tankTable"><span class="data">Coil Material: </span><span class="data">';
			  html += this.heatMaterial;
			  html += '</span></p>';
			  html += '<p class="tankTable"><span class="data">Agitation: </span><span class="data">';
			  html += this.agitationType;
			  html += '</span></p>';
			  html += '<br>';
			  html += '<button data-remodal-action="confirm" class="remodal-confirm">OK</button>';
			html += '</div>';		
		html += '</div>';
	
	$('body').html(html);

	/****ADD TDS's*****/
	/*NEW TDS MODAL SETUP*/
	var tdsHolder = '<div class="myModalOverlay">';
		tdsHolder += '</div>';
	$('.tank').prepend(tdsHolder);
	
	
	var nameHolder = [];
	
	/*LATEST ANALYSIS*/
	if(tid.analysis) {
		for(var i = 0; i < tid.analysis.length; i++) { //Cycle through each object in analysis array 
			for(var key in tid.analysis[i]) {  //Cycle through each key in analysis object
				if(tid.analysis[i].hasOwnProperty(key) && key !== 'date' && key !== "temp" && key !== "additions" && key !== "pH") { //If analysis has property equal to key, and is not date,pH,additions or temp
					
					var propertyName = key;
					var propertyValue = tid.analysis[i][key];
					var unit;
					if(tid.tmfcParameters.concentrations[key]) {
						unit = tid.tmfcParameters.concentrations[key][1];
					} else {
						unit = '';
					}
					var date = moment(tid.analysis[i].date, 'DD').fromNow();
					var analysisList = '<li>';
						analysisList += propertyName;
						analysisList += ' : <span class="propValue">';
						analysisList += propertyValue + unit + ' ';
						analysisList += '<span class="taken">---  ' + date + '</span>';
						analysisList += '</span></li>'; 
						
						if($.inArray(propertyName, nameHolder) === -1) { 
							nameHolder.push(propertyName);
							$('.current_state_list').append(analysisList);
						}				
				}
			}
		}
	}
	
	/*TMFC PARAMETERS*/
	for(var key in tid.tmfcParameters.concentrations) {
		var propertyName = key;
		var	propertyValue = tid.tmfcParameters.concentrations[key][0];
		var unit = tid.tmfcParameters.concentrations[key][1];
		var	html = '<li><span class="propName">';
			html += propertyName;
			html += ': </span><span class="propValue">';
			html += propertyValue + '' + unit;
			html += '</span></li>';		
		$('.tmfc_control_parameters_list').append(html);
	};
	
	if(tid.makeup) {
		 addMakeupHTML();
	}
	var style;
	/*SET BORDER COLORS WITH APPLICATION TYPE*/
	if(tid.tmfcParameters.applicationType === "Electro-Plating") {
		style = "5px solid rgba(244,211,94, 0.8)";
		$('.tank').css({'border-top' : style,
						'border-bottom' : style
		});
	} else if(tid.tmfcParameters.applicationType.indexOf("Cleaner") !== -1) {
		style = "5px solid rgba(186, 63, 29, 0.8)";
		$('.tank').css({'border-top' : style,
						'border-bottom' : style
		});
	} else if(tid.tmfcParameters.applicationType === "Acid Pickle") {
		style = "5px solid rgba(112, 163, 127, 0.8)";
		$('.tank').css({'border-top' : style,
						'border-bottom' : style
		});
	} else if(tid.tmfcParameters.applicationType === "Rinse") {
		style = "5px solid rgba(39, 93, 173, 0.8)";
		$('.tank').css({'border-top' : style,
						'border-bottom' : style
		});
	} else if(tid.tmfcParameters.applicationType.indexOf("Chromate") !== -1) {
		style = "5px solid rgba(1, 23, 47, 0.8)";
		$('.tank').css({'border-top' : style,
						'border-bottom' : style
		});
	} else if(tid.tmfcParameters.applicationType === "Seal") {
		style = "5px solid rgba(219,216,179, 0.8)";
		$('.tank').css({'border-top' : style,
						'border-bottom' : style
		});
	} else if(tid.tmfcParameters.applicationType === "Sour Dip") {
		style = "2px solid black";
		$('.tank').css({'border-top' : style,
						'border-bottom' : style
		});
	} else if(tid.tmfcParameters.applicationType === "Electro-Cleaner") {
		style = "5px solid rgba(186, 63, 29, 0.8)";
		$('.tank').css({'border-top' : style,
						'border-bottom' : style
		});
	}
	
	
	for(var i=0;i<this.TDS.length;i++) {
		var page = '<div>';
			page += '<img src="assets/pdf/';
			page += this.TDS[i];
			page += '" alt="TDS"/>';
			page += '</div>';
		$('.myModalOverlay').append(page);
	}
	
	
	/*Modal Application*/
	$('body').on('click','div[data-myModal-target]', function() {
		if($('.myModalOverlay').css('display') == 'none') {
			$('.myModalOverlay').css('display','block');
		} else {
			$('.myModalOverlay').css('display','none');
		}
	})
	$('body').on('click','.myModalOverlay', function() {
		$('.myModalOverlay').css('display','none');
	})
	
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof exports?b(a,require("jquery")):b(a,a.jQuery||a.Zepto)}(this,function(a,b){"use strict";function c(a){if(w&&"none"===a.css("animation-name")&&"none"===a.css("-webkit-animation-name")&&"none"===a.css("-moz-animation-name")&&"none"===a.css("-o-animation-name")&&"none"===a.css("-ms-animation-name"))return 0;var b,c,d,e,f=a.css("animation-duration")||a.css("-webkit-animation-duration")||a.css("-moz-animation-duration")||a.css("-o-animation-duration")||a.css("-ms-animation-duration")||"0s",g=a.css("animation-delay")||a.css("-webkit-animation-delay")||a.css("-moz-animation-delay")||a.css("-o-animation-delay")||a.css("-ms-animation-delay")||"0s",h=a.css("animation-iteration-count")||a.css("-webkit-animation-iteration-count")||a.css("-moz-animation-iteration-count")||a.css("-o-animation-iteration-count")||a.css("-ms-animation-iteration-count")||"1";for(f=f.split(", "),g=g.split(", "),h=h.split(", "),e=0,c=f.length,b=Number.NEGATIVE_INFINITY;e<c;e++)d=parseFloat(f[e])*parseInt(h[e],10)+parseFloat(g[e]),d>b&&(b=d);return b}function d(){if(b(document.body).height()<=b(window).height())return 0;var a,c,d=document.createElement("div"),e=document.createElement("div");return d.style.visibility="hidden",d.style.width="100px",document.body.appendChild(d),a=d.offsetWidth,d.style.overflow="scroll",e.style.width="100%",d.appendChild(e),c=e.offsetWidth,d.parentNode.removeChild(d),a-c}function e(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)||(c=b(document.body),a=parseInt(c.css("padding-right"),10)+d(),c.css("padding-right",a+"px"),e.addClass(f))}}function f(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)&&(c=b(document.body),a=parseInt(c.css("padding-right"),10)-d(),c.css("padding-right",a+"px"),e.removeClass(f))}}function g(a,b,c,d){var e=k("is",b),f=[k("is",u.CLOSING),k("is",u.OPENING),k("is",u.CLOSED),k("is",u.OPENED)].join(" ");a.$bg.removeClass(f).addClass(e),a.$overlay.removeClass(f).addClass(e),a.$wrapper.removeClass(f).addClass(e),a.$modal.removeClass(f).addClass(e),a.state=b,!c&&a.$modal.trigger({type:b,reason:d},[{reason:d}])}function h(a,d,e){var f=0,g=function(a){a.target===this&&f++},h=function(a){a.target===this&&0===--f&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())};b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].on(r,g).on(s,h)}),a(),0===c(e.$bg)&&0===c(e.$overlay)&&0===c(e.$wrapper)&&0===c(e.$modal)&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())}function i(a){a.state!==u.CLOSED&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(b,c){a[c].off(r+" "+s)}),a.$bg.removeClass(a.settings.modifier),a.$overlay.removeClass(a.settings.modifier).hide(),a.$wrapper.hide(),f(),g(a,u.CLOSED,!0))}function j(a){var b,c,d,e,f={};for(a=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),b=a.split(","),e=0,c=b.length;e<c;e++)b[e]=b[e].split(":"),d=b[e][1],("string"==typeof d||d instanceof String)&&(d="true"===d||"false"!==d&&d),("string"==typeof d||d instanceof String)&&(d=isNaN(d)?d:+d),f[b[e][0]]=d;return f}function k(){for(var a=q,b=0;b<arguments.length;++b)a+="-"+arguments[b];return a}function l(){var a,c,d=location.hash.replace("#","");if(d){try{c=b('[data-remodal-id="'+d+'"]')}catch(e){}c&&c.length&&(a=b[p].lookup[c.data(p)],a&&a.settings.hashTracking&&a.open())}else n&&n.state===u.OPENED&&n.settings.hashTracking&&n.close()}function m(a,c){var d=b(document.body),e=d,f=this;f.settings=b.extend({},t,c),f.index=b[p].lookup.push(f)-1,f.state=u.CLOSED,f.$overlay=b("."+k("overlay")),null!==f.settings.appendTo&&f.settings.appendTo.length&&(e=b(f.settings.appendTo)),f.$overlay.length||(f.$overlay=b("<div>").addClass(k("overlay")+" "+k("is",u.CLOSED)).hide(),e.append(f.$overlay)),f.$bg=b("."+k("bg")).addClass(k("is",u.CLOSED)),f.$modal=a.addClass(q+" "+k("is-initialized")+" "+f.settings.modifier+" "+k("is",u.CLOSED)).attr("tabindex","-1"),f.$wrapper=b("<div>").addClass(k("wrapper")+" "+f.settings.modifier+" "+k("is",u.CLOSED)).hide().append(f.$modal),e.append(f.$wrapper),f.$wrapper.on("click."+q,'[data-remodal-action="close"]',function(a){a.preventDefault(),f.close()}),f.$wrapper.on("click."+q,'[data-remodal-action="cancel"]',function(a){a.preventDefault(),f.$modal.trigger(v.CANCELLATION),f.settings.closeOnCancel&&f.close(v.CANCELLATION)}),f.$wrapper.on("click."+q,'[data-remodal-action="confirm"]',function(a){a.preventDefault(),f.$modal.trigger(v.CONFIRMATION),f.settings.closeOnConfirm&&f.close(v.CONFIRMATION)}),f.$wrapper.on("click."+q,function(a){var c=b(a.target);c.hasClass(k("wrapper"))&&f.settings.closeOnOutsideClick&&f.close()})}var n,o,p="remodal",q=a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.NAMESPACE||p,r=b.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(a){return a+"."+q}).join(" "),s=b.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(a){return a+"."+q}).join(" "),t=b.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:"",appendTo:null},a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.DEFAULTS),u={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},v={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},w=function(){var a=document.createElement("div").style;return void 0!==a.animationName||void 0!==a.WebkitAnimationName||void 0!==a.MozAnimationName||void 0!==a.msAnimationName||void 0!==a.OAnimationName}(),x=/iPad|iPhone|iPod/.test(navigator.platform);m.prototype.open=function(){var a,c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(a=c.$modal.attr("data-remodal-id"),a&&c.settings.hashTracking&&(o=b(window).scrollTop(),location.hash=a),n&&n!==c&&i(n),n=c,e(),c.$bg.addClass(c.settings.modifier),c.$overlay.addClass(c.settings.modifier).show(),c.$wrapper.show().scrollTop(0),c.$modal.focus(),h(function(){g(c,u.OPENING)},function(){g(c,u.OPENED)},c))},m.prototype.close=function(a){var c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(c.settings.hashTracking&&c.$modal.attr("data-remodal-id")===location.hash.substr(1)&&(location.hash="",b(window).scrollTop(o)),h(function(){g(c,u.CLOSING,!1,a)},function(){c.$bg.removeClass(c.settings.modifier),c.$overlay.removeClass(c.settings.modifier).hide(),c.$wrapper.hide(),f(),g(c,u.CLOSED,!1,a)},c))},m.prototype.getState=function(){return this.state},m.prototype.destroy=function(){var a,c=b[p].lookup;i(this),this.$wrapper.remove(),delete c[this.index],a=b.grep(c,function(a){return!!a}).length,0===a&&(this.$overlay.remove(),this.$bg.removeClass(k("is",u.CLOSING)+" "+k("is",u.OPENING)+" "+k("is",u.CLOSED)+" "+k("is",u.OPENED)))},b[p]={lookup:[]},b.fn[p]=function(a){var c,d;return this.each(function(e,f){d=b(f),null==d.data(p)?(c=new m(d,a),d.data(p,c.index),c.settings.hashTracking&&d.attr("data-remodal-id")===location.hash.substr(1)&&c.open()):c=b[p].lookup[d.data(p)]}),c},b(document).ready(function(){b(document).on("click","[data-remodal-target]",function(a){a.preventDefault();var c=a.currentTarget,d=c.getAttribute("data-remodal-target"),e=b('[data-remodal-id="'+d+'"]');b[p].lookup[e.data(p)].open()}),b(document).find("."+q).each(function(a,c){var d=b(c),e=d.data("remodal-options");e?("string"==typeof e||e instanceof String)&&(e=j(e)):e={},d[p](e)}),b(document).on("keydown."+q,function(a){n&&n.settings.closeOnEscape&&n.state===u.OPENED&&27===a.keyCode&&n.close()}),b(window).on("hashchange."+q,l)})});


$('body').on('click', '.line', function() {
	$('body').html('<div class="line1300">' +
			'<div onclick="Tank(t1301)" class="tankSquare t1301"><span class="tankNum">1301</span><span class="applicationType">Cleaner</span></div>' +
			'<div onclick="Tank(t1302)" class="tankSquare t1302"><span class="tankNum">1302</span><span class="applicationType">Electro-Cleaner</span></div>' +
			'<a href="1303.html"><div class="tankSquare t1303"><span class="tankNum">1303</span><span class="applicationType">Rinse</span></div></a>' +
			'<a href="1304.html"><div class="tankSquare t1304"><span class="tankNum">1304</span><span class="applicationType">Acid Pickle</span></div></a>' +
			'<a href="1305.html"><div class="tankSquare t1305"><span class="tankNum">1305</span><span class="applicationType">Rinse</span></div></a>' +
			'<a href="1306.html"><div class="tankSquare t1306"><span class="tankNum">1306</span><span class="applicationType">Empty</span></div></a>' +
			'<a href="1307.html"><div class="tankSquare t1307"><span class="tankNum">1307</span><span class="applicationType">Chloride Zinc Plating</span></div></a>' +
			'<a href="1308.html"><div class="tankSquare t1308"><span class="tankNum">1308</span><span class="applicationType">Shuttle</span></div></a>' +
			'<a href="1309.html"><div class="tankSquare t1309"><span class="tankNum">1309</span><span class="applicationType">Sour Dip/Rinse</span></div></a>' +
			'<a href="1310.html"><div class="tankSquare t1310"><span class="tankNum">1310</span><span class="applicationType">Trivalent Clear Chromate</span></div></a>' +
			'<a href="1311.html"><div class="tankSquare t1311"><span class="tankNum">1311</span><span class="applicationType">Rinse</span></div></a>' +
			'<a href="1312.html"><div class="tankSquare t1312"><span class="tankNum">1312</span><span class="applicationType">Trivalent Yellow Chromate</span></div></a>' +
			'<a href="1313.html"><div class="tankSquare t1313"><span class="tankNum">1313</span><span class="applicationType">Rinse</span></div></a>' +
			'<a href="1314.html"><div class="tankSquare t1314"><span class="tankNum">1314</span><span class="applicationType"></span></div></a>' +
			'<a href="1315.html"><div class="tankSquare t1315"><span class="tankNum">1315</span><span class="applicationType">Rinse</div></a>' +
			
		'</div>')
})
}

$('body').on('click', '.process_control h3' ,function() {
	var $targetList = $(this).siblings('ul'),
		$title = $(this);
	
	$('.process_control h3').each(function() {
		
		var $controlTitle = $(this)[0],
			$clickedTitle = $targetList.siblings('h3')[0];
			
			if( $controlTitle !== $clickedTitle ) {
				$(this).siblings('ul').slideUp(200);

			}
	})
	

	$targetList.slideToggle(200);

})
var makeChart,
    thisArray,
    tableData,
    theDate,
    theTestResult,
    numberOfAnalysis,
    theUnit,
	applicationColor;
/*Insert Table Data*/
function insertTableData(date, testResult, unit, timeSpan) {
	$('.table').children(':not(.header)').remove();
	for(var i=0; i < testResult.length; i++) { //Iterate over analysis
		var currentDate = date[0],
			desiredTime = currentDate - timeSpan;
		if(testResult[i] !== undefined && date[i] <= currentDate && date[i] >= desiredTime) { 
			tableData  =	'<div class="row">';
			tableData +=	  '<div class="cell">';
			tableData +=		moment(date[i]).format("l");
			tableData +=	  '</div>';
			tableData +=	  '<div class="cell">';
			tableData +=		testResult[i];
			tableData +=	  '</div>';
			tableData +=	'</div>';
						
			$('.table').append(tableData);				
		}		
	}
}

/*GENERATE CHART OBJECT CONSTRUCTOR*/
function MakeChart(tankNumber, testName, unit) {
	this.date = [];
	this.testResult = [];
	this.tankNumber = tankNumber;
	this.unit = unit;
	this.chartHeading = testName;
	this.analysis = tankNumber.analysis;
	
	/*ASSIGN APPLICATION COLOR TO TABLES AND CHART*/
	function assignColor() {
		if(tankNumber.tmfcParameters.applicationType === "Electro-Plating") {
			$('.row.header, .test_btns_container button').addClass('electroPlating');
			applicationColor = $('.row.header').css('background-color');
			return applicationColor;
		} else if(tankNumber.tmfcParameters.applicationType.indexOf("Cleaner") !== -1) {		
			$('.row.header, .test_btns_container button').addClass('cleaner');
			applicationColor = $('.row.header').css('background-color');
			return applicationColor;
		} else if(tankNumber.tmfcParameters.applicationType === "Acid Pickle") {
			$('.row.header, .test_btns_container button').addClass('acid');
			applicationColor = $('.row.header').css('background-color');
			return applicationColor;
		} else if(tankNumber.tmfcParameters.applicationType === "Rinse") {
			$('.row.header, .test_btns_container button').addClass('rinse');
			applicationColor = $('.row.header').css('background-color');
			return applicationColor;
		} else if(tankNumber.tmfcParameters.applicationType.indexOf("Chromate") !== -1) {
			$('.row.header, .test_btns_container button').addClass('chromate');
			applicationColor = $('.row.header').css('background-color');
			return applicationColor;
		} else if(tankNumber.tmfcParameters.applicationType === "Seal") {
			$('.row.header, .test_btns_container button').addClass('seal');
			applicationColor = $('.row.header').css('background-color');
			return applicationColor;
		} else if(tankNumber.tmfcParameters.applicationType === "Sour Dip") {
			$('.row.header, .test_btns_container button').addClass('sourDip');
			applicationColor = $('.row.header').css('background-color');
			return applicationColor;
		} else if(tankNumber.tmfcParameters.applicationType === "Electro-Cleaner") {
			$('.row.header, .test_btns_container button').addClass('cleaner');
			applicationColor = $('.row.header').css('background-color');
			return applicationColor;
		}
	}
	/*ADD TANK NUMBER TO TOP*/
	$('.chartTankNumber').remove();
	var chartTankNumber = '<div class="chartTankNumber">';
		chartTankNumber += tankNumber.tmfcParameters.lineNumber + ' - ' + tankNumber.tmfcParameters.applicationType;
		chartTankNumber += '</div>';
	$('.chartWrapper').prepend(chartTankNumber);
	/*VARIABLES*/
	var moBtn = '<button class="button plus" id="moBtn" onclick="insertTableData(theDate, theTestResult, theUnit, 2628336213)">mo</button>',
		qtrBtn = '<button class="button plus" id="qtrBtn" onclick="insertTableData(theDate, theTestResult, theUnit, 7884000000)">qtr</button>',
		yrBtn = '<button class="button minus" id="yrBtn" onclick="insertTableData(theDate, theTestResult, theUnit, 31540000000)">yr</button>',
		chartData = [];	
		colorNames = Object.keys(window.chartColors),
		color = Chart.helpers.color,
		tableHeader  = '<div class="wrapper">',
			tableHeader +=  '<div class="table">',				
			tableHeader +=	'<div class="row header">',
			tableHeader +=	  '<div class="cell">',
			tableHeader +=		'Date',
			tableHeader +=	  '</div>',
			tableHeader +=	  '<div class="cell">',
			tableHeader +=		this.chartHeading + ' (' + this.unit +')',
			tableHeader +=	  '</div>',
			tableHeader +=	'</div>',
			tableHeader +=	'</div>', //close table
			tableHeader += '</div>'; //close wrapper	
	
	numberOfAnalysis = 5;
	theDate = this.date;
	theTestResult  = this.testResult;
	theUnit = this.unit;
	
	
	$('#moBtn, #qtrBtn, #yrBtn' ).remove();	//Remove existing buttons when new btn is selected
	$('.add_remove_btns_container').append(moBtn, qtrBtn, yrBtn); //Add new btns
	$('.wrapper').remove();
	$('body').append(tableHeader);
	var lineChartData = {
			datasets: [{
				fill: false,
				label: "My First dataset",
				borderColor: assignColor(),
				backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
				data : chartData,
				spanGaps: true
			}]
		},
		chartOptions = {
			data: lineChartData,
			options: {
				tooltips : {
					enabled:  false
				},
				legend  : {
					display: false
				},
				title: {
					display: true,
					text: this.chartHeading
				},
				scales: { 
					xAxes: [{
						gridLines : {
							display: false
						},
						type: 'time',
						time: {
							unit : 'week',
							displayFormats: {
								week: 'MMM D',
								month: 'MMM YY'
							}
						},
						ticks: {
							fontSize: 9,
							maxRotation: 45,
							minRotation: 45
						}		
					}],
					yAxes: [{
                        display: true,
						gridLines : {
							display: false
						},
                        scaleLabel: {
                            display: false,
                            labelString: this.unit,
							fontSize: 9,
                        },
						ticks: {
							fontSize: 9,
						}
                    }]
				}
			}
		};
	console.log();
	/*ASSIGN TANK DATA TO DATE/TESTRESULT ARRAYS*/
	for(var i=0; i < this.analysis.length; i++) { // Add analysis data to date/testResults
		this.date.push(this.analysis[i].date);         
		this.testResult.push(this.analysis[i][testName]);
	};		
	/*ASSIGN DATE/TESTRESULT ARRAY VALUES TO CHART OBJECT*/	
	for (var i=0; i < numberOfAnalysis ; i++) { //Add values from date/testResults variables to chartData variable
		if(i < numberOfAnalysis && this.testResult[i] !== undefined) {

			var axisData = {};

			axisData.x = this.date[i];
			axisData.y = this.testResult[i];
			
			tableData  =	'<div class="row">';
			tableData +=	  '<div class="cell">';
			tableData +=		moment(this.date[i]).format("l");
			tableData +=	  '</div>';
			tableData +=	  '<div class="cell">';
			tableData +=		this.testResult[i];
			tableData +=	  '</div>';
			tableData +=	'</div>';
					
			chartData.push(axisData);		
			$('.table').append(tableData);
		} else if(numberOfAnalysis < 100){
			numberOfAnalysis += 1;
		}
	}
	
	
	assignColor();
	
	function insertChartData(timeSpan) {
		if(timeSpan === 31540000000) {
		 chartOptions.options.scales.xAxes[0].time.unit = 'month';
		} else {
			chartOptions.options.scales.xAxes[0].time.unit = 'week';
		}
		lineChartData.datasets[0].data = [];		
		var currentDate = tankNumber.analysis[0].date,
			desiredTime = currentDate - timeSpan;			
		for(var i=0; i < tankNumber.analysis.length; i++) { //Iterate over analysis
			if(tankNumber.analysis[i].date <= currentDate && tankNumber.analysis[i].date >= desiredTime && tankNumber.analysis[i][testName] !== undefined) {
				var axisData = {};
				axisData.x = tankNumber.analysis[i].date;
				axisData.y = tankNumber.analysis[i][testName];
				lineChartData.datasets[0].data.push(axisData);				
			}		
		}	
		window.myLineChart.update();
	}
	/*Set Data to MONTH*/	
	document.getElementById('moBtn').addEventListener('click', function() {
		insertChartData(2628336213);
	});
	/*Set Data to QTR*/	
	document.getElementById('qtrBtn').addEventListener('click', function() {
		insertChartData(7884000000);
	});
	/*Set Data to Year*/	
	document.getElementById('yrBtn').addEventListener('click', function() {
		insertChartData(31540000000);
	});
	
	/*LOAD CHART VALUE*/
	var loadChart = function() {
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myLineChart = Chart.Line(ctx, chartOptions)
	};

	loadChart();
} //End MakeChart()

/*ADD/REMOVE ACTIVE CLASS FOR TABLE TABS*/
$('.test_btns_container').on('click', 'button', function() {
	$('.test_btns_container button').removeClass('active');
	$(this).addClass('active');
})

/*CREATE VARIABLE TO HOLD INSTANCE CREATED BY MakeChart()*/
function createChart(tankName, componentName, unit) {
	makeChart = new MakeChart(tankName, componentName, unit);
}
var numberOfAdds;
	  
function AdditionsTable(tank, component, unit) {

	this.component = component;
	this.unit      = unit;
	
	var  tableHeader  = '<div class="wrapper">';
		  tableHeader +=  '<table class="table">',				
		  tableHeader +=	'<tr class="row header">',
		  tableHeader +=	  '<th class="cell">',
		  tableHeader +=		'Date',
		  tableHeader +=	  '</th>',
		  tableHeader +=	  '<th class="cell">',
		  tableHeader +=		this.component,
		  tableHeader +=	  '</th>',
		  tableHeader +=	'</tr>',
		  tableHeader +=	'</table>', //close table
		  tableHeader += '</div>'; //close wrapper	
	$('.wrapper').remove(); 
	$('body').append(tableHeader);
	
	/*ASSIGN BG COLOR TO TABLE HEADER*/
	if(tank.tmfcParameters.applicationType === "Electro-Plating") {
			$('.row.header, .test_btns_container button').addClass('electroPlating');
		} else if(tank.tmfcParameters.applicationType.indexOf("Cleaner") !== -1) {
			$('.row.header, .test_btns_container button').addClass('cleaner');
		} else if(tank.tmfcParameters.applicationType === "Acid Pickle") {
			$('.row.header, .test_btns_container button').addClass('acid');
		} else if(tank.tmfcParameters.applicationType === "Rinse") {
			$('.row.header, .test_btns_container button').addClass('rinse');
		} else if(tank.tmfcParameters.applicationType.indexOf("Chromate") !== -1) {
			$('.row.header, .test_btns_container button').addClass('chromate');
		} else if(tank.tmfcParameters.applicationType === "Seal") {
			$('.row.header, .test_btns_container button').addClass('seal');
		} else if(tank.tmfcParameters.applicationType === "Sour Dip") {
			$('.row.header, .test_btns_container button').addClass('sourDip');
		} else if(tank.tmfcParameters.applicationType === "Electro-Cleaner") {
			$('.row.header, .test_btns_container button').addClass('cleaner');
		}

	
	for(var i = 0; i < tank.analysis.length; i++) { //Cycle through each object in analysis array
		var tableData = '';
		if(tank.analysis[i].additions) { //If object has additions key 
			var date = moment(tank.analysis[i].date).format('ll'); //Assign tank.anaysis[i].date to variable for date	
			for(var key in tank.analysis[i].additions) { //Cycle through each key
				if(key === this.component) {
					var propertyValue = tank.analysis[i].additions[key][0]; //Assign tank.anaysis[i].additions[key] to variable for propertyValue
					var unit = this.unit;
					tableData +=	'<tr class="row">';
					tableData +=	  '<td class="cell">';
					tableData +=		date;
					tableData +=	  '</td>';
					tableData +=	  '<td class="cell">';
					tableData +=		propertyValue + ' ' + unit;
					tableData +=	  '</td>';
					tableData +=	'</tr>';
						
					$('.table').append(tableData); //Append to .table
				}
			}		
		}	
	}
	
}//End AdditionsTable()  
	  
function createAddTable(tankNumber, component, unit) {
	new AdditionsTable(tankNumber, component, unit);
}
$('a[data-myModal-target]').on('click', function() {
	$('.myModalOverlay').css('display', 'block');
})
var temppH;
var headerUnit;
function TempPhTable(tank, reading, unit) { //reading parameter = time or pH

	
	this.reading = reading;
	this.unit    = unit;

	var  tableHeader  = '<div class="wrapper">';
		  tableHeader +=  '<table class="table">',				
		  tableHeader +=	'<tr class="row header">',
		  tableHeader +=	  '<th class="cell">',
		  tableHeader +=		'Date',
		  tableHeader +=	  '</th>',
		  tableHeader +=	  '<th class="cell">',
		  tableHeader +=		'Time',
		  tableHeader +=	  '</th>';
		  tableHeader +=	  '<th class="cell reading">';
		  tableHeader +=	  '</th>';
		  tableHeader +=	'</tr>';
		  tableHeader +=	'</table>'; //close table
		  tableHeader += '</div>'; //close wrapper	
		  
	$('.wrapper').remove(); 
	$('body').append(tableHeader);
	/*ASSIGN BG COLOR TO TABLE HEADER*/
	if(tank.tmfcParameters.applicationType === "Electro-Plating") {
			$('.row.header, .test_btns_container button').addClass('electroPlating');
		} else if(tank.tmfcParameters.applicationType.indexOf('Cleaner') !== -1) {
			$('.row.header, .test_btns_container button').addClass('cleaner');
		} else if(tank.tmfcParameters.applicationType === "Acid Pickle") {
			$('.row.header, .test_btns_container button').addClass('acid');
		} else if(tank.tmfcParameters.applicationType === "Rinse") {
			$('.row.header, .test_btns_container button').addClass('rinse');
		} else if(tank.tmfcParameters.applicationType.indexOf("Chromate") !== -1) {
			$('.row.header, .test_btns_container button').addClass('chromate');
		} else if(tank.tmfcParameters.applicationType === "Seal") {
			$('.row.header, .test_btns_container button').addClass('seal');
		} else if(tank.tmfcParameters.applicationType === "Sour Dip") {
			$('.row.header, .test_btns_container button').addClass('sourDip');
		} else if(tank.tmfcParameters.applicationType === "Electro-Cleaner") {
			$('.row.header, .test_btns_container button').addClass('cleaner');
		}

	if(reading === "temp") {
		console.log("fitst temo");	
		headerUnit = "Temperature (°F)";
	} else {
		console.log("other");	
		headerUnit = 'pH';
	}
	$('.reading').append(headerUnit);
	console.log(reading);
	for(var i = 0; i < tank.analysis.length; i++) { //Cycle through each object in analysis array
		
		for(var key in tank.analysis[i][this.reading]) { //Cycle through each key in the temp/pH object
			var tableData = '';	
			tableData +=	'<tr class="row">';
			tableData +=	  '<td class="cell">';

			if($('.table .row:last-of-type .cell:first-of-type').text() === moment(tank.analysis[i].date).format('l') || $('.table .row:nth-last-of-type(2) .cell:first-of-type').text() === moment(tank.analysis[i].date).format('l')) {
				tableData += '';
			} else {
				tableData += moment(tank.analysis[i].date).format('l');
			}
						
			tableData +=	  '</td>';
			tableData +=	  '<td class="cell">';
			tableData +=		key;
			tableData +=	  '</td>';
			tableData +=	  '<td class="cell">';
			tableData +=		tank.analysis[i][this.reading][key];
			tableData +=	  '</td>';
			tableData +=	'</tr>';
							
			$('.table').append(tableData);
		}
	}  

}	  
	  
function createtempPhTable(tankNumber, reading, unit) {
	tableHeader = '';
	temppH = '';
	temppH = new TempPhTable(tankNumber, reading, unit);
}
//# sourceMappingURL=app.js.map
