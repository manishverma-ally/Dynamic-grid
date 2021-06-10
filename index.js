// containers to hold product cards
let clothingContainer = document.querySelector("#clothing-container");
let accessoriesContainer = document.querySelector("#accessories-container");

// array productList comes from productData.js
for (const product of productList) {
  // container to put product data as child elements
  let card = document.createElement("div");
  card.id = product.id;
  card.className = "card";

  // anchor-tag element
  let link = document.createElement("a");
  link.href = `/`;

  // container to wrap product image
  let imgContainer = document.createElement("div");
  imgContainer.className = "img";

  // product image element
  let img = document.createElement("img");
  img.src = product.preview;

  // appending image element to image container
  imgContainer.appendChild(img);

  // product details container
  let details = document.createElement("div");
  details.className = "details";

  // elements to fill product details
  let h3 = document.createElement("h3");
  let h4 = document.createElement("h4");
  let h5 = document.createElement("h5");

  h3.textContent = product.name;
  h4.textContent = product.brand;
  h5.textContent = `Rs ${product.price}`;

  // appending product details in "details" element
  details.appendChild(h3);
  details.appendChild(h4);
  details.appendChild(h5);

  link.appendChild(imgContainer);
  link.appendChild(details);

  card.appendChild(link);

  // if product is a accessory put it in accessories container else in clothing container
  if (product.isAccessory) {
    accessoriesContainer.appendChild(card);
  } else {
    clothingContainer.appendChild(card);
  }
}
