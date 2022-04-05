// Write your solution in this file!


var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase(); /// === "BOB"
}

console.log(customerName);

function setBestCustomer() {
    bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "cho";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "unsuccessfully tries to reassign the least favorite customer";
}