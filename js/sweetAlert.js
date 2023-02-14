$("#submit").click(function(){
    Swal.fire({
        html: '<p id="result"></p>',
        html: '<p id="photo" src="" alt=""></p>',
        backdrop: true,
        timer: 5000,
        timerProgressBar: true,
        allowOutsideClick: true,
    })
});
