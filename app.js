/*challenge 22*/

let Nombre = prompt('ingrese su nombre');
let Edad = parseInt(prompt('ingrese su edad en años'));
let Sexo = prompt('ingrese su sexo (masculino/femenino)').toLowerCase();
let CondAdd = prompt('ingrese alguna condicion adicional de tenerla').toLowerCase();
let Dolencia = prompt('ingrese su dolencia').toLowerCase();
let Respuesta = '';
let FlagEmbarazo = false;

if(isNaN(Edad) || Edad < 0 || !isNaN(Nombre) || !isNaN(Sexo) || !isNaN(CondAdd) || !isNaN(Dolencia))
{
  alert('ingreso un dato invalido, intentelo nuevamente');
} 
else 
{
  if(Sexo.includes('femenino') && CondAdd.includes('embarazada')) {FlagEmbarazo = true};
  switch (true) {
    case (Dolencia.includes('dolor abdominal')):
      Respuesta = 'realizarse una ecografia abdominal';
      break;
    case (Dolencia.includes('dolor de pecho') && !FlagEmbarazo):
      Respuesta = 'realizarse una radiografia';
      break;
    case (Dolencia.includes('dolor intestinal') && !FlagEmbarazo):
      Respuesta = 'realizarse una tomografia abdominal';
      break;
    case (Dolencia.includes('fiebre')):
      Respuesta = 'realizarse un analisis de sangre completo';
      break;
      default:
      Respuesta = 'visitar a su medico';
  }
  document.write((Sexo.includes('masculino')? 'señor ':'señora ') + Nombre + ' usted debe ' + Respuesta + ' <br/>');
}

/*challenge 23*/

let letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
let dni = null;

while(confirm('desea mantenerse en la aplicacion?'))
{
  dni = parseInt(prompt('ingrese un numero de dni'));
  if(isNaN(dni) || dni < 0 || dni > 99999999)
  {
    alert('ingreso un dni invalido, intentelo nuevamente');
  } 
  else 
  {
    alert('la letra asignada a ese dni (' + dni.toString()  + ' % 23 = ' + (dni%23).toString() + ') es ' + letras[dni%23]);
  }
}

/*challenge 24*/

let oro = 0;
let pociones = 0;

for (let i =0; i < 10; i++)
{
  switch (Math.floor(Math.random() * 3)) {
    case (0):
      oro = oro + 10;
      document.write('el cofre ' + (i+1).toString() + ' contenia 10 monedas de oro <br/>');
      break;
    case (1):
      pociones++;
      document.write('el cofre ' + (i+1).toString() + ' contenia 1 pocion de vida <br/>');
      break;
    case (2):
      document.write('el cofre ' + (i+1).toString() + ' no contenia nada <br/>');
      break;
  }
}
document.write('su personaje abrio 10 cofres y tiene ' + oro.toString() + ' monedas de oro y ' + pociones.toString() + ' pociones de vida <br/>');

/*challenge 25*/
let nombreChar = prompt('ingrese el nombre de su personaje');

const golpes = [
  ['jab',10],
  ['direct',20],
  ['crossed',30],
  ['blitz',40],
  ['hook',50],
  ['uppercut',60],
  ['swing',70],
  ['cross',80]
];

let golpesRecibidos = [];
let daño = 0;
let golpeMasFuerte = 0;

function JuegoPelea ()
{
  let golpeActual= 0;

  for (let i =0; i < 10; i++)
  {
    golpeActual = Math.floor(Math.random() * 8);
    golpesRecibidos.push([golpes[golpeActual][0],golpes[golpeActual][1]]);
    daño = daño + golpes[golpeActual][1];
  }
  golpesRecibidos.forEach(p => { if (p[1] > golpeMasFuerte) golpeMasFuerte = p[1]; });
}

JuegoPelea();

document.write('Su personaje ' + nombreChar + ' recibio ' + daño.toString() + ' puntos de daño y el golpe mas fuerte fue de ' + golpeMasFuerte.toString() + ' puntos <br/>');
document.write('Los puntos de daño fueron por los siguientes golpes: <br/>');
golpesRecibidos.forEach(p => {document.write(' &#x2022; ' + p[0] + ', daño: ' + p[1] + '<br/>');});


