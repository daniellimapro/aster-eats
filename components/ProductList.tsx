import { Product } from "./Product";

export const ProductList = () => {
  return (
    <>
      {[1, 2, 3].map(() => (
        <Product />
      ))}
    </>
  );
};
