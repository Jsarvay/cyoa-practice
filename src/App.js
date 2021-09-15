import AdventureBox from "./Adventure/index"
import './App.css';

const messages = [
  "Welcome Traveler", 
  "Rest a While won't you.",
  "Or Not, whatever."
]

function App() {
  return (
    <div className="App">
      <AdventureBox messages={messages} />
    </div>
  );
}

export default App;
