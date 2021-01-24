import IPayment from "./IPayment";

export default class CashPayment implements IPayment {
  public pay(itemPrice: number, paymentAmount: number): number {
    // Custom logic to process payment by cash
    console.log("Paying by cash");
    return paymentAmount - itemPrice;
  }
}
