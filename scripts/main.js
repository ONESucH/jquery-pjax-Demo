'use strict';

function func() {
    var a = $('.a').val(),
        c = Number(a);

    switch (c) {
        case 1 || 4 || 5 || 9 || 10:
            a = c + '(-ый )';
            break;
        case 2 || 6 || 7 || 8:
            a = c + '(-ой )';
            break;
        case 3:
            a = c + '(-ий )';
            break;
        default :
            a = 'Не существует';
            break;
    }

    console.log(a);
    $('#result').val(a);
}