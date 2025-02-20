import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ConsumptionMethodOption from "./components/consumption-method-option";

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
      <div className="space-y-2 pt-24 text-center font-semibold">
        <h3 className="text-2xl font-semibold">Seja bem-vindo!!</h3>
        <p className="opacity-55 text-sm">
          Escolha como você quer receber seu pedido. EStamos aqui para te
          oferecer praticidade o melhor!
        </p>
      </div>
      <div className="pt-14 grid grid-cols-2 gap-4">
        <ConsumptionMethodOption
          slug={slug}
          option="DINE_IN"
          imageUrl="/dine-in.png"
          imageAlt="Comer Aqui"
          buttonText="Para Comer Aqui"
        />

        <ConsumptionMethodOption
          slug={slug}
          option="TAKEAWAY"
          imageUrl="/takeaway.png"
          imageAlt="Para Entrega"
          buttonText="Para Entrega"
        />
      </div>
    </div>
  );
};

export default RestaurantPage;
