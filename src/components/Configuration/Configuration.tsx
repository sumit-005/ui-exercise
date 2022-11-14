import { Button, Text, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { Tool } from "../../types/common";
import Select from "../Select/Select";

import "./Configuration.scss";

interface ConfigurationProps {
  products: Tool[];
  handleAddProduct: () => void;
  setSelectedProduct: (product: string) => void;
  selectedProduct: string;
  toolsList: any[];
}

const Configuration = ({
  products,
  selectedProduct,
  toolsList,
  handleAddProduct,
  setSelectedProduct,
}: ConfigurationProps) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <div className="configuration">
      <Button variant="gradient" size="xs">
        1 of 3
      </Button>

      <Text weight={700} fz="xl" c={colorScheme !== "dark" ? "dark" : ""}>
        Let's add your internal tools
      </Text>
      <p>
        Search to quickly add products your team uses today. You'll be able to
        add as many as you need later but for now let's add four.
      </p>
      <Select
        setSelectedProduct={setSelectedProduct}
        selectedProduct={selectedProduct}
        data={toolsList}
        disabled={products.length >= 4}
      />
      <Button onClick={() => handleAddProduct()} fullWidth>
        Next
      </Button>
    </div>
  );
};

export default Configuration;
