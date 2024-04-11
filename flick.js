function flickSwitch(arr) {
    let mySwitch = true
    return arr.map((v) => {
        return (v === 'flick') ? mySwitch = !mySwitch : mySwitch
    })
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"]));