// ============================================================
// Creative Practice — Loops & Functions (Day 2)
// You now know: console.log, data types, string methods,
// arrays (no map/filter/forEach), objects (assign/create/keys/values),
// if / else if / else, logical operators (&&, ||, !),
// AND: while loops, for loops, functions with parameters.
// ------------------------------------------------------------
// Rules:
// - Prefer while / for loops. Do NOT use map/filter/forEach/reduce.
// - You may use: push/pop/shift/unshift/slice/splice/concat/indexOf/includes/sort
// - Use string methods (trim, toLowerCase, toUpperCase, includes, slice, split, etc.).
// - Keep each solution inside the function body marked with TODO.
// - Use the demo calls at the bottom to test your work.
// ============================================================


// ------------------------------------------------------------
// Task 1 — countVowels(str)
// Return how many vowels are inside str (a, e, i, o, u).
// Make it case-insensitive (e.g., "A" counts). Use a loop, no regex.
// -----------------------------------------------------------
 // Convert to lowercase for easier comparison
function countVowels(str) {
    str = str.toLowerCase(); // Convert to lowercase for easier comparison
    let vowels = "aeiou"; // Define vowels
    let count = 0; // Initialize
    for (let index = 0; index < str.length; index++) {
    if (vowels.includes(str[index])) { 
        count++; // Increment count if the character is a vowel
    }
    }
    return count; // Return the total count of vowels
}
console.log(countVowels("Ammar Massoud"));

// ------------------------------------------------------------
// Task 2 — invertCase(str)
// Build and return a new string where each letter changes case:
// 'Hello' -> 'hELLO'. Use a loop and string methods, not regex.
// ------------------------------------------------------------
function invertCase(str) {
    let result = ""; // Initialize result string
    for (let index = 0; index < str.length; index++) {
        if (str[index] === str[index].toUpperCase()) {
            result += str[index].toLowerCase(); // Convert uppercase to lowercase
        }
        else if (str[index] === str[index].toLowerCase()) {
            result += str[index].toUpperCase(); // Convert lowercase to uppercase           
        }
        else {
            result += str[index];
        }
    }
    return result; // Return the modified string
}
console.log(invertCase("HeLLo 123!")); // "hEllO 123!"


// ------------------------------------------------------------
// Task 3 — uniqueMerge(a, b)
// Merge arrays a and b into a single array without duplicates,
// preserving the order of first appearance. No Set, no map/filter/forEach.
// ------------------------------------------------------------
function uniqueMerge(a, b) {
    let result = []; // Initialize result array
    for (let i = 0; i < a.length; i++) {
        if (!result.includes(a[i])) { // Check if a[i] is not already in result
            result.push(a[i]); // Add a[i] to result if not present 
        }
    }
        for (let j = 0; j < b.length; j++) {
            if (!result.includes(b[j])) { // Check if b[j] is not already in result
                result.push(b[j]); // Add b[j] to result if not present 
            }
    }    
    return result; // replace
}
console.log(uniqueMerge([1, 2, 3, 2], [3, 4, 1, 5])); // [1, 2, 3, 4, 5]

// ------------------------------------------------------------
// Task 4 — findFirstIndexDivisibleBy(nums, x, y)
// Return the INDEX of the first number divisible by BOTH x and y.
// If none, return -1. Use a for loop and logical operators.
// ------------------------------------------------------------
function findFirstIndexDivisibleBy(nums, x, y) {
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] % x === 0 && nums[index] % y === 0) {
            return index; // Return the index if divisible by both x and y
        }
    }
    return -1; // replace
}
console.log(findFirstIndexDivisibleBy([2, 7, 9, 10, 12, 15, 22], 3, 5)); // index of 15


// ------------------------------------------------------------
// Task 5 — allTruthy(values)
// Return true only if EVERY element in 'values' is truthy.
// Use a loop and logical operators (no .every).
// ------------------------------------------------------------
function allTruthy(values) {
    for (let index = 0; index < values.length; index++){ 
        if (!values[index]) { // If the element is not truthy
        return false; 
        }
    }
        return true; // If all elements are truthy, return true
    }
            
console.log(allTruthy([1, "x", {}, []])); // true
console.log(allTruthy([1, 0, "x"])); // false


