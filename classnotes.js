'use strict';


var months = ['Jan', 'Feb', 'March'];


// Vinicio - all of the variables and functions related to 2017 are going to live here
var twoThousandSeventeen = {
  kms: [2, 4, 5],
  id: 'ul2017',
  render: function() {
    // Vinicio - this function will be in charge of displaying elements into the screen by changing the dome.

    for(var i =0; i < this.kms.length; i++) {
      // Vinicio - 1 - getting a reference to a part I want to change
      var referenceUl = document.getElementById(this.id);

      //Vinicio - 2 - Creating the new element
      var newElement = document.createElement('li'); 
      newElement.textContent = `In ${months[i]}, I ran ${this.kms[i]} Kilometers.`; 

      //Vinicio - Add the element to your reference
      referenceUl.append(newElement);
    }
  },
};

var twoThousandEighteen = {
  kms: [12, 14, 15],
  id: 'ul2018',
  render: function() {
    // Vinicio - this function will be in charge of displaying elements into the screen by changing the dome.

    for(var i =0; i < this.kms.length; i++) {
      // Vinicio - 1 - getting a reference to a part I want to change
      var referenceUl = document.getElementById(this.id);

      //Vinicio - 2 - Creating the new element
      var newElement = document.createElement('li'); 
      newElement.textContent = `In ${months[i]}, I ran ${this.kms[i]} Kilometers.`; 

      //Vinicio - Add the element to your reference
      referenceUl.append(newElement);
    }
  },
};

twoThousandSeventeen.render();
twoThousandEighteen.render();


// capital D means this is function is a constructor. It is used to create objects
function Dog(name, age, wasStray){
  this.name = name;
  this.age = age;
  this.wasStray = wasStray;
}

var kali = new Dog('kali', 2, true);
var gary = new Dog('gary', 3, false);

var allDogs = [kali, gary, odin, charlotte];
allDogs.push(new Dog('eddie', 2, true));

Dog.prototype.render = function(){
  //render one row of the table
  //create

  var tr =document.createElement('tr');
  
  // step two, create entire row. this has to be a loop
  var tdName = documnet.createElement('td');
  tdName.textContent = this.name;
  tr.append(tdName); // appending this to the row, not to the dom

  var referenceTable = document.getElementById('dog-table');
  referenceTable.append(tr); // this will appened all the td for the row
}

for (var i = 0; i < allDogs.length; i++){
  allDogs[i].render();
}
function renderHeader(){
  var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Totals'];  
  var tr = document.getElementById('tr');

  for(var i = 0; i < headings.length; i++){
    var th = document.getElementById('th');
    th.textContent = headings[i];
    tr.append(th);
  }
}