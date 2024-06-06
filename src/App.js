import "./input.css";
import "./App.css"
import { changeTheme } from "./themeChange";

function App() {
  return (
    <div className="container screen-bg-color w-screen h-screen">
      <button type="button" className="m-auto font-bold shadow-lg rounded  p-4  absolute  top-2/4 left-2/4 bg-color" onClick={changeTheme}>change Theme</button>
    </div>
  );
}

export default App;
