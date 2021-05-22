// see https://getbootstrap.com/docs/4.4/components/spinners/
import React from "react";

import { ColorContext } from "./type";

export default ({
  colorContext = "primary",
}: {
  colorContext?: ColorContext;
}) => (
  <div className={`spinner-border text-${colorContext}`} role="status">
    <span className="sr-only">Loading...</span>
  </div>
);
