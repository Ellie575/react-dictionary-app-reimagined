import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary App</h1>
        <main>
          <Dictionary />
        </main>
        <footer>
          Code is{" "}
          <a
            href="https://github.com/Ellie575/react-dictionary-app-reimagined"
            target="_blank"
            rel="noreferrer"
          >
            opensourced
          </a>{" "}
          and written by Ellie Kubo
        </footer>
      </div>
    </div>
  );
}

export default App;
