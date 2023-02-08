function zodiac() {
    let day, month, year;
    day = parseInt (document.formulario.day.value);
    month = parseInt (document.formulario.month.value);
    year = parseInt (document.formulario.year.value);

    var image = document.getElementById("imagenes");
    if ((day>=21&&month==3) || (day<=20&&month==4)) {
        document.getElementById("imagenes").src="aries.jpg";
    }
    if ((day>=24&&month==9) || (day<=23&&month==10)) {
        document.getElementById("imagenes").src="libra.jpg";
    }
    if ((day>=21&&month==4) || (day<=21&&month==5)) {
        document.getElementById("imagenes").src="tauro.jpg";
    }
    if ((day>=24&&month==10) || (day<=22&&month==11)) {
        document.getElementById("imagenes").src="escorpio.jpg";
    }
    if ((day>=22&&month==5) || (day<=21&&month==6)) {
        document.getElementById("imagenes").src="geminis.jpg";
    }
    if ((day>=23&&month==11) || (day<=21&&month==12)) {
        document.getElementById("imagenes").src="sagitario.jpg";
    }
    if ((day>=21&&month==6) || (day<=23&&month==7)) {
        document.getElementById("imagenes").src="cancer.jpg";
    }
    if ((day>=22&&month==12) || (day<=20&&month==1)) {
        document.getElementById("imagenes").src="capricornio.jpg";
    }
    if ((day>=24&&month==7) || (day<=23&&month==8)) {
        document.getElementById("imagenes").src="leo.jpg";
    }
    if ((day>=21&&month==1) || (day<=19&&month==2)) {
        document.getElementById("imagenes").src="acuario.jpg";
    }
    if ((day>=24&&month==8) || (day<=23&&month==9)) {
        document.getElementById("imagenes").src="virgo.jpg";
    }
    if ((day>=20&&month==2) || (day<=20&&month==3)) {
        document.getElementById("imagenes").src="piscis.jpg";
    }
}