webpackHotUpdate(0,{89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=s(o),l=n(44),u=s(n(119)),c=s(n(118));function s(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentWillMount",value:function(){$.ajax({type:"POST",url:"/getdata"+window.location.pathname,success:function(e){console.log(JSON.parse(e)),e=JSON.parse(e),this.props.posts=e[0]},error:function(e){e.responseJSON&&console.log(e.responseJSON)}})}},{key:"render",value:function(){console.log("props: "+this.props.posts);var e=this.props.posts,t=this.props.match.params.slug,n=e.filter(function(e){if(e.slug==t)return e});return a.default.createElement("div",null,a.default.createElement("h1",null,n[0].title),a.default.createElement("div",{className:"row"},a.default.createElement("div",{className:"col-sm-6 col-md-4"},a.default.createElement("div",{className:"thumbnail"},a.default.createElement("img",{src:n[0].image,alt:n[0].title}))),a.default.createElement("div",{className:"col-sm-6 col-md-4"},a.default.createElement("p",null,n[0].description))),a.default.createElement("div",{className:"row"},a.default.createElement(c.default,null)),a.default.createElement("div",{className:"row"},a.default.createElement(u.default,{postID:n[0].id})),a.default.createElement("div",{className:"text-right"},a.default.createElement(l.Link,{to:"/"},a.default.createElement("button",{className:"btn btn-default"},"Wróć"))))}}]),t}();t.default=i}});