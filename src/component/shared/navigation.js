import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Store from "../home/store";
import MainScreen from "../home/main";
import Order from "../home/order";
export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/store" element={<Store />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}
