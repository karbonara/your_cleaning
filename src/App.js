import Main from "./Pages/Main";
import './App.css';
import NavMenu from "./components/nav/Nav";

function App() {
  return (
    <div className="app">
      <NavMenu />
      <Main />
    </div>
  );
}

export default App;
