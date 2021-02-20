import * as React from "react";
import { useStyletron, styled } from "baseui";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Select } from "baseui/select";
import { Search } from "baseui/icon";

function SelectAtEnd(props) {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        "@media screen and (max-width: 1024px)": {
          flexDirection: "column",
        },
      })}
    >
      <Input
        startEnhancer={<Search size="18px" />}
        onChange={(e) => props.onInputChange(e.target.value)}
        value={props.inputValue}
        id={props.id}
        placeholder="Try 'Robots'"
        overrides={{
          Root: {
            style: {
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px",
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
            },
          },
          StartEnhancer: {
            style: {
              paddingLeft: "0",
              paddingRight: "0",
            },
          },
        }}
      />
      <div
        className={css({
          width: "200px",
          paddingLeft: "8px",
          "@media screen and (max-width: 1024px)": {
            width: "100%",
            marginTop: "0.5rem",
            paddingLeft: "0",
          },
        })}
      >
        <Select
          placeholder="Everything"
          options={props.options}
          labelKey="id"
          valueKey="color"
          onChange={({ value }) => props.onSelectChange(value)}
          value={props.selectValue}
          overrides={{
            ControlContainer: {
              style: {
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
                borderTopRightRadius: "8px",
                borderBottomRightRadius: "8px",
              },
            },
          }}
        />
      </div>
      <div
        className={css({
          width: "200px",
          paddingLeft: "8px",
          "@media screen and (max-width: 1024px)": {
            width: "100%",
            marginTop: "0.5rem",
            paddingLeft: "0",
          },
        })}
      >
        <Select
          placeholder="Nearby"
          options={props.options}
          labelKey="id"
          valueKey="color"
          onChange={({ value }) => props.onSelectChange(value)}
          value={props.selectValue}
          overrides={{
            ControlContainer: {
              style: {
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
                borderTopRightRadius: "8px",
                borderBottomRightRadius: "8px",
              },
            },
          }}
        />
      </div>
    </div>
  );
}
export default function Example() {
  const [startInputValue, setStartInputValue] = React.useState("");
  const [startSelectValue, setStartSelectValue] = React.useState([]);
  const [endInputValue, setEndInputValue] = React.useState("");
  const [endSelectValue, setEndSelectValue] = React.useState([]);
  return (
    <SearchContainer>
      <FormControl
        overrides={{
          ControlContainer: {
            style: {
              marginBottom: "0",
            },
          },
        }}
      >
        <SelectAtEnd
          inputValue={endInputValue}
          onInputChange={(v) => setEndInputValue(v)}
          selectValue={endSelectValue}
          onSelectChange={(v) => setEndSelectValue(v)}
          options={[
            { id: "AliceBlue", color: "#F0F8FF" },
            { id: "AntiqueWhite", color: "#FAEBD7" },
            { id: "Aqua", color: "#00FFFF" },
          ]}
          id="end-id"
        />
      </FormControl>
    </SearchContainer>
  );
}

const SearchContainer = styled("section", {
  width: "100%",
  padding: "1rem",
  borderRadius: "12px",
  margin: "1rem 0",
  boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)",
});
