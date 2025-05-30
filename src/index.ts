import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question: string): Promise<string> {
  return new Promise(resolve => {
    rl.question(question, resolve);
  });
}

class Pessoa {
    nome: string;
    idade: number;
    metodos: string[];

    constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
      this.metodos = [];
    }

    adicionarMetodo(metodo: string) {
      this.metodos.push(metodo);
    }

    exibir() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Idade: ${this.idade}`);
      if (this.metodos.length > 0) {
        console.log('Métodos:');
        this.metodos.forEach((m, i) => console.log(`  ${i + 1}. ${m}()`));
      } else {
        console.log('Nenhum método adicionado.');
      }
    }
  }

  class Aluno extends Pessoa {
    matricula: string;

    constructor(pessoaBase: Pessoa, matricula: string) {
      super(pessoaBase.nome, pessoaBase.idade);
      this.metodos = [...pessoaBase.metodos]; // Copia os métodos da pessoa
      this.matricula = matricula;
    }

    exibir() {
  console.log(`Nome: ${this.nome}`);
  console.log(`Idade: ${this.idade}`);
  console.log(`Matrícula: ${this.matricula}`);

  if (this.metodos.length > 0) {
    console.log('Métodos:');
    this.metodos.forEach((m, i) => console.log(`  ${i + 1}. ${m}()`));
  } else {
    console.log('Nenhum método adicionado.');
  }
}
  }

  let pessoa: Pessoa | undefined;

async function main() {
  let option: number = -1;
  while (option !== 0) {
    console.clear();
    console.log('==== MENU DE EXERCÍCIOS ====');
    
    console.log(`1 - Soma de dois números 
