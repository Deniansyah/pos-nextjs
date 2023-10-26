"use client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistedStore } from "../store";

const ReduxProvider = ({children}) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>{children}</PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
