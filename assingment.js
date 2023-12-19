function Student(std_Name,std_age,std_gender){
    this.name=std_Name,
    this.age=std_age,
    this.gender=std_gender;
  this.display=function(){
    console.log("Student Name : "+this.name + ' age is '+ std_age+'and Gender'+std_gender);

  }
}
const st1=new Student('ASAD',22,'Male');
const st2=new Student('AMIT',26,'Male');
const st3=new Student('Akhill',23,'Male');


Student.prototype.branches='New Mumbai'
Student.prototype.Collage='M.S'
 
console.log('i am from IT ');
console.log('i am from Oriantel ');
   console.log('My Name is '+ st1.name+ 'and my Age is' + st1.age+ 'the gender is '+ st1.gender);

   console.log('My Name is '+ st2.name+ 'and my Age is' + st2.age+ 'the gender is  '+ st2.gender);
   console.log('My Name is '+ st3.name+ 'and my Age is' + st3.age+ 'the gender is  '+ st3.gender);


   st1.display();
   st2.display();
   st3.display();
