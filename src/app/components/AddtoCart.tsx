"use client";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
}

const AddtoCart = ({
  currency,
  description,
  image,
  name,
  price,
}: ProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart();
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    id: "sdadwa",
  };
  return (
    <div>
      <Button
        onClick={() => {
          addItem(product), handleCartClick();
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddtoCart;
