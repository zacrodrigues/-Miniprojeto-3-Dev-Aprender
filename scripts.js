// Execução da função passando o número a ser analisado.
const resultado = fizzBuzz(11)

// Exibição no console do resultado da análise feita.
console.log(resultado)

// Função que analisa o número inserido.
function fizzBuzz(entrada) { //entrada é o parâmetro que recebe o número inserido
    
    // Divide o número inserido por 3.
    const dividerFor3 = entrada / 3

    // Divide o número inserido por 5.
    const dividerFor5 = entrada / 5

    // Transforma o resultado da divisão por 3 em uma STRING e procura por um "." para analisar se o número é inteiro ou decimal.
    const string3 = String(dividerFor3).includes('.')

    // Transforma o resultado da divisão por 5 em uma STRING e procura por um "." para analisar se o número é inteiro ou decimal.
    const string5 = String(dividerFor5).includes('.')

    // Verifica o tipo de dado inserido é diferente de um número.
    if(typeof entrada !== 'number') { 
        return 'Não é um número!'
        // Se não é um número, retorna a resposta acima.
    } else if (string3 === false && string5 === true) {
        return 'Fizz'
        // Se o número for somente divisível por 3
    } else if (string3 === true && string5 === false) {
        return 'Buzz'
        // Se o número for somente divisível por 5
    } else if (string3 === false && string5 === false) {
        return 'FizzBuzz'
        // Se o número for divisível por 3 e 5
    } else if (string3 === true && string5 === true) {
        return entrada
        // Se o número não for divisível 3 e 5
    }
}