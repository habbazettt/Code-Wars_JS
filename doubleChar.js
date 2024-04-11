function doubleChar(str) {
    let newStr = str.split('').map(char => char + char).join('')
    return newStr
  }
  