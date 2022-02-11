import './App.css';
import First from "./components/First"

function App() {
  return (
    <div>
      <First />
      <First text = {data.map(element =>{
        return <div key={element.id}>
          {element.id ===1 ? element.name :undefined}
        </div>
      })}/>
    </div>
  );
}

export default App;


const data = [
  {id:1 , name:"Muhammad" , age:18},
  {id:2 , name:"Ali" , age:19}

]