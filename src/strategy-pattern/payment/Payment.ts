import IPayment from "./IPayment";

export default class Payment {
  public pay(
    paymentStrategy: IPayment,
    itemPrice: number,
    paymentAmount: number
  ): number {
    return paymentStrategy.pay(itemPrice, paymentAmount);
  }
}
