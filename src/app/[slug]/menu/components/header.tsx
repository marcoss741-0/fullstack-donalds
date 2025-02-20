"use client";
import { Restaurant } from "@prisma/client";
import { Pick } from "@prisma/client/runtime/library";
import { ChevronLeft, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface RestaurantHeaderProps {
  restaurant: Pick<Restaurant, "name" | "coverImageUrl">;
}

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="relative h-[250px] w-full">
      <Button
        variant="secondary"
        className="absolute top-4 left-4 z-10 rounded-full"
        size="icon"
        onClick={handleGoBack}
      >
        <ChevronLeft />
      </Button>
      <Image
        src="/coverImage.jpg"
        alt={restaurant.name}
        fill
        className="object-cover"
      />
      <Button
        variant="secondary"
        className="absolute top-4 right-4 z-10 rounded-full"
        size="icon"
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
};

export default RestaurantHeader;
