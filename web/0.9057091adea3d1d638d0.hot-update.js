webpackHotUpdate(0,{89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),r=s(l),a=n(44),c=s(n(119)),u=s(n(118));function s(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getComments=n.getComments.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),o(t,[{key:"getComments",value:function(e){var t=[];return $.ajax({type:"POST",url:"/getpostcomments",data:{_postID:e},success:function(e){console.log("ajax: "+e),t=JSON.parse(e)},error:function(e){e.responseJSON&&console.log(e.responseJSON)}}),console.log("funkcja:"+t),t}},{key:"render",value:function(){if(0==this.props.posts.length)return r.default.createElement("div",null);var e=window.location.href.split("/"),t=e[e.length-1],n=this.props.posts.filter(function(e){if(e.slug==t)return e});return console.log(this.getComments(n[0].id)),r.default.createElement("div",null,r.default.createElement("h1",null,n[0].title),r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-sm-6 col-md-4"},r.default.createElement("div",{className:"thumbnail"},r.default.createElement("img",{src:n[0].image,alt:n[0].title}))),r.default.createElement("div",{className:"col-sm-6 col-md-4"},r.default.createElement("p",null,n[0].description))),r.default.createElement("div",{className:"row"},r.default.createElement(u.default,{comments:this.getComments(n[0].id)})),r.default.createElement("div",{className:"row"},r.default.createElement(c.default,{postID:n[0].id})),r.default.createElement("div",{className:"col-md-12"},r.default.createElement(a.Link,{to:"/"},r.default.createElement("button",{className:"btn btn-default"},"Wróć"))))}}]),t}();t.default=i}});