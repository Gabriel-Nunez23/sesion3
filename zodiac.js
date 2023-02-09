function calculateZodiacSign() {
  var birthday = new Date(document.querySelector("#birthday").value);
  var month = birthday.getMonth();
  var day = birthday.getDate();
  var zodiacSign;
  var result = document.querySelector("#result")

  switch (month) {
    case 0:
        zodiacSign = (day <= 19) ? "Capricornio" : "Acuario";
      document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-capricorn.png'width=20%>";
      break;
    case 1:
        zodiacSign = (day <= 18) ? "Acuario" : "Piscis";

        document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aquarius.png'width=20%>";
      break;
    case 2:
      zodiacSign = (day <= 20) ? "Piscis" : "Aries";
      document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-pisces.png'width=20%>"
      break;
    case 3:
      zodiacSign = (day <= 19) ? "Aries" : "Tauro";
      ;
      document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aries.png'width=20%>";
      break;
    case 4:
      zodiacSign = (day <= 20) ? "Tauros" : "Géminis";
      document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-taurus.png'width=20%>";
      break;
    case 5:
      zodiacSign = (day <= 20) ? "Géminis" : "Cáncer";
      document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-gemini.png'width=20%>";
      break;
    case 6:
      zodiacSign = (day <= 22) ? "Cáncer" : "Leo";
      document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-cancer.png'width=20%>";
      break;
    case 7:
      zodiacSign = (day <= 22) ? "Leo" : "Virgo";
      document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-leo.png'width=20%>";
      break;
    case 8:
      zodiacSign = (day <= 22) ? "Virgo" : "Libra";
      document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-virgo.png'width=20%>";
      break;
    case 9:
      zodiacSign = (day <= 22) ? "Libra" : "Escorpio";
      document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-libra.png'width=20%>";
      break;
    case 10:
      zodiacSign = (day <= 21) ? "Escorpio" : "Sagitario";
      document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-scorpio.png'width=20%>";
      break;
    case 11:
      zodiacSign = (day <= 21) ? "Sagitario" : "Capricornio";
      document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-sagittarius.png'width=20%>";
      break;
  }
    result.innerHTML = `Tu signo zodiacal es ${zodiacSign}`;
}