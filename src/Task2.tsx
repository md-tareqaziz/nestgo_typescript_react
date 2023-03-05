const discountCodes: string[] = ["GIFT5", "GIFT10", "GIFT20", "ALL10"];

export class Item {
  productId: number;
  title: string;
  unitePrice: number;
  quantity: number;
  discountCode: string;
  totalPrice: number;

  constructor(
    productId: number,
    title: string,
    unitePrice: number,
    quantity: number,
    discountCode: string
  ) {
    this.productId = productId;
    this.title = title;
    this.unitePrice = unitePrice;
    this.quantity = quantity;
    this.discountCode = discountCode;
    this.totalPrice = unitePrice;
  }
}

export class Cart {
  items: Item[] = [];

  public addCart(item: Item) {
    let index = this.items.findIndex((i) => i.productId == item.productId);
    if (index != -1) {
      this.items[index].quantity = this.items[index].quantity + item.quantity;
      this.items[index].totalPrice =
        this.items[index].quantity * this.items[index].unitePrice;
    } else {
      item.totalPrice = item.quantity * item.unitePrice;
      let x = discountCodes.findIndex((i) => i == item.discountCode);
      if (x == -1) {
        item.discountCode = "";
      }
      this.items.push(item);
    }
  }
  public remove(id: number, quantity: number) {
    let index = this.items.findIndex((i) => i.productId == id);
    if (index != -1) {
      if (this.items[index].quantity > quantity) {
        this.items[index].quantity = this.items[index].quantity - quantity;
        this.items[index].totalPrice =
          this.items[index].quantity * this.items[index].unitePrice;
      } else {
        this.items.splice(index, 1);
      }
    }
  }

  public totalPriceOfACartItem(id: number): number {
    const discount = this.getApplicableMaxDiscountByItem(id);
    const index = this.items.findIndex((i) => i.productId == id);
    if (index == -1) {
      return -1;
    }
    let dprice = this.items[index].totalPrice * (discount / 100);
    return this.items[index].totalPrice - dprice;
  }

  public totalPriceOfWholeCart(): number {
    let totalPrice = 0;
    let discount = this.getApplicableMaxDiscount();
    if (discount > 0) {
      this.items.forEach((item) => {
        totalPrice += item.totalPrice;
      });
      totalPrice -= totalPrice * (discount / 100);
    } else {
      this.items.forEach((item) => {
        discount = this.getApplicableMaxDiscountByItem(item.productId);
        totalPrice += item.totalPrice - item.totalPrice * (discount / 100);
      });
    }

    return totalPrice;
  }

  public currentItems(): string[] {
    const titles: string[] = [];
    this.items.forEach((i) => titles.push(i.title));
    return titles;
  }

  public getApplicableMaxDiscountByItem(id: number): number {
    let discount = 0;

    const index = this.items.findIndex((i) => i.productId == id);
    if (index != -1) {
      discount = Number(this.items[index].discountCode.replace("GIFT", ""));
    }

    return discount;
  }
  public getApplicableMaxDiscount(): number {
    let discount = 0;
    this.items.forEach((i) => {
      if (i.discountCode.match("ALL")) {
        let x = Number(i.discountCode.replace("ALL", ""));
        discount = x > discount ? x : discount;
      }
    });
    return discount;
  }

  public getItems(): Item[] {
    return this.items;
  }
}
