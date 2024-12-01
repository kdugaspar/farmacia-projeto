function diasNoMes(mes, ano) {
  // O objeto Date no JavaScript ajusta automaticamente o dia 0 para o último dia do mês anterior
  return new Date(ano, mes, 0).getDate();
}

// Exemplo de uso:
const mes = 12; // Fevereiro
const ano = 2024; // Ano bissexto
console.log(`O mês ${mes} do ano ${ano} tem ${diasNoMes(mes, ano)} dias.`);
