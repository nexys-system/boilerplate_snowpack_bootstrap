import React from "react";

const Nav =
  (navs: { name: string }[]) =>
  ({
    option,
    onClick,
  }: {
    option: number;
    onClick: (option: number) => void;
  }) =>
    (
      <ul className="nav nav-tabs">
        {navs.map((nav, i) => (
          <li className="nav-item">
            <a
              onClick={() => onClick(i)}
              className={`nav-link ${i === option ? "active" : ""}`}
              href="#"
            >
              {nav.name}
            </a>
          </li>
        ))}
      </ul>
    );

export default Nav;
