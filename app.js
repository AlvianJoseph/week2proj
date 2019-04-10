'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];


function getRandomInt(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function Store(minimumCustomersPerHour, maxCustomersPerHour, averageCookiesPerPerson, totalCookiesSold, storeLocation) {
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesPerPerson = averageCookiesPerPerson;
  this.totalCookiesSold = 0;
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