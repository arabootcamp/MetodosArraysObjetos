/*Crear la estructura de datos mediante arreglos y objetos*/
let radiologyArray = [{
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA"
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE"
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE"
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA"
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA"
  }
];

let traumatologyArray = [{
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA"
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE"
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE"
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE"
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA"
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE"
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE"
  }
];

let dentalArray = [{
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE"
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE"
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA"
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA"
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA"
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE"
  }
];

/*Mapeo de los arreglos*/
let map = [{
    title: 'Radiología',
    array: radiologyArray
  },
  {
    title: 'Traumatología',
    array: traumatologyArray
  },
  {
    title: 'Dental',
    array: dentalArray
  }
];
/**********************/

/*1.- Agregar datos a arreglo a Traumatología*/
map[1].array.push({
  hora: '09:00',
  especialidad: 'RENÉ POBLETE',
  paciente: 'ANA GELLONA',
  rut: '13123329-7',
  prevision: 'ISAPRE'
}, );

map[1].array.push({
  hora: '09:30',
  especialista: 'MARIA SOLAR',
  paciente: 'RAMIRO ANDRADE',
  rut: '12221451-K',
  prevision: 'FONASA'
});

map[1].array.push({
  hora: '10:00',
  especialista: 'RAUL LOYOLA',
  paciente: 'CARMEN ISLA',
  rut: '10112348-3',
  prevision: 'ISAPRE'
});

map[1].array.push({
  hora: '10:30',
  especialista: 'ANTONIO LARENAS',
  paciente: 'PABLO LOAYZA',
  rut: '13453234-1',
  prevision: 'ISAPRE'
});

map[1].array.push({
  hora: '12:00',
  especialista: 'MATIAS ARAVENA',
  paciente: 'SUSANA POBLETE',
  rut: '14345656-6',
  prevision: 'FONASA'
});

/*2.-  Eliminar el primer y último elemento del arreglo de Radiología.*/
let deleteFirst = map[0].array.shift();
let deleteLast = map[0].array.pop();
console.log(`\n\nshift para el primero del arreglo:`);
console.log(deleteFirst);
console.log(`\n\npop para el último del arreglo:`);
console.log(deleteLast);

/*3. Imprimir en la página HTML, la lista de consultas médicas de Dental.
8:30 - ANDREA ZUÑIGA - MARCELA RETAMAL - 11123425-6 - ISAPRE*/
let printHtml = (title, array, typeArray) => {
  let nodoH2 = document.createElement('h2');
  nodoH2.innerHTML = title;
  document.body.appendChild(nodoH2);
  for (let data of array) {
    let nodo = document.createElement('p');
    if (typeArray == 'String')
      nodo.innerHTML = data;
    else if (typeArray == 'Objects') {
      let text = '';
      for (let attr in data)
        text += data[attr] + ' - ';
      nodo.innerHTML = text.substring(0, text.length - 3);
    }
    document.body.appendChild(nodo);
  }
};
printHtml('Consultas Médicas Dental', map[2].array, 'Objects');

/*4.- Imprimir un listado total de todos los pacientes que se atendieron en el centro
médico. Para esto, deberá unir todos los nombres de pacientes e imprimir uno por
cada párrafo.*/
let patients = [];
for (let i = 0; i < 3; i++)
  for (let data of map[i].array)
    patients.push(data.paciente);
let setPatients = new Set(patients); //Set para eliminar pacientes repetidos
printHtml('Pacientes Centro Médico, (' + setPatients.size + ')', setPatients, 'String');