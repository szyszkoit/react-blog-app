webpackHotUpdate(0,{89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(1),l=(o=a)&&o.__esModule?o:{default:o},c=n(50);var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentWillUnmount",value:function(){console.log(window.location.pathname);var e=this;$.ajax({type:"POST",url:"/getdata"+window.location.pathname,success:function(t){console.log(JSON.parse(t)),e.setState({posts:JSON.parse(t)})},error:function(e){e.responseJSON&&console.log(e.responseJSON)}})}},{key:"render",value:function(){console.log("props: "+this.props.posts);var e=this.props.posts,t=this.props.match.params.slug,n=e.filter(function(e){if(e.slug==t)return e});return l.default.createElement("div",null,l.default.createElement("h1",null,n[0].title),l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-sm-6 col-md-4"},l.default.createElement("div",{className:"thumbnail"},l.default.createElement("img",{src:n[0].image,alt:n[0].title}))),l.default.createElement("div",{className:"col-sm-6 col-md-4"},l.default.createElement("p",null,n[0].description))),l.default.createElement("div",{className:"col-md-12"},l.default.createElement(c.Link,{to:"/"},l.default.createElement("button",{className:"btn btn-default"},"Wróć"))))}}]),t}();t.default=s}});