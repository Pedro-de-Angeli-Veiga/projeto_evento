//Contador

const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {

    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
};


const contagemRegressiva = (tempo) => {

    const pararContagem = () => clearInterval(id);

    const contar = () => {

        if (tempo <= 0) {
            atualizar(0);
            pararContagem();
            return;
        }

        atualizar(tempo);
        tempo--;
    };

    const id = setInterval(contar, 1000);
};


const tempoRestante = () => {

    const dataEvento = new Date('2026-10-09 12:00:00');
    const hoje = Date.now();

    return Math.floor((dataEvento - hoje) / 1000);
};


// Só executa o contador se os elementos existirem
const elementoContador = document.getElementById('dias');

if (elementoContador) {
    contagemRegressiva(tempoRestante());
}

document.addEventListener("click", function(evento) {
    const botao = evento.target.closest("#btnCadastrar, #btnSaberMais, #btnVoltar");
    const estaNaPastaCodigos = window.location.pathname.includes("/codigos/");
    const caminhoCodigos = estaNaPastaCodigos ? "" : "codigos/";

    switch (botao?.id) {
        case "btnCadastrar":
            window.location.href = `${caminhoCodigos}contatos.html`;
            break;
        case "btnSaberMais":
            window.location.href = `${caminhoCodigos}detalhes.html`;
            break;
        case "btnVoltar":
            window.location.href = estaNaPastaCodigos ? "../index.html" : "index.html";
            break;
    }
});