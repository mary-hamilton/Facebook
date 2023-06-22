
import Router from "./Router";
import {BrowserRouter} from "react-router-dom";
import AxiosClient from "./firebase-client";

const App = () => {

    return (
        <BrowserRouter>
            <AxiosClient/>
        </BrowserRouter>
    );
};


export default App;
