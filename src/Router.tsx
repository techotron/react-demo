import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

declare const window: any;

function Router(): any {
    return (
        <div>
            <BrowserRouter>
                <Route exact
                    path='/'
                    render={() =>
                        <span>
                            <h1>Welcome to React Demo!</h1>
                            <h3>API_URL: {window._env_.REACT_APP_API_URL}</h3>
                        </span>
                    }
                />
            </BrowserRouter>
        </div>
    );
}

export default Router;
