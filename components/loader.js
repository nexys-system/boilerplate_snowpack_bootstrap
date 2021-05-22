import React from "../_snowpack/pkg/react.js";
export default ({
  colorContext = "primary"
}) => /* @__PURE__ */ React.createElement("div", {
  className: `spinner-border text-${colorContext}`,
  role: "status"
}, /* @__PURE__ */ React.createElement("span", {
  className: "sr-only"
}, "Loading..."));
