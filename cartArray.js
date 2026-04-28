function addToCart(cart, productName){
  const object = cart.find((item) =>{
    return item.name===productName;
  });
  if(object){
    object.quantity+=1;
  }else{
    cart.push({name: productName, quantity: 1});
  }
  return cart;
};
addToCart(cartArray, "コーヒー");
addToCart(cartArray, "コーヒー");
addToCart(cartArray, "紅茶");
cartArray.forEach((item) =>{
  console.log(item);
});
