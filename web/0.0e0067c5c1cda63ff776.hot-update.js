webpackHotUpdate(0,{119:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=p(n(94)),l=p(n(93)),u=p(n(91)),c=p(n(90)),d=p(n(89)),i=n(1),f=p(i),s=(n(10),n(65)),m=n(50);function p(e){return e&&e.__esModule?e:{default:e}}var h=[{id:1,name:"Honda Accord Crosstour",year:"2010",model:"Accord Crosstour",make:"Honda",media:"http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg",price:"$16,811"},{id:2,name:"Honda Accord Crosstour 2",year:"2010",model:"Accord Crosstour",make:"Honda",media:"http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg",price:"$16,811"}],b=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={authenticated:!1},e.onLogin=e.onLogin.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),a(t,[{key:"onLogin",value:function(e){this.setState({authenticated:e})}},{key:"ComponentWillReceiveProps",value:function(){var e=this;$.ajax({type:"POST",url:loginCheck,dataType:"json",success:function(){e.onLogin(!0)},error:function(e){e.responseJSON?console.log(e.responseJSON):console.log(e)}})}},{key:"render",value:function(){var e=this;return f.default.createElement(s.BrowserRouter,null,f.default.createElement(m.Grid,null,f.default.createElement(m.Row,null,f.default.createElement(m.Navbar,{inverse:!0,collapseOnSelect:!0},f.default.createElement(m.Navbar.Header,null,f.default.createElement(m.Navbar.Brand,null,f.default.createElement(s.Link,{to:"/"},"Brand")),f.default.createElement(m.Navbar.Toggle,null)),f.default.createElement(m.Navbar.Collapse,null,f.default.createElement(m.Nav,null,f.default.createElement(m.NavItem,{eventKey:1,href:"#"},f.default.createElement(s.Link,{to:"/about"},"About")),f.default.createElement(m.NavItem,{eventKey:2,href:"#"},f.default.createElement(s.Link,{to:"/contact"},"Contact"))),f.default.createElement(m.Nav,{pullRight:!0},f.default.createElement(m.NavItem,{eventKey:1,href:"#"},this.state.authenticated?f.default.createElement(s.Link,{to:"/logout"},"Logout"):f.default.createElement(s.Link,{to:"/login"},"Login")))))),f.default.createElement(s.Route,{exact:!0,path:"/",render:function(){return f.default.createElement(l.default,{posts:h})}}),f.default.createElement(s.Route,{path:"/post/:id",component:function(e){return f.default.createElement(d.default,o({posts:h},e))}}),f.default.createElement(s.Route,{path:"/about",component:u.default}),f.default.createElement(s.Route,{path:"/login",component:function(t){return f.default.createElement(r.default,o({onLogin:e.onLogin},t))}}),f.default.createElement(s.Route,{path:"/contact",component:c.default})))}}]),t}();t.default=b}});