import React from "react";
import { Navbar, Nav, Tooltip, Whisper } from "rsuite";
import UserBadgeIcon from "@rsuite/icons/UserBadge";
import "rsuite/dist/rsuite.min.css";
import customColor from "../../colors";
import ProfileButton from "./ProfileButton";

const CustomNavbar = ({ onSelect, activeKey, ...props }) => {
  return (
    <Navbar
      {...props}
      appearance="subtle"
      className="colored-border bg-secondary-05"
    >
      <Navbar.Brand href="/" style={{ color: customColor.primary }}>
        Talk2Learn
      </Navbar.Brand>
      <Nav pullRight className="mr-3">
        <ProfileButton />
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
