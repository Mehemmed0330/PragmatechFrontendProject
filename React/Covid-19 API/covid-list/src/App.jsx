import './App.css';
import UseFetch from "./components/UseFetch"
import House from "./components/House"

function App() {
  const {data,setData} = UseFetch()
  return (
    <main>
    <input
      type="text"
      placeholder="Type your favorite house"
      value={data.slug}
      onChange={(e) => setData({ ...data, slug: e.target.value })}
    />
    <br />
    {data.results.length > 0 ? <House family={data.results[0]} /> : null}
  </main>
  );
}

export default App;
