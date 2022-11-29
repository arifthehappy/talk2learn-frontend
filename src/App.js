/* eslint-disable no-nested-ternary */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import "./styles/main.scss";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import RoomList from "./components/rooms/roomList";
import MeetingRoom from "./components/room-window";
import { ProfileProvider, useProfile } from "./context/profile.context";
import LoaderComp from "./components/Loader";

function App() {
  const { profile, isLoading } = useProfile();
  return (
    <ProfileProvider>
      <Routes>
        <Route path="/rooms" element={<RoomList />} />
        <Route
          path="/room/:id"
          element={
            !profile && isLoading ? (
              <LoaderComp />
            ) : profile ? (
              <MeetingRoom />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="signin"
          element={
            !profile && isLoading ? (
              <LoaderComp />
            ) : !profile ? (
              <SignIn />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/"
          element={
            !profile && isLoading ? (
              <LoaderComp />
            ) : profile ? (
              <Home />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
      </Routes>
    </ProfileProvider>
  );
}

export default App;
