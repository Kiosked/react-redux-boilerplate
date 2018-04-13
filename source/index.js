import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import store from "./redux/index.js";
import history from "./redux/history.js";
import SamplePage from "./containers/SamplePage.js";

import "./styles/base.sass";

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
