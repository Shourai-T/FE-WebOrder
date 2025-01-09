import drinkimg from '../assets/img/drinkimg.jpg';

export const itemsData = [
  {
    title: "Cafe",
    items: [
      { id: 1, name: "Bạc xỉu", price: "22.000", image: drinkimg },
      { id: 2, name: "Espresso", price: "25.000", image: drinkimg },
      { id: 3, name: "Cappuccino", price: "30.000", image: drinkimg },
    ],
  },
  {
    title: "Trà",
    items: [
      { id: 4, name: "Trà đào", price: "28.000", image: drinkimg },
      { id: 5, name: "Trà sữa", price: "32.000", image: drinkimg },
      { id: 6, name: "Trà xanh", price: "24.000", image: drinkimg },
    ],
  },
  {
    title: "Nước ngọt",
    items: [
      { id: 7, name: "Coca Cola", price: "15.000", image: drinkimg },
      { id: 8, name: "Pepsi", price: "15.000", image: drinkimg },
      { id: 9, name: "7Up", price: "15.000", image: drinkimg },
    ],
  },
  {
    title: "Nước ép",
    items: [
      { id: 10, name: "Nước ép cam", price: "35.000", image: drinkimg },
      { id: 11, name: "Nước ép dứa", price: "35.000", image: drinkimg },
      { id: 12, name: "Nước ép cà rốt", price: "35.000", image: drinkimg },
      { id: 13, name: "Nước ép táo", price: "35.000", image: drinkimg },
      { id: 14, name: "Nước ép cà chua", price: "35.000", image: drinkimg },
    ],
  },
];


export const cartItems = [
  {
    id: 1,
    name: "Cà phê đen",
    quantity: 1,
    price: "20.000 VND",
    note: "Ít đá, nhiều ngọt"
  },
  {
    id: 2,
    name: "Espresso",
    quantity: 2,
    price: "30.000 VND",
    note: "Không đường"
  },
  {
    id: 3,
    name: "Trà đào",
    quantity: 1,
    price: "28.000 VND",
    note: "Ít ngọt"
  },
  {
    id: 4,
    name: "Trà vải",
    quantity: 3,
    price: "28.000 VND",
    note: "Ít ngọt"
  },
];
