import React, { useState } from "react";
import { Navigation } from "baseui/side-navigation";
const nav = [
  {
    title: "Discover",
    itemId: "#level1.1",
  },
  {
    title: "Activities",
    itemId: "#level1.2",
  },
  {
    title: "Settings",
    itemId: "#level1.3",
  },
  {
    title: "Log Out",
    itemId: "#level1.4",
  },
];
export default function SideNav() {
  const [location, setLocation] = useState("#level1.1.1");
  return (
    <Navigation
      items={nav}
      activeItemId={location}
      onChange={({ item }) => setLocation(item.itemId)}
      overrides={{
        NavItem: {
          style: ({ $active, $theme }) => {
            if (!$active)
              return {
                paddingLeft: "8px",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                ":hover": {
                  color: $theme.colors.positive400,
                },
              };
            return {
              paddingLeft: "20px",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              backgroundColor: $theme.colors.positive400,
              borderRadius: "12px",
              borderLeft: "none",
              color: $theme.colors.mono900,
              ":hover": {
                color: $theme.colors.positive400,
              },
            };
          },
        },
      }}
    />
  );
}
