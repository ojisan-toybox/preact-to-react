import { h } from "preact";
import { useState } from "preact/hooks";

export const Component = (props) => {
  const [preactValue] = useState("preact");
  return (
    <div>
      {props.message}
      <button onClick={props.handleState}>state change</button>
      <button onClick={() => props.getPreactMessage(preactValue)}>
        get preact value
      </button>
    </div>
  );
};
