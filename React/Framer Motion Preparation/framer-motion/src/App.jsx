import './App.css';
import Nature from "./images/naturenature.mp4"
import Header from './components/Header';
import Main from "./components/Main"

function App() {
  return (
    <div>
      <Header />
      <video autoPlay loop  style = {{width:"100%",height:"100%" , position:"fixed" , objectFit:"cover", zIndex:"-1"}}>
        <source
          src={Nature}
        />
      </video>
      <div> 
        <Main/>
      </div>
    </div>
  );
}

export default App;
