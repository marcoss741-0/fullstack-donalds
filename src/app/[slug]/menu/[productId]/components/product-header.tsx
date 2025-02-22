"use client";
import { Product } from "@prisma/client";
import { Pick } from "@prisma/client/runtime/library";
import { ChevronLeft, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface ProductHeaderProps {
  product: Pick<Product, "imageUrl" | "name">;
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <div className="relative h-[300px] w-full min-h-[300px]">
        <Button
          variant="secondary"
          className="absolute top-4 left-4 z-10 rounded-full"
          size="icon"
          onClick={handleGoBack}
        >
          <ChevronLeft />
        </Button>

        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain"
        />

        <Button
          variant="secondary"
          className="absolute top-4 right-4 z-10 rounded-full"
          size="icon"
        >
          <ScrollTextIcon />
        </Button>
      </div>
    </>
  );
};

export default ProductHeader;
