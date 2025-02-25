import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

interface CartItemProps {
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
  };
  addProduct: (product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
  }) => void;
  removeProduct: (productId: string) => void;
}

const CartItem = ({ product, addProduct, removeProduct }: CartItemProps) => {
  const handleIncreaseQuantity = () => {
    addProduct({
      ...product,
      quantity: 1,
    });
  };

  const handleDecreaseQuantity = () => {
    if (product.quantity > 1) {
      addProduct({
        ...product,
        quantity: -1,
      });
    }
  };

  const handleRemove = () => {
    removeProduct(product.id);
  };

  const totalPrice = product.price * product.quantity;

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 80px) 100vw, 80px"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-sm text-gray-500">
            {formatCurrency(product.price)}
          </p>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={handleDecreaseQuantity}
              disabled={product.quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>

            <span className="w-8 text-center">{product.quantity}</span>

            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={handleIncreaseQuantity}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-red-500 hover:text-red-600"
          onClick={handleRemove}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
        <p className="font-medium">{formatCurrency(totalPrice)}</p>
      </div>
    </div>
  );
};

export default CartItem;
