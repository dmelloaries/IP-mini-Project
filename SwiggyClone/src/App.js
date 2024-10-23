import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
//import resList from "./utils/MockData";
import { Provider } from "react-redux";
import store from "./utils/store";


const AppLayout = () => {
  return (
    <Provider store={store}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};

export default AppLayout;
