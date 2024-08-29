import { useEffect, useState } from "react";
import { CartItem } from "./CartItem";
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

export const CartList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      return data.recipes;
    } catch (error) {
      console.error("Erro ao buscar receitas:", error);
      return [];
    }
  };

  useEffect(() => {
    const loadData = async () => {
      const fetchedRecipes = await fetchRecipes();
      setRecipes(fetchedRecipes);
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <FlatList
      data={recipes}
      renderItem={({ item }) => <CartItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};
