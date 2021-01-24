export default interface IPayment {
  pay(itemPrice: number, paymentAmount: number): number;
}
