$(document).ready(function () {

    var options = {
        strings: ['My facebook`s name is Chutipon Singto',
         'My Instragram name`s armchtp._',"Github name's Chutipon01",
         'Nice to meet YOU, and I love You!.'],
        typeSpeed: 100,
        backSpeed: 30,
        loop: true
    };

    var typed = new Typed('.typing', options);

    $("#current-year").text(new Date().getFullYear());
})