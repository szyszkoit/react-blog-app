webpackHotUpdate(0,{118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=m(n(93)),l=m(n(92)),u=m(n(91)),c=m(n(90)),i=m(n(89)),f=n(1),s=m(f),d=(n(10),n(50)),p=n(65);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={authenticated:!!sessionStorage.getItem("api_token")},e.onLogin=e.onLogin.bind(e),e.onLogout=e.onLogout.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,f.Component),a(t,[{key:"onLogin",value:function(e){this.setState({authenticated:e}),window.location.href="/"}},{key:"onLogout",value:function(){sessionStorage.removeItem("api_token"),this.setState({authenticated:!1}),window.location.href="/"}},{key:"render",value:function(){var e=this;return s.default.createElement(d.BrowserRouter,null,s.default.createElement(p.Grid,null,s.default.createElement(p.Row,null,s.default.createElement(p.Navbar,{inverse:!0,collapseOnSelect:!0},s.default.createElement(p.Navbar.Header,null,s.default.createElement(p.Navbar.Brand,null,s.default.createElement(d.Link,{to:"/"},"Brand")),s.default.createElement(p.Navbar.Toggle,null)),s.default.createElement(p.Navbar.Collapse,null,s.default.createElement(p.Nav,null,s.default.createElement(p.NavItem,{eventKey:1,href:"#"},s.default.createElement(d.Link,{to:"/about"},"About")),s.default.createElement(p.NavItem,{eventKey:2,href:"#"},s.default.createElement(d.Link,{to:"/contact"},"Contact"))),s.default.createElement(p.Nav,{pullRight:!0},s.default.createElement(p.NavItem,{eventKey:1,href:"#"},this.state.authenticated?s.default.createElement(d.Link,{to:"/logout",onClick:this.onLogout},"Logout"):s.default.createElement(d.Link,{to:"/login"},"Login")))))),s.default.createElement(d.Route,{exact:!0,path:"/",render:function(){return s.default.createElement(l.default,{posts:e.props.posts})}}),s.default.createElement(d.Route,{path:"/post/:slug",component:function(t){return s.default.createElement(i.default,o({posts:e.props.posts},t))}}),s.default.createElement(d.Route,{path:"/about",component:u.default}),s.default.createElement(d.Route,{path:"/login",component:function(t){return s.default.createElement(r.default,o({onLogin:e.onLogin},t))}}),s.default.createElement(d.Route,{path:"/contact",component:c.default})))}}]),t}();t.default=h}});