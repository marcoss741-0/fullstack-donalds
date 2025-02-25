import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import { CartProvider } from "../contexts/cart";
import ProductDetails from "./components/product-details";
import ProductHeader from "./components/product-header";

interface ProductPageProps {
  params: Promise<{ slug: string; productId: string }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug, productId } = await params;

  const product = await db.product.findUnique({
    where: { id: productId },
    include: {
      restaurant: {
        select: { name: true, avatarImageUrl: true, slug: true },
      },
    },
  });
  if (!product) {
    notFound();
  }
  if (product.restaurant.slug.toUpperCase() !== slug.toUpperCase()) {
    notFound();
  }
  return (
    <>
      <CartProvider>
        <div className="flex flex-col h-full">
          <ProductHeader product={product} />
          <ProductDetails product={product} />
        </div>
      </CartProvider>
    </>
  );
};

export default ProductPage;
