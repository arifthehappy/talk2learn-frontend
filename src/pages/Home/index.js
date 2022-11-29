import React from "react";
import CreateRoomBtnModal from "../../components/CreateRoomBtnModal";
import CustomNavbar from "../../components/Navbar/Navbar";
import RoomList from "../../components/rooms/roomList";
import { useRooms } from "../../context/rooms-context";

const Home = () => {
  const roomsList = useRooms();
  console.log("roomsList", roomsList);
  return (
    <div>
      <CustomNavbar />
      <CreateRoomBtnModal />
      <RoomList />
    </div>
  );
};

export default Home;
