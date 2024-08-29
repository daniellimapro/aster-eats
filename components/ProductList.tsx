import { useEffect, useState } from "react";
import { Product } from "./Product";
import { FlatList, Text } from "native-base";
import { useDishes } from "@/queries/useFoods";
import { ProductSkeleton } from "./ProductSkeleton";

const DATA = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  { id: "4", title: "Item 4" },
  { id: "5", title: "Item 5" },
  { id: "6", title: "Item 6" },
];

// FOOD API EXAMPLE
// https://dummyjson.com/recipes

export const ProductList = () => {
  const { data, isLoading, isPending } = useDishes();

  if (isLoading || isPending) {
    return (
      <FlatList
        data={[1, 2, 3]}
        renderItem={({ item }) => <ProductSkeleton />}
        keyExtractor={(item) => item.id}
      />
    );
  }

  return (
    <>
      {data?.recipes && (
        <FlatList
          data={data?.recipes}
          renderItem={({ item }) => <Product item={item} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </>
  );
};
