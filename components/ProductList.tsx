import { useEffect, useState } from "react";
import { Product } from "./Product";
import { FlatList, Text } from "native-base";
import { useDishes } from "@/queries/useDishes";
import { ProductSkeleton } from "./ProductSkeleton";

export const ProductList = () => {
  const { data, isLoading, isPending } = useDishes();

  if (isLoading || isPending) {
    return (
      <FlatList
        data={[1, 2, 3]}
        renderItem={({ item }) => <ProductSkeleton />}
        keyExtractor={(item) => item.toString()}
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
