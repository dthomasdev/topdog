(this.webpackJsonptopdog=this.webpackJsonptopdog||[]).push([[0],{47:function(e,t,s){},48:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){},54:function(e,t,s){},55:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s(1),c=s.n(n),r=s(23),i=s.n(r),o=(s(47),s(7)),l=s(8),j=s(10),d=s(9),u=(s(18),s(48),s(13)),b=s(20),h=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"submitHandler",value:function(e){e.preventDefault();var t=e.target.username.value;e.target.password.value;this.props.login(t),e.target.username.value="",e.target.password.value=""}},{key:"render",value:function(){var e=this;return Object(a.jsxs)(u.a,{onSubmit:function(t){return e.submitHandler(t)},children:[Object(a.jsx)(u.a.Group,{controlId:"user-login-name",children:Object(a.jsxs)(u.a.Row,{className:"align-items-center",children:[Object(a.jsx)(u.a.Label,{children:"Username"}),Object(a.jsx)(u.a.Control,{name:"username",type:"text",placeholder:"username",required:!0}),Object(a.jsx)(u.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]})}),Object(a.jsx)(u.a.Group,{controlId:"user-password",children:Object(a.jsxs)(u.a.Row,{className:"align-items-center",children:[Object(a.jsx)(u.a.Label,{children:"Password"}),Object(a.jsx)(u.a.Control,{name:"password",type:"password",placeholder:"Password"})]})}),Object(a.jsx)(b.a,{variant:"secondary",type:"submit",children:"Submit"})]})}}]),s}(c.a.Component),m=(s(52),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"userLogin",value:function(e){this.props.userLogin(e)}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"landing-page",children:[Object(a.jsx)("div",{className:"aboutarea",children:Object(a.jsxs)("div",{className:"abouttext",children:[Object(a.jsx)("h1",{className:"logo",children:"Top Dog"}),Object(a.jsx)("hr",{}),Object(a.jsx)("p",{children:"Welcome to topdog, the social media site for four legged friends who want to connect with the rest of the canine world! Share your tail wagging walks and borks with puppers small and large, from all corners of the World Wide Web."}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{children:["\xa9",(new Date).getFullYear()," Top Dog Inc | All rights reserved | Terms of Service | Privacy |"]})]})}),Object(a.jsx)("div",{className:"loginbox",children:Object(a.jsx)(h,{login:function(t){return e.userLogin(t)}})})]})}}]),s}(c.a.Component)),O=s(22),p=(s(53),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={username:"",status:""},a}return Object(l.a)(s,[{key:"handleChange",value:function(e){var t={};t[e.target.name]=e.target.value,this.setState(t)}},{key:"submitHandler",value:function(e){e.preventDefault(),this.props.statusUpdate(this.state.status),this.setState({username:"",status:""})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)(u.a,{onSubmit:function(t){return e.submitHandler(t)},className:"status-form",children:[Object(a.jsx)(u.a.Group,{controlId:"status",children:Object(a.jsx)(u.a.Control,{name:"status",type:"text",value:this.state.status,placeholder:"What's happening?",onChange:function(t){return e.handleChange(t)},required:!0})}),Object(a.jsx)("div",{className:"status-submit-row",children:Object(a.jsx)(b.a,{variant:"outline-dark",type:"submit",children:"Post"})})]})}}]),s}(c.a.Component)),x=(s(54),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={},a}return Object(l.a)(s,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"profile-header-card",children:[Object(a.jsx)("div",{className:"image-container",children:Object(a.jsx)("div",{id:"userImage"})}),Object(a.jsx)("h3",{children:this.props.username}),Object(a.jsx)("h4",{children:"Head of Security"}),Object(a.jsx)("h5",{children:"Following"}),Object(a.jsx)("h6",{children:"2"}),Object(a.jsx)("h5",{children:"Followers"}),Object(a.jsx)("h6",{children:"234"})]})})}}]),s}(c.a.Component)),v=s(27),f=s(26),g=(s(55),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={likes:0,liked:!1,poops:0,pooped:!1,user:a.props.userNumber},a}return Object(l.a)(s,[{key:"pawsome",value:function(){var e=this;!1===this.state.liked?this.setState((function(){return{likes:e.state.likes+1,liked:!0}})):this.setState((function(){return{likes:e.state.likes-1,liked:!1}}))}},{key:"poopsome",value:function(){var e=this;!1===this.state.pooped?this.setState((function(){return{poops:e.state.poops+1,pooped:!0}})):this.setState((function(){return{poops:e.state.poops-1,pooped:!1}}))}},{key:"randomUser",value:function(e){switch(console.log(0),e){case 0:return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{id:"userImage2"}),Object(a.jsx)("p",{children:"Douglas"})]});case 1:return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{id:"userImage3"}),Object(a.jsx)("p",{children:"Ted"})]});case 2:return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{id:"userImage4"}),Object(a.jsx)("p",{children:"Pete"})]});case 3:return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{id:"userImage5"}),Object(a.jsx)("p",{children:"Kat"})]});default:return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{id:"userImage2"}),Object(a.jsx)("p",{children:"Douglas"})]})}}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"comment-card-wrapper",children:[Object(a.jsxs)("div",{className:"comment-card",children:[Object(a.jsx)("div",{className:"comment-card-colleft",children:this.randomUser(this.state.user)}),Object(a.jsx)("div",{className:"comment-wrapper",children:Object(a.jsx)("div",{className:"comment-text",children:this.props.comment})})]}),Object(a.jsxs)("div",{className:"comment-reaction-row",children:[Object(a.jsxs)("div",{className:"comment-card-buttonbox",onClick:function(){return e.poopsome()},children:[Object(a.jsx)("div",{style:this.state.pooped?{color:"brown"}:{color:"black"},children:Object(a.jsx)(f.a,{})}),Object(a.jsx)("div",{className:"likes",children:this.state.poops})]}),Object(a.jsxs)("div",{className:"comment-card-buttonbox",onClick:function(){return e.pawsome()},children:[Object(a.jsx)("div",{style:this.state.liked?{color:"green"}:{color:"black"},children:Object(a.jsx)(v.a,{})}),Object(a.jsx)("div",{className:"likes",children:this.state.likes})]})]})]})}}]),s}(c.a.Component)),k=s(21),N=s(16),w=(s(56),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={poops:0,pooped:!1,likes:0,liked:!1,comment:"",comments:[]},a}return Object(l.a)(s,[{key:"handleChange",value:function(e){this.setState((function(){return{comment:e.target.value}}))}},{key:"addComment",value:function(e){var t=this.state.comment,s=this.state.comments;0===t.length?alert("doin a bamboozle.. comments cannot be blank"):this.setState((function(){return{comments:[].concat(Object(O.a)(s),[t]),comment:""}})),e.preventDefault()}},{key:"renderComments",value:function(){return this.state.comments.map((function(e,t){return Object(a.jsx)(g,{comment:e,userNumber:Math.floor(4*Math.random())},t)}))}},{key:"pawsome",value:function(){var e=this;!1===this.state.liked?this.setState((function(){return{likes:e.state.likes+1,liked:!0}})):this.setState((function(){return{likes:e.state.likes-1,liked:!1}}))}},{key:"poopsome",value:function(){var e=this;!1===this.state.pooped?this.setState((function(){return{poops:e.state.poops+1,pooped:!0}})):this.setState((function(){return{poops:e.state.poops-1,pooped:!1}}))}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"status-card-wrapper",children:[Object(a.jsxs)("div",{className:"status-card-content",children:[Object(a.jsx)("div",{className:"status-card-colleft",children:Object(a.jsx)("div",{id:"userImage1"})}),Object(a.jsxs)("div",{className:"status-text",children:[Object(a.jsxs)("div",{className:"status-card-colmid",children:[Object(a.jsx)("h3",{className:"username-text",children:this.props.username}),Object(a.jsx)("h5",{className:"post-content",children:this.props.text})]}),Object(a.jsxs)("div",{className:"reaction-row",children:[Object(a.jsxs)("div",{className:"buttonbox",onClick:function(){return e.poopsome()},children:[Object(a.jsx)("div",{style:this.state.pooped?{color:"brown"}:{color:"black"},children:Object(a.jsx)(f.a,{})}),Object(a.jsx)("div",{className:"likes",children:this.state.poops})]}),Object(a.jsxs)("div",{className:"buttonbox",onClick:function(){return e.pawsome()},children:[Object(a.jsx)("div",{style:this.state.liked?{color:"green"}:{color:"black"},children:Object(a.jsx)(v.a,{})}),Object(a.jsx)("div",{className:"likes",children:this.state.likes})]})]})]})]}),Object(a.jsx)(k.a,{className:"comments-row",children:Object(a.jsx)(N.a,{children:this.renderComments()})}),Object(a.jsx)(u.a,{onSubmit:function(t){return e.addComment(t)},children:Object(a.jsx)(u.a.Group,{className:"m-3",controlId:"comment",children:Object(a.jsxs)(u.a.Row,{children:[Object(a.jsx)(u.a.Control,{placeholder:"Add a Comment...",name:"comment",onChange:function(t){return e.handleChange(t)},value:this.state.comment}),Object(a.jsx)("div",{className:"submit-btn-wrapper",children:Object(a.jsx)(b.a,{variant:"outline-dark",className:"submit-btn",type:"submit",children:"Comment"})})]})})})]})}}]),s}(c.a.Component)),y=s(38),C=s(39),S=s(40),I=s(24),F=(s(57),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"navbar",children:Object(a.jsxs)("div",{className:"nav-wrapper",children:[Object(a.jsxs)("div",{className:"logo-wrapper",children:[Object(a.jsx)("div",{className:"logo-text",children:"Td"}),Object(a.jsx)("div",{className:"icon",children:Object(a.jsx)("img",{src:"https://img.icons8.com/pastel-glyph/64/000000/dog--v2.png"})})]}),Object(a.jsxs)("div",{className:"nav-icons-wrapper",children:[Object(a.jsx)(I.b,{to:"/topdog",title:"profile",children:Object(a.jsx)(y.a,{className:"navbar-icon"})}),Object(a.jsx)(I.b,{to:"/topdog/newsfeed",title:"newsfeed",children:Object(a.jsx)(C.a,{className:"navbar-icon"})}),Object(a.jsx)(I.b,{to:"/topdog",onClick:function(){return e.props.logout()},title:"logout",children:Object(a.jsx)(S.a,{className:"navbar-icon"})})]})]})})}}]),s}(c.a.Component)),D=(s(61),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"footer",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("p",{className:"col-sm",children:["\xa9",(new Date).getFullYear()," Top Dog Inc | All rights reserved | Terms of Service | Privacy |"]})})})}}]),s}(c.a.Component)),P=s(41),L=(s(62),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={},a}return Object(l.a)(s,[{key:"render",value:function(){return Object(a.jsx)(P.a,{className:"jumbotron"})}}]),s}(c.a.Component)),T=(s(63),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={},a}return Object(l.a)(s,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"view-profile-image-container",children:[Object(a.jsx)("h4",{id:"view-profile-text",children:"Recent Views"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{id:"userImage2",children:Object(a.jsx)("div",{className:"spot-on"})}),Object(a.jsx)("h5",{children:"Doug"}),Object(a.jsx)("div",{id:"userImage3",children:Object(a.jsx)("div",{className:"spot-off"})}),Object(a.jsx)("h5",{children:"Ted"}),Object(a.jsx)("div",{id:"userImage4",children:Object(a.jsx)("div",{className:"spot-on"})}),Object(a.jsx)("h5",{children:"Pete"}),Object(a.jsx)("div",{id:"userImage5",children:Object(a.jsx)("div",{className:"spot-on"})}),Object(a.jsx)("h5",{children:"Kat"})]})})}}]),s}(c.a.Component)),G=s(19),H=s.p+"static/media/dogFood.08b02f1a.jpg",W=s.p+"static/media/PeopleCrackers.37166db9.jpg",M=s.p+"static/media/Lassie.3286e2b3.jpg",A=(s(64),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={},a}return Object(l.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"carousel-wrapper",children:Object(a.jsxs)(G.a,{className:"image-carousel",children:[Object(a.jsxs)(G.a.Item,{children:[Object(a.jsx)("img",{className:"d-block w-100 carousel-img-fluid",src:H,alt:"First slide"}),Object(a.jsx)(G.a.Caption,{})]}),Object(a.jsxs)(G.a.Item,{children:[Object(a.jsx)("img",{className:"d-block w-100 carousel-img-fluid",src:W,style:{height:"100%",width:"auto"},alt:"Third slide"}),Object(a.jsx)(G.a.Caption,{})]}),Object(a.jsxs)(G.a.Item,{children:[Object(a.jsx)("img",{className:"d-block w-100 carousel-img-fluid",src:M,alt:"Third slide"}),Object(a.jsx)(G.a.Caption,{})]})]})})}}]),s}(c.a.Component)),U=s.p+"static/media/HeatherGrooming.1db2fd42.jpg",R=s.p+"static/media/pets4homes.238b9285.jpg",B=s.p+"static/media/woofglider.5b3a2dc1.jpg",q=s.p+"static/media/adoptable.c8ec33d8.jpg",J=s.p+"static/media/dogstrust.62ea2121.jpg",K=(s(65),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"randomAd",value:function(){switch(Math.floor(5*Math.random())){case 0:return Object(a.jsx)("img",{className:"ad-img-fluid",src:U,alt:"an advert for Heathers grooming services"});case 1:return Object(a.jsx)("img",{className:"ad-img-fluid",src:R,alt:"an advert for pets for homes"});case 2:return Object(a.jsx)("img",{className:"ad-img-fluid",src:J,alt:"an advert for dogs trust"});case 3:return Object(a.jsx)("img",{className:"ad-img-fluid",src:B,alt:"an advert for the woof glider dog frisbee"});case 4:return Object(a.jsx)("img",{className:"ad-img-fluid",src:q,alt:"an advert for adoptable"});default:return Object(a.jsx)("img",{className:"ad-img-fluid",src:B,alt:"an advert for the woof glider dog frisbee"})}}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"advertisement",children:this.randomAd()})}}]),s}(c.a.Component)),Y=(s(66),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={posts:["who let the dogs out??","Gangnam Style","Hello World","OMG"," BAd day don't want to talk about it"]},a}return Object(l.a)(s,[{key:"renderPosts",value:function(){var e=this;return this.state.posts.map((function(t,s){return s%3===0?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(w,{text:t,username:e.props.username},s),Object(a.jsx)(K,{})]}):Object(a.jsx)(w,{text:t,username:e.props.username},s)})).reverse()}},{key:"updateStatus",value:function(e){var t=this;this.setState((function(){return{posts:[].concat(Object(O.a)(t.state.posts),[e])}}))}},{key:"render",value:function(){var e=this;return Object(a.jsx)("section",{className:"newsfeed-page",children:Object(a.jsxs)(k.a,{children:[Object(a.jsx)(N.a,{md:"3",className:"newsfeed-leftcol",children:Object(a.jsx)(x,{username:this.props.username})}),Object(a.jsxs)(N.a,{md:"6",className:"newsfeed-midcol",children:[Object(a.jsx)(p,{statusUpdate:function(t){return e.updateStatus(t)}}),Object(a.jsx)("br",{}),this.renderPosts()]}),Object(a.jsx)(N.a,{md:"3",className:"newsfeed-rightcol",children:Object(a.jsx)("div",{className:"newsfeed-ad-wrapper",children:Object(a.jsx)(A,{})})})]})})}}]),s}(c.a.Component)),z=(s(67),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"suggested-groups-container",children:[Object(a.jsx)("h4",{id:"view-profile-text",children:"Suggested Groups"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{id:"userImage6"}),Object(a.jsx)("h5",{children:"Dog Poker Group"}),Object(a.jsx)("div",{id:"userImage7"}),Object(a.jsx)("h5",{children:"Dog Sledding Group"}),Object(a.jsx)("div",{id:"userImage8"}),Object(a.jsx)("h5",{children:"Dog Film Group"}),Object(a.jsx)("div",{id:"userImage9"}),Object(a.jsx)("h5",{children:"Dog Walking Group"})]})})}}]),s}(c.a.Component)),E=s(12),V=(s(68),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={posts:["Hello ".concat(a.props.username,"! Welcome to topdog, the social media site for four legged friends who want to connect with the rest of the canine world!"),"Missed the postman this morning! He's obviously been working out he was much faster at running away compared to last week!!! #heck"]},a}return Object(l.a)(s,[{key:"updateStatus",value:function(e){var t=this;this.setState((function(){return{posts:[].concat(Object(O.a)(t.state.posts),[e])}}))}},{key:"renderPosts",value:function(){var e=this;return this.state.posts.map((function(t,s){return Object(a.jsx)(w,{text:t,username:e.props.username},s)})).reverse()}},{key:"logout",value:function(){console.log("Logging out"),this.props.logout()}},{key:"render",value:function(){var e=this;return Object(a.jsxs)(I.a,{children:[Object(a.jsx)(F,{logout:function(){return e.logout()}}),Object(a.jsx)(E.a,{path:"/topdog",exact:!0,children:Object(a.jsxs)("section",{className:"profilepage",children:[Object(a.jsx)(L,{}),Object(a.jsxs)(k.a,{children:[Object(a.jsxs)(N.a,{md:3,className:"leftcol",children:[Object(a.jsx)(x,{username:this.props.username}),Object(a.jsx)(z,{})]}),Object(a.jsxs)(N.a,{md:6,className:"midcol",children:[Object(a.jsx)(p,{statusUpdate:function(t){return e.updateStatus(t)}}),this.renderPosts()]}),Object(a.jsxs)(N.a,{md:3,className:"rightcol",children:[Object(a.jsx)(T,{}),Object(a.jsx)("div",{className:"profile-ad-wrapper",children:Object(a.jsx)(A,{})})]})]})]})}),Object(a.jsx)(E.a,{path:"/topdog/newsfeed",children:Object(a.jsx)(Y,{username:this.props.username})}),Object(a.jsx)(D,{})]})}}]),s}(c.a.Component)),Q=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={username:"",loggedIn:!1},a}return Object(l.a)(s,[{key:"userLogin",value:function(e){var t=this;this.setState((function(){return{username:e,loggedIn:!t.state.loggedIn}}))}},{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:this.state.loggedIn?Object(a.jsx)(V,{logout:function(){return e.userLogin()},username:this.state.username}):Object(a.jsx)(m,{userLogin:function(t){return e.userLogin(t)}})})}}]),s}(c.a.Component),X=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,72)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),c(e),r(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(Q,{})}),document.getElementById("root")),X()}},[[69,1,2]]]);
//# sourceMappingURL=main.270f00e8.chunk.js.map