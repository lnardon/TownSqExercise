(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(t,e,n){t.exports=n(50)},50:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),o=n(17),r=n.n(o),c=n(5),i=n(6),l=n(8),u=n(7),p=n(9),d=n(11),h=n(10),m=n(12),b=n.n(m),f=n(15),y=n(25),O=n.n(y),j=function(t){function e(t){var n;Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).handleModal=function(){n.setState({modalIsOpen:!n.state.modalIsOpen})},n.handleTitleChange=function(t){n.setState({newTitle:t.target.value})},n.handleBodyChange=function(t){n.setState({newBody:t.target.value})},n.handlePostUpdate=function(){n.setState({title:n.state.newTitle,body:n.state.newBody,modalIsOpen:!1})},n.handlePostEditCancel=function(){n.setState({newTitle:n.state.title,newBody:n.state.body,modalIsOpen:!1})};var a=t.location.state,s=a.title,o=a.body,r=a.userId;return n.state={modalIsOpen:!1,id:t.match.params.id,userId:r,username:"",title:s,body:o,newTitle:s,newBody:o},n}return Object(p.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=Object(f.a)(b.a.mark(function t(){var e,n,a;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://jsonplaceholder.typicode.com/users");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,a=n[this.state.userId-1],this.setState({userName:a.name});case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(d.b,{to:"./"}," back "),s.a.createElement("h1",null,this.state.title),s.a.createElement("p",null,this.state.body),s.a.createElement("p",null," Created by ",this.state.userName),s.a.createElement("button",{onClick:this.handleModal},"Edit This Post"),s.a.createElement(O.a,{isOpen:this.state.modalIsOpen,onRequestClose:this.modal,ariaHideApp:!1,contentLabel:"Edit Post"},s.a.createElement("input",{type:"text",onChange:this.handleTitleChange,value:this.state.newTitle}),s.a.createElement("input",{type:"text",onChange:this.handleBodyChange,value:this.state.newBody}),s.a.createElement("button",{onClick:this.handlePostUpdate}," Save Changes "),s.a.createElement("button",{onClick:this.handlePostEditCancel}," Cancel ")))}}]),e}(a.Component),E=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{style:{backgroundColor:"lightgrey",fontSize:22}},s.a.createElement("h3",null,this.props.post.title),s.a.createElement(d.b,{to:{pathname:"".concat(this.props.post.id),state:{title:this.props.post.title,body:this.props.post.body,userId:this.props.post.userId}}}," Read More "))}}]),e}(a.Component),v=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={posts:[]},n}return Object(p.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=Object(f.a)(b.a.mark(function t(){var e,n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://jsonplaceholder.typicode.com/posts");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,this.setState({posts:n});case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",null,this.state.posts.map(function(t){return s.a.createElement(E,{post:t,key:t.id})}))}}]),e}(a.Component),w=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement(h.c,null,s.a.createElement(h.a,{exact:!0,path:"/",component:v}),s.a.createElement(h.a,{exact:!0,path:"/:id",component:j})))}}]),e}(a.Component);r.a.render(s.a.createElement(w,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.62b8d427.chunk.js.map