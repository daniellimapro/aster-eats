import React from "react";
import { FlatList } from "native-base";
import { useCartItems } from "@/queries/useCartItems";
import { Product } from "../Product/Product";
import { ProductSkeleton } from "../ProductSkeleton";
import { ProductProps } from "@/interfaces/Product";

export const ProductList = () => {
  const { data, isLoading, isPending } = useCartItems();

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
      {data?.products && (
        <FlatList
          data={data.products}
          renderItem={({ item }) => <Product item={item as ProductProps} />}
          keyExtractor={(item) => (item as ProductProps).id.toString()}
        />
      )}
    </>
  );
};
