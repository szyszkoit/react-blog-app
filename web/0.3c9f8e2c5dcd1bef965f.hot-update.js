webpackHotUpdate(0,{210:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=c(n(1)),u=n(10),a=(n(64),n(65),c(n(94)),c(n(93)),c(n(119)));c(n(91)),c(n(90)),c(n(89));function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={posts:[]},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"componentDidMount",value:function(){var e=this;$.ajax({type:"POST",url:getPosts,success:function(t){console.log(t),e.setState({posts:t})},error:function(e){e.responseJSON&&console.log(e.responseJSON)}})}},{key:"render",value:function(){return r.default.createElement(a.default,{posts:this.state.posts})}}]),t}();(0,u.render)(r.default.createElement(s,null),document.getElementById("app"))}});