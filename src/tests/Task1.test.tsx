import { Address, OvernightPackage, Package, TwoDayPackage } from "../Task1";

const sender1 = new Address("Kamal", "461", "Mirpur", "Dhaka", 1216);
const receiver1 = new Address("Tareq", "95", "BK", "Khulna", 9100);

test("cost of basic package", () => {
  const package1 = new Package(sender1, receiver1, 10, 9);
  console.log(
    "************* Basic Package ************ \n" +
      "Sender:\n" +
      package1.sender.name +
      "\n" +
      package1.sender.address +
      ", " +
      package1.sender.city +
      ", " +
      package1.sender.state +
      ", " +
      package1.sender.zipCode +
      "\n" +
      "Recipient:\n" +
      package1.recipient.name +
      "\n" +
      package1.recipient.address +
      ", " +
      package1.recipient.city +
      ", " +
      package1.recipient.state +
      ", " +
      package1.recipient.zipCode +
      "\nCost: $" +
      package1.calculateCost()
  );
  expect(package1.calculateCost()).toBe(90);
});

test("cost of two days package", () => {
  const towDays = new TwoDayPackage(sender1, receiver1, 10, 9, 8);
  console.log(
    "************* Twodays Package ************ \n" +
      "Sender:\n" +
      towDays.sender.name +
      "\n" +
      towDays.sender.address +
      ", " +
      towDays.sender.city +
      ", " +
      towDays.sender.state +
      ", " +
      towDays.sender.zipCode +
      "\n" +
      "Recipient:\n" +
      towDays.recipient.name +
      "\n" +
      towDays.recipient.address +
      ", " +
      towDays.recipient.city +
      ", " +
      towDays.recipient.state +
      ", " +
      towDays.recipient.zipCode +
      "\nCost: $" +
      towDays.calculateCost()
  );
  expect(towDays.calculateCost()).toBe(98);
});

test("cost of overnight package", () => {
  const overNight = new OvernightPackage(sender1, receiver1, 10, 9, 5);
  console.log(
    "************* Over night Package ************ \n" +
      "Sender:\n" +
      overNight.sender.name +
      "\n" +
      overNight.sender.address +
      ", " +
      overNight.sender.city +
      ", " +
      overNight.sender.state +
      ", " +
      overNight.sender.zipCode +
      "\n" +
      "Recipient:\n" +
      overNight.recipient.name +
      "\n" +
      overNight.recipient.address +
      ", " +
      overNight.recipient.city +
      ", " +
      overNight.recipient.state +
      ", " +
      overNight.recipient.zipCode +
      "\nCost: $" +
      overNight.calculateCost()
  );
  expect(overNight.calculateCost()).toBe(140);
});
