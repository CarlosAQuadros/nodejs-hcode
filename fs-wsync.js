//non blocking


const fs= require("fs");
// processtime mostra o horario da execuçao da linha
console.log((process.hrtime()[0]/60).toFixed(10)); 

console.log("antes da leitura do arquivo");

// usado o shellscript (for /L %i in (1,1,24) do type file.txt >> file.txt) 
//para aumentar o tamanho do arquivo
const dados =fs.readFile("file.txt", (err, data)=>{
    if(err) throw err;
});


console.log((process.hrtime()[0]/60).toFixed(10));
console.log("executando console apos o arquivo");