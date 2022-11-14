import React from "react";
import "./Select.scss";
import { forwardRef } from "react";
import { Group, Avatar, Text, Select as MantineSelect } from "@mantine/core";
import { IconSearch } from "@tabler/icons";

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  image: string;
  label: string;
  description: string;
}

interface SelectProps {
  setSelectedProduct: (product: string) => void;
  selectedProduct: string;
  data: any[];
  disabled?: boolean;
}

const Select = ({
  setSelectedProduct,
  selectedProduct,
  data,
  disabled,
}: SelectProps) => {
  return (
    <MantineSelect
      placeholder="Search for any software"
      className="search"
      itemComponent={SelectItem}
      data={data}
      onChange={(value: string) => setSelectedProduct(value)}
      value={selectedProduct}
      searchable
      maxDropdownHeight={400}
      nothingFound="No Results Found"
      filter={(value, item) =>
        item.label
          ? item.label.toLowerCase().includes(value.toLowerCase().trim())
          : false
      }
      transition="pop-top-left"
      transitionDuration={80}
      icon={<IconSearch size={18} />}
      transitionTimingFunction="ease"
      styles={(theme) => ({
        item: {
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[0]
              : theme.colors.dark[5],
        },
      })}
      disabled={disabled}
    />
  );
};

export default Select;

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap className="select">
        <Avatar src={`../../../icons/${image}.png`} size="sm" />
        <div>
          <Text size="sm">{label}</Text>
        </div>
      </Group>
    </div>
  )
);
