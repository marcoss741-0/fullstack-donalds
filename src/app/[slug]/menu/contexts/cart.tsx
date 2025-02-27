"use client";

import { Product } from "@prisma/client";
import { createContext, useState } from "react";

interface CartProduct extends Product {
  quantity: number;
}

interface CartProduct
  extends Pick<Product, "id" | "name" | "price" | "imageUrl"> {
  quantity: number;
}

export interface CartContextData {
  isOpen: boolean;
  products: CartProduct[];
  toggleCart: () => void;
  addProduct: (product: CartProduct) => void;
  removeProduct: (productId: string) => void;
}

export const CartContext = createContext<CartContextData>({
  isOpen: false,
  products: [],
  toggleCart: () => {},
  addProduct: () => {},
  removeProduct: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };

  const addProduct = (product: CartProduct) => {
    const productsIsAlreadyCart = products.some(
      (prevProduct) => prevProduct.id === product.id
    );

    if (!productsIsAlreadyCart) {
      return setProducts((prev) => [...prev, product]);
    }
    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.id === product.id) {
          return {
            ...prevProduct,
            quantity: prevProduct.quantity + product.quantity,
          };
        }
        return prevProduct;
      });
    });
  };

  const removeProduct = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <CartContext.Provider
      value={{ isOpen, products, toggleCart, addProduct, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};
