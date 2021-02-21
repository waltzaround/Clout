import React, { useEffect, useState } from "react";
import { groupBy } from 'lodash'
import { StatefulTabs, Tab, StyledTab } from "baseui/tabs-motion";
import { Label2 } from "baseui/typography";
import AskTabs from "./AskTabs";
import OfferTabs from "./OfferTabs";
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

export default function ListMain() {
  const [offers, setOffers] = useState([])
  const [asks, setAsks] = useState([])

  const fetchActivityList = async () => {
    const activityRequest = await fetch('/api/activity/');
    const { activity } = await activityRequest.json();
    const { ask, offer } = groupBy(activity, 'type')
    setAsks(ask)
    setOffers(offer|| [])
  }

  useEffect(() => {
    fetchActivityList()
  }, [])
  const [activeKey, setActiveKey] = React.useState("0");
  const content = [<AskTabs asks={asks}/>, <OfferTabs offers={offers}/>];
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
      <Tab
        title="12 requests"
        overrides={{
          Tab: {
            style: {
              paddingLeft: "3rem",
              paddingRight: "3rem",
              fontSize: "1rem",
            },
          },
        }}
      >
        <div>{content[Number(activeKey)]}</div>
      </Tab>
      <Tab
        title="32 offers "
        overrides={{
          Tab: {
            style: {
              paddingLeft: "3rem",
              paddingRight: "3rem",
              fontSize: "1rem",
            },
          },
        }}
      >
        <div>{content[Number(activeKey)]}</div>
      </Tab>
      {/* <Tab title="3 resource offers">
        <div>{content[Number(activeKey)]}</div>
      </Tab> */}
    </StatefulTabs>
  );
}
