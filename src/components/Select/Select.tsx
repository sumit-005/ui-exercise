import React from "react";
import "./Select.scss";
import { forwardRef } from "react";
import { Group, Avatar, Text, Select as MantineSelect } from "@mantine/core";
import Search from "../../assets/svg/Search";
import { data } from "../../data/tools";

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  image: string;
  label: string;
  description: string;
}

const Select = () => {
  return (
    <MantineSelect
      placeholder="Search for any software"
      className="search"
      itemComponent={SelectItem}
      data={data}
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
      icon={<Search />}
      transitionTimingFunction="ease"
      styles={(theme) => ({
        item: {
          color: "#576574",
        },
      })}
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
