function chislo(n) {
    if (n > 1001) {
      return "Данные неверны";
    }
    
    let num = Math.sqrt(n);
       for (let i = 2; i <= num; i++)
           if (n % i === 0) {
             return "Не простое число";
           } 
           return "Простое число";
  }
  
  console.log(chislo(1005));
  console.log(chislo(13));
  console.log(chislo(55));