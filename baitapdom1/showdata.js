//đổ data vào html
let content0 = document.getElementById("content0");
function showProducts(link, name, clan, like) {
  content0.insertAdjacentHTML(
    "beforeend",
    `            
    <div class="image">
    <button class="image1">
      <iframe
        height="200"
        src="${link}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="img-ytb"
      ></iframe>
      <br />
      <span>
        <b>${name}</b>
        </span>
      <div class="ytb">
        <a href="/c/OrinnRemix" style="color: gray">${clan}</a>
      </div>
      <div>
        <span class="like" style="color: gray">
        ${like}
        </span>
      </div>
    </button>
  </div>
  `
  );
}

// mặc định sâu tất cả
// content0.innerHTML = '';
// for(let i = 0; i < products.length; i++)
// {
//     showProducts(products[i].link, products[i].name, products[i].clan, products[i].like);
// }
function showAllProducts(products) {
  content0.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    showProducts(
      products[i].link,
      products[i].name,
      products[i].clan,
      products[i].like
    );
  }
}
showAllProducts(products)
