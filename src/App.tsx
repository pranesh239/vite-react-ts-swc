import "./App.css";
import { useTime } from "./hooks";

function App() {
  const time = useTime();
  return <div data-testid="myDiv">{time}</div>;
}

export default App;
