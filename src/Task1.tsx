export class Address {
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: number;

  constructor(
    name: string,
    address: string,
    city: string,
    state: string,
    zipCode: number
  ) {
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
  }
}

export class Package {
  sender: Address;
  recipient: Address;
  weightOunces: number;
  cost: number;
  constructor(
    sender: Address,
    recipient: Address,
    weightOunces: number,
    cost: number
  ) {
    this.sender = sender;
    this.recipient = recipient;
    if (weightOunces > 0) {
      this.weightOunces = weightOunces;
    } else {
      throw "Weight can not be nagative.";
    }
    if (cost > 0) {
      this.cost = cost;
    } else {
      throw "Cost can not be nagative.";
    }
  }
  public calculateCost(): number {
    return this.getCost();
  }
  public getCost(): number {
    return this.cost * this.weightOunces;
  }
}

export class TwoDayPackage extends Package {
  shippingFee: number;
  constructor(
    sender: Address,
    recipient: Address,
    weightOunces: number,
    cost: number,
    shippingFee: number
  ) {
    super(sender, recipient, weightOunces, cost);
    this.shippingFee = shippingFee;
  }
  public calculateCost(): number {
    return this.getCost() + this.shippingFee;
  }
}

export class OvernightPackage extends Package {
  shippingFee: number;
  constructor(
    sender: Address,
    recipient: Address,
    weightOunces: number,
    cost: number,
    shippingFee: number
  ) {
    super(sender, recipient, weightOunces, cost);
    this.shippingFee = shippingFee;
  }
  public calculateCost(): number {
    return this.getCost() + this.shippingFee * this.weightOunces;
  }
}
