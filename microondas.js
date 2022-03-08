/* const pratos = {
    1: { nome: 'Pipoca', tempo: 10 },
    2: { nome: 'Macarrão', tempo: 8 },
    3: { nome: 'Carne', tempo: 15 },
    4: { nome: 'Feijão', tempo: 12 },
    5: { nome: 'Brigadeiro', tempo: 8 },
};

function Menu(numeroPrato, tempo) {
    const prato = pratos[numeroPrato];

    if (!prato) {
        return console.log('Prato inexistente');
    }

    let mensagem;

    const tempoPadrao = prato.tempo;

    let tempoContador = tempo;

    if (tempo < tempoPadrao) {

        mensagem = 'Tempo insuficiente';

        console.log(mensagem);

    } else if (tempo == (tempoPadrao * 3)) {
        for (let i = 0; i < tempoContador; i++) {
            let time = (1000 * i);
            setTimeout(() => {
                i++;
                console.log(i);
                if (i == tempoContador) {
                    console.log('KABUMMM!!');
                };
            }, time)
        }
    } else if (tempo == (tempoPadrao * 2) && tempo < (tempoPadrao * 3)) {
        for (let i = 0; i < tempoContador; i++) {
            let time = (1000 * i);
            setTimeout(() => {
                i++;
                // console.log(i);
                if (i == tempoContador) {
                    console.log('A comida queimou');
                };
            }, time);
        }
    } else {
        for (let i = 0; i < tempoContador; i++) {
            let time = (1000 * i);
            setTimeout(() => {
                i++;
                console.log(i);
                if (i == tempoContador) {
                    console.log('Prato pronto, bom apetite!!!');
                };
            }, time);
       }
   }
}
/Menu(1, 50)
*/





let pipoca = "10 segundos";
let macarrao = "8 segundos";
let carne = "15 segundos";
let feijao = "12 segundos";
let brigadeiro = "8 segundos";

Function menu(){

if(pipoca > 10)

console.log("a comida queimou")

else if (pipoca < 10)

console.log ("tempo insuficiente")

else if (pipoca > 3*10)

console.log("Kabummm")

else(pipoca == 10)
console.log ("Prato pronto, bom apetite!!!")
}

if(macarrao > 8)

console.log("a comida queimou")

else if (macarrao < 8)

console.log ("tempo insuficiente")

else if (macarrao > 3*8)

console.log("Kabummm")

else(macarrao == 8)
console.log ("Prato pronto, bom apetite!!!")
}

if(carne > 15)

console.log("a comida queimou")

else if (carne < 15)

console.log ("tempo insuficiente")

else if (carne > 3*15)

console.log("Kabummm")

else(carne == 15)
console.log ("Prato pronto, bom apetite!!!")
}

if(feijao > 12)

console.log("a comida queimou")

else if (feijao < 12)

console.log ("tempo insuficiente")

else if (feijao > 3*12)

console.log("Kabummm")

else(feijao == 12)
console.log ("Prato pronto, bom apetite!!!")
}

if(brigadeiro > 8)

console.log("a comida queimou")

else if (brigadeiro < 8)

console.log ("tempo insuficiente")

else if (brigadeiro > 8*3)

console.log("Kabummm")

else(brigadeiro == 8)
console.log ("Prato pronto, bom apetite!!!")
}

menu(pipoca)
