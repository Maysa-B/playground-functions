// Desafio 11
function generatePhoneNumber(numbers) {
  let resultFinal = '';

  if (numbers.length !== 11) {
    return "Array com tamanho incorreto.";
  } else {
    for (let id in numbers) {
      let repeticoes = 0;
      for (let id2 in numbers) {
        if (numbers[id] == numbers[id2]){
          repeticoes +=1;
        }
        if (repeticoes >= 3 || numbers[id2] > 9 || numbers[id2] < 0) {
          return "não é possível gerar um número de telefone com esses valores";
          break;
        }
      }
    }
  }

  for (let index = 0; index < numbers.length; index += 1) {
    if (index == 0) {
      resultFinal += '(' + numbers[index];
    } else if (index == 1) {
      resultFinal += numbers[index] + ') ';
    } else if (index == 6) {
      resultFinal += numbers[index] + '-';
    } else {
      resultFinal += numbers[index];
    }
  }

  return resultFinal;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let ePossivel = false;

  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC) &&
  lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC) &&
  lineC < (lineA + lineB) &&  lineC > Math.abs(lineA - lineB)) {
    ePossivel = true;
  } else {
    ePossivel = false;
  }

  return ePossivel;
}

// Desafio 13
// Para esse desafio encontrei essa função no stackOverflow (https://pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-de-uma-string-em-javascript);
// Também encontrei um problema pois com o link anterior eu apenas obtia uma STRING com os número e eu desejava uma variável com os números, portanto encontrei: https://medium.com/aprendajs/convertendo-uma-string-em-um-numero-em-javascript-e6c856fb53be
// Acabei não usando o segundo link, porém é bastante interessante;

function hydrate(string) {
  let numbers = string.replace(/[^0-9]/g,'');
  let arrayCorreto = [];
  let arrayNumbers = [];
  let soma = 0;

  for (let id = 0; id < numbers.length; id += 1) {
    arrayCorreto.push (numbers[id]);
  }

  for (let id in arrayCorreto) {
   arrayNumbers.push(parseFloat(arrayCorreto[id]));
  }

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    soma += arrayNumbers[index];
  }

  if (soma == 1) {
    return (soma + ' copo de água');
  } else if (soma == 0) {
    return ('nenhum copo de água');
  } else {
    return (soma + ' copos de água')
  }
  
}

console.log (hydrate('9 esaa 9 dhdoh 0'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
