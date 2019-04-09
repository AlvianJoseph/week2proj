'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var firstAndPike = {
  id: 'first-and-pike',
  maxCookiesSold: 100,
  maxCustomerPerHour: 65,

  customersEachHour: [],
  cookiesEachHour: [],
  
  cookiesSoldThisHour: 0,
  customersThisHour: 0,
  //avgCookiesPerHour: 0,

  totalCookiesSold: 0,

  cookiesSoldEachHour: function (){
    for(var i = 0; i < hours.length; i++){
        var customersThisHour = getRandomInt(this.maxCustomerPerHour);
        var cookiesSoldThisHour = getRandomInt(this.maxCookiesSold);
        this.totalCookiesSold += cookiesSoldThisHour; 
        this.customersEachHour.push(customersThisHour)
        this.cookiesEachHour.push(cookiesSoldThisHour)
       // var avgCookiesPerHour = Math.round(this.totalCookiesSold/hours.length);
        console.log(`At ${hours[i]} you sold ${cookiesSoldThisHour} cookies to ${customersThisHour} customers.`);
        
      } console.log(`You sold ${this.totalCookiesSold} cookies in total`);
        
  }
};

firstAndPike.render = function(){
  var referenceUl = document.getElementById(this.id);
  for(var i =0; i < hours.length; i++) {
  

    //Vinicio - 2 - Creating the new element
    var newElement = document.createElement('li'); 
    newElement.textContent = `At ${hours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`;

    //Vinicio - Add the element to your reference
    referenceUl.append(newElement);
  }
  newElement = document.createElement('li');
  newElement.textContent = `You sold ${this.totalCookiesSold} cookies in total`;
  referenceUl.append(newElement);
}
  
 
 firstAndPike.cookiesSoldEachHour();
 firstAndPike.render();
