import * as React from "react";
import { useStyletron, styled } from "baseui";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Select } from "baseui/select";
import { Search } from "baseui/icon";

function SelectAtEnd(props) {
  const [css] = useStyletron();
  return (
    <div className={css({ display: "flex" })}>
      <Input
        startEnhancer={<Search size="18px" />}
        onChange={(e) => props.onInputChange(e.target.value)}
        value={props.inputValue}
        id={props.id}
        placeholder="Try 'Robots'"
      />
      <div className={css({ width: "200px", paddingLeft: "8px" })}>
        <Select
          options={props.options}
          labelKey="id"
          valueKey="color"
          onChange={({ value }) => props.onSelectChange(value)}
          value={props.selectValue}
        />
      </div>
      <div className={css({ width: "200px", paddingLeft: "8px" })}>
        <Select
          options={props.options}
          labelKey="id"
          valueKey="color"
          onChange={({ value }) => props.onSelectChange(value)}
          value={props.selectValue}
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
      <FormControl>
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
  padding: "1rem 1rem 0 1rem",
  borderRadius: "12px",
  margin: "1rem 0",
  boxShadow: "4px 4px 24px rgba(0, 0, 0, 0.25)",
});
