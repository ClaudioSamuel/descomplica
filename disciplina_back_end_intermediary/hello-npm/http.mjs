import {createServer} from 'http';

/* Leitura de Arquivo */ 
createServer(function(req,res){
        res.write('Hello World Descomplica');
        res.end();
    }).listen(8080);