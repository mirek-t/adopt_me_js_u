import React from "react";

export default function Pet(props) {
  return React.createElement("div", {}, [
    React.createElement("h2", { key: 1 }, props.name),
    React.createElement("h3", { key: 2 }, props.animal),
    React.createElement("h3", { key: 3 }, props.breed),
  ]);
}
