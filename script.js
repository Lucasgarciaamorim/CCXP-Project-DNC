// //cronômetro


// const dia = document.querySelector('#data');
// const hora = document.querySelector('#hora');
// const min = document.querySelector('#min');
// const sec = document.querySelector('#sec');


// const lancamento = "12 nov 2023";

// function countDown() {
//     const dataLanc = new Date(lancamento);
//     const hoje = new Date();

//     const segTotal = (dataLanc - hoje) / 1000;

//     const finalDias = Math.floor(segTotal / 60 / 60 / 24);
//     const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
//     const finalMinutos = Math.floor(segTotal / 60) % 60;
//     const finalSegundos = Math.floor(segTotal) % 60;

//     dia.innerHTML = formatoTempo(finalDias) + 'D';
//     hora.innerHTML = formatoTempo(finalHoras) + 'H';
//     min.innerHTML = formatoTempo(finalMinutos) + 'M';
//     sec.innerHTML = formatoTempo(finalSegundos) + 'S';

// }

// function formatoTempo(tempo) {
//     return tempo < 10 ? `0${tempo}` : tempo;
// }
// countDown();
// setInterval(countDown,);

// //função cards ( do jeito que eu pensei em fazer)

// // let cards = document.querySelectorAll('.cards')
// // function changedScale(cards) {

// //     cards.style.transform = "scale(1.2)"
// //     cards.style.transition = "0.4s"
       
// // }

// // function normalScale(cards) {
// //     cards.style.transform = "none"
    
// // }

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });
// // function addKeyboardEventListeners() {
// //     document.addEventListener('keydown', (event) => {
// //         let ingresso1 = document.getElementById('quinta')
// //         let ingresso2 = document.getElementById('sexta')
// //         let ingresso3 = document.getElementById('sabado')
// //         let ingresso4 = document.getElementById('domingo')


// //         var code = event.code;
// //         if (code == 'Digit1') {
// //             ingresso1.classList.toggle("selected");
// //             ingresso2.classList.remove("selected");
// //             ingresso3.classList.remove("selected");
// //             ingresso4.classList.remove("selected");
// //         }
// //         if (code == 'Digit2') {
// //             ingresso1.classList.remove("selected");
// //             ingresso2.classList.toggle("selected");
// //             ingresso3.classList.remove("selected");
// //             ingresso4.classList.remove("selected");
// //         }
// //         if (code == 'Digit3') {
// //             ingresso1.classList.remove("selected");
// //             ingresso2.classList.remove("selected");
// //             ingresso3.classList.toggle("selected");
// //             ingresso4.classList.remove("selected");
// //         }
// //         if (code == 'Digit4') {
// //             ingresso1.classList.remove("selected");
// //             ingresso2.classList.remove("selected");
// //             ingresso3.classList.remove("selected");
// //             ingresso4.classList.toggle("selected");
// //         }


// //     }, false)
// // }
// // addKeyboardEventListeners();

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


// Jquery carrosel

$(document).ready(function(){
    $('.carousel').carousel();
  });

  







