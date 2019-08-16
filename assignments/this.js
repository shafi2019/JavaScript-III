/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window or global Binding: When this "this" keyword is called in the global scope, and is not bound to anything specific, it is considered Window Bound.
* 2. Implicit - To the left! With implicit bindins you can always look to the left of the dot (.) when a method is called.
* 3. New Binding - When invoking a new object with the "this" keyword, that is considered a new binding.
* 4. Explicit - Just like it sounds, when you explicitly give the this keyword a value, that is considered explicit binding.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myAddress(address) {
    console.log(this);
    return address;
}
myAddress("CA, Sacramento")

// Principle 2
const testResult = {
    greetPass: 'Congratulations',
    pass:'you passed the test!',
    sayResult: function(name) {
      console.log(`${this.greetPass} ${name}, ${this.pass}`);
      console.log(this);
    }
  };
  testResult.sayResult('Shafi');

// code example for Implicit Binding

// Principle 3
const FirstObject = function (action){
  this.name = 'Shafi';
  this.school = 'Lambda';
  this.introduction = function () {
  console.log('My name is ' + this.name + ' and I am a ' + action +  ' at '+ this.school + '!');
}
};
const obj = new FirstObject('student');
const obj2 = new FirstObject('Part Time Student');
obj.introduction();
obj2.introduction();

// code example for New Binding 

// Principle 4
function HbDay (name) {
  this.greeting = 'Happy Birthday';
  this.name = name;
  this.speak = function () {
    console.log(`${this.greeting} ${this.name}`)
  }
}
const shafi = new HbDay('Shafi');
const masoumi = new HbDay('Masoumi');

shafi.speak.call(masoumi);
masoumi.speak.apply(shafi);

shafi.speak();
masoumi.speak();





// code example for Explicit Binding