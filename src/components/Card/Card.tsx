import { Avatar, Card as MantineCard } from "@mantine/core";
import React from "react";
import { IconX, IconPlus } from "@tabler/icons";

import "./Card.scss";

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  image: string;
  label: string;
  value: string;
  onRemove: (product: string) => void;
}
const Card = ({ image, label, value, onRemove }: CardProps) => {
  return (
    <MantineCard shadow="sm" p="lg" radius="md" className="card">
      <div className="image">
        {image === "empty" ? (
          <Avatar>
            <IconPlus size={48} />
          </Avatar>
        ) : (
          <>
            <Avatar src={`../../../icons/${image}.png`} size="md" alt="img" />
            <p>{label}</p>
          </>
        )}
      </div>
      {image !== "empty" ? (
        <MantineCard.Section className="footer" onClick={() => onRemove(value)}>
          <IconX size={18} /> <p>Remove</p>
        </MantineCard.Section>
      ) : (
        ""
      )}
    </MantineCard>
  );
};

export default React.memo(Card);
