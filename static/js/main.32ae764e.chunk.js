(this.webpackJsonpsweetcats=this.webpackJsonpsweetcats||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),s=n.n(a),i=(n(12),n(2)),o=n(3),h=n(5),l=n(4),u=n(0),j=function(e){var t=e.name,n=e.email,c=e.id;return Object(u.jsxs)("div",{className:"tc bg-light-blue dib br3 pa3 ma2 grow bw5 shadow-5",children:[Object(u.jsx)("img",{alt:"cat",src:"https://robohash.org/set_set4/".concat(c,"?size=200x200")}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("p",{children:n})]})]})},d=function(e){var t=e.cats,n=t.map((function(e,n){return Object(u.jsx)(j,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(u.jsx)("div",{children:n})},b=function(e){var t=e.searchChange;return Object(u.jsx)("div",{children:Object(u.jsx)("input",{className:"ph3 pv3 ma1 br2 mb3 ba b--blue b-lightest-blue",type:"search",placeholder:"Search Cats",onChange:t})})},f=function(e){return Object(u.jsx)("div",{style:{overflowY:"scroll",border:"0px",height:"800px"},children:e.children})},O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={hasError:!1},e}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Oops! Thats not good!"}):this.props.children}}]),n}(c.Component),p=(n(14),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={cats:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({cats:t})}))}},{key:"render",value:function(){var e=this.state,t=e.cats,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f1",children:"SWEET CATS"}),Object(u.jsx)(b,{searchChange:this.onSearchChange}),Object(u.jsx)(f,{children:Object(u.jsx)(O,{children:Object(u.jsx)(d,{cats:c})})})]}):Object(u.jsx)("h1",{className:"tc",children:"Loading"})}}]),n}(c.Component)),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(15);s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.32ae764e.chunk.js.map