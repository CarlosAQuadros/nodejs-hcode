const fs= require("fs")
// processtime mostra o horario da execuçao da linha
console.log((process.hrtime()[0]/60).toFixed(10));
console.log("antes da leitura do arquivo");

const dados =fs.readFileSync("file.txt");

console.log("executando console apos o arquivo");

console.log((process.hrtime()[0]/60).toFixed(10));

