import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // ✅ Import the App component

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root") // ✅ Make sure index.html has this ID
);

