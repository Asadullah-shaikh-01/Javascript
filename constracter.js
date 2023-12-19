function Person(){
    this.name='Asad',
    this.age=22,
    this.city='Mumbai'
    this.display= function(){
        console.log('my name is :'+ this.name+' and my age is'+this.age+'and i from city'+this.city);
    }
    this.greet=function(){
      console.log(this.name+'Welcome you.......');  
    }
}
// creation of Object
const p1=new Person('asad',22,'Mumbai');
const p2=new Person('amit',25,'Mumbai');

Person.prototype.gender='male';
Person.prototype.work=function(){
 console.log('I am Working...');
}
p2.work();
console.log('the gender of Object '+p1.gender);
console.log('the gender of Object '+p2.gender);
console.log('this name is Objext 1 is :'+p1.name);
console.log('this name is Objext 2 is :'+p2.name);
console.log('this name is Objext 1 is :'+p1.age);
console.log('this name is Objext 2 is :'+p2.age);
console.log('this name is Objext 1 is :'+p1.city);
console.log('this name is Objext 2 is :'+p2.city);
p2.display();
p1.display();
p1.greet();
p2.greet();