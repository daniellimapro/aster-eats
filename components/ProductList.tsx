import React from "react";
import { FlatList } from "native-base";
import { useDishes } from "@/queries/useDishes";
import { Product } from "./Product";
import { ProductSkeleton } from "./ProductSkeleton";

interface Dish {
  id: string;
  name: string;
  price: number;
}

export const ProductList = () => {
  const { data, isLoading, isPending } = useDishes();

  if (isLoading || isPending) {
    return (
      <FlatList
        data={[1, 2, 3]}
        renderItem={() => <ProductSkeleton />}
        keyExtractor={(item) => item.toString()}
      />
    );
  }

  return (
    <>
      {data?.dishes && (
        <FlatList
          data={data.dishes}
          renderItem={({ item }) => <Product item={item as Dish} />}
          keyExtractor={(item) => (item as Dish).id.toString()}
        />
      )}
    </>
  );
};
