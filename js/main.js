const data = [
  {
    imgURL:
      "https://www.pokemoncenter.com/products/images/P2373PC/155-81155/P2373PC_155-81155_01_full.jpg",
    title: "Pokémon TCG: XY-Evolutions Booster Display (36 packs)",
    price: "143.64",
  },
  {
    imgURL:
      "https://www.pokemoncenter.com/products/images/P6379/174-81712/P6379_174-81712_01_full.jpg",
    title:
      "Pokémon TCG: Sword & Shield-Darkness Ablaze Booster Display Box (36 Packs)",
    price: "143.64",
  },
  {
    imgURL:
      "https://www.pokemoncenter.com/products/images/P3653PC/162-81230/P3653PC_162-81230_01_full.jpg",
    title:
      "Pokémon TCG: Sun & Moon-Burning Shadows Booster Display Box (36 Packs)",
    price: "143.64",
  },
  {
    imgURL:
      "https://www.pokemoncenter.com/products/images/P5075/169-81547/P5075_169-81547_01_full.jpg",
    title:
      "Pokémon TCG: Sun & Moon-Unbroken Bonds Booster Display Box (36 Packs)",
    price: "143.64",
  },
  {
    imgURL:
      "https://www.pokemoncenter.com/products/images/P4865PC/168-81486/P4865PC_168-81486_01_full.jpg",
    title: "Pokémon TCG: Sun & Moon-Team Up Booster Display Box (36 Packs)",
    price: "143.64",
  },
  {
    imgURL:
      "https://www.pokemoncenter.com/products/images/P1414/143-11846/P1414_143-11846_01_full.jpg",
    title:
      "Pokémon TCG: Black & White-Legendary Treasures Booster Display Box (36 Packs)",
    price: "143.64",
  },
  {
    imgURL:
      "https://www.pokemoncenter.com/products/images/P1414/145-11886/P1414_145-11886_01_full.jpg",
    title: "Pokémon TCG: XY-Flashfire Booster Display Box (36 Packs)",
    price: "143.64",
  },
  {
    imgURL:
      "https://www.pokemoncenter.com/products/images/P6390/290-80788/P6390_290-80788_01_full.jpg",
    title: "Pokémon TCG: Trainer’s Toolkit",
    price: "29.99",
  },
];

if ("content" in document.createElement("template")) {
  const ul = document.querySelector("#product-list");
  const template = document.querySelector("#product");

  data.forEach((dataNode, index) => {
    const clone = template.content.cloneNode(true);
    const anchor = clone.querySelector("a");
    anchor.setAttribute("href", "./detail.html?index=" + index);
    const img = clone.querySelector("img");
    img.setAttribute("src", dataNode.imgURL);
    const h3 = clone.querySelector("h3");
    h3.textContent = dataNode.title;
    const price = clone.querySelector(".product-price");
    price.textContent = "$" + dataNode.price;

    ul.appendChild(clone);
  });
}
