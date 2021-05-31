import logo from "./logo.svg";
import "./App.css";
import Button from "../src/components/Button/Button";
import But1 from "./components/ButtonF/But1";
import But2 from "./components/ButtonF/But2";
import { PrimarySubscription } from "./components/Subscription/Subscription.stories";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <But1 />
        <But2 />
        <Button variant="secondary">hi</Button>
      </header>
      <PrimarySubscription />
    </div>
  );
}

export default App;
