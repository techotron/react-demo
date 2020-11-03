import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

const localIpUrl = require('local-ip-url');

function Router(): any {
    return (
        <div>
            <BrowserRouter>
                <Route exact
                    path='/'
                    render={() =>
                        <span>
                            <h1>Welcome to React Demo!</h1>
                            <h3>IP Address: <b>{localIpUrl()}</b></h3>
                        </span>
                    }
                />
            </BrowserRouter>
        </div>
    );
}

export default Router;
