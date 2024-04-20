function sortGiftCode(code){
   let arr = code.split('').sort()
   return arr.join('')
}

console.log(sortGiftCode('pqksuvy'));