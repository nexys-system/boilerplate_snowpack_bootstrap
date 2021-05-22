import React from "../../_snowpack/pkg/react.js";
const Nav = (navs) => ({
  option,
  onClick
}) => /* @__PURE__ */ React.createElement("ul", {
  className: "nav nav-tabs"
}, navs.map((nav, i) => /* @__PURE__ */ React.createElement("li", {
  className: "nav-item"
}, /* @__PURE__ */ React.createElement("a", {
  onClick: () => onClick(i),
  className: `nav-link ${i === option ? "active" : ""}`,
  href: "#"
}, nav.name))));
export default Nav;
