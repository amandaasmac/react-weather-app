import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Rome" />
      <footer>
        <small>
          <a
            href="https://github.com/amandaasmac/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>{" "}
          by Amanda Machado
        </small>
      </footer>
    </div>
  );
}
