function solve() {
   const textArea = document.querySelector('textarea');

   const checkoutButton = document.querySelector('.checkout');
   const buttons = Array.from(document.querySelectorAll('button.add-product'));
   let boughtProducts = [];
   let totalPrice = 0;

   for(let but of buttons) {
      but.addEventListener('click', addProduct);
   }

   function addProduct(e) {
      const productDiv = e.currentTarget.parentNode.parentNode;
      const productName = productDiv.querySelector('.product-title').textContent;
      const productPrice = Number(productDiv.querySelector('.product-line-price').textContent);
      
      if(!boughtProducts.includes(productName)) {
         boughtProducts.push(productName);
      }
      totalPrice += productPrice;
      textArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
   } 

   checkoutButton.addEventListener('click', checkOut);

   function checkOut(e) {
      for(let but of buttons) {
         but.removeEventListener('click', addProduct);
      }

      textArea.value += `You bought ${boughtProducts.join(', ')} for ${totalPrice.toFixed(2)}.`
      checkoutButton.removeEventListener('click', checkOut);
   };
};