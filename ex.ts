import { exit } from "process";


let entrada = require("readline-sync");

let conta:string= "carlos";

let senha:number = 47455753861;
let opcoes:number = 0
let saldo:number = 100.00;
let i = 1
let pergunta1 = entrada.question('LOGIN: ');
let pergunta2 = entrada.question('SENHA: ')
if (pergunta1 == conta) {
    
   while(i<3){
    
    if (pergunta2 == senha) {
    
        while(opcoes != 3){
    console.log('---------------------------------')
    console.log('SALDO');
    console.log(saldo);
    console.log('BEM VINDO');
    console.log('OPCAO 1: SAQUE');
    console.log('OPCAO 2: DEPOSITO');
    console.log('OPCAO 3: SAIR');
    opcoes = entrada.question('SELECIONE UMA OPCAO: ');
     console.log('------------------------------------') 
        


        if (opcoes == 1) {
            let saque = parseFloat(entrada.question('INSIRA O VALOR: '));
            if (saque <= saldo && saque > 0) {
                let pergunta3 = entrada.question('INSIRA A SENHA: ');
                if (senha == pergunta3) {
                    console.log('SALDO',saldo =  saldo - saque);
                }
                else {
                    console.log('SENHA INCORRETA');
                }
            }
            else {
                console.log('VALOR INVALIDO');
                console.log('1. VOLTAR A TELA INICIAL')
                console.log('2. SAIR')
                let pergunta4 = entrada.question('SELECIONE A OPCAO: ')
              
                if(pergunta4 == 1 ){}
                break


            }}
        
        else if (opcoes == 2) {
            let deposito = parseFloat(entrada.question('INSIRA O VALOR: '));
            if (deposito > 0) {
                senha = entrada.question('INSIRA A SENHA: ');
                if (senha == 47455753861) {
                    console.log('SALDO',saldo = deposito + saldo);
                }
                else {
                    console.log('SENHA INCORRETA');
                }
            }
            else {
                console.log('VALOR INVALIDO');
            }}

            
        
        }
        break
    
    }

else{
    console.log('SENHA INCORRETA')
    pergunta2 = entrada.question('INSIRA A SENHA: ')
    i = i+1
}

   }}

   else{console.log('USUARIO NAO ENCONTRADO')}
    

  



