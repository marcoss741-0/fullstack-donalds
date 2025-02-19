import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  if (!restaurant) {
    return notFound();
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 py-24">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold text-2xl text-center justify-center">
          {restaurant.name}
        </h2>
      </div>
    </div>
  );
};

export default RestaurantPage;
