const data = [
  {
    imgURL:
      "https://www.pokemoncenter.com/products/images/P2373PC/155-81155/P2373PC_155-81155_01_full.jpg",
    title: "Pokémon TCG: XY-Evolutions Booster Display (36 packs)",
    price: "143.64",
    stock: "0",
    caption: "A full display of 36 booster packs!",
    description:
      "All Trainers and Pokémon grow and evolve—and this expansion restores the very first Pokémon trading cards to glory! With exhilarating power and some wild surprises, the classic hard-battling Pokémon and old-school Trainers are reinvented for a new generation. Ask Professor Oak to get you started, and reach new heights with the Pokémon TCG: XY—Evolutions expansion!",
  },
  {
    imgURL:
      "https://www.pokemoncenter.com/products/images/P6379/174-81712/P6379_174-81712_01_full.jpg",
    title:
      "Pokémon TCG: Sword & Shield-Darkness Ablaze Booster Display Box (36 Packs)",
    price: "143.64",
    stock: "23",
    caption: "A full display of 36 booster packs!",
    description:
      "All Trainers and Pokémon grow and evolve—and this expansion restores the very first Pokémon trading cards to glory! With exhilarating power and some wild surprises, the classic hard-battling Pokémon and old-school Trainers are reinvented for a new generation. Ask Professor Oak to get you started, and reach new heights with the Pokémon TCG: XY—Evolutions expansion!",
  },
  {
    imgURL:
      "https://www.pokemoncenter.com/products/images/P3653PC/162-81230/P3653PC_162-81230_01_full.jpg",
    title:
      "Pokémon TCG: Sun & Moon-Burning Shadows Booster Display Box (36 Packs)",
    price: "143.64",
    stock: "60",
    caption: "A full display of 36 booster packs!",
    description:
      "All Trainers and Pokémon grow and evolve—and this expansion restores the very first Pokémon trading cards to glory! With exhilarating power and some wild surprises, the classic hard-battling Pokémon and old-school Trainers are reinvented for a new generation. Ask Professor Oak to get you started, and reach new heights with the Pokémon TCG: XY—Evolutions expansion!",
  },
  {
    imgURL:
      "https://www.pokemoncenter.com/products/images/P5075/169-81547/P5075_169-81547_01_full.jpg",
    title:
      "Pokémon TCG: Sun & Moon-Unbroken Bonds Booster Display Box (36 Packs)",
    price: "143.64",
    stock: "345",
    caption: "A full display of 36 booster packs!",
    description:
      "All Trainers and Pokémon grow and evolve—and this expansion restores the very first Pokémon trading cards to glory! With exhilarating power and some wild surprises, the classic hard-battling Pokémon and old-school Trainers are reinvented for a new generation. Ask Professor Oak to get you started, and reach new heights with the Pokémon TCG: XY—Evolutions expansion!",
  },
  {
    imgURL:
      "https://www.pokemoncenter.com/products/images/P4865PC/168-81486/P4865PC_168-81486_01_full.jpg",
    title: "Pokémon TCG: Sun & Moon-Team Up Booster Display Box (36 Packs)",
    price: "143.64",
    stock: "125",
    caption: "A full display of 36 booster packs!",
    description:
      "All Trainers and Pokémon grow and evolve—and this expansion restores the very first Pokémon trading cards to glory! With exhilarating power and some wild surprises, the classic hard-battling Pokémon and old-school Trainers are reinvented for a new generation. Ask Professor Oak to get you started, and reach new heights with the Pokémon TCG: XY—Evolutions expansion!",
  },
  {
    imgURL:
      "https://www.pokemoncenter.com/products/images/P1414/143-11846/P1414_143-11846_01_full.jpg",
    title:
      "Pokémon TCG: Black & White-Legendary Treasures Booster Display Box (36 Packs)",
    price: "143.64",
    stock: "2",
    caption: "A full display of 36 booster packs!",
    description:
      "All Trainers and Pokémon grow and evolve—and this expansion restores the very first Pokémon trading cards to glory! With exhilarating power and some wild surprises, the classic hard-battling Pokémon and old-school Trainers are reinvented for a new generation. Ask Professor Oak to get you started, and reach new heights with the Pokémon TCG: XY—Evolutions expansion!",
  },
  {
    imgURL:
      "https://www.pokemoncenter.com/products/images/P1414/145-11886/P1414_145-11886_01_full.jpg",
    title: "Pokémon TCG: XY-Flashfire Booster Display Box (36 Packs)",
    price: "143.64",
    stock: "3",
    caption: "A full display of 36 booster packs!",
    description:
      "All Trainers and Pokémon grow and evolve—and this expansion restores the very first Pokémon trading cards to glory! With exhilarating power and some wild surprises, the classic hard-battling Pokémon and old-school Trainers are reinvented for a new generation. Ask Professor Oak to get you started, and reach new heights with the Pokémon TCG: XY—Evolutions expansion!",
  },
  {
    imgURL:
      "https://www.pokemoncenter.com/products/images/P6390/290-80788/P6390_290-80788_01_full.jpg",
    title: "Pokémon TCG: Trainer’s Toolkit",
    price: "29.99",
    stock: "245",
    caption: "A full display of 36 booster packs!",
    description:
      "All Trainers and Pokémon grow and evolve—and this expansion restores the very first Pokémon trading cards to glory! With exhilarating power and some wild surprises, the classic hard-battling Pokémon and old-school Trainers are reinvented for a new generation. Ask Professor Oak to get you started, and reach new heights with the Pokémon TCG: XY—Evolutions expansion!",
  },
];

let searchParams = new URLSearchParams(window.location.search);

let pageIndex = searchParams.get("index");

if (pageIndex !== "new") {
  const ptitle = document.querySelector("#title");
  ptitle.setAttribute("value", data[pageIndex].title);
  const pprice = document.querySelector("#price");
  pprice.setAttribute("value", data[pageIndex].price);
  const pstock = document.querySelector("#stock");
  pstock.setAttribute("value", data[pageIndex].stock);
  const pimg = document.querySelector("#imgUrl");
  pimg.setAttribute("value", data[pageIndex].imgURL);
  const pcap = document.querySelector("#caption");
  pcap.setAttribute("value", data[pageIndex].caption);
  const pdesc = document.querySelector("#desc");
  pdesc.setAttribute("value", data[pageIndex].description);
}
