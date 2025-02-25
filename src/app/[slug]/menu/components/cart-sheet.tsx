import { ShoppingCart } from "lucide-react";
import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext } from "../contexts/cart";
import CartItem from "./cart-item";

const CartSheet = () => {
  const { isOpen, toggleCart, products, addProduct, removeProduct } =
    useContext(CartContext);

  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-[400px] sm:w-[540px] flex flex-col h-full">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Sacola ({products.length})
          </SheetTitle>
          <SheetDescription>
            {products.length === 0
              ? "Sua sacola está vazia."
              : "Revise seus itens antes de finalizar o pedido."}
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="flex-1 my-4">
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[200px] gap-4">
              <ShoppingCart className="h-16 w-16 text-muted-foreground" />
              <p className="text-muted-foreground">
                Você ainda não adicionou nenhum item
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {products.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  addProduct={addProduct}
                  removeProduct={removeProduct}
                />
              ))}
            </div>
          )}
        </ScrollArea>

        {products.length > 0 && (
          <div className="border-t pt-4 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>{formatCurrency(totalPrice)}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>{formatCurrency(totalPrice)}</span>
              </div>
            </div>

            <Button
              className="w-full h-14 text-base font-bold rounded-full"
              onClick={() => {
                // Implementar checkout
                console.log("Checkout", products);
              }}
            >
              Finalizar Pedido • {formatCurrency(totalPrice)}
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
