import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import "@coreui/coreui/scss/coreui.scss";

import TheSidebar from "./components/TheSidebar";
import TheHeader from "./components/TheHeader";
import TheContent from "./components/TheContent";
import TheFooter from "./components/TheFooter";

import icons from "./icons";

React.icons = icons;

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" name="Home" render={props => (
                    <div className="c-app c-default-layout">
                        <TheSidebar/>
                        <div className="c-wrapper">
                            <TheHeader/>
                            <div className="c-body">
                                <TheContent/>
                            </div>
                            <TheFooter/>
                        </div>
                    </div>
                )}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
