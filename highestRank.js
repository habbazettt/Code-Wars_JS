function highestRank(arr){
    const obj = {};
    
    for (let i of arr) {
      obj[i] = obj[i] ? obj[i] + 1 : 1;
    }
    
    let b = 0;
    let m = null;
    Object.entries(obj).forEach(item => {
      if(item[1] >= b) {
        b = item[1];
        m = item[0]
      }
    })
    
    return Number(m);
}

highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])