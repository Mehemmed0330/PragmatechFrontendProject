import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import News from "./components/News";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Login /> */}
      <News
        title={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, pariatur?"
        }
        text={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque tempora autem, aliquam illum veritatis cumque."
        }
        img={
          "https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/10059/production/_122652656_whatsubject.jpg"
        }
      />
    </div>
  );
}

export default App;
