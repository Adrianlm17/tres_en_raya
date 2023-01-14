
let tablero = [0,0,0,0,0,0,0,0,0];

let jugador = 1;


function puedoColocar(pos){
    return tablero[pos] == 0;
}


function casilla(pos) {
    
    tablero[pos] = jugador;
    document.getElementById("d" + pos).className='jugador'+jugador;

}



function cambiarJugador(){
    if (jugador == 1) {
        jugador = 2;

    } else {
        jugador = 1;
    }
}


function reiniciarJuego() {
    
    jugador = 1;

    for (pos=0; pos<9; pos ++) {
        tablero[pos] = 0;
        document.getElementById("d" + pos).className='';
    }
}

function check(a,b,c) {
    return (a==b)&&(b==c)&&(a!=0);
}


// REVISA SI TERMINA EL JUEGO
function juegoTerminado(){

    let contadorBlanco = 0;

    for (pos=0;pos<9;pos++) {
        if(tablero[pos]==0){
            contadorBlanco++;
        }
    }

    let ganador = check(tablero[0],tablero[1],tablero[2])
                 || check(tablero[3],tablero[4],tablero[5])
                 || check(tablero[6],tablero[7],tablero[8])
                 || check(tablero[0],tablero[3],tablero[6])
                 || check(tablero[1],tablero[4],tablero[7])
                 || check(tablero[2],tablero[5],tablero[8])
                 || check(tablero[0],tablero[4],tablero[8])
                 || check(tablero[6],tablero[4],tablero[2]);


    if(ganador){

        //HAY GANADOR
        document.getElementById("finalizado").innerText='HA GANADO EL JUGADOR '+ jugador+'!!!';
        return true;

    } else if (contadorBlanco==0) {
        
        // EMPATE
        document.getElementById("finalizado").innerText='EL JUEGO TERMINO EN EMPATE';
        return true;

    } else {
        
        // SIGUE JUGANDO
        return false;
    }

}

function juego(pos) {
    if(!juegoTerminado()){
        if(puedoColocar(pos)) {
            
            casilla(pos);
            cambiarJugador();
            juegoTerminado();

        } else {
            alert("No puedes colocar tu ficha aqui!")
        }
    }
}
