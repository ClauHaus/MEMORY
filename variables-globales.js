/*-----------------------VARIABLES-GLOBALES--------------------------------*/
var grupoTarjetas1 = ["🦄", /*"🍦"*/, "🌈", "👽", "👾", "🤖", "👹", /*"👺"*/];
var grupoTarjetas2 = ["🐲", "🍜", "👻", /*"🍾"*/, "🙊", "👑", "🍖", /*"🗽"*/];

var totalTarjetas1 = grupoTarjetas1.concat(grupoTarjetas1);
var totalTarjetas2 = grupoTarjetas2.concat(grupoTarjetas2);
var totalTarjetas = totalTarjetas1.concat(totalTarjetas2);
var contadorAcierto = 0;
var contadorError = 0;

var start = document.getElementById("start");
var comienzo = document.getElementById("comienzo");
var juego = document.getElementById("juego");
var prueba = document.getElementById("prueba");

/*-----------------------BARAJA-REPARTE--------------------------------*/
function barajaTarjetas() {
    var resultado;
    resultado = totalTarjetas.sort(function() {
      return 0.5 - Math.random();
    });
    return resultado;
  }
  
  function reparteTarjetas() {
    var mesa = document.querySelector("#mesa");
    var tarjetasBarajadas = barajaTarjetas();
    mesa.innerHTML = "";
  
    tarjetasBarajadas.forEach(function(elemento) {
      var tarjeta = document.createElement("div");
  
      tarjeta.innerHTML =
        "<div class='tarjeta' data-valor= " +  //data-any = dataset  
        elemento +
        ">" +
        "<div class='tarjeta__contenido'>" +
        elemento +
        "</div>" +
        "</div>";
  
      mesa.appendChild(tarjeta);
    });
  }
  /*-----------------------DESCUBRIR-COMPARAR--------------------------------*/
  function descubrir() {
    var descubiertas;
    var totalDescubiertas = document.querySelectorAll(
      ".descubierta:not(.acertada)"
    );
  
    if (totalDescubiertas.length > 1) {
      return;
    }
  
    this.classList.add("descubierta");
  
    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    if (descubiertas.length < 2) {
      return;
    }
  
    comparar(descubiertas);
  }
  
  function comparar(tarjetasAComparar) {
  if (tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor) {
      acierto(tarjetasAComparar);
  } else {
      error(tarjetasAComparar);
  }
  }
  /*-----------------------ACIERTO-ERRORES--------------------------------*/
  espanol.addEventListener("click", function(){
    var memory = document.querySelector("h1");
    memory.innerHTML = "MEMORIA";
    titulo1.innerHTML = "ACIERTOS";
    titulo2.innerHTML = "ERRORES";
    baraja.innerHTML = "BARAJAR"
    reinicio.innerHTML = "REINICIAR"
    cuadro1.style.display = "block";
    cuadro2.style.display = "none";
    cuadro3.style.display = "none";
    espanol.innerHTML = "ESPAÑOL";
    english.innerHTML = "INGLES";
    deutsch.innerHTML = "ALEMAN";
    espanol.style.backgroundColor = "black";
    english.style.backgroundColor = "black";
    deutsch.style.backgroundColor = "black";
    aciertos.innerHTML = "0";
    errores.innerHTML = "0";
    seleccion.style.display ="none";
  });
  english.addEventListener("click", function(){
    var memory = document.querySelector("h1");
    memory.innerHTML = "MEMORY";
    titulo1.innerHTML = "HITS";
    titulo2.innerHTML = "ERRORS";
    baraja.innerHTML = "SHUFFLE";
    reinicio.innerHTML = "RESTART"
    cuadro1.style.display = "none";
    cuadro2.style.display = "block";
    cuadro3.style.display = "none";
    espanol.innerHTML = "SPANISH";
    english.innerHTML = "ENGLISH";
    deutsch.innerHTML = "GERMAN";
    espanol.style.backgroundColor = "black";
    english.style.backgroundColor = "black";
    deutsch.style.backgroundColor = "black";
    aciertos.innerHTML = "0";
    errores.innerHTML = "0";
    seleccion.style.display ="none";
  });
  deutsch.addEventListener("click", function(){
    var memory = document.querySelector("h1");
    memory.innerHTML = "MEMORY";
    titulo1.innerHTML = "TREFFER";
    titulo2.innerHTML = "FEHLER";
    baraja.innerHTML = "MISCHEN"
    reinicio.innerHTML = "ZURÜCKSETZEN"
    cuadro1.style.display = "none";
    cuadro2.style.display = "none";
    cuadro3.style.display = "block";
    espanol.innerHTML = "SPANISCH";
    english.innerHTML = "ENGLISCH";
    deutsch.innerHTML = "DEUTSCH";
    espanol.style.backgroundColor = "black";
    english.style.backgroundColor = "black";
    deutsch.style.backgroundColor = "black";
    aciertos.innerHTML = "0";
    errores.innerHTML = "0";
    seleccion.style.display ="none";
  });
  //var contadorAcierto = 0; Son variables globales (si se "encierran" en su funcion no funcionan )
  //var contadorError = 0;
  
  function acierto(lasTarjetas) {
    lasTarjetas.forEach(function(elemento){
    elemento.classList.add("acertada");
    });
  
    var okey = document.querySelector(".okey");
    var reinicio = document.getElementById("reinicio");
    var aciertos = document.getElementById("aciertos");
    contadorAcierto++;
    aciertos.innerHTML = contadorAcierto;
    okey.style.display = "block";
    var resultado;
  
    if(contadorError >= 1 & cuadro2.style.display == "block") {
      resultado = "are you a bot????? i mean, it's really incredible what you have accomplished, this 🏆 is for you and you deserve it more than anyone, i just cannot believe how great you are";
    } if(contadorError >= 1 & cuadro1.style.display == "block") {
      resultado = "sos un robot????? digo, es realmente impresionante lo que lograste, este 🏆 es para vos y te lo mereces mas que nadie, realmente no puedo creer lo increible que sos";
    } if(contadorError >= 1 & cuadro3.style.display == "block") {
      resultado = "Du bist ein Roboter????? Ich meine, es ist wirklich beeindruckend, was du erreicht haben, diese 🏆 ist für dich und du verdienen sie mehr als jeder andere, ich kann wirklich nicht glauben, wie erstaunlich du bist";
    } if(contadorError >= 4  & cuadro2.style.display == "block") {
      resultado = "that's excellent!!! really great job, this 🥇 here is your award for achieving such a great score, continue being awesome";
    } if(contadorError >= 4 & cuadro1.style.display == "block") {
      resultado = "excelente!!! muy buen trabajo, esta 🥇 es tu recompensa por obtener un resultado increible, continua siendo una persona genial";
    } if(contadorError >= 4 & cuadro3.style.display == "block") {
      resultado = "Sehr gute Arbeit!! diese 🥇 ist deine Belohnung für das Erreichen eines unglaublichen Ergebnisses, weiterhin ein großartiger Mensch zu sein";
    } if(contadorError >= 10 & cuadro2.style.display == "block")  {
      resultado = "that's very good!! you achieved an awesome score and this 🥈 proves it, so you can go and show it off";
    } if(contadorError >= 10 & cuadro1.style.display == "block") {
      resultado = "muy bien!! has logrado un resultado muy bueno y esta 🥈 lo prueba, asi que puedes presumirla";
    } if(contadorError >= 10 & cuadro3.style.display == "block") {
      resultado = "Sehr gut! Du hast ein sehr gutes Ergebnis erzielt, und diese 🥈 beweist es, also kannst du es vorzeigen";
    } if(contadorError >= 15 & cuadro2.style.display == "block") {
      resultado = "that's good! you achieved an average score and this 🥉 proves it";
    } if(contadorError >= 15 & cuadro1.style.display == "block") {
      resultado = "bien! lograste un resultado promedio y esta 🥉 lo prueba";
    } if(contadorError >= 15 & cuadro3.style.display == "block") {
      resultado = "Gut! Du hast ein mittlere Ergebnis erzielt, und dieses 🥉 beweist es.";
    } if(contadorError >= 20 & cuadro2.style.display == "block") {
      resultado = "mmm...ok, here is your 🏅 for playing, i encourage you to try again and see if you can improve your score";
    } if(contadorError >= 20 & cuadro1.style.display == "block") {
      resultado = "mmm...ok, aca esta tu 🏅 por jugar, te aliento a que pruebes de nuevo y veas si podes mejorar tu resultado";
    } if(contadorError >= 20 & cuadro3.style.display == "block") {
      resultado = "mmm....ok, hier ist deine 🏅 für die Teilnahme, ich ermutige dich, es noch einmal zu versuchen und zu sehen, ob du dein Ergebnis verbessern können";
    } if(contadorError >= 25 & cuadro2.style.display == "block" ) {
      resultado = "not that great, you can always try again and see if you can score a better outcome, you get one 👏 as an award, better luck next time";
    } if(contadorError >= 25 & cuadro1.style.display == "block" ) {
      resultado = "no tan bien, siempre podes volver a intentar y ver si conseguis un mejor resultado, te llevas un 👏 como premio, mejor suerte la proxima vez";  
    } if(contadorError >= 25 & cuadro3.style.display == "block" ) {
      resultado = "nicht so gut, du kannst es immer wieder versuchen und sehen, ob du ein besseres Ergebnis erzielen, du erhaltet eine 👏 als Preis, mehr Glück beim nächsten Mal"; 
    } if(contadorError >= 28 & cuadro2.style.display == "block" ) {
      resultado = "you almost didn't make it ... i mean probably seeing that 'danger sign' scared you a bit, here is a 🥔 for trying, better luck next time";
    } if(contadorError >= 28 & cuadro1.style.display == "block" ) {
        resultado = "casi que no lo logras ... me imagino que ver el cartel de 'peligro' te asusto un poco, aca tenes una 🥔 por intentarlo, mejor suerte la proxima vez";
    } if(contadorError >= 28 & cuadro3.style.display == "block" ) {
      resultado = "Du hättest es fast nicht geschafft ... Ich schätze, das 'Gefahr'- Schild hat du ein bisschen erschreckt, hier ist eine 🥔 für den Versuch, mehr Glück beim nächsten Mal";
    }
  
    if(contadorAcierto >= 10 & cuadro2.style.display == "block") {
      okey2.innerHTML = "SO CLOSE!";
      okey2.style.display = "block";
    } if(contadorAcierto >= 10 & cuadro1.style.display == "block") {
        okey2.innerHTML = "CASI!";
        okey2.style.display = "block";
    } if(contadorAcierto >= 10 & cuadro3.style.display == "block") {
      okey2.innerHTML = "FAST DORT!";
      okey2.style.display = "block";
    } if(contadorAcierto >= 11 & cuadro2.style.display == "block") {
      okey3.innerHTML = "JUST ONE MORE! ";
      okey3.style.display = "block";
    } if(contadorAcierto >= 11 & cuadro1.style.display == "block") {
      okey3.innerHTML = "UNO MAS! ";
      okey3.style.display = "block";
    } if(contadorAcierto >= 11 & cuadro3.style.display == "block") {
      okey3.innerHTML = "NUR NOCH EINE! ";
      okey3.style.display = "block";
    } if(contadorAcierto >= 12 & cuadro2.style.display == "block") {
      okey4.innerHTML = "YOU WIN!";
      okey4.style.display = "block";  
      titularSi.style.display = "block";
      okey2.style.display = "none";
      okey3.style.display = "none";
      reinicio.style.display = "block";
      mensajeSi.innerHTML = "You have won, congratz! So let's see now how well you have played. You had " + contadorError + " errors... " + resultado + ". Thank you very much for playing and have a great day!";
      baraja.style.display = "none";
      titular.style.display = "none";
      mesa.style.display = "none";
      contenedorAciertos.style.display = "none";
      contenedorErrores.style.display = "none";
      wrong27.style.display = "none";
      wrong28.style.display = "none";
      wrong29.style.display = "none";
    } if(contadorAcierto >= 12 & cuadro1.style.display == "block") {
      okey4.innerHTML = "GANASTE!";
      okey4.style.display = "block";  
      titularSi.style.display = "block";
      okey2.style.display = "none";
      okey3.style.display = "none";
      reinicio.style.display = "block";
      mensajeSi.innerHTML = "Has ganado, bravo! Veamos ahora que tan bien jugaste. Tuviste " + contadorError + " errores... " + resultado + ". Muchas gracias por haber jugado y que tengas un excelente dia!";
      baraja.style.display = "none";
      titular.style.display = "none";
      mesa.style.display = "none";
      contenedorAciertos.style.display = "none";
      contenedorErrores.style.display = "none";
      wrong27.style.display = "none";
      wrong28.style.display = "none";
      wrong29.style.display = "none";
    } if(contadorAcierto >= 12 & cuadro3.style.display == "block") {
      okey4.innerHTML = "DU GEWINNST!";
      okey4.style.display = "block";  
      titularSi.style.display = "block";
      okey2.style.display = "none";
      okey3.style.display = "none";
      reinicio.style.display = "block";
      mensajeSi.innerHTML = "Du hast gewonnen, herzlichen Glückwunsch! Jetzt wollen wir sehen, wie gut du gespielt haben. Du hattest " + contadorError + " Fehler... " + resultado + ". Vielen Dank fürs Spiel und einen schönen Tag!";
      baraja.style.display = "none";
      titular.style.display = "none";
      mesa.style.display = "none";
      contenedorAciertos.style.display = "none";
      contenedorErrores.style.display = "none";
      wrong27.style.display = "none";
      wrong28.style.display = "none";
      wrong29.style.display = "none";
    }
  };
  
  function error(lasTarjetas) {
    lasTarjetas.forEach(function(elemento){
      elemento.classList.add("error");
      });
  
      var okey = document.getElementById("okey");
      var errores = document.getElementById("errores");
      var reinicio = document.getElementById("reinicio");
      contadorError++;
      errores.innerHTML = contadorError;
      okey.style.display = "none";
      
      if(contadorError >= 1) {
        wrong.innerHTML = "+1";
        wrong.style.display = "block";
      } if(contadorError >= 2) {
        wrong2.innerHTML = "+1";
        wrong2.style.display = "block";
      } if(contadorError >= 3) {
        wrong3.innerHTML = "+1";
        wrong3.style.display = "block";
      } if(contadorError >= 4) {
        wrong4.innerHTML = "+1";
        wrong4.style.display = "block";
      } if(contadorError >= 5) {
        wrong5.innerHTML = "OH ";
        wrong5.style.display = "block";
      } if(contadorError >= 6) {
        wrong6.innerHTML = "+1";
        wrong6.style.display = "block";
      } if(contadorError >= 7) {
        wrong7.innerHTML = "+1";
        wrong7.style.display = "block";
      } if(contadorError >= 8) {
        wrong8.innerHTML = "+1";
        wrong8.style.display = "block";
      } if(contadorError >= 9) {
        wrong9.innerHTML = "+1";
        wrong9.style.display = "block";
      } if(contadorError >= 10 & cuadro2.style.display == "block") {
        wrong10.innerHTML = "C'MON!";
        wrong10.style.display = "block";
      } if(contadorError >= 10 & cuadro1.style.display == "block") {
        wrong10.innerHTML = "DALE!";
        wrong10.style.display = "block";
      } if(contadorError >= 10 & cuadro3.style.display == "block") {
        wrong10.innerHTML = "LOS!";
        wrong10.style.display = "block";
      } if(contadorError >= 11) {
        wrong11.innerHTML = "+1";
        wrong11.style.display = "block";
      } if(contadorError >= 12) {
        wrong12.innerHTML = "+1";
        wrong12.style.display = "block";
      } if(contadorError >= 13) {
        wrong13.innerHTML = "+1";
        wrong13.style.display = "block";
      } if(contadorError >= 14) {
        wrong14.innerHTML = "+1";
        wrong14.style.display = "block";
      } if(contadorError >= 15 & cuadro2.style.display == "block") {
        wrong15.innerHTML = "ALREADY 15?";
        wrong15.style.display = "block";
      } if(contadorError >= 15 & cuadro1.style.display == "block") {
        wrong15.innerHTML = "YA 15?";
        wrong15.style.display = "block";
      } if(contadorError >= 15 & cuadro3.style.display == "block") {
        wrong15.innerHTML = "SCHON 15?";
        wrong15.style.display = "block";
      } if(contadorError >= 16) {
        wrong16.innerHTML = "+1";
        wrong16.style.display = "block";
      } if(contadorError >= 17) {
        wrong17.innerHTML = "+1";
        wrong17.style.display = "block";
      } if(contadorError >= 18) {
        wrong18.innerHTML = "+1";
        wrong18.style.display = "block";
      } if(contadorError >= 19) {
        wrong19.innerHTML = "+1";
        wrong19.style.display = "block";
      } if(contadorError >= 20 & cuadro2.style.display == "block") {
        wrong20.innerHTML = "NOT THAT GREAT";
        wrong20.style.display = "block";
      } if(contadorError >= 20 & cuadro1.style.display == "block") {
        wrong20.innerHTML = "NO TAN GENIAL";
        wrong20.style.display = "block";
      } if(contadorError >= 20 & cuadro3.style.display == "block") {
        wrong20.innerHTML = "NICHT SO GUT";
        wrong20.style.display = "block";
      } if(contadorError >= 21) {
        wrong21.innerHTML = "+1";
        wrong21.style.display = "block";
      } if(contadorError >= 22) {
        wrong22.innerHTML = "+1";
        wrong22.style.display = "block";
      } if(contadorError >= 23) {
        wrong23.innerHTML = "+1";
        wrong23.style.display = "block";
      } if(contadorError >= 24) {
        wrong24.innerHTML = "+1";
        wrong24.style.display = "block";
      } if(contadorError >= 25 & cuadro2.style.display == "block") {
        wrong25.innerHTML = "R U EVEN TRYING?";
        wrong25.style.display = "block";
      } if(contadorError >= 25 & cuadro1.style.display == "block") {
        wrong25.innerHTML = "LO INTENTAS?";
        wrong25.style.display = "block";
      } if(contadorError >= 25 & cuadro3.style.display == "block") {
        wrong25.innerHTML = "VERSUCHST DU?";
        wrong25.style.display = "block";
      } if(contadorError >= 26) {
        wrong26.innerHTML = "+1";
        wrong26.style.display = "block";
      } if(contadorError >= 27 & cuadro2.style.display == "block") {
        wrong27.innerHTML = "DANGER!";
        wrong27.style.display = "block";
      } if(contadorError >= 27 & cuadro1.style.display == "block") {
        wrong27.innerHTML = "PELIGRO!";
        wrong27.style.display = "block";
      } if(contadorError >= 27 & cuadro3.style.display == "block") {
        wrong27.innerHTML = "ACHTUNG!";
        wrong27.style.display = "block";
      } if(contadorError >= 28 & cuadro2.style.display == "block") {
        wrong28.innerHTML = "DANGER!!";
        wrong28.style.display = "block";
      } if(contadorError >= 28 & cuadro1.style.display == "block") {
        wrong28.innerHTML = "PELIGRO!";
        wrong28.style.display = "block";
      } if(contadorError >= 28 & cuadro3.style.display == "block") {
        wrong28.innerHTML = "ACHTUNG!";
        wrong28.style.display = "block";
      } if(contadorError >= 29 & cuadro2.style.display == "block") {
        wrong29.innerHTML = "DANGER!!";
        wrong29.style.display = "block";
      } if(contadorError >= 29 & cuadro1.style.display == "block") {
        wrong29.innerHTML = "PELIGRO!!";
        wrong29.style.display = "block";
      } if(contadorError >= 29 & cuadro3.style.display == "block") {
        wrong29.innerHTML = "ACHTUNG!!";
        wrong29.style.display = "block";
      } if(contadorError >= 30 & cuadro2.style.display == "block") {
        wrong30.innerHTML = "YOU LOSE!";
        wrong30.style.display = "block";
        reinicio.style.display = "block";
        titularNo.style.display = "block";
        mensajeNo.innerHTML = "Sadly, you have lost, you can try again and see what happens if you don't reach 30 errors, yes, 30 errors, those were your numbers. Anyways thanks for playing and have a great day!"
        baraja.style.display = "none";
        titular.style.display = "none";
        mesa.style.display = "none";
        contenedorAciertos.style.display = "none";
        contenedorErrores.style.display = "none";
        wrong27.style.display = "none";
        wrong28.style.display = "none";
        wrong29.style.display = "none";
      } if(contadorError >= 30 & cuadro1.style.display == "block") {
        wrong30.innerHTML = "PERDISTE!";
        wrong30.style.display = "block";
        reinicio.style.display = "block";
        titularNo.style.display = "block";
        mensajeNo.innerHTML = "Bueno, has perdido, podes intentarlo nuevamente y ver que sucede si no llegas a 30 errores ,si , 30 errores, esos fueron tus numeros. De cualquier manera, gracias por jugar y que tengas un buen dia!"
        baraja.style.display = "none";
        titular.style.display = "none";
        mesa.style.display = "none";
        contenedorAciertos.style.display = "none";
        contenedorErrores.style.display = "none";
        wrong27.style.display = "none";
        wrong28.style.display = "none";
        wrong29.style.display = "none";
      } if(contadorError >= 30 & cuadro3.style.display == "block") {
        wrong30.innerHTML = "DU VERLIERST";
        wrong30.style.display = "block";
        reinicio.style.display = "block";
        titularNo.style.display = "block";
        mensajeNo.innerHTML = "Leider hast du verloren, du kannst es noch einmal versuchen und sehen, was passiert, wenn du 30 Fehler nicht erreichet, ja, 30 Fehler, das waren deine Zahlen. Jedenfalls vielen Dank fürs Spielen und einen schönen Tag.!"
        baraja.style.display = "none";
        titular.style.display = "none";
        mesa.style.display = "none";
        contenedorAciertos.style.display = "none";
        contenedorErrores.style.display = "none";
        wrong27.style.display = "none";
        wrong28.style.display = "none";
        wrong29.style.display = "none";
      };
  
      var reinicio = document.getElementById("reinicio");
      reinicio.addEventListener("click", function(){
        location.reload();
      })
  
      setTimeout(function(){
        lasTarjetas.forEach(function(elemento){
          elemento.classList.remove("descubierta");
          elemento.classList.remove("error");
          });
      }, 1000);  
  }
  
/*-------------------------INICIAR------------------------------------*/
  

reparteTarjetas();


document.querySelectorAll(".tarjeta").forEach(function(elemento) {
  elemento.addEventListener("click", descubrir);
});

function comenzar() {
  reparteTarjetas();
  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir);
    contadorAcierto = 0;
    contadorError = 0;
    aciertos.innerHTML = 0;
    errores.innerHTML = 0;
    okey.innerHTML = ""; //revisar
    wrong.innerHTML = ""; //revisar
  });
}
var baraja = document.getElementById("baraja");
baraja.addEventListener("click", comenzar);   

