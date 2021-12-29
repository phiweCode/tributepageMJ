function Person(firstName, lastName, age)
{
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.age = age; 

}  
 
let person1 = Person.prototype; 

console.log(person1); 
 
Person.prototype.fly = ()=>

{
    return "prototype value created";
}
 console.log(person1.fly()); 
 
 let person2 = {}; 

 person2.prototype = Object.create(Person.prototype); 

 console.log(person2.prototype.fly()); 