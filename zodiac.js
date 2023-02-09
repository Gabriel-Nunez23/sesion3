function zodiac() {
    let day, month, year;
    day = parseInt (document.formulario.day.value);
    month = parseInt (document.formulario.month.value);
    year = parseInt (document.formulario.year.value);

    var image = document.getElementById("imagenes");
    
}


function determineSign(day, month) {
  let sign = '';

  switch (month) {
    case 1:
      sign = (day <= 19) ? 'Capricornio' : 'Acuario';
      break;
    case 2:
      sign = (day <= 18) ? 'Acuario' : 'Piscis';
      break;
    case 3:
      sign = (day <= 20) ? 'Piscis' : 'Aries';
      break;
    case 4:
      sign = (day <= 19) ? 'Aries' : 'Tauro';
      break;
    case 5:
      sign = (day <= 20) ? 'Tauro' : 'Géminis';
      break;
    case 6:
      sign = (day <= 20) ? 'Géminis' : 'Cáncer';
      break;
    case 7:
      sign = (day <= 22) ? 'Cáncer' : 'Leo';
      break;
    case 8:
      sign = (day <= 22) ? 'Leo' : 'Virgo';
      break;
    case 9:
      sign = (day <= 22) ? 'Virgo' : 'Libra';
      break;
    case 10:
      sign = (day <= 22) ? 'Libra' : 'Escorpio';
      break;
    case 11:
      sign = (day <= 21) ? 'Escorpio' : 'Sagitario';
      break;
    case 12:
      sign = (day <= 21) ? 'Sagitario' : 'Capricornio';
      break;
  }

  return sign;
}

const day = 5;
const month = 3;
const sign = determineSign(day, month);
console.log(`Su signo zodiacal es: ${sign}`);
