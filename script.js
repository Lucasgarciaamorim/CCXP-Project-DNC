

//função cards ( do jeito que eu pensei em fazer)
// bugs que ocorreram na tentativa: a função de selecionar pelo teclado nao funcionou
//deu algum problema que não sou resolver

//  let cards = document.querySelectorAll('.cards')
// function changedScale(cards) {

//    cards.style.transform = "scale(1.2)"
//     cards.style.transition = "0.4s"

//  }

// function normalScale(cards) {
//      cards.style.transform = "none"

//  }

//cronômetro


const dia = document.querySelector('#data');
const hora = document.querySelector('#hora');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');


const lancamento = "23 jun 2023";

function countDown() {
    const dataLanc = new Date(lancamento);
    const hoje = new Date();

    const segTotal = (dataLanc - hoje) / 1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = formatoTempo(finalDias) + 'D';
    hora.innerHTML = formatoTempo(finalHoras) + 'H';
    min.innerHTML = formatoTempo(finalMinutos) + 'M';
    sec.innerHTML = formatoTempo(finalSegundos) + 'S';

}

function formatoTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}
countDown();
setInterval(countDown,);


//Cards


function highlightCard(selector) {

    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight");

    for (let i = 0; i < element; i++) {
        if (element[i] !== selectedElement) {
            element[i].classList.add("card-opacity");

        }
    }


}

//change with Keyboard

function addKeyboardEventListeners() {
    document.addEventListener('keydown', (event) => {

        var ingresso1 = document.getElementById('quinta')
        var ingresso2 = document.getElementById('sexta')
        var ingresso3 = document.getElementById('sabado')
        var ingresso4 = document.getElementById('domingo')




        var code = event.code;
        if (code == 'Digit1') {
            ingresso1.classList.toggle('card-highlight')
            ingresso2.classList.remove('card-highlight')
            ingresso3.classList.remove('card-highlight')
            ingresso4.classList.remove('card-highlight')



        }
        if (code == 'Digit2') {
            ingresso1.classList.remove('card-highlight')
            ingresso2.classList.toggle('card-highlight')
            ingresso3.classList.remove('card-highlight')
            ingresso4.classList.remove('card-highlight')
        }
        if (code == 'Digit3') {
            ingresso1.classList.remove('card-highlight')
            ingresso2.classList.remove('card-highlight')
            ingresso3.classList.toggle('card-highlight')
            ingresso4.classList.remove('card-highlight')
        }
        if (code == 'Digit4') {
            ingresso1.classList.remove('card-highlight')
            ingresso2.classList.remove('card-highlight')
            ingresso3.classList.remove('card-highlight')
            ingresso4.classList.toggle('card-highlight')
        }
    }, false);
}




const ingressos = []


function selectCard(selector) {
    let element = document.querySelector(selector);
    element.classList.toggle('card-selected');
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)

}

function showSelectedCards()
{
    if(ingressos.length > 0 ) alert ("Ingressos Selecionados:" + ingressos);

}

addKeyboardEventListeners();