webpackHotUpdate(0,{89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),o=s(l),a=n(44),c=s(n(119)),u=s(n(118));function s(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getComments=n.getComments.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),r(t,[{key:"getComments",value:function(e){$.ajax({type:"POST",url:"/getpostcomments",data:{_postID:e},success:function(e){this.props.comments=JSON.parse(e)},error:function(e){e.responseJSON&&console.log(e.responseJSON)}})}},{key:"render",value:function(e){if(0==this.props.posts.length)return o.default.createElement("div",null);var t=window.location.href.split("/"),n=t[t.length-1],r=this.props.posts.filter(function(e){if(e.slug==n)return e});return o.default.createElement("div",null,o.default.createElement("h1",null,r[0].title),o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-sm-6 col-md-4"},o.default.createElement("div",{className:"thumbnail"},o.default.createElement("img",{src:r[0].image,alt:r[0].title}))),o.default.createElement("div",{className:"col-sm-6 col-md-4"},o.default.createElement("p",null,r[0].description))),o.default.createElement("div",{className:"row"},o.default.createElement(u.default,{comments:e})),o.default.createElement("div",{className:"row"},o.default.createElement(c.default,{postID:r[0].id})),o.default.createElement("div",{className:"col-md-12"},o.default.createElement(a.Link,{to:"/"},o.default.createElement("button",{className:"btn btn-default"},"Wróć"))))}}]),t}();t.default=i}});