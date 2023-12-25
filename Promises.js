//producing Promises
const promiseOne = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    console.log("Asysnc task is compelet");
    myResolve();
  }, 2000);
});

promiseOne.then(function () {
  console.log("Promises are successfull");
});

new Promise(function (Resolve, Reject) {
  setTimeout(function () {
    console.log("Asysc 2 is successfull");
    Resolve();
  }, 1000);
}).then(function () {
  console.log("Async two is full fill the need ");
});

const promiseThree = new Promise(function (Resolve, Reject) {
  setTimeout(function () {
    Resolve({ Username: "asad shai", Email: "asadshaikhas828654@gmail.com" });
  }, 1500);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (Resolve, Reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      Resolve({ Username: "asad shaikh", Password: "Asad12285" });
    } else {
      Reject("Error : Something is Wrong");
    }
  }, 3000);
});
promiseFour.then((user) => {
  console.log(user);
  return user.Username;
}).then((Username)=>{
    console.log(Username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("the  promises are reject else are succesfull"))



//Async Awaite



