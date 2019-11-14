var mysql = require("mysql");
var inquirer = require("inquirer");

// CONSTRUCTOR
function Item(item_id, product_name, department_name, price, stock_quantity) {
  this.SKU = item_id;
  this.Product = product_name;
  this.Department = department_name;
  this.Price = price;
  this.Available = stock_quantity
}

// function which shows availbe items 
  function itemList(){
    query = `SELECT * FROM products`
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.log("\n");
      console.log("Items For Sale!");
      
        // Call Item constrcutor and feed response from database into items array for better display
        var items = [];
        for (i in res) {
            item = new Item(res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity);
            items.push(item);
            
            // Add item ID to array of known SKUs for validation
            allProductSKUs.push(res[i].item_id.toString());
        }
        // Output data in a table format
        console.table(items);
      console.log("\n");

      purchaseItem()
    })
  }

//Function that gives buying options - inquirer
  function purchaseItem() {
    inquirer
 .prompt([
        {
            type: "input",
            message: "Enter the SKU of the item you would like to purchase:",
            name: "sku",
            // Ensure that the SKU exists in the database
            validate: function validateSKU(sku) {
                if (allProductSKUs.indexOf(sku) === -1) {
                    return console.log(" Invalid Sku");
                } else {
                    return true;
                }
            }
        },
        {
          type: "input",
          message: "Enter the number of units to purchase:",
          name: "units"
      }
  ]) .then(function(answers) {
    connection.query(
      "SELECT * FROM products WHERE ?", 
      [
          {
              item_id: answers.sku
          }
      ],  
          function(err, availability) { 
              // Display errors if there were any
              if (err) throw err;

              //Check availability
              if (availability[0].stock_quantity >= answers.units) {

                //determine remaining
                remainingAvailability = availability[0].stock_quantity - answers.units;

                //Dertermine cost of purchase
                totalCost = availability[0].price * answers.units;

                //Update Database with Post Purchse information
                connection.query(
                  "UPDATE products SET ? WHERE ?", 
                  [
                      {
                          stock_quantity: remainingAvailability
                      },
                      {
                          item_id: answers.sku
                      }
                  ],   
                  function(err, res2) { 
                      // Display errors if there were any
                      if (err) throw err;  
                      console.log("\nTOTAL: $" + totalCost.toFixed(2));
                      console.log("Purchase Completed.");
                      connection.end();
                      
                  });
                
              } else {
                // Fails availability check
                console.log("\nNo Longer Available!");
                connection.end();
              }

      });
  });
}

  
// VARIABLES
var allProductSKUs = [];



// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  password: "password",
  database: "bamazon"
});

// connect to mysql server and database
connection.connect(function(err) {
  if (err) throw err;
  console.log("\n");
  console.log("Bamazon Store!! Customer I.D. " + connection.threadId);

  // run the start function after the connection is made to shows availbe items 
  itemList();
});