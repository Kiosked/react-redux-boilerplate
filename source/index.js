import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import store from "./redux/index.js";
import history from "./redux/history.js";
import SamplePage from "./containers/SamplePage.js";

// Import the base SASS which can be used to style elements not created
// by the react application:
import "./styles/base.sass";

// Render the application into the DOM
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Fragment>
                <Route exact path="/" component={SamplePage} />
                {/*<Route path="/page/:id/item" component={SomePage} />*/}
            </Fragment>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);
