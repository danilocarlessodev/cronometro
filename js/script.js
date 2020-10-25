// Seleciona todos os elementos do cronômetro com base no ID passado no documento html!

const visor = document.querySelector(".visor span");
const iniciar = document.getElementById("iniciar");
const pausar = document.getElementById("pausar");
const parar = document.getElementById("parar");

// Cria as variaveis dos dados com LET por causa do escopo, preciso de acesso a elas em todas funções, com const não daria certo

let horas = 0;
let minutos = 0;
let segundos = 0;
let cronometro;

// Funcão que inicia o cronômetro

function iniciarCronometro() {
  cronometro = setInterval(() => {
    segundos++;
    constroeCronometro();
  }, 1000);

  // Removido o evento aqui para caso de mais de 1 click em iniciar com ele já ativo não desconfigurar a contagem (Em caso de 2 cliques aumentaria de 2 em 2 os segundos)
  iniciar.removeEventListener("click", iniciarCronometro);
}

// Função responsável por pausar o cronômetro

function pausarCronometro() {
  clearInterval(cronometro);

  // Aqui eu adiciono o evento novamente para que em caso de pausa, o usuário possa continuar de onde parou
  iniciar.addEventListener("click", iniciarCronometro);
}

// Função de parar/resetar o cronômetro

function pararCronometro() {
  horas = 0;
  minutos = 0;
  segundos = 0;
  visor.innerText = "00:00:00";
  pausarCronometro();
}

// Função responsável por ficar atualizando o temporizador do cronômetro

function constroeCronometro() {
  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }

  if (minutos === 60) {
    minutos = 0;
    horas++;
  }

  visor.innerText = `${horas < 10 ? "0" + horas : horas}:${
    minutos < 10 ? "0" + minutos : minutos
  }:${segundos < 10 ? "0" + segundos : segundos}`;
}

// Eventos de click adicionados aos botôes para iniciar as funçôes

iniciar.addEventListener("click", iniciarCronometro);
pausar.addEventListener("click", pausarCronometro);
parar.addEventListener("click", pararCronometro);
