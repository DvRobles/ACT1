class Dado{
    lanzar () {
        return Math.floor(Math.random()*100)+1;
    }
}


class Corredor{
    constructor(numero,posicion){
        this.numero = numero;
        this.dado = new Dado();
        this.posicion = 0;
    }

    info(){
        return this.numero + " está en la posición #" + this.posicion;
    }
    infoDos(){
        return this.numero + " llego a la posición #" + this.posicion;
    }

// Tortuga ->
// paso rapido 50% +3pasos
// resbalon 20% -6 pasos
// paso lento 30% +1 paso

    avanceTortuga() {

        let cara = this.dado.lanzar();

        if (cara <= 50) {
            this.posicion += 3;
        }
        else if (cara <= 70) {
            this.posicion -= 6;
        }
        else{
            this.posicion++;
        }
    }

// Liebre
// domir 20% 0 avance
// salto grande 20% +9 pasos
// resbalon grande 10% -12 pasos
// salto pequeño 35 % +1 paso
// resbalon pequeño 15% -2 pasos

    avanceLiebre() {

        let cara = this.dado.lanzar();

        if (cara <= 20) {
            this.posicion += 9;
        } 
        else if (cara <= 30) {
            this.posicion -= 12;
        } 
        else if (cara <= 65) {
            this.posicion++;
        }
        else if ( cara <= 80) {
            this.posicion -= 2;
        }
    }

}


let liebre = new Corredor(5);
let tortuga = new Corredor(3);

while(liebre.posicion < 100 && tortuga.posicion < 100){
    liebre.avanceLiebre()
    tortuga.avanceTortuga()
    console.log(`La Liebre con el número ${liebre.info()} y la Tortuga con el número ${tortuga.info()}.`);
    //si hay empate/draw o no
    if(liebre.posicion >= 100 && tortuga.posicion >= 100){
        console.log(`%c     ¡Empate!`,"color:yellow");
        break;
    } else if (liebre.posicion >= 100) {
        console.log(`%c    ¡La Liebre con el número ${liebre.infoDos()}, es el GANADOR!`,"color:green");
    } else if (tortuga.posicion >= 100) {
        console.log(`%c    ¡La Tortuga con el número ${tortuga.infoDos()}, es el GANADOR!`,"color:green");
    } 
}


