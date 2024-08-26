import dictionary from "../src/dictionary.PNG";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={dictionary} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="App-footer">
        <small>Coded by Vivian Nguyen</small>
      </footer>
    </div>
  );
}
