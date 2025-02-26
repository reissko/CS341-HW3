/* AUTHOR: Reiss Oliveros */

var express = require('express');
var router = express.Router();

// Hardcoded order data per month
const monthlyOrders = {
    jan: [{ topping: "Cherry", quantity: 11 }, { topping: "Chocolate", quantity: 17 }, { topping: "Plain", quantity: 31 }],
    feb: [{ topping: "Cherry", quantity: 9 }, { topping: "Chocolate", quantity: 19 }, { topping: "Plain", quantity: 8 }],
    mar: [{ topping: "Cherry", quantity: 10 }, { topping: "Chocolate", quantity: 19 }, { topping: "Plain", quantity: 3 }],
    apr: [{ topping: "Cherry", quantity: 12 }, { topping: "Chocolate", quantity: 14 }, { topping: "Plain", quantity: 20 }],
    may: [{ topping: "Cherry", quantity: 3 }, { topping: "Chocolate", quantity: 20 }, { topping: "Plain", quantity: 6 }],
    jun: [{ topping: "Cherry", quantity: 5 }, { topping: "Chocolate", quantity: 6 }, { topping: "Plain", quantity: 12 }],
    jul: [{ topping: "Cherry", quantity: 8 }, { topping: "Chocolate", quantity: 9 }, { topping: "Plain", quantity: 5 }],
    aug: [{ topping: "Cherry", quantity: 11 }, { topping: "Chocolate", quantity: 18 }, { topping: "Plain", quantity: 1 }],
    sep: [{ topping: "Cherry", quantity: 20 }, { topping: "Chocolate", quantity: 3 }, { topping: "Plain", quantity: 5 }],
    oct: [{ topping: "Cherry", quantity: 5 }, { topping: "Chocolate", quantity: 2 }, { topping: "Plain", quantity: 14 }],
    nov: [{ topping: "Cherry", quantity: 8 }, { topping: "Chocolate", quantity: 22 }, { topping: "Plain", quantity: 16 }],
    dec: [{ topping: "Cherry", quantity: 10 }, { topping: "Chocolate", quantity: 16 }, { topping: "Plain", quantity: 15 }]
};

// Handle `POST` requests to `/orders`
router.post('/', function(req, res) {
       let month = req.body.month.toLowerCase();
       
       console.log(month);

       if (monthlyOrders[month]) {
              res.json(monthlyOrders[month]); // Send corresponding orders
       } else {
              res.status(400).json({ error: "Invalid month" });
       }
});

// Handle `GET` request to `/orders` (returns sample JSON)
router.get('/', function(req, res) {
    res.json({ message: "Use POST with a month to retrieve orders" });
});

module.exports = router;
