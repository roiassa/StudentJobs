(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{63:function(e,t,a){e.exports=a(98)},97:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(31),o=a.n(s),l=a(18),c=a(62),i=a(6),u=a(7),m=a(9),p=a(8),h=a(10),b=a(22),d=a(32),f=a(100),g=a(101),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={title:""},a.onSubmit=function(e){e.preventDefault(),window.location.reload()},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(f.a,null,r.a.createElement(g.a,{variant:"primary",size:"lg",type:"submit",value:"Refresh",block:!0},"Refresh")))}}]),t}(n.Component),v=a(105),j=a(103),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{bg:"light",expand:"lg"},r.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(v.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(j.a,{className:"mr-auto"},r.a.createElement(j.a.Link,{as:l.b,to:{pathname:"/jobs",state:{jobs:this.props.jobs}}},"Home"),r.a.createElement(j.a.Link,{as:l.b,to:"/about"},"About"))),r.a.createElement(g.a,{variant:"outline-danger",onClick:this.props.logOut},"Log Out")))}}]),t}(n.Component),O=a(21),k=a.n(O),w=a(106),S=a(102),A=a(109),C=a(107),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={user:"",password:"",isLoggedIn:!1,successAlert:!1},a.setToken=function(e){localStorage.setItem("id_token",e)},a.getToken=function(){return localStorage.getItem("id_token")},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault(),k.a.post("http://localhost:5000/login",{username:a.state.user,password:a.state.password}).then(function(e){a.setToken(e.data.access_token),a.setState(function(e){return e.successAlert=!0,e.isLoggedIn=!0,e})}).catch(function(e){try{alert(e.response.data.message)}catch(t){alert("Something went wrong")}}),setTimeout(function(){return!a.state.isLoggedIn&&a.setState({failureAlert:!0})},100)},a.logOut=function(e){localStorage.removeItem("id_token"),a.setState({user:"",password:"",isLoggedIn:!1})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="Bearer "+this.getToken();k.a.get("http://localhost:5000/validate",{headers:{Authorization:t}}).then(function(t){return e.setState({isLoggedIn:!0})})}},{key:"componentDidUpdate",value:function(e,t){var a=this;this.state.successAlert&&(this.turnOffSuccessAlert=setTimeout(function(){a.setState({successAlert:!1})},1500))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.turnOffSuccessAlert),clearTimeout(this.turnOffFailureAlert)}},{key:"render",value:function(){var e=this;return this.state.isLoggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{jobs:e.props.jobs,logOut:e.logOut}),e.state.successAlert&&r.a.createElement(w.a,{key:1,variant:"success"},"Success!"),r.a.createElement("p",null),r.a.createElement(E,{refresh:e.props.refresh}),r.a.createElement(b.a,{to:{pathname:"/jobs",state:{jobs:e.props.jobs}}})):r.a.createElement("div",{className:"Login"},r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(S.a,{controlId:"usedr",bssize:"large"},r.a.createElement(A.a,null,"Username"),r.a.createElement(C.a,{autoFocus:!0,type:"text",name:"user",value:e.state.user,onChange:e.handleChange})),r.a.createElement(S.a,{controlId:"password",bssize:"large"},r.a.createElement(A.a,null,"Password"),r.a.createElement(C.a,{value:e.state.password,onChange:e.handleChange,type:"text",name:"password"})),r.a.createElement(g.a,{block:!0,bsize:"large",type:"submit"},"Login"),r.a.createElement(j.a.Link,{as:l.b,to:"/register"},"Register")),r.a.createElement(b.a,{to:"/"}))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={user:"",password:"",isLoggedIn:!1,successAlert:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{style:{background:"#333",color:"#fff",textAlign:"center",padding:"10px"}},r.a.createElement("h1",null,"Student Jobs"),r.a.createElement(I,{refresh:this.props.refresh,jobs:this.props.jobs})))}}]),t}(n.Component),L=a(108),T=a(104),z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).getStyle=function(){return{background:"#f4f4f4",padding:"7px",borderBottom:"2px #ccc dotted"}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.job,t=e.id,a=e.company,n=e.title,s=e.description,o=e.link,l=e.location;return r.a.createElement(L.a,null,r.a.createElement(L.a.Header,null,r.a.createElement(T.a.Toggle,{as:g.a,style:{color:"#000000",padding:"3px",fontSize:"17px"},variant:"link",eventKey:t},n," - ",r.a.createElement("b",null,a),", ",l)),r.a.createElement(T.a.Collapse,{eventKey:t},r.a.createElement("div",{className:"clearfix"},r.a.createElement(L.a.Body,{style:{fontSize:"15px"}},r.a.createElement(g.a,{variant:"primary",href:o},"Apply"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:s}})))))}}]),t}(n.Component),F=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,{defaultActiveKey:"0"},this.props.location.state.jobs.map(function(e){return r.a.createElement(z,{key:e.id,job:e})}))}}]),t}(n.Component);var _=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("center",null,r.a.createElement("h2",null,"StudentJobs 1.0"),r.a.createElement("p",null,"Gathers relevant student openings from different websites in one page")))},D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={user:"",password:"",registered:!1},a.setToken=function(e){localStorage.setItem("id_token",e)},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault(),k.a.post("http://localhost:5000/register",{username:a.state.user,password:a.state.password}).then(function(e){a.setToken(e.data.access_token),alert("Registered successfully"),a.setState({registered:!0})}).catch(function(e){alert(e.response.data.message)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.registered?window.location.reload():r.a.createElement("div",{className:"Login"},r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(S.a,{controlId:"usedr",bssize:"large"},r.a.createElement(A.a,null,"Username"),r.a.createElement(C.a,{autoFocus:!0,type:"text",name:"user",value:this.state.user,onChange:this.handleChange})),r.a.createElement(S.a,{controlId:"password",bssize:"large"},r.a.createElement(A.a,null,"Password"),r.a.createElement(C.a,{value:this.state.password,onChange:this.handleChange,type:"text",name:"password"})),r.a.createElement(g.a,{block:!0,bsize:"large",type:"submit"},"Register")))}}]),t}(n.Component),N=(a(97),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={jobs:[]},a.refresh=function(e){k.a.post("https://tobe.implemented",{title:e,completed:!1}).then(function(e){return a.setState({jobs:[].concat(Object(c.a)(a.state.jobs),[e.data])})})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.get("http://localhost:5000/").then(function(t){return e.setState({jobs:t.data})})}},{key:"render",value:function(){var e={fontSize:"17px"};return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(x,{refresh:this.refresh,jobs:this.state.jobs}),r.a.createElement(b.b,{exact:!0,path:"/",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("center",null,r.a.createElement(w.a,{key:1,variant:"primary"},r.a.createElement("span",{style:e},"Log in or register to display jobs please"))))}}),r.a.createElement(b.b,{path:"/jobs",component:F}),r.a.createElement(b.b,{path:"/about",component:_}),r.a.createElement(b.b,{path:"/register",component:D}))))}}]),t}(n.Component));o.a.render(r.a.createElement(l.a,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.37c78dc1.chunk.js.map