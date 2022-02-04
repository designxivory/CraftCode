import React from "react";
import "./App.css";
import PropTypes from "prop-types";

export default function Layout({ header, main, sidebar }) {
  return (
    <div className="container">
      <header className="header">{header}</header>
      <nav className="sidebar">{sidebar}</nav>
      <main className="main">{main}</main>
    </div>
  );
}

Layout.propTypes = {
  main: PropTypes.element.isRequired,
  header: PropTypes.element,
  sidebar: PropTypes.element
};

