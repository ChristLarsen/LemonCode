type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
    id: number;
    nombre: string;
    apellidos: string;
    sexo: string;
    temperatura: number;
    frecuenciaCardiaca: number;
    especialidad: Especialidad;
    edad: number;
}

const pacientes: Pacientes[] = [
    {
        id: 1,
        nombre: "John",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 80,
        especialidad: "Medico de familia",
        edad: 44,
    },
    {
        id: 2,
        nombre: "Jane",
        apellidos: "Doe",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 70,
        especialidad: "Medico de familia",
        edad: 43,
    },
    {
        id: 3,
        nombre: "Junior",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 90,
        especialidad: "Pediatra",
        edad: 8,
    },
    {
        id: 4,
        nombre: "Mary",
        apellidos: "Wien",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 120,
        especialidad: "Medico de familia",
        edad: 20,
    },
    {
        id: 5,
        nombre: "Scarlett",
        apellidos: "Somez",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 110,
        especialidad: "Cardiólogo",
        edad: 30,
    },
    {
        id: 6,
        nombre: "Brian",
        apellidos: "Kid",
        sexo: "Male",
        temperatura: 39.8,
        frecuenciaCardiaca: 80,
        especialidad: "Pediatra",
        edad: 11,
    },
];

// Apartado 1.
// a)
const obtenPacientesAsignadosAPediatria = ( pacientes: Pacientes[] ): Pacientes[] => {
    let pacientesPediatria: Pacientes[] = [];

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
            pacientesPediatria.push(pacientes[i]);
        }
    }

    return pacientesPediatria;
};
console.log(obtenPacientesAsignadosAPediatria(pacientes));

// b)
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = ( pacientes: Pacientes[] ): Pacientes[] => {
    let pacientesPediatriaMenorDiezAnios: Pacientes[] = [];

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad <= 10) {
            pacientesPediatriaMenorDiezAnios.push(pacientes[i]);
        }
    }

    return pacientesPediatriaMenorDiezAnios;
};
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// Apartado 2.

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProtocolo = false;

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].temperatura > 39 && pacientes[i].frecuenciaCardiaca > 100) {
            activarProtocolo = true;
            break;
        };   
    };

    return activarProtocolo;
};
console.log(activarProtocoloUrgencia(pacientes));

// Apartado 3.

const reasignaPacientesAMedicoFamilia = ( pacientes: Pacientes[] ): Pacientes[] => {

    let pacientesMedicoFamilia : Pacientes[] = [];

    for (let i = 0; i < pacientes.length; i++) {
        const paciente = pacientes[i];

        pacientesMedicoFamilia.push({
            ...paciente,
            especialidad : paciente.especialidad === "Pediatra" ? "Medico de familia" : paciente.especialidad
        });
    };

    return pacientesMedicoFamilia;
};
console.log(reasignaPacientesAMedicoFamilia(pacientes));

// Apartado 4.

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {

    let hayPacientesDePediatria = false;

    for (let i = 0; i < pacientes.length && !hayPacientesDePediatria; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
            hayPacientesDePediatria = true;
        };
    };

    return hayPacientesDePediatria;
};
console.log("¿Quedan pacientes de pediatría?  ", HayPacientesDePediatria(pacientes));

// Apartado 5.

interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
};
  
const cuentaPacientesPorEspecialidad = ( pacientes: Pacientes[] ): NumeroPacientesPorEspecialidad => {

    let pacientesPorEspecialidad : NumeroPacientesPorEspecialidad = {
        medicoDeFamilia: 0,
        pediatria : 0,
        cardiologia : 0 };
    
    for (let i = 0; i < pacientes.length; i++) {
    
        switch(pacientes[i].especialidad) {
            case "Medico de familia":
                pacientesPorEspecialidad.medicoDeFamilia++;
                break;
            case "Pediatra":
                pacientesPorEspecialidad.pediatria++;
                break;
            case "Cardiólogo":
                pacientesPorEspecialidad.cardiologia++;
                break;
        };
    };
    return pacientesPorEspecialidad;

};
console.log(cuentaPacientesPorEspecialidad(pacientes));
