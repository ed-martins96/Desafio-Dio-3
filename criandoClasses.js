//
class aventureiro{
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo
    }

    atacar(){
        let atque = ""

        if(atque = "Usou espada"){
            console.log("Classe Guerreiro")
        }   else if(ataque = "Usou magia"){
                console.log("Classe Mago")
        }       else if (ataque = "Usou Artes Maciais"){
                    console.log("Classe Monje")
        }           else if (atque = "Usou Shuriken"){
                        console.log("Classe Ninja")
        }               else{
                            console.log("Classe Renegado")
        }
    }
}

let lutador = new aventureiro("Lee",19,Monje);

lutador.atacar()