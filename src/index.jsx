const PRODUCTS = [
  {
    title: "Hand bag",
    price: "55",
    img: "black_hand_bag.png",
    id: 1,
    category: "bags",
  },
  {
    title: "Hoodie",
    price: "55",
    img: "black_hoodie.png",
    id: 2,
    category: "street wears",
  },
  {
    title: "Round neck",
    price: "55",
    img: "black_roundneck.png",
    id: 3,
    category: "street wears",
  },
  {
    title: "Shorts",
    price: "55",
    img: "black_short.png",
    id: 4,
    category: "pants",
  },
  {
    title: "Suit",
    price: "55",
    img: "black_suit.png",
    id: 5,
    category: "coporate wears",
  },
  {
    title: "Track suit",
    price: "55",
    img: "black_track_suit.png",
    id: 6,
    category: "street wears",
  },
  {
    title: "Hoodie",
    price: "55",
    img: "blue_hoodie.png",
    id: 7,
    category: "street wears",
  },
  {
    title: "Senate wear",
    price: "55",
    img: "blue_senator_wear.png",
    id: 8,
    category: "corporate wears",
  },
  {
    title: "Skinny Jean",
    price: "55",
    img: "blue_skinny_jean.png",
    id: 9,
    category: "pants",
  },
  {
    title: "Tshirt",
    price: "55",
    img: "brown_corporate_tshirt.png",
    id: 10,
    category: "street wears",
  },
  {
    title: "Purse",
    price: "55",
    img: "brown_purse.png",
    id: 11,
    category: "bags",
  },
  {
    title: "Hoodie",
    price: "55",
    img: "green_hoodie.png",
    id: 12,
    category: "street wears",
  },
  {
    title: "Suit",
    price: "55",
    img: "navy_blue_suit.png",
    id: 13,
    category: "corporate wears",
  },
  {
    title: "Female Suit",
    price: "55",
    img: "pink_suit.png",
    id: 14,
    category: "corporate wears",
  },
  {
    title: "Hoodie",
    price: "55",
    img: "red_hoodie.png",
    id: 15,
    category: "street wears",
  },
  {
    title: "Joggers",
    price: "55",
    img: "red_jogger.png",
    id: 16,
    category: "street wears",
  },
  {
    title: "Round Necks",
    price: "55",
    img: "round_necks_display.png",
    id: 17,
    category: "street wears",
  },
  {
    title: "Track Suit",
    price: "55",
    img: "white_track_suit.png",
    id: 18,
    category: "street wears",
  },
];

export async function getProducts() {
  // Timeout to delay
  await new Promise((res) => setTimeout(res, 2000));

  return PRODUCTS;
}
export async function getProductsById(id) {
  // Timeout to delay
  await new Promise((res) => setTimeout(res, 500));
  // console.log("I am here");
  return PRODUCTS.find((product) => product.id === Number(id));
}
