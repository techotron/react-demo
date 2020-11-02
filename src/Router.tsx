import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

function Router(): any {
    return (
        <div>
            <BrowserRouter>
                <Route exact
                    path='/'
                    render={() => <span><h1>Welcome to React Demo!</h1></span>}
                />
            </BrowserRouter>
        </div>
    );
}

export default Router;
