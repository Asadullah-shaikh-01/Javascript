
// // let mydate=new Date();
// // console.log(mydate.toString());
// // console.log(mydate.toDateString());
// // console.log(mydate.toLocaleString());
// // console.log(mydate.getTimezoneOffset());
// // console.log(typeof mydate);

// // let mytimestamp=Date.now()
// // console.log(mytimestamp);
// // // Array Decleartion
// // const myarr=['asad', 1,515,'Shaikh12',];
// // const myarr2=['kabeer',89,262];
// // console.log(myarr);
// // myarr.push(2,'aleem');
// // console.log(myarr);
// // myarr.pop(2);
// // console.log(myarr);
// // console.log(...myarr,...myarr2);
// // console.log(myarr.concat([15,200]));
// // console.log(myarr.indexOf(12));
// // console.log(myarr.slice(3,5));
// // // console.log(myarr.splice(2,6));

// // var prices = [200, 100, 300, 400, 150];

// // const tt = function(tax){
// //     this.tax = tax;  //5
    
// //     this.withTax = function (arr)  // prices[]
// //     {
// //         let output = [];   //empty array to store the gst calculated results

// //         arr.forEach(function(element){
// //             let withTax = ((this.tax)/100) * element + element;
// //             output.push(withTax);
// //         }, this);
// //         return output;
// //     };
// // };

// // const gst1 = new tt(5);
// // const gst2 = new tt(10);

// // console.log(gst1.withTax(prices));
// // console.log(gst2.withTax(prices));


// let Cities=['Mumbai','Bangalore','Hyderabad'];
// Cities.push('Kolkata','Lucknow');
// console.log(Cities);
// console.log(Cities.length);
// Cities.unshift('Chennai');
// console.log(Cities);
// Cities.unshift('Delhii');
// console.log(Cities);
// Cities.pop();
// console.log(Cities);
// Cities.pop();
// console.log(Cities);



// let arr=['Hello ','World'];
// let arr2=['1','2','60','625','910'];
// let arr3=[...arr,...arr2];
// console.log('arr3 is ... :'+arr3);
// let arr4=['e','s','a','k','j'];
// let arr5=[...arr3,...arr4];
// console.log('arr3 is ... :'+arr5);
 let fruits=['apple','Orange','Kiwi','Banana','Mango','straberry','grapes'];
var [a,b,c,d,e,f,g]=fruits;
console.log('Even Number Index :',a,c,e);