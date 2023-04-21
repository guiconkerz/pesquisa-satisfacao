const forms = document.querySelectorAll('.form');
const btnProxPag = document.querySelectorAll('.proxPag');
const btnAntPag = document.querySelectorAll('.antPag');
let formAtual = 0;

// Oculta todas as páginas, exceto a primeira
for (let i = 1; i < forms.length; i++) {
  forms[i].style.display = 'none';
}

// Avança para a próxima página
function proxPagform() {
  if (formAtual < forms.length - 1) {
    formAtual++;
    forms[formAtual - 1].style.display = 'none';
    forms[formAtual].style.display = 'block';
  }
}

// Volta para a página anterior
function antPagform() {
  if (formAtual > 0) {
    formAtual--;
    forms[formAtual + 1].style.display = 'none';
    forms[formAtual].style.display = 'block';
  }
}

// Define os eventos de clique para os botões de avançar e voltar
for (let i = 0; i < btnProxPag.length; i++) {
  btnProxPag[i].addEventListener('click', proxPagform);
}

for (let i = 0; i < btnAntPag.length; i++) {
  btnAntPag[i].addEventListener('click', antPagform);
}

// Define os eventos de clique para selecionar as opções
const selected = document.querySelector('.selected')
const options = document.querySelector('.options')
const optionList = document.querySelectorAll('.option')

selected.addEventListener('click', () => {
    options.classList.toggle('active')
})

optionList.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerHTML = option.querySelector('span').innerText
         options.classList.remove("active")
    })
})
