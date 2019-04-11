'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];
var grandTotal = 0;

function getRandomInt(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function Store(minimumCustomersPerHour, maxCustomersPerHour, averageCookiesPerPerson, storeLocation) {
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesPerPerson = averageCookiesPerPerson;
  this.storeLocation = storeLocation;
  this.totalCookiesSold = 0;

  this.customersEveryHour = function () {
    return getRandomInt(this.minimumCustomersPerHour, this.maxCustomersPerHour);
  };

  this.cookiesSoldEachHour = function () {
    return Math.round(this.customersEveryHour() * this.averageCookiesPerPerson);
  };

  this.render = function () {
    var referenceTable = document.getElementById('cookie-table');
    var tr = document.createElement('tr');
    var tdLocation = document.createElement('td');
    tdLocation.textContent = storeLocation;
    tr.append(tdLocation);
    for (var i = 0; i < storeHours.length; i++) {
      var tdCookiesSold = document.createElement('td')
      tdCookiesSold.textContent = this.cookiesEachHourArray[i];
      tr.append(tdCookiesSold);
    }
    var tdDailyTotal = document.createElement('td');
    tdDailyTotal.textContent = this.totalCookiesSold;
    tr.append(tdDailyTotal);
    referenceTable.append(tr);
  };

  this.customersEachHourArray = [];
  this.cookiesEachHourArray = [];
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

var referenceTable = document.getElementById('cookie-table');
function renderHeader() {
  var headerRow = document.createElement('tr');
  var headerSpace = document.createElement('th');
  headerSpace.textContent = '';
  headerRow.append(headerSpace);

  for (var i = 0; i < storeHours.length; i++) {
    var headerValue = document.createElement('th');
    headerValue.textContent = storeHours[i];
    headerRow.append(headerValue);
  }
  var headerTotal = document.createElement('th');
  headerTotal.textContent = 'Daily Total';
  headerRow.append(headerTotal);
  referenceTable.append(headerRow);
}
renderHeader();

function addNewStore(event) {
  //contains info about what the user did
  event.preventDefault(); // this will stop browser from reloading
  console.log('Cool, you want to add a new store')
  var newMinCustomerData = event.target.mincustomers.value;
  var newMaxCustomerData = event.target.maxcustomers.value;
  var newAvgCookieData = event.target.avgcookiessold.value;
  var newStoreName = event.target.storename.value;
  var newStore = new Store(newMinCustomerData, newMaxCustomerData, newAvgCookieData, newStoreName);

  referenceTable = document.getElementById('footer');
  referenceTable.textContent = '';
  grandTotal = 0;

  newStore.dailySalesData();
  calculateFooterTotals();
  allStores.push(newStore);
}

var storeFormReference = document.getElementById('store-form')
storeFormReference.addEventListener('submit', addNewStore);

var firstAndPike = new Store(23, 65, 6.3, 'First and Pike');
var seatacAirport = new Store(3, 24, 1.2, 'SeaTac Airport');
var seaCenter = new Store(11, 38, 3.7, 'Seattle Center');
var capHill = new Store(20, 38, 2.3, 'Capitol Hill');
var alki = new Store(2, 16, 4.6, 'Alki');

var allStores = [firstAndPike, seatacAirport, seaCenter, capHill, alki];

firstAndPike.dailySalesData();
seatacAirport.dailySalesData();
seaCenter.dailySalesData();
capHill.dailySalesData();
alki.dailySalesData();

function calculateFooterTotals() {
  var finalRow = document.createElement('tr');
  finalRow.textContent = 'Hourly Totals'

  for (var c = 0; c < storeHours.length; c++) {
    var columnSum = 0;
    for (var i = 0; i < allStores.length; i++) {
      columnSum += allStores[i].cookiesEachHourArray[c];
    }
    grandTotal += columnSum;
    var finalRowValues = document.createElement('td');
    finalRowValues.textContent = columnSum;
    finalRow.append(finalRowValues);
  }
  var tdGrandTotal = document.createElement('td');
  tdGrandTotal.textContent = (grandTotal);
  finalRow.append(tdGrandTotal);
  var referenceTable = document.getElementById('footer')
  referenceTable.append(finalRow);
  console.log(`The grand daily total is ${grandTotal}`);
  console.log(`The total cookies sold at ${storeHours[c]} is ${columnSum}`);
}

calculateFooterTotals();
