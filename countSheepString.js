let countSheep = function (num){
    if(num === 0){
        return ''
    } else {
        return countSheep(num - 1) + num + ' sheep...';
    }
}