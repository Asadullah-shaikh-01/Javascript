const prod_price = 1000

let p = new Promise((resolve,reject) => {
    setTimeout(() =>{
       if(prod_price > 1000)
       {
        resolve(prod_price);
       }
       else{
        reject('the price is less...')
       }
    }, 3000);
});

p.then((result) =>{
    console.log(result);
    if(result > 1000 && result < 2500)
    {
        let result1 = result - result * .5;
        return result1;
    }
})
.then((result) =>{
    console.log(result);
    return result * 7;
})
.then((result)=>{
    console.log(result);
})
.catch((result)=>{
    console.log(result);
})