import { ActionIcon, useMantineColorScheme, Text } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";
import React from "react";
import "./Header.scss";
const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div className="header">
      <Text weight={700} fz="xl" c={colorScheme !== "dark" ? "dark" : ""}>
        axiamatic
      </Text>
      <div className="box">
        <p>Exit Setup</p>

        <ActionIcon
          variant="outline"
          color={dark ? "yellow" : "blue"}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
        </ActionIcon>
      </div>
    </div>
  );
};

export default React.memo(Header);
