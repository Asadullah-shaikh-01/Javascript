let number = 60;

let EvenorOdd = new Promise((resolve, reject) => {
  if (number > 0) {
    resolve("The Number is Positive");
  } else {
    reject("Number is negative");
  }
});

EvenorOdd.then((result) => {
       if (number % 2 === 0) {
      console.log(`${number} is an even number`);
    } else {
      console.log(`${number} is an odd number`);
    }
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("This is the end of the program");
  });
