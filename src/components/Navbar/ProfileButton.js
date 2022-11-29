import React, { useCallback } from "react";
import {
  Dropdown,
  Nav,
  ButtonToolbar,
  Popover,
  IconButton,
  Whisper,
  ButtonGroup,
  Button,
  Message,
} from "rsuite";
import PlusIcon from "@rsuite/icons/Plus";

import ArrowDownIcon from "@rsuite/icons/ArrowDown";
import ProfileAvatar from "../ProfileAvatar";
import {
  isOfflineForDatabase,
  useProfile,
} from "../../context/profile.context";
import { auth, database } from "../../misc/firebase";

const renderMenu = ({ onClose, left, top, className }, ref) => {
  const handleSelect = (eventKey) => {
    onClose();
    console.log(eventKey);
  };
  return (
    <Popover ref={ref} className={className} style={{ left, top }} full>
      <Dropdown.Menu onSelect={handleSelect}>
        <Dropdown.Menu title="New File">
          <Dropdown.Item eventKey={1}>New File</Dropdown.Item>
          <Dropdown.Item eventKey={2}>
            New File with Current Profile
          </Dropdown.Item>
        </Dropdown.Menu>
        <Dropdown.Item eventKey={3}>Download As...</Dropdown.Item>
        <Dropdown.Item eventKey={4}>Export PDF</Dropdown.Item>
        <Dropdown.Item eventKey={5}>Export HTML</Dropdown.Item>
        <Dropdown.Item eventKey={6}>Settings</Dropdown.Item>
        <Dropdown.Item eventKey={7}>About</Dropdown.Item>
      </Dropdown.Menu>
    </Popover>
  );
};

const ProfileButton = () => {
  const { profile } = useProfile();

  const onSignOut = useCallback(() => {
    database
      .ref(`/status/${auth.currentUser.uid}`)
      .set(isOfflineForDatabase)
      .then(() => {
        auth.signOut();

        <Message showIcon type="success">
          You have signed out successfully.
        </Message>;
      })
      .catch((error) => {
        <Message showIcon type="success">
          {error.message}
        </Message>;
      });
  }, []);

  return (
    <Nav.Menu
      title={
        <ProfileAvatar
          src={profile.avatar}
          name={profile.name}
          className="width-5 height-5 text-black "
          alt={profile.name}
          size="sm"
        />
      }
      placement="bottomEnd"
    >
      <Nav.Item panel style={{ padding: 10, width: 160 }}>
        <p>Signed in as</p>
        <strong>{profile.name}</strong>
      </Nav.Item>
      <Nav.Item divider />
      <Nav.Item>Your profile</Nav.Item>
      <Nav.Item>Following</Nav.Item>
      <Nav.Item>Friends</Nav.Item>
      <Nav.Item divider />
      <Nav.Item>Help</Nav.Item>
      <Nav.Item>Settings</Nav.Item>
      <Nav.Item onClick={onSignOut}>Sign out</Nav.Item>
    </Nav.Menu>
  );
};

export default ProfileButton;
