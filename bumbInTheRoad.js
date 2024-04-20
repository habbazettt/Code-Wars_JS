function bump(x){
  let bump = 0
  let arr = x.split('')
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 'n') {
      bump += 1
    }
  }
  return bump > 15 ? 'Car Dead' : 'Woohoo!'
}