// This will be a random price generator

const items = ["fish","Cookies","Maple Syrup","Honey"];

const prices = ["$4","$2","$5","$3"];

const stores = ["Target","Walmart","Sprouts","Publix"]; 

function getRandNum(array){
    return Math.floor(Math.random() * array.length);
}


console.log(`I hear that ${items[getRandNum(items)]} is on sale for ${prices[getRandNum(prices)]} at ${stores[getRandNum(stores)]}`)
