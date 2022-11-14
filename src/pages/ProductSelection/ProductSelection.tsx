import React, { useState } from "react";
import { Container, Button } from "@mantine/core";
import Card from "../../components/Card/Card";
import Select from "../../components/Select/Select";
import { tools } from "../../data/tools";
import { Tool } from "../../types/common";
import "./ProductSelection.scss";
import Products from "../../components/Products/Products";
import Configuration from "../../components/Configuration/Configuration";

const ProductSelection = () => {
  const [products, setProducts] = useState<Tool[]>([]);
  const [selectedProduct, setSelectedProduct] = useState("");

  const [toolsList, setToolsList] = useState(tools);

  const handleAddProduct = () => {
    //find the tools in the tools array
    const tool = tools.find((tool) => tool.value === selectedProduct);

    if (tool) {
      // if the tool exists, add it to the products array
      setProducts((prev) => [...prev, tool]);

      // remove the tool from the tools list
      setToolsList((prev) =>
        prev.filter((tool) => tool.value !== selectedProduct)
      );
    }

    // reset the selected product
    setSelectedProduct("");
  };

  const handleRemoveProduct = (product: string) => {
    //remove the product from the products array
    setProducts((prev) => prev.filter((item) => item.value !== product));

    //find the tools in the tools array
    const tool = tools.find((tool) => tool.value === product);

    //if the tool exists, add it to the tools list
    if (tool) {
      setToolsList((prev) => [...prev, tool]);
    }
  };
  return (
    <Container className="container">
      <Products products={products} handleRemoveProduct={handleRemoveProduct} />
      <Configuration
        products={products}
        handleAddProduct={handleAddProduct}
        setSelectedProduct={setSelectedProduct}
        selectedProduct={selectedProduct}
        toolsList={toolsList}
      />
    </Container>
  );
};

export default ProductSelection;
