import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import PhoneIcon from "@rsuite/icons/Phone";
import { Panel, Button, FlexboxGrid, Grid, Row, Col } from "rsuite";
import LoaderComp from "../Loader";
import { useRooms } from "../../context/rooms-context";
import { database } from "../../misc/firebase";
import { transformToArrWithId } from "../../misc/helpers";

const RoomList = () => {
  const [rooms, setRooms] = React.useState([]);

  const { id } = useParams();

  const [roomsList, setRoomsList] = useState(null);

  useEffect(() => {
    const roomListRef = database.ref("rooms");

    roomListRef.on("value", (snap) => {
      console.log("snap", snap);
      const data = transformToArrWithId(snap.val());
      setRooms(data);
      console.log("roomList", roomsList);
    });
    return () => {
      roomListRef.off();
    };
  }, []);

  const renderRooms = useCallback(() => {
    return rooms.map((room) => {
      return (
        <Panel
          key={room.id}
          header={room.name}
          bordered
          className="room-list-item"
        >
          <FlexboxGrid justify="space-between">
            <FlexboxGrid.Item>
              <span>Created 1 Hour ago</span>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item>
              <Button color="green" appearance="ghost">
                <PhoneIcon />
              </Button>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Panel>
      );
    });
  }, [rooms]);

  // const getRooms = useCallback(async () => {
  //   // const { data } = await axios.get("http://localhost:3001/rooms");
  //   setInterval(async () => {
  //     await axios
  //       .get(`http://localhost:3001/rooms`)
  //       .then((res) => {
  //         if (res.status === 200) {
  //           console.log(res.data);
  //           // save the data to array
  //           setRooms(res.data);
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   }, 10000);
  // }, []);

  // useEffect(() => {
  //   getRooms();

  //   // axios
  //   //   .get(`http://localhost:3001/rooms`)
  //   //   .then((res) => {
  //   //     if (res.status === 200) {
  //   //       console.log(res.data);
  //   //       // save the data to array
  //   //       setRooms(res.data);
  //   //     }
  //   //   })
  //   //   .catch((err) => console.log(err));
  // }, [getRooms]);

  const frontend = "http://localhost:3000";

  const domain = `${frontend}/room`;
  const goto = (roomId) => {
    window.open(`${domain}/${roomId}`, "_blank");
  };

  return (
    <div className="room-list">
      <div className="room-list__header">
        <h1>.</h1>
      </div>
      <div className="room-list__body">
        {!rooms && <LoaderComp />}
        <Grid fluid>
          <Row>
            {rooms &&
              rooms.map((room) => (
                <Col xs={24} sm={24} md={8} key={room.name}>
                  <Panel
                    header={room.name}
                    shaded
                    style={{
                      backgroundColor: "rgba(227,235,225,1)",
                      margin: "5px",
                    }}
                  >
                    <p>{room.language}</p>
                    <p>{room.level}</p>
                    <p>{room.description}</p>
                    <FlexboxGrid justify="center">
                      <FlexboxGrid.Item>
                        <Button
                          appearance="primary"
                          onClick={() => goto(room.link)}
                        >
                          <PhoneIcon /> Join and Talk Now
                        </Button>
                      </FlexboxGrid.Item>
                    </FlexboxGrid>
                  </Panel>
                </Col>
              ))}
          </Row>
        </Grid>
      </div>
    </div>
  );
};

export default RoomList;

// Path: frontend\t2l_client\src\components\room-window\video-grid\index.js
