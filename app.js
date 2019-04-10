'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];


function getRandomInt(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function Store(minimumCustomersPerHour, maxCustomersPerHour, averageCookiesPerPerson, totalCookiesSold, storeLocation) {
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesPerPerson = averageCookiesPerPerson;
  this.totalCookiesSold = totalCookiesSold;
  this.storeLocation = storeLocation;
  this.customersEachHourArray = [];
  this.cookiesEachHourArray = [];

  this.customersEveryHour = function () {
    return getRandomInt(this.minimumCustomersPerHour, this.maxCustomersPerHour);
  };
  this.cookiesSoldEachHour = function () {
    return Math.round(this.customersEveryHour() * this.averageCookiesPerPerson);
  };

  this.render = function () {
    var referenceTable = document.getElementById('cookie-table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = storeLocation;
    tr.append(td);

    for (var i = 0; i < storeHours.length; i++) {
      td = document.createElement('td')
      td.textContent = this.cookiesEachHourArray[i];
      tr.append(td);
      referenceTable.append(tr);
    }
  };

  // doing all the math
  this.calculateTotals = function () {
    for (var i = 0; i < storeHours.length; i++) {
      var cookiesSold = this.cookiesSoldEachHour();
      this.totalCookiesSold += cookiesSold;
      var customersThisHour = this.customersEveryHour();
      this.customersEachHourArray.push(customersThisHour)
      this.cookiesEachHourArray.push(cookiesSold)
      console.log(`At ${storeHours[i]} you sold ${this.cookiesEachHourArray[i]} cookies to ${this.customersEachHourArray[i]} customers.`);
      console.log(`You sold ${this.totalCookiesSold} cookies in total`);
    }
  }
  this.dailySalesData = function () {
    this.customersEveryHour();
    this.cookiesSoldEachHour();
    this.calculateTotals();
    this.render();
  }
};

// create headers by appending th to a new row
function renderHeader() {
  var trHeader = document.createElement('tr');
  for (var i = 0; i < storeHours.length; i++) {
    var th = document.createElement('th');
    th.textContent = storeHours[i];
    trHeader.append(th);
  }
  var referenceTable = document.getElementById('cookie-table');
  referenceTable.append(trHeader);
}
renderHeader();

var firstAndPike = new Store(23, 65, 6.3, this.totalCookiesSold, 'First and Pike');
var seatacAirport = new Store(3, 24, 1.2, this.totalCookiesSold, 'SeaTac Airport');
var seaCenter = new Store(11, 38, 3.7, this.totalCookiesSold, 'Seattle Center');
var capHill = new Store(20, 38, 2.3, this.totalCookiesSold, 'Capitol Hill');
var alki = new Store(2, 16, 4.6, this.totalCookiesSold, 'Alki');

firstAndPike.dailySalesData();
seatacAirport.dailySalesData();
seaCenter.dailySalesData();
capHill.dailySalesData();
alki.dailySalesData();

// var seatacAirport = new Store();
// seatacAirport.render();


    // for (var i = 0; i < storeHours.length; i++) {
    //   var cookiesSold = this.cookiesSoldEachHour();
    //   this.totalCookiesSold += cookiesSold;
    //   var customersThisHour = this.customersEveryHour();

    //   this.customersEachHourArray.push(customersThisHour)
    //   this.cookiesEachHourArray.push(cookiesSold)
    //   console.log(`At ${storeHours[i]} you sold ${this.cookiesEachHourArray[i]} cookies to ${this.customersEachHourArray[i]} customers.`);
    //   console.log(`You sold ${this.totalCookiesSold} cookies in total`);

    //   var referenceTable = document.getElementById('first-and-pike');
    //   referenceTable.append(tr);
    //   var tr = document.createElement('tr');
    //   // var tdName = document.createElement('td');
    //   // tdName.textContent = this.name;
    //   // tr.append(tdName);

    //   var th = document.createElement('th');
    //   th.textContent = storeHours[i];
    //   tr.append(th);
    // 

// var firstAndPike = {
//   id: 'first-and-pike',
//   cookiesEachHourArray: [],
//   averageCookiesPerPerson: 6.3,
//   totalCookiesSold: 0,

//   maxCustomersPerHour: 65,
//   minimumCustomersPerHour: 23,
//   customersEachHourArray: [],

//   customersEveryHour: function () {
//     return getRandomInt(this.minimumCustomersPerHour, this.maxCustomersPerHour);
//   },

//   cookiesSoldEachHour: function() {
//     return Math.round(this.customersEveryHour() * this.averageCookiesPerPerson);
//   },


// render: function () {
//   var referenceUl = document.getElementById(this.id);
//   for (var i = 0; i < storeHours.length; i++) {
//   var cookiesSold = this.cookiesSoldEachHour();
//   this.totalCookiesSold += cookiesSold;
//   var customersThisHour = this.customersEveryHour();

//   this.customersEachHourArray.push(customersThisHour)
//   this.cookiesEachHourArray.push(cookiesSold)
//   console.log(`At ${storeHours[i]} you sold ${this.cookiesEachHourArray[i]} cookies to ${this.customersEachHourArray[i]} customers.`);
//   console.log(`You sold ${this.totalCookiesSold} cookies in total`);

//   var newElement = document.createElement('li');
//   newElement.textContent = `At ${storeHours[i]} you sold ${this.cookiesEachHourArray[i]} cookies to ${this.customersEachHourArray[i]} customers.`;
//   referenceUl.append(newElement);
//   }
//   newElement = document.createElement('li');
//   newElement.textContent = `You sold ${this.totalCookiesSold} cookies in total`;
//   referenceUl.append(newElement);
// }
// }

// var seatacAirport = {
//   id: 'seatac-airport',
//   maxCookiesSold: 29,
//   cookiesSoldThisHour: 0,
//   cookiesEachHour: [],

//   maxCustomersPerHour: 24,
//   customersThisHour: 0,
//   customersEachHour: [],

//   //avgCookiesPerHour: 0,
//   totalCookiesSold: 0,

//   cookiesSoldEachHour: function () {
//     for (var i = 0; i < storeHours.length; i++) {
//       var customersThisHour = getRandomInt(this.maxCustomersPerHour);
//       var cookiesSoldThisHour = getRandomInt(this.maxCookiesSold);
//       this.totalCookiesSold += cookiesSoldThisHour;
//       this.customersEachHour.push(customersThisHour)
//       this.cookiesEachHour.push(cookiesSoldThisHour)
//       // var avgCookiesPerHour = Math.round(this.totalCookiesSold/hours.length);
//       console.log(`At ${storeHours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`);

//     } console.log(`You sold ${this.totalCookiesSold} cookies in total`);

//   }
// };

// seatacAirport.render = function () {
//   var referenceUl = document.getElementById(this.id);
//   for (var i = 0; i < storeHours.length; i++) {

//     var newElement = document.createElement('li');
//     newElement.textContent = `At ${storeHours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`;
//     referenceUl.append(newElement);
//   }
//   newElement = document.createElement('li');
//   newElement.textContent = `You sold ${this.totalCookiesSold} cookies in total`;
//   referenceUl.append(newElement);
// }

// var seattleCenter = {
//   id: 'seattle-center',
//   maxCookiesSold: 141,
//   cookiesSoldThisHour: 0,
//   cookiesEachHour: [],

//   maxCustomersPerHour: 38,
//   customersThisHour: 0,
//   customersEachHour: [],

//   //avgCookiesPerHour: 0,
//   totalCookiesSold: 0,

//   cookiesSoldEachHour: function () {
//     for (var i = 0; i < storeHours.length; i++) {
//       var customersThisHour = getRandomInt(this.maxCustomersPerHour);
//       var cookiesSoldThisHour = getRandomInt(this.maxCookiesSold);
//       this.totalCookiesSold += cookiesSoldThisHour;
//       this.customersEachHour.push(customersThisHour)
//       this.cookiesEachHour.push(cookiesSoldThisHour)
//       // var avgCookiesPerHour = Math.round(this.totalCookiesSold/hours.length);
//       console.log(`At ${storeHours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`);

//     } console.log(`You sold ${this.totalCookiesSold} cookies in total`);

//   }
// };

// seattleCenter.render = function () {
//   var referenceUl = document.getElementById(this.id);
//   for (var i = 0; i < storeHours.length; i++) {

//     var newElement = document.createElement('li');
//     newElement.textContent = `At ${storeHours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`;
//     referenceUl.append(newElement);
//   }
//   newElement = document.createElement('li');
//   newElement.textContent = `You sold ${this.totalCookiesSold} cookies in total`;
//   referenceUl.append(newElement);
// }

// var capitolHill = {
//   id: 'capitol-hill',
//   maxCookiesSold: 87,
//   cookiesSoldThisHour: 0,
//   cookiesEachHour: [],

//   maxCustomersPerHour: 38,
//   customersThisHour: 0,
//   customersEachHour: [],

//   //avgCookiesPerHour: 0,
//   totalCookiesSold: 0,

//   cookiesSoldEachHour: function () {
//     for (var i = 0; i < storeHours.length; i++) {
//       var customersThisHour = getRandomInt(this.maxCustomersPerHour);
//       var cookiesSoldThisHour = getRandomInt(this.maxCookiesSold);
//       this.totalCookiesSold += cookiesSoldThisHour;
//       this.customersEachHour.push(customersThisHour)
//       this.cookiesEachHour.push(cookiesSoldThisHour)
//       // var avgCookiesPerHour = Math.round(this.totalCookiesSold/hours.length);
//       console.log(`At ${storeHours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`);

//     } console.log(`You sold ${this.totalCookiesSold} cookies in total`);

//   }
// };

// capitolHill.render = function () {
//   var referenceUl = document.getElementById(this.id);
//   for (var i = 0; i < storeHours.length; i++) {

//     var newElement = document.createElement('li');
//     newElement.textContent = `At ${storeHours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`;
//     referenceUl.append(newElement);
//   }
//   newElement = document.createElement('li');
//   newElement.textContent = `You sold ${this.totalCookiesSold} cookies in total`;
//   referenceUl.append(newElement);
// }

// var alki = {
//   id: 'alki',
//   maxCookiesSold: 74,
//   cookiesSoldThisHour: 0,
//   cookiesEachHour: [],

//   maxCustomersPerHour: 16,
//   customersThisHour: 0,
//   customersEachHour: [],

//   //avgCookiesPerHour: 0,
//   totalCookiesSold: 0,

//   cookiesSoldEachHour: function () {
//     for (var i = 0; i < storeHours.length; i++) {
//       var customersThisHour = getRandomInt(this.maxCustomersPerHour);
//       var cookiesSoldThisHour = getRandomInt(this.maxCookiesSold);
//       this.totalCookiesSold += cookiesSoldThisHour;
//       this.customersEachHour.push(customersThisHour)
//       this.cookiesEachHour.push(cookiesSoldThisHour)
//       // var avgCookiesPerHour = Math.round(this.totalCookiesSold/hours.length);
//       console.log(`At ${storeHours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`);

//     } console.log(`You sold ${this.totalCookiesSold} cookies in total`);

//   }
// };

// alki.render = function () {
//   var referenceUl = document.getElementById(this.id);
//   for (var i = 0; i < storeHours.length; i++) {

//     var newElement = document.createElement('li');
//     newElement.textContent = `At ${storeHours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`;
//     referenceUl.append(newElement);
//   }
//   newElement = document.createElement('li');
//   newElement.textContent = `You sold ${this.totalCookiesSold} cookies in total`;
//   referenceUl.append(newElement);
// }

// var firstAndPike = {
//   id: 'first-and-pike',
//   maxCookiesSold: 100,
//   cookiesSoldThisHour: 0,
//   cookiesEachHour: [],

//   maxCustomersPerHour: 65,
//   customersThisHour: 0,
//   customersEachHour: [],

//   //avgCookiesPerHour: 0,
//   totalCookiesSold: 0,

//   cookiesSoldEachHour: function () {
//     for (var i = 0; i < storeHours.length; i++) {
//       var customersThisHour = getRandomInt(this.maxCustomersPerHour);
//       var cookiesSoldThisHour = getRandomInt(this.maxCookiesSold);
//       this.totalCookiesSold += cookiesSoldThisHour;
//       this.customersEachHour.push(customersThisHour)
//       this.cookiesEachHour.push(cookiesSoldThisHour)
//       // var avgCookiesPerHour = Math.round(this.totalCookiesSold/hours.length);
//       console.log(`At ${storeHours[i]} you sold ${this.cookiesEachHour[i]} cookies to ${this.customersEachHour[i]} customers.`);

//     } console.log(`You sold ${this.totalCookiesSold} cookies in total`);

//   }
// };



//firstAndPike.render();
// seatacAirport.cookiesSoldEachHour();
// seatacAirport.render();
// seattleCenter.cookiesSoldEachHour();
// seattleCenter.render();
// capitolHill.cookiesSoldEachHour();
// capitolHill.render();
// alki.cookiesSoldEachHour();
// alki.render();

