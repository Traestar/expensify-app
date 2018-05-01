//
// Object destructuring
//

// const person = {
//     name: 'Howard',
//     age: 32,
//     location: {
//         city: 'Atlantic City',
//         temp: 41
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
// console.log(`It's ${temperature} in ${city}.`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published

//
// Array Destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [street, city, state, zip] = address;

// const [, city, state] = address;

// console.log(`You are in ${city} ${state}.`);
// console.log(`The address is: ${street} in ${city}, ${state}, ${zip}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

// First Item
// const [itemName, , medium] = item;

// Second Item
const [itemName, small, medium, large] = item;

// grab first and third items using array destructuring
console.log(`A small ${itemName} costs ${small}.`);
console.log(`A medium ${itemName} costs ${medium}.`);
console.log(`A large ${itemName} costs ${large}.`);


