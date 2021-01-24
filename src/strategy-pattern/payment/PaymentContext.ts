import Payment from "./Payment";
import CashPayment from "./CashPayment";
import PaypalPayment from "./PaypalPayment";
import DebitCardPayment from "./DebitCardPayment";

new Payment().pay(new CashPayment(), 4000, 5000);
