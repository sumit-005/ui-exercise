import { Button, Container } from "@mantine/core";
import { useState } from "react";
import "./App.scss";
import Card from "./components/Card/Card";
import Select from "./components/Select/Select";
import { tools } from "./data/tools";
import { Tool } from "./types/common";

function App() {
  const [products, setProducts] = useState<Tool[]>([]);
  const [selectedProduct, setSelectedProduct] = useState("");

  const [toolsList, setToolsList] = useState(tools);

  const handleAddProduct = (product: string) => {
    //find the tools in the tools array
    const tool = tools.find((tool) => tool.value === product);

    // if the tool exists, add it to the products array
    if (tool) {
      setProducts((prev) => [...prev, tool]);
    }

    // remove the tool from the tools list
    setToolsList((prev) => prev.filter((tool) => tool.value !== product));
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
    <div className="wrapper">
      <div className="header">
        <h2>axiamatic</h2>
        <p>Exit Setup</p>
      </div>
      <Container className="container">
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

          {/* empty 4 cards based on remaining cards */}

          {Array.from({ length: 4 - products.length }).map((_, index) => (
            <Card
              key={index}
              image="empty"
              label="empty"
              value="empty"
              onRemove={() => {}}
            />
          ))}
        </div>
        <div className="configuration">
          <Button variant="gradient" size="xs">
            1 of 3
          </Button>
          <h3>Let's add your internal tools</h3>
          <p>
            Search to quickly add products your team uses today. You'll be able
            to add as many as you need later but for now let's add four.
          </p>
          <Select
            setSelectedProduct={handleAddProduct}
            selectedProduct={selectedProduct}
            data={toolsList}
            disabled={products.length >= 4}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
