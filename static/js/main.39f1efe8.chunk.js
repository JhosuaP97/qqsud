(this.webpackJsonpqqsud=this.webpackJsonpqqsud||[]).push([[0],[,,,,,,,function(e,a){e.exports={eventos:[{id:0,driver:"Para el 2030 los ovnis vendran a la tierra y la emoci\xf3n por descubrir vida en otros planetas ser\xe1 tan grande que todos querran viajar al espacio."},{id:1,driver:"En el 2030 escasearan los recursos, no habr\xe1 barrio ni ciudad ni pueblo que no sea saqueada y robada por la falta de recursos."},{id:2,driver:"Para el 2030 el viaje en naves espaciales ser\xe1 tan com\xfan como el viaje en autobus, taxi o bicicleta."},{id:3,driver:"Para el 2030 todas las fuentes de energ\xeda fosil se habr\xe1n agotado, haciendo que la econom\xeda caiga considerablemente y dejemos de ser dependientes del petroleo."},{id:4,driver:"Para el 2030 las palomas de las ciudades y pueblos se habr\xe1n extinguido al ser catalogadas como plaga."},{id:5,driver:"Para el 2030 las personas comenzaran a contemplar las predicciones de profetas que se encuentren en las redes sociales."},{id:6,driver:"Para el 2030 los videojuegos pasaran a ser una modalidad interaccion social mediante la virtualidad, la manera en la que nos comunicamos por internet pasara a ser mediante realidad virtual."},{id:7,driver:"Para el 2030 se podr\xe1 aprobar el aborto por telemedicina."},{id:8,driver:"Para el 2030 con el aumento de las enfermedades las personas comenzaran a contemplar la probabilidad de irse a vivir al campo."},{id:9,driver:"Para el 2030 el aumento de personas en cuarentena har\xe1 que la compra de pantalones disminuya considerablemente."},{id:10,driver:"Para el 2030 la inteligencia artificial reemplazar\xe1 a los artistas, de esta manera las canciones ser\xe1n creadas a partir del promedio de gusto de las personas."},{id:11,driver:"Para el 2030 la modalidad de teletrabajo ser\xe1 m\xe1s com\xfan, las personas optaran por trabajar desde la comodidad de sus hogares."},{id:12,driver:"Para el 2030 la inteligencia artificial har\xe1 parte de sistemas de seguridad sanitaria en los trabajos con el proposito de preveer contagios de enfermedades."},{id:13,driver:"Para el 2030 los empleadores implementaran sistemas de ayuda para empleados, haciendo que las compa\xf1ias se vean forzadas a considerar el bienestar de sus empleados de una manera m\xe1s holistica."},{id:14,driver:"Para el 2030 la aptitud de liderazgo habr\xe1 mejorado, los lideres ahora son cada vez mas calmados y fuertes, demostrando empat\xeda y pensamiento a largo tiempo y tomando decisiones apropiadas para afrontar una acci\xf3n."},{id:15,driver:"Para el 2030 las relaciones con los compa\xf1eros de trabajo van a mejorar."},{id:16,driver:"Para el 2030 el apoyo a la salud mental ser\xe1 acogido, se buscar\xe1 combatir la depresion, ansiedad y otros problemas de salud mental."},{id:17,driver:"Para el 2030 las personas se van a sentir m\xe1s comodos con la tecnolog\xeda"},{id:18,driver:"Para el 2030 la industria de la impresi\xf3n 3D tomar\xe1 aun m\xe1s protagonismo en la industria de la salud, permitiendo imprimir herramientas para ayudar a las personas con mayor facilidad."},{id:19,driver:"Para el 2030 la inteligencia artificial ser\xe1 participe en la deteccion de personas enfermas para prevenir proximas pandemias."}]}},function(e,a,r){e.exports=r(17)},,,,,function(e,a,r){},function(e,a,r){},function(e,a,r){},function(e,a,r){},function(e,a,r){"use strict";r.r(a);var n=r(0),t=r.n(n),o=r(6),s=r.n(o),i=(r(13),r(1)),l=r(2),d=r(4),c=r(3),m=(r(14),r(15),function(e){e.eventTitle;var a=e.eventDesc;return t.a.createElement("div",{className:"o-card"},t.a.createElement("div",{className:"o-titleCard"},t.a.createElement("h1",null,"Evento")),t.a.createElement("div",{className:"o-descCard"},a))}),u=(r(16),{FIEL:"/img/crecimiento.svg",DESERTOR:"/img/colapso.svg",CONFIANZA:"/img/transformacion.svg",DISCIPLINA:"/img/adaptacion.svg"}),p=function(e){return u[e]?u[e]:""},v=function(e){var a=e.behaTitle,r=(e.behaName,e.stateIcon);return t.a.createElement("div",{className:"o-behave"},t.a.createElement("div",{className:"o-behaveimg"},t.a.createElement("h3",null,"Comportamiento:"),t.a.createElement("h3",null,a),t.a.createElement("img",{src:p(r),alt:p(r)})))},h=function(e){Object(d.a)(r,e);var a=Object(c.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=a.call(this,e)).state={minutes:5,seconds:0},n}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.myInterval=setInterval((function(){var a=e.state,r=a.seconds,n=a.minutes,t=e.props.start;e.setState({start:!1,restart:!1}),t?(r>0&&e.setState((function(e){return{seconds:e.seconds-1}})),0===r&&(0===n?clearInterval(e.myInterval):e.setState((function(e){return{minutes:e.minutes-1,seconds:59}})))):console.log("No he iniciado, presiona en el bot\xf3n para empezar")}),1e3)}},{key:"render",value:function(){var e=this.state,a=e.minutes,r=e.seconds;return t.a.createElement("div",{className:"o-timer"},0===a&&0===r?t.a.createElement("h2",null,"\xa1Tiempo!"):t.a.createElement("h4",null,"Tiempo restante: ",a,":",r<10?"0".concat(r):r))}}]),r}(n.Component),b=r(7),f=function(e){Object(d.a)(r,e);var a=Object(c.a)(r);function r(){var e;return Object(i.a)(this,r),(e=a.call(this)).state={random:"",random2:"",eventos:b.eventos,comportamientos:["FIEL","DESERTOR","CONFIANZA","DISCIPLINA"],comp:"",start:!1,play:!1},e}return Object(l.a)(r,[{key:"handleEvent",value:function(e){return Object.values(e[Math.floor(Math.random()*e.length)])}},{key:"handelRandom",value:function(){for(var e=this.state,a=e.eventos,r=e.comportamientos,n=this.handleEvent(a),t=this.handleEvent(a),o=r[Math.floor(Math.random()*r.length)];n[0]===t[0];)t=this.handleEvent(a);this.setState({random:n,random2:t,comp:o,start:!0,play:!0})}},{key:"render",value:function(){var e=this,a=this.state,r=a.random,n=a.random2,o=a.comp,s=a.start,i=a.play;return t.a.createElement("div",{className:"o-container"},t.a.createElement("h1",null,"\xbfQui\xe9n quiere ser un Dios?"),t.a.createElement(h,{start:s}),i?t.a.createElement("div",null,t.a.createElement(v,{stateIcon:o,behaTitle:o}),t.a.createElement("div",{className:"o-cards"},t.a.createElement(m,{eventDesc:r[1]}),t.a.createElement(m,{eventDesc:n[1]}))):t.a.createElement("h1",{className:"o-play"},"\xbfTe atreves a jugar?"),t.a.createElement("button",{onClick:function(){return e.handelRandom()}},"\xa1Jugar!"))}}]),r}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.39f1efe8.chunk.js.map