var customerName = 'bob';
var bestCustomer;

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
  }
  
  function setBestCustomer() {
    bestCustomer = 'not bob'; 
    return bestCustomer;
  }
  
  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
  }
  
  setBestCustomer(); // Call setBestCustomer() before overwriteBestCustomer()
  overwriteBestCustomer();
  
  console.log(bestCustomer);

  
const leastFavoriteCustomer = 'value 1';
    function changeLeastFavoriteCustomer() {
        leastFavoriteCustomer = 'overwrite value'; 
  }
  changeLeastFavoriteCustomer();
  console.log(leastFavoriteCustomer);


