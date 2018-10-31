
import React from "react";
import ReactDOM from "react-dom";
import './styles/main.scss';
import App from './app';
import { configureStore } from "./store";
import { Provider } from "react-redux";

const store = configureStore();
const Index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
