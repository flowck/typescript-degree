import IPayment from "./IPayment";

export default class DebitCardPayment implements IPayment {
  public pay(itemPrice: number, paymentAmount: number): number {
    // Custom logic to process payment by debit card
    console.log("Paying by debit card");
    return paymentAmount - itemPrice;
  }
}
