const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('the p1 promise is resolved')
        resolve(100);
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('the p2 promise is resolved')
        reject(200);
    }, 5000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('the p3 promise is resolved')
        resolve(300);
    }, 1000);
});

Promise.all([p1,p2,p3]).then((result) =>{
  const total = result.reduce((p,c) => p + c);

  console.log('result is ' + result);
  console.log('total of result ' + total);
})
.catch((result)=>{
    console.log(result)
})