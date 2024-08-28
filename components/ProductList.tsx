import { Product } from "./Product";
import { FlatList } from "native-base";

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
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Product />}
      keyExtractor={(item) => item.id}
    />
  );
};
