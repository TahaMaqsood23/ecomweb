'use client'
import { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";

const Providers = ({ children }: { children: ReactNode }) => {
  return (<div>
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="http://localhost:3000/success"
      cancelUrl="http://localhost:3000/error"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true} // for storing cart material locally
      language="en-US"
    >
      {children}
    </CartProvider></div>
  );
};

export default Providers;
