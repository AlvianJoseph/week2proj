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