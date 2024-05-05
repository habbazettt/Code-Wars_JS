function fuelPrice(litres, pricePerLiter) {
    for(let i = 2; i <= 10; i +=2){
      if(i <= litres) pricePerLiter -= 0.05;
    }
      return Number((litres * pricePerLiter).toFixed(2));
}