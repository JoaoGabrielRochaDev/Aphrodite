import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import BaseLayout from "../layouts/BaseLayout";
import Feed from "../components/Feed";
import CreatePost from "../components/CreatePost";
export default function PageRoutes() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/createPost" element={<CreatePost />} />
      </Route>
    </Routes>
  );
}
