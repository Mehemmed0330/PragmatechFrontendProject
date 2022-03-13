import './App.css';
import Header from './components/Header';
import Main from "./components/Main"
import Collection from "./components/Collection"
import Items from "./components/Items"

function App() {
  return (
    <>
      <Header />

      <div>
        <Main />
      </div>

      <Collection />
      <Items />

    </>
  );
}

export default App;
