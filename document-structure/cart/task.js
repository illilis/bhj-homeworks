const cart = document.querySelector(".cart");
const cartProducts = document.querySelector(".cart__products");
const products = document.querySelectorAll(".product");

if (cartProducts.innerText === "") {
  cart.style.display = "none";
}

products.forEach(product => {
  const productControlDec = product.querySelector(".product__quantity-control_dec");
  const productControlInc = product.querySelector(".product__quantity-control_inc");
  const productQuantityValue = product.querySelector(".product__quantity-value");
  const productAdd = product.querySelector(".product__add");

  productControlDec.addEventListener("click", () => {
    if (productQuantityValue.textContent > 1) {
      productQuantityValue.textContent--;
    }
  });

  productControlInc.addEventListener("click", () => {
    productQuantityValue.textContent++;
  })

  productAdd.addEventListener("click", () => {
    addToCart(product);
  })
});

function addToCart(product) {
  const productValue = product.querySelector(".product__quantity-value");
  const productImage = product.querySelector(".product__image").src;
  const cartProduct = document.createElement("div");

  if (checkCart(product)) {
    const cartProductId = product.dataset.id;
    const productInCart = cartProducts.querySelector(`[data-id="${cartProductId}"]`);
    const cartProductValue = productInCart.querySelector(".cart__product-count");

    console.log(cartProductValue);
    cartProductValue.textContent = +cartProductValue.textContent + +productValue.textContent; 
    
    return;
  }

  cartProduct.setAttribute("data-id", `${product.dataset.id}`);
  cartProduct.classList.add("cart__product");
  cartProduct.innerHTML = `
    <img class="cart__product-image" src="${productImage}">
    <div class="cart__product-count">${productValue.textContent}</div>
    <div class="cart__product-delete">Удалить</div>
    </div>
  `;

  cartProducts.appendChild(cartProduct);

  cart.style.display = "block";

  deleteProductFromCart();
}

function checkCart(product) {
  const productsInCart = cartProducts.querySelectorAll(".cart__product");
  
  const productInCartId = [...productsInCart].some(cartProduct => cartProduct.dataset.id === product.dataset.id);

  return productInCartId;
}

function deleteProductFromCart() {
  const productsInCart = cartProducts.querySelectorAll(".cart__product");
  console.log(productsInCart);

  productsInCart.forEach(element => {
    const cartProductDelete = element.querySelector(".cart__product-delete");
    console.log(cartProductDelete);
    cartProductDelete.addEventListener("click", () => {
        const cartProduct = cartProductDelete.closest(".cart__product");
        cartProduct.remove();

        if (cartProducts.innerText === "") {
          cart.style.display = "none";
        }
      });
  })
};
