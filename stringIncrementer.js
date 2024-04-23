function incrementString(str) {
    const body = str.slice(0, -1);
    const lastDigit = str.slice(-1).match(/[0-9]/)
    return lastDigit === null ? str + "1" : lastDigit != 9 ? body + (+lastDigit + 1) : incrementString(body) + "0"
}
console.log(incrementString("foo0042bar"));

function incrementString(input) {
    if (isNaN(parseInt(input[input.length - 1]))) return input + '1';
    return input.replace(/(0*)([0-9]+$)/, function (match, p1, p2) {
        var up = parseInt(p2) + 1;
        return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
    });
}