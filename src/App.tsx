import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestinvoice } from "./store/action";
import "./App.scss";
import Invoice from "./invoice/invoice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestinvoice());
  });

  return (
    <>
      <Invoice/>
    </>
  );
};

export default App;