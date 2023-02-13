import readlineSync from 'readline-sync';

console.log("Aplicação de juros: ");

const debtValue = Number(readlineSync.question("\nInforme o valor devido: R$ "));

if(debtValue <= 0) {
  console.log("O valor da dívida deve ser maior que zero!");
  return;
}

const overdueDays = Number(readlineSync.question("Informe quantos dias se passaram desde o vencimento do boleto: "));

if(overdueDays <= 0) {
  console.log("Você está em dia!");
  return;
}

const interestRate = overdueDays > 15 ? 10 : 5;
const interestAmount = debtValue * (interestRate / 100);
const totalDebt = debtValue + interestAmount;

console.log(`
Valor original da dívida: R$ ${debtValue}
Dias atrasados: ${overdueDays}
Taxa de Juros: ${interestRate}%
Valor total com juros: R$ ${totalDebt}`);

