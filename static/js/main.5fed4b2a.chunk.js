(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{29:function(e,t,a){},31:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(21),c=a.n(s),r=a(9),o=(a(29),a(14)),l=a(2),u=a(3),d=a(5),j=a(4),h=a(6),b="user",m=function(e){return localStorage.setItem(b,JSON.stringify(e))},p=function(e){return function(t){setTimeout((function(){t(e)}),1500)}},f=function(){return new Promise((function(e){var t=JSON.parse(localStorage.getItem(b));null===t&&(t={}),p(t)(e)}))},O=function(e){return new Promise((function(t){m(Object(o.a)(Object(o.a)({},{name:"",email:"",image:"",description:""}),e)),p("OK")(t)}))},g=function(e){return new Promise((function(t){m(Object(o.a)({},e)),p("OK")(t)}))},v=a(0),x=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.classe;return Object(v.jsx)("p",{className:e,children:"Carregando..."})}}]),a}(i.a.Component),N=x,k=(a(31),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={userName:"",loading:!1,redirect:!1},e.handleChange=function(t){var a=t.target.value;e.setState({userName:a})},e.onClickButtonEntrar=function(){e.setState({loading:!0});var t=e.state.userName;O({name:t}).then((function(t){"OK"===t&&e.setState({redirect:!0})}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.userName,a=e.loading,n=e.redirect,i=Object(v.jsxs)("div",{className:"login-page",children:[Object(v.jsxs)("div",{className:"titles",children:[Object(v.jsxs)("div",{className:"title-image-login-container",children:[Object(v.jsx)("span",{className:"title-1",children:"Trybe"}),Object(v.jsx)("img",{className:"titleImageLogin",src:"https://cdn.pixabay.com/photo/2017/02/27/20/48/headphones-2104207_960_720.png",alt:"Imagem de fone"})]}),Object(v.jsx)("span",{className:"title-2",children:"Tunes"})]}),Object(v.jsxs)("form",{className:"form-login",children:[Object(v.jsx)("input",{className:"input-login",type:"text",placeholder:"Digite seu nome","data-testid":"login-name-input",onChange:this.handleChange}),Object(v.jsx)("button",{className:"button-login",style:{backgroundColor:t.length<3?"red":"blue"},type:"button","data-testid":"login-submit-button",disabled:t.length<3,onClick:this.onClickButtonEntrar,children:"Entrar"})]})]});return Object(v.jsxs)("div",{"data-testid":"page-login",children:[a?Object(v.jsx)(N,{classe:"loading-login-page"}):i,n&&Object(v.jsx)(h.a,{to:"/search"})]})}}]),a}(i.a.Component)),y=k,C=(a(40),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={loading:!0,userName:"",userImage:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){t!=={}&&e.setState({loading:!1,userName:t.name,userImage:t.image})}))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.userName,n=e.userImage,i=Object(v.jsxs)("div",{className:"userComponent",children:[Object(v.jsx)("img",{className:"userImage",src:""===n?"https://cdn.pixabay.com/photo/2021/07/25/08/03/account-6491185_960_720.png":n,alt:"avatar de profile"}),Object(v.jsx)("p",{children:a})]});return Object(v.jsxs)("header",{"data-testid":"header-component",children:[Object(v.jsxs)("div",{className:"userContainer","data-testid":"header-user-name",children:[Object(v.jsxs)("div",{className:"tiltes-header",children:[Object(v.jsx)("span",{className:"title-header-1",children:"Trybe"}),Object(v.jsx)("span",{className:"title-header-2",children:"Tunes"}),Object(v.jsx)("img",{className:"titleImage",src:"https://cdn.pixabay.com/photo/2017/02/27/20/48/headphones-2104207_960_720.png",alt:"Imagem de fone"})]}),t?Object(v.jsx)(N,{classe:"header-user-loading"}):i]}),Object(v.jsxs)("nav",{className:"links",children:[Object(v.jsx)(r.b,{className:"searchLink",to:"/search","data-testid":"link-to-search",children:"Pesquisar"}),Object(v.jsx)(r.b,{className:"favoritesLink",to:"/favorites","data-testid":"link-to-favorites",children:"Favoritos"}),Object(v.jsx)(r.b,{className:"profileLink",to:"/profile","data-testid":"link-to-profile",children:"Perfil"})]})]})}}]),a}(i.a.Component)),S=C,L=(a(41),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return this.props.albums.map((function(e){return Object(v.jsx)(r.b,{className:"link",to:"/album/".concat(e.collectionId),"data-testid":"link-to-album-".concat(e.collectionId),children:Object(v.jsxs)("div",{className:"album-card",children:[Object(v.jsx)("img",{src:e.artworkUrl100,alt:"capa do album"}),Object(v.jsx)("h3",{children:e.collectionName}),Object(v.jsx)("h4",{children:e.artistName}),Object(v.jsx)("h4",{children:"$".concat(e.collectionPrice)})]})},e.collectionId)}))}}]),a}(i.a.Component)),I=L,w=a(15),A=a.n(w),F=a(17),D=function(){var e=Object(F.a)(A.a.mark((function e(t){var a,n,i,s,c,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=encodeURI(t).replaceAll("%20","+"),n="https://itunes.apple.com/search?entity=album&term=".concat(a,"&attribute=allArtistTerm"),e.next=4,fetch(n);case 4:return i=e.sent,e.next=7,i.json();case 7:return s=e.sent,c=s.results,r=c.map((function(e){return{artistId:e.artistId,artistName:e.artistName,collectionId:e.collectionId,collectionName:e.collectionName,collectionPrice:e.collectionPrice,artworkUrl100:e.artworkUrl100,releaseDate:e.releaseDate,trackCount:e.trackCount}})),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=D,B=(a(43),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={inputArtist:"",albums:[],loading:!1,artistName:"",isAlbumFound:!0},e.handleChange=function(t){var a=t.target.value;e.setState({inputArtist:a})},e.handleClickSearch=function(){var t=e.state.inputArtist;e.setState({loading:!0},(function(){P(t).then((function(a){return e.setState({albums:a,inputArtist:"",loading:!1,artistName:t,isAlbumFound:0!==a.length})}))}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.inputArtist,a=e.loading,n=e.artistName,i=e.albums,s=e.isAlbumFound,c=Object(v.jsxs)("div",{children:[Object(v.jsxs)("form",{className:"search-form",children:[Object(v.jsx)("input",{value:t,className:"search-input",type:"text","data-testid":"search-artist-input",placeholder:"Nome do Artista/Banda",onChange:this.handleChange}),Object(v.jsx)("button",{onClick:this.handleClickSearch,className:"search-button",style:{backgroundColor:t.length<2?"grey":"blue"},"data-testid":"search-artist-button",type:"button",disabled:t.length<2,children:"Pesquisar"})]}),Object(v.jsxs)("section",{children:[Object(v.jsx)("h2",{className:"section-albums-title",children:"Resultado de \xe1lbuns de: ".concat(n)}),Object(v.jsx)("div",{className:"albums-container",children:s?Object(v.jsx)(I,{albums:i}):Object(v.jsx)("h3",{children:"Nenhum \xe1lbum foi encontrado"})})]})]});return Object(v.jsxs)("div",{"data-testid":"page-search",children:[Object(v.jsx)(S,{}),a?Object(v.jsx)(N,{classe:"loading-search-content"}):c]})}}]),a}(i.a.Component)),E=B,_=function(){var e=Object(F.a)(A.a.mark((function e(t){var a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=_,M=a(12),U=a(24),T="favorite_songs";JSON.parse(localStorage.getItem(T))||localStorage.setItem(T,JSON.stringify([]));var K=function(){return JSON.parse(localStorage.getItem(T))},q=function(e){return localStorage.setItem(T,JSON.stringify(e))},R=function(e){return function(t){setTimeout((function(){t(e)}),500)}},$=function(){return new Promise((function(e){var t=K();R(t)(e)}))},z=function(e){return new Promise((function(t){if(e){var a=K();q([].concat(Object(U.a)(a),[e]))}R("OK")(t)}))},G=function(e){return new Promise((function(t){var a=K();q(a.filter((function(t){return t.trackId!==e.trackId}))),R("OK")(t)}))},H=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!1},e.handleChangeFavorites=function(t){var a=t.trackId,n=e.state[a],i=e.props.setLoading;n?e.setState({isLoading:!0},(function(){G(t).then((function(){i()})).then((function(){return e.setState(Object(M.a)({isLoading:!1},a,!1))}))})):e.setState({isLoading:!0},(function(){z(t).then((function(){$().then((function(t){t.forEach((function(t){var a;e.setState((a={},Object(M.a)(a,t.trackId,!0),Object(M.a)(a,"isLoading",!1),a))}))}))}))}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.favorites.forEach((function(t){e.setState(Object(M.a)({},t.trackId,!0))}))}},{key:"render",value:function(){var e=this,t=this.props.musics,a=this.state.isLoading,n=Object(v.jsx)("ul",{className:"music-list-div",children:t.map((function(t){var a=t.trackId,n=t.trackName,i=t.previewUrl,s=e.state[a];return Object(v.jsxs)("li",{className:"music",children:[Object(v.jsx)("p",{children:"".concat(n)}),Object(v.jsxs)("audio",{"data-testid":"audio-component",src:i,controls:!0,children:[Object(v.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento",Object(v.jsx)("code",{children:"audio"}),"."]}),Object(v.jsxs)("label",{htmlFor:"favoriteCheckbox",children:[Object(v.jsx)("input",{name:a,checked:s,"data-testid":"checkbox-music-".concat(a),id:"favoriteCheckbox",type:"checkbox",onChange:function(){return e.handleChangeFavorites(t)}}),"Favorita"]})]},a)}))});return a?Object(v.jsx)(N,{classe:"musicsList"}):n}}]),a}(i.a.Component),Q=H,V=(a(44),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={musics:[{artworkUrl100:"",collectionName:"",artistName:""}],isLoading:!0,favoriteSongs:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;J(t).then((function(t){e.setState({musics:t})})),$().then((function(t){e.setState({favoriteSongs:t,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.musics,a=e.isLoading,n=e.favoriteSongs,i=Object(v.jsxs)("main",{children:[Object(v.jsxs)("div",{className:"album-info",children:[Object(v.jsx)("img",{src:t[0].artworkUrl100,alt:"capa do album"}),Object(v.jsx)("h3",{"data-testid":"album-name",children:t[0].collectionName}),Object(v.jsx)("h4",{"data-testid":"artist-name",children:t[0].artistName})]}),Object(v.jsx)("div",{className:"musics-container",children:Object(v.jsx)(Q,{setLoading:function(){},favorites:n,musics:t.slice(1)})})]});return Object(v.jsxs)("div",{"data-testid":"page-album",children:[Object(v.jsx)(S,{}),a?Object(v.jsx)(N,{classe:"musics-list-loading"}):i]})}}]),a}(i.a.Component)),W=V,X=(a(45),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,favorites:[]},e.fetchFavoriteSongs=function(){$().then((function(t){e.setState({isLoading:!1,favorites:t})}))},e.setLoadingFavorites=function(){e.setState({isLoading:!0})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchFavoriteSongs()}},{key:"componentDidUpdate",value:function(){this.fetchFavoriteSongs()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.favorites,n=Object(v.jsxs)("main",{className:"main-favorites",children:[Object(v.jsx)("h1",{className:"favorite-title",children:"Musicas Favoritas"}),Object(v.jsx)(Q,{setLoading:this.setLoadingFavorites,musics:a,favorites:a})]});return Object(v.jsxs)("div",{"data-testid":"page-favorites",children:[Object(v.jsx)(S,{}),t?Object(v.jsx)(N,{classe:"favorites-loading"}):n]})}}]),a}(i.a.Component)),Y=X,Z=(a(46),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,user:{}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){e.setState({isLoading:!1,user:t})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.user,n=Object(v.jsxs)("div",{className:"profile",children:[Object(v.jsxs)("div",{className:"image-link-container",children:[Object(v.jsx)("img",{src:a.image,alt:"foto de perfil","data-testid":"profile-image"}),Object(v.jsx)(r.b,{className:"link-edit-profile",to:"/profile/edit",children:"Editar perfil"})]}),Object(v.jsxs)("div",{className:"user-info",children:[Object(v.jsx)("h3",{children:"Nome"}),Object(v.jsx)("h2",{children:a.name})]}),Object(v.jsxs)("div",{className:"user-info",children:[Object(v.jsx)("h3",{children:"Email"}),Object(v.jsx)("p",{children:a.email})]}),Object(v.jsxs)("div",{className:"user-info",children:[Object(v.jsx)("h3",{children:"Descri\xe7\xe3o"}),Object(v.jsx)("p",{children:a.description})]})]});return Object(v.jsxs)("div",{className:"page-profile","data-testid":"page-profile",children:[Object(v.jsx)(S,{}),Object(v.jsx)("main",{className:"page-profile",children:t?Object(v.jsx)(N,{classe:"loading-profile"}):n})]})}}]),a}(i.a.Component)),ee=Z,te=(a(47),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,isDisabled:!0,redirect:!1,name:"",email:"",description:"",image:""},e.handleChange=function(t){var a=t.target,n=a.value,i=a.name;e.setState(Object(M.a)({},i,n),(function(){return e.checkButton()}))},e.checkButton=function(){var t=e.state,a=t.name,n=t.email;![a,n,t.description,t.image].includes("")&&/\S+@\S+\.\S+/.test(n)?e.setState({isDisabled:!1}):e.setState({isDisabled:!0})},e.onClickButton=function(){var t=e.state,a={name:t.name,email:t.email,description:t.description,image:t.image};e.setState({isLoading:!0},(function(){g(a).then((function(){e.setState({redirect:!0})}))}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){e.setState({isLoading:!1,name:t.name,email:t.email,description:t.description,image:t.image},(function(){return e.checkButton()}))}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.name,n=e.email,i=e.description,s=e.image,c=e.isDisabled,r=e.redirect,o=Object(v.jsxs)("form",{className:"form",children:[Object(v.jsxs)("div",{className:"image-input",children:[Object(v.jsx)("img",{width:"100px",src:""===s?"https://cdn.pixabay.com/photo/2021/07/25/08/03/account-6491185_960_720.png":s,alt:"avatar do usuario"}),Object(v.jsx)("input",{className:"input",type:"text",name:"image",placeholder:"insira um Link","data-testid":"edit-input-image",value:s,onChange:this.handleChange})]}),Object(v.jsxs)("label",{htmlFor:"name-input",className:"input-label",children:["Nome",Object(v.jsx)("input",{className:"input",type:"text",name:"name",id:"name-input","data-testid":"edit-input-name",value:a,onChange:this.handleChange})]}),Object(v.jsxs)("label",{htmlFor:"email-input",className:"input-label",children:["Email",Object(v.jsx)("input",{className:"input",type:"text",name:"email",id:"email-input","data-testid":"edit-input-email",value:n,onChange:this.handleChange})]}),Object(v.jsxs)("label",{htmlFor:"description-input",className:"input-label",children:["Descri\xe7\xe3o",Object(v.jsx)("input",{className:"input",type:"textarea",name:"description",id:"description-input","data-testid":"edit-input-description",value:i,onChange:this.handleChange})]}),Object(v.jsx)("button",{style:{backgroundColor:c?"red":"blue"},"data-testid":"edit-button-save",type:"button",disabled:c,onClick:this.onClickButton,children:"Salvar"})]});return Object(v.jsxs)("div",{"data-testid":"page-profile-edit",children:[Object(v.jsx)(S,{}),Object(v.jsxs)("main",{children:[t?Object(v.jsx)(N,{classe:"loading-edit-profile"}):o,r&&Object(v.jsx)(h.a,{to:"/profile"})]})]})}}]),a}(i.a.Component)),ae=te,ne=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{"data-testid":"page-not-found",children:"Pagina n\xe3o encontrada"})}}]),a}(i.a.Component),ie=ne,se=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsxs)(h.d,{children:[Object(v.jsx)(h.b,{path:"/album/:id",render:function(e){return Object(v.jsx)(W,Object(o.a)({},e))}}),Object(v.jsx)(h.b,{path:"/profile/edit",component:ae}),Object(v.jsx)(h.b,{path:"/profile",component:ee}),Object(v.jsx)(h.b,{path:"/favorites",component:Y}),Object(v.jsx)(h.b,{path:"/search",component:E}),Object(v.jsx)(h.b,{exact:!0,path:"/",component:y}),Object(v.jsx)(h.b,{path:"*",component:ie})]})})}}]),a}(i.a.Component),ce=se;c.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(r.a,{children:Object(v.jsx)(ce,{})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.5fed4b2a.chunk.js.map