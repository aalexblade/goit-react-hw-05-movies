"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[588],{588:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r,i,a=t(439),c=t(689),s=t(520),l=t(791),o=t(763),f=t(168),d=t(444),p=d.ZP.ul(r||(r=(0,f.Z)(["\n  /* display: flex;\n  gap: 5px; */\n\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n  gap: 0px 5px;\n  grid-auto-flow: row;\n  grid-template-areas: '. . . . . . . .';\n"]))),h=(d.ZP.li(i||(i=(0,f.Z)(["\n  /* height: 100%; */\n  display: flex;\n  flex-direction: column;\n\n  /* min-width: calc((1200px) / 9); */\n  /* min-width: calc((100% - 40px) / 9); */\n\n  /* flex-basis: calc((100% - 40px) / 9); */\n  /* flex-grow: 0;\n  flex-shrink: 0; */\n"]))),t(184)),m=function(){var n=(0,c.UO)().movieId,e=(0,l.useState)([]),t=(0,a.Z)(e,2),r=t[0],i=t[1];return(0,l.useEffect)((function(){try{(0,s.zv)(n).then((function(n){return i(n.cast.splice(0,8))}))}catch(e){console.log(e)}}),[n]),(0,h.jsx)(h.Fragment,{children:(0,o.isEmpty)(r)?(0,h.jsx)("p",{children:"We don't have any information about cast for this movie"}):(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(p,{children:r.map((function(n){var e="";return e=n.profile_path?"https://image.tmdb.org/t/p/w500/".concat(n.profile_path):"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg",(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{src:e,alt:"".concat(n.name)}),(0,h.jsx)("p",{children:n.name}),(0,h.jsx)("em",{children:n.character})]},n.id)}))})})})}}}]);
//# sourceMappingURL=588.6417ebad.chunk.js.map