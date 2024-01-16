const price = 500;

let countValue = new Promise((resolve, reject) => {
    if(price > 800)
    {
      resolve("the price is more than 800")
    }
    else{
      reject("the price is very low....")
    }
})
countValue.then(function successValue(result) //only execute is your promise is returning resolve message
{
  console.log(result);  // the resolve message will be printed here.
})
.catch(function errorValue(result)    // only execute if the exception or error is thrown from the promise
{
    console.log(result);
})
.finally(function always()
{
    console.log('the price is low or high i will always execute');
})
