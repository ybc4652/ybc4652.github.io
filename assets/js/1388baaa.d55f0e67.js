"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6256],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return P}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),T=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=T(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),u=T(n),P=a,d=u["".concat(l,".").concat(P)]||u[P]||c[P]||o;return n?r.createElement(d,i(i({ref:e},s),{},{components:n})):r.createElement(d,i({ref:e},s))}));function P(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var T=2;T<o;T++)i[T]=n[T];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4462:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return T},toc:function(){return s},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={id:"http_and_https",title:"HTTP(S)\u57fa\u7840\u77e5\u8bc6"},l=void 0,T={unversionedId:"browser/http_and_https",id:"browser/http_and_https",isDocsHomePage:!1,title:"HTTP(S)\u57fa\u7840\u77e5\u8bc6",description:"HTTP\u548cHTTPS",source:"@site/docs/browser/HTTP(S)\u57fa\u7840\u77e5\u8bc6.md",sourceDirName:"browser",slug:"/browser/http_and_https",permalink:"/docs/browser/http_and_https",tags:[],version:"current",frontMatter:{id:"http_and_https",title:"HTTP(S)\u57fa\u7840\u77e5\u8bc6"},sidebar:"tutorialSidebar",previous:{title:"HTTP \u8bf7\u6c42\u65b9\u5f0f",permalink:"/docs/browser/http_request"},next:{title:"IE \u5404\u7248\u672c\u548c Chrome \u53ef\u4ee5\u5e76\u884c\u4e0b\u8f7d\u591a\u5c11\u4e2a\u8d44\u6e90\uff1f",permalink:"/docs/browser/download_num"}},s=[{value:"HTTP\u548cHTTPS",id:"http\u548chttps",children:[]},{value:"HTTP\u4e0eHTTPS\u6709\u4ec0\u4e48\u533a\u522b\uff1f",id:"http\u4e0ehttps\u6709\u4ec0\u4e48\u533a\u522b",children:[]},{value:"HTTP1.0 \u548c HTTP1.1\u7684\u533a\u522b",id:"http10-\u548c-http11\u7684\u533a\u522b",children:[]},{value:"HTTP2.0 \u548c HTTP1.X\u7684\u533a\u522b",id:"http20-\u548c-http1x\u7684\u533a\u522b",children:[]}],c={toc:s};function u(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"http\u548chttps"},"HTTP\u548cHTTPS"),(0,o.kt)("p",null,"HTTP\uff08\u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae\uff0cHyperText Transfer Protocol)\u662f\u4e92\u8054\u7f51\u4e0a\u5e94\u7528\u6700\u4e3a\u5e7f\u6cdb\u7684\u4e00\u79cd\u7f51\u7edc\u534f\u8bae\uff0c\u662f\u4e00\u4e2a\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u7aef\u8bf7\u6c42\u548c\u5e94\u7b54\u7684\u6807\u51c6\uff08TCP\uff09\uff0c\u7528\u4e8e\u4eceWWW\u670d\u52a1\u5668\u4f20\u8f93\u8d85\u6587\u672c\u5230\u672c\u5730\u6d4f\u89c8\u5668\u7684\u4f20\u8f93\u534f\u8bae\uff0c\u5b83\u53ef\u4ee5\u4f7f\u6d4f\u89c8\u5668\u66f4\u52a0\u9ad8\u6548\uff0c\u4f7f\u7f51\u7edc\u4f20\u8f93\u51cf\u5c11\u3002"),(0,o.kt)("p",null,"HTTPS \u662f\u4ee5\u5b89\u5168\u4e3a\u76ee\u6807\u7684HTTP\u901a\u9053\uff0c\u7b80\u5355\u8bb2\u662fHTTP\u7684\u5b89\u5168\u7248\uff0c\u5373HTTP\u4e0b\u52a0\u5165SSL\u5c42\uff0cHTTPS\u7684\u5b89\u5168\u57fa\u7840\u662fSSL\uff0c\u56e0\u6b64\u52a0\u5bc6\u7684\u8be6\u7ec6\u5185\u5bb9\u5c31\u9700\u8981SSL\u3002"),(0,o.kt)("h2",{id:"http\u4e0ehttps\u6709\u4ec0\u4e48\u533a\u522b"},"HTTP\u4e0eHTTPS\u6709\u4ec0\u4e48\u533a\u522b\uff1f"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"https\u534f\u8bae\u9700\u8981\u5230ca\u7533\u8bf7\u8bc1\u4e66\uff0c\u4e00\u822c\u514d\u8d39\u8bc1\u4e66\u8f83\u5c11\uff0c\u56e0\u800c\u9700\u8981\u4e00\u5b9a\u8d39\u7528\u3002"),(0,o.kt)("li",{parentName:"ol"},"http\u662f\u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae\uff0c\u4fe1\u606f\u662f\u660e\u6587\u4f20\u8f93\uff0chttps\u5219\u662f\u5177\u6709\u5b89\u5168\u6027\u7684ssl\u52a0\u5bc6\u4f20\u8f93\u534f\u8bae\u3002"),(0,o.kt)("li",{parentName:"ol"},"http\u548chttps\u4f7f\u7528\u7684\u662f\u5b8c\u5168\u4e0d\u540c\u7684\u8fde\u63a5\u65b9\u5f0f\uff0c\u7528\u7684\u7aef\u53e3\u4e5f\u4e0d\u4e00\u6837\uff0c\u524d\u8005\u662f80\uff0c\u540e\u8005\u662f443\u3002"),(0,o.kt)("li",{parentName:"ol"},"http\u7684\u8fde\u63a5\u5f88\u7b80\u5355\uff0c\u662f\u65e0\u72b6\u6001\u7684\uff1bHTTPS\u534f\u8bae\u662f\u7531SSL+HTTP\u534f\u8bae\u6784\u5efa\u7684\u53ef\u8fdb\u884c\u52a0\u5bc6\u4f20\u8f93\u3001\u8eab\u4efd\u8ba4\u8bc1\u7684\u7f51\u7edc\u534f\u8bae\uff0c\u6bd4http\u534f\u8bae\u5b89\u5168\u3002")),(0,o.kt)("h2",{id:"http10-\u548c-http11\u7684\u533a\u522b"},"HTTP1.0 \u548c HTTP1.1\u7684\u533a\u522b"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u65b9\u6cd5\nHTTP1.0 \u5b9a\u4e49\u4e86\u4e09\u79cd\u8bf7\u6c42\u65b9\u6cd5\uff1a GET, POST \u548c HEAD \u65b9\u6cd5\u3002\nHTTP1.1 \u65b0\u589e\u4e86\u516d\u79cd\u8bf7\u6c42\u65b9\u6cd5\uff1aOPTIONS\u3001PUT\u3001PATCH\u3001DELETE\u3001TRACE \u548c CONNECT \u65b9\u6cd5\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u7f13\u5b58\u5904\u7406\uff1a\n\u5728HTTP1.0\u4e2d\u4e3b\u8981\u4f7f\u7528header\u91cc\u7684If-Modified-Since,Expires\u6765\u505a\u4e3a\u7f13\u5b58\u5224\u65ad\u7684\u6807\u51c6\uff0c\nHTTP1.1\u5219\u5f15\u5165\u4e86\u66f4\u591a\u7684\u7f13\u5b58\u63a7\u5236\u7b56\u7565\u4f8b\u5982Entity tag\uff0cIf-Unmodified-Since, If-Match, If-None-Match\u7b49\u66f4\u591a\u53ef\u4f9b\u9009\u62e9\u7684\u7f13\u5b58\u5934\u6765\u63a7\u5236\u7f13\u5b58\u7b56\u7565\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5e26\u5bbd\u4f18\u5316\u53ca\u7f51\u7edc\u8fde\u63a5\u7684\u4f7f\u7528\uff1a\nHTTP1.0\u4e2d\uff0c\u5b58\u5728\u4e00\u4e9b\u6d6a\u8d39\u5e26\u5bbd\u7684\u73b0\u8c61\uff0c\u4f8b\u5982\u5ba2\u6237\u7aef\u53ea\u662f\u9700\u8981\u67d0\u4e2a\u5bf9\u8c61\u7684\u4e00\u90e8\u5206\uff0c\u800c\u670d\u52a1\u5668\u5374\u5c06\u6574\u4e2a\u5bf9\u8c61\u9001\u8fc7\u6765\u4e86\uff0c\u5e76\u4e14\u4e0d\u652f\u6301\u65ad\u70b9\u7eed\u4f20\u529f\u80fd\uff0c\nHTTP1.1\u5219\u5728\u8bf7\u6c42\u5934\u5f15\u5165\u4e86range\u5934\u57df\uff0c\u5b83\u5141\u8bb8\u53ea\u8bf7\u6c42\u8d44\u6e90\u7684\u67d0\u4e2a\u90e8\u5206\uff0c\u5373\u8fd4\u56de\u7801\u662f206\uff08Partial Content\uff09\uff0c\u8fd9\u6837\u5c31\u65b9\u4fbf\u4e86\u5f00\u53d1\u8005\u81ea\u7531\u7684\u9009\u62e9\u4ee5\u4fbf\u4e8e\u5145\u5206\u5229\u7528\u5e26\u5bbd\u548c\u8fde\u63a5\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u9519\u8bef\u901a\u77e5\u7684\u7ba1\u7406\uff1a\n\u5728HTTP1.1\u4e2d\u65b0\u589e\u4e8624\u4e2a\u9519\u8bef\u72b6\u6001\u54cd\u5e94\u7801\uff0c\u5982409\uff08Conflict\uff09\u8868\u793a\u8bf7\u6c42\u7684\u8d44\u6e90\u4e0e\u8d44\u6e90\u7684\u5f53\u524d\u72b6\u6001\u53d1\u751f\u51b2\u7a81\uff1b410\uff08Gone\uff09\u8868\u793a\u670d\u52a1\u5668\u4e0a\u7684\u67d0\u4e2a\u8d44\u6e90\u88ab\u6c38\u4e45\u6027\u7684\u5220\u9664\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Host\u5934\u5904\u7406\uff1a\n\u5728HTTP1.0\u4e2d\u8ba4\u4e3a\u6bcf\u53f0\u670d\u52a1\u5668\u90fd\u7ed1\u5b9a\u4e00\u4e2a\u552f\u4e00\u7684IP\u5730\u5740\uff0c\u56e0\u6b64\uff0c\u8bf7\u6c42\u6d88\u606f\u4e2d\u7684URL\u5e76\u6ca1\u6709\u4f20\u9012\u4e3b\u673a\u540d\uff08hostname\uff09\u3002\u4f46\u968f\u7740\u865a\u62df\u4e3b\u673a\u6280\u672f\u7684\u53d1\u5c55\uff0c\u5728\u4e00\u53f0\u7269\u7406\u670d\u52a1\u5668\u4e0a\u53ef\u4ee5\u5b58\u5728\u591a\u4e2a\u865a\u62df\u4e3b\u673a\uff08Multi-homed Web Servers\uff09\uff0c\u5e76\u4e14\u5b83\u4eec\u5171\u4eab\u4e00\u4e2aIP\u5730\u5740\u3002\nHTTP1.1\u7684\u8bf7\u6c42\u6d88\u606f\u548c\u54cd\u5e94\u6d88\u606f\u90fd\u5e94\u652f\u6301Host\u5934\u57df\uff0c\u4e14\u8bf7\u6c42\u6d88\u606f\u4e2d\u5982\u679c\u6ca1\u6709Host\u5934\u57df\u4f1a\u62a5\u544a\u4e00\u4e2a\u9519\u8bef\uff08400 Bad Request\uff09\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u957f\u8fde\u63a5\uff1a\nHTTP 1.1\u652f\u6301\u957f\u8fde\u63a5\uff08PersistentConnection\uff09\u548c\u8bf7\u6c42\u7684\u6d41\u6c34\u7ebf\uff08Pipelining\uff09\u5904\u7406\uff0c\u5728\u4e00\u4e2aTCP\u8fde\u63a5\u4e0a\u53ef\u4ee5\u4f20\u9001\u591a\u4e2aHTTP\u8bf7\u6c42\u548c\u54cd\u5e94\uff0c\u51cf\u5c11\u4e86\u5efa\u7acb\u548c\u5173\u95ed\u8fde\u63a5\u7684\u6d88\u8017\u548c\u5ef6\u8fdf\uff0c\n\u5728HTTP1.1\u4e2d\u9ed8\u8ba4\u5f00\u542fConnection\uff1a keep-alive\uff0c\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u5f25\u8865\u4e86HTTP1.0\u6bcf\u6b21\u8bf7\u6c42\u90fd\u8981\u521b\u5efa\u8fde\u63a5\u7684\u7f3a\u70b9\u3002\u901a\u8fc7\u8bbe\u7f6ehttp\u7684\u8bf7\u6c42\u5934\u90e8\u548c\u5e94\u7b54\u5934\u90e8\uff0c\u4fdd\u8bc1\u672c\u6b21\u6570\u636e\u8bf7\u6c42\u7ed3\u675f\u4e4b\u540e\uff0c\u4e0b\u4e00\u6b21\u8bf7\u6c42\u4ecd\u53ef\u4ee5\u91cd\u7528\u8fd9\u4e00\u901a\u9053\uff0c\u907f\u514d\u91cd\u65b0\u63e1\u624b\u3002"))),(0,o.kt)("h2",{id:"http20-\u548c-http1x\u7684\u533a\u522b"},"HTTP2.0 \u548c HTTP1.X\u7684\u533a\u522b"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u65b0\u7684\u4e8c\u8fdb\u5236\u683c\u5f0f\uff08Binary Format\uff09\uff1a\nHTTP1.x\u7684\u89e3\u6790\u662f\u57fa\u4e8e\u6587\u672c\u3002\u57fa\u4e8e\u6587\u672c\u534f\u8bae\u7684\u683c\u5f0f\u89e3\u6790\u5b58\u5728\u5929\u7136\u7f3a\u9677\uff0c\u6587\u672c\u7684\u8868\u73b0\u5f62\u5f0f\u6709\u591a\u6837\u6027\uff0c\u8981\u505a\u5230\u5065\u58ee\u6027\u8003\u8651\u7684\u573a\u666f\u5fc5\u7136\u5f88\u591a\uff0c\u4e8c\u8fdb\u5236\u5219\u4e0d\u540c\uff0c\u53ea\u8ba40\u548c1\u7684\u7ec4\u5408\u3002\n\u57fa\u4e8e\u8fd9\u79cd\u8003\u8651HTTP2.0\u7684\u534f\u8bae\u89e3\u6790\u51b3\u5b9a\u91c7\u7528\u4e8c\u8fdb\u5236\u683c\u5f0f\uff0c\u5b9e\u73b0\u65b9\u4fbf\u4e14\u5065\u58ee\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u591a\u8def\u590d\u7528\uff08MultiPlexing\uff09\uff1a\n\u5373\u8fde\u63a5\u5171\u4eab\uff0c\u5373\u6bcf\u4e00\u4e2arequest\u90fd\u662f\u662f\u7528\u4f5c\u8fde\u63a5\u5171\u4eab\u673a\u5236\u7684\u3002\u4e00\u4e2arequest\u5bf9\u5e94\u4e00\u4e2aid\uff0c\u8fd9\u6837\u4e00\u4e2a\u8fde\u63a5\u4e0a\u53ef\u4ee5\u6709\u591a\u4e2arequest\uff0c\u6bcf\u4e2a\u8fde\u63a5\u7684request\u53ef\u4ee5\u968f\u673a\u7684\u6df7\u6742\u5728\u4e00\u8d77\uff0c\u63a5\u6536\u65b9\u53ef\u4ee5\u6839\u636erequest\u7684 id\u5c06request\u518d\u5f52\u5c5e\u5230\u5404\u81ea\u4e0d\u540c\u7684\u670d\u52a1\u7aef\u8bf7\u6c42\u91cc\u9762\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"header\u538b\u7f29\uff1a\n\u5982\u4e0a\u6587\u4e2d\u6240\u8a00\uff0c\u5bf9\u524d\u9762\u63d0\u5230\u8fc7HTTP1.x\u7684header\u5e26\u6709\u5927\u91cf\u4fe1\u606f\uff0c\u800c\u4e14\u6bcf\u6b21\u90fd\u8981\u91cd\u590d\u53d1\u9001\uff0c\nHTTP2.0\u4f7f\u7528\u4e86\u4e13\u95e8\u4e3a\u9996\u90e8\u538b\u7f29\u800c\u8bbe\u8ba1\u7684 HPACK \u7b97\u6cd5\uff0c\u4f7f\u7528encoder\u6765\u51cf\u5c11\u9700\u8981\u4f20\u8f93\u7684header\u5927\u5c0f\uff0c\u901a\u8baf\u53cc\u65b9\u5404\u81eacache\u4e00\u4efdheader fields\u8868\uff0c\u65e2\u907f\u514d\u4e86\u91cd\u590dheader\u7684\u4f20\u8f93\uff0c\u53c8\u51cf\u5c0f\u4e86\u9700\u8981\u4f20\u8f93\u7684\u5927\u5c0f\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u670d\u52a1\u7aef\u63a8\u9001\uff08server push\uff09\uff1a\n\u670d\u52a1\u7aef\u63a8\u9001\u80fd\u628a\u5ba2\u6237\u7aef\u6240\u9700\u8981\u7684\u8d44\u6e90\u4f34\u968f\u7740index.html\u4e00\u8d77\u53d1\u9001\u5230\u5ba2\u6237\u7aef\uff0c\u7701\u53bb\u4e86\u5ba2\u6237\u7aef\u91cd\u590d\u8bf7\u6c42\u7684\u6b65\u9aa4\u3002\u6b63\u56e0\u4e3a\u6ca1\u6709\u53d1\u8d77\u8bf7\u6c42\uff0c\u5efa\u7acb\u8fde\u63a5\u7b49\u64cd\u4f5c\uff0c\u6240\u4ee5\u9759\u6001\u8d44\u6e90\u901a\u8fc7\u670d\u52a1\u7aef\u63a8\u9001\u7684\u65b9\u5f0f\u53ef\u4ee5\u6781\u5927\u5730\u63d0\u5347\u901f\u5ea6\u3002\n\u4f8b\u5982\u6211\u7684\u7f51\u9875\u6709\u4e00\u4e2asytle.css\u7684\u8bf7\u6c42\uff0c\u5728\u5ba2\u6237\u7aef\u6536\u5230sytle.css\u6570\u636e\u7684\u540c\u65f6\uff0c\u670d\u52a1\u7aef\u4f1a\u5c06sytle.js\u7684\u6587\u4ef6\u63a8\u9001\u7ed9\u5ba2\u6237\u7aef\uff0c\u5f53\u5ba2\u6237\u7aef\u518d\u6b21\u5c1d\u8bd5\u83b7\u53d6sytle.js\u65f6\u5c31\u53ef\u4ee5\u76f4\u63a5\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u5230\uff0c\u4e0d\u7528\u518d\u53d1\u8bf7\u6c42\u4e86\u3002"))))}u.isMDXComponent=!0}}]);