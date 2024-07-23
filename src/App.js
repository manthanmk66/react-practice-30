import logo from "./logo.svg";
import "./App.css";
import One from "./components/One";
import Two from "./components/Two";
import Four from "./components/Four";
import Five from "./components/Five";
import Six from "./components/Six";
import Seven from "./components/Seven";
import Eight from "./components/Eight";
import Nine from "./components/Nine";
import Ten from "./components/Ten";
import Eleven from "./components/eleven";
import Tweleve from "./components/Tweleve";
import Thirteen from "./components/Thirteen";
import Fifteen from "./components/Fifteen";
import Sixteen from "./components/Sixteen";
import Sevnteen from "./components/Seventeen";
import Eighteen from "./components/Eighteen";
import Nineteen from "./components/Nineteen";
import NineteenComp from "./components/TwentyComp";
import Twenty from "./components/Twenty";
import TwentyComp from "./components/TwentyComp";
import { ThemeProvider } from "./components/ThemeContext";
function App() {
  // const items = [
  //   "Item 1",
  //   "Item 2",
  //   "Item 3",
  //   "Another Item",
  //   "Another Item 2",
  // ];
  return (
    <div className="App">
      {/* <One />
      <Two />
      <Four />
      <Five />
      <Six />
      <Seven />
      <Eight />
      <Nine /> */}
      {/* <Ten />
      <Eleven/> */}
      {/* <Tweleve /> */}
      {/* <Thirteen/> */}
      {/* <Fifteen/> */}
      {/* <Sixteen items={items} /> */}
      {/* <Sevnteen items={items} itemsPerPage={2} /> */}
      {/* <Eighteen/> */}
      <ThemeProvider>
        <div>
          <Twenty />
          <TwentyComp />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
