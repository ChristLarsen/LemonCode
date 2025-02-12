function adelantar() {
    // Obtiene el elemento por su "id", que es "turno"
    const turno = document.getElementById("turno");

    if (turno !== null && turno !== undefined && turno.textContent !== null) {

        let turnoNumerico : number = parseInt(turno.textContent);
        
        // Controlo que, si el valor es menor a 99, lo aumente en uno
        // y sino, lo ponga a 1 (ignoro el valor 0)
        if (turnoNumerico < 99) {
            turnoNumerico = turnoNumerico + 1;
        } else {
            turnoNumerico = 1;
        }

        // Muestro el resultado
        if (turno != null && turno !== undefined) {
            turno.innerHTML = turnoNumerico.toString().padStart(2, "0");
        }
    }
}

function atrasar() {
    // Obtiene el elemento por su "id", que es "turno"
    const turno = document.getElementById("turno");

    if (turno !== null && turno !== undefined && turno.textContent !== null) {

        let turnoNumerico : number = parseInt(turno.textContent);
        
        // Atraso
        // Controlo que, si el valor es mayor a 1, lo minore en uno
        // y sino, lo ponga a 99 (ignoro el valor 0)
        if (turnoNumerico > 1) {
            turnoNumerico = turnoNumerico - 1;
        } else {
            turnoNumerico = 99;
        }

        // Muestro el resultado
        if (turno != null && turno !== undefined) {
            turno.innerHTML = turnoNumerico.toString().padStart(2, "0");
        }
    }
}

function reset() {
    // Obtiene el elemento por su "id", que es "turno"
    const turno = document.getElementById("turno");

    if (turno !== null && turno !== undefined && turno.textContent !== null) {
        turno.innerHTML = '01';
        
    }
}

function asignarTurno() {
    // Obtiene el elemento por su "id", que es "turno"
    const turno = document.getElementById("turno");

    if (turno !== null && turno !== undefined && turno.textContent !== null) {

        // Obtiene el turno indicado por el operario
        const asignaTurnoInputElement = document.getElementById("ponturno") as HTMLInputElement;
        const asignaTurno = parseInt(asignaTurnoInputElement.value);

        // Controlo que, asignaTurno tenga un valor numérico, sea mayor que cero y menor o
        // igual a 99.
        if (!isNaN(asignaTurno) && asignaTurno > 0 && asignaTurno <= 99) {
            turno.innerHTML = asignaTurno.toString().padStart(2, "0");
        }
        // Limpio el valor indicado
        asignaTurnoInputElement.value = ' ';
    }
}

const botonAdelantar = document.getElementById("adelante");
if (botonAdelantar !== null && botonAdelantar !== undefined) {
    botonAdelantar.addEventListener("click", adelantar);
}

const botonAtrasar = document.getElementById("atras");
if (botonAtrasar !== null && botonAtrasar !== undefined) {
    botonAtrasar.addEventListener("click", atrasar);
}

const botonReset = document.getElementById("reset");
if (botonReset !== null && botonReset !== undefined) {
    botonReset.addEventListener("click", reset);
}

const botonAsignarTurno = document.getElementById("asignar-turno");
if (botonAsignarTurno !== null && botonAsignarTurno !== undefined) {
    botonAsignarTurno.addEventListener("click", asignarTurno);
}