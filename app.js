function goShop() {
  window.open("main.html", "_self");
}

// // element yang mau kita taruh item-itemnya
const productList = document.getElementById("product-list");

// // kita buat penampung product item2nya
let listProduct = "";

// // looping product
for (let x = 0; x < 9; x++) {
  listProduct += `
      <div class="product-card">
         <div class="product-section">
            <h4>Title ${x + 1}</h4>
            <h5>Category</h5>
         </div>
      </div>
   `;
}

// // masukan listProduct ke productList
if (productList) {
  productList.innerHTML = listProduct;
}

const backButton = document.getElementById("tombol-kembali");

backButton?.addEventListener("click", function () {
  history.back();
});
