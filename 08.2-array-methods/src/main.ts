import "./style.css";
import { pacientes, Pacientes, NumeroPacientesPorEspecialidad } from "./modelo";

console.log("APARTADO 1");
console.log("a) Queremos extraer la lista de pacientes que están asignados a la especialidad de Pediatría");

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  // Tu implementación aquí :)
  //FILTER: nos devuelve un nuevo array con los elementos que cumples con una condición que le pasamos
  return pacientes.filter((paciente) => paciente.especialidad === "Pediatra")
};
console.log(obtenPacientesAsignadosAPediatria(pacientes));


console.log("b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.");

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
  // Tu implementación aquí :)
  //FILTER: nos devuelve un nuevo array con los elementos que cumples con una condición que le pasamos
  return pacientes.filter((paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10);
};
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));


console.log("APARTADO 2");
console.log("Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.");

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  //SOME: devuelve true si alguno de los elementos del array cumplen la condición
  return pacientes.some((paciente) => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39)
};
console.log(activarProtocoloUrgencia(pacientes));


console.log("APARTADO 3");
console.log("El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.");

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  // MAP: aplica una transformación a cada uno de los elementos de un array
  return pacientes.map((paciente) => {
    const pacienteReasignado = {
      ...paciente,
    }

    if (pacienteReasignado.especialidad === "Pediatra") {
        pacienteReasignado.especialidad = "Medico de familia"
    } 
    return pacienteReasignado
  })
};
console.log(reasignaPacientesAMedicoFamilia(pacientes));


console.log("Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría");

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  // Tu implementación aquí :)
  //EVERY: devuelve true si todos los elementos del array cumplen la condición
  return pacientes.every((paciente) => paciente.especialidad === "Pediatra")
};
console.log(HayPacientesDePediatria(pacientes));


console.log("APARTADO 5");
console.log("Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y los que están asignados a Pediatría y a Cardiología");

const cuentaPacientesPorEspecialidad = ( pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
  // Tu implementación aquí :)
  const recuentoPacientes : NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0
  }

  // FOREACH: recorre cada uno de los elementos del array
  pacientes.forEach((paciente) => {
    if (paciente.especialidad === "Medico de familia") {
      recuentoPacientes.medicoDeFamilia += 1
    } else if (paciente.especialidad === "Pediatra") {
      recuentoPacientes.pediatria += 1
    } else if (paciente.especialidad === "Cardiólogo") {
      recuentoPacientes.cardiologia += 1
    }
  });

  return recuentoPacientes;
}
console.log(cuentaPacientesPorEspecialidad(pacientes));

