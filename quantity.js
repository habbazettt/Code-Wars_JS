function mango(quantity, price){
    let totalCost = 0;
      while(quantity > 0){
        if(quantity > 2){
          quantity -= 3;
          totalCost += 2 * price;
        }else{
          totalCost +=  price;
          quantity -=1;
        }
      }
      return totalCost;
    }