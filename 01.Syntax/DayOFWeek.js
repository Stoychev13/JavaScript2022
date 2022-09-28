function dayOFWeek (days){

    let output

    switch (days){
        case ('Monday') :output = '1';  break;
        case ('Tuseday') :output = '2'; break;
        case('Wednesday') : output = '3'; break;
        case('Thursday') :output = '4'; break;
        case('Friday') :output = '5'; break;
        case('Saturday') :output = '6'; break;
        case('Sunday') :output = '7'; break;
        default :output = 'Invalid'; break;
    }

    console.log(output);

}