2 - Verificar par ou impar
3 - Calcular média de três notas 
4 - Converter Celsius para Fahrenheit
5 - Exibir números pares de 1 a 20
6 - Ler 5 números e armazenar em array 
7 - Encontrar maior número em um array 
8 - Contar vogais em uma string
9 - Calculadora simples
10 - Ordenar array em ordem crescente
11 - Classe Pessoa
12 - Classe Aluno
13 - Classe Carro
14 - Tabuada
15 - Calculadora de IMC
16 - Validar senha
17 - Jogo de adivinhação
18 - Contar palavras em uma string`);

    console.log('0 - Sair');
    const input = await prompt('Escolha uma opção: ');
    option = parseInt(input);
    console.clear();

        
    
    switch (option) {
      case 0:
        console.log('Saindo do programa...');
        break;
      case 1:
        const a = parseInt(await prompt('Digite o primeiro número: '));
        const b = parseInt(await prompt('Digite o segundo número: '));
        console.log(`Soma: ${a + b}`);
        break;
      case 2:
        const num = parseInt(await prompt('Digite um número: '));
        console.log(`O número é ${num % 2 === 0 ? 'par' : 'ímpar'}`);
        break;
      case 3:
        const notas = [];
        for (let i = 1; i <= 3; i++) {
          notas.push(parseFloat(await prompt(`Digite a nota ${i}: `)));
        }
        const media = notas.reduce((a, b) => a + b, 0) / 3;
        console.log(`Média: ${media.toFixed(2)}`);
        break;
      case 4:
        const celsius = parseFloat(await prompt('Digite a temperatura em Celsius: '));
        const fahrenheit = (celsius * 9 / 5) + 32;
        console.log(`Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}`);
        break;
      case 5:
        console.log('Números pares de 1 a 20:');
        for (let i = 2; i <= 20; i += 2) console.log(i);
        break;
      case 6:
        const nums: number[] = [];
        for (let i = 0; i < 5; i++) {
          nums.push(parseInt(await prompt(`Digite o número ${i + 1}: `)));
        }
        console.log('Números digitados:', nums);
        break;
      case 7:
        const arr = [];
        for (let i = 0; i < 5; i++) {
          arr.push(parseInt(await prompt(`Número ${i + 1}: `)));
        }
        console.log(`Maior número: ${Math.max(...arr)}`);
        break;
      case 8:
        const texto = await prompt('Digite uma string: ');
        const vogais = texto.match(/[aeiouAEIOU]/g);
        console.log(`Número de vogais: ${vogais ? vogais.length : 0}`);
        break;
      case 9:
        const n1 = parseFloat(await prompt('Digite o primeiro número: '));
        const op = await prompt('Operação (+ - * /): ');
        const n2 = parseFloat(await prompt('Digite o segundo número: '));
        let resultado;
        switch (op) {
          case '+': resultado = n1 + n2; break;
          case '-': resultado = n1 - n2; break;
          case '*': resultado = n1 * n2; break;
          case '/': resultado = n2 !== 0 ? n1 / n2 : 'Erro: divisão por zero'; break;
          default: resultado = 'Operação inválida';
        }
        console.log(`Resultado: ${resultado}`);
        break;
      case 10:
        const numeros = [];
        for (let i = 0; i < 5; i++) {
          numeros.push(parseInt(await prompt(`Número ${i + 1}: `)));
        }
        console.log('Ordenado:', numeros.sort((a, b) => a - b));
        break;
      case 11:
  const nome = await prompt('Nome: ');
        const idade = parseInt(await prompt('Idade: '));
        pessoa = new Pessoa(nome, idade);

        let adicionarMais;
        do {
          const metodo = await prompt('Digite um método (ou pressione Enter para encerrar): ');
          if (metodo.trim() !== '') {
            pessoa.adicionarMetodo(metodo.trim());
          }
          adicionarMais = metodo.trim() !== '';
        } while (adicionarMais);

        pessoa.exibir();
  break;


      case 12:
        if (!pessoa) {
          console.log('Você precisa cadastrar uma pessoa primeiro (use a opção 11).');
          break;
        }

        const matricula = await prompt('Digite a matrícula do aluno: ');
        const aluno = new Aluno(pessoa, matricula);
        aluno.exibir();
  break;

      case 13:
        interface Veiculo {
  acelerar(): void;
  frear(): void;
}

class Carro implements Veiculo {
  modelo: string;
  ano: number;

  constructor(modelo: string, ano: number) {
    this.modelo = modelo;
    this.ano = ano;
  }

  acelerar() {
    console.log(`${this.modelo} (${this.ano}) está acelerando...`);
  }

  frear() {
    console.log(`${this.modelo} (${this.ano}) está freando...`);
  }
}

const modeloCarro = await prompt('Digite o modelo do carro: ');
const anoCarro = parseInt(await prompt('Digite o ano do carro: '));
const carroUsuario = new Carro(modeloCarro, anoCarro);
carroUsuario.acelerar();
carroUsuario.frear();

        break;
      case 14:
        const numero = parseInt(await prompt('Digite um número: '));
        for (let i = 1; i <= 10; i++) {
          console.log(`${numero} x ${i} = ${numero * i}`);
        }
        break;
        
      case 15:
        const peso = parseFloat(await prompt('Digite o peso (kg): '));
        const alturaCm = parseFloat(await prompt('Digite a altura (cm): '));
        const alturaM = alturaCm / 100;
        const imc = peso / (alturaM * alturaM);
        let classificacao;
        if (imc < 18.5) classificacao = 'Abaixo do peso';
        else if (imc < 25) classificacao = 'Peso normal';
        else if (imc < 30) classificacao = 'Sobrepeso';
        else classificacao = 'Obesidade';
        console.log(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
        break;

      case 16:
        let senhaValida = false;

  while (!senhaValida) {
    const senha = await prompt('Digite uma senha ou digite 0 pra sair: ');
    const erros = [];
    if (senha === '0') {
      console.log('Operação cancelada pelo usuário.');
      break;
    }

    if (senha.length < 8) {
      erros.push('pelo menos \x1b[31m8 caracteres\x1b[0m');
    }
    if (!/[A-Z]/.test(senha)) {
      erros.push('pelo menos \x1b[31muma letra maiúscula\x1b[0m');
    }
    if (!/[a-z]/.test(senha)) {
      erros.push('pelo menos \x1b[31muma letra minúscula\x1b[0m');
    }
    if (!/[0-9]/.test(senha)) {
      erros.push('pelo menos \x1b[31mum número\x1b[0m');
    }

    if (erros.length === 0) {
      console.log('\x1b[32mSenha válida!\x1b[0m');
      senhaValida = true;
    } else {
      console.log('\x1b[31mSenha inválida!\x1b[0m Está faltando:');
      erros.forEach(erro => console.log(`- ${erro}`));
    }
  }
        break;
      case 17:
        const sorteado = Math.floor(Math.random() * 100) + 1;
        let tentativa;
        do {
          tentativa = parseInt(await prompt('Adivinhe o número (1-100): '));
          if (tentativa > sorteado) console.log('Menor!');
          else if (tentativa < sorteado) console.log('Maior!');
          else console.log('Acertou!');
        } while (tentativa !== sorteado);
        break;
      case 18:
        const frase = await prompt('Digite uma frase: ');
        const palavras = frase.trim().split(/\s+/);
        console.log(`Número de palavras: ${palavras.length}`);
        break;
      default:
        console.log('Opção inválida.');
    }
    if (option !== 0) await prompt('\nPressione Enter para retornar ao menu...');
  }
  rl.close();
}

main();
