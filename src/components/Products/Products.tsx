import React from "react";
import { Tool } from "../../types/common";
import Card from "../Card/Card";
import "./Products.scss";

interface ProductProps {
  products: Tool[];
  handleRemoveProduct: (product: string) => void;
}
const Products = ({ products, handleRemoveProduct }: ProductProps) => {
  return (
    <div className="products">
      {products.map((product) => (
        <Card
          key={product.label}
          image={product.image}
          label={product.label}
          value={product.value}
          onRemove={handleRemoveProduct}
        />
      ))}

      {Array.from({ length: 4 - products.length }).map((_, index) => (
        <Card
          key={index}
          image="empty"
          label="empty"
          value="empty"
          onRemove={() => {}}
        />
      ))}

      <div className="product-count">{products.length} products added</div>
    </div>
  );
};

export default Products;
