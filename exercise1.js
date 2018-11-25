// Here, we have an multidimensional array of customers
// with the following fields 
// First Name, Last Name, Customer ID, Balance

let customersArr = [
    ['Ichigo',  'Kurosaki', 23567, 153677345], // index 0
    ['Gin',     'Ichimaru', 1234,  1235412356], // index 1
    ['Shunsui', 'Kyoraku',  1531,  65432467], // index 2
    ['Kisuke',  'Urahara',  543,   63463723562] // index 3
];

///////////////////// Step 01 /////////////////////
console.log('Step 1 create a displayBalance function');
// Create a function named displayBalance that returns balance as dollars and cents
// when you pass the Customer ID as an argument

function displayBalance(id) {
  //console.log(id);
  
  var step;
  for (step = 0; step < customersArr.length; step++) {
    //console.log(customersArr[step]);
    
    // find the specific customer
    // if arguement id is equal to customersArr[step] id, that's the right customer
    if (id == customersArr[step][2]) { 
      // grab that customer's balance
      // convert balance to dollars and cents
      var dollarsCents = customersArr[step][3] / 100;
  
      // return the balance
      return "$" + dollarsCents;
    }
  }
}

// expected output $12354123.56
console.log(displayBalance(1234)); 

///////////////////// Step 02 /////////////////////
console.log('Step 2 create a getCustomer function');
// Create a function named getCustomer that returns a customer
// by passing customer ID as an argument and outputs their
// first name, last name, customer ID, and balance 

//Find array for customer ID

//Grab items in the array

//put in correct format

//dollars and cents conversion

//return final string

function getCustomer(id) {

  var step;
  for (step = 0; step < customersArr.length; step++) {
    if (id == customersArr[step][2]){
     var finalOutput = customersArr[step][0];
      return finalOutput;
    
    }
  
  }

}




//expected output Kisuke Urahara, customer 543 has a balance of $634637235.62
console.log(getCustomer(543)); 

///////////////////// Step 03 /////////////////////
console.log('Step 3 create a largestBalance function');
// Create a function named largestBalance that determines who has the largest balance
// and returns the customer ID

//loop through arrays to find the largest number in the 4th position

//return the customer ID






// expected output 543
console.log(largestBalance(customersArr));

///////////////////// Step 04 /////////////////////
console.log('Step 4 create a getAllCustomers function');
// Create a function named getAllCustomers that returns all customers
// in this format. 
// Ichigo Kurosaki, customer 23567 has a balance of $1536773.45
// Gin Ichimaru, customer 1234 has a balance of $12354123.56
// Shunsui Kyoraku, customer 1531 has a balance of $654324.67
// Kisuke Urahara, customer 543 has a balance of $634637235.62

// Hint: You can take advantage of you getCustomer function.


//list all arrays

//put it proper format

//$conversion

//return the final output











console.log(getAllCustomers(customersArr));

///////////////////// Step 05 /////////////////////
console.log('Step 5 add a new element to customerArr');
// Add a title element to customer in customerArr
// with the following data.
// Ichigo Kurosaki, title is empty (blank)
// Gin Ichimaru title is Captain
// Shunsui Kyoraku title is Captain
// Kisuke Urahara title is Shopkeeper


//add place for title
//new customer format = ['Ichigo', 'Kurosaki', '', 23567, 153677345]


//To add this to the beginning I would use the unshift() method, but I can't figure out how to use it in a function to work on all the inner arrays



//fill in title for customer






///////////////////// Step 06 /////////////////////
console.log('Step 6 add new customers to customerArr');
// Add two new customers to customerArr with the following data
//     Captian Retsu Unohana 5234 4323456234
//     Princess Yoruichi Shihoin 24356 543745834573494
// and update getAllCustomers() to output all 6 customers including
// their titles.

//I would think the below would work but it is not outputing anything
customersArr[0].push(["Captian", "Retsu", "Unahona", 5234, 4323456234]);
console.log(customersArr);




//expected output
// Ichigo Kurosaki, customer 23567 has a balance of $1536773.45
// Captain Gin Ichimaru, customer 1234 has a balance of $12354123.56
// Captian Shunsui Kyoraku, customer 1531 has a balance of $654324.67
// Shopkeeper Kisuke Urahara, customer 543 has a balance of $634637235.62
// Captian Retsu Unohana, customer 5234 has a balance of $43234562.34
// Princess Yoruichi Shihoin, customer 24356 has a balance of $5437458345734.94
console.log(getAllCustomers(customersArr));













///////////////////// Step 07 /////////////////////
console.log('Step 7 update customer balances');
// Update the balance to of each customer to amounts of your chosing

//I would think I could do something like this but the console isn't displaying anything
item [0][3]=11111111;
console.log([0][3]);










///////////////////// Step 08 /////////////////////
console.log('Step 8 find out who has the largest balance currently');
// Use largestBalance to output who has the largest balance now
















///////////////////// Step 09 /////////////////////
console.log('Step 9 reset the customerIDs');
// Write a function that sorts the customers alphabetically
// by last name and gives each customer a new customerID
// starting at 100.
// Gin Ichimaru will now have customerID 100 and Ichigo Kurosaki 101



//The sort() method can sort elements alphabetically but I can't figure out how to use it in a function to work on all the arrays.  I would also need to somehow change the customer number on the first customer then +1 the number for the remaining customers







