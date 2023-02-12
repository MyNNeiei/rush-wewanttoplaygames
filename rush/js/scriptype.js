$(document).ready(function () {

    var options = {
        strings: ['My facebook`s name is Kullanan Sunan',
         'My Instragram name`s _wateronenn_','Nothing to text ;-;',
         'Nice to meet U, I`m so happy.', "Github name's MyNNeiei", 'Today is good, right?', 'I`m ok now.'
        ,'Ba ba ba banana ba ba ba ba na na Potato!!'],
        typeSpeed: 100,
        backSpeed: 30,
        loop: true
    };

    var typed = new Typed('.typing', options);

    $("#current-year").text(new Date().getFullYear());
})