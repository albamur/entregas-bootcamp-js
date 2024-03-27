import "./style.css";
import { pacientes, Pacientes } from "./modelo";

console.log("APARTADO 1");
console.log("a) Queremos extraer la lista de pacientes que están asignados a la especialidad de Pediatría");

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  // Tu implementación aquí :)
  let pacientesDePediatria : Pacientes[] = []
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      const paciente = {
        ...pacientes[i]
      };
      pacientesDePediatria = [...pacientesDePediatria, paciente]
    }
  }
  return pacientesDePediatria
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));


console.log("b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.");

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
  // Tu implementación aquí :)
  let pacientesDePediatriaMenoresDeDiezAnios : Pacientes[] = []
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10 ) {
      const paciente = {
        ...pacientes[i],
      };
        pacientesDePediatriaMenoresDeDiezAnios = [...pacientesDePediatriaMenoresDeDiezAnios, paciente]
    }
  }
  return pacientesDePediatriaMenoresDeDiezAnios
};
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));


console.log("APARTADO 2");
console.log("Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.");

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;

  // Tu implementación aquí :)
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
        activarProtocolo = true;
        break;
    }
  }

  return activarProtocolo;
};

console.log(activarProtocoloUrgencia(pacientes));


console.log("APARTADO 3");
console.log("El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.");

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  // Tu implementación aquí :)

  let pacientesDeMedicoDeFamilia : Pacientes[] = []
  for (let i = 0; i < pacientes.length; i++) {
    const paciente = {
      ...pacientes[i],
    };
    if (paciente.especialidad === "Medico de familia" || paciente.especialidad === "Pediatra") {
      if (paciente.especialidad === "Pediatra") {
          paciente.especialidad = "Medico de familia"
      }
      
      pacientesDeMedicoDeFamilia = [...pacientesDeMedicoDeFamilia, paciente];
    }
  }
  return pacientesDeMedicoDeFamilia;
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));


console.log("Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría");


const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  // Tu implementación aquí :)
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
        return true;
    }
  }
  return false;
};

console.log(HayPacientesDePediatria(pacientes));


console.log("APARTADO 5");
console.log("Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y los que están asignados a Pediatría y a Cardiología");

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = ( pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
  // Tu implementación aquí :)
  const recuentoPacientes : NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0
  }

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Medico de familia") {
      recuentoPacientes.medicoDeFamilia += 1
    }
    if (pacientes[i].especialidad === "Pediatra") {
      recuentoPacientes.pediatria += 1
    }
    if (pacientes[i].especialidad === "Cardiólogo") {
      recuentoPacientes.cardiologia += 1
    }
  }

  return recuentoPacientes
};

console.log(cuentaPacientesPorEspecialidad(pacientes));

