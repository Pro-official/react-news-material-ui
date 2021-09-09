import "./App.css";
import { React } from "react";
import { Button } from "@material-ui/core";
import News from "./components/News/News";

function App() {
  return (
    <div>
      <Button color="primary">Hello World</Button>;<News></News>
    </div>
  );
}

export default App;
