
const productsArray = [
  {
    id: "price_1Np8EMDKizImoqlpNPGLonfq",
    title: "Coffee",
    price: 4.99
  },
  {
    id: "price_1Np8FZDKizImoqlpJPkEBssI",
    title: "Sunglasses",
    price: 9.99
  },
  {
    id: "price_1Np8FpDKizImoqlpC5ggU1VV",
    title: "Camera",
    price: 39.99
  }
];

function getProductData(id){
  let productData = productsArray.find(product=>product.id===id);

  if(productData==undefined){
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }
  return productData;
}

export {productsArray, getProductData};