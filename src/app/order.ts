export class Order {

  constructor(orderValue: string) {
    this.Value = orderValue;
    this.Timestamp = new Date();
  }
  Value: string;
  Author: string;
  Client: string;
  Timestamp: Date;
  Status: string;

  public toString(): string {
    return 'Order value: ' + this.Value + ', order time: ' + this.Timestamp.getTime();
  }
}
