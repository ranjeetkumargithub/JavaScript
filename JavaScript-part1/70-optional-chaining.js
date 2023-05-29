// optional chaining

// optional chaining is used to access nested object properties, even if an intermediate property doesnot exist.

const user = {
    firstName: "harsh",
    // address: {houseNumber: '1234'}
}

console.log(user.firstName);  // harsh
console.log(user.address);  // undefined
// console.log(user.address.houseNumber);  // error
console.log(user?.address?.houseNumber);  // undefined