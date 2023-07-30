# SetTimeout & setInterval - JavaScript


----------------------------------- SetTimeout & setInterval -----------------------------------

SetTimeout & setInterval

Este repositório contém exemplos práticos de como utilizar as funções setTimeout e setInterval em JavaScript. Essas funções são amplamente usadas para controlar o tempo de execução de tarefas assíncronas em aplicações web.

SetTimeout
A função setTimeout é utilizada para agendar a execução de uma função após um determinado período de tempo.

javascript

// Exemplo de uso do setTimeout
setTimeout(function() {
  console.log("Essa mensagem será exibida após 3 segundos.");
}, 3000);
Neste exemplo, a função console.log será executada após um atraso de 3 segundos.

setInterval
A função setInterval é utilizada para agendar a execução repetida de uma função em intervalos regulares.

javascript

// Exemplo de uso do setInterval
let contador = 1;
const intervalId = setInterval(function() {
  console.log("Contador: " + contador);
  contador++;
  if (contador > 5) {
    clearInterval(intervalId); // Para o intervalo após 5 execuções
  }
}, 1000);

Neste exemplo, a função console.log será executada a cada 1 segundo, mostrando o valor do contador de 1 a 5. Após 5 execuções, o intervalo será interrompido usando clearInterval.

Contribuição
Se você tiver alguma sugestão ou correção, sinta-se à vontade para criar um Pull Request. Sua contribuição será muito apreciada!


Espero que este repositório ajude você a entender melhor como utilizar setTimeout e setInterval em suas aplicações JavaScript. Se tiver alguma dúvida, sinta-se à vontade para abrir uma issue.

Aproveite e bons estudos! 🚀