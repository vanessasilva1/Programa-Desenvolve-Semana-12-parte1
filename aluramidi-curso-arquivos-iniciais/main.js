function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio); //dá o play no meu áudiota

    //if(elemento === null) {
        //alert('Elemento não encontrado');
    //    console.log('Elemento não encontrado')
    //}
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
     //console.log(elemento.localName);
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

//document.querySelector('.tecla_pom').onclick = tocaSomPom; //vai trazer o nosso elemento html, botão pom

const listaDeTeclas = document.querySelectorAll('.tecla'); 

/*let cont = 0;

while(cont < listaDeTeclas.length) {

    const tecla = listaDeTeclas[cont];

    const instrumento = tecla.classList[1]; // está pegando uma lista. O 1 pega o segundo nome da classe - tecla_pom, tecla_class.

    const idAudio = `#som_${instrumento}`

    tecla.onclick = function() {
        tocaSom(idAudio);
    }; //função anonima
    cont++;
}*/

for (let cont = 0; cont < listaDeTeclas.length; cont++) {
    const tecla = listaDeTeclas[cont];

    const instrumento = tecla.classList[1]; // está pegando uma lista. O 1 pega o segundo nome da classe - tecla_pom, tecla_class.

    const idAudio = `#som_${instrumento}`

    tecla.onclick = function() {
        tocaSom(idAudio);
    } //função anonima
    
    tecla.onkeydown = function(evento) { // evento - palavra reservada da linguagem.

        //console.log(evento.code);
        if (evento.code === 'Space'|| evento.code === 'Enter') {
            tecla.classList.add('ativa'); //classLista - retorna a lista de classes, add adiciona uma nova classe
        }

    } //evento quando uma tecla é apertada

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa'); //exclui essa classe;
    } //evento que ocorre quando o usuário solta a tecla.
}

//querySelectorAll() - busca todos os elementos que tenham um mesmo identificador/classe.

//const listaDeTeclas = document.querySelectorAll('input[type=button]');
//console.log(listaDeTeclas);
/*Para selecionarmos todas as teclas do Alura Fone, é necessário usar o script const listaDeTeclas = document.querySelectorAll(‘input[type=button]), porquê o JavaScript vai criar uma referência chamada listaDeTeclas e armazenar dentro dela a NodeList com todas as teclas do Alura Fone, pois o script document.querySelectorAll(‘input[type=button]’) acessa o documento HTML (representado por document) e captura todos os elementos input que tenha como atributo type=button. É necessário passar o type, ou seja, o seletor de atributo, pois os inputs do HTML não tem classes nem IDs, e também temos um input que não é do tipo type, impossibilitando o uso do seletor de nome de tag input.*/