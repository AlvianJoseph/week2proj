'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var maxCustomersPerHour = 0;
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(maxCustomersPerHour);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

var firstAndPike = {
  id: 'first-and-pike',
  maxCookiesSold: 410,
  cookiesSoldThisHour: 0,
  cookiesEachHour: [],

  maxCustomersPerHour: 65,
  customersThisHour: 0,
  customersEachHour: [],

  //avgCookiesPerHour: 0,
  totalCookiesSold: 0,

  cookiesSoldEachHour: function () {
    for (var i = 0; i < hours.length; i++) {
      customersThisHour = getRandomInt(this.maxCustomersPerHour);
      cookiesSoldThisHour = getRandomInt(this.maxCookiesSold);
      this.totalCookiesSold += cookiesSoldThisHour;
      this.customersEachHour.push(customersThisHour)
      this.cookiesEachHour.push(cookiesSoldThisHour)
      // var avgCookiesPerHour = Math.round(this.totalCookiesSold/hours.length);
      console.log(`At ${hours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`);

    } console.log(`You sold ${this.totalCookiesSold} cookies in total`);

  }
};

firstAndPike.render = function () {
  var referenceUl = document.getElementById(this.id);
  for (var i = 0; i < hours.length; i++) {

    var newElement = document.createElement('li');
    newElement.textContent = `At ${hours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`;
    referenceUl.append(newElement);
  }
  newElement = document.createElement('li');
  newElement.textContent = `You sold ${this.totalCookiesSold} cookies in total`;
  referenceUl.append(newElement);
}


var seatacAirport = {
  id: 'seatac-airport',
  maxCookiesSold: 29,
  cookiesSoldThisHour: 0,
  cookiesEachHour: [],

  maxCustomersPerHour: 24,
  customersThisHour: 0,
  customersEachHour: [],

  //avgCookiesPerHour: 0,
  totalCookiesSold: 0,

  cookiesSoldEachHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var customersThisHour = getRandomInt(this.maxCustomersPerHour);
      var cookiesSoldThisHour = getRandomInt(this.maxCookiesSold);
      this.totalCookiesSold += cookiesSoldThisHour;
      this.customersEachHour.push(customersThisHour)
      this.cookiesEachHour.push(cookiesSoldThisHour)
      // var avgCookiesPerHour = Math.round(this.totalCookiesSold/hours.length);
      console.log(`At ${hours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`);

    } console.log(`You sold ${this.totalCookiesSold} cookies in total`);

  }
};

seatacAirport.render = function () {
  var referenceUl = document.getElementById(this.id);
  for (var i = 0; i < hours.length; i++) {

    var newElement = document.createElement('li');
    newElement.textContent = `At ${hours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`;
    referenceUl.append(newElement);
  }
  newElement = document.createElement('li');
  newElement.textContent = `You sold ${this.totalCookiesSold} cookies in total`;
  referenceUl.append(newElement);
}

var seattleCenter = {
  id: 'seattle-center',
  maxCookiesSold: 141,
  cookiesSoldThisHour: 0,
  cookiesEachHour: [],

  maxCustomersPerHour: 38,
  customersThisHour: 0,
  customersEachHour: [],

  //avgCookiesPerHour: 0,
  totalCookiesSold: 0,

  cookiesSoldEachHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var customersThisHour = getRandomInt(this.maxCustomersPerHour);
      var cookiesSoldThisHour = getRandomInt(this.maxCookiesSold);
      this.totalCookiesSold += cookiesSoldThisHour;
      this.customersEachHour.push(customersThisHour)
      this.cookiesEachHour.push(cookiesSoldThisHour)
      // var avgCookiesPerHour = Math.round(this.totalCookiesSold/hours.length);
      console.log(`At ${hours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`);

    } console.log(`You sold ${this.totalCookiesSold} cookies in total`);

  }
};

seattleCenter.render = function () {
  var referenceUl = document.getElementById(this.id);
  for (var i = 0; i < hours.length; i++) {

    var newElement = document.createElement('li');
    newElement.textContent = `At ${hours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`;
    referenceUl.append(newElement);
  }
  newElement = document.createElement('li');
  newElement.textContent = `You sold ${this.totalCookiesSold} cookies in total`;
  referenceUl.append(newElement);
}

