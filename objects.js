
let myObj = {
    name: 'Jon', 
    birthday: '17-02-1970', 
    hobby: 'Running', 
    email: 'jobe@cphbusiness.dk'
}

console.log(myObj)

showProps(myObj);

myObj['address'] = 'Ndr Frihavnsgade'
showProps(myObj);

delete myObj['hobby']

showProps(myObj);

function showProps(myObj){ 
   console.log('-----------')
   for(prop in myObj){
        console.log(prop,myObj[prop]);
    } 
}

function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.getName = function() {
      return this.firstName + " " + this.lastName
  }
}

var myFather = new Person('John', 'Doe', 50);

console.log(myFather)

Person.getName = 

console.log(myFather.getName())