import React from "react";
import { NavbarBrand, Navbar, Nav, NavItem, NavLink } from "reactstrap";
import navlogo from "./yield.svg";
import "./App.css";
function NavBar() {
  return (
    <div className="nav">
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <img
            src={navlogo}
            width="30"
            height="30"
            className="nav-logo"
            alt="logo"
          />
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/stocks">Stocks</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
