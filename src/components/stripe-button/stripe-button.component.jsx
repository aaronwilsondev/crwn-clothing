import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const PublishableKey = "pk_test_51IDVYEAJPPg7GzjOyCZC8h8eoq1f3VYFkxCT1a9oW9tcCGnoXAt8q9FSu0ndcvypt2GPuXaCpO4Lebs04XKSMoVF00HNcBDKtF"

 const onToken = token => {
      console.log(token);
      alert("Payment Successfull")
  }

return (
    <StripeCheckout
   label="pay now"
   name="CRWN Clothing Ltd."
   billingAddress
   shippingAddress
   image="https://svgshare.com/i/CUz.svg"
   description={`Your total is $${price}`}
   amount={priceForStripe}
   panelLabel="pay now"
   token={onToken}
   stripeKey={PublishableKey}
    />
);
};

export default StripeCheckoutButton;