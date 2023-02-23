/* Inicio de la función y declarar variables */

document.getElementById("submit").addEventListener("click", function() {
    var birthday = new Date(document.querySelector("#birthday").value);
    var month = birthday.getMonth() + 1;
    var day = birthday.getDate();
    var zodiacSign = "No a seleccionado una fecha valida";
    var imageSrc = "";

/* Se evalua el valor obtenido en dia y mes y hace una coincidencia con el respectivo signo y se le asigna una imagen */

    switch (month) {
        
        case 1:
            zodiacSign = (day <= 19) ? "Capricornio" : "Acuario";
            imageSrc = (day <= 19) ? "https://www.horoscope.com/images-US/signs/profile-capricorn.png" : "https://www.horoscope.com/images-US/signs/profile-aquarius.png";
        break;
        case 2:
            zodiacSign = (day <= 18) ? "Acuario" : "Piscis";
            imageSrc = (day <= 18) ? "https://www.horoscope.com/images-US/signs/profile-aquarius.png" : "https://www.horoscope.com/images-US/signs/profile-pisces.png";
        break;
        case 3:
            zodiacSign = (day <= 20) ? "Piscis" : "Aries";
            imageSrc = (day <= 20) ? "https://www.horoscope.com/images-US/signs/profile-pisces.png" : "https://www.horoscope.com/images-US/signs/profile-aries.png";
        break;
        case 4:
            zodiacSign = (day <= 19) ? "Aries" : "Tauro";
            imageSrc = (day <= 19) ?  "https://www.horoscope.com/images-US/signs/profile-aries.png" : "https://www.horoscope.com/images-US/signs/profile-taurus.png";
        break;
        case 5:
            zodiacSign = (day <= 20) ? "Tauro" : "Géminis";
            imageSrc = (day <= 20) ? "https://www.horoscope.com/images-US/signs/profile-taurus.png" : "https://www.horoscope.com/images-US/signs/profile-gemini.png";
        break;
        case 6:
            zodiacSign = (day <= 20) ? "Géminis" : "Cáncer";
            imageSrc = (day <= 20) ? "https://www.horoscope.com/images-US/signs/profile-gemini.png": "https://www.horoscope.com/images-US/signs/profile-cancer.png";
        break;
        case 7:
            zodiacSign = (day <= 22) ? "Cáncer" : "Leo";
            imageSrc = (day <= 22) ? "https://www.horoscope.com/images-US/signs/profile-cancer.png" : "https://www.horoscope.com/images-US/signs/profile-leo.png";
        break;
        case 8:
            zodiacSign = (day <= 22) ? "Leo" : "Virgo";
            imageSrc = (day <= 22) ? "https://www.horoscope.com/images-US/signs/profile-leo.png" : "https://www.horoscope.com/images-US/signs/profile-virgo.png";
        break;
        case 9:
            zodiacSign = (day <= 22) ? "Virgo" : "Libra";
            imageSrc = (day <= 22) ? "https://www.horoscope.com/images-US/signs/profile-virgo.png" : "https://www.horoscope.com/images-US/signs/profile-libra.png";
        break;
        case 10:
            zodiacSign = (day <= 22) ? "Libra" : "Escorpio";
            imageSrc = (day <= 22) ? "https://www.horoscope.com/images-US/signs/profile-libra.png" : "https://www.horoscope.com/images-US/signs/profile-scorpio.png";
        break;
        case 11:
            zodiacSign = (day <= 21) ? "Escorpio" : "Sagitario";
            imageSrc = (day <= 21) ? "https://www.horoscope.com/images-US/signs/profile-scorpio.png" : "https://www.horoscope.com/images-US/signs/profile-sagittarius.png";
        break;
        case 12:
            zodiacSign = (day <= 21) ? "Sagitario" : "Capricornio";
            imageSrc = (day <= 21) ? "https://www.horoscope.com/images-US/signs/profile-sagittarius.png" : "https://www.horoscope.com/images-US/signs/profile-capricorn.png";
        break;
    }

/* Alerta utilizando la libreria de Sweet Alert*/

    Swal.fire({
        title: 'Tu signo zodiacal es',
        text: `${zodiacSign}`,
        imageUrl: `${imageSrc}`,
        imageAlt: `${zodiacSign}`,
        imageWidth: 200,
        imageHeight: 200,
        imageClass: "sign-image",
        animation: false,
        backdrop: true,
        timer: 2000,
        timerProgressBar: true,
        allowOutsideClick: true,
        showConfirmButton: false,
    })
    
});  