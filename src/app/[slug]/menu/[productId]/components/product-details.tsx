"use client";

import { Prisma } from "@prisma/client";
import { ChefHatIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

interface ProductDetailProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
          avatarImageUrl: true;
        };
      };
    };
  }>;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [quantity, setquantity] = useState<number>(1);

  const handleDecrement = () => {
    setquantity((prev) => {
      if (prev === 1) return prev;
      return prev - 1;
    });
  };

  const handleIncrement = () => {
    setquantity((prev) => prev + 1);
  };
  return (
    <div className="relative rounded-t-3xl mt-[-1.5rem] py-5 z-50 p-4 flex flex-col flex-auto">
      <div className="flex-auto">
        <div>
          <Image
            src={product.restaurant.avatarImageUrl}
            alt={product.restaurant.name}
            width={16}
            height={16}
            className="rounded-full"
          />
          <p className="text-xs text-muted-foreground font-semibold">
            {product.restaurant.name}
          </p>
        </div>
        <h2 className="mt-1 text-2xl font-semibold">{product.name}</h2>

        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {formatCurrency(product.price)}
          </h3>
          <div className="flex items-center gap-3 text-center">
            <Button
              variant="outline"
              className="h-8 w-8 rounded-xl"
              size="icon"
              onClick={handleDecrement}
            >
              <ChevronLeftIcon />
            </Button>
            <p className="w-4">{quantity}</p>
            <Button
              variant="destructive"
              className="h-8 w-8 rounded-xl"
              size="icon"
              onClick={handleIncrement}
            >
              <ChevronRightIcon />
            </Button>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <h4 className="text-lg font-semibold">SOBRE</h4>
          <p className="text-sm text-muted-foreground line-clamp-4">
            {product.description}
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <div className="5 flex items-center gap-1">
            <ChefHatIcon size={18} />
            <h4 className="text-lg font-semibold">INGREDIENTES</h4>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-4">
            {product.description}
          </p>
        </div>
      </div>
      <Button variant="default" className="w-full mt-6 rounded-full" size="lg">
        Adicionar á sacola
      </Button>
    </div>
  );
};

export default ProductDetail;
