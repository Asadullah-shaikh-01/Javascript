const myUser={
   fn:"Asad",
   ln:'Shaikh',
   age: 23,
   email: 'asads@gmail.com'
};
console.log(myUser.email);
console.log(myUser['email']); 

//const tinderUser=new Object()
const tinderUser={}
tinderUser.name="John Doe"
tinderUser.age=25;
console.log(tinderUser);

//const regulerUser ={
//    email:'asads@gmail,com',
//    fullname:{
//        firstname:'asadullah',
//        lastname:'Shaikh'
//    }
//};
//console.log(regulerUser.fullname.userfullname.firstname);


const myname1={12:'asad',657:'Shaikh'};
const myname2={13:'asad',658:'Khan'};

//const obj2={myname1,myname2}
//const obj3=Object.assign({},myname1,myname2);
const obj3={...myname1,...myname2}
console.log(obj3);