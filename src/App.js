// import { Button, LensProvider } from "@ib/nebula-system";
import { LensProvider, Button } from "@ib/nebula-system";

import logo from "./logo.svg";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App ">
      <LensProvider>
        <header className="App-header ">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="bg-customColor">
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button variant={"positive"}>Nebula Button</Button>
          <div className="black-fade-50 border border-solid border-customColor">
            Normal Div color
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </LensProvider>
    </div>
  );
}

export default App;
