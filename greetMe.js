var greet = function(name) {
    let newName = name[0].toUpperCase() + name.slice(1).toLowerCase()
    return `Hello ${newName}!`
};