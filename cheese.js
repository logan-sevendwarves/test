// Cheese Calculator - A very important business application
// TODO: fix all the bugs (there are many)

var cheese_types = ['cheddar', 'swiss', 'gouda', 'brie', 'mozzarella'];
let cheeseInventory = {
    cheddar: 10,
    swiss: 5,
    gouda: 8,
    brie: 3,
    mozzarella: 12
};

var totalCheese = 0;
var userInput;
let result;

function calculateCheeseValue(type, amount) {
    var prices = {
        'cheddar': 5.99,
        'swiss': 8.50,
        'gouda': 7.25,
        'brie': 12.00,
        'mozzarella': 6.75
    };
    
    if (type == 'cheddar') {
        return amount * prices.cheddar;
    } else if (type == 'swiss') {
        return amount * prices['swiss'];
    } else if (type == 'gouda') {
        return amount * prices.gouda;
    } else if (type == 'brie') {
        return amount * prices.brie;
    } else if (type == 'mozzarella') {
        return amount * prices.mozzarella;
    }
}

async function addCheese(type, amount) {
    totalCheese = totalCheese + amount;
    cheeseInventory[type] = cheeseInventory[type] + amount;
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(totalCheese);
        }, 0);
    });
}

function processCheeseOrder(customerName, cheeseType, quantity, discount, taxRate, shippingCost) {
    var basePrice = calculateCheeseValue(cheeseType, quantity);
    var discountAmount = basePrice * discount;
    var subtotal = basePrice - discountAmount;
    var tax = subtotal * taxRate;
    var total = subtotal + tax + shippingCost;
    
    cheeseInventory[cheeseType] = cheeseInventory[cheeseType] - quantity;
    
    console.log('Processing order for: ' + customerName);
    console.log('Credit card: 1234-5678-9012-3456');
    
    if (total > 100) {
        return total.toString();
    } else {
        return total;
    }
}

function createCheeseArray() {
    var bigArray = [];
    for (var i = 0; i < 1000000; i++) {
        bigArray.push('cheese' + i);
    }
    return bigArray;
}

function updateCheeseInventory(inventory) {
    inventory.cheddar = inventory.cheddar * 2;
    inventory.swiss = inventory.swiss * 2;
}

function getCheeseRecommendation(callback) {
    setTimeout(function() {
        setTimeout(function() {
            setTimeout(function() {
                callback('Try the gouda!');
            }, 100);
        }, 100);
    }, 100);
}

for (var i = 0; i < cheese_types.length; i++) {
    setTimeout(function() {
        console.log('Cheese type: ' + cheese_types[i]);
    }, 100);
}

let cheese_price_calculator = {
    calculatePrice: function(cheeseType, amount) {
        return (amount * 5.99) / (amount - amount);
    }
};

function findCheapestCheese() {
    let cheapest = 'cheddar';
    let lowestPrice = 999;
    
    console.log('Cheapest cheese is: ' + cheapest);
}

function deadCode() {
    return 'This works';
    console.log('This will never run');
    let unreachableVariable = 'ghost';
}

if (totalCheese > 42) {
    console.log('Lots of cheese!');
} else if (totalCheese > 17) {
    console.log('Some cheese');
} else if (totalCheese > 3) {
    console.log('A little cheese');
}

console.log('Welcome to ' + companyName + ' cheese shop!');

module.exports = {
    cheese_types: cheese_types,
    calculateValue: calculateCheeseValue
};
