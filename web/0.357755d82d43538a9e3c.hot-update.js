webpackHotUpdate(0,{89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),a=u(l),r=n(44),c=u(n(119)),s=u(n(118));function u(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={comments:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),o(t,[{key:"componentDidMount",value:function(){var e=this;$.ajax({type:"POST",url:"/getpostcomments",data:{_postID:post[0].id},success:function(t){console.log("ajax: "+t),e.setState({comments:JSON.parse(t)})},error:function(e){e.responseJSON&&console.log(e.responseJSON)}})}},{key:"componentWillMount",value:function(){console.log("componentWillMount")}},{key:"componentWillUnmount",value:function(){if(this.props.posts.length>0){var e=window.location.href.split("/"),t=e[e.length-1];this.props.posts.filter(function(e){if(e.slug==t)return e})}}},{key:"render",value:function(){return 0==this.props.posts.length?a.default.createElement("div",null):a.default.createElement("div",null,a.default.createElement("h1",null,post[0].title),a.default.createElement("div",{className:"row"},a.default.createElement("div",{className:"col-sm-6 col-md-4"},a.default.createElement("div",{className:"thumbnail"},a.default.createElement("img",{src:post[0].image,alt:post[0].title}))),a.default.createElement("div",{className:"col-sm-6 col-md-4"},a.default.createElement("p",null,post[0].description))),a.default.createElement("div",{className:"row"},a.default.createElement(s.default,{comments:this.state.comments})),a.default.createElement("div",{className:"row"},a.default.createElement(c.default,{postID:post[0].id})),a.default.createElement("div",{className:"col-md-12"},a.default.createElement(r.Link,{to:"/"},a.default.createElement("button",{className:"btn btn-default"},"Wróć"))))}}]),t}();t.default=i}});