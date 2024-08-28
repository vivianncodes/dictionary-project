import dictionary from "../src/dictionary.PNG";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="row align-items-center justify-content-center">
            <div className="col-3">
              <img src={dictionary} className="App-logo img-fluid" alt="logo" />
            </div>
            <div className="col-4 dictionary-header">
              <h1>
                English
                <br />
                Dictionary
              </h1>
            </div>
          </div>
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="App-footer">
        <small>
          Coded by Vivian Nguyen and is{" "}
          <a
            href="https://github.com/vivianncodes/dictionary-project"
            target="_blank"
            rel="noreferrer noopener"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://dictionary-vivianncodes.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            hosted on Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}
