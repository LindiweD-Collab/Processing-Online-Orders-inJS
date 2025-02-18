class Order {  
    constructor(orderId, item, quantity) {  
        this.orderId = orderId;  
        this.item = item;  
        this.quantity = quantity;  
    }  
}  

function processOrder(order) {  
    // Simulate order processing (e.g., checking inventory)  
    console.log(`Processing Order ID: ${order.orderId}`);  
    console.log(`Item: ${order.item}, Quantity: ${order.quantity}`);  
    // Here you would add logic for payment, inventory updates, etc.  
}  

// Example usage  
const newOrder = new Order(101, 'Laptop', 1);  
processOrder(newOrder);
