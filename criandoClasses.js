//
class Aventureiro {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

      switch(this.tipo) {
        case "Guerreiro":
            ataque = "Espada";
            break;
        case "Mago":
            ataque = "Magia";
            break;
        case "Monge":
            ataque = "Artes Marciais";
            break;
        case "Ninja":
            ataque = "Shuriken";
            break;
        default:
            ataque = "Errou o Ataque";
      }
        console.log(`O ${this.tipo} derrotou o inimigo usando ${ataque}`);
    }
}

const aventureiro1 = new Aventureiro ("Guts",24,"Guerreiro");
const aventureiro2 = new Aventureiro ("Duck Dodgers",2000,"Mago");
const aventureiro3 = new Aventureiro ("Lee",13,"Monge");
const aventureiro4 = new Aventureiro ("Hayabusa",28,"Ninja");

aventureiro1.atacar();
aventureiro2.atacar();
aventureiro3.atacar();
aventureiro4.atacar();
//
