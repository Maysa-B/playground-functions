// Desafio 1
function compareTrue(param1, param2) {
  if (param1 == true && param2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) /2);
}

// Desafio 3
function splitSentence(phrase) {
  let word;
  let split = [];
  let separadaWord = [];

  for (let index = 0; index <= phrase.length; index +=1) {
    if (phrase[index] == ' ' || index == phrase.length) {
      word = separadaWord.join('');
      separadaWord = [];
      split.push(word);
    } else if (phrase[index] !== ' '){
      separadaWord.push(phrase[index]);
    }
  }

  return split;
}

// Desafio 4
function concatName(fisrtArray) {
  let futuraString = [];
  let string;

  for (let index = 0; index <= fisrtArray.length; index += 1) {
    if (index == 0 || index == fisrtArray.length-1) {
      futuraString.push (fisrtArray[index]);
    }
  }

  futuraString = futuraString.reverse();
  string = futuraString.join(', ');

  return string;
}

//console.log (concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties);

  return pontos;
}

// Desafio 6
function highestCount(numbers) {
  let repeticoes = 0;
  let biggestNumber = numbers[0];

  for (let index = 0; index <= numbers.length; index += 1) {


    if (numbers[index] >= biggestNumber) {
      biggestNumber = numbers[index];
      repeticoes = 0;

      for (let index2 = 0; index2 <= numbers.length; index2 += 1) {
        if (biggestNumber == numbers[index2]) {
          repeticoes += 1;
        }
      }

    }
  }
  return repeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1;
  let distCat2;

  if (cat1 > mouse) {
    distCat1 = cat1 - mouse;
  } else {
    distCat1 = mouse - cat1;
  }

  if (cat2 > mouse) {
    distCat2 = cat2 - mouse;
  } else {
    distCat2 = mouse - cat2;
  }

  if (distCat1 > distCat2) {
    return 'cat2';
  } else if (distCat2 > distCat1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }

}

// Desafio 8
function fizzBuzz(numeros) {
  let resultado = [];

  for (let id = 0; id < numeros.length; id += 1) {
    if (numeros[id] % 3 === 0 && numeros[id] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (numeros[id] % 3 === 0) {
      resultado.push('fizz');
    } else if (numeros[id] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }

  }

  return resultado;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(fraseSemCode) {
  let resultCode = '';

  for (let index in fraseSemCode) {
    if (fraseSemCode[index] == 'a') {
      resultCode += '1';
    } else if (fraseSemCode[index] == 'e') {
      resultCode += '2';
    } else if (fraseSemCode[index] == 'i') {
      resultCode += '3';
    } else if (fraseSemCode[index] == 'o') {
      resultCode += '4';
    } else if (fraseSemCode[index] == 'u') {
      resultCode += '5';
    } else {
      resultCode += fraseSemCode[index];
    }
  }

  return resultCode;
}

function decode(fraseComCode) {
  let resultSemCode = '';

  for (let index in fraseComCode) {
    if (fraseComCode[index] == '1') {
      resultSemCode += 'a';
    } else if (fraseComCode[index] == '2') {
      resultSemCode += 'e';
    } else if (fraseComCode[index] == '3') {
      resultSemCode += 'i';
    } else if (fraseComCode[index] == '4') {
      resultSemCode += 'o';
    } else if (fraseComCode[index] == '5') {
      resultSemCode += 'u';
    } else {
      resultSemCode += fraseComCode[index];
    }
  }

  return resultSemCode;
}

// Desafio 10
function techList(tech, name) {
  let newList = [];
  let ordenaTech = tech.sort();

  if (tech.length == 0) {
    return 'Vazio!';
  } else {
    for (let id = 0; id < tech.length; id += 1) {
      newList.push({tech: ordenaTech[id], name: name});
    }
  }

  return newList;
}

console.log (techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Maysa'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};