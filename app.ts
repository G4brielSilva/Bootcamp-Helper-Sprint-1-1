
function contavogal(word: string): number{
  let vogais:number=0;

  word = word.toLowerCase();
  let letters: string[] = word.substring(0, word.length).split("");
  
  letters.forEach((value: string) => {
    if(value == "a"){
      vogais++;  
    }else if(value =="e"){
      vogais++;
    }else if(value=="i"){
      vogais++;
    }else if(value=="o"){
      vogais++;
    }else if(value=="u"){
      vogais++;
    }
});

  return vogais;
}

//Exemplo com input direto da função
console.log('A palavra Abacaxi tem '+ contavogal('Abacaxi')+' vogais')

//Exemplo usando um formulario

function contaVogal(): void{
  let palavra = (<HTMLInputElement>(document.getElementById("word"))).value;
  console.log('A palavra '+ palavra +' tem '+ contavogal(palavra)+'vogais');
}