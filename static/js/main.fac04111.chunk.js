(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Kakashi","image":"https://vignette.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest/scale-to-width-down/340?cb=20170628120149","count":0},{"id":2,"name":"Naruto","image":"https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest/scale-to-width-down/340?cb=20170621101134","count":0},{"id":3,"name":"Sauske","image":"https://vignette.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest/scale-to-width-down/340?cb=20170716092103","count":0},{"id":4,"name":"Boruto","image":"https://vignette.wikia.nocookie.net/naruto/images/b/bd/Boruto_uzumaki.png/revision/latest/scale-to-width-down/340?cb=20150416123755","count":0},{"id":5,"name":"Luffy","image":"https://vignette.wikia.nocookie.net/onepiece/images/6/6d/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/340?cb=20190124235416","count":0},{"id":6,"name":"Tanjiro","image":"https://vignette.wikia.nocookie.net/kimetsu-no-yaiba/images/c/c7/Tanjiro_anime_design.png/revision/latest/smart/width/400/height/225?cb=20181128204204","count":0},{"id":7,"name":"Goku","image":"https://vignette.wikia.nocookie.net/deathbattlefanon/images/2/20/C0A9B238-91F6-46AA-ABDC-3FC720228C25.png/revision/latest/scale-to-width-down/340?cb=20171104014554","count":0},{"id":8,"name":"Meliodas","image":"https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/2/2e/Meliodas_Anime_Season_3_Design.png/revision/latest/scale-to-width-down/340?cb=20190809210953","count":0},{"id":9,"name":"Kirito","image":"https://www.anime-planet.com/images/characters/kirito-30045.jpg","count":0},{"id":10,"name":"Pikachu","image":"https://vignette.wikia.nocookie.net/school-daze/images/4/4c/Pikachu-PNG-HD.png/revision/latest?cb=20171110150156","count":0},{"id":11,"name":"Charizard","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png","count":0},{"id":12,"name":"Mew-Two","image":"https://vignette.wikia.nocookie.net/omniversal-battlefield/images/d/d3/Mewtwo.png/revision/latest/scale-to-width-down/340?cb=20181219025349","count":0}]')},,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(3),c=n.n(o),s=n(4),r=n(5),m=n(7),l=n(6),u=n(8),d=(n(14),function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.clickObj(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))}),g=(n(15),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),h=(n(16),function(e){return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"scores"},"Score: ",e.score,"  |  Highscore: ",e.highscore))}),k=(n(17),function(){return i.a.createElement("div",{className:"jumbotron jumbotron-fluid text-center"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-8 offset-md-2 offset-md-right-2"},i.a.createElement("h1",null," Clicky Game! "),i.a.createElement("h1",null,"Click on an image to earn points, but don't click on any more than once!")))))}),p=n(1),w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={cards:p,score:0,highscore:0},n.wrongClick=function(){return n.state.score>n.state.highscore&&n.setState({highscore:n.state.score},(function(){console.log(this.state.highscore)})),n.state.cards.forEach((function(e){e.count=0})),alert("Game Over! Play again! \nYour Score: ".concat(n.state.score)),n.setState({score:0}),!0},n.clickObj=function(e){n.state.cards.find((function(t,a){if(t.id===e){if(0===p[a].count)return p[a].count=p[a].count+1,n.setState({score:n.state.score+1},(function(){console.log(this.state.score)})),n.state.cards.sort((function(){return Math.random()-.5})),!0;n.wrongClick()}}))},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(g,null,i.a.createElement(h,{score:this.state.score,highscore:this.state.highscore},"Clicky Game"),i.a.createElement(k,null),this.state.cards.map((function(t){return i.a.createElement(d,{clickObj:e.clickObj,id:t.id,key:t.id,image:t.image})})))}}]),t}(i.a.Component);c.a.render(i.a.createElement(w,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.fac04111.chunk.js.map