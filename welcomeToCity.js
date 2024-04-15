function sayHello( name, city, state ) {
    let newName = name.join(' ')
    return `Hello, ${newName}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'));