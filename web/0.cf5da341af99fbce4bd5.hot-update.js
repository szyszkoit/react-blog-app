webpackHotUpdate(0,{89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(1),l=u(a),r=n(44),s=u(n(119)),c=u(n(118));function u(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={comments:[]},n.getComments=n.getComments.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"getComments",value:function(e){var t=this;$.ajax({type:"POST",url:"/getpostcomments",data:{_postID:e},success:function(e){t.setState({comments:JSON.parse(e)})},error:function(e){e.responseJSON&&console.log(e.responseJSON)}})}},{key:"ComponentDidMount",value:function(){console.log("fasd")}},{key:"render",value:function(){if(this.props.posts.length>0)var e=window.location.href.split("/"),t=e[e.length-1],n=this.props.posts.filter(function(e){if(e.slug==t)return e});return 0==this.props.posts.length?l.default.createElement("div",null):l.default.createElement("div",null,l.default.createElement("h1",null,n[0].title),l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-sm-6 col-md-4"},l.default.createElement("div",{className:"thumbnail"},l.default.createElement("img",{src:n[0].image,alt:n[0].title}))),l.default.createElement("div",{className:"col-sm-6 col-md-4"},l.default.createElement("p",null,n[0].description))),l.default.createElement("div",{className:"row"},l.default.createElement(c.default,{comments:this.state.comments})),l.default.createElement("div",{className:"row"},l.default.createElement(s.default,{postID:n[0].id})),l.default.createElement("div",{className:"col-md-12"},l.default.createElement(r.Link,{to:"/"},l.default.createElement("button",{className:"btn btn-default"},"Wróć"))))}}]),t}();t.default=i}});