import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default function UserSettingItem(props) {
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">{props.itemText}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder={props.valueText}
          aria-label={props.valueText}
          aria-describedby="basic-addon1"
          value={props.valueText}
        />
      </InputGroup>
    </div>
  );
}
