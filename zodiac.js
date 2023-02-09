function calculateZodiacSign() {
  var birthday = new Date(document.querySelector("#birthday").value);
  var month = birthday.getMonth();
  var day = birthday.getDate();
  var zodiacSign;

  switch (month) {
    case 0:
      zodiacSign = (day <= 19) ? "Capricorn" : "Aquarius";
      break;
    case 1:
      zodiacSign = (day <= 18) ? "Aquarius" : "Pisces";
      break;
    case 2:
      zodiacSign = (day <= 20) ? "Pisces" : "Aries";
      break;
    case 3:
      zodiacSign = (day <= 19) ? "Aries" : "Taurus";
      break;
    case 4:
      zodiacSign = (day <= 20) ? "Taurus" : "Gemini";
      break;
    case 5:
      zodiacSign = (day <= 20) ? "Gemini" : "Cancer";
      break;
    case 6:
      zodiacSign = (day <= 22) ? "Cancer" : "Leo";
      break;
    case 7:
      zodiacSign = (day <= 22) ? "Leo" : "Virgo";
      break;
    case 8:
      zodiacSign = (day <= 22) ? "Virgo" : "Libra";
      break;
    case 9:
      zodiacSign = (day <= 22) ? "Libra" : "Scorpio";
      break;
    case 10:
      zodiacSign = (day <= 21) ? "Scorpio" : "Sagittarius";
      break;
    case 11
      zodiacSign = (day <= 21) ? 'Escorpio' : 'Sagitario';
      break;
    case 12:
      zodiacSign = (day <= 21) ? 'Sagitario' : 'Capricornio';
      break;
  }
  return zodiacSign;

})
