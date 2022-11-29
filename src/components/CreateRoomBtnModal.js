import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  Button,
  Modal,
  Form,
  Schema,
  Message,
  Input,
  Dropdown,
  SelectPicker,
} from "rsuite";
import PlusRoundIcon from "@rsuite/icons/PlusRound";
import axios from "axios";
import firebase from "firebase/compat/app";
import { io } from "socket.io-client";
import { auth, database } from "../misc/firebase";
import { useProfile } from "../context/profile.context";
import { useModalState } from "../misc/custom-hooks";
import { languagesData } from "../misc/helpers";

const ShortUniqueId = require("short-unique-id");

const levelData = [
  { label: "Beginner", value: "Beginner" },
  { label: "Intermediate", value: "Intermediate" },
  { label: "Advanced", value: "Advanced" },
];

const Textarea = React.forwardRef((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
));

const SelectPickerComponent = React.forwardRef((props, ref) => (
  <SelectPicker {...props} ref={ref} />
));

const { StringType } = Schema.Types;
const model = Schema.Model({
  name: StringType().isRequired("Room name is required"),
  language: StringType().isRequired("language is required"),
  level: StringType().isRequired("level is required"),
  description: StringType().isRequired("description is required"),
});

const INITIAL_FORM = {
  name: "",
  language: "",
  level: "",
  description: "",
};

let socket;

const CreateRoomBtnModal = () => {
  const { isOpen, close, open } = useModalState();
  const [openButton, setOpenButton] = useState(false);
  const [formValue, setFormValue] = useState(INITIAL_FORM);
  const [isLoading, setIsLoading] = useState(false);
  const [startCamera, setStartCamera] = useState(false);
  const [activeUsers, setActiveUsers] = useState([]); // array of active users
  const { profile } = useProfile();
  const formRef = useRef();
  const [levelPlacement, setLevelPlacement] = React.useState("");
  const [languagePlacement, setLanguagePlacement] = React.useState("");

  const uid = new ShortUniqueId({
    length: 16,
    stamp: 36,
  });

  const onFormChange = useCallback((value) => {
    setFormValue(value);
  }, []);

  const handleButtonClick = () => {
    open();
    // socket = io("http://localhost:3001", { transports: ["websocket"] });
    // socket.on("connect", () => {
    //   console.log("connected");
    // });
    // socket.on("room-users", (users) => {
    //   console.log("active users", users);
    //   setActiveUsers(users);
    // });
  };

  // const joinRoom = () => {
  //   socket.emit("join-room", {
  //     roomId: formValue.name,
  //     userName: profile.name,
  //   });
  // };

  const onSubmit = async () => {
    const roomUid = uid.randomUUID(16);
    // socket.emit("join-room", {
    //   roomId: roomUid,
    //   roomName: formValue.name,
    //   userName: profile.name,
    //   language: formValue.language,
    //   level: formValue.level,
    //   description: formValue.description,
    // });
    // console.log(
    //   formValue.name,
    //   formValue.language,
    //   formValue.level,
    //   formValue.description
    // );

    console.log(roomUid);
    // console.log(uid.parseStamp(roomUid));

    setIsLoading(false);
    setFormValue(INITIAL_FORM);
    setLevelPlacement("");
    setLanguagePlacement("");

    close();

    if (formRef.current.check()) {
      setIsLoading(true);

      const newRoomdata = {
        ...formValue,
        createdBy: profile.uid,
        link: `${roomUid}`,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        admins: {
          [profile.uid]: true,
        },
      };

      axios
        .get(`http://localhost:3001/room/${roomUid}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      try {
        await database.ref("rooms").push(newRoomdata);
        Message.info(`${formValue.name} has been created`, 4000);
        setIsLoading(false);
        setFormValue(INITIAL_FORM);

        close();
      } catch (error) {
        setIsLoading(false);
        Message.error(error.message, 4000);
      }
    }

    // redirecting to new room page in new tab
    // window.open(`${domain}/${roomUid}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-2">
      <Button block onClick={handleButtonClick} appearance="primary">
        <PlusRoundIcon className="mr-1" />
        Create a New Room
      </Button>

      <Modal
        open={isOpen}
        onClose={close}
        aria-labelledby="modal-title"
        aria-describedby="modal-language"
      >
        <Modal.Header>
          <Modal.Title id="modal-title">Create a New room</Modal.Title>
        </Modal.Header>
        <Modal.Body id="modal-language">
          <Form
            fluid
            onChange={onFormChange}
            formValue={formValue}
            model={model}
            ref={formRef}
            layout="inline"
          >
            <Form.Group>
              <Form.ControlLabel>Room name</Form.ControlLabel>
              <Form.Control name="name" placeholder="Enter room Topic..." />
            </Form.Group>

            <Form.Group>
              <Form.ControlLabel>Language</Form.ControlLabel>
              <Form.Control
                accepter={SelectPickerComponent}
                name="language"
                value={languagePlacement}
                placeholder="Select a Language"
                data={languagesData}
                cleanable={false}
                onChange={setLanguagePlacement}
              />
            </Form.Group>
            <Form.Group>
              {" "}
              <Form.ControlLabel>Level</Form.ControlLabel>
              <Form.Control
                accepter={SelectPickerComponent}
                name="level"
                value={levelPlacement}
                placeholder="Select a Level"
                data={levelData}
                cleanable={false}
                onChange={setLevelPlacement}
              />
            </Form.Group>

            <Form.Group>
              <Form.ControlLabel>Description</Form.ControlLabel>
              <Form.Control
                // classPrefix="textarea"
                accepter={Textarea}
                rows={3}
                name="description"
                placeholder="Enter room Description..."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            block
            appearance="primary"
            disabled={
              isLoading ||
              !formValue.name ||
              !formValue.language ||
              !formValue.level ||
              !formValue.description
            }
            onClick={onSubmit}
          >
            Create new chat room
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateRoomBtnModal;