var capitolHill = {
  id: 'capitol-hill',
  maxCookiesSold: 87,
  cookiesSoldThisHour: 0,
  cookiesEachHour: [],

  maxCustomersPerHour: 38,
  customersThisHour: 0,
  customersEachHour: [],

  //avgCookiesPerHour: 0,
  totalCookiesSold: 0,

  cookiesSoldEachHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var customersThisHour = getRandomInt(this.maxCustomersPerHour);
      var cookiesSoldThisHour = getRandomInt(this.maxCookiesSold);
      this.totalCookiesSold += cookiesSoldThisHour;
      this.customersEachHour.push(customersThisHour)
      this.cookiesEachHour.push(cookiesSoldThisHour)
      // var avgCookiesPerHour = Math.round(this.totalCookiesSold/hours.length);
      console.log(`At ${hours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`);

    } console.log(`You sold ${this.totalCookiesSold} cookies in total`);

  }
};

capitolHill.render = function () {
  var referenceUl = document.getElementById(this.id);
  for (var i = 0; i < hours.length; i++) {

    var newElement = document.createElement('li');
    newElement.textContent = `At ${hours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`;
    referenceUl.append(newElement);
  }
  newElement = document.createElement('li');
  newElement.textContent = `You sold ${this.totalCookiesSold} cookies in total`;
  referenceUl.append(newElement);
}

var alki = {
  id: 'alki',
  maxCookiesSold: 74,
  cookiesSoldThisHour: 0,
  cookiesEachHour: [],

  maxCustomersPerHour: 16,
  customersThisHour: 0,
  customersEachHour: [],

  //avgCookiesPerHour: 0,
  totalCookiesSold: 0,

  cookiesSoldEachHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var customersThisHour = getRandomInt(this.maxCustomersPerHour);
      var cookiesSoldThisHour = getRandomInt(this.maxCookiesSold);
      this.totalCookiesSold += cookiesSoldThisHour;
      this.customersEachHour.push(customersThisHour)
      this.cookiesEachHour.push(cookiesSoldThisHour)
      // var avgCookiesPerHour = Math.round(this.totalCookiesSold/hours.length);
      console.log(`At ${hours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`);

    } console.log(`You sold ${this.totalCookiesSold} cookies in total`);

  }
};

alki.render = function () {
  var referenceUl = document.getElementById(this.id);
  for (var i = 0; i < hours.length; i++) {

    var newElement = document.createElement('li');
    newElement.textContent = `At ${hours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`;
    referenceUl.append(newElement);
  }
  newElement = document.createElement('li');
  newElement.textContent = `You sold ${this.totalCookiesSold} cookies in total`;
  referenceUl.append(newElement);
}

var firstAndPike = {
  id: 'first-and-pike',
  maxCookiesSold: 100,
  cookiesSoldThisHour: 0,
  cookiesEachHour: [],

  maxCustomersPerHour: 65,
  customersThisHour: 0,
  customersEachHour: [],

  //avgCookiesPerHour: 0,
  totalCookiesSold: 0,

  cookiesSoldEachHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var customersThisHour = getRandomInt(this.maxCustomersPerHour);
      var cookiesSoldThisHour = getRandomInt(this.maxCookiesSold);
      this.totalCookiesSold += cookiesSoldThisHour;
      this.customersEachHour.push(customersThisHour)
      this.cookiesEachHour.push(cookiesSoldThisHour)
      // var avgCookiesPerHour = Math.round(this.totalCookiesSold/hours.length);
      console.log(`At ${hours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`);

    } console.log(`You sold ${this.totalCookiesSold} cookies in total`);

  }
};

firstAndPike.render = function () {
  var referenceUl = document.getElementById(this.id);
  for (var i = 0; i < hours.length; i++) {

    var newElement = document.createElement('li');
    newElement.textContent = `At ${hours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`;
    referenceUl.append(newElement);
  }
  newElement = document.createElement('li');
  newElement.textContent = `You sold ${this.totalCookiesSold} cookies in total`;
  referenceUl.append(newElement);
}
firstAndPike.cookiesSoldEachHour();
firstAndPike.render();
seatacAirport.cookiesSoldEachHour();
seatacAirport.render();
seattleCenter.cookiesSoldEachHour();
seattleCenter.render();
capitolHill.cookiesSoldEachHour();
capitolHill.render();
alki.cookiesSoldEachHour();
alki.render();