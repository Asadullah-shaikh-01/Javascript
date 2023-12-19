// let NormalUser =[200, 300,250,120,400];
// let PrimiumUser =[100, 400,550,100,400];
// let GoldenUser =[300, 370,250,130,450];

// const NormalUser = function(disc){
//     this.disc = disc;  //5

//     this.withTax = function (arr)  // prices[]
//     {
//         let output = [];   //empty array to store the gst calculated results

//         arr.forEach(function(element){
//             let withTax = ((this.tax)/100) * element - element;
//             output.push(withTax);
//         }, this);
//         return output;
//     };
// };

// const gst1 = new tt(5);
// const gst2 = new tt(10);

// console.log(gst1.withTax(prices));
// console.log(gst2.withTax(prices));
const user = {
  username: "Asad",
  pricwe: 999,
  wclmsg: function () {
    console.log(`${this.username},welcome to website`);
    console.log(this);
  }

}
console.log(this);
// user.wclmsg();
// user.username = "Zaid";
// user.wclmsg();

// function neet(){
//     let username='Zakir'
//     console.log(this);
// }
// neet()
// const User=() =>{
//   let username='AsadShaikh'
//   console.log(this);
// }
// User()


let ans =(a,b,c)=>{
    return a+b-c;
}
console.log(ans(25,25,50));