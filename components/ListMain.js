import * as React from "react";
import { StatefulTabs, Tab, StyledTab } from "baseui/tabs-motion";
import { Label2 } from "baseui/typography";
import AskTabs from "./AskTabs";
function TabOverride({ children, ...rest }) {
  return (
    <StyledTab {...rest}>
      <Label2
        overrides={{
          Block: {
            style: { color: "inherit", ":hover": { color: "inherit" } },
          },
        }}
      >
        {children}
      </Label2>
    </StyledTab>
  );
}
const tabStyle = ({ $active, $disabled, $theme }) => ({
  color: $active ? "black" : "gray",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  ":hover": $disabled
    ? {}
    : {
        color: "black",
      },
  ":focus": $disabled
    ? {}
    : {
        color: "black",
      },
});
const tabBarStyle = ({ $theme }) => ({
  backgroundColor: "rgba(0,0,0,0)",
});

const content = [<AskTabs />, "32 Offers to help", "Potatoes"];

export default function ListMain() {
  const [activeKey, setActiveKey] = React.useState("0");
  return (
    <StatefulTabs
      initialState={{ activeKey: activeKey }}
      onChange={({ activeKey }) => {
        setActiveKey(activeKey);
      }}
      overrides={{
        TabBar: {
          style: tabBarStyle,
        },
        Tab: { component: TabOverride, style: tabStyle },
      }}
    >
      <Tab title="12 people asking for help">
        <div>{content[Number(activeKey)]}</div>
      </Tab>
      <Tab title="32 people offering help">
        <div>{content[Number(activeKey)]}</div>
      </Tab>
      <Tab title="lmao">
        <div>{content[Number(activeKey)]}</div>
      </Tab>
    </StatefulTabs>
  );
}
