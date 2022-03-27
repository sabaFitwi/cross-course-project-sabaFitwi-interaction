const cartItems = JSON.parse(localStorage.getItem("cart"));

const shoppingCart = document.querySelector(".shopping-cart");
const orderSummary = document.querySelector(".order-summary-wrapper");
const headerOfCartPage = document.querySelector(".header-of-cart-page");
const cart = document.querySelector(".cart-info");

let subTotalPrice = 0;
let totalUnitPrice = 0;
cartItems.forEach(function (item) {
  subTotalPrice += item.price;
  totalUnitPrice += item.price;
  shoppingCart.innerHTML += `
  <section class="shipping-details_wrapper">
            <div class="shopping-cart_checkbox">
              <input type="checkbox" />
            </div>
            <div class="checkout-product-image">
              <h3 class="title">product</h3>
              <div><img src="${item.image}" 
                          alt = "${item.category}"/></div>
                    </div>
            </div>
            <div class="checkout-product_size">
              <h3 class="title">detail</h3>
              <h2 class="title-margin">${item.category}</h2>
              <p  class="title-color">${item.title}</p>
              <p>Size : S</p>
            </div>
            <div class="quantity">
              <h3 class="title">quantity</h3>
            <div class="number-input">
                <div class="minus">-</div>
                <input class="cart-input" type="text" value="1"/>
                <div class="plus">+</div>
            </div>
            </div>
            <div class="checkout-product_price">
              <h3 class="title">price</h3>
              <a href="#"><i class="fa-regular fa-trash-can"></i></a>
              <p class="title-margin price-bold">US $${item.price}</p>
              <p class="remove-cart" data-result="${item.id}">Remove</p>
            </div>
          </section>
     
    `;
  headerOfCartPage.innerHTML = `<h1 class="header-of-cart-page">Shopping Cart <span class="inCart-number">(${cartItems.length})</span></h1>`;
  cart.innerHTML = `(${cartItems.length})`;
});

orderSummary.innerHTML = `<div class="total">
                            <p>Sub Total</p>
                              <p class="sub-total">US $${totalUnitPrice.toFixed(
                                2
                              )}</p>
                              </div>
                              <div class="total">
                                  <p>Shipping</p>
                                  <p>US $0.00</p>
                              </div>
                              <div class="total">
                                  <p>Total</p>
                                  <p class="gran-total">US $${totalUnitPrice.toFixed(
                                    2
                                  )}</p>
                            </div>
                        
                        `;