// ------------------------------------------------------------
// Task 6 — pickEveryNth(arr, n)
// Return a NEW array containing items at indices 0, n, 2n, 3n, ...
// Stop when you pass the end of the array. Use a for loop (step by n).
// ------------------------------------------------------------
function pickEveryNth(arr, n) {
    let result = []; // Initialize an empty array to hold the result
    for (let index = 0; index < arr.length; index += n) {
        if (index < arr.length) {
            result.push(arr[index]); // Add the element at index to the result
        }
    }
    return result; // Return the new array with every nth element
}
console.log(pickEveryNth(["a", "b", "c", "d", "e", "f"], 2)); // ["a", "c", "e"]

// ------------------------------------------------------------
// Task 7 — ticketPrice(customer)
// customer = { age, isStudent (bool), hasCoupon (bool) }
// Rules (in order):
//   1) If age < 6: price = 0
//   2) Else if age <= 18 OR isStudent is true: price = 8
//   3) Else if age >= 65: price = 6
//   4) Else: price = 12
// After that, if hasCoupon is true, subtract 2 (but not below 0).
// Return the final price.
function ticketPrice(customer) {
    let price = 0; // Initialize price  
    if (customer.age < 6) {
        price = 0; // Rule 1: Free for children under 6     
    } else if (customer.age <= 18 || customer.isStudent) {
        price = 8; // Rule 2: Discount for students or teens            
    } else if (customer.age >= 65) {
        price = 6; // Rule 3: Discount for seniors
    } else {
        price = 12; // Rule 4: Regular price for adults         
    }
    if (customer.hasCoupon) {                                                                               
        price -= 2; // Apply coupon discount
        if (price < 0) {    
            price = 0; // Ensure price does not go below 0
        }
    }   
    return price; // Return the final price
}
console.log(ticketPrice({ age: 4, isStudent: false, hasCoupon: false }));  // 0
console.log(ticketPrice({ age: 15, isStudent: false, hasCoupon: true    }));  // 6
console.log(ticketPrice({ age: 20, isStudent: true, hasCoupon: true }));   // 6
console.log(ticketPrice({ age: 70, isStudent: false, hasCoupon: true }));  // 4
console.log(ticketPrice({ age: 30, isStudent: false, hasCoupon: true    }));  // 10     


// ------------------------------------------------------------
// Task 8 — normalizeNames(names)
// Given an array of messy names, return a NEW array in the same order
// where each name is trimmed and converted to: First-letter uppercase + rest lowercase.
// Example: "   aMMaR massOUD " -> "Ammar massoud"
// Use loops + basic string methods. No map.
// ------------------------------------------------------------
function normalizeNames(names) {
    let result = [];
    for (let index = 0; index < names.length; index++) {
        let name = names[index].trim(); // Remove leading/trailing spaces
        if (name) { // Check if name is not empty
            let parts = name.split(" "); // Split by spaces
            let normalizedName = parts.map(part => {
                return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase(); // Capitalize first letter, lower the rest
            }).join(" "); // Join back with a space
            result.push(normalizedName); // Add to result array
        }
    }
    return result; // return the normalized names
}
console.log(normalizeNames(["   aMMaR massOUD  ", " SARA ", "oMaR"])); // ["Ammar Massoud", "Sara", "Omar"]

// ------------------------------------------------------------
// Task 9 — buildProductCatalog(rawItems)
// rawItems: [{name:"Mouse", brand:"Logi", stock:10}, {name:"SSD", stock:0}, ...]
// Use Object.create to make each product inherit from 'productProto' below.
// productProto provides two methods:
//   - isAvailable(): returns true if this.stock > 0
//   - label(): returns (this.brand || "Generic") + " " + this.name
// Return an array of product instances. Use a loop (no map).
// ------------------------------------------------------------
const productProto = {
    isAvailable: function () { return this.stock > 0; },
    label: function () { return (this.brand || "Generic") + " " + this.name; }
};

function buildProductCatalog(rawItems) {
    let result = [];
    for (let index = 0; index < rawItems.length; index++) {
        let item = rawItems[index];
        let obj = Object.create(productProto);
        obj.name = item.name;
        obj.brand = item.brand || "Generic";
        obj.stock = item.stock || 0;
        result.push(obj);
    }
    return result;
}

