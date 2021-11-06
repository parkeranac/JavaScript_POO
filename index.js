import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ana", 11122233309);
const cliente2 = new Cliente ("André", 88822233309);
console.log(cliente2.cpf);

const contaCorrenteAna = new ContaCorrente(cliente1, 1001);
contaCorrenteAna.depositar(500);

const conta2 = new ContaCorrente(cliente2, 102);
 console.log(conta2);

let valor = 200;
contaCorrenteAna.tranferir(valor, conta2);




