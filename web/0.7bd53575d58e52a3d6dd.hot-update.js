webpackHotUpdate(0,{89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(1),l=(o=a)&&o.__esModule?o:{default:o},u=n(50);var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentWillMount",value:function(){console.log(window.location.pathname);var e=this;$.ajax({type:"POST",url:window.location.pathname,success:function(t){console.log(t),e.setState({posts:JSON.parse(t)})},error:function(e){e.responseJSON&&console.log(e.responseJSON)}})}},{key:"render",value:function(){var e=this.props.posts;console.log(e);var t=this.props.match.params.slug,n=e.filter(function(e){if(e.slug==t)return e});return l.default.createElement("div",null,l.default.createElement("h1",null,n[0].title),l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-sm-6 col-md-4"},l.default.createElement("div",{className:"thumbnail"},l.default.createElement("img",{src:n[0].image,alt:n[0].title}))),l.default.createElement("div",{className:"col-sm-6 col-md-4"},l.default.createElement("p",null,n[0].description))),l.default.createElement("div",{className:"col-md-12"},l.default.createElement(u.Link,{to:"/"},l.default.createElement("button",{className:"btn btn-default"},"Wróć"))))}}]),t}();t.default=i},92:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(1),a=u(r),l=n(50);u(n(120));function u(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"render",value:function(){var e=this.props.posts.map(function(e){return a.default.createElement("div",{className:"post-div"},a.default.createElement(l.Link,{to:"/post/"+e.slug,className:"list-group-item",key:e.slug},a.default.createElement("div",{className:"post-div-img"},a.default.createElement("img",{src:e.image,alt:e.title})),a.default.createElement("div",{class:"post-div-title"},e.title)))});return a.default.createElement("div",null,a.default.createElement("h1",null,"Posts page"),a.default.createElement("div",{className:"post-container"},e))}}]),t}();t.default=i}});