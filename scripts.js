const resultado = fizzBuzz(11)
console.log(resultado)

function fizzBuzz(entrada) {
    const dividerFor3 = entrada / 3
    const dividerFor5 = entrada / 5
    const string3 = String(dividerFor3).includes('.')
    const string5 = String(dividerFor5).includes('.')

    
    if(typeof entrada !== 'number') {
        return 'Não é um número!'
    } else if (string3 === false && string5 === true) {
        return 'Fizz'
    } else if (string3 === true && string5 === false) {
        return 'Buzz'
    } else if (string3 === false && string5 === false) {
        return 'FizzBuzz'
    } else if (string3 === true && string5 === true) {
        return entrada
    }
}