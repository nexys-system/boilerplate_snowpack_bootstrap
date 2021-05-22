import React from "react";

import Footer from "./footer";
import Header from "./header";

import { BrowserRouter as Router } from "react-router-dom";
import { basename } from "../config";

function Layout({ children }: { children: any }) {
  return (
    <Router basename={basename}>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <main className="flex-fill">
          <div className="container">{children} </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
  return (
    <Router basename={basename}>
      <Header />

      <div className="container">{children}</div>
      <Footer />
    </Router>
  );
}
export default Layout;
