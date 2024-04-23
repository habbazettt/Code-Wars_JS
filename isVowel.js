function isVow(a){
    let newArr = []

    const aCode = 'a'.charCodeAt()
    const eCode = 'e'.charCodeAt()
    const iCode = 'i'.charCodeAt()
    const oCode = 'o'.charCodeAt()
    const uCode = 'u'.charCodeAt()
    
    for(let i = 0; i< a.length; i++){
        if(a[i] === aCode) {
            newArr.push('a')
        } else if(a[i] === eCode) {
            newArr.push('e')
        } else if(a[i] === iCode) {
            newArr.push('i')
        } else if(a[i] === oCode) {
            newArr.push('o')
        } else if(a[i] === uCode) {
            newArr.push('u')
        } else {
            newArr.push(a[i])
        }
    }

    return newArr
}

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));