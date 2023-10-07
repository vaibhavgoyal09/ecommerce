import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const PopularCategories = () => {
  const categories = [
    {
      title: "Fresh Fruits",
      imagePath: "fresh_fruits.png",
    },
    {
      title: "Fresh Vegetables",
      imagePath: "vegetables.png",
    },
    {
      title: "Meat & Fish",
      imagePath: "meat_fish.png",
    },
    {
      title: "Snacks",
      imagePath: "snacks.png",
    },
    {
      title: "Beverages",
      imagePath: "beverages.png",
    },
    {
      title: "Beauty & Health",
      imagePath: "beauty.png",
    },
    {
      title: "Bread & Bakery",
      imagePath: "bread_bakery.png",
    },
    {
      title: "Baking Needs",
      imagePath: "baking_needs.png",
    },
    {
      title: "Cooking",
      imagePath: "cooking.png",
    },
    {
      title: "Diabetic Foods",
      imagePath: "diabetic_food.png",
    },
    {
      title: "Dish & Detergents",
      imagePath: "detergents_dish.png",
    },
    {
      title: "Oil",
      imagePath: "oil.png",
    },
  ];

  return (
    <div className="w-full px-[3%] flex-col">
      <div className="flex w-full justify-between">
        <h2 className="text-2xl font-semibold">Popular Categories</h2>
        <Button variant={"link"}>
          View All <ArrowRight height={14} width={24} />
        </Button>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-6 mt-4">
        {categories.map((category) => (
          <div className="grid grid-cols-1 gap-6 rounded-md border md:p-8 items-center justify-center">
            <Image
              src={`/${category.imagePath}`}
              width={200}
              height={200}
              alt=""
              className="inline-block"
            />
            <h3 className="text-lg text-center font-semibold">{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
