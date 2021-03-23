var cart = [];
var total = 0;
var totalQnt = 0;
var totalQntfn = 0;
var totalQntfnc = 0;
var Product = /** @class */ (function () {
    function Product(name, price, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    Product.prototype.getName = function () {
        //console.log(this.name)
        return this.name;
    };
    Product.prototype.getPrice = function () {
        console.log(this.price);
        return this.price;
    };
    return Product;
}());
var Blue_denim = new Product("Blue_denim Shirt", 17.99);
var Red_hoodie = new Product("Red hoodie", 29.99);
var Grey_SweatShirt = new Product("Grey SweatShirt", 9.99);
var Black_Denim = new Product("Black denim Jacket", 34.99);
function addToCart(product) {
    total = total + 1;
    if (cart.some(function (p) { return p.name === product.getName(); })) {
        cart.forEach(function (p) {
            if (p.name === product.getName()) {
                p.quantity += 1;
                //console.log(p)
            }
        });
    }
    else {
        cart.push(product);
    }
    //console.log(cart.length)
    //console.log(cart[2])
    var targetElement = document.getElementById('totalAmount');
    targetElement.innerHTML = totalAmount(product);
    var targetElements = document.getElementById('totalAmountFinal');
    targetElements.innerHTML = totalAmountFinal(product);
    var targetItems = document.getElementById('allItems');
    targetItems.innerHTML = allItems(product);
}
function removeFromCart(product) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name == product.getName()) {
            cart[i].quantity = 1;
            console.log(cart[i].quantity, cart[i]);
            cart.splice(i, 1);
        }
    }
    console.log(cart.length);
    cart.forEach(function (p) {
        if (p.name === product.getName()) {
            totalQnt -= (p.quantity * p.price);
            console.log(p);
            console.log(totalQnt);
            console.log(p.price);
        }
    });
    cart.forEach(function (p) {
        if (p.name === product.getName()) {
            totalQntfn -= (p.quantity * p.price);
            console.log(p);
            console.log(totalQnt);
            console.log(p.price);
        }
    });
    cart.forEach(function (p) {
        if (p.name === product.getName()) {
            totalQntfnc -= 1;
            console.log(p);
            console.log(totalQnt);
            console.log(p.price);
        }
    });
}
function totalAmount(product) {
    //console.log(total)
    //var totalAmt =total*17.99;
    //console.log(totalAmt)
    //return String(totalAmt);
    console.log(cart);
    cart.forEach(function (p) {
        if (p.name === product.getName()) {
            totalQnt += (p.quantity * p.price);
            console.log(p);
            console.log(totalQnt);
            console.log(p.price);
        }
    });
    return String(totalQnt);
}
function totalAmountFinal(product) {
    console.log(cart);
    cart.forEach(function (p) {
        if (p.name === product.getName()) {
            totalQntfn += (p.quantity * p.price);
            console.log(p);
            console.log(totalQnt);
            console.log(p.price);
        }
    });
    totalQntfn += 10;
    return String(totalQntfn);
}
function allItems(product) {
    console.log(cart);
    cart.forEach(function (p) {
        if (p.name === product.getName()) {
            totalQntfnc += 1;
            console.log(p);
            console.log(totalQnt);
            console.log(p.price);
        }
    });
    return String(totalQntfnc);
}
function updatesthis() {
    var targetElement = document.getElementById('totalAmount');
    targetElement.innerHTML = String(totalQnt);
    var targetElements = document.getElementById('totalAmountFinal');
    targetElements.innerHTML = String(totalQntfn);
    var targetItems = document.getElementById('allItems');
    targetItems.innerHTML = String(totalQntfnc);
}
