document.getElementById("submit").addEventListener("click", function() {
    var birthday = new Date(document.querySelector("#birthday").value);
    var month = birthday.getMonth() + 1;
    var day = birthday.getDate();
    var zodiacSign = "No a seleccionado una fecha valida";
    var imageSrc = "";
    
    switch (month) {
        
        case 1:
            zodiacSign = (day <= 19) ? "Capricornio" : "Acuario";
            imageSrc = (day <= 19) ? "<img src='https://www.horoscope.com/images-US/signs/profile-capricorn.png'width=20%>" : "<img src='https://www.horoscope.com/images-US/signs/profile-aquarius.png'width=20%>";
        break;
        case 2:
            zodiacSign = (day <= 18) ? "Acuario" : "Piscis";
            imageSrc = (day <= 18) ? "<img src='https://www.horoscope.com/images-US/signs/profile-aquarius.png'width=20%>" : "<img src='https://www.horoscope.com/images-US/signs/profile-pisces.png'width=20%>";
        break;
        case 3:
            zodiacSign = (day <= 20) ? "Piscis" : "Aries";
            imageSrc = (day <= 20) ? "<img src='https://www.horoscope.com/images-US/signs/profile-pisces.png'width=20%>" : "<img src='https://www.horoscope.com/images-US/signs/profile-aries.png'width=20%>";
        break;
        case 4:
            zodiacSign = (day <= 19) ? "Aries" : "Tauro";
            imageSrc = (day <= 19) ?  "<img src='https://www.horoscope.com/images-US/signs/profile-aries.png'width=20%>" : "<img src='https://www.horoscope.com/images-US/signs/profile-taurus.png'width=20%>";
        break;
        case 5:
            zodiacSign = (day <= 20) ? "Tauro" : "Géminis";
            imageSrc = (day <= 20) ? "<img src='https://www.horoscope.com/images-US/signs/profile-taurus.png'width=20%>" : "<img src='https://www.horoscope.com/images-US/signs/profile-gemini.png'width=20%>";
        break;
        case 6:
            zodiacSign = (day <= 20) ? "Géminis" : "Cáncer";
            imageSrc = (day <= 20) ? "<img src='https://www.horoscope.com/images-US/signs/profile-gemini.png'width=20%>": "<img src='https://www.horoscope.com/images-US/signs/profile-cancer.png'width=20%>";
        break;
        case 7:
            zodiacSign = (day <= 22) ? "Cáncer" : "Leo";
            imageSrc = (day <= 22) ? "<img src='https://www.horoscope.com/images-US/signs/profile-cancer.png'width=20%>" : "<img src='https://www.horoscope.com/images-US/signs/profile-leo.png'width=20%>";
        break;
        case 8:
            zodiacSign = (day <= 22) ? "Leo" : "Virgo";
            imageSrc = (day <= 22) ? "<img src='https://www.horoscope.com/images-US/signs/profile-leo.png'width=20%>" : "<img src='https://www.horoscope.com/images-US/signs/profile-virgo.png'width=20%>";
        break;
        case 9:
            zodiacSign = (day <= 22) ? "Virgo" : "Libra";
            imageSrc = (day <= 22) ? "<img src='https://www.horoscope.com/images-US/signs/profile-virgo.png'width=20%>" : "<img src='https://www.horoscope.com/images-US/signs/profile-libra.png'width=20%>";
        break;
        case 10:
            zodiacSign = (day <= 22) ? "Libra" : "Escorpio";
            imageSrc = (day <= 22) ? "<img src='https://www.horoscope.com/images-US/signs/profile-libra.png'width=20%>" : "<img src='https://www.horoscope.com/images-US/signs/profile-scorpio.png'width=20%>";
        break;
        case 11:
            zodiacSign = (day <= 21) ? "Escorpio" : "Sagitario";
            imageSrc = (day <= 21) ? "<img src='https://www.horoscope.com/images-US/signs/profile-scorpio.png'width=20%>" : "<img src='https://www.horoscope.com/images-US/signs/profile-sagittarius.png'width=20%>";
        break;
        case 12:
            zodiacSign = (day <= 21) ? "Sagitario" : "Capricornio";
            imageSrc = (day <= 21) ? "<img src='https://www.horoscope.com/images-US/signs/profile-sagittarius.png'width=20%>" : "<img src='https://www.horoscope.com/images-US/signs/profile-capricorn.png'width=20%>";
        break;
    }
    document.getElementById("result").innerHTML = "Tu signo zodiacal es: " + zodiacSign;
    document.getElementById("photo").innerHTML = imageSrc;
});
  