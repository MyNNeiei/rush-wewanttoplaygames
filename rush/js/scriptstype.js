$(document).ready(function () {

    var options = {
        strings: ['My nickname is NorNor or Namneung. I like to playing games and eating yummy food.',
         'Always forgive but never forget, learn from your mistakes but never regret.','Nothing to text ;-;',
         'Nice to meet U, I`m so happy.', "But I often feel so tried. :(", 'Today is good, right?', 'I`m ok now.'
        ,'Ba ba ba banana ba ba ba ba na na Potato!!'],
        typeSpeed: 100,
        backSpeed: 30,
        loop: true
    };

    var typed = new Typed('.typing', options);

    $("#current-year").text(new Date().getFullYear());
});