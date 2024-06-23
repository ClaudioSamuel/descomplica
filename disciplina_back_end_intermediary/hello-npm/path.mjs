/* Método para nome e caminho do diretorio*/
import { basename, dirname } from "path";

let nomeArquivo = basename('./teste.txt');
let filename = basename('/test/something');

let dir = dirname('/test/something');
let diretorio = dirname('/test/something/file.txt');

console.log('Nome do Arquivo: '+nomeArquivo);
console.log('FileName: '+filename);
console.log('Diretório: '+diretorio);
console.log('Dir: '+dir);
