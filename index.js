var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return getCart()
}


function viewCart(){
  var string = `In your cart, you have `
  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }else{
    for (var cv = 0; cv < cart.length; cv++){
      for (var itemName in cart[cv]){
        string += `${itemName} at $${cart[cv][itemName]}`
        if(cv < cart.length - 1){
          string += ", "
        }
        else {
          string += "."
        }
      }
    }
    console.log(string)
  }
}

function removeFromCart(itemname){
  for (var cv = 0; cv < cart.length; cv++){
    if(Object.keys(cart[cv])[0] === itemname){
      cart.splice(cv,1)
      // return cart
    }else {
      // console.log("That item is not in your cart.") THIS SHOULD WORK BUT DOESN'T
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber){
  if(cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }else{
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
