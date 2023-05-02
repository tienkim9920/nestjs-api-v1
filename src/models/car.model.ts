export class Car {
  productName: string;
  price: string;
  category_id: number;

  constructor({ productName, price, category_id }) {
    this.productName = productName;
    this.price = price;
    this.category_id = category_id;
  }
}