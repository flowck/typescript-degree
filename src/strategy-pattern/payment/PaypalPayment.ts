import IPayment from "./IPayment";

export default class PaypalPayment implements IPayment {
  public pay(itemPrice: number, paymentAmount: number): number {
    // Custom logic to process payment via paypal
    console.log("Paying via paypal");
    return paymentAmount - itemPrice;
  }
}
