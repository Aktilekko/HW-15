async function getData() {
  let response = await fetch("db.json");
  let products = await response.json();

  products.forEach((product) => {
    let cardsWrapper = document.querySelector(".cards-wrapper");

    let card = document.createElement("div");
    card.className = "product-card";
    cardsWrapper.appendChild(card);

    let cardInner = document.createElement("div");
    cardInner.className = "product-card-inner";
    card.appendChild(cardInner);

    let img = document.createElement("img");
    img.className = "product-img";
    img.src = product.img;
    cardInner.append(img);

    let prodName = document.createElement("div");
    let title = document.createElement("h3");
    let price = document.createElement("span");
    prodName.className = "title-price-block";
    title.className = "product-name";
    price.className = "product-price";
    prodName.appendChild(title);
    prodName.appendChild(price);
    cardInner.append(prodName);
    title.innerText = product.title;
    price.innerText = product.price;

    let line = document.createElement("hr");
    let descr = document.createElement("p");
    descr.className = "product-descr";
    cardInner.append(line);
    cardInner.append(descr);
    descr.innerText = product.desc;
  });
}
getData();
