webpackHotUpdate(0,{89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),r=u(l),a=n(44),s=u(n(119)),c=u(n(118));function u(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={comments:[]},e.getComments=e.getComments.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.PureComponent),o(t,[{key:"getComments",value:function(e){var t=this;$.ajax({type:"POST",url:"/getpostcomments",data:{_postID:e},success:function(e){t.setState({comments:JSON.parse(e)})},error:function(e){e.responseJSON&&console.log(e.responseJSON)}})}},{key:"ComponentWillMount",value:function(){if(this.props.posts.length>0){var e=window.location.href.split("/"),t=e[e.length-1],n=this.props.posts.filter(function(e){if(e.slug==t)return e});this.getComments(n[0].id)}}},{key:"render",value:function(){return 0==this.props.posts.length?r.default.createElement("div",null):r.default.createElement("div",null,r.default.createElement("h1",null,post[0].title),r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-sm-6 col-md-4"},r.default.createElement("div",{className:"thumbnail"},r.default.createElement("img",{src:post[0].image,alt:post[0].title}))),r.default.createElement("div",{className:"col-sm-6 col-md-4"},r.default.createElement("p",null,post[0].description))),r.default.createElement("div",{className:"row"},r.default.createElement(c.default,{comments:this.state.comments})),r.default.createElement("div",{className:"row"},r.default.createElement(s.default,{postID:post[0].id})),r.default.createElement("div",{className:"col-md-12"},r.default.createElement(a.Link,{to:"/"},r.default.createElement("button",{className:"btn btn-default"},"Wróć"))))}}]),t}();t.default=i}});