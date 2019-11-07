import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import {reducer} from "./reducers";

import "bulma/css/bulma.css";
import "./styles.scss";

// temp to see the page again, remv later 
// temp to see the page again, remv later 
// temp to see the page again, remv later 

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);
