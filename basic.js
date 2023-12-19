

function add(a,b,c) {
    let y=a+b+c;
   return y;
}
let r=add(4,5,6)
console.log("The sum is "+r);

function greet(name){
    return 'hello '+name;
}
let res=greet('asad');
console.log(res);
//---Normal Function---//
function new_add(){
    let sum=0;
for (let i = 0; i < arguments.length; i++) {
   sum=sum+arguments[i];   
}
return sum;
} 
console.log(new_add(56,5));
console.log(new_add(56,5,102,66,15));


function interest(p, r, t){
    let res=(p*r*t)/100;
    console.log('this is Rate of '+res);
}
interest(1600,12,7);
//---annoymous Function---//
let add1=function(a,b,c){
    return a+b+c;
}
console.log('the add results:' + add1(3,4,5));

//---arrow Function---//

let greet1=(name)=>console.log('hello'+name);
greet1('asad');