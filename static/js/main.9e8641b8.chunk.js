(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),s=n(13),r=n.n(s),a=(n(22),n(23),n(6)),c=n(0),l=function(e){return Object(c.jsx)(a.b,{to:"/pokedex/"+e.type,children:Object(c.jsx)("div",{className:"typelink",children:e.type})})},m=function(e){return Object(c.jsxs)("div",{className:"filter-box",children:[Object(c.jsx)("h2",{children:"Pokemon Type"}),e.types.map((function(e){return Object(c.jsx)(l,{type:e},e)}))]})},p=n(3),d=function(e){return Object(c.jsx)(a.b,{to:"/pokedex/"+e.pokemon.name,children:Object(c.jsxs)("div",{className:"pokemon-cont",children:[Object(c.jsx)("img",{src:e.pokemon.img,alt:e.pokemon.name}),Object(c.jsx)("p",{children:e.pokemon.name})]})})},h=function(e){return Object(c.jsxs)("div",{className:"filter-display",children:[Object(c.jsxs)(p.a,{exact:!0,path:"/pokedex",children:[Object(c.jsx)("h3",{children:"All Pokemons"}),Object(c.jsx)("div",{className:"filter-sub-display",children:e.pokemons.map((function(e){return Object(c.jsx)(d,{pokemon:e},e.ntnlnum)}))})]}),e.types.map((function(t){return Object(c.jsxs)(p.a,{path:"/pokedex/"+t,children:[Object(c.jsx)("h3",{className:t,children:t+" Pokemons"}),Object(c.jsx)("div",{className:"filter-sub-display",children:"All"!==t?e.pokemons.filter((function(e){return e.types.findIndex((function(e){return e===t}))>=0})).map((function(e){return Object(c.jsx)(d,{pokemon:e},e.ntnlnum)})):e.pokemons.map((function(e){return Object(c.jsx)(d,{pokemon:e},e.ntnlnum)}))})]},t)}))]})},g=Object(p.e)((function(e){return Object(c.jsxs)("div",{className:"pokemon-details",children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:e.pokemon.img,alt:e.pokemon.name})}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:1*e.pokemon.ntnlnum.match(/\d+/g)[0]}),Object(c.jsx)("div",{children:e.pokemon.name}),Object(c.jsx)("div",{children:e.pokemon.description}),e.pokemon.types.map((function(e){return Object(c.jsx)(a.b,{to:"/pokedex/"+e,children:Object(c.jsx)("div",{className:e+" typebox",children:e})},e)}))]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:e.history.goBack,children:"Back"})})]})]})})),u=n.p+"static/media/pokeball.6c6b4cb9.png",b=function(){var e=[{name:"Bulbasaur",ntnlnum:"#001",img:"https://img.pokemondb.net/artwork/vector/large/bulbasaur.png",types:["Grass","Poison"],description:"There is a plant seed on its back right from the day this Pok\xe9mon is born. The seed slowly grows larger."},{name:"Ivysaur",ntnlnum:"#002",img:"https://img.pokemondb.net/artwork/vector/large/ivysaur.png",types:["Grass","Poison"],description:"When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs."},{name:"Venusaur",ntnlnum:"#003",img:"https://img.pokemondb.net/artwork/vector/large/venusaur.png",types:["Grass","Poison"],description:"Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."},{name:"Charmander",ntnlnum:"#004",img:"https://img.pokemondb.net/artwork/vector/large/charmander.png",types:["Fire"],description:"It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail."},{name:"Charmeleon",ntnlnum:"#005",img:"https://img.pokemondb.net/artwork/vector/large/charmeleon.png",types:["Fire"],description:"It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws."},{name:"Charizard",ntnlnum:"#006",img:"https://img.pokemondb.net/artwork/vector/large/charizard.png",types:["Fire","Flying"],description:"It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames."},{name:"Squirtle",ntnlnum:"#007",img:"https://img.pokemondb.net/artwork/vector/large/squirtle.png",types:["Water"],description:"When it retracts its long neck into its shell, it squirts out water with vigorous force."},{name:"Caterpie",ntnlnum:"#010",img:"https://img.pokemondb.net/artwork/vector/large/caterpie.png",types:["Bug"],description:"For protection, it releases a horrible stench from the antenna on its head to drive away enemies."},{name:"Pidgey",ntnlnum:"#016",img:"https://img.pokemondb.net/artwork/vector/large/pidgey.png",types:["Normal","Flying"],description:"Very docile. If attacked, it will often kick up sand to protect itself rather than fight back."},{name:"Pidgeotto",ntnlnum:"#017",img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",types:["Normal","Flying"],description:"This Pok\xe9mon is full of vitality. It constantly flies around its large territory in search of prey."},{name:"Pidgeot",ntnlnum:"#018",img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",types:["Normal","Flying"],description:"This Pok\xe9mon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons."},{name:"Rattata",ntnlnum:"#019",img:"https://img.pokemondb.net/artwork/vector/large/rattata.png",types:["Normal"],description:"Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area."},{name:"Arbok",ntnlnum:"#024",img:"https://img.pokemondb.net/artwork/vector/large/arbok.png",types:["Poison"],description:"The frightening patterns on its belly have been studied. Six variations have been confirmed."},{name:"Pikachu",ntnlnum:"#025",img:"https://img.pokemondb.net/artwork/vector/large/pikachu-alt2.png",types:["Electric"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy."},{name:"Sandshrew",ntnlnum:"#027",img:"https://img.pokemondb.net/artwork/vector/large/sandshrew.png",types:["Ground"],description:"It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pok\xe9mon rids itself of dirt and moisture clinging to its body."},{name:"Mankey",ntnlnum:"#056",img:"https://img.pokemondb.net/artwork/vector/large/mankey.png",types:["Fighting"],description:"An agile Pok\xe9mon that lives in trees. It angers easily and will not hesitate to attack anything."},{name:"Poliwrath",ntnlnum:"#062",img:"https://img.pokemondb.net/artwork/vector/large/poliwrath.png",types:["Water","Fighting"],description:"Its body is solid muscle. When swimming through cold seas, Poliwrath uses its impressive arms to smash through drift ice and plow forward."},{name:"Geodude",ntnlnum:"#074",img:"https://img.pokemondb.net/artwork/vector/large/geodude.png",types:["Rock","Ground"],description:"Commonly found near mountain trails and the like. If you step on one by accident, it gets angry."},{name:"Magnemite",ntnlnum:"#081",img:"https://img.pokemondb.net/artwork/vector/large/magnemite.png",types:["Electric","Steel"],description:"At times, Magnemite runs out of electricity and ends up on the ground. If you give batteries to a grounded Magnemite, it\u2019ll start moving again."},{name:"Cloyster",ntnlnum:"#091",img:"https://img.pokemondb.net/artwork/vector/large/cloyster.png",types:["Water","Ice"],description:"Its shell is extremely hard. It cannot be shattered, even with a bomb. The shell opens only when it is attacking."},{name:"Scyther",ntnlnum:"#123",img:"https://img.pokemondb.net/artwork/vector/large/scyther.png",types:["Bug","Flying"],description:"As Scyther fights more and more battles, its scythes become sharper and sharper. With a single slice, Scyther can fell a massive tree."},{name:"Omanyte",ntnlnum:"#138",img:"https://img.pokemondb.net/artwork/vector/large/omanyte.png",types:["Rock","Water"],description:"Because some Omanyte manage to escape after being restored or are released into the wild by people, this species is becoming a problem."},{name:"Aerodactyl",ntnlnum:"#142",img:"https://img.pokemondb.net/artwork/vector/large/aerodactyl.png",types:["Flying"],description:"This is a ferocious Pok\xe9mon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen."},{name:"Articuno",ntnlnum:"#144",img:"https://img.pokemondb.net/artwork/vector/large/articuno.png",types:["Ice","Flying"],description:"It\u2019s said that this Pok\xe9mon\u2019s beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it."},{name:"Forretress",ntnlnum:"#205",img:"https://img.pokemondb.net/artwork/vector/large/forretress.png",types:["Bug","Steel"],description:"When something approaches it, it fires off fragments of its steel shell in attack. This is not a conscious action but a conditioned reflex."}],t=["All","Normal","Fire","Water","Electric","Grass","Ice","Fighting","Poison","Ground","Flying","Bug","Rock","Steel"];return Object(c.jsxs)("div",{className:"main-box",children:[Object(c.jsx)(a.b,{to:"/pokedex/all",children:Object(c.jsxs)("div",{className:"logo-div",children:[Object(c.jsx)("img",{src:u,alt:"pokeball"}),Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:"https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Logo.png",alt:"pokemon logo"})})]})}),Object(c.jsx)(m,{types:t,pokemons:e}),Object(c.jsxs)("div",{className:"display-box",children:[Object(c.jsx)(h,{types:t,pokemons:e}),e.map((function(e){return Object(c.jsx)(p.a,{path:"/pokedex/"+e.name,children:Object(c.jsx)(g,{pokemon:e,type:null},e.name)},e.name)}))]}),Object(c.jsxs)("div",{className:"sources",children:["Icons made by ",Object(c.jsx)("a",{href:"https://www.flaticon.com/authors/those-icons",title:"Those Icons",children:" Those Icons"})," from ",Object(c.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]})},k=n(11);var y=function(){return Object(c.jsx)(a.a,{children:Object(c.jsxs)(k.b,{children:[Object(c.jsx)(k.a,{children:Object(c.jsx)("title",{children:"Pokedex"})}),Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(p.a,{path:"/pokedex",children:Object(c.jsx)(b,{})})})]})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),o(e),i(e),s(e),r(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),j()}},[[33,1,2]]]);
//# sourceMappingURL=main.9e8641b8.chunk.js.map