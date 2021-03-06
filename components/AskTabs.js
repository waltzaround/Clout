import { useStyletron, styled } from "baseui";

export default function AskTabs({ asks }) {
  const [css] = useStyletron();

  return asks.map((activity, index) => {
    return (
      <ActCardContainer href="/" target="blank" key={index}>
        <ActCardImg src={activity.image} />
        <div>
          <ActCardTitle>
            {activity.title}
          </ActCardTitle>
          <ActCardDescription>
            {activity.location}
          </ActCardDescription>
        </div>
      </ActCardContainer>
    )
  })
}

const ActCardContainer = styled("a", {
  borderRadius: "16px",
  backgroundColor: "White",
  margin: "0 0 1rem 0",
  minHeight: "50px",
  display: "grid",
  gridTemplateColumns: "56px 1fr",
  gap: "1rem",
  padding: "1rem",
  alignItems: "center",
  lineHeight: "1.5",
  border: "1px solid #B5B5B5",
  boxSizing: "border-box",
  boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.12);",
  transition: "all 0.15s",
  ":hover": {
    transform: "scale(1.005)",
    border: "1px solid black",
  },
});

const ActCardImg = styled("img", {
  borderRadius: "120px",
  height: "56px",
  width: "56px",
});

const ActCardTitle = styled("h3", {
  margin: "0",
  fontWeight: "500",
  fontSize: "1rem",
});
const ActCardDescription = styled("p", {
  margin: "0",
  color: "#777",
});
