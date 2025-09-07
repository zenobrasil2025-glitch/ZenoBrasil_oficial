// service-worker.js

// Importa o SDK da Brevo
importScripts("https://cdn.brevo.com/js/sdk-loader.js");

// Inicializa a Brevo com a sua chave pública
Brevo.push([
  "init",
  {
    client_key: "eyJhcGlfa2V5IjoieGtleXNpYi0wOThmNmIxZGM0YWJkYzVjNDFkODg5OTY5OGM4ZDRlY2M1OTllNWYzZmQ1ZjQyY2FlNzUxYmNhNzYyZGE1NjVmLUQyRWYwUGtHZEFDVGVvNlAifQ=="
  }
]);

// Inscreve o navegador para receber push notifications
Brevo.push(["webPush", "subscribe"]);
