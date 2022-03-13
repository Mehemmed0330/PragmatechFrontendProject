import React, { FormEvent } from 'react';
import { useEffect, useState } from "react"
import UniComponent from "./UniComponent"
import './App.css';
import  IUni  from './IUni';

function App() {
  const [uniFound, setUniFound] = useState<IUni[]>([])
  const [uniSearch, setUniSearch] = useState('')

  const searchForUnis =async (query:string):Promise<IUni[]> => {
    const result = await fetch(`http://universities.hipolabs.com/search?name=${query}`)
    return (await result.json())
  }

  const search = async (event: FormEvent <HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.querySelector("#searchText") as HTMLInputElement
    setUniFound(await searchForUnis(input.value))
  }

  // useEffect(() => {
  //   (async () => {
  //     const query = encodeURIComponent(uniSearch);
  //     if (query) {
  //       const response = await searchForUnis(query);
  //       console.log(response)
  //     setUniFound(response)
  //     }
      
  //   })();
  // }, [uniSearch])

  
  return (
    <div className="App">
      <h1>Uni name search</h1>
      <form action="" onSubmit={event => search(event)}>
        <input type="text" name="" id="searchText" />
        <button>Click</button>
      </form>
      {uniSearch && <p>Results for {uniSearch}...</p>}
      <div style = {{border:"1px solid black" , height:"30px"}}>
        {uniFound.map(uni =>
         <UniComponent key = {uni.country} uni = {uni}/>
        )
        }
      </div>
    </div>
  );
}

export default App;
