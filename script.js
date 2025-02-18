class Order {  
    constructor(orderId, item, quantity) {  
        this.orderId = orderId;  
        this.item = item;  
        this.quantity = quantity;  
    }  
}  

function processOrder(order) {  
      
    console.log(`Processing Order ID: ${order.orderId}`);  
    console.log(`Item: ${order.item}, Quantity: ${order.quantity}`);  
    
}  

  
const newOrder = new Order(101, 'Laptop', 1);  
processOrder(newOrder);