const items = [
    { name: "Mouse", brand: "Logi", stock: 10 },
    { name: "SSD", stock: 0 },
    { name: "Keyboard", brand: "KeyCo", stock: 3 },
];      
console.log(buildProductCatalog(items).map(p => ({ label: p.label(), available: p.isAvailable() })));   
// ------------------------------------------------------------
// Task 10 (while challenge) — sumUntilLimit(nums, limit)
// Add numbers from 'nums' in order using a WHILE loop until
// the running sum would EXCEED 'limit' — then stop and return the sum that
// does NOT exceed the limit. Example: nums=[5,7,4], limit=12 => 5+7=12 (stop) -> 12
// ------------------------------------------------------------
function sumUntilLimit(nums, limit) {
    let sum = 0;
    let index = 0;
    while (index < nums.length && sum + nums[index] <= limit) {
        sum += nums[index];
        index++;
    }
    return sum;
}
console.log(sumUntilLimit([5, 7, 4], 12)); // 12
console.log(sumUntilLimit([6, 6, 6], 10)); //   6
// ------------------------------------------------------------
// Task 11 (logic puzzle) — safeLogin(user, policy)
// user = { email, password }
// policy = { minLen, mustIncludeNumber (bool), blockWord } // blockWord example: "password"
// Return true if ALL rules pass:
//   - password length >= minLen
//   - if mustIncludeNumber is true, password must contain any digit 0-9
//   - password lowercased DOES NOT include blockWord lowercased
// Use loops, string methods, and logical operators (no regex).
// ------------------------------------------------------------
function safeLogin(user, policy) {
    let password = user.password;
    if (password.length < policy.minLen) return false;
    if (policy.mustIncludeNumber) {
        let hasNumber = false;
        for (let i = 0; i < password.length; i++) {
            if ("0123456789".includes(password[i])) {
                hasNumber = true;
                break;
            }
        }
        if (!hasNumber) return false;
    }
    if (password.toLowerCase().includes(policy.blockWord.toLowerCase())) return false;
    return true;
} 
console.log(safeLogin(
    { email: "a@b.com", password: "He11oWorld" },
    { minLen: 8, mustIncludeNumber: true, blockWord: "password" }
)); // true or false depending on rules


// ============================================================
// DEMO CALLS (Uncomment to test as you solve)
// ============================================================

// console.log("\n--- Task 1 ---");
// console.log(countVowels("Ammar Massoud")); // expect > 0

// console.log("\n--- Task 2 ---");
// console.log(invertCase("HeLLo 123!")); // "hEllO 123!"

// console.log("\n--- Task 3 ---");
// console.log(uniqueMerge([1,2,3,2],[3,4,1,5])); // [1,2,3,4,5]

// console.log("\n--- Task 4 ---");
// console.log(findFirstIndexDivisibleBy([2,7,9,10,12,15,22], 3, 5)); // index of 15

// console.log("\n--- Task 5 ---");
// console.log(allTruthy([1, "x", {}, []])); // true
// console.log(allTruthy([1, 0, "x"])); // false

// console.log("\n--- Task 6 ---");
// console.log(pickEveryNth(["a","b","c","d","e","f"], 2)); // ["a","c","e"]

// console.log("\n--- Task 7 ---");
// console.log(ticketPrice({ age: 4, isStudent: false, hasCoupon: false }));  // 0
// console.log(ticketPrice({ age: 15, isStudent: false, hasCoupon: true }));  // 6
// console.log(ticketPrice({ age: 20, isStudent: true, hasCoupon: true }));   // 6
// console.log(ticketPrice({ age: 70, isStudent: false, hasCoupon: true }));  // 4
// console.log(ticketPrice({ age: 30, isStudent: false, hasCoupon: true    }));  // 10

// console.log("\n--- Task 8 ---");
// console.log(normalizeNames(["   aMMaR massOUD  ", " SARA ", "oMaR"]));

// console.log("\n--- Task 9 ---");
// const items = [
//   { name: "Mouse", brand: "Logi", stock: 10 },
//   { name: "SSD", stock: 0 },
//   { name: "Keyboard", brand: "KeyCo", stock: 3 },
// ];
// const catalog = buildProductCatalog(items);
// console.log(catalog.map(p => ({ label: p.label(), available: p.isAvailable() })));

// console.log("\n--- Task 10 ---");
// console.log(scoresReport({ Alice: 17, Bob: 22, Carol: 22, Dan: 9 }));

// console.log("\n--- Task 11 ---");
// console.log(sumUntilLimit([5, 7, 4], 12)); // 12
// console.log(sumUntilLimit([6, 6, 6], 10)); // 6

// console.log("\n--- Task 12 ---");
// console.log(safeLogin(
//   { email: "a@b.com", password: "He11oWorld" },
//   { minLen: 8, mustIncludeNumber: true, blockWord: "password" }
// )); // true or false depending on rules

// ============================================================
// End — Have fun!
// ============================================================
