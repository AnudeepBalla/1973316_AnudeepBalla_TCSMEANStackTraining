let cart = []
let total:number = 0
let totalQnt:number = 0
let totalQntfn:number = 0
let totalQntfnc:number = 0

class Product {
    constructor(private name:string,private price:number,public quantity:number=1) {}
    getName() : string {
        //console.log(this.name)
        return this.name
    }
    getPrice() : number {
        console.log(this.price)
        return this.price
    }
    

}
let Blue_denim = new Product("Blue_denim Shirt",17.99);
let Red_hoodie = new Product("Red hoodie",29.99);
let Grey_SweatShirt = new Product("Grey SweatShirt",9.99);
let Black_Denim = new Product("Black denim Jacket",34.99);

function addToCart(product:Product) {
    total = total+1;
  
    if (cart.some(p => p.name === product.getName())){

        
        cart.forEach(p=> {
            if (p.name === product.getName()){
                p.quantity += 1;
                //console.log(p)
                
            }
        })
    }
    else {
        cart.push(product)
       
    }
    //console.log(cart.length)
    //console.log(cart[2])


    var targetElement = document.getElementById('totalAmount');
    
    targetElement.innerHTML = totalAmount(product);
    
    
    var targetElements = document.getElementById('totalAmountFinal');
    
    targetElements.innerHTML =totalAmountFinal(product) ;

    var targetItems = document.getElementById('allItems');
    targetItems.innerHTML = allItems(product);
  
}
function removeFromCart(product:Product) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name == product.getName()) {
            cart[i].quantity = 1;
            console.log(cart[i].quantity,cart[i])
            cart.splice(i,1);
        }
    }    
    console.log(cart.length)
    

    cart.forEach(p=> {
        if (p.name ===product.getName() ){
            totalQnt -= (p.quantity*p.price) ;
            console.log(p)
            console.log(totalQnt)
            console.log(p.price)

            
        }

    })
    cart.forEach(p=> {
        if (p.name ===product.getName() ){
            totalQntfn -= (p.quantity*p.price) ;
            console.log(p)
            console.log(totalQnt)
            console.log(p.price)

            
        }

    })
    cart.forEach(p=> {
        if (p.name ===product.getName() ){
            totalQntfnc -= 1 ;
            console.log(p)
            console.log(totalQnt)
            console.log(p.price)

            
        }

    })
    

  
}

function totalAmount(product){
    
    //console.log(total)
    //var totalAmt =total*17.99;
    //console.log(totalAmt)
    //return String(totalAmt);
    console.log(cart)
    cart.forEach(p=> {
        if (p.name ===product.getName() ){
            totalQnt += (p.quantity*p.price) ;
            console.log(p)
            console.log(totalQnt)
            console.log(p.price)

            
        }

    })
    
    return String(totalQnt);
}
 
function totalAmountFinal(product){
    console.log(cart)
    cart.forEach(p=> {
        if (p.name ===product.getName() ){
            totalQntfn += (p.quantity*p.price) ;
            console.log(p)
            console.log(totalQnt)
            console.log(p.price)

            
        }

    })
    totalQntfn += 10
    return String(totalQntfn);
}

function allItems(product){
    console.log(cart)
    cart.forEach(p=> {
        if (p.name ===product.getName() ){
            totalQntfnc += 1 ;
            console.log(p)
            console.log(totalQnt)
            console.log(p.price)

            
        }

    })
 
    return String(totalQntfnc);
}

function updatesthis(){
    var targetElement = document.getElementById('totalAmount');
    
    targetElement.innerHTML = String(totalQnt);
    
    
    var targetElements = document.getElementById('totalAmountFinal');
    
    targetElements.innerHTML =String(totalQntfn) ;

    var targetItems = document.getElementById('allItems');
    targetItems.innerHTML = String(totalQntfnc);


}
