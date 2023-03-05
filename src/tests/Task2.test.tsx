import { Cart, Item } from "../Task2";

it("cart add", () => {
  const cart = new Cart();

  cart.addCart(new Item(1, "Banana", 10, 1, "GIFT5"));
  cart.addCart(new Item(1, "Banana", 10, 3, "GIFT5"));
  cart.addCart(new Item(2, "Milk", 45, 2, "GIFT10"));
  expect(cart.items.length).toBe(2);
  expect(cart.items[0].quantity).toBe(4);
  expect(cart.items[0].totalPrice).toBe(40);
});

test("cart remove", () => {
  const cart = new Cart();

  cart.addCart(new Item(1, "Banana", 10, 1, "GIFT5"));
  cart.addCart(new Item(1, "Banana", 10, 3, "GIFT5"));
  cart.addCart(new Item(2, "Milk", 45, 2, "GIFT10"));

  expect(cart.items.length).toBe(2);

  cart.addCart(new Item(2, "Milk", 45, 1, "GIFT30"));
  cart.remove(2, 3);
  expect(cart.items.length).toBe(1);

  cart.remove(1, 2);
  expect(cart.items[0].quantity).toBe(2);
  expect(cart.items[0].totalPrice).toBe(20);
});

test("cart total price of a cart item", () => {
  const cart = new Cart();

  cart.addCart(new Item(1, "Banana", 10, 1, "GIFT5"));
  cart.addCart(new Item(1, "Banana", 10, 3, "GIFT5"));
  cart.addCart(new Item(2, "Milk", 45, 2, "GIFT10"));

  expect(cart.totalPriceOfACartItem(1)).toBe(38);
  expect(cart.totalPriceOfACartItem(2)).toBe(81);
});

test("cart total price of whole cart", () => {
  const cart = new Cart();

  cart.addCart(new Item(1, "Banana", 10, 1, "GIFT5"));
  cart.addCart(new Item(1, "Banana", 10, 3, "GIFT5"));
  cart.addCart(new Item(2, "Milk", 45, 2, "GIFT10"));

  expect(cart.totalPriceOfWholeCart()).toBe(119);
  cart.addCart(new Item(3, "Chocolate", 100, 1, "ALL10"));
  expect(cart.totalPriceOfWholeCart()).toBe(207);
});